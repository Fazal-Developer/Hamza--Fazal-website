import { readExperiences } from '@/lib/admin/content-store'
import { ExperienceForm } from './experience-form'

export default async function ExperienceAdminPage() {
  const experiences = await readExperiences()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Experience</h1>
        <p className="mt-1 text-sm text-muted-foreground">{experiences.length} entries in your journey timeline.</p>
      </div>

      <div className="space-y-4">
        {experiences.map((exp, i) => (
          <ExperienceForm key={`${exp.role}-${i}`} index={i} initial={exp} />
        ))}
      </div>

      <div>
        <h2 className="mb-3 text-sm font-bold text-foreground">Add a new entry</h2>
        <ExperienceForm />
      </div>
    </div>
  )
}
