'use client'

import { useActionState } from 'react'
import { CheckCircle2, AlertCircle } from 'lucide-react'
import { Field, TextAreaField } from '@/components/admin/fields'
import { SubmitButton } from '@/components/admin/submit-button'
import type { PersonalInfo } from '@/lib/data'
import { savePersonalInfoAction } from './actions'

export function PersonalInfoForm({ initial }: { initial: PersonalInfo }) {
  const [state, formAction] = useActionState(savePersonalInfoAction, null)

  return (
    <form action={formAction} className="space-y-5 rounded-2xl border border-border bg-card p-6">
      {state?.ok && (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-bold text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-4 w-4" />
          Saved.
        </div>
      )}
      {state?.error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-bold text-red-600 dark:text-red-400">
          <AlertCircle className="h-4 w-4" />
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" defaultValue={initial.name} required />
        <Field label="Display Name" name="displayName" defaultValue={initial.displayName} required />
        <Field label="Brand Monogram" name="brandMonogram" defaultValue={initial.brandMonogram} />
        <Field label="Title" name="title" defaultValue={initial.title} required />
      </div>

      <TextAreaField label="Positioning Tagline" name="positioning" defaultValue={initial.positioning} rows={2} />
      <TextAreaField label="Bio" name="bio" defaultValue={initial.bio} rows={4} />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" defaultValue={initial.email} required />
        <Field label="Phone" name="phone" defaultValue={initial.phone} />
        <Field label="WhatsApp" name="whatsapp" defaultValue={initial.whatsapp} />
        <Field label="Location" name="location" defaultValue={initial.location} />
        <Field label="GitHub URL" name="github" defaultValue={initial.github} />
        <Field label="LinkedIn URL" name="linkedin" defaultValue={initial.linkedin} />
        <Field label="Site URL" name="siteUrl" defaultValue={initial.siteUrl} />
      </div>

      <SubmitButton />
    </form>
  )
}
