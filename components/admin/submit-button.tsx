'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton({ label = 'Save Changes' }: { label?: string }) {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-xs font-bold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
    >
      {pending ? 'Saving...' : label}
    </button>
  )
}
