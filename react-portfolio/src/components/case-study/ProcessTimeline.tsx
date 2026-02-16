import s from '@/app/(portfolio)/case-study/case-study.module.css';

interface Step {
  num: string;
  title: string;
  desc: string;
}

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <div className={s.processTimeline}>
      {steps.map((step, i) => (
        <div key={i} className={s.processStep}>
          <div className={s.processStepNum}>{step.num}</div>
          <div className={s.processStepTitle}>{step.title}</div>
          <div className={s.processStepDesc}>{step.desc}</div>
        </div>
      ))}
    </div>
  );
}
