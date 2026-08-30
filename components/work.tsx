import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Learning App',
    category: 'Android App / Education',
    image: '/learning-app.jpg',
    description: 'An interactive educational & skill-building Android application featuring intuitive lesson modules, quizzes, and learning progress tracking.',
    link: 'https://play.google.com/store/apps/details?id=com.hhhdevelpoer.learning',
    packageId: 'com.hhhdevelpoer.learning',
  },
  {
    title: 'Traffic Quiz App',
    category: 'Android App / Utilities',
    image: '/traffic-quiz-app.jpg',
    description: 'A driving rules and traffic sign quiz app designed to help learners and drivers prepare for driving tests and road safety mastery.',
    link: 'https://play.google.com/store/apps/details?id=com.hhhdeveloper.trafficquizapp&pcampaignid=web_share',
    packageId: 'com.hhhdeveloper.trafficquizapp',
  },
]

export function Work() {
  return (
    <section id="work" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-sm text-primary">/ portfolio & apps</p>
            <h2 className="mt-3 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Featured Google Play Apps
            </h2>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.hhhdevelpoer.learning"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Explore Google Play Apps
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group flex flex-col justify-between rounded-2xl border border-border/60 bg-card p-6 transition-all hover:border-primary/50">
              <div>
                <div className="relative overflow-hidden rounded-xl border border-border/60 bg-background">
                  <img
                    src={project.image}
                    alt={`${project.title} — Google Play Android App by Hamza Fazal HHH Developer`}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 rounded-full bg-background/90 px-3 py-1 text-xs font-mono font-medium text-primary backdrop-blur-md">
                    Google Play
                  </div>
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs uppercase tracking-wider text-primary">
                      {project.category}
                    </p>
                    <span className="font-mono text-[11px] text-muted-foreground">{project.packageId}</span>
                  </div>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-border/40 pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-95"
                >
                  View on Google Play Store
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
