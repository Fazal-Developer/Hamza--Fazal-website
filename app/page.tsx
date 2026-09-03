import Link from 'next/link'
import { PERSONAL_INFO, PROJECTS, SERVICES, BLOG_POSTS } from '@/lib/data'
import {
  ArrowUpRight,
  Smartphone,
  Globe,
  TrendingUp,
  Mail,
  Download,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Layout,
  Zap,
  Flame,
  Layers,
  Cpu,
  ShieldCheck,
  Code2,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 4)
  const featuredBlogPosts = BLOG_POSTS.slice(0, 3)

  return (
    <div className="space-y-28 pb-24">
      {/* 1. EXECUTIVE HERO SECTION WITH DEVELOPER PORTRAIT SHOWCASE */}
      <section className="relative overflow-hidden pt-8 md:pt-16 pb-16 min-h-[85vh] flex items-center">
        {/* Soft Ambient Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -z-10 h-[500px] w-[750px] -translate-x-1/2 rounded-full bg-accent/10 blur-[150px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 md:px-8 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Hero Column: Typography & Professional Positioning */}
            <div className="lg:col-span-7 space-y-7 z-10">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/90 px-4 py-1.5 font-mono text-xs font-bold text-foreground backdrop-blur-md shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-accent">SOFTWARE ENGINEER &bull; ANDROID &bull; FULL-STACK &bull; SEO</span>
              </div>

              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1]">
                  Hi, I&apos;m Muhammad Hamza Fazal.
                </h1>
                <p className="mt-3 text-2xl font-extrabold tracking-tight text-muted-foreground sm:text-3xl md:text-4xl">
                  I build digital products that people actually use.
                </p>
              </div>

              <p className="text-base leading-relaxed text-foreground/90 max-w-xl sm:text-lg font-semibold border-l-2 border-accent/60 pl-4">
                &ldquo;{PERSONAL_INFO.positioning}&rdquo;
              </p>

              <p className="text-sm leading-relaxed text-muted-foreground max-w-lg">
                {PERSONAL_INFO.bio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 text-xs font-mono font-bold tracking-wider text-background transition-all hover:opacity-90 hover:scale-105 shadow-xl shadow-accent/15"
                >
                  <span>EXPLORE MY WORK</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-xs font-mono font-bold tracking-wider text-foreground hover:bg-secondary transition-all shadow-xs"
                >
                  <span>LET&apos;S TALK</span>
                  <ChevronRight className="h-4 w-4 text-accent" />
                </Link>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-4 text-xs font-mono font-bold tracking-wider text-muted-foreground hover:text-foreground hover:border-accent transition-all shadow-xs"
                >
                  <Download className="h-4 w-4 text-accent" />
                  <span>RESUME</span>
                </Link>
              </div>

              {/* Direct Social & Contact Links */}
              <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-border text-xs font-mono font-bold text-muted-foreground">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <GithubIcon className="h-4 w-4 text-accent" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4 text-accent" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
            </div>

            {/* Right Hero Column: Refined Developer Portrait Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-3xl bg-accent/20 blur-2xl -z-10" />

                <div className="overflow-hidden rounded-3xl border border-border bg-card/95 p-4 shadow-2xl space-y-4 backdrop-blur-xl">
                  {/* Portrait & Live Availability Badge */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-secondary border border-border">
                    <img
                      src="/hamza-hero-pro.jpg"
                      alt="Muhammad Hamza Fazal — Software Engineer and Android Developer"
                      className="h-full w-full object-cover"
                    />

                    {/* Floating Glass Status Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-border/80 bg-card/90 p-3.5 backdrop-blur-md shadow-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-mono text-[10px] font-bold text-accent uppercase tracking-wider">
                            SOFTWARE ENGINEER &bull; DEVELOPER
                          </p>
                          <p className="text-sm font-bold text-foreground">Muhammad Hamza Fazal</p>
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1">
                          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                          <span className="font-mono text-[10px] font-bold text-emerald-500">AVAILABLE</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Core Stack Badges */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono font-bold pt-1">
                    <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 p-2.5 text-foreground">
                      <Smartphone className="h-4 w-4 text-accent shrink-0" />
                      <span className="truncate">Java &bull; Room DB</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 p-2.5 text-foreground">
                      <Globe className="h-4 w-4 text-cyan-400 shrink-0" />
                      <span className="truncate">Next.js &bull; React</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 p-2.5 text-foreground">
                      <Flame className="h-4 w-4 text-amber-500 shrink-0" />
                      <span className="truncate">Firebase &bull; Cloud</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl border border-border bg-secondary/50 p-2.5 text-foreground">
                      <TrendingUp className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span className="truncate">SEO &bull; Analytics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES (01, 02, 03) */}
      <section className="border-y border-border/80 bg-secondary/20 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-3">
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ 01 &bull; ENGINEERING CAPABILITIES</p>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl uppercase">
              Turning Complex Ideas Into High-Performance Digital Products.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* 01 Android */}
            <div className="group rounded-3xl border border-border bg-card p-8 space-y-4 shadow-xl hover:border-accent/60 transition-all hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-extrabold text-muted-foreground/50 group-hover:text-accent transition-colors">01</span>
                <Smartphone className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Android Architecture</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Engineered with native Java, XML, MVVM patterns, LiveData, and Room Database for offline-first resilience and performance.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-accent">
                Java &bull; Room DB &bull; MVVM &bull; Firebase
              </div>
            </div>

            {/* 02 Web */}
            <div className="group rounded-3xl border border-border bg-card p-8 space-y-4 shadow-xl hover:border-accent/60 transition-all hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-extrabold text-muted-foreground/50 group-hover:text-accent transition-colors">02</span>
                <Globe className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Web Engineering</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Modern full-stack web applications utilizing Next.js 16 App Router, React 19, TypeScript, and responsive Tailwind design systems.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-accent">
                Next.js &bull; React &bull; TypeScript &bull; Tailwind
              </div>
            </div>

            {/* 03 Digital Marketing */}
            <div className="group rounded-3xl border border-border bg-card p-8 space-y-4 shadow-xl hover:border-accent/60 transition-all hover:scale-[1.02]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-extrabold text-muted-foreground/50 group-hover:text-accent transition-colors">03</span>
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Growth &amp; Technical SEO</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                End-to-end technical SEO architecture, structured Schema JSON-LD, Core Web Vitals speed optimization, and data-driven growth.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-accent">
                Technical SEO &bull; Schemas &bull; Google Analytics
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SHOWCASE */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ 02 &bull; FEATURED WORK</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl uppercase">
              Featured Software Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline font-mono"
          >
            <span>VIEW ALL PROJECTS</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-xl transition-all duration-300 hover:border-accent/60 hover:scale-[1.01]"
            >
              <div>
                {/* Project Image Mockup */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/30 border-b border-border">
                  <img
                    src={project.image}
                    alt={`${project.title} — Software Application by Muhammad Hamza Fazal`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] font-bold text-foreground backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] font-bold text-accent-foreground backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-accent">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="px-7 pb-7 pt-2 border-t border-border/40 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-accent transition-colors"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-muted-foreground hover:text-foreground flex items-center gap-1"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES TEASER */}
      <section className="border-t border-border/80 bg-secondary/15 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-3">
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ 03 &bull; SERVICES &amp; SOLUTIONS</p>
            <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl uppercase">
              Full-Lifecycle Development Services
            </h2>
            <p className="text-sm text-muted-foreground">
              Tailored software engineering, native mobile apps, web solutions, and digital growth strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="rounded-3xl border border-border bg-card p-7 space-y-4 shadow-xl hover:border-accent/40 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-accent font-bold">
                  {srv.iconName === 'Smartphone' && <Smartphone className="h-6 w-6" />}
                  {srv.iconName === 'Globe' && <Globe className="h-6 w-6" />}
                  {srv.iconName === 'Layout' && <Layout className="h-6 w-6" />}
                  {srv.iconName === 'Flame' && <Flame className="h-6 w-6" />}
                  {srv.iconName === 'TrendingUp' && <TrendingUp className="h-6 w-6" />}
                  {srv.iconName === 'Zap' && <Zap className="h-6 w-6" />}
                </div>

                <h3 className="text-lg font-bold text-foreground">{srv.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{srv.description}</p>
                <div className="pt-2 text-xs font-mono font-bold text-accent flex items-center gap-1">
                  <Link href="/services" className="hover:underline flex items-center gap-1">
                    <span>View Deliverables</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LATEST BLOG POSTS */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ 04 &bull; TECHNICAL WRITING</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground sm:text-4xl uppercase">
              Latest Engineering Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-bold text-accent hover:underline font-mono"
          >
            <span>VIEW ALL ARTICLES</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredBlogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xl transition-all hover:border-accent/50 hover:shadow-2xl"
            >
              <div className="space-y-3">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary">
                  <img src={post.coverImage} alt={`${post.title} — Engineering Article by Muhammad Hamza Fazal`} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-muted-foreground">
                  <span className="text-accent">{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-border/50 text-xs font-mono font-bold text-foreground flex items-center justify-between">
                <span>Read Full Article</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. CONTACT CALLOUT */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 -translate-y-1/2 bg-accent/15 blur-[120px]" />
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-5xl uppercase">
            Have an idea? Let&apos;s build it.
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Whether you need a native Android app, a high-performance Next.js web platform, or full technical SEO optimization, I&apos;m ready to help turn your vision into reality.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-foreground px-8 py-4 text-xs font-mono font-bold tracking-wider text-background shadow-xl hover:scale-105 transition-all"
            >
              GET IN TOUCH &rarr;
            </Link>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="rounded-full border border-border bg-background px-8 py-4 text-xs font-mono font-bold tracking-wider text-foreground hover:bg-secondary transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
