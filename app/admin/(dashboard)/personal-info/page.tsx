import { readPersonalInfo } from '@/lib/admin/content-store'
import { PersonalInfoForm } from './personal-info-form'

export default async function PersonalInfoAdminPage() {
  const data = await readPersonalInfo()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Personal Info</h1>
        <p className="mt-1 text-sm text-muted-foreground">Your name, bio, and contact details used across the site.</p>
      </div>
      <PersonalInfoForm initial={data} />
    </div>
  )
}
