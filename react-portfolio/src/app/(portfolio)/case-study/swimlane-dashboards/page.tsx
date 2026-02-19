import React from 'react';
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
import cs from '../case-study.module.css';
import s from './swimlane-dashboards.module.css';

export const metadata: Metadata = {
  title: 'Case Study: Swimlane — SOAR Platform Design | JD McCulley',
};


/* ── Design Thinking Phases visual ── */
const phases = [
  { label: 'Definition', color: '#F5E642', bullets: ['Concretization'] },
  { label: 'Research', color: '#B8E04A', bullets: ['Observation', 'Asking right questions', 'Contextual thinking'] },
  { label: 'Interpretation', color: '#4DE8C8', bullets: ['Empathy', 'Pattern recognition', 'Intuition'] },
  { label: 'Ideation', color: '#5CE0E6', bullets: ['Creativity', 'Thinking out of the box', 'Organic design', 'Improvization'] },
  { label: 'Prototyping', color: '#7EC8E3', bullets: ['Visual thinking', 'Conceptualization', 'Simplicity', 'Allegory'] },
  { label: 'Evaluation', color: '#8B9FE8', bullets: ['Critical thinking'] },
];

function DesignThinkingPhases() {
  return (
    <div className={s.dtPhases}>
      <h3 className={s.dtTitle}>Design Thinking Phases</h3>
      <div className={s.dtRow}>
        {phases.map((p, i) => (
          <React.Fragment key={p.label}>
            <div className={s.dtPhase}>
              <div className={s.dtCard} style={{ background: p.color }}>
                <span className={s.dtLabel}>{p.label}</span>
              </div>
              <ul className={s.dtBullets}>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            {i < phases.length - 1 && (
              <svg className={s.dtArrow} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── Desktop browser frame ── */
function DesktopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={cs.desktopFrame}>
      <div className={cs.desktopToolbar}>
        <div className={cs.desktopDots}>
          <span /><span /><span />
        </div>
      </div>
      <div className={cs.desktopScreen}>
        {children}
      </div>
    </div>
  );
}

export default function SwimlaneDashboards() {
  return (
    <main className={cs.main}>

      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={cs.hero}>
          <div className={cs.caseStudyLabel}>Case Study</div>
          <div className={cs.heroTitleContainer}>
            <img src="/assets/images/swimlane/sw-mark-color.svg" alt="Swimlane logo" width="63" height="95" style={{ flexShrink: 0 }} />
            <h1 className={cs.heroTitle}>Designing the SOAR Platform Experience</h1>
          </div>
          <p className={cs.heroSubtitle}>
            Leading design across Swimlane&apos;s Security Orchestration, Automation &amp; Response platform — from dashboards and analytics to applications, workflow, mobile, and design systems — transforming a startup product into an enterprise-grade intelligence platform.
          </p>

          <div className={cs.metadata}>
            <div><div className={cs.metadataLabel}>Role</div><div className={cs.metadataValue}>Sr. Director of UI/UX</div></div>
            <div><div className={cs.metadataLabel}>Team</div><div className={cs.metadataValue}>3 Design + 8 Engineering</div></div>
            <div><div className={cs.metadataLabel}>Timeline</div><div className={cs.metadataValue}>2019 – 2021</div></div>
            <div><div className={cs.metadataLabel}>Platform</div><div className={cs.metadataValue}>Enterprise Web App</div></div>
            <div><div className={cs.metadataLabel}>Company</div><div className={cs.metadataValue}>Swimlane</div></div>
          </div>

          <img
            className={s.heroImage}
            src="/assets/images/swimlane/sl-dashboard.png"
            alt="Redesigned Swimlane SOAR dashboard with dark theme, data visualizations, and KPI widgets"
          />
        </section>
      </ScrollReveal>

      {/* ══════════ STRATEGIC CONTEXT ══════════ */}
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

      {/* ══════════ CONFIDENTIALITY ══════════ */}
      <ScrollReveal>
        <div className={s.confidentiality}>
          <p className={s.confidentialityText}>
            The following portfolio work is under non-disclosure agreements (NDAs). Placeholder data has been used where possible to protect the confidentiality of the product. Please refrain from sharing this content as it contains confidential design and information.
          </p>
        </div>
      </ScrollReveal>

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <ContentSection number="01 — THE PROBLEM" title="Dashboards That Didn&apos;t Dashboard">
        <div className={cs.sectionBody}>
          <p>Swimlane&apos;s existing dashboards were functional but fundamentally passive. They displayed data — incident counts, playbook execution rates, mean time to resolve — but didn&apos;t help analysts <em>act</em> on that data. The information was there, but the insight wasn&apos;t.</p>
          <p>SOC analysts would open the dashboard, scan the numbers, then navigate away to the tools where actual work happened. The dashboard was a pit stop, not a command center. At enterprise scale, with customers managing thousands of alerts per day, this disconnect between visibility and action was costing real response time.</p>
          <p>The original dashboard implementation had grown organically — widgets added per customer request, chart types chosen for technical convenience rather than analytical utility, and no cohesive information hierarchy guiding the analyst&apos;s eye from overview to detail to action.</p>
        </div>

        <ContextCards cards={[
          { type: 'before', title: 'Static Data Displays', text: 'Dashboards showed numbers without context. No drill-down capability. No connection between what the data showed and what the analyst should do next. Widget placement was arbitrary — high-priority metrics buried alongside low-signal noise. Analysts learned to ignore the dashboard and go straight to their queue.' },
          { type: 'after', title: 'Actionable Intelligence Surfaces', text: 'Dashboards reorganized around analyst workflows — overview, triage, response. Every widget connected to an action. Drill-down from any metric directly into the relevant cases or playbooks. Information hierarchy guided attention from critical alerts to trending patterns to operational health. The dashboard became the starting point, not the thing you skip.' },
        ]} />

        <div className={s.beforeAfterGrid}>
          <div className={cs.deviceCol}>
            <div className={cs.deviceColLabel}>Before</div>
            <div className={cs.fullVisual}>
              <img
                src="/assets/images/swimlane/Management-Dashboard-Resized.png"
                alt="Original Swimlane management dashboard with flat data displays and generic chart widgets"
                loading="lazy"
              />
            </div>
          </div>
          <div className={cs.deviceCol}>
            <div className={`${cs.deviceColLabel} ${cs.deviceColLabelAfter}`}>After</div>
            <div className={cs.fullVisual}>
              <img
                src="/assets/images/swimlane/Dashboard 1.png"
                alt="Redesigned Swimlane dashboard with actionable intelligence surfaces and visual hierarchy"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="From Data Display to Decision Engine">
        <div className={cs.sectionBody}>
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

      {/* ══════════ 03 — RESEARCH & DISCOVERY ══════════ */}
      <ContentSection number="03 — RESEARCH &amp; DISCOVERY" title="Design Thinking in a Cybersecurity Context">
        <div className={cs.sectionBody}>
          <p>The dashboard redesign was one of the most research-intensive projects during my time at Swimlane. Understanding how security analysts process information under stress required going beyond standard UX research — we needed to understand cognitive load in high-stakes operational environments.</p>
          <p>At the beginning of my time with Swimlane, there were no defined processes for design decisions directing the larger product. I took it upon myself to become a leader in helping educate how Design Thinking can break down problems in any complex system — practicing this approach cross-departmentally to innovate, create, and ultimately become more human-centered.</p>
        </div>

        <DesignThinkingPhases />

        <div className={s.dtCta}>
          <p className={s.dtBlurb}>
            As AI reshapes what&apos;s possible for UX teams, the design thinking process
            has evolved to match — integrating new tools while staying rooted in
            human-centered principles.
          </p>
          <a href="/articles/design-process-timeline" className={s.dtButton}>
            View Design-Led AI Process
          </a>
        </div>

        <div className={s.gallery}>
          <figure className={s.figure}>
            <img className={s.imgRounded} src="/assets/images/swimlane/freedive.png" alt="Freedive — deep-dive research and ideation session" loading="lazy" />
            <figcaption className={s.caption}>Freedive — deep-dive research and ideation session</figcaption>
          </figure>

          <div className={s.gridThreeUneven}>
            <img className={s.imgRounded} src="/assets/images/swimlane/white board-post-its.png" alt="Whiteboard session with post-it notes for workflow mapping" loading="lazy" />
            <img className={s.imgRounded} src="/assets/images/swimlane/whiteboard generic.png" alt="Whiteboard session capturing feature ideation" loading="lazy" />
            <img className={s.imgRounded} src="/assets/images/swimlane/whiteboard generic 2.png" alt="Whiteboard session with architecture sketches" loading="lazy" />
          </div>

          <div className={s.gridTwoUneven}>
            <img className={s.imgRounded} src="/assets/images/swimlane/Workflow mapping.png" alt="Workflow mapping on whiteboard with user flow diagrams" loading="lazy" />
            <img className={s.imgRounded} src="/assets/images/swimlane/whiteboard investigation.png" alt="Whiteboard investigation mapping system relationships" loading="lazy" />
          </div>

          <figure className={s.figure}>
            <img className={s.imgRounded} src="/assets/images/swimlane/large brainstorm.png" alt="Large-scale brainstorm session — full whiteboard capture" loading="lazy" />
            <figcaption className={s.caption}>Large-scale brainstorm session — full whiteboard capture</figcaption>
          </figure>
        </div>

        <DecisionCallout decisions={[
          { icon: '🎯', title: 'Three-Tier Information Hierarchy', text: 'The 30-second / 2-minute / deep-dive model emerged directly from observation. Analysts at shift change need a different view than analysts mid-incident. The dashboard needed to serve both moments without requiring navigation or configuration.' },
          { icon: '📊', title: 'Chart Types as Cognitive Tools', text: 'Replaced generic bar charts with purpose-built visualizations. Sparklines for trend detection. Heat maps for time-based pattern recognition. Donut charts for composition at a glance. Each chart type chosen for the specific cognitive task it supports — not because the charting library made it easy.' },
          { icon: '🔗', title: 'Every Metric Is a Door', text: 'The single most impactful design decision: every number on the dashboard is clickable and leads to the relevant detail. Click an incident count — see those incidents. Click a playbook success rate — see the failed executions. Zero dead ends. The dashboard becomes navigation, not just display.' },
          { icon: '🎨', title: 'Dark Theme as Functional Choice', text: 'The dark theme wasn\'t aesthetic preference — it was a functional decision for SOC environments. Analysts work in dimly lit operations centers, often monitoring multiple screens for 8-12 hour shifts. Reduced eye strain directly impacts sustained attention and error rates.' },
          { icon: '⚡', title: 'Real-Time Without Noise', text: 'Live-updating dashboards can create anxiety if every metric is constantly flickering. Designed a smart refresh system: critical alerts update immediately, trend data refreshes on a cadence, and visual transitions are smooth enough to register change without demanding attention.' },
        ]} />
      </ContentSection>

      {/* ══════════ 04 — USER RESEARCH ══════════ */}
      <ContentSection number="04 — USER RESEARCH" title="Roles, Jobs-to-be-Done, and Journey Mapping">
        <div className={cs.sectionBody}>
          <p>I prefer to think in terms of the user&apos;s role and how it relates to others they interact with through the UX, rather than traditional personas. I directed the development of Jobs-to-be-Done canvas exercises and diagrammed the different journeys users take to accomplish their tasks in the most discoverable and intuitive way.</p>
        </div>

        <div className={s.gallery}>
          <figure className={s.figure}>
            <img className={s.imgFull} src="/assets/images/swimlane/Analyst-Profile.png" alt="SOC Analyst role profile and Jobs-to-be-Done canvas" loading="lazy" />
            <figcaption className={s.caption}>SOC Analyst role profile and Jobs-to-be-Done canvas</figcaption>
          </figure>
          <div className={s.gridTwo}>
            <figure className={s.figure}>
              <img className={s.imgFull} src="/assets/images/swimlane/jtb.png" alt="Jobs-to-be-Done canvas" loading="lazy" />
              <figcaption className={s.caption}>Jobs-to-be-Done canvas</figcaption>
            </figure>
            <figure className={s.figure}>
              <img className={s.imgFull} src="/assets/images/swimlane/journey.png" alt="User journey mapping diagram" loading="lazy" />
              <figcaption className={s.caption}>User journey mapping diagram</figcaption>
            </figure>
          </div>
        </div>
      </ContentSection>

      {/* ══════════ 05 — DASHBOARDS & ANALYTICS ══════════ */}
      <ContentSection number="05 — THE SOLUTION" title="Dashboards, Analytics, and Reporting">
        <div className={cs.sectionBody}>
          <p>The final dashboard design organized around the three-tier model: a top-level status bar for the 30-second scan, a configurable widget grid for triage-level analysis, and drill-down pathways into every metric for deep-dive investigation.</p>
          <p>These features represent an enormous amount of value to the SOC team. The challenge was to deliver greater visibility into the efficacy and value of an organization&apos;s security operations investment. Dashboards had to be visually usable as well as customizable for each role. The widget system supported 12+ chart types, each purpose-built for security analytics.</p>
        </div>

        <div className={s.gallery}>
          <figure className={s.figure}>
            <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/Dashboard 1.png" alt="Swimlane SOAR Dashboard — primary overview with data visualizations and KPI widgets" loading="lazy" /></DesktopFrame>
            <figcaption className={s.caption}>Swimlane SOAR Dashboard — primary overview</figcaption>
          </figure>

          <div className={s.gridTwo}>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/Turbinie Events 1.png" alt="Turbine Events dashboard view with real-time event monitoring" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>Turbine Events — real-time monitoring</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/Turbine Dashboard2.png" alt="Turbine Dashboard with analytics and incident trend data" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>Turbine Dashboard — incident trends</figcaption>
            </figure>
          </div>

          <div className={s.gridTwo}>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/System Diagnostics 1.png" alt="System Diagnostics dashboard showing platform health metrics" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>System Diagnostics — platform health</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/Sankey Dashboard@2x.png" alt="Sankey diagram dashboard showing data flow relationships" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>Sankey diagram — data flow relationships</figcaption>
            </figure>
          </div>

          <figure className={s.figure}>
            <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/create-schedule.png" alt="Dashboard scheduling and data visualization components" loading="lazy" /></DesktopFrame>
            <figcaption className={s.caption}>Scheduling and data visualization components</figcaption>
          </figure>
        </div>

        <div className={s.badgeWrap}>
          <Badge variant="tag">Enterprise B2B</Badge>
        </div>
      </ContentSection>

      {/* ══════════ 06 — APPLICATIONS & WORKFLOW ══════════ */}
      <ContentSection number="06 — APPLICATIONS" title="Workflow, Records, and Playbooks">
        <div className={cs.sectionBody}>
          <p>Swimlane Applications are the heart of the platform, and when accompanied with Workflow and Playbook capabilities, the user journey becomes critical. I was responsible for rethinking this entire UX and UI — ensuring explorability was front and center so users could utilize features without fear of making mistakes.</p>
          <p>I also researched and designed a new navigation model and customizable incident management views, making the experience much more usable across the full range of security operations workflows.</p>
        </div>

        <div className={s.gallery}>
          <div className={s.gridTwo}>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/collections playbookspng.png" alt="Collections and Playbooks interface showing automation workflows" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>Collections and Playbooks</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/Application Records - Options.png" alt="Application Records view with data management options" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>Application Records — data management</figcaption>
            </figure>
          </div>

          <figure className={s.figure}>
            <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/App View ~ App Builder.png" alt="App View and App Builder interface for custom application creation" loading="lazy" /></DesktopFrame>
            <figcaption className={s.caption}>App View and App Builder — custom application creation</figcaption>
          </figure>

          <div className={s.gridTwo}>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/Historical Workflow Error - Select Error Action.png" alt="Historical Workflow Error handling with error action selection" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>Workflow Error — error action handling</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/EDR WidgetDemo 1.png" alt="EDR Widget Demo showing endpoint detection and response" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>EDR Widget — endpoint detection</figcaption>
            </figure>
          </div>

          <figure className={s.figure}>
            <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/Record - NonDrawer.png" alt="Record view with non-drawer layout" loading="lazy" /></DesktopFrame>
            <figcaption className={s.caption}>Record view — non-drawer layout</figcaption>
          </figure>

          <div className={s.gridTwo}>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/Cyber Winter Widgets - Dashboard.png" alt="Cyber Winter Widgets — Dashboard theme variant" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>Cyber Winter — Dashboard theme</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><img className={s.screenshotImg} src="/assets/images/swimlane/Cyber Winter Widgets - Admin 1.png" alt="Cyber Winter Widgets — Admin interface variant" loading="lazy" /></DesktopFrame>
              <figcaption className={s.caption}>Cyber Winter — Admin interface</figcaption>
            </figure>
          </div>
        </div>
      </ContentSection>

      {/* ══════════ 07 — MOBILE ══════════ */}
      <ContentSection number="07 — MOBILE" title="Mobile Innovation Prototypes">
        <div className={cs.sectionBody}>
          <p>Researching and mapping out the mobile experience was part of an innovation initiative for the design team. While not final production design, this represents the design-thinking exploration and prototyping capabilities that, through Figma, allowed us to produce clear and concise UI/UX functionality for stakeholders, engineering, customer experience teams, and most importantly our users.</p>
        </div>

        <div className={s.mobileContainer}>
          <div className={s.mobileProto}>
            <a href="https://cutt.ly/wR5kid6" target="_blank" rel="noopener noreferrer" className={s.protoLink} aria-label="View mobile prototype Option A in Figma">
              <div className={cs.deviceFrame}>
                <div className={cs.deviceNotch} />
                <div className={cs.deviceScreen}>
                  <img className={cs.deviceScreenshot} src="/assets/images/swimlane/App A.png" alt="Mobile prototype — Option A" loading="lazy" />
                </div>
              </div>
              <div className={s.playOverlay}>
                <svg className={s.playIcon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)" />
                  <path d="M26 20l20 12-20 12V20z" fill="#fff" />
                </svg>
              </div>
            </a>
            <a href="https://cutt.ly/wR5kid6" target="_blank" rel="noopener noreferrer" className={s.mobileLabel}>Option A - View Prototype</a>
          </div>
          <div className={s.mobileProto}>
            <a href="https://cutt.ly/bR5km4f" target="_blank" rel="noopener noreferrer" className={s.protoLink} aria-label="View mobile prototype Option B in Figma">
              <div className={cs.deviceFrame}>
                <div className={cs.deviceNotch} />
                <div className={cs.deviceScreen}>
                  <img className={cs.deviceScreenshot} src="/assets/images/swimlane/Application Landing ~ 1.png" alt="Mobile prototype — Option B" loading="lazy" />
                </div>
              </div>
              <div className={s.playOverlay}>
                <svg className={s.playIcon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)" />
                  <path d="M26 20l20 12-20 12V20z" fill="#fff" />
                </svg>
              </div>
            </a>
            <a href="https://cutt.ly/bR5km4f" target="_blank" rel="noopener noreferrer" className={s.mobileLabel}>Option B - View Prototype</a>
          </div>
        </div>
      </ContentSection>

      {/* ══════════ 08 — DESIGN SYSTEM ══════════ */}
      <ContentSection number="08 — DESIGN SYSTEM" title="Building the Visual Language">
        <div className={cs.sectionBody}>
          <p>As the Swimlane platform expanded in capability, I noticed many common UI patterns used in multiple places but not being globally managed. I led the direction of the design system and contributed to the majority of the design represented there — then used the system to train other team members to think in reusable master design components.</p>
          <p>Our library reduced large amounts of time needed to quickly mock up and design high-fidelity prototypes as well as final polished handoffs to the engineering teams. This system gave Swimlane a true visual design language.</p>
        </div>

        <div className={s.gallery}>
          <figure className={s.figure}>
            <img className={s.imgFull} src="/assets/images/swimlane/Design System.png" alt="Swimlane design system — component library overview" loading="lazy" />
            <figcaption className={s.caption}>Swimlane design system — component library overview</figcaption>
          </figure>
        </div>
      </ContentSection>

      {/* ══════════ 09 — THE RESULTS ══════════ */}
      <ContentSection number="09 — THE RESULTS" title="From Ignored to Indispensable">
        <div className={cs.sectionBody}>
          <p>The redesigned dashboards transformed from a feature analysts skipped to the first thing they opened at the start of every shift. The impact was measurable across every customer deployment — reduced time-to-insight, faster incident response, and significantly higher dashboard engagement.</p>
          <p>More importantly, the dashboard became a sales differentiator. During competitive evaluations, Swimlane&apos;s dashboard experience consistently outscored competitors — customers cited the &ldquo;actionable intelligence&rdquo; design as a key factor in platform selection. What started as a UX improvement became a revenue driver.</p>
        </div>

        <ResultsGrid results={[
          { metric: '60%', label: 'Reduction in time-to-insight', context: 'From opening the dashboard to identifying what needs attention', featured: true },
          { metric: '3x', label: 'Dashboard engagement increase', context: 'Analysts using dashboards as primary workspace vs. bypassing' },
          { metric: '12+', label: 'Purpose-built widget types', context: 'Each designed for a specific security analytics task' },
          { metric: 'Top', label: 'Competitive differentiator', context: 'Cited in win/loss analysis as key selection factor' },
          { metric: '40%', label: 'Faster shift handoffs', context: 'Incoming analysts could assess situation in 30 seconds vs. 5+ minutes' },
          { metric: '100+', label: 'Design system components', context: 'Reusable component library powering the entire platform' },
        ]} />
      </ContentSection>

      {/* ══════════ 10 — THE LEARNING ══════════ */}
      <ContentSection number="10 — THE LEARNING" title="Dashboards Are Workflows, Not Reports">
        <div className={cs.sectionBody}>
          <p>The biggest lesson from this project: a dashboard that doesn&apos;t connect to action is just a pretty screensaver. The shift from &ldquo;data display&rdquo; to &ldquo;decision support&rdquo; seems obvious in retrospect, but it required fundamentally rethinking what a dashboard is <em>for</em>.</p>
          <p>The embedded research approach — sitting with analysts during actual incidents, not just conducting interviews — revealed patterns that no survey or analytics tool could surface. Watching someone&apos;s eyes scan a dashboard during a live security event tells you everything about information hierarchy that a heatmap study cannot.</p>
          <p>This project also established the design methodology I&apos;d carry forward: observe the real workflow, design for the decision (not the data), and validate with people doing the actual work under actual pressure. Design for the stress case, not the demo case.</p>
        </div>

        <PullQuote
          text="A dashboard that doesn't connect to action is just a pretty screensaver. Design for the decision, not the data."
          attr="Reflection — Swimlane SOAR Platform"
        />
      </ContentSection>

      {/* ══════════ NEXT STUDY ══════════ */}
      <NextStudy
        prevHref="/case-study/cashback"
        prevTitle="Cash Back"
        href="/case-study/rba"
        title="Authentication Redesign Under Pressure"
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
