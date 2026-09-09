import { ServiceForm } from '../service-form'

export default function NewServicePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-black tracking-tight text-foreground">New Service</h1>
      </div>
      <ServiceForm />
    </div>
  )
}
