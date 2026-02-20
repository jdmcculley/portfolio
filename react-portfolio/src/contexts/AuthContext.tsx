'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from 'react';
import { AUTH_CONFIG } from '@/lib/auth/config';
import { verifyPassword } from '@/lib/auth/crypto';

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  authenticate: (password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      // Check session first
      if (sessionStorage.getItem(AUTH_CONFIG.sessionKey) === 'true') {
        setIsAuthenticated(true);
        setIsLoading(false);
        return;
      }

      // Check for ?pw= URL parameter
      const params = new URLSearchParams(window.location.search);
      const pw = params.get('pw');
      if (pw) {
        const valid = await verifyPassword(pw, AUTH_CONFIG.passwordHash);
        if (valid) {
          sessionStorage.setItem(AUTH_CONFIG.sessionKey, 'true');
          setIsAuthenticated(true);
        }
        // Strip pw param from URL without reload
        params.delete('pw');
        const clean = params.toString();
        const newUrl = window.location.pathname + (clean ? `?${clean}` : '') + window.location.hash;
        window.history.replaceState({}, '', newUrl);
      }

      setIsLoading(false);
    };
    init();
  }, []);

  const authenticate = async (password: string) => {
    const valid = await verifyPassword(password, AUTH_CONFIG.passwordHash);
    if (valid) {
      sessionStorage.setItem(AUTH_CONFIG.sessionKey, 'true');
      setIsAuthenticated(true);
    }
    return valid;
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_CONFIG.sessionKey);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, isLoading, authenticate, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
