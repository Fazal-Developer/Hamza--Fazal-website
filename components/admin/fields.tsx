'use client'

export function Field({
  label,
  name,
  defaultValue,
  required,
  placeholder,
  type = 'text',
}: {
  label: string
  name: string
  defaultValue?: string
  required?: boolean
  placeholder?: string
  type?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
      />
    </div>
  )
}

export function TextAreaField({
  label,
  name,
  defaultValue,
  required,
  placeholder,
  rows = 4,
}: {
  label: string
  name: string
  defaultValue?: string
  required?: boolean
  placeholder?: string
  rows?: number
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
      />
    </div>
  )
}

/** One item per line; saved back to a string[] field. */
export function ListField({
  label,
  name,
  defaultValue,
  placeholder,
  rows = 4,
}: {
  label: string
  name: string
  defaultValue?: string[]
  placeholder?: string
  rows?: number
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold text-foreground">
        {label} <span className="font-normal text-muted-foreground">(one per line)</span>
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        defaultValue={(defaultValue ?? []).join('\n')}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 font-mono text-xs text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
      />
    </div>
  )
}

export function SelectField({
  label,
  name,
  defaultValue,
  options,
}: {
  label: string
  name: string
  defaultValue?: string
  options: string[]
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold text-foreground">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue={defaultValue}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
