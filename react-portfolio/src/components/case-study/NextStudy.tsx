'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from '@/app/(portfolio)/case-study/case-study.module.css';

interface NextStudyProps {
  href: string;
  prevHref?: string;
  prevTitle?: string;
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
}

export function NextStudy({ href, prevHref, prevTitle, title, desc, metrics }: NextStudyProps) {
  return (
    <ScrollReveal>
      <div className={s.nextStudy}>
        <div className={s.nextStudyInner}>
          {prevHref && (
            <Link href={prevHref} prefetch={false} className={s.prevArrowLink} aria-label={`Previous: ${prevTitle}`}>
              {prevTitle && <span className={s.prevTooltip}>{prevTitle}</span>}
              <span className={s.prevArrow}>&larr;</span>
            </Link>
          )}
          <div className={s.nextStudyContent}>
            <div className={s.nextStudyLabel}>Next Case Study</div>
            <Link href={href} prefetch={false} className={s.nextStudyLink}>
              <h3 className={s.nextStudyTitle}>{title}</h3>
              <div className={s.nextStudyDesc}>{desc}</div>
              <div className={s.nextStudyMetrics}>
                {metrics.map((m, i) => (
                  <div key={i} className={s.nextMetric}>
                    {m.value} <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </Link>
          </div>
          <Link href={href} prefetch={false} className={s.nextArrowLink} aria-label="Next case study">
            <span className={s.nextArrow}>&rarr;</span>
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
}
