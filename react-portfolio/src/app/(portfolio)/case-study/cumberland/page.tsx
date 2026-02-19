import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContentSection } from '@/components/case-study/ContentSection';
import { StrategicContext } from '@/components/case-study/StrategicContext';
import { ResultsGrid } from '@/components/case-study/ResultsGrid';
import { ProcessTimeline } from '@/components/case-study/ProcessTimeline';
import { DecisionCallout } from '@/components/case-study/DecisionCallout';
import { PullQuote } from '@/components/case-study/PullQuote';
import { ContextCards } from '@/components/case-study/ContextCards';
import { NextStudy } from '@/components/case-study/NextStudy';
import { Badge } from '@/components/ui/Badge';
import s from '../case-study.module.css';

export const metadata: Metadata = {
  title: 'Case Study: Cumberland Design System — JD McCulley',
  openGraph: { images: [{ url: '/api/og/?page=cumberland', width: 1200, height: 630 }] },
};

/* ── Cumberland Logo Icon ── */
function CumberlandIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect width="56" height="56" rx="12" fill="rgba(0,212,255,0.06)" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
      <path d="M18 20h20v2H18zM18 26h20v2H18zM18 32h14v2H18z" fill="rgba(0,212,255,0.4)" />
      <rect x="38" y="30" width="6" height="6" rx="1" fill="rgba(74,125,255,0.5)" />
      <rect x="14" y="16" width="28" height="26" rx="3" stroke="rgba(0,212,255,0.25)" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/* ── Phase Timeline ── */
function PhaseTimeline() {
  const phases = [
    { num: 'Phase 01', title: 'Component Creation', time: 'Apr – Jul 2024', cls: s.phaseP1 },
    { num: 'Phase 02', title: 'Documentation', time: 'May – Aug 2024', cls: s.phaseP2 },
    { num: 'Phase 03', title: 'Dev Portal', time: 'Sep 2024 – Jan 2025', cls: s.phaseP3 },
    { num: 'Phase 04', title: 'Team Training', time: 'Feb – Apr 2025', cls: s.phaseP4 },
    { num: 'Phase 05', title: 'Maintenance', time: 'Ongoing', cls: s.phaseP5 },
  ];

  return (
    <div className={s.phaseTimeline}>
      <div className={s.phaseTimelineHeader}>Implementation Timeline</div>
      <div className={s.phaseTrack}>
        <div className={`${s.phaseSegment} ${s.phaseSeg1}`} title="Phase 1: Component Creation" />
        <div className={`${s.phaseSegment} ${s.phaseSeg2}`} title="Phase 2: Documentation" />
        <div className={`${s.phaseSegment} ${s.phaseSeg3}`} title="Phase 3: Design System Portal" />
        <div className={`${s.phaseSegment} ${s.phaseSeg4}`} title="Phase 4: Team Training" />
        <div className={`${s.phaseSegment} ${s.phaseSeg5}`} title="Phase 5: Maintenance" />
      </div>
      <div className={s.phaseLabels}>
        <span>Apr 2024</span>
        <span>Jul</span>
        <span>Sep</span>
        <span>Jan 2025</span>
        <span>Ongoing</span>
      </div>
      <div className={s.phaseCards}>
        {phases.map((p) => (
          <div key={p.num} className={`${s.phaseCard} ${p.cls}`}>
            <div className={s.phaseCardNum}>{p.num}</div>
            <div className={s.phaseCardTitle}>{p.title}</div>
            <div className={s.phaseCardTime}>{p.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Token Architecture Diagram ── */
function TokenArchitecture() {
  const layers = [
    {
      cls: s.tokenFoundation,
      label: 'Foundation Tokens',
      title: 'Raw Values',
      desc: 'The atomic building blocks — colors, spacing, radii, type scales, elevation, motion timing',
      chips: ['color.gold.500', 'space.16', 'radius.md', 'type.body.md'],
    },
    {
      cls: s.tokenSemantic,
      label: 'Semantic Tokens',
      title: 'Design Intent',
      desc: 'Values mapped to meaning — what "primary" means, what "error" looks like, what "surface" is',
      chips: ['color.action.primary', 'color.feedback.error', 'space.section'],
    },
    {
      cls: s.tokenComponent,
      label: 'Component Tokens',
      title: 'Reusable Patterns',
      desc: 'Semantic decisions assembled into components — buttons, cards, inputs, modals, navigation',
      chips: ['button.primary.bg', 'card.padding', 'input.border.focus'],
    },
  ];

  return (
    <div className={s.tokenArch}>
      {layers.map((layer) => (
        <div key={layer.label} className={`${s.tokenLayer} ${layer.cls}`}>
          <div className={s.tokenLayerLabel}>{layer.label}</div>
          <div className={s.tokenLayerTitle}>{layer.title}</div>
          <div className={s.tokenLayerDesc}>{layer.desc}</div>
          <div className={s.tokenExamples}>
            {layer.chips.map((chip) => (
              <span key={chip} className={s.tokenChip}>{chip}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Pipeline Diagram ── */
function PipelineDiagram() {
  const nodes = [
    {
      label: 'Step 01', title: 'Research & Ideation',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    },
    {
      label: 'Step 02', title: 'Design System',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
    },
    {
      label: 'Step 03', title: 'Iteration & Craft',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>,
    },
    {
      label: 'Step 04', title: 'Dev Handoff',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    },
    {
      label: 'Step 05', title: 'QA & Release',
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
  ];

  return (
    <div className={s.pipeline}>
      {nodes.map((node) => (
        <div key={node.label} className={s.pipelineNode}>
          <div className={s.pipelineIcon}>{node.icon}</div>
          <div className={s.pipelineLabel}>{node.label}</div>
          <div className={s.pipelineTitle}>{node.title}</div>
        </div>
      ))}
    </div>
  );
}

export default function CumberlandCaseStudy() {
  return (
    <main className={s.main}>
      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={s.hero}>
          <div className={s.caseStudyLabel}>Case Study</div>
          <div className={s.heroTitleContainer}>
            <CumberlandIcon />
            <h1 className={s.heroTitle}>Cumberland Design System</h1>
          </div>
          <p className={s.heroSubtitle}>Building the foundation for AI-accelerated product development across two enterprise brands</p>
          <p className={s.heroDescription}>
            The landscape of digital product development is changing. Design systems aren&apos;t optional anymore — they&apos;re the infrastructure that determines whether a team can iterate at the speed modern tools demand. Cumberland was a multi-phase design system built to serve Dollar General and pOpshelf across mobile, web, and ServiceNow platforms. Tokenized, documented, and designed to bridge the gap between design and development — so a smaller team could move like a much larger one.
          </p>

          <div className={s.metadata}>
            <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>Design System Lead</div></div>
            <div><div className={s.metadataLabel}>Organization</div><div className={s.metadataValue}>Dollar General / pOpshelf</div></div>
            <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>Apr 2024 – Ongoing</div></div>
            <div><div className={s.metadataLabel}>Team</div><div className={s.metadataValue}>1 Design Lead, 3 Designers, UX Engineer</div></div>
            <div><div className={s.metadataLabel}>Platforms</div><div className={s.metadataValue}>Mobile App, Web, ServiceNow</div></div>
          </div>

          <PhaseTimeline />
        </section>
      </ScrollReveal>

      {/* Strategic Context */}
      <StrategicContext
        label="Strategic Context"
        stats={[
          { value: '2 Enterprise Brands', desc: 'Dollar General + pOpshelf sharing a unified token architecture with brand-specific themes' },
          { value: '5 Phases', desc: 'From tokenized components through documentation, dev portal, training, and ongoing governance' },
          { value: '6.6M+ MAUs', desc: 'Digital products serving millions monthly — consistency at scale isn\'t optional' },
        ]}
      />

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <ContentSection number="01 — THE PROBLEM" title="Speed Without a System">
        <div className={s.sectionBody}>
          <p>Dollar General&apos;s digital product team was scaling fast — 6.6 million monthly active users across mobile, web, and in-store touchpoints, with a second brand (pOpshelf) ramping simultaneously. But the design infrastructure hadn&apos;t kept pace. Components were being redrawn for every feature. Handoff to engineering was a translation exercise. New designers took three weeks to become productive because there was no single source of truth.</p>
          <p>The math was straightforward: if every feature required rebuilding from scratch, team velocity was fixed. You could add headcount, but the bottleneck wasn&apos;t people — it was the absence of shared language between design and development. With AI tools accelerating what&apos;s possible in the design-to-code pipeline, the gap wasn&apos;t just inefficient. It was becoming untenable. Teams that can&apos;t iterate at the speed these tools enable will be outpaced by those that can.</p>
        </div>

        <div className={s.caseImpact}>
          <div className={s.impactItem}><div className={s.impactValue}>62%</div><div className={s.impactLabel}>Design Consistency Score (Before)</div></div>
          <div className={s.impactItem}><div className={s.impactValue}>3 Weeks</div><div className={s.impactLabel}>New Designer Onboarding</div></div>
          <div className={s.impactItem}><div className={s.impactValue}>2 Brands</div><div className={s.impactLabel}>Separate Component Libraries</div></div>
          <div className={s.impactItem}><div className={s.impactValue}>0</div><div className={s.impactLabel}>Developer-Accessible Documentation</div></div>
        </div>

        <ContextCards cards={[
          { type: 'before', title: 'Redraw', text: 'Every feature rebuilt from scratch, no shared components' },
          { type: 'after', title: 'Compose', text: 'Tokenized system — assemble, don\'t redraw' },
        ]} />
      </ContentSection>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="Tokens First, Screens Later">
        <div className={s.sectionBody}>
          <p>The instinct with design systems is to start drawing components. We started with architecture. The first question wasn&apos;t &ldquo;what does a button look like?&rdquo; — it was &ldquo;how does a button know which brand it belongs to, and how does an engineer consume that decision without a designer in the room?&rdquo;</p>
          <p>That led to a token-first strategy. Foundation tokens defined the raw values — colors, spacing, type scales. Semantic tokens mapped those values to meaning — what &ldquo;primary action&rdquo; looks like, what &ldquo;error state&rdquo; means. Component tokens assembled semantic decisions into reusable patterns. The result: one system that could theme across Dollar General and pOpshelf without duplicating components.</p>
          <p>The phased rollout was deliberate. Phases 1 and 2 ran concurrently — building components and documentation in tandem so that documentation wasn&apos;t an afterthought. Phase 3 extended the system into a ServiceNow portal that gave developers direct access. Phase 4 trained the team. Phase 5 established governance for ongoing maintenance.</p>
        </div>

        <TokenArchitecture />

        <ProcessTimeline steps={[
          { num: '01', title: 'Audit & Architecture', desc: 'Inventoried existing components across both brands, identified overlap and divergence, designed three-tier token system' },
          { num: '02', title: 'Build & Document', desc: 'Components and documentation built concurrently — guidelines, grids, accessibility rules, token usage, naming conventions' },
          { num: '03', title: 'Portal & API', desc: 'ServiceNow developer portal with component API, layouts, and grids — developers self-serve without designer in the loop' },
          { num: '04', title: 'Enable & Govern', desc: 'Team training for designers and engineers, deprecation protocols, contribution guidelines, ongoing maintenance rhythm' },
        ]} />
      </ContentSection>

      {/* ══════════ 03 — THE PROCESS ══════════ */}
      <ContentSection number="03 — THE PROCESS" title="Bridging Design and Development">
        <div className={s.sectionBody}>
          <p>The core challenge wasn&apos;t making things look consistent. It was making the handoff disappear. When a designer in Figma creates a component using semantic tokens, the engineer receiving that design should know exactly which values to use — not because a designer explained it, but because the system encodes the decision.</p>
          <p>Tokenization was the first deliverable. We restructured the entire component library around a three-tier token system: foundation values, semantic mapping, and component-level decisions. Color variations, state management (hover, focus, active, disabled), and responsive behavior all encoded at the token level. When pOpshelf needed a different brand expression, we swapped the foundation tokens — the components adapted automatically.</p>
          <p>Documentation wasn&apos;t a PDF nobody reads. Every token, every component, every layout decision was documented with usage guidelines, change protocols, and accessibility requirements. The ServiceNow portal meant developers could browse components, inspect properties, and grab code-ready specs without scheduling a meeting.</p>
        </div>

        <PipelineDiagram />

        <DecisionCallout decisions={[
          { icon: '\uD83C\uDFA8', title: 'Tokens Before Components', text: 'Started with the token architecture rather than visual components. This meant brand theming was built-in from day one — not retrofitted later.' },
          { icon: '\uD83D\uDCBB', title: 'Portal Over PDF', text: 'Documentation lived in a ServiceNow portal, not a static document. Developers could browse, search, and inspect — removing the designer bottleneck from consumption.' },
          { icon: '\uD83D\uDD04', title: 'Build and Document in Parallel', text: 'Phases 1 and 2 ran concurrently. Components shipped with documentation on day one — not months later when nobody remembers the decisions.' },
          { icon: '\uD83D\uDC65', title: 'Multi-Brand, Single System', text: 'Dollar General and pOpshelf served by one system with brand-specific token overrides. Same components, different expressions — without maintaining two libraries.' },
        ]} />
      </ContentSection>

      {/* ══════════ 04 — THE RESULTS ══════════ */}
      <ContentSection number="04 — THE RESULTS" title="Faster Teams, Consistent Products">
        <div className={s.sectionBody}>
          <p>Cumberland delivered measurable improvements across three dimensions: design velocity, product consistency, and team scaling. Components replaced redrawing. Documentation replaced tribal knowledge. A portal replaced the &ldquo;ask the designer&rdquo; bottleneck.</p>
          <p>The most telling metric was onboarding time. New designers previously needed three weeks to become productive — learning conventions, finding assets, understanding which patterns were current. With Cumberland, that dropped to five days. The system carried the institutional knowledge that used to live in people&apos;s heads.</p>
        </div>

        <ResultsGrid results={[
          { metric: '35%', label: 'Design Velocity Increase', context: 'Components vs. redrawing from scratch' },
          { metric: '89%', label: 'Consistency Score', context: 'Up from 62% — unified token architecture' },
          { metric: '5 Days', label: 'Designer Onboarding', context: 'Down from 3 weeks — system carries knowledge' },
          { metric: '1 System', label: 'Multi-Brand Architecture', context: 'DG + pOpshelf from shared token foundation' },
        ]} />

        <ContextCards cards={[
          { type: 'before', title: '62%', text: 'Design consistency score — fragmented, inconsistent' },
          { type: 'after', title: '89%', text: 'Design consistency score — tokenized, governed' },
        ]} />

        <ContextCards cards={[
          { type: 'before', title: '3 Weeks', text: 'Tribal knowledge, scattered conventions' },
          { type: 'after', title: '5 Days', text: 'System carries institutional knowledge' },
        ]} />
      </ContentSection>

      {/* ══════════ 05 — THE LEARNING ══════════ */}
      <ContentSection number="05 — THE LEARNING" title="The System Is the Strategy">
        <div className={s.sectionBody}>
          <p>What I didn&apos;t fully appreciate before this project was that the design system isn&apos;t a deliverable — it&apos;s the infrastructure that makes every other deliverable possible. Without Cumberland, every feature launch was a one-off effort. With it, features compose from proven patterns. The system accumulates institutional knowledge so that the next designer, the next engineer, the next feature doesn&apos;t start from zero.</p>
          <p>This became especially clear as AI tools entered the workflow. AI can generate components, iterate layouts, even write production-ready code — but only if it has a tokenized system to work within. Without that structure, AI output is inconsistent, off-brand, and requires the same manual correction that slowed teams down before. The design system is what makes AI-accelerated product development possible. It&apos;s the context that turns speed into quality.</p>
          <p>I think of it like building sandcastles. The waves keep coming — market shifts, new tools, evolving platforms, competitive pressure. You don&apos;t get to build one castle and walk away. You rebuild, each time a little faster, a little smarter. The organizations that can rebuild at the speed these waves now arrive are the ones that win. Cumberland was built for that rhythm — not permanence, but resilient iteration.</p>
        </div>

        <PullQuote
          text="If you don't have a design system, you cannot move at the speed that these tools can now move. The system is what turns AI velocity into product quality."
          attr="Core Conviction: Design Systems in the AI Era"
        />

        <div className={s.quoteSection}>
          <div className={s.quoteBox}>
            <div className={s.quoteMark}>&ldquo;</div>
            <div className={s.quoteText}>The landscape of digital product development is changing. The design system, your development pipelines, how efficiently those run, how well they talk to each other — that&apos;s the competitive advantage now.</div>
            <div className={s.quoteAttr}>JD McCulley</div>
          </div>
        </div>
      </ContentSection>

      {/* Next Study */}
      <NextStudy
        prevHref="/case-study/swimlane-dashboards"
        prevTitle="Swimlane SOAR"
        href="/case-study/rba"
        title="Authentication Redesign Under Pressure"
        desc="How a 5-day crisis became a 7-journey system protecting 9 million users — and proved why the design system matters."
        metrics={[
          { value: '25K+', label: 'Users Rescued' },
          { value: '61%', label: 'Completion Lift' },
          { value: '75K', label: 'Dead Ends Prevented' },
        ]}
      />
    </main>
  );
}
