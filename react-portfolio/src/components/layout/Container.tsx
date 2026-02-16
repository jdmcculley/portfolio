import { type ReactNode } from 'react';
import clsx from 'clsx';

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx('mx-auto w-full relative z-2', className)}
      style={{ maxWidth: 'var(--max-width)', padding: '0 var(--container-pad)' }}
    >
      {children}
    </div>
  );
}
