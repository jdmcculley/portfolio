"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "tag" | "ai" | "page" | "tag-ai" | "tag-accent";
  className?: string;
}

const variants = {
  tag: "bg-[var(--surface)] text-[var(--text-soft)] border-[var(--border)]",
  ai: "bg-[var(--secondary-dim)] text-[var(--secondary-light)] border-[var(--secondary)]/20",
  page: "bg-[var(--accent-glow)] text-[var(--accent)] border-[var(--accent)]/20",
  "tag-ai": "bg-[var(--secondary-dim)] text-[var(--secondary-light)]",
  "tag-accent": "bg-[var(--accent-glow)] text-[var(--accent)]",
};

export function Badge({ children, variant = "tag", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[0.68rem] font-mono uppercase tracking-[0.1em] border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
