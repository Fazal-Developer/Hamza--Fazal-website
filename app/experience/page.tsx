import type { Metadata } from 'next'
import { EXPERIENCES } from '@/lib/data'
import { Sparkles, GraduationCap, Code2, Briefcase, TrendingUp, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experience Timeline | Hamza Fazal — Software Developer',
  description: 'Professional timeline, education, software engineering projects, and freelance history of Muhammad Hamza Fazal.',
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>CAREER &amp; EDUCATION</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Professional Timeline &amp; Experience
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          A chronological journey of software engineering education, independent app publishing, client development work, and digital marketing execution.
        </p>
      </div>

      {/* Timeline Stream */}
      <div className="relative border-l-2 border-border pl-6 md:pl-10 space-y-12 ml-2 md:ml-4">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative space-y-4">
            {/* Timeline Pin Node */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-foreground bg-background text-foreground shadow-xs">
              <div className="h-2 w-2 rounded-full bg-foreground" />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                {exp.period}
              </span>
              <span className="rounded-full bg-secondary px-3 py-1 font-mono text-[10px] font-bold text-foreground">
                {exp.category}
              </span>
            </div>

            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-foreground">{exp.role}</h2>
              <p className="text-sm font-semibold text-muted-foreground">{exp.organization}</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
              {exp.description}
            </p>

            {/* Highlights */}
            <div className="rounded-2xl border border-border bg-card p-5 space-y-2 max-w-3xl">
              <p className="text-xs font-mono font-bold text-foreground uppercase">Key Achievements &amp; Focus Areas:</p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {exp.highlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
