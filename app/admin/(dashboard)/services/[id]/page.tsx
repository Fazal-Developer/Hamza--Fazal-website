import { notFound } from 'next/navigation'
import { readServices } from '@/lib/admin/content-store'
import { ServiceForm } from '../service-form'

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const services = await readServices()
  const service = services.find((s) => s.id === id)

  if (!service) notFound()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">Edit Service</h1>
        <p className="mt-1 text-sm text-muted-foreground">{service.title}</p>
      </div>
      <ServiceForm initial={service} />
    </div>
  )
}
