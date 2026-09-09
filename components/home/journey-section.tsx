'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { EXPERIENCES } from '@/lib/data'
import { Reveal } from '@/components/reveal'

gsap.registerPlugin(ScrollTrigger)

export function JourneySection() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !wrapRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: wrapRef.current,
            start: 'top 75%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      )
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="journey" className="relative mx-auto max-w-5xl px-5 py-28 md:px-8 md:py-36">
      <Reveal>
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">The Path So Far</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
          A developer&apos;s journey, one milestone at a time.
        </h2>
      </Reveal>

      <div ref={wrapRef} className="relative mt-16 pl-8 sm:pl-12">
        <div className="absolute bottom-0 left-2.5 top-0 w-px bg-border sm:left-4" />
        <div
          ref={lineRef}
          className="absolute left-2.5 top-0 w-px bg-gradient-to-b from-accent to-accent/20 shadow-[0_0_12px_rgba(0,240,255,0.6)] sm:left-4"
        />

        <div className="space-y-14">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.role} delay={0.05 * i} className="relative">
              <div className="absolute -left-8 top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-background shadow-[0_0_14px_rgba(0,240,255,0.5)] sm:-left-12">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-accent">{exp.period}</span>
                  <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {exp.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground sm:text-2xl">{exp.role}</h3>
                <p className="text-xs font-semibold text-muted-foreground">{exp.organization}</p>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                <ul className="grid gap-1.5 pt-1 sm:grid-cols-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-foreground/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
