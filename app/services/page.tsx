import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/data'
import { Sparkles, Smartphone, Globe, Layout, Flame, TrendingUp, Zap, CheckCircle2, ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Hamza Fazal — Android App & Web Development',
  description: 'Services provided by Muhammad Hamza Fazal: Native Android App Development, Next.js Web Development, UI/UX Implementation, Firebase Integration, and SEO Digital Marketing.',
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>SERVICES &amp; CAPABILITIES</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          What I Can Build For You
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Custom mobile engineering, responsive websites, Firebase backends, and SEO growth strategies to bring your project from idea to production.
        </p>
      </div>

      {/* Services List */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 space-y-6 shadow-xs hover:border-foreground/40 transition-all"
          >
            <div className="space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-foreground font-bold">
                {service.iconName === 'Smartphone' && <Smartphone className="h-7 w-7" />}
                {service.iconName === 'Globe' && <Globe className="h-7 w-7" />}
                {service.iconName === 'Layout' && <Layout className="h-7 w-7" />}
                {service.iconName === 'Flame' && <Flame className="h-7 w-7" />}
                {service.iconName === 'TrendingUp' && <TrendingUp className="h-7 w-7" />}
                {service.iconName === 'Zap' && <Zap className="h-7 w-7" />}
              </div>

              <h2 className="text-2xl font-bold text-foreground">{service.title}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>

              <div className="pt-2 space-y-2 border-t border-border/60">
                <p className="text-xs font-mono font-bold text-foreground uppercase">Key Deliverables:</p>
                <ul className="space-y-2 text-xs text-muted-foreground">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-bold text-background shadow-xs hover:scale-105 transition-all"
              >
                <span>Request This Service</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
