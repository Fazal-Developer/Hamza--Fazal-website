import { BlogForm } from '../blog-form'

export default function NewBlogPostPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">New Blog Post</h1>
      </div>
      <BlogForm />
    </div>
  )
}
