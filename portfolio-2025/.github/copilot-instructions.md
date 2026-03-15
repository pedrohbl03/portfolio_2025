# Portfolio 2025 - Development Guidelines

## Tech Stack

- **Framework**: Next.js 15.4.10 with App Router
- **React**: Version 19.1.0
- **TypeScript**: Version 5
- **Styling**: Tailwind CSS v4 with custom CSS variables
- **Animations**: Motion library (`motion/react-client` or `motion/react`) - NOT framer-motion
- **Smooth Scrolling**: Lenis v1.3.8
- **Icons**: React Icons v5.5.0
- **Font**: Montserrat (Google Fonts)
- **Dev Server**: Turbopack (`next dev --turbopack`)
- **Package Manager**: Yarn 1.22.22

## Architecture Patterns

### Component Structure

1. **Folder-Based Components**: Each component lives in its own folder with an `index.tsx` file
   ```
   src/components/ComponentName/
   └── index.tsx
   ```

2. **Client Components**: Only use `"use client"` directive at the top of files that really need client-side interactivity, hooks, or browser APIs

3. **Component Naming**: 
   - Components use PascalCase for files and exports
   - Interfaces use `I` prefix: `IButtonProps`, `IHeroProps`

### File Organization

```
src/
├── app/              # Next.js App Router (layouts, pages, globals)
├── components/       # Reusable UI components (folder-based)
├── data/            # Static data and content
├── utils/           # Utility functions (cn.ts for class merging)
├── config/          # Configuration files
└── services/        # API services and external integrations
```

### Path Aliases

- Use `@/*` for imports from `src/`: `import { cn } from '@/utils/cn'`
- Always prefer path aliases over relative imports

### Styling Conventions

1. **CSS Variables**: Use custom CSS variables defined in `globals.css`:
   - `--background`: `#171717`
   - `--foreground`: `#ededed`
   - `--primary`: `#5c95ff`
   - `--muted`: `#6c757d`
   - `--muted-foreground`: `#adb5bd`

2. **Tailwind**: Use Tailwind v4 @theme inline syntax for custom tokens

3. **Class Management**: Always use the `cn()` utility from `@/utils/cn` for conditional classes
   ```tsx
   import { cn } from '@/utils/cn'
   
   <div className={cn(
     'base-class',
     condition && 'conditional-class',
     className
   )} />
   ```

4. **Responsive Design**: Mobile-first approach with breakpoints:
   - `md:` - tablets (768px)
   - `lg:` - desktops (1024px)

5. **Custom Classes**: Use `.pb-section` for consistent section padding (160px desktop, 80px mobile)

### Animation Patterns

1. **Motion Import**: Use `motion/react-client` for client components or `motion/react` as needed
   ```tsx
   import * as motion from "motion/react-client"
   ```

2. **Standard Animation Pattern**:
   ```tsx
   <motion.div
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8, delay: 0.2 }}
   >
   ```

3. **Common Easing**: Use `[0.4, 0, 0.2, 1]` for smooth cubic-bezier transitions

### Data Management

- Store static content in `src/data/` files (e.g., `home.ts`)
- Export as constants: `export const HOME_DATA = { ... }`
- Keep content separate from components for easy updates

### TypeScript Conventions

1. **Strict Mode**: TypeScript strict mode is enabled
2. **Interface Naming**: Use `I` prefix for prop interfaces
3. **Type Imports**: Use `import type` for type-only imports
4. **No Explicit Any**: Avoid `any` types - use proper typing

### Component Patterns

1. **Props Pattern**:
   ```tsx
   interface IComponentProps {
     children?: React.ReactNode
     className?: string
     variant?: 'primary' | 'outline' | 'ghost'
   }
   
   const Component = ({ children, className, variant }: IComponentProps) => {
     // implementation
   }
   ```

2. **Variants**: Use union types for component variants (buttons, cards, etc.)

3. **Composition**: Accept `className` prop and merge with `cn()` utility

4. **Accessibility**: Include proper semantic HTML and ARIA attributes where needed

## Business Rules

### Portfolio Features

1. **Single Page Application**: All sections on one page with smooth scroll navigation
2. **Section IDs**: Each major section has an ID for anchor navigation (#hero, #about-me, #skills, etc.)
3. **Animated Entrance**: Components use motion animations with staggered delays
4. **Background Effects**: Decorative blur effects using positioned divs with `blur-[100px]`

### Content Structure

1. **Hero Section**: Displays title with alternating word colors (primary/foreground)
2. **Stats Counters**: Animated counters with + suffix for metrics
3. **Skills Organization**: Grouped by area (Frontend, Backend, Databases) using devicon CDN
4. **Responsive Hiding**: Some elements hidden on mobile using `hidden md:flex`

### Menu System

1. **Circular Expansion**: Menu opens with circular clip-path animation from top-right
2. **Body Scroll Lock**: Prevent scrolling when menu is open
3. **Smooth Navigation**: Click handlers use smooth scroll to sections

### Image Optimization

- Next.js Image component configured for external domains: `images.unsplash.com`, `cdn.jsdelivr.net`

## Development Commands

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Production build
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## Code Quality Standards

1. **No Console Logs**: Remove console.logs before committing
2. **Component Modularity**: Keep components focused and reusable
3. **Performance**: Use React.memo() for expensive components
4. **Clean Code**: Remove commented code and unused imports
5. **Consistent Formatting**: Follow existing code style
6. **Accessibility**: Ensure components are accessible (semantic HTML, ARIA attributes)
7. **Testing**: Write unit tests for critical components (if applicable)
8. **Documentation**: Comment complex logic and maintain clear code structure
9. **Commit Messages**: Use clear, descriptive commit messages that reference related issues or features
10. **Comments**: Don't use comments to explain "what" the code does - the code should be self-explanatory. Use comments to explain "why" certain decisions were made or to provide context for complex logic - but avoid over-commenting.

## Common Patterns to Follow

1. **Container Wrapper**: Use `<Container>` component for max-width sections
2. **Section Spacing**: Use `.pb-section` class for consistent vertical rhythm
3. **Color Tokens**: Use Tailwind color tokens (text-primary, bg-background, etc.)
4. **Motion Delays**: Stagger animations with incremental delays (0.2s, 0.3s, etc.)
5. **Viewport Units**: Use `100svh` for mobile-safe full viewport height

## Important Notes

- **DO NOT** use `framer-motion` - use `motion` library instead
- **DO NOT** use relative imports when path alias is available
- **DO NOT** mix motion import patterns - stick to established pattern
- **DO NOT** skip TypeScript interfaces for component props
- **DO NOT** hardcode colors - use CSS variables and Tailwind tokens
- **DO NOT** include `"use client"` directive in files that don't need it
- **ALWAYS** use the `cn()` utility for className merging
- **ALWAYS** include "use client" directive for components with hooks or interactivity
- **ALWAYS** maintain the folder-based component structure
- **ALWAYS** follow the established file organization and naming conventions
- **ALWAYS** use Tailwind v4 @theme syntax for custom tokens
- **ALWAYS** use the defined CSS variables for colors instead of hardcoding values
- **ALWAYS** ensure accessibility best practices are followed in components
- **ALWAYS** move files to /tmp if you remove them, to avoid suggesting deleted code in future Copilot suggestions