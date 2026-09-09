'use client'

import { useActionState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Field, TextAreaField, ListField, SelectField } from '@/components/admin/fields'
import { SubmitButton } from '@/components/admin/submit-button'
import type { Project } from '@/lib/data'
import { saveProjectAction } from './actions'

export function ProjectForm({ initial }: { initial?: Project }) {
  const [state, formAction] = useActionState(saveProjectAction, null)

  return (
    <form action={formAction} className="space-y-5 rounded-2xl border border-border bg-card p-6">
      <input type="hidden" name="originalSlug" value={initial?.slug ?? ''} />

      {state?.error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-bold text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Title" name="title" defaultValue={initial?.title} required />
        <Field
          label="Slug"
          name="slug"
          defaultValue={initial?.slug}
          required
          placeholder="my-new-app"
        />
        <Field label="Subtitle" name="subtitle" defaultValue={initial?.subtitle} required />
        <Field label="Image URL" name="image" defaultValue={initial?.image} required />
        <SelectField label="Category" name="category" defaultValue={initial?.category ?? 'Android'} options={['Android', 'Web', 'Full-Stack']} />
        <SelectField label="Status" name="status" defaultValue={initial?.status ?? 'Completed'} options={['Completed', 'Active Development', 'Maintained']} />
      </div>

      <TextAreaField label="Short Description" name="shortDescription" defaultValue={initial?.shortDescription} rows={2} required />
      <TextAreaField label="Full Description" name="fullDescription" defaultValue={initial?.fullDescription} rows={3} required />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Field label="GitHub URL" name="githubUrl" defaultValue={initial?.githubUrl} placeholder="https://github.com/..." />
        <Field label="Live URL" name="liveUrl" defaultValue={initial?.liveUrl} placeholder="https://..." />
        <Field label="Play Store URL" name="playStoreUrl" defaultValue={initial?.playStoreUrl} placeholder="https://play.google.com/..." />
      </div>

      <ListField label="Tags" name="tags" defaultValue={initial?.tags} placeholder={'Java\nAndroid Studio'} rows={3} />

      <TextAreaField label="Problem" name="problem" defaultValue={initial?.problem} rows={2} required />
      <TextAreaField label="Solution" name="solution" defaultValue={initial?.solution} rows={2} required />
      <ListField label="Features" name="features" defaultValue={initial?.features} rows={4} />
      <TextAreaField label="Architecture" name="architecture" defaultValue={initial?.architecture} rows={2} required />
      <TextAreaField label="Challenges" name="challenges" defaultValue={initial?.challenges} rows={2} required />
      <TextAreaField label="Learnings" name="learnings" defaultValue={initial?.learnings} rows={2} required />
      <ListField label="Screenshots (URLs)" name="screenshots" defaultValue={initial?.screenshots} rows={3} />
      <ListField label="SEO Keywords" name="keywords" defaultValue={initial?.keywords} rows={3} />

      <SubmitButton label={initial ? 'Save Changes' : 'Create Project'} />
    </form>
  )
}
