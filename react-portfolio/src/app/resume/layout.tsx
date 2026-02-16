import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume — JD McCulley',
  description: 'Product design executive with 25+ years leading UX organizations in Fortune 500 retail, B2B cybersecurity, and startup-to-enterprise environments.',
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
