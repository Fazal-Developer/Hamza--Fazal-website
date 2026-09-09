'use client'

import { useActionState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Field, TextAreaField, ListField } from '@/components/admin/fields'
import { SubmitButton } from '@/components/admin/submit-button'
import type { BlogPost } from '@/lib/data'
import { saveBlogPostAction } from './actions'

export function BlogForm({ initial }: { initial?: BlogPost }) {
  const [state, formAction] = useActionState(saveBlogPostAction, null)

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
        <Field label="Slug" name="slug" defaultValue={initial?.slug} required placeholder="my-new-post" />
        <Field label="Category" name="category" defaultValue={initial?.category} required />
        <Field label="Date" name="date" defaultValue={initial?.date} required placeholder="September 9, 2026" />
        <Field label="Read Time" name="readTime" defaultValue={initial?.readTime} required placeholder="5 min read" />
        <Field label="Cover Image URL" name="coverImage" defaultValue={initial?.coverImage} required />
      </div>

      <TextAreaField label="Excerpt" name="excerpt" defaultValue={initial?.excerpt} rows={2} required />
      <ListField
        label="Content (one paragraph or ### heading per line)"
        name="content"
        defaultValue={initial?.content}
        rows={10}
      />
      <ListField label="SEO Keywords" name="keywords" defaultValue={initial?.keywords} rows={3} />

      <SubmitButton label={initial ? 'Save Changes' : 'Create Post'} />
    </form>
  )
}
