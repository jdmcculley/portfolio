import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "JD McCulley — Product Design Leader",
  description:
    "Product design leader who bridges the full digital product lifecycle — using AI-augmented workflows and design systems to compress what used to take teams of 10 into what a team of 5 delivers.",
  icons: { icon: "/assets/brand/jd-poly-logo-gradient.svg" },
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
      </body>
    </html>
  );
}
