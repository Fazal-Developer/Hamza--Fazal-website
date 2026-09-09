import Link from 'next/link'
import { User, Briefcase, FolderKanban, GraduationCap, Sparkles, Newspaper, ArrowUpRight } from 'lucide-react'
import { readPersonalInfo, readProjects, readServices, readSkillCategories, readExperiences, readBlogPosts } from '@/lib/admin/content-store'

export default async function AdminDashboardPage() {
  const [personalInfo, projects, services, skillCategories, experiences, blogPosts] = await Promise.all([
    readPersonalInfo(),
    readProjects(),
    readServices(),
    readSkillCategories(),
    readExperiences(),
    readBlogPosts(),
  ])

  const cards = [
    { href: '/admin/personal-info', label: 'Personal Info', icon: User, meta: personalInfo.displayName },
    { href: '/admin/projects', label: 'Projects', icon: FolderKanban, meta: `${projects.length} projects` },
    { href: '/admin/services', label: 'Services', icon: Briefcase, meta: `${services.length} services` },
    { href: '/admin/skills', label: 'Skills', icon: Sparkles, meta: `${skillCategories.length} categories` },
    { href: '/admin/experience', label: 'Experience', icon: GraduationCap, meta: `${experiences.length} entries` },
    { href: '/admin/blog', label: 'Blog', icon: Newspaper, meta: `${blogPosts.length} posts` },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Content Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Edits here save directly to your project files. Commit and push (or ask Claude to) when you&apos;re
          ready to publish.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/40"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-accent">
                <card.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{card.label}</p>
                <p className="text-xs text-muted-foreground">{card.meta}</p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-accent" />
          </Link>
        ))}
      </div>
    </div>
  )
}
