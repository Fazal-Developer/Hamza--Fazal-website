'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { PERSONAL_INFO } from '@/lib/data'

export function LoadingScreen() {
  const [done, setDone] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
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

    tl.to(counter, {
      value: 100,
      duration: 1.05,
      ease: 'power2.out',
      onUpdate: () => {
        if (barRef.current) barRef.current.style.width = `${counter.value}%`
        if (countRef.current) countRef.current.textContent = String(Math.round(counter.value))
      },
    }).to(wrapRef.current, {
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
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-background"
      role="status"
      aria-label="Loading"
    >
      <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
        {PERSONAL_INFO.displayName}
      </p>
      <div className="h-px w-48 overflow-hidden bg-border sm:w-64">
        <div ref={barRef} className="h-full w-0 bg-accent" />
      </div>
      <p className="font-mono text-[11px] font-bold text-accent">
        <span ref={countRef}>0</span>%
      </p>
    </div>
  )
}
