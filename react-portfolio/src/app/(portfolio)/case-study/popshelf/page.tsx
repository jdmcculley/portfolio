import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContentSection } from '@/components/case-study/ContentSection';
import { StrategicContext } from '@/components/case-study/StrategicContext';
import { ResultsGrid } from '@/components/case-study/ResultsGrid';
import { PullQuote } from '@/components/case-study/PullQuote';
import { NextStudy } from '@/components/case-study/NextStudy';
import s from '../case-study.module.css';

export const metadata: Metadata = {
  title: 'Case Study: pOpshelf Design System (Forge) — JD McCulley',
  openGraph: { images: [{ url: '/api/og/?page=popshelf', width: 1200, height: 630 }] },
};

/* ─────────────────────────────────────────────
   VISUAL: Bidirectional Loop Diagram
   Shows Claude ↔ Figma as a closed loop
───────────────────────────────────────────── */
function LoopDiagram() {
  return (
    <div style={{ width: '100%', marginTop: '40px', marginBottom: '8px' }}>
      <svg viewBox="0 0 760 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <linearGradient id="loopGradL" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4a7dff" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="loopGradR" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4a7dff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.9" />
          </linearGradient>
          <marker id="arrowR" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#00d4ff" fillOpacity="0.9" />
          </marker>
          <marker id="arrowL" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto-start-reverse">
            <path d="M8,0 L8,6 L0,3 z" fill="#4a7dff" fillOpacity="0.9" />
          </marker>
        </defs>

        {/* Claude node */}
        <rect x="40" y="70" width="160" height="80" rx="12"
          fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.35)" strokeWidth="1.5" />
        <text x="120" y="103" fill="rgba(0,212,255,0.95)" fontSize="13" fontWeight="600"
          fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">Claude</text>
        <text x="120" y="122" fill="rgba(255,255,255,0.45)" fontSize="10.5"
          fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Code · Diff · Logic</text>

        {/* Figma node */}
        <rect x="560" y="70" width="160" height="80" rx="12"
          fill="rgba(74,125,255,0.06)" stroke="rgba(74,125,255,0.35)" strokeWidth="1.5" />
        <text x="640" y="103" fill="rgba(140,170,255,0.95)" fontSize="13" fontWeight="600"
          fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">Figma</text>
        <text x="640" y="122" fill="rgba(255,255,255,0.45)" fontSize="10.5"
          fontFamily="'JetBrains Mono', monospace" textAnchor="middle">Components · Tokens</text>

        {/* Arrow: Code → Figma (top arc) */}
        <path d="M200 95 Q380 30 560 95"
          stroke="url(#loopGradL)" strokeWidth="2" fill="none"
          markerEnd="url(#arrowR)" strokeDasharray="0" />
        <text x="380" y="46" fill="rgba(0,212,255,0.70)" fontSize="10"
          fontFamily="'JetBrains Mono', monospace" textAnchor="middle" letterSpacing="0.5">Code → Figma</text>
        <text x="380" y="61" fill="rgba(255,255,255,0.35)" fontSize="9.5"
          fontFamily="'JetBrains Mono', monospace" textAnchor="middle">capture pages · MCP push</text>

        {/* Arrow: Figma → Code (bottom arc) */}
        <path d="M560 125 Q380 190 200 125"
          stroke="url(#loopGradR)" strokeWidth="2" fill="none"
          markerEnd="url(#arrowL)" strokeDasharray="0" />
        <text x="380" y="178" fill="rgba(74,125,255,0.80)" fontSize="10"
          fontFamily="'JetBrains Mono', monospace" textAnchor="middle" letterSpacing="0.5">Figma → Code</text>
        <text x="380" y="193" fill="rgba(255,255,255,0.35)" fontSize="9.5"
          fontFamily="'JetBrains Mono', monospace" textAnchor="middle">snapshot · diff · apply</text>

        {/* Center orchestrator */}
        <circle cx="380" cy="110" r="28" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <text x="380" y="107" fill="rgba(255,255,255,0.55)" fontSize="9"
          fontFamily="'JetBrains Mono', monospace" textAnchor="middle">orchestrated</text>
        <text x="380" y="120" fill="rgba(255,255,255,0.55)" fontSize="9"
          fontFamily="'JetBrains Mono', monospace" textAnchor="middle">by JD</text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL: Code → Figma pipeline flow
───────────────────────────────────────────── */
function CodeToFigmaFlow() {
  const steps = [
    { label: 'Component\nCode', sub: 'CSS + HTML' },
    { label: 'Capture\nPage', sub: 'Isolated preview' },
    { label: 'MCP\nPush', sub: 'generate_figma_design' },
    { label: 'Figma\nFrames', sub: 'Pixel-accurate' },
    { label: 'Component\nSet', sub: 'Variant properties' },
  ];

  return (
    <div style={{ width: '100%', marginTop: '32px' }}>
      <svg viewBox="0 0 720 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <marker id="flowArrow" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="rgba(0,212,255,0.5)" />
          </marker>
        </defs>
        {steps.map((step, i) => {
          const x = 36 + i * 138;
          const lines = step.label.split('\n');
          return (
            <g key={i}>
              <rect x={x} y="20" width="102" height="56" rx="8"
                fill={i === 4 ? 'rgba(0,212,255,0.08)' : 'rgba(255,255,255,0.03)'}
                stroke={i === 4 ? 'rgba(0,212,255,0.4)' : 'rgba(255,255,255,0.10)'}
                strokeWidth="1.2" />
              <text x={x + 51} y="44" fill="rgba(255,255,255,0.85)" fontSize="11" fontWeight="600"
                fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">{lines[0]}</text>
              <text x={x + 51} y="58" fill="rgba(255,255,255,0.85)" fontSize="11" fontWeight="600"
                fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">{lines[1]}</text>
              <text x={x + 51} y="89" fill="rgba(255,255,255,0.35)" fontSize="9"
                fontFamily="'JetBrains Mono', monospace" textAnchor="middle">{step.sub}</text>
              {i < steps.length - 1 && (
                <line x1={x + 102} y1="48" x2={x + 136} y2="48"
                  stroke="rgba(0,212,255,0.4)" strokeWidth="1.2" markerEnd="url(#flowArrow)" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL: Figma → Code pipeline flow
───────────────────────────────────────────── */
function FigmaToCodeFlow() {
  const steps = [
    { label: 'Figma\nChange', sub: 'Design update' },
    { label: 'Snapshot\nCapture', sub: 'JSON via MCP' },
    { label: 'Three-Pass\nDiff', sub: 'ID · Name · Pos' },
    { label: 'Change\nReport', sub: 'Token bindings' },
    { label: 'Code\nUpdate', sub: 'Applied & merged' },
  ];

  return (
    <div style={{ width: '100%', marginTop: '32px' }}>
      <svg viewBox="0 0 720 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <marker id="flowArrow2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="rgba(74,125,255,0.5)" />
          </marker>
        </defs>
        {steps.map((step, i) => {
          const x = 36 + i * 138;
          const lines = step.label.split('\n');
          return (
            <g key={i}>
              <rect x={x} y="20" width="102" height="56" rx="8"
                fill={i === 4 ? 'rgba(74,125,255,0.08)' : 'rgba(255,255,255,0.03)'}
                stroke={i === 4 ? 'rgba(74,125,255,0.4)' : 'rgba(255,255,255,0.10)'}
                strokeWidth="1.2" />
              <text x={x + 51} y="44" fill="rgba(255,255,255,0.85)" fontSize="11" fontWeight="600"
                fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">{lines[0]}</text>
              <text x={x + 51} y="58" fill="rgba(255,255,255,0.85)" fontSize="11" fontWeight="600"
                fontFamily="'Space Grotesk', sans-serif" textAnchor="middle">{lines[1]}</text>
              <text x={x + 51} y="89" fill="rgba(255,255,255,0.35)" fontSize="9"
                fontFamily="'JetBrains Mono', monospace" textAnchor="middle">{step.sub}</text>
              {i < steps.length - 1 && (
                <line x1={x + 102} y1="48" x2={x + 136} y2="48"
                  stroke="rgba(74,125,255,0.4)" strokeWidth="1.2" markerEnd="url(#flowArrow2)" />
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISUAL: Component variant matrix
───────────────────────────────────────────── */
function VariantMatrix() {
  const components = [
    { name: 'Button', props: ['variant: primary / outline', 'size: default / sm', 'fullWidth: true / false'], count: '6 combinations' },
    { name: 'ProductCard', props: ['state: addToCart / viewDetails / viewOptions', 'variant: default / narrow / compact'], count: '5 variants' },
    { name: 'AvailabilityStatus', props: ['state: inStock / lowStock / outOfStock / outOfStock+choices / inStock+pickup'], count: '5 states' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '32px' }}>
      {components.map((c) => (
        <div key={c.name} style={{
          display: 'grid',
          gridTemplateColumns: '160px 1fr auto',
          alignItems: 'center',
          gap: '20px',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '16px 20px',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent)', fontWeight: 600 }}>
            {c.name}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {c.props.map((p, i) => (
              <div key={i} style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                {p}
              </div>
            ))}
          </div>
          <div style={{
            background: 'rgba(0,212,255,0.08)',
            border: '1px solid rgba(0,212,255,0.2)',
            borderRadius: '6px',
            padding: '4px 12px',
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent)',
            whiteSpace: 'nowrap',
          }}>
            {c.count}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Screenshot placeholder
───────────────────────────────────────────── */
function ScreenshotSlot({ label, src }: { label: string; src?: string }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={label} style={{
        width: '100%', height: 'auto', borderRadius: '10px',
        border: '1px solid var(--border)', display: 'block', marginTop: '32px',
      }} />
    );
  }
  return (
    <div style={{
      marginTop: '32px',
      width: '100%',
      minHeight: '200px',
      background: 'rgba(255,255,255,0.02)',
      border: '1px dashed rgba(255,255,255,0.12)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>
        [ Screenshot: {label} ]
      </span>
    </div>
  );
}

export default function PopshelfCaseStudy() {
  return (
    <main className={s.main}>

      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={s.hero}>
          <div className={s.caseStudyLabel}>Case Study</div>
          <div className={s.heroTitleContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/popshelf-logo_white.svg" alt="pOpshelf" style={{ height: '48px', flexShrink: 0 }} />
            <h1 className={s.heroTitle}>The Design-Code Loop</h1>
          </div>
          <p className={s.heroSubtitle}>
            I built a pOpshelf design system that lives simultaneously in code and in Figma — and built the tooling to keep both sides in sync. This is what it looks like to orchestrate AI between design and engineering.
          </p>
          <p className={s.heroDescription}>
            Most people pick a direction: they design in Figma and hand off to engineers, or they write code and export screenshots. This project runs both directions at once. Code pushes to Figma via MCP. Figma changes pull back to code via a diff engine. Figma components mirror the React component API. Code Connect mappings are staged and ready. The result is a closed loop — with Claude and Figma MCP as the infrastructure, and me as the orchestrator.
          </p>

          <div className={s.metadata}>
            <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>Design System Architect</div></div>
            <div><div className={s.metadataLabel}>Scope</div><div className={s.metadataValue}>End-to-End Build</div></div>
            <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>Feb – Mar 2026</div></div>
            <div><div className={s.metadataLabel}>Stack</div><div className={s.metadataValue}>CSS · React · Node.js · Figma MCP</div></div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════ Strategic Context ══════════ */}
      <StrategicContext
        label="What this proves"
        stats={[
          { value: 'Bidirectional', desc: 'The pipeline runs both ways. Code can push to Figma. Figma changes can update code. That loop doesn\'t exist in most teams — I built it.' },
          { value: 'AI-Orchestrated', desc: 'Claude and Figma MCP do the heavy lifting. I designed the workflow, wrote the scripts, and connected the tools. That\'s the orchestration skill.' },
          { value: 'Production-Ready', desc: 'Not a prototype. Governed components, token-driven CSS, Figma component sets with variant properties, Code Connect staged to activate.' },
        ]}
        ecosystemLabel="The Loop"
        ecosystem={[
          { label: 'Token Foundation', active: true },
          { label: 'Governed Components' },
          { label: 'Code → Figma Pipeline' },
          { label: 'Figma → Code Pipeline' },
          { label: 'Code Connect' },
        ]}
      />

      {/* ══════════ 01 — THE LOOP ══════════ */}
      <ContentSection number="01 — THE LOOP" title="Design and Code in Sync — Both Directions">
        <div className={s.sectionBody}>
          <p>The typical design-to-engineering workflow is one-directional: designers make something in Figma, hand it off, and hope engineers implement it correctly. The reverse — code changes reflected back into Figma — almost never happens without manual effort.</p>
          <p>I built both directions. The diagram below shows the closed loop: code pushes to Figma through isolated capture pages and Figma MCP. Figma changes come back to code through a snapshot engine and three-pass diff. The components in both environments share the same variant structure. This is the bridge most teams talk about but don&apos;t build.</p>
        </div>

        <LoopDiagram />

        <PullQuote
          text="The question isn't whether you can design or whether you can code. It's whether you can close the loop between both — and keep it closed as the product evolves."
          attr="Design-Code Orchestration Principle"
        />
      </ContentSection>

      {/* ══════════ 02 — CODE → FIGMA ══════════ */}
      <ContentSection number="02 — CODE → FIGMA" title="Pushing Components Into Figma — Automatically">
        <div className={s.sectionBody}>
          <p>Each component gets an isolated capture page — just the component, real CSS, zero chrome. Those pages load in the browser and get pushed into Figma via the <code>generate_figma_design</code> MCP tool, producing pixel-accurate frames that reflect the actual rendered output of the code.</p>
          <p>From those captures, I built proper Figma Component Sets — not flat frames, but real Figma components with variant properties that mirror the React component API. A designer picking &ldquo;Button / variant: primary / size: sm / fullWidth: false&rdquo; in Figma is choosing the exact same props a developer uses in code.</p>
        </div>

        <CodeToFigmaFlow />

        <ScreenshotSlot label="Figma Assets Panel — 3-component library: AvailabilityStatus, Button, ProductCard" />
        <ScreenshotSlot label="Figma Component Variant Panel — ProductCard selected, showing state/variant dropdowns" />
      </ContentSection>

      {/* ══════════ 03 — FIGMA → CODE ══════════ */}
      <ContentSection number="03 — FIGMA → CODE" title="Design Changes That Write Themselves Into Code">
        <div className={s.sectionBody}>
          <p>The Forge pipeline runs in reverse too. When a designer makes changes in Figma, the snapshot engine pulls the design context via MCP and compares it against the last known state using three-pass matching: direct node-ID matching first, then name+position matching for rebuilt components, then ADDED/REMOVED detection for structural changes.</p>
          <p>Token binding changes are tracked separately — if a designer rebinds a color from <code>brand-primary</code> to <code>brand-primary-dark</code>, the diff catches it. Three successful round-trips during development caught real property-level changes. The pipeline is generalized — it works with any Figma file and any project.</p>
        </div>

        <FigmaToCodeFlow />

        <ScreenshotSlot label="Diff output — change report showing property-level changes between snapshots" />
      </ContentSection>

      {/* ══════════ 04 — FIGMA COMPONENT LIBRARY ══════════ */}
      <ContentSection number="04 — FIGMA COMPONENTS" title="A Component Library That Mirrors the Code">
        <div className={s.sectionBody}>
          <p>The Figma component library isn&apos;t a sketch — it&apos;s a proper component set built from the captured renders, with variant properties that match the React props one-to-one. ProductCard instances in Figma contain Button and AvailabilityStatus instances, exactly as they nest in code.</p>
          <p>This matters because it means the handoff problem disappears. Designers work with real component APIs. Engineers implement the same API. There&apos;s no translation layer, no annotation spec, no &ldquo;this is how the button should behave&rdquo; documentation. The system encodes the contract.</p>
        </div>

        <VariantMatrix />

        <ScreenshotSlot label="Capture page side-by-side with resulting Figma frames — showing pixel accuracy" />
      </ContentSection>

      {/* ══════════ 05 — CODE CONNECT ══════════ */}
      <ContentSection number="05 — CODE CONNECT" title="One Command Away From Full Bidirectional Sync">
        <div className={s.sectionBody}>
          <p>Code Connect is Figma&apos;s mechanism for linking design components to their code implementations — so when a designer selects a Button in Figma, they see the exact React import and prop usage, not a guess. I built and staged the entire Code Connect setup: <code>@figma/code-connect</code> installed, <code>figma.config.js</code> configured, three mapping files activated with real Figma node URLs.</p>
          <p>Activation requires a Figma Org plan — one command (<code>npm run figma:publish</code>) when that&apos;s available. The infrastructure is already there. That&apos;s not a limitation — it&apos;s proof that I built the full system, not just the parts that were easy to demo.</p>
        </div>

        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '10px',
          padding: '24px 28px',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          lineHeight: 2,
          marginTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          {[
            { label: 'figma/code-connect/Button.figma.js', note: '→ node 51:483', ready: true },
            { label: 'figma/code-connect/ProductCard.figma.js', note: '→ node 51:489', ready: true },
            { label: 'figma/code-connect/AvailabilityStatus.figma.js', note: '→ node 51:476', ready: true },
            { label: 'figma.config.js', note: 'Configured', ready: true },
            { label: 'npm run figma:publish', note: 'Activate when Org plan available', ready: false },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ color: item.ready ? 'var(--accent)' : 'rgba(255,255,255,0.25)' }}>
                {item.ready ? '✓' : '○'}
              </span>
              <span style={{ color: item.ready ? 'var(--text-soft)' : 'rgba(255,255,255,0.25)' }}>
                {item.label}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>{item.note}</span>
            </div>
          ))}
        </div>
      </ContentSection>

      {/* ══════════ 06 — WHAT THIS PROVES ══════════ */}
      <ContentSection number="06 — THE PROOF" title="The Orchestrator Role">
        <div className={s.sectionBody}>
          <p>The design-code gap isn&apos;t a technology problem. The tools exist. The gap is a leadership and systems-thinking problem — someone has to design the workflow, connect the tools, define the contracts, and make the loop close. That&apos;s the role this project demonstrates.</p>
          <p>I used Claude as my engineering partner to build the token system, write the diff engine, and structure the component logic. I used Figma MCP to push and pull design data. I designed the process that connects them. The output isn&apos;t just a component library — it&apos;s a working example of what AI-augmented design system leadership looks like in practice.</p>
        </div>

        <ResultsGrid results={[
          { metric: '2-way sync', label: 'Bidirectional Pipeline', context: 'Code → Figma and Figma → Code both work', featured: true },
          { metric: '3 components', label: 'Figma + Code parity', context: 'Same variant structure in both environments' },
          { metric: 'Staged', label: 'Code Connect Ready', context: 'One command to activate when Org plan available' },
          { metric: 'Generalized', label: 'Reusable Tooling', context: 'The pipeline works with any Figma file, any project' },
        ]} />

        <PullQuote
          text="This is what AI-augmented design leadership looks like: not using AI to generate UI, but using it to close the gap between the tools your designers use and the tools your engineers use."
          attr="JD McCulley"
        />
      </ContentSection>

      {/* ══════════ Next Study ══════════ */}
      <NextStudy
        prevHref="/case-study/cumberland"
        prevTitle="Cumberland System"
        href="/case-study/rba"
        title="Authentication Redesign Under Pressure"
        desc="Rescued thousands of stuck users and prevented 75,000 future lockouts by redesigning the complete authentication flow."
        metrics={[
          { value: '1000s', label: 'Users Rescued' },
          { value: '61%', label: 'Completion Lift' },
          { value: '75K', label: 'Dead Ends Prevented' },
        ]}
      />
    </main>
  );
}
