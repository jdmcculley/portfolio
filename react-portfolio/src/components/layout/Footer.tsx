import Link from 'next/link';
import s from './footer.module.css';

export function Footer() {
  return (
    <footer className="relative z-2 border-t border-border-default flex justify-center bg-bg-alt">
      <div
        className="w-full flex justify-center items-center gap-3"
        style={{ maxWidth: 'var(--max-width)', padding: '36px var(--container-pad)' }}
      >
        <Link href="/articles/design-led-ai" prefetch={false} className={s.footerLink}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path className={s.layerTop} d="M12 2L2 7l10 5 10-5-10-5z" />
            <path className={s.layerBot} d="M2 17l10 5 10-5" />
            <path className={s.layerMid} d="M2 12l10 5 10-5" />
          </svg>
          Powered by Design-Led AI
        </Link>
        <span className="text-[#8b90a8] text-[0.6rem]" aria-hidden="true">&middot;</span>
        <span className="font-mono text-[0.72rem] text-[#8b90a8] tracking-[0.1em]">
          &copy; 2026 JD McCulley
        </span>
      </div>
    </footer>
  );
}
