import {defineField, defineType} from 'sanity'

export const skill = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Database', value: 'database'},
          {title: 'DevOps', value: 'devops'},
          {title: 'Tools', value: 'tools'},
          {title: 'Other', value: 'other'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon URL',
      type: 'url',
      description: 'URL to skill icon (e.g., from devicon CDN)',
    }),
    defineField({
      name: 'proficiency',
      title: 'Proficiency Level',
      type: 'number',
      options: {
        list: [
          {title: 'Beginner', value: 1},
          {title: 'Intermediate', value: 2},
          {title: 'Advanced', value: 3},
          {title: 'Expert', value: 4},
        ],
      },
      validation: (Rule) => Rule.required().min(1).max(4),
    }),
    defineField({
      name: 'yearsOfExperience',
      title: 'Years of Experience',
      type: 'number',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Skill',
      type: 'boolean',
      initialValue: false,
      description: 'Show this skill prominently',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      category: 'category',
      proficiency: 'proficiency',
      featured: 'featured',
    },
    prepare(selection) {
      const {title, category, proficiency, featured} = selection
      const proficiencyLabels = ['', 'Beginner', 'Intermediate', 'Advanced', 'Expert']
      return {
        title,
        subtitle: `${category} - ${proficiencyLabels[proficiency]}${featured ? ' ⭐' : ''}`,
      }
    },
  },
  orderings: [
    {
      title: 'Category',
      name: 'categoryAsc',
      by: [
        {field: 'category', direction: 'asc'},
        {field: 'order', direction: 'asc'},
      ],
    },
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
