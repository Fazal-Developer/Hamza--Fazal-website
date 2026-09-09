'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  animate,
  useReducedMotion,
  type AnimationPlaybackControls,
} from 'motion/react'
import { PERSONAL_INFO } from '@/lib/data'

export function LanyardBadge() {
  const x = useMotionValue(0)
  const rotate = useTransform(x, [-140, 140], [-11, 11])
  const idleControls = useRef<AnimationPlaybackControls | null>(null)
  const reduce = useReducedMotion()
  const [dragging, setDragging] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // subtle mouse-parallax tilt on the whole assembly
  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 18 })
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 18 })

  useEffect(() => {
    setIsDesktop(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  const startIdle = () => {
    if (reduce || !isDesktop) return
    idleControls.current = animate(x, [0, 8, -8, 0], {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    })
  }

  useEffect(() => {
    startIdle()
    return () => idleControls.current?.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDesktop])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop || reduce) return
    const rect = e.currentTarget.getBoundingClientRect()
    const relX = (e.clientX - rect.left) / rect.width - 0.5
    const relY = (e.clientY - rect.top) / rect.height - 0.5
    tiltY.set(relX * 10)
    tiltX.set(-relY * 8)
  }

  const handleMouseLeave = () => {
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={isDesktop ? { scale: 1.015 } : undefined}
      style={{
        rotateX: springTiltX,
        rotateY: springTiltY,
        transformPerspective: 1200,
      }}
      className="relative mx-auto flex w-full max-w-[280px] flex-col items-center pt-11 sm:max-w-[340px] lg:mx-0 lg:max-w-[400px] lg:pt-14"
    >
      {/* clip + cord + card rotate together as one rigid pendulum */}
      <motion.div
        drag={reduce ? false : 'x'}
        dragConstraints={{ left: -140, right: 140 }}
        dragElastic={0.5}
        dragMomentum={false}
        onDragStart={() => {
          setDragging(true)
          idleControls.current?.stop()
        }}
        onDragEnd={() => {
          setDragging(false)
          animate(x, 0, { type: 'spring', stiffness: 170, damping: 13, onComplete: startIdle })
        }}
        style={{ x, rotate, transformOrigin: 'top center' }}
        className={`flex w-full flex-col items-center ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
      >
        {/* badge reel clip */}
        <div className="flex flex-col items-center" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-foreground/70" />
          <span className="-mt-0.5 h-12 w-4 rounded-full bg-foreground/70 shadow-sm" />
          <span className="h-5 w-0.5 bg-foreground/30" />
        </div>

        {/* the badge card */}
        <div className="w-full overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_60px_-15px_rgba(0,0,0,0.25)] transition-shadow duration-300 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.35)]">
          <div
            className="relative flex h-36 items-end justify-center sm:h-40 lg:h-44"
            style={{
              backgroundImage:
                'radial-gradient(rgba(255,255,255,0.35) 1.5px, transparent 1.5px), linear-gradient(135deg, var(--accent), #6366f1)',
              backgroundSize: '16px 16px, 100% 100%',
            }}
          >
            <div className="mb-[-3.25rem] h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-card shadow-xl sm:h-28 sm:w-28 sm:mb-[-3.75rem]">
              <img
                src="/hamza-hero-pro.jpg"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                draggable={false}
              />
            </div>
          </div>

          <div className="px-6 pb-6 pt-16 text-center sm:pt-[4.5rem]">
            <p className="text-xl font-black text-foreground sm:text-2xl">{PERSONAL_INFO.displayName}</p>
            <p className="mt-1.5 inline-flex rounded-full bg-secondary px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Android &amp; Web Developer
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-5 text-left">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Specialty
                </p>
                <p className="text-sm font-bold text-foreground">Android &amp; Full-Stack</p>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Location
                </p>
                <p className="text-sm font-bold text-foreground">Islamabad, PK</p>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Building since
                </p>
                <p className="text-sm font-bold text-foreground">2022</p>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Status
                </p>
                <p className="flex items-center gap-1.5 text-sm font-bold text-emerald-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Available
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-end gap-[3px] border-t border-border pt-5" aria-hidden="true">
              {[3, 5, 2, 6, 3, 4, 7, 2, 5, 3, 6, 2, 4, 5, 3, 6, 2, 4, 3, 5, 4, 6, 2, 5].map((h, i) => (
                <span key={i} className="w-[3px] shrink-0 bg-foreground/70" style={{ height: `${h * 3.5}px` }} />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              <span>HF-2026-DEV</span>
              <span>{PERSONAL_INFO.brandMonogram} Portfolio</span>
            </div>
          </div>
        </div>
      </motion.div>

      <p className="mt-5 font-mono text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        Drag the badge
      </p>
    </motion.div>
  )
}
