'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, Mail } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'
import { Magnetic } from '@/components/magnetic'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { LanyardBadge } from '@/components/home/lanyard-badge'
import { TechMarquee } from '@/components/home/tech-marquee'

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (!prefersReducedMotion && contentRef.current) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 24,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.15,
        })
      }

      if (!prefersReducedMotion && badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          y: -24,
          duration: 1,
          ease: 'power3.out',
          delay: 0.35,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="hero" className="relative overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[10%] top-0 h-[360px] w-[480px] rounded-full bg-accent/[0.07] blur-[130px]" />
      </div>

      <div className="mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-7xl items-center px-5 md:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div ref={contentRef} className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-foreground backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-accent">Available for work</span>
            </div>

            <div>
              <p className="text-2xl font-black leading-none tracking-tight text-foreground sm:text-3xl">
                Hi, I&apos;m
              </p>
              <h1 className="mt-2 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
                <span className="text-gradient-accent">Muhammad Hamza Fazal</span>
              </h1>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              <span className="font-semibold text-foreground">Android Developer &middot; Web Developer &middot; Digital Marketer.</span>{' '}
              {PERSONAL_INFO.positioning}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Magnetic>
                <Link
                  href="/projects"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-background shadow-xl shadow-accent/10 transition-opacity hover:opacity-90"
                >
                  <span>View Portfolio</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  data-cursor-hover
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-md transition-colors hover:border-accent/60"
                >
                  <span>Let&apos;s Connect</span>
                </Link>
              </Magnetic>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-label="GitHub profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                aria-label="LinkedIn profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                data-cursor-hover
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent/50 hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div ref={badgeRef} className="lg:col-span-5">
            <LanyardBadge />
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl justify-center px-5 pb-3 md:px-8">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border/80 p-1.5">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>

      <TechMarquee />
    </section>
  )
}
