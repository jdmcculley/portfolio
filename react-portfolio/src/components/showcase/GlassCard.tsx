"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-[var(--glass-bg)] backdrop-blur-[24px]",
        "border border-[var(--glass-border)]",
        hover && "transition-all duration-500 hover:border-[var(--border-strong)] hover:-translate-y-1 hover:shadow-[0_8px_32px_var(--accent-glow)]",
        className
      )}
    >
      {children}
    </div>
  );
}
