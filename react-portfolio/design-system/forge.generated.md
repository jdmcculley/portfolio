# Forge Design System — Token Reference

> Auto-generated from `design-system/forge.tokens.json`  
> Version: 2.0.0

## Color Tokens (Dark Theme — Default)

| Token | Value | Category |
|---|---|---|
| `--accent` | `#00d4ff` | colors |
| `--accent-light` | `#5ee6ff` | colors |
| `--accent-dim` | `#0a5e72` | colors |
| `--accent-glow` | `rgba(0, 212, 255, 0.12)` | colors |
| `--secondary` | `#4a7dff` | colors |
| `--secondary-light` | `#7da3ff` | colors |
| `--secondary-dim` | `rgba(74, 125, 255, 0.12)` | colors |
| `--secondary-glow` | `rgba(74, 125, 255, 0.30)` | colors |
| `--bg` | `#0a0e1a` | surfaces |
| `--bg-alt` | `#0d1224` | surfaces |
| `--surface` | `#121830` | surfaces |
| `--surface-elevated` | `#161e3a` | surfaces |
| `--text` | `#ffffff` | text |
| `--text-soft` | `#b1bad0` | text |
| `--text-muted` | `#4a5270` | text |
| `--border` | `rgba(0, 212, 255, 0.10)` | borders |
| `--border-strong` | `rgba(0, 212, 255, 0.25)` | borders |
| `--glass-bg` | `rgba(10, 14, 26, 0.70)` | borders |
| `--glass-border` | `rgba(0, 212, 255, 0.12)` | borders |
| `--grid-line` | `rgba(0, 212, 255, 0.05)` | borders |
| `--nav-bg` | `rgba(10, 14, 26, 0.88)` | nav |
| `--nav-height` | `96px` | nav |
| `--selection-bg` | `rgba(0, 212, 255, 0.25)` | selection |
| `--orb-c-color` | `rgba(0, 212, 255, 0.5)` | orb |
| `--orb-a-opacity` | `0.18` | orb |
| `--orb-b-opacity` | `0.10` | orb |
| `--orb-c-opacity` | `0.06` | orb |
| `--orb-a-top` | `-250px` | orb |
| `--orb-a-left` | `-250px` | orb |

## Typography

| Family | CSS Variable | Stack | Weights |
|---|---|---|---|
| heading | `--font-heading` | 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif | 400, 500, 600, 700 |
| sans | `--font-sans` | 'Inter', -apple-system, BlinkMacSystemFont, sans-serif | 300, 400, 500, 600, 700, 800, 900 |
| mono | `--font-mono` | 'JetBrains Mono', monospace | 400, 500, 700 |

### Type Scale

| Name | Size | Weight | Family | Notes |
|---|---|---|---|---|
| section-label | 0.68rem | 600 | sans | tracking: 0.22em, uppercase |
| section-heading | clamp(2.2rem, 4.5vw, 3.2rem) | 700 | heading | tracking: -0.02em, line-height: 1.15 |
| section-sub | 1rem | 300 | sans | line-height: 1.7 |
| body | 1rem | 400 | sans | line-height: 1.6 |
| code-lg | 0.9rem | 400 | mono | — |
| code-md | 0.72rem | 400 | mono | — |
| code-sm | 0.68rem | 400 | mono | tracking: 1px, uppercase |
| code-xs | 0.62rem | 400 | mono | tracking: 1.5px |
| code-xxs | 0.58rem | 400 | mono | — |

## Spacing

Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80 (px)

## Border Radius

| Token | Value |
|---|---|
| sm | 4px |
| md | 12px |
| lg | 16px |
| pill | 100px |

## Layout

| Token | Value |
|---|---|
| `--max-width` | 1200px |
| `--max-width-wide` | 1540px |
| `--page-max` | 2560px |
| `--nav-height` | 96px |
| `--container-pad` | 48px |

## Breakpoints

| Name | Width |
|---|---|
| xs | 600px |
| sm | 900px |
| md | 1200px |
| lg | 1600px |
| xl | 2560px |

## Motion

### Easing

- `--ease`: `cubic-bezier(0.16, 1, 0.3, 1)`
- `--ease-out`: `cubic-bezier(0.23, 1, 0.32, 1)`

### Keyframe Animations

| Name | Duration | Easing | Loop | Description |
|---|---|---|---|---|
| dotPulse | 2.5s | ease-in-out | infinite | Badge indicator pulse |
| gridPulse | 8s | ease-in-out | infinite | Background grid opacity |
| orbFloat1 | 20s | ease-in-out | infinite | Accent orb drift |
| orbFloat2 | 25s | ease-in-out | infinite | Secondary orb drift |
| fadeInUp | 0.8s | var(--ease-out) | once | Scroll reveal entrance |
| logoGradient | 8s | ease | infinite | Nav logo gradient shift |
| scrollDrop | 2s | ease-in-out | infinite | Scroll indicator drop |
| ringRotate | — | linear | infinite | Ring rotation |
| corePulse | — | — | infinite | Core element pulse |

## Components

### Badge

Import: `@/components/ui/Badge`

Variants: `page`, `ai`, `tag`, `tag-ai`, `tag-accent`

| Prop | Type | Required | Default |
|---|---|---|---|
| children | ReactNode | yes | — |
| variant | string | no | tag |
| className | string | no | — |

### DotBadge

Import: `@/components/ui/Badge`

Badge with animated pulsing dot indicator. Uses variant='page' internally.

| Prop | Type | Required | Default |
|---|---|---|---|
| children | ReactNode | yes | — |
| className | string | no | — |

### GlassCard

Import: `@/components/ui/GlassCard`

Frosted glass surface with backdrop-blur(24px) and glass-border.

| Prop | Type | Required | Default |
|---|---|---|---|
| children | ReactNode | yes | — |
| className | string | no | — |

### MetricCard

Import: `@/components/ui/MetricCard`

Animated stat display with counter. Elevated surface + accent value.

| Prop | Type | Required | Default |
|---|---|---|---|
| value | string | yes | — |
| label | string | yes | — |
| animate | boolean | no | true |
| className | string | no | — |

### ScrollReveal

Import: `@/components/ui/ScrollReveal`

Framer Motion wrapper — fade-in-up on scroll into viewport.

| Prop | Type | Required | Default |
|---|---|---|---|
| children | ReactNode | yes | — |
| delay | number | no | 0 |
| className | string | no | — |

### SectionHeader

Import: `@/components/ui/SectionHeader`

Standard section header: label + heading + optional sub text.

| Prop | Type | Required | Default |
|---|---|---|---|
| label | string | yes | — |
| heading | string | yes | — |
| sub | string | no | — |
| centered | boolean | no | — |
| className | string | no | — |

### Container

Import: `@/components/layout/Container`

Centered content wrapper using --max-width and --container-pad.

| Prop | Type | Required | Default |
|---|---|---|---|
| children | ReactNode | yes | — |
| className | string | no | — |

## Patterns

### glass-effect
```
bg-glass-bg backdrop-blur-[24px] border border-glass-border rounded-xl
```

### accent-line
```
height: 2px; width: 48px; background: var(--accent); border-radius: 2px;
```

### accent-line-center
```
height: 2px; width: 48px; background: var(--accent); border-radius: 2px; margin: 0 auto;
```

### card-hover
```
transition-all duration-300 hover:border-border-strong hover:-translate-y-[3px]
```

### stagger
```
ScrollReveal with delay increments of 0.1s (0, 0.1, 0.2, 0.3, 0.4)
```

