import type { Metadata } from 'next'
import { SKILL_CATEGORIES } from '@/lib/data'
import { Sparkles, CheckCircle2, Smartphone, Globe, Database, TrendingUp, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Skills Dashboard | Hamza Fazal — Android & Web Developer',
  description: 'Technical skills dashboard for Muhammad Hamza Fazal including Java, Android Studio, Next.js, React, Firebase, Room DB, and SEO.',
}

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>TECHNICAL COMPETENCIES</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Skills &amp; Technology Dashboard
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          A honest, transparent overview of technologies I build with daily across mobile engineering, web development, databases, and digital growth.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div
            key={category.category}
            className="rounded-3xl border border-border bg-card p-8 space-y-6 shadow-xs hover:border-foreground/30 transition-all"
          >
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                {category.category.includes('ANDROID') && <Smartphone className="h-5 w-5" />}
                {category.category.includes('WEB') && <Globe className="h-5 w-5" />}
                {category.category.includes('DATABASE') && <Database className="h-5 w-5" />}
                {category.category.includes('DIGITAL') && <TrendingUp className="h-5 w-5" />}
                {category.category.includes('TOOLS') && <Wrench className="h-5 w-5" />}
              </div>
              <h2 className="font-mono text-sm font-extrabold tracking-wider text-foreground">
                {category.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-2 rounded-2xl border border-border/80 bg-background p-3.5"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                    <span className="text-xs font-bold text-foreground truncate">{skill.name}</span>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold shrink-0 ${
                      skill.level === 'Core'
                        ? 'bg-foreground text-background'
                        : skill.level === 'Strong'
                        ? 'bg-accent/20 text-accent dark:text-accent-foreground'
                        : 'bg-secondary text-muted-foreground'
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
