import Link from 'next/link'
import { PERSONAL_INFO } from '@/lib/data'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/80 bg-card/40 pt-16 pb-12 text-sm text-muted-foreground">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 pb-12 border-b border-border/80">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background font-mono font-black text-sm">
                {PERSONAL_INFO.brandMonogram}
              </div>
              <span className="font-sans text-lg font-extrabold tracking-tight text-foreground">
                {PERSONAL_INFO.displayName}
              </span>
            </Link>

            <p className="text-xs leading-relaxed max-w-sm">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-foreground font-medium italic">
              &ldquo;{PERSONAL_INFO.positioning}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground hover:bg-secondary transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold text-foreground uppercase tracking-wider mb-4">Pages</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-foreground transition-colors">Projects Catalog</Link></li>
              <li><Link href="/skills" className="hover:text-foreground transition-colors">Skills Dashboard</Link></li>
              <li><Link href="/services" className="hover:text-foreground transition-colors">Services Offered</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-mono text-xs font-bold text-foreground uppercase tracking-wider mb-4">Resources &amp; Legal</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><Link href="/experience" className="hover:text-foreground transition-colors">Career Timeline</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Developer Blog</Link></li>
              <li><Link href="/resume" className="hover:text-foreground transition-colors">Digital Resume / CV</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
          <p>© {currentYear} {PERSONAL_INFO.displayName}. All rights reserved.</p>
          <p className="text-muted-foreground">Built with Next.js, React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
