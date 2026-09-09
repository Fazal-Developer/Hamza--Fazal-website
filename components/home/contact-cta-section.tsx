import Link from 'next/link'
import { PERSONAL_INFO } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { Magnetic } from '@/components/magnetic'

export function ContactCtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 text-center shadow-2xl md:p-16">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(0,240,255,0.1), transparent 60%)',
            }}
          />
          <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Have an idea?
            <br />
            Let&apos;s build it.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Whether it&apos;s a native Android app, a fast Next.js website, or SEO to help it get found, I&apos;m
            ready to help turn it into something real.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <Link
                href="/contact"
                data-cursor-hover
                className="rounded-full bg-foreground px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-background shadow-xl transition-opacity hover:opacity-90"
              >
                Let&apos;s Work Together
              </Link>
            </Magnetic>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              data-cursor-hover
              className="rounded-full border border-border bg-background px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider text-foreground transition-colors hover:border-accent/50"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
