const skills = [
  'React & Next.js',
  'React Native / Flutter',
  'Node.js & APIs',
  'UI/UX Design',
  'SEO & Paid Ads',
  'Analytics & CRO',
]

export function About() {
  return (
    <section id="about" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* photo */}
          <div className="relative order-last mx-auto w-full max-w-md md:order-first">
            <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/20 blur-2xl" aria-hidden="true" />
            <div className="group overflow-hidden rounded-3xl border border-primary/30 bg-card p-2 shadow-2xl transition-all hover:border-primary/60">
              <img
                src="/hamza-about-pro.jpg"
                alt="Hamza Fazal — Mobile App Developer & Software Engineer"
                className="aspect-[3/4] w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* bio */}
          <div>
            <p className="font-mono text-sm text-primary">/ about me</p>
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Turning ideas into products people love
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I&apos;m Hamza Fazal, a freelance developer and digital marketer
                with over five years of experience helping startups and brands
                bring their ideas to life. I care deeply about clean code,
                thoughtful design, and results that actually move the business.
              </p>
              <p>
                Whether you need a mobile app, a modern website, or a marketing
                engine that drives real growth, I work as a hands-on partner —
                from the first conversation to launch and beyond.
              </p>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {skill}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Let&apos;s work together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
