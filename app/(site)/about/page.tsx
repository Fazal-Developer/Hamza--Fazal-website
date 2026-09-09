import type { Metadata } from 'next'
import Link from 'next/link'
import { Smartphone, Globe, TrendingUp, ArrowUpRight, Layers, ShieldCheck, MessageCircle, Search } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'
import { Reveal, RevealStagger, RevealItem } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { AboutSection } from '@/components/home/about-section'
import { JourneySection } from '@/components/home/journey-section'
import { SkillsSection } from '@/components/home/skills-section'

export const metadata: Metadata = {
  title: 'About Muhammad Hamza Fazal',
  description:
    'Learn about Muhammad Hamza Fazal, a Software Engineering student and multi-disciplinary developer building native Android apps, modern web platforms, and SEO-driven growth.',
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/about`,
  },
  openGraph: {
    title: 'About Muhammad Hamza Fazal',
    description:
      'Software Engineering student, Android Developer, Web Developer, and Digital Marketer in Pakistan.',
    url: `${PERSONAL_INFO.siteUrl}/about`,
    images: [`${PERSONAL_INFO.siteUrl}/hamza-about-pro.jpg`],
  },
}

const WHAT_I_DO = [
  {
    icon: Smartphone,
    title: 'Android',
    body: 'Native Android applications with Java, XML, Room Database, and MVVM architecture, from idea through Play Store publishing.',
  },
  {
    icon: Globe,
    title: 'Web',
    body: 'Fast, responsive web applications and platforms with Next.js, React, TypeScript, and Tailwind CSS.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    body: 'Technical SEO, keyword research, and content strategy so the products I build actually get found and used.',
  },
]

const WHY_WORK_WITH_ME = [
  {
    icon: Layers,
    title: 'Full range, one person',
    body: 'Android, web, and the SEO to help it get found. Fewer handoffs, fewer things lost in translation.',
  },
  {
    icon: ShieldCheck,
    title: 'I ship real products',
    body: 'Traffic Quiz App, Digital Khata, and more are published, working apps, not throwaway prototypes.',
  },
  {
    icon: Search,
    title: 'SEO-minded from day one',
    body: 'I think about how a product gets discovered while I’m still architecting it, not after launch.',
  },
  {
    icon: MessageCircle,
    title: 'Direct communication',
    body: 'Clear updates, honest timelines, and no overselling what a project actually needs.',
  },
]

export default function AboutPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: PERSONAL_INFO.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${PERSONAL_INFO.siteUrl}/about` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div>
        <AboutSection />

        <JourneySection />

        {/* WHAT I DO */}
        <section className="border-y border-border/60 bg-secondary/10 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">What I Do</p>
              <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                Three disciplines, one product mindset.
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {WHAT_I_DO.map((item, i) => (
                <Reveal key={item.title} delay={0.08 * i}>
                  <TiltCard maxTilt={4} className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-accent">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MY APPROACH */}
        <section className="mx-auto max-w-4xl px-5 py-24 text-center md:px-8 md:py-32">
          <Reveal>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">My Approach</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Build it clean. Ship it real. Make it findable.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I start with the actual problem, not a feature list. On Android that means clean MVVM
              architecture and offline-first data with Room. On the web it means fast, responsive interfaces
              that don&apos;t cut corners on accessibility. And because I come from a digital marketing
              background, I don&apos;t treat SEO as an afterthought. Structure, performance, and metadata are
              part of the build from the start, not a fix bolted on after launch.
            </p>
          </Reveal>
        </section>

        {/* TECHNOLOGIES */}
        <div id="technologies">
          <SkillsSection />
        </div>

        {/* WHY WORK WITH ME */}
        <section className="border-y border-border/60 bg-secondary/10 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">
                Why Work With Me
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-black tracking-tight text-foreground sm:text-4xl">
                What you actually get.
              </h2>
            </Reveal>

            <RevealStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {WHY_WORK_WITH_ME.map((item) => (
                <RevealItem key={item.title}>
                  <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent">
                      <item.icon className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-xl md:p-14">
              <h2 className="text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                Want to collaborate on a project?
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
                I&apos;m always excited to work on new Android applications, modern websites, or digital
                marketing growth projects.
              </p>
              <Link
                href="/contact"
                data-cursor-hover
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-wider text-background shadow-md transition-opacity hover:opacity-90"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  )
}
