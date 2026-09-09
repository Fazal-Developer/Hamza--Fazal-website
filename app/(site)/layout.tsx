import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider'
import { PageTransition } from '@/components/providers/page-transition'
import { CustomCursor } from '@/components/cursor/custom-cursor'
import { LoadingScreen } from '@/components/loading-screen'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
