import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from './emergent-design.module.css';

export const metadata: Metadata = {
  title: 'Design Didn\'t Disappear — It Relocated — JD McCulley',
  description:
    'Why the designer\'s job isn\'t disappearing — it\'s relocating. On design leadership in the age of AI.',
  openGraph: {
    images: [{ url: '/api/og/?page=emergent-design', width: 1200, height: 630 }],
  },
};

export default function EmergentDesignArticle() {
  return (
    <main>
      {/* ══════════ HEADER ══════════ */}
      <header className={s.header}>
        <div className={s.sectionLabel}>Article</div>
        <h1 className={s.heading}>
          Design Didn&apos;t Disappear —<br />
          It Relocated
        </h1>
        <p className={s.subtitle}>
          Why the designer&apos;s job isn&apos;t disappearing — it&apos;s
          relocating.
        </p>
      </header>

      {/* ══════════ ARTICLE BODY ══════════ */}
      <div className={s.articleWrapper}>
        <article className={s.articleBody}>
          {/* ── Opening ── */}
          <ScrollReveal>
            <p className={s.lead}>
              There&apos;s a version of this conversation that makes designers
              defensive. AI generates wireframes. AI produces mockups. AI ships
              interfaces. So what do we do?
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              I&apos;ve sat in that conversation. And I&apos;ve watched smart
              designers spend their energy arguing for relevance instead of
              demonstrating it.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              This article is about a different question. Not{' '}
              <em>will designers survive AI</em> — but{' '}
              <em>where does design work actually live now?</em> Because the
              answer changes everything about how you lead, how you staff, and
              how you talk about your value.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.accentDivider} />
          </ScrollReveal>

          {/* ── Manifesto ── */}
          <ScrollReveal>
            <div className={s.manifestoBanner}>
              <p>
                Craft without speed is a luxury.
                <br />
                <strong>Speed without craft is a liability.</strong>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              That tension is where design-led AI lives. Traditional designers
              bring taste but can&apos;t scale. Pure technologists ship fast but
              lack the design eye. The rare leader operates in both — directing
              vision and producing at speed, with the judgment to know when
              AI&apos;s output is worth keeping and when it isn&apos;t.
            </p>
          </ScrollReveal>

          {/* ── Spectrum ── */}
          <ScrollReveal>
            <div className={s.spectrumBlock}>
              <div className={s.spectrumLabel}>
                Craft to Technology Spectrum
              </div>
              <div className={s.spectrumBar}>
                <div className={s.spectrumFill} />
                <div className={s.spectrumMarker} />
              </div>
              <div className={s.spectrumEndpoints}>
                <span>Traditional Designer</span>
                <span>Pure Technologist</span>
              </div>
              <div className={s.spectrumPosition}>
                <span>Creative Director + AI Operator</span>
                <small>
                  — the intersection where design leadership lives now
                </small>
              </div>
            </div>
          </ScrollReveal>

          {/* ── What AI Changed ── */}
          <ScrollReveal>
            <h2>
              What AI Actually{' '}
              <span className={s.gradientText}>Changed</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>Not the what. The when and the where.</p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              AI changed <strong>when</strong> design decisions get made and{' '}
              <strong>where</strong> the value of those decisions lives. For most
              of design history, the value was in the making — the wireframe, the
              comp, the prototype. The artifact was the deliverable. Now, the
              artifact can be generated in minutes. Which means the value has
              migrated upstream and downstream from the making itself.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              <strong>Upstream:</strong> the quality of intent you bring. What
              problem are you actually solving? What does success look like for a
              real user? What does this product need to communicate before a user
              has read a word?
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              <strong>Downstream:</strong> the judgment you apply to what
              surfaces. Is this direction worth pursuing? Does this feel right
              for the brand? What&apos;s missing that AI didn&apos;t know to
              include? What has to happen in Figma before this is actually good?
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              The middle — the production layer — has compressed. That&apos;s
              real. But it didn&apos;t erase design. It clarified what design
              actually is.
            </p>
          </ScrollReveal>

          {/* ── emergent.sh ── */}
          <ScrollReveal>
            <h2>
              The Tool That Made Me{' '}
              <span className={s.gradientText}>Rethink the Question</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              A few weeks ago I started playing with emergent.sh. If you
              haven&apos;t seen it — you describe what you want to build in
              plain language, and a system of AI agents handles the coding,
              design, and deployment. Production-ready apps in minutes, not
              sprints.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.toolCard}>
              <div className={s.toolCardVisual}>
                <div className={s.toolName}>emergent.sh</div>
                <div className={s.toolTagline}>
                  Describe intent.
                  <br />
                  AI handles the rest.
                </div>
                <div className={s.toolBadge}>✦ Proof Point</div>
              </div>
              <div className={s.toolCardContent}>
                <h3>What it reveals about design leadership</h3>
                <p>
                  When a functional app can emerge from a prompt in ten minutes,
                  the value of design doesn&apos;t disappear. It relocates. The
                  tool does the generating. You do the recognizing.
                </p>
                <p>
                  The gap between a mediocre product and a meaningful one lives
                  entirely in the decisions made before and after those ten
                  minutes. That&apos;s where design leaders work now. That&apos;s
                  always been where design leaders work.
                </p>
                <p>We just finally have the tools to prove it.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.pullQuote}>
              <p>
                My first reaction was the one most designers have: this is going
                to displace someone. My second reaction — the one that actually
                stuck — was more interesting: this changes what the design work
                is, not whether design work exists.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              That&apos;s emergence as a design skill. Not controlling the
              output — reading it. Knowing which direction is worth pursuing
              before the thing is refined enough to be obviously good or
              obviously bad. That requires taste. Experience. Domain knowledge. A
              sense of what a real user would do with this that no AI has yet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              Emergent.sh didn&apos;t make designers irrelevant. It made the
              argument for design leadership clearer than anything I could have
              written.
            </p>
          </ScrollReveal>

          {/* ── The New Workflow ── */}
          <ScrollReveal>
            <h2>
              The New <span className={s.gradientText}>Workflow</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              There&apos;s a designer named Tom Johnson who mapped out his
              process after AI entered his stack. Nine steps from brain dump to
              developer handoff. What struck me was how closely it mirrors what I
              landed on independently — not because we copied each other, but
              because it&apos;s the workflow that actually works.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <ol className={s.numberedList}>
              <li>
                <p>
                  <strong>Intent</strong>
                  What are you trying to solve? Who for? What does failure look
                  like? This part is still human, and always will be.
                </p>
              </li>
              <li>
                <p>
                  <strong>First Pass</strong>
                  Let AI generate something messy. Not looking for final designs
                  — looking for direction. AI throws chips and icons and cards
                  everywhere. Tom Johnson calls it &quot;vomiting on the
                  page.&quot; The cost to switch is effectively zero now. You can
                  start from scratch ten times in a day.
                </p>
              </li>
              <li>
                <p>
                  <strong>Creative Director</strong>
                  Redline. Annotate. Find what&apos;s worth keeping. This is the
                  emergence moment — pattern recognition across AI&apos;s
                  maximalist output. The skill is knowing what&apos;s worth
                  pursuing before it&apos;s refined enough to be obviously good.
                </p>
              </li>
              <li>
                <p>
                  <strong>Figma Craft</strong>
                  This is still the highest-value moment in the process and
                  nothing has changed that. The flow state. The precision. The
                  novel solutions that emerge when you&apos;re working visually.
                  AI compresses everything before and after this moment. The
                  craft moment is human.
                </p>
              </li>
              <li>
                <p>
                  <strong>Handoff</strong>
                  Not just static mocks — functional prototypes with states. The
                  conversation with engineering starts from a richer place than
                  it ever did before.
                </p>
              </li>
            </ol>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.callout}>
              <div className={s.calloutLabel}>Key Distinction</div>
              <h3>
                AI gives you a great starting point, even when the output is
                rough.
              </h3>
              <p>
                The value isn&apos;t that it&apos;s good — it&apos;s that
                it&apos;s <em>something</em>. Instead of your designer staring
                at a blank canvas for two hours, they have a messy first pass
                they can react to in twenty minutes. The judgment about what to
                keep, refine, or throw out entirely — that&apos;s the craft. AI
                didn&apos;t diminish it. It made it more visible.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Where AI Falls Short ── */}
          <ScrollReveal>
            <h2>
              Where AI <span className={s.gradientText}>Falls Short</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              I want to be honest about this, because the hype usually
              isn&apos;t.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              We ran a split tender usability test — that&apos;s when a customer
              pays with multiple payment methods in a single transaction. I
              usually run eight participants. We were under capacity pressure, so
              I considered going lean. We ended up running seven.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              <strong>
                Participant seven failed a task that the other six passed.
              </strong>{' '}
              If we&apos;d stopped at six, we would have shipped a broken flow to
              millions of users.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.pullQuote}>
              <p>
                AI couldn&apos;t have caught that. Synthetic users can give you
                directional signal, but they don&apos;t do the unexpected thing.
                That seventh participant is still the most valuable data point in
                UX.
              </p>
              <cite>
                The judgment is design leadership — no AI makes it for you
              </cite>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              They don&apos;t misread a label because they&apos;re distracted.
              They don&apos;t try to tap two things at once. They don&apos;t
              bring the particular context of a specific person&apos;s life to a
              Tuesday afternoon checkout.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              My job as a design leader is knowing when we need that seventh
              participant and when AI-assisted synthesis is sufficient. Both are
              legitimate choices. Neither is obviously right in every situation.
              That judgment is design leadership — and no AI is going to make it
              for you.
            </p>
          </ScrollReveal>

          {/* ── What This Means for Teams ── */}
          <ScrollReveal>
            <h2>
              What This Means for{' '}
              <span className={s.gradientText}>Design Teams</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              A team of five can deliver what eight or nine used to require.
              That&apos;s not a theoretical claim — it&apos;s what I observed
              running the UX organization at Dollar General across four years.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              AI didn&apos;t replace anyone. It changed what everyone was doing.
              Research synthesis that used to take weeks could be done in hours —
              freeing the researcher to focus on the qualitative judgment that
              actually required her expertise. Design exploration that used to
              consume a sprint could be done in an afternoon — freeing the
              designer to focus on systems-level decisions that required her
              seniority. And when capacity required me to take on IC work — a
              full authentication redesign that couldn&apos;t wait for a hire —
              AI is what made that possible without dropping the leadership
              responsibilities.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              The team didn&apos;t get smaller. The team got more leveraged.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className={s.callout}>
              <div className={s.calloutLabel}>The Player-Coach Model</div>
              <h3>
                Design-led AI requires a leader who&apos;s close to the work.
              </h3>
              <p>
                If you&apos;re directing AI-augmented output from a corner
                office, you&apos;ll miss the moment the tool gives you something
                worth keeping. You&apos;ll miss the seventh participant.
                You&apos;ll approve the flow that feels finished but isn&apos;t.
                The best design leaders stay close to the work. AI actually makes
                that <em>more</em> possible, not less.
              </p>
            </div>
          </ScrollReveal>

          {/* ── The Shift Nobody's Talking About ── */}
          <ScrollReveal>
            <h2>
              The Shift{' '}
              <span className={s.gradientText}>
                Nobody&apos;s Talking About
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              One more thing, and this one&apos;s further out but worth naming.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              The interface itself is changing. We&apos;ve spent twenty-five
              years designing screens people navigate — tapping, scrolling,
              searching. AI agents are beginning to mediate that relationship. A
              customer doesn&apos;t browse for a deal; they ask their AI to find
              one.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              For product companies, that means the product catalog, the pricing
              structure, the deal architecture — all of it needs to be designed
              so an AI agent can represent it well in a conversation. That&apos;s
              a design problem. It&apos;s not a technology problem, and it&apos;s
              not a copywriting problem. It&apos;s an information architecture
              problem that requires design thinking at a level most organizations
              don&apos;t have yet.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              The design leaders who understand this — who can sit at the table
              and help a company think about what their product means in an
              agent-mediated world — those are the people who are going to shape
              what comes next.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              That&apos;s what design-led AI is preparing for. Not just the
              workflow of today. The paradigm of what&apos;s coming.
            </p>
          </ScrollReveal>

          {/* ── Closing Quote ── */}
          <ScrollReveal>
            <div className={s.closingQuote}>
              <p>
                AI compresses everything before and after the craft moment.
                <br />
                But the craft moment is human.
                <br />
                <em>That&apos;s still where novel solutions emerge.</em>
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
