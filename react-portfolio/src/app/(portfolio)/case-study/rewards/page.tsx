import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContentSection } from '@/components/case-study/ContentSection';
import { ResultsGrid } from '@/components/case-study/ResultsGrid';
import { DecisionCallout } from '@/components/case-study/DecisionCallout';
import { PullQuote } from '@/components/case-study/PullQuote';
import { NextStudy } from '@/components/case-study/NextStudy';
import s from '../case-study.module.css';

export const metadata: Metadata = {
  title: 'Case Study: DG Rewards — JD McCulley',
  openGraph: { images: [{ url: '/api/og/?page=rewards', width: 1200, height: 630 }] },
};

/* ── Placeholder: marks where YOU provide an asset ── */
function Placeholder({ label, desc }: { label: string; desc: string }) {
  return (
    <div className={s.visualPlaceholder}>
      <div className={s.placeholderIcon}>&#9661;</div>
      <div className={s.placeholderLabel}>{label}</div>
      <div className={s.placeholderDesc}>{desc}</div>
    </div>
  );
}

/* ── Inline SVG Components ── */

function DGLogo() {
  return (
    <svg width="62" height="62" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect width="40" height="40" rx="4" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.22 24.88H11.88V15.07H12.84C15.54 15.07 17.09 15.83 17.09 19.83C17.09 23 16.54 24.88 13.22 24.88ZM28.15 19.75V22.3H29.85V24.51C29.38 24.73 28.63 24.9 27.97 24.9C25.51 24.9 24.34 23.15 24.34 19.79C24.34 16.75 25.44 15.04 27.08 15.04C28.36 15.04 28.98 15.86 29.31 17.4L33.91 16.62C33.25 13.38 30.93 11.65 27.34 11.65C24.22 11.65 21.95 12.89 20.7 15.17C19.27 12.67 16.41 11.97 12.32 11.97H5.83V15.07H7.45V27.98H12.79C16.27 27.98 19.13 27.17 20.62 24.78C21.7 26.91 23.72 28.28 26.91 28.28C28.49 28.28 30.06 27.82 31.08 27.17L31.61 27.98H34.21V19.75H28.15Z" fill="#FFF000" />
    </svg>
  );
}

export default function RewardsCaseStudy() {
  return (
    <main className={s.main}>
      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={s.hero}>
          <div className={s.caseStudyLabel}>Case Study</div>
          <div className={s.heroTitleContainer}>
            <DGLogo />
            <h1 className={s.heroTitle}>DG Rewards: A New Deal Type Across the Entire Shopping Funnel</h1>
          </div>
          <p className={s.heroSubtitle}>
            Dollar General was introducing Rewards &mdash; a new continuity-based deal program alongside existing coupons and cash back. The challenge wasn&apos;t adding another card to the gallery. It was integrating a new deal type across every touchpoint in the shopping experience &mdash; from discovery through checkout &mdash; across three platforms, without adding cognitive load to a system already serving a billion annual deal clips.
          </p>

          <div className={s.metadata}>
            <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>UX Lead &amp; Design Direction</div></div>
            <div><div className={s.metadataLabel}>Team</div><div className={s.metadataValue}>5 Cross-Functional</div></div>
            <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>Q3 2025 &ndash; Q1 2026</div></div>
            <div><div className={s.metadataLabel}>Platforms</div><div className={s.metadataValue}>App, Mobile Web, Desktop Web</div></div>
            <div><div className={s.metadataLabel}>Company</div><div className={s.metadataValue}>Dollar General</div></div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <ContentSection number="01 — THE PROBLEM" title="A New Deal Type in a Complex Ecosystem">
        <div className={s.sectionBody}>
          <p>Dollar General&apos;s deals ecosystem was already layered &mdash; digital coupons, cash back offers (via Ibotta), and DG Cash all coexisting in a gallery serving 12 million monthly active users. The Cash Back program alone was driving 435 million clips and nearly $9 million earned by customers annually, with 191% year-over-year clip growth. The system was working.</p>
          <p>Now the business wanted to introduce <strong>Rewards</strong> &mdash; a new continuity-based deal type where customers earn by purchasing qualifying products over time (buy 3, get $2 back). Unlike one-time-clip coupons, Rewards cards needed to track progress across multiple shopping trips, display real-time status, and coexist alongside existing deal types without confusing customers who were already comfortable with the current model.</p>
          <p>The risk was real: add a new deal type poorly and you fragment an experience that millions of customers depend on. The deals gallery, product listing pages, product detail pages, the wallet, and cart/checkout all needed to understand Rewards natively &mdash; across App, Mobile Web, and Desktop Web simultaneously.</p>
        </div>
      </ContentSection>

      {/* ══════════ Card Spec Image ══════════ */}
      <ScrollReveal>
        <div className={s.fullVisual}>
          <img src="/assets/images/Letter - 1.png" alt="Rewards card anatomy and spec sheet — showing the card structure, three tracker types, reward details, and placement guidelines" />
        </div>
      </ScrollReveal>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="Design the Card System First, Then the Funnel">
        <div className={s.sectionBody}>
          <p>Rather than designing screens for each touchpoint, I started with the card itself. The Rewards card needed to be a self-contained component that could live in any context &mdash; a gallery tile, a product page badge, a wallet stack, or a checkout summary &mdash; and communicate its state (inactive, partially complete, fully redeemed) at a glance.</p>
          <p>I defined three card constructs &mdash; <strong>Dollar Amount Tracker</strong> (spend $30, get $5), <strong>Item Tracker</strong> (buy 5 items, earn reward), and <strong>Trip Tracker</strong> (shop 3 trips, unlock savings) &mdash; each with distinct progress visualization that made the earn mechanic immediately legible. The card anatomy included vendor branding, savings headline, progress indicator, program icon, and expiration &mdash; all governed by a shared spec sheet that merchandising, art departments, and engineering could build from.</p>
          <p>With the card system defined, I mapped the full funnel: Deals Gallery &rarr; Product Listing Page &rarr; Product Detail Page &rarr; Wallet &rarr; Cart &amp; Checkout. Each touchpoint needed to answer a different question &mdash; &ldquo;What rewards are available?&rdquo; &rarr; &ldquo;Does this product qualify?&rdquo; &rarr; &ldquo;How close am I?&rdquo; &rarr; &ldquo;What am I redeeming?&rdquo; &mdash; and the card system adapted to each context while maintaining visual consistency.</p>
        </div>
      </ContentSection>

      {/* ══════════ Placeholder: Offer Summary ══════════ */}
      <ScrollReveal>
        <Placeholder
          label="Offer Summary"
          desc="Full card lifecycle for Product Construct and Dollar Amount Construct — Card Inactive → Deal Detail Drawer → Card Activated → PLP Product Tile → API Coupon states"
        />
      </ScrollReveal>

      {/* ══════════ Placeholder: App Consolidated ══════════ */}
      <ScrollReveal>
        <Placeholder
          label="App Consolidated"
          desc="Deals Gallery → Multiple Deals Drawer → PDP → Wallet → Deal Detail Drawer — the complete consumer journey in one vertical flow"
        />
      </ScrollReveal>

      {/* ══════════ 03 — DESIGN DECISIONS ══════════ */}
      <ContentSection number="03 — DESIGN DECISIONS" title="Five Choices That Shaped the System">
        <DecisionCallout decisions={[
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
            title: 'Component-First Architecture Over Screen-First Design',
            text: 'I could have designed each touchpoint independently \u2014 a gallery view, a PDP treatment, a checkout module. Instead, I built a single card component system with context-aware variants. The same Rewards card renders in the gallery (full detail), on a PLP tile (compact badge), in the wallet (stacked), and at checkout (summary). This meant one source of truth for engineering, one set of states to test, and visual consistency customers could rely on across every surface.',
          },
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
            title: 'Expandable Card Interaction Over Static Detail Pages',
            text: 'Early explorations used a standard "tap to navigate to detail page" pattern. But in usability considerations, navigating away from the gallery broke the browsing flow \u2014 customers lost their scroll position and context. I designed an expanding card drawer that opens inline, showing deal details, qualifying products, and progress tracking without leaving the current view. This kept browsing momentum intact and reduced the tap-to-understand cost by eliminating a full page transition.',
          },
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
            title: 'Three Tracker Types With Distinct Progress Visualization',
            text: 'Not all rewards work the same way. A "spend $30" mechanic is fundamentally different from "buy 5 items" or "shop 3 trips." Rather than forcing a generic progress bar, I designed three distinct tracker visualizations: a dollar amount fill for spending thresholds, a punch-card dot system for item counts, and a trip counter for visit-based rewards. Each communicates its earn mechanic at a glance without requiring the customer to read fine print.',
          },
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4" /></svg>,
            title: 'Co-Mingled Discovery Over Separate Reward Tabs',
            text: 'The business considered giving Rewards its own section \u2014 a separate tab in the deals gallery. Customer research from the Cash Back integration taught us that customers don\'t think in deal categories. They think in "useful" and "not useful." Rewards cards were co-mingled into the existing deals gallery alongside coupons and cash back, surfaced through the same search, filter, and personalization logic.',
          },
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" /><path d="M2 8h3M19 8h3M2 16h3M19 16h3" /></svg>,
            title: 'Cross-Platform Parity With Platform-Appropriate Patterns',
            text: 'Every screen was designed for three breakpoints: native App, Mobile Web, and Desktop Web. Rather than designing once and scaling, each platform got appropriate interaction patterns \u2014 the card drawer uses a native bottom sheet on App, a modal on Mobile Web, and an inline expansion on Desktop. Visual consistency was maintained through shared card components and typography while interaction patterns respected each platform\'s conventions.',
          },
        ]} />
      </ContentSection>

      {/* ══════════ Placeholder: Cross Platform ══════════ */}
      <ScrollReveal>
        <Placeholder
          label="Cart & Checkout"
          desc="Rewards integration across App, Mobile Web, and Desktop Web — deal attribution on line items and checkout summary"
        />
      </ScrollReveal>

      {/* ══════════ Prototype Callout ══════════ */}
      <ScrollReveal>
        <div className={s.bizModel}>
          <div className={s.bizModelIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3" /></svg>
          </div>
          <div>
            <div className={s.bizModelTitle}>Interactive Prototype: Expandable Card System</div>
            <div className={s.bizModelText}>
              The Figma prototype demonstrates the card expand/collapse interaction &mdash; showing how Rewards cards open inline to reveal deal details, qualifying products, and progress tracking without navigating away from the gallery. The interaction uses spring animation to feel native to the DG app&apos;s existing motion language.
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ══════════ 04 — THE RESULTS ══════════ */}
      <ContentSection number="04 — THE RESULTS" title="Production-Ready at Scale">
        <div className={s.sectionBody}>
          <p>The Rewards system was delivered production-ready for Phase 2 launch &mdash; a complete deal type integrated across the entire shopping funnel, built on an ecosystem already proving its effectiveness at scale.</p>
        </div>

        <ResultsGrid results={[
          { metric: '3', label: 'Platform Parity', context: 'App + Mobile Web + Desktop Web' },
          { metric: '6', label: 'Funnel Touchpoints', context: 'Gallery \u2192 PLP \u2192 PDP \u2192 Drawer \u2192 Wallet \u2192 Checkout' },
          { metric: '3', label: 'Card Constructs', context: 'Dollar Amount / Item / Trip Trackers' },
        ]} />

        <div className={s.sectionBody} style={{ marginTop: '24px' }}>
          <p style={{ fontSize: '14px', opacity: 0.6 }}>Rewards was designed and delivered as part of an ecosystem already driving measurable impact:</p>
        </div>

        <ResultsGrid results={[
          { metric: '191%', label: 'YoY Deal Clip Growth', context: 'Cash Back ecosystem trajectory' },
          { metric: '$9M', label: 'Customer Savings', context: 'DG Cash earned through deals' },
          { metric: '12M+', label: 'Monthly Active Users', context: 'Across App + Web' },
        ]} />
      </ContentSection>

      {/* ══════════ 05 — THE LEARNING ══════════ */}
      <ContentSection number="05 — THE LEARNING" title="Integration Is Harder Than Invention">
        <div className={s.sectionBody}>
          <p>Rewards could have been designed as a standalone feature &mdash; its own section, its own flow, its own visual language. That would have been faster to ship and easier to scope. But it would have fractured a shopping experience that millions of customers already relied on.</p>
          <p>The design decision that mattered most wasn&apos;t any individual screen &mdash; it was the commitment to make Rewards a native citizen of the existing ecosystem, discoverable through the same patterns customers already knew, traceable through the same wallet they already trusted, and redeemable through the same checkout they&apos;d already learned. Integration is harder than invention. But it&apos;s what earns trust at scale.</p>
        </div>

        <PullQuote
          text="The hardest design problem isn&apos;t making something new &mdash; it&apos;s making something new feel like it was always there."
          attr="Reflection &mdash; DG Rewards"
        />
      </ContentSection>

      {/* ══════════ Next Study ══════════ */}
      <NextStudy
        prevHref="/case-study/cashback"
        prevTitle="myDG Cash Back at Scale"
        href="/case-study/rba"
        title="Authentication Redesign Under Pressure"
        desc="Rescued 25,000+ stuck users in a 5-day crisis, then designed the 8-journey authentication system that prevented 75,000+ future lockouts."
        metrics={[
          { value: '25K+', label: 'Rescued' },
          { value: '75K', label: 'Prevented' },
          { value: '61%', label: 'Improvement' },
        ]}
      />
    </main>
  );
}
