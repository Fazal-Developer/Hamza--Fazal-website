'use client'

import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'

const services = ['App Development', 'Web Development', 'Digital Marketing', 'Not sure yet']

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState<string>('App Development')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 rounded-3xl border border-border/60 bg-card p-8 md:grid-cols-2 md:p-14">
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-mono text-sm text-primary">/ let&apos;s talk</p>
              <h2 className="mt-3 text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                Have a project in mind?
              </h2>
              <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
                Tell me what you&apos;re building. I&apos;ll get back to you
                within one business day to scope it out.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex flex-col gap-2 font-mono text-sm text-muted-foreground">
                <a href="mailto:hhhdeveloper125@gmail.com" className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary">
                  <span className="font-bold text-primary">Email:</span> hhhdeveloper125@gmail.com
                </a>
                <a href="tel:03235391724" className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-primary">
                  <span className="font-bold text-primary">Phone / Call:</span> 03235391724
                </a>
              </div>
              <a
                href="https://wa.me/923235391724"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 font-semibold text-white transition-all hover:bg-emerald-500 shadow-lg shadow-emerald-950/40"
              >
                <span>💬 Chat on WhatsApp</span>
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="flex flex-col items-start justify-center rounded-2xl border border-primary/40 bg-primary/5 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">Message sent</h3>
              <p className="mt-2 text-muted-foreground">
                Thanks for reaching out — we&apos;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium">What do you need?</span>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelected(s)}
                      className={
                        'rounded-full border px-4 py-2 text-sm transition-colors ' +
                        (selected === s
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border text-muted-foreground hover:text-foreground')
                      }
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about your goals and timeline..."
                  className="resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Send message
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
