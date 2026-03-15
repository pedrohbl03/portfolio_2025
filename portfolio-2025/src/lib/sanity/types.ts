import { PortableTextBlock } from '@portabletext/react'

// Base Sanity Document
export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

// Sanity Image
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

// Blog Post
export interface BlogPost extends SanityDocument {
  _type: 'blogPost'
  title: string
  slug: {
    current: string
  }
  excerpt: string
  coverImage?: SanityImage
  content?: PortableTextBlock[]
  tags?: string[]
  publishedAt: string
  author?: string
}

// Project
export interface Project extends SanityDocument {
  _type: 'project'
  title: string
  slug: {
    current: string
  }
  description: string
  thumbnail: SanityImage
  images?: SanityImage[]
  technologies?: string[]
  projectUrl?: string
  githubUrl?: string
  featured?: boolean
  order?: number
  completedAt?: string
}

// Experience
export interface Experience extends SanityDocument {
  _type: 'experience'
  company: string
  position: string
  description?: PortableTextBlock[]
  responsibilities?: string[]
  technologies?: string[]
  startDate: string
  endDate?: string
  current?: boolean
  companyUrl?: string
  logo?: SanityImage
  order?: number
}

// Skill
export interface Skill extends SanityDocument {
  _type: 'skill'
  name: string
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools' | 'other'
  icon?: string
  proficiency?: number
  yearsOfExperience?: number
  featured?: boolean
  order?: number
}

// Site Config
export interface SiteConfig extends SanityDocument {
  _type: 'siteConfig'
  personalInfo?: {
    fullName?: string
    tagline?: string
    bio?: string
    email?: string
    phone?: string
    location?: string
    avatar?: SanityImage
  }
  socialLinks?: {
    github?: string
    linkedin?: string
    twitter?: string
    instagram?: string
    youtube?: string
    medium?: string
    dev?: string
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    ogImage?: SanityImage
    twitterHandle?: string
    twitterCard?: 'summary' | 'summary_large_image'
    canonicalUrl?: string
    language?: string
    robots?: 'index,follow' | 'noindex,follow' | 'index,nofollow' | 'noindex,nofollow'
  }
  resume?: {
    resumeFile?: {
      asset: {
        _ref: string
        _type: 'reference'
      }
    }
    resumeUrl?: string
  }
  stats?: {
    yearsOfExperience?: number
    projectsCompleted?: number
    clientsSatisfied?: number
    customStats?: Array<{
      label?: string
      value?: number
      suffix?: string
    }>
  }
  services?: Array<{
    title?: string
    description?: string
    icon?: string
  }>
  contact?: {
    availableForWork?: boolean
    preferredContactMethod?: 'email' | 'phone' | 'linkedin'
    responseTime?: string
  }
  newsletter?: {
    enabled?: boolean
    heading?: string
    description?: string
    provider?: 'mailchimp' | 'convertkit' | 'substack' | 'custom'
  }
  siteSettings?: {
    maintenanceMode?: boolean
    googleAnalyticsId?: string
    googleTagManagerId?: string
    facebookPixelId?: string
  }
  componentVisibility?: {
    showHero?: boolean
    showAboutMe?: boolean
    showSkills?: boolean
    showExperience?: boolean
    showPortfolio?: boolean
    showBlog?: boolean
    showNewsletter?: boolean
    showFooter?: boolean
  }
}
