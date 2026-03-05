"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flow } from "@/types/showcase";
import { Badge } from "./Badge";
import { DeviceFrame } from "./DeviceFrame";
import { cn } from "@/lib/utils";

interface FlowModalProps {
  flow: Flow | null;
  isOpen: boolean;
  onClose: () => void;
}

interface Hotspot {
  id: string;
  x: number;
  y: number;
  targetScreen: number;
  label: string;
}

const generateHotspots = (screenCount: number): Hotspot[] => {
  const hotspots: Hotspot[] = [];
  for (let i = 0; i < screenCount - 1; i++) {
    hotspots.push({
      id: `hotspot-${i}`,
      x: 50,
      y: 75 + (i * 5) % 15,
      targetScreen: i + 1,
      label: "Continue",
    });
  }
  return hotspots;
};

export function FlowModal({ flow, isOpen, onClose }: FlowModalProps) {
  const [activeTab, setActiveTab] = useState<"screens" | "prototype">("screens");
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHotspots, setShowHotspots] = useState(true);
  const [direction, setDirection] = useState(1);

  const hotspots = flow ? generateHotspots(flow.screens.length) : [];

  useEffect(() => {
    if (isOpen) {
      setActiveTab("screens");
      setSelectedScreen(0);
      setIsPlaying(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isPlaying || !flow) return;

    const interval = setInterval(() => {
      setSelectedScreen((prev) => {
        if (prev >= flow.screens.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isPlaying, flow]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (!flow) return;

    if (e.key === "ArrowRight") {
      setDirection(1);
      setSelectedScreen((prev) => Math.min(prev + 1, flow.screens.length - 1));
    } else if (e.key === "ArrowLeft") {
      setDirection(-1);
      setSelectedScreen((prev) => Math.max(prev - 1, 0));
    } else if (e.key === " ") {
      e.preventDefault();
      setIsPlaying((prev) => !prev);
    }
  }, [flow]);

  const handleScreenChange = (index: number) => {
    setDirection(index > selectedScreen ? 1 : -1);
    setSelectedScreen(index);
  };

  const handleHotspotClick = (targetScreen: number) => {
    setDirection(1);
    setSelectedScreen(targetScreen);
  };

  if (!flow) return null;

  const currentScreen = flow.screens[selectedScreen];
  const currentHotspots = hotspots.filter((_, i) => i === selectedScreen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed left-0 right-0 bottom-0 z-[999] flex items-center justify-center"
          style={{ top: 'var(--nav-height)' }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[var(--bg)]/95 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[calc(100vw-2rem)] h-[calc(100vh-var(--nav-height)-2rem)] bg-[var(--surface)] rounded-3xl overflow-hidden border border-[var(--border)] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-[var(--surface)]">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-[var(--text)]">
                      {flow.title}
                    </h2>
                    <p className="text-[var(--text-muted)] text-sm font-mono text-[0.72rem] uppercase tracking-wider">
                      {flow.category} • {flow.screenCount} screens
                    </p>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 bg-[var(--bg)] rounded-full p-1 border border-[var(--border)]">
                <button
                  onClick={() => {
                    setActiveTab("screens");
                    setIsPlaying(false);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                    activeTab === "screens"
                      ? "bg-[var(--accent)] text-[var(--bg)]"
                      : "text-[var(--text-soft)] hover:text-[var(--text)]"
                  )}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Screens
                </button>
                <button
                  onClick={() => setActiveTab("prototype")}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                    activeTab === "prototype"
                      ? "bg-[var(--accent)] text-[var(--bg)]"
                      : "text-[var(--text-soft)] hover:text-[var(--text)]"
                  )}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Prototype
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {activeTab === "prototype" && (
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                      isPlaying
                        ? "bg-[var(--accent)] text-[var(--bg)]"
                        : "bg-[var(--bg)] border border-[var(--border)] text-[var(--text-soft)] hover:text-[var(--text)]"
                    )}
                    title={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    )}
                  </button>
                )}

                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-[var(--text-soft)] hover:text-[var(--text)] hover:border-[var(--border-strong)] transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden">
              <div className="h-full flex gap-6 p-6">
                    {/* Main Screen View */}
                    <div className="flex-1 flex items-center justify-center bg-[var(--bg)] rounded-2xl border border-[var(--border)] relative overflow-hidden">
                      {/* Screen counter */}
                      <div className="absolute top-4 left-4 z-10">
                        <Badge variant="tag">
                          {selectedScreen + 1} / {flow.screens.length}
                        </Badge>
                      </div>

                      {/* Navigation arrows */}
                      <button
                        onClick={() => handleScreenChange(Math.max(0, selectedScreen - 1))}
                        disabled={selectedScreen === 0}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--accent)] transition-all duration-300 z-10"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>

                      <button
                        onClick={() => handleScreenChange(Math.min(flow.screens.length - 1, selectedScreen + 1))}
                        disabled={selectedScreen === flow.screens.length - 1}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text)] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--accent)] transition-all duration-300 z-10"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>

                      {/* Phone Frame with Screen */}
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                          key={selectedScreen}
                          initial={{ opacity: 0, x: direction * 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: direction * -50 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="relative"
                        >
                          <DeviceFrame size="medium" showNotch showStatusBar={false}>
                            {currentScreen?.src ? (
                              <img
                                src={currentScreen.src}
                                alt={currentScreen.alt}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-[var(--surface-elevated)] flex items-center justify-center text-[var(--text-muted)] text-sm">
                                {currentScreen?.alt || "No image"}
                              </div>
                            )}

                            {/* Hotspots overlay for prototype mode */}
                            {activeTab === "prototype" && showHotspots && (
                              <div className="absolute inset-0 pt-12">
                                {currentHotspots.map((hotspot) => (
                                  <motion.button
                                    key={hotspot.id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute group"
                                    style={{
                                      left: `${hotspot.x}%`,
                                      top: `${hotspot.y}%`,
                                      transform: 'translate(-50%, -50%)',
                                    }}
                                    onClick={() => handleHotspotClick(hotspot.targetScreen)}
                                  >
                                    <div className="relative">
                                      <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-30" />
                                      <span className="relative block w-8 h-8 rounded-full bg-[var(--accent)]/20 border-2 border-[var(--accent)] flex items-center justify-center group-hover:bg-[var(--accent)]/40 transition-colors">
                                        <svg className="w-4 h-4 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                      </span>
                                      <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-[var(--surface)] text-[var(--text)] text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                        {hotspot.label}
                                      </span>
                                    </div>
                                  </motion.button>
                                ))}
                              </div>
                            )}
                          </DeviceFrame>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="w-64 flex flex-col gap-3 overflow-y-auto pr-2 scrollbar-hide">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[var(--text-muted)] font-mono text-[0.68rem] uppercase tracking-wider">
                          All Screens
                        </p>
                        {activeTab === "prototype" && (
                          <button
                            onClick={() => setShowHotspots(!showHotspots)}
                            className={cn(
                              "text-[0.68rem] font-mono uppercase tracking-wider px-2 py-1 rounded transition-colors",
                              showHotspots
                                ? "bg-[var(--accent)]/20 text-[var(--accent)]"
                                : "text-[var(--text-muted)] hover:text-[var(--text)]"
                            )}
                          >
                            Hotspots
                          </button>
                        )}
                      </div>

                      <div className="space-y-3">
                        {flow.screens.map((screen, idx) => (
                          <button
                            key={screen.id}
                            onClick={() => handleScreenChange(idx)}
                            className={cn(
                              "relative aspect-[9/19] rounded-xl overflow-hidden border-2 transition-all duration-300 w-full",
                              selectedScreen === idx
                                ? "border-[var(--accent)] shadow-[0_0_20px_var(--accent-glow)]"
                                : "border-[var(--border)] hover:border-[var(--border-strong)]"
                            )}
                          >
                            {screen.src ? (
                              <img src={screen.src} alt={screen.alt} className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full bg-[var(--surface-elevated)]" />
                            )}

                            {selectedScreen === idx && (
                              <div className="absolute inset-0 bg-[var(--accent)]/10" />
                            )}

                            <div className="absolute bottom-2 left-2">
                              <span className="text-[var(--text)] text-xs font-mono font-bold bg-[var(--bg)]/80 px-2 py-0.5 rounded">
                                {idx + 1}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

            {/* Footer with keyboard hints */}
            <div className="px-6 py-3 border-t border-[var(--border)] bg-[var(--surface)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-[var(--text-muted)] text-xs font-mono">
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-[var(--bg)] rounded border border-[var(--border)]">←</kbd>
                    <kbd className="px-2 py-1 bg-[var(--bg)] rounded border border-[var(--border)]">→</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-[var(--bg)] rounded border border-[var(--border)]">Space</kbd>
                    Play/Pause
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-[var(--bg)] rounded border border-[var(--border)]">ESC</kbd>
                    Close
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[var(--text-muted)] text-xs font-mono">
                    {Math.round(((selectedScreen + 1) / flow.screens.length) * 100)}%
                  </span>
                  <div className="w-32 h-1 bg-[var(--bg)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[var(--accent)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${((selectedScreen + 1) / flow.screens.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
