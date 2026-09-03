import { MetadataRoute } from 'next'
import { PERSONAL_INFO } from '@/lib/data'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = PERSONAL_INFO.siteUrl

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
