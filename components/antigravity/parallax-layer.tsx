'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ParallaxLayerProps {
  children: React.ReactNode
  speed?: number // Negative value (e.g. -0.15 to -0.40) glides upward faster than scroll
  className?: string
}

export function ParallaxLayer({ children, speed = -0.2, className = '' }: ParallaxLayerProps) {
  const layerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!layerRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const el = layerRef.current

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => speed * 260,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })
    }, layerRef)

    return () => ctx.revert()
  }, [speed])

  return (
    <div ref={layerRef} className={`will-change-transform ${className}`} data-speed={speed}>
      {children}
    </div>
  )
}
