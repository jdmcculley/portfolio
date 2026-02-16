'use client';

import { useEffect, useRef, useState } from 'react';

export function useAnimatedCounter(target: string, animate = true) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(animate ? '' : target);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!animate || hasAnimated.current) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.disconnect();

          const match = target.match(/^([\d.]+)(.*)$/);
          if (!match) {
            setDisplayValue(target);
            return;
          }

          const numericTarget = parseFloat(match[1]);
          const suffix = match[2];
          const duration = 1200;
          const startTime = performance.now();

          const step = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numericTarget * eased;

            if (numericTarget >= 10) {
              setDisplayValue(Math.round(current) + suffix);
            } else {
              setDisplayValue(current.toFixed(1) + suffix);
            }

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(target);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, animate]);

  return { ref, displayValue };
}
