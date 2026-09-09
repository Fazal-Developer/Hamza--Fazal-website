import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import { readProjects } from '@/lib/admin/content-store'
import { DeleteButton } from '@/components/admin/delete-button'
import { deleteProjectAction } from './actions'

export default async function ProjectsAdminPage() {
  const projects = await readProjects()

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-foreground">Projects</h1>
          <p className="mt-1 text-sm text-muted-foreground">{projects.length} projects in your portfolio.</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold text-background transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          New Project
        </Link>
      </div>

      <div className="space-y-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4"
          >
            <div className="flex items-center gap-3">
              <img src={project.image} alt="" className="h-12 w-16 rounded-lg object-cover" />
              <div>
                <p className="text-sm font-bold text-foreground">{project.title}</p>
                <p className="font-mono text-[11px] text-muted-foreground">
                  {project.slug} &middot; {project.category} &middot; {project.status}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/admin/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-accent/50"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </Link>
              <DeleteButton action={deleteProjectAction.bind(null, project.slug)} confirmMessage={`Delete "${project.title}"? This cannot be undone.`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
