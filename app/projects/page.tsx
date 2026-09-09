import type { Metadata } from 'next'
import { PROJECTS, PERSONAL_INFO } from '@/lib/data'
import { Sparkles } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { PortfolioGrid } from '@/components/portfolio-grid'

export const metadata: Metadata = {
  title: 'Portfolio — Muhammad Hamza Fazal',
  description:
    'Explore the full project portfolio of Muhammad Hamza Fazal, including Android native apps (Java, Room DB, MVVM), Next.js web applications, and full-stack business software.',
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/projects`,
  },
  openGraph: {
    title: 'Portfolio — Muhammad Hamza Fazal',
    description:
      'Explore Android native apps, Next.js web applications, and full-stack software built by Muhammad Hamza Fazal.',
    url: `${PERSONAL_INFO.siteUrl}/projects`,
    images: [`${PERSONAL_INFO.siteUrl}/hamza-hero-pro.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio — Muhammad Hamza Fazal',
    description: 'Android native apps, Next.js web applications, and full-stack software.',
    images: [`${PERSONAL_INFO.siteUrl}/hamza-hero-pro.jpg`],
  },
}

export default function ProjectsPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: PERSONAL_INFO.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: `${PERSONAL_INFO.siteUrl}/projects` },
    ],
  }

  const jsonLdCatalog = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Software Portfolio by Muhammad Hamza Fazal',
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
    <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdCatalog) }}
      />

      <Reveal className="max-w-2xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Portfolio</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Complete project showcase.
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Real-world Android applications, web platforms, and full-stack systems, designed and built with
          clean architecture.
        </p>
      </Reveal>

      <PortfolioGrid />
    </div>
  )
}
