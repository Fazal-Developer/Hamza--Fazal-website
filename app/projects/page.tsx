import type { Metadata } from 'next'
import Link from 'next/link'
import { PROJECTS, PERSONAL_INFO } from '@/lib/data'
import { Sparkles, ArrowUpRight, Filter } from 'lucide-react'
import { GithubIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Projects Catalog | Muhammad Hamza Fazal — Software & Apps',
  description:
    'Explore the full software projects catalog by Muhammad Hamza Fazal, including Android native apps (Java, Room DB, MVVM), Next.js web applications, and full-stack business software.',
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/projects`,
  },
  openGraph: {
    title: 'Projects Catalog | Muhammad Hamza Fazal',
    description:
      'Explore Android native apps, Next.js web applications, and full-stack software built by Muhammad Hamza Fazal.',
    url: `${PERSONAL_INFO.siteUrl}/projects`,
    images: [`${PERSONAL_INFO.siteUrl}/hamza-hero-pro.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects Catalog — Muhammad Hamza Fazal',
    description: 'Android native apps, Next.js web applications, and full-stack software.',
    images: [`${PERSONAL_INFO.siteUrl}/hamza-hero-pro.jpg`],
  },
}

export default function ProjectsPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: PERSONAL_INFO.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Projects',
        item: `${PERSONAL_INFO.siteUrl}/projects`,
      },
    ],
  }

  const jsonLdCatalog = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Software Projects by Muhammad Hamza Fazal',
    itemListElement: PROJECTS.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': project.category === 'Android' ? 'SoftwareApplication' : 'CreativeWork',
        name: project.title,
        description: project.shortDescription,
        url: `${PERSONAL_INFO.siteUrl}/projects/${project.slug}`,
      },
    })),
  }

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-20 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCatalog) }}
      />

      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>PROJECTS SHOWCASE</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Software &amp; Application Catalog
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Real-world Android applications, web platforms, and full-stack systems designed and built with clean architecture.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <div
            key={project.slug}
            className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-xs transition-all duration-300 hover:border-foreground/40 hover:shadow-xl"
          >
            <div>
              {/* Image Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/30">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] font-bold text-foreground backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-foreground/90 px-3 py-1 font-mono text-[10px] font-bold text-background backdrop-blur-md">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 space-y-3">
                <h2 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </h2>
                <p className="text-xs font-semibold text-muted-foreground">{project.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="px-7 pb-7 pt-2 border-t border-border/50 flex items-center justify-between">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-accent transition-colors"
              >
                <span>Read Full Case Study</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-foreground"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>Repository</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
