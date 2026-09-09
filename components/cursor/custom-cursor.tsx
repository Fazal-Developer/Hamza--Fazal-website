'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || prefersReducedMotion) return

    document.documentElement.classList.add('has-custom-cursor')

    const dot = dotRef.current
    const ring = ringRef.current
    const label = labelRef.current
    if (!dot || !ring || !label) return

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let raf = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        'a, button, [data-cursor-hover], [data-cursor-text]'
      )
      if (!target) {
        ring.dataset.state = 'default'
        label.textContent = ''
        return
      }
      const text = target.getAttribute('data-cursor-text')
      if (text) {
        ring.dataset.state = 'text'
        label.textContent = text
      } else {
        ring.dataset.state = 'hover'
        label.textContent = ''
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null
      const stillInside = related?.closest?.('a, button, [data-cursor-hover], [data-cursor-text]')
      if (!stillInside) {
        ring.dataset.state = 'default'
        label.textContent = ''
      }
    }

    const onMouseDown = () => ring.classList.add('scale-90')
    const onMouseUp = () => ring.classList.remove('scale-90')

    const loop = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden md:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent transition-opacity duration-200"
      />
      <div
        ref={ringRef}
        data-state="default"
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border border-accent/70 transition-[width,height,background-color,border-color] duration-200 ease-out data-[state=default]:h-8 data-[state=default]:w-8 data-[state=hover]:h-12 data-[state=hover]:w-12 data-[state=hover]:bg-accent/10 data-[state=text]:h-16 data-[state=text]:w-16 data-[state=text]:bg-accent data-[state=text]:border-accent"
      >
        <span
          ref={labelRef}
          className="font-mono text-[10px] font-bold uppercase tracking-wider text-background"
        />
      </div>
    </div>
  )
}
