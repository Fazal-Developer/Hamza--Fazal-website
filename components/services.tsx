import { Smartphone, Globe, TrendingUp, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Smartphone,
    title: 'App Development',
    description:
      'Native and cross-platform mobile apps I build for performance, delight, and scale — from concept to App Store.',
    points: ['iOS & Android', 'React Native / Flutter', 'API & Backend'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Fast, accessible, and beautiful websites and web apps I engineer on modern frameworks that convert.',
    points: ['Next.js & React', 'Headless CMS', 'E-commerce'],
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description:
      'Data-driven campaigns I run across search, social, and content that grow your audience and drive revenue.',
    points: ['SEO & SEM', 'Social & Paid Ads', 'Analytics & CRO'],
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm text-primary">/ what I do</p>
            <h2 className="mt-3 max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Services that move the needle
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-muted-foreground">
            One partner for your full digital journey — strategy, design,
            engineering, and growth, delivered end to end.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-8 transition-colors hover:border-primary/50"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <service.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight">{service.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2 border-t border-border/60 pt-6">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
