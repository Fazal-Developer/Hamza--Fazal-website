import type { Metadata } from 'next'
import { PERSONAL_INFO } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hamza Fazal',
  description: 'Privacy policy for the official personal brand portfolio of Muhammad Hamza Fazal.',
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-5 md:px-8 py-12 md:py-20 space-y-8 text-muted-foreground">
      <h1 className="text-3xl font-black text-foreground sm:text-4xl">Privacy Policy</h1>
      <p className="text-xs font-mono font-bold text-accent">Last Updated: August 2026</p>

      <div className="space-y-6 text-sm leading-relaxed border-t border-border pt-6">
        <p>
          Welcome to the personal portfolio website of <strong className="text-foreground">Muhammad Hamza Fazal</strong> ({PERSONAL_INFO.name}). Your privacy is important to me. This policy outlines how information is collected, used, and safeguarded when visiting this website.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">1. Information Collection</h2>
        <p>
          I do not automatically harvest or track personal private data. Information provided through the contact form (such as your name, email address, and message content) is used strictly to respond to your inquiry.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">2. Cookies &amp; Analytics</h2>
        <p>
          This website may utilize lightweight technical cookies or privacy-focused web analytics to analyze traffic performance and optimize page loading speeds across devices.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">3. Data Sharing</h2>
        <p>
          Your contact information will never be sold, rented, or distributed to third-party advertisers.
        </p>

        <h2 className="text-xl font-bold text-foreground pt-4">4. Contact Information</h2>
        <p>
          If you have questions regarding this privacy statement, please contact me directly at: <strong className="text-foreground">{PERSONAL_INFO.email}</strong>.
        </p>
      </div>
    </div>
  )
}
