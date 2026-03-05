---
name: new-article
description: "Generate a complete portfolio article from a Markdown file. Creates Next.js page component, CSS module, articles.ts entry, and Pencil canvas frame. Supports flexible content blocks: pull quotes, callouts, manifesto banners, numbered lists, tool cards, and more."
argument-hint: "[path/to/article.md]"
---

# New Article Generator

Generate a complete portfolio article from a Markdown file. Outputs 4 artifacts:

1. `src/app/(portfolio)/articles/[slug]/page.tsx` — Next.js server component
2. `src/app/(portfolio)/articles/[slug]/[slug].module.css` — CSS module
3. `src/data/articles.ts` — new entry appended
4. `jd-portfolio.pen` — Pencil canvas frame via MCP

## Invocation

```
/new-article path/to/article.md
```

If no argument is provided, ask the user for the MD file path.

## Step 1: Parse the Markdown File

Read the MD file. Extract YAML frontmatter and body content.

### Required Frontmatter

```yaml
---
title: "Article Title"
subtitle: "Subtitle shown below heading"
description: "Card description for listings and meta tags"
date: "2026-03-01"
readTime: "8 min read"
tags: ["Tag1", "Tag2"]
slug: "article-slug"
---
```

### Optional Frontmatter

```yaml
sectionLabel: "Article"    # defaults to "Article"
featured: false             # defaults to false
protected: false            # defaults to false
```

## Step 2: Map MD Content to Components

Parse the body content and map each element to the corresponding React/CSS pattern. Every major block gets wrapped in `<ScrollReveal>`.

### Content Mapping Table

| Markdown Syntax | React Output | CSS Class |
|---|---|---|
| `# Title` | Ignored (use frontmatter `title`) | — |
| `## Section Heading` | `<h2>` — optionally wrap the last word(s) in `<span className={s.gradientText}>` for accent | `.articleBody h2` |
| First `> [!lead]` block | `<p className={s.lead}>` | `.lead` |
| Regular paragraphs | `<p>` | `.articleBody p` |
| `**bold**` | `<strong>` | `.articleBody p strong` |
| `*italic*` | `<em>` | `.articleBody p em` |
| `---` (thematic break) | `<div className={s.accentDivider} />` | `.accentDivider` |
| `> blockquote text` | `<div className={s.pullQuote}><p>...</p></div>` | `.pullQuote` |
| `> blockquote` with `— attribution` on last line | Add `<cite>attribution</cite>` inside pullQuote | `.pullQuote cite` |
| `> [!callout] Label Text` | `<div className={s.callout}><div className={s.calloutLabel}>Label</div><h3>first line</h3><p>rest</p></div>` | `.callout`, `.calloutLabel` |
| `> [!manifesto]` | `<div className={s.manifestoBanner}><p>content</p></div>` — use `<strong>` for gradient-highlighted line | `.manifestoBanner` |
| `> [!closing]` | `<div className={s.closingQuote}><p>content</p></div>` — use `<em>` for gradient-highlighted line | `.closingQuote` |
| Ordered list `1. **Title** body` | `<ol className={s.numberedList}><li><p><strong>Title</strong> body</p></li></ol>` | `.numberedList` |
| `> [!tool] name \| tagline \| badge` then body | `<div className={s.toolCard}>` with visual + content sides | `.toolCard` |

### HTML Entity Rules

- Apostrophes → `&apos;`
- Quotes → `&quot;`
- Em dashes → ` — ` (literal, with spaces)
- Use `{' '}` JSX spacers before inline elements like `<em>` or `<strong>` when needed

## Step 3: Generate page.tsx

Use this exact structure. The function name should be PascalCase from the slug (e.g., `my-article` → `MyArticle`).

```tsx
import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from './[slug].module.css';

export const metadata: Metadata = {
  title: '[title] — JD McCulley',
  description: '[description]',
  openGraph: {
    images: [{ url: '/api/og/?page=[slug]', width: 1200, height: 630 }],
  },
};

export default function [PascalName]Article() {
  return (
    <main>
      {/* header */}
      <header className={s.header}>
        <div className={s.sectionLabel}>[sectionLabel]</div>
        <h1 className={s.heading}>[title]</h1>
        <p className={s.subtitle}>[subtitle]</p>
      </header>

      {/* article body */}
      <div className={s.articleWrapper}>
        <article className={s.articleBody}>
          {/* ... mapped content sections, each in <ScrollReveal> ... */}

          {/* Author Bio — always last */}
          <ScrollReveal>
            <div className={s.authorBio}>
              <div className={s.authorAvatar}>JD</div>
              <div className={s.authorInfo}>
                <h4>JD McCulley</h4>
                <div className={s.authorTitle}>Product Design Leader</div>
                <p>
                  25 years building UX organizations at enterprise scale. Most
                  recently embedded design director at Dollar General, growing
                  the digital platform from 6M to 12M+ monthly active users.
                  Operating at the intersection of craft, technology, and
                  leadership.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </article>
      </div>
    </main>
  );
}
```

## Step 4: Generate CSS Module

Name the file `[slug].module.css`. Always include these base styles:

```css
/* header */
.header { max-width: 900px; margin: 0 auto; padding-top: 80px; }
.sectionLabel { font-family: var(--font-mono); font-size: 0.7rem; color: var(--secondary); text-transform: uppercase; letter-spacing: 3px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
.sectionLabel::before { content: ''; width: 24px; height: 1px; background: var(--secondary); }
.heading { font-family: var(--font-heading); font-size: clamp(2.2rem, 4.5vw, 3.2rem); font-weight: 800; letter-spacing: -1.5px; line-height: 1.1; color: var(--text); margin-bottom: 20px; }
.subtitle { font-size: 1.05rem; color: var(--text-soft); line-height: 1.75; max-width: 720px; font-weight: 300; margin-bottom: 68px; }

/* article layout */
.articleWrapper { display: grid; grid-template-columns: 1fr min(900px, 100%) 1fr; padding: 0 48px; position: relative; z-index: 1; }
.articleWrapper > * { grid-column: 2; }

/* base typography */
.articleBody h2 { font-family: var(--font-heading); font-size: clamp(1.6rem, 3.5vw, 2.2rem); font-weight: 700; letter-spacing: -0.03em; color: var(--text); margin-top: 72px; margin-bottom: 24px; line-height: 1.2; }
.articleBody p { color: var(--text-soft); font-size: 17px; line-height: 1.85; margin-bottom: 28px; font-weight: 300; }
.articleBody p strong { color: var(--text); font-weight: 600; }
.articleBody p em { color: var(--accent-light); font-style: italic; }

/* gradient text for h2 accent words */
.gradientText { font-style: normal; background: linear-gradient(135deg, var(--accent), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

/* lead paragraph */
.articleBody .lead { font-size: 20px; line-height: 1.7; color: var(--text); font-weight: 400; border-left: 2px solid var(--accent); padding-left: 24px; margin-bottom: 48px; }

/* author bio */
.authorBio { margin-top: 80px; margin-bottom: 120px; padding: 40px; background: var(--surface); border: 1px solid var(--border); border-radius: 16px; display: flex; gap: 32px; align-items: flex-start; }
.authorAvatar { width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, var(--accent-dim), var(--secondary)); display: flex; align-items: center; justify-content: center; font-family: var(--font-heading); font-size: 20px; font-weight: 700; color: var(--text); flex-shrink: 0; border: 2px solid var(--border-strong); }
.authorInfo h4 { font-family: var(--font-heading); font-size: 17px; font-weight: 700; color: var(--text); margin-bottom: 4px; letter-spacing: -0.02em; }
.authorTitle { font-family: var(--font-mono); font-size: 11px; color: var(--accent); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px; }
.articleBody .authorInfo p { font-size: 14px; line-height: 1.6; margin-bottom: 0; }
```

Then **conditionally include** only the block styles that appear in the MD content. Copy these verbatim from the reference CSS at `src/app/(portfolio)/articles/emergent-design/emergent-design.module.css`:

- `.accentDivider` (lines 112-119)
- `.manifestoBanner` + related (lines 121-157)
- `.pullQuote` + related (lines 240-284)
- `.callout` + related (lines 286-336)
- `.toolCard` + related (lines 338-413)
- `.numberedList` + related (lines 415-453)
- `.closingQuote` + related (lines 455-500)
- `.spectrumBlock` + related (lines 159-238) — only if explicitly used

Always include responsive breakpoints:

```css
@media (max-width: 900px) {
  .articleWrapper { padding: 0 24px; }
  .heading { font-size: 1.8rem; letter-spacing: -0.8px; }
  .authorBio { flex-direction: column; gap: 20px; }
  /* + conditional: .toolCard 1fr, .pullQuote padding, .manifestoBanner padding */
}
@media (max-width: 600px) {
  .header { padding-top: 64px; }
  .articleWrapper { padding: 0 20px; }
  /* + conditional: reduced padding for blocks */
}
```

## Step 5: Add articles.ts Entry

Read `src/data/articles.ts`. Insert a new object into the `articles` array:

```typescript
{
  slug: '[slug]',
  title: '[title]',
  description: '[description]',
  date: '[date]',
  readTime: '[readTime]',
  tags: [tags],
  // featured: true,    — only if frontmatter says so
  // protected: true,   — only if frontmatter says so
},
```

Insert it in date order (newest first) or at position 2 if featured.

## Step 6: Create Pencil Canvas Frame

Use the Pencil MCP server to create a canvas representation in `jd-portfolio.pen`.

### Canvas Constants

- Frame width: 1440px
- Content padding: 270px each side (= 900px content)
- Background: `#0a0e1a`
- Text: `#ffffff`
- Text soft: `#b1bad0`
- Text muted: `#4a5270`
- Accent: `#00d4ff`
- Secondary: `#4a7dff`
- Surface: `#121830`
- Border: `rgba(255,255,255,0.08)`

### Canvas Workflow

1. **Find empty space** using `find_empty_space_on_canvas` (direction: "bottom", width: 1440, height: 2000, padding: 100)

2. **Batch 1 — Main frame + header** (max 25 ops):
   ```
   main=I(document, {type: "frame", name: "[Title] — Article", layout: "vertical", width: 1440, clip: true, cornerRadius: 12, fill: "#0a0e1a", x: [x], y: [y]})
   hdr=I(main, {type: "frame", name: "Header", layout: "vertical", gap: 16, height: "fit_content", padding: [80, 270, 68, 270], fill: "transparent", width: "fill_container"})
   labelRow=I(hdr, {type: "frame", name: "Section Label Row", layout: "horizontal", gap: 12, alignItems: "center", height: "fit_content", width: "fit_content"})
   accentLine=I(labelRow, {type: "rectangle", name: "Accent Line", width: 24, height: 1, fill: "#4a7dff"})
   labelText=I(labelRow, {type: "text", name: "Section Label", content: "[SECTIONLABEL]", fontFamily: "JetBrains Mono", fontSize: 11, fontWeight: "medium", fill: "#4a7dff", letterSpacing: 3})
   heading=I(hdr, {type: "text", name: "Heading", content: "[title]", fontFamily: "Space Grotesk", fontSize: 51, fontWeight: "bold", fill: "#ffffff", letterSpacing: -1.5, lineHeight: 1.1, textGrowth: "fixed-width", width: "fill_container"})
   subtitle=I(hdr, {type: "text", name: "Subtitle", content: "[subtitle]", fontFamily: "Inter", fontSize: 17, fontWeight: "normal", fill: "#b1bad0", lineHeight: 1.75, textGrowth: "fixed-width", width: 720})
   body=I(main, {type: "frame", name: "Article Body", layout: "vertical", gap: 32, padding: [80, 270], fill: "#0a0e1a", width: "fill_container"})
   ```

3. **Batch 2+ — Article body content** (max 25 ops each):
   - Paragraphs: `{type: "text", fontFamily: "Inter", fontSize: 18, fontWeight: "normal", fill: "#b1bad0", lineHeight: 1.8, textGrowth: "fixed-width", width: "fill_container"}`
   - H2 headings: `{type: "text", fontFamily: "Space Grotesk", fontSize: 36, fontWeight: "bold", fill: "#ffffff", lineHeight: 1.2, textGrowth: "fixed-width", width: "fill_container"}`
   - Section spacers before h2: `{type: "frame", name: "Section Spacer", width: "fill_container", height: 24}`
   - Pull quotes: frame with `cornerRadius: [0, 12, 12, 0]`, 4px accent rectangle on left, quote text at 22px Space Grotesk
   - Callouts: frame with `cornerRadius: 12`, fill `#121830`, label + heading + body text
   - Manifesto: frame with `cornerRadius: 16`, fill `#121830`, padding 48, centered text
   - Accent dividers: `{type: "rectangle", width: 60, height: 3, fill: "#00d4ff"}`

   **CRITICAL**: All text nodes must have `textGrowth: "fixed-width"`. Font weights must be strings: `"bold"`, `"medium"`, `"semibold"`, `"normal"`.

4. **Final batch — Author bio**:
   - Horizontal frame with avatar circle + info column
   - Avatar: 64px ellipse with gradient fill
   - Name, title, bio text

5. **Verify** with `get_screenshot` on the main frame.

## Step 7: Verify

1. Confirm all files were created/modified
2. Tell the user to run: `cd react-portfolio && npx next dev --webpack --port 3000`
3. Provide the URL: `http://localhost:3000/articles/[slug]`
4. Take a Pencil screenshot of the canvas frame

## Design System Reference

- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (labels/code)
- **CSS Variables**: `--font-heading`, `--font-sans`, `--font-mono`, `--accent`, `--secondary`, `--accent-light`, `--accent-dim`, `--text`, `--text-soft`, `--text-muted`, `--surface`, `--surface-elevated`, `--border`, `--border-strong`, `--bg`
- **ScrollReveal**: `import { ScrollReveal } from '@/components/ui/ScrollReveal'` — wraps every major content section
- **Reference implementation**: `src/app/(portfolio)/articles/emergent-design/` — the canonical article pattern
