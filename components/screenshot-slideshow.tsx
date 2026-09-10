'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ScreenshotSlideshowProps {
  images: string[]
  alt: string
}

const AUTOPLAY_MS = 4500

export function ScreenshotSlideshow({ images, alt }: ScreenshotSlideshowProps) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0])
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const go = useCallback(
    (dir: number) => {
      setIndex(([prev]) => {
        const next = (prev + dir + images.length) % images.length
        return [next, dir]
      })
    },
    [images.length]
  )

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (images.length <= 1) return
    timerRef.current = setInterval(() => go(1), AUTOPLAY_MS)
  }, [go, images.length])

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [resetTimer])

  if (images.length === 0) return null

  const handleNav = (dir: number) => {
    go(dir)
    resetTimer()
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-md">
      <div className="relative aspect-video w-full">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={index}
            src={images[index]}
            alt={`${alt} ${index + 1}`}
            custom={direction}
            initial={{ x: direction >= 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction >= 0 ? '-100%' : '100%', opacity: 0 }}
            transition={{ type: 'tween', duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => handleNav(-1)}
              data-cursor-hover
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition-transform hover:scale-110"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleNav(1)}
              data-cursor-hover
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md backdrop-blur transition-transform hover:scale-110"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="absolute bottom-3 right-3 z-10 rounded-full bg-background/80 px-2.5 py-1 font-mono text-[10px] font-bold text-foreground backdrop-blur">
              {index + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
