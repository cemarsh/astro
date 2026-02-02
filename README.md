# Astro Web Framework Exploration

A learning project to explore Astro's capabilities for building content-driven websites.

## What is Astro?

Astro is a web framework for building **content-driven websites** like blogs, marketing pages, documentation, and e-commerce. It pioneered the "Islands Architecture" to reduce JavaScript overhead while maintaining interactivity where needed.

**Key Philosophy**: HTML-first with zero JavaScript by default.

## Core Features

### Islands Architecture
Components render as static HTML by default. JavaScript loads only for interactive "islands" - the parts that need it.

```astro
---
// This component loads React only when visible
import ReactCounter from './Counter.jsx';
---
<ReactCounter client:visible />
```

### Framework Agnostic
Use components from any UI framework in the same project:
- React
- Vue
- Svelte
- Solid
- Preact
- HTMX
- Web Components

### Content Layer API (v5.0+)
Type-safe content management for markdown, MDX, and external data sources.

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});
```

### Server Islands
Combine static HTML with dynamic server-rendered components. Improved caching and streaming.

### View Transitions
Zero-JavaScript page transitions for smooth navigation.

### Content Collections
Type-safe frontmatter validation and querying for markdown files.

## Performance

- **40% faster** than equivalent React sites
- **90% less JavaScript** shipped to client
- Lighthouse scores: **98-100**
- Excellent Core Web Vitals

## Best Use Cases

| Use Case | Why Astro? |
|----------|------------|
| Documentation | Static pages, fast loads, content-focused |
| Blogs | Markdown support, SEO optimized |
| Marketing Sites | Minimal JS, fast performance |
| Portfolios | Visual focus, quick rendering |
| E-commerce | Fast product pages, SEO-friendly |

## Version History

| Version | Key Features |
|---------|--------------|
| 5.0 | Content Layer API, Server Islands |
| 5.16 | SVG optimization, CLI improvements |
| 6.0 (alpha) | Cloudflare workerd support, Zod 4, route caching |

## Getting Started

```bash
# Create new project
npm create astro@latest

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
/
├── public/           # Static assets (favicon, images)
├── src/
│   ├── components/   # UI components (any framework)
│   ├── content/      # Content collections (markdown)
│   ├── layouts/      # Page layouts
│   └── pages/        # File-based routing
├── astro.config.mjs  # Astro configuration
└── package.json
```

## Client Directives

Control when/how components hydrate:

| Directive | Behavior |
|-----------|----------|
| `client:load` | Hydrate immediately |
| `client:idle` | Hydrate when browser is idle |
| `client:visible` | Hydrate when component enters viewport |
| `client:media` | Hydrate on media query match |
| `client:only` | Skip SSR, render only on client |

## Integrations

Astro has official integrations for:

- **Frameworks**: React, Vue, Svelte, Solid, Preact
- **Styling**: Tailwind CSS, UnoCSS
- **CMS**: Contentful, Sanity, Storyblok, WordPress
- **Deployment**: Vercel, Netlify, Cloudflare Pages
- **Features**: MDX, Sitemap, RSS, Partytown

```bash
# Add integrations
npx astro add react tailwind
```

## MCP Server

This project uses the **Astro Docs MCP Server** to provide AI assistants with access to the latest Astro documentation.

**Server URL**: `https://mcp.docs.astro.build/mcp`

## Exploration Goals

- [ ] Set up basic Astro project
- [ ] Explore Islands Architecture with React components
- [ ] Implement Content Collections for blog
- [ ] Test Server Islands for dynamic content
- [ ] Configure View Transitions
- [ ] Deploy to Vercel/Cloudflare Pages
- [ ] Benchmark performance vs Next.js equivalent

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Astro Blog](https://astro.build/blog/)
- [Astro Discord](https://astro.build/chat)
- [Astro Themes](https://astro.build/themes/)

## Industry Adoption

Companies using Astro in production:
- GitHub (github.dev documentation)
- Smashing Magazine (migrated from WordPress)
- Firebase
- Porsche

---

**Created**: 2026-02-01
**Framework Version**: Astro 5.x / 6.0-alpha
**Stack**: CMTG Technology Standards
