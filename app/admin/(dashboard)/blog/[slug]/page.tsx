import { notFound } from 'next/navigation'
import { readBlogPosts } from '@/lib/admin/content-store'
import { BlogForm } from '../blog-form'

export default async function EditBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts = await readBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Edit Post</h1>
        <p className="mt-1 text-sm text-muted-foreground">{post.title}</p>
      </div>
      <BlogForm initial={post} />
    </div>
  )
}
