const TECH = [
  { slug: 'openjdk', label: 'Java' },
  { slug: 'android', label: 'Android' },
  { slug: 'androidstudio', label: 'Android Studio' },
  { slug: 'firebase', label: 'Firebase' },
  { slug: 'nextdotjs', label: 'Next.js' },
  { slug: 'react', label: 'React' },
  { slug: 'typescript', label: 'TypeScript' },
  { slug: 'tailwindcss', label: 'Tailwind CSS' },
  { slug: 'wordpress', label: 'WordPress' },
  { slug: 'git', label: 'Git' },
  { slug: 'vercel', label: 'Vercel' },
  { slug: 'googleanalytics', label: 'Google Analytics' },
]

function TechRow({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={ariaHidden}>
      {TECH.map((t) => (
        <div key={t.slug} className="flex items-center gap-2.5 opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0">
          <img
            src={`https://cdn.simpleicons.org/${t.slug}/94a3b8`}
            alt=""
            aria-hidden="true"
            className="h-5 w-5 shrink-0"
            loading="lazy"
          />
          <span className="whitespace-nowrap font-mono text-xs font-semibold text-muted-foreground">
            {t.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export function TechMarquee() {
  return (
    <div className="relative overflow-hidden border-t border-border/60 py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max motion-safe:animate-[marquee_32s_linear_infinite] motion-reduce:flex-wrap motion-reduce:gap-10">
        <TechRow />
        <TechRow ariaHidden />
      </div>
    </div>
  )
}
