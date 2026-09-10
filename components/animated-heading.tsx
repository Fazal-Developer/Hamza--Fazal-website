'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

interface AnimatedHeadingProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function AnimatedHeading({ children, as: Tag = 'h2', className }: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    let split: SplitText | undefined
    const ctx = gsap.context(() => {
      split = new SplitText(ref.current, { type: 'words', mask: 'words' })
      gsap.from(split.words, {
        yPercent: 115,
        opacity: 0,
        duration: 0.9,
        stagger: 0.06,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
        },
      })
    }, ref)

    return () => {
      ctx.revert()
      split?.revert()
    }
  }, [children])

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
