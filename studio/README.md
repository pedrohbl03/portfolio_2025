# Portfolio Studio - Sanity CMS

This is the Sanity Studio for managing content for the Portfolio 2025 project.

## Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Sanity project details:

```bash
cp .env.local.example .env.local
```

Get your project ID and dataset from [Sanity Manage](https://www.sanity.io/manage).

### 3. Initialize Sanity Project (First Time Only)

If you haven't created a Sanity project yet:

```bash
npm create sanity@latest -- --project <your-project-id> --dataset production
```

Or create a new project:

```bash
npx sanity init
```

### 4. Run the Studio

```bash
npm run dev
# or
yarn dev
```

The studio will be available at [http://localhost:3333](http://localhost:3333)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the studio for production
- `npm run deploy` - Deploy the studio to Sanity's hosted service
- `npm run deploy-graphql` - Deploy GraphQL API

## Content Schemas

### Site Configuration (Singleton)
A single document for global site settings:
- **Personal Information**: Name, tagline, bio, contact info, avatar
- **Social Links**: GitHub, LinkedIn, Twitter, Instagram, YouTube, etc.
- **SEO Settings**: Meta title/description, keywords, OG image
- **Resume/CV**: Upload or link to resume
- **Statistics**: Years of experience, projects completed, custom metrics
- **Services**: List of services you offer
- **Contact Settings**: Availability, preferred methods, response time
- **Newsletter**: Settings for newsletter integration
- **Site Settings**: Feature toggles, analytics, maintenance mode

### Blog Posts
- **Title**: Post title
- **Slug**: URL-friendly identifier
- **Excerpt**: Short description
- **Cover Image**: Featured image with alt text
- **Content**: Rich text with images
- **Tags**: Categorization tags
- **Published Date**: Publication timestamp
- **Author**: Post author

### Portfolio Projects
- **Title**: Project name
- **Slug**: URL identifier
- **Description**: Project overview
- **Thumbnail**: Main project image
- **Images**: Project gallery
- **Technologies**: Tech stack used
- **Project URL**: Live demo link
- **GitHub URL**: Source code link
- **Featured**: Highlight important projects
- **Order**: Display sequence
- **Completed Date**: Project completion

### Work Experience
- **Company**: Company name
- **Position**: Job title
- **Description**: Role overview
- **Responsibilities**: Key duties
- **Technologies**: Tools and tech used
- **Start/End Date**: Employment period
- **Current**: Currently employed flag
- **Company URL**: Company website
- **Logo**: Company logo
- **Order**: Display sequence

### Skills
- **Name**: Skill/technology name
- **Category**: Frontend, Backend, Database, DevOps, Tools, Other
- **Icon URL**: Skill icon (e.g., from devicon)
- **Proficiency**: Beginner, Intermediate, Advanced, Expert
- **Years of Experience**: Time using the skill
- **Featured**: Highlight important skills
- **Order**: Display sequence

## Desk Structure

The studio uses a custom desk structure for better content organization:

- **Site Configuration** - Singleton document (only one instance)
- **Blog Posts** - Ordered by publish date (newest first)
- **Portfolio Projects** - Ordered by display order
- **Work Experience** - Ordered by start date (most recent first)
- **Skills** - Ordered by category

## Project Structure

```
studio/
├── schemas/
│   ├── documents/           # Document schemas
│   │   ├── siteConfig.ts   # Singleton site config
│   │   ├── blogPost.ts     # Blog post schema
│   │   ├── project.ts      # Portfolio project schema
│   │   ├── experience.ts   # Work experience schema
│   │   └── skill.ts        # Skill schema
│   └── index.ts            # Schema exports
├── deskStructure.ts        # Custom desk organization
├── sanity.config.ts        # Main Sanity configuration
├── sanity.cli.ts           # CLI configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Deployment

### Deploy to Sanity Hosted Studio

```bash
npm run deploy
```

This will deploy your studio to `https://your-project-name.sanity.studio`

### Environment Variables for Production

Make sure to set these in your hosting platform:
- `SANITY_STUDIO_PROJECT_ID`
- `SANITY_STUDIO_DATASET`

## Integration with Next.js

To use this content in your Next.js app, install the Sanity client:

```bash
# In your Next.js project root
npm install @sanity/client @sanity/image-url
```

Then create a Sanity client in your Next.js app to fetch data from this studio.

## Learn More

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Studio Documentation](https://www.sanity.io/docs/sanity-studio)
- [Schema Types](https://www.sanity.io/docs/schema-types)
