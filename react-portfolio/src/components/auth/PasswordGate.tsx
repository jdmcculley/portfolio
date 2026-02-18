'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Mail } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { useAuth } from '@/contexts/AuthContext';

export function PasswordGate() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const { authenticate } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);

    const ok = await authenticate(password);
    if (!ok) {
      setError('That\u2019s not it \u2014 reach out if you need the password.');
      setPassword('');
    }
    setSubmitting(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex items-center justify-center px-6"
    >
      <GlassCard className="max-w-lg w-full p-10 sm:p-12">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent-glow border border-accent/20 flex items-center justify-center"
          >
            <Lock className="w-10 h-10 text-accent" />
          </motion.div>

          <h2 className="font-heading text-3xl font-semibold text-text-primary mb-4">
            One Quick Step
          </h2>
          <p className="text-text-soft leading-relaxed mb-2">
            I know&nbsp;&mdash; nobody loves a password prompt. But the work
            in here involves real clients who trust me with their strategies,
            so I keep things under wraps.
          </p>
          <p className="text-text-muted text-sm">
            Thanks for understanding.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="portfolio-password"
              className="block text-sm font-medium text-text-soft mb-2"
            >
              Password
            </label>
            <input
              id="portfolio-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              autoFocus
              disabled={submitting}
              className="w-full px-4 py-3 bg-surface border border-border-default rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-sm text-secondary bg-secondary-dim border border-secondary/20 rounded-lg p-3"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={submitting || !password}
            className="w-full py-3 px-6 bg-gradient-to-r from-accent to-secondary text-bg font-semibold rounded-lg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {submitting ? 'Verifying\u2026' : 'Let Me In'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-border-default text-center">
          <p className="text-sm text-text-muted mb-3">
            Need the password?
          </p>
          <a
            href="mailto:jdmcculley@me.com?subject=Portfolio Access Request"
            className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors"
          >
            <Mail className="w-4 h-4" />
            Ask JD for access
          </a>
        </div>
      </GlassCard>
    </motion.div>
  );
}
