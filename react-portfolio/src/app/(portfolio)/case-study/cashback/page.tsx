import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContentSection } from '@/components/case-study/ContentSection';
import { StrategicContext } from '@/components/case-study/StrategicContext';
import { ResultsGrid } from '@/components/case-study/ResultsGrid';
import { ProcessTimeline } from '@/components/case-study/ProcessTimeline';
import { DecisionCallout } from '@/components/case-study/DecisionCallout';
import { PullQuote } from '@/components/case-study/PullQuote';
import { ExecQuote } from '@/components/case-study/ExecQuote';
import { ContextCards } from '@/components/case-study/ContextCards';
import { NextStudy } from '@/components/case-study/NextStudy';
import { Badge } from '@/components/ui/Badge';
import s from '../case-study.module.css';

export const metadata: Metadata = {
  title: 'Case Study: myDG Cash Back at Scale — JD McCulley',
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

export default function CashBackCaseStudy() {
  return (
    <main className={s.main}>
      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={s.hero}>
          <div className={s.caseStudyLabel}>Case Study</div>
          <div className={s.heroTitleContainer}>
            <DGLogo />
            <h1 className={s.heroTitle}>myDG Cash Back at Scale</h1>
          </div>
          <p className={s.heroSubtitle}>
            Designing the Ibotta partnership integration that put $9 million back in customers&apos; pockets, grew deal engagement 191% YoY, and redefined how Dollar General competes at 20,000+ stores.
          </p>

          <div className={s.metadata}>
            <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>UX Team Lead &amp; Design</div></div>
            <div><div className={s.metadataLabel}>Team</div><div className={s.metadataValue}>5 Cross-Functional</div></div>
            <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>Jan – Jul 2023</div></div>
            <div><div className={s.metadataLabel}>Platforms</div><div className={s.metadataValue}>App, Web, POS</div></div>
            <div><div className={s.metadataLabel}>Company</div><div className={s.metadataValue}>Dollar General</div></div>
          </div>
        </section>
      </ScrollReveal>

      {/* Executive Quote */}
      <ScrollReveal>
        <ExecQuote
          name="Emily Taylor"
          role="EVP & Chief Merchandising Officer, Dollar General"
          initials="ET"
          text="We are excited to provide an additional innovative option for our customers to help stretch their budgets. Ibotta's cash back rewards program further complements our continuous efforts to provide financial offerings and rewards to customers alongside our everyday low prices."
          source="Partnership Announcement, Jan 2023"
        />
      </ScrollReveal>

      {/* Strategic Context */}
      <StrategicContext
        label="Strategic Context"
        stats={[
          { value: 'First in Channel', desc: 'Dollar General was the first retailer in the discount channel to join the Ibotta Performance Network — moving ahead of every competitor in the space.' },
          { value: 'Two-Phase Rollout', desc: 'Jan 2023: IPN partnership announced. Jul 2023: DG Cash Back program launched publicly. A deliberate phased strategy from infrastructure to consumer-facing product.' },
          { value: 'Market Timing', desc: 'Launched during peak inflation and the end of SNAP emergency benefits. DG\u2019s value-conscious customer base needed new ways to stretch their budgets.' },
        ]}
        ecosystemLabel="Part of DG's Financial Services Ecosystem"
        ecosystem={[
          { label: 'DG Cash Back', active: true },
          { label: 'spendwell Banking' },
          { label: 'Sezzle BNPL' },
          { label: 'FIS Card Rewards' },
          { label: 'myDG Wallet' },
        ]}
      />

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <ContentSection number="01 — THE PROBLEM" title="Competing Without a Modern Rewards Mechanism" reduced>
        <div className={s.sectionBody}>
          <p>Dollar General needed more than coupons. Larger competitors had established cash back programs that drove both engagement and known-customer identification. DG had 20,000+ stores, 12 million monthly active app users, and a deeply loyal base of value-conscious shoppers — but no modern rewards mechanism to match. No one in the discount channel had made this move yet.</p>
          <p>The timing amplified the urgency. Inflation was running hot, SNAP emergency allotments had ended, and DG&apos;s core customers were stretching harder than ever. The challenge wasn&apos;t just building a feature — it was fundamentally shifting how a customer base accustomed to paper coupons and traditional discounting would engage with a new category of value delivery, without fracturing the deals experience they already relied on.</p>
        </div>
      </ContentSection>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="Native Integration, Not a Bolt-On">
        <div className={s.sectionBody}>
          <p>Led UX for the white-label Ibotta integration — the strategic decision that defined the entire project. Rather than embedding a partner experience inside DG&apos;s app, we designed from the customer backward: cash back offers would live alongside existing coupons in a single, co-mingled gallery. Same interaction patterns. Same visual language. No seams.</p>
          <p>AI-assisted synthesis of thousands of Alchemer survey responses informed our initial discovery framework, surfacing the insight that customers didn&apos;t distinguish between deal types — they distinguished between &ldquo;useful&rdquo; and &ldquo;not useful.&rdquo; That shaped every decision downstream.</p>
        </div>

        <div className="flex gap-2 flex-wrap mt-6 mb-8">
          <Badge variant="ai">AI-Synthesized Research</Badge>
          <Badge variant="tag-accent">White-Label Integration</Badge>
          <Badge variant="tag">Co-Mingled UX</Badge>
        </div>

        <ContextCards cards={[
          { type: 'before', title: 'Coupons Only', text: 'Traditional digital coupons with declining differentiation. Competitors offered richer savings experiences. Known-customer identification lagging behind the industry. No cash back mechanism at any scale.' },
          { type: 'after', title: 'Co-Mingled Deals Ecosystem', text: 'Cash back alongside coupons in a unified gallery. Closed-loop rewards keeping value in the DG ecosystem. First-in-channel positioning. A modern rewards mechanism that competes with anyone — at DG scale.' },
        ]} />

        <div className={s.bizModel}>
          <div className={s.bizModelIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <div>
            <div className={s.bizModelLabel}>Why UX Drives Revenue</div>
            <div className={s.bizModelTitle}>Pay-Per-Sale, Not Pay-Per-Click</div>
            <div className={s.bizModelText}>
              The Ibotta Performance Network uses a pay-per-sale model — advertisers only pay when a customer actually purchases. That makes the clip-to-purchase conversion funnel the literal revenue engine. Every UX decision that improves discoverability, clip rates, or redemption friction directly impacts the business model. Design isn&apos;t decorating the feature — it&apos;s the mechanism that makes the economics work.
            </div>
          </div>
        </div>

        {/* ── Device Showcase: Before → After ── */}
        <div className={s.deviceShowcase}>
          {/* BEFORE */}
          <div className={s.deviceCol}>
            <span className={s.deviceColLabel}>Before</span>
            <div className={s.deviceAnnotated}>
              <div className={`${s.deviceFrame} ${s.deviceFrameBefore}`}>
                <div className={s.deviceNotch} />
                <div className={s.deviceScreen}>
                  <img src="/assets/images/dg-deals-before.png" alt="DG Explore Deals — Coupons only" className={s.deviceScreenshot} />
                </div>
              </div>

              <div className={s.annotationLeft} style={{ top: '12.5%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Separate Categories</strong>
                  Coupons, Weekly Ads, and Rebates exist as tabs — but no Cash Back in the ecosystem
                </div>
              </div>

              <div className={s.annotationLeft} style={{ top: '37.7%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>No Cash Back</strong>
                  Only coupons available — no modern rewards mechanism to compete
                </div>
              </div>

              <div className={s.annotationLeft} style={{ top: '57.7%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Single Deal Type</strong>
                  Every card is a coupon — declining differentiation against competitors
                </div>
              </div>

              <div className={s.annotationLeft} style={{ top: '77%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Single Deal Gallery</strong>
                  Column list with basic Coupon cards — no visual hierarchy between deal types
                </div>
              </div>
            </div>
          </div>

          {/* Transition Arrow */}
          <div className={s.deviceTransition}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </div>

          {/* AFTER */}
          <div className={s.deviceCol}>
            <span className={`${s.deviceColLabel} ${s.deviceColLabelAfter}`}>After</span>
            <div className={s.deviceAnnotated}>
              <div className={s.deviceFrame}>
                <div className={s.deviceNotch} />
                <div className={s.deviceScreen}>
                  <img src="/assets/images/dg-deals-after.png" alt="DG Explore Deals — Coupons &amp; Cash Back co-mingled" className={s.deviceScreenshot} />
                </div>
              </div>

              <div className={s.annotation} style={{ top: '9.5%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Unified Tabs</strong>
                  Coupons &amp; Cash Back in a single entry point — no separate sections
                </div>
              </div>

              <div className={s.annotation} style={{ top: '34.7%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Search-First Filters</strong>
                  Toggle between deal types without leaving the feed
                </div>
              </div>

              <div className={s.annotation} style={{ top: '54.7%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Co-Mingled Feed</strong>
                  Cash Back and Coupons side by side — customers can clip everything from a single location
                </div>
              </div>

              <div className={s.annotation} style={{ top: '77%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Tile &amp; Gallery Redesign</strong>
                  Two-column grid with rich product imagery, badge system, and clip actions at a glance
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ══════════ 03 — THE PROCESS ══════════ */}
      <ContentSection number="03 — THE PROCESS" title="Discovery, Taxonomy, Iteration">
        <div className={s.sectionBody}>
          <p>The fundamental question: how do you make two deal types coexist without confusion? Coupons required clipping. Cash back required purchasing. Different mechanics, different mental models — but our customers expected a single, unified savings experience.</p>
        </div>

        <ProcessTimeline steps={[
          { num: '01', title: 'Taxonomy Design', desc: 'Separated cash back from coupons in the data model while presenting them together in the UI. Clean categories, shared visual language.' },
          { num: '02', title: 'Gallery Architecture', desc: 'Co-mingled deals gallery with searchable, filterable discovery. Designed card layouts and offer hierarchy for maximum clip rates.' },
          { num: '03', title: 'Wallet Integration', desc: 'Integrated DG Cash redemption pathway into the wallet. Cash back earnings felt immediate and accessible, not buried.' },
          { num: '04', title: 'Clip Rate Optimization', desc: 'Iterated on deal presentation, savings callout prominence, and interaction patterns with Ibotta\u2019s team. Tested and shipped.' },
        ]} />

        <DecisionCallout decisions={[
          { icon: '📐', title: 'Co-Mingled vs. Separate Tabs', text: 'We chose to show cash back and coupons together rather than in separate tabs. Customer research showed they don\'t think in deal categories — they think in products and brands. Separating would have forced a mental model that didn\'t exist.' },
          { icon: '🔍', title: 'Search-First Discovery', text: 'Added full-text search and quick filters to a deals surface that had previously only offered browsing. With hundreds of offers at any time, findability drove clip rates more than presentation.' },
          { icon: '🛡️', title: 'Native Feel Over Partner Branding', text: 'Ibotta\'s white-label SDK allowed customization, but the real work was in the UX layer. Every interaction — from offer cards to redemption confirmation — used DG\'s design language. Customers never felt they\'d left the app.' },
          { icon: '🔄', title: 'Closed-Loop Reward Ecosystem', text: 'DG Cash can only be redeemed in-store at Dollar General. This was a deliberate business and design decision: earned value stays in the DG ecosystem, driving repeat visits and reinforcing the savings loop. The wallet UX had to make this feel like a benefit, not a limitation — immediate access, clear balance, frictionless spend.' },
          { icon: '📊', title: 'Anti-Stacking Logic', text: 'Digital coupons and cash back offers can\'t apply to the same item simultaneously — coupons take priority. We designed the gallery UI to make this transparent, not confusing: clear visual differentiation between deal types, contextual messaging when both exist for the same product, and smart defaults that always favor the customer\'s best deal.' },
        ]} />
      </ContentSection>

      {/* ══════════ 04 — THE RESULTS ══════════ */}
      <ContentSection number="04 — THE RESULTS" title="Proof at Scale">
        <div className={s.sectionBody}>
          <p>This became one of the highest-impact consumer-facing features in Dollar General&apos;s digital history. The combination of partner integration, native design, and operational scale delivered results that validated the approach at every level.</p>
        </div>

        <ResultsGrid results={[
          { metric: '435M', label: 'Total deal clips across the platform', context: 'One of DG\u2019s highest-engagement features', featured: true },
          { metric: '$9M', label: 'Earned by Customers', context: 'Real savings, real loyalty' },
          { metric: '191%', label: 'YoY Clip Growth', context: 'Accelerating, not plateauing' },
          { metric: '209%', label: 'YoY Redemption Growth', context: 'Customers aren\u2019t just clipping \u2014 they\u2019re buying' },
          { metric: '12M+', label: 'Monthly Active Users', context: 'Cash back drives account creation and known customer growth' },
        ]} />

        <ExecQuote
          name="Chad Fox"
          role="Chief Marketing Officer, Dollar General"
          initials="CF"
          text="As customers continue to seek new ways to stretch their budgets, we're excited to introduce DG Cash Back on hundreds of Dollar General items to help them achieve that goal."
          source="Press Release, Jul 2023"
        />
      </ContentSection>

      {/* ══════════ 05 — THE LEARNING ══════════ */}
      <ContentSection number="05 — THE LEARNING" title="Make the Feature Disappear">
        <div className={s.sectionBody}>
          <p>Partner integrations succeed when they feel native. The taxonomy decision — cleanly separating deals from coupons in the data model while presenting them together in the UI — made the Ibotta partnership feel like it had always been part of Dollar General. Customers didn&apos;t know it was powered by a partner. They didn&apos;t care. That&apos;s the bar.</p>
          <p>The lesson extends beyond this one partnership. Every integration, acquisition, or feature expansion should be evaluated against a single question: does it feel like it belongs here? If the answer is no, the experience is failing — regardless of how the numbers look.</p>
        </div>

        <PullQuote
          text="Design isn't about the feature. It's about making the feature disappear into the product."
          attr="Reflection — Cash Back Integration"
        />
      </ContentSection>

      {/* Next Study */}
      <NextStudy
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
