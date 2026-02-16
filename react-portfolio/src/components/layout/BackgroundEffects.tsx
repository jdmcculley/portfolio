'use client';

export function BackgroundEffects() {
  return (
    <>
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          animation: 'gridPulse 8s ease-in-out infinite',
        }}
      />
      <div
        className="fixed rounded-full blur-[140px] pointer-events-none z-0"
        style={{
          width: 650, height: 650,
          background: 'radial-gradient(circle, var(--accent), transparent 70%)',
          top: 'var(--orb-a-top)', left: 'var(--orb-a-left)',
          opacity: 'var(--orb-a-opacity)',
          animation: 'orbFloat1 20s ease-in-out infinite',
        }}
      />
      <div
        className="fixed rounded-full blur-[140px] pointer-events-none z-0"
        style={{
          width: 400, height: 400,
          background: 'radial-gradient(circle, var(--secondary), transparent 70%)',
          bottom: -120, right: -120,
          opacity: 'var(--orb-b-opacity)',
          animation: 'orbFloat2 25s ease-in-out infinite',
        }}
      />
      <div
        className="fixed rounded-full blur-[140px] pointer-events-none z-0"
        style={{
          width: 300, height: 300,
          background: 'radial-gradient(circle, var(--orb-c-color), transparent 70%)',
          top: '40%', right: '10%',
          opacity: 'var(--orb-c-opacity)',
          animation: 'orbFloat3 18s ease-in-out infinite',
        }}
      />
    </>
  );
}
