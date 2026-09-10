import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SKILL_CATEGORIES } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { AnimatedHeading } from '@/components/animated-heading'
import { ScrollStagger } from '@/components/scroll-stagger'

const FEATURED_SKILLS = [
  'Java',
  'Android Studio',
  'Room Database',
  'MVVM Architecture',
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Firebase & Firestore',
  'Search Engine Optimization (SEO)',
  'Git & GitHub',
  'Vercel Deployment',
]

export function SkillsPreviewSection() {
  const allSkills = SKILL_CATEGORIES.flatMap((c) => c.skills)
  const featured = FEATURED_SKILLS.map((name) => allSkills.find((s) => s.name === name)).filter(
    (s): s is (typeof allSkills)[number] => !!s
  )

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="text-center">
        <Reveal>
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">Tech Stack</p>
        </Reveal>
        <AnimatedHeading className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Tools I build with daily.
        </AnimatedHeading>
      </div>

      <ScrollStagger className="mt-10 flex flex-wrap justify-center gap-3" stagger={0.04}>
        {featured.map((skill) => (
          <span
            key={skill.name}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground"
          >
            {skill.name}
          </span>
        ))}
      </ScrollStagger>

      <div className="mt-10 flex justify-center">
        <Link
          href="/about#technologies"
          data-cursor-hover
          className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-accent hover:underline"
        >
          <span>See Full Skill Set</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </section>
  )
}
