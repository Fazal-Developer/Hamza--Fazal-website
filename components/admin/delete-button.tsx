'use client'

import { useTransition } from 'react'
import { Trash2 } from 'lucide-react'

export function DeleteButton({
  action,
  confirmMessage = 'Delete this item? This cannot be undone.',
}: {
  action: () => Promise<void>
  confirmMessage?: string
}) {
  const [pending, startTransition] = useTransition()

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => {
        if (window.confirm(confirmMessage)) {
          startTransition(() => {
            action()
          })
        }
      }}
      className="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-bold text-red-600 transition-colors hover:bg-red-500/20 disabled:opacity-50 dark:text-red-400"
    >
      <Trash2 className="h-3.5 w-3.5" />
      {pending ? 'Deleting...' : 'Delete'}
    </button>
  )
}
