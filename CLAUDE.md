# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Next.js 16, Turbopack)
- `npm run build` — Production build (use to verify changes compile)
- `npm run lint` — ESLint
- No test framework is configured

## Architecture

Single-page portfolio site for boxer Elisa Frey. Next.js 16 App Router with Tailwind CSS v4, Framer Motion animations, and Lenis smooth scrolling. All content is German.

### Page Flow

`page.tsx` renders sections in order: `Hero → Fights → Gallery → Videos → Contact`, wrapped in `SmoothScroll` (Lenis) and `Navbar`. All sections are `"use client"` components.

### Key Patterns

**Glass morphism design system** — defined as CSS utility classes in `globals.css`:
- `.glass-card` / `.glass-card-hover` — translucent cards with blur backdrop
- `.glass-gold` — gold-tinted variant for featured items (e.g., title fights)
- `.glass-nav` — navbar background on scroll

**Animation wrappers** — reusable Framer Motion components in `src/components/animations/`:
- `FadeIn` — viewport-triggered fade with directional offset
- `StaggerChildren` — container that staggers child animations. Children must use `variants={staggerItem}` (exported from same file)
- `StaggerChildren` only passes `className` — no arbitrary HTML attrs. Wrap in a plain div if you need `data-*` attributes

**Section structure convention** — every section follows:
```
<section id="section-id" className="relative py-32 px-6">
  <div className="mx-auto max-w-7xl">
    <SectionHeading title="..." />
    {/* content */}
  </div>
</section>
```
Section IDs must match Navbar `href` anchors (e.g., `#kaempfe`, `#galerie`, `#videos`, `#kontakt`).

**Data layer** — all content lives in `src/lib/data.ts` with TypeScript interfaces in `src/types/index.ts`. No CMS or API.

### Styling

- Tailwind v4 with `@theme inline` block in `globals.css` for design tokens (colors, fonts)
- Two fonts: Bebas Neue (`font-display`) for headings, Inter (`font-sans`) for body — loaded via `next/font/google` in `src/lib/fonts.ts`
- `cn()` utility in `src/lib/utils.ts` for conditional class joining (lightweight, no clsx dependency)
- Color palette: `--color-gold` (#C8A24E) as accent, dark background (#0a0a0a), light foreground (#f5f5f5)

### Smooth Scrolling

Lenis is initialized in `SmoothScroll.tsx`. Use `data-lenis-prevent` on containers that need native scroll behavior (e.g., horizontal carousels).
