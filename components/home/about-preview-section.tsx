'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { AnimatedHeading } from '@/components/animated-heading'

gsap.registerPlugin(ScrollTrigger)

export function AboutPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      if (imageWrapRef.current) {
        gsap.fromTo(
          imageWrapRef.current,
          { clipPath: 'inset(0% 0% 35% 0%)', scale: 1.15 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 85%',
              end: 'top 25%',
              scrub: 0.6,
            },
          }
        )
      }

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="mx-auto max-w-7xl overflow-hidden px-5 py-24 md:px-8 md:py-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <TiltCard maxTilt={4} className="overflow-hidden rounded-3xl border border-border bg-card">
            <div ref={imageWrapRef} className="overflow-hidden">
              <img
                ref={imageRef}
                src="/hamza-about-pro.jpg"
                alt="Muhammad Hamza Fazal"
                className="aspect-[4/5] w-full scale-110 object-cover"
              />
            </div>
          </TiltCard>
        </div>

        <Reveal delay={0.1} className="space-y-5 lg:col-span-7">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">About Me</p>
          <AnimatedHeading className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            More than just code.
          </AnimatedHeading>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m a Software Engineering student who builds real, published products, not just prototypes.
            Native Android apps with Java and MVVM, fast Next.js web platforms, and the SEO work that helps
            people actually find them.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {PERSONAL_INFO.positioning}
          </p>
          <Link
            href="/about"
            data-cursor-hover
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-accent/50"
          >
            <span>Learn More</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
