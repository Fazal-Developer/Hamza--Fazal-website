'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { PROJECTS } from '@/lib/data'
import { ArrowUpRight, PlayCircle } from 'lucide-react'
import { GithubIcon } from '@/components/icons'
import { TiltCard } from '@/components/tilt-card'

const CATEGORIES = ['All', 'Android', 'Web', 'Full-Stack'] as const
type Category = (typeof CATEGORIES)[number]

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Category>('All')
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            data-cursor-hover
            className={`rounded-full border px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors ${
              filter === cat
                ? 'border-foreground bg-foreground text-background'
                : 'border-border bg-card text-muted-foreground hover:text-foreground'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <TiltCard maxTilt={2} className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card">
                <div>
                  <Link href={`/projects/${project.slug}`} data-cursor-text="View" className="block">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/30">
                      <img
                        src={project.image}
                        alt={`${project.title} - Software application by Muhammad Hamza Fazal`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute left-4 top-4 flex gap-2">
                        <span className="rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] font-bold text-foreground backdrop-blur-md">
                          {project.category}
                        </span>
                        <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-bold text-accent-foreground backdrop-blur-md">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <div className="space-y-3 p-7">
                    <h2 className="text-2xl font-bold text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h2>
                    <p className="text-xs font-semibold text-muted-foreground">{project.subtitle}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.shortDescription}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[11px] font-mono text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border/50 px-7 pb-7 pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    data-cursor-hover
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground transition-colors hover:text-accent"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>

                  <div className="flex items-center gap-4">
                    {project.playStoreUrl && (
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="flex items-center gap-1 font-mono text-xs font-bold text-emerald-500 hover:text-emerald-400"
                      >
                        <PlayCircle className="h-3.5 w-3.5" />
                        <span>Play Store</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor-hover
                        className="flex items-center gap-1 font-mono text-xs text-muted-foreground hover:text-foreground"
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        <span>Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
