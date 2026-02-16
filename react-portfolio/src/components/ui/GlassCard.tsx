import clsx from 'clsx';
import { type ReactNode } from 'react';

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx('bg-glass-bg backdrop-blur-[24px] border border-glass-border rounded-xl', className)}>
      {children}
    </div>
  );
}
