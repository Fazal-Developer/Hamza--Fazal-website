import Link from 'next/link'
import { redirect } from 'next/navigation'
import { LayoutDashboard, User, Briefcase, FolderKanban, GraduationCap, Sparkles, Newspaper, LogOut, ExternalLink } from 'lucide-react'
import { hasValidSession, isAdminEnabled } from '@/lib/admin/auth'
import { logoutAction } from '../login/actions'

const NAV = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/personal-info', label: 'Personal Info', icon: User },
  { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
  { href: '/admin/services', label: 'Services', icon: Briefcase },
  { href: '/admin/skills', label: 'Skills', icon: Sparkles },
  { href: '/admin/experience', label: 'Experience', icon: GraduationCap },
  { href: '/admin/blog', label: 'Blog', icon: Newspaper },
]

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  if (!isAdminEnabled() || !(await hasValidSession())) {
    redirect('/admin/login')
  }

  return (
    <div className="min-h-[100dvh] bg-secondary/20 pt-16">
      <div className="mx-auto flex max-w-7xl gap-8 px-5 py-8 md:px-8">
        <aside className="hidden w-56 shrink-0 lg:block">
          <div className="sticky top-24 space-y-1 rounded-2xl border border-border bg-card p-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-border" />
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-bold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <ExternalLink className="h-4 w-4" />
              View Site
            </a>
            <form action={logoutAction}>
              <button
                type="submit"
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-left text-xs font-bold text-red-600 transition-colors hover:bg-red-500/10 dark:text-red-400"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </form>
          </div>
        </aside>

        <div className="min-w-0 flex-1 pb-16">{children}</div>
      </div>
    </div>
  )
}
