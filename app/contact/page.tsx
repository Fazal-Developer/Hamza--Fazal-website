'use client'

import { useState } from 'react'
import { PERSONAL_INFO } from '@/lib/data'
import { Sparkles, Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!name || !email || !message) {
      setError('Please fill in all required fields.')
      return
    }

    setLoading(true)

    // Simulate clean contact form submission
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
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-20 space-y-16">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>START A CONVERSATION</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Have an idea? Let&apos;s build it.
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Send me a message for custom Android app development, Next.js web projects, or digital marketing growth consulting.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 shadow-lg space-y-6">
            <h2 className="text-2xl font-extrabold text-foreground">Send a Direct Message</h2>

            {submitted ? (
              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-emerald-600 dark:text-emerald-400 space-y-2">
                <div className="flex items-center gap-2 font-bold text-base">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Message Sent Successfully!</span>
                </div>
                <p className="text-xs leading-relaxed">
                  Thank you for reaching out. I will get back to your email ({email || 'inbox'}) as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-full bg-foreground px-5 py-2 text-xs font-bold text-background"
                >
                  Send Another Message
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground outline-none focus:border-foreground"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground outline-none focus:border-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Android App Development Inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground outline-none focus:border-foreground"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">Your Message *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe your project, budget, and timeline..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-xs font-medium text-foreground outline-none focus:border-foreground"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-xs font-bold text-background shadow-md hover:scale-[1.01] transition-all disabled:opacity-50"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Contact Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-border bg-card p-8 space-y-6 shadow-xs">
            <h3 className="text-xl font-bold text-foreground">Direct Contact Info</h3>

            <div className="space-y-4 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Email Address</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Phone / WhatsApp</p>
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Location</p>
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6 space-y-3">
              <p className="font-mono text-xs font-bold text-foreground uppercase">Profiles &amp; Code Repositories:</p>
              <div className="flex gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-foreground hover:bg-secondary"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-xs font-bold text-foreground hover:bg-secondary"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
