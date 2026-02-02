---
title: 'Using Multiple Frameworks in Astro'
description: 'How to use React, Vue, and Svelte components together in one Astro project.'
pubDate: '2026-02-01'
tags: ['astro', 'react', 'vue', 'svelte']
author: 'CMTG Team'
---

# Using Multiple Frameworks in Astro

One of Astro's most powerful features is its ability to use components from different frameworks in the same project. Yes, you can have React, Vue, and Svelte components on the same page!

## Why Would You Do This?

1. **Gradual Migration** - Moving from one framework to another? Use both during transition
2. **Best Tool for the Job** - Some components are better in certain frameworks
3. **Team Expertise** - Let developers use what they know best
4. **Reuse Existing Code** - Import components from other projects

## Setting Up

```bash
npx astro add react vue svelte
```

This adds all three frameworks to your project.

## Using Components Together

```astro
---
import ReactCounter from './components/react/Counter.tsx';
import VueCounter from './components/vue/Counter.vue';
import SvelteCounter from './components/svelte/Counter.svelte';
---

<h1>Framework Showcase</h1>

<section>
  <h2>React Counter</h2>
  <ReactCounter client:visible />
</section>

<section>
  <h2>Vue Counter</h2>
  <VueCounter client:visible />
</section>

<section>
  <h2>Svelte Counter</h2>
  <SvelteCounter client:visible />
</section>
```

## Sharing State

While each framework manages its own state, you can share data between them using:

1. **Nano Stores** - Framework-agnostic state management
2. **Custom Events** - Browser-native communication
3. **URL State** - Query parameters or hash

## Performance Note

Each framework adds some overhead. Use this capability wisely:

- Prefer Astro components for static content
- Use framework components only when you need their specific features
- Consider sticking to one framework for most interactive needs

The power is there when you need it, but restraint is a virtue.
