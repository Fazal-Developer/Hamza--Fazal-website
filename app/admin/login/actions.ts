'use server'

import { redirect } from 'next/navigation'
import { checkPassword, createSession, destroySession, isAdminEnabled } from '@/lib/admin/auth'

export async function loginAction(_prevState: { error: string } | null, formData: FormData) {
  if (!isAdminEnabled()) {
    return { error: 'The admin panel only works while running the site locally with npm run dev.' }
  }

  const password = String(formData.get('password') || '')

  let valid = false
  try {
    valid = checkPassword(password)
  } catch (e) {
    return { error: e instanceof Error ? e.message : 'Server is missing ADMIN_PASSWORD.' }
  }

  if (!valid) {
    return { error: 'Incorrect password.' }
  }

  await createSession()
  redirect('/admin')
}

export async function logoutAction() {
  await destroySession()
  redirect('/admin/login')
}
