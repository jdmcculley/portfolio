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
  title: 'Case Study: Swimlane — Improving Dashboard Experiences | JD McCulley',
};

/* Swimlane Logo */
function SwimlaneLogo() {
  return (
    <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect width="62" height="62" rx="8" fill="#0a1628" />
      <path d="M16 31c3-6 7-10 15-10s12 4 15 10c-3 6-7 10-15 10s-12-4-15-10z" stroke="#00d4ff" strokeWidth="1.5" fill="none" />
      <circle cx="31" cy="31" r="5" stroke="#00d4ff" strokeWidth="1.5" fill="none" />
      <circle cx="31" cy="31" r="2" fill="#00d4ff" />
    </svg>
  );
}

/* Placeholder for images the user will provide */
function Placeholder({ label, desc, file }: { label: string; desc: string; file?: string }) {
  return (
    <div className={s.visualPlaceholder}>
      <div className={s.placeholderIcon}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      </div>
      <div className={s.placeholderLabel}>{label}</div>
      <div className={s.placeholderDesc}>{desc}</div>
      {file && <div className={s.placeholderFile}>{file}</div>}
    </div>
  );
}

/* Desktop frame wrapper */
function DesktopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.desktopFrame}>
      <div className={s.desktopToolbar}>
        <div className={s.desktopDots}>
          <span /><span /><span />
        </div>
      </div>
      <div className={s.desktopScreen}>
        {children}
      </div>
    </div>
  );
}

export default function SwimlaneCaseStudy() {
  return (
    <main className={s.main}>
      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={s.hero}>
          <div className={s.caseStudyLabel}>Case Study</div>
          <div className={s.heroTitleContainer}>
            <SwimlaneLogo />
            <h1 className={s.heroTitle}>Improving Dashboard Experiences</h1>
          </div>
          <p className={s.heroSubtitle}>
            Redesigning Swimlane&apos;s SOAR platform dashboards from static data displays into actionable intelligence surfaces — giving SOC analysts the situational awareness they need to respond to threats in seconds, not minutes.
          </p>

          <div className={s.metadata}>
            <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>Sr. Director of UI/UX</div></div>
            <div><div className={s.metadataLabel}>Team</div><div className={s.metadataValue}>3 Design + 8 Engineering</div></div>
            <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>2019 – 2021</div></div>
            <div><div className={s.metadataLabel}>Platform</div><div className={s.metadataValue}>Enterprise Web App</div></div>
            <div><div className={s.metadataLabel}>Company</div><div className={s.metadataValue}>Swimlane</div></div>
          </div>

          {/* Hero visual */}
          <img
            className={s.heroFloatingImage}
            src="/assets/images/swimlane/sl-dashboard.png"
            alt="Redesigned Swimlane SOAR dashboard with dark theme, data visualizations, and KPI widgets"
          />
        </section>
      </ScrollReveal>

      {/* Strategic Context */}
      <StrategicContext
        label="Strategic Context"
        stats={[
          { value: 'Series A → C Growth', desc: 'Swimlane scaled from startup to enterprise during this period. The dashboard needed to grow with the platform — from simple metrics to full operational intelligence.' },
          { value: 'SOC Analyst Workflows', desc: 'Security Operations Center analysts make high-stakes decisions under time pressure. Every second spent parsing a dashboard is a second not spent responding to threats.' },
          { value: 'Enterprise SOAR Platform', desc: 'Security Orchestration, Automation and Response — the dashboards were the command center for automated playbook execution across the entire security stack.' },
        ]}
        ecosystemLabel="Dashboard Ecosystem"
        ecosystem={[
          { label: 'SOAR Dashboards', active: true },
          { label: 'Playbook Analytics' },
          { label: 'Incident Response' },
          { label: 'Case Management' },
          { label: 'Threat Intelligence' },
          { label: 'KPI Reporting' },
          { label: 'Custom Widgets' },
          { label: 'Role-Based Views' },
        ]}
      />

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <ContentSection number="01 — THE PROBLEM" title="Dashboards That Didn&apos;t Dashboard">
        <div className={s.sectionBody}>
          <p>Swimlane&apos;s existing dashboards were functional but fundamentally passive. They displayed data — incident counts, playbook execution rates, mean time to resolve — but didn&apos;t help analysts <em>act</em> on that data. The information was there, but the insight wasn&apos;t.</p>
          <p>SOC analysts would open the dashboard, scan the numbers, then navigate away to the tools where actual work happened. The dashboard was a pit stop, not a command center. At enterprise scale, with customers managing thousands of alerts per day, this disconnect between visibility and action was costing real response time.</p>
          <p>The original dashboard implementation had grown organically — widgets added per customer request, chart types chosen for technical convenience rather than analytical utility, and no cohesive information hierarchy guiding the analyst&apos;s eye from overview to detail to action.</p>
        </div>

        <ContextCards cards={[
          { type: 'before', title: 'Static Data Displays', text: 'Dashboards showed numbers without context. No drill-down capability. No connection between what the data showed and what the analyst should do next. Widget placement was arbitrary — high-priority metrics buried alongside low-signal noise. Analysts learned to ignore the dashboard and go straight to their queue.' },
          { type: 'after', title: 'Actionable Intelligence Surfaces', text: 'Dashboards reorganized around analyst workflows — overview, triage, response. Every widget connected to an action. Drill-down from any metric directly into the relevant cases or playbooks. Information hierarchy guided attention from critical alerts to trending patterns to operational health. The dashboard became the starting point, not the thing you skip.' },
        ]} />

        {/* Before / After dashboard screenshots */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 48 }}>
          <div className={s.deviceCol}>
            <div className={s.deviceColLabel}>Before</div>
            <div className={s.fullVisual}>
              <img
                src="/assets/images/swimlane/Management-Dashboard-Resized.png"
                alt="Original Swimlane management dashboard with flat data displays and generic chart widgets"
              />
            </div>
          </div>
          <div className={s.deviceCol}>
            <div className={`${s.deviceColLabel} ${s.deviceColLabelAfter}`}>After</div>
            <div className={s.fullVisual}>
              <img
                src="/assets/images/swimlane/Dashboard 1.png"
                alt="Redesigned Swimlane dashboard with actionable intelligence surfaces and visual hierarchy"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="From Data Display to Decision Engine">
        <div className={s.sectionBody}>
          <p>The approach started with a fundamental reframe: dashboards aren&apos;t about showing data — they&apos;re about supporting decisions. Every widget, every chart, every metric needed to answer one question: &ldquo;What should I do next?&rdquo;</p>
          <p>Spent weeks embedded with SOC teams at customer sites, observing how analysts actually worked during shift changes, incident escalations, and routine triage. The patterns were clear: analysts needed three levels of information — a 30-second overview (is anything on fire?), a 2-minute triage (what needs attention now?), and deep-dive analytics (what&apos;s trending over time?).</p>
          <p>This three-tier model became the organizing principle for the entire dashboard redesign. Rather than a flat grid of widgets, we designed an information cascade that matched how analysts actually think under pressure.</p>
        </div>

        <ProcessTimeline steps={[
          { num: '01', title: 'SOC Observation', desc: 'Embedded with analyst teams at customer sites. Observed shift handoffs, incident response workflows, and how dashboards were actually used (or ignored) in practice.' },
          { num: '02', title: 'Information Architecture', desc: 'Mapped every metric to a decision. Designed a three-tier hierarchy: overview → triage → deep dive. Eliminated widgets that showed data without supporting action.' },
          { num: '03', title: 'Widget System Design', desc: 'Created a modular widget system with consistent interaction patterns. Every widget supports drill-down, contextual actions, and connects to the relevant workflow.' },
          { num: '04', title: 'Iterative Validation', desc: 'Tested with active SOC teams using real incident data. Measured time-to-insight and task completion rates. Iterated based on what analysts actually did, not what they said they wanted.' },
        ]} />
      </ContentSection>

      {/* ══════════ 03 — THE PROCESS ══════════ */}
      <ContentSection number="03 — THE PROCESS" title="Research, Sketch, Build, Validate">
        <div className={s.sectionBody}>
          <p>The dashboard redesign was one of the most research-intensive projects during my time at Swimlane. Understanding how security analysts process information under stress required going beyond standard UX research — we needed to understand cognitive load in high-stakes operational environments.</p>
        </div>

        {/* Research & discovery */}
        <div style={{ marginTop: 48 }}>
          <Placeholder
            label="Research & Discovery"
            desc="Photos of customer site visits, analyst interviews, and competitive analysis of security dashboard patterns across the SOAR landscape"
            file="research-discovery.png"
          />
        </div>

        <DecisionCallout decisions={[
          { icon: '🎯', title: 'Three-Tier Information Hierarchy', text: 'The 30-second / 2-minute / deep-dive model emerged directly from observation. Analysts at shift change need a different view than analysts mid-incident. The dashboard needed to serve both moments without requiring navigation or configuration.' },
          { icon: '📊', title: 'Chart Types as Cognitive Tools', text: 'Replaced generic bar charts with purpose-built visualizations. Sparklines for trend detection. Heat maps for time-based pattern recognition. Donut charts for composition at a glance. Each chart type chosen for the specific cognitive task it supports — not because the charting library made it easy.' },
          { icon: '🔗', title: 'Every Metric Is a Door', text: 'The single most impactful design decision: every number on the dashboard is clickable and leads to the relevant detail. Click an incident count — see those incidents. Click a playbook success rate — see the failed executions. Zero dead ends. The dashboard becomes navigation, not just display.' },
          { icon: '🎨', title: 'Dark Theme as Functional Choice', text: 'The dark theme wasn\'t aesthetic preference — it was a functional decision for SOC environments. Analysts work in dimly lit operations centers, often monitoring multiple screens for 8-12 hour shifts. Reduced eye strain directly impacts sustained attention and error rates.' },
          { icon: '⚡', title: 'Real-Time Without Noise', text: 'Live-updating dashboards can create anxiety if every metric is constantly flickering. Designed a smart refresh system: critical alerts update immediately, trend data refreshes on a cadence, and visual transitions are smooth enough to register change without demanding attention.' },
        ]} />

        {/* Wireframes and sketches */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 48 }}>
          <Placeholder
            label="Whiteboard Sessions"
            desc="Whiteboard sketches and sticky notes from early ideation — mapping widget types to analyst workflows"
            file="whiteboard-sketches.png"
          />
          <Placeholder
            label="Low-Fidelity Wireframes"
            desc="Paper and digital wireframes exploring dashboard layouts, widget arrangements, and information hierarchy"
            file="wireframes-lofi.png"
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <Placeholder
            label="Detailed Wireframes"
            desc="Higher-fidelity wireframes showing widget specifications, interaction patterns, and the three-tier information cascade"
            file="wireframes-detailed.png"
          />
        </div>

        {/* Component design system */}
        <div style={{ marginTop: 48 }}>
          <Placeholder
            label="Widget Component System"
            desc="The modular widget system — showing the component architecture for charts, KPI cards, alert feeds, and configurable dashboard layouts"
            file="widget-system.png"
          />
        </div>
      </ContentSection>

      {/* ══════════ 04 — THE SOLUTION ══════════ */}
      <ContentSection number="04 — THE SOLUTION" title="The Redesigned Dashboard">
        <div className={s.sectionBody}>
          <p>The final dashboard design organized around the three-tier model: a top-level status bar for the 30-second scan, a configurable widget grid for triage-level analysis, and drill-down pathways into every metric for deep-dive investigation.</p>
          <p>The widget system supported 12+ chart types, each purpose-built for security analytics: incident volume sparklines, playbook success/failure ratios, mean-time-to-resolve trends, alert severity distributions, and geographic threat maps. Every widget was configurable, drag-and-drop positionable, and role-aware — showing different defaults for analysts, managers, and executives.</p>
        </div>

        {/* Final dashboard designs */}
        <div style={{ marginTop: 48 }}>
          <div className={s.desktopCol}>
            <div className={s.deviceColLabel}>Redesigned Dashboard — Overview</div>
            <DesktopFrame>
              <Placeholder
                label="Dashboard Overview"
                desc="The primary dashboard view showing the three-tier information hierarchy — status bar, KPI widgets, and trend visualizations"
                file="dashboard-overview.png"
              />
            </DesktopFrame>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 48 }}>
          <Placeholder
            label="Analytics View"
            desc="Deep-dive analytics dashboard with trend charts, bar graphs, and detailed incident data visualizations"
            file="dashboard-analytics.png"
          />
          <Placeholder
            label="Operations View"
            desc="Operations-focused dashboard showing real-time playbook execution, queue status, and team performance metrics"
            file="dashboard-operations.png"
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <Placeholder
            label="Executive Reporting"
            desc="Executive-level dashboard with high-level KPIs, trend summaries, and compliance status — designed for stakeholder presentations"
            file="dashboard-executive.png"
          />
        </div>

        <Badge variant="tag">Enterprise B2B</Badge>
      </ContentSection>

      {/* ══════════ 05 — THE RESULTS ══════════ */}
      <ContentSection number="05 — THE RESULTS" title="From Ignored to Indispensable">
        <div className={s.sectionBody}>
          <p>The redesigned dashboards transformed from a feature analysts skipped to the first thing they opened at the start of every shift. The impact was measurable across every customer deployment — reduced time-to-insight, faster incident response, and significantly higher dashboard engagement.</p>
          <p>More importantly, the dashboard became a sales differentiator. During competitive evaluations, Swimlane&apos;s dashboard experience consistently outscored competitors — customers cited the &ldquo;actionable intelligence&rdquo; design as a key factor in platform selection. What started as a UX improvement became a revenue driver.</p>
        </div>

        <ResultsGrid results={[
          { metric: '60%', label: 'Reduction in time-to-insight', context: 'From opening the dashboard to identifying what needs attention', featured: true },
          { metric: '3x', label: 'Dashboard engagement increase', context: 'Analysts using dashboards as primary workspace vs. bypassing' },
          { metric: '12+', label: 'Purpose-built widget types', context: 'Each designed for a specific security analytics task' },
          { metric: 'Top', label: 'Competitive differentiator', context: 'Cited in win/loss analysis as key selection factor' },
          { metric: '40%', label: 'Faster shift handoffs', context: 'Incoming analysts could assess situation in 30 seconds vs. 5+ minutes' },
        ]} />
      </ContentSection>

      {/* ══════════ 06 — THE LEARNING ══════════ */}
      <ContentSection number="06 — THE LEARNING" title="Dashboards Are Workflows, Not Reports">
        <div className={s.sectionBody}>
          <p>The biggest lesson from this project: a dashboard that doesn&apos;t connect to action is just a pretty screensaver. The shift from &ldquo;data display&rdquo; to &ldquo;decision support&rdquo; seems obvious in retrospect, but it required fundamentally rethinking what a dashboard is <em>for</em>.</p>
          <p>The embedded research approach — sitting with analysts during actual incidents, not just conducting interviews — revealed patterns that no survey or analytics tool could surface. Watching someone&apos;s eyes scan a dashboard during a live security event tells you everything about information hierarchy that a heatmap study cannot.</p>
          <p>This project also established the design methodology I&apos;d carry forward: observe the real workflow, design for the decision (not the data), and validate with people doing the actual work under actual pressure. Design for the stress case, not the demo case.</p>
        </div>

        <PullQuote
          text="A dashboard that doesn't connect to action is just a pretty screensaver. Design for the decision, not the data."
          attr="Reflection — Swimlane Dashboard Redesign"
        />
      </ContentSection>

      {/* Next Study */}
      <NextStudy
        href="/case-study/rba"
        title="Risk-Based Authentication Redesign"
        desc="Rescued 25,000+ stuck users and prevented 75,000 future lockouts by redesigning the complete authentication flow for Dollar General's digital platforms."
        metrics={[
          { value: '25K+', label: 'Rescued' },
          { value: '75K', label: 'Prevented' },
          { value: '61%', label: 'Improvement' },
        ]}
      />
    </main>
  );
}
