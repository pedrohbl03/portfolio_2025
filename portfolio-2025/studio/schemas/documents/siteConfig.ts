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
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          validation: (Rule) => Rule.required().max(60),
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
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
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Recommended size: 1200x630px',
          options: {
            hotspot: true,
          },
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
      fields: [
        {
          name: 'maintenanceMode',
          title: 'Maintenance Mode',
          type: 'boolean',
          initialValue: false,
          description: 'Enable to show maintenance page',
        },
        {
          name: 'showBlogSection',
          title: 'Show Blog Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'showPortfolioSection',
          title: 'Show Portfolio Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'showExperienceSection',
          title: 'Show Experience Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'showSkillsSection',
          title: 'Show Skills Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'googleAnalyticsId',
          title: 'Google Analytics ID',
          type: 'string',
          description: 'e.g., G-XXXXXXXXXX',
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
