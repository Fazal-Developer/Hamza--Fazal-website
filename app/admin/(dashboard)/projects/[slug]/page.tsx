import { notFound } from 'next/navigation'
import { readProjects } from '@/lib/admin/content-store'
import { ProjectForm } from '../project-form'

export default async function EditProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const projects = await readProjects()
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Edit Project</h1>
        <p className="mt-1 text-sm text-muted-foreground">{project.title}</p>
      </div>
      <ProjectForm initial={project} />
    </div>
  )
}
