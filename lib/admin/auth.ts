import 'server-only'
import crypto from 'crypto'
import { cookies } from 'next/headers'

export const ADMIN_SESSION_COOKIE = 'admin_session'

export function isAdminEnabled(): boolean {
  // The admin panel only ever runs under `next dev`. In any production
  // build (including on Vercel) this is always false, so the routes,
  // middleware guard, and server actions all refuse to do anything.
  return process.env.NODE_ENV === 'development'
}

function getSecret(): string {
  const password = process.env.ADMIN_PASSWORD
  if (!password) {
    throw new Error(
      'ADMIN_PASSWORD is not set. Add ADMIN_PASSWORD=your-password to .env.local to use the admin panel.'
    )
  }
  return password
}

export function computeSessionToken(): string {
  return crypto.createHmac('sha256', getSecret()).update('admin-session').digest('hex')
}

export function checkPassword(candidate: string): boolean {
  const password = getSecret()
  const a = Buffer.from(candidate)
  const b = Buffer.from(password)
  if (a.length !== b.length) return false
  return crypto.timingSafeEqual(a, b)
}

export async function createSession() {
  const store = await cookies()
  store.set(ADMIN_SESSION_COOKIE, computeSessionToken(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
}

export async function destroySession() {
  const store = await cookies()
  store.delete(ADMIN_SESSION_COOKIE)
}

export async function hasValidSession(): Promise<boolean> {
  if (!isAdminEnabled()) return false
  const store = await cookies()
  const token = store.get(ADMIN_SESSION_COOKIE)?.value
  if (!token) return false
  try {
    return token === computeSessionToken()
  } catch {
    return false
  }
}

export async function requireAdmin() {
  if (!isAdminEnabled()) {
    throw new Error('The admin panel is only available when running locally with `npm run dev`.')
  }
  const ok = await hasValidSession()
  if (!ok) {
    throw new Error('Not signed in.')
  }
}
