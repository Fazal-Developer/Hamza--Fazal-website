'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { PERSONAL_INFO } from '@/lib/data'

export function LoadingScreen() {
  const [done, setDone] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const photoRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLParagraphElement>(null)
  const roleRef = useRef<HTMLParagraphElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setDone(true)
      return
    }

    document.documentElement.style.overflow = 'hidden'
    const counter = { value: 0 }

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.style.overflow = ''
        setDone(true)
      },
    })

    tl.fromTo(
      photoRef.current,
      { opacity: 0, scale: 0.85 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }
    )
      .fromTo(
        [nameRef.current, roleRef.current],
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
        '-=0.35'
      )
      .to(
        counter,
        {
          value: 100,
          duration: 0.95,
          ease: 'power2.out',
          onUpdate: () => {
            if (barRef.current) barRef.current.style.width = `${counter.value}%`
            if (countRef.current) countRef.current.textContent = String(Math.round(counter.value))
          },
        },
        '-=0.2'
      )
      .to(wrapRef.current, {
        yPercent: -100,
        duration: 0.7,
        ease: 'power3.inOut',
        delay: 0.15,
      })

    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [])

  if (done) return null

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-5 bg-background"
      role="status"
      aria-label="Loading"
    >
      <div ref={photoRef} className="relative h-16 w-16">
        <div className="absolute -inset-2 rounded-full bg-accent/20 blur-xl" aria-hidden="true" />
        <img
          src="/hamza-hero-pro.jpg"
          alt=""
          aria-hidden="true"
          className="relative h-full w-full rounded-full object-cover ring-2 ring-border"
        />
      </div>

      <div className="space-y-1 text-center">
        <p ref={nameRef} className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-foreground">
          {PERSONAL_INFO.displayName}
        </p>
        <p ref={roleRef} className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Android &middot; Web &middot; Digital Marketing
        </p>
      </div>

      <div className="h-px w-48 overflow-hidden rounded-full bg-border sm:w-64">
        <div ref={barRef} className="h-full w-0 bg-accent" />
      </div>
      <p className="font-mono text-[11px] font-bold text-accent">
        <span ref={countRef}>0</span>%
      </p>
    </div>
  )
}
