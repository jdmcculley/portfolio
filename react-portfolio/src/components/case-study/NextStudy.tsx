'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from '@/app/(portfolio)/case-study/case-study.module.css';

interface NextStudyProps {
  href: string;
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
}

export function NextStudy({ href, title, desc, metrics }: NextStudyProps) {
  return (
    <ScrollReveal>
      <div className={s.nextStudy}>
        <div className={s.nextStudyInner}>
          <div className={s.nextStudyLabel}>Next Case Study</div>
          <Link href={href} className={s.nextStudyLink}>
            <div className={s.nextStudyTop}>
              <h3 className={s.nextStudyTitle}>{title}</h3>
              <span className={s.nextArrow}>&rarr;</span>
            </div>
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
      </div>
    </ScrollReveal>
  );
}
