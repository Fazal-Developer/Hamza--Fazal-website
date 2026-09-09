'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/admin/auth'
import { readServices, writeServices } from '@/lib/admin/content-store'
import type { ServiceItem } from '@/lib/data'

function listField(formData: FormData, name: string): string[] {
  return String(formData.get(name) || '')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
}

export async function saveServiceAction(
  _prevState: { ok: boolean; error?: string } | null,
  formData: FormData
) {
  try {
    await requireAdmin()
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Not authorized.' }
  }

  const originalId = String(formData.get('originalId') || '')
  const id = String(formData.get('id') || '').trim()

  if (!id || !/^[a-z0-9-]+$/.test(id)) {
    return { ok: false, error: 'ID is required and must be lowercase letters, numbers, and hyphens only.' }
  }

  const service: ServiceItem = {
    id,
    iconName: String(formData.get('iconName') || 'Zap'),
    title: String(formData.get('title') || ''),
    description: String(formData.get('description') || ''),
    deliverables: listField(formData, 'deliverables'),
    keywords: listField(formData, 'keywords'),
  }

  try {
    const services = await readServices()

    if (originalId) {
      const idx = services.findIndex((s) => s.id === originalId)
      if (idx === -1) return { ok: false, error: 'Original service not found.' }
      if (id !== originalId && services.some((s) => s.id === id)) {
        return { ok: false, error: `A service with id "${id}" already exists.` }
      }
      services[idx] = service
    } else {
      if (services.some((s) => s.id === id)) {
        return { ok: false, error: `A service with id "${id}" already exists.` }
      }
      services.push(service)
    }

    await writeServices(services)
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Failed to save.' }
  }

  revalidatePath('/', 'layout')
  redirect('/admin/services')
}

export async function deleteServiceAction(id: string) {
  await requireAdmin()
  const services = await readServices()
  await writeServices(services.filter((s) => s.id !== id))
  revalidatePath('/', 'layout')
  redirect('/admin/services')
}
