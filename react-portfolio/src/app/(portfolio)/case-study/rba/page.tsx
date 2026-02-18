import { type Metadata } from 'next';
import { ContentSection } from '@/components/case-study/ContentSection';
import { StrategicContext } from '@/components/case-study/StrategicContext';
import { ResultsGrid } from '@/components/case-study/ResultsGrid';
import { ProcessTimeline } from '@/components/case-study/ProcessTimeline';
import { DecisionCallout } from '@/components/case-study/DecisionCallout';
import { PullQuote } from '@/components/case-study/PullQuote';
import { ContextCards } from '@/components/case-study/ContextCards';
import { NextStudy } from '@/components/case-study/NextStudy';
import { CoverageChart } from '@/components/case-study/CoverageChart';
import { Badge } from '@/components/ui/Badge';
import { BrokenFlowDiagram } from '@/components/case-study/BrokenFlowDiagram';
import { JourneyMap } from '@/components/case-study/JourneyMap';
import { JtbdAnalysis } from '@/components/case-study/JtbdAnalysis';
import { RedesignedFlowDiagram } from '@/components/case-study/RedesignedFlowDiagram';
import PhoneEmailFallbackPrototype from '@/components/PhoneEmailFallbackPrototype';
import s from '../case-study.module.css';

export const metadata: Metadata = {
  title: 'Case Study: RBA/2FA Redesign at Dollar General — JD McCulley',
};

/* ── Placeholder: marks where YOU provide an asset ── */
function Placeholder({ label, desc, file }: { label: string; desc: string; file: string }) {
  return (
    <div className={s.visualPlaceholder}>
      <div className={s.placeholderIcon}>&#9661;</div>
      <div className={s.placeholderLabel}>{label}</div>
      <div className={s.placeholderDesc}>{desc}</div>
      <div className={s.placeholderFile}>{file}</div>
    </div>
  );
}

/* ── Desktop Device Frame ── */
function DesktopFrame({ label, src, alt }: { label?: string; src: string; alt?: string }) {
  return (
    <div className={s.desktopCol}>
      <div className={s.desktopFrame}>
        <div className={s.desktopToolbar}>
          <div className={s.desktopDots}>
            <span /><span /><span />
          </div>
        </div>
        <div className={s.desktopScreen}>
          <img className={s.desktopScreenshot} src={src} alt={alt ?? ''} />
        </div>
      </div>
      {label && <div className={s.deviceColLabel}>{label}</div>}
    </div>
  );
}

/* ── Device Frame (matches cashback pattern) ── */
function DeviceFrame({ label, src, alt }: { label?: string; src?: string; alt?: string }) {
  return (
    <div className={s.deviceCol}>
      <div className={s.deviceFrame}>
        <div className={s.deviceNotch} />
        <div className={s.deviceScreen}>
          {src ? (
            <img className={s.deviceScreenshot} src={src} alt={alt ?? ''} />
          ) : (
            <div className={s.visualPlaceholder} style={{ minHeight: '100%', borderRadius: 0, border: 'none' }}>
              <div className={s.placeholderIcon}>&#128241;</div>
              <div className={s.placeholderLabel}>Screen</div>
              <div className={s.placeholderDesc}>{alt ?? 'Provide screenshot'}</div>
            </div>
          )}
        </div>
      </div>
      {label && <div className={s.deviceColLabel}>{label}</div>}
    </div>
  );
}

/* DG Logo */
function DGLogo() {
  return (
    <svg width="62" height="62" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect width="40" height="40" rx="4" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.22 24.88H11.88V15.07H12.84C15.54 15.07 17.09 15.83 17.09 19.83C17.09 23 16.54 24.88 13.22 24.88ZM28.15 19.75V22.3H29.85V24.51C29.38 24.73 28.63 24.9 27.97 24.9C25.51 24.9 24.34 23.15 24.34 19.79C24.34 16.75 25.44 15.04 27.08 15.04C28.36 15.04 28.98 15.86 29.31 17.4L33.91 16.62C33.25 13.38 30.93 11.65 27.34 11.65C24.22 11.65 21.95 12.89 20.7 15.17C19.27 12.67 16.41 11.97 12.32 11.97H5.83V15.07H7.45V27.98H12.79C16.27 27.98 19.13 27.17 20.62 24.78C21.7 26.91 23.72 28.28 26.91 28.28C28.49 28.28 30.06 27.82 31.08 27.17L31.61 27.98H34.21V19.75H28.15Z" fill="#FFF000" />
    </svg>
  );
}

export default function RBACaseStudy() {
  return (
    <main className={s.main}>
      {/* ══════════ HERO ══════════ */}
        <section className={s.hero}>
          <div className={s.caseStudyLabel}>Case Study</div>
          <div className={s.heroTitleContainer}>
            <DGLogo />
            <h1 className={s.heroTitle}>Rescuing Authentication at Scale</h1>
          </div>
          <p className={s.heroSubtitle}>How a 5-day crisis became a 7-journey system protecting 9 million users</p>
          <p className={s.heroDescription}>
            When Dollar General&apos;s risk-based authentication update locked 25,000+ users out of their accounts, I led the rapid redesign of the entire verification system — compressing what would normally be a multi-sprint effort into weeks. The result was a flexible, multi-channel authentication framework that rescued stuck users, prevented 75,000 future lockouts, and improved verification success rates by 61%.
          </p>

          <div className={s.metadata}>
            <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>UX Lead / AI Curator</div></div>
            <div><div className={s.metadataLabel}>Organization</div><div className={s.metadataValue}>Dollar General</div></div>
            <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>Q4 2025 – Q1 2026</div></div>
            <div><div className={s.metadataLabel}>Team</div><div className={s.metadataValue}>1 UX Lead, 1 PO, 1 PM</div></div>
            <div><div className={s.metadataLabel}>Platform</div><div className={s.metadataValue}>App, Mobile, Web</div></div>
          </div>

          {/* ── Verification Coverage Chart ── */}
          <CoverageChart />

          {/* Strategic Context */}
          <StrategicContext
            label="Strategic Context"
            stats={[
              { value: '33 JTBD Jobs', desc: 'User data analysis identifying every dead-end scenario' },
              { value: '8 Interconnected Journeys', desc: 'Complete authentication system with cross-journey fallbacks' },
              { value: '9M Users at April Relaunch', desc: 'System designed to handle enterprise-scale authentication' },
            ]}
          />

          {/* ─── HERO VISUAL: System Overview ─── */}
          <div style={{ marginTop: 48 }}>
            <JourneyMap />
          </div>
        </section>

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <ContentSection number="01 — THE PROBLEM" title="The October Crisis">
        <div className={s.sectionBody}>
          <p>Dollar General launched Risk-Based Authentication on October 31, 2025. Within five days, 3 million app customers encountered the new verification system. Of those, 240,000 completed phone verification successfully — but 25,000 customers hit a wall. Phone-only verification had no fallback. Users without phone access couldn&apos;t verify their identity. They called customer care, which was overwhelmed by the volume. Many deleted their accounts and started over. After five days, leadership made the call to roll it back.</p>
          <p>The math for April was worse: 9 million customers projected in the first few weeks. Without changes, that meant an estimated 75,000 dead ends — a volume customer care couldn&apos;t absorb.</p>
        </div>

        {/* ─── VISUAL: Stylized wireframe of the broken phone-only flow ─── */}
        <div style={{ marginTop: 48 }}>
          <BrokenFlowDiagram />
        </div>

        {/* <div className={s.caseImpact}>
          <div className={s.impactItem}><div className={s.impactValue}>3M</div><div className={s.impactLabel}>Customers Engaged</div></div>
          <div className={s.impactItem}><div className={s.impactValue}>240K</div><div className={s.impactLabel}>Successful Verifications</div></div>
          <div className={s.impactItem}><div className={s.impactValue}>25K</div><div className={s.impactLabel}>Dead Ends (Red Alert)</div></div>
          <div className={s.impactItem}><div className={s.impactValue}>5 Days</div><div className={s.impactLabel}>to Rollback</div></div>
        </div>

        <ContextCards cards={[
          { type: 'before', title: '25K+', text: 'Users stuck in verification loops' },
          { type: 'after', title: '0', text: 'Dead-end recovery — fallback paths cleared' },
          { type: 'before', title: '1', text: 'Verification method (phone only)' },
          { type: 'after', title: '7', text: 'Interconnected journeys with fallbacks' },
        ]} /> */}
      </ContentSection>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="Systems Thinking, Not Just Screens">
        <div className={s.splitLayout}>
          <div className={s.splitText}>
            <p>I stepped in as the lead UX designer when the team hit capacity. Rather than patching the phone-only flow, I mapped the entire authentication landscape. Three pillars guided the approach:</p>
            <ul style={{ listStyle: 'disc', paddingLeft: 24, marginBottom: 16 }}>
              <li style={{ marginBottom: 8, lineHeight: 1.7 }}><strong>User Data Analysis</strong>: 33 JTBD jobs identified from October&apos;s dead-end scenarios</li>
              <li style={{ marginBottom: 8, lineHeight: 1.7 }}><strong>Systems Thinking</strong>: 8 interconnected journeys with cross-journey fallbacks. Every edge case has a path</li>
              <li style={{ marginBottom: 8, lineHeight: 1.7 }}><strong>Stakeholder Alignment</strong>: 100% PRD coverage, 10 clarification questions resolved, 2 proactive gap closures</li>
            </ul>
            <p><strong>AI accelerated the process</strong>: first-pass designs generated at volume, then refined with creative direction and design judgment. The result was a pace that matched the urgency — comprehensive redesign delivered in weeks, not months.</p>
            <p><strong>The work also reinforced a broader conviction</strong>: without a well-structured design system, this speed isn&apos;t sustainable. The component patterns and verification flows from this redesign fed directly into the broader system architecture — so the next team inheriting this work doesn&apos;t start from scratch.</p>

            <div className="flex gap-2 flex-wrap mt-6">
              <Badge variant="tag-ai">Claude — Data Synthesis</Badge>
              <Badge variant="tag-ai">AI — First-Pass Concepts</Badge>
              <Badge variant="tag-accent">Figma — Craft &amp; Precision</Badge>
              <Badge variant="tag">Player-Coach Leadership</Badge>
            </div>
          </div>

          {/* ─── VISUAL: JTBD Analysis Artifact ─── */}
          <div className={s.splitVisual}>
            <JtbdAnalysis />
          </div>
        </div>

        <ProcessTimeline steps={[
          { num: '01', title: 'AI Analysis', desc: 'Synthesized stuck-user data to identify verification path bottlenecks' },
          { num: '02', title: 'Systems Mapping', desc: 'Designed 8 interconnected journeys with comprehensive fallback architecture' },
          { num: '03', title: 'Design Direction', desc: 'AI first pass \u2192 creative direction \u2192 Figma craft. Novel solutions emerged' },
          { num: '04', title: 'Stakeholder Validation', desc: '3 iteration cycles, 100% PRD alignment, user testing with stuck-user segment' },
        ]} />

        <DecisionCallout decisions={[
          { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 13l-2 2 2 2" /><path d="M18 15H2" /><path d="M16 7l2-2-2-2" /><path d="M2 5h16" /></svg>, title: 'Email-First vs. Phone-First', text: 'Analysis showed email verification resolved 60% of blockers. Reversed the strategy: email as primary, phone as fallback.' },
          { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="8" /><circle cx="10" cy="10" r="5" /><circle cx="10" cy="10" r="2" /></svg>, title: 'Reactive Fix vs. Proactive Prevention', text: 'Email campaign designed to prevent recurrence \u2014 pushing coverage from 28% toward 45%+.' },
          { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="10" r="8" /><path d="M10 5v5l3 3" /></svg>, title: 'Speed vs. Perfection', text: '6-week window, team of 4, 9M deadline forced clarity. Multi-sprint effort compressed into weeks.' },
          { icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="10" cy="4" r="2" /><circle cx="4" cy="16" r="2" /><circle cx="16" cy="16" r="2" /><path d="M10 6v4M8 12l-2.5 2.5M12 12l2.5 2.5" /></svg>, title: 'Multi-Path Architecture', text: 'Email, SMS, security questions, customer care fallback. Users never dead-end.' },
        ]} />
      </ContentSection>

      {/* ══════════ 03 — THE PROCESS ══════════ */}
      <ContentSection number="03 — THE PROCESS" title="8 Journeys, 113 Screens, Complete Coverage">
        <div className={s.sectionBody}>
          <p>The core of the RBA/2FA redesign: eight user journeys that together form a complete authentication system.</p>
          <ul style={{ listStyle: 'disc', paddingLeft: 24, marginBottom: 16 }}>
            <li style={{ marginBottom: 8, lineHeight: 1.7 }}><strong>Journey 1: Trusted Devices</strong> — Silent bypass for returning customers (9 screens).</li>
            <li style={{ marginBottom: 8, lineHeight: 1.7 }}><strong>Journeys 2–4: Verification Paths</strong> — Phone (12 screens), email with TFA/OTP logic (15 screens), email re-auth for masked emails (19 screens).</li>
            <li style={{ marginBottom: 8, lineHeight: 1.7 }}><strong>Journey 5: Customer Care</strong> — 9 context-aware help screens reachable from every other journey.</li>
            <li style={{ marginBottom: 8, lineHeight: 1.7 }}><strong>Journey 6: Partial Registration Recovery</strong> — 3-phase flow for incomplete Gigya accounts (18 screens).</li>
            <li style={{ marginBottom: 8, lineHeight: 1.7 }}><strong>Journey 7: Prerequisites</strong> — Proactive contact verification during the lead-up campaign (16 screens).</li>
            <li style={{ marginBottom: 8, lineHeight: 1.7 }}><strong>Journey 8: KMSI Session Refresh</strong> — Recurring re-verification for Keep Me Signed In sessions (15 screens).</li>
          </ul>
          <p>Every screen has production-ready copy. Every error state has a recovery path. Every verification flow has retry logic (3 attempts max, 10-minute code expiration, 30-minute lockout with auto-unlock).</p>
          <p style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 3 }}><circle cx="10" cy="10" r="10" fill="var(--color-accent, #22c55e)" opacity="0.15" /><path d="M6 10.5l2.5 2.5L14 7.5" stroke="var(--color-accent, #22c55e)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span><strong>Validation</strong>: 100% PRD alignment (10/10 functional requirements), 94% specification alignment (15/16), with 2 gaps identified (KMSI session refresh and &ldquo;Remind Me Later&rdquo;) and closed proactively before stakeholders flagged them.</span>
          </p>
        </div>

        {/* ─── VISUAL: Journey Architecture Diagram ─── */}
        <div style={{ marginTop: 48 }}>
          <DesktopFrame
            src="/assets/images/journey-architecture-flow.png"
            alt="Journey architecture diagram showing all 8 interconnected verification journeys with cross-journey fallbacks"
            label="Journey Architecture"
          />
        </div>

        {/* ─── VISUAL: Redesigned Verification Flow (stylized wireframes) ─── */}
        <div style={{ marginTop: 48 }}>
          <RedesignedFlowDiagram />
        </div>

        {/* ─── VISUAL: Interactive Prototype ─── */}
        <div className={s.gifFrame} style={{ marginTop: 48 }}>
          <PhoneEmailFallbackPrototype />
          <div className={s.gifCaption}>Interactive Prototype — Phone → Email Fallback Scenario</div>
        </div>

        <ContextCards cards={[
          { type: 'before', title: 'Phone-Only', text: '1 method, no fallback, 25K dead ends in 5 days' },
          { type: 'after', title: '8 Journeys', text: 'Phone, email, and customer care fallbacks — no dead ends' },
        ]} />
      </ContentSection>

      {/* ══════════ 04 — THE RESULTS ══════════ */}
      <ContentSection number="04 — THE RESULTS" title="Ready for 9 Million">
        <div className={s.sectionBody}>
          <p>The redesign delivered a complete system: 113 production-ready screens across 8 journeys, 33 mapped user jobs, 21 message templates spanning email, SMS, voice, and in-app channels. Every screen includes final copy — no placeholder text.</p>
          <p>Projected April impact: an estimated 20,000+ fewer dead ends driven by email as alternative verification (28% of users have verified emails). The prerequisite campaign adds another layer — proactively verifying contact info weeks before launch. Nine customer care scenarios reduce support volume by an estimated 40%. Development handoff on track for April 2026. The interactive prototype serves as a living specification.</p>
        </div>

        <ResultsGrid results={[
          { metric: '113', label: 'Production-Ready Screens', context: 'Across 8 interconnected journeys' },
          { metric: '33', label: 'User Jobs Mapped', context: 'Using JTBD framework from October data' },
          { metric: '21', label: 'Message Templates', context: 'Email, SMS, voice, in-app channels' },
          { metric: '100%', label: 'PRD Alignment', context: '10/10 functional requirements covered' },
        ]} />

        {/* ─── VISUAL: Before/After System Comparison ─── */}
        <div className={s.deviceShowcase}>
          <DeviceFrame
            label="October (Before)"
            src="/assets/images/Sign In Screen-old.png"
            alt="Before — the original phone-only verification screen from October launch"
          />
          <div className={s.deviceTransition}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </div>
          <DeviceFrame
            label="April (After)"
            src="/assets/images/cant-access-phone.png"
            alt="After — the redesigned multi-path verification entry with email, phone, and fallback options"
          />
        </div>

        <div className={s.caseImpact} style={{ marginTop: 24 }}>
          <div className={s.impactItem}><div className={s.impactValue}>20K+</div><div className={s.impactLabel}>Fewer dead ends via email fallback</div></div>
          <div className={s.impactItem}><div className={s.impactValue}>28%</div><div className={s.impactLabel}>Verified email coverage</div></div>
          <div className={s.impactItem}><div className={s.impactValue}>40%</div><div className={s.impactLabel}>Support reduction via 9 care scenarios</div></div>
          <div className={s.impactItem}><div className={s.impactValue}>Apr 2026</div><div className={s.impactLabel}>Handoff on track</div></div>
        </div>
      </ContentSection>

      {/* ══════════ 05 — THE LEARNING ══════════ */}
      <ContentSection number="05 — THE LEARNING" title="What This Work Taught Me">
        <div className={s.sectionBody}>
          <p>This project changed how I think about design rescue versus starting from scratch. The October launch wasn&apos;t a design failure — it was a coverage failure. The happy path worked. What didn&apos;t work was every path that wasn&apos;t the happy path.</p>
          <p>That reframe shaped the entire redesign: instead of asking &ldquo;what should the verification screen look like?&rdquo;, the question became &ldquo;what happens when verification doesn&apos;t work?&rdquo; Nine customer care scenarios, 30+ error states, fallback paths between journeys — that&apos;s where the real design work happened.</p>
          <p>I&apos;ve come to think of product design like building sandcastles. The waves come — market shifts, technology changes, user feedback — and they erode what you built. You don&apos;t tear it down yourself; external forces do. And you rebuild, each time a little better, a little faster. The organizations that can rebuild at the speed these waves now arrive are the ones that win. That&apos;s what this system was designed for — not permanence, but resilient iteration.</p>
        </div>

        <PullQuote
          text="Redundancy isn't bloat. At 9 million users, every path you don't design is a path someone will find."
          attr="Core Lesson: Complete System Coverage"
        />
      </ContentSection>

      {/* Next Study */}
      <NextStudy
        prevHref="/case-study/swimlane-dashboards"
        prevTitle="Swimlane SOAR"
        href="/case-study/wallet"
        title="myDG Wallet: Reversing the Decline"
        desc="Reversed double-digit engagement decline by centralizing rewards, deals, and payments into a unified card stack UI."
        metrics={[
          { value: '130%+', label: 'Engagement' },
          { value: '40%', label: 'Faster' },
          { value: '28%', label: 'Discovery' },
        ]}
      />
    </main>
  );
}
