'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface AmbientLevitationProps {
  children: React.ReactNode
  amplitude?: number // 6-8px oscillation
  duration?: number // 3 - 4.5s
  delay?: number // Stagger phase offset
  className?: string
}

export function AmbientLevitation({
  children,
  amplitude = 7,
  duration = 3.6,
  delay = 0,
  className = '',
}: AmbientLevitationProps) {
  const levitationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!levitationRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const el = levitationRef.current

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: amplitude,
        duration,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay,
      })
    }, levitationRef)

    return () => ctx.revert()
  }, [amplitude, duration, delay])

  return (
    <div ref={levitationRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
