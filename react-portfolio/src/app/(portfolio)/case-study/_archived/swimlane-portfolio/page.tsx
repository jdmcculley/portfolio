import React from 'react';
import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { NextStudy } from '@/components/case-study/NextStudy';
import cs from '../case-study.module.css';
import s from './swimlane-portfolio.module.css';

export const metadata: Metadata = {
  title: 'Swimlane Portfolio — UI/UX Design Work | JD McCulley',
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
              <svg className={s.dtArrow} viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── Image component — renders real img or placeholder ── */
function Img({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  // When the user drops in real images, these will render.
  // Until then, show a labeled placeholder.
  return (
    <img
      src={src}
      alt={alt}
      className={className || s.imgFull}
      loading="lazy"
    />
  );
}

/* ── Desktop browser frame (matches other case studies) ── */
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

export default function SwimlanePortfolio() {
  return (
    <>
    <main className={s.main}>

      {/* ══════════ HEADER ══════════ */}
      <ScrollReveal>
        <header className={s.header}>
          <div className={s.headerTop}>
            <img className={s.logo} src="/assets/images/swimlane/swimlane-logo.png" alt="Swimlane logo" width="204" height="153" />
            <div className={s.headerText}>
              <h1 className={s.companyName}>Swimlane</h1>
              <p className={s.companyDesc}>
                Swimlane is a Security Orchestration Automation and Response (SOAR) platform.
                My role in Swimlane began 4+ years ago when they were in startup mode. I wore
                many hats, from designing the current logo and a fair share of marketing
                collateral while at the same time re-designing the product itself. The following
                work represents the results of a very challenging yet profitable growth in the
                UI/UX of data visualization and the cybersecurity roles and their
                &ldquo;Jobs-to-be-Done.&rdquo;
              </p>
            </div>
          </div>
        </header>
      </ScrollReveal>

      {/* ══════════ CONFIDENTIALITY ══════════ */}
      <section className={s.confidentiality}>
        <div className={`${cs.sectionHeader} ${s.sectionHeaderBright}`}>
          <div className={cs.sectionDivider} />
        </div>
        <h2 className={cs.sectionTitle}>Confidentiality</h2>
        <p className={s.confidentialityText}>
          The following portfolio work is under non-disclosure agreements (NDAs). As such,
          I have tried to use placeholder data in almost all the design to protect the
          confidentiality of the product. Please refrain from sharing this portfolio since
          it contains some confidential design and information.
        </p>
      </section>

      {/* ══════════ DASHBOARDS, ANALYTICS & REPORTING ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={`${cs.sectionHeader} ${s.sectionHeaderBright}`}>
            <div className={cs.sectionDivider} />
          </div>
          <h2 className={cs.sectionTitle}>Dashboards, Analytics, and Reporting</h2>
          <p className={s.sectionDesc}>
            These features of the product represent an enormous amount of value to the SOC
            team. The challenge here was to deliver greater visibility into the efficacy and
            value of an organization&apos;s security operations investment. Dashboards must be
            visually usable as well as customizable for each role. I directed and designed
            these efforts using a human-centered design process to arrive at many data-driven
            charts, graphs, and custom views to produce the overall UX and UI.
          </p>

          <div className={s.gallery}>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/Dashboard 1.png" alt="Swimlane SOAR Dashboard — primary overview with data visualizations and KPI widgets" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Swimlane SOAR Dashboard — primary overview with data visualizations and KPI widgets</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/Turbinie Events 1.png" alt="Turbine Events dashboard view with real-time event monitoring" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Turbine Events dashboard view with real-time event monitoring</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/Turbine Dashboard2.png" alt="Turbine Dashboard with analytics and incident trend data" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Turbine Dashboard with analytics and incident trend data</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/System Diagnostics 1.png" alt="System Diagnostics dashboard showing platform health metrics" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>System Diagnostics dashboard showing platform health metrics</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/Sankey Dashboard@2x.png" alt="Sankey diagram dashboard showing data flow relationships" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Sankey diagram dashboard showing data flow relationships</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/create-schedule.png" alt="Dashboard charts and data visualization components" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Dashboard charts and data visualization components</figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════ APPLICATIONS, WORKFLOW & RECORDS ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={`${cs.sectionHeader} ${s.sectionHeaderBright}`}>
            <div className={cs.sectionDivider} />
          </div>
          <h2 className={cs.sectionTitle}>Applications, Workflow, and Records</h2>
          <p className={s.sectionDesc}>
            Swimlane Applications are the heart of the platform, and when accompanied with
            Workflow and Playbook capabilities, the user journey becomes critical. I was
            responsible for &ldquo;re-thinking&rdquo; this entire UX and UI to achieve this goal.
            Explorability for the user was front and center for me, ensuring that the user can
            utilize the features without fear of making mistakes. I also researched and
            designed a new navigation model and customizable incident management views making
            the experience much more usable.
          </p>

          <div className={s.gallery}>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/collections playbookspng.png" alt="Collections and Playbooks interface showing automation workflows" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Collections and Playbooks interface showing automation workflows</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/Application Records - Options.png" alt="Application Records view with data management options" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Application Records view with data management options</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/App View ~ App Builder.png" alt="App View and App Builder interface for custom application creation" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>App View and App Builder interface for custom application creation</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/Historical Workflow Error - Select Error Action.png" alt="Historical Workflow Error handling — select error action" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Historical Workflow Error handling — select error action</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/EDR WidgetDemo 1.png" alt="EDR Widget Demo showing endpoint detection and response" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>EDR Widget Demo showing endpoint detection and response</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/Record - NonDrawer.png" alt="Record view with non-drawer layout" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Record view with non-drawer layout</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/Cyber Winter Widgets - Dashboard.png" alt="Cyber Winter Widgets — Dashboard theme variant" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Cyber Winter Widgets — Dashboard theme variant</figcaption>
            </figure>
            <figure className={s.figure}>
              <DesktopFrame><Img src="/assets/images/swimlane/Cyber Winter Widgets - Admin 1.png" alt="Cyber Winter Widgets — Admin interface variant" className={s.screenshotImg} /></DesktopFrame>
              <figcaption className={s.caption}>Cyber Winter Widgets — Admin interface variant</figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════ MOBILE ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={`${cs.sectionHeader} ${s.sectionHeaderBright}`}>
            <div className={cs.sectionDivider} />
          </div>
          <h2 className={cs.sectionTitle}>Mobile</h2>
          <p className={s.sectionDesc}>
            Researching and mapping out the mobile experience was part of an innovation
            initiative for the design team. While this is not final design it does represent
            the design-thinking exploration and prototyping capabilities that, through Figma,
            we were able to produce clear and concise UI/UX functionality to stakeholder,
            engineering, customer experience teams, and most importantly with our users.
          </p>

          <div className={s.mobileContainer}>
            <div className={s.mobileProto}>
              <a href="https://cutt.ly/wR5kid6" target="_blank" rel="noopener noreferrer" className={s.protoLink}>
                <div className={cs.deviceFrame}>
                  <div className={cs.deviceNotch} />
                  <div className={cs.deviceScreen}>
                    <img className={cs.deviceScreenshot} src="/assets/images/swimlane/App A.png" alt="Mobile prototype — Option A" />
                  </div>
                </div>
                <div className={s.playOverlay}>
                  <svg className={s.playIcon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)" />
                    <path d="M26 20l20 12-20 12V20z" fill="#fff" />
                  </svg>
                </div>
              </a>
              <a href="https://cutt.ly/wR5kid6" target="_blank" rel="noopener noreferrer" className={s.mobileLabel}>Option A - View Prototype</a>
            </div>
            <div className={s.mobileProto}>
              <a href="https://cutt.ly/bR5km4f" target="_blank" rel="noopener noreferrer" className={s.protoLink}>
                <div className={cs.deviceFrame}>
                  <div className={cs.deviceNotch} />
                  <div className={cs.deviceScreen}>
                    <img className={cs.deviceScreenshot} src="/assets/images/swimlane/Application Landing ~ 1.png" alt="Mobile prototype — Option B" />
                  </div>
                </div>
                <div className={s.playOverlay}>
                  <svg className={s.playIcon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.55)" />
                    <path d="M26 20l20 12-20 12V20z" fill="#fff" />
                  </svg>
                </div>
              </a>
              <a href="https://cutt.ly/bR5km4f" target="_blank" rel="noopener noreferrer" className={s.mobileLabel}>Option B - View Prototype</a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════ DESIGN THINKING ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={`${cs.sectionHeader} ${s.sectionHeaderBright}`}>
            <div className={cs.sectionDivider} />
          </div>
          <h2 className={cs.sectionTitle}>Design Thinking</h2>
          <p className={s.sectionDesc}>
            At the beginning of my time with Swimlane, there were no defined processes for the
            design decisions that directed the larger product. I took it upon myself to become a
            leader in helping to educate how Design Thinking can be used to break down problems
            in any complex system. I practice this approach cross-departmentally to innovate,
            create, and ultimately become more human.
          </p>

          <div className={s.gallery}>
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
            <figure className={s.figure}>
              <Img src="/assets/images/swimlane/freedive.png" alt="Freedive — deep-dive research and ideation session" />
              <figcaption className={s.caption}>Freedive — deep-dive research and ideation session</figcaption>
            </figure>

            {/* 3-up whiteboard photos */}
            <div className={s.gridThreeUneven}>
              <Img src="/assets/images/swimlane/white board-post-its.png" alt="Whiteboard session — workflow mapping" />
              <Img src="/assets/images/swimlane/whiteboard generic.png" alt="Whiteboard session — feature ideation" />
              <Img src="/assets/images/swimlane/whiteboard generic 2.png" alt="Whiteboard session — architecture sketches" />
            </div>

            {/* 2-up whiteboard photos */}
            <div className={s.gridTwoUneven}>
              <Img src="/assets/images/swimlane/Workflow mapping.png" alt="Whiteboard brainstorm — user flows" />
              <Img src="/assets/images/swimlane/whiteboard investigation.png" alt="Whiteboard brainstorm — system mapping" />
            </div>

            <figure className={s.figure}>
              <Img src="/assets/images/swimlane/large brainstorm.png" alt="Large-scale brainstorm session — full whiteboard capture" />
              <figcaption className={s.caption}>Large-scale brainstorm session — full whiteboard capture</figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════ USER ROLES & JOURNEY MAPPING ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={`${cs.sectionHeader} ${s.sectionHeaderBright}`}>
            <div className={cs.sectionDivider} />
          </div>
          <h2 className={cs.sectionTitle}>User Roles (Jobs-to-be-Done), and Journey Mapping</h2>
          <p className={s.sectionDesc}>
            The term persona has been used in the design industry for years but, I prefer to
            think in terms of the user&apos;s role and how it relates to others they interact with
            through the UX. I helped direct the development of the Jobs-to-be-Done canvas
            exercises and also diagram the different journeys that our users take to accomplish
            their tasks in the most discoverable and intuitive way.
          </p>

          <div className={s.gallery}>
            <figure className={s.figure}>
              <Img src="/assets/images/swimlane/Analyst-Profile.png" alt="SOC Analyst role profile and Jobs-to-be-Done canvas" />
              <figcaption className={s.caption}>SOC Analyst role profile and Jobs-to-be-Done canvas</figcaption>
            </figure>
            <figure className={s.figure}>
              <Img src="/assets/images/swimlane/jtb.png" alt="Jobs-to-be-Done canvas" />
              <figcaption className={s.caption}>Jobs-to-be-Done canvas</figcaption>
            </figure>
            <figure className={s.figure}>
              <Img src="/assets/images/swimlane/journey.png" alt="User journey mapping diagram" />
              <figcaption className={s.caption}>User journey mapping diagram</figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════ DESIGN SYSTEM ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={`${cs.sectionHeader} ${s.sectionHeaderBright}`}>
            <div className={cs.sectionDivider} />
          </div>
          <h2 className={cs.sectionTitle}>Design System</h2>
          <p className={s.sectionDesc}>
            As the Swimlane platform began to expand in capability, I noticed many common UI
            patterns used in multiple places but not being globally managed. I lead in the
            direction of the design system and contributed to the majority of the design
            represented there. I then used the system to train other team members to think of
            re-usable master design components. Our library is growing daily and has reduced
            large amounts of time needed to quickly mock-up and design high-fi prototypes as
            well as final polished handoffs to the engineering teams. This system has proven to
            give Swimlane a true visual design language.
          </p>
          <p className={s.sectionDesc} style={{ marginTop: -16 }}>
            While the image below doesn&apos;t clearly show all the elements individually, I wanted
            to show the depth of what has been organized and now published to the designs and
            now managed by this system.
          </p>

          <div className={s.gallery}>
            <figure className={s.figure}>
              <Img src="/assets/images/swimlane/Design System.png" alt="Swimlane design system — component library overview" />
              <figcaption className={s.caption}>Swimlane design system — component library overview</figcaption>
            </figure>
          </div>
        </section>
      </ScrollReveal>

    </main>

      {/* ══════════ NEXT STUDY ══════════ */}
      <NextStudy
        href="/case-study/swimlane"
        title="Swimlane SOAR — Dashboard Redesign"
        desc="How I redesigned the Swimlane SOAR platform's dashboard experience to deliver actionable data visualization for security operations teams."
        metrics={[
          { value: '4+ Years', label: 'Design Lead' },
          { value: '6', label: 'Major Features' },
          { value: '100+', label: 'Components' },
        ]}
      />
    </>
  );
}
