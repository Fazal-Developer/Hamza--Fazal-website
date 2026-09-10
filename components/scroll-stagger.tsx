'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ScrollStaggerProps {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export function ScrollStagger({ children, className, stagger = 0.08 }: ScrollStaggerProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(ref.current!.children)
      gsap.from(items, {
        opacity: 0,
        y: 48,
        scale: 0.94,
        rotateX: 8,
        transformPerspective: 900,
        duration: 0.85,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 82%',
        },
      })
    }, ref)

    return () => ctx.revert()
  }, [stagger])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
