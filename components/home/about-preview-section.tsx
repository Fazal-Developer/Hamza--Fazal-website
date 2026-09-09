import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'

export function AboutPreviewSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="lg:col-span-5">
          <TiltCard maxTilt={4} className="overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src="/hamza-about-pro.jpg"
              alt="Muhammad Hamza Fazal"
              className="aspect-[4/5] w-full object-cover"
            />
          </TiltCard>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 lg:col-span-7">
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-accent">About Me</p>
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            More than just code.
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m a Software Engineering student who builds real, published products, not just prototypes.
            Native Android apps with Java and MVVM, fast Next.js web platforms, and the SEO work that helps
            people actually find them.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {PERSONAL_INFO.positioning}
          </p>
          <Link
            href="/about"
            data-cursor-hover
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-accent/50"
          >
            <span>Learn More</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
