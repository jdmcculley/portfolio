'use client';

import React, { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from './timeline.module.css';

/* ── Chevron Icon ── */
function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={`${s.chevron} ${open ? s.chevronOpen : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ── Check Icon ── */
function CheckIcon() {
  return (
    <svg className={s.goalCheck} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MILESTONE DATA
   ═══════════════════════════════════════════════════════════════ */
interface Role {
  name: string;
  cls: string;
}

interface AiSection {
  badge: string;
  badgeCls: string;
  aiHandles: string[];
  humanLeads: string[];
  principle: string;
}

interface MilestoneData {
  title: string;
  phaseNum: number;
  subtitle: string;
  statNum: number;
  statLabel: string;
  desc: string;
  dotCls: string;
  subtitleCls: string;
  statCls: string;
  icon: React.ReactNode;
  ai: AiSection;
  goals: string[];
  roles: Role[];
}

const milestones: MilestoneData[] = [
  {
    title: 'Discovery',
    phaseNum: 1,
    subtitle: 'Problem Definition',
    statNum: 9,
    statLabel: 'goals',
    desc: 'PM works with stakeholders to understand business needs, customer pain points, and desired outcomes. Research validates the problem space.',
    dotCls: s.dotDiscovery,
    subtitleCls: s.cardSubtitleDiscovery,
    statCls: s.statNumberDiscovery,
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    ai: {
      badge: 'AI-Accelerated',
      badgeCls: s.badgeAccelerated,
      aiHandles: [
        'Synthesize survey data & usage patterns',
        'Map competitive landscape',
        'Generate research outlines from raw context',
      ],
      humanLeads: [
        'Frame the right problem',
        'Conduct stakeholder interviews',
        'Apply judgment to what actually matters',
      ],
      principle:
        '\u201cAI finds the haystacks. My researcher finds the needles.\u201d',
    },
    goals: [
      'Business requirements documented',
      'Technical constraints identified',
      'Research plan established',
      'Scope boundaries defined',
      'Stakeholder alignment confirmed',
    ],
    roles: [
      { name: 'PM', cls: s.roleTagPm },
      { name: 'UX Research', cls: s.roleTagResearch },
      { name: 'Engineering', cls: s.roleTagEngineering },
      { name: 'Stakeholders', cls: s.roleTagStakeholders },
    ],
  },
  {
    title: 'Convergence',
    phaseNum: 2,
    subtitle: 'Cross-Functional Alignment',
    statNum: 12,
    statLabel: 'goals',
    desc: 'All stakeholders align on scope, constraints, approach, and timeline. Open questions are documented, and everyone leaves with clarity on next steps.',
    dotCls: s.dotKickoff,
    subtitleCls: s.cardSubtitleKickoff,
    statCls: s.statNumberKickoff,
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    ai: {
      badge: 'Human-Led',
      badgeCls: s.badgeHumanLed,
      aiHandles: [
        'Pre-meeting context synthesis',
        'Constraint mapping from technical docs',
        'Draft agenda from discovery artifacts',
      ],
      humanLeads: [
        'Cross-functional alignment',
        'Reading the room & relationship building',
        'Real-time decision-making',
      ],
      principle:
        '\u201cAlignment is a human act. AI can prepare the table \u2014 but can\u2019t read the room.\u201d',
    },
    goals: [
      'Requirements reviewed & confirmed',
      'Design approach agreed upon',
      'Timeline and goals set',
      'Action items assigned',
      'Next touchpoint scheduled',
    ],
    roles: [
      { name: 'PM', cls: s.roleTagPm },
      { name: 'UX Design', cls: s.roleTagDesign },
      { name: 'UX Research', cls: s.roleTagResearch },
      { name: 'UX Engineer', cls: s.roleTagEngineer },
      { name: 'Engineering', cls: s.roleTagEngineering },
      { name: 'Marketing', cls: s.roleTagMarketing },
      { name: 'Merchandising', cls: s.roleTagMerch },
    ],
  },
  {
    title: 'Build',
    phaseNum: 3,
    subtitle: 'Creation & Iteration',
    statNum: 15,
    statLabel: 'goals',
    desc: 'UX Design creates solutions while UX Research validates assumptions. PM provides support and shields the team from scope creep.',
    dotCls: s.dotDesign,
    subtitleCls: s.cardSubtitleDesign,
    statCls: s.statNumberDesign,
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    ai: {
      badge: 'Human + AI',
      badgeCls: s.badgeBoth,
      aiHandles: [
        'Generate 5-10 directions fast (\u201cThe Bad Build\u201d)',
        'Code-based iteration via Claude Code',
        'Volume at near-zero restart cost',
        'Iterate against tokenized design system components',
      ],
      humanLeads: [
        'Creative direction \u2014 find sparks, cut noise',
        'Figma craft in flow state',
        'Novel solutions that can\u2019t be prompted',
      ],
      principle:
        '\u201cVolume is AI. Taste is human. The craft moment is where novel solutions emerge.\u201d',
    },
    goals: [
      'User flows and UI designs',
      'Research insights and validation',
      'Promotional assets (if applicable)',
      'Ad placements integrated',
      'Design system components used',
    ],
    roles: [
      { name: 'UX Design Lead', cls: s.roleTagDesign },
      { name: 'UX Research', cls: s.roleTagResearch },
      { name: 'PM Support', cls: s.roleTagPm },
      { name: 'UX Engineer', cls: s.roleTagEngineer },
      { name: 'Marketing', cls: s.roleTagMarketing },
      { name: 'Merchandising', cls: s.roleTagMerch },
    ],
  },
  {
    title: 'Review & Handoff',
    phaseNum: 4,
    subtitle: 'Validation & Preparation',
    statNum: 19,
    statLabel: 'goals',
    desc: 'UX Engineer prepares dev-ready files and conducts handoff. Engineering reviews feasibility. All stakeholders approve before development begins.',
    dotCls: s.dotHandoff,
    subtitleCls: s.cardSubtitleHandoff,
    statCls: s.statNumberHandoff,
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    ai: {
      badge: 'AI-Accelerated',
      badgeCls: s.badgeAccelerated,
      aiHandles: [
        'Generate functional prototypes & dev-ready specs',
        'Auto-document design decisions',
        'Build handoff artifacts from Figma',
      ],
      humanLeads: [
        'Design QA & edge case review',
        'Stakeholder approval',
        'Catch what AI misses (\u201cthe seventh participant\u201d)',
      ],
      principle:
        '\u201cReal users break things AI can\u2019t predict. QA is where judgment earns its keep.\u201d',
    },
    goals: [
      'Dev-ready specs and files',
      'Design QA completed',
      'Handoff meeting conducted',
      'All approvals obtained',
      'Open questions resolved',
    ],
    roles: [
      { name: 'UX Engineer Lead', cls: s.roleTagEngineer },
      { name: 'Engineering', cls: s.roleTagEngineering },
      { name: 'UX Design', cls: s.roleTagDesign },
      { name: 'PM', cls: s.roleTagPm },
      { name: 'Stakeholders', cls: s.roleTagStakeholders },
    ],
  },
  {
    title: 'Post-Launch',
    phaseNum: 5,
    subtitle: 'Measurement & Iteration',
    statNum: 9,
    statLabel: 'goals',
    desc: 'UX Research measures success metrics and collects user feedback. The team captures lessons learned and uses insights to inform future iterations.',
    dotCls: s.dotPostlaunch,
    subtitleCls: s.cardSubtitlePostlaunch,
    statCls: s.statNumberPostlaunch,
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
      </svg>
    ),
    ai: {
      badge: 'Human + AI',
      badgeCls: s.badgeBoth,
      aiHandles: [
        'Monitor success metrics & detect patterns',
        'Synthesize user feedback at scale',
        'Generate iteration candidates from data',
      ],
      humanLeads: [
        'Interpret what the numbers mean',
        'Make strategic iteration calls',
        'Document lessons for institutional memory',
      ],
      principle:
        '\u201cAI shows you what happened. Humans decide what it means.\u201d',
    },
    goals: [
      'Success metrics monitored',
      'User feedback collected',
      'Post-launch research conducted',
      'Lessons learned documented',
      'Iteration plan created',
    ],
    roles: [
      { name: 'UX Research Lead', cls: s.roleTagResearch },
      { name: 'PM', cls: s.roleTagPm },
      { name: 'UX Design', cls: s.roleTagDesign },
      { name: 'UX Engineer', cls: s.roleTagEngineer },
    ],
  },
];

/* ── Legend Data ── */
const legendItems = [
  { name: 'Product Manager', color: '#5ba3cc' },
  { name: 'UX Design', color: '#e8984a' },
  { name: 'UX Research', color: '#9cc040' },
  { name: 'UX Engineer', color: '#4aad7a' },
  { name: 'Engineering Lead', color: '#d06060' },
  { name: 'Marketing', color: '#d0607a' },
  { name: 'Merchandising', color: '#5b8ad0' },
  { name: 'Stakeholders', color: '#c9a030' },
];

/* ═══════════════════════════════════════════════════════════════
   MILESTONE CARD COMPONENT
   ═══════════════════════════════════════════════════════════════ */
function MilestoneCard({ data, index }: { data: MilestoneData; index: number }) {
  const [aiOpen, setAiOpen] = useState(false);
  const [goalsOpen, setGoalsOpen] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08}>
      <div className={s.milestone}>
        {/* Dot */}
        <div className={`${s.dot} ${data.dotCls}`}>{data.icon}</div>

        {/* Card body */}
        <div className={s.body}>
          {/* Title row */}
          <div className={s.titleRow}>
            <h2 className={s.cardTitle}>{data.title}</h2>
            <span className={s.phase}>Phase {data.phaseNum}</span>
          </div>

          <div className={`${s.cardSubtitle} ${data.subtitleCls}`}>
            {data.subtitle}
          </div>

          {/* Stat */}
          <div className={s.stat}>
            <span className={`${s.statNumber} ${data.statCls}`}>
              {data.statNum}
            </span>
            <span className={s.statLabel}>{data.statLabel}</span>
          </div>

          {/* Description */}
          <p className={s.desc}>{data.desc}</p>

          {/* ── AI Augmentation Expandable ── */}
          <div className={s.expandable}>
            <div
              className={s.expandableHeader}
              onClick={() => setAiOpen(!aiOpen)}
              role="button"
              tabIndex={0}
              aria-expanded={aiOpen}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setAiOpen(!aiOpen);
                }
              }}
            >
              <div className={s.expandableHeaderLeft}>
                <span className={s.expandableLabel}>AI Augmentation</span>
                <span className={`${s.aiBadge} ${data.ai.badgeCls}`}>
                  {data.ai.badge}
                </span>
              </div>
              <ChevronDown open={aiOpen} />
            </div>

            {aiOpen && (
              <div className={s.expandableContent}>
                <div className={s.aiHumanGrid}>
                  <div className={s.aiCol}>
                    <div className={s.colLabel}>AI Handles</div>
                    <ul className={s.colList}>
                      {data.ai.aiHandles.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={s.humanCol}>
                    <div className={s.colLabel}>Human Leads</div>
                    <ul className={s.colList}>
                      {data.ai.humanLeads.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={s.principle}>{data.ai.principle}</div>
              </div>
            )}
          </div>

          {/* ── Key Goals Expandable ── */}
          <div className={s.expandable}>
            <div
              className={s.expandableHeader}
              onClick={() => setGoalsOpen(!goalsOpen)}
              role="button"
              tabIndex={0}
              aria-expanded={goalsOpen}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setGoalsOpen(!goalsOpen);
                }
              }}
            >
              <div className={s.expandableHeaderLeft}>
                <span className={s.expandableLabel}>Key Goals</span>
              </div>
              <ChevronDown open={goalsOpen} />
            </div>

            {goalsOpen && (
              <div className={s.expandableContent}>
                <ul className={s.goalsList}>
                  {data.goals.map((goal) => (
                    <li key={goal}>
                      <CheckIcon />
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ── Role Tags ── */}
          <div className={s.roles}>
            {data.roles.map((role) => (
              <span key={role.name} className={`${s.roleTag} ${role.cls}`}>
                {role.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function DesignProcessTimelinePage() {
  return (
    <div className={s.page}>
      <title>Feature Design Process &mdash; JD McCulley</title>

      {/* ── Header ── */}
      <ScrollReveal>
        <header className={s.header}>
          <div className={s.sectionLabel}>Process</div>
          <h1 className={s.heading}>Feature Design Process</h1>
          <p className={s.subtitle}>
            The digital product lifecycle is compressing. This is how I structure
            the process to move at that speed&nbsp;&mdash; with AI augmented at
            every phase and human judgment governing every decision.
          </p>
        </header>
      </ScrollReveal>

      {/* ── Timeline ── */}
      <div className={s.timeline}>
        {milestones.map((m, i) => (
          <MilestoneCard key={m.title} data={m} index={i} />
        ))}
      </div>

      {/* ── Role Legend ── */}
      <ScrollReveal delay={0.1}>
        <section className={s.legend}>
          <h3 className={s.legendTitle}>Role Legend</h3>
          <div className={s.legendGrid}>
            {legendItems.map((item) => (
              <div key={item.name} className={s.legendItem}>
                <div
                  className={s.legendSwatch}
                  style={{ backgroundColor: item.color }}
                />
                <span className={s.legendName}>{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
