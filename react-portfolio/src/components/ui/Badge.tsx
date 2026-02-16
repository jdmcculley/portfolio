import clsx from 'clsx';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'page' | 'ai' | 'tag' | 'tag-ai' | 'tag-accent';
  className?: string;
}

export function Badge({ children, variant = 'tag', className }: BadgeProps) {
  const base = {
    page: 'inline-flex items-center gap-2 px-[18px] py-2 rounded-full bg-glass-bg border border-accent-dim font-mono text-[0.72rem] font-medium text-accent tracking-[1.5px] uppercase',
    ai: 'inline-flex items-center gap-1.5 px-3 py-1 rounded font-mono text-[0.58rem] tracking-[1px] uppercase bg-secondary-dim border border-secondary/25 text-secondary',
    tag: 'font-mono text-[0.55rem] px-2 py-[3px] rounded-[3px] tracking-[0.5px] uppercase bg-white/[0.03] border border-white/[0.06] text-text-muted',
    'tag-ai': 'font-mono text-[0.55rem] px-2 py-[3px] rounded-[3px] tracking-[0.5px] uppercase bg-secondary-dim border border-secondary/25 text-secondary',
    'tag-accent': 'font-mono text-[0.55rem] px-2 py-[3px] rounded-[3px] tracking-[0.5px] uppercase bg-accent-glow border border-accent/15 text-accent',
  };

  return <span className={clsx(base[variant], className)}>{children}</span>;
}

export function DotBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <Badge variant="page" className={className}>
      <span
        className="w-[7px] h-[7px] rounded-full bg-accent shrink-0"
        style={{
          boxShadow: '0 0 6px var(--accent), 0 0 14px var(--accent-glow)',
          animation: 'dotPulse 2.5s ease-in-out infinite',
        }}
      />
      {children}
    </Badge>
  );
}
