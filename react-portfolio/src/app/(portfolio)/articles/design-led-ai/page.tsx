import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SmoothAnchor } from '@/components/ui/SmoothAnchor';
import { Container } from '@/components/layout/Container';
import clsx from 'clsx';
import s from '../articles.module.css';
import { CaseStudyButton } from './CaseStudyButton';

export const metadata: Metadata = {
  title: 'Design-Led AI in Practice — JD McCulley',
  openGraph: { images: [{ url: '/api/og/?page=design-led-ai', width: 1200, height: 630 }] },
};

export default function AIDesignTrendsArticle() {
  return (
    <main>
      {/* ══════════ HERO ══════════ */}
      <section className={s.hero}>
        <Container>
          <div className={s.heroGrid}>
            {/* Left */}
            <ScrollReveal>
              <div>
                <div className={s.heroBadge}>
                  <span className={s.heroPulse} />
                  DESIGN-LED AI IN PRACTICE
                </div>
                <h1 className={s.heroTitle}>
                  Creative Director<br />
                  of <span className={s.gradientText}>AI-Augmented</span><br />
                  Output
                </h1>
                <p className={s.heroSubtitle}>
                  The landscape of digital product development is changing — the whole
                  product lifecycle is compressing. I&apos;m a product design leader who builds
                  the infrastructure to move at that speed: design systems, AI-augmented
                  workflows, and the cross-functional bridges that let smaller teams deliver
                  at enterprise scale. Hands-on at every level. That&apos;s not a compromise at
                  my seniority — it&apos;s the job now.
                </p>
                <div className={s.heroCta}>
                  <SmoothAnchor href="#pillars" className={s.btnPrimary}><span>See How It Works</span></SmoothAnchor>
                  <SmoothAnchor href="#case" className={s.btnSecondary}>View Case Study</SmoothAnchor>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Orbit System */}
            <ScrollReveal>
              <div className={s.heroVisual}>
                {/* Ambient particles */}
                <div className={s.particleField}>
                  <div className={clsx(s.particle, s.p1)} />
                  <div className={clsx(s.particle, s.p2)} />
                  <div className={clsx(s.particle, s.p3)} />
                  <div className={clsx(s.particle, s.p4)} />
                  <div className={clsx(s.particle, s.p5)} />
                  <div className={clsx(s.particle, s.p6)} />
                </div>
                <div className={s.orbitSystem}>
                  <div className={clsx(s.orbitRing, s.ring1)} />
                  <div className={clsx(s.orbitRing, s.ring2)} />
                  <div className={clsx(s.orbitRing, s.ring3)} />
                  <div className={clsx(s.orbitRing, s.ring4)} />
                  {/* Data stream connectors */}
                  <div className={clsx(s.dataStream, s.stream1)} />
                  <div className={clsx(s.dataStream, s.stream2)} />
                  <div className={clsx(s.dataStream, s.stream3)} />
                  <div className={s.orbitCore}>JD</div>
                  <div className={clsx(s.orbitLabel, s.label1)}>Claude Code</div>
                  <div className={clsx(s.orbitLabel, s.label2)}>Figma</div>
                  <div className={clsx(s.orbitLabel, s.label3)}>Code to Canvas</div>
                  <div className={clsx(s.orbitLabel, s.label4)}>MCP</div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ══════════ STATS BAR ══════════ */}
          <ScrollReveal>
            <div className={s.statsBar}>
              <div className={s.statItem}>
                <div className={s.statNumber}>12M+</div>
                <div className={s.statLabel}>Monthly Active Users</div>
              </div>
              <div className={s.statItem}>
                <div className={s.statNumber}>5 &rarr; 9</div>
                <div className={s.statLabel}>Team Output Multiplier</div>
              </div>
              <div className={s.statItem}>
                <div className={s.statNumber}>25+ yrs</div>
                <div className={s.statLabel}>Design Leadership</div>
              </div>
              <div className={s.statItem}>
                <div className={s.statNumber}>~40%</div>
                <div className={s.statLabel}>Team Capacity Gain</div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ THREE PILLARS ══════════ */}
      <section className={s.section} id="pillars">
        <Container>
          <ScrollReveal>
            <div className={s.sectionLabel}>THE THREE PILLARS</div>
            <h2 className={s.sectionTitle}>
              How I Leverage AI Across<br />the Full Product Lifecycle
            </h2>
            <p className={s.sectionSubtitle}>
              AI isn&apos;t a separate initiative. It&apos;s integrated into how my teams
              work — from discovery through delivery.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.pillarsGrid}>
              {/* Pillar 1 */}
              <div className={s.pillarCard}>
                <div className={s.pillarIcon}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /><path d="M11 8v6" /><path d="M8 11h6" /></svg>
                </div>
                <div className={s.pillarTag}>DISCOVERY &amp; ANALYSIS</div>
                <h3 className={s.pillarTitle}>AI-Accelerated Research</h3>
                <p className={s.pillarDesc}>
                  Synthesizing thousands of survey responses, usage patterns, and
                  competitive signals in hours instead of weeks. AI finds the haystacks.
                  My researcher finds the needles.
                </p>
                <div className={s.pillarMetric}>
                  <span className={s.metricValue}>1000s</span> of survey responses
                  synthesized via Claude — foundation for coupon discovery research
                </div>
              </div>

              {/* Pillar 2 */}
              <div className={s.pillarCard}>
                <div className={s.pillarIcon}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                </div>
                <div className={s.pillarTag}>DESIGN &amp; PROTOTYPING</div>
                <h3 className={s.pillarTitle}>AI-Augmented Creation</h3>
                <p className={s.pillarDesc}>
                  Generate 5&ndash;10 directions in days, not weeks. AI gives you
                  something to react to instead of starting from nothing. The cost to
                  restart is effectively zero — that changes everything.
                </p>
                <div className={s.pillarMetric}>
                  <span className={s.metricValue}>Code to Canvas</span>{' '}
                  Bidirectional &mdash; code becomes editable design, design drives production code
                </div>
              </div>

              {/* Pillar 3 */}
              <div className={s.pillarCard}>
                <div className={s.pillarIcon}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M12 7v4" /><path d="M7.5 17.5 10 13" /><path d="M16.5 17.5 14 13" /><path d="M10 13h4" /></svg>
                </div>
                <div className={s.pillarTag}>PROCESS &amp; LEADERSHIP</div>
                <h3 className={s.pillarTitle}>AI-Informed Operations</h3>
                <p className={s.pillarDesc}>
                  Built team workflows around AI tools at key decision points.
                  Established evaluation criteria for when AI adds value — and
                  critically, when it doesn&apos;t. A team of 5 delivering the work of
                  8&ndash;9.
                </p>
                <div className={s.pillarMetric}>
                  <span className={s.metricValue}>~40%</span> capacity gain through
                  strategic AI integration across the design team
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ DESIGN PROCESS ══════════ */}
      <section className={s.section} id="process">
        <Container>
          <ScrollReveal>
            <div className={s.sectionLabel}>THE NEW DESIGN PROCESS</div>
            <h2 className={s.sectionTitle}>From Brain Dump to<br />Developer Handoff</h2>
            <p className={s.sectionSubtitle}>
              A 10-step workflow where AI compresses everything before and after the
              craft moment — but the craft moment is human.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.processGrid}>
              {/* Row 1: Steps 01–05 */}
              <div className={s.processCard}>
                <span className={s.stepNum}>01</span>
                <span className={clsx(s.stepIcon, s.stepIconHuman)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </span>
                <div className={s.stepName}>Brain Dump</div>
                <div className={s.stepDesc}>Dictation + raw context</div>
                <span className={clsx(s.stepAiTag, s.tagHuman)}>Human</span>
              </div>

              <div className={s.processCard}>
                <span className={s.stepNum}>02</span>
                <span className={clsx(s.stepIcon, s.stepIconClaude)}>
                  <svg width="14" height="14" viewBox="0 -.01 39.5 39.53" fill="currentColor"><path d="m7.75 26.27 7.77-4.36.13-.38-.13-.21h-.38l-1.3-.08-4.44-.12-3.85-.16-3.73-.2-.94-.2-.88-1.16.09-.58.79-.53 1.13.1 2.5.17 3.75.26 2.72.16 4.03.42h.64l.09-.26-.22-.16-.17-.16-3.88-2.63-4.2-2.78-2.2-1.6-1.19-.81-.6-.76-.26-1.66 1.08-1.19 1.45.1.37.1 1.47 1.13 3.14 2.43 4.1 3.02.6.5.24-.17.03-.12-.27-.45-2.23-4.03-2.38-4.1-1.06-1.7-.28-1.02c-.1-.42-.17-.77-.17-1.2l1.23-1.67.68-.22 1.64.22.69.6 1.02 2.33 1.65 3.67 2.56 4.99.75 1.48.4 1.37.15.42h.26v-.24l.21-2.81.39-3.45.38-4.44.13-1.25.62-1.5 1.23-.81.96.46.79 1.13-.11.73-.47 3.05-.92 4.78-.6 3.2h.35l.4-.4 1.62-2.15 2.72-3.4 1.2-1.35 1.4-1.49.9-.71h1.7l1.25 1.86-.56 1.92-1.75 2.22-1.45 1.88-2.08 2.8-1.3 2.24.12.18.31-.03 4.7-1 2.54-.46 3.03-.52 1.37.64.15.65-.54 1.33-3.24.8-3.8.76-5.66 1.34-.07.05.08.1 2.55.24 1.09.06h2.67l4.97.37 1.3.86.78 1.05-.13.8-2 1.02-2.7-.64-6.3-1.5-2.16-.54h-.3v.18l1.8 1.76 3.3 2.98 4.13 3.84.21.95-.53.75-.56-.08-3.63-2.73-1.4-1.23-3.17-2.67h-.21v.28l.73 1.07 3.86 5.8.2 1.78-.28.58-1 .35-1.1-.2-2.26-3.17-2.33-3.57-1.88-3.2-.23.13-1.11 11.95-.52.61-1.2.46-1-.76-.53-1.23.53-2.43.64-3.17.52-2.52.47-3.13.28-1.04-.02-.07-.23.03-2.36 3.24-3.59 4.85-2.84 3.04-.68.27-1.18-.61.11-1.09.66-.97 3.93-5 2.37-3.1 1.53-1.79-.01-.26h-.09l-10.44 6.78-1.86.24-.8-.75.1-1.23.38-.4 3.14-2.16z"/></svg>
                </span>
                <div className={s.stepName}>Scope &amp; Plan</div>
                <div className={s.stepDesc}>Claude synthesizes into outline</div>
                <span className={clsx(s.stepAiTag, s.tagAi)}>AI</span>
              </div>

              <div className={s.processCard}>
                <span className={s.stepNum}>03</span>
                <span className={clsx(s.stepIcon, s.stepIconClaude)}>
                  <svg width="14" height="14" viewBox="0 -.01 39.5 39.53" fill="currentColor"><path d="m7.75 26.27 7.77-4.36.13-.38-.13-.21h-.38l-1.3-.08-4.44-.12-3.85-.16-3.73-.2-.94-.2-.88-1.16.09-.58.79-.53 1.13.1 2.5.17 3.75.26 2.72.16 4.03.42h.64l.09-.26-.22-.16-.17-.16-3.88-2.63-4.2-2.78-2.2-1.6-1.19-.81-.6-.76-.26-1.66 1.08-1.19 1.45.1.37.1 1.47 1.13 3.14 2.43 4.1 3.02.6.5.24-.17.03-.12-.27-.45-2.23-4.03-2.38-4.1-1.06-1.7-.28-1.02c-.1-.42-.17-.77-.17-1.2l1.23-1.67.68-.22 1.64.22.69.6 1.02 2.33 1.65 3.67 2.56 4.99.75 1.48.4 1.37.15.42h.26v-.24l.21-2.81.39-3.45.38-4.44.13-1.25.62-1.5 1.23-.81.96.46.79 1.13-.11.73-.47 3.05-.92 4.78-.6 3.2h.35l.4-.4 1.62-2.15 2.72-3.4 1.2-1.35 1.4-1.49.9-.71h1.7l1.25 1.86-.56 1.92-1.75 2.22-1.45 1.88-2.08 2.8-1.3 2.24.12.18.31-.03 4.7-1 2.54-.46 3.03-.52 1.37.64.15.65-.54 1.33-3.24.8-3.8.76-5.66 1.34-.07.05.08.1 2.55.24 1.09.06h2.67l4.97.37 1.3.86.78 1.05-.13.8-2 1.02-2.7-.64-6.3-1.5-2.16-.54h-.3v.18l1.8 1.76 3.3 2.98 4.13 3.84.21.95-.53.75-.56-.08-3.63-2.73-1.4-1.23-3.17-2.67h-.21v.28l.73 1.07 3.86 5.8.2 1.78-.28.58-1 .35-1.1-.2-2.26-3.17-2.33-3.57-1.88-3.2-.23.13-1.11 11.95-.52.61-1.2.46-1-.76-.53-1.23.53-2.43.64-3.17.52-2.52.47-3.13.28-1.04-.02-.07-.23.03-2.36 3.24-3.59 4.85-2.84 3.04-.68.27-1.18-.61.11-1.09.66-.97 3.93-5 2.37-3.1 1.53-1.79-.01-.26h-.09l-10.44 6.78-1.86.24-.8-.75.1-1.23.38-.4 3.14-2.16z"/></svg>
                </span>
                <div className={s.stepName}>The Bad Build</div>
                <div className={s.stepDesc}>First draft &mdash; cost to restart: zero</div>
                <span className={clsx(s.stepAiTag, s.tagAi)}>AI</span>
              </div>

              <div className={s.processCard}>
                <span className={s.stepNum}>04</span>
                <span className={clsx(s.stepIcon, s.stepIconHuman)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </span>
                <div className={s.stepName}>Creative Director + Team</div>
                <div className={s.stepDesc}>Find the sparks, cut the noise</div>
                <span className={clsx(s.stepAiTag, s.tagHuman)}>Human</span>
              </div>

              <div className={s.processCard}>
                <span className={s.stepNum}>05</span>
                <div className={s.stepIconPair}>
                  <span className={clsx(s.stepIcon, s.stepIconHuman)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </span>
                  <span className={s.stepIconArrow}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
                  </span>
                  <span className={clsx(s.stepIcon, s.stepIconClaude)}>
                    <svg width="14" height="14" viewBox="0 -.01 39.5 39.53" fill="currentColor"><path d="m7.75 26.27 7.77-4.36.13-.38-.13-.21h-.38l-1.3-.08-4.44-.12-3.85-.16-3.73-.2-.94-.2-.88-1.16.09-.58.79-.53 1.13.1 2.5.17 3.75.26 2.72.16 4.03.42h.64l.09-.26-.22-.16-.17-.16-3.88-2.63-4.2-2.78-2.2-1.6-1.19-.81-.6-.76-.26-1.66 1.08-1.19 1.45.1.37.1 1.47 1.13 3.14 2.43 4.1 3.02.6.5.24-.17.03-.12-.27-.45-2.23-4.03-2.38-4.1-1.06-1.7-.28-1.02c-.1-.42-.17-.77-.17-1.2l1.23-1.67.68-.22 1.64.22.69.6 1.02 2.33 1.65 3.67 2.56 4.99.75 1.48.4 1.37.15.42h.26v-.24l.21-2.81.39-3.45.38-4.44.13-1.25.62-1.5 1.23-.81.96.46.79 1.13-.11.73-.47 3.05-.92 4.78-.6 3.2h.35l.4-.4 1.62-2.15 2.72-3.4 1.2-1.35 1.4-1.49.9-.71h1.7l1.25 1.86-.56 1.92-1.75 2.22-1.45 1.88-2.08 2.8-1.3 2.24.12.18.31-.03 4.7-1 2.54-.46 3.03-.52 1.37.64.15.65-.54 1.33-3.24.8-3.8.76-5.66 1.34-.07.05.08.1 2.55.24 1.09.06h2.67l4.97.37 1.3.86.78 1.05-.13.8-2 1.02-2.7-.64-6.3-1.5-2.16-.54h-.3v.18l1.8 1.76 3.3 2.98 4.13 3.84.21.95-.53.75-.56-.08-3.63-2.73-1.4-1.23-3.17-2.67h-.21v.28l.73 1.07 3.86 5.8.2 1.78-.28.58-1 .35-1.1-.2-2.26-3.17-2.33-3.57-1.88-3.2-.23.13-1.11 11.95-.52.61-1.2.46-1-.76-.53-1.23.53-2.43.64-3.17.52-2.52.47-3.13.28-1.04-.02-.07-.23.03-2.36 3.24-3.59 4.85-2.84 3.04-.68.27-1.18-.61.11-1.09.66-.97 3.93-5 2.37-3.1 1.53-1.79-.01-.26h-.09l-10.44 6.78-1.86.24-.8-.75.1-1.23.38-.4 3.14-2.16z"/></svg>
                  </span>
                </div>
                <div className={s.stepName}>Refine</div>
                <div className={s.stepDesc}>Code-based iteration</div>
                <span className={clsx(s.stepAiTag, s.tagBoth)}>Both</span>
              </div>

              {/* Row 2: Steps 06–10 */}
              <div className={s.processCard}>
                <span className={s.stepNum}>06</span>
                <div className={s.stepIconPair}>
                  <span className={clsx(s.stepIcon, s.stepIconHuman)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </span>
                  <span className={s.stepIconArrow}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
                  </span>
                  <span className={clsx(s.stepIcon, s.stepIconClaude)}>
                    <svg width="14" height="14" viewBox="0 -.01 39.5 39.53" fill="currentColor"><path d="m7.75 26.27 7.77-4.36.13-.38-.13-.21h-.38l-1.3-.08-4.44-.12-3.85-.16-3.73-.2-.94-.2-.88-1.16.09-.58.79-.53 1.13.1 2.5.17 3.75.26 2.72.16 4.03.42h.64l.09-.26-.22-.16-.17-.16-3.88-2.63-4.2-2.78-2.2-1.6-1.19-.81-.6-.76-.26-1.66 1.08-1.19 1.45.1.37.1 1.47 1.13 3.14 2.43 4.1 3.02.6.5.24-.17.03-.12-.27-.45-2.23-4.03-2.38-4.1-1.06-1.7-.28-1.02c-.1-.42-.17-.77-.17-1.2l1.23-1.67.68-.22 1.64.22.69.6 1.02 2.33 1.65 3.67 2.56 4.99.75 1.48.4 1.37.15.42h.26v-.24l.21-2.81.39-3.45.38-4.44.13-1.25.62-1.5 1.23-.81.96.46.79 1.13-.11.73-.47 3.05-.92 4.78-.6 3.2h.35l.4-.4 1.62-2.15 2.72-3.4 1.2-1.35 1.4-1.49.9-.71h1.7l1.25 1.86-.56 1.92-1.75 2.22-1.45 1.88-2.08 2.8-1.3 2.24.12.18.31-.03 4.7-1 2.54-.46 3.03-.52 1.37.64.15.65-.54 1.33-3.24.8-3.8.76-5.66 1.34-.07.05.08.1 2.55.24 1.09.06h2.67l4.97.37 1.3.86.78 1.05-.13.8-2 1.02-2.7-.64-6.3-1.5-2.16-.54h-.3v.18l1.8 1.76 3.3 2.98 4.13 3.84.21.95-.53.75-.56-.08-3.63-2.73-1.4-1.23-3.17-2.67h-.21v.28l.73 1.07 3.86 5.8.2 1.78-.28.58-1 .35-1.1-.2-2.26-3.17-2.33-3.57-1.88-3.2-.23.13-1.11 11.95-.52.61-1.2.46-1-.76-.53-1.23.53-2.43.64-3.17.52-2.52.47-3.13.28-1.04-.02-.07-.23.03-2.36 3.24-3.59 4.85-2.84 3.04-.68.27-1.18-.61.11-1.09.66-.97 3.93-5 2.37-3.1 1.53-1.79-.01-.26h-.09l-10.44 6.78-1.86.24-.8-.75.1-1.23.38-.4 3.14-2.16z"/></svg>
                  </span>
                </div>
                <div className={s.stepName}>Expand Context</div>
                <div className={s.stepDesc}>Document learnings</div>
                <span className={clsx(s.stepAiTag, s.tagBoth)}>Both</span>
              </div>

              <div className={s.processCard}>
                <span className={s.stepNum}>07</span>
                <div className={s.stepIconPair}>
                  <span className={clsx(s.stepIcon, s.stepIconClaude)}>
                    <svg width="14" height="14" viewBox="0 -.01 39.5 39.53" fill="currentColor"><path d="m7.75 26.27 7.77-4.36.13-.38-.13-.21h-.38l-1.3-.08-4.44-.12-3.85-.16-3.73-.2-.94-.2-.88-1.16.09-.58.79-.53 1.13.1 2.5.17 3.75.26 2.72.16 4.03.42h.64l.09-.26-.22-.16-.17-.16-3.88-2.63-4.2-2.78-2.2-1.6-1.19-.81-.6-.76-.26-1.66 1.08-1.19 1.45.1.37.1 1.47 1.13 3.14 2.43 4.1 3.02.6.5.24-.17.03-.12-.27-.45-2.23-4.03-2.38-4.1-1.06-1.7-.28-1.02c-.1-.42-.17-.77-.17-1.2l1.23-1.67.68-.22 1.64.22.69.6 1.02 2.33 1.65 3.67 2.56 4.99.75 1.48.4 1.37.15.42h.26v-.24l.21-2.81.39-3.45.38-4.44.13-1.25.62-1.5 1.23-.81.96.46.79 1.13-.11.73-.47 3.05-.92 4.78-.6 3.2h.35l.4-.4 1.62-2.15 2.72-3.4 1.2-1.35 1.4-1.49.9-.71h1.7l1.25 1.86-.56 1.92-1.75 2.22-1.45 1.88-2.08 2.8-1.3 2.24.12.18.31-.03 4.7-1 2.54-.46 3.03-.52 1.37.64.15.65-.54 1.33-3.24.8-3.8.76-5.66 1.34-.07.05.08.1 2.55.24 1.09.06h2.67l4.97.37 1.3.86.78 1.05-.13.8-2 1.02-2.7-.64-6.3-1.5-2.16-.54h-.3v.18l1.8 1.76 3.3 2.98 4.13 3.84.21.95-.53.75-.56-.08-3.63-2.73-1.4-1.23-3.17-2.67h-.21v.28l.73 1.07 3.86 5.8.2 1.78-.28.58-1 .35-1.1-.2-2.26-3.17-2.33-3.57-1.88-3.2-.23.13-1.11 11.95-.52.61-1.2.46-1-.76-.53-1.23.53-2.43.64-3.17.52-2.52.47-3.13.28-1.04-.02-.07-.23.03-2.36 3.24-3.59 4.85-2.84 3.04-.68.27-1.18-.61.11-1.09.66-.97 3.93-5 2.37-3.1 1.53-1.79-.01-.26h-.09l-10.44 6.78-1.86.24-.8-.75.1-1.23.38-.4 3.14-2.16z"/></svg>
                  </span>
                  <span className={s.stepIconArrow}>&rarr;</span>
                  <span className={clsx(s.stepIcon, s.stepIconFigma)}>
                    <svg width="14" height="14" viewBox="0 0 38 57" fill="none"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/></svg>
                  </span>
                </div>
                <div className={s.stepName}>Code to Canvas</div>
                <div className={s.stepDesc}>Working UI pushed to Figma as editable frames</div>
                <span className={clsx(s.stepAiTag, s.tagAi)}>AI</span>
              </div>

              <div className={s.processCard}>
                <span className={s.stepNum}>08</span>
                <div className={s.stepIconPair}>
                  <span className={clsx(s.stepIcon, s.stepIconHuman)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                  </span>
                  <span className={s.stepIconArrow}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
                  </span>
                  <span className={clsx(s.stepIcon, s.stepIconHuman)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>
                  </span>
                </div>
                <div className={s.stepName}>Team + Design &amp; Craft</div>
                <div className={s.stepDesc}>Flow state &mdash; novel solutions emerge</div>
                <span className={clsx(s.stepAiTag, s.tagHuman)}>Human</span>
              </div>

              <div className={s.processCard}>
                <span className={s.stepNum}>09</span>
                <div className={s.stepIconPair}>
                  <span className={clsx(s.stepIcon, s.stepIconFigma)}>
                    <svg width="14" height="14" viewBox="0 0 38 57" fill="none"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83"/><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262"/><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/></svg>
                  </span>
                  <span className={s.stepIconArrow}>&rarr;</span>
                  <span className={clsx(s.stepIcon, s.stepIconClaude)}>
                    <svg width="14" height="14" viewBox="0 -.01 39.5 39.53" fill="currentColor"><path d="m7.75 26.27 7.77-4.36.13-.38-.13-.21h-.38l-1.3-.08-4.44-.12-3.85-.16-3.73-.2-.94-.2-.88-1.16.09-.58.79-.53 1.13.1 2.5.17 3.75.26 2.72.16 4.03.42h.64l.09-.26-.22-.16-.17-.16-3.88-2.63-4.2-2.78-2.2-1.6-1.19-.81-.6-.76-.26-1.66 1.08-1.19 1.45.1.37.1 1.47 1.13 3.14 2.43 4.1 3.02.6.5.24-.17.03-.12-.27-.45-2.23-4.03-2.38-4.1-1.06-1.7-.28-1.02c-.1-.42-.17-.77-.17-1.2l1.23-1.67.68-.22 1.64.22.69.6 1.02 2.33 1.65 3.67 2.56 4.99.75 1.48.4 1.37.15.42h.26v-.24l.21-2.81.39-3.45.38-4.44.13-1.25.62-1.5 1.23-.81.96.46.79 1.13-.11.73-.47 3.05-.92 4.78-.6 3.2h.35l.4-.4 1.62-2.15 2.72-3.4 1.2-1.35 1.4-1.49.9-.71h1.7l1.25 1.86-.56 1.92-1.75 2.22-1.45 1.88-2.08 2.8-1.3 2.24.12.18.31-.03 4.7-1 2.54-.46 3.03-.52 1.37.64.15.65-.54 1.33-3.24.8-3.8.76-5.66 1.34-.07.05.08.1 2.55.24 1.09.06h2.67l4.97.37 1.3.86.78 1.05-.13.8-2 1.02-2.7-.64-6.3-1.5-2.16-.54h-.3v.18l1.8 1.76 3.3 2.98 4.13 3.84.21.95-.53.75-.56-.08-3.63-2.73-1.4-1.23-3.17-2.67h-.21v.28l.73 1.07 3.86 5.8.2 1.78-.28.58-1 .35-1.1-.2-2.26-3.17-2.33-3.57-1.88-3.2-.23.13-1.11 11.95-.52.61-1.2.46-1-.76-.53-1.23.53-2.43.64-3.17.52-2.52.47-3.13.28-1.04-.02-.07-.23.03-2.36 3.24-3.59 4.85-2.84 3.04-.68.27-1.18-.61.11-1.09.66-.97 3.93-5 2.37-3.1 1.53-1.79-.01-.26h-.09l-10.44 6.78-1.86.24-.8-.75.1-1.23.38-.4 3.14-2.16z"/></svg>
                  </span>
                </div>
                <div className={s.stepName}>Build Again</div>
                <div className={s.stepDesc}>Design context flows back via MCP</div>
                <span className={clsx(s.stepAiTag, s.tagAi)}>AI</span>
              </div>

              <div className={s.processCard}>
                <span className={s.stepNum}>10</span>
                <span className={clsx(s.stepIcon, s.stepIconBoth)}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                </span>
                <div className={s.stepName}>Handoff</div>
                <div className={s.stepDesc}>Mocks + functional prototype</div>
                <span className={clsx(s.stepAiTag, s.tagBoth)}>Both</span>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Process Timeline Teaser ── */}
          <ScrollReveal>
            <a
              href="/articles/design-process-timeline"
              target="_blank"
              rel="noopener noreferrer"
              className={s.timelineTeaser}
            >
              <div className={s.teaserLeft}>
                <div className={s.teaserLabel}>FULL PROCESS DEEP DIVE</div>
                <div className={s.teaserTitle}>Feature Design Process</div>
                <p className={s.teaserDesc}>
                  5 phases, cross-functional roles, AI augmentation breakdowns,
                  and key goals at every stage.
                </p>
                <span className={s.teaserCta}>
                  Explore the Full Timeline
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
                </span>
              </div>
              <div className={s.teaserPhases}>
                <div className={s.teaserPhase}>
                  <div className={clsx(s.teaserPhaseDot, s.tpDiscovery)} />
                  <div className={s.teaserPhaseLabel}>Discovery</div>
                  <div className={s.teaserPhaseBadge}>AI-Accelerated</div>
                </div>
                <div className={s.teaserPhase}>
                  <div className={clsx(s.teaserPhaseDot, s.tpKickoff)} />
                  <div className={s.teaserPhaseLabel}>Convergence</div>
                  <div className={s.teaserPhaseBadge}>Human-Led</div>
                </div>
                <div className={s.teaserPhase}>
                  <div className={clsx(s.teaserPhaseDot, s.tpBuild)} />
                  <div className={s.teaserPhaseLabel}>Build</div>
                  <div className={s.teaserPhaseBadge}>Human + AI</div>
                </div>
                <div className={s.teaserPhase}>
                  <div className={clsx(s.teaserPhaseDot, s.tpHandoff)} />
                  <div className={s.teaserPhaseLabel}>Review</div>
                  <div className={s.teaserPhaseBadge}>AI-Accelerated</div>
                </div>
                <div className={s.teaserPhase}>
                  <div className={clsx(s.teaserPhaseDot, s.tpPostlaunch)} />
                  <div className={s.teaserPhaseLabel}>Post-Launch</div>
                  <div className={s.teaserPhaseBadge}>Human + AI</div>
                </div>
              </div>
            </a>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ CASE STUDY ══════════ */}
      <section className={s.section} id="case">
        <Container>
          <ScrollReveal>
            <div className={s.sectionLabel}>CASE STUDY</div>
            <h2 className={s.sectionTitle}>
              Authentication Redesign<br />
              <span className={s.gradientText}>Under Pressure</span>
            </h2>
            <p className={s.sectionSubtitle}>
              A real-world example of the process above — compressing a multi-sprint
              authentication overhaul into weeks while leading the team and making the
              strategic calls simultaneously.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.caseGrid}>
              {/* Left — Transformation Visual */}
              <div className={s.caseVisual}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 12, fontWeight: 600 }}>The Constraint</div>
                <div className={s.caseBeforeAfter}>
                  <div className={clsx(s.baBox, s.baBefore)}>
                    <div className={s.baLabel}>Users Stuck</div>
                    <div className={s.baNumber}>25K+</div>
                    <div className={s.baDesc}>In verification loops</div>
                  </div>
                  <div className={clsx(s.baBox, s.baBefore)}>
                    <div className={s.baLabel}>Email Verify</div>
                    <div className={s.baNumber}>28%</div>
                    <div className={s.baDesc}>Completion rate</div>
                  </div>
                </div>
                <div className={s.caseArrow}>AI-AUGMENTED DESIGN PROCESS</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12, fontWeight: 600 }}>The Result</div>
                <div className={s.caseBeforeAfter}>
                  <div className={clsx(s.baBox, s.baAfter)}>
                    <div className={s.baLabel}>Dead-Ends</div>
                    <div className={s.baNumber}>75K</div>
                    <div className={s.baDesc}>Prevented</div>
                  </div>
                  <div className={clsx(s.baBox, s.baAfter)}>
                    <div className={s.baLabel}>Email Verify</div>
                    <div className={s.baNumber}>45%+</div>
                    <div className={s.baDesc}>Completion rate</div>
                  </div>
                </div>
                <CaseStudyButton />
              </div>

              {/* Right — Case Content */}
              <div>
                <h3 className={s.caseContentTitle}>
                  AI Didn&apos;t Do the Design Thinking.<br />
                  It Made Design Thinking Possible.
                </h3>
                <div className={s.dsBlocks} style={{ marginBottom: 24 }}>
                  <div className={s.dsBlock} style={{ borderLeftColor: 'var(--secondary)' }}>
                    <div className={s.dsBlockLabel} style={{ color: 'var(--secondary)' }}>The Constraint</div>
                    <p className={s.dsBlockText}>
                      A risk-based authentication system had locked 25,000+ users out of
                      their accounts. Phone-only verification was a dead end. I pulled this
                      onto my own plate while my team was fully allocated across four
                      workstreams — a player-coach moment under real pressure.
                    </p>
                  </div>
                  <div className={s.dsBlock} style={{ borderLeftColor: 'var(--accent)' }}>
                    <div className={s.dsBlockLabel} style={{ color: 'var(--accent)' }}>The Approach</div>
                    <p className={s.dsBlockText}>
                      AI analyzed stuck-user data and modeled verification paths. It
                      generated the rough first pass — not looking for final designs, just
                      the right direction. Then I put on the creative director hat: finding
                      the edge cases and error states AI will never think about on its own.
                      The real craft happened in Figma, where solutions emerged I
                      couldn&apos;t have prompted my way to.
                    </p>
                  </div>
                </div>
                <div className={s.caseTags}>
                  <span className={s.caseTag}>Claude &mdash; Data Synthesis</span>
                  <span className={s.caseTag}>AI &mdash; First-Pass Concepts</span>
                  <span className={s.caseTag}>Figma &mdash; Craft &amp; Precision</span>
                  <span className={s.caseTag}>Player-Coach Leadership</span>
                </div>
                <div className={s.caseImpact}>
                  <div className={s.impactItem}>
                    <div className={s.impactNum}>Weeks</div>
                    <div className={s.impactLabel}>vs. multi-sprint timeline</div>
                  </div>
                  <div className={s.impactItem}>
                    <div className={s.impactNum}>40%</div>
                    <div className={s.impactLabel}>Drop in support escalations</div>
                  </div>
                  <div className={s.impactItem}>
                    <div className={s.impactNum}>IC + Lead</div>
                    <div className={s.impactLabel}>Simultaneous execution</div>
                  </div>
                  <div className={s.impactItem}>
                    <div className={s.impactNum}>Proactive</div>
                    <div className={s.impactLabel}>Email campaign to prevent recurrence</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ QUOTE ══════════ */}
      <section className={s.section}>
        <Container>
          <ScrollReveal>
            <div className={s.quoteBox}>
              <div className={s.quoteMark}>&ldquo;</div>
              <p className={s.quoteText}>
                AI compresses everything before and after the craft moment. But the
                craft moment is human. That&apos;s still where I have the most flow state.
                That&apos;s where novel solutions emerge that I couldn&apos;t have prompted my
                way to.
              </p>
              <div className={s.quoteAttr}>
                <strong>JD McCulley</strong> &mdash; Sr. Director of Product Design
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ MCP SECTION ══════════ */}
      <section className={s.section} id="mcp">
        <Container>
          <ScrollReveal>
            <div className={s.mcpGrid}>
              {/* Left — Content */}
              <div>
                <div className={s.sectionLabel}>HOW I USE MCPs</div>
                <h2 className={s.mcpContentTitle}>
                  MCP: The Bridge Between<br />
                  <span className={s.gradientText}>Design Intent and Production Code</span>
                </h2>
                <p className={s.mcpDesc}>
                  Model Context Protocol is the standard that lets AI tools talk to
                  specialized systems — design editors, file systems, APIs, databases.
                  It&apos;s the wiring between AI and everything it touches. I use it every day.
                </p>
                <ul className={s.mcpPoints}>
                  <li>
                    <span className={s.mcpBullet} />
                    <span>
                      <strong>Claude Code is the orchestrator.</strong> It connects to
                      specialized MCP servers &mdash; Figma via Code to Canvas for
                      bidirectional design, the file system for code output. One
                      conversation, multiple tools, no context switching.
                    </span>
                  </li>
                  <li>
                    <span className={s.mcpBullet} />
                    <span>
                      <strong>This portfolio is the proof.</strong> Every page you&apos;re
                      reading was designed and built through MCP-connected pipelines
                      before the tools were officially integrated. When Figma and
                      Anthropic announced Code to Canvas on February&nbsp;17,&nbsp;2026,
                      it formalized the workflow I&apos;d already been running.
                    </span>
                  </li>
                  <li>
                    <span className={s.mcpBullet} />
                    <span>
                      <strong>The craft moment is still human.</strong> MCP collapses the
                      distance between idea and artifact. But taste, judgment, and the
                      creative direction that makes output worth shipping — that&apos;s the
                      designer&apos;s job. The protocol handles the plumbing. I handle the
                      decisions.
                    </span>
                  </li>
                  <li>
                    <span className={s.mcpBullet} />
                    <span>
                      <strong>This protocol is already reshaping product design.</strong>
                      {' '}Code to Canvas is the first formal instance of design-tool
                      MCP going mainstream &mdash; and the same architecture will connect
                      products to AI agents tomorrow. A customer asking their AI
                      to &quot;find me a deal on toothpaste&quot; at Dollar General.
                      The designer who understands MCP at the tooling level now is the
                      leader who architects agent-ready product experiences next.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right — MCP Visual */}
              <div className={s.mcpVisual}>
                <div className={s.mcpDiagram}>
                  <div className={clsx(s.mcpLayer, s.layerUser)}>
                    Creative Direction
                    <div className={s.mcpLayerSub}>Design intent, constraints, taste</div>
                  </div>
                  <div className={s.mcpConnector} />
                  <div className={clsx(s.mcpLayer, s.layerAgent)}>
                    Claude Code
                    <div className={s.mcpLayerSub}>AI agent &mdash; orchestrates via MCP</div>
                  </div>
                  <div className={s.mcpConnector} />
                  <div className={clsx(s.mcpLayer, s.layerMcp)}>
                    MCP Servers
                    <div className={s.mcpLayerSub}>Figma Code to Canvas &middot; File System</div>
                  </div>
                  <div className={s.mcpConnector} />
                  <div className={clsx(s.mcpLayer, s.layerProduct)}>
                    Production Output
                    <div className={s.mcpLayerSub}>This portfolio &mdash; designed and built live</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ DESIGN SYSTEMS ══════════ */}
      <section className={s.section}>
        <Container>
          <ScrollReveal>
            <div className={s.sectionLabel} style={{ justifyContent: 'center' }}>
              THE FOUNDATION
            </div>
            <h2 className={s.sectionTitle} style={{ textAlign: 'center' }}>
              Design Systems as Strategic Infrastructure
            </h2>
            <p className={s.sectionSubtitle} style={{ textAlign: 'center', margin: '0 auto 56px' }}>
              A tokenized, well-structured design system is no longer a nice-to-have
              — it&apos;s the infrastructure that determines whether your team can move
              at the speed these tools enable.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.dsGrid}>
              {/* Left — Architecture Visual */}
              <div className={s.dsStack}>
                <div className={s.dsStackTitle}>Design System Architecture</div>

                <div className={clsx(s.dsLayer, s.dsLayerAi)}>
                  <div className={s.dsLayerIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                  </div>
                  <div>
                    <div className={s.dsLayerTitle}>AI Acceleration Layer</div>
                    <div className={s.dsLayerDesc}>Claude Code + Figma Code to Canvas + MCP</div>
                  </div>
                </div>

                <div className={s.dsConnector} />

                <div className={clsx(s.dsLayer, s.dsLayerScreens)}>
                  <div className={s.dsLayerIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                  </div>
                  <div>
                    <div className={s.dsLayerTitle}>Screens &amp; Flows</div>
                    <div className={s.dsLayerDesc}>Full experiences composed from patterns</div>
                  </div>
                </div>

                <div className={s.dsConnector} />

                <div className={clsx(s.dsLayer, s.dsLayerPatterns)}>
                  <div className={s.dsLayerIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
                  </div>
                  <div>
                    <div className={s.dsLayerTitle}>Patterns</div>
                    <div className={s.dsLayerDesc}>Navigation, forms, cards, data display</div>
                  </div>
                </div>

                <div className={s.dsConnector} />

                <div className={clsx(s.dsLayer, s.dsLayerComponents)}>
                  <div className={s.dsLayerIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>
                  </div>
                  <div>
                    <div className={s.dsLayerTitle}>Components</div>
                    <div className={s.dsLayerDesc}>Buttons, inputs, badges, modals</div>
                  </div>
                </div>

                <div className={s.dsConnector} />

                <div className={clsx(s.dsLayer, s.dsLayerTokens)}>
                  <div className={s.dsLayerIcon}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" strokeDasharray="2 3" /></svg>
                  </div>
                  <div>
                    <div className={s.dsLayerTitle}>Design Tokens</div>
                    <div className={s.dsLayerDesc}>Colors, spacing, typography, motion</div>
                  </div>
                </div>

                <div className={s.dsStackFooter}>
                  <span>DG Brand</span>
                  <span className={s.dsStackDivider} />
                  <span>pOpshelf Brand</span>
                </div>
              </div>

              {/* Right — Narrative Blocks */}
              <div className={s.dsBlocks}>
                <div className={s.dsBlock} style={{ borderLeftColor: 'var(--secondary)' }}>
                  <div className={s.dsBlockLabel} style={{ color: 'var(--secondary)' }}>What We Built</div>
                  <p className={s.dsBlockText}>
                    At Dollar General, I led the creation of multi-phase design systems
                    for both the DG and pOpshelf brands. Tokenized naming conventions,
                    shared component architecture, custom Figma workflows adopted across
                    engineering teams. At the time, the value proposition was consistency
                    and handoff efficiency.
                  </p>
                </div>

                <div className={s.dsBlock} style={{ borderLeftColor: 'var(--accent)' }}>
                  <div className={s.dsBlockLabel} style={{ color: 'var(--accent)' }}>Why It Matters Now</div>
                  <p className={s.dsBlockText}>
                    Without that systematic foundation, you cannot iterate at the pace
                    AI makes possible. Your components need to be structured so the system
                    can work with them. Your tokens need to be consistent. Your naming
                    conventions need to be clear enough that both humans and AI agents
                    can navigate them.
                  </p>
                </div>

                <div className={s.dsBlock} style={{ borderLeftColor: 'var(--secondary-light)' }}>
                  <div className={s.dsBlockLabel} style={{ color: 'var(--secondary-light)' }}>The Warning</div>
                  <p className={s.dsBlockText}>
                    The companies that don&apos;t have this foundation are going to find
                    themselves stuck — all the speed tools, no systematic way to use them.
                    <strong> The design system is what makes the accelerated product
                    lifecycle actually work.</strong>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* With vs Without comparison */}
          <ScrollReveal>
            <div className={s.dsCompare}>
              <div className={clsx(s.dsCompareCard, s.dsCompareWith)}>
                <div className={s.dsCompareTitle} style={{ color: 'rgba(0,255,150,0.8)' }}>With Design System</div>
                <div className={s.dsCompareItems}>
                  <div className={s.dsCompareItem}><span className={s.dsCompareCheck} style={{ color: 'rgba(0,255,150,0.7)' }}>&#10003;</span> AI generates within constraints</div>
                  <div className={s.dsCompareItem}><span className={s.dsCompareCheck} style={{ color: 'rgba(0,255,150,0.7)' }}>&#10003;</span> Consistent across both brands</div>
                  <div className={s.dsCompareItem}><span className={s.dsCompareCheck} style={{ color: 'rgba(0,255,150,0.7)' }}>&#10003;</span> Engineering handoff is clean</div>
                  <div className={s.dsCompareItem}><span className={s.dsCompareCheck} style={{ color: 'rgba(0,255,150,0.7)' }}>&#10003;</span> Iteration speed compounds</div>
                </div>
              </div>
              <div className={clsx(s.dsCompareCard, s.dsCompareWithout)}>
                <div className={s.dsCompareTitle} style={{ color: 'rgba(255,100,100,0.8)' }}>Without Design System</div>
                <div className={s.dsCompareItems}>
                  <div className={s.dsCompareItem}><span className={s.dsCompareCheck} style={{ color: 'rgba(255,100,100,0.7)' }}>&#10007;</span> AI output is inconsistent</div>
                  <div className={s.dsCompareItem}><span className={s.dsCompareCheck} style={{ color: 'rgba(255,100,100,0.7)' }}>&#10007;</span> Every screen is bespoke</div>
                  <div className={s.dsCompareItem}><span className={s.dsCompareCheck} style={{ color: 'rgba(255,100,100,0.7)' }}>&#10007;</span> Dev rebuilds from scratch</div>
                  <div className={s.dsCompareItem}><span className={s.dsCompareCheck} style={{ color: 'rgba(255,100,100,0.7)' }}>&#10007;</span> Speed tools, no system to use them</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ WHERE AI FALLS SHORT ══════════ */}
      <section className={s.section}>
        <Container>
          <ScrollReveal>
            <div className={s.glassContent}>
              <div className={s.sectionLabel} style={{ justifyContent: 'center' }}>
                THE CREDIBILITY MOVE
              </div>
              <h2 className={s.sectionTitle} style={{ textAlign: 'center' }}>
                Where AI Falls Short
              </h2>
              <p className={s.sectionSubtitle} style={{ textAlign: 'center', margin: '0 auto 56px' }}>
                Knowing where AI doesn&apos;t work is what separates a design leader from
                someone who just lists &quot;AI&quot; on their resume.
              </p>
              <div className={s.grid2col}>
                <div className={clsx(s.pillarCard, s.accentBorderLeft)}>
                  <div className={s.pillarTag} style={{ color: 'var(--secondary-light)' }}>
                    THE SEVENTH PARTICIPANT
                  </div>
                  <h3 className={s.pillarTitle}>Real Users Break Things AI Can&apos;t Predict</h3>
                  <p className={s.pillarDesc}>
                    In a split tender usability test, participant seven failed a task that
                    six passed. If we&apos;d stopped at six, we&apos;d have shipped a broken flow.
                    Synthetic users give directional signal — but they don&apos;t misread a
                    button label because they&apos;re in a hurry.
                  </p>
                </div>
                <div className={clsx(s.pillarCard, s.accentBorderLeft)}>
                  <div className={s.pillarTag} style={{ color: 'var(--secondary-light)' }}>
                    TASTE IS HUMAN
                  </div>
                  <h3 className={s.pillarTitle}>Precision Requires Design Judgment</h3>
                  <p className={s.pillarDesc}>
                    AI generates maximalist output — it throws chips, icons, and cards
                    everywhere. The value is knowing what to keep, what to cut, what to
                    refine. The designer&apos;s job shifts from producer to creative director
                    and curator. Volume is AI. Taste is human.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className={s.ctaSection} id="connect">
        <Container>
          <ScrollReveal>
            <div className={s.ctaBox}>
              <h2 className={s.ctaTitle}>
                Let&apos;s Talk About<br />
                <span className={s.gradientText}>Design-Led AI</span>
              </h2>
              <p className={s.ctaDesc}>
                Product design leader building teams that deliver at enterprise scale —
                operating as creative director and curator of AI-augmented output,
                staying hands-on in the work.
              </p>
              <div className={s.ctaLinks}>
                <a
                  href="https://www.linkedin.com/in/jdmcc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.btnPrimary}
                >
                  <span>LinkedIn</span>
                </a>
                <a href="mailto:jdmcculley@me.com" className={s.btnSecondary}>
                  jdmcculley@me.com
                </a>
                <a href="tel:7205302896" className={s.btnSecondary}>
                  (720) 530-2896
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
