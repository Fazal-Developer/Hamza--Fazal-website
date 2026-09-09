'use client'

import { useActionState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Field, TextAreaField, ListField } from '@/components/admin/fields'
import { SubmitButton } from '@/components/admin/submit-button'
import type { ServiceItem } from '@/lib/data'
import { saveServiceAction } from './actions'

const ICON_OPTIONS = ['Smartphone', 'Globe', 'Layout', 'Flame', 'TrendingUp', 'Zap']

export function ServiceForm({ initial }: { initial?: ServiceItem }) {
  const [state, formAction] = useActionState(saveServiceAction, null)

  return (
    <form action={formAction} className="space-y-5 rounded-2xl border border-border bg-card p-6">
      <input type="hidden" name="originalId" value={initial?.id ?? ''} />

      {state?.error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-bold text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Title" name="title" defaultValue={initial?.title} required />
        <Field label="ID (slug)" name="id" defaultValue={initial?.id} required placeholder="new-service" />
        <div>
          <label htmlFor="iconName" className="mb-1.5 block text-xs font-bold text-foreground">
            Icon
          </label>
          <select
            id="iconName"
            name="iconName"
            defaultValue={initial?.iconName ?? 'Zap'}
            className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
          >
            {ICON_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <TextAreaField label="Description" name="description" defaultValue={initial?.description} rows={3} required />
      <ListField label="Deliverables" name="deliverables" defaultValue={initial?.deliverables} rows={5} />
      <ListField label="SEO Keywords" name="keywords" defaultValue={initial?.keywords} rows={3} />

      <SubmitButton label={initial ? 'Save Changes' : 'Create Service'} />
    </form>
  )
}
