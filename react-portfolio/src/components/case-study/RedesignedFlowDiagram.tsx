'use client';

/**
 * Stylized wireframe diagram showing the redesigned verification flow:
 * Verification Entry → Error + Recovery → Too Many Attempts → Customer Care
 *
 * Matches BrokenFlowDiagram aesthetic — portfolio dark theme, CSS variables,
 * miniature phone screens with flow arrows.
 */

const shared = {
  screen: {
    width: '100%',
    maxWidth: 220,
    minHeight: 440,
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 24,
    padding: '20px 16px',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    gap: 10,
    position: 'relative' as const,
    overflow: 'hidden' as const,
  },
  statusBar: {
    display: 'flex' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    fontSize: 9,
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    marginBottom: 4,
  },
  notch: {
    width: 48,
    height: 10,
    borderRadius: 8,
    background: 'var(--bg)',
    margin: '0 auto',
  },
  heading: {
    fontFamily: 'var(--font-heading)',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--text)',
    textAlign: 'center' as const,
  },
  subtext: {
    fontSize: 8.5,
    color: 'var(--text-muted)',
    textAlign: 'center' as const,
    lineHeight: 1.5,
  },
  navBar: {
    display: 'flex' as const,
    alignItems: 'center' as const,
    gap: 6,
    marginBottom: 4,
  },
  navBack: {
    fontSize: 12,
    color: 'var(--text-muted)',
  },
  navTitle: {
    fontSize: 10,
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    color: 'var(--text-soft)',
  },
  iconCircle: (color: string) => ({
    width: 32,
    height: 32,
    borderRadius: '50%',
    border: `1.5px solid ${color}`,
    display: 'flex' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  }),
  button: (variant: 'primary' | 'outline') => ({
    borderRadius: 10,
    padding: '10px 0',
    textAlign: 'center' as const,
    fontSize: 10,
    fontWeight: 600,
    fontFamily: 'var(--font-heading)',
    ...(variant === 'primary'
      ? { background: '#3366ff', color: '#fff', border: 'none' }
      : { background: 'transparent', border: '1px solid var(--border-strong)', color: 'var(--text-soft)' }),
  }),
  link: {
    textAlign: 'center' as const,
    fontSize: 8,
    color: '#3366ff',
  },
} as const;

function StatusBar() {
  return (
    <div style={shared.statusBar}>
      <span>9:41</span>
      <div style={shared.notch} />
      <span style={{ letterSpacing: 1 }}>&#9679;&#9679;&#9679;</span>
    </div>
  );
}

/* ── Screen 1: Verification Entry ── */
function ScreenVerificationEntry() {
  return (
    <div style={shared.screen}>
      <StatusBar />
      <div style={shared.navBar}>
        <span style={shared.navBack}>&larr;</span>
        <span style={shared.navTitle}>Enter Code</span>
      </div>
      {/* Icon */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2px 0' }}>
        <div style={shared.iconCircle('rgba(51, 102, 255, 0.5)')}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(51, 102, 255, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
      </div>
      <div style={shared.heading}>Enter verification code</div>
      <div style={shared.subtext}>Enter the 6-digit code sent to john.doe@example.com</div>
      {/* OTP boxes */}
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ width: 24, height: 30, borderRadius: 6, border: '1px solid var(--border-strong)', background: 'var(--bg)' }} />
        ))}
      </div>
      {/* Timer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, fontSize: 8, color: 'var(--text-muted)' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
        4:32 remaining
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={shared.button('primary')}>Verify</div>
        <div style={shared.link}>Didn&apos;t receive a code?</div>
      </div>
    </div>
  );
}

/* ── Screen 2: Error + Recovery ── */
function ScreenErrorRecovery() {
  return (
    <div style={shared.screen}>
      <StatusBar />
      <div style={shared.navBar}>
        <span style={shared.navBack}>&larr;</span>
        <span style={shared.navTitle}>Verify</span>
      </div>
      {/* Warning icon */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2px 0' }}>
        <div style={shared.iconCircle('rgba(255, 180, 0, 0.5)')}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 180, 0, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
      </div>
      <div style={shared.heading}>That code didn&apos;t work</div>
      <div style={shared.subtext}>The code you entered doesn&apos;t match what we sent to john.doe@example.com</div>
      {/* Error banner */}
      <div style={{ background: 'rgba(255, 60, 60, 0.06)', border: '1px solid rgba(255, 60, 60, 0.2)', borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 80, 80, 0.9)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <span style={{ fontSize: 8, color: 'rgba(255, 80, 80, 0.9)', lineHeight: 1.4 }}>Invalid code. You have 1 attempt remaining.</span>
      </div>
      {/* OTP boxes */}
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ width: 24, height: 30, borderRadius: 6, border: '1px solid rgba(255, 60, 60, 0.3)', background: 'var(--bg)' }} />
        ))}
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={shared.button('primary')}>Try Again</div>
        <div style={shared.link}>Contact Customer Care</div>
      </div>
    </div>
  );
}

/* ── Screen 3: Too Many Attempts ── */
function ScreenTooManyAttempts() {
  return (
    <div style={shared.screen}>
      <StatusBar />
      <div style={shared.navBar}>
        <span style={shared.navBack}>&larr;</span>
        <span style={shared.navTitle}>Verification</span>
      </div>
      {/* Lock icon */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2px 0' }}>
        <div style={shared.iconCircle('rgba(255, 80, 60, 0.5)')}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 80, 60, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
      </div>
      <div style={shared.heading}>Account Temporarily Locked</div>
      <div style={shared.subtext}>Too many failed verification attempts. For your security, this account has been temporarily locked.</div>
      {/* Timer banner */}
      <div style={{ background: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.2)', borderRadius: 8, padding: '9px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(34, 197, 94, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
        <span style={{ fontSize: 8.5, color: 'rgba(34, 197, 94, 0.9)', fontWeight: 500 }}>Try again in 30 minutes</span>
      </div>
      {/* Info note */}
      <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'flex-start', gap: 6 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span style={{ fontSize: 7.5, color: 'var(--text-muted)', lineHeight: 1.5 }}>If you believe this is an error, please contact customer support for assistance.</span>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={shared.button('outline')}>Customer Care</div>
      </div>
    </div>
  );
}

/* ── Screen 4: Customer Care ── */
function ScreenCustomerCare() {
  return (
    <div style={shared.screen}>
      <StatusBar />
      <div style={shared.navBar}>
        <span style={shared.navBack}>&larr;</span>
        <span style={shared.navTitle}>Customer Care</span>
      </div>
      {/* Headset icon */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2px 0' }}>
        <div style={shared.iconCircle('rgba(51, 102, 255, 0.5)')}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(51, 102, 255, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>
        </div>
      </div>
      <div style={shared.heading}>We&apos;re here to help</div>
      <div style={shared.subtext}>Our support team can assist you with account verification. Choose how you&apos;d like to reach us.</div>
      {/* Contact options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {[
          { icon: '📞', label: 'Call 1-800-555-0199' },
          { icon: '✉', label: 'Email support' },
          { icon: '💬', label: 'Live chat' },
        ].map((opt) => (
          <div key={opt.label} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            background: 'var(--bg)', border: '1px solid var(--border)',
            borderRadius: 8, padding: '8px 10px',
          }}>
            <span style={{ fontSize: 10, flexShrink: 0 }}>{opt.icon}</span>
            <span style={{ flex: 1, fontSize: 9, color: 'var(--text-soft)', fontWeight: 500 }}>{opt.label}</span>
            <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>&rsaquo;</span>
          </div>
        ))}
      </div>
      {/* Support hours */}
      <div style={{ background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'flex-start', gap: 6 }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
        </svg>
        <span style={{ fontSize: 7, color: 'var(--text-muted)', lineHeight: 1.5 }}>Support hours: Monday–Friday, 8 AM – 8 PM EST. For urgent account issues, call us directly.</span>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={shared.button('outline')}>Call Customer Care</div>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, flexShrink: 0, padding: '0 4px' }}>
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
        <line x1="0" y1="8" x2="24" y2="8" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 3" />
        <path d="M22 3 L30 8 L22 13" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export function RedesignedFlowDiagram() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Flow label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2,
          color: 'var(--accent)', textTransform: 'uppercase',
        }}>
          Redesigned Flow
        </div>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--accent), transparent)', opacity: 0.3 }} />
      </div>

      {/* Four screens with arrows */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 12, flexWrap: 'wrap',
      }}>
        <ScreenVerificationEntry />
        <FlowArrow />
        <ScreenErrorRecovery />
        <FlowArrow />
        <ScreenTooManyAttempts />
        <FlowArrow />
        <ScreenCustomerCare />
      </div>

      {/* Screen labels */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 48,
        flexWrap: 'wrap',
      }}>
        {['Verification Entry', 'Error + Recovery', 'Too Many Attempts', 'Customer Care'].map((label) => (
          <div key={label} style={{
            fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: 2,
            color: 'var(--text-muted)', textTransform: 'uppercase',
            textAlign: 'center', width: 220,
          }}>
            {label}
          </div>
        ))}
      </div>

      {/* Caption */}
      <div style={{
        textAlign: 'center', fontFamily: 'var(--font-mono)',
        fontSize: 10, letterSpacing: 1.5, color: 'var(--text-muted)',
        textTransform: 'uppercase',
      }}>
        Multi-path verification &middot; Error recovery &middot; Customer care fallback
      </div>
    </div>
  );
}
