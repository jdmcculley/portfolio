import s from '@/app/(portfolio)/case-study/case-study.module.css';

interface PullQuoteProps {
  text: string;
  attr?: string;
}

export function PullQuote({ text, attr }: PullQuoteProps) {
  return (
    <div className={s.pullQuote}>
      <div className={s.pullQuoteIcon}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className={s.pullQuoteText}>{text}</div>
        {attr && <div className={s.pullQuoteAttr}>{attr}</div>}
      </div>
    </div>
  );
}
