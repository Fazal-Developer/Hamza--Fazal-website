import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { PERSONAL_INFO } from '@/lib/data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono',
})

const siteUrl = PERSONAL_INFO.siteUrl

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Muhammad Hamza Fazal — Android Developer, Web Developer & Digital Marketer',
    template: '%s | Muhammad Hamza Fazal',
  },
  description:
    'Official website of Muhammad Hamza Fazal. Native Android App Developer (Java, Room DB, Firebase, MVVM), Next.js Web Developer, and Digital Marketing SEO Strategist in Pakistan.',
  authors: [{ name: 'Muhammad Hamza Fazal', url: siteUrl }],
  creator: 'Muhammad Hamza Fazal',
  publisher: 'Muhammad Hamza Fazal',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Muhammad Hamza Fazal — Native Android & Web Developer Portfolio',
    description:
      'Building digital products that turn ideas into real-world experiences. Explore native Android mobile apps, Next.js web applications, and digital marketing growth strategies.',
    url: siteUrl,
    siteName: 'Muhammad Hamza Fazal Portfolio',
    images: [
      {
        url: `${siteUrl}/hamza-hero-pro.jpg`,
        width: 1200,
        height: 630,
        alt: 'Muhammad Hamza Fazal — Android and Web Developer',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Hamza Fazal — Android & Web Developer',
    description:
      'Native Android Development, Next.js Web Solutions, and SEO Digital Growth Strategist.',
    images: [`${siteUrl}/hamza-hero-pro.jpg`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Hamza Fazal',
    givenName: 'Muhammad Hamza',
    familyName: 'Fazal',
    alternateName: 'Hamza Fazal',
    jobTitle: ['Android Developer', 'Web Developer', 'Digital Marketing SEO Strategist'],
    url: 'https://hamzafazal.deesu.org',
    image: 'https://hamzafazal.deesu.org/hamza-hero-pro.jpg',
    sameAs: [
      'https://github.com/hamzafazal',
      'https://www.linkedin.com/in/hamzafazal-developer/',
    ],
    email: 'hhhdeveloper125@gmail.com',
    nationality: 'Pakistan',
    knowsAbout: [
      'Android App Development',
      'Java',
      'Android Studio',
      'Room Database',
      'Firebase',
      'MVVM Architecture',
      'Web Development',
      'Next.js',
      'React',
      'Tailwind CSS',
      'TypeScript',
      'Digital Marketing',
      'Search Engine Optimization (SEO)',
      'Content Strategy',
    ],
  }

  const jsonLdWebsite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Muhammad Hamza Fazal Portfolio',
    url: siteUrl,
    description: 'Official portfolio and software engineering showcase of Muhammad Hamza Fazal.',
    publisher: {
      '@type': 'Person',
      name: 'Muhammad Hamza Fazal',
    },
  }

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased selection:bg-foreground selection:text-background min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
