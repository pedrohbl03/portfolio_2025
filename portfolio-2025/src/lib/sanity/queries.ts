import { client } from './client'
import type { BlogPost, Project, Experience, Skill, SiteConfig } from './types'

// GROQ Queries
const BLOG_POST_QUERY = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  excerpt,
  coverImage {
    asset->,
    alt
  },
  content,
  tags,
  publishedAt,
  author
}`

const PROJECT_QUERY = `*[_type == "project"] | order(order desc, _createdAt desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  title,
  slug,
  description,
  thumbnail {
    asset->,
    alt
  },
  images[] {
    asset->,
    alt
  },
  technologies,
  projectUrl,
  githubUrl,
  featured,
  order,
  completedAt
}`

const EXPERIENCE_QUERY = `*[_type == "experience"] | order(order desc, startDate desc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  company,
  position,
  description,
  responsibilities,
  technologies,
  startDate,
  endDate,
  current,
  companyUrl,
  logo {
    asset->,
    alt
  },
  order
}`

const SKILL_QUERY = `*[_type == "skill"] | order(category asc, order asc) {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  name,
  category,
  icon,
  proficiency,
  yearsOfExperience,
  featured,
  order
}`

const SITE_CONFIG_QUERY = `*[_type == "siteConfig"][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  personalInfo {
    fullName,
    tagline,
    bio,
    email,
    phone,
    location,
    avatar {
      asset->,
      alt
    }
  },
  socialLinks,
  seo {
    metaTitle,
    metaDescription,
    keywords,
    ogImage {
      asset->,
      alt
    },
    twitterHandle,
    twitterCard,
    canonicalUrl,
    language,
    robots
  },
  resume,
  stats,
  services,
  contact,
  newsletter,
  siteSettings,
  componentVisibility
}`

// Fetch Functions
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    return await client.fetch(BLOG_POST_QUERY)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const query = `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      title,
      slug,
      excerpt,
      coverImage {
        asset->,
        alt
      },
      content,
      tags,
      publishedAt,
      author
    }`
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getProjects(featured?: boolean): Promise<Project[]> {
  try {
    const query = featured
      ? `*[_type == "project" && featured == true] | order(order desc, _createdAt desc) {
          _id,
          _type,
          _createdAt,
          _updatedAt,
          title,
          slug,
          description,
          thumbnail {
            asset->,
            alt
          },
          images[] {
            asset->,
            alt
          },
          technologies,
          projectUrl,
          githubUrl,
          featured,
          order,
          completedAt
        }`
      : PROJECT_QUERY
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return []
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const query = `*[_type == "project" && slug.current == $slug][0] {
      _id,
      _type,
      _createdAt,
      _updatedAt,
      title,
      slug,
      description,
      thumbnail {
        asset->,
        alt
      },
      images[] {
        asset->,
        alt
      },
      technologies,
      projectUrl,
      githubUrl,
      featured,
      order,
      completedAt
    }`
    return await client.fetch(query, { slug })
  } catch (error) {
    console.error('Error fetching project:', error)
    return null
  }
}

export async function getExperiences(): Promise<Experience[]> {
  try {
    return await client.fetch(EXPERIENCE_QUERY)
  } catch (error) {
    console.error('Error fetching experiences:', error)
    return []
  }
}

export async function getSkills(category?: string): Promise<Skill[]> {
  try {
    const query = category
      ? `*[_type == "skill" && category == $category] | order(order asc) {
          _id,
          _type,
          _createdAt,
          _updatedAt,
          name,
          category,
          icon,
          proficiency,
          yearsOfExperience,
          featured,
          order
        }`
      : SKILL_QUERY
    return await client.fetch(query, category ? { category } : {})
  } catch (error) {
    console.error('Error fetching skills:', error)
    return []
  }
}

export async function getSkillsByCategory(): Promise<Record<string, Skill[]>> {
  try {
    const skills = await getSkills()
    return skills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    }, {} as Record<string, Skill[]>)
  } catch (error) {
    console.error('Error grouping skills by category:', error)
    return {}
  }
}

export async function getSiteConfig(): Promise<SiteConfig | null> {
  try {
    return await client.fetch(SITE_CONFIG_QUERY)
  } catch (error) {
    console.error('Error fetching site config:', error)
    return null
  }
}
