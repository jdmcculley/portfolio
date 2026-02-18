import s from '@/app/(portfolio)/case-study/case-study.module.css';

const PHONE_COLOR = '#0a5e72';
const MULTI_COLOR = '#4a7dff';

interface DotData {
  left: string;
  top: string;
  label: string;
  value: string;
  sub: string;
  color: string;
  variant: 'phone' | 'multi';
  align?: 'left' | 'right';
  side?: 'right' | 'left';
}

const phoneDots: DotData[] = [
  { left: '0%', top: '77.5%', label: 'Dec 2025 · Phone Only', value: '28%', sub: 'Launch baseline coverage', color: PHONE_COLOR, variant: 'phone', side: 'right' },
  { left: '100%', top: '70%', label: 'Mar 2026 · Phone Only', value: '32%', sub: 'Plateau reached', color: PHONE_COLOR, variant: 'phone', side: 'left' },
];

const multiDots: DotData[] = [
  { left: '0%', top: '85%', label: 'Dec 2025 · Multi-Auth', value: '0%', sub: 'Before redesign launch', color: MULTI_COLOR, variant: 'multi', side: 'right' },
  { left: '57%', top: '52.5%', label: 'Feb 2026 · Multi-Auth', value: '18%', sub: 'Prerequisite campaign launches', color: MULTI_COLOR, variant: 'multi' },
  { left: '100%', top: '4%', label: 'Mar 2026 · Multi-Auth', value: '45%+', sub: 'Target — rescued users', color: MULTI_COLOR, variant: 'multi', side: 'left' },
];

export function CoverageChart() {
  const allDots = [...phoneDots, ...multiDots];

  return (
    <div className={s.heroChart}>
      <div className={s.chartHeader}>
        <span className={s.chartTitle}>Verification Coverage Timeline</span>
        <div className={s.chartLegend}>
          <div className={s.legendItem}><div className={`${s.legendDot} ${s.legendDotPhone}`} />Phone Only</div>
          <div className={s.legendItem}><div className={`${s.legendDot} ${s.legendDotMulti}`} />Multi-Auth (Email + Phone)</div>
        </div>
      </div>
      <div className={s.chartArea}>
        <svg className={s.chartSvg} viewBox="0 0 800 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="phoneFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={PHONE_COLOR} stopOpacity={0.15} />
              <stop offset="100%" stopColor={PHONE_COLOR} stopOpacity={0} />
            </linearGradient>
            <linearGradient id="multiFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={MULTI_COLOR} stopOpacity={0.10} />
              <stop offset="100%" stopColor={MULTI_COLOR} stopOpacity={0} />
            </linearGradient>
          </defs>
          <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />
          <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />
          <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />
          {/* Phone-only line — nearly flat */}
          <path d="M0 155 C100 154 200 152 300 150 C400 148 500 146 600 143 C700 141 760 140 800 140" stroke={PHONE_COLOR} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M0 155 C100 154 200 152 300 150 C400 148 500 146 600 143 C700 141 760 140 800 140 V200 H0 Z" fill="url(#phoneFill)" />
          {/* Multi-auth line — flat through Jan, steep rise from Feb */}
          <path className={s.marchingAnts} d="M0 170 C150 170 300 165 456 105 C550 69 650 20 800 8" stroke={MULTI_COLOR} strokeWidth="1.5" fill="none" strokeDasharray="6 3" strokeLinecap="round" />
          <path d="M0 170 C150 170 300 165 456 105 C550 69 650 20 800 8 V200 H0 Z" fill="url(#multiFill)" />
        </svg>

        {allDots.map((dot, i) => {
          const dotClass = dot.variant === 'phone' ? s.phoneDot : s.multiDot;
          const alignClass = dot.align === 'left' ? s.tooltipAlignLeft : dot.align === 'right' ? s.tooltipAlignRight : '';
          const sideClass = dot.side === 'right' ? s.tooltipSideRight : dot.side === 'left' ? s.tooltipSideLeft : '';

          return (
            <div
              key={i}
              className={`${s.chartDot} ${dotClass} ${alignClass} ${sideClass}`}
              style={{ left: dot.left, top: dot.top }}
            >
              <div className={s.chartTooltip}>
                <div className={s.chartTooltipLabel}>{dot.label}</div>
                <div className={s.chartTooltipValue} style={{ color: dot.color }}>{dot.value}</div>
                <div className={s.chartTooltipSub}>{dot.sub}</div>
              </div>
            </div>
          );
        })}

        {/* Static label — Rollback Release above teal dot */}
        <div className={s.chartAnnotation} style={{ left: '0%', top: '77.5%', transform: 'translate(20px, calc(-100% - 12px))' }}>
          Rollback<br />Release
        </div>

        {/* Static label — Prerequisite Email Campaign above blue dot */}
        <div className={s.chartAnnotation} style={{ left: '57%', top: '52.5%', transform: 'translate(-110%, calc(-100% - 12px))' }}>
          Prerequisite<br />Email Campaign
        </div>
      </div>
      <div className={s.chartLabels}>
        <span className={s.chartLabelItem}>Dec 2025</span>
        <span className={s.chartLabelItem}>Jan</span>
        <span className={s.chartLabelItem}>Feb</span>
        <span className={s.chartLabelItem}>Mar 2026</span>
      </div>
    </div>
  );
}
