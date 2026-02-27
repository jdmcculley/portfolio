# Forge Design System v2.0

> Canonical source: `design-system/forge.tokens.json`
> Build: `node design-system/build.mjs`
> This file is the AI-agent reference. Read this first when generating UI for JD McCulley's portfolio.

---

## Architecture

- **Token source of truth**: `design-system/forge.tokens.json`
- **CSS custom properties**: Defined in `src/app/globals.css` (three themes: dark, light, tech-dark)
- **Tailwind v4**: `@theme` block maps CSS vars → Tailwind classes (e.g., `bg-accent`, `text-text-soft`)
- **Components**: `src/components/ui/` — variant-driven, use `clsx` for composition
- **Styling pattern**: CSS Modules for page-scoped styles + Tailwind utilities for components
- **Theme switching**: `next-themes` with `data-theme` attribute on `<html>`

---

## Token Quick Reference (Dark Theme — Default)

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
| `--font-heading` | Space Grotesk (400–700) | Headings, nav, section titles |
| `--font-sans` | Inter (300–900) | Body text, descriptions, UI copy |
| `--font-mono` | JetBrains Mono (400–700) | Code, labels, tags, metrics |

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

**Layout tokens**:
| Token | Value | Notes |
|---|---|---|
| `--max-width` | 1200px | Default container |
| `--max-width-wide` | 1540px | Wide variant (ultrawide) |
| `--page-max` | 2560px | Absolute page ceiling |
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

**Easing curves**:
- `--ease`: `cubic-bezier(0.16, 1, 0.3, 1)` — default entrance
- `--ease-out`: `cubic-bezier(0.23, 1, 0.32, 1)` — exit/reveal

**Keyframe animations**: dotPulse, gridPulse, orbFloat1/2, fadeInUp, logoGradient, scrollDrop, ringRotate, corePulse

---

## Components

### Badge
```tsx
import { Badge, DotBadge } from '@/components/ui/Badge';

<Badge variant="tag">Label</Badge>         // tag (default), ai, page, tag-ai, tag-accent
<DotBadge>Active Status</DotBadge>          // Badge with animated pulsing dot
```

### GlassCard
```tsx
import { GlassCard } from '@/components/ui/GlassCard';

<GlassCard className="p-6">
  Frosted glass surface. backdrop-blur(24px) + glass-border.
</GlassCard>
```

### MetricCard
```tsx
import { MetricCard } from '@/components/ui/MetricCard';

<MetricCard value="94%" label="CSAT Score" />   // Animated counter, elevated surface
```

### ScrollReveal
```tsx
import { ScrollReveal } from '@/components/ui/ScrollReveal';

<ScrollReveal delay={0.2}>
  Content fades in on scroll. Uses Framer Motion.
</ScrollReveal>
```

### SectionHeader
```tsx
import { SectionHeader } from '@/components/ui/SectionHeader';

<SectionHeader
  label="THE PROOF"
  heading="Where design meets measurable impact."
  sub="Numbers that tell the story of intentional craft."
  centered
/>
```

### Container
```tsx
import { Container } from '@/components/layout/Container';

<Container>Centered content using --max-width and --container-pad.</Container>
```

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

### Stagger Pattern
Wrap items in `<ScrollReveal>` with delay increments of 0.1s: `delay={0}`, `delay={0.1}`, `delay={0.2}`, etc.

### Accent Line
```css
height: 2px; width: 48px; background: var(--accent); border-radius: 2px;
```

---

## Rules for AI Agents

1. **Always use CSS variables** (`var(--accent)`) or Tailwind mappings (`bg-accent`), never raw hex values.
2. **Text hierarchy matters**: `--text` for headings, `--text-soft` for body, `--text-muted` for labels.
3. **Surface hierarchy**: `--bg` → `--bg-alt` → `--surface` → `--surface-elevated` (increasing elevation).
4. **Font families**: Headings = Space Grotesk, Body = Inter, Code/Labels = JetBrains Mono.
5. **All components accept `className`** for composition. Use `clsx` when combining.
6. **Motion**: Use `ScrollReveal` for entrance animations. Easing is `--ease` or `--ease-out`.
7. **Cards**: Always use `rounded-xl` (16px) for cards, `rounded-full` (pill) for badges.
8. **Monospace elements** (tags, labels, metrics) use small sizes (0.55rem–0.72rem) with tracking and uppercase.
9. **Three themes exist**: dark (default, cyan accent), light (gold accent), tech-dark (gold accent, ultra-dark base). Components must work across all three — always reference tokens, not raw colors.
10. **Glass pattern**: Only use over backgrounds with depth (gradients, images, orbs) — it's transparent.
