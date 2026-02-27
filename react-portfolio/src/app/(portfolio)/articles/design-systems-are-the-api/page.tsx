import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from './design-systems-are-the-api.module.css';

export const metadata: Metadata = {
  title: 'Design Systems Are the API Now — JD McCulley',
  description:
    'Why the design-code gap was never about skill, how tools like Pencil.dev are compressing the translation layer, and what this means for design systems and AI-augmented workflows.',
  openGraph: {
    images: [
      { url: '/api/og/?page=design-systems-are-the-api', width: 1200, height: 630 },
    ],
  },
};

export default function DesignSystemsAreTheApiArticle() {
  return (
    <main>
      {/* ══════════ HEADER ══════════ */}
      <header className={s.header}>
        <div className={s.sectionLabel}>Article</div>
        <h1 className={s.heading}>Design Systems Are the API Now</h1>
        <p className={s.subtitle}>
          The design-code convergence isn&apos;t about who learns what — it&apos;s
          about where the files live.
        </p>
      </header>

      {/* ══════════ ARTICLE BODY ══════════ */}
      <div className={s.articleWrapper}>
        <article className={s.articleBody}>
          {/* ── Opening ── */}
          <ScrollReveal>
            <p className={s.lead}>
              There&apos;s a gap in every product organization that nobody puts
              on a roadmap. It lives between what gets designed and what gets
              shipped. It&apos;s been there for twenty-five years. And it&apos;s
              about to close.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              I&apos;ve been watching the design-code convergence accelerate for
              the past year. Tools like Claude Code and Cursor changed how fast
              designers can prototype. Figma remains where the real craft
              happens — the flow state, the precision, the novel solutions that
              emerge when you&apos;re working visually. But the handoff?
              That&apos;s still where fidelity goes to die.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              This isn&apos;t about designers learning to code or developers
              learning to design. That framing has been around for fifteen years
              and it&apos;s never been the point.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              It&apos;s about the space between those two disciplines getting
              small enough that the work stays coherent from canvas to
              production.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.accentDivider} />
          </ScrollReveal>

          {/* ── Manifesto ── */}
          <ScrollReveal>
            <div className={s.manifestoBanner}>
              <p>
                Design intent shouldn&apos;t need a translator.
                <br />
                <strong>
                  The best design systems make the gap disappear.
                </strong>
              </p>
            </div>
          </ScrollReveal>

          {/* ── The Gap ── */}
          <ScrollReveal>
            <h2>
              The Gap Was Never About{' '}
              <span className={s.gradientText}>Skill</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              The problem was structural, not human. Design files live in one
              ecosystem. Code lives in another. And the translation between them
              is where intent gets quietly reinterpreted.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              Every design leader I know has felt this. You ship a Figma file
              that&apos;s pixel-perfect, and what comes back from development is
              close but not quite. A border radius rounds differently. A spacing
              token gets approximated. A component that looked unified in the
              spec drifts slightly in production.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              <strong>None of that is anyone&apos;s fault.</strong> It&apos;s the
              cost of maintaining two separate sources of truth and asking humans
              to keep them synchronized. Multiply that across a product with
              hundreds of screens and you&apos;ve got craft debt that compounds
              silently.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              I&apos;ve built design systems at enterprise scale — tokenized,
              shared across brands, adopted by engineering teams. The hardest
              part was never building the components. It was maintaining fidelity
              through the handoff. Every time a design decision had to be
              re-interpreted by a developer reading a Figma spec, there was a
              chance for drift.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.pullQuote}>
              <p>
                The handoff isn&apos;t where design ends — it&apos;s where
                design fidelity starts to bleed.
              </p>
              <cite>The cost of two sources of truth</cite>
            </div>
          </ScrollReveal>

          {/* ── Pencil.dev ── */}
          <ScrollReveal>
            <h2>
              What Pencil.dev Actually{' '}
              <span className={s.gradientText}>Changes</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.toolCard}>
              <div className={s.toolCardVisual}>
                <div className={s.toolName}>Pencil.dev</div>
                <div className={s.toolTagline}>
                  Design on canvas.
                  <br />
                  Land in code.
                </div>
                <div className={s.toolBadge}>✦ Convergence Point</div>
              </div>
              <div className={s.toolCardContent}>
                <h3>One source of truth</h3>
                <p>
                  Pencil puts a design canvas inside the IDE. The design files
                  are stored as JSON in Git — version controlled, branched,
                  merged alongside the code they describe. That&apos;s not a
                  workflow improvement. That&apos;s removing an entire
                  translation layer from the product lifecycle.
                </p>
                <p>
                  When your design files and your code files live in the same
                  repo, the handoff isn&apos;t a handoff anymore. It&apos;s just
                  the work. One source of truth. No export step. No &quot;does
                  this match the spec?&quot; conversations. And if you&apos;ve
                  been working in Figma, you can copy frames directly into
                  Pencil — layers, auto-layout, styles come through.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              This is a fundamentally different proposition than &quot;design to
              code&quot; tools that generate code from mockups. Those tools still
              assume two worlds that need a bridge. Pencil asks: what if there
              was only one world?
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              That matters. Not because every designer needs to live in an
              IDE — but because the design decisions shouldn&apos;t have to
              survive a translation to remain intact.
            </p>
          </ScrollReveal>

          {/* ── The Contract ── */}
          <ScrollReveal>
            <h2>
              Design Systems Become the{' '}
              <span className={s.gradientText}>Contract</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              Here&apos;s the part I keep thinking about. The part most people
              aren&apos;t talking about yet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              If design files and code files share a repo, design systems stop
              being reference libraries that teams consult and developers
              approximate. They become the{' '}
              <strong>literal contract</strong> between what gets designed and
              what gets shipped.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.callout}>
              <div className={s.calloutLabel}>The Shift</div>
              <h3>
                Your tokens, your components, your layout logic — they&apos;re
                not documentation anymore. They&apos;re infrastructure.
              </h3>
              <p>
                That&apos;s a fundamentally different thing than a Figma
                component library with a Confluence page explaining how to use
                it.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              When the system is shared across design and code files in the same
              repo, a designer changing a token changes it everywhere. A
              developer using a component is using the same component the
              designer built. There&apos;s no gap to drift into.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              I&apos;ve spent years bridging this gap manually — building
              tokenized systems, writing naming conventions, sitting in handoff
              meetings to make sure the engineering team understood the intent
              behind a layout decision. All of that overhead exists because
              we&apos;ve been maintaining two separate representations of the
              same product.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              <strong>What happens when there&apos;s only one?</strong>
            </p>
          </ScrollReveal>

          {/* ── AI Workflows ── */}
          <ScrollReveal>
            <h2>
              Why This Matters for{' '}
              <span className={s.gradientText}>AI Workflows</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              This connects to something I&apos;ve been working through in my
              own practice. When you&apos;re using AI to generate volume —
              screens, prototypes, variations — the design system is what keeps
              that output coherent.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              AI is a maximalist. It throws components and styles everywhere
              without regard for consistency. It creates new button styles when
              existing ones would work. It invents spacing values that
              don&apos;t exist in your token set. It builds things that, to the
              untrained eye, look like a product. But they&apos;re not designed.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <ol className={s.numberedList}>
              <li>
                <p>
                  <strong>Without a strong system</strong>
                  AI acceleration means you ship inconsistency faster. Every
                  generated screen introduces new patterns that don&apos;t match
                  existing ones. The speed is real but the coherence isn&apos;t.
                </p>
              </li>
              <li>
                <p>
                  <strong>With a shared system</strong>
                  The AI has guardrails that actually hold. The system isn&apos;t
                  a suggestion the AI might follow — it&apos;s the material the
                  AI builds with. Components are constraints. Tokens are
                  boundaries. The design system becomes the grammar of the
                  product.
                </p>
              </li>
              <li>
                <p>
                  <strong>With a converged system</strong>
                  Where design and code share the same source of truth, those
                  guardrails are structural, not advisory. A component in the
                  system is the same component in the code. The AI can&apos;t
                  drift from the system because the system is the codebase.
                </p>
              </li>
            </ol>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.callout}>
              <div className={s.calloutLabel}>The Multiplier Effect</div>
              <h3>
                Design systems have always been infrastructure. In an
                AI-augmented workflow, they become the difference between speed
                that compounds quality and speed that compounds debt.
              </h3>
              <p>
                The system is what lets a small team move fast without losing
                coherence.
              </p>
            </div>
          </ScrollReveal>

          {/* ── The Question ── */}
          <ScrollReveal>
            <h2>
              The Question for Design{' '}
              <span className={s.gradientText}>Leaders</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              I don&apos;t know if Pencil.dev specifically is the tool that wins
              this space. It&apos;s early. There are rough edges. But the
              direction is right. And the convergence isn&apos;t going to wait
              for anyone to get comfortable with it.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              The question for design leaders isn&apos;t &quot;should my team
              learn this tool.&quot; It&apos;s more fundamental than that.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              <strong>
                Is your design system structured to survive the convergence
                that&apos;s coming?
              </strong>
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              Is it tokenized deeply enough that the tokens could be shared
              across design and code? Are your components documented at the
              level of behavior and constraint, not just visual spec? Is your
              naming architecture something a developer — or an AI — could parse
              without a walkthrough?
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              If the answer is no, every AI tool in the world won&apos;t close
              the gap. You&apos;ll just be generating inconsistency at scale.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              If the answer is yes, the convergence isn&apos;t a threat.
              It&apos;s the moment your system was built for.
            </p>
          </ScrollReveal>

          {/* ── Closing Quote ── */}
          <ScrollReveal>
            <div className={s.closingQuote}>
              <p>
                The design-code gap was never about skill.
                <br />
                It was about where the files live.
                <br />
                <em>Design systems are the API now.</em>
              </p>
            </div>
          </ScrollReveal>

          {/* ── Author Bio ── */}
          <ScrollReveal>
            <div className={s.authorBio}>
              <div className={s.authorAvatar}>JD</div>
              <div className={s.authorInfo}>
                <h4>JD McCulley</h4>
                <div className={s.authorTitle}>Product Design Leader</div>
                <p>
                  25 years building UX organizations at enterprise scale. Most
                  recently embedded design director at Dollar General, growing
                  the digital platform from 6M to 12M+ monthly active users.
                  Operating at the intersection of craft, technology, and
                  leadership.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </article>
      </div>
    </main>
  );
}
