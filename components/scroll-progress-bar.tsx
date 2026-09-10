'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!barRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const trigger = ScrollTrigger.create({
      start: 0,
      end: 'max',
      scrub: 0.3,
      onUpdate: (self) => {
        gsap.set(barRef.current, { scaleX: self.progress })
      },
    })

    return () => trigger.kill()
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left scale-x-0 bg-gradient-to-r from-accent via-accent to-accent/50 shadow-[0_0_10px_rgba(0,240,255,0.7)]"
      />
    </div>
  )
}
