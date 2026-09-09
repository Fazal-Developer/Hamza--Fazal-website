import type { Metadata } from 'next'
import { PERSONAL_INFO } from '@/lib/data'
import { ContactSection } from '@/components/home/contact-section'

export const metadata: Metadata = {
  title: 'Contact Muhammad Hamza Fazal',
  description:
    'Get in touch with Muhammad Hamza Fazal for Android app development, Next.js web projects, or digital marketing and SEO consulting.',
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Muhammad Hamza Fazal',
    description:
      'Get in touch for Android app development, Next.js web projects, or digital marketing and SEO consulting.',
    url: `${PERSONAL_INFO.siteUrl}/contact`,
  },
}

export default function ContactPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: PERSONAL_INFO.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${PERSONAL_INFO.siteUrl}/contact` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <ContactSection />
    </>
  )
}
