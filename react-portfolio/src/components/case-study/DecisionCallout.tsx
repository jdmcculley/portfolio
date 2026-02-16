import s from '@/app/(portfolio)/case-study/case-study.module.css';
import { ReactNode } from 'react';

interface Decision {
  icon: ReactNode;
  title: string;
  text: string;
}

export function DecisionCallout({ decisions }: { decisions: Decision[] }) {
  return (
    <div className={s.decisions}>
      {decisions.map((d, i) => (
        <div key={i} className={s.decision}>
          <div className={s.decisionIcon}>{d.icon}</div>
          <div>
            <div className={s.decisionTitle}>{d.title}</div>
            <div className={s.decisionText}>{d.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
