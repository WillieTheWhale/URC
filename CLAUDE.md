# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for the **Undergraduate Research Conference at UNC Chapel Hill (URC@UNC)** — an inaugural student-led research conference. The site is a Next.js app living in `urc-website/`. The root directory also contains organizational documents (design specs, role descriptions, meeting agendas) that inform the site's content.

## Commands

All commands run from `urc-website/`:

```bash
npm run dev          # Dev server at localhost:3000
npm run build        # Production build
npm run lint         # ESLint (flat config, eslint-config-next)
```

No test framework is configured.

## Architecture

**Stack:** Next.js 16 (App Router) + React 19 + TypeScript (strict) + Tailwind CSS v4 + Framer Motion 12

**Root Layout** (`src/app/layout.tsx`): Wraps all pages in `SmoothScroll` (Lenis library) and `PageTransition`. No providers or context — state is local to each page/component.

**Homepage** (`src/app/page.tsx`): `"use client"` — manages a `LoadingScreen` with image preloading before revealing the main content. Composes sections: Hero → AboutPreview → FeaturedResearch → ConferenceHighlights → Timeline → Organizers → CTASection.

**Sub-pages** (`src/app/{about,conference,contact,get-involved,sponsors}/page.tsx`): Each is a standalone page composing Header, section components, and Footer directly.

### Component Organization

- `components/layout/` — Header, Footer, SmoothScroll, PageTransition, LoadingScreen
- `components/sections/` — Page-level content sections (Hero, Timeline, Organizers, etc.)
- `components/ui/` — Reusable primitives: Button, Card, Section, Logo, Marquee, ImageReveal, SplitText

**Section component** (`ui/Section.tsx`): Provides a sidebar + content grid layout with scroll-triggered reveal via `useInView`. Accepts `background` variant (`primary`/`secondary`/`navy`) and optional `sidebar` slot.

**Button component** (`ui/Button.tsx`): Handles internal links (Next.js `Link`), external links (`<a>`), and buttons. Variants: `primary`, `secondary`, `ghost`, `ghost-dark`, `carolina`, `outline`.

### Design System

**globals.css** (~2000 lines): Contains the full design system as CSS custom properties, utility classes, and animations. This is the single source of truth for visual design.

Key CSS variables:
- **UNC Brand**: `--carolina-blue` (#4B9CD3), `--navy` (#13294B), `--unc-black` (#151515)
- **Fonts**: `--font-display` (Playfair), `--font-body` (Inter)
- **Easing**: `--ease-expo-out`, `--ease-quint-out`, etc.
- **Neutrals**: `--gray-50` through `--gray-900`, `--cream`, `--stone`

**Styling approach**: Tailwind utilities for layout, CSS variables via bracket notation for brand values (e.g., `text-[var(--carolina-blue)]`, `bg-[var(--navy)]`). Font families applied via inline `style` prop.

### Animation Patterns

All animations use Framer Motion with `"use client"` directive:
- **Scroll reveal**: `useInView` hook with `once: true`, animate from `opacity: 0, y: 20-30` to visible
- **Stagger**: `delay: baseDelay + index * 0.1`
- **Smooth scrolling**: Lenis library initialized in `SmoothScroll` wrapper

### Key Conventions

- `"use client"` required for any component using hooks, Framer Motion, or browser APIs
- Default exports for all components
- `@/` path alias maps to `src/`
- Icons from `@phosphor-icons/react` — import individually, use `weight` prop (`"light"`, `"regular"`, `"bold"`)
- External links: `target="_blank"` + `rel="noopener noreferrer"`
- Import order: `"use client"` → React/Next → third-party → local `@/` imports

## Reference Documents

- `URC_Website_System_Design_Document.md` — Comprehensive design spec (colors, typography, page layouts, animation specs, content copy)
- `Executive_Position_Roles.md` — Team roles displayed on the About page
- `URC_Itinerary.md` — Conference schedule content
- `AGENTS.md` — Detailed code style guidelines and component patterns
