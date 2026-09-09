'use client'

import { useState } from 'react'
import { PERSONAL_INFO } from '@/lib/data'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { Reveal } from '@/components/reveal'
import { Magnetic } from '@/components/magnetic'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name || !email || !message) {
      setError('Please fill in all required fields.')
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
    }, 1000)
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-36">
      <Reveal>
        <h2 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Have an idea?
          <br />
          Let&apos;s build it.
        </h2>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          Send a message for Android app development, Next.js web projects, or digital marketing growth
          consulting.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-lg md:p-10">
            {submitted ? (
              <div className="space-y-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-600 dark:text-emerald-400">
                <div className="flex items-center gap-2 text-base font-bold">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Message sent successfully</span>
                </div>
                <p className="text-xs leading-relaxed">
                  Thanks for reaching out. I&apos;ll reply to your email as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  data-cursor-hover
                  className="mt-2 rounded-full bg-foreground px-5 py-2 text-xs font-bold text-background"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-bold text-red-600 dark:text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-xs font-bold text-foreground">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-xs font-bold text-foreground">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-bold text-foreground">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Android App Development Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-bold text-foreground">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    required
                    placeholder="Describe your project, budget, and timeline"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
                  />
                </div>

                <Magnetic className="block">
                  <button
                    type="submit"
                    disabled={loading}
                    data-cursor-hover
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-xs font-bold text-background shadow-md transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="space-y-6 rounded-3xl border border-border bg-card p-8">
            <h3 className="text-xl font-bold text-foreground">Direct contact info</h3>

            <div className="space-y-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline" data-cursor-hover>
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Phone / WhatsApp</p>
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Location</p>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3 border-t border-border pt-6">
              <p className="font-mono text-xs font-bold uppercase text-foreground">Profiles</p>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-foreground hover:border-accent/50"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-foreground hover:border-accent/50"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
