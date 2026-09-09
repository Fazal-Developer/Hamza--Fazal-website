'use client'

import { useActionState } from 'react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { Field } from '@/components/admin/fields'
import { SubmitButton } from '@/components/admin/submit-button'
import { DeleteButton } from '@/components/admin/delete-button'
import type { SkillCategory } from '@/lib/data'
import { saveSkillCategoryAction, deleteSkillCategoryAction } from './actions'

function skillsToLines(skills: SkillCategory['skills']): string {
  return skills.map((s) => `${s.name} | ${s.level}`).join('\n')
}

export function SkillCategoryForm({ index, initial }: { index?: number; initial?: SkillCategory }) {
  const [state, formAction] = useActionState(saveSkillCategoryAction, null)

  return (
    <form action={formAction} className="space-y-4 rounded-2xl border border-border bg-card p-6">
      <input type="hidden" name="index" value={index ?? ''} />

      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-4">
          <Field label="Category Name" name="category" defaultValue={initial?.category} required placeholder="ANDROID DEVELOPMENT" />
          <div>
            <label htmlFor={`skills-${index}`} className="mb-1.5 block text-xs font-bold text-foreground">
              Skills <span className="font-normal text-muted-foreground">(one per line, format: Name | Level)</span>
            </label>
            <textarea
              id={`skills-${index}`}
              name="skills"
              rows={8}
              defaultValue={initial ? skillsToLines(initial.skills) : ''}
              placeholder={'Java | Core\nAndroid Studio | Core\nFirebase | Strong'}
              className="w-full rounded-xl border border-border bg-background px-4 py-2.5 font-mono text-xs text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
            />
            <p className="mt-1 text-[11px] text-muted-foreground">
              Valid levels: Core, Strong, Working Knowledge, Learning
            </p>
          </div>
        </div>
        {typeof index === 'number' && (
          <DeleteButton
            action={deleteSkillCategoryAction.bind(null, index)}
            confirmMessage={`Delete the "${initial?.category}" category?`}
          />
        )}
      </div>

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

      <SubmitButton label={initial ? 'Save Category' : 'Add Category'} />
    </form>
  )
}
