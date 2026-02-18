'use client';

import { type ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { AUTH_CONFIG } from '@/lib/auth/config';
import { PasswordGate } from './PasswordGate';

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const pathname = usePathname();

  const isPublic = AUTH_CONFIG.publicRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isProtected =
    !isPublic &&
    AUTH_CONFIG.protectedRoutes.some((route) => pathname.startsWith(route));

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-text-muted text-sm">Loading&hellip;</div>
      </div>
    );
  }

  if (isProtected && !isAuthenticated) {
    return <PasswordGate />;
  }

  return <>{children}</>;
}
