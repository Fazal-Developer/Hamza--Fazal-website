import type { Metadata } from 'next'
import { PERSONAL_INFO } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Terms of Service | Hamza Fazal',
  description: 'Terms of service for the official personal brand portfolio of Muhammad Hamza Fazal.',
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 md:px-8 py-12 md:py-20 space-y-8 text-muted-foreground">
      <h1 className="text-3xl font-black text-foreground sm:text-4xl">Terms of Service</h1>
      <p className="text-xs font-mono font-bold text-accent">Last Updated: August 2026</p>

      <div className="space-y-6 text-sm leading-relaxed border-t border-border pt-6">
        <p>
          By accessing and browsing the website of <strong className="text-foreground">Muhammad Hamza Fazal</strong> ({PERSONAL_INFO.name}), you agree to comply with these terms.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">1. Intellectual Property</h2>
        <p>
          All content, code samples, design assets, and project case studies displayed on this website are the intellectual property of Muhammad Hamza Fazal unless otherwise indicated.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">2. Use License</h2>
        <p>
          You are permitted to view, share, and link to pages on this website for personal, non-commercial portfolio evaluation. Unauthorized copying of proprietary project source code or brand assets is prohibited.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">3. Contact &amp; Legal Inquiries</h2>
        <p>
          For licensing inquiries or questions about these terms, reach out at <strong className="text-foreground">{PERSONAL_INFO.email}</strong>.
        </p>
      </div>
    </div>
  )
}
