'use client';

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';
import clsx from 'clsx';

interface MetricCardProps {
  value: string;
  label: string;
  animate?: boolean;
  className?: string;
}

export function MetricCard({ value, label, animate = true, className }: MetricCardProps) {
  const { ref, displayValue } = useAnimatedCounter(value, animate);

  return (
    <div
      ref={ref}
      className={clsx(
        'bg-surface-elevated border border-border-default rounded-xl py-8 px-6 text-center transition-all duration-300',
        'hover:border-border-strong hover:-translate-y-[3px]',
        className
      )}
    >
      <div className="font-mono text-[2rem] font-bold text-accent leading-[1.2] mb-2">
        {displayValue}
      </div>
      <div className="font-sans text-[0.75rem] text-text-soft tracking-[0.12em] uppercase">
        {label}
      </div>
    </div>
  );
}
