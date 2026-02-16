import s from '@/app/(portfolio)/case-study/case-study.module.css';
import clsx from 'clsx';

interface ResultItem {
  metric: string;
  label: string;
  context?: string;
  featured?: boolean;
}

export function ResultsGrid({ results }: { results: ResultItem[] }) {
  return (
    <div className={s.resultsGrid}>
      {results.map((r, i) => (
        <div key={i} className={clsx(s.resultCard, r.featured && s.resultCardFeatured)}>
          <div className={s.resultMetric}>{r.metric}</div>
          <div className={s.resultLabel}>{r.label}</div>
          {r.context && <div className={s.resultContext}>{r.context}</div>}
        </div>
      ))}
    </div>
  );
}
