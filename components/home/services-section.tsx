import { Smartphone, Globe, Layout, Flame, TrendingUp, Zap, ArrowUpRight } from 'lucide-react'
import { SERVICES } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Layout,
  Flame,
  TrendingUp,
  Zap,
}

export function ServicesSection() {
  return (
    <section id="services" className="relative border-y border-border/60 bg-secondary/10 py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
            What I can build for you.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.iconName] ?? Zap
            return (
              <Reveal key={service.id} delay={0.05 * i} className="group h-full">
                <TiltCard maxTilt={4} className="group flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{service.description}</p>
                  <ul className="mt-auto space-y-1.5 border-t border-border/60 pt-4">
                    {service.deliverables.slice(0, 3).map((d) => (
                      <li key={d} className="flex items-start gap-2 text-[11px] text-foreground/75">
                        <ArrowUpRight className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
