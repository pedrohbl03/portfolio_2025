import {StructureBuilder} from 'sanity/structure'
import {FiSettings, FiFileText, FiBriefcase, FiCpu, FiFolder} from 'react-icons/fi'

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Singleton - Site Config
      S.listItem()
        .title('Site Configuration')
        .icon(FiSettings)
        .child(
          S.document()
            .schemaType('siteConfig')
            .documentId('siteConfig')
            .title('Site Configuration')
        ),

      // Divider
      S.divider(),

      // Blog Posts
      S.listItem()
        .title('Blog Posts')
        .icon(FiFileText)
        .child(
          S.documentTypeList('blogPost')
            .title('Blog Posts')
            .filter('_type == "blogPost"')
            .defaultOrdering([{field: 'publishedAt', direction: 'desc'}])
        ),

      // Portfolio Projects
      S.listItem()
        .title('Portfolio Projects')
        .icon(FiFolder)
        .child(
          S.documentTypeList('project')
            .title('Portfolio Projects')
            .filter('_type == "project"')
            .defaultOrdering([{field: 'order', direction: 'asc'}])
        ),

      // Work Experience
      S.listItem()
        .title('Work Experience')
        .icon(FiBriefcase)
        .child(
          S.documentTypeList('experience')
            .title('Work Experience')
            .filter('_type == "experience"')
            .defaultOrdering([{field: 'startDate', direction: 'desc'}])
        ),

      // Skills
      S.listItem()
        .title('Skills')
        .icon(FiCpu)
        .child(
          S.documentTypeList('skill')
            .title('Skills')
            .filter('_type == "skill"')
            .defaultOrdering([{field: 'category', direction: 'asc'}])
        ),
    ])
