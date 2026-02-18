// SHA-256 hash of the portfolio password
// To change: echo -n "your-password" | shasum -a 256
export const AUTH_CONFIG = {
  passwordHash:
    '3c53083bf1a9d56e17eaa29362d5181f143a250d6212ab686567e12cded2eeb0', // "JD1234"
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
