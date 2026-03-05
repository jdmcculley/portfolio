import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Study: DG Rewards — JD McCulley',
  openGraph: { images: [{ url: '/api/og/?page=rewards', width: 1200, height: 630 }] },
};

export default function RewardsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
