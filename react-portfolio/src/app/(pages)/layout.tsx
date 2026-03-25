import type { Metadata } from "next";
import Script from "next/script";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function StandaloneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
      <BackgroundEffects />
      <main className="relative z-[2]">{children}</main>
    </>
  );
}
