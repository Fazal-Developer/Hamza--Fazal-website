'use client'

import dynamic from 'next/dynamic'
import { SKILL_CATEGORIES } from '@/lib/data'
import { Reveal } from '@/components/reveal'

const SkillsScene = dynamic(() => import('@/components/three/skills-scene').then((m) => m.SkillsScene), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-3xl bg-card/40" />,
})

const CATEGORY_DOT: Record<string, string> = {
  'ANDROID DEVELOPMENT': 'bg-emerald-500',
  'WEB DEVELOPMENT': 'bg-cyan-400',
  'DATABASE & BACKEND': 'bg-indigo-500',
  'DIGITAL MARKETING & GROWTH': 'bg-amber-500',
  'DEVELOPMENT TOOLS': 'bg-pink-500',
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <Reveal>
        <h2 className="max-w-2xl text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
          A technology constellation, mapped by category.
        </h2>
        <p className="mt-4 max-w-lg text-sm text-muted-foreground sm:text-base">
          Hover any node to see the tool and how confidently I use it.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 h-[480px] overflow-hidden rounded-3xl border border-border bg-card/40 sm:h-[560px] md:h-[640px]">
        <SkillsScene />
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {SKILL_CATEGORIES.map((cat, i) => (
          <Reveal key={cat.category} delay={0.05 * i}>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 rounded-full ${CATEGORY_DOT[cat.category] ?? 'bg-accent'}`} />
                <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  {cat.category}
                </p>
              </div>
              <ul className="space-y-1.5">
                {cat.skills.map((s) => (
                  <li key={s.name} className="text-xs font-medium text-foreground/80">
                    {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
