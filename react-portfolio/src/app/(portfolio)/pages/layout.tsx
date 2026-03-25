import { BackgroundEffects } from "@/components/layout/BackgroundEffects";
import Script from "next/script";

export default function PagesLayout({
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
