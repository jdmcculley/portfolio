import s from '@/app/(portfolio)/case-study/case-study.module.css';

interface ExecQuoteProps {
  name: string;
  role: string;
  initials: string;
  text: string;
  source?: string;
  avatar?: string;
}

export function ExecQuote({ name, role, initials, text, source, avatar }: ExecQuoteProps) {
  return (
    <div className={s.execQuote}>
      <div className={s.execQuoteHeader}>
        <div className={s.execQuoteAvatar}>
          {avatar ? <img src={avatar} alt={name} /> : initials}
        </div>
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
