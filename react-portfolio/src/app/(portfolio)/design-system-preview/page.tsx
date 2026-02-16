import { Fragment } from 'react';
import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Badge, DotBadge } from '@/components/ui/Badge';
import { GlassCard } from '@/components/ui/GlassCard';
import { MetricCard } from '@/components/ui/MetricCard';
import s from './preview.module.css';

export const metadata: Metadata = {
  title: 'Design System Preview | JD McCulley',
  description: 'Every token, component, and pattern in the Forge Design System.',
};

/* ═══════════════════════════════════════
   DATA: All token arrays
   ═══════════════════════════════════════ */

const tocItems = [
  { num: '01', label: 'Palette', id: 'colors' },
  { num: '02', label: 'Borders & Glass', id: 'borders' },
  { num: '03', label: 'Typography', id: 'typography' },
  { num: '04', label: 'Spacing & Layout', id: 'spacing' },
  { num: '05', label: 'Components', id: 'components' },
  { num: '06', label: 'Motion', id: 'motion' },
  { num: '07', label: 'Quick Reference', id: 'tokens' },
];

const brandColors = [
  { name: 'Accent', varName: '--accent', hex: '#00d4ff', cssVar: 'var(--accent)' },
  { name: 'Accent Light', varName: '--accent-light', hex: '#5ee6ff', cssVar: 'var(--accent-light)' },
  { name: 'Accent Dim', varName: '--accent-dim', hex: '#0a5e72', cssVar: 'var(--accent-dim)' },
  { name: 'Accent Glow', varName: '--accent-glow', hex: 'rgba(0,212,255,0.12)', cssVar: 'var(--accent-glow)' },
  { name: 'Secondary', varName: '--secondary', hex: '#4a7dff', cssVar: 'var(--secondary)' },
  { name: 'Secondary Light', varName: '--secondary-light', hex: '#7da3ff', cssVar: 'var(--secondary-light)' },
  { name: 'Secondary Dim', varName: '--secondary-dim', hex: 'rgba(74,125,255,0.12)', cssVar: 'var(--secondary-dim)' },
  { name: 'Secondary Glow', varName: '--secondary-glow', hex: 'rgba(74,125,255,0.30)', cssVar: 'var(--secondary-glow)' },
];

const surfaces = [
  { name: 'Background', varName: '--bg', hex: '#0a0e1a', cssVar: 'var(--bg)' },
  { name: 'Background Alt', varName: '--bg-alt', hex: '#0d1224', cssVar: 'var(--bg-alt)' },
  { name: 'Surface', varName: '--surface', hex: '#121830', cssVar: 'var(--surface)' },
  { name: 'Surface Elevated', varName: '--surface-elevated', hex: '#161e3a', cssVar: 'var(--surface-elevated)' },
  { name: 'White', varName: '--white', hex: '#e4e8f0', cssVar: 'var(--text)' },
];

const textColors = [
  { name: 'Primary Text', varName: '--text', hex: '#e4e8f0', sample: 'Primary body text — highest contrast for headings and key content.' },
  { name: 'Soft Text', varName: '--text-soft', hex: '#b1bad0', sample: 'Secondary descriptive text — moderate contrast for supporting copy.' },
  { name: 'Muted Text', varName: '--text-muted', hex: '#4a5270', sample: 'Tertiary labels and metadata — lowest contrast for subtle context.' },
];

const borderTokens = [
  { name: 'Default Border', varName: '--border', value: 'rgba(0,212,255,0.10)', description: 'Card and section borders', cssVar: 'var(--border)' },
  { name: 'Strong Border', varName: '--border-strong', value: 'rgba(0,212,255,0.25)', description: 'Hover and focus states', cssVar: 'var(--border-strong)' },
  { name: 'Glass Border', varName: '--glass-border', value: 'rgba(0,212,255,0.12)', description: 'Glass card edges', cssVar: 'var(--glass-border)' },
  { name: 'Grid Line', varName: '--grid-line', value: 'rgba(0,212,255,0.05)', description: 'Background grid pattern', cssVar: 'var(--grid-line)' },
];

const fontFamilies = [
  {
    name: 'Space Grotesk',
    varName: '--font-heading',
    weights: '400–700',
    usage: 'Headings, nav, section titles, bold labels',
    sampleClass: 'typeSampleHeading' as const,
    sampleText: 'Crafted at the intersection of design and intelligence.',
  },
  {
    name: 'Inter',
    varName: '--font-sans',
    weights: '300–900',
    usage: 'Body text, descriptions, UI copy',
    sampleClass: 'typeSampleSans' as const,
    sampleText: 'Body text set in Inter. Clean, modern, and highly legible for long-form reading on screen.',
  },
  {
    name: 'JetBrains Mono',
    varName: '--font-mono',
    weights: '400–700',
    usage: 'Code, labels, tags, metrics, navigation numbers',
    sampleClass: 'typeSampleMono' as const,
    sampleText: 'const design = forge({ intent, craft, ai });',
  },
];

const typeScale = [
  { name: 'Section Label', size: '0.68rem', weight: '600', family: '--font-sans', sampleText: 'THE PROOF', extra: 'tracking: 0.22em · uppercase' },
  { name: 'Section Heading', size: 'clamp(2.2rem, 4.5vw, 3.2rem)', weight: '700', family: '--font-heading', sampleText: 'Where design meets measurable impact.', extra: 'tracking: -0.02em' },
  { name: 'Section Sub', size: '1rem', weight: '300', family: '--font-sans', sampleText: 'Numbers that tell the story of intentional craft.', extra: 'line-height: 1.7' },
  { name: 'Body', size: '1rem (16px)', weight: '400', family: '--font-sans', sampleText: 'Default body text for paragraphs and descriptions.', extra: 'line-height: 1.6' },
  { name: 'Code Large', size: '0.9rem', weight: '400', family: '--font-mono', sampleText: 'const forge = new DesignSystem();', extra: '' },
  { name: 'Code Medium', size: '0.72rem', weight: '400', family: '--font-mono', sampleText: 'font-size: var(--code-md)', extra: '' },
  { name: 'Code Small', size: '0.68rem', weight: '400', family: '--font-mono', sampleText: 'LABELS · TAGS · NAVIGATION', extra: 'tracking: 1px · uppercase' },
  { name: 'Code XS', size: '0.62rem', weight: '400', family: '--font-mono', sampleText: 'METRIC-LABEL', extra: 'tracking: 1.5px' },
  { name: 'Code XXS', size: '0.58rem', weight: '400', family: '--font-mono', sampleText: '#PROGRESS-BAR', extra: '' },
];

const spacingScale = [
  { label: '4', value: 4 },
  { label: '8', value: 8 },
  { label: '12', value: 12 },
  { label: '16', value: 16 },
  { label: '20', value: 20 },
  { label: '24', value: 24 },
  { label: '32', value: 32 },
  { label: '40', value: 40 },
  { label: '48', value: 48 },
  { label: '56', value: 56 },
  { label: '64', value: 64 },
  { label: '72', value: 72 },
  { label: '80', value: 80 },
];

const radiusScale = [
  { label: '4px', value: 4 },
  { label: '12px', value: 12 },
  { label: '16px', value: 16 },
  { label: '100px', value: 100 },
];

const layoutTokens = [
  { token: '--max-width', value: '1200px', usage: 'Default content container' },
  { token: '--max-width-wide', value: '1540px', usage: 'Wide container variant (ultrawide)' },
  { token: '--page-max', value: '2560px', usage: 'Absolute page width ceiling' },
  { token: '--nav-height', value: '96px', usage: 'Fixed navigation bar height' },
  { token: '--container-pad', value: '48px', usage: 'Horizontal padding (scales per breakpoint)' },
];

const breakpoints = [
  { name: 'Mobile', range: '≤ 600px', color: '#e74c3c', changes: ['--container-pad: 16px', 'Font sizes reduced', 'Single-column layouts'] },
  { name: 'Tablet', range: '≤ 900px', color: '#e67e22', changes: ['--container-pad: 24px', 'Nav links hidden', 'Footer stacks'] },
  { name: 'Desktop', range: '901–1599px', color: '#00d4ff', changes: ['Default styles apply', '--container-pad: 48px', '--max-width: 1200px'] },
  { name: 'Wide', range: '≥ 1600px', color: '#27ae60', changes: ['--container-pad: 64px', '--max-width: 1400px'] },
  { name: 'Ultrawide', range: '≥ 2560px', color: '#3498db', changes: ['body max: 2560px', '--container-pad: 80px', '--max-width: 1540px'] },
];

const demoMetrics = [
  { value: '3.2s', label: 'Load Time Saved' },
  { value: '94%', label: 'CSAT Score' },
  { value: '12k+', label: 'Components Built' },
  { value: '40%', label: 'Faster Delivery' },
];

const staggerDelays = [0, 0.1, 0.2, 0.3, 0.4];

const easingCurves = [
  { name: '--ease', value: 'cubic-bezier(0.16, 1, 0.3, 1)', description: 'Default easing', fillClass: 'motionBarFillEase' as const },
  { name: '--ease-out', value: 'cubic-bezier(0.23, 1, 0.32, 1)', description: 'Exit / reveal easing', fillClass: 'motionBarFillEaseOut' as const },
  { name: 'linear', value: 'linear', description: 'Reference baseline', fillClass: 'motionBarFillLinear' as const },
];

const keyframeAnimations = [
  { name: 'dotPulse', duration: '2.5s', easing: 'ease-in-out', loop: 'infinite', description: 'Badge indicator pulse' },
  { name: 'gridPulse', duration: '8s', easing: 'ease-in-out', loop: 'infinite', description: 'Background grid opacity' },
  { name: 'orbFloat1', duration: '20s', easing: 'ease-in-out', loop: 'infinite', description: 'Accent orb drift' },
  { name: 'orbFloat2', duration: '25s', easing: 'ease-in-out', loop: 'infinite', description: 'Secondary orb drift' },
  { name: 'fadeInUp', duration: '0.8s', easing: '--ease-out', loop: 'once', description: 'Scroll reveal entrance' },
  { name: 'logoGradient', duration: '8s', easing: 'ease', loop: 'infinite', description: 'Nav logo gradient shift' },
  { name: 'scrollDrop', duration: '2s', easing: 'ease-in-out', loop: 'infinite', description: 'Scroll indicator drop' },
];

const tokenGroups = [
  {
    group: 'BRAND COLORS',
    tokens: [
      { token: '--accent', value: '#00d4ff', usage: 'Primary brand accent', swatch: 'var(--accent)' },
      { token: '--accent-light', value: '#5ee6ff', usage: 'Hover states, highlights', swatch: 'var(--accent-light)' },
      { token: '--accent-dim', value: '#0a5e72', usage: 'Scrollbar, progress bar', swatch: 'var(--accent-dim)' },
      { token: '--accent-glow', value: 'rgba(0,212,255,0.12)', usage: 'Tag backgrounds, subtle glow', swatch: 'var(--accent-glow)' },
      { token: '--secondary', value: '#4a7dff', usage: 'AI accents, secondary brand', swatch: 'var(--secondary)' },
      { token: '--secondary-light', value: '#7da3ff', usage: 'Code text, secondary hover', swatch: 'var(--secondary-light)' },
      { token: '--secondary-dim', value: 'rgba(74,125,255,0.12)', usage: 'AI badge background', swatch: 'var(--secondary-dim)' },
      { token: '--secondary-glow', value: 'rgba(74,125,255,0.30)', usage: 'AI dot shadow', swatch: 'var(--secondary-glow)' },
    ],
  },
  {
    group: 'SURFACES',
    tokens: [
      { token: '--bg', value: '#0a0e1a', usage: 'Page background', swatch: 'var(--bg)' },
      { token: '--bg-alt', value: '#0d1224', usage: 'Alternating section', swatch: 'var(--bg-alt)' },
      { token: '--surface', value: '#121830', usage: 'Card backgrounds', swatch: 'var(--surface)' },
      { token: '--surface-elevated', value: '#161e3a', usage: 'Elevated elements', swatch: 'var(--surface-elevated)' },
      { token: '--white', value: '#e4e8f0', usage: 'Light text contexts', swatch: 'var(--text)' },
    ],
  },
  {
    group: 'TEXT',
    tokens: [
      { token: '--text', value: '#e4e8f0', usage: 'Primary body text', swatch: 'var(--text)' },
      { token: '--text-soft', value: '#b1bad0', usage: 'Secondary text', swatch: 'var(--text-soft)' },
      { token: '--text-muted', value: '#4a5270', usage: 'Tertiary labels', swatch: 'var(--text-muted)' },
    ],
  },
  {
    group: 'BORDERS & GLASS',
    tokens: [
      { token: '--border', value: 'rgba(0,212,255,0.10)', usage: 'Default card borders', swatch: 'var(--border)' },
      { token: '--border-strong', value: 'rgba(0,212,255,0.25)', usage: 'Hover/focus border', swatch: 'var(--border-strong)' },
      { token: '--glass-bg', value: 'rgba(10,14,26,0.70)', usage: 'Glass card background', swatch: 'var(--glass-bg)' },
      { token: '--glass-border', value: 'rgba(0,212,255,0.12)', usage: 'Glass card border', swatch: 'var(--glass-border)' },
      { token: '--grid-line', value: 'rgba(0,212,255,0.05)', usage: 'Background grid lines', swatch: 'var(--grid-line)' },
    ],
  },
  {
    group: 'TYPOGRAPHY',
    tokens: [
      { token: '--font-heading', value: 'Space Grotesk', usage: 'Headings, nav, titles' },
      { token: '--font-sans', value: 'Inter', usage: 'Body text, descriptions' },
      { token: '--font-mono', value: 'JetBrains Mono', usage: 'Code, labels, tags, metrics' },
    ],
  },
  {
    group: 'MOTION',
    tokens: [
      { token: '--ease', value: 'cubic-bezier(0.16, 1, 0.3, 1)', usage: 'Default easing' },
      { token: '--ease-out', value: 'cubic-bezier(0.23, 1, 0.32, 1)', usage: 'Exit / reveal easing' },
    ],
  },
  {
    group: 'LAYOUT',
    tokens: [
      { token: '--max-width', value: '1200px', usage: 'Container max width' },
      { token: '--max-width-wide', value: '1540px', usage: 'Wide container' },
      { token: '--page-max', value: '2560px', usage: 'Page width ceiling' },
      { token: '--nav-height', value: '96px', usage: 'Fixed nav height' },
      { token: '--container-pad', value: '48px', usage: 'Horizontal padding (responsive)' },
    ],
  },
];

/* ═══════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════ */

export default function DesignSystemPreviewPage() {
  return (
    <div className={s.dsPage}>
      {/* ── HERO ── */}
      <header className={s.dsHero}>
        <div className={s.dsHeroBadge}>
          <DotBadge>Design System v2.0</DotBadge>
        </div>
        <h1 className={s.dsHeroHeading}>
          The <span>Forge</span> Design System
        </h1>
        <p className={s.dsHeroDesc}>
          Every token, component, and pattern in one place. Built on CSS custom
          properties so changes propagate everywhere.
        </p>
        <nav className={s.dsToc}>
          {tocItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={s.dsTocLink}>
              <span className={s.dsTocNum}>{item.num}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* ── 01: COLOR PALETTE ── */}
      <ScrollReveal>
        <section className={s.dsSection} id="colors">
          <div className={s.sectionLabel}>01 &mdash; Palette</div>
          <h2 className={s.dsSectionTitle}>Color Palette</h2>
          <p className={s.dsSectionSub}>
            Two accent families plus a four-tier surface scale and three-tier
            text hierarchy. All values are live CSS variables.
          </p>

          {/* Brand Colors */}
          <h3 className={s.dsSubTitleFirst}>Brand Colors</h3>
          <div className={s.swatchGrid}>
            {brandColors.map((c) => (
              <div key={c.varName} className={s.swatch}>
                <div
                  className={s.swatchPreview}
                  style={{ backgroundColor: c.cssVar }}
                />
                <div className={s.swatchInfo}>
                  <div className={s.swatchName}>{c.name}</div>
                  <div className={s.swatchVar}>{c.varName}</div>
                  <div className={s.swatchHex}>{c.hex}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Surfaces */}
          <h3 className={s.dsSubTitle}>Surfaces</h3>
          <div className={s.surfaceGrid}>
            {surfaces.map((sf) => (
              <div
                key={sf.varName}
                className={s.surfaceCard}
                style={{ backgroundColor: sf.cssVar }}
              >
                <div className={s.surfaceCardName}>{sf.name}</div>
                <div className={s.surfaceCardVar}>
                  {sf.varName} &middot; {sf.hex}
                </div>
              </div>
            ))}
          </div>

          {/* Text Hierarchy */}
          <h3 className={s.dsSubTitle}>Text Hierarchy</h3>
          {textColors.map((tc) => (
            <div key={tc.varName} className={s.textColorRow}>
              <div
                className={s.textColorSample}
                style={{ color: `var(${tc.varName})` }}
              >
                {tc.sample}
              </div>
              <div className={s.textColorMeta}>
                {tc.varName} &middot; {tc.hex} &middot; {tc.name}
              </div>
            </div>
          ))}
        </section>
      </ScrollReveal>

      <hr className={s.dsDivider} />

      {/* ── 02: BORDERS & GLASS ── */}
      <ScrollReveal>
        <section className={s.dsSection} id="borders">
          <div className={s.sectionLabel}>02 &mdash; Borders &amp; Glass</div>
          <h2 className={s.dsSectionTitle}>Borders &amp; Glass Effects</h2>
          <p className={s.dsSectionSub}>
            Four border tokens from subtle to invisible, plus the glassmorphism
            pattern used across navigation and cards.
          </p>

          {/* Border tokens */}
          <h3 className={s.dsSubTitleFirst}>Border Tokens</h3>
          <div className={s.borderGrid}>
            {borderTokens.map((bt) => (
              <div
                key={bt.varName}
                className={s.borderCard}
                style={{ border: `2px solid ${bt.cssVar}` }}
              >
                <div className={s.borderCardName}>{bt.name}</div>
                <div className={s.borderCardVar}>
                  {bt.varName} &middot; {bt.value}
                </div>
                <div className={s.borderCardDesc}>{bt.description}</div>
              </div>
            ))}
          </div>

          {/* Glass effect */}
          <h3 className={s.dsSubTitle}>Glass Effect</h3>
          <div className={s.glassDemoWrap}>
            <div className={s.glassDemoBg} />
            <GlassCard className={s.glassCardDemo}>
              <h4>GlassCard Component</h4>
              <p>
                --glass-bg: rgba(10, 14, 26, 0.70)
                <br />
                backdrop-filter: blur(24px)
                <br />
                border: 1px solid --glass-border
              </p>
            </GlassCard>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.dsDivider} />

      {/* ── 03: TYPOGRAPHY ── */}
      <ScrollReveal>
        <section className={s.dsSection} id="typography">
          <div className={s.sectionLabel}>03 &mdash; Typography</div>
          <h2 className={s.dsSectionTitle}>Typography</h2>
          <p className={s.dsSectionSub}>
            Three font families — geometric headings, humanist body, and
            monospace for code and data — plus a nine-step type scale.
          </p>

          {/* Font families */}
          <h3 className={s.dsSubTitleFirst}>Font Families</h3>
          {fontFamilies.map((ff) => (
            <div key={ff.varName} className={s.typeRow}>
              <div className={s.typeMeta}>
                <span>{ff.varName}</span>
                <span className={s.typeMetaSep}>&middot;</span>
                <span>{ff.name}</span>
                <span className={s.typeMetaSep}>&middot;</span>
                <span>{ff.weights}</span>
              </div>
              <div className={s[ff.sampleClass]}>{ff.sampleText}</div>
              <div className={s.typeUsage}>{ff.usage}</div>
            </div>
          ))}

          {/* Type scale */}
          <h3 className={s.dsSubTitle}>Type Scale</h3>
          {typeScale.map((ts) => (
            <div key={ts.name} className={s.typeScaleRow}>
              <div className={s.typeScaleMeta}>
                <span className={s.typeScaleMetaName}>{ts.name}</span>
                {ts.size} &middot; {ts.weight}
                {ts.extra && (
                  <>
                    <br />
                    {ts.extra}
                  </>
                )}
              </div>
              <div
                className={s.typeScaleSample}
                style={{
                  fontFamily: `var(${ts.family})`,
                  fontSize: ts.size.startsWith('clamp') ? undefined : ts.size,
                  fontWeight: ts.weight,
                }}
              >
                {ts.sampleText}
              </div>
            </div>
          ))}

          {/* Accent lines */}
          <h3 className={s.dsSubTitle}>Accent Lines</h3>
          <div className={s.accentLinesDemo}>
            <div className={s.accentLineWrap}>
              <div className={s.accentLineLabel}>.accent-line</div>
              <div className={s.accentLine} />
            </div>
            <div className={s.accentLineWrapCenter}>
              <div className={s.accentLineLabel}>.accent-line-center</div>
              <div className={s.accentLineCenter} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.dsDivider} />

      {/* ── 04: SPACING & LAYOUT ── */}
      <ScrollReveal>
        <section className={s.dsSection} id="spacing">
          <div className={s.sectionLabel}>04 &mdash; Spacing &amp; Layout</div>
          <h2 className={s.dsSectionTitle}>Spacing &amp; Layout</h2>
          <p className={s.dsSectionSub}>
            A 13-step spacing scale, four border-radius values, layout
            container tokens, and five responsive breakpoints.
          </p>

          {/* Spacing scale */}
          <h3 className={s.dsSubTitleFirst}>Spacing Scale</h3>
          <div className={s.spacingGrid}>
            {spacingScale.map((sp) => (
              <div key={sp.value} className={s.spacingRow}>
                <div className={s.spacingLabel}>{sp.label}px</div>
                <div className={s.spacingBarWrap}>
                  <div
                    className={s.spacingBar}
                    style={{ width: `${(sp.value / 80) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Border radius */}
          <h3 className={s.dsSubTitle}>Border Radius</h3>
          <div className={s.radiusGrid}>
            {radiusScale.map((r) => (
              <div key={r.value} className={s.radiusDemo}>
                <div
                  className={s.radiusBox}
                  style={{ borderRadius: r.value }}
                />
                <div className={s.radiusLabel}>{r.label}</div>
              </div>
            ))}
          </div>

          {/* Layout tokens */}
          <h3 className={s.dsSubTitle}>Layout Tokens</h3>
          <table className={s.layoutTable}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Value</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              {layoutTokens.map((lt) => (
                <tr key={lt.token}>
                  <td>{lt.token}</td>
                  <td>{lt.value}</td>
                  <td>{lt.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Breakpoints */}
          <h3 className={s.dsSubTitle}>Breakpoints</h3>
          <div className={s.bpRow}>
            {breakpoints.map((bp) => (
              <div key={bp.name} className={s.bpCard}>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background: bp.color,
                  }}
                />
                <div className={s.bpCardName}>{bp.name}</div>
                <div className={s.bpCardRange}>{bp.range}</div>
                <ul className={s.bpCardChanges}>
                  {bp.changes.map((change) => (
                    <li key={change}>{change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.dsDivider} />

      {/* ── 05: COMPONENTS ── */}
      <ScrollReveal>
        <section className={s.dsSection} id="components">
          <div className={s.sectionLabel}>05 &mdash; Components</div>
          <h2 className={s.dsSectionTitle}>Component Showcase</h2>
          <p className={s.dsSectionSub}>
            Live demos of every reusable React component in the design system,
            rendered with real imports.
          </p>

          {/* Badges */}
          <div className={s.componentCard}>
            <div className={s.componentCardLabel}>Badges</div>
            <div className={s.badgeGrid}>
              <DotBadge>DotBadge</DotBadge>
              <Badge variant="ai">AI Badge</Badge>
              <Badge variant="tag">Tag</Badge>
              <Badge variant="tag-ai">Tag AI</Badge>
              <Badge variant="tag-accent">Tag Accent</Badge>
            </div>
          </div>

          {/* Metric Cards */}
          <div className={s.componentCard}>
            <div className={s.componentCardLabel}>MetricCard</div>
            <div className={s.metricGrid}>
              {demoMetrics.map((m) => (
                <MetricCard key={m.label} value={m.value} label={m.label} />
              ))}
            </div>
          </div>

          {/* Glass Card */}
          <div className={s.componentCard}>
            <div className={s.componentCardLabel}>GlassCard</div>
            <div className={s.glassDemoWrap}>
              <div className={s.glassDemoBg} />
              <GlassCard className={s.glassCardDemo}>
                <h4>Frosted Glass Surface</h4>
                <p>
                  Uses backdrop-filter blur with semi-transparent background
                  for the glass effect. Works over gradients and images.
                </p>
              </GlassCard>
            </div>
          </div>

          {/* ScrollReveal stagger */}
          <div className={s.componentCard}>
            <div className={s.componentCardLabel}>ScrollReveal Stagger</div>
            <div className={s.staggerGrid}>
              {staggerDelays.map((delay, i) => (
                <ScrollReveal key={i} delay={delay}>
                  <div className={s.staggerCard}>
                    <div className={s.staggerCardLabel}>delay</div>
                    <div className={s.staggerCardDelay}>{delay}s</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.dsDivider} />

      {/* ── 06: MOTION ── */}
      <ScrollReveal>
        <section className={s.dsSection} id="motion">
          <div className={s.sectionLabel}>06 &mdash; Motion</div>
          <h2 className={s.dsSectionTitle}>Motion &amp; Animation</h2>
          <p className={s.dsSectionSub}>
            Two custom easing curves, seven keyframe animations, and a
            scroll-reveal system. Hover the bars to see each easing in action.
          </p>

          {/* Easing curves */}
          <h3 className={s.dsSubTitleFirst}>Easing Curves</h3>
          <div className={s.motionBars}>
            {easingCurves.map((ec) => (
              <div key={ec.name} className={s.motionBar}>
                <div className={s.motionBarLabel}>
                  <span className={s.motionBarLabelName}>{ec.name}</span>
                  <span className={s.motionBarLabelValue}>{ec.value}</span>
                </div>
                <div className={s.motionBarTrack}>
                  <div
                    className={`${s.motionBarFill} ${s[ec.fillClass]}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Live animation demos */}
          <h3 className={s.dsSubTitle}>Live Demos</h3>
          <div className={s.animDemos}>
            <div className={s.animDemoBox}>
              <div className={s.dotPulseDemo} />
              <div className={s.animDemoLabel}>dotPulse</div>
            </div>
            <div className={s.animDemoBox}>
              <div className={s.scrollIndicatorDemo}>
                <div className={s.scrollDot} />
              </div>
              <div className={s.animDemoLabel}>scrollDrop</div>
            </div>
          </div>

          {/* Keyframe reference */}
          <h3 className={s.dsSubTitle}>Keyframe Reference</h3>
          <table className={s.animTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Duration</th>
                <th>Easing</th>
                <th>Loop</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {keyframeAnimations.map((ka) => (
                <tr key={ka.name}>
                  <td>{ka.name}</td>
                  <td>{ka.duration}</td>
                  <td>{ka.easing}</td>
                  <td>{ka.loop}</td>
                  <td>{ka.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </ScrollReveal>

      <hr className={s.dsDivider} />

      {/* ── 07: TOKEN REFERENCE ── */}
      <ScrollReveal>
        <section className={s.dsSection} id="tokens">
          <div className={s.sectionLabel}>07 &mdash; Quick Reference</div>
          <h2 className={s.dsSectionTitle}>Token Reference</h2>
          <p className={s.dsSectionSub}>
            Every CSS custom property in the system, organized by category.
          </p>

          <table className={s.tokenTable}>
            <thead>
              <tr>
                <th>Token</th>
                <th>Value</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              {tokenGroups.map((group) => (
                <Fragment key={group.group}>
                  <tr className={s.tokenGroupLabel}>
                    <td colSpan={3}>{group.group}</td>
                  </tr>
                  {group.tokens.map((t) => (
                    <tr key={t.token} className={s.tokenRow}>
                      <td>
                        <span className={s.tokenVar}>
                          {'swatch' in t && t.swatch && (
                            <span
                              className={s.tokenSwatch}
                              style={{ backgroundColor: t.swatch }}
                            />
                          )}
                          {t.token}
                        </span>
                      </td>
                      <td className={s.tokenVal}>{t.value}</td>
                      <td className={s.tokenUsage}>{t.usage}</td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </section>
      </ScrollReveal>
    </div>
  );
}
