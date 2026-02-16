'use client';

import { useState } from 'react';

/**
 * Interactive journey map showing all 8 RBA journeys and 10 scenarios.
 * Stat boxes for Journeys and Scenarios are clickable — expand to reveal lists.
 */

/* ── Journey data ── */
const journeys: {
  num: number;
  title: string;
  desc: string;
  screens: number;
  icon: React.ReactNode;
  accent: string;
  accentDim: string;
  group: 'silent' | 'verify' | 'recovery' | 'proactive';
}[] = [
  {
    num: 1, title: 'Trusted Device', desc: 'Silent bypass — no verification needed',
    screens: 9, accent: '#34d399', accentDim: 'rgba(52, 211, 153, 0.10)',
    group: 'silent',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    num: 2, title: 'Phone Verification', desc: 'Phone entered as username — device verification',
    screens: 12, accent: 'var(--accent)', accentDim: 'var(--accent-glow)',
    group: 'verify',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
  {
    num: 3, title: 'Email Verification', desc: 'Email as username — TFA or OTP code paths',
    screens: 15, accent: 'var(--accent)', accentDim: 'var(--accent-glow)',
    group: 'verify',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    num: 4, title: 'Email Re-authentication', desc: 'Email NOT username — requires re-auth first',
    screens: 19, accent: '#fbbf24', accentDim: 'rgba(251, 191, 36, 0.10)',
    group: 'verify',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    num: 5, title: 'Customer Care Fallback', desc: 'Context-aware help for all error scenarios',
    screens: 9, accent: 'var(--text-muted)', accentDim: 'rgba(74, 82, 112, 0.15)',
    group: 'recovery',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  },
  {
    num: 6, title: 'Partial Registration Recovery', desc: 'Complete incomplete registrations with verification',
    screens: 18, accent: 'var(--secondary)', accentDim: 'var(--secondary-dim)',
    group: 'recovery',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  },
  {
    num: 7, title: 'Prerequisites Campaign', desc: 'Proactive contact verification 4–6 weeks before launch',
    screens: 16, accent: '#f472b6', accentDim: 'rgba(244, 114, 182, 0.10)',
    group: 'proactive',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
  {
    num: 8, title: 'KMSI Session Refresh', desc: 'Post-RBA flow when system kicks out KMSI users',
    screens: 15, accent: 'var(--secondary)', accentDim: 'var(--secondary-dim)',
    group: 'proactive',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>,
  },
];

/* ── Scenario data (from Figma prototype) ── */
const scenarios: {
  title: string;
  desc: string;
  scope: string;
  accent: string;
  accentDim: string;
  icon: React.ReactNode;
}[] = [
  {
    title: 'Proactive Prevention (Lead-Up Campaign)',
    desc: 'Pre-RBA campaign confirms contacts via attestation (phone) and verification (email)',
    scope: '4–6M users during campaign',
    accent: '#34d399', accentDim: 'rgba(52, 211, 153, 0.10)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
  {
    title: 'KMSI Session Refresh',
    desc: 'KMSI users skip TFA unless system kicks them out — then device trust renewal required',
    scope: '~60% of DAU are KMSI',
    accent: 'var(--secondary)', accentDim: 'var(--secondary-dim)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>,
  },
  {
    title: 'Legacy Device Re-verification',
    desc: 'Pre-RBA trusted device requires verification under new system',
    scope: 'One-time per legacy device',
    accent: 'var(--accent)', accentDim: 'var(--accent-glow)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    title: 'New User Onboarding (Partial Registration)',
    desc: 'User with incomplete account completes registration and verifies contacts',
    scope: 'All partial registrations',
    accent: 'var(--secondary)', accentDim: 'var(--secondary-dim)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>,
  },
  {
    title: 'Phone Fails \u2192 Email Fallback',
    desc: 'User cannot access phone, falls back to email verification',
    scope: '5–10% of phone attempts',
    accent: 'var(--accent)', accentDim: 'var(--accent-glow)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="16.5" y2="7.5"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  },
  {
    title: 'Email Fails \u2192 Phone Fallback',
    desc: 'User cannot access email, falls back to phone verification',
    scope: '3–5% of email attempts',
    accent: 'var(--accent)', accentDim: 'var(--accent-glow)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
  },
  {
    title: 'Phone \u2192 Re-auth \u2192 Email (Gigya Constraint)',
    desc: 'Phone fails, email masked, requires re-authentication before email verification',
    scope: 'Rare (~1–2%)',
    accent: '#fbbf24', accentDim: 'rgba(251, 191, 36, 0.10)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  },
  {
    title: 'Masking-Based Routing',
    desc: 'Email/phone masking determines display and whether re-auth is needed',
    scope: '20–30% need re-auth',
    accent: '#34d399', accentDim: 'rgba(52, 211, 153, 0.10)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  },
  {
    title: 'Both Methods Fail \u2192 Customer Care',
    desc: 'Neither phone nor email verification succeeds, escalate to customer care',
    scope: '<1% of users',
    accent: '#f87171', accentDim: 'rgba(248, 113, 113, 0.10)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>,
  },
  {
    title: 'Emergency Account Access via Customer Care',
    desc: 'Customer Care grants temporary access for contact update',
    scope: '<1% of users',
    accent: '#f87171', accentDim: 'rgba(248, 113, 113, 0.10)',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  },
];

const totalScreens = journeys.reduce((sum, j) => sum + j.screens, 0);

const groupLabels: Record<string, string> = {
  silent: 'Silent Auth',
  verify: 'Verification Paths',
  recovery: 'Recovery & Support',
  proactive: 'Proactive Prevention',
};

type Panel = 'journeys' | 'scenarios' | null;

/* ── Stat box — clickable or static ── */
function StatBox({ value, label, active, onClick }: {
  value: string; label: string; active?: boolean; onClick?: () => void;
}) {
  const clickable = !!onClick;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!clickable}
      style={{
        flex: 1, padding: '14px 16px', textAlign: 'left',
        background: active ? 'var(--surface-elevated)' : 'var(--surface)',
        borderRadius: 10,
        border: active ? '1px solid var(--border-strong)' : '1px solid var(--border)',
        cursor: clickable ? 'pointer' : 'default',
        transition: 'border-color 0.2s ease, background 0.2s ease',
        position: 'relative',
        fontFamily: 'inherit',
        opacity: clickable ? 1 : 0.7,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 24, fontWeight: 700, color: clickable ? 'var(--accent)' : 'var(--text-soft)', lineHeight: 1, marginBottom: 4 }}>{value}</div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: 0.5 }}>{label}</div>
        </div>
        {clickable && (
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: 'transform 0.25s ease', transform: active ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </div>
    </button>
  );
}

/* ── Journey row ── */
function JourneyRow({ j }: { j: typeof journeys[number] }) {
  const barWidth = Math.round((j.screens / 19) * 100);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 16px', borderRadius: 10,
      background: j.accentDim, borderLeft: `3px solid ${j.accent}`,
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: j.accent, background: 'var(--bg)', border: '1px solid var(--border)',
      }}>
        {j.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 2 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: j.accent, letterSpacing: 1, flexShrink: 0 }}>J{j.num}</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{j.title}</span>
        </div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.4 }}>{j.desc}</div>
        <div style={{ marginTop: 6, height: 3, borderRadius: 2, background: 'var(--bg)', overflow: 'hidden' }}>
          <div style={{ width: `${barWidth}%`, height: '100%', borderRadius: 2, background: j.accent, opacity: 0.6 }} />
        </div>
      </div>
      <div style={{ textAlign: 'right', flexShrink: 0 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 700, color: j.accent, lineHeight: 1 }}>{j.screens}</div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', letterSpacing: 1 }}>screens</div>
      </div>
    </div>
  );
}

/* ── Scenario row ── */
function ScenarioRow({ s }: { s: typeof scenarios[number] }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '12px 16px', borderRadius: 10,
      background: s.accentDim, borderLeft: `3px solid ${s.accent}`,
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: s.accent, background: 'var(--bg)', border: '1px solid var(--border)',
      }}>
        {s.icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{s.title}</div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.4 }}>{s.desc}</div>
      </div>
      <div style={{
        flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: 11,
        color: 'var(--text-muted)', textAlign: 'right', maxWidth: 140,
        lineHeight: 1.4, letterSpacing: 0.3,
      }}>
        {s.scope}
      </div>
    </div>
  );
}

/* ── Expandable panel wrapper ── */
function ExpandPanel({ open, children }: { open: boolean; children: React.ReactNode }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
    }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{ paddingTop: open ? 16 : 0, transition: 'padding-top 0.25s ease' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ── Main component ── */
export function JourneyMap() {
  const [activePanel, setActivePanel] = useState<Panel>('journeys');
  const toggle = (panel: Panel) => {
    setActivePanel((prev) => (prev === panel ? null : panel));
  };

  return (
    <div style={{
      background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
      borderRadius: 16, padding: '28px 28px 24px', position: 'relative', overflow: 'hidden',
      backdropFilter: 'blur(12px)',
    }}>
      {/* Top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 1,
        background: 'linear-gradient(90deg, var(--secondary), var(--accent), var(--secondary))',
        opacity: 0.3,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <div style={{
          width: 6, height: 6, borderRadius: '50%', background: 'var(--secondary)',
          boxShadow: '0 0 8px var(--secondary-glow)',
          animation: 'dotPulse 2.5s ease-in-out infinite',
        }} />
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 2.5,
          color: 'var(--secondary)', textTransform: 'uppercase',
        }}>
          System Architecture
        </span>
      </div>

      {/* Stats row */}
      <div style={{ display: 'flex', gap: 10 }}>
        <StatBox value="8" label="User Journeys" active={activePanel === 'journeys'} onClick={() => toggle('journeys')} />
        <StatBox value="10" label="Scenarios" active={activePanel === 'scenarios'} onClick={() => toggle('scenarios')} />
        <StatBox value={String(totalScreens)} label="Total Screens" />
        <StatBox value="100%" label="Production Copy" />
      </div>

      {/* Expandable: Journeys */}
      <ExpandPanel open={activePanel === 'journeys'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {journeys.map((j, idx) => {
            const showGroup = idx === 0 || j.group !== journeys[idx - 1].group;
            return (
              <div key={j.num}>
                {showGroup && (
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2,
                    color: 'var(--text-muted)', textTransform: 'uppercase',
                    marginTop: j.num === 1 ? 0 : 12, marginBottom: 6,
                  }}>
                    {groupLabels[j.group]}
                  </div>
                )}
                <JourneyRow j={j} />
              </div>
            );
          })}
        </div>
      </ExpandPanel>

      {/* Expandable: Scenarios */}
      <ExpandPanel open={activePanel === 'scenarios'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {scenarios.map((sc, i) => (
            <ScenarioRow key={i} s={sc} />
          ))}
        </div>
      </ExpandPanel>

      {/* Fallback connections note */}
      <div style={{
        marginTop: 20, paddingTop: 16,
        borderTop: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <polyline points="17 1 21 5 17 9" /><path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" /><path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: 0.5, lineHeight: 1.5 }}>
          Cross-journey fallbacks connect every verification path to Customer Care (J5). No user ever dead-ends.
        </span>
      </div>
    </div>
  );
}
