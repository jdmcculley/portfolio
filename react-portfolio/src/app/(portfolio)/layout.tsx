import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";
import { BackToTop } from "@/components/ui/BackToTop";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgressBar />
      <BackgroundEffects />
      <NavBar />
      <main className="relative z-[2]" style={{ paddingTop: "var(--nav-height)" }}>
        <ProtectedRoute>{children}</ProtectedRoute>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
