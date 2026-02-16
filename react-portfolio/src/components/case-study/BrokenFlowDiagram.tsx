'use client';

/**
 * Stylized wireframe diagram showing the October broken flow:
 * Sign In → Phone Verify → Dead End (Account Locked)
 *
 * Themed to portfolio dark aesthetic using CSS variables.
 * Replaces placeholder in RBA case study Section 01.
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
    gap: 12,
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
    fontSize: 9,
    color: 'var(--text-muted)',
    textAlign: 'center' as const,
    lineHeight: 1.5,
  },
  inputBlock: {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    padding: '8px 10px',
    fontSize: 9,
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
  },
  label: {
    fontSize: 8,
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-soft)',
    letterSpacing: 0.5,
    marginBottom: -6,
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

function ScreenSignIn() {
  return (
    <div style={shared.screen}>
      <StatusBar />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      </div>
      <div style={shared.heading}>Sign in</div>
      <div style={shared.subtext}>Enter your credentials to access your account.</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={shared.label}>Email</div>
        <div style={shared.inputBlock}>user@company.com</div>
        <div style={shared.label}>Password</div>
        <div style={shared.inputBlock}>&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;</div>
      </div>
      <div style={{ marginTop: 'auto', paddingTop: 8 }}>
        <div style={{ background: 'var(--secondary)', borderRadius: 10, padding: '10px 0', textAlign: 'center', fontSize: 11, fontWeight: 600, color: '#fff', fontFamily: 'var(--font-heading)' }}>
          Sign In
        </div>
      </div>
    </div>
  );
}

function ScreenPhoneVerify() {
  return (
    <div style={shared.screen}>
      <StatusBar />
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>&larr;</span>
        <span style={{ fontSize: 10, fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--text-soft)' }}>Verify Identity</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2px 0' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        </div>
      </div>
      <div style={shared.heading}>Check your phone</div>
      <div style={shared.subtext}>We sent a 6-digit code to (&#8226;&#8226;&#8226;) &#8226;&#8226;&#8226;-4829.</div>
      {/* OTP boxes */}
      <div style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{ width: 24, height: 30, borderRadius: 6, border: '1px solid var(--border-strong)', background: 'var(--bg)' }} />
        ))}
      </div>
      <div style={{ fontSize: 8, textAlign: 'center', color: 'var(--text-muted)' }}>
        Didn&apos;t receive a code? <span style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>Resend</span>
      </div>
      {/* Warning banner */}
      <div style={{ background: 'rgba(255, 180, 0, 0.08)', border: '1px solid rgba(255, 180, 0, 0.25)', borderRadius: 8, padding: '8px 10px', display: 'flex', alignItems: 'flex-start', gap: 6 }}>
        <span style={{ fontSize: 12, lineHeight: 1 }}>&#9888;</span>
        <span style={{ fontSize: 8, color: 'rgba(255, 200, 60, 0.9)', lineHeight: 1.5 }}>Phone is your only verification method.</span>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ background: 'var(--secondary)', borderRadius: 10, padding: '10px 0', textAlign: 'center', fontSize: 11, fontWeight: 600, color: '#fff', fontFamily: 'var(--font-heading)', opacity: 0.5 }}>
          Verify
        </div>
        <div style={{ textAlign: 'center', fontSize: 9, color: 'var(--text-muted)' }}>
          I can&apos;t access my phone
        </div>
      </div>
    </div>
  );
}

function ScreenDeadEnd() {
  return (
    <div style={{ ...shared.screen, borderColor: 'rgba(255, 60, 60, 0.25)' }}>
      <StatusBar />
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>&larr;</span>
        <span style={{ fontSize: 10, fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'var(--text-soft)' }}>Account Locked</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2px 0' }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid rgba(255, 60, 60, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 60, 60, 0.8)" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          </svg>
        </div>
      </div>
      <div style={{ ...shared.heading, color: 'rgba(255, 80, 80, 0.9)' }}>Unable to verify</div>
      <div style={shared.subtext}>You have no other way to verify your identity. Without access to your phone, you cannot sign in.</div>
      {/* Red error box */}
      <div style={{ background: 'rgba(255, 60, 60, 0.06)', border: '1px solid rgba(255, 60, 60, 0.2)', borderRadius: 8, padding: '10px 12px' }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: 'rgba(255, 80, 80, 0.9)', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ fontSize: 10 }}>&#9632;</span> Phone is your only method
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {['No authenticator app configured', 'No backup codes saved', 'No security key registered'].map((t) => (
            <div key={t} style={{ fontSize: 8, color: 'rgba(255, 80, 80, 0.7)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ fontSize: 8 }}>&times;</span> {t}
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ border: '1px solid var(--border)', borderRadius: 10, padding: '10px 0', textAlign: 'center', fontSize: 10, fontWeight: 600, color: 'var(--text-muted)', fontFamily: 'var(--font-heading)' }}>
          Contact Support
        </div>
        <div style={{ textAlign: 'center', fontSize: 7, color: 'var(--text-muted)', lineHeight: 1.4 }}>
          Account recovery may take 3–5 business days and requires identity verification.
        </div>
      </div>
      {/* DEAD END stamp */}
      <div style={{
        position: 'absolute', bottom: 50, right: -12,
        transform: 'rotate(-12deg)',
        fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 700,
        letterSpacing: 3, textTransform: 'uppercase',
        color: 'rgba(255, 60, 60, 0.35)',
        border: '2px solid rgba(255, 60, 60, 0.2)',
        borderRadius: 4, padding: '4px 12px',
        pointerEvents: 'none',
      }}>
        Dead End
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

export function BrokenFlowDiagram() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Flow label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: 2,
          color: 'var(--accent)', textTransform: 'uppercase',
        }}>
          October Flow
        </div>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--accent), transparent)', opacity: 0.3 }} />
      </div>

      {/* Three screens with arrows */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 12, flexWrap: 'wrap',
      }}>
        <ScreenSignIn />
        <FlowArrow />
        <ScreenPhoneVerify />
        <FlowArrow />
        <ScreenDeadEnd />
      </div>

      {/* Caption */}
      <div style={{
        textAlign: 'center', fontFamily: 'var(--font-mono)',
        fontSize: 10, letterSpacing: 1.5, color: 'var(--text-muted)',
        textTransform: 'uppercase',
      }}>
        Phone-only path &middot; No fallback &middot; 25,000 users locked out
      </div>
    </div>
  );
}
