import { readSkillCategories } from '@/lib/admin/content-store'
import { SkillCategoryForm } from './skill-category-form'

export default async function SkillsAdminPage() {
  const categories = await readSkillCategories()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Skills</h1>
        <p className="mt-1 text-sm text-muted-foreground">{categories.length} skill categories.</p>
      </div>

      <div className="space-y-4">
        {categories.map((cat, i) => (
          <SkillCategoryForm key={cat.category} index={i} initial={cat} />
        ))}
      </div>

      <div>
        <h2 className="mb-3 text-sm font-bold text-foreground">Add a new category</h2>
        <SkillCategoryForm />
      </div>
    </div>
  )
}
