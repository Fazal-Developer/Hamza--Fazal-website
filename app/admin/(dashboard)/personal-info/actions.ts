'use server'

import { revalidatePath } from 'next/cache'
import { requireAdmin } from '@/lib/admin/auth'
import { writePersonalInfo } from '@/lib/admin/content-store'
import type { PersonalInfo } from '@/lib/data'

export async function savePersonalInfoAction(_prevState: { ok: boolean; error?: string } | null, formData: FormData) {
  try {
    await requireAdmin()
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Not authorized.' }
  }

  const data: PersonalInfo = {
    name: String(formData.get('name') || ''),
    displayName: String(formData.get('displayName') || ''),
    brandMonogram: String(formData.get('brandMonogram') || ''),
    title: String(formData.get('title') || ''),
    positioning: String(formData.get('positioning') || ''),
    bio: String(formData.get('bio') || ''),
    github: String(formData.get('github') || ''),
    linkedin: String(formData.get('linkedin') || ''),
    email: String(formData.get('email') || ''),
    phone: String(formData.get('phone') || ''),
    whatsapp: String(formData.get('whatsapp') || ''),
    location: String(formData.get('location') || ''),
    siteUrl: String(formData.get('siteUrl') || ''),
  }

  try {
    await writePersonalInfo(data)
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Failed to save.' }
  }

  revalidatePath('/', 'layout')
  return { ok: true }
}
