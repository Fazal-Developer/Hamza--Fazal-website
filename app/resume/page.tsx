import type { Metadata } from 'next'
import Link from 'next/link'
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EXPERIENCES } from '@/lib/data'
import { Download, Sparkles, Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Resume / CV | Hamza Fazal — Software Developer',
  description: 'Official digital resume and CV of Muhammad Hamza Fazal, Software Engineering student, Android Developer, Web Developer, and Digital Marketer.',
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/resume`,
  },
  openGraph: {
    title: 'Digital Resume / CV | Muhammad Hamza Fazal',
    description:
      'Official digital resume of Muhammad Hamza Fazal, Android Developer, Web Developer, and Digital Marketer.',
    url: `${PERSONAL_INFO.siteUrl}/resume`,
  },
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-5 md:px-8 py-12 md:py-20 space-y-12">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border pb-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            {PERSONAL_INFO.name}
          </h1>
          <p className="text-base font-bold text-muted-foreground">{PERSONAL_INFO.title}</p>
        </div>

        <a
          href="/resume/hamza-fazal-resume.pdf"
          download="hamza-fazal-resume.pdf"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-xs font-bold text-background shadow-md hover:scale-105 transition-all"
        >
          <Download className="h-4 w-4" />
          <span>Download Resume (PDF)</span>
        </a>
      </div>

      {/* Resume Document Wrapper */}
      <div className="rounded-3xl border border-border bg-card p-8 md:p-12 space-y-10 shadow-lg">
        {/* Contact Info Header */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-medium text-muted-foreground border-b border-border/60 pb-8">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent shrink-0" />
            <span>{PERSONAL_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent shrink-0" />
            <span>{PERSONAL_INFO.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent shrink-0" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              GitHub
            </a>
            <span>•</span>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-3">
          <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">01. EXECUTIVE SUMMARY</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {PERSONAL_INFO.bio} Passionate about building functional, high-performance Android mobile apps using native Java, Room Database, and MVVM architecture, alongside modern web interfaces built with Next.js, React, and TypeScript.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="space-y-4 border-t border-border/60 pt-8">
          <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">02. TECHNICAL SKILLS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.category} className="space-y-1.5 rounded-xl border border-border/60 bg-background p-4">
                <h3 className="font-mono text-[11px] font-bold text-foreground">{cat.category}</h3>
                <p className="text-xs text-muted-foreground">
                  {cat.skills.map((s) => s.name).join(' • ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Major Software Projects */}
        <div className="space-y-4 border-t border-border/60 pt-8">
          <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">03. FEATURED SOFTWARE PROJECTS</h2>
          <div className="space-y-6">
            {PROJECTS.map((proj) => (
              <div key={proj.slug} className="space-y-2 border-b border-border/40 pb-5 last:border-0 last:pb-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-foreground">{proj.title}</h3>
                  <span className="font-mono text-xs font-bold text-accent">{proj.category}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{proj.fullDescription}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Education */}
        <div className="space-y-4 border-t border-border/60 pt-8">
          <h2 className="font-mono text-xs font-bold text-accent uppercase tracking-wider">04. EXPERIENCE &amp; EDUCATION</h2>
          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-xs font-semibold text-accent">{exp.organization}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
