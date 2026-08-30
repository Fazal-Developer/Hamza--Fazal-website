const columns = [
  {
    title: 'Services',
    links: ['App Development', 'Web Development', 'Digital Marketing', 'Brand Strategy'],
  },
  {
    title: 'Navigate',
    links: ['About', 'Work', 'Process', 'Contact'],
  },
  {
    title: 'Social',
    links: ['Instagram', 'LinkedIn', 'X / Twitter', 'Dribbble'],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                H
              </span>
              Hamza<span className="text-primary">.</span>
            </a>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Mobile App Developer &amp; Software Engineer creating high-quality Android apps, Learning App, Traffic Quiz App &amp; digital solutions.
            </p>
            <div className="mt-3 flex flex-col gap-1 text-xs text-muted-foreground font-mono">
              <a href="mailto:hhhdeveloper125@gmail.com" className="hover:text-primary transition-colors">hhhdeveloper125@gmail.com</a>
              <a href="tel:03235391724" className="hover:text-primary transition-colors">+92 323 5391724</a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-foreground transition-colors hover:text-primary">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Hamza Fazal. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
