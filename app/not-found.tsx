import Link from 'next/link'
import { ArrowLeft, Home, FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] w-full items-center justify-center px-5 py-12">
      <div className="mx-auto max-w-md text-center space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-foreground font-mono font-bold text-2xl">
          <FileQuestion className="h-8 w-8 text-accent" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest">
            / 404 — PAGE NOT FOUND
          </span>
          <h1 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            Route Unavailable
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The page you are looking for does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs font-bold text-background shadow-md hover:scale-105 transition-all"
          >
            <Home className="h-4 w-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs font-bold text-foreground hover:bg-secondary transition-colors"
          >
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
