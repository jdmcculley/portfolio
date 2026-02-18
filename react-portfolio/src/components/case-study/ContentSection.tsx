'use client';

import { type ReactNode } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import s from '@/app/(portfolio)/case-study/case-study.module.css';
import clsx from 'clsx';

interface ContentSectionProps {
  number: string;
  title: string;
  children: ReactNode;
  reduced?: boolean;
}

export function ContentSection({ number, title, children, reduced }: ContentSectionProps) {
  return (
    <ScrollReveal>
      <section className={clsx(s.contentSection, reduced && s.contentSectionReduced)}>
        <div className={s.sectionHeader}>
          <span className={s.sectionNumber}>{number}</span>
          <div className={s.sectionDivider} />
        </div>
        <h2 className={s.sectionTitle}>{title}</h2>
        {children}
      </section>
    </ScrollReveal>
  );
}
