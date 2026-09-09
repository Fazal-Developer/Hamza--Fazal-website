'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/admin/auth'
import { readBlogPosts, writeBlogPosts } from '@/lib/admin/content-store'
import type { BlogPost } from '@/lib/data'

function listField(formData: FormData, name: string): string[] {
  return String(formData.get(name) || '')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
}

export async function saveBlogPostAction(
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

  const post: BlogPost = {
    slug,
    title: String(formData.get('title') || ''),
    category: String(formData.get('category') || ''),
    date: String(formData.get('date') || ''),
    readTime: String(formData.get('readTime') || ''),
    coverImage: String(formData.get('coverImage') || ''),
    excerpt: String(formData.get('excerpt') || ''),
    content: listField(formData, 'content'),
    keywords: listField(formData, 'keywords'),
  }

  try {
    const posts = await readBlogPosts()

    if (originalSlug) {
      const idx = posts.findIndex((p) => p.slug === originalSlug)
      if (idx === -1) return { ok: false, error: 'Original post not found.' }
      if (slug !== originalSlug && posts.some((p) => p.slug === slug)) {
        return { ok: false, error: `A post with slug "${slug}" already exists.` }
      }
      posts[idx] = post
    } else {
      if (posts.some((p) => p.slug === slug)) {
        return { ok: false, error: `A post with slug "${slug}" already exists.` }
      }
      posts.push(post)
    }

    await writeBlogPosts(posts)
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : 'Failed to save.' }
  }

  revalidatePath('/', 'layout')
  redirect('/admin/blog')
}

export async function deleteBlogPostAction(slug: string) {
  await requireAdmin()
  const posts = await readBlogPosts()
  await writeBlogPosts(posts.filter((p) => p.slug !== slug))
  revalidatePath('/', 'layout')
  redirect('/admin/blog')
}
