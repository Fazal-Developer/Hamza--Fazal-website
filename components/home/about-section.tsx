import { CheckCircle2, MapPin, GraduationCap } from 'lucide-react'
import { PERSONAL_INFO } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { TiltCard } from '@/components/tilt-card'

const CAPABILITIES = [
  { label: 'Native Android Architecture', detail: 'Java, MVVM, Room DB' },
  { label: 'Modern Web Stack', detail: 'Next.js, React, TypeScript' },
  { label: 'Technical SEO & Growth', detail: 'Schema, Core Web Vitals' },
  { label: 'Clean Code, Always', detail: 'Readable, testable, maintained' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <Reveal>
        <h2 className="max-w-2xl text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Building digital experiences with code.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-6">
        {/* Portrait */}
        <Reveal delay={0.05} className="group lg:col-span-2 lg:row-span-2">
          <TiltCard className="group h-full overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src="/hamza-about-pro.jpg"
              alt="Muhammad Hamza Fazal — Software Engineer"
              className="h-full max-h-[420px] w-full object-cover lg:max-h-none"
            />
          </TiltCard>
        </Reveal>

        {/* Bio */}
        <Reveal delay={0.1} className="lg:col-span-4 lg:row-span-2">
          <div className="flex h-full flex-col justify-center gap-4 rounded-3xl border border-border bg-card p-8 md:p-10">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m a{' '}
              <strong className="font-semibold text-foreground">Software Engineering student</strong> and
              multi-disciplinary developer who takes concepts from a blank screen to fully functioning Android
              apps and web platforms.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              In <strong className="font-semibold text-foreground">Android development</strong>, I specialize in
              native Java, Android Studio, Room Database, and MVVM architecture. In{' '}
              <strong className="font-semibold text-foreground">web development</strong>, I build fast, responsive
              applications with Next.js, React, TypeScript, and Tailwind CSS, paired with hands-on{' '}
              <strong className="font-semibold text-foreground">digital marketing &amp; SEO</strong> to help those
              products actually get found.
            </p>
          </div>
        </Reveal>

        {/* Quote */}
        <Reveal delay={0.15} className="lg:col-span-3">
          <div className="flex h-full flex-col justify-center gap-2 rounded-3xl border border-accent/25 bg-[radial-gradient(circle_at_0%_0%,rgba(0,240,255,0.1),transparent_60%)] p-8">
            <p className="text-lg font-semibold leading-snug text-foreground">
              &ldquo;{PERSONAL_INFO.positioning}&rdquo;
            </p>
          </div>
        </Reveal>

        {/* Location / status */}
        <Reveal delay={0.2} className="lg:col-span-3">
          <div className="grid h-full grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-8">
            <div className="flex flex-col justify-center gap-1.5">
              <GraduationCap className="h-4 w-4 text-accent" />
              <p className="text-xs font-bold text-foreground">Software Engineering</p>
              <p className="text-[11px] text-muted-foreground">Undergraduate studies</p>
            </div>
            <div className="flex flex-col justify-center gap-1.5">
              <MapPin className="h-4 w-4 text-accent" />
              <p className="text-xs font-bold text-foreground">{PERSONAL_INFO.location}</p>
              <p className="text-[11px] text-muted-foreground">Open to remote work</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Capabilities strip */}
      <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {CAPABILITIES.map((cap, i) => (
          <Reveal key={cap.label} delay={0.05 * i}>
            <TiltCard maxTilt={5} className="group h-full rounded-2xl border border-border bg-card p-5">
              <CheckCircle2 className="h-4 w-4 text-accent" />
              <p className="mt-3 text-xs font-bold text-foreground">{cap.label}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{cap.detail}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
