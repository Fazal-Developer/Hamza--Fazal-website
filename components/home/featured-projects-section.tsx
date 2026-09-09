import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'

const FEATURED_SLUGS = ['traffic-quiz', 'digital-khata', 'portfolio-website']

export function FeaturedProjectsSection() {
  const featured = FEATURED_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(
    (p): p is (typeof PROJECTS)[number] => !!p
  )

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">Featured Work</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            A few things I&apos;ve shipped.
          </h2>
        </div>
        <Link
          href="/projects"
          data-cursor-hover
          className="hidden items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent hover:underline sm:inline-flex"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={0.08 * i}>
            <Link href={`/projects/${project.slug}`} data-cursor-text="View">
              <TiltCard maxTilt={3} className="group h-full overflow-hidden rounded-3xl border border-border bg-card">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - Software application by Muhammad Hamza Fazal`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-2.5 p-6">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-accent">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-secondary/50 px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-8 flex justify-center sm:hidden">
        <Link
          href="/projects"
          data-cursor-hover
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent hover:underline"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  )
}
