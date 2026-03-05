"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Filter {
  id: string;
  label: string;
  count?: number;
}

interface FilterBarProps {
  filters: Filter[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
  className?: string;
}

export function FilterBar({ filters, activeFilter, onFilterChange, className }: FilterBarProps) {
  return (
    <div className={cn("flex items-center gap-1.5 overflow-x-auto scrollbar-hide", className)}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          className={cn(
            "relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
            activeFilter === filter.id
              ? "text-[var(--bg)]"
              : "text-[var(--text-muted)] hover:text-[var(--text-soft)] bg-[var(--surface)] border border-[var(--border)]"
          )}
        >
          {activeFilter === filter.id && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 bg-[var(--accent)] rounded-lg"
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            {filter.label}
            {filter.count !== undefined && (
              <span className={cn(
                "text-xs tabular-nums",
                activeFilter === filter.id
                  ? "text-[var(--bg)]/60"
                  : "text-[var(--text-muted)]"
              )}>
                {filter.count}
              </span>
            )}
          </span>
        </button>
      ))}
    </div>
  );
}
