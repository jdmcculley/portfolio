'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Lock, Unlock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { DotBadge } from '@/components/ui/Badge';
import { useAuth } from '@/contexts/AuthContext';
import s from './home.module.css';
import clsx from 'clsx';

/* ── Framer stagger helpers ── */
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] as const, delay } },
});

/* ── Data ── */
const pillars = [
  {
    label: 'Design-Led AI',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.97 20.04c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.2.02-.39.06-.58-.18.05-.36.08-.56.08-1.1 0-2-.9-2-2 0-.61.27-1.15.7-1.52-1.24-.15-2.2-1.2-2.2-2.48s.96-2.33 2.2-2.48c-.43-.37-.7-.91-.7-1.52 0-1.1.9-2 2-2 .25 0 .5.05.72.13-.14-.35-.22-.73-.22-1.13 0-1.66 1.34-3 3-3s3 1.34 3 3" />
        <path d="M10.97 20.04c0 1.66 1.34 3 3 3s3-1.34 3-3c0-.2-.02-.39-.06-.58.18.05.36.08.56.08 1.1 0 2-.9 2-2 0-.61-.27-1.15-.7-1.52 1.24-.15 2.2-1.2 2.2-2.48 0-.56-.18-1.07-.49-1.48" />
        <path d="m10.97 20.04 0-13.82" />
        <path d="M13.75 5.68c2.31-.46 4.17-2.35 4.64-4.72.47 2.37 2.33 4.26 4.64 4.72m0 0c-2.31.47-4.17 2.35-4.64 4.72-.47-2.37-2.33-4.26-4.64-4.72" />
      </svg>
    ),
    desc: 'Operates as creative director of an AI-powered design process — orchestrating Claude & Figma, automated pipelines, and custom tooling to multiply a small team\u2019s capacity by ~2x.',
    tags: ['AI-augmented workflow', 'Claude & Figma', '~2x capacity'],
  },
  {
    label: 'Fortune 500 Retail',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" /><path d="M12 6h.01" /><path d="M16 6h.01" />
        <path d="M8 10h.01" /><path d="M12 10h.01" /><path d="M16 10h.01" />
        <path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" />
      </svg>
    ),
    desc: 'Embedded design leader at Dollar General — grew the app from 5M to 12M+ MAU, shipped Cash Back, myDG Wallet, Rewards and Same-Day Delivery across 15,000 stores.',
    tags: ['5M to 12M+ MAU', '15,000 stores', 'Dollar General'],
  },
  {
    label: 'B2B Cyber Security',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    desc: 'Led UX design for Swimlane\u2019s SOAR platform — translating complex security automation into intuitive interfaces that SOC analysts trust under pressure.',
    tags: ['SOAR platform', 'Swimlane', 'Security automation'],
  },
  {
    label: 'Startup to Enterprise',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    desc: 'Scaled design from Swimlane\u2019s Series A startup through Series C growth and into Dollar General\u2019s Fortune 500 enterprise org — building teams and systems at every stage.',
    tags: ['Series A to C', 'Fortune 500', 'Team building'],
  },
];

const spectrumMarkers = [
  { left: '12%', label: 'Traditional\nDesigner' },
  { left: '35%', label: 'Design\nManager' },
  { left: '62%', label: 'JD — Creative Director\n+ AI Operator', active: true },
  { left: '88%', label: 'Pure\nTechnologist' },
];

const spectrumCards = [
  { title: 'Traditional Designer', body: 'Strong craft, pixel-perfect. But struggles to scale output or integrate AI into workflows. Needs time to adapt.' },
  { title: 'Creative Director + AI Operator', body: 'Design leadership with hands-on AI fluency. Directs vision AND produces at speed. Bridges the gap between what\u2019s possible and what ships.', active: true },
  { title: 'Pure Technologist', body: 'Builds fast. Ships features. But lacks the design eye to ensure what ships is actually good. Speed without taste.' },
];

const caseStudies = [
  {
    href: '/case-study/rba',
    company: 'Dollar General' as const,
    metrics: [{ val: '25K+', lbl: 'Rescued' }, { val: '75K', lbl: 'Prevented' }, { val: '61%', lbl: 'Improvement' }],
    tags: ['Design-Led AI', 'IC-Creative Director', 'Redesign', 'Authentication'],
    tagVariants: ['ai', 'default', 'default', 'default'],
    title: 'Risk-Based Authentication Redesign',
    desc: 'Rescued 25,000+ stuck users and prevented 75,000 future lockouts by redesigning the complete authentication flow for Dollar General\u2019s digital platforms.',
    visual: 'shield',
  },
  {
    href: '/case-study/wallet',
    company: 'Dollar General' as const,
    metrics: [{ val: '130%+', lbl: 'Engagement' }, { val: '40%', lbl: 'Faster' }, { val: '28%', lbl: 'Discovery' }],
    tags: ['AI-Assisted Exploration', 'Wallet Redesign', 'In-Store', 'Deals & Savings'],
    tagVariants: ['ai', 'default', 'default', 'default'],
    title: 'myDG Wallet Turnaround',
    desc: 'Reversed double-digit engagement decline by centralizing rewards, deals, and payments into a unified card stack UI.',
    visual: 'cards',
    delay: 0.15,
  },
  {
    href: '/case-study/cashback',
    company: 'Dollar General' as const,
    metrics: [{ val: '435M', lbl: 'Clips' }, { val: '$9M', lbl: 'Savings' }, { val: '191%', lbl: 'YoY Growth' }],
    tags: ['Ibotta Partnership', 'New Feature', 'Deals and Savings', 'E-Commerce'],
    title: 'Cash Back at Scale',
    desc: 'Led UX for the white-label Ibotta integration — a co-mingled deals gallery that put $9 million back in customers\u2019 pockets.',
    visual: 'cashback',
  },
  {
    href: '/case-study/swimlane-dashboards',
    company: 'Swimlane' as const,
    public: true,
    metrics: [{ val: 'A\u2192C', lbl: 'Series' }, { val: '0\u21921', lbl: 'UX Build' }, { val: '6yr', lbl: 'Tenure' }],
    tags: ['Enterprise B2B', 'SOAR Platform', 'Data Visualization', 'Design System', 'Corporate Brand'],
    title: 'Swimlane — SOAR Platform Design',
    desc: 'Led design across Swimlane\u2019s Security Orchestration, Automation & Response platform — from dashboards and analytics to applications, workflow, and design systems — transforming a startup product into an enterprise-grade intelligence platform.',
    visual: 'soar',
    delay: 0.15,
  },
  {
    company: 'Dollar General' as const,
    metrics: [{ val: '35%', lbl: 'Velocity' }, { val: '89%', lbl: 'Consistency' }, { val: '5-day', lbl: 'Onboarding' }],
    tags: ['Design System', 'Figma + AEM', 'Tokenization', 'Handoff Architecture'],
    title: 'Cumberland Design System',
    desc: 'Enterprise design system for Dollar General — the tokenized foundation that enables AI-accelerated design iteration and consistent design-to-development handoff across both brands.',
    visual: 'tokens',
    disabled: true,
  },
  {
    company: 'pOpshelf' as const,
    metrics: [{ val: '180', lbl: 'Stores' }, { val: 'Sub-Brand', lbl: 'Identity' }, { val: 'App + Web', lbl: 'Launch' }],
    tags: ['Retail', 'App & Web', 'Design System', 'Loyalty', 'E-Commerce'],
    title: 'pOpshelf Digital Experience',
    desc: 'App and website for Dollar General\u2019s boutique retail concept — translating a curated, discovery-driven in-store experience into a cohesive digital presence across 180 locations.',
    visual: 'storefront',
    disabled: true,
    delay: 0.15,
  },
];

const hubSpokes = [
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>, iconType: 'ai' as const, label: 'AI Service', title: 'Generation Engine', desc: 'Claude Code, Pencil Dev, Figma AI. Volume and speed at zero marginal cost.', style: { top: 0, left: '50%', transform: 'translateX(-50%)' } },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>, iconType: 'human' as const, label: 'Human Service', title: 'Creative Direction', desc: 'Taste filters AI output. 25+ years of pattern recognition applied in real time.', style: { top: '12%', right: 0 } },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>, iconType: 'human' as const, label: 'Craft Service', title: 'Design Precision', desc: 'Flow state in Figma. Novel solutions prompting alone would never find.', style: { bottom: '12%', right: 0 } },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>, iconType: 'output' as const, label: 'Output', title: 'Production Ready', desc: 'Eng handoff with specs, edge cases, and acceptance criteria. Ready to ship.', style: { bottom: 0, left: '50%', transform: 'translateX(-50%)' } },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, iconType: 'output' as const, label: 'Output', title: 'Team Growth', desc: 'Design system, sprint rhythm, critique culture. Systems that scale people.', style: { bottom: '12%', left: 0 } },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>, iconType: 'human' as const, label: 'Alignment Service', title: 'Stakeholder Bridge', desc: 'Cross-functional governance. Translating design decisions into business language.', style: { top: '12%', left: 0 } },
];

const timeline: { side: 'left' | 'right'; years: string; company: string; role: string; desc: string; tags: { label: string; ai?: boolean }[] }[] = [
  {
    side: 'left',
    years: '2022 \u2013 2026',
    company: 'Agilitee \u00D7 Dollar General',
    role: 'Sr. Director of Product Design',
    desc: 'Embedded design leader for Fortune 500 retailer. Led team of 6 across digital products serving 12M+ monthly active users. Player-coach model \u2014 doing IC work on critical initiatives while running four workstreams. AI-augmented workflows compressed a team of 5 to deliver the output of 8\u20139.',
    tags: [
      { label: 'AI-Augmented Workflow', ai: true },
      { label: 'Claude + Figma Make', ai: true },
      { label: '12M MAU' },
      { label: 'Design System' },
    ],
  },
  {
    side: 'right',
    years: '2016 \u2013 2022',
    company: 'Swimlane',
    role: 'Sr. Director of UI/UX',
    desc: 'Early design hire at cybersecurity startup. Built the entire UI/UX function from scratch through Series A, B, and C funding rounds. Translated complex SOAR automation workflows into intuitive enterprise interfaces \u2014 system-level thinking that later informed AI agent design.',
    tags: [{ label: '0 \u2192 1 Build' }, { label: 'Series A/B/C' }, { label: 'Enterprise B2B' }, { label: 'Cybersecurity' }],
  },
  {
    side: 'left',
    years: '2013 \u2013 2016',
    company: 'Anabliss',
    role: 'Sr. Interactive Director',
    desc: 'Led digital strategy and delivery at boutique agency. Embedded product designer at SendGrid for their email platform redesign. Clients included Denver Public Schools, The Aspen Institute, and Prime Health.',
    tags: [{ label: 'Agency Leadership' }, { label: 'SendGrid Embed' }, { label: 'Digital Strategy' }],
  },
  {
    side: 'right',
    years: '2012 \u2013 2013',
    company: 'Greenhouse Partners',
    role: 'Sr. Digital Director',
    desc: 'First director-level role. Led digital team across all projects using a \u201CWhole Brand\u201D methodology. Part of a family of companies including Greenhouse Scholars and The18.',
    tags: [{ label: 'Brand Strategy' }, { label: 'First Director Role' }],
  },
  {
    side: 'left',
    years: '2002 \u2013 2012',
    company: 'GreenTent',
    role: 'Co-founder & Digital Design',
    desc: 'Ten-year entrepreneurial foundation. Full-stack ownership: creative direction, UX, front-end development, CMS, and project management. Earned multiple W3C awards for non-profit work.',
    tags: [{ label: 'Entrepreneurship' }, { label: 'Full-Stack Design' }, { label: '10 Years' }, { label: 'W3C Awards' }],
  },
];

const domains = ['Systems Over Screens', 'AI-Native Process', 'Player-Coach Leadership', 'Chaos \u2192 Order at Scale'];

/* ── Visuals ── */
function ShieldVisual() {
  return (
    <div className={s.visShield}>
      <div className={s.visShieldGlow} />
      <svg className={s.visShieldSvg} viewBox="0 0 80 96" fill="none">
        <defs>
          <linearGradient id="shieldFill" x1="40" y1="0" x2="40" y2="96" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.14" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lockFill" x1="40" y1="42" x2="40" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {/* Shield body — flat-domed top, straight sides, tapered bottom */}
        <path className={s.visShieldPath} d="M40 4 C56 4 70 8 72 16 V46 C72 70 56 84 40 92 C24 84 8 70 8 46 V16 C10 8 24 4 40 4 Z" fill="url(#shieldFill)" stroke="var(--accent)" strokeWidth="1" />
        {/* Top accent divider */}
        <line x1="14" y1="28" x2="66" y2="28" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
        {/* Checkmark in top band */}
        <path d="M34 17 L39 22 L47 13" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
        {/* Lock shackle */}
        <path className={s.visShieldShackle} d="M33 52 V46 C33 39.4 36 36 40 36 C44 36 47 39.4 47 46 V52" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        {/* Lock body */}
        <rect className={s.visShieldLockBody} x="29" y="52" width="22" height="18" rx="3.5" fill="url(#lockFill)" stroke="var(--accent)" strokeWidth="0.5" />
        {/* Keyhole */}
        <circle cx="40" cy="60" r="2.5" fill="var(--bg)" opacity="0.8" />
        <rect x="39" y="61.5" width="2" height="4" rx="1" fill="var(--bg)" opacity="0.6" />
      </svg>
    </div>
  );
}

function CashbackLoopVisual() {
  const bars = [
    { x: 9, h: 20 },
    { x: 27, h: 28 },
    { x: 45, h: 25 },
    { x: 63, h: 40 },
    { x: 81, h: 35 },
    { x: 99, h: 52 },
    { x: 117, h: 65 },
  ];
  return (
    <div className={s.visCashback}>
      <div className={s.visCashbackGlow} />
      <svg className={s.visCashbackSvg} viewBox="0 0 140 100" fill="none">
        <defs>
          {bars.map((_, i) => (
            <linearGradient key={i} id={`cb${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={`hsl(${185 + i * 6}, ${55 + i * 5}%, ${28 + i * 5}%)`} />
              <stop offset="100%" stopColor={`hsl(${185 + i * 6}, ${45 + i * 4}%, ${16 + i * 2}%)`} />
            </linearGradient>
          ))}
        </defs>

        {/* Baseline */}
        <line x1="6" y1="90" x2="134" y2="90" stroke="var(--accent)" strokeWidth="0.5" opacity="0.15" />

        {/* Bars */}
        {bars.map((b, i) => (
          <rect key={i} className={s.visCashbackBar} x={b.x} y={90 - b.h} width={14} height={b.h} rx={3} fill={`url(#cb${i})`} opacity={0.5 + i * 0.07} />
        ))}
      </svg>
    </div>
  );
}

function WalletCardsVisual() {
  return (
    <div className={s.visCards}>
      <div className={s.visCard} style={{ background: 'linear-gradient(145deg, rgba(70,45,120,0.55), rgba(45,25,85,0.7))', border: '1px solid rgba(160,120,255,0.25)', transform: 'translate(-50%,-50%) rotate(-12deg) translateX(-18px) translateY(6px) scale(0.9)' }} />
      <div className={s.visCard} style={{ background: 'linear-gradient(145deg, rgba(30,55,140,0.6), rgba(20,35,100,0.75))', border: '1px solid rgba(100,140,255,0.3)', transform: 'translate(-50%,-50%) rotate(-4deg) translateX(-6px) translateY(-2px) scale(0.95)', boxShadow: '0 4px 16px rgba(60,100,220,0.12)' }} />
      <div className={s.visCard} style={{ background: 'linear-gradient(145deg, rgba(15,100,120,0.65), rgba(10,65,85,0.8))', border: '1px solid rgba(0,220,220,0.35)', transform: 'translate(-50%,-50%) rotate(4deg) translateX(10px) translateY(-8px)', boxShadow: '0 12px 40px rgba(0,0,0,0.3), 0 0 24px rgba(0,200,210,0.15)' }} />
    </div>
  );
}

function DesignTokensVisual() {
  return (
    <div className={s.visTokens}>
      <div className={s.visTokensGlow} />
      <svg className={s.visTokensSvg} viewBox="0 0 130 120" fill="none">
        {/* Outer container — the full design system */}
        <circle className={s.visTokensCircle} cx="65" cy="58" r="54" fill="var(--accent)" fillOpacity="0.02" stroke="var(--accent)" strokeWidth="0.8" opacity="0.25" />

        {/* Inner boundary — dashed */}
        <circle className={s.visTokensCircle} cx="65" cy="58" r="46" fill="none" stroke="var(--accent)" strokeWidth="0.6" strokeDasharray="4 4" opacity="0.15" />

        {/* Large — design process, left-center */}
        <circle className={s.visTokensCircle} cx="48" cy="52" r="28" fill="var(--accent)" fillOpacity="0.06" stroke="var(--accent)" strokeWidth="0.8" opacity="0.45" />

        {/* Large — development process, upper-right */}
        <circle className={s.visTokensCircle} cx="88" cy="38" r="24" fill="var(--secondary)" fillOpacity="0.05" stroke="var(--secondary)" strokeWidth="0.8" opacity="0.35" />

        {/* Medium — component system, center overlap hub */}
        <circle className={s.visTokensCircle} cx="65" cy="58" r="16" fill="var(--accent)" fillOpacity="0.1" stroke="var(--accent)" strokeWidth="0.9" opacity="0.6" />

        {/* Medium — documentation, bottom */}
        <circle className={s.visTokensCircle} cx="58" cy="82" r="15" fill="var(--secondary)" fillOpacity="0.04" stroke="var(--secondary)" strokeWidth="0.6" opacity="0.3" />

        {/* Small — design assets, inside left */}
        <circle className={s.visTokensCircle} cx="38" cy="40" r="12" fill="var(--accent)" fillOpacity="0.07" stroke="var(--accent)" strokeWidth="0.6" opacity="0.4" />

        {/* Small — component library, inside right */}
        <circle className={s.visTokensCircle} cx="82" cy="34" r="10" fill="var(--secondary)" fillOpacity="0.07" stroke="var(--secondary)" strokeWidth="0.6" opacity="0.35" />

        {/* Small — issue tracking, right edge */}
        <circle className={s.visTokensCircle} cx="98" cy="60" r="9" fill="var(--accent)" fillOpacity="0.04" stroke="var(--accent)" strokeWidth="0.5" opacity="0.25" />

        {/* Small — content strategy, bottom-right */}
        <circle className={s.visTokensCircle} cx="90" cy="80" r="10" fill="var(--accent)" fillOpacity="0.08" stroke="var(--accent)" strokeWidth="0.7" opacity="0.45" />

        {/* Small — top, between the two large circles */}
        <circle className={s.visTokensCircle} cx="68" cy="22" r="8" fill="var(--accent)" fillOpacity="0.06" stroke="var(--accent)" strokeWidth="0.6" opacity="0.35" />
      </svg>
    </div>
  );
}

function DashboardVisual() {
  return (
    <div className={s.visDash}>
      <div className={s.visDashFrame}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 20, background: 'var(--accent-glow)', borderBottom: '1px solid var(--glass-border)' }} />
        <div style={{ position: 'absolute', top: 7, left: 8, display: 'flex', gap: 4, zIndex: 2 }}>
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(231,76,60,0.6)' }} />
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(241,196,15,0.5)' }} />
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(39,174,96,0.5)' }} />
        </div>
        <div style={{ position: 'absolute', top: 20, left: 0, bottom: 0, width: 40, background: 'var(--accent-glow)', borderRight: '1px solid var(--glass-border)' }} />
        <div style={{ position: 'absolute', top: 28, left: 48, right: 8, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ height: 28, borderRadius: 4, background: 'var(--accent-glow)', border: '1px solid var(--glass-border)' }} />
          ))}
        </div>
        <div style={{ position: 'absolute', top: 64, left: 48, right: 8, bottom: 8, borderRadius: 5, background: 'var(--accent-glow)', border: '1px solid var(--glass-border)' }}>
          <svg viewBox="0 0 160 60" fill="none" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0 50 Q20 48 35 38 T70 28 T105 18 T140 22 T160 12" stroke="var(--accent)" strokeWidth="1.5" fill="none" opacity="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StorefrontVisual() {
  return (
    <div className={s.visPopshelf}>
      <div className={s.visPopshelfGlow} />
      <svg className={s.visPopshelfSvg} viewBox="0 0 160 100" fill="none">
        <defs>
          <linearGradient id="psFrame" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.03" />
          </linearGradient>
        </defs>

        {/* Browser window */}
        <rect className={s.visPopshelfBrowser} x="4" y="6" width="100" height="70" rx="5" fill="url(#psFrame)" stroke="var(--accent)" strokeWidth="0.8" />
        {/* Browser title bar */}
        <line x1="4" y1="18" x2="104" y2="18" stroke="var(--accent)" strokeWidth="0.5" opacity="0.2" />
        <circle cx="14" cy="12" r="2" fill="var(--accent)" opacity="0.2" />
        <circle cx="22" cy="12" r="2" fill="var(--accent)" opacity="0.15" />
        <circle cx="30" cy="12" r="2" fill="var(--accent)" opacity="0.1" />
        {/* Browser placeholder blocks */}
        <rect x="10" y="24" width="88" height="10" rx="2" fill="var(--accent)" fillOpacity="0.08" />
        <rect x="10" y="38" width="40" height="30" rx="2" fill="var(--accent)" fillOpacity="0.06" />
        <rect x="54" y="38" width="44" height="14" rx="2" fill="var(--accent)" fillOpacity="0.06" />
        <rect x="54" y="56" width="44" height="12" rx="2" fill="var(--accent)" fillOpacity="0.04" />

        {/* Mobile device */}
        <rect className={s.visPopshelfPhone} x="116" y="12" width="38" height="72" rx="6" fill="url(#psFrame)" stroke="var(--accent)" strokeWidth="0.8" />
        {/* Phone notch */}
        <rect x="128" y="16" width="14" height="3" rx="1.5" fill="var(--accent)" opacity="0.15" />
        {/* Phone placeholder blocks */}
        <rect x="121" y="24" width="28" height="6" rx="1.5" fill="var(--accent)" fillOpacity="0.08" />
        <rect x="121" y="34" width="28" height="18" rx="1.5" fill="var(--accent)" fillOpacity="0.06" />
        <rect x="121" y="56" width="13" height="13" rx="1.5" fill="var(--accent)" fillOpacity="0.06" />
        <rect x="136" y="56" width="13" height="13" rx="1.5" fill="var(--accent)" fillOpacity="0.04" />
        {/* Phone home bar */}
        <rect x="129" y="76" width="12" height="2" rx="1" fill="var(--accent)" opacity="0.15" />
      </svg>
    </div>
  );
}

function SoarVisual() {
  return (
    <div className={s.visSoar}>
      <div className={s.visSoarGlow} />
      <svg className={s.visSoarSvg} viewBox="0 0 140 110" fill="none">
        <defs>
          <radialGradient id="soarHub">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0.4" />
          </radialGradient>
        </defs>

        {/* Connection paths */}
        <path d="M22 22 C44 22 52 42 70 50" stroke="var(--accent)" strokeWidth="0.8" opacity="0.25" />
        <path d="M22 88 C44 88 52 68 70 60" stroke="var(--accent)" strokeWidth="0.8" opacity="0.25" />
        <path d="M78 48 C96 36 104 24 118 22" stroke="var(--accent)" strokeWidth="0.8" opacity="0.25" />
        <path d="M78 55 C96 55 104 55 118 55" stroke="var(--accent)" strokeWidth="0.8" opacity="0.3" />
        <path d="M78 62 C96 74 104 86 118 88" stroke="var(--accent)" strokeWidth="0.8" opacity="0.25" />

        {/* Input nodes — rounded rects (data sources / alerts) */}
        <rect x="10" y="14" width="24" height="16" rx="4" fill="var(--secondary)" fillOpacity="0.1" stroke="var(--secondary)" strokeWidth="0.8" opacity="0.5" />
        <rect x="10" y="80" width="24" height="16" rx="4" fill="var(--secondary)" fillOpacity="0.1" stroke="var(--secondary)" strokeWidth="0.8" opacity="0.5" />

        {/* Center orchestrator hub */}
        <circle cx="70" cy="55" r="14" fill="url(#soarHub)" stroke="var(--accent)" strokeWidth="1.2" />
        <circle cx="70" cy="55" r="5" fill="var(--bg)" opacity="0.7" />

        {/* Output nodes — circles (automated responses) */}
        <circle cx="118" cy="22" r="6" fill="var(--accent)" fillOpacity="0.1" stroke="var(--accent)" strokeWidth="0.8" opacity="0.45" />
        <circle cx="118" cy="55" r="6" fill="var(--accent)" fillOpacity="0.15" stroke="var(--accent)" strokeWidth="0.8" opacity="0.55" />
        <circle cx="118" cy="88" r="6" fill="var(--accent)" fillOpacity="0.1" stroke="var(--accent)" strokeWidth="0.8" opacity="0.45" />

        {/* Animated pulse dot */}
        <circle r="2" fill="var(--accent)" opacity="0.9">
          <animateMotion dur="3.5s" repeatCount="indefinite" path="M22 88 C44 88 52 68 70 60 C96 55 104 55 118 55" />
        </circle>
      </svg>
    </div>
  );
}

function AiRingsVisual() {
  const rings = [
    { size: 60, color: 'rgba(74,125,255,0.55)', dur: '10s', dot: 10, dotColor: '#4a7dff', glow: '0 0 6px rgba(74,125,255,0.5)' },
    { size: 100, color: 'rgba(0,212,255,0.4)', dur: '14s', dot: 8, dotColor: '#00d4ff', glow: '0 0 5px rgba(0,212,255,0.5)' },
    { size: 140, color: 'rgba(100,100,180,0.25)', dur: '18s', dot: 7, dotColor: '#8888cc', glow: '0 0 4px rgba(100,100,180,0.4)' },
    { size: 175, color: 'rgba(100,100,180,0.12)', dur: '24s', dot: 5, dotColor: '#00d4ff', glow: '0 0 8px rgba(0,212,255,0.6), 0 0 16px rgba(0,212,255,0.2)' },
  ];
  return (
    <div className={s.visAi} style={{ transform: 'scale(1.3)' }}>
      {rings.map((r, i) => (
        <div
          key={i}
          className={s.visAiRing}
          style={{
            width: r.size, height: r.size, borderColor: r.color,
            animation: `ringRotate ${r.dur} linear infinite`,
            // @ts-expect-error CSS custom properties
            '--dot-size': `${r.dot}px`, '--dot-color': r.dotColor, '--dot-glow': r.glow, '--dot-offset': `${-(r.dot / 2)}px`,
          }}
        />
      ))}
      <div className={s.visAiCore} />
    </div>
  );
}

const visuals: Record<string, () => React.JSX.Element> = {
  shield: ShieldVisual,
  cashback: CashbackLoopVisual,
  cards: WalletCardsVisual,
  tokens: DesignTokensVisual,
  dashboard: DashboardVisual,
  storefront: StorefrontVisual,
  soar: SoarVisual,
};

/* ── Arrow icon ── */
const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
);

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <section className={s.hero} id="hero">
        {/* Mesh gradient video background — disabled for now
        <video
          className={s.heroBgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/assets/video/gradient-loop.webm" type="video/webm" />
          <source src="/assets/video/gradient-loop.mp4" type="video/mp4" />
        </video>
        <div className={s.heroBgNoise} />
        <div className={s.heroBgVignette} />
        */}

        <Container>
          <motion.div className={s.heroGrid} initial="hidden" animate="visible" variants={stagger}>
            <div className={s.heroInner}>
              <motion.div variants={fadeUp(0.2)}>
                <DotBadge>Product Design Leader &middot; Denver, CO</DotBadge>
              </motion.div>

              <motion.h1 className={s.heroTitle} variants={fadeUp(0.35)}>
                <span className={s.line}>Building UX/AI teams</span>
                <span className={s.line}>that deliver at</span>
                <span className={s.line}><strong style={{ background: 'linear-gradient(90deg, var(--accent), var(--secondary), var(--accent-light), var(--accent))', backgroundSize: '300% 100%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'logoGradient 9s ease infinite' }}>enterprise scale</strong><span className="text-white">.</span></span>
              </motion.h1>

              <motion.p className={s.heroDesc} variants={fadeUp(0.55)}>
                Product design leader who bridges the full digital product lifecycle — using AI-augmented workflows and design systems to compress what used to take teams of 10 into what a team of 5 delivers. 25+ years of taste and judgment applied at every stage, from research through release.
              </motion.p>

              <motion.a href="#position" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => { const t = document.getElementById('position'); if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); } }} className={s.heroPositionLink} variants={fadeUp(0.65)}>
                See if we align
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </motion.a>
            </div>

            <motion.div className={s.heroHeadshot} variants={fadeUp(0.5)}>
              <Image src="/assets/brand/jd-headshot4.png" alt="JD McCulley" width={819} height={740} priority />
            </motion.div>
          </motion.div>

          {/* Pillars */}
          <motion.div className={s.pillarCards} initial="hidden" animate="visible" variants={stagger}>
            {pillars.map((p, i) => (
              <motion.div key={i} className={s.pillarCard} variants={fadeUp(0.7 + i * 0.1)}>
                <div className={s.pillarCardHeader}>
                  <div className={s.pillarCardIcon}>{p.icon}</div>
                  <span className={s.pillarCardLabel}>{p.label}</span>
                </div>
                <div className={s.pillarCardDivider} />
                <p className={s.pillarCardDesc}>{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ══════════ POSITION / MANIFESTO ══════════ */}
      <section className={s.manifesto} id="position">
        <div className={s.manifestoInner}>
          <ScrollReveal>
            <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-accent font-semibold mb-4 text-center">Position</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className={s.manifestoQuote}>Craft without speed is a luxury.<br />Speed without craft is a liability.</div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="w-12 h-[2px] bg-gradient-to-r from-accent to-secondary mx-auto mb-9" />
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className={s.manifestoBody}>
              Traditional designers bring taste but can&apos;t scale. Technologists
              ship fast but lack the design eye. The rare hire is someone who
              leads with 25+ years of product design craft and operates with
              AI fluency that turns a team of 5 into the output of 9.
              Understands the full product lifecycle well enough to bridge research, design, development, and QA — so the whole machine moves faster, not just the design stage.
              That&apos;s the position.
            </p>
          </ScrollReveal>

          {/* Spectrum */}
          <ScrollReveal delay={0.3}>
            <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 0 20px' }}>
              <div style={{ position: 'relative', padding: '60px 0 48px' }}>
                <div className={s.spectrumBar}>
                  {spectrumMarkers.map((m, i) => (
                    <div key={i} className={s.spectrumMarker} style={{ left: m.left }}>
                      <span className={clsx(s.spectrumLabel, m.active && s.spectrumLabelActive)} style={{ whiteSpace: 'pre-line' }}>
                        {m.label}
                      </span>
                      <div className={clsx(s.spectrumDot, m.active && s.spectrumDotActive)} />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <span className="font-mono text-[0.6rem] tracking-[1.5px] uppercase text-text-muted">Craft &larr; </span>
                  <span className="font-mono text-[0.6rem] tracking-[1.5px] uppercase text-text-muted"> &rarr; Technology</span>
                </div>
              </div>

              <div className={s.spectrumCards}>
                {spectrumCards.map((c, i) => (
                  <div key={i} className={clsx(s.spectrumCard, c.active && s.spectrumCardActive)}>
                    <h4>{c.title}</h4>
                    <p>{c.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════ PERSPECTIVE ══════════ */}
      <section className={s.perspective} id="perspective">
        <Container>
          <SectionHeader label="Perspective" heading="A Point of View on Design + AI" sub="Not a case study — a thesis on how design leadership and AI fluency combine to change what&apos;s possible." centered />

          <ScrollReveal delay={0.3}>
            <Link href="/articles/design-led-ai" className={s.povBanner}>
              <div className={s.povVisual}>
                <AiRingsVisual />
              </div>
              <div>
                <div className={s.povLabel}>POV &middot; Design-Led AI</div>
                <div className={s.povTitle}>Design-Led AI in Practice</div>
                <p className={s.povDesc}>How I operate as creative director of AI-augmented output — compressing multi-sprint initiatives into weeks while raising the quality bar, not lowering it.</p>
                <span className={s.povCta}>
                  Explore My Perspective
                  <ArrowRight />
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ PROCESS HUB ══════════ */}
      <section className={s.processHub} id="process">
        <Container>
          <SectionHeader label="Process" heading="DesignOps, Rewired" sub="One orchestrator. Six capabilities. A system where AI generates, leadership directs, and craft ships." centered />

          <ScrollReveal>
            <div className={s.hub}>
              <div className={s.hubOrbit} />
              <div className={s.hubCenter}>
                <div className={s.hubCenterIcon}>
                  <svg width="44" height="36" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.19 33.63L0.63 17.13M10.19 33.63H31.06M10.19 33.63L8.45 19.73M10.19 33.63L28.45 30.15M0.63 17.13L10.19 0.63M0.63 17.13L8.45 19.73M10.19 0.63H31.06M10.19 0.63L27.58 9.31M10.19 0.63L8.45 19.73M31.06 0.63L40.63 17.13M31.06 0.63L27.58 9.31M40.63 17.13L31.06 33.63M40.63 17.13L27.58 9.31M40.63 17.13L28.45 30.15M31.06 33.63L28.45 30.15M27.58 9.31L8.45 19.73M27.58 9.31L28.45 30.15M8.45 19.73L28.45 30.15" stroke="var(--accent)" strokeWidth="1.25" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={s.hubCenterTitle}>Design<br />Leadership</div>
                <div className={s.hubCenterSub}>Orchestrator</div>
                <div className={s.hubCenterYears}>25+</div>
                <div className={s.hubCenterYearsLabel}>Years</div>
              </div>

              {hubSpokes.map((sp, i) => (
                <div key={i} className={s.hubSpoke} style={sp.style as React.CSSProperties}>
                  <div className={clsx(s.hubSpokeIcon, sp.iconType === 'ai' && s.hubSpokeIconAi, sp.iconType === 'human' && s.hubSpokeIconHuman, sp.iconType === 'output' && s.hubSpokeIconOutput)}>
                    {sp.icon}
                  </div>
                  <div className={s.hubSpokeLabel}>{sp.label}</div>
                  <div className={s.hubSpokeTitle}>{sp.title}</div>
                  <div className={s.hubSpokeDesc}>{sp.desc}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ══════════ CASE STUDIES ══════════ */}
      <section className={s.caseStudies} id="work">
        <Container>
          <SectionHeader
            label="Selected Work"
            heading="Case Studies"
            sub="Enterprise-scale product design — from Fortune 500 retail platforms serving millions, to cybersecurity workflows protecting organizations worldwide."
          />

          <div className={s.csGrid}>
            {caseStudies.map((cs, i) => {
              const Visual = visuals[cs.visual];
              const hasLink = !!cs.href;
              const inner = (
                <>
                  {/* Lock / Unlock badge */}
                  {hasLink && !cs.public && (
                    <div className="absolute top-3 right-3 z-10">
                      {isAuthenticated ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-glow border border-accent/20 font-mono text-[0.6rem] tracking-[0.5px] text-accent">
                          <Unlock className="w-3 h-3" /> Unlocked
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-dim border border-secondary/20 font-mono text-[0.6rem] tracking-[0.5px] text-secondary">
                          <Lock className="w-3 h-3" /> Protected
                        </span>
                      )}
                    </div>
                  )}
                  <div className={s.csImage}><Visual /></div>
                  <div className={s.csMetrics}>
                    {cs.metrics.map((m, j) => (
                      <div key={j} style={{ textAlign: 'center' }}>
                        <div className={s.csMsVal}>{m.val}</div>
                        <div className={s.csMsLbl}>{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                  <div className={s.csContent}>
                    <div className={s.csTags}>
                      <span className={clsx(
                        s.csCompany,
                        cs.company === 'Dollar General' && s.csCompanyDg,
                        cs.company === 'Swimlane' && s.csCompanySwimlane,
                        cs.company === 'pOpshelf' && s.csCompanyPopshelf,
                      )}>
                        {cs.company}
                      </span>
                      {cs.tags.map((t, j) => {
                        const isAi = cs.tagVariants?.[j] === 'ai';
                        return (
                          <span
                            key={j}
                            className={isAi
                              ? 'inline-flex items-center gap-1.5 px-3 py-1 rounded font-mono text-[0.58rem] tracking-[1px] uppercase bg-secondary-dim border border-secondary/25 text-secondary'
                              : s.csTag
                            }
                          >
                            {t}
                          </span>
                        );
                      })}
                    </div>
                    <h3>{cs.title}</h3>
                    <p>{cs.desc}</p>
                    <span className={clsx(s.csLink, cs.disabled && s.disabledLink)}>
                      {cs.disabled
                        ? 'Case Study Coming Soon'
                        : cs.public || isAuthenticated
                          ? 'View Case Study'
                          : 'Unlock to View Details'}
                      <ArrowRight />
                    </span>
                  </div>
                </>
              );
              return (
                <ScrollReveal key={i} delay={cs.delay ?? 0}>
                  {cs.href ? (
                    <Link href={cs.href} className={clsx(s.csCard, 'relative')}>{inner}</Link>
                  ) : (
                    <div className={clsx(s.csCard, cs.disabled && s.disabledCard, 'relative')}>{inner}</div>
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ══════════ JOURNEY ══════════ */}
      <section className={s.journey} id="journey">
        <Container>
          <SectionHeader label="The Journey" heading="25 Years of Building" centered />

          <div className={s.timeline}>
            {timeline.map((tl, i) => (
              <ScrollReveal key={i}>
                <div className={clsx(s.tlItem, tl.side === 'left' ? s.tlItemLeft : s.tlItemRight)}>
                  <div className={s.tlDot} />
                  <div className={s.tlContent}>
                    <div className={s.tlYears}>{tl.years}</div>
                    <div className={s.tlCompany}>{tl.company}</div>
                    <div className={s.tlRole}>{tl.role}</div>
                    <div className={s.tlDesc}>{tl.desc}</div>
                    <div className={s.tlTags}>
                      {tl.tags.map((t, j) => (
                        <span key={j} className={clsx(s.tlTag, t.ai && s.tlTagAi)}>{t.label}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════ CONTACT ══════════ */}
      <section className={s.contact} id="contact">
        <Container>
          <div className={s.contactInner}>
            <SectionHeader label="What&apos;s Next" heading="Let&apos;s build something." centered />

            <ScrollReveal delay={0.2}>
              <p className="text-base text-text-soft max-w-[640px] mx-auto leading-[1.7] font-light mb-14 text-center">
                I&apos;m looking for my next opportunity to lead product design at scale —
                bridging the full product lifecycle with design systems, AI-augmented workflows,
                and the cross-functional leadership that turns a shifting landscape into shipped product.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className={s.contactItems}>
                <a href="mailto:jdmcculley@me.com" className={s.contactItem}>
                  <span className="text-accent flex">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </span>
                  jdmcculley@me.com
                </a>
                <a href="https://www.linkedin.com/in/jdmcc/" target="_blank" rel="noopener noreferrer" className={s.contactItem}>
                  <span className="text-accent flex">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                  </span>
                  LinkedIn
                </a>
                <span className={s.contactItemStatic}>
                  <span className="text-accent flex">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                  </span>
                  Denver, CO
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className={s.contactClosing}>
                <p className={s.contactQuote}>&ldquo;AI compresses everything before and after the craft moment. But the craft moment is human. That&apos;s still where novel solutions emerge.&rdquo;</p>
                <div className={s.contactCite}>&mdash; JD McCULLEY</div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

    </>
  );
}
