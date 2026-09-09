'use client'

import { useActionState } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { Field, TextAreaField, ListField, SelectField } from '@/components/admin/fields'
import { SubmitButton } from '@/components/admin/submit-button'
import { DeleteButton } from '@/components/admin/delete-button'
import type { ExperienceItem } from '@/lib/data'
import { saveExperienceAction, deleteExperienceAction } from './actions'

const CATEGORIES = ['Education', 'Software Engineering', 'Projects', 'Digital Marketing', 'Freelance / Client Work']

export function ExperienceForm({ index, initial }: { index?: number; initial?: ExperienceItem }) {
  const [state, formAction] = useActionState(saveExperienceAction, null)

  return (
    <form action={formAction} className="space-y-4 rounded-2xl border border-border bg-card p-6">
      <input type="hidden" name="index" value={index ?? ''} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Period" name="period" defaultValue={initial?.period} required placeholder="2023 — Present" />
        <SelectField label="Category" name="category" defaultValue={initial?.category ?? 'Software Engineering'} options={CATEGORIES} />
        <Field label="Role" name="role" defaultValue={initial?.role} required />
        <Field label="Organization" name="organization" defaultValue={initial?.organization} required />
      </div>

      <TextAreaField label="Description" name="description" defaultValue={initial?.description} rows={2} required />
      <ListField label="Highlights" name="highlights" defaultValue={initial?.highlights} rows={4} />

      {state?.error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-bold text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.error}
        </div>
      )}
      {state?.ok && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-4 w-4" />
          Saved.
        </div>
      )}

      <div className="flex items-center gap-3">
        <SubmitButton label={initial ? 'Save Entry' : 'Add Entry'} />
        {typeof index === 'number' && (
          <DeleteButton action={deleteExperienceAction.bind(null, index)} confirmMessage={`Delete "${initial?.role}"?`} />
        )}
      </div>
    </form>
  )
}
