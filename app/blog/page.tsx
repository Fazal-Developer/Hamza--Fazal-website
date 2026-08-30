import type { Metadata } from 'next'
import Link from 'next/link'
import { BLOG_POSTS } from '@/lib/data'
import { Sparkles, ArrowUpRight, Clock, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Hamza Fazal — Android & Web Development Articles',
  description: 'Articles and insights by Muhammad Hamza Fazal on native Android development, Next.js web applications, and SEO growth strategies.',
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>TECHNICAL ARTICLES &amp; INSIGHTS</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Developer Blog &amp; Thoughts
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Practical tutorials, architecture guides, and digital marketing breakdowns for software developers.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xs transition-all hover:border-foreground/40 hover:shadow-lg"
          >
            <div className="space-y-4">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary">
                <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono font-bold text-muted-foreground">
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-foreground">{post.category}</span>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h2 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                {post.title}
              </h2>

              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
            </div>

            <div className="pt-4 mt-6 border-t border-border/50 text-xs font-mono font-bold text-foreground flex items-center justify-between">
              <span>Read Full Article</span>
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
