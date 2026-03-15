import { Metadata } from 'next'
import { SiteConfig, urlFor } from '@/lib/sanity'

export function generateMetadata(siteConfig: SiteConfig | null): Metadata {
  if (!siteConfig || !siteConfig.seo) {
    return {
      title: 'Portfolio',
      description: 'Welcome to my portfolio',
    }
  }

  const { seo, personalInfo } = siteConfig
  const ogImageUrl = seo.ogImage ? urlFor(seo.ogImage).width(1200).height(630).url() : undefined

  const metadata: Metadata = {
    title: seo.metaTitle || personalInfo?.fullName || 'Portfolio',
    description: seo.metaDescription || personalInfo?.bio || '',
    keywords: seo.keywords || [],
    authors: personalInfo?.fullName ? [{ name: personalInfo.fullName }] : undefined,
    robots: seo.robots || 'index,follow',
    
    // Open Graph
    openGraph: {
      type: 'website',
      locale: seo.language || 'en',
      url: seo.canonicalUrl || '/',
      title: seo.metaTitle || personalInfo?.fullName || 'Portfolio',
      description: seo.metaDescription || personalInfo?.bio || '',
      siteName: personalInfo?.fullName || 'Portfolio',
      images: ogImageUrl ? [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: seo.metaTitle || personalInfo?.fullName || 'Portfolio',
        },
      ] : [],
    },

    // Twitter
    twitter: {
      card: seo.twitterCard || 'summary_large_image',
      title: seo.metaTitle || personalInfo?.fullName || 'Portfolio',
      description: seo.metaDescription || personalInfo?.bio || '',
      creator: seo.twitterHandle ? `@${seo.twitterHandle}` : undefined,
      images: ogImageUrl ? [ogImageUrl] : [],
    },

    // Additional metadata
    alternates: {
      canonical: seo.canonicalUrl || '/',
    },
  }

  return metadata
}

export function generateAnalyticsScript(siteConfig: SiteConfig | null): {
  GA?: string
  GTM?: string
  FacebookPixel?: string
} {
  if (!siteConfig?.siteSettings) {
    return {}
  }

  return {
    GA: siteConfig.siteSettings.googleAnalyticsId,
    GTM: siteConfig.siteSettings.googleTagManagerId,
    FacebookPixel: siteConfig.siteSettings.facebookPixelId,
  }
}
