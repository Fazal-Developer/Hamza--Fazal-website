import { ProjectForm } from '../project-form'

export default function NewProjectPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">New Project</h1>
        <p className="mt-1 text-sm text-muted-foreground">Add a new project to your portfolio.</p>
      </div>
      <ProjectForm />
    </div>
  )
}
