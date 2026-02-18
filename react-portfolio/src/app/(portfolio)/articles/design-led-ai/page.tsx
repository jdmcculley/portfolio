import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SmoothAnchor } from '@/components/ui/SmoothAnchor';
import { Container } from '@/components/layout/Container';
import clsx from 'clsx';
import s from '../articles.module.css';
import { CaseStudyButton } from './CaseStudyButton';

export const metadata: Metadata = {
  title: 'Design-Led AI in Practice — JD McCulley',
};

/* DG Logo */
function DGLogo() {
  return (
    <svg width="62" height="62" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect width="40" height="40" rx="4" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.22 24.88H11.88V15.07H12.84C15.54 15.07 17.09 15.83 17.09 19.83C17.09 23 16.54 24.88 13.22 24.88ZM28.15 19.75V22.3H29.85V24.51C29.38 24.73 28.63 24.9 27.97 24.9C25.51 24.9 24.34 23.15 24.34 19.79C24.34 16.75 25.44 15.04 27.08 15.04C28.36 15.04 28.98 15.86 29.31 17.4L33.91 16.62C33.25 13.38 30.93 11.65 27.34 11.65C24.22 11.65 21.95 12.89 20.7 15.17C19.27 12.67 16.41 11.97 12.32 11.97H5.83V15.07H7.45V27.98H12.79C16.27 27.98 19.13 27.17 20.62 24.78C21.7 26.91 23.72 28.28 26.91 28.28C28.49 28.28 30.06 27.82 31.08 27.17L31.61 27.98H34.21V19.75H28.15Z" fill="#FFF000" />
    </svg>
  );
}

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
            <ScrollReveal delay={0.2}>
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
                  <div className={clsx(s.orbitLabel, s.label3)}>Pencil Dev</div>
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

          <ScrollReveal delay={0.1}>
            <div className={s.pillarsGrid}>
              {/* Pillar 1 */}
              <div className={s.pillarCard}>
                <div className={s.pillarNumber}>01</div>
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
                <div className={s.pillarNumber}>02</div>
                <div className={s.pillarTag}>DESIGN &amp; PROTOTYPING</div>
                <h3 className={s.pillarTitle}>AI-Augmented Creation</h3>
                <p className={s.pillarDesc}>
                  Generate 5&ndash;10 directions in days, not weeks. AI gives you
                  something to react to instead of starting from nothing. The cost to
                  restart is effectively zero — that changes everything.
                </p>
                <div className={s.pillarMetric}>
                  <span className={s.metricValue}>Figma + Claude Code</span>{' '}
                  Design-to-prototype loop with functional handoff
                </div>
              </div>

              {/* Pillar 3 */}
              <div className={s.pillarCard}>
                <div className={s.pillarNumber}>03</div>
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
              A 9-step workflow where AI compresses everything before and after the
              craft moment — but the craft moment is human.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className={s.processFlow}>
              {/* Step 01 */}
              <div className={s.processStep}>
                <div className={s.stepDot} />
                <div className={s.stepLabel}>Step 01</div>
                <div className={s.stepName}>Brain Dump</div>
                <div className={s.stepDesc}>Dictation + raw context</div>
                <span className={clsx(s.stepAiTag, s.tagHuman)}>Human</span>
              </div>

              {/* Step 02 */}
              <div className={s.processStep}>
                <div className={s.stepDot} />
                <div className={s.stepLabel}>Step 02</div>
                <div className={s.stepName}>Scope &amp; Plan</div>
                <div className={s.stepDesc}>Claude synthesizes into outline</div>
                <span className={clsx(s.stepAiTag, s.tagAi)}>AI</span>
              </div>

              {/* Step 03 */}
              <div className={s.processStep}>
                <div className={s.stepDot} />
                <div className={s.stepLabel}>Step 03</div>
                <div className={s.stepName}>The Bad Build</div>
                <div className={s.stepDesc}>
                  Terrible first draft — cost to restart: zero
                </div>
                <span className={clsx(s.stepAiTag, s.tagAi)}>AI</span>
              </div>

              {/* Step 04 */}
              <div className={s.processStep}>
                <div className={s.stepDot} />
                <div className={s.stepLabel}>Step 04</div>
                <div className={s.stepName}>Creative Director</div>
                <div className={s.stepDesc}>Find the sparks, cut the noise</div>
                <span className={clsx(s.stepAiTag, s.tagHuman)}>Human</span>
              </div>

              {/* Step 05 */}
              <div className={s.processStep}>
                <div className={s.stepDot} />
                <div className={s.stepLabel}>Step 05</div>
                <div className={s.stepName}>Refine</div>
                <div className={s.stepDesc}>Code-based iteration</div>
                <span className={clsx(s.stepAiTag, s.tagBoth)}>Both</span>
              </div>

              {/* Step 06 */}
              <div className={s.processStep}>
                <div className={s.stepDot} />
                <div className={s.stepLabel}>Step 06</div>
                <div className={s.stepName}>Save Context</div>
                <div className={s.stepDesc}>Document learnings</div>
                <span className={clsx(s.stepAiTag, s.tagBoth)}>Both</span>
              </div>

              {/* Step 07 */}
              <div className={s.processStep}>
                <div className={s.stepDot} />
                <div className={s.stepLabel}>Step 07</div>
                <div className={s.stepName}>Figma &amp; Craft</div>
                <div className={s.stepDesc}>
                  Flow state — where novel solutions emerge
                </div>
                <span className={clsx(s.stepAiTag, s.tagHuman)}>Human</span>
              </div>

              {/* Step 08 */}
              <div className={s.processStep}>
                <div className={s.stepDot} />
                <div className={s.stepLabel}>Step 08</div>
                <div className={s.stepName}>Build Again</div>
                <div className={s.stepDesc}>Fresh conversation, refined context</div>
                <span className={clsx(s.stepAiTag, s.tagAi)}>AI</span>
              </div>

              {/* Step 09 */}
              <div className={s.processStep}>
                <div className={s.stepDot} />
                <div className={s.stepLabel}>Step 09</div>
                <div className={s.stepName}>Handoff</div>
                <div className={s.stepDesc}>Mocks + functional prototype</div>
                <span className={clsx(s.stepAiTag, s.tagBoth)}>Both</span>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 32 }}>
              <a
                href="/articles/design-process-timeline"
                target="_blank"
                rel="noopener noreferrer"
                className={s.btnPrimary}
              >
                Explore the Full Process Timeline →
              </a>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ CASE STUDY ══════════ */}
      <section className={s.section} id="case">
        <Container>
          <ScrollReveal>
            <div className={s.sectionLabel}>CASE STUDY</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
              <div className={s.logoBorderBox}><DGLogo /></div>
              <h2 className={s.sectionTitle} style={{ marginBottom: 0 }}>
                RBA/2FA Redesign at<br />
                <span className={s.gradientText}>Dollar General</span>
              </h2>
            </div>
            <p className={s.sectionSubtitle}>
              How the new design process compressed a multi-sprint effort into weeks —
              while I was leading the team and making the strategic calls simultaneously.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className={s.caseGrid}>
              {/* Left — Transformation Visual */}
              <div className={s.caseVisual}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 12, fontWeight: 600 }}>The Problem</div>
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
                    <div className={s.dsBlockLabel} style={{ color: 'var(--secondary)' }}>The Problem</div>
                    <p className={s.dsBlockText}>
                      Dollar General&apos;s Risk-Based Authentication system had bricked the
                      experience for 25,000+ users. Phone-only verification was a dead end.
                      I pulled this onto my own plate while my team was fully allocated
                      across four workstreams.
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
                      specialized MCP servers — Pencil Dev for visual design, Figma
                      for component generation, the file system for code output. One
                      conversation, multiple tools, no context switching.
                    </span>
                  </li>
                  <li>
                    <span className={s.mcpBullet} />
                    <span>
                      <strong>This portfolio is the proof.</strong> Every page you&apos;re
                      reading was designed and built through this MCP-connected pipeline.
                      Design intent flows through Claude Code, which reaches into design
                      tools and code editors simultaneously — then I curate, refine, and
                      ship.
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
                      <strong>This same protocol will reshape product design.</strong>
                      {' '}The MCP servers connecting my design tools today are the same
                      architecture that will connect products to AI agents tomorrow —
                      a customer asking their AI to &quot;find me a deal on toothpaste&quot;
                      at Dollar General. The designer who understands MCP at the tooling
                      level now is the leader who architects agent-ready product
                      experiences next.
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
                    <div className={s.mcpLayerSub}>Pencil Dev &middot; Figma &middot; File System</div>
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

          <ScrollReveal delay={0.1}>
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
                    <div className={s.dsLayerDesc}>Claude + Figma + MCP pipelines</div>
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
          <ScrollReveal delay={0.2}>
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
