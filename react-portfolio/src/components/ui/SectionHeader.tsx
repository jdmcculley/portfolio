import clsx from 'clsx';

interface SectionHeaderProps {
  label: string;
  heading: string;
  sub?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ label, heading, sub, centered, className }: SectionHeaderProps) {
  return (
    <div className={clsx(centered && 'text-center', className)}>
      <p className="font-sans text-[0.68rem] tracking-[0.22em] uppercase text-accent font-semibold mb-4">
        {label}
      </p>
      <h2 className="font-heading text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold leading-[1.15] tracking-[-0.02em] mb-3.5 text-text-primary">
        {heading}
      </h2>
      {sub && (
        <p className={clsx(
          'text-base text-text-primary opacity-80 max-w-[530px] leading-[1.7] font-light mb-14',
          centered && 'mx-auto'
        )}>
          {sub}
        </p>
      )}
    </div>
  );
}
