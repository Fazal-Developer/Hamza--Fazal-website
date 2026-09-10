import Link from 'next/link'
import { Smartphone, Globe, Flame, TrendingUp, ArrowUpRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'
import { AnimatedHeading } from '@/components/animated-heading'
import { ScrollStagger } from '@/components/scroll-stagger'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Flame,
  TrendingUp,
}

const FEATURED_IDS = ['android-dev', 'web-dev', 'firebase-integration', 'digital-marketing']

export function ServicesPreviewSection() {
  const featured = FEATURED_IDS.map((id) => SERVICES.find((s) => s.id === id)).filter(
    (s): s is (typeof SERVICES)[number] => !!s
  )

  return (
    <section className="border-y border-border/60 bg-secondary/10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">What I Do</p>
            <AnimatedHeading className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
              Services built around real skills.
            </AnimatedHeading>
          </div>
          <Link
            href="/services"
            data-cursor-hover
            className="hidden items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent hover:underline sm:inline-flex"
          >
            <span>View All Services</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </Reveal>

        <ScrollStagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((service) => {
            const Icon = ICONS[service.iconName] ?? Smartphone
            return (
              <TiltCard key={service.id} maxTilt={4} className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-foreground">{service.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{service.description}</p>
              </TiltCard>
            )
          })}
        </ScrollStagger>

        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/services"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent hover:underline"
          >
            <span>View All Services</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
