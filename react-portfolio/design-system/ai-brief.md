# Forge Design System — AI Brief

> Paste this entire document into any AI tool's system prompt or context window.
> It contains everything needed to generate on-brand React pages for JD McCulley's portfolio.

---

## Stack & Conventions

- **Framework**: Next.js 16 (App Router), React 19
- **Styling**: Tailwind CSS v4 + CSS Modules (page-scoped layouts)
- **Tokens**: CSS custom properties via `var(--token)` or Tailwind mappings (`bg-accent`)
- **Animation**: Framer Motion (scroll reveal), CSS keyframes (ambient effects)
- **Utilities**: `clsx` for conditional classes, `next-themes` for theme switching
- **Never use raw hex values** — always reference tokens

---

## Design Tokens (Dark Theme — Default)

### Brand Colors
| Token | Value | Use for |
|---|---|---|
| `--accent` | `#00d4ff` | Primary brand accent, links, highlights |
| `--accent-light` | `#5ee6ff` | Hover states |
| `--accent-dim` | `#0a5e72` | Scrollbar, progress bar, subtle fill |
| `--accent-glow` | `rgba(0,212,255,0.12)` | Tag backgrounds, subtle glow |
| `--secondary` | `#4a7dff` | AI accents, secondary brand |
| `--secondary-light` | `#7da3ff` | Code text, secondary hover |
| `--secondary-dim` | `rgba(74,125,255,0.12)` | AI badge background |
| `--secondary-glow` | `rgba(74,125,255,0.30)` | AI dot shadow |

### Surfaces
| Token | Value | Use for |
|---|---|---|
| `--bg` | `#0a0e1a` | Page background |
| `--bg-alt` | `#0d1224` | Alternating sections |
| `--surface` | `#121830` | Card backgrounds |
| `--surface-elevated` | `#161e3a` | Elevated elements, hover cards |

### Text
| Token | Value | Use for |
|---|---|---|
| `--text` | `#ffffff` | Primary headings, key content |
| `--text-soft` | `#b1bad0` | Body copy, descriptions |
| `--text-muted` | `#4a5270` | Labels, metadata, captions |

### Borders & Glass
| Token | Value | Use for |
|---|---|---|
| `--border` | `rgba(0,212,255,0.10)` | Default card/section borders |
| `--border-strong` | `rgba(0,212,255,0.25)` | Hover/focus states |
| `--glass-bg` | `rgba(10,14,26,0.70)` | Glass card background |
| `--glass-border` | `rgba(0,212,255,0.12)` | Glass card edge |
| `--grid-line` | `rgba(0,212,255,0.05)` | Background grid pattern |

---

## Typography

### Font Families
| Variable | Font | Use for |
|---|---|---|
| `--font-heading` | Space Grotesk (400-700) | Headings, nav, section titles |
| `--font-sans` | Inter (300-900) | Body text, descriptions, UI copy |
| `--font-mono` | JetBrains Mono (400-700) | Code, labels, tags, metrics |

### Type Scale
| Name | Size | Weight | Family | Notes |
|---|---|---|---|---|
| section-label | 0.68rem | 600 | sans | tracking: 0.22em, uppercase |
| section-heading | clamp(2.2rem, 4.5vw, 3.2rem) | 700 | heading | tracking: -0.02em |
| section-sub | 1rem | 300 | sans | line-height: 1.7 |
| body | 1rem | 400 | sans | line-height: 1.6 |
| code-lg | 0.9rem | 400 | mono | |
| code-md | 0.72rem | 400 | mono | |
| code-sm | 0.68rem | 400 | mono | tracking: 1px, uppercase |
| code-xs | 0.62rem | 400 | mono | tracking: 1.5px |
| code-xxs | 0.58rem | 400 | mono | |

---

## Spacing & Layout

**Spacing scale**: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80 (px)

**Border radius**: sm=4px, md=12px, lg=16px, pill=100px

| Token | Value | Notes |
|---|---|---|
| `--max-width` | 1200px | Default container |
| `--max-width-wide` | 1540px | Wide variant |
| `--page-max` | 2560px | Absolute ceiling |
| `--nav-height` | 96px (dark) / 80px (light) | Fixed nav |
| `--container-pad` | 48px | Scales per breakpoint |

**Breakpoints**: xs=600px, sm=900px, md=1200px, lg=1600px, xl=2560px

**Responsive overrides**:
- >=2560px: container-pad 80px, max-width 1540px
- >=1600px: container-pad 64px, max-width 1400px
- <=900px: container-pad 24px
- <=600px: container-pad 16px

---

## Motion

**Easing**: `--ease`: `cubic-bezier(0.16, 1, 0.3, 1)` — `--ease-out`: `cubic-bezier(0.23, 1, 0.32, 1)`

---

## UI Component Catalog

### Badge
```tsx
import { Badge, DotBadge } from '@/components/ui/Badge';

<Badge variant="tag">Label</Badge>         // tag (default), ai, page, tag-ai, tag-accent
<DotBadge>Active Status</DotBadge>          // Badge with animated pulsing dot
```

### GlassCard
```tsx
import { GlassCard } from '@/components/ui/GlassCard';

<GlassCard className="p-6">Frosted glass surface.</GlassCard>
```

### MetricCard
```tsx
import { MetricCard } from '@/components/ui/MetricCard';

<MetricCard value="94%" label="CSAT Score" />   // Animated counter, elevated surface
```

### ScrollReveal
```tsx
import { ScrollReveal } from '@/components/ui/ScrollReveal';

<ScrollReveal delay={0.2}>Content fades in on scroll.</ScrollReveal>
```

### SectionHeader
```tsx
import { SectionHeader } from '@/components/ui/SectionHeader';

<SectionHeader label="THE PROOF" heading="Section Title" sub="Optional subtitle" centered />
```

### Container
```tsx
import { Container } from '@/components/layout/Container';

<Container>Centered content using --max-width and --container-pad.</Container>
```

---

## Case Study Component Catalog

All imports from `@/components/case-study/`. All wrap content in `<ScrollReveal>` internally.

### ContentSection
```tsx
import { ContentSection } from '@/components/case-study/ContentSection';

<ContentSection number="01 — THE PROBLEM" title="Problem Title" reduced={false}>
  <div className={s.sectionBody}>
    <p>Content paragraphs here...</p>
  </div>
</ContentSection>
```
Props: `number` (string), `title` (string), `children` (ReactNode), `reduced?` (boolean — tighter spacing)

### ResultsGrid
```tsx
import { ResultsGrid } from '@/components/case-study/ResultsGrid';

<ResultsGrid results={[
  { metric: '113', label: 'Screens', context: 'Across 8 journeys', featured: true },
  { metric: '33', label: 'User Jobs', context: 'JTBD framework' },
]} />
```
Props: `results[]` — each with `metric` (string), `label` (string), `context?` (string), `featured?` (boolean)

### DecisionCallout
```tsx
import { DecisionCallout } from '@/components/case-study/DecisionCallout';

<DecisionCallout decisions={[
  { icon: <svg>...</svg>, title: 'Decision Title', text: 'Explanation...' },
]} />
```
Props: `decisions[]` — each with `icon` (ReactNode), `title` (string), `text` (string)

### PullQuote
```tsx
import { PullQuote } from '@/components/case-study/PullQuote';

<PullQuote text="The insight quote..." attr="Attribution — Context" />
```
Props: `text` (string), `attr?` (string)

### NextStudy
```tsx
import { NextStudy } from '@/components/case-study/NextStudy';

<NextStudy
  href="/case-study/next-slug"
  title="Next Case Study Title"
  desc="Brief description of the next study..."
  metrics={[{ value: '130%+', label: 'Engagement' }]}
  prevHref="/case-study/prev-slug"
  prevTitle="Previous Title"
/>
```
Props: `href` (string), `title` (string), `desc` (string), `metrics[]` ({ value, label }), `prevHref?` (string), `prevTitle?` (string)

### ProcessTimeline
```tsx
import { ProcessTimeline } from '@/components/case-study/ProcessTimeline';

<ProcessTimeline steps={[
  { num: '01', title: 'Research', desc: 'User interviews and data analysis' },
  { num: '02', title: 'Design', desc: 'Systems mapping and prototyping' },
]} />
```
Props: `steps[]` — each with `num` (string), `title` (string), `desc` (string)

### ContextCards
```tsx
import { ContextCards } from '@/components/case-study/ContextCards';

<ContextCards cards={[
  { type: 'before', title: 'Pain Point', text: 'Description of the problem...' },
  { type: 'after', title: 'Solution', text: 'Description of the fix...' },
]} />
```
Props: `cards[]` — each with `type` ('before' | 'after'), `title` (string), `text` (string)

### StrategicContext
```tsx
import { StrategicContext } from '@/components/case-study/StrategicContext';

<StrategicContext
  label="Strategic Context"
  stats={[
    { value: '33 JTBD Jobs', desc: 'From October data analysis' },
    { value: '8 Journeys', desc: 'Complete auth system' },
  ]}
  ecosystemLabel="Technologies"
  ecosystem={[
    { label: 'Next.js', active: true },
    { label: 'Figma' },
  ]}
/>
```
Props: `label` (string), `stats[]` ({ value, desc }), `ecosystemLabel?` (string), `ecosystem?[]` ({ label, active? })

### ExecQuote
```tsx
import { ExecQuote } from '@/components/case-study/ExecQuote';

<ExecQuote
  name="Jane Doe"
  role="VP Product"
  initials="JD"
  text="This redesign was critical to our launch..."
  source="Quarterly Review"
  avatar="/img/jane.jpg"
/>
```
Props: `name` (string), `role` (string), `initials` (string), `text` (string), `source?` (string), `avatar?` (string)

---

## Case Study Page Template

Every case study page follows this canonical structure. Import the shared CSS module:

```tsx
import s from '../case-study.module.css';
```

### Page Skeleton
```tsx
export default function CaseStudyPage() {
  return (
    <main className={s.main}>
      {/* ══════════ HERO ══════════ */}
      <section className={s.hero}>
        <div className={s.caseStudyLabel}>Case Study</div>
        <div className={s.heroTitleContainer}>
          <CompanyLogo />
          <h1 className={s.heroTitle}>Case Study Title</h1>
        </div>
        <p className={s.heroSubtitle}>One-line impact summary</p>
        <p className={s.heroDescription}>Extended context paragraph</p>

        <div className={s.metadata}>
          <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>Value</div></div>
          <div><div className={s.metadataLabel}>Organization</div><div className={s.metadataValue}>Value</div></div>
          <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>Value</div></div>
          <div><div className={s.metadataLabel}>Team</div><div className={s.metadataValue}>Value</div></div>
          <div><div className={s.metadataLabel}>Platform</div><div className={s.metadataValue}>Value</div></div>
        </div>

        <StrategicContext ... />
      </section>

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <ContentSection number="01 — THE PROBLEM" title="Section Title">
        <div className={s.sectionBody}>
          <p>Problem narrative...</p>
        </div>
        {/* Optional: visual blocks (fullVisual, deviceShowcase, screenFlow) */}
      </ContentSection>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="Section Title">
        <div className={s.sectionBody}>
          <p>Approach narrative...</p>
        </div>
        <ProcessTimeline steps={[...]} />
        <DecisionCallout decisions={[...]} />
      </ContentSection>

      {/* ══════════ 03 — THE PROCESS ══════════ */}
      <ContentSection number="03 — THE PROCESS" title="Section Title">
        <div className={s.sectionBody}>
          <p>Process details...</p>
        </div>
        {/* Visuals: screenFlow, deviceShowcase, fullVisual */}
        <ContextCards cards={[...]} />
      </ContentSection>

      {/* ══════════ 04 — THE RESULTS ══════════ */}
      <ContentSection number="04 — THE RESULTS" title="Section Title">
        <div className={s.sectionBody}>
          <p>Results narrative...</p>
        </div>
        <ResultsGrid results={[...]} />
      </ContentSection>

      {/* ══════════ 05 — THE LEARNING ══════════ */}
      <ContentSection number="05 — THE LEARNING" title="Section Title">
        <div className={s.sectionBody}>
          <p>Reflection and takeaways...</p>
        </div>
        <PullQuote text="Key insight..." attr="Core Lesson" />
      </ContentSection>

      {/* ══════════ NEXT STUDY ══════════ */}
      <NextStudy
        prevHref="/case-study/prev-slug"
        prevTitle="Previous Title"
        href="/case-study/next-slug"
        title="Next Title"
        desc="Brief description..."
        metrics={[{ value: 'X%', label: 'Impact' }]}
      />
    </main>
  );
}
```

---

## CSS Module Class Reference

Import as: `import s from '../case-study.module.css';`

### Layout
| Class | Purpose |
|---|---|
| `s.main` | Page container (max-width: 1200px, padding: 0 48px) |
| `s.hero` | Hero section (margin-top: 75px) |
| `s.contentSection` | Standard section wrapper (margin-top: 120px) |
| `s.contentSectionReduced` | Tighter section spacing (margin-top: 60px) |

### Hero Typography
| Class | Purpose |
|---|---|
| `s.caseStudyLabel` | "Case Study" label (mono, 12px, uppercase, secondary color) |
| `s.heroTitleContainer` | Flex row for logo + title (gap: 20px) |
| `s.heroTitle` | Main h1 (heading font, clamp 2.4-3.6rem, 700 weight) |
| `s.heroSubtitle` | Subtitle (1.125rem, 300 weight, 80% opacity, max-width 700px) |
| `s.heroDescription` | Extended context (0.92rem, text-soft color) |

### Metadata
| Class | Purpose |
|---|---|
| `s.metadata` | 5-column grid (gap: 32px, border-bottom) |
| `s.metadataLabel` | Field label (mono, 11px, uppercase) |
| `s.metadataValue` | Field value (14px, 500 weight) |

### Section Content
| Class | Purpose |
|---|---|
| `s.sectionHeader` | Flex row for number + divider |
| `s.sectionNumber` | Numbered label (mono, 13px, accent color) |
| `s.sectionDivider` | 40px gradient accent line |
| `s.sectionTitle` | Section heading (heading font, 38px) |
| `s.sectionBody` | Rich text container (16px, text-soft, max-width: 770px, line-height: 1.8) |

### Visual Blocks
| Class | Purpose |
|---|---|
| `s.fullVisual` | Full-width image container (rounded-xl, overflow hidden) |
| `s.screenFlow` | Horizontal scrolling strip for multi-step flows |
| `s.screenFlowInner` | Flex row inside screenFlow |
| `s.screenFlowItem` | Individual screen in flow (border, rounded) |
| `s.screenFlowLabel` | Label below each screen (mono, uppercase) |
| `s.screenFlowArrow` | Arrow between screens |

### Device Frames
| Class | Purpose |
|---|---|
| `s.deviceShowcase` | Container for device pair comparison |
| `s.deviceCol` | Column for a single device |
| `s.deviceFrame` | Phone frame with notch + bezel (256px wide) |
| `s.deviceNotch` | Phone notch element |
| `s.deviceScreen` | Screen area inside frame |
| `s.deviceScreenshot` | Screenshot image (100% width) |
| `s.deviceColLabel` | Label below device frame |
| `s.deviceTransition` | Arrow/divider between before/after devices |
| `s.desktopFrame` | Desktop browser frame with toolbar dots |
| `s.desktopScreen` | Desktop screen area |

### Split Layout
| Class | Purpose |
|---|---|
| `s.splitLayout` | Two-column grid (text + sticky visual) |
| `s.splitText` | Left text column |
| `s.splitVisual` | Right sticky visual column |

### Impact & Results
| Class | Purpose |
|---|---|
| `s.caseImpact` | 4-column metrics bar |
| `s.impactItem` | Single metric in impact bar |
| `s.impactValue` | Large metric value (heading font, accent color) |
| `s.impactLabel` | Metric description (mono, small) |

---

## Patterns & Recipes

### Glass Effect (Tailwind)
```
bg-glass-bg backdrop-blur-[24px] border border-glass-border rounded-xl
```

### Card with Hover
```
bg-surface-elevated border border-border-default rounded-xl
transition-all duration-300 hover:border-border-strong hover:-translate-y-[3px]
```

### Section Label
```
font-sans text-[0.68rem] tracking-[0.22em] uppercase text-accent font-semibold
```

### Accent Line
```css
height: 2px; width: 48px; background: var(--accent); border-radius: 2px;
```

### Stagger Animation
Wrap items in `<ScrollReveal>` with delay increments of 0.1s: `delay={0}`, `delay={0.1}`, `delay={0.2}`, etc.

---

## Rules for AI Agents

1. **Always use CSS variables** (`var(--accent)`) or Tailwind mappings (`bg-accent`), never raw hex values.
2. **Text hierarchy matters**: `--text` for headings, `--text-soft` for body, `--text-muted` for labels.
3. **Surface hierarchy**: `--bg` → `--bg-alt` → `--surface` → `--surface-elevated` (increasing elevation).
4. **Font families**: Headings = Space Grotesk, Body = Inter, Code/Labels = JetBrains Mono.
5. **All components accept `className`** for composition. Use `clsx` when combining.
6. **Motion**: Use `ScrollReveal` for entrance animations. Easing is `--ease` or `--ease-out`.
7. **Cards**: Always use `rounded-xl` (16px) for cards, `rounded-full` (pill) for badges.
8. **Monospace elements** (tags, labels, metrics) use small sizes (0.55rem-0.72rem) with tracking and uppercase.
9. **Three themes exist**: dark (default, cyan accent), light (gold accent), tech-dark (gold accent, ultra-dark base). Components must work across all three — always reference tokens, not raw colors.
10. **Glass pattern**: Only use over backgrounds with depth (gradients, images, orbs) — it's transparent.
