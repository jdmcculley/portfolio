'use client';

import { useTheme } from 'next-themes';
import { useSyncExternalStore } from 'react';

const themes = [
  { value: 'dark', label: 'Dark' },
  { value: 'light', label: 'Light' },
  { value: 'tech-dark', label: 'Tech' },
] as const;

const emptySubscribe = () => () => {};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  if (!mounted) {
    return <div className="h-8 w-[156px]" />;
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border-default bg-glass-bg p-1 backdrop-blur-sm">
      {themes.map((t) => (
        <button
          key={t.value}
          onClick={() => setTheme(t.value)}
          className={`rounded-md px-3 py-1 font-mono text-[0.68rem] font-medium tracking-wider uppercase transition-all duration-200 ${
            theme === t.value
              ? 'bg-accent/15 text-accent'
              : 'text-text-muted hover:text-text-soft'
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
