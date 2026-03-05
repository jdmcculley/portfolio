"use client";

import { Flow } from "@/types/showcase";
import { cn } from "@/lib/utils";

interface FlowCardProps {
  flow: Flow;
  index: number;
  onClick: () => void;
  viewMode?: "grid" | "list";
}

export function FlowCard({ flow, index, onClick, viewMode = "grid" }: FlowCardProps) {
  if (viewMode === "list") {
    return (
      <div
        onClick={onClick}
        className="cursor-pointer group rounded-2xl overflow-hidden bg-[var(--glass-bg)] border border-[var(--glass-border)] transition-all duration-300 hover:border-[var(--border-strong)] hover:-translate-y-0.5 p-4"
      >
        <div className="flex items-center gap-6">
          <div className="relative w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-[var(--surface)]">
            {flow.thumbnail ? (
              <img src={flow.thumbnail} alt={flow.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[var(--surface-elevated)]" />
            )}
            <div className="absolute top-2 left-2">
              <span className="text-[var(--text)] text-xs font-mono font-bold bg-[var(--bg)]/80 px-1.5 py-0.5 rounded">
                {flow.screenCount}
              </span>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors mb-1">
              {flow.title}
            </h3>
            <p className="text-[var(--text-muted)] text-sm">
              {flow.category} • {flow.screenCount} screens
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="cursor-pointer group rounded-2xl overflow-hidden bg-[var(--glass-bg)] border border-[var(--glass-border)] transition-all duration-300 hover:border-[var(--border-strong)] hover:-translate-y-1 h-full flex flex-col"
    >
      {/* Device preview area */}
      <div className="relative flex-1 min-h-0 bg-[var(--surface)] overflow-hidden flex items-end justify-center pt-8 pb-0">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[var(--accent)]/0 group-hover:bg-[var(--accent)]/10 transition-colors duration-500 flex items-center justify-center z-[1]">
          <div className="w-16 h-16 rounded-full bg-[var(--accent)]/20 flex items-center justify-center border border-[var(--accent)]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-6 h-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>

        {/* Phone frame with thumbnail — offset so bottom is clipped */}
        <div className="relative w-[75%] mb-[-40px] transition-transform duration-500 group-hover:-translate-y-2">
          <div className="bg-[var(--surface-elevated)] rounded-[1.5rem] p-1 shadow-2xl border border-[var(--border)]">
            {/* Screen */}
            <div className="w-full rounded-[1.25rem] overflow-hidden bg-[var(--bg)]">
              {flow.thumbnail ? (
                <img src={flow.thumbnail} alt={flow.title} className="w-full aspect-[9/19] object-cover object-top" />
              ) : (
                <div className="w-full aspect-[9/19] bg-[var(--surface-elevated)]" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex items-baseline justify-between gap-4">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
          {flow.title}
        </h3>
        <span className="text-[var(--text-muted)] text-xs font-mono shrink-0">
          {flow.screenCount} screens
        </span>
      </div>
    </div>
  );
}
