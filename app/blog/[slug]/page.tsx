import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { BLOG_POSTS, PERSONAL_INFO } from '@/lib/data'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug)
  if (!post) return {}

  const canonicalUrl = `${PERSONAL_INFO.siteUrl}/blog/${post.slug}`

  return {
    title: `${post.title} | Muhammad Hamza Fazal Blog`,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      images: [
        {
          url: post.coverImage,
          alt: post.title,
        },
      ],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const jsonLdBlogPost = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    datePublished: '2026-08-01',
    author: {
      '@type': 'Person',
      name: PERSONAL_INFO.name,
      url: PERSONAL_INFO.siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: PERSONAL_INFO.name,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${PERSONAL_INFO.siteUrl}/blog/${post.slug}`,
    },
  }

  return (
    <div className="mx-auto max-w-4xl px-5 md:px-8 py-12 md:py-20 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBlogPost) }}
      />

      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Blog Articles</span>
      </Link>

      {/* Article Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-xs font-mono font-bold text-muted-foreground">
          <span className="rounded-full bg-secondary px-3 py-1 text-foreground">{post.category}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            <span>{post.date}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
          {post.title}
        </h1>

        <p className="text-lg leading-relaxed text-muted-foreground font-medium">
          {post.excerpt}
        </p>
      </div>

      {/* Cover Image */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
        <img src={post.coverImage} alt={`${post.title} — Article by Muhammad Hamza Fazal`} className="aspect-[16/9] w-full object-cover" />
      </div>

      {/* Article Body */}
      <article className="prose prose-neutral dark:prose-invert max-w-none space-y-6 text-base leading-relaxed text-muted-foreground">
        {post.content.map((paragraph, idx) => {
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={idx} className="text-xl font-bold text-foreground pt-4 pb-2 border-b border-border">
                {paragraph.replace('### ', '')}
              </h3>
            )
          }
          return <p key={idx}>{paragraph}</p>
        })}
      </article>

      {/* Author Card */}
      <div className="border-t border-border pt-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background font-mono font-bold text-xs">
            HF
          </div>
          <div>
            <p className="text-xs font-bold text-foreground">Written by Muhammad Hamza Fazal</p>
            <p className="text-[11px] text-muted-foreground">Android Developer, Web Developer &amp; Digital Marketer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
