'use client';

import { useEffect } from 'react';
import { AUTH_CONFIG } from '@/lib/auth/config';

const COOKIE_MAX_AGE = 30 * 24 * 60 * 60; // 30 days

export default function UxAuthPage() {
  useEffect(() => {
    document.cookie = `${AUTH_CONFIG.sessionKey}=true; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;
    window.location.replace('/');
  }, []);

  return null;
}
