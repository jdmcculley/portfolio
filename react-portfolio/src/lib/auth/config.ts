// SHA-256 hash of the portfolio password
// To change: echo -n "your-password" | shasum -a 256
export const AUTH_CONFIG = {
  passwordHash:
    '4097889236a2af26c293033feb964c4cf118c0224e0d063fec0a89e9d0569ef2', // "placeholder"
  sessionKey: 'jd_portfolio_auth',
  protectedRoutes: [
    '/case-study',
    '/articles/design-process-timeline',
    '/articles/job-search-strategy',
    '/articles/interview-prep',
    '/quote-gallery',
    '/design-system-preview',
  ],
} as const;
