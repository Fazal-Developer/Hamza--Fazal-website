'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { GithubIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'

gsap.registerPlugin(ScrollTrigger)

export function ProjectsSection() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !wrapRef.current) return

    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 1024px)': function () {
          const cards = gsap.utils.toArray<HTMLElement>('.project-card')
          cards.forEach((card, i) => {
            if (i === cards.length - 1) return
            ScrollTrigger.create({
              trigger: card,
              start: 'top top+=88',
              endTrigger: cards[cards.length - 1],
              end: 'top top+=88',
              pin: true,
              pinSpacing: false,
            })
            gsap.to(card, {
              scale: 0.94,
              opacity: 0.45,
              filter: 'blur(2px)',
              ease: 'none',
              scrollTrigger: {
                trigger: cards[i + 1],
                start: 'top bottom',
                end: 'top top+=88',
                scrub: true,
              },
            })
          })
        },
      })
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">Selected Work</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Real products, shipped and running.
          </h2>
        </Reveal>
      </div>

      <div ref={wrapRef} className="relative mt-14">
        {PROJECTS.map((project, i) => (
          <div
            key={project.slug}
            className="project-card gsap-pin-safe relative flex min-h-[90dvh] items-center border-t border-border/60 bg-background lg:min-h-[100dvh]"
          >
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-12 lg:gap-16">
              <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor-text="View"
                  className="group relative block overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} - Software application by Muhammad Hamza Fazal`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] font-bold text-foreground backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-bold text-accent-foreground backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>
                </Link>
              </div>

              <div className={`space-y-5 lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="font-mono text-xs font-bold text-accent">
                  {String(i + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
                </p>
                <h3 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl md:text-4xl">
                  {project.title}
                </h3>
                <p className="font-mono text-xs font-semibold text-muted-foreground">{project.subtitle}</p>
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {project.shortDescription}
                </p>

                <ul className="grid grid-cols-1 gap-1.5 pt-1 sm:grid-cols-2">
                  {project.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-foreground/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span className="line-clamp-1">{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold text-background transition-opacity hover:opacity-90"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground"
                    >
                      <GithubIcon className="h-4 w-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
