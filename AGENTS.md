# AGENTS.md - URC@UNC Website

## Project Overview

This is a **Next.js 16** website for the Undergraduate Research Conference at UNC Chapel Hill.
The site uses **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion** for animations.

## Directory Structure

```
urc-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Design system & CSS variables
│   │   └── [route]/page.tsx    # Route pages (about, conference, etc.)
│   └── components/
│       ├── layout/             # Header, Footer
│       ├── sections/           # Page section components (Hero, Timeline, etc.)
│       └── ui/                 # Reusable UI components (Button, Card, Section)
├── public/                     # Static assets
├── package.json
├── tsconfig.json
└── eslint.config.mjs
```

## Build/Lint/Test Commands

All commands run from the `urc-website/` directory:

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint the codebase
npm run lint
```

**Note:** This project currently has no test framework configured. If tests are added,
document the test runner and single-test command here.

## Tech Stack

- **Framework:** Next.js 16.1.6 with App Router
- **React:** 19.2.3
- **Styling:** Tailwind CSS v4 (with @tailwindcss/postcss)
- **Animations:** Framer Motion 12.x
- **Icons:** Phosphor Icons (@phosphor-icons/react)
- **TypeScript:** 5.x with strict mode enabled
- **Linting:** ESLint 9 with eslint-config-next

## Code Style Guidelines

### File & Component Naming

- **Components:** PascalCase (e.g., `Hero.tsx`, `CTASection.tsx`)
- **Pages:** lowercase with hyphens for routes (e.g., `get-involved/page.tsx`)
- **Organize by feature:** `components/sections/`, `components/ui/`, `components/layout/`

### TypeScript

- Strict mode is enabled; avoid `any` types
- Define explicit interfaces for component props:
  ```typescript
  interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "ghost";
    href?: string;
    onClick?: () => void;
  }
  ```
- Use `React.ReactNode` for children props
- Prefer union types for variants: `"primary" | "secondary" | "ghost"`

### Imports

Order imports in this sequence:
1. `"use client"` directive (if needed, always first line)
2. React/Next.js imports
3. Third-party libraries (framer-motion, etc.)
4. Local components using `@/` path alias
5. Types/interfaces

Example:
```typescript
"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import Header from "@/components/layout/Header";
import Section from "@/components/ui/Section";
```

### Component Patterns

**Client Components:** Add `"use client"` directive for components using:
- React hooks (useState, useEffect, useRef, etc.)
- Framer Motion animations
- Browser APIs or event handlers

**Server Components:** Default for pages and components without client-side interactivity.

**Default Exports:** All components use default exports:
```typescript
export default function ComponentName() { ... }
```

### Styling

**Tailwind CSS:** Primary styling method using utility classes:
```tsx
<div className="flex items-center gap-4 mb-8">
```

**CSS Variables:** Use design system variables from `globals.css`:
```tsx
className="text-[var(--carolina-blue)]"
className="bg-[var(--deep-navy)]"
```

**Key CSS Variables:**
- Colors: `--carolina-blue`, `--deep-navy`, `--navy-900`, `--ink`, `--slate-*`
- Fonts: `--font-display` (Cormorant Garamond), `--font-body` (Inter)
- Spacing: `--space-*` (4px increments)

**Utility Classes from globals.css:**
- Typography: `.display-hero`, `.display-lg`, `.overline`, `.text-body`
- Buttons: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`
- Cards: `.card`, `.card-elevated`, `.card-bordered`, `.card-dark`
- Layout: `.container`, `.container-narrow`
- Patterns: `.pattern-dots`, `.gradient-hero-radial`

### Animations (Framer Motion)

Standard animation patterns used throughout:
```typescript
// Fade up on mount
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Fade up when in view
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.1 }}
>

// Staggered children
transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
```

Use `useInView` hook for scroll-triggered animations:
```typescript
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-15%" });
```

### Error Handling

- Use TypeScript's type system to prevent errors at compile time
- For form inputs, validate on submit
- External links should include `target="_blank"` and `rel="noopener noreferrer"`

### Accessibility

- All images need `alt` attributes
- Interactive elements need `aria-label` when text isn't visible
- Use semantic HTML (`<main>`, `<nav>`, `<section>`, `<footer>`)
- Buttons have `aria-expanded` for toggle states
- Support `prefers-reduced-motion` (handled in globals.css)

### Icon Usage (Phosphor Icons)

Import icons individually and use consistent sizing:
```typescript
import { ArrowRight, Users } from "@phosphor-icons/react";

<ArrowRight size={18} weight="bold" />
<Users size={24} weight="light" />
```

Common weights: `"light"`, `"regular"`, `"bold"`

## Page Structure Pattern

Standard page structure:
```tsx
export default function PageName() {
  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="gradient-hero-radial">...</section>
        
        {/* Content sections using Section component */}
        <Section background="white" number="01">...</Section>
        <Section background="cream" pattern="dots">...</Section>
        
        {/* CTA section */}
        <section className="gradient-hero-radial">...</section>
      </main>
      <Footer />
    </>
  );
}
```

## Path Aliases

Use `@/` for imports from `src/`:
```typescript
import Header from "@/components/layout/Header";
import Section from "@/components/ui/Section";
```

## Common Gotchas

1. **Client vs Server:** Framer Motion requires `"use client"` directive
2. **CSS Variables in Tailwind:** Use bracket notation: `text-[var(--color)]`
3. **Font families:** Apply via inline style: `style={{ fontFamily: "var(--font-display)" }}`
4. **Next.js Link:** Use `Link` from `next/link` for internal navigation
5. **External links:** Use `<a>` with `target="_blank"` and proper rel attributes
