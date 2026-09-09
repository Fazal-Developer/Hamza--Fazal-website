import personalInfoJson from './content/personal-info.json'
import projectsJson from './content/projects.json'
import skillCategoriesJson from './content/skill-categories.json'
import servicesJson from './content/services.json'
import experiencesJson from './content/experiences.json'
import blogPostsJson from './content/blog-posts.json'

export interface Project {
  slug: string
  title: string
  subtitle: string
  category: 'Android' | 'Web' | 'Full-Stack'
  status: 'Completed' | 'Active Development' | 'Maintained'
  image: string
  shortDescription: string
  fullDescription: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  playStoreUrl?: string
  problem: string
  solution: string
  features: string[]
  architecture: string
  challenges: string
  learnings: string
  screenshots: string[]
  keywords: string[]
}

export interface SkillCategory {
  category: string
  skills: { name: string; level: 'Core' | 'Strong' | 'Working Knowledge' | 'Learning' }[]
}

export interface ServiceItem {
  id: string
  iconName: string
  title: string
  description: string
  deliverables: string[]
  keywords: string[]
}

export interface ExperienceItem {
  period: string
  role: string
  organization: string
  category: 'Education' | 'Software Engineering' | 'Projects' | 'Digital Marketing' | 'Freelance / Client Work'
  description: string
  highlights: string[]
}

export interface BlogPost {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  coverImage: string
  excerpt: string
  content: string[]
  keywords: string[]
}

export interface PersonalInfo {
  name: string
  displayName: string
  brandMonogram: string
  title: string
  positioning: string
  bio: string
  github: string
  linkedin: string
  email: string
  phone: string
  whatsapp: string
  location: string
  siteUrl: string
}

// All content below is loaded from lib/content/*.json so it can be edited
// either by hand or through the local /admin panel (see app/admin).
export const PERSONAL_INFO = personalInfoJson as PersonalInfo
export const PROJECTS = projectsJson as Project[]
export const SKILL_CATEGORIES = skillCategoriesJson as SkillCategory[]
export const SERVICES = servicesJson as ServiceItem[]
export const EXPERIENCES = experiencesJson as ExperienceItem[]
export const BLOG_POSTS = blogPostsJson as BlogPost[]
