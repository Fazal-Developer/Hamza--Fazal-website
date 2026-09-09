import 'server-only'
import fs from 'fs/promises'
import path from 'path'
import type { Project, SkillCategory, ServiceItem, ExperienceItem, BlogPost, PersonalInfo } from '@/lib/data'

const CONTENT_DIR = path.join(process.cwd(), 'lib', 'content')

async function readJson<T>(file: string): Promise<T> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, file), 'utf-8')
  return JSON.parse(raw) as T
}

async function writeJson(file: string, data: unknown) {
  const content = JSON.stringify(data, null, 2) + '\n'
  await fs.writeFile(path.join(CONTENT_DIR, file), content, 'utf-8')
}

export const readPersonalInfo = () => readJson<PersonalInfo>('personal-info.json')
export const writePersonalInfo = (data: PersonalInfo) => writeJson('personal-info.json', data)

export const readProjects = () => readJson<Project[]>('projects.json')
export const writeProjects = (data: Project[]) => writeJson('projects.json', data)

export const readSkillCategories = () => readJson<SkillCategory[]>('skill-categories.json')
export const writeSkillCategories = (data: SkillCategory[]) => writeJson('skill-categories.json', data)

export const readServices = () => readJson<ServiceItem[]>('services.json')
export const writeServices = (data: ServiceItem[]) => writeJson('services.json', data)

export const readExperiences = () => readJson<ExperienceItem[]>('experiences.json')
export const writeExperiences = (data: ExperienceItem[]) => writeJson('experiences.json', data)

export const readBlogPosts = () => readJson<BlogPost[]>('blog-posts.json')
export const writeBlogPosts = (data: BlogPost[]) => writeJson('blog-posts.json', data)
