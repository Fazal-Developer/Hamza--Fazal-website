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
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 4)
  const featuredBlogPosts = BLOG_POSTS.slice(0, 3)

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 md:pt-20 pb-16">
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -z-10 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-accent/10 blur-[130px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-4 py-1.5 font-mono text-xs font-bold text-foreground backdrop-blur-md shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                <span>SOFTWARE ENGINEER • ANDROID • WEB • DIGITAL</span>
              </div>

              <div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1]">
                  Hi, I&apos;m Hamza Fazal.
                </h1>
                <p className="mt-3 text-2xl font-extrabold tracking-tight text-muted-foreground sm:text-3xl md:text-4xl">
                  I build digital products that people actually use.
                </p>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground max-w-2xl sm:text-lg">
                {PERSONAL_INFO.bio}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background transition-all hover:opacity-90 hover:scale-[1.01] shadow-md"
                >
                  <span>View My Work</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-bold text-foreground transition-all hover:bg-secondary shadow-xs"
                >
                  <span>Let&apos;s Talk</span>
                </Link>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-foreground underline decoration-border underline-offset-4 transition-colors px-2 py-2"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Resume</span>
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                <span className="font-mono text-xs font-bold text-muted-foreground uppercase">Connect:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary transition-colors"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card text-foreground hover:bg-secondary transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Developer Visual Column */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="absolute -inset-4 rounded-3xl bg-accent/15 blur-2xl -z-10" />

                <div className="overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-2xl space-y-4">
                  {/* Portrait & Developer Card Header */}
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-secondary/40 border border-border">
                    <img
                      src="/hamza-hero-pro.jpg"
                      alt="Muhammad Hamza Fazal — Software Engineer & Android Developer"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-3 left-3 right-3 rounded-xl border border-border bg-card/90 p-3 backdrop-blur-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-mono text-[10px] font-bold text-accent uppercase">ANDROID &amp; WEB DEVELOPER</p>
                          <p className="text-xs font-bold text-foreground">Hamza Fazal</p>
                        </div>
                        <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                      </div>
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 text-[11px] font-mono font-bold">
                    <span className="rounded-lg border border-border bg-background px-3 py-1 text-foreground">📱 Java / Android</span>
                    <span className="rounded-lg border border-border bg-background px-3 py-1 text-foreground">🌐 Next.js &amp; React</span>
                    <span className="rounded-lg border border-border bg-background px-3 py-1 text-foreground">🔥 Firebase &amp; Room DB</span>
                    <span className="rounded-lg border border-border bg-background px-3 py-1 text-foreground">📈 SEO &amp; Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST / INTRO SECTION (01, 02, 03 Capabilities) */}
      <section className="border-y border-border/80 bg-secondary/20 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-3">
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ CORE CAPABILITIES</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Turning ideas into digital products.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* 01 Android */}
            <div className="rounded-3xl border border-border bg-card p-8 space-y-4 shadow-xs hover:border-border/60 transition-all">
              <span className="font-mono text-3xl font-extrabold text-muted-foreground/60">01</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground font-bold">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Android Development</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Building modern Android applications with clean architecture and user-focused interfaces.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-muted-foreground">
                Java • Room DB • MVVM • Firebase
              </div>
            </div>

            {/* 02 Web */}
            <div className="rounded-3xl border border-border bg-card p-8 space-y-4 shadow-xs hover:border-border/60 transition-all">
              <span className="font-mono text-3xl font-extrabold text-muted-foreground/60">02</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground font-bold">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Web Development</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Creating responsive, fast and modern websites and web applications.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-muted-foreground">
                Next.js • React • TypeScript • WordPress
              </div>
            </div>

            {/* 03 Digital Marketing */}
            <div className="rounded-3xl border border-border bg-card p-8 space-y-4 shadow-xs hover:border-border/60 transition-all">
              <span className="font-mono text-3xl font-extrabold text-muted-foreground/60">03</span>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground font-bold">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Digital Marketing</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Helping digital products reach the right audience through SEO, content and growth strategies.
              </p>
              <div className="pt-2 text-xs font-mono font-bold text-muted-foreground">
                SEO • Keywords • Analytics • Growth
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SHOWCASE */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ FEATURED WORK</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Featured Software Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-bold text-foreground hover:underline"
          >
            <span>View All Projects</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-foreground/40 hover:shadow-xl"
            >
              <div>
                {/* Project Image Mockup */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded-full bg-background/90 px-3 py-1 font-mono text-[10px] font-bold text-foreground backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-foreground/90 px-3 py-1 font-mono text-[10px] font-bold text-background backdrop-blur-md">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-muted-foreground">{project.subtitle}</p>
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
      <section className="border-t border-border/80 bg-secondary/10 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16 space-y-3">
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ SERVICES &amp; SOLUTIONS</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Professional Development Services
            </h2>
            <p className="text-sm text-muted-foreground">
              End-to-end software engineering, mobile app development, web solutions, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="rounded-3xl border border-border bg-card p-7 space-y-4 shadow-xs hover:border-foreground/30 transition-all">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-foreground font-bold">
                  {srv.iconName === 'Smartphone' && <Smartphone className="h-6 w-6" />}
                  {srv.iconName === 'Globe' && <Globe className="h-6 w-6" />}
                  {srv.iconName === 'Layout' && <Layout className="h-6 w-6" />}
                  {srv.iconName === 'Flame' && <Flame className="h-6 w-6" />}
                  {srv.iconName === 'TrendingUp' && <TrendingUp className="h-6 w-6" />}
                  {srv.iconName === 'Zap' && <Zap className="h-6 w-6" />}
                </div>

                <h3 className="text-lg font-bold text-foreground">{srv.title}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground">{srv.description}</p>
                <div className="pt-2 text-xs font-mono font-bold text-foreground flex items-center gap-1">
                  <Link href="/services" className="hover:underline flex items-center gap-1">
                    View Deliverables <ArrowUpRight className="h-3.5 w-3.5" />
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
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-widest">/ TECHNICAL WRITING</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Latest Blog Articles
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-bold text-foreground hover:underline"
          >
            <span>View All Articles</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredBlogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-xs transition-all hover:border-foreground/40 hover:shadow-lg"
            >
              <div className="space-y-3">
                <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl bg-secondary">
                  <img src={post.coverImage} alt={post.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-muted-foreground">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-border/50 text-xs font-mono font-bold text-foreground flex items-center justify-between">
                <span>Read Article</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. CONTACT CALLOUT */}
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 -translate-y-1/2 bg-accent/10 blur-[100px]" />
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-5xl">
            Have an idea? Let&apos;s build it.
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Whether you need a custom Android app, a high-performance website, or digital marketing growth, I&apos;m ready to help turn your vision into reality.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-foreground px-8 py-4 text-sm font-bold text-background shadow-md transition-all hover:scale-105"
            >
              Get In Touch
            </Link>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="rounded-full border border-border bg-background px-8 py-4 text-sm font-bold text-foreground hover:bg-secondary transition-colors"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
