'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/admin/auth'
import { readSkillCategories, writeSkillCategories } from '@/lib/admin/content-store'
import type { SkillCategory } from '@/lib/data'

const VALID_LEVELS = ['Core', 'Strong', 'Working Knowledge', 'Learning']

function parseSkillLines(raw: string): SkillCategory['skills'] {
  return raw
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [namePart, levelPart] = line.split('|').map((s) => s.trim())
      const level = VALID_LEVELS.includes(levelPart) ? (levelPart as SkillCategory['skills'][number]['level']) : 'Strong'
      return { name: namePart, level }
    })
}

export async function saveSkillCategoryAction(
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
  const category = String(formData.get('category') || '').trim()
  const skills = parseSkillLines(String(formData.get('skills') || ''))

  if (!category) return { ok: false, error: 'Category name is required.' }
  if (skills.length === 0) return { ok: false, error: 'Add at least one skill.' }

  try {
    const categories = await readSkillCategories()
    const entry: SkillCategory = { category, skills }

    if (index >= 0 && index < categories.length) {
      categories[index] = entry
    } else {
      categories.push(entry)
    }

    await writeSkillCategories(categories)
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Failed to save.' }
  }

  revalidatePath('/', 'layout')
  return { ok: true }
}

export async function deleteSkillCategoryAction(index: number) {
  await requireAdmin()
  const categories = await readSkillCategories()
  categories.splice(index, 1)
  await writeSkillCategories(categories)
  revalidatePath('/', 'layout')
  redirect('/admin/skills')
}
