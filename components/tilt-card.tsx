'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  glow?: boolean
}

export function TiltCard({ children, className, maxTilt = 8, glow = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotateX = useTransform(py, [0, 1], [maxTilt, -maxTilt])
  const rotateY = useTransform(px, [0, 1], [-maxTilt, maxTilt])
  const springRX = useSpring(rotateX, { stiffness: 220, damping: 22 })
  const springRY = useSpring(rotateY, { stiffness: 220, damping: 22 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }

  const handleLeave = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduce ? undefined : { rotateX: springRX, rotateY: springRY, transformPerspective: 800 }}
      className={cn('relative', className)}
    >
      {glow && !reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_50%_0%,rgba(0,240,255,0.14),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      {children}
    </motion.div>
  )
}
