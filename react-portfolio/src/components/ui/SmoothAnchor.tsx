'use client';

import { type AnchorHTMLAttributes } from 'react';

export function SmoothAnchor({
  href,
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      onClick={(e) => {
        const hash = href?.split('#')[1];
        if (!hash) return;
        const target = document.getElementById(hash);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
