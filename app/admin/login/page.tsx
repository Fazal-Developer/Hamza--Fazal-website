'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { Lock, AlertCircle } from 'lucide-react'
import { loginAction } from './actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3 text-xs font-bold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {pending ? 'Signing in...' : 'Sign In'}
    </button>
  )
}

export default function AdminLoginPage() {
  const [state, formAction] = useActionState(loginAction, null)

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-5 pt-16">
      <div className="w-full max-w-sm space-y-6 rounded-3xl border border-border bg-card p-8 shadow-xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-accent">
            <Lock className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Admin Panel</h1>
            <p className="mt-1 text-xs text-muted-foreground">Local content editor. Sign in to continue.</p>
          </div>
        </div>

        <form action={formAction} className="space-y-4">
          {state?.error && (
            <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-bold text-red-600 dark:text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{state.error}</span>
            </div>
          )}

          <div>
            <label htmlFor="password" className="mb-1.5 block text-xs font-bold text-foreground">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
            />
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  )
}
