'use client';

import { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContentSection } from '@/components/case-study/ContentSection';
import { ResultsGrid } from '@/components/case-study/ResultsGrid';
import { DecisionCallout } from '@/components/case-study/DecisionCallout';
import { PullQuote } from '@/components/case-study/PullQuote';
import { NextStudy } from '@/components/case-study/NextStudy';
import s from '../case-study.module.css';

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
    <div className={s.dgLogoLockup}>
      <svg width="124" height="124" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" rx="4" fill="black" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.22 24.88H11.88V15.07H12.84C15.54 15.07 17.09 15.83 17.09 19.83C17.09 23 16.54 24.88 13.22 24.88ZM28.15 19.75V22.3H29.85V24.51C29.38 24.73 28.63 24.9 27.97 24.9C25.51 24.9 24.34 23.15 24.34 19.79C24.34 16.75 25.44 15.04 27.08 15.04C28.36 15.04 28.98 15.86 29.31 17.4L33.91 16.62C33.25 13.38 30.93 11.65 27.34 11.65C24.22 11.65 21.95 12.89 20.7 15.17C19.27 12.67 16.41 11.97 12.32 11.97H5.83V15.07H7.45V27.98H12.79C16.27 27.98 19.13 27.17 20.62 24.78C21.7 26.91 23.72 28.28 26.91 28.28C28.49 28.28 30.06 27.82 31.08 27.17L31.61 27.98H34.21V19.75H28.15Z" fill="#FFF000" />
      </svg>
      <span>Rewards</span>
    </div>
  );
}

/* ── Funnel Flow Diagram ── */
const funnelSteps = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
    title: 'Deals Gallery',
    question: '\u201CWhat rewards are available?\u201D',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /><rect x="16" y="4" width="4" height="4" rx="0.5" /><rect x="16" y="10" width="4" height="4" rx="0.5" /><rect x="16" y="16" width="4" height="4" rx="0.5" /></svg>,
    title: 'Product Listing',
    question: '\u201CDoes this product qualify?\u201D',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2" /><path d="M8 6h8M8 10h8M8 14h4" /></svg>,
    title: 'Product Detail',
    question: '\u201CHow close am I?\u201D',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 10h20" /><path d="M6 16h4" /></svg>,
    title: 'Wallet',
    question: '\u201CWhat have I earned?\u201D',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>,
    title: 'Cart & Checkout',
    question: '\u201CWhat am I redeeming?\u201D',
  },
];

function FunnelFlow() {
  return (
    <div className={s.funnelWrap} role="figure" aria-label="Shopping funnel touchpoints">
      <div className={s.funnelLabel}>Shopping Funnel</div>
      <div className={s.funnelGrid}>
        {funnelSteps.map((step, i) => (
          <Fragment key={step.title}>
            <div className={s.funnelNode}>
              <div className={s.funnelIcon}>{step.icon}</div>
              <div className={s.funnelTitle}>{step.title}</div>
              <div className={s.funnelQuestion}>{step.question}</div>
            </div>
            {i < funnelSteps.length - 1 && (
              <div className={s.funnelArrow} aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default function RewardsCaseStudy() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string; tag: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(0);          // 0 = fit, 1 = low-mid, 2 = high-mid, 3 = full
  const [fullZoomPct, setFullZoomPct] = useState(400);     // % of container for native size
  const [isDragging, setIsDragging] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ startX: 0, startY: 0, scrollL: 0, scrollT: 0, moved: false });

  /* Reset zoom to mid when lightbox opens */
  useEffect(() => { setZoomLevel(lightbox ? 1 : 0); setFullZoomPct(400); }, [lightbox]);

  /* Drag-to-pan handlers */
  const onDragStart = useCallback((e: React.MouseEvent) => {
    if (zoomLevel === 0 || !scrollRef.current) return;
    e.preventDefault();
    const d = dragRef.current;
    d.startX = e.clientX; d.startY = e.clientY;
    d.scrollL = scrollRef.current.scrollLeft; d.scrollT = scrollRef.current.scrollTop;
    d.moved = false;
    setIsDragging(true);
  }, [zoomLevel]);

  const onDragMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    const d = dragRef.current;
    const dx = e.clientX - d.startX;
    const dy = e.clientY - d.startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) d.moved = true;
    scrollRef.current.scrollLeft = d.scrollL - dx;
    scrollRef.current.scrollTop = d.scrollT - dy;
  }, [isDragging]);

  const onDragEnd = useCallback(() => { setIsDragging(false); }, []);

  /* Calculate native-size percentage when image loads */
  const handleLightboxImgLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img && img.naturalWidth > 0 && img.clientWidth > 0) {
      const pct = Math.round((img.naturalWidth / img.clientWidth) * 100);
      setFullZoomPct(Math.max(pct, 200));
    }
  }, []);

  /* Derive zoom steps: fit → 1/3 → 2/3 → full */
  const zoomSteps = [100, Math.round(100 + (fullZoomPct - 100) / 3), Math.round(100 + (fullZoomPct - 100) * 2 / 3), fullZoomPct];
  const zoomWidthPct = zoomSteps[zoomLevel] ?? 100;

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if ((e.metaKey || e.ctrlKey) && (e.key === '=' || e.key === '+')) { e.preventDefault(); setZoomLevel(z => Math.min(3, z + 1)); }
      if ((e.metaKey || e.ctrlKey) && e.key === '-') { e.preventDefault(); setZoomLevel(z => Math.max(0, z - 1)); }
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    /* Hide back-to-top button */
    const btt = document.querySelector('[aria-label="Back to top"]') as HTMLElement | null;
    if (btt) btt.style.display = 'none';
    /* Slide nav bar up out of view */
    const nav = document.querySelector('nav') as HTMLElement | null;
    if (nav) {
      nav.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      nav.style.transform = 'translateY(-100%)';
    }
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
      if (btt) btt.style.display = '';
      /* Slide nav bar back down */
      if (nav) {
        nav.style.transform = 'translateY(0)';
        const cleanup = () => { nav.style.transition = ''; nav.removeEventListener('transitionend', cleanup); };
        nav.addEventListener('transitionend', cleanup);
      }
    };
  }, [lightbox]);

  return (
    <main className={s.main}>
      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={s.hero} style={{ paddingBottom: 0, marginBottom: '-20px' }}>
          <div className={s.caseStudyLabel}>Case Study</div>
          <div className={s.heroIntroRow} style={{ alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={s.heroTitleContainer} style={{ marginBottom: 16 }}>
                <h1 className={s.heroTitle}>DG Rewards: A New Deal Type Across the Entire Shopping Funnel</h1>
              </div>
              <p className={s.heroSubtitle} style={{ marginBottom: 0 }}>
                Dollar General needed to add Rewards &mdash; a continuity-based deal type &mdash; across every touchpoint from discovery through checkout, on three platforms, without fragmenting an ecosystem already serving a billion annual deal clips.
              </p>
            </div>
            <img src="/assets/images/dg-rewards/rewards-graphic.png" alt="myDG Rewards Program promotional graphic" style={{ width: 360, borderRadius: 12, flexShrink: 0 }} />
          </div>

          <div className={s.metadata} style={{ marginBottom: 0, display: 'flex', justifyContent: 'space-between' }}>
            <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>UX Lead &amp; Design Direction</div></div>
            <div><div className={s.metadataLabel}>Team</div><div className={s.metadataValue}>5 Cross-Functional</div></div>
            <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>Q3 2025 &ndash; Q1 2026</div></div>
            <div><div className={s.metadataLabel}>Platforms</div><div className={s.metadataValue}>App, Mobile Web, Desktop Web</div></div>
            <div><div className={s.metadataLabel}>Company</div><div className={s.metadataValue}>Dollar General</div></div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <div style={{ marginTop: -40 }}>
      <ContentSection number="01 — THE PROBLEM" title="">
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <div className={s.sectionBody} style={{ flex: 1, minWidth: 0 }}>
            <h2 className={s.sectionTitle}>A New Deal Type in a Complex Ecosystem</h2>
            <p>Dollar General&apos;s deals ecosystem already served 12M monthly active users &mdash; digital coupons, <a href="/case-study/cashback">cash back offers</a> (via Ibotta), and DG Cash co-mingled in a single gallery driving over a billion annual clips. The <a href="/case-study/wallet">stackable wallet architecture</a> I&apos;d designed earlier made the system ready to absorb new deal types. The system was working.</p>
            <p>Now the business wanted to add <strong>Rewards</strong> &mdash; a continuity-based deal type where customers earn by purchasing qualifying products over time (buy 3, get $2 back). Unlike one-time-clip coupons, Rewards needed to:</p>
            <ul>
              <li><strong>Track progress</strong> across multiple shopping trips</li>
              <li><strong>Display real-time status</strong> (inactive &rarr; in-progress &rarr; earned)</li>
              <li><strong>Coexist</strong> alongside existing deal types without adding cognitive load</li>
            </ul>
            <p>The risk: add a new deal type poorly and you fragment an experience millions depend on &mdash; across gallery, PLP, PDP, wallet, and checkout, on three platforms simultaneously.</p>
          </div>
          <a
            href="https://www.figma.com/proto/CMzDHE4FLVydVgQOrrc1jP/JD-Portfolio---Claude-Figma-MCP?page-id=46%3A60269&node-id=46-62891&t=Siyqz6fUBzzDv07B-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=46%3A62891&hide-ui=1"
            target="_blank"
            rel="noopener noreferrer"
            className="protoCard"
            style={{ flexShrink: 0, width: 380, textDecoration: 'none', cursor: 'pointer', display: 'block' }}
          >
            <style>{`
              .protoCard .protoOuter { border: 1px solid var(--glass-border); transition: border-color 0.3s ease, transform 0.3s ease; }
              .protoCard:hover .protoOuter { border-color: rgba(0, 212, 255, 0.25); transform: translateY(-4px); }
              .protoCard .protoFooter { border-top: 1px solid var(--border); transition: border-color 0.3s ease, background 0.3s ease; }
              .protoCard:hover .protoFooter { border-color: rgba(0, 212, 255, 0.2); background: #0c1220; }
              .protoCard .protoTitle { color: var(--text-primary); transition: color 0.3s ease; }
              .protoCard:hover .protoTitle { color: rgba(0, 212, 255, 0.6); }
              .protoCard .protoTag { color: var(--text-muted); transition: color 0.3s ease; }
              .protoCard:hover .protoTag { color: rgba(0, 212, 255, 0.45); }
              .protoCard .protoPlayIcon { color: var(--text-muted); transition: color 0.3s ease; }
              .protoCard:hover .protoPlayIcon { color: rgba(0, 212, 255, 0.6); }
              .protoCard .protoPlayOverlay { opacity: 0; transition: opacity 0.3s ease, background 0.3s ease; }
              .protoCard:hover .protoPlayOverlay { opacity: 1; }
              .protoCard .protoScreenImg { transition: filter 0.3s ease; }
              .protoCard:hover .protoScreenImg { filter: brightness(0.7); }
            `}</style>
            {/* Outer card */}
            <div className="protoOuter" style={{
              borderRadius: 16,
              overflow: 'hidden',
              background: 'var(--glass-bg)',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {/* Image area */}
              <div style={{
                background: 'var(--surface)',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                paddingTop: 32,
                paddingBottom: 0,
                position: 'relative',
              }}>
                {/* Play overlay on hover */}
                <div className="protoPlayOverlay" style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 212, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1,
                }}>
                  <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(0, 212, 255, 0.15)',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)" stroke="none">
                      <polygon points="8,5 20,12 8,19" />
                    </svg>
                  </div>
                </div>
                {/* Phone device */}
                <div style={{
                  position: 'relative',
                  width: '75%',
                  marginBottom: -125,
                }}>
                  <div className="protoDevice" style={{
                    background: '#2a3040',
                    borderRadius: 24,
                    padding: 5,
                    boxShadow: '0 0 40px rgba(0,0,0,0.5), 0 0 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)',
                  }}>
                    <div style={{ borderRadius: 20, overflow: 'hidden', background: 'var(--bg)' }}>
                      <img
                        className="protoScreenImg"
                        src="/assets/images/dg-rewards/A-Wallet Deals 1.png"
                        alt="DG Rewards wallet interaction prototype"
                        style={{ display: 'block', width: '100%', aspectRatio: '9/19', objectFit: 'cover', objectPosition: 'top' }}
                        draggable={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="protoFooter" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 24,
                background: '#0A0E1A',
              }}>
                <span className="protoTitle" style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <svg className="protoPlayIcon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                    <polygon points="6,3 21,12 6,21" />
                  </svg>
                  Wallet Interaction
                </span>
                <span className="protoTag" style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.05em' }}>Prototype</span>
              </div>
            </div>
          </a>
        </div>
      </ContentSection>
      </div>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="Design the Card System First, Then the Funnel">
        <div className={s.sectionBody} style={{ maxWidth: 'none' }}>
          <p>Rather than designing screens for each touchpoint, I started with the card itself. The Rewards card needed to be a self-contained component that could live in any context &mdash; a gallery tile, a product page badge, a wallet stack, or a checkout summary &mdash; and communicate its state (inactive, partially complete, fully redeemed) at a glance.</p>
          <p>I defined three card constructs, each with distinct progress visualization that made the earn mechanic immediately legible:</p>
          <ul>
            <li><strong>Dollar Amount Tracker</strong> &mdash; spend $30, get $5</li>
            <li><strong>Item Tracker</strong> &mdash; buy 5 items, earn reward</li>
            <li><strong>Trip Tracker</strong> &mdash; shop 3 trips, unlock savings</li>
          </ul>
          <p>The card anatomy included vendor branding, savings headline, progress indicator, program icon, and expiration &mdash; all governed by a shared spec sheet that merchandising, art departments, and engineering could build from.</p>
        </div>

        <ScrollReveal>
          <div className={s.fullVisual} style={{ background: 'none', border: 'none', padding: 0, borderRadius: 8, overflow: 'hidden' }}>
            <img src="/assets/images/dg-rewards/guidelines.png" alt="Rewards card placement guidelines — showing card structure, tracker types, reward details, and placement rules" style={{ cursor: 'pointer' }} onClick={() => setLightbox({ src: '/assets/images/dg-rewards/guidelines.png', title: 'Card Placement Guidelines', tag: '' })} />
          </div>
        </ScrollReveal>

        <div className={s.sectionBody} style={{ maxWidth: 'none' }}>
          <p>With the card system defined, I mapped the full funnel. Each touchpoint needed to answer a different question &mdash; and the card system adapted to each context while maintaining visual consistency.</p>
        </div>

        {/* Horizontal Funnel Strip */}
        <div style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '20px 24px 24px',
          marginTop: 32,
        }}>
          <style>{`
            @keyframes funnelGlow {
              0%, 100% { box-shadow: none; border-color: rgba(0, 212, 255, 0.15); background: rgba(0, 212, 255, 0.06); }
              50% { box-shadow: 0 0 16px rgba(0, 212, 255, 0.4), 0 0 32px rgba(0, 212, 255, 0.15); border-color: rgba(0, 212, 255, 0.5); background: rgba(0, 212, 255, 0.15); }
            }
            .funnelIcon-0 { animation: funnelGlow 1.2s ease-in-out 0s infinite; animation-delay: 0s; animation-duration: 6s; }
            .funnelIcon-1 { animation: funnelGlow 1.2s ease-in-out 0s infinite; animation-delay: 1.2s; animation-duration: 6s; }
            .funnelIcon-2 { animation: funnelGlow 1.2s ease-in-out 0s infinite; animation-delay: 2.4s; animation-duration: 6s; }
            .funnelIcon-3 { animation: funnelGlow 1.2s ease-in-out 0s infinite; animation-delay: 3.6s; animation-duration: 6s; }
            .funnelIcon-4 { animation: funnelGlow 1.2s ease-in-out 0s infinite; animation-delay: 4.8s; animation-duration: 6s; }
          `}</style>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#4dc9f6', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20, textAlign: 'center' }}>Shopping Funnel</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            {funnelSteps.map((step, i) => (
              <Fragment key={step.title}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, textAlign: 'center', flex: 1, minWidth: 0 }}>
                  <div className={`funnelIcon-${i}`} style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'rgba(0, 212, 255, 0.06)',
                    border: '1px solid rgba(0, 212, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}>{step.icon}</div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{step.title}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#8b95a8', fontStyle: 'italic', lineHeight: 1.3 }}>{step.question}</div>
                </div>
                {i < funnelSteps.length - 1 && (
                  <div style={{ display: 'flex', alignItems: 'center', paddingTop: 14, color: 'var(--accent)', opacity: 0.3, flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </ContentSection>

      {/* ══════════ 03 — DESIGN DECISIONS ══════════ */}
      <ContentSection number="03 — DESIGN DECISIONS" title="Five Choices That Shaped the System">
        <DecisionCallout decisions={[
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
            title: 'Component-First Architecture Over Screen-First Design',
            text: 'Instead of designing each touchpoint independently, I built a single card component with context-aware variants \u2014 full detail in the gallery, compact badge on PLP tiles, stacked in the wallet, summary at checkout. One source of truth for engineering and visual consistency across every surface.',
          },
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
            title: 'Expandable Card Interaction Over Static Detail Pages',
            text: 'Navigating to a detail page broke browsing flow \u2014 customers lost scroll position and context. The expanding card drawer opens inline to show deal details and progress tracking without a page transition, keeping browsing momentum intact.',
          },
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>,
            title: 'Three Tracker Types With Distinct Progress Visualization',
            text: 'A "spend $30" mechanic is fundamentally different from "buy 5 items" or "shop 3 trips." Rather than a generic progress bar, I designed three distinct visualizations \u2014 dollar amount fill, punch-card dots, and trip counter \u2014 each communicating its earn mechanic at a glance.',
          },
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4" /></svg>,
            title: 'Co-Mingled Discovery Over Separate Reward Tabs',
            text: 'The business considered a separate Rewards tab, but Cash Back research showed customers don\'t think in deal categories \u2014 they think in "useful" and "not useful." Rewards were co-mingled into the existing gallery alongside coupons and cash back.',
          },
          {
            icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" /><path d="M2 8h3M19 8h3M2 16h3M19 16h3" /></svg>,
            title: 'Cross-Platform Parity With Platform-Appropriate Patterns',
            text: 'Each platform got appropriate interaction patterns \u2014 native bottom sheet on App, modal on Mobile Web, inline expansion on Desktop. Shared card components maintained visual consistency while respecting each platform\'s conventions.',
          },
        ]} />
      </ContentSection>

      {/* ══════════ Deals Gallery - App ══════════ */}
      <ScrollReveal>
        <div className={s.galleryFlowHeader} style={{ borderRadius: '6px', background: 'rgba(30, 42, 80, 0.95)', borderLeft: '3px solid var(--accent)', border: '1px solid rgba(0, 212, 255, 0.15)' }}>
          <div className={s.galleryFlowTitleGroup} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
            <span className={s.galleryFlowTitle}>Deals Gallery</span>
            <span className={s.galleryFlowTag}>&mdash;App</span>
          </div>
          <button className={s.galleryFlowExpand} onClick={() => setLightbox({ src: '/assets/images/dg-rewards/deals-gallery-flow.png', title: 'Deals Gallery', tag: 'App' })} title="View full size">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
            Expand
          </button>
        </div>
        <div className={s.fullVisual} style={{ borderRadius: 0, border: 'none', background: 'transparent', marginTop: '33px' }}>
          <img src="/assets/images/dg-rewards/deals-gallery-flow.png" alt="Deals Gallery flow — Deals Landing, Rewards, Detail Drawer, Detail Drawer Activated, Rewards Clipped, and Reward Earned screens" style={{ cursor: 'pointer' }} onClick={() => setLightbox({ src: '/assets/images/dg-rewards/deals-gallery-flow.png', title: 'Deals Gallery', tag: 'App' })} />
        </div>
      </ScrollReveal>

      {/* ══════════ Multiple Deals Drawer ══════════ */}
      <ScrollReveal>
        <div className={s.galleryFlowHeader} style={{ borderRadius: '6px', marginTop: '84px', background: 'rgba(30, 42, 80, 0.95)', borderLeft: '3px solid var(--accent)', border: '1px solid rgba(0, 212, 255, 0.15)' }}>
          <div className={s.galleryFlowTitleGroup} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 8h20" /><path d="M2 12h20" /></svg>
            <span className={s.galleryFlowTitle}>Multiple Deals Drawer &amp; PDP</span>
            <span className={s.galleryFlowTag}>&mdash;App</span>
          </div>
          <button className={s.galleryFlowExpand} onClick={() => setLightbox({ src: '/assets/images/dg-rewards/mult-deals-drawer.png', title: 'Multiple Deals Drawer & PDP', tag: 'App' })} title="View full size">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
            Expand
          </button>
        </div>
        <div className={s.fullVisual} style={{ borderRadius: 0, border: 'none', background: 'transparent', marginTop: '33px' }}>
          <img src="/assets/images/dg-rewards/mult-deals-drawer.png" alt="Multiple Deals Drawer flow — expandable card interactions showing deal details, qualifying products, and progress tracking" style={{ cursor: 'pointer' }} onClick={() => setLightbox({ src: '/assets/images/dg-rewards/mult-deals-drawer.png', title: 'Multiple Deals Drawer & PDP', tag: 'App' })} />
        </div>
      </ScrollReveal>

      {/* ══════════ Wallet ══════════ */}
      <ScrollReveal>
        <div className={s.galleryFlowHeader} style={{ borderRadius: '6px', marginTop: '84px', background: 'rgba(30, 42, 80, 0.95)', borderLeft: '3px solid var(--accent)', border: '1px solid rgba(0, 212, 255, 0.15)' }}>
          <div className={s.galleryFlowTitleGroup} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 10h20" /><path d="M6 16h4" /></svg>
            <span className={s.galleryFlowTitle}>Wallet</span>
            <span className={s.galleryFlowTag}>&mdash;App</span>
          </div>
          <button className={s.galleryFlowExpand} onClick={() => setLightbox({ src: '/assets/images/dg-rewards/wallet-app.png', title: 'Wallet', tag: 'App' })} title="View full size">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
            Expand
          </button>
        </div>
        <div className={s.fullVisual} style={{ borderRadius: 0, border: 'none', background: 'transparent', marginTop: '33px' }}>
          <img src="/assets/images/dg-rewards/wallet-app.png" alt="Wallet flow — showing active Rewards progress, earned coupons, and redeemable savings in the wallet view" style={{ cursor: 'pointer' }} onClick={() => setLightbox({ src: '/assets/images/dg-rewards/wallet-app.png', title: 'Wallet', tag: 'App' })} />
        </div>
      </ScrollReveal>

      {/* ══════════ Cart & Checkout ══════════ */}
      <ScrollReveal>
        <div className={s.galleryFlowHeader} style={{ borderRadius: '6px', marginTop: '84px', background: 'rgba(30, 42, 80, 0.95)', borderLeft: '3px solid var(--accent)', border: '1px solid rgba(0, 212, 255, 0.15)' }}>
          <div className={s.galleryFlowTitleGroup} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" /></svg>
            <span className={s.galleryFlowTitle}>Cart &amp; Checkout</span>
            <span className={s.galleryFlowTag}>&mdash;App</span>
          </div>
          <button className={s.galleryFlowExpand} onClick={() => setLightbox({ src: '/assets/images/dg-rewards/cart.png', title: 'Cart & Checkout', tag: 'App' })} title="View full size">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
            Expand
          </button>
        </div>
        <div className={s.fullVisual} style={{ borderRadius: 0, border: 'none', background: 'transparent', marginTop: '33px' }}>
          <img src="/assets/images/dg-rewards/cart.png" alt="Cart and Checkout flow — showing Rewards applied at checkout with progress tracking and redemption" style={{ cursor: 'pointer' }} onClick={() => setLightbox({ src: '/assets/images/dg-rewards/cart.png', title: 'Cart & Checkout', tag: 'App' })} />
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
          <p style={{ fontSize: '14px', opacity: 0.6 }}>Rewards extended an ecosystem already operating at scale:</p>
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
          text="Shipping a feature is easy. Earning the right to live inside someone else&apos;s workflow &mdash; that&apos;s the real design problem."
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
      {/* ══════════ Fullscreen Lightbox ══════════ */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightbox(null)}
            style={{ position: 'fixed', left: 0, right: 0, bottom: 0, top: 0, zIndex: 1001, background: 'rgba(0,0,0,0.95)', display: 'flex', flexDirection: 'column' }}
          >
            {/* Lightbox header */}
            <div
              onClick={e => e.stopPropagation()}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: '-0.3px' }}>{lightbox.title}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>&mdash;{lightbox.tag}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {/* Zoom out */}
                <button
                  onClick={() => setZoomLevel(z => Math.max(0, z - 1))}
                  title="Zoom out"
                  style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.07)', color: '#fff', cursor: zoomLevel > 0 ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: zoomLevel === 0 ? 0.3 : 1, transition: 'opacity 0.2s, background 0.2s' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M8 11h6" /></svg>
                </button>
                {/* Zoom in */}
                <button
                  onClick={() => setZoomLevel(z => Math.min(3, z + 1))}
                  title="Zoom in"
                  style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.07)', color: '#fff', cursor: zoomLevel < 3 ? 'pointer' : 'default', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: zoomLevel === 3 ? 0.3 : 1, transition: 'opacity 0.2s, background 0.2s' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6M8 11h6" /></svg>
                </button>
                {/* Close */}
                <button
                  onClick={() => setLightbox(null)}
                  title="Close"
                  style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.07)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              </div>
            </div>

            {/* Scrollable image area — drag to pan when zoomed */}
            <motion.div
              ref={scrollRef}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              onMouseDown={onDragStart}
              onMouseMove={onDragMove}
              onMouseUp={onDragEnd}
              onMouseLeave={onDragEnd}
              style={{ flex: 1, overflow: 'auto', padding: '32px 40px 40px', cursor: zoomLevel === 0 ? 'default' : isDragging ? 'grabbing' : 'grab', userSelect: isDragging ? 'none' : 'auto' }}
            >
              {/* Sizer wrapper — percentage width drives smooth CSS transition */}
              <div style={{ width: `${zoomWidthPct}%`, transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
                <img
                  src={lightbox.src}
                  alt={`${lightbox.title} — full size`}
                  onLoad={handleLightboxImgLoad}
                  draggable={false}
                  style={{ display: 'block', width: '100%', height: 'auto', cursor: zoomLevel === 0 ? 'zoom-in' : isDragging ? 'grabbing' : 'grab', pointerEvents: isDragging ? 'none' : 'auto' }}
                  onClick={() => { if (!dragRef.current.moved) setZoomLevel(z => z < 3 ? z + 1 : 0); }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
