import { HeroSection } from '@/components/home/hero-section'
import { AboutPreviewSection } from '@/components/home/about-preview-section'
import { ServicesPreviewSection } from '@/components/home/services-preview-section'
import { FeaturedProjectsSection } from '@/components/home/featured-projects-section'
import { SkillsPreviewSection } from '@/components/home/skills-preview-section'
import { ContactCtaSection } from '@/components/home/contact-cta-section'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreviewSection />
      <ServicesPreviewSection />
      <FeaturedProjectsSection />
      <SkillsPreviewSection />
      <ContactCtaSection />
    </>
  )
}
