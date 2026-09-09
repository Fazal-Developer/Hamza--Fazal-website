'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'
import { Magnetic } from '@/components/magnetic'
import { lenisRefGlobal } from '@/components/providers/smooth-scroll-provider'

gsap.registerPlugin(ScrollTrigger)

const HeroScene = dynamic(() => import('@/components/three/hero-scene').then((m) => m.HeroScene), {
  ssr: false,
})

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenisRefGlobal.current) {
    lenisRefGlobal.current.scrollTo(el, { offset: -88, duration: 1.2 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasWrapRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const scrollProgress = useRef(0)

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

      if (!prefersReducedMotion && sectionRef.current && canvasWrapRef.current) {
        gsap.to(canvasWrapRef.current, {
          opacity: 0.35,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            onUpdate: (self) => {
              scrollProgress.current = self.progress
            },
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20"
    >
      <div ref={canvasWrapRef} className="absolute inset-0 z-0">
        <HeroScene scrollRef={scrollProgress} />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-background via-transparent to-background/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 md:px-8">
        <div ref={contentRef} className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/70 px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-foreground backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-accent">Available for work</span>
          </div>

          <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl">
            Muhammad
            <br />
            <span className="text-gradient-accent">Hamza Fazal</span>
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            <span className="font-semibold text-foreground">Android Developer &middot; Web Developer &middot; Digital Marketer.</span>{' '}
            {PERSONAL_INFO.positioning}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Magnetic>
              <button
                onClick={() => scrollTo('projects')}
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-background shadow-xl shadow-accent/10 transition-opacity hover:opacity-90"
              >
                <span>View My Work</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </Magnetic>
            <Magnetic>
              <button
                onClick={() => scrollTo('contact')}
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-foreground backdrop-blur-md transition-colors hover:border-accent/60"
              >
                <span>Let&apos;s Connect</span>
              </button>
            </Magnetic>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-10 flex justify-center">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-border/80 p-1.5">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-accent" />
        </div>
      </div>
    </section>
  )
}
