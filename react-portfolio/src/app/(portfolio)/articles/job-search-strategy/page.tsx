import { type Metadata } from 'next';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from './strategy.module.css';

export const metadata: Metadata = {
  title: 'Job Search Strategy — JD McCulley',
};

export default function JobSearchStrategyPage() {
  return (
    <div className={s.page}>
      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={`${s.section} ${s.hero}`}>
          <div className={s.heroBadge}>
            <span className={s.heroPulse} />
            Strategy Playbook
          </div>
          <h1 className={s.heroTitle}>
            Job Search <span className={s.heroTitleAccent}>Strategy</span>
          </h1>
          <p className={s.heroSubtitle}>
            AI-Powered Outbound Motion &amp; Daily Rhythm
          </p>
          <p className={s.heroBody}>
            The 2026 hiring market rewards authenticity, process expertise, and strategic
            AI fluency &mdash; not just technical AI skills. This is the system &mdash; daily,
            disciplined, and AI-augmented &mdash; designed for a product design leader who
            already has the positioning, the resume, and the story built. The job now is
            outbound motion.
          </p>
          <p className={s.heroMeta}>Updated February 2026 &bull; Sources: LinkedIn, HBR, Korn Ferry, Gartner, Authentic Jobs</p>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 01 — THE LANDSCAPE ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>The Landscape</div>
          <h2 className={s.sectionHeading}>What You&apos;re Operating In</h2>

          <div className={s.statGrid}>
            <div className={s.statCard}>
              <div className={s.statValue}>93%</div>
              <div className={s.statCaption}>Recruiters Increasing AI Use<a href="#fn1" className={s.footnoteRef}>[1]</a></div>
              <div className={s.statSource}>LinkedIn / CNBC, Jan 2026</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statValue}>66%</div>
              <div className={s.statCaption}>Using AI Agents to Pre-Screen<a href="#fn2" className={s.footnoteRef}>[2]</a></div>
              <div className={s.statSource}>LinkedIn Recruiter Survey</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statValue}>80%</div>
              <div className={s.statCaption}>Workers Feel Unprepared<a href="#fn3" className={s.footnoteRef}>[3]</a></div>
              <div className={s.statSource}>LinkedIn Global Survey, 19K respondents</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statValue}>25M+</div>
              <div className={s.statCaption}>Weekly AI Job Searches<a href="#fn4" className={s.footnoteRef}>[4]</a></div>
              <div className={s.statSource}>LinkedIn, 2025</div>
            </div>
          </div>

          <div className={s.statGrid}>
            <div className={s.statCard}>
              <div className={s.statValue}>68</div>
              <div className={s.statCaption}>Median Days to First Offer<a href="#fn5" className={s.footnoteRef}>[5]</a></div>
              <div className={s.statSource}>Industry data, 2026</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statValue}>4&ndash;5x</div>
              <div className={s.statCaption}>Referral-to-Interview Advantage<a href="#fn6" className={s.footnoteRef}>[6]</a></div>
              <div className={s.statSource}>Industry composite, 2026</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statValue}>73%</div>
              <div className={s.statCaption}>TA Leaders Prioritize Critical Thinking<a href="#fn7" className={s.footnoteRef}>[7]</a></div>
              <div className={s.statSource}>Korn Ferry TA Trends, 2026</div>
            </div>
            <div className={s.statCard}>
              <div className={s.statValue}>1 in 50</div>
              <div className={s.statCaption}>AI Investments Deliver Transformational Value<a href="#fn8" className={s.footnoteRef}>[8]</a></div>
              <div className={s.statSource}>Gartner via HBR, Feb 2026</div>
            </div>
          </div>

          <p className={s.bodyText}>
            Here&apos;s the good news: you&apos;re not most workers. You have a clear positioning
            statement, a strong brand, a current resume, a LinkedIn profile with recommendations,
            and case studies that demonstrate exactly what you do. Most candidates are scrambling
            to figure out their story. <strong>Yours is built.</strong> And with 73% of TA leaders
            citing critical thinking as the top skill they need in 2026,<a href="#fn7" className={s.footnoteRef}>[7]</a> your experience redesigning
            how teams work &mdash; not just what tools they use &mdash; is exactly what the market values.
          </p>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 02 — THE NEW RULES ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>What&apos;s Changed</div>
          <h2 className={s.sectionHeading}>The New Rules</h2>

          <div className={s.ruleCards}>
            <div className={s.ruleCard}>
              <h3>LinkedIn Is Now an AI-Matching Engine</h3>
              <p>
                The system no longer requires exact keyword matches. LinkedIn&apos;s AI-powered
                search now uses full semantic understanding &mdash; it evaluates meaning, not
                just keywords. You can type conversational queries and get relevant results.
                LinkedIn&apos;s Job Match tool evaluates your profile against each listing and
                gives you a fit rating. The critical shift: recruiters no longer search by job
                title alone &mdash; they search by{' '}
                <span className={s.highlight}>skill clusters</span>. And AI-assisted recruiter
                messages see a 69% improvement in InMail acceptance rates,<a href="#fn9" className={s.footnoteRef}>[9]</a> meaning your outreach
                needs to be even more specific and personal to stand out from AI-generated messages.
              </p>
            </div>
            <div className={s.ruleCard}>
              <h3>Recruiters Use AI Agents to Pre-Screen</h3>
              <p>
                Before a human reads your application, an AI agent has likely scored it. Your
                resume and LinkedIn profile must be machine-readable, keyword-aligned, and
                outcome-rich. Vague language gets filtered out.{' '}
                <span className={s.highlight}>Specific metrics and skill alignment get surfaced.</span>
              </p>
            </div>
            <div className={s.ruleCard}>
              <h3>The 80/20 Rule Is Real</h3>
              <p>
                Spend 20% of your time applying, 80% networking. Referral applications are
                4&ndash;5&times; more likely to result in interviews.<a href="#fn6" className={s.footnoteRef}>[6]</a> A warm introduction remains
                the only reliable way to guarantee a human reviews your application. At the
                leadership level, most VP/Director roles are{' '}
                <span className={s.highlight}>filled through networks</span>, not cold applications.
              </p>
            </div>
            <div className={s.ruleCard}>
              <h3>AI Tools Are Powerful but Require Governance</h3>
              <p>
                AI can surface opportunities, tailor resumes, track applications, and prep you for
                interviews. But it cannot build relationships or tell your story with authenticity.
                Use AI the way you use it in design:{' '}
                <span className={s.highlight}>it compresses the distance to the moment where your judgment matters.</span>
              </p>
            </div>
            <div className={s.ruleCard}>
              <h3>Skills-First Hiring Is the New Norm</h3>
              <p>
                Recruiters are building talent pipelines around{' '}
                <span className={s.highlight}>skills, not job titles</span>. Korn Ferry reports
                that 73% of TA leaders say critical thinking and problem-solving &mdash; not AI
                technical skills &mdash; are what they need most in 2026.<a href="#fn7" className={s.footnoteRef}>[7]</a> Your LinkedIn skills
                section and how you frame your experience matters more than ever. Evidence of
                how you think, not just what tools you use, is the differentiator.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 03 — CURRENT ASSETS ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Status Check</div>
          <h2 className={s.sectionHeading}>Your Current Assets</h2>

          <table className={s.statusTable}>
            <thead>
              <tr>
                <th>Asset</th>
                <th>Status</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LinkedIn Profile</td>
                <td><span className={s.statusReady}>Ready</span></td>
                <td>Recommendations filled, experience accurate</td>
              </tr>
              <tr>
                <td>Resume</td>
                <td><span className={s.statusReady}>Ready</span></td>
                <td>Current experience reflected</td>
              </tr>
              <tr>
                <td>Portfolio / Case Studies</td>
                <td><span className={s.statusReady}>Live</span></td>
                <td>RBA, Cash Back, and Wallet case studies published. Cumberland design system case study in final review.</td>
              </tr>
              <tr>
                <td>Brand Positioning</td>
                <td><span className={s.statusReady}>Solid</span></td>
                <td>Design-Led AI narrative, three pillars, audience-specific framing</td>
              </tr>
              <tr>
                <td><Link href="/articles/interview-prep">Interview Prep</Link></td>
                <td><span className={s.statusReady}>Available</span></td>
                <td>Three-level answer framework, story bank, AI narrative</td>
              </tr>
              <tr>
                <td>Search Strategy</td>
                <td><span className={s.statusReady}>Active</span></td>
                <td>This document. Updated February 2026 with latest market data.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 03.5 — TARGET ROLES ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Target Roles</div>
          <h2 className={s.sectionHeading}>Top 5 Job Titles</h2>
          <p className={s.sectionDesc}>
            These are the titles that align with your experience, positioning, and the
            level of impact you&apos;re targeting. Prioritized by fit.
          </p>

          <ol className={s.targetRolesList}>
            <li className={s.targetRoleItem}>
              <strong>VP of Product Design</strong>
              <span className={s.targetRoleDesc}>Enterprise and growth-stage companies where design reports to the C-suite. Your 25 years and org-building experience position you here.</span>
            </li>
            <li className={s.targetRoleItem}>
              <strong>Senior Director of Product Design</strong>
              <span className={s.targetRoleDesc}>Your most recent title level. Strong fit at Fortune 500 and large tech companies with established design orgs that need strategic leadership.</span>
            </li>
            <li className={s.targetRoleItem}>
              <strong>Head of Design</strong>
              <span className={s.targetRoleDesc}>Common at Series B&ndash;C startups and mid-size companies. Often the first senior design hire &mdash; your &ldquo;building from nothing&rdquo; story lands here.</span>
            </li>
            <li className={s.targetRoleItem}>
              <strong>Director of UX / Director of Product Design</strong>
              <span className={s.targetRoleDesc}>Broad category across industries. Fintech, retail tech, and SaaS companies use this title for the senior design leader running the team day-to-day.</span>
            </li>
            <li className={s.targetRoleItem}>
              <strong>Design Director</strong>
              <span className={s.targetRoleDesc}>Agencies and design-focused companies. Emphasizes craft and creative leadership alongside team management &mdash; a strong match for your interactive and UX roots.</span>
            </li>
          </ol>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 04 — THE NDA QUESTION ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Portfolio Guidance</div>
          <h2 className={s.sectionHeading}>The NDA Question</h2>
          <p className={s.sectionDesc}>
            Two competing concerns: hiding work looks evasive at the leadership level, but
            violating NDAs signals poor judgment. Both are career risks. Here&apos;s the approach.
          </p>

          <div className={s.ndaGrid}>
            <div className={s.ndaDo}>
              <h3>What to Do</h3>
              <p>
                <strong>Lead with process, not product.</strong> Your RBA case study already does
                this well &mdash; it tells the story of how you identified 25,000+ stuck users,
                what framework you applied, how you validated, and what resulted. That&apos;s what
                Director+ hiring managers care about.
              </p>
              <p>
                <strong>Research confirms this approach.</strong> Portfolios showing process
                consistently outperform polished-only portfolios in hiring evaluations. Your RBA,
                Cash Back, and Wallet case studies demonstrate the full journey &mdash; problem
                identification, framework application, validation, and measurable results.
              </p>
              <p>
                <strong>Use the &ldquo;broad strokes&rdquo; method for NDA work.</strong> Describe
                scope, role, problem, approach, and outcomes. Use percentages rather than raw numbers.
                Dollar General&apos;s app is public &mdash; much of your work is visible in the wild.
              </p>
              <p>
                <strong>Password-protect only if necessary.</strong> Frame it as: &ldquo;I take
                confidentiality seriously &mdash; here&apos;s access to the full work for your
                review.&rdquo; This signals professionalism, not evasiveness.
              </p>
              <p>
                <strong>Supplement with thought leadership.</strong> LinkedIn posts about your
                design-led AI approach are portfolio pieces under no NDA. They demonstrate your
                thinking publicly.
              </p>
            </div>
            <div className={s.ndaDont}>
              <h3>What Not to Do</h3>
              <p>
                Don&apos;t lock your entire portfolio behind a password &mdash; the friction kills
                discovery. Don&apos;t show confidential data without permission. And don&apos;t
                apologize for having NDA work &mdash; at your level, everyone does.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 05 — AI-POWERED TOOLKIT ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Tool Stack</div>
          <h2 className={s.sectionHeading}>AI-Powered Toolkit</h2>

          {/* Tier 1 */}
          <div className={s.tierLabel}>Tier 1 &mdash; Daily Drivers</div>
          <div className={s.toolGrid}>
            <div className={s.toolCard}>
              <h4>LinkedIn Premium</h4>
              <div className={s.toolCardPrice}>Recommended</div>
              <p>
                Your primary channel. AI-powered conversational job search, Job Match scoring,
                skill gap analysis, People Search, Top Applicant visibility, and InMail credits
                for direct outreach.
              </p>
            </div>
            <div className={s.toolCard}>
              <h4>Teal</h4>
              <div className={s.toolCardPrice}>$29/month</div>
              <p>
                Chrome extension consolidates listings from 40+ boards. Paste a job description
                and your resume side by side &mdash; Teal identifies keyword gaps and match
                scores. Now includes a Networking CRM for tracking contacts and warm
                introductions alongside applications.
              </p>
            </div>
            <div className={s.toolCard}>
              <h4>Claude</h4>
              <div className={s.toolCardPrice}>You already have this</div>
              <p>
                Your unfair advantage. Research synthesis on target companies, interview prep,
                tailoring outreach, analyzing JDs for positioning alignment. You use it at a
                level most candidates don&apos;t.
              </p>
            </div>
          </div>

          {/* Tier 2 */}
          <div className={s.tierLabel}>Tier 2 &mdash; Strategic Supplements</div>
          <div className={s.toolGrid}>
            <div className={s.toolCard}>
              <h4>Careerflow</h4>
              <div className={s.toolCardPrice}>$23.99/month</div>
              <p>
                LinkedIn profile optimization, search pipeline analytics, AI cover letter
                builder, and LinkedIn post drafter. Data-driven feedback on how your profile
                appears to recruiters.
              </p>
            </div>
            <div className={s.toolCard}>
              <h4>Jobright AI</h4>
              <div className={s.toolCardPrice}>From $24.99/month</div>
              <p>
                AI-powered matching with strong 2026 reviews for accuracy of skill matching
                and resume tailoring. Explanatory insights on why a role fits. Good for
                surfacing roles you might miss through keyword search alone.
              </p>
            </div>
            <div className={s.toolCard}>
              <h4>Jobscan</h4>
              <div className={s.toolCardPrice}>From $24.95/month</div>
              <p>
                Deep ATS optimization. Paste your resume against a job description for
                keyword match scoring, formatting checks, and recruiter-readability analysis.
                Complements Teal&apos;s broader pipeline view.
              </p>
            </div>
          </div>

          {/* Niche Boards */}
          <div className={s.tierLabel}>Niche Boards Worth Watching</div>
          <div className={s.toolGrid}>
            <div className={s.toolCard}>
              <h4>Authentic Jobs</h4>
              <div className={s.toolCardPrice}>Design-specific</div>
              <p>
                Curated design and creative roles. Their 2026 market report provides the
                median time-to-offer data cited above. Smaller volume, higher signal.
              </p>
            </div>
            <div className={s.toolCard}>
              <h4>Wellfound</h4>
              <div className={s.toolCardPrice}>Formerly AngelList</div>
              <p>
                Startup-focused roles with transparent salary ranges and equity details.
                Strong for Series A&ndash;C companies where design leadership has outsized
                impact.
              </p>
            </div>
            <div className={s.toolCard}>
              <h4>Dribbble Jobs</h4>
              <div className={s.toolCardPrice}>Design community</div>
              <p>
                Design-first companies post here. Smaller volume but the companies that
                recruit on Dribbble tend to value design culture and craft.
              </p>
            </div>
          </div>

          {/* Tier 3 */}
          <div className={s.tierLabel}>Tier 3 &mdash; Avoid for Your Level</div>
          <div className={s.toolGrid}>
            <div className={`${s.toolCard} ${s.toolCardDimmed}`}>
              <h4>Auto-Apply Tools</h4>
              <div className={s.toolCardPrice}>Sonara, LoopCV, JobHire.AI</div>
              <p>
                Volume signals desperation at the leadership level. Auto-generated applications
                lack the specificity Director+ roles require. Your applications should be
                surgical, not spray-and-pray.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 06 — DAILY RHYTHM ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>The System</div>
          <h2 className={s.sectionHeading}>Daily Rhythm</h2>
          <p className={s.sectionDesc}>
            90 minutes per day, every day, structured into three blocks. Adjust timing to
            your schedule, but maintain the sequence.
          </p>

          {/* Block 1 */}
          <div className={`${s.rhythmBlock} ${s.rhythmBlockAccent}`}>
            <div className={s.rhythmHeader}>
              <div className={s.rhythmTitle}>Block 1: Scan &amp; Source</div>
              <div className={s.rhythmTime}>25 min</div>
            </div>
            <div className={s.rhythmContext}>Morning, with coffee. Low energy required.</div>
            <ul className={s.rhythmList}>
              <li>
                Open LinkedIn AI job search. Run 2&ndash;3 conversational queries:
                <ul className={s.rhythmSub}>
                  <li>&ldquo;Design leadership roles at enterprise companies building AI-powered products&rdquo;</li>
                  <li>&ldquo;VP or Director of Product Design at Series B+ startups&rdquo;</li>
                  <li>&ldquo;Head of Design roles in fintech, retail tech, or SaaS&rdquo;</li>
                </ul>
              </li>
              <li>Review top 10&ndash;15 results. Use LinkedIn&apos;s Job Match to filter high-fit roles.</li>
              <li>Check Teal dashboard for new matches from other boards.</li>
              <li>Scan Wellfound and Authentic Jobs for design-specific roles not on LinkedIn.</li>
              <li>Save 2&ndash;5 strong leads. Don&apos;t apply yet &mdash; just capture.</li>
            </ul>
          </div>

          {/* Block 2 */}
          <div className={`${s.rhythmBlock} ${s.rhythmBlockSecondary}`}>
            <div className={s.rhythmHeader}>
              <div className={s.rhythmTitle}>Block 2: Target &amp; Tailor</div>
              <div className={s.rhythmTime}>40 min</div>
            </div>
            <div className={s.rhythmContext}>Focused work. This is where the quality happens.</div>
            <ul className={s.rhythmList}>
              <li>Pick 1&ndash;2 roles from saved leads for targeted action today.</li>
              <li>
                For each role:
                <ul className={s.rhythmSub}>
                  <li>Run the JD through Teal to identify keyword gaps against your resume.</li>
                  <li>Use Claude to research the company: news, leadership, product direction, design maturity.</li>
                  <li>Use LinkedIn People Search for connections or references inside the company.</li>
                  <li>Tailor outreach or application with specific language that mirrors the role&apos;s priorities.</li>
                </ul>
              </li>
              <li>Submit the application or send the outreach message.</li>
              <li>Log the action in your tracker.</li>
            </ul>
          </div>

          {/* Block 3 */}
          <div className={`${s.rhythmBlock} ${s.rhythmBlockDim}`}>
            <div className={s.rhythmHeader}>
              <div className={s.rhythmTitle}>Block 3: Network &amp; Nurture</div>
              <div className={s.rhythmTime}>25 min</div>
            </div>
            <div className={s.rhythmContext}>Late morning or early afternoon. Relationship-building mode.</div>
            <ul className={s.rhythmList}>
              <li><strong>Micronetworking (10 min):</strong> Engage with 3&ndash;5 LinkedIn posts from people in target companies or design leadership circles. Thoughtful comments, not just likes.</li>
              <li><strong>Direct outreach (10 min):</strong> Send 1&ndash;2 personalized messages to people who could provide warm introductions or insight into target companies.</li>
              <li><strong>Content creation (5 min):</strong> Draft or publish one piece of thought leadership per week. Aim for Tuesday or Wednesday &mdash; highest LinkedIn engagement days.</li>
            </ul>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 07 — WEEKLY CADENCE ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Weekly Structure</div>
          <h2 className={s.sectionHeading}>Cadence</h2>

          <table className={s.cadenceTable}>
            <thead>
              <tr>
                <th>Day</th>
                <th>Focus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={s.cadenceDay}>Monday</td>
                <td>Full daily rhythm + review pipeline from last week. What&apos;s stale? What needs follow-up?</td>
              </tr>
              <tr>
                <td className={s.cadenceDay}>Tuesday</td>
                <td>Full daily rhythm + publish LinkedIn post (highest engagement day)</td>
              </tr>
              <tr>
                <td className={s.cadenceDay}>Wednesday</td>
                <td>Full daily rhythm + targeted outreach to 2&ndash;3 new connections at target companies</td>
              </tr>
              <tr>
                <td className={s.cadenceDay}>Thursday</td>
                <td>Full daily rhythm + interview prep work (practice one story, refine one answer)</td>
              </tr>
              <tr>
                <td className={s.cadenceDay}>Friday</td>
                <td>Abbreviated scan (15 min) + reflect on week. What worked? What flopped? Adjust.</td>
              </tr>
              <tr>
                <td className={s.cadenceDay}>Weekend</td>
                <td>Off. Or light content drafting if the spirit moves you. Don&apos;t burn out.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 08 — OUTREACH TEMPLATES ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Templates</div>
          <h2 className={s.sectionHeading}>Outreach Messages</h2>

          <div className={s.templateCard}>
            <h3>Warm Introduction Request</h3>
            <p className={s.templateBody}>
              <span className={s.templatePlaceholder}>[Name]</span>, I noticed <span className={s.templatePlaceholder}>[Company]</span> has an opening for <span className={s.templatePlaceholder}>[Role]</span>. I&apos;ve been following their work on <span className={s.templatePlaceholder}>[specific initiative]</span> and it aligns closely with what I&apos;ve been building &mdash; design leadership at enterprise scale with AI integrated into the product lifecycle, not bolted on. Would you be open to a quick conversation or an introduction to the hiring team?
            </p>
          </div>

          <div className={s.templateCard}>
            <h3>Cold Outreach to Hiring Manager</h3>
            <p className={s.templateBody}>
              <span className={s.templatePlaceholder}>[Name]</span>, I&apos;m a product design leader with 25 years building UX teams across startup and enterprise. Most recently led design at Dollar General&apos;s digital platform through 6.6M+ MAU growth. I&apos;m particularly drawn to <span className={s.templatePlaceholder}>[Company]</span> because <span className={s.templatePlaceholder}>[specific, researched reason]</span>. I&apos;d welcome the chance to learn more about how design is positioned within your org. Would you be open to a brief conversation?
            </p>
          </div>

          <div className={s.templateCard}>
            <h3>LinkedIn Post Framework</h3>
            <p className={s.templateBody}>
              <strong>Hook:</strong> One sentence that challenges a common assumption or shares a hard-won insight.{'\n\n'}<strong>Story:</strong> 3&ndash;4 sentences from your actual experience. Be specific.{'\n\n'}<strong>Takeaway:</strong> What does this mean for how design leadership is evolving?{'\n\n'}<strong>Invitation:</strong> Ask a question that invites conversation, not just agreement.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 09 — TARGET COMPANY CHECKLIST ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Research Pass</div>
          <h2 className={s.sectionHeading}>Target Company Checklist</h2>
          <p className={s.sectionDesc}>
            When you identify a company worth pursuing, run this research pass. Claude can
            help with all of it.
          </p>

          <ul className={s.checklist}>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Product review:</strong> Download the app, use the site. Know what their product looks like today.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Design team structure:</strong> LinkedIn search for designers at the company. How big is the team?</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Hiring manager:</strong> Who posted the role? Who would you report to?</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Recent news:</strong> Funding rounds, product launches, leadership changes.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Design maturity signals:</strong> Design system? Research team? Accessibility commitment?</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Mutual connections:</strong> Who in your network could provide a warm introduction?</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Language alignment:</strong> What language do they use in the JD? Mirror it in your application.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>AI adoption signals:</strong> Is the company investing in AI? How? Understanding their AI maturity helps you frame your design-led AI positioning specifically.</span>
            </li>
          </ul>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 10 — PIPELINE METRICS ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Pipeline Metrics</div>
          <h2 className={s.sectionHeading}>What to Track</h2>
          <p className={s.sectionDesc}>
            Don&apos;t just track applications. Track the pipeline.
          </p>

          <table className={s.metricsTable}>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Target</th>
                <th>Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Roles reviewed / week</td>
                <td><span className={s.metricTarget}>30&ndash;50</span></td>
                <td>Ensures you&apos;re seeing the market</td>
              </tr>
              <tr>
                <td>Targeted applications / week</td>
                <td><span className={s.metricTarget}>5&ndash;8</span></td>
                <td>Quality over quantity at your level</td>
              </tr>
              <tr>
                <td>Outreach messages / week</td>
                <td><span className={s.metricTarget}>8&ndash;12</span></td>
                <td>Warm intros are your highest-converting channel</td>
              </tr>
              <tr>
                <td>LinkedIn engagement / week</td>
                <td><span className={s.metricTarget}>15&ndash;25</span></td>
                <td>Builds algorithmic visibility and human familiarity</td>
              </tr>
              <tr>
                <td>LinkedIn posts / month</td>
                <td><span className={s.metricTarget}>4</span></td>
                <td>Establishes thought leadership, creates inbound</td>
              </tr>
              <tr>
                <td>Conversations / week</td>
                <td><span className={s.metricTarget}>2&ndash;3</span></td>
                <td>Relationships convert to opportunities</td>
              </tr>
              <tr>
                <td>Interview conversion</td>
                <td><span className={s.metricTarget}>Track</span></td>
                <td>Signals if your positioning is landing</td>
              </tr>
              <tr>
                <td>Time in pipeline</td>
                <td><span className={s.metricTarget}>Track</span></td>
                <td>Median time to first offer is 68 days.<a href="#fn5" className={s.footnoteRef}>[5]</a> Patience is part of the system.</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 11 — LINKEDIN OPTIMIZATION ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>One-Time Setup</div>
          <h2 className={s.sectionHeading}>LinkedIn Optimization</h2>
          <p className={s.sectionDesc}>
            LinkedIn&apos;s AI now uses full semantic understanding &mdash; not just keywords. Run
            this pass to ensure you&apos;re optimized for both algorithmic and skills-first discovery.
          </p>

          <ul className={s.checklist}>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Headline:</strong> Lead with what you do for companies, not just your title. Example: &ldquo;Product Design Leader | Design-Led AI | Enterprise Scale UX | Building Teams That Deliver&rdquo;</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>About section:</strong> Open 5&ndash;7 target job descriptions, highlight recurring skills and phrases, ensure your About reflects them naturally.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Skills section:</strong> 50 skills listed, top 3 pinned to strongest positioning, LinkedIn Skill Assessments completed for &ldquo;Verified&rdquo; badge. With skills-first hiring now the norm, recruiters build pipelines around skills &mdash; make yours mirror the language in target job descriptions.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Featured section:</strong> RBA case study linked. LinkedIn post demonstrating design-led AI thinking.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Recommendations:</strong> 2&ndash;3 strongest from people at recognizable companies or in leadership roles.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Open to Work:</strong> On for recruiters only (not public). Target titles and locations set.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Creator mode:</strong> Enable this. The &ldquo;Follow&rdquo; button and increased post distribution are more important than ever for algorithmic visibility. In 2026, creator mode directly impacts how often your content appears in recruiter feeds.</span>
            </li>
          </ul>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 12 — WHAT YOU'RE NOT DOING ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Boundaries</div>
          <h2 className={s.sectionHeading}>What You&apos;re NOT Doing</h2>
          <p className={s.sectionDesc}>
            This strategy is deliberately opinionated.
          </p>

          <div className={s.notDoingGrid}>
            <div className={s.notDoingCard}>
              <h4><span className={s.notDoingX}>&times;</span> No mass applications.</h4>
              <p>
                At your level, every application should be researched and tailored. AI helps
                you do this faster, not skip it.
              </p>
            </div>
            <div className={s.notDoingCard}>
              <h4><span className={s.notDoingX}>&times;</span> No automated outreach bots.</h4>
              <p>
                Automated LinkedIn messages are immediately obvious and damage your brand.
                Every message should feel like it came from you &mdash; even if Claude helped
                draft it.
              </p>
            </div>
            <div className={s.notDoingCard}>
              <h4><span className={s.notDoingX}>&times;</span> No portfolio perfectionism.</h4>
              <p>
                Your RBA case study is strong. Ship it. A live portfolio with one great case
                study beats a perfect portfolio that&apos;s never published.
              </p>
            </div>
            <div className={s.notDoingCard}>
              <h4><span className={s.notDoingX}>&times;</span> No waiting for the &ldquo;right&rdquo; role.</h4>
              <p>
                Apply to roles that are 70%+ fit. Companies often reshape roles for the right
                candidate at the leadership level.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 12.5 — THE AUTHENTICITY ADVANTAGE ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Market Shift</div>
          <h2 className={s.sectionHeading}>The Authenticity Advantage</h2>
          <p className={s.sectionDesc}>
            Two converging trends are making your profile more valuable, not less.
          </p>

          <div className={s.ruleCards}>
            <div className={s.ruleCard}>
              <h3>The Fake Candidate Problem</h3>
              <p>
                By 2028, Gartner estimates 25% of job candidates will be fake<a href="#fn10" className={s.footnoteRef}>[10]</a> &mdash;
                deepfakes, AI-generated credentials, fabricated experience. Companies are
                already responding: human-centered assessments, in-person portfolio reviews,
                and practical demonstrations are returning to the hiring process. Your
                portfolio with real case studies, specific metrics, and verifiable outcomes
                is a{' '}
                <span className={s.highlight}>competitive moat</span>. When trust is scarce,
                authenticity compounds.
              </p>
            </div>
            <div className={s.ruleCard}>
              <h3>Process Experts Beat Technical Specialists</h3>
              <p>
                HBR reports that business units redesigning workflows with AI are 2&times;
                as likely to exceed revenue goals.<a href="#fn11" className={s.footnoteRef}>[11]</a> But only 1 in 50 AI investments deliver
                transformational value, and only 1 in 5 delivers measurable ROI.<a href="#fn8" className={s.footnoteRef}>[8]</a> The market
                doesn&apos;t just want someone who can <em>use</em> AI &mdash; they want someone
                who can{' '}
                <span className={s.highlight}>redesign how teams work with AI</span>. That&apos;s
                your positioning. Design-led AI isn&apos;t about the tools. It&apos;s about the
                judgment that makes the tools deliver.
              </p>
            </div>
            <div className={s.ruleCard}>
              <h3>The &ldquo;Workslop&rdquo; Problem</h3>
              <p>
                Low-quality AI output &mdash; what researchers are calling &ldquo;workslop&rdquo;
                &mdash; costs employees approximately 2 hours per incident to identify, correct,
                and manage.<a href="#fn12" className={s.footnoteRef}>[12]</a> Companies are learning that AI without design governance creates
                more work, not less. A leader who builds the{' '}
                <span className={s.highlight}>quality infrastructure around AI output</span>{' '}
                is solving one of the most expensive problems in AI adoption right now.
              </p>
            </div>
          </div>

          <p className={s.bodyText}>
            <strong>The bottom line:</strong> every trend that makes hiring harder for average
            candidates makes it easier for authentic leaders with documented results. The 2026
            market is selecting for exactly what you&apos;ve built.
          </p>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 13 — THE COMPOUND EFFECT ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>10-Week Arc</div>
          <h2 className={s.sectionHeading}>The Compound Effect</h2>
          <p className={s.sectionDesc}>
            This system is designed to compound. Research shows the median time to a first
            offer is 68 days (9&ndash;10 weeks).<a href="#fn5" className={s.footnoteRef}>[5]</a> The first 30 days get you into active
            conversations. The next 30&ndash;40 days convert them.
          </p>

          <div className={s.timeline}>
            <div className={s.timelineItem}>
              <div className={s.timelineWeek}>Week 1</div>
              <h4>Calibrating</h4>
              <p>
                Learning what language companies use, which boards surface the best roles,
                how your positioning lands in outreach.
              </p>
            </div>
            <div className={s.timelineItem}>
              <div className={s.timelineWeek}>Week 2</div>
              <h4>Building Visibility</h4>
              <p>
                LinkedIn engagement is growing. People start recognizing your name in comment
                threads. Your first post gets traction.
              </p>
            </div>
            <div className={s.timelineItem}>
              <div className={s.timelineWeek}>Week 3</div>
              <h4>Converting</h4>
              <p>
                Warm introductions start converting. Someone from Week 1 responds. A recruiter
                who saw your post reaches out. Your pipeline has 3&ndash;5 active conversations.
              </p>
            </div>
            <div className={s.timelineItem}>
              <div className={s.timelineWeek}>Week 4</div>
              <h4>Interviewing</h4>
              <p>
                You&apos;re in interviews. Your daily rhythm is automatic. You&apos;re spending less
                time scanning because your network is surfacing roles to you. The system is
                working.
              </p>
            </div>
            <div className={s.timelineItem}>
              <div className={s.timelineWeek}>Weeks 5&ndash;6</div>
              <h4>Deepening</h4>
              <p>
                Second and third-round interviews. Your network is actively surfacing roles.
                Referrals are converting at 4&ndash;5&times; the rate of cold applications. The
                daily rhythm takes 60 minutes now &mdash; the system is efficient.
              </p>
            </div>
            <div className={s.timelineItem}>
              <div className={s.timelineWeek}>Weeks 7&ndash;10</div>
              <h4>Closing</h4>
              <p>
                Offers materialize. The median is 68 days. If you&apos;re at Week 8 with active
                conversations, you&apos;re on track. The compound effect means earlier weeks of
                networking and visibility are paying dividends now.
              </p>
            </div>
          </div>

          <p className={s.closingText}>
            <strong>The key is not skipping days.</strong> 90 minutes, every day, in sequence.
            Outbound motion compounds.
          </p>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 14 — POSITIONING BY AUDIENCE ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Quick Reference</div>
          <h2 className={s.sectionHeading}>Positioning by Audience</h2>

          <table className={s.positionTable}>
            <thead>
              <tr>
                <th>Company Type</th>
                <th>Lead With</th>
                <th>Follow With</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fortune 500</td>
                <td>Enterprise scale + team building</td>
                <td>Design-led AI as operational governance + risk reduction</td>
              </tr>
              <tr>
                <td>Series A&ndash;C Startup</td>
                <td>Building from nothing + growth trajectory</td>
                <td>Design-led AI as competitive advantage</td>
              </tr>
              <tr>
                <td>Agency</td>
                <td>Embedded model + deliverable quality</td>
                <td>Design-led AI as capacity multiplier</td>
              </tr>
              <tr>
                <td>Small Company</td>
                <td>Hands-on design + craft</td>
                <td>Design-led AI as way to punch above weight</td>
              </tr>
              <tr>
                <td>Design-Focused</td>
                <td>Design craft + judgment</td>
                <td>Design-led AI as complement, not replacement</td>
              </tr>
              <tr>
                <td>AI-First Company</td>
                <td>Design governance for AI outputs</td>
                <td>Design-led AI as quality assurance layer + process redesign at scale</td>
              </tr>
            </tbody>
          </table>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ SOURCES & NOTES ══════════ */}
      <ScrollReveal>
        <section className={s.footnotesSection}>
          <div className={s.sectionLabel}>References</div>
          <h2 className={s.footnotesHeading}>Sources &amp; Notes</h2>

          <ol className={s.footnoteList}>
            <li className={s.footnoteItem} id="fn1">
              <span className={s.footnoteNumber}>1</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;93% of recruiters say they plan to increase their use of AI in 2026.&rdquo;
                </div>
                <div className={s.footnoteAttribution}>
                  LinkedIn Research, Censuswide survey of 6,554 global HR professionals, November 2025. &mdash;{' '}
                  <a href="https://news.linkedin.com/2026/LinkedIn-Research-Talent-2026" target="_blank" rel="noopener noreferrer">LinkedIn Newsroom</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn2">
              <span className={s.footnoteNumber}>2</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;Two-thirds of recruiters (66%) plan to increase their use of AI for pre-screening interviews in 2026.&rdquo;
                </div>
                <div className={s.footnoteAttribution}>
                  LinkedIn Research, January 2026. &mdash;{' '}
                  <a href="https://news.linkedin.com/2026/LinkedIn-Research-Talent-2026" target="_blank" rel="noopener noreferrer">LinkedIn Newsroom</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn3">
              <span className={s.footnoteNumber}>3</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;Nearly 80% of people feel unprepared to find a job in 2026, as two-thirds of recruiters say it&apos;s harder to find quality talent.&rdquo;
                </div>
                <div className={s.footnoteAttribution}>
                  Censuswide survey of 19,113 consumers, November 2025. &mdash;{' '}
                  <a href="https://news.linkedin.com/2026/LinkedIn-Research-Talent-2026" target="_blank" rel="noopener noreferrer">LinkedIn Newsroom</a>{' '}
                  | <a href="https://fortune.com/2026/01/07/how-hard-is-it-to-get-hired-mismatch-recruiters-job-seekers-linkedin-ai-skills/" target="_blank" rel="noopener noreferrer">Fortune</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn4">
              <span className={s.footnoteNumber}>4</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;Over 25M weekly searches are powered by the tool.&rdquo;
                </div>
                <div className={s.footnoteAttribution}>
                  LinkedIn, referring to AI-powered job search feature, 2025&ndash;2026. &mdash;{' '}
                  <a href="https://news.linkedin.com/2026/LinkedIn-Research-Talent-2026" target="_blank" rel="noopener noreferrer">LinkedIn Newsroom</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn5">
              <span className={s.footnoteNumber}>5</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;Most job seekers wait between 55 and 71 days for a job offer&rdquo; &mdash; midpoint approximately 68 days. &ldquo;Once a hiring manager decides to move a candidate forward, the path from application to offer averages about 15 days.&rdquo;
                </div>
                <div className={s.footnoteAttribution}>
                  Industry composite from 4 Corner Resources, Huntr, and Robert Half job market analyses, 2026. &mdash;{' '}
                  <a href="https://www.4cornerresources.com/job-market-news/truth-about-2026-jobs-online-applications/" target="_blank" rel="noopener noreferrer">4 Corner Resources</a>{' '}
                  | <a href="https://huntr.co/blog/job-search-statistics" target="_blank" rel="noopener noreferrer">Huntr</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn6">
              <span className={s.footnoteNumber}>6</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;Interviews stemming from a referral were 35% more likely to result in a job offer than those starting with an online application.&rdquo; Separate analyses show referral candidates are 4&ndash;5&times; more likely to reach the interview stage, where conversion rates are dramatically higher.
                </div>
                <div className={s.footnoteAttribution}>
                  4 Corner Resources; Huntr job search statistics, 2026. Referral interview advantage widely cited across HR industry data. &mdash;{' '}
                  <a href="https://www.4cornerresources.com/job-market-news/truth-about-2026-jobs-online-applications/" target="_blank" rel="noopener noreferrer">4 Corner Resources</a>{' '}
                  | <a href="https://huntr.co/blog/job-search-statistics" target="_blank" rel="noopener noreferrer">Huntr</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn7">
              <span className={s.footnoteNumber}>7</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;73% of TA leaders rank critical thinking as their #1 recruiting priority, while AI skills rank 5th.&rdquo; Further: &ldquo;Nearly three-quarters of talent acquisition leaders say the skills they need most in 2026 are critical thinking and problem-solving.&rdquo;
                </div>
                <div className={s.footnoteAttribution}>
                  Korn Ferry, Talent Acquisition Trends 2026. &mdash;{' '}
                  <a href="https://www.kornferry.com/insights/featured-topics/talent-recruitment/talent-acquisition-trends-2025" target="_blank" rel="noopener noreferrer">Korn Ferry</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn8">
              <span className={s.footnoteNumber}>8</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;Only one in 50 AI investments deliver transformational value, and only one in five delivers any measurable return on investment.&rdquo;
                </div>
                <div className={s.footnoteAttribution}>
                  Gartner research, cited in HBR &ldquo;9 Trends Shaping Work in 2026 and Beyond,&rdquo; February 2026. &mdash;{' '}
                  <a href="https://hbr.org/2026/02/9-trends-shaping-work-in-2026-and-beyond" target="_blank" rel="noopener noreferrer">Harvard Business Review</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn9">
              <span className={s.footnoteNumber}>9</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;[LinkedIn Hiring Assistant users are] seeing a 69% improvement in InMail acceptance rates.&rdquo;
                </div>
                <div className={s.footnoteAttribution}>
                  LinkedIn Research, January 2026. &mdash;{' '}
                  <a href="https://news.linkedin.com/2026/LinkedIn-Research-Talent-2026" target="_blank" rel="noopener noreferrer">LinkedIn Newsroom</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn10">
              <span className={s.footnoteNumber}>10</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;By 2028, one in four candidate profiles worldwide will be fake.&rdquo; A Gartner survey of 3,290 job candidates found that 39% used AI during the application process, and 6% admitted to interview fraud.
                </div>
                <div className={s.footnoteAttribution}>
                  Gartner, &ldquo;Mitigate Rising Candidate Fraud Through Identity Verification,&rdquo; July 2025. &mdash;{' '}
                  <a href="https://www.hrdive.com/news/fake-job-candidates-ai/757126/" target="_blank" rel="noopener noreferrer">HR Dive</a>{' '}
                  | <a href="https://www.gartner.com/en/newsroom/press-releases/2025-07-31-gartner-survey-shows-just-26-percent-of-job-applicants-trust-ai-will-fairly-evaluate-them" target="_blank" rel="noopener noreferrer">Gartner Newsroom</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn11">
              <span className={s.footnoteNumber}>11</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;Business units that redesign how work gets done with AI are twice as likely to exceed revenue goals.&rdquo;
                </div>
                <div className={s.footnoteAttribution}>
                  HBR, &ldquo;9 Trends Shaping Work in 2026 and Beyond,&rdquo; February 2026. &mdash;{' '}
                  <a href="https://hbr.org/2026/02/9-trends-shaping-work-in-2026-and-beyond" target="_blank" rel="noopener noreferrer">Harvard Business Review</a>
                </div>
              </div>
            </li>
            <li className={s.footnoteItem} id="fn12">
              <span className={s.footnoteNumber}>12</span>
              <div>
                <div className={s.footnoteQuote}>
                  &ldquo;41% of workers have encountered [AI-generated &lsquo;workslop&rsquo;], costing nearly two hours of rework per instance.&rdquo; Defined as &ldquo;AI-generated work content that masquerades as good work, but lacks the substance to meaningfully advance a given task.&rdquo; These incidents carry an &ldquo;invisible tax of $186 per month&rdquo; per employee &mdash; yielding over $9 million per year in lost productivity for a 10,000-person company.
                </div>
                <div className={s.footnoteAttribution}>
                  BetterUp Labs &amp; Stanford, cited in HBR &ldquo;AI-Generated &lsquo;Workslop&rsquo; Is Destroying Productivity,&rdquo; September 2025. &mdash;{' '}
                  <a href="https://hbr.org/2025/09/ai-generated-workslop-is-destroying-productivity" target="_blank" rel="noopener noreferrer">Harvard Business Review</a>
                </div>
              </div>
            </li>
          </ol>
        </section>
      </ScrollReveal>
    </div>
  );
}
