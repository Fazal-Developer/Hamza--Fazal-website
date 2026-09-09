import { Smartphone, Globe, Database, TrendingUp, Wrench } from 'lucide-react'
import { SKILL_CATEGORIES } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'

const CATEGORY_ICON: Record<string, React.ComponentType<{ className?: string }>> = {
  'ANDROID DEVELOPMENT': Smartphone,
  'WEB DEVELOPMENT': Globe,
  'DATABASE & BACKEND': Database,
  'DIGITAL MARKETING & GROWTH': TrendingUp,
  'DEVELOPMENT TOOLS': Wrench,
}

const LEVEL_WEIGHT: Record<string, string> = {
  Core: 'bg-accent',
  Strong: 'bg-accent/70',
  'Working Knowledge': 'bg-muted-foreground/50',
  Learning: 'bg-muted-foreground/30',
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <Reveal>
        <h2 className="max-w-2xl text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Tools I reach for, organized by craft.
        </h2>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
          Every skill below is one I actively use and ship with, grouped by where it matters most.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SKILL_CATEGORIES.map((cat, i) => {
          const Icon = CATEGORY_ICON[cat.category] ?? Wrench
          return (
            <Reveal key={cat.category} delay={0.05 * i}>
              <TiltCard maxTilt={4} className="group h-full rounded-3xl border border-border bg-card p-6 transition-colors hover:border-accent/40 md:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-foreground">{cat.category}</h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {cat.skills.map((skill) => (
                    <li key={skill.name} className="flex items-center justify-between gap-3 border-t border-border/60 pt-3 first:border-t-0 first:pt-0">
                      <span className="text-sm font-medium text-foreground/85 transition-transform group-hover:translate-x-0.5">
                        {skill.name}
                      </span>
                      <span className="flex items-center gap-1.5 shrink-0">
                        <span className={`h-1.5 w-1.5 rounded-full ${LEVEL_WEIGHT[skill.level] ?? 'bg-accent'}`} />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          {skill.level}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
