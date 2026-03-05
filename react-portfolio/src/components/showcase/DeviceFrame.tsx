"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DeviceFrameProps {
  children: React.ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  showNotch?: boolean;
  showStatusBar?: boolean;
  animated?: boolean;
}

const sizes = {
  small: { width: 200, height: 400 },
  medium: { width: 322, height: 656 },
  large: { width: 340, height: 700 },
};

export function DeviceFrame({
  children,
  className,
  size = "medium",
  showNotch = true,
  showStatusBar = true,
  animated = false
}: DeviceFrameProps) {
  const dimensions = sizes[size];

  const frameContent = (
    <div
      className={cn(
        "relative bg-[var(--surface-elevated)] rounded-[3rem] p-2 shadow-2xl border border-[var(--border)]",
        className
      )}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      {/* Notch */}
      {showNotch && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[var(--bg)] rounded-full z-20" />
      )}

      {/* Screen */}
      <div
        className="w-full h-full bg-[var(--bg)] rounded-[2.5rem] overflow-hidden relative"
      >
        {/* Status Bar */}
        {showStatusBar && (
          <div className="absolute top-0 left-0 right-0 h-12 flex items-center justify-between px-6 pt-2 z-10">
            <span className="text-[var(--text)] text-xs font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-[var(--text)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l11 11c.39.39 1.02.39 1.41 0l11-11c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z"/>
              </svg>
              <svg className="w-4 h-4 text-[var(--text)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/>
              </svg>
            </div>
          </div>
        )}

        {/* Content */}
        <div className={cn("relative w-full h-full", showStatusBar && "pt-12")}>
          {children}
        </div>
      </div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {frameContent}
      </motion.div>
    );
  }

  return frameContent;
}
