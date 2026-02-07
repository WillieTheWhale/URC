# URC Homepage Enhancement — System Design Document

## Reference Analysis: nippori.lamm.tokyo

### Core Design Philosophy
The reference site employs **editorial restraint** — trusting typography, whitespace, and rhythm
over decoration. Every element earns its space. The design creates depth through layering:
background text, mid-ground content, foreground accents. Motion is purposeful and tied to scroll.

### Key Techniques Observed
1. **Massive typographic hierarchy** — Display text dwarfs body copy (42px+ headlines vs 16px body)
2. **Generous vertical rhythm** — 80-120px section padding, breathing room between blocks
3. **Content cards with image thumbnails** — Square/portrait images with hover state changes
4. **Typekit font integration** — Custom display + body fonts for editorial personality
5. **Carousel with grab cursor** — Horizontal scroll for guest/episode content
6. **Platform link icons** — SVG icons with proper hover states
7. **Bilingual typography** — Mixed scripts creating visual texture (not applicable to URC, but the principle of mixed typographic weights creates similar effect)
8. **Custom cursor states** — grab, grabbing, pointer for different interactive zones
9. **Subtle background patterns** — Dot/line grids at near-invisible opacity (0.02-0.04)

---

## Enhancement Strategy

### Phase 1: Image Integration (Critical)
Replace placeholder PNGs with downloaded Unsplash images across all sections.

**Available Images:**
| Image | Use Case |
|-------|----------|
| `campus-aerial.jpg` | Hero secondary image, About section |
| `campus-building.jpg` | About section, atmosphere |
| `chapel-hill-campus.jpg` | Hero or About section |
| `conference-audience.jpg` | Conference Highlights cards |
| `conference-hall.jpg` | CTA section background |
| `speaker-podium.jpg` | Conference Highlights oral presentations |
| `students-collaborating.jpg` | Hero main image, Featured Research |
| `student-group.jpg` | About section secondary |
| `networking.jpg` | Why Attend section |
| `research-microscope.jpg` | Featured Research natural sciences |
| `lab-equipment.jpg` | Featured Research, Hero tertiary |
| `woman-researcher.jpg` | Organizers or Featured Research |
| `graduation.jpg` | About section or CTA |
| `celebration.jpg` | Awards, CTA section |
| `event-stage.jpg` | Conference Highlights awards |
| `studying-notes.jpg` | Timeline section |
| `working-laptop.jpg` | Why Attend or professional dev |
| `university-library.jpg` | About section, atmosphere |
| `abstract-paint.jpg` | Section backgrounds (blend mode overlay) |
| `paper-texture.jpg` | Noise/texture overlay for sections |
| `gradient-blue.jpg` | Hero atmospheric gradient |
| `gradient-purple.jpg` | CTA atmospheric effect |
| `gradient-mesh.jpg` | Decorative accent |
| `abstract-lines.jpg` | Hero or section divider texture |

### Phase 2: Advanced Visual Effects

#### 2A. Full-Bleed Image Sections
Add full-viewport image breaks between content sections — like magazine "gatefold" moments.
- Between AboutPreview and FeaturedResearch: Full-bleed campus image with text overlay
- Between Timeline and Organizers: Full-bleed conference atmosphere image

#### 2B. Mix-Blend-Mode Image Compositing
Layer images with blend modes for editorial depth:
```css
.editorial-image-overlay {
  position: relative;
}
.editorial-image-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--carolina-blue);
  mix-blend-mode: multiply;
  opacity: 0.3;
}
```

#### 2C. Image Masking with clip-path
Use geometric clip-path shapes for editorial image crops:
- Diagonal cuts on hero images
- Angled reveals on scroll
- Geometric frames that aren't just rectangles

#### 2D. Parallax Depth Layers
Current parallax is basic (single-axis Y). Enhance with:
- Multi-axis parallax (X + Y + scale)
- Different parallax speeds for foreground/midground/background
- Mouse-tracked subtle parallax on hero elements (already partially implemented)

### Phase 3: Typography & Content Enrichment

#### 3A. Pull Quotes Between Sections
Large editorial pull quotes that break the grid:
```
"Your research. Your voice. Your moment."
```
These should span full-width with dramatic font sizing.

#### 3B. Drop Caps
First letter of key paragraphs uses CSS `::first-letter` for magazine feel:
```css
.drop-cap::first-letter {
  font-family: var(--font-serif);
  font-size: 4em;
  float: left;
  line-height: 0.8;
  margin-right: 0.1em;
  color: var(--carolina-blue);
}
```

#### 3C. Animated Counters
Stats currently show static numbers. Animate them counting up on scroll using CSS `@property` or JS.

### Phase 4: New Sections & Components

#### 4A. Full-Bleed Image Divider Component
A new `ImageDivider` component that creates magazine-style breaks:
- Full viewport width
- Parallax background image
- Optional text overlay with blend mode
- Scroll-driven reveal

#### 4B. Testimonial/Quote Marquee
Horizontal scrolling testimonials between sections — editorial magazine style.

#### 4C. Enhanced Footer with Image Grid
Transform footer to include a small image mosaic/grid showing conference moments.

### Phase 5: Scroll-Driven Enhancements

#### 5A. View Timeline Animations (CSS Native)
Use CSS `animation-timeline: view()` for elements that animate on scroll entry:
```css
.scroll-reveal {
  animation: fadeSlideUp linear;
  animation-timeline: view();
  animation-range: entry 0% entry 100%;
}
```

#### 5B. Section Color Transitions
Background color shifts smoothly as user scrolls between sections using scroll-driven animations.

#### 5C. Progress Indicator
A global reading progress bar at the top of the page tied to scroll position.

---

## Implementation Order

1. **Hero overhaul** — New images, more dramatic parallax, editorial image compositing
2. **Image Divider component** — Full-bleed breaks between sections
3. **AboutPreview enhancement** — New campus images, drop cap, pull quote
4. **FeaturedResearch cards** — Real research images, blend mode treatments
5. **ConferenceHighlights** — Conference photos, wider cards with more content
6. **WhyAttend** — Image backgrounds per card, more visual weight
7. **Timeline** — Background images, editorial annotations
8. **Organizers** — Real portrait-style images, asymmetric layout refinement
9. **CTASection** — Conference hall background image, atmospheric depth
10. **Global CSS** — New effects, drop caps, blend modes, scroll-driven animations
11. **Page composition** — Image dividers between sections, flow refinement
12. **Puppeteer testing** — Visual regression checks after each major change

---

## Image Assignment Plan

### Hero Section
- **Main image**: `students-collaborating.jpg` (replaces urc-hero.png)
- **Secondary image**: `campus-building.jpg` (replaces research-lab.png)
- **Tertiary decorative**: `lab-equipment.jpg` (replaces poster-session.png)

### About Section
- **Main image**: `university-library.jpg` (replaces research-lab.png)
- **Secondary floating**: `campus-aerial.jpg` (replaces poster-session.png)

### Featured Research Cards
- **Natural Sciences**: `research-microscope.jpg` (replaces research-lab.png)
- **Social Sciences**: `students-collaborating.jpg` (replaces poster-session.png)
- **Humanities & Arts**: `graduation.jpg` (replaces award-ceremony.png)

### Conference Highlights Cards
- **Poster Sessions**: `conference-audience.jpg` (replaces poster-session.png)
- **Oral Presentations**: `speaker-podium.jpg` (replaces research-lab.png)
- **Professional Dev**: `working-laptop.jpg` (replaces award-ceremony.png)
- **Awards Ceremony**: `celebration.jpg` (replaces urc-hero.png)

### Image Dividers (NEW)
- **After Hero**: `chapel-hill-campus.jpg` — wide campus shot
- **Before CTA**: `conference-hall.jpg` — atmospheric conference venue

### Organizers
- Keep current placeholder images (these would be real team photos)

### CTA Section
- **Background**: `event-stage.jpg` — dramatic stage lighting
- **Texture overlay**: `abstract-paint.jpg` via blend mode

---

## CSS Additions Required

### New utility classes:
```css
/* Full-bleed image section */
.image-divider { position: relative; height: 60vh; overflow: hidden; }
.image-divider img { object-fit: cover; width: 100%; height: 100%; }

/* Blend mode compositing */
.blend-carolina { mix-blend-mode: multiply; }
.blend-carolina::after { background: var(--carolina-blue); mix-blend-mode: screen; opacity: 0.2; }

/* Drop cap */
.drop-cap::first-letter { font-family: var(--font-serif); font-size: 4.5em; float: left; ... }

/* Scroll-driven fade in (progressive enhancement) */
@supports (animation-timeline: view()) {
  .scroll-fade-in { animation: scrollFadeIn linear; animation-timeline: view(); animation-range: entry 10% entry 80%; }
}
```

---

## Quality Checklist
- [ ] All sections use real Unsplash images (not placeholder PNGs)
- [ ] Image dividers break between at least 2 sections
- [ ] Blend mode effects on at least 2 image treatments
- [ ] Drop cap on at least 1 editorial text block
- [ ] Scroll-driven CSS animation on at least 3 elements
- [ ] All hover states produce smooth, intentional transitions
- [ ] No horizontal overflow at any viewport width
- [ ] Mobile layout remains clean and readable
- [ ] Build passes with zero errors
- [ ] Puppeteer screenshots captured and reviewed
