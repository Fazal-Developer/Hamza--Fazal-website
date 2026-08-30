const testimonials = [
  {
    quote:
      'Hamza felt like an extension of our own team. He shipped our app faster than we thought possible and it just works.',
    name: 'Sara Meyer',
    role: 'CPO, Pulse Fitness',
  },
  {
    quote:
      'The rebuild of our store paid for itself in a quarter. Conversion is up, he was responsive, and the work is beautiful.',
    name: 'Daniel Okafor',
    role: 'Founder, Nord Supply Co.',
  },
  {
    quote:
      'Hamza understands data and creative in equal measure. Our pipeline has never been healthier since he took over.',
    name: 'Lena Petrova',
    role: 'CMO, Bloom Analytics',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">/ clients</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            What clients say
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-8"
            >
              <blockquote className="text-pretty text-lg leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 border-t border-border/60 pt-6">
                <div className="font-medium text-foreground">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
