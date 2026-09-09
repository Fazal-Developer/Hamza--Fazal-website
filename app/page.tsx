import { HeroSection } from '@/components/home/hero-section'
import { AboutSection } from '@/components/home/about-section'
import { SkillsSection } from '@/components/home/skills-section'
import { ProjectsSection } from '@/components/home/projects-section'
import { JourneySection } from '@/components/home/journey-section'
import { ServicesSection } from '@/components/home/services-section'
import { ContactSection } from '@/components/home/contact-section'
import { HashScrollHandler } from '@/components/home/hash-scroll-handler'

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <JourneySection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
