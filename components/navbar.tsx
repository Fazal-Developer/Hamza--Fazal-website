'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { PERSONAL_INFO } from '@/lib/data'
import { lenisRefGlobal } from '@/components/providers/smooth-scroll-provider'
import { Magnetic } from '@/components/magnetic'

const SECTION_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Journey' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

function goToSection(id: string, router: ReturnType<typeof useRouter>, isHome: boolean) {
  if (!isHome) {
    router.push(`/#${id}`)
    return
  }
  const el = document.getElementById(id)
  if (!el) return
  if (lenisRefGlobal.current) {
    lenisRefGlobal.current.scrollTo(el, { offset: -88, duration: 1.2 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const isHome = pathname === '/'
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHome) {
      setActiveSection('')
      return
    }
    const sections = SECTION_LINKS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => !!el
    )
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [isHome])

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (id: string) => {
    setMobileOpen(false)
    goToSection(id, router, isHome)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <div
        className={`flex w-full max-w-5xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled || mobileOpen
            ? 'border border-border/80 bg-background/70 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl'
            : 'border border-transparent bg-transparent'
        }`}
      >
        <Link href="/" className="group flex shrink-0 items-center gap-2.5" data-cursor-hover>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background font-mono text-xs font-black transition-transform group-hover:scale-105">
            {PERSONAL_INFO.brandMonogram}
          </div>
          <span className="hidden font-sans text-sm font-extrabold tracking-tight text-foreground sm:block">
            {PERSONAL_INFO.displayName}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {SECTION_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              data-cursor-hover
              className={`relative rounded-full px-3.5 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors ${
                activeSection === link.id ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <Magnetic className="hidden sm:block">
            <button
              onClick={() => handleNavClick('contact')}
              data-cursor-hover
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-background transition-opacity hover:opacity-90"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </Magnetic>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            data-cursor-hover
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card/60 text-foreground lg:hidden"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 flex flex-col justify-center gap-3 bg-background/98 px-8 backdrop-blur-2xl lg:hidden"
          >
            {SECTION_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleNavClick(link.id)}
                className="text-left font-sans text-4xl font-black tracking-tight text-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * SECTION_LINKS.length, duration: 0.5 }}
              className="mt-6 flex items-center gap-4 border-t border-border pt-6"
            >
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold text-muted-foreground">
                GitHub
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="font-mono text-xs font-bold text-muted-foreground">
                LinkedIn
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono text-xs font-bold text-muted-foreground">
                Email
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
