import type { Metadata } from 'next'
import Link from 'next/link'
import { Smartphone, Globe, Layout, Flame, TrendingUp, Zap, ArrowUpRight, Sparkles } from 'lucide-react'
import { SERVICES, PERSONAL_INFO } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { Magnetic } from '@/components/magnetic'

export const metadata: Metadata = {
  title: 'Services — Android & Web Development',
  description:
    'Services offered by Muhammad Hamza Fazal: native Android app development, Next.js web development, Firebase integration, UI implementation, and SEO-driven digital marketing.',
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/services`,
  },
  openGraph: {
    title: 'Services — Android & Web Development | Muhammad Hamza Fazal',
    description:
      'Native Android apps, Next.js web development, Firebase backends, UI implementation, and SEO growth.',
    url: `${PERSONAL_INFO.siteUrl}/services`,
  },
}

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Layout,
  Flame,
  TrendingUp,
  Zap,
}

const TECH_BY_SERVICE: Record<string, string[]> = {
  'android-dev': ['Java', 'Android Studio', 'Room DB', 'MVVM', 'Firebase'],
  'web-dev': ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress'],
  'ui-ux': ['Figma', 'Responsive Design', 'Accessibility', 'Material Design'],
  'firebase-integration': ['Firebase Auth', 'Firestore', 'Realtime DB', 'FCM'],
  'digital-marketing': ['SEO', 'Keyword Research', 'Google Analytics', 'Content Strategy'],
  'website-optimization': ['Core Web Vitals', 'Lighthouse', 'SEO Audit', 'Performance'],
}

export default function ServicesPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: PERSONAL_INFO.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${PERSONAL_INFO.siteUrl}/services` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
        <Reveal className="max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Services &amp; Capabilities</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
            What I can build for you.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Custom mobile engineering, responsive websites, Firebase backends, and SEO growth strategies, from
            idea to production.
          </p>
        </Reveal>

        <div className="mt-20 space-y-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.iconName] ?? Zap
            const tech = TECH_BY_SERVICE[service.id] ?? []
            return (
              <Reveal key={service.id} delay={0.04 * i}>
                <TiltCard maxTilt={2} glow={false} className="overflow-hidden rounded-3xl border border-border bg-card">
                  <div className="grid grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-12 lg:items-center lg:gap-12">
                    <div className="lg:col-span-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-accent">
                        <Icon className="h-7 w-7" />
                      </div>
                      <h2 className="mt-5 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {service.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-foreground">
                        What I Provide
                      </p>
                      <ul className="mt-3 space-y-2.5 border-t border-border/60 pt-4">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                            <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-between gap-4 border-t border-border bg-secondary/20 px-8 py-6 sm:flex-row md:px-12">
                    <p className="text-sm font-semibold text-foreground">Have a project in mind?</p>
                    <Magnetic>
                      <Link
                        href="/contact"
                        data-cursor-hover
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-background transition-opacity hover:opacity-90"
                      >
                        <span>Contact Me</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </Magnetic>
                  </div>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </>
  )
}
