import {defineField, defineType} from 'sanity'

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Site Configuration',
  type: 'document',
  fields: [
    // Personal Information
    defineField({
      name: 'personalInfo',
      title: 'Personal Information',
      type: 'object',
      fields: [
        {
          name: 'fullName',
          title: 'Full Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'string',
          description: 'e.g., "Full Stack Developer"',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'bio',
          title: 'Bio',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.email(),
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
        },
        {
          name: 'location',
          title: 'Location',
          type: 'string',
          description: 'e.g., "San Francisco, CA"',
        },
        {
          name: 'avatar',
          title: 'Profile Picture',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    // Social Links
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'github',
          title: 'GitHub',
          type: 'url',
        },
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
        },
        {
          name: 'medium',
          title: 'Medium',
          type: 'url',
        },
        {
          name: 'dev',
          title: 'Dev.to',
          type: 'url',
        },
      ],
    }),

    // SEO Settings
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      description: 'Search engine optimization and social sharing',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Page title for search engines (50-60 characters)',
          validation: (Rule) => Rule.required().max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Page description for search engines (150-160 characters)',
          validation: (Rule) => Rule.required().max(160),
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
          },
          description: 'SEO keywords for your site',
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Social media preview image (Recommended: 1200x630px)',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'twitterHandle',
          title: 'Twitter Handle',
          type: 'string',
          description: 'Your Twitter username (without @)',
          placeholder: 'username',
        },
        {
          name: 'twitterCard',
          title: 'Twitter Card Type',
          type: 'string',
          options: {
            list: [
              {title: 'Summary', value: 'summary'},
              {title: 'Summary Large Image', value: 'summary_large_image'},
            ],
          },
          initialValue: 'summary_large_image',
        },
        {
          name: 'canonicalUrl',
          title: 'Canonical URL',
          type: 'url',
          description: 'Primary URL for your site (e.g., https://yoursite.com)',
        },
        {
          name: 'language',
          title: 'Site Language',
          type: 'string',
          initialValue: 'en',
          description: 'ISO language code (e.g., en, pt, es)',
        },
        {
          name: 'robots',
          title: 'Robots Meta Tag',
          type: 'string',
          options: {
            list: [
              {title: 'Index, Follow (Default)', value: 'index,follow'},
              {title: 'No Index, Follow', value: 'noindex,follow'},
              {title: 'Index, No Follow', value: 'index,nofollow'},
              {title: 'No Index, No Follow', value: 'noindex,nofollow'},
            ],
          },
          initialValue: 'index,follow',
          description: 'Control search engine indexing',
        },
      ],
    }),

    // Resume/CV
    defineField({
      name: 'resume',
      title: 'Resume/CV',
      type: 'object',
      fields: [
        {
          name: 'resumeFile',
          title: 'Resume File',
          type: 'file',
          options: {
            accept: '.pdf,.doc,.docx',
          },
        },
        {
          name: 'resumeUrl',
          title: 'Resume URL',
          type: 'url',
          description: 'Alternative to uploading a file',
        },
      ],
    }),

    // Stats/Metrics
    defineField({
      name: 'stats',
      title: 'Statistics',
      type: 'object',
      fields: [
        {
          name: 'yearsOfExperience',
          title: 'Years of Experience',
          type: 'number',
          validation: (Rule) => Rule.min(0),
        },
        {
          name: 'projectsCompleted',
          title: 'Projects Completed',
          type: 'number',
          validation: (Rule) => Rule.min(0),
        },
        {
          name: 'clientsSatisfied',
          title: 'Clients Satisfied',
          type: 'number',
          validation: (Rule) => Rule.min(0),
        },
        {
          name: 'customStats',
          title: 'Custom Statistics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                },
                {
                  name: 'value',
                  title: 'Value',
                  type: 'number',
                },
                {
                  name: 'suffix',
                  title: 'Suffix',
                  type: 'string',
                  description: 'e.g., "+", "K", "%"',
                },
              ],
            },
          ],
        },
      ],
    }),

    // Services Offered
    defineField({
      name: 'services',
      title: 'Services Offered',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Service Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'icon',
              title: 'Icon Name',
              type: 'string',
              description: 'React Icon name (e.g., FiCode)',
            },
          ],
        },
      ],
    }),

    // Contact Information
    defineField({
      name: 'contact',
      title: 'Contact Settings',
      type: 'object',
      fields: [
        {
          name: 'availableForWork',
          title: 'Available for Work',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'preferredContactMethod',
          title: 'Preferred Contact Method',
          type: 'string',
          options: {
            list: [
              {title: 'Email', value: 'email'},
              {title: 'Phone', value: 'phone'},
              {title: 'LinkedIn', value: 'linkedin'},
            ],
          },
        },
        {
          name: 'responseTime',
          title: 'Typical Response Time',
          type: 'string',
          description: 'e.g., "Within 24 hours"',
        },
      ],
    }),

    // Newsletter Settings
    defineField({
      name: 'newsletter',
      title: 'Newsletter Settings',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Enable Newsletter',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'heading',
          title: 'Newsletter Heading',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Newsletter Description',
          type: 'text',
          rows: 2,
        },
        {
          name: 'provider',
          title: 'Newsletter Provider',
          type: 'string',
          options: {
            list: [
              {title: 'Mailchimp', value: 'mailchimp'},
              {title: 'ConvertKit', value: 'convertkit'},
              {title: 'Substack', value: 'substack'},
              {title: 'Custom', value: 'custom'},
            ],
          },
        },
      ],
    }),

    // Site Settings
    defineField({
      name: 'siteSettings',
      title: 'Site Settings',
      type: 'object',
      description: 'Control site behavior and analytics',
      fields: [
        {
          name: 'maintenanceMode',
          title: 'Maintenance Mode',
          type: 'boolean',
          initialValue: false,
          description: 'Enable to show maintenance page',
        },
        {
          name: 'googleAnalyticsId',
          title: 'Google Analytics ID',
          type: 'string',
          description: 'e.g., G-XXXXXXXXXX',
        },
        {
          name: 'googleTagManagerId',
          title: 'Google Tag Manager ID',
          type: 'string',
          description: 'e.g., GTM-XXXXXXX',
        },
        {
          name: 'facebookPixelId',
          title: 'Facebook Pixel ID',
          type: 'string',
        },
      ],
    }),

    // Component Visibility Settings
    defineField({
      name: 'componentVisibility',
      title: 'Home Page Components',
      type: 'object',
      description: 'Control which sections appear on the home page',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        {
          name: 'showHero',
          title: '🎯 Show Hero Section',
          type: 'boolean',
          initialValue: true,
          description: 'Main hero/banner section',
        },
        {
          name: 'showAboutMe',
          title: '👤 Show About Me Section',
          type: 'boolean',
          initialValue: true,
          description: 'About/Bio section',
        },
        {
          name: 'showSkills',
          title: '⚡ Show Skills Section',
          type: 'boolean',
          initialValue: true,
          description: 'Technical skills showcase',
        },
        {
          name: 'showExperience',
          title: '💼 Show Experience Section',
          type: 'boolean',
          initialValue: true,
          description: 'Work experience timeline',
        },
        {
          name: 'showPortfolio',
          title: '🎨 Show Portfolio Section',
          type: 'boolean',
          initialValue: true,
          description: 'Featured projects/portfolio',
        },
        {
          name: 'showBlog',
          title: '📝 Show Blog Section',
          type: 'boolean',
          initialValue: true,
          description: 'Latest blog posts',
        },
        {
          name: 'showNewsletter',
          title: '📬 Show Newsletter Section',
          type: 'boolean',
          initialValue: true,
          description: 'Newsletter signup',
        },
        {
          name: 'showFooter',
          title: '🦶 Show Footer',
          type: 'boolean',
          initialValue: true,
          description: 'Site footer',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Configuration',
        subtitle: 'Global site settings',
      }
    },
  },
})
