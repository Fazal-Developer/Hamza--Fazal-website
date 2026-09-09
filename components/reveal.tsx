'use client'

import { motion, useReducedMotion, type Variants } from 'motion/react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
  amount?: number
}

export function Reveal({ children, className, delay = 0, y = 28, once = true, amount = 0.3 }: RevealProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function RevealStagger({
  children,
  className,
  stagger = 0.08,
  amount = 0.2,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
  amount?: number
}) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={container}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  y = 24,
}: {
  children: React.ReactNode
  className?: string
  y?: number
}) {
  const reduce = useReducedMotion()
  const item: Variants = {
    hidden: reduce ? {} : { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  }
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  )
}
