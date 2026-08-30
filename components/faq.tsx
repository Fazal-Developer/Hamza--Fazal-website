'use client'

import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'What services does Hamza Fazal provide?',
    answer:
      'Hamza Fazal specializes in native and cross-platform Android mobile app development (Flutter, Java/Kotlin), modern web development (Next.js, React, Tailwind CSS), Play Store ASO optimization, and app UI/UX design.',
  },
  {
    question: 'How can I download the Learning App and Traffic Quiz App?',
    answer:
      'You can download both applications directly from the Google Play Store. Learning App (com.hhhdevelpoer.learning) and Traffic Quiz App (com.hhhdeveloper.trafficquizapp) are available for all Android devices.',
  },
  {
    question: 'How do I start a custom mobile app or web development project?',
    answer:
      'You can reach out via WhatsApp (+92 323 5391724) or email (hhhdeveloper125@gmail.com). We will discuss your vision, scope, timeline, and cost estimate within 24 hours.',
  },
  {
    question: 'What technologies are used for mobile and web apps?',
    answer:
      'For mobile apps, we use Flutter, Android SDK, Kotlin, Java, Firebase, and REST APIs. For websites, we use Next.js 16, React, TypeScript, Node.js, and modern CSS frameworks like Tailwind CSS.',
  },
  {
    question: 'Can you help publish my app on the Google Play Store?',
    answer:
      'Yes! We handle full Play Console deployment, including app signing, privacy policies, graphics creation, ASO (App Store Optimization), and Google Play review approval.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="border-t border-border/60 py-20 md:py-28 bg-card/20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-mono text-xs text-primary">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground max-w-xl mx-auto">
            Everything you need to know about Android app development, publishing, and hiring HHH Developer.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md transition-all hover:border-primary/40"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between p-6 text-left font-medium transition-colors hover:text-primary"
                >
                  <span className="text-lg font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border/40 px-6 py-5 text-muted-foreground leading-relaxed text-sm md:text-base bg-background/30">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
