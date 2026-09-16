'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface SectionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  startOffset?: string // default 'top 85%'
}

export function SectionReveal({
  children,
  className = '',
  delay = 0,
  startOffset = 'top 85%',
}: SectionRevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const el = sectionRef.current

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
          scale: 0.98,
          rotateX: 4,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 0.95,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: startOffset,
            toggleActions: 'play none none none',
            invalidateOnRefresh: true,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [delay, startOffset])

  return (
    <div ref={sectionRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
