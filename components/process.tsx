const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'I dig into your goals, users, and market to define a sharp strategy and roadmap.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'I craft intuitive, on-brand experiences validated through prototypes and testing.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'I engineer robust, scalable products with clean code and rigorous QA.',
  },
  {
    number: '04',
    title: 'Grow',
    description:
      'I launch, measure, and optimize — turning data into compounding growth.',
  },
]

export function Process() {
  return (
    <section id="process" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-primary">/ how I work</p>
          <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            A proven process, end to end
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col bg-card p-8">
              <span className="font-mono text-4xl font-bold text-primary">{step.number}</span>
              <h3 className="mt-6 text-xl font-bold tracking-tight">{step.title}</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
