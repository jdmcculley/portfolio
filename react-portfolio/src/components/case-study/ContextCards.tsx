import s from '@/app/(portfolio)/case-study/case-study.module.css';
import clsx from 'clsx';

interface ContextCardData {
  type: 'before' | 'after';
  title: string;
  text: string;
}

export function ContextCards({ cards }: { cards: ContextCardData[] }) {
  return (
    <div className={s.contextCards}>
      {cards.map((c, i) => (
        <div key={i} className={clsx(s.contextCard, c.type === 'after' && s.contextCardAfter)}>
          <div className={clsx(
            s.contextCardLabel,
            c.type === 'before' ? s.contextCardLabelBefore : s.contextCardLabelAfter
          )}>
            {c.type === 'before' ? 'Before' : 'After'}
          </div>
          <div className={s.contextCardTitle}>{c.title}</div>
          <div className={s.contextCardText}>{c.text}</div>
        </div>
      ))}
    </div>
  );
}
