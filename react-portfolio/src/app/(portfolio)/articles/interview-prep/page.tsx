import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from './interview.module.css';

export const metadata: Metadata = {
  title: 'Interview Prep — JD McCulley',
};

export default function InterviewPrepPage() {
  return (
    <div className={s.page}>
      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={`${s.section} ${s.hero}`}>
          <div className={s.heroBadge}>
            <span className={s.heroPulse} />
            Interview Playbook
          </div>
          <h1 className={s.heroTitle}>
            Interview <span className={s.heroTitleAccent}>Prep</span>
          </h1>
          <p className={s.heroSubtitle}>
            Three-Level Answer Framework, Story Bank &amp; AI Narrative
          </p>
          <p className={s.heroBody}>
            At the Director+ level, interviews aren&apos;t about proving you can design.
            They&apos;re about demonstrating how you think, how you lead, and how you
            make teams better. This is the system for structuring answers, banking
            stories, and framing the design-led AI narrative authentically.
          </p>
          <p className={s.heroMeta}>Internal reference &bull; Not linked from portfolio navigation</p>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 01 — THREE-LEVEL ANSWER FRAMEWORK ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>The Framework</div>
          <h2 className={s.sectionHeading}>Three-Level Answers</h2>
          <p className={s.sectionDesc}>
            Every interview question can be answered at three depths. Read the room
            and choose the right level. The best interviews feel like conversations,
            not presentations.
          </p>

          <div className={s.frameworkGrid}>
            <div className={`${s.frameworkCard} ${s.frameworkCardGold}`}>
              <div className={s.frameworkLevel}>Level 1</div>
              <h3>The Headline</h3>
              <p>
                One or two sentences that directly answer the question. Lead with the
                conclusion, not the backstory. If the interviewer wants more, they&apos;ll
                ask. Most candidates over-talk at this level.
              </p>
              <div className={s.frameworkDuration}>15&ndash;30 seconds</div>
            </div>
            <div className={`${s.frameworkCard} ${s.frameworkCardCopper}`}>
              <div className={s.frameworkLevel}>Level 2</div>
              <h3>The Story</h3>
              <p>
                The structured narrative: situation, your specific role, the approach
                you chose, and what happened. Include one concrete metric or outcome.
                This is where most answers should live.
              </p>
              <div className={s.frameworkDuration}>60&ndash;90 seconds</div>
            </div>
            <div className={`${s.frameworkCard} ${s.frameworkCardDim}`}>
              <div className={s.frameworkLevel}>Level 3</div>
              <h3>The Deep Dive</h3>
              <p>
                The full context: why this problem mattered strategically, what you
                considered and rejected, how you navigated stakeholders, and what you
                learned. Save this for when they lean in and say &ldquo;tell me more.&rdquo;
              </p>
              <div className={s.frameworkDuration}>2&ndash;4 minutes</div>
            </div>
          </div>

          <p className={s.bodyText}>
            <strong>The principle:</strong> Start at Level 1. Escalate when invited. The ability to
            be concise and then go deep on demand signals executive communication skills &mdash;
            which is exactly what hiring managers assess at the Director+ level.
          </p>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 02 — STORY BANK ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Story Bank</div>
          <h2 className={s.sectionHeading}>Your Stories, Organized</h2>
          <p className={s.sectionDesc}>
            Every story maps to a competency interviewers assess. Each one should
            have a Level 1 headline, Level 2 narrative, and Level 3 deep dive ready.
            Rehearse until natural, not memorized.
          </p>

          <h3 className={s.subHeading}>Leadership &amp; Team Building</h3>
          <div className={s.storyGrid}>
            <div className={s.storyCard}>
              <div className={s.storyCategory}>Team Building</div>
              <h4>Building the DG Design Team</h4>
              <p>
                Inherited a fragmented design function. Built structure, critique culture,
                and design system infrastructure that turned a small team into an
                enterprise-velocity operation.
              </p>
              <div className={s.storyMetrics}>5-person team &rarr; output of 8&ndash;9</div>
            </div>
            <div className={s.storyCard}>
              <div className={s.storyCategory}>Player-Coach</div>
              <h4>RBA Crisis Response</h4>
              <p>
                Auth update locked 25K+ users out in 5 days. Shifted from directing to
                hands-on &mdash; designed 8 interconnected journeys, validated edge cases,
                shipped under pressure. Player-coach in action.
              </p>
              <div className={s.storyMetrics}>25K rescued &bull; 75K dead-ends prevented &bull; 61% improvement</div>
            </div>
          </div>

          <h3 className={s.subHeading}>Scale &amp; Impact</h3>
          <div className={s.storyGrid}>
            <div className={s.storyCard}>
              <div className={s.storyCategory}>Growth</div>
              <h4>Cash Back at Scale</h4>
              <p>
                Designed white-label Ibotta integration as co-mingled native experience.
                No seams between DG content and partner content. Partnership success
                through design that feels like product, not bolt-on.
              </p>
              <div className={s.storyMetrics}>435M clips &bull; $9M earned &bull; 191% YoY growth</div>
            </div>
            <div className={s.storyCard}>
              <div className={s.storyCategory}>Turnaround</div>
              <h4>Wallet Engagement Reversal</h4>
              <p>
                Double-digit engagement decline. Six screens doing wallet work. Consolidated
                into unified card-stack interface. Architecture beats features &mdash; the
                problem was cognitive load, not missing functionality.
              </p>
              <div className={s.storyMetrics}>130%+ YoY engagement &bull; 40% faster comparison</div>
            </div>
          </div>

          <h3 className={s.subHeading}>Design Systems &amp; Process</h3>
          <div className={s.storyGrid}>
            <div className={s.storyCard}>
              <div className={s.storyCategory}>Infrastructure</div>
              <h4>Cumberland Design System</h4>
              <p>
                Multi-phase tokenized system for Dollar General + pOpshelf. Not a
                component library &mdash; strategic infrastructure that determines
                whether teams can iterate at the speed AI enables.
              </p>
              <div className={s.storyMetrics}>35% velocity increase &bull; 89% consistency &bull; 5-day onboarding</div>
            </div>
            <div className={s.storyCard}>
              <div className={s.storyCategory}>0 to 1</div>
              <h4>Swimlane UX Build</h4>
              <p>
                Six years from Series A through C. Built the entire UX function from
                scratch &mdash; first hire, first design system, first research practice.
                Scaled design alongside the company.
              </p>
              <div className={s.storyMetrics}>6 years &bull; Series A &rarr; C &bull; 0 &rarr; 1 UX</div>
            </div>
          </div>

          <h3 className={s.subHeading}>AI Integration &amp; Innovation</h3>
          <div className={s.storyGrid}>
            <div className={s.storyCard}>
              <div className={s.storyCategory}>AI-Augmented Process</div>
              <h4>Design-Led AI Workflow</h4>
              <p>
                Developed 9-step AI-augmented design process. AI generates 5&ndash;10
                directions in days (cost to restart = zero). Human applies creative
                direction. Novel solutions happen in Figma. AI finds haystacks,
                humans find needles.
              </p>
              <div className={s.storyMetrics}>40% capacity gain &bull; 9-step process &bull; 5-phase cadence</div>
            </div>
            <div className={s.storyCard}>
              <div className={s.storyCategory}>Governance</div>
              <h4>AI Quality Infrastructure</h4>
              <p>
                Built governance model for AI-assisted design output. Without design
                systems and tokenization, you can&apos;t move at the speed AI enables.
                Design-led AI means the quality infrastructure, not the prompts.
              </p>
              <div className={s.storyMetrics}>Design governance &bull; Tokenization &bull; Quality at speed</div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 03 — THE AI NARRATIVE ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>AI Narrative</div>
          <h2 className={s.sectionHeading}>Talking About AI Authentically</h2>
          <p className={s.sectionDesc}>
            Every interview in 2026 will ask about AI. Your answer needs to demonstrate
            fluency without hype. Here&apos;s the framing.
          </p>

          <div className={s.narrativeGrid}>
            <div className={s.narrativeDo}>
              <h3>What to Say</h3>
              <p>
                <strong>&ldquo;I use AI as a creative director uses a team.&rdquo;</strong>{' '}
                AI generates volume, I apply judgment. The 9-step process I&apos;ve built
                lets me explore 5&ndash;10 directions in days, but the creative direction,
                the edge-case thinking, and the craft happen in Figma.
              </p>
              <p>
                <strong>&ldquo;Design-led AI is about governance, not tools.&rdquo;</strong>{' '}
                Without design systems, tokenization, and quality infrastructure, AI just
                creates more work. I build the systems that make AI output usable at scale.
              </p>
              <p>
                <strong>&ldquo;AI finds haystacks, humans find needles.&rdquo;</strong>{' '}
                In discovery, AI synthesizes thousands of survey responses. In design, AI
                generates starting points. But the insight, the novel connection, the thing
                that makes the product actually work &mdash; that&apos;s still human judgment.
              </p>
              <p>
                <strong>&ldquo;I can show you what this looks like in practice.&rdquo;</strong>{' '}
                Reference specific case studies. RBA was designed with AI-augmented exploration
                but shipped because of craft and systems thinking. The Cash Back integration
                used AI for competitive synthesis but succeeded because of design decisions
                about native vs. bolt-on.
              </p>
            </div>
            <div className={s.narrativeDont}>
              <h3>What Not to Say</h3>
              <p>
                Don&apos;t claim AI replaces designers. It doesn&apos;t. Companies that
                hear this worry you&apos;ll cut their team.
              </p>
              <p>
                Don&apos;t list AI tools like a resume. &ldquo;I use Claude, Figma Make,
                Midjourney&hellip;&rdquo; sounds like a feature list. Talk about outcomes
                and judgment instead.
              </p>
              <p>
                Don&apos;t oversell. Only 1 in 50 AI investments deliver transformational
                value (Gartner). Position yourself as the leader who makes AI actually
                deliver &mdash; not as an AI evangelist.
              </p>
              <p>
                Don&apos;t be defensive about AI. If they ask whether AI will replace
                design, flip it: &ldquo;AI makes bad designers faster at being bad. It
                makes good designers faster at being great. The question is who&apos;s
                directing the output.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 04 — COMMON QUESTIONS ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Question Bank</div>
          <h2 className={s.sectionHeading}>Common Questions &amp; Angles</h2>
          <p className={s.sectionDesc}>
            At the Director+ level, questions assess judgment, not skill. Here are the
            categories and how to approach each one.
          </p>

          <h3 className={s.subHeading}>Leadership &amp; Team</h3>
          <div className={s.questionCards}>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>They&apos;re assessing: management philosophy</div>
              <h4>&ldquo;How do you build and scale a design team?&rdquo;</h4>
              <p>
                <strong>L1:</strong> Hire for craft and judgment, build systems that multiply output,
                create a critique culture that raises everyone&apos;s bar.{' '}
                <strong>L2:</strong> DG story &mdash; small team, design system infrastructure,
                AI-augmented workflows, 5 people delivering output of 8&ndash;9.{' '}
                <strong>L3:</strong> Swimlane &mdash; 6-year 0-to-1 build through Series A/B/C.
              </p>
            </div>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>They&apos;re assessing: conflict resolution</div>
              <h4>&ldquo;Tell me about a time you disagreed with a stakeholder.&rdquo;</h4>
              <p>
                <strong>L1:</strong> I lead with data and user evidence, but I also know when to
                commit and iterate.{' '}
                <strong>L2:</strong> RBA story &mdash; when the crisis hit, I had to align engineering,
                product, and security on a redesign scope under time pressure.{' '}
                <strong>L3:</strong> The framework: present options with trade-offs, recommend one,
                commit to whatever is decided, then measure.
              </p>
            </div>
          </div>

          <h3 className={s.subHeading}>Design Process &amp; Craft</h3>
          <div className={s.questionCards}>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>They&apos;re assessing: process maturity</div>
              <h4>&ldquo;Walk me through your design process.&rdquo;</h4>
              <p>
                <strong>L1:</strong> I run a 9-step AI-augmented process across 5 project phases,
                from discovery through post-launch.{' '}
                <strong>L2:</strong> The process &mdash; Brain Dump, Scope, Bad Build, Creative
                Director pass, Refine, Save Context, Figma &amp; Craft, Build Again, Handoff.
                AI generates volume, I apply judgment.{' '}
                <strong>L3:</strong> Reference the design-led AI article. Show where AI accelerates
                and where humans still lead.
              </p>
            </div>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>They&apos;re assessing: systems thinking</div>
              <h4>&ldquo;How do you think about design systems?&rdquo;</h4>
              <p>
                <strong>L1:</strong> Design systems are strategic infrastructure, not component
                libraries. They determine whether teams can iterate at the speed AI enables.{' '}
                <strong>L2:</strong> Cumberland story &mdash; multi-phase tokenized system across
                DG + pOpshelf, 35% velocity increase, 5-day onboarding.{' '}
                <strong>L3:</strong> Without tokenization, AI-generated output is unusable at scale.
                The system IS the moat.
              </p>
            </div>
          </div>

          <h3 className={s.subHeading}>Impact &amp; Metrics</h3>
          <div className={s.questionCards}>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>They&apos;re assessing: business acumen</div>
              <h4>&ldquo;What&apos;s the biggest impact you&apos;ve had?&rdquo;</h4>
              <p>
                <strong>L1:</strong> Reversed a double-digit engagement decline into 130%+ growth
                through architectural simplification.{' '}
                <strong>L2:</strong> Wallet story &mdash; the problem wasn&apos;t missing features,
                it was cognitive load. Consolidated 6 screens into a unified card-stack.{' '}
                <strong>L3:</strong> Cash Back story &mdash; $9M earned by customers, 435M clips,
                191% YoY growth. Design decisions about native vs. bolt-on integration drove
                the business model.
              </p>
            </div>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>They&apos;re assessing: accountability</div>
              <h4>&ldquo;Tell me about something that failed.&rdquo;</h4>
              <p>
                <strong>L1:</strong> I led a design that looked right but didn&apos;t account for
                edge cases in production. The lesson shaped how I approach systems thinking now.{' '}
                <strong>L2:</strong> Be specific, own it, show what you changed. Never blame the
                team.{' '}
                <strong>L3:</strong> The framework: what you assumed, what actually happened, what
                you changed in your process going forward. The interviewer is assessing maturity,
                not perfection.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 05 — PORTFOLIO PRESENTATION ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Presentation</div>
          <h2 className={s.sectionHeading}>Portfolio Walk-Through</h2>
          <p className={s.sectionDesc}>
            Research confirms: portfolios showing process outperform polished-only
            portfolios. Don&apos;t walk through screens. Walk through decisions.
          </p>

          <ul className={s.checklist}>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Open with context, not screens.</strong> &ldquo;This was a crisis &mdash; 25K users locked out in 5 days&rdquo; is a better opening than &ldquo;Here&apos;s the home screen.&rdquo;</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Show the messy middle.</strong> The research artifacts, the rejected directions, the whiteboard sketches. This is what Director+ hiring managers want to see &mdash; your thinking process.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Quantify outcomes.</strong> Every case study should end with numbers: 25K users rescued, 130%+ engagement growth, 435M clips. Let the metrics do the closing.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Credit the team.</strong> &ldquo;I led the design, but shipping required alignment across engineering, product, and security.&rdquo; Crediting others demonstrates leadership maturity.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Prepare for &ldquo;tell me more.&rdquo;</strong> Have the Level 3 deep dive ready for each case study. Know the edge cases, the trade-offs, the things you&apos;d do differently.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Time it.</strong> 15 minutes for a full walk-through. 5 minutes per case study. Practice until you can hit this without rushing. Rambling through a case study is the most common mistake.</span>
            </li>
          </ul>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 06 — QUESTIONS TO ASK ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Your Turn</div>
          <h2 className={s.sectionHeading}>Questions to Ask Them</h2>
          <p className={s.sectionDesc}>
            The questions you ask reveal as much as the answers you give. Each question
            should demonstrate strategic thinking and genuine interest in their design
            maturity.
          </p>

          <div className={s.questionCards}>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>Design Maturity</div>
              <h4>&ldquo;Where does design sit in the org, and who does the design leader report to?&rdquo;</h4>
              <p>
                This reveals whether design has a seat at the table or is buried under
                engineering/product. The reporting structure tells you everything about
                how they value design.
              </p>
            </div>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>AI Strategy</div>
              <h4>&ldquo;How is the team thinking about AI in the design process &mdash; tooling, governance, or both?&rdquo;</h4>
              <p>
                This positions you as someone thinking beyond tools. If they say &ldquo;we
                haven&apos;t figured that out yet,&rdquo; that&apos;s your opening &mdash;
                you&apos;ve built this.
              </p>
            </div>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>Design System</div>
              <h4>&ldquo;Do you have a design system? If so, how mature is it &mdash; and who maintains it?&rdquo;</h4>
              <p>
                Signals that you think in terms of infrastructure, not just screens.
                If they don&apos;t have one, you&apos;ve built one. If they do, you can
                talk about scaling it.
              </p>
            </div>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>Success Criteria</div>
              <h4>&ldquo;What does success look like for this role in the first 90 days?&rdquo;</h4>
              <p>
                Forces them to articulate expectations. Also gives you ammunition for a
                follow-up &mdash; &ldquo;Here&apos;s how I&apos;d approach that based on
                what I&apos;ve done before.&rdquo;
              </p>
            </div>
            <div className={s.questionCard}>
              <div className={s.questionLabel}>Collaboration</div>
              <h4>&ldquo;How do design, product, and engineering collaborate on priorities?&rdquo;</h4>
              <p>
                Reveals whether it&apos;s a true triad or design is an order-taker. Your
                experience is cross-functional &mdash; this question shows you expect to
                be a partner, not a service provider.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <hr className={s.divider} />

      {/* ══════════ 07 — PRE-INTERVIEW CHECKLIST ══════════ */}
      <ScrollReveal>
        <section className={s.section}>
          <div className={s.sectionLabel}>Day-Of</div>
          <h2 className={s.sectionHeading}>Pre-Interview Checklist</h2>
          <p className={s.sectionDesc}>
            Run this 30 minutes before every interview. It takes 10 minutes and
            eliminates the &ldquo;I wish I had said&rdquo; feeling.
          </p>

          <ul className={s.checklist}>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Re-read the JD.</strong> Highlight the 3 things they care about most. Ensure your opening stories align.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Review your company research.</strong> Recent news, product direction, design team structure, interviewer&apos;s background.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Pick 3 stories.</strong> Choose the stories that best match this company&apos;s needs. Have Level 1, 2, and 3 ready for each.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Prepare your AI answer.</strong> They will ask. Have your framing ready: governance, not tools. Process, not prompts.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Prepare 2&ndash;3 questions for them.</strong> Tailor from the question bank above based on what you know about the company.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>Portfolio ready.</strong> Have case studies loaded and ready to share screen. Know which one to lead with for this specific company.</span>
            </li>
            <li className={s.checklistItem}>
              <span className={s.checkMark}>&#10003;</span>
              <span><strong>30-second positioning statement.</strong> &ldquo;I&apos;m a product design leader with 25 years of experience building UX teams at enterprise scale. Most recently I led design at Dollar General&apos;s digital platform through 12M+ MAU, integrating AI into the design process in a way that actually ships.&rdquo;</span>
            </li>
          </ul>

          <p className={s.closingText}>
            <strong>The goal is not to be perfect.</strong> The goal is to be specific, authentic, and
            prepared. At the leadership level, the best interviews feel like working sessions
            between peers &mdash; not performance reviews.
          </p>
        </section>
      </ScrollReveal>
    </div>
  );
}
