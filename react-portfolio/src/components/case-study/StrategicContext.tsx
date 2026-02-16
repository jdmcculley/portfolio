'use client';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from '@/app/(portfolio)/case-study/case-study.module.css';
import clsx from 'clsx';

interface StrategicContextProps {
  label: string;
  stats: { value: string; desc: string }[];
  ecosystemLabel?: string;
  ecosystem?: { label: string; active?: boolean }[];
}

export function StrategicContext({ label, stats, ecosystemLabel, ecosystem }: StrategicContextProps) {
  return (
    <ScrollReveal>
      <div className={s.strategicContext}>
        <div className={s.scLabel}>{label}</div>
        <div className={s.scGrid}>
          {stats.map((st, i) => (
            <div key={i}>
              <div className={s.scStat}>{st.value}</div>
              <div className={s.scDesc}>{st.desc}</div>
            </div>
          ))}
        </div>
        {ecosystem && (
          <div className={s.scDivider}>
            {ecosystemLabel && (
              <div className={s.scLabel} style={{ marginBottom: 16 }}>{ecosystemLabel}</div>
            )}
            <div className={s.scEcosystem}>
              {ecosystem.map((tag, i) => (
                <span key={i} className={clsx(s.scEcoTag, tag.active && s.scEcoTagActive)}>
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ScrollReveal>
  );
}
