import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROJECTS, PERSONAL_INFO } from '@/lib/data'
import { ArrowLeft, ArrowUpRight, CheckCircle2, ShieldCheck, Cpu, AlertTriangle, Lightbulb, Image as ImageIcon, PlayCircle } from 'lucide-react'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug)
  if (!project) return {}

  const canonicalUrl = `${PERSONAL_INFO.siteUrl}/projects/${project.slug}`

  return {
    title: `${project.title} — Case Study | Muhammad Hamza Fazal`,
    description: `${project.title} (${project.subtitle}): ${project.shortDescription} Built by Muhammad Hamza Fazal using ${project.tags.join(', ')}.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | Muhammad Hamza Fazal`,
      description: project.shortDescription,
      url: canonicalUrl,
      images: [
        {
          url: project.image,
          alt: `${project.title} Case Study by Muhammad Hamza Fazal`,
        },
      ],
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

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
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${PERSONAL_INFO.siteUrl}/projects/${project.slug}`,
      },
    ],
  }

  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-20 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Back Link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Projects Catalog</span>
      </Link>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-bold text-foreground">
            {project.category}
          </span>
          <span className="rounded-full bg-foreground px-3 py-1 font-mono text-xs font-bold text-background">
            {project.status}
          </span>
        </div>

        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {project.title}
        </h1>
        <p className="text-xl font-bold text-muted-foreground">{project.subtitle}</p>

        <p className="text-base leading-relaxed text-muted-foreground pt-2">
          {project.fullDescription}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-xs font-bold text-white shadow-md hover:scale-105 transition-all"
            >
              <PlayCircle className="h-4 w-4" />
              <span>Get it on Play Store</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs font-bold text-foreground hover:bg-secondary transition-colors"
            >
              <span>Live Website</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Cover Image */}
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
        <img
          src={project.image}
          alt={`${project.title} Case Study Preview — Muhammad Hamza Fazal`}
          className="aspect-[16/9] w-full object-cover"
        />
      </div>

      {/* Problem & Solution Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-border bg-card p-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-500 uppercase">
            <AlertTriangle className="h-4 w-4" />
            <span>The Problem</span>
          </div>
          <h3 className="text-xl font-bold text-foreground">Challenge Overview</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-500 uppercase">
            <Lightbulb className="h-4 w-4" />
            <span>The Solution</span>
          </div>
          <h3 className="text-xl font-bold text-foreground">Engineering Approach</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
        </div>
      </div>

      {/* Key Features & Architecture */}
      <div className="space-y-8 border-t border-border pt-12">
        <div className="space-y-2">
          <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ TECHNICAL BREAKDOWN</p>
          <h2 className="text-3xl font-extrabold text-foreground">Key Features &amp; Architecture</h2>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 space-y-6">
          <div>
            <h3 className="text-base font-bold text-foreground mb-4">Core Features Checklist:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              {project.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border/60 pt-6 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground uppercase">
              <Cpu className="h-4 w-4 text-accent" />
              <span>Software Architecture Pattern</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{project.architecture}</p>
          </div>
        </div>
      </div>

      {/* Challenges & Key Learnings */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-12">
        <div className="rounded-3xl border border-border bg-card p-8 space-y-3">
          <h3 className="text-lg font-bold text-foreground">Technical Challenges Overcome</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.challenges}</p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 space-y-3">
          <h3 className="text-lg font-bold text-foreground">Key Developer Learnings</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.learnings}</p>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="space-y-4 border-t border-border pt-12">
        <h3 className="text-base font-bold text-foreground">Technologies Used in This Case Study:</h3>
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-xl border border-border bg-card px-4 py-2 text-xs font-mono font-bold text-foreground shadow-xs">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Screenshots Gallery */}
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="space-y-6 border-t border-border pt-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-accent uppercase tracking-widest">
            <ImageIcon className="h-4 w-4" />
            <span>Project Visual Gallery</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.screenshots.map((img, idx) => (
              <div key={idx} className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
                <img src={img} alt={`${project.title} App Screenshot ${idx + 1} — Muhammad Hamza Fazal`} className="w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
