import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import { readServices } from '@/lib/admin/content-store'
import { DeleteButton } from '@/components/admin/delete-button'
import { deleteServiceAction } from './actions'

export default async function ServicesAdminPage() {
  const services = await readServices()

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-foreground">Services</h1>
          <p className="mt-1 text-sm text-muted-foreground">{services.length} services offered.</p>
        </div>
        <Link
          href="/admin/services/new"
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-xs font-bold text-background transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          New Service
        </Link>
      </div>

      <div className="space-y-3">
        {services.map((service) => (
          <div key={service.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4">
            <div>
              <p className="text-sm font-bold text-foreground">{service.title}</p>
              <p className="font-mono text-[11px] text-muted-foreground">{service.id}</p>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/admin/services/${service.id}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-foreground transition-colors hover:border-accent/50"
              >
                <Pencil className="h-3.5 w-3.5" />
                Edit
              </Link>
              <DeleteButton action={deleteServiceAction.bind(null, service.id)} confirmMessage={`Delete "${service.title}"?`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
