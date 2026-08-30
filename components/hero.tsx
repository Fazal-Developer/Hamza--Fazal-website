import { ArrowUpRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* background visual */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/hero-visual.png"
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-full object-cover opacity-30 md:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/60" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-1.5 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available for freelance work — 2026
            </div>

            <p className="font-mono text-sm text-primary">Hi, I&apos;m Hamza Fazal</p>

            <h1 className="mt-3 max-w-3xl text-balance text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              I build Android
              <br />
              apps that <span className="text-primary">rank &amp; scale</span>.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Mobile App Engineer &amp; Software Developer creating Google Play applications like
              <strong className="text-foreground font-semibold"> Learning App</strong> and
              <strong className="text-foreground font-semibold"> Traffic Quiz App</strong>. Available for custom Android &amp; Web development.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-lg shadow-primary/20"
              >
                Hire me
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                View My Apps
              </a>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
              {[
                { value: '80+', label: 'Projects shipped' },
                { value: '5 yrs', label: 'Experience' },
                { value: '30+', label: 'Happy clients' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold tracking-tight md:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* portrait */}
          <div className="relative mx-auto w-full max-w-sm md:max-w-none">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/25 blur-2xl" aria-hidden="true" />
            <div className="group overflow-hidden rounded-3xl border border-primary/30 bg-card p-2 shadow-2xl transition-all hover:border-primary/60">
              <img
                src="/hamza-hero-pro.jpg"
                alt="Hamza Fazal — Mobile App Developer & Software Engineer"
                className="aspect-square w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
