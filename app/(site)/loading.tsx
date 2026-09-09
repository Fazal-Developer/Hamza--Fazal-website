export default function Loading() {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-muted border-t-accent" />
        <p className="font-mono text-xs font-bold text-muted-foreground uppercase tracking-widest animate-pulse">
          Loading Muhammad Hamza Fazal Portfolio...
        </p>
      </div>
    </div>
  )
}
