'use client'

import { lenisRefGlobal } from '@/components/providers/smooth-scroll-provider'

export function BackToTop() {
  const handleClick = () => {
    if (lenisRefGlobal.current) {
      lenisRefGlobal.current.scrollTo(0, { duration: 1.1 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleClick}
      data-cursor-hover
      className="font-mono text-[11px] font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
    >
      Back to top &uarr;
    </button>
  )
}
