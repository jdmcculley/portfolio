import s from '@/app/(portfolio)/case-study/case-study.module.css';

interface ExecQuoteProps {
  name: string;
  role: string;
  initials: string;
  text: string;
  source?: string;
}

export function ExecQuote({ name, role, initials, text, source }: ExecQuoteProps) {
  return (
    <div className={s.execQuote}>
      <div className={s.execQuoteHeader}>
        <div className={s.execQuoteAvatar}>{initials}</div>
        <div>
          <div className={s.execQuoteName}>{name}</div>
          <div className={s.execQuoteRole}>{role}</div>
        </div>
      </div>
      <div className={s.execQuoteText}>{text}</div>
      {source && <div className={s.execQuoteSource}>{source}</div>}
    </div>
  );
}
