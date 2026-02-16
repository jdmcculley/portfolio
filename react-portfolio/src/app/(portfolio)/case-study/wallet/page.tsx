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
import s from '../case-study.module.css';

export const metadata: Metadata = {
  title: 'Case Study: myDG Wallet — Reversing the Decline | JD McCulley',
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

export default function WalletCaseStudy() {
  return (
    <main className={s.main}>
      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={s.hero}>
          <div className={s.caseStudyLabel}>Case Study</div>
          <div className={s.heroTitleContainer}>
            <DGLogo />
            <h1 className={s.heroTitle}>myDG Wallet: Reversing the Decline</h1>
          </div>
          <p className={s.heroSubtitle}>
            Centralizing a fragmented wallet experience into a unified card-stack interface that reversed double-digit engagement decline and delivered 130%+ YoY growth — through strategic simplification and AI-augmented design exploration.
          </p>

          <div className={s.metadata}>
            <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>UX Team Lead &amp; Design</div></div>
            <div><div className={s.metadataLabel}>Team</div><div className={s.metadataValue}>4 Cross-Functional</div></div>
            <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>Q1 – Q2 2024</div></div>
            <div><div className={s.metadataLabel}>Platform</div><div className={s.metadataValue}>Mobile App</div></div>
            <div><div className={s.metadataLabel}>Company</div><div className={s.metadataValue}>Dollar General</div></div>
          </div>
        </section>
      </ScrollReveal>

      {/* Strategic Context */}
      <StrategicContext
        label="Strategic Context"
        stats={[
          { value: 'Double-Digit Decline', desc: 'Wallet engagement was dropping year-over-year with no sign of stabilization. Feature fragmentation was the root cause — not lack of features.' },
          { value: '12M+ MAU Platform', desc: 'The wallet served Dollar General\u2019s entire digital customer base. Every percentage point of engagement translated to millions of interactions monthly.' },
          { value: 'Post-Cash Back', desc: 'The successful Ibotta integration added a new value layer — but also added complexity. The wallet needed to unify, not just accumulate features.' },
        ]}
        ecosystemLabel="Wallet Feature Ecosystem"
        ecosystem={[
          { label: 'myDG Wallet', active: true },
          { label: 'DG Cash Back' },
          { label: 'Digital Coupons' },
          { label: 'DG Cash Balance' },
          { label: 'Wallet Barcode' },
          { label: 'Just For You' },
          { label: 'Order History' },
          { label: 'YTD Savings' },
          { label: 'Saved Deals' },
          { label: 'Cart Calculator' },
        ]}
      />

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <ContentSection number="01 — THE PROBLEM" title="Fragmented Experience, Declining Engagement">
        <div className={s.sectionBody}>
          <p>The myDG Wallet had become a patchwork. Clipped digital coupons, DG Cash Back offers, the DG Cash balance, the myDG wallet barcode for in-store scanning, personalized offers (DG Game prizes, birthday coupons, military and employee discounts), Order History, and Saved Deals (stranded on the shopping list) all lived across multiple screens and interaction patterns. Each feature had been added incrementally — reasonable in isolation, incoherent as a whole. Engagement was declining double-digits year-over-year.</p>
          <p>Customers couldn&apos;t answer a basic question: &ldquo;What do I have?&rdquo; Finding a clipped coupon before checkout meant navigating multiple tabs. Checking a DG Cash balance required a separate view. There was no running total of value earned — no YTD Savings, no sense of cumulative progress. The wallet barcode — the single interaction that activates all savings at the register — was disconnected from the deals it was meant to apply. The cognitive load was pushing customers away from a tool designed to save them money.</p>
        </div>

        <ContextCards cards={[
          { type: 'before', title: 'Scattered Across Screens', text: 'Clipped coupons in one tab. DG Cash balance in another. The wallet barcode buried in a separate flow. Order History siloed in its own section with no connection to which deals were redeemed. No single view connecting what you\u2019ve earned, what you\u2019ve clipped, and how to use it at checkout. Saved Deals stranded in the shopping list with no bridge to the wallet.' },
          { type: 'after', title: 'One Wallet, Everything Visible', text: 'Clipped coupons, DG Cash Back offers, and DG Cash balance unified in a card-stack interface. Wallet barcode front and center for in-store activation. Quick filters for deal types — including a \u201CJust For You\u201D feed pulling DG Game prizes, birthday coupons, military, and employee offers into one personalized view. Order History integrated as a shared screen. YTD Savings tracker giving customers a running total of value earned. Average session: 3\u20134 minutes of high-intent engagement.' },
        ]} />

        <div className={s.bizModel}>
          <div className={s.bizModelIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5"><path d="M4 12h16M4 6h16M4 18h16" /></svg>
          </div>
          <div>
            <div className={s.bizModelLabel}>Why This Matters</div>
            <div className={s.bizModelTitle}>Cognitive Load Is a Business Metric</div>
            <div className={s.bizModelText}>
              Every additional tap between a customer and their savings is friction that reduces clip rates, redemption, and return visits. At 12M MAU, even small reductions in cognitive load compound into significant engagement gains. The wallet isn&apos;t a feature — it&apos;s the front door to DG&apos;s entire digital value proposition.
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="Centralize, Simplify, Unify">
        <div className={s.sectionBody}>
          <p>Led the wallet redesign and centralization strategy. Rather than adding features, we removed friction. The hypothesis was simple: the problem wasn&apos;t missing functionality — it was scattered functionality. Clipped coupons, DG Cash Back offers, DG Cash balance, and the wallet barcode all already existed. They just couldn&apos;t be found, compared, or used from a single interface.</p>
          <p>The redesign had to serve two moments: the pre-shopping moment (browsing deals, clipping offers, checking DG Cash balance) and the in-store moment (scanning the wallet barcode to apply coupons and spend DG Cash at the register). Both had to feel like one continuous flow, not separate tools.</p>
          <p>Used AI-generated design explorations to rapidly test card stack layouts, filter patterns, and information hierarchy — generating ten directions in days, then applying design judgment to find what actually reduced cognitive load. This approach allowed us to explore the design space more thoroughly in less time and ground every decision in testing rather than assumptions.</p>
          <Badge variant="ai">AI-Augmented Exploration</Badge>
        </div>
      </ContentSection>

      {/* ══════════ 03 — THE PROCESS ══════════ */}
      <ContentSection number="03 — THE PROCESS" title="Audit, Centralize, Test, Ship">
        <div className={s.sectionBody}>
          <p>The fundamental question: how do you consolidate clipped coupons, DG Cash Back offers, DG Cash balance management, wallet barcode scanning, and Saved Deals integration into a single interface — without losing functionality or increasing confusion? The answer started with understanding what customers actually used versus what we assumed they needed.</p>
        </div>

        <ProcessTimeline steps={[
          { num: '01', title: 'Feature Audit', desc: 'Mapped every wallet function and user path — including Saved Deals (previously stranded on the shopping list) and Cart Calculator. Identified overlapping features, dead-end flows, and the top 5 tasks that accounted for 80% of wallet sessions.' },
          { num: '02', title: 'Centralization', desc: 'Unified clipped coupons, DG Cash Back offers, personalized offers, and DG Cash balance into a single card-stack interface. Wallet barcode elevated to a primary action. Order History brought in as a shared screen — closing the loop between deals clipped and purchases made. One entry point, one mental model.' },
          { num: '03', title: 'Card Stack + Filters', desc: 'Designed the card stack UI for side-by-side comparison. Added quick filters so customers could surface relevant deals in one tap without leaving the feed.' },
          { num: '04', title: 'Test & Optimize', desc: 'Conducted user testing on card interaction patterns and filter UX. Optimized for time-to-value — every interaction pressure-tested against our 3\u20134 minute session target.' },
        ]} />

        <DecisionCallout decisions={[
          { icon: '\uD83C\uDCCF', title: 'Card Stack vs. List View', text: 'The previous wallet used a vertical scrolling list. We replaced it with a card stack that allows comparing 3+ offers at a glance. Testing confirmed this reduced offer comparison time by 40% — customers stopped scrolling past offers and started comparing them.' },
          { icon: '\u23F1\uFE0F', title: 'Time-to-Value as the Core Metric', text: 'Rather than optimizing for session length or page views, we optimized for how fast a customer could find and act on value. Average wallet session settled at 3\u20134 minutes — long enough for meaningful engagement, short enough to indicate efficiency, not confusion.' },
          { icon: '\uD83D\uDCCA', title: 'Filter Taxonomy', text: 'Quick filters (cash back, digital coupons, personalized) gave customers control without complexity. The taxonomy mirrored how customers think about their savings — not how our backend organized deal types. The \u201CJust For You\u201D filter surfaced a surprisingly diverse set of personalization: DG Game prizes, birthday coupons, military discounts, and employee offers all routed through a single personalized feed. Filter adoption drove a 28% lift in relevant deal discovery.' },
          { icon: '\uD83E\uDD16', title: 'AI-Augmented Exploration', text: 'Used AI to generate rapid layout explorations — ten directions in days instead of weeks. This wasn\u2019t AI replacing design judgment; it was AI expanding the design space so judgment had more to work with. The final card stack pattern emerged from a direction AI surfaced that we wouldn\u2019t have reached through conventional iteration alone.' },
          { icon: '\uD83D\uDD00', title: 'Anti-Stacking Transparency', text: 'Digital coupons and DG Cash Back offers can\u2019t apply to the same item — if both are clipped, the coupon takes priority and the customer doesn\u2019t earn DG Cash on that product. Rather than hiding this rule, we designed for transparency: clear visual differentiation between deal types in the card stack, contextual messaging when both exist for the same product, and smart defaults that always favor the customer\u2019s best deal. Confusion here erodes trust; clarity builds it.' },
          { icon: '\uD83D\uDCB0', title: 'DG Cash Balance States', text: 'DG Cash takes up to 48 hours to post after a qualifying purchase. That creates a gap between \u201CI earned it\u201D and \u201CI can spend it.\u201D The wallet needed to close that gap with clear pending vs. available states — so customers could see their earned DG Cash immediately, understand when it would be spendable, and track the full lifecycle from clip to earn to spend. Without this, the delay feels like something\u2019s broken. With it, it feels like the system is working.' },
          { icon: '\uD83D\uDCF1', title: 'Wallet Barcode as the Bridge', text: 'The myDG wallet barcode is the single interaction that activates all digital savings at the register — scan it to apply clipped coupons and spend DG Cash in one tap. In the previous design it was buried. We elevated it to a primary action within the wallet, making the connection between \u201Cwhat I\u2019ve saved digitally\u201D and \u201Cwhat I\u2019ll use in-store\u201D immediate and obvious. The barcode isn\u2019t a utility — it\u2019s the payoff moment for every interaction upstream.' },
        ]} />
      </ContentSection>

      {/* ══════════ 04 — THE RESULTS ══════════ */}
      <ContentSection number="04 — THE RESULTS" title="From Decline to Growth">
        <div className={s.sectionBody}>
          <p>The June 2024 mobile launch reversed a trajectory that had been declining for over a year. The redesign didn&apos;t add a single new feature to the wallet — it made clipped coupons findable, DG Cash balance visible, the wallet barcode accessible, Order History connected, and the entire savings flow coherent. A YTD Savings tracker gave customers a reason to return: progress they could see. Same capabilities, new architecture. That distinction matters.</p>
        </div>

        <ResultsGrid results={[
          { metric: '130%+', label: 'Year-over-year engagement growth', context: 'Reversed a sustained double-digit decline', featured: true },
          { metric: '40%', label: 'Faster Offer Comparison', context: 'Card stack vs. previous list view' },
          { metric: '28%', label: 'Filter Discovery Lift', context: 'Customers finding relevant deals faster' },
          { metric: '3\u20134 min', label: 'Average Session Duration', context: 'High-intent engagement, not aimless browsing' },
          { metric: '6 \u2192 1', label: 'Screens Consolidated', context: 'Same capabilities, single interface — pure architectural simplification' },
        ]} />
      </ContentSection>

      {/* ══════════ 05 — THE LEARNING ══════════ */}
      <ContentSection number="05 — THE LEARNING" title="Simple Architecture Wins">
        <div className={s.sectionBody}>
          <p>The problem wasn&apos;t missing features — it was cognitive load. By centralizing and clarifying, usage exploded. The instinct in product development is always to add. The discipline is knowing when to subtract.</p>
          <p>This project reinforced a core principle: excellence in product design often means constraint, clarity, and the courage to remove. Every element that remains must earn its place through evidence and user need. The best redesign often looks like it was always that way.</p>
          <p>And the infrastructure that makes this kind of rapid consolidation possible — the tokenized design system, the shared component patterns, the AI-augmented exploration workflow — is what separates a one-time fix from a repeatable capability.</p>
        </div>

        <PullQuote
          text="The instinct is always to add. The discipline is knowing when to subtract. The best redesign looks like it was always that way."
          attr="Reflection — myDG Wallet Redesign"
        />
      </ContentSection>

      {/* Next Study */}
      <NextStudy
        href="/case-study/cashback"
        title="myDG Cash Back at Scale"
        desc="Designing the Ibotta partnership integration that put $9 million back in customers' pockets and grew deal engagement 191% YoY."
        metrics={[
          { value: '435M', label: 'Clips' },
          { value: '$9M', label: 'Earned' },
          { value: '209%', label: 'Redemption' },
        ]}
      />
    </main>
  );
}
