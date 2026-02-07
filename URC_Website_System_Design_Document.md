# URC@UNC Website System Design Document

## Comprehensive Design Specification for the Undergraduate Research Conference at UNC

**Document Version:** 1.0  
**Created:** February 2026  
**Project Lead:** Ryan P.  
**Target Launch:** April 2026  
**Conference Dates:** October 2–3, 2026

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Brand Strategy & Naming](#2-brand-strategy--naming)
3. [Design Philosophy & Reference Analysis](#3-design-philosophy--reference-analysis)
4. [Visual Identity System](#4-visual-identity-system)
5. [Typography System](#5-typography-system)
6. [Color System](#6-color-system)
7. [Iconography & Graphic Elements](#7-iconography--graphic-elements)
8. [Logo Design Specification](#8-logo-design-specification)
9. [Site Architecture & Information Hierarchy](#9-site-architecture--information-hierarchy)
10. [Page-by-Page Design Specifications](#10-page-by-page-design-specifications)
11. [Animation & Interaction Design](#11-animation--interaction-design)
12. [Responsive Design Strategy](#12-responsive-design-strategy)
13. [Content Strategy](#13-content-strategy)
14. [Image Placeholders & Generation Prompts](#14-image-placeholders--generation-prompts)
15. [Technical Implementation Notes](#15-technical-implementation-notes)
16. [Future Expansion Considerations](#16-future-expansion-considerations)
17. [Appendix](#17-appendix)

---

## 1. Executive Summary

### 1.1 Project Overview

The Undergraduate Research Conference at UNC (URC@UNC) is an inaugural student-led research conference designed to expand professional development opportunities for Southern undergraduates. This website serves as the digital cornerstone for the conference, functioning as both an informational hub and a brand statement for the organization.

### 1.2 Core Objectives

- **Primary:** Create a distinctive, professionally branded web presence that elevates the perception of undergraduate research
- **Secondary:** Facilitate conference registration, abstract submission, and sponsor engagement
- **Tertiary:** Establish scalable infrastructure for organizational growth beyond the conference

### 1.3 Target Audiences

| Audience | Primary Needs |
|----------|---------------|
| Undergraduate researchers | Conference information, application process, presentation guidelines |
| Faculty advisors | Credibility signals, institutional affiliation, judging opportunities |
| Potential sponsors | ROI metrics, visibility opportunities, contact pathways |
| Affiliated organizations | Partnership information, co-branding guidelines |
| Executive team recruits | Mission understanding, role clarity, application process |

### 1.4 Key Differentiators

Unlike typical academic conference websites that often feel dated and utilitarian, URC@UNC will establish a new standard for undergraduate research presentation through:

- Magazine-style editorial aesthetic
- Philosophical positioning ("research as a form of self-discovery")
- Cinematic visual language
- Thoughtful motion design
- Institutional credibility balanced with youthful energy

---

## 2. Brand Strategy & Naming

### 2.1 Naming Analysis

**Option A: Undergraduate Research Association at UNC (URA@UNC)**
- *Pros:* "Association" implies ongoing membership, community, broader scope
- *Cons:* Less distinctive, generic academic sound

**Option B: Undergraduate Research Council at UNC (URC@UNC)**
- *Pros:* "Council" implies governance, seriousness, student leadership
- *Cons:* User noted as "corny" but matches official designation

**Recommendation: URC@UNC**

Rationale: While "council" may initially seem formal, it actually communicates the student-governance nature of the organization and creates a dignified abbreviation that works well visually. The "@UNC" suffix creates clear institutional association while the full expansion "Undergraduate Research Conference at UNC" can be used in formal contexts to emphasize the event.

**Brand Hierarchy:**
```
URC@UNC (Primary mark - used everywhere)
    └── Undergraduate Research Conference at UNC (Formal expansion)
    └── URC (Abbreviated for internal/casual use)
```

### 2.2 Brand Positioning Statement

> URC@UNC exists at the intersection of academic rigor and creative potential—a space where undergraduate researchers discover that the pursuit of knowledge is also a pursuit of self.

### 2.3 Brand Voice

| Attribute | Expression |
|-----------|------------|
| **Tone** | Intellectually curious, warmly inclusive, quietly confident |
| **Register** | Elevated but accessible; avoids jargon without condescension |
| **Personality** | The thoughtful mentor who sees potential before achievement |

### 2.4 Tagline Options

**Primary Recommendation:**
> *"Your research. Your voice. Your moment."*

**Alternative Options:**
- *"Where inquiry becomes impact"*
- *"First questions. Lasting contributions."*
- *"Research begins here."*

---

## 3. Design Philosophy & Reference Analysis

### 3.1 Reference Site Analysis: Nippori Seminar (nippori.lamm.tokyo)

The reference site establishes a distinctive visual language that transcends typical podcast/media websites. Key characteristics:

#### Visual Language
- **Editorial Magazine Aesthetic:** The site reads like a physical publication digitized, with clear section breaks, numbered episodes, and thoughtful white space
- **Bilingual Typography:** Japanese and English text coexist, creating visual texture and international sophistication
- **Philosophical Framing:** Headlines like "Off Track, On Purpose, In Life" position content as meaningful rather than merely informational
- **High-Contrast Minimalism:** Dark backgrounds with strategic color accents create drama without clutter

#### Layout Principles
- **Full-Bleed Sections:** Content extends edge-to-edge, creating immersive environments
- **Asymmetric Grids:** Two-column and three-column layouts break from rigid symmetry
- **Numbered Systems:** Episodes and sections use large typographic numbers as navigational and aesthetic elements
- **Horizontal Scrolling Galleries:** Guest sections and highlights use horizontal scroll patterns

#### Motion Design
- **Ambient Video:** Background videos create atmosphere without demanding attention
- **Reveal Animations:** Content fades and slides into view as users scroll
- **Subtle Parallax:** Layered movement creates depth without disorientation
- **Cursor Interactions:** Custom cursor states and hover effects

#### Typographic Treatment
- **Display Type Dominance:** Large, expressive headlines carry significant visual weight
- **Mixed Weights:** Contrast between light and bold creates hierarchy
- **Vertical Text:** Rotated text elements add visual interest
- **Poetic Line Breaks:** Headlines are broken for rhythm, not just space

### 3.2 Translation to URC@UNC Context

The Nippori aesthetic will be adapted through an academic research lens:

| Nippori Element | URC@UNC Translation |
|-----------------|---------------------|
| Guest podcasts | Research presenters, keynote speakers |
| Episode numbers | Conference tracks, session identifiers |
| Life philosophy | Research philosophy, inquiry as self-discovery |
| Japanese/English | Academic/Accessible language pairing |
| Cultural commentary | Research impact narratives |
| Career journeys | Research journeys, from question to discovery |

### 3.3 Design Principles

1. **Intellectual Elegance:** Every design decision should communicate that research is a sophisticated pursuit worthy of beautiful presentation

2. **Accessible Gravitas:** Balance institutional credibility with approachable warmth; we are serious but not intimidating

3. **Narrative Structure:** The website tells a story—visitors should feel they are being guided through an experience, not just presented with information

4. **Tactile Minimalism:** Create the feeling of a carefully designed print publication that happens to be digital

5. **Purposeful Motion:** Animation serves comprehension and delight, never decoration alone

---

## 4. Visual Identity System

### 4.1 Design System Overview

The visual system establishes a cohesive language across all touchpoints:

```
┌─────────────────────────────────────────────────────────────┐
│                    URC@UNC VISUAL SYSTEM                     │
├─────────────────────────────────────────────────────────────┤
│  FOUNDATION           │  APPLICATION          │  EXPRESSION │
│  ─────────────        │  ───────────          │  ────────── │
│  • Color palette      │  • Page layouts       │  • Hero     │
│  • Typography         │  • Components         │    moments  │
│  • Spacing system     │  • Navigation         │  • Motion   │
│  • Grid structure     │  • Cards              │    design   │
│  • Iconography        │  • Forms              │  • Imagery  │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 Grid System

**Desktop (1440px baseline):**
- 12-column grid
- Column width: 88px
- Gutter: 24px
- Margins: 80px (5.5% of viewport)
- Content area: 1280px max-width

**Tablet (768px–1024px):**
- 8-column grid
- Column width: proportional
- Gutter: 20px
- Margins: 40px

**Mobile (320px–767px):**
- 4-column grid
- Column width: proportional
- Gutter: 16px
- Margins: 20px

### 4.3 Spacing Scale

Based on an 8px baseline unit:

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Tight inline spacing |
| `space-sm` | 8px | Icon gaps, tight padding |
| `space-md` | 16px | Standard padding, card gaps |
| `space-lg` | 24px | Section padding, larger gaps |
| `space-xl` | 32px | Component separation |
| `space-2xl` | 48px | Major section breaks |
| `space-3xl` | 64px | Page section separation |
| `space-4xl` | 96px | Hero spacing |
| `space-5xl` | 128px | Major landmarks |

### 4.4 Elevation & Shadow

Three-tier elevation system:

```css
/* Level 1: Subtle lift */
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04), 
             0 2px 4px rgba(0, 0, 0, 0.04);

/* Level 2: Card elevation */
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.04), 
             0 8px 16px rgba(0, 0, 0, 0.06);

/* Level 3: Modal/Overlay */
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.08), 
             0 16px 32px rgba(0, 0, 0, 0.08);
```

### 4.5 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Buttons, inputs, small cards |
| `radius-md` | 8px | Standard cards, containers |
| `radius-lg` | 16px | Large cards, modal corners |
| `radius-xl` | 24px | Feature cards, hero elements |
| `radius-full` | 9999px | Pills, circular elements |

---

## 5. Typography System

### 5.1 Font Selection

**Primary Display Font: Cormorant Garamond**
- Source: Google Fonts (Open Source)
- Usage: Headlines, hero text, pull quotes
- Weights: Light (300), Regular (400), SemiBold (600), Bold (700)
- Character: Elegant, editorial, intellectual

**Secondary Display Font: PP Editorial New**
- Source: Pangram Pangram (Licensed)
- Usage: Accent headlines, special moments
- Weights: Regular, Italic
- Character: Modern editorial sophistication
- *Alternative if budget-constrained: Playfair Display (Google Fonts)*

**Body Font: Söhne**
- Source: Klim Type Foundry (Licensed)
- Usage: Body copy, UI elements, navigation
- Weights: Buch (Book), Kräftig (Medium), Halbfett (SemiBold)
- Character: Contemporary, highly legible, German precision
- *Alternative: Inter (Google Fonts) - similar x-height and clarity*

**Monospace Font: JetBrains Mono**
- Source: JetBrains (Open Source)
- Usage: Data, statistics, code snippets, schedules
- Weights: Regular, Medium
- Character: Technical precision

### 5.2 Type Scale

Based on a 1.25 ratio (Major Third) with 16px base:

| Level | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `display-2xl` | 72px | 1.0 | Light/SemiBold | Hero headlines |
| `display-xl` | 56px | 1.1 | Light/Regular | Section headlines |
| `display-lg` | 44px | 1.15 | Regular | Page titles |
| `display-md` | 36px | 1.2 | Regular/SemiBold | Subsection heads |
| `display-sm` | 28px | 1.25 | SemiBold | Card titles |
| `heading-lg` | 24px | 1.3 | SemiBold | Component headers |
| `heading-md` | 20px | 1.35 | Medium | Subheaders |
| `heading-sm` | 18px | 1.4 | Medium | Labels |
| `body-lg` | 18px | 1.6 | Regular | Large body text |
| `body-md` | 16px | 1.65 | Regular | Standard body |
| `body-sm` | 14px | 1.5 | Regular | Captions, meta |
| `caption` | 12px | 1.4 | Regular | Fine print, tags |
| `overline` | 11px | 1.3 | SemiBold | Labels, categories |

### 5.3 Typographic Treatments

**Hero Display Style:**
```css
.hero-headline {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 300;
  line-height: 1.0;
  letter-spacing: -0.02em;
  text-transform: none;
}
```

**Section Numbering:**
```css
.section-number {
  font-family: 'Söhne', sans-serif;
  font-size: 120px;
  font-weight: 200;
  opacity: 0.1;
  letter-spacing: -0.04em;
}
```

**Pull Quote:**
```css
.pull-quote {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 400;
  font-style: italic;
  line-height: 1.4;
  border-left: 2px solid var(--color-accent);
  padding-left: 24px;
}
```

**Overline Label:**
```css
.overline {
  font-family: 'Söhne', sans-serif;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-secondary);
}
```

---

## 6. Color System

### 6.1 Primary Palette

**UNC Carolina Blue (Official Brand)**
```
HEX: #7BAFD4
RGB: 123, 175, 212
CMYK: 60, 19, 1, 4
Pantone: 542 C
```

**Deep Carolina (Extended UNC)**
```
HEX: #13294B
RGB: 19, 41, 75
Usage: Headers, accents, depth
Note: Official UNC Navy
```

### 6.2 Extended Palette

**Background Tones:**
```css
--bg-primary: #FFFFFF;      /* White - main background */
--bg-secondary: #F8FAFC;    /* Whisper - subtle sections */
--bg-tertiary: #F1F5F9;     /* Mist - card backgrounds */
--bg-dark: #0F172A;         /* Midnight - dark sections */
--bg-darker: #020617;       /* Obsidian - footer, contrast */
```

**Text Colors:**
```css
--text-primary: #0F172A;    /* Near black - headlines */
--text-secondary: #475569;  /* Slate - body text */
--text-tertiary: #94A3B8;   /* Silver - captions, muted */
--text-inverse: #F8FAFC;    /* Light text on dark bg */
```

**Accent Colors:**
```css
--accent-carolina: #7BAFD4;    /* Primary brand blue */
--accent-deep: #13294B;        /* Deep Carolina navy */
--accent-gold: #C4A052;        /* Academic gold - awards */
--accent-sage: #84A98C;        /* Growth - research success */
--accent-coral: #E07A5F;       /* Energy - CTAs, urgency */
```

**Semantic Colors:**
```css
--success: #22C55E;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

### 6.3 Color Application Rules

| Context | Background | Text | Accent |
|---------|------------|------|--------|
| Hero sections | `bg-dark` or gradient | `text-inverse` | `accent-carolina` |
| Content sections | `bg-primary` | `text-primary` | `accent-deep` |
| Alternating sections | `bg-secondary` | `text-primary` | `accent-carolina` |
| Cards (light) | `bg-primary` | `text-secondary` | `accent-carolina` |
| Cards (dark) | `bg-dark` | `text-inverse` | `accent-gold` |
| Footer | `bg-darker` | `text-inverse` | `accent-carolina` |
| CTAs | `accent-coral` | `white` | — |

### 6.4 Gradient Definitions

**Hero Gradient:**
```css
--gradient-hero: linear-gradient(
  135deg,
  #13294B 0%,
  #1E3A5F 50%,
  #7BAFD4 100%
);
```

**Overlay Gradient:**
```css
--gradient-overlay: linear-gradient(
  180deg,
  rgba(15, 23, 42, 0) 0%,
  rgba(15, 23, 42, 0.8) 100%
);
```

**Text Gradient (for display type):**
```css
--gradient-text: linear-gradient(
  135deg,
  #7BAFD4 0%,
  #C4A052 100%
);
```

---

## 7. Iconography & Graphic Elements

### 7.1 Icon System

**Primary Icon Set: Phosphor Icons**
- Source: https://phosphoricons.com (Open Source, MIT License)
- Style: Light weight preferred, Regular for emphasis
- Size Scale: 16px, 20px, 24px, 32px, 48px
- Stroke Width: 1.5px (Light), 2px (Regular)

**Why Phosphor:**
- Extensive library (6,000+ icons)
- Consistent optical weight
- Multiple weights for hierarchy
- Active maintenance
- MIT license (commercial-friendly)

### 7.2 Icon Usage Guidelines

| Context | Size | Weight | Color |
|---------|------|--------|-------|
| Inline text | 16px | Light | `text-secondary` |
| Button icons | 20px | Regular | Inherit |
| List markers | 20px | Light | `accent-carolina` |
| Feature icons | 32px | Light | `accent-carolina` |
| Hero icons | 48px | Light | `text-inverse` |

### 7.3 Essential Icons

```
Navigation:
• Menu (hamburger)    • Arrow Right        • External Link
• Close (X)           • Arrow Down         • Search
• Chevron Down        • Arrow Left         • User

Actions:
• Download            • Share              • Copy Link
• Email               • Calendar           • Clock
• Location Pin        • Check Circle       • Plus

Content:
• Document            • Presentation       • Image
• Video               • Award              • Users
• Building            • Graduation Cap     • Lightbulb
• Quote               • Link               • Tag

Social:
• Instagram           • LinkedIn           • X (Twitter)
• Email               • Globe (Web)
```

### 7.4 Graphic Elements

**Decorative Shapes:**

1. **Research Arc**
   - Semi-circular arc suggesting expansion, discovery
   - Used as section dividers, badge backgrounds
   - Stroke or subtle fill

2. **Node Network**
   - Connected dots suggesting collaboration, interdisciplinary work
   - Used in backgrounds, section transitions
   - Animated version for hero

3. **Progress Markers**
   - Numbered circles for timelines, processes
   - Inspired by Nippori's episode numbering
   - Large, typographic treatment

4. **Abstract Topography**
   - Contour lines suggesting depth, exploration
   - Subtle background texture
   - UNC landscape inspiration (hills of Chapel Hill)

### 7.5 Pattern Library

**Grid Pattern:**
```css
/* Subtle graph paper effect */
.pattern-grid {
  background-image: 
    linear-gradient(rgba(123, 175, 212, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(123, 175, 212, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}
```

**Dot Pattern:**
```css
/* Scattered research nodes */
.pattern-dots {
  background-image: radial-gradient(
    circle at center,
    rgba(123, 175, 212, 0.15) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}
```

---

## 8. Logo Design Specification

### 8.1 Logo Concept

The URC@UNC logo should communicate:
- **Academic foundation** (stability, tradition)
- **Student-led innovation** (freshness, forward-thinking)
- **Research focus** (inquiry, discovery)
- **UNC affiliation** (institutional backing)

### 8.2 Logo Architecture

**Primary Logo (Full):**
```
┌─────────────────────────────────────────┐
│                                         │
│    [SYMBOL]    URC@UNC                  │
│                                         │
│    Undergraduate Research Conference    │
│    at the University of North Carolina  │
│                                         │
└─────────────────────────────────────────┘
```

**Logo Symbol Concept:**
The symbol combines:
1. **Ascending arc** - representing growth, trajectory of research
2. **Nodal points** - representing connections, collaboration
3. **Subtle "U" form** - referencing UNC, undergraduate

**Symbol Specifications:**
- Geometry based on golden ratio (1:1.618)
- Minimum size: 24px height
- Clear space: Equal to height of "U" in URC on all sides

### 8.3 Logo Variations

| Variation | Usage |
|-----------|-------|
| Full color (horizontal) | Primary use, headers, formal documents |
| Full color (stacked) | Square spaces, social media |
| Monochrome (black) | Print, single-color applications |
| Monochrome (white) | Dark backgrounds, overlays |
| Symbol only | Favicon, small applications, watermarks |
| Wordmark only | When symbol is not necessary |

### 8.4 Logo Color Specifications

```css
/* Primary logo colors */
--logo-symbol: #13294B;      /* Deep Carolina */
--logo-text-primary: #0F172A; /* Near black */
--logo-text-secondary: #475569; /* Slate - descriptor text */
--logo-accent: #7BAFD4;      /* Carolina Blue - symbol accent */
```

### 8.5 Logo Don'ts

- Do not rotate or skew
- Do not change proportions
- Do not apply effects (shadows, gradients, glows)
- Do not place on busy backgrounds without container
- Do not recreate with different fonts
- Do not rearrange elements
- Do not use non-approved colors

### 8.6 Logo Generation Prompt

For AI-assisted logo generation, see Section 14 for detailed image generation prompts.

---

## 9. Site Architecture & Information Hierarchy

### 9.1 Sitemap Overview

```
URC@UNC Website
│
├── Homepage (/)
│   └── Hero, About preview, Conference CTA, Sponsors
│
├── About (/about)
│   ├── Mission & Vision
│   ├── Our Story
│   ├── Leadership Team
│   └── Affiliations
│
├── Conference (/conference)
│   ├── Overview
│   ├── Schedule & Itinerary
│   ├── Tracks & Sessions
│   │   ├── STEM
│   │   ├── Social Sciences
│   │   └── Humanities
│   ├── Professional Development
│   ├── Awards & Recognition
│   └── Venue & Logistics
│
├── Get Involved (/get-involved)
│   ├── Call for Abstracts
│   ├── Presenter Information
│   ├── Judges & Volunteers
│   └── Join the Executive Team
│
├── Sponsors (/sponsors)
│   ├── Why Sponsor
│   ├── Sponsorship Tiers
│   ├── Current Sponsors
│   └── Contact for Sponsorship
│
├── Resources (/resources)
│   ├── For Presenters
│   ├── For Faculty
│   └── FAQ
│
└── Contact (/contact)
    └── Contact form, social links
```

### 9.2 Navigation Structure

**Primary Navigation (Desktop):**
```
Logo          About    Conference    Get Involved    Sponsors    [Apply]
```

**Primary Navigation (Mobile):**
```
Logo                                              [Menu Icon]
```

**Footer Navigation:**
```
Column 1: About           Column 2: Conference      Column 3: Get Involved
- Mission                 - Schedule                - Call for Abstracts
- Leadership              - Tracks                  - Join Exec Team
- Affiliations            - Awards                  - Volunteer

Column 4: Connect         Column 5: Legal
- Contact                 - Privacy Policy
- Instagram               - Terms
- Newsletter              - Accessibility
```

### 9.3 User Flows

**Flow 1: Potential Presenter**
```
Homepage → Conference → Call for Abstracts → Apply
         ↓
     About (credibility check)
```

**Flow 2: Potential Sponsor**
```
Homepage → Sponsors → Sponsorship Tiers → Contact for Sponsorship
         ↓
     About → Leadership (credibility)
```

**Flow 3: Executive Recruit**
```
Homepage → About → Leadership → Get Involved → Join Exec Team
```

---

## 10. Page-by-Page Design Specifications

### 10.1 Homepage

**Purpose:** Capture attention, establish credibility, drive action

**Section Structure:**

#### Hero Section
- **Type:** Full viewport height, dark overlay on background media
- **Content:**
  - Large display headline (Cormorant Garamond, display-2xl)
  - Tagline in secondary type
  - Primary CTA: "Submit Your Research" (coral button)
  - Secondary CTA: "Learn More" (ghost button)
- **Background:** Video loop or high-quality image of UNC campus/research environment
- **Animation:** Text reveals on load, subtle parallax on scroll

**Hero Copy:**
```
[Overline]
OCTOBER 2–3, 2026 • UNC CHAPEL HILL

[Headline]
Your research.
Your voice.
Your moment.

[Subhead]
The inaugural Undergraduate Research Conference at UNC brings 
together 200 student researchers for two days of presentations, 
professional development, and recognition.

[CTAs]
[Submit Your Research]  [Learn More →]
```

#### About Preview Section
- **Layout:** Two-column, asymmetric (5/7 split)
- **Left:** Large section number ("01"), overline "About", medium headline
- **Right:** Brief about text, "Learn more" link
- **Background:** Light, subtle pattern

**About Preview Copy:**
```
[Number]
01

[Overline]
ABOUT

[Headline]
Research for undergraduates,
by undergraduates.

[Body]
Recognizing a disparity in professional development opportunities 
for Southern students, we founded this conference to provide avenues 
for undergraduate research presentation and career growth.

[Link]
Read our full story →
```

#### Conference Highlights Section
- **Layout:** Card grid (3 columns desktop, stacked mobile)
- **Cards:** Each highlights a key conference element
- **Style:** Dark cards with icons, minimal text, hover state

**Highlights Cards:**
```
Card 1: POSTER SESSIONS
Three sessions across STEM, Social Sciences, and Humanities

Card 2: ORAL PRESENTATIONS
Selected researchers present 15-minute talks

Card 3: PROFESSIONAL DEVELOPMENT
Workshops led by career development professionals
```

#### Timeline Section
- **Layout:** Horizontal scroll or vertical timeline
- **Content:** Key dates from call for abstracts to post-conference
- **Style:** Large typographic dates, minimal descriptions

#### Why Attend Section
- **Layout:** Split screen with image and text
- **Content:** Value propositions for students, faculty, sponsors
- **Style:** Alternating alignment, pull quotes

#### Affiliations Bar
- **Layout:** Horizontal logo strip
- **Content:** Campus Y, Public Service Center, Office of Undergraduate Research, UNC
- **Style:** Grayscale logos, subtle hover color

#### Sponsors Preview
- **Layout:** Tiered display of sponsor logos
- **CTA:** "Become a Sponsor"

#### Newsletter CTA Section
- **Layout:** Centered, dark background
- **Content:** Email signup form
- **Style:** Simple, elegant, single field + button

#### Footer
- **Layout:** Multi-column navigation + social links
- **Content:** Full sitemap, contact info, copyright
- **Style:** Dark background, organized columns

---

### 10.2 About Page

**Purpose:** Establish credibility, share mission, introduce team

**Section Structure:**

#### Hero
- **Type:** Minimal hero, medium height
- **Content:** Page title, brief descriptor
- **Style:** Clean, professional

**Hero Copy:**
```
[Overline]
ABOUT URC@UNC

[Headline]
We believe every question
deserves an audience.

[Descriptor]
The Undergraduate Research Conference at UNC is a research 
conference for undergraduates, by undergraduates.
```

#### Mission & Vision
- **Layout:** Two-column with section number
- **Content:** Full mission statement, vision for the future

**Mission Copy:**
```
[Section Number]
01

[Headline]
Our Mission

[Body]
The Undergraduate Research Conference (URC) aims to expand access 
to professional research presentation opportunities for Southern 
undergraduates, strengthen students' scientific communication and 
career readiness, and build a sustainable, student-led model for 
interdisciplinary collaboration.

By hosting 200 attendees for poster and oral sessions, professional 
workshops, and awards in diverse research fields, the URC provides 
equitable opportunities to share and celebrate undergraduate research.
```

#### Goals Section
- **Layout:** Three-column feature blocks
- **Content:** Primary objectives

**Goals Content:**
```
Goal 1: EXPAND ACCESS
Professional research presentation opportunities for 
Southern undergraduates

Goal 2: STRENGTHEN SKILLS
Scientific communication and career readiness development

Goal 3: BUILD SUSTAINABILITY
Student-led model for interdisciplinary collaboration
```

#### Leadership Team
- **Layout:** Grid of team member cards
- **Content:** Photo, name, role, brief bio
- **Style:** Professional headshots, hover reveals more info

**Leadership Positions (per Executive_Position_Roles.md):**
```
DIRECTOR
- Overall leadership and vision
- Faculty and institutional liaison
- Strategic priorities

INTERNAL OPERATIONS
- Finance Committee Chair
- Logistics Coordinator
- Conference Experience Lead

EXTERNAL OPERATIONS
- Grant Writing Lead
- Public Relations Director
- Web Development Lead

RECRUITMENT
- Speaker Recruitment Chair
- Attendee Recruitment Chair
```

#### Affiliations
- **Layout:** Feature cards for each partner
- **Content:** Partner logo, description of relationship
- **Partners:** Campus Y, Public Service Center, Office of Undergraduate Research

**Affiliations Copy:**
```
[Headline]
Our Partners

[Partner 1: The Campus Y]
UNC's social justice hub connecting students to community engagement 
and service learning opportunities.

[Partner 2: Carolina Center for Public Service]
Supporting student involvement in public service and civic engagement 
across North Carolina.

[Partner 3: Office of Undergraduate Research]
Connecting students with faculty mentors and research opportunities 
throughout their Carolina experience.
```

#### Join Us CTA
- **Layout:** Full-width banner
- **Content:** Recruitment message, apply button
- **Style:** Dark background, prominent CTA

---

### 10.3 Conference Page

**Purpose:** Comprehensive conference information

**Section Structure:**

#### Hero
- **Content:** Conference name, dates, location, register CTA

**Hero Copy:**
```
[Overline]
OCTOBER 2–3, 2026

[Headline]
URC@UNC 2026

[Location]
University of North Carolina at Chapel Hill

[CTA]
[Register Now]  [View Schedule]
```

#### Schedule Overview
- **Layout:** Day-by-day breakdown
- **Content:** Based on URC_Itinerary.md

**Schedule Content:**
```
FRIDAY, OCTOBER 2
5:00–5:30 PM    Registration
5:30–6:00 PM    Welcome Remarks
6:00–7:00 PM    Dinner
7:00–8:30 PM    Professional Development Workshop #1
                Breakout Groups

SATURDAY, OCTOBER 3
9:30–10:00 AM   Breakfast
10:00–11:00 AM  Poster Session 1
                • Posters & sponsor booths in atrium
                • 10-minute presentations in classrooms
11:00 AM–12:00 PM  Poster Session 2
12:00–1:00 PM   Lunch
1:00–2:30 PM    Professional Development Workshop #2
2:30–3:30 PM    Poster Session 3
3:30–4:30 PM    Professional Development Workshop #3
4:30–5:30 PM    Awards Ceremony & Closing Remarks
```

#### Research Tracks
- **Layout:** Three cards for discipline areas
- **Content:** STEM, Social Sciences, Humanities descriptions

#### Professional Development
- **Content:** Workshop descriptions, career focus areas

#### Awards Section
- **Content:** Award categories, judging criteria, prize information

**Awards Content:**
```
[Headline]
Recognition for Excellence

[Body]
The URC provides financial merit awards to the best poster and oral 
presentations, judged by faculty, graduate students, and undergraduate 
seniors pursuing honors theses.

[Award Categories]
• Best Poster Presentation (by track)
• Best Oral Presentation
• Research Communication Award
• Special Recognition: Federally Threatened Research Fields
  (public health, social sciences, minoritized-disparity focused work)
```

#### Venue & Logistics
- **Content:** Venue information, accessibility, travel details

---

### 10.4 Get Involved Page

**Purpose:** Drive applications and participation

**Section Structure:**

#### Hero
- **Content:** Page title, participation overview

**Hero Copy:**
```
[Headline]
Be Part of Something New

[Body]
Whether you're presenting research, judging presentations, 
or joining our executive team, there's a place for you at URC.
```

#### Call for Abstracts
- **Content:** Submission guidelines, timeline, requirements
- **CTA:** Link to Google Form

**Abstract Submission Content:**
```
[Headline]
Call for Abstracts

[Timeline]
Opens: April 1, 2026
Deadline: July 1, 2026
Notifications: August 2026

[Eligibility]
Research projects must be conducted under the supervision of a 
faculty member or professional at a degree-granting institution.

[Submission Requirements]
• Abstract (250 words max)
• Faculty advisor information
• Research discipline classification

[CTA Button]
Submit Your Abstract → (links to Google Form)
```

#### Presenter Information
- **Content:** What to expect, preparation guidelines

#### Volunteer & Judge
- **Content:** Opportunities for faculty, grad students, senior undergrads

#### Join Executive Team
- **Content:** Open positions, responsibilities, application process

**Exec Team Content:**
```
[Headline]
Join Our Leadership

[Body]
We're building something from the ground up, and we need passionate 
students to help shape the future of undergraduate research at UNC.

[Open Positions]
See Executive_Position_Roles.md for full descriptions

[CTA]
Apply to Join →
```

---

### 10.5 Sponsors Page

**Purpose:** Attract financial support

**Section Structure:**

#### Hero
- **Content:** Value proposition for sponsors

**Hero Copy:**
```
[Headline]
Invest in the Next Generation
of Researchers

[Body]
Partner with URC@UNC to support undergraduate research excellence 
and connect with future leaders in your field.
```

#### Why Sponsor
- **Content:** Benefits, audience demographics, visibility opportunities

**Why Sponsor Content:**
```
[Headline]
Why Partner With Us

[Benefit 1: ACCESS]
Connect directly with 200 undergraduate researchers across STEM, 
social sciences, and humanities

[Benefit 2: VISIBILITY]
Brand presence throughout the conference, on our website, 
and in all promotional materials

[Benefit 3: IMPACT]
Support equitable access to professional development for 
Southern undergraduates

[Benefit 4: RECRUITMENT]
Early access to emerging talent from North Carolina's flagship 
research university
```

#### Sponsorship Tiers
- **Layout:** Tiered pricing cards
- **Content:** Benefits per level

**Sponsorship Tiers:**
```
FOUNDING PARTNER — $10,000+
• Exclusive naming rights
• Keynote speaking opportunity
• Premium logo placement
• VIP reception invitation
• 10 complimentary registrations

GOLD SPONSOR — $5,000
• Logo on conference materials
• Exhibition booth
• Speaking slot in breakout session
• 5 complimentary registrations

SILVER SPONSOR — $2,500
• Logo on website and program
• Shared exhibition space
• 3 complimentary registrations

BRONZE SPONSOR — $1,000
• Logo on website
• Recognition in program
• 2 complimentary registrations

IN-KIND SUPPORT
• Catering, materials, services
• Custom recognition based on contribution
```

#### Current Sponsors
- **Layout:** Logo grid by tier
- **Note:** Placeholder for inaugural year

#### Contact for Sponsorship
- **Content:** Contact form or direct email link

---

### 10.6 Contact Page

**Purpose:** Enable communication

**Content:**
- Contact form
- Direct email address
- Social media links
- Physical address (UNC general)

---

## 11. Animation & Interaction Design

### 11.1 Animation Principles

1. **Purposeful:** Every animation serves comprehension or delight
2. **Subtle:** Motion enhances without distracting
3. **Consistent:** Same easing curves and durations throughout
4. **Performant:** 60fps minimum, GPU-accelerated transforms only

### 11.2 Timing Functions

```css
/* Standard easing */
--ease-default: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Enter/exit */
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);

/* Expressive (for hero animations) */
--ease-expressive: cubic-bezier(0.34, 1.56, 0.64, 1);
```

### 11.3 Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `duration-instant` | 100ms | Micro-interactions, hovers |
| `duration-fast` | 200ms | Standard transitions |
| `duration-normal` | 300ms | Modal opens, reveals |
| `duration-slow` | 500ms | Page transitions |
| `duration-slower` | 800ms | Hero animations |

### 11.4 Standard Animations

**Fade Up (Scroll Reveal):**
```css
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  animation: fadeUp 0.6s var(--ease-out) forwards;
}
```

**Stagger Children:**
```css
.stagger-children > * {
  animation: fadeUp 0.5s var(--ease-out) forwards;
  opacity: 0;
}

.stagger-children > *:nth-child(1) { animation-delay: 0ms; }
.stagger-children > *:nth-child(2) { animation-delay: 100ms; }
.stagger-children > *:nth-child(3) { animation-delay: 200ms; }
/* etc. */
```

**Text Character Reveal (Hero):**
```css
/* Split text into spans, animate each */
.char-reveal span {
  display: inline-block;
  animation: charReveal 0.6s var(--ease-out) forwards;
  animation-delay: calc(var(--char-index) * 30ms);
  opacity: 0;
}

@keyframes charReveal {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### 11.5 Interaction States

**Button Hover:**
```css
.button {
  transition: transform 0.2s var(--ease-default),
              box-shadow 0.2s var(--ease-default);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.button:active {
  transform: translateY(0);
}
```

**Link Hover:**
```css
.link {
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s var(--ease-out);
}

.link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

**Card Hover:**
```css
.card {
  transition: transform 0.3s var(--ease-out),
              box-shadow 0.3s var(--ease-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

### 11.6 Scroll-Triggered Animations

**Implementation with Intersection Observer:**
```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### 11.7 Page Transitions

**Concept:** Smooth fade between pages with progress indicator

```css
/* Exit animation */
.page-exit {
  animation: fadeOut 0.3s var(--ease-in) forwards;
}

@keyframes fadeOut {
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}

/* Enter animation */
.page-enter {
  animation: fadeIn 0.4s var(--ease-out) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
}
```

---

## 12. Responsive Design Strategy

### 12.1 Breakpoint System

| Breakpoint | Width | Target Devices |
|------------|-------|----------------|
| `mobile-sm` | 320px | Small phones |
| `mobile` | 375px | Standard phones |
| `mobile-lg` | 425px | Large phones |
| `tablet` | 768px | Tablets portrait |
| `tablet-lg` | 1024px | Tablets landscape, small laptops |
| `desktop` | 1280px | Standard desktops |
| `desktop-lg` | 1440px | Large desktops |
| `desktop-xl` | 1920px | Ultra-wide monitors |

### 12.2 Responsive Typography

```css
/* Fluid type scaling */
:root {
  /* Base size scales from 14px (mobile) to 16px (desktop) */
  --text-base: clamp(0.875rem, 0.8rem + 0.4vw, 1rem);
  
  /* Display scales dramatically */
  --display-2xl: clamp(2.5rem, 2rem + 4vw, 4.5rem);
  --display-xl: clamp(2rem, 1.5rem + 3vw, 3.5rem);
  --display-lg: clamp(1.75rem, 1.25rem + 2.5vw, 2.75rem);
}
```

### 12.3 Layout Adaptations

**Desktop (1280px+):**
- Full navigation visible
- Multi-column layouts
- Horizontal scroll galleries
- Large typography and spacing

**Tablet (768px–1279px):**
- Condensed navigation
- Two-column layouts become single or asymmetric
- Reduced spacing
- Medium typography

**Mobile (< 768px):**
- Hamburger menu
- Single-column layouts
- Stacked components
- Touch-optimized spacing (44px minimum tap targets)
- Simplified animations

### 12.4 Mobile-First Components

**Navigation:**
```
Desktop: Full horizontal nav with dropdowns
Tablet: Condensed nav, some items in dropdown
Mobile: Hamburger menu with full-screen overlay
```

**Hero Section:**
```
Desktop: Split layout with text and media
Tablet: Stacked layout, reduced height
Mobile: Single column, full-bleed image, overlaid text
```

**Card Grids:**
```
Desktop: 3 or 4 columns
Tablet: 2 columns
Mobile: Single column, horizontal scroll option
```

---

## 13. Content Strategy

### 13.1 Voice & Tone Guidelines

**Voice Attributes:**
- Intellectually curious
- Warmly inclusive
- Quietly confident
- Supportive without being patronizing

**Tone Variations by Context:**

| Context | Tone | Example |
|---------|------|---------|
| Hero messaging | Inspiring, aspirational | "Your research deserves to be heard." |
| Informational | Clear, helpful | "Here's what you need to know about submitting your abstract." |
| CTAs | Encouraging, action-oriented | "Take the first step. Submit your abstract." |
| Error states | Reassuring, solution-focused | "Something went wrong. Let's try that again." |

### 13.2 Content Hierarchy

**Primary Messages (What visitors must know):**
1. What URC@UNC is
2. When and where it happens
3. How to participate

**Secondary Messages (What supports conversion):**
1. Why URC matters (mission, impact)
2. Who's behind it (credibility)
3. What's included (value)

**Tertiary Messages (For engaged visitors):**
1. Detailed schedule
2. Specific requirements
3. Historical context

### 13.3 SEO Considerations

**Target Keywords:**
- Primary: "undergraduate research conference UNC"
- Secondary: "UNC research conference 2026", "undergraduate research NC"
- Long-tail: "how to present research as an undergraduate", "research conferences for students"

**Meta Description Template:**
```
URC@UNC is the inaugural Undergraduate Research Conference at UNC Chapel Hill, 
bringing together 200 student researchers October 2–3, 2026. Submit your abstract today.
```

---

## 14. Image Placeholders & Generation Prompts

### 14.1 Image Categories

The website requires the following image types:

1. **Hero/Atmospheric Images** - Full-bleed backgrounds
2. **Team/Portrait Photos** - Leadership headshots
3. **Event/Venue Photos** - Conference spaces
4. **Abstract/Conceptual** - Supporting graphics
5. **Logo and Mark** - Brand identity

### 14.2 Image Generation Prompts

The following XML-structured prompts are designed for high-quality AI image generation. Each prompt includes specific camera and technical settings for photorealistic results.

---

#### HERO IMAGES

```xml
<image_generation_prompt id="hero-01">
  <title>Primary Hero - Research Discovery</title>
  <description>Main homepage hero background showing the essence of undergraduate research</description>
  <dimensions>
    <width>2560</width>
    <height>1440</height>
    <aspect_ratio>16:9</aspect_ratio>
  </dimensions>
  <prompt>
    Editorial magazine photography of a diverse group of undergraduate students 
    engaged in research discussion around a laboratory table, one student pointing 
    at data on a screen while others lean in with curiosity, warm afternoon light 
    streaming through large windows, depth of field with focus on central figure, 
    background showing scientific equipment softly blurred, atmosphere of 
    intellectual excitement and collaboration, color palette emphasizing Carolina 
    blue tones with warm golden highlights
  </prompt>
  <camera_settings>
    <camera>Sony A7R IV</camera>
    <lens>Sony 35mm f/1.4 GM</lens>
    <aperture>f/2.0</aperture>
    <shutter_speed>1/200</shutter_speed>
    <iso>400</iso>
    <focal_length>35mm</focal_length>
  </camera_settings>
  <style_references>
    <reference>Documentary-style editorial photography</reference>
    <reference>Natural light portraiture</reference>
    <reference>Cinematic color grading</reference>
  </style_references>
  <negative_prompts>
    staged, artificial lighting, stock photo aesthetic, corporate feel, 
    outdated equipment, cluttered composition, harsh shadows
  </negative_prompts>
</image_generation_prompt>
```

```xml
<image_generation_prompt id="hero-02">
  <title>Hero Alternative - UNC Campus Atmosphere</title>
  <description>Establishing shot of UNC Chapel Hill campus with research context</description>
  <dimensions>
    <width>2560</width>
    <height>1440</height>
    <aspect_ratio>16:9</aspect_ratio>
  </dimensions>
  <prompt>
    Atmospheric twilight photography of the University of North Carolina at 
    Chapel Hill campus, view across the quad toward academic buildings, students 
    walking with purpose in soft golden hour light, autumn foliage in Carolina 
    blue and golden tones, gentle mist adding depth, architectural details of 
    historic brick buildings, sense of academic tradition meeting contemporary 
    energy, magazine-quality editorial composition
  </prompt>
  <camera_settings>
    <camera>Phase One IQ4 150MP</camera>
    <lens>Schneider 55mm LS f/2.8</lens>
    <aperture>f/5.6</aperture>
    <shutter_speed>1/60</shutter_speed>
    <iso>200</iso>
    <focal_length>55mm</focal_length>
  </camera_settings>
  <style_references>
    <reference>Architectural photography</reference>
    <reference>Editorial landscape</reference>
    <reference>Academic institution branding</reference>
  </style_references>
  <negative_prompts>
    harsh midday sun, empty campus, winter scene, poor weather, 
    crowded chaotic scene, signage prominently visible
  </negative_prompts>
</image_generation_prompt>
```

---

#### SECTION IMAGES

```xml
<image_generation_prompt id="section-poster">
  <title>Poster Session Environment</title>
  <description>Image for conference schedule/poster session sections</description>
  <dimensions>
    <width>1920</width>
    <height>1280</height>
    <aspect_ratio>3:2</aspect_ratio>
  </dimensions>
  <prompt>
    Documentary-style photograph of an undergraduate research poster session 
    in a bright academic atrium, student presenter explaining their research 
    poster to an engaged small group, hands gesturing toward data visualization, 
    other poster displays visible in background creating rhythm, professional 
    but approachable atmosphere, natural light from skylights above, sharp 
    focus on presenter with soft bokeh on background, colors emphasizing 
    Carolina blue accents in clothing and decor
  </prompt>
  <camera_settings>
    <camera>Canon EOS R5</camera>
    <lens>Canon RF 50mm f/1.2L</lens>
    <aperture>f/1.8</aperture>
    <shutter_speed>1/250</shutter_speed>
    <iso>800</iso>
    <focal_length>50mm</focal_length>
  </camera_settings>
  <style_references>
    <reference>Event photography</reference>
    <reference>Documentary portraiture</reference>
    <reference>Academic conference coverage</reference>
  </style_references>
  <negative_prompts>
    posed group shot, flash photography, empty room, poor quality posters, 
    backs of heads only, corporate conference aesthetic
  </negative_prompts>
</image_generation_prompt>
```

```xml
<image_generation_prompt id="section-workshop">
  <title>Professional Development Workshop</title>
  <description>Image for professional development sections</description>
  <dimensions>
    <width>1920</width>
    <height>1280</height>
    <aspect_ratio>3:2</aspect_ratio>
  </dimensions>
  <prompt>
    Intimate photograph of a professional development workshop in progress, 
    small group of diverse undergraduate students seated in semicircle, 
    engaged in discussion with mentor figure, notebook and laptops visible, 
    warm natural light from windows, modern academic meeting room setting, 
    feeling of mentorship and growth, one student speaking while others 
    actively listen, relaxed but focused energy, contemporary furniture 
    and clean interior design
  </prompt>
  <camera_settings>
    <camera>Nikon Z8</camera>
    <lens>Nikkor Z 85mm f/1.8 S</lens>
    <aperture>f/2.2</aperture>
    <shutter_speed>1/160</shutter_speed>
    <iso>640</iso>
    <focal_length>85mm</focal_length>
  </camera_settings>
  <style_references>
    <reference>Corporate lifestyle photography</reference>
    <reference>Educational institution imagery</reference>
    <reference>Candid meeting documentation</reference>
  </style_references>
  <negative_prompts>
    classroom rows, lecture hall, distant shot, fluorescent lighting, 
    empty chairs, dated interior design
  </negative_prompts>
</image_generation_prompt>
```

```xml
<image_generation_prompt id="section-awards">
  <title>Awards Recognition Moment</title>
  <description>Image for awards and recognition sections</description>
  <dimensions>
    <width>1920</width>
    <height>1280</height>
    <aspect_ratio>3:2</aspect_ratio>
  </dimensions>
  <prompt>
    Celebratory moment photograph of an undergraduate researcher receiving 
    an award on stage, genuine emotion of accomplishment, presenter and 
    recipient shaking hands or certificate being presented, audience 
    applauding in soft focus background, elegant stage lighting with 
    Carolina blue uplighting, professional conference setting, sense of 
    achievement and recognition, warm golden accents in lighting
  </prompt>
  <camera_settings>
    <camera>Sony A9 III</camera>
    <lens>Sony 70-200mm f/2.8 GM II</lens>
    <aperture>f/2.8</aperture>
    <shutter_speed>1/320</shutter_speed>
    <iso>1600</iso>
    <focal_length>135mm</focal_length>
  </camera_settings>
  <style_references>
    <reference>Event photography</reference>
    <reference>Award ceremony documentation</reference>
    <reference>Editorial stage photography</reference>
  </style_references>
  <negative_prompts>
    poor stage lighting, cluttered background, blurry subject, 
    flash shadow, oversaturated colors
  </negative_prompts>
</image_generation_prompt>
```

---

#### ABSTRACT/CONCEPTUAL

```xml
<image_generation_prompt id="abstract-research">
  <title>Abstract Research Visualization</title>
  <description>Conceptual background for about/mission sections</description>
  <dimensions>
    <width>1920</width>
    <height>1080</height>
    <aspect_ratio>16:9</aspect_ratio>
  </dimensions>
  <prompt>
    Abstract minimalist visualization representing research and discovery, 
    network of interconnected nodes and lines suggesting collaboration and 
    knowledge sharing, color palette transitioning from deep navy (#13294B) 
    to Carolina blue (#7BAFD4) to soft gold (#C4A052), subtle organic curves 
    suggesting growth and exploration, clean contemporary aesthetic suitable 
    for text overlay, feeling of scientific inquiry and intellectual connection
  </prompt>
  <style>
    Digital art, data visualization aesthetic, generative design
  </style>
  <color_specifications>
    <primary>#13294B</primary>
    <secondary>#7BAFD4</secondary>
    <accent>#C4A052</accent>
    <background>#0F172A</background>
  </color_specifications>
  <negative_prompts>
    chaotic, cluttered, photographic, people, text, busy patterns, 
    neon colors, 3D rendered spheres
  </negative_prompts>
</image_generation_prompt>
```

```xml
<image_generation_prompt id="abstract-topography">
  <title>Topographic Pattern</title>
  <description>Subtle background texture for sections</description>
  <dimensions>
    <width>1920</width>
    <height>1920</height>
    <aspect_ratio>1:1</aspect_ratio>
  </dimensions>
  <prompt>
    Minimalist topographic contour line pattern inspired by the rolling 
    hills of Chapel Hill North Carolina, abstract elevation lines in 
    very subtle Carolina blue (#7BAFD4) on white background, suggesting 
    exploration and discovery, extremely clean and refined, suitable for 
    seamless tiling, organic flowing lines with mathematical precision
  </prompt>
  <style>
    Vector-style illustration, topographic map aesthetic, minimal line art
  </style>
  <color_specifications>
    <line_color>#7BAFD4</line_color>
    <line_opacity>0.1</line_opacity>
    <background>#FFFFFF</background>
  </color_specifications>
  <negative_prompts>
    bold colors, thick lines, labels, markers, dots, filled shapes
  </negative_prompts>
</image_generation_prompt>
```

---

#### LOGO GENERATION

```xml
<image_generation_prompt id="logo-symbol">
  <title>URC@UNC Logo Symbol</title>
  <description>Primary logo mark for the organization</description>
  <dimensions>
    <width>1024</width>
    <height>1024</height>
    <aspect_ratio>1:1</aspect_ratio>
  </dimensions>
  <prompt>
    Minimalist logo symbol combining: (1) an ascending arc suggesting 
    growth and research trajectory, (2) three connected nodes representing 
    collaboration and interdisciplinary connection, (3) subtle formation 
    of the letter U for undergraduate/UNC, clean geometric construction 
    based on golden ratio proportions, professional academic aesthetic, 
    works in single color, refined and timeless, suitable for small 
    reproduction, not overly complex
  </prompt>
  <style>
    Corporate identity design, minimalist logo, geometric construction
  </style>
  <color_specifications>
    <primary>#13294B</primary>
    <accent>#7BAFD4</accent>
    <background>transparent</background>
  </color_specifications>
  <design_requirements>
    <min_size>24px height</min_size>
    <style>Works in monochrome</style>
    <geometry>Golden ratio based</geometry>
  </design_requirements>
  <negative_prompts>
    complex illustration, many colors, photographic elements, gradients, 
    shadows, 3D effects, thin lines that won't reproduce, literal imagery
  </negative_prompts>
</image_generation_prompt>
```

---

#### TEAM PORTRAITS

```xml
<image_generation_prompt id="portrait-template">
  <title>Leadership Portrait Template</title>
  <description>Style guide for executive team headshots</description>
  <dimensions>
    <width>800</width>
    <height>1000</height>
    <aspect_ratio>4:5</aspect_ratio>
  </dimensions>
  <prompt>
    Professional portrait of a young adult (college-age) in three-quarter 
    view, natural expression showing approachability and intelligence, 
    soft natural window light from camera left, clean neutral background 
    with subtle gradient, professional but not corporate attire, shallow 
    depth of field with sharp focus on eyes, warm skin tones, modern 
    editorial portrait style
  </prompt>
  <camera_settings>
    <camera>Canon EOS R5</camera>
    <lens>Canon RF 85mm f/1.2L</lens>
    <aperture>f/2.0</aperture>
    <shutter_speed>1/200</shutter_speed>
    <iso>200</iso>
    <focal_length>85mm</focal_length>
  </camera_settings>
  <lighting>
    <key_light>Large window, camera left, diffused</key_light>
    <fill>White reflector, camera right</fill>
    <ratio>3:1</ratio>
  </lighting>
  <style_references>
    <reference>LinkedIn professional portraits</reference>
    <reference>Editorial magazine portraits</reference>
    <reference>Academic faculty headshots</reference>
  </style_references>
  <negative_prompts>
    harsh shadows, cluttered background, formal business attire, 
    stiff pose, artificial smile, flash on camera, dated style
  </negative_prompts>
</image_generation_prompt>
```

---

### 14.3 Stock Image Guidelines

For images that cannot be AI-generated (especially for authentic UNC campus imagery), source from:

**Recommended Sources:**
- UNC Chapel Hill Official Image Library (contact University Communications)
- Unsplash (filter by "university" + "research")
- Pexels (filter by "academic" + "students")

**Selection Criteria:**
- Diverse representation in all group shots
- Natural, unposed feeling
- Contemporary settings (within last 3 years)
- Color palette compatibility with brand
- High resolution (minimum 2000px on long edge)

---

## 15. Technical Implementation Notes

### 15.1 Recommended Technology Stack

**Frontend Framework:**
- Next.js 14+ (App Router) - for SSR/SSG, optimal performance
- Alternative: Astro (for static-first approach)

**Styling:**
- Tailwind CSS with custom configuration
- CSS Modules for component-specific styles

**Animation:**
- Framer Motion (React)
- GSAP for complex scroll animations

**CMS (for content management):**
- Sanity.io (recommended for flexibility)
- Alternative: Contentful, Strapi

**Forms:**
- Link to Google Forms (per user preference)
- Alternative: Netlify Forms, Formspree

**Hosting:**
- Vercel (optimal for Next.js)
- Alternative: Netlify

### 15.2 Performance Targets

| Metric | Target | Priority |
|--------|--------|----------|
| Lighthouse Performance | > 90 | Critical |
| First Contentful Paint | < 1.5s | Critical |
| Time to Interactive | < 3.0s | High |
| Cumulative Layout Shift | < 0.1 | High |
| Largest Contentful Paint | < 2.5s | Critical |

### 15.3 Accessibility Requirements

- WCAG 2.1 AA compliance minimum
- Semantic HTML structure
- ARIA labels where necessary
- Keyboard navigation support
- Screen reader testing
- Color contrast ratios (4.5:1 for text, 3:1 for large text)
- Focus visible states
- Alt text for all images
- Reduced motion support

### 15.4 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Last 2 versions |
| Firefox | Last 2 versions |
| Safari | Last 2 versions |
| Edge | Last 2 versions |
| Mobile Safari | iOS 14+ |
| Chrome Android | Last 2 versions |

---

## 16. Future Expansion Considerations

### 16.1 Beyond the Conference

Per the project brief, URC@UNC may expand beyond the annual conference to include:

**Potential Future Features:**
- **Research Funding Portal:** Grant applications, funding opportunities
- **Mentorship Matching:** Connect students with faculty mentors
- **Resource Library:** Templates, guides, best practices
- **Year-Round Community:** Forums, events, networking
- **Journal Publication:** Undergraduate research journal

### 16.2 Scalable Architecture

The website architecture should accommodate:

```
Current State (2026)
└── Conference-focused site

Near Future (2027-2028)
├── Conference section
├── Funding opportunities
└── Resources library

Long-term Vision (2029+)
├── Conference section
├── Funding portal
├── Mentorship platform
├── Resource library
├── Community features
└── Publications/Journal
```

### 16.3 URL Structure Planning

Reserve the following paths for future use:

```
/funding          - Research funding opportunities
/mentorship       - Mentor matching program
/library          - Resources and guides
/community        - Member forums/networking
/journal          - Publication platform
/archive          - Past conference archives
```

---

## 17. Appendix

### 17.1 UNC Brand Color Reference

| Color | Hex | RGB | Pantone | Usage |
|-------|-----|-----|---------|-------|
| Carolina Blue | #7BAFD4 | 123, 175, 212 | 542 C | Primary brand |
| Navy Blue | #13294B | 19, 41, 75 | 289 C | Deep accents |
| White | #FFFFFF | 255, 255, 255 | — | Backgrounds |

### 17.2 Timeline Reference (from Who_We_Are.md)

| Period | Milestone |
|--------|-----------|
| January–March 2026 | Committee formation, venue reservation, website design begins |
| February 15, 2026 | Social media launch |
| April 1, 2026 | Website launch, Call for abstracts opens |
| July 1, 2026 | Abstract submission deadline |
| July–August 2026 | Abstract review, materials ordering |
| September 2026 | Final program, volunteer training, marketing push |
| October 2–3, 2026 | **Conference** |
| October–November 2026 | Evaluation, planning for Year 2 |

### 17.3 Executive Roles Quick Reference

| Division | Roles |
|----------|-------|
| **Director** | Overall leadership, institutional liaison |
| **Internal Operations** | Finance, Logistics, Conference Experience |
| **External Operations** | Grant Writing, Public Relations, Web Development |
| **Recruitment** | Speaker Recruitment, Attendee Recruitment |

### 17.4 Conference Schedule Quick Reference

**Friday, October 2:**
- 5:00 PM – Registration
- 5:30 PM – Welcome
- 6:00 PM – Dinner
- 7:00 PM – Professional Development #1

**Saturday, October 3:**
- 9:30 AM – Breakfast
- 10:00 AM – Poster Session 1
- 11:00 AM – Poster Session 2
- 12:00 PM – Lunch
- 1:00 PM – Professional Development #2
- 2:30 PM – Poster Session 3
- 3:30 PM – Professional Development #3
- 4:30 PM – Awards & Closing

### 17.5 Contact & Resources

**Project Lead:** Ryan P.
**Web Development:** External Operations team
**Timeline:** Website launch April 2026

**Key External Resources:**
- UNC Identity Guidelines: identity.unc.edu
- Campus Y: campusy.unc.edu
- Office of Undergraduate Research: our.unc.edu

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | February 2026 | System Design | Initial comprehensive specification |

---

*This document serves as the authoritative design specification for the URC@UNC website. All development decisions should reference this document for consistency and alignment with the established vision.*

---

**End of Document**
