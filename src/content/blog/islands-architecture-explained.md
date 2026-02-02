---
title: 'Islands Architecture Explained'
description: 'Understanding Astro Islands Architecture and how it improves performance.'
pubDate: '2026-02-01'
tags: ['astro', 'architecture', 'performance']
author: 'CMTG Team'
---

# Islands Architecture Explained

The Islands Architecture is Astro's innovative approach to building websites that are fast by default while still supporting rich interactivity.

## What Are Islands?

Think of your page as an ocean of static HTML with interactive "islands" of JavaScript. Most of your content (headers, text, images) doesn't need JavaScript - it's just HTML. Only specific components that need interactivity become islands.

## Traditional SPAs vs Islands

### Traditional SPA
```
[JavaScript App - Everything runs in JS]
├── Header (JS)
├── Navigation (JS)
├── Article Content (JS) ← Why?
├── Comments (JS)
└── Footer (JS) ← Why?
```

### Islands Architecture
```
[Static HTML Page]
├── Header (HTML)
├── Navigation (HTML)
├── Article Content (HTML)
├── Comments (JS Island) ← Needs interactivity
└── Footer (HTML)
```

## Benefits

| Aspect | SPA | Islands |
|--------|-----|---------|
| Initial Load | Heavy JS bundle | Minimal JS |
| Time to Interactive | Slow | Fast |
| SEO | Requires SSR | Native |
| Partial Hydration | No | Yes |

## Client Directives

Astro provides fine-grained control over when islands hydrate:

- `client:load` - Critical interactive elements
- `client:idle` - Lower priority components
- `client:visible` - Below-the-fold content
- `client:media="(min-width: 768px)"` - Responsive hydration

## Real World Example

```astro
---
import Header from './Header.astro';      // Static
import SearchBar from './SearchBar.tsx';  // Interactive
import Article from './Article.astro';    // Static
import Comments from './Comments.vue';    // Interactive
---

<Header />
<SearchBar client:idle />
<Article />
<Comments client:visible />
```

The search bar hydrates when the browser is idle, and comments only load when scrolled into view. The rest? Pure HTML.

This is the future of web development.
