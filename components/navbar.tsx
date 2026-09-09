'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { PERSONAL_INFO } from '@/lib/data'
import { Magnetic } from '@/components/magnetic'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

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
          <img
            src="/hamza-hero-pro.jpg"
            alt={PERSONAL_INFO.displayName}
            className="h-8 w-8 rounded-lg object-cover ring-1 ring-border transition-transform group-hover:scale-105"
          />
          <span className="hidden font-sans text-sm font-extrabold tracking-tight text-foreground sm:block">
            {PERSONAL_INFO.displayName}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-cursor-hover
              className={`relative rounded-full px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors ${
                isActive(link.href) ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span
                  layoutId="nav-active-dot"
                  className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            data-cursor-hover
            className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-colors hover:border-accent/50"
            aria-label="Toggle color theme"
          >
            {mounted && resolvedTheme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <Magnetic className="hidden sm:block">
            <Link
              href="/contact"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-background transition-opacity hover:opacity-90"
            >
              <span>Let&apos;s Connect</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
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
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  className={`text-left font-sans text-4xl font-black tracking-tight transition-colors hover:text-accent ${
                    isActive(link.href) ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * NAV_LINKS.length, duration: 0.5 }}
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
