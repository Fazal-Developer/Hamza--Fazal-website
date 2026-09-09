'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/admin/auth'
import { readProjects, writeProjects } from '@/lib/admin/content-store'
import type { Project } from '@/lib/data'

function listField(formData: FormData, name: string): string[] {
  return String(formData.get(name) || '')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
}

function optionalField(formData: FormData, name: string): string | undefined {
  const v = String(formData.get(name) || '').trim()
  return v ? v : undefined
}

export async function saveProjectAction(
  _prevState: { ok: boolean; error?: string } | null,
  formData: FormData
) {
  try {
    await requireAdmin()
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Not authorized.' }
  }

  const originalSlug = String(formData.get('originalSlug') || '')
  const slug = String(formData.get('slug') || '').trim()

  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return { ok: false, error: 'Slug is required and must be lowercase letters, numbers, and hyphens only.' }
  }

  const project: Project = {
    slug,
    title: String(formData.get('title') || ''),
    subtitle: String(formData.get('subtitle') || ''),
    category: String(formData.get('category') || 'Android') as Project['category'],
    status: String(formData.get('status') || 'Completed') as Project['status'],
    image: String(formData.get('image') || ''),
    shortDescription: String(formData.get('shortDescription') || ''),
    fullDescription: String(formData.get('fullDescription') || ''),
    tags: listField(formData, 'tags'),
    githubUrl: optionalField(formData, 'githubUrl'),
    liveUrl: optionalField(formData, 'liveUrl'),
    playStoreUrl: optionalField(formData, 'playStoreUrl'),
    problem: String(formData.get('problem') || ''),
    solution: String(formData.get('solution') || ''),
    features: listField(formData, 'features'),
    architecture: String(formData.get('architecture') || ''),
    challenges: String(formData.get('challenges') || ''),
    learnings: String(formData.get('learnings') || ''),
    screenshots: listField(formData, 'screenshots'),
    keywords: listField(formData, 'keywords'),
  }

  try {
    const projects = await readProjects()

    if (originalSlug) {
      const idx = projects.findIndex((p) => p.slug === originalSlug)
      if (idx === -1) return { ok: false, error: 'Original project not found.' }
      if (slug !== originalSlug && projects.some((p) => p.slug === slug)) {
        return { ok: false, error: `A project with slug "${slug}" already exists.` }
      }
      projects[idx] = project
    } else {
      if (projects.some((p) => p.slug === slug)) {
        return { ok: false, error: `A project with slug "${slug}" already exists.` }
      }
      projects.push(project)
    }

    await writeProjects(projects)
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Failed to save.' }
  }

  revalidatePath('/', 'layout')
  redirect('/admin/projects')
}

export async function deleteProjectAction(slug: string) {
  await requireAdmin()
  const projects = await readProjects()
  await writeProjects(projects.filter((p) => p.slug !== slug))
  revalidatePath('/', 'layout')
  redirect('/admin/projects')
}
