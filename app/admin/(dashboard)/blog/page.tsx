import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import { readBlogPosts } from '@/lib/admin/content-store'
import { DeleteButton } from '@/components/admin/delete-button'
import { deleteBlogPostAction } from './actions'

export default async function BlogAdminPage() {
  const posts = await readBlogPosts()

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-foreground">Blog</h1>
          <p className="mt-1 text-sm text-muted-foreground">{posts.length} posts.</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold text-background transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          New Post
        </Link>
      </div>

      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.slug} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4">
            <div>
              <p className="text-sm font-bold text-foreground">{post.title}</p>
              <p className="font-mono text-[11px] text-muted-foreground">
                {post.slug} &middot; {post.category} &middot; {post.date}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/admin/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-accent/50"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </Link>
              <DeleteButton action={deleteBlogPostAction.bind(null, post.slug)} confirmMessage={`Delete "${post.title}"?`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
