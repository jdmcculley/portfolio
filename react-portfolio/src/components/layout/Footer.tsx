export function Footer() {
  return (
    <footer className="relative z-2 border-t border-border-default flex justify-center bg-bg-alt">
      <div
        className="w-full flex justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:text-center"
        style={{ maxWidth: 'var(--max-width)', padding: '36px var(--container-pad)' }}
      >
        <span className="font-mono font-bold text-[0.82rem] text-accent tracking-[1px]">
          Stay Humble, Stay Curious.
        </span>
        <div className="text-right max-sm:text-center">
          <div className="font-heading text-[0.78rem] text-text-muted italic leading-relaxed mb-1">
            &ldquo;For we are his workmanship, created for good works.&rdquo;
          </div>
          <div className="text-[0.65rem] text-text-muted tracking-[0.1em]">
            Ephesians 2:10 &middot; &copy; 2026 JD McCulley
          </div>
        </div>
      </div>
    </footer>
  );
}
