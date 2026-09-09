'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/admin/auth'
import { readExperiences, writeExperiences } from '@/lib/admin/content-store'
import type { ExperienceItem } from '@/lib/data'

function listField(formData: FormData, name: string): string[] {
  return String(formData.get(name) || '')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
}

export async function saveExperienceAction(
  _prevState: { ok: boolean; error?: string } | null,
  formData: FormData
) {
  try {
    await requireAdmin()
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Not authorized.' }
  }

  const indexRaw = formData.get('index')
  const index = indexRaw === '' || indexRaw === null ? -1 : Number(indexRaw)

  const entry: ExperienceItem = {
    period: String(formData.get('period') || ''),
    role: String(formData.get('role') || ''),
    organization: String(formData.get('organization') || ''),
    category: String(formData.get('category') || 'Software Engineering') as ExperienceItem['category'],
    description: String(formData.get('description') || ''),
    highlights: listField(formData, 'highlights'),
  }

  if (!entry.role || !entry.period) return { ok: false, error: 'Role and period are required.' }

  try {
    const experiences = await readExperiences()
    if (index >= 0 && index < experiences.length) {
      experiences[index] = entry
    } else {
      experiences.push(entry)
    }
    await writeExperiences(experiences)
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Failed to save.' }
  }

  revalidatePath('/', 'layout')
  return { ok: true }
}

export async function deleteExperienceAction(index: number) {
  await requireAdmin()
  const experiences = await readExperiences()
  experiences.splice(index, 1)
  await writeExperiences(experiences)
  revalidatePath('/', 'layout')
  redirect('/admin/experience')
}
