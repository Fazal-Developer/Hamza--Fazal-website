import type { Metadata } from 'next'
import Link from 'next/link'
import { PERSONAL_INFO } from '@/lib/data'
import { GraduationCap, Code2, Sparkles, CheckCircle2, ArrowUpRight, Award, Target, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Muhammad Hamza Fazal — Android & Web Developer',
  description:
    'Learn more about Muhammad Hamza Fazal, Software Engineering student, Android Developer, Web Developer, and Digital Marketer in Pakistan.',
  alternates: {
    canonical: `${PERSONAL_INFO.siteUrl}/about`,
  },
  openGraph: {
    title: 'About Muhammad Hamza Fazal — Software Engineer & Developer',
    description:
      'Learn more about Muhammad Hamza Fazal, Software Engineering student, Android Developer, Web Developer, and Digital Marketer.',
    url: `${PERSONAL_INFO.siteUrl}/about`,
    images: [`${PERSONAL_INFO.siteUrl}/hamza-about-pro.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Muhammad Hamza Fazal',
    description:
      'Software Engineering student, Android Developer, Web Developer, and Digital Marketer.',
    images: [`${PERSONAL_INFO.siteUrl}/hamza-about-pro.jpg`],
  },
}

export default function AboutPage() {
  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: PERSONAL_INFO.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'About',
        item: `${PERSONAL_INFO.siteUrl}/about`,
      },
    ],
  }

  return (
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-20 space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      {/* Hero Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-xs font-bold text-accent">
          <Sparkles className="h-3.5 w-3.5" />
          <span>ABOUT HAMZA FAZAL</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Muhammad Hamza Fazal — Developer, Builder, Problem Solver
        </h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          I&apos;m a Software Engineering student and multi-disciplinary developer who loves taking concepts from blank screen to fully functioning Android apps and web platforms.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        {/* Left Column: Portrait */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-2xl -z-10" />
            <div className="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-2xl">
              <img
                src="/hamza-about-pro.jpg"
                alt="Muhammad Hamza Fazal — Software Engineer"
                className="aspect-[4/5] w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Story */}
        <div className="lg:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground">
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
            Building functional, real-world digital solutions.
          </h2>

          <p>
            My journey into technology began with a deep curiosity about how digital applications work under the hood. As a <strong className="text-foreground font-semibold">Software Engineering student</strong>, I have dedicated myself to mastering both mobile app development and modern web technologies.
          </p>

          <p>
            In <strong className="text-foreground font-semibold">Android Development</strong>, I specialize in native Java development using Android Studio, Room Database, and MVVM architecture. Projects like the <strong className="text-foreground font-semibold">Traffic Quiz App</strong> and <strong className="text-foreground font-semibold">Safety 24/7</strong> reflect my commitment to clean code and user-centered design.
          </p>

          <p>
            In <strong className="text-foreground font-semibold">Web Development</strong>, I construct fast, responsive web applications using Next.js, React, TypeScript, and Tailwind CSS. Combined with my background in <strong className="text-foreground font-semibold">Digital Marketing &amp; SEO</strong>, I build products that are not only technically sound but also optimized to reach and convert real users.
          </p>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-foreground">
            <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card p-4">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
              <span>Native Android Architecture (MVVM)</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card p-4">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
              <span>Modern Web Stack (Next.js / React)</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card p-4">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
              <span>Technical SEO &amp; Growth Marketing</span>
            </div>
            <div className="flex items-center gap-2.5 rounded-2xl border border-border bg-card p-4">
              <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
              <span>Clean Code &amp; Continuous Learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="space-y-10 border-t border-border pt-16">
        <div className="space-y-2">
          <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ DEVELOPMENT JOURNEY</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground">Education &amp; Milestones</h2>
        </div>

        <div className="relative border-l-2 border-border pl-6 space-y-10 ml-3">
          {/* Milestone 1 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-foreground bg-background" />
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-accent">Present</span>
              <h3 className="text-xl font-bold text-foreground">Software Engineering Degree Studies</h3>
              <p className="text-xs text-muted-foreground font-medium">Undergraduate Software Engineering</p>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                Studying core computer science topics including Object-Oriented Programming, Data Structures &amp; Algorithms, Database Management Systems, Software Architecture, and Web Technologies.
              </p>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-border bg-background" />
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-accent">2023 — Present</span>
              <h3 className="text-xl font-bold text-foreground">Android &amp; Full-Stack Project Building</h3>
              <p className="text-xs text-muted-foreground font-medium">Independent Software Development</p>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                Developed and published native Android applications including Traffic Quiz App, Learning Hub, Safety 24/7, and full-stack systems like Digital Khata and Chicken Supply Manager.
              </p>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="relative">
            <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-border bg-background" />
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-accent">2023 — Present</span>
              <h3 className="text-xl font-bold text-foreground">Digital Marketing &amp; SEO Execution</h3>
              <p className="text-xs text-muted-foreground font-medium">Web Growth &amp; Content Strategy</p>
              <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                Executing Technical SEO audits, keyword research, site performance optimization, and organic growth strategies for web applications and client projects.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="rounded-3xl border border-border bg-card p-10 text-center space-y-4">
        <h3 className="text-2xl font-extrabold text-foreground">Want to collaborate on a project?</h3>
        <p className="text-sm text-muted-foreground max-w-lg mx-auto">
          I&apos;m always excited to work on new Android applications, modern websites, or digital marketing growth projects.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-bold text-background shadow-md hover:scale-105 transition-all"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
