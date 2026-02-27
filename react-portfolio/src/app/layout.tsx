import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "JD McCulley — Product Design Leader",
  description:
    "Product design leader who bridges the full digital product lifecycle — using AI-augmented workflows and design systems to compress what used to take teams of 10 into what a team of 5 delivers.",
  icons: { icon: "/assets/brand/jd-poly-logo-gradient.svg" },
  metadataBase: new URL("https://jdmcculley.com"),
  openGraph: {
    type: "website",
    siteName: "JD McCulley",
    locale: "en_US",
    images: [
      {
        url: "/api/og/?page=home",
        width: 1200,
        height: 630,
        alt: "JD McCulley — Product Design Leader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <AuthProvider>{children}</AuthProvider>
        </ThemeProvider>
        <Script
          src="https://mcp.figma.com/mcp/html-to-design/capture.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
