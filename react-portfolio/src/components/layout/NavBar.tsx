'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { num: '01', label: 'Position', href: '/#position' },
  { num: '02', label: 'Design-Led AI', href: '/#perspective' },
  { num: '03', label: 'Case Studies', href: '/#work' },
  { num: '04', label: 'Experience', href: '/#journey' },
  { num: '05', label: 'Contact', href: '/#contact' },
];

const LogoSvg = () => (
  <svg width="40" height="33" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.1902 33.625L0.625 17.125M10.1902 33.625H31.0598M10.1902 33.625L8.45083 19.7303M10.1902 33.625L28.4509 30.1513M0.625 17.125L10.1902 0.625M0.625 17.125L8.45083 19.7303M10.1902 0.625H31.0598M10.1902 0.625L27.5813 9.30916M10.1902 0.625L8.45083 19.7303M31.0598 0.625L40.625 17.125M31.0598 0.625L27.5813 9.30916M40.625 17.125L31.0598 33.625M40.625 17.125L27.5813 9.30916M40.625 17.125L28.4509 30.1513M31.0598 33.625L28.4509 30.1513M27.5813 9.30916L8.45083 19.7303M27.5813 9.30916L28.4509 30.1513M8.45083 19.7303L28.4509 30.1513" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
  </svg>
);

const ResumeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);

function smoothScrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const hash = href.split('#')[1];
  if (!hash) return;
  const target = document.getElementById(hash);
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  const isSubPage = !isHome;

  return (
    <nav
      className="fixed top-0 w-full z-[1000] flex justify-center backdrop-blur-[24px] border-b border-border-default"
      style={{ height: 'var(--nav-height)', background: 'var(--nav-bg)' }}
    >
      <div
        className="w-full flex justify-between items-center h-full"
        style={{ maxWidth: 'var(--max-width)', padding: '0 var(--container-pad)' }}
      >
        <Link
          href="/"
          className="font-mono font-bold text-[1.2rem] tracking-[1.5px] flex items-center gap-3.5 no-underline"
          style={{
            background: 'linear-gradient(90deg, var(--accent), var(--secondary), var(--accent-light), var(--accent))',
            backgroundSize: '300% 100%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'logoGradient 8s ease infinite',
          }}
        >
          <span className="inline-flex items-center leading-none text-text-primary">
            <LogoSvg />
          </span>
          JD McCULLEY
        </Link>

        <div className="flex items-center gap-8">
          {isHome && (
            <ul className="hidden sm:flex gap-8 list-none">
              {navLinks.map((link) => (
                <li key={link.num}>
                  <a
                    href={link.href}
                    onClick={(e) => smoothScrollTo(e, link.href)}
                    className="font-mono text-text-soft text-[0.82rem] font-medium tracking-[0.5px] transition-colors duration-300 flex items-center gap-2 no-underline hover:text-accent-light"
                  >
                    <span className="font-mono text-[0.68rem] text-accent opacity-50">{link.num}.</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {isSubPage && (
            <Link
              href="/"
              className="font-mono text-[0.85rem] text-text-soft tracking-[0.08em] transition-colors duration-300 flex items-center gap-2 no-underline hover:text-accent"
            >
              <span>&#8592;</span> Portfolio
            </Link>
          )}

          <Link
            href="/resume"
            className="font-mono text-[0.78rem] font-medium text-accent tracking-[0.5px] no-underline px-3.5 py-1.5 border border-accent/15 rounded-md transition-all duration-300 flex items-center gap-1.5 hover:text-accent-light hover:border-accent/35 hover:bg-accent/[0.04]"
          >
            <ResumeIcon /> Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}
