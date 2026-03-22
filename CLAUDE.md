# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (Next.js 16, Turbopack)
- `npm run build` — Production build (use to verify changes compile)
- `npm run lint` — ESLint
- No test framework is configured

## Repository

- **GitHub:** `BerndWeiler/ElisaFrey.de` (private)
- **Branch:** `main`
- **Hosting:** Hostinger (serves static files from `deploy` branch, built via GitHub Actions)

## Design-Prinzipien

Dieses Projekt hat einen **Premium-Anspruch**. Jede neue Komponente oder Sektion muss sich nahtlos ins bestehende Design einfügen — visuell konsistent, hochwertig und elegant. Konkret bedeutet das:

- **Bestehende Patterns studieren, bevor du neuen Code schreibst.** Lies mindestens 2–3 existierende Sektionen/Komponenten, um Abstände, Farben, Hover-Effekte und Animationen zu verstehen. Neue Elemente müssen sich anfühlen, als wären sie vom selben Designer.
- **Farbpalette strikt einhalten:** Gold (#C8A24E) als Akzent, dunkler Hintergrund (#0a0a0a), helle Schrift (#f5f5f5). Keine neuen Farben ohne explizite Absprache.
- **Glass-Morphism konsequent nutzen:** Karten verwenden `.glass-card` / `.glass-card-hover` aus `globals.css`. Keine eigenen Background/Border-Werte erfinden, wenn eine bestehende Utility-Klasse passt.
- **Hover-Effekte edel und subtil:** Sanftes Scale (max 1.05), dezenter Gold-Glow, weiche Transitions (300–500ms). Kein aggressives Springen oder grelle Farbwechsel.
- **Abstände und Typografie konsistent:** Sektionen nutzen `py-32 px-6`, Content-Container `max-w-7xl mx-auto`. Headings immer über `SectionHeading`-Komponente. Bebas Neue für Display, Inter für Body.
- **Animationen:** `FadeIn` und `StaggerChildren` aus `src/components/animations/` verwenden. Keine neuen Animation-Libraries oder eigene `motion.div`-Konfigurationen, wenn die bestehenden Wrapper ausreichen.
- **Mobile-first responsive:** Mindestens eine Breakpoint-Variante (md:) für Grid-Layouts.

## Architecture

Single-page portfolio site for boxer Elisa Frey. Next.js 16 App Router with Tailwind CSS v4, Framer Motion animations, and Lenis smooth scrolling. All content is German.

### Page Flow

`page.tsx` renders sections in order: `Hero → Fights → Gallery → Videos → Sponsors → Contact`, wrapped in `SmoothScroll` (Lenis) and `Navbar`. All sections are `"use client"` components.

### Key Patterns

**Glass morphism design system** — defined as CSS utility classes in `globals.css`:
- `.glass-card` / `.glass-card-hover` — translucent cards with blur backdrop
- `.glass-gold` — gold-tinted variant for featured items (e.g., title fights)
- `.glass-nav` — navbar background on scroll

**Animation wrappers** — reusable Framer Motion components in `src/components/animations/`:
- `FadeIn` — viewport-triggered fade with directional offset
- `StaggerChildren` — container that staggers child animations. Children must use `variants={staggerItem}` (exported from same file)
- `StaggerChildren` only passes `className` — no arbitrary HTML attrs. Wrap in a plain div if you need `data-*` attributes
- `TextReveal` — character-by-character reveal animation

**Section structure convention** — every section follows:
```
<section id="section-id" className="relative py-32 px-6">
  <div className="mx-auto max-w-7xl">
    <SectionHeading title="..." />
    {/* content */}
  </div>
</section>
```
Section IDs must match Navbar `href` anchors (`#kaempfe`, `#galerie`, `#videos`, `#unterstuetzer`, `#kontakt`).

**Data layer** — all content lives in `src/lib/data.ts` with TypeScript interfaces in `src/types/index.ts`. No CMS or API. Fight data is sourced from [BoxRec](https://boxrec.com/en/box-pro/1235889).

### Component Inventory

**UI components** (`src/components/ui/`):
- `GlassCard` — generic glass-morphism card (props: `gold`, `hover`)
- `RecordStat` — fight record stat card with type-specific hover effects: `wins` type shows gold sparkle firework particles, `losses`/`draws` get enhanced scale+glow hover
- `FightCard` — individual fight result row (uses `glass-gold` for title fights)
- `VideoCard` — native `<video>` with autoplay/muted/loop (portrait 9:16)
- `AnimatedCounter` — viewport-triggered number count-up animation
- `SectionHeading` — section title with optional subtitle and gold divider
- `Button` — styled button/link component
- `FilmStrip` — auto-scrolling horizontal image strip
- `Lightbox` — full-screen image overlay for gallery

**Sections** (`src/components/sections/`):
- `Hero` — cinematic intro with Ken Burns zoom (8s), TextReveal name, burning fuse animation (gold spark traverses a line, then explodes into particles revealing the 5-0-0 record with spring pop). Timeline: 0.3s name → 1.0–2.5s fuse burns → 2.6s record reveal → 3.2s scroll indicator. Explosion particles use same technique as `RecordStat` sparkles.
- `Sponsors` — sponsor logos in glass-cards with white inner area (`bg-white/90`) for correct logo display on dark background

**Layout** (`src/components/layout/`):
- `Navbar` — sticky nav with scroll-triggered glass background
- `SmoothScroll` — Lenis smooth scroll wrapper
- `Footer` — site footer

### Videos

Videos are self-hosted as MP4 files in `public/videos/` (not iframe embeds). The `Video` interface has `id`, `src`, `title`. VideoCard uses native `<video autoPlay muted loop playsInline>`. Source files in `Elisa_Videos/` are excluded from git.

### Styling

- Tailwind v4 with `@theme inline` block in `globals.css` for design tokens (colors, fonts)
- Two fonts: Bebas Neue (`font-display`) for headings, Inter (`font-sans`) for body — loaded via `next/font/google` in `src/lib/fonts.ts`
- `cn()` utility in `src/lib/utils.ts` for conditional class joining (lightweight, no clsx dependency)
- Color palette: `--color-gold` (#C8A24E) as accent, dark background (#0a0a0a), light foreground (#f5f5f5)

### Smooth Scrolling

Lenis is initialized in `SmoothScroll.tsx`. Use `data-lenis-prevent` on containers that need native scroll behavior (e.g., horizontal carousels).

### Media Assets

- **Images:** `public/images/` — optimized JPGs, served via `next/image`
- **Videos:** `public/videos/` — native MP4s (bandage 17MB, schattenboxen 42MB, seilspringen 82MB)
- **Source files excluded from git:** `Elisa_Videos/`, `Bilder Elisa/`
