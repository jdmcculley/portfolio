# Pencil.dev + Forge Design System — Step-by-Step Walkthrough

> Building the Articles section for jdmcculley.com using Pencil in VS Code

---

## Prerequisites Checklist

Before you start, make sure you have:

- [ ] **VS Code** installed
- [ ] **Claude Code CLI** installed and authenticated (`claude` works in terminal)
- [ ] **Pencil extension** installed (VS Code Extensions → search "Pencil" by High Agency)
- [ ] The `jd-portfolio.pen` file already in your repo root (you have this)
- [ ] The Forge Design System files in place (`design-system/forge.tokens.json`, `DESIGN_SYSTEM.md`)

---

## How AI Works in Pencil

Pencil has two ways to issue AI instructions:

1. **Claude Code terminal (recommended)** — Open your terminal in the project directory, run `claude`, and type your prompts. End every design-related prompt with **"use the pencil mcp server"** so Claude Code routes the work through Pencil's MCP tools.

2. **Pencil's built-in chat** — Some versions expose a prompt bar on the canvas, but the terminal approach is more reliable and gives better results because Claude Code has full project context (your files, tokens, components).

**This walkthrough uses the terminal approach throughout.**

---

## Step 1: Install the Pencil Extension

1. Open VS Code
2. Press **Cmd+Shift+X** to open Extensions
3. Search **"Pencil"** — install the one by **High Agency**
4. Restart VS Code if prompted

**Verify:** Click on `jd-portfolio.pen` in your file explorer. It should open as a visual canvas, not raw JSON.

---

## Step 2: Configure the MCP Connection

This lets Claude Code read and write your `.pen` file programmatically.

**The `.mcp.json` file already exists in your project root** (`react-portfolio/.mcp.json`):

```json
{
  "mcpServers": {
    "pencil": {
      "command": "pencil",
      "args": ["--mcp"]
    }
  }
}
```

**Verify:** Open your VS Code terminal, run `claude`, and check that it picks up the Pencil MCP server. You should see it listed when Claude Code starts. If it doesn't appear, make sure the Pencil extension is running (open your `.pen` file first), then restart Claude Code.

---

## Step 3: Open the Canvas + Start Claude Code

You need both running at the same time:

1. **Click `jd-portfolio.pen`** in VS Code's file explorer — this opens the Pencil canvas
2. **Open the integrated terminal** (Ctrl+` or Cmd+`)
3. **Start Claude Code:**

```bash
claude
```

You should see the Pencil MCP server listed in Claude Code's startup. Now you have the canvas open on one side and Claude Code ready in the terminal.

---

## Step 4: Import Forge Tokens

In the Claude Code terminal, type:

```
Import design tokens from design-system/forge.tokens.json into
jd-portfolio.pen as Pencil variables. Create color variables for all
tokens in the dark theme: accent, accent-light, accent-dim, accent-glow,
secondary, secondary-light, secondary-dim, secondary-glow.
Create surface variables: bg, bg-alt, surface, surface-elevated.
Create text variables: text, text-soft, text-muted.
Create border variables: border, border-strong, glass-bg, glass-border.
Set up "dark", "light", and "tech-dark" as theme modes with their
respective values from the JSON. Use the pencil mcp server.
```

**What happens:** Claude Code reads your token JSON, calls Pencil's MCP tools, and creates reusable variables in the `.pen` file. Every element you draw can now reference `--accent`, `--surface`, etc. When you switch themes in Pencil's theme picker, the whole canvas updates.

**Verify:** Open the Variables panel in Pencil's right sidebar. You should see your Forge tokens listed under their categories.

---

## Step 5: Create the Articles Frame

In the Claude Code terminal:

```
In jd-portfolio.pen, create a new frame called "Articles Index" at
1440px wide. Use --bg for the page background. Use the pencil mcp server.
```

This gives you a blank desktop-width artboard on the canvas.

---

## Step 6: Design the Section Header

In the Claude Code terminal:

```
In the "Articles Index" frame in jd-portfolio.pen, design a section
header area:
- Section label: "ARTICLES" in --font-sans, 0.68rem, weight 600,
  tracking 0.22em, uppercase, color --accent
- Heading: "Thinking Out Loud" in --font-heading, ~3rem, weight 700,
  color --text, tracking -0.02em
- Sub text: "Design leadership, AI-augmented workflows, and lessons
  from building products at scale." in --font-sans, 1rem, weight 300,
  color --text-soft, line-height 1.7
- Left-aligned, max-width 530px for the sub text
- 48px horizontal padding (matching --container-pad)
Use the pencil mcp server.
```

**What happens:** Pencil draws the header on the canvas using your exact Forge token values — not approximations.

---

## Step 7: Design the Article Cards

This is the main layout. In the Claude Code terminal:

```
Below the header in the "Articles Index" frame, design a vertical stack
of article cards with 24px gap. Each card should be:
- Full width, padding 32px
- Background: --surface
- Border: 1px solid --border, border-radius 16px

Card layout (content on left, arrow on right):
- Meta row: date in --font-mono 0.62rem --text-muted uppercase,
  dot separator, read time in same style
- Title: --font-heading, ~1.4rem, weight 700, color --text
- Description: --font-sans, 0.92rem, weight 300, color --text-soft,
  max-width 640px
- Tags row: small badges (--font-mono, 0.55rem, uppercase,
  bg white/3%, border white/6%, color --text-muted, rounded 3px)
- Right side: arrow icon in --accent, 20x20

Create 4 cards with this data:
1. "Design-Led AI in Practice" - Feb 10, 2026 - 12 min read -
   tags: AI Workflow, Design Leadership, Code to Canvas - FEATURED
2. "Design Process Timeline" - Feb 5, 2026 - 8 min read -
   tags: Design Process, Career, Evolution
3. "Interview Preparation Framework" - Jan 28, 2026 - 10 min read -
   tags: Interview, Career Strategy, Frameworks
4. "Job Search Strategy" - Jan 20, 2026 - 9 min read -
   tags: Job Search, Strategy, Positioning

The first card should have a "Featured" badge in the top-right corner
(--accent-glow bg, --accent text, --font-mono 0.55rem, uppercase).

Also create a hover state variant for cards: border becomes
--border-strong, background becomes --surface-elevated, card lifts -3px.

Use the pencil mcp server.
```

**What happens:** You get a complete visual layout with real content, real token values, and proper spacing on the canvas.

---

## Step 8: Create a Mobile Variant

In the Claude Code terminal:

```
Create a 390px wide mobile variant of the "Articles Index" frame in
jd-portfolio.pen. Cards should stack vertically with:
- Padding 24px 20px
- Arrow moves to bottom-right
- Featured badge becomes inline (above content, not absolute positioned)
- Container padding reduces to 16px (matching --container-pad at <=600px)
Use the pencil mcp server.
```

Now you have desktop + mobile side by side on the same canvas.

---

## Step 9: Review and Adjust Visually

This is where Pencil shines compared to going straight to code. On the canvas:

- **Click any element** to see its exact token values in the Properties panel (right sidebar)
- **Drag card spacing** to test different gap values
- **Try theme switching** — toggle between dark/light/tech-dark to verify cards work across all themes
- **Check alignment** — Pencil shows exact pixel measurements between elements
- **Use the Layers panel** (left sidebar) to select, group, and reorder elements

Make adjustments directly on the canvas. You can also hand-edit in the canvas and then ask Claude Code to incorporate those changes.

---

## Step 10: Generate Code from the Design

In the Claude Code terminal:

```
Generate a Next.js page component from the "Articles Index" frame in
jd-portfolio.pen. Use TypeScript with these requirements:
- Import Container from @/components/layout/Container
- Import ScrollReveal from @/components/ui/ScrollReveal
- Import SectionHeader from @/components/ui/SectionHeader
- Import Badge from @/components/ui/Badge
- Import sortedArticles from @/data/articles
- Use CSS Module for page styles (articles-index.module.css)
- Reference all colors as CSS variables (var(--token-name))
- Follow the patterns in DESIGN_SYSTEM.md
- Output to src/app/(portfolio)/articles/page.tsx
Use the pencil mcp server.
```

**What happens:** Because the MCP server sends exact vector data and token references (not a screenshot), the generated code uses your real component imports, real token names, and real CSS variable references. It knows `--surface` is a card background because that's what the `.pen` file says.

---

## Step 11: Compare and Refine

You now have both the design (in `jd-portfolio.pen`) and the code (in `src/app/(portfolio)/articles/page.tsx`).

**Run the dev server** in a second terminal tab:

```bash
npm run dev
```

Visit `localhost:3000/articles/` and compare side-by-side with the Pencil canvas.

If something's off, go back to the Claude Code terminal:

- **Design is right, code is wrong:**
  ```
  The article card border-radius in articles/page.tsx doesn't match the
  design. Fix it to match the Articles Index frame. Use the pencil mcp server.
  ```

- **Code is right, design needs updating:**
  ```
  Sync the Articles Index frame in jd-portfolio.pen from
  src/app/(portfolio)/articles/page.tsx. Use the pencil mcp server.
  ```

- **Quick iteration without MCP:**
  You can also just edit the `.tsx` and `.module.css` files directly in VS Code — the scaffold is already wired up and working.

---

## Step 12: Commit Everything Together

Your `.pen` file is just JSON — it lives in Git alongside your code:

```bash
git add jd-portfolio.pen
git add src/app/(portfolio)/articles/page.tsx
git add src/app/(portfolio)/articles/articles-index.module.css
git add src/data/articles.ts
git commit -m "Add articles index section — designed in Pencil, generated with Forge tokens"
```

The design and code version together. No Figma link that goes stale. No separate design file that drifts from the implementation.

---

## Quick Reference: Terminal Prompts

Every prompt ends with **"use the pencil mcp server."**

| What you want | Prompt |
|---|---|
| Import tokens | "Import variables from design-system/forge.tokens.json into [file].pen..." |
| New frame | "Create a 1440px frame called [Name] in [file].pen..." |
| Design a section | "In the [Frame] frame, design [description]..." |
| Generate code | "Generate a Next.js component from the [Frame] frame..." |
| Sync code → design | "Update the [Frame] frame from src/app/.../page.tsx..." |
| Sync design → code | "Regenerate code for the [Frame] frame..." |
| Switch theme | "Switch [file].pen to light theme..." |
| Mobile variant | "Create a 390px mobile variant of the [Frame] frame..." |
| Check tokens | "What variables are used in the card elements of [Frame]..." |

---

## Troubleshooting

**Pencil MCP not appearing in Claude Code:**
- Make sure the `.pen` file is open in VS Code (the extension must be active)
- Verify `.mcp.json` is in the project root
- Restart Claude Code: exit and run `claude` again

**Claude Code not connected:**
- Run `claude` in your terminal to verify authentication
- If expired, re-authenticate with `claude login`

**Design doesn't update on canvas:**
- Pencil may need a moment to sync after MCP writes
- Try clicking elsewhere on the canvas and back
- Close and reopen the `.pen` file if needed

**Generated code uses wrong tokens:**
- Make sure `DESIGN_SYSTEM.md` is at the project root — Claude Code reads it for context
- Be specific in your prompt: name exact token variables (`--surface`, `--border`)

---

## File Map After This Walkthrough

```
react-portfolio/
├── jd-portfolio.pen                          ← design canvas (Git-versioned)
├── .mcp.json                                 ← Pencil MCP config (already created)
├── DESIGN_SYSTEM.md                          ← agent reference
├── design-system/
│   ├── forge.tokens.json                     ← canonical token source
│   ├── build.mjs                             ← CSS/markdown generator
│   ├── forge.generated.css                   ← auto-generated CSS
│   ├── forge.generated.md                    ← auto-generated docs
│   └── PENCIL_WALKTHROUGH.md                 ← this file
├── src/
│   ├── data/
│   │   └── articles.ts                       ← article data model
│   └── app/(portfolio)/articles/
│       ├── page.tsx                           ← articles index (generated/refined)
│       ├── articles-index.module.css          ← page styles
│       ├── articles.module.css               ← shared article detail styles (existing)
│       ├── design-led-ai/page.tsx             ← existing article
│       ├── design-process-timeline/page.tsx   ← existing article
│       ├── interview-prep/page.tsx            ← existing article
│       └── job-search-strategy/page.tsx       ← existing article
└── .vscode/
    └── forge.code-snippets                   ← VS Code autocomplete
```
