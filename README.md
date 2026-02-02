# Astro Lab - Power & Evolution Showcase

An immersive showcase demonstrating Astro's revolutionary approach to web development. Experience Islands Architecture, multi-framework support, and zero-JS-by-default in action.

**Live Site:** https://astro-lab-dyu.pages.dev

## Live Demo

Visit the showcase pages to see Astro's features in action:

| Page | Description |
|------|-------------|
| [/evolution](https://astro-lab-dyu.pages.dev/evolution) | Interactive timeline through web development eras |
| [/playground](https://astro-lab-dyu.pages.dev/playground) | Islands Architecture with all hydration strategies |
| [/state-sharing](https://astro-lab-dyu.pages.dev/state-sharing) | React, Vue, and Svelte sharing state via Nano Stores |
| [/transitions](https://astro-lab-dyu.pages.dev/transitions) | View Transitions API with gallery morph animations |
| [/server-islands](https://astro-lab-dyu.pages.dev/server-islands) | Dynamic + static content mixing demo |
| [/api-demo](https://astro-lab-dyu.pages.dev/api-demo) | Server endpoints with interactive API tester |
| [/content-power](https://astro-lab-dyu.pages.dev/content-power) | MDX integration with embedded components |
| [/performance](https://astro-lab-dyu.pages.dev/performance) | Metrics dashboard with framework comparisons |

## Tech Stack

- **Astro 5.x** - The web framework for content-driven websites
- **React 19** - Component library with hooks and JSX
- **Vue 3** - Progressive framework with Composition API
- **Svelte 5** - Compiler-based framework with Runes
- **Tailwind CSS 4** - Utility-first CSS framework
- **Nano Stores** - Tiny state manager for cross-framework state
- **MDX** - Markdown with JSX components

## Features Demonstrated

- **Islands Architecture** - Components render as static HTML, JS loads only where needed
- **Partial Hydration** - `client:load`, `client:idle`, `client:visible`, `client:media`
- **Cross-Framework State** - React, Vue, and Svelte components sharing the same store
- **View Transitions** - SPA-like navigation without a client-side router
- **Server Endpoints** - Full-stack API routes with type safety
- **Content Collections** - Type-safe content with Zod schemas
- **MDX Integration** - Interactive components embedded in markdown

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── evolution/      # Timeline components
│   ├── playground/     # Hydration demo components
│   ├── state/          # Cross-framework cart (React, Vue, Svelte)
│   ├── transitions/    # View transition components
│   ├── server/         # Server island components
│   ├── api/            # API demo components
│   ├── performance/    # Metrics components
│   ├── mdx/            # MDX-specific components
│   └── shared/         # Reusable utilities
├── pages/
│   ├── api/            # Server endpoints
│   ├── transitions/    # Gallery with dynamic routes
│   └── *.astro         # Showcase pages
├── content/
│   ├── blog/           # Blog posts (markdown)
│   └── showcase/       # MDX showcase content
├── stores/
│   └── cart.ts         # Nano Stores shared state
└── data/
    └── gallery.ts      # Gallery data
```

## Key Concepts

### Islands Architecture
```astro
<!-- Static by default -->
<StaticComponent />

<!-- Interactive when needed -->
<ReactCounter client:visible />
<VueCart client:load />
<SvelteButton client:idle />
```

### Cross-Framework State
```typescript
// stores/cart.ts - works with React, Vue, and Svelte
import { atom } from 'nanostores';
export const cartItems = atom([]);
```

### View Transitions
```astro
<!-- Elements with matching names morph between pages -->
<img transition:name={`image-${id}`} />
```

## Deployment

Configured for Cloudflare Pages with the `@astrojs/cloudflare` adapter.

```bash
npm run build
# Deploy dist/ to Cloudflare Pages
```

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Nano Stores](https://github.com/nanostores/nanostores)
- [View Transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)

---

Built with Astro + React + Vue + Svelte + Tailwind
