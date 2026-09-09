'use client'

import { useEffect } from 'react'
import { lenisRefGlobal } from '@/components/providers/smooth-scroll-provider'

export function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash?.replace('#', '')
    if (!hash) return

    const timer = setTimeout(() => {
      const el = document.getElementById(hash)
      if (!el) return
      if (lenisRefGlobal.current) {
        lenisRefGlobal.current.scrollTo(el, { offset: -88, duration: 1.2, immediate: false })
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 350)

    return () => clearTimeout(timer)
  }, [])

  return null
}
