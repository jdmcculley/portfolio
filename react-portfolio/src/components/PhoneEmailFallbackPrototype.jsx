'use client';

import React, { useState, useRef, useEffect } from 'react';

/* ── Load Montserrat from Google Fonts ── */
if (typeof document !== 'undefined' && !document.querySelector('link[href*="Montserrat"]')) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap';
  document.head.appendChild(link);
}

/* ── Inline SVG Icon Components (replaces lucide-react) ── */
const Icon = ({ children, size = 24, color = 'currentColor', strokeWidth = 2, style, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} className={className}>
    {children}
  </svg>
);

const Phone = (p) => <Icon {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></Icon>;
const Mail = (p) => <Icon {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></Icon>;
const Shield = (p) => <Icon {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></Icon>;
const Headphones = (p) => <Icon {...p}><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" /><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></Icon>;
const AlertCircle = (p) => <Icon {...p}><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></Icon>;
const Info = (p) => <Icon {...p}><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></Icon>;
const Clock = (p) => <Icon {...p}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></Icon>;
const ChevronLeft = (p) => <Icon {...p}><path d="m15 18-6-6 6-6" /></Icon>;
const ChevronRight = (p) => <Icon {...p}><path d="m9 18 6-6-6-6" /></Icon>;
const RotateCcw = (p) => <Icon {...p}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></Icon>;
const ArrowRight = (p) => <Icon {...p}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></Icon>;

// Portable — no external theme or component dependencies
const styles = {
  iphoneFrame: 'bg-black rounded-[55px] p-[10px]',
  iphoneScreen: 'w-[375px] h-[812px] bg-white rounded-[44px] overflow-hidden flex flex-col relative',
  buttonLink: 'text-blue-600 text-xs font-semibold text-center hover:underline',
};

const PhoneEmailFallbackPrototype = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [code, setCode] = useState('');
  const [trustDevice, setTrustDevice] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerTimer, setDrawerTimer] = useState(299);
  const [codeTimer, setCodeTimer] = useState(272);
  const codeInputRef = useRef(null);

  // Reset code, close drawer, and reset code timer when changing screens
  useEffect(() => {
    setCode('');
    setDrawerOpen(false);
    setCodeTimer(272);
    if (codeInputRef.current) codeInputRef.current.value = '';
  }, [currentStep]);

  // Start countdown when drawer opens
  useEffect(() => {
    if (!drawerOpen) {
      setDrawerTimer(299);
      return;
    }
    const interval = setInterval(() => {
      setDrawerTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [drawerOpen]);

  // Countdown for code entry screens
  useEffect(() => {
    if (![1, 2, 6].includes(currentStep)) return;
    const interval = setInterval(() => {
      setCodeTimer((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentStep]);

  const handleCodeInput = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    setCode(value);
  };

  const maskedPhone = '•••4589';
  const emailAddress = 'john.doe@example.com';

  const steps = [
    // Step 0: Phone Confirmation (J2 entry)
    {
      id: 'phone-confirm',
      label: 'Phone Confirmation',
      journey: 'J2',
      phase: 'phone',
      navTitle: 'Verify Phone',
      icon: (
        <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/assets/images/dg-mobile-phone.svg" alt="Phone" style={{ width: 44, height: 44 }} />
        </div>
      ),
      headline: "Confirm your phone number",
      body: "We\u2019ll send a verification code to the phone number associated with your account.",
      showPhoneCard: true,
      primaryButton: 'Send code to phone',
      secondaryButtons: [{ label: "Don\u2019t have access to this phone?", outlined: true, navigateTo: 3 }],
      designNotes: 'J2 entry point \u2014 phone number shown masked. "Don\'t have access?" is the critical escape hatch that was missing in the October launch.',
    },
    // Step 1: Code Entry (J2)
    {
      id: 'code-entry-phone',
      label: 'Phone Code Entry',
      journey: 'J2',
      phase: 'phone',
      navTitle: 'Enter Code',
      previousScreen: true,
      headline: "Enter verification code",
      body: `Enter the 6-digit code sent to ${maskedPhone}`,
      showCodeInput: true,
      showTimer: true,
      timerText: '4:32 remaining',
      primaryButton: 'Verify',
      secondaryButtons: [
        { label: "Didn\u2019t receive a code?", outlined: true },
        { label: "Try email instead?", outlined: true, navigateTo: 3 },
      ],
      designNotes: 'Phone code entry \u2014 same pattern as email flow. "Try email instead" link is always visible, giving users a self-service fallback before they even fail.',
    },
    // Step 2: Invalid Code (J2 - first failure)
    {
      id: 'invalid-code-phone',
      label: 'Invalid Code',
      journey: 'J2',
      phase: 'error',
      navTitle: 'Enter Code',
      previousScreen: true,
      headline: "Enter verification code",
      body: `Enter the 6-digit code sent to ${maskedPhone}`,
      showErrorBanner: true,
      errorMessage: 'Invalid code. You have 1 attempt remaining.',
      showCodeInput: true,
      primaryButton: 'Try again',
      secondaryButtons: [
        { label: "Try email instead", outlined: true, navigateTo: 3 },
      ],
      designNotes: 'First failure \u2014 red error banner appears above code input. Shows remaining attempts. "Try email instead" becomes more prominent as the user approaches lockout.',
    },
    // Step 3: No Phone Access (J2 → transition)
    {
      id: 'no-phone-access',
      label: "No Phone Access",
      journey: 'J2',
      phase: 'transition',
      navTitle: 'No Phone Access',
      previousScreen: true,
      icon: (
        <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/assets/images/dg-no-phone.svg" alt="No Phone" style={{ width: 44, height: 44 }} />
        </div>
      ),
      headline: "Can\u2019t access your phone?",
      body: "Don\u2019t worry \u2014 there are other ways we can verify your identity.",
      showMenuItems: true,
      menuItems: [
        { icon: Mail, label: 'Verify via email', navigateTo: 4 },
        { icon: Headphones, label: 'Contact support' },
      ],
      secondaryButtons: [{ label: "Go Back", outlined: true, navigateTo: 0 }],
      designNotes: 'Critical transition screen \u2014 this is the "October fix." In the original launch, 25,000 users hit a dead end here with no email fallback. Now routes to J3 email verification.',
    },
    // Step 4: Email Confirmation (J3 entry)
    {
      id: 'email-confirm',
      label: 'Email Confirmation',
      journey: 'J3',
      phase: 'email',
      navTitle: 'Verify Email',
      previousScreen: true,
      icon: (
        <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/assets/images/dg-confirm-email.svg" alt="Email" style={{ width: 44, height: 44 }} />
        </div>
      ),
      headline: "Confirm your email",
      body: "We\u2019ll send a verification code to the email address associated with your account.",
      showEmailCard: true,
      primaryButton: 'Send verification email',
      secondaryButtons: [{ label: "Don\u2019t have access to this email?", outlined: true }],
      designNotes: 'J3 entry \u2014 now serving as the fallback from phone. Email shown unmasked. Fresh start with full attempt budget.',
    },
    // Step 5: TFA Code Sent (J3)
    {
      id: 'code-sent-email',
      label: 'Code Sent (TFA)',
      journey: 'J3',
      phase: 'email',
      navTitle: 'Code Sent',
      previousScreen: true,
      icon: (
        <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/assets/images/dg-code-sent.svg" alt="Code Sent" style={{ width: 44, height: 44 }} />
        </div>
      ),
      headline: "Code sent!",
      body: `We\u2019ve sent a 6-digit verification code to your email address ${emailAddress}.`,
      showTimer: true,
      timerText: 'Code expires in 4:59',
      timerColor: '#18181B',
      showInfoBox: true,
      infoMessage: "Didn\u2019t receive the code? Check your spam folder or wait a moment. You can request a new code after the timer expires.",
      primaryButton: 'Enter Code',
      designNotes: 'TFA code sent to verified email. Code type is TFA (not OTP) because profile.emailVerified was true \u2014 this enables device trust on success.',
    },
    // Step 6: Email Code Entry (J3)
    {
      id: 'code-entry-email',
      label: 'Email Code Entry',
      journey: 'J3',
      phase: 'email',
      navTitle: 'Enter Code',
      previousScreen: true,
      headline: "Enter verification code",
      body: `Enter the 6-digit code sent to ${emailAddress}`,
      showCodeInput: true,
      showTimer: true,
      timerText: '4:32 remaining',
      primaryButton: 'Verify',
      secondaryButtons: [
        { label: "Didn\u2019t receive a code?", outlined: true },
      ],
      designNotes: 'Email code entry \u2014 same interaction pattern as phone. Fresh 2-attempt budget (phone failures don\u2019t carry over). User has clear path to success.',
    },
    // Step 7: Success + Trust (J3)
    {
      id: 'success-trust',
      label: 'Success + Trust',
      journey: 'J3',
      phase: 'success',
      navTitle: 'Verified',
      previousScreen: true,
      icon: (
        <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/assets/images/dg-email-verified.svg" alt="Email Verified" style={{ width: 44, height: 44 }} />
        </div>
      ),
      headline: "Email verified!",
      body: "Your identity has been successfully verified via email. You can now continue securely.",
      showTrustToggle: true,
      primaryButton: 'Continue',
      designNotes: 'Success with device trust option \u2014 because TFA code was used (email was verified), user gets the trust toggle. 1-year trust means they won\u2019t see verification again on this device.',
    },
  ];

  // When on step 5, show step 4 content behind the drawer
  const currentScreen = steps[currentStep === 5 ? 4 : currentStep];
  const isDrawerVisible = currentStep === 5 || (currentStep === 4 && drawerOpen);
  // When drawer is open on Step 4 or on Step 5, show Step 5 in progress bar + side panel
  const displayStep = isDrawerVisible ? 5 : currentStep;
  const displayScreen = steps[displayStep];

  const goNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };
  const goPrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };
  const restart = () => {
    setCurrentStep(0);
    setCode('');
  };

  const phaseColor = (phase) => {
    switch (phase) {
      case 'phone': return '#3B82F6';
      case 'error': return '#F97316';
      case 'transition': return '#8B5CF6';
      case 'email': return '#0EA5E9';
      case 'success': return '#22C55E';
      default: return '#6B7280';
    }
  };

  const journeyBadge = (journey) => {
    const colors = {
      'J2': { bg: '#0c1a3d', text: '#60a5fa', border: '#1e3a5f' },
      'J3': { bg: '#052e16', text: '#4ade80', border: '#14532d' },
    };
    const c = colors[journey] || colors['J2'];
    return (
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '2px 8px',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '700',
        backgroundColor: c.bg,
        color: c.text,
        border: `1px solid ${c.border}`,
      }}>
        {journey}
      </span>
    );
  };

  // 6-digit interactive code box input matching .pen design
  const codeBoxes = () => (
    <div
      className="flex justify-center gap-3 w-full mt-4 mb-2"
      onClick={() => codeInputRef.current?.focus()}
      style={{ cursor: 'text', position: 'relative' }}
    >
      <input
        ref={codeInputRef}
        type="text"
        inputMode="numeric"
        value={code}
        onChange={handleCodeInput}
        maxLength={6}
        autoFocus
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0, pointerEvents: 'none' }}
      />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            width: 48,
            height: 56,
            borderRadius: 12,
            border: `1.5px solid ${i === code.length ? '#18181B' : '#E4E4E7'}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 24,
            fontWeight: 600,
            fontFamily: 'Montserrat, sans-serif',
            color: '#18181B',
            transition: 'border-color 0.15s',
          }}
        >
          {code[i] || ''}
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#0a0e1a] p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-slate-100">Scenario 5: Phone → Email Fallback</h1>
              </div>
              <p className="text-sm text-slate-400">Phone fails, email backup — the key October fix preventing 25,000 dead ends</p>
            </div>
            <button
              onClick={restart}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <RotateCcw size={14} />
              Restart
            </button>
          </div>

          {/* Journey Path */}
          <div className="flex items-center gap-2 mb-4 mt-3">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Journey Path:</span>
            <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: '#0c1a3d', color: '#60a5fa' }}>
              J2: Phone Verification
            </span>
            <ArrowRight size={14} className="text-slate-600" />
            <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: '#052e16', color: '#4ade80' }}>
              J3: Email Verification
            </span>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-1.5">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => setCurrentStep(i)}
                className="group flex flex-col items-center gap-1 flex-1"
                title={step.label}
              >
                <div
                  className="w-full h-2 rounded-full transition-all"
                  style={{
                    backgroundColor: i <= displayStep ? phaseColor(step.phase) : '#1e293b',
                    opacity: i === displayStep ? 1 : i < displayStep ? 0.6 : 0.3,
                  }}
                />
                <span className={`text-[10px] ${i === displayStep ? 'font-semibold text-slate-200' : 'text-slate-600'} hidden sm:block`}>
                  {step.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content: Phone + Details side by side */}
        <div className="flex flex-row gap-6 items-start justify-center">
          {/* iPhone Mockup */}
          <div className="flex-shrink-0" style={{ transform: 'scale(0.8)', transformOrigin: 'top center', marginBottom: -175 }}>
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className={styles.iphoneFrame} style={{ border: '2px solid #334155', boxShadow: '0 0 40px rgba(0,0,0,0.5), 0 0 80px rgba(15,23,42,0.4)' }}>
                  <div className={styles.iphoneScreen}>
                    {/* Status Bar with Dynamic Island */}
                    <div className="h-[54px] flex items-center justify-between px-6" style={{ fontFamily: 'Montserrat, sans-serif', backgroundColor: '#FFF200' }}>
                      <div className="text-[17px] font-semibold w-14" style={{ paddingTop: 17, color: '#000' }}>9:41</div>
                      <div className="w-[126px] h-[37px] bg-black rounded-full" style={{ marginTop: 11 }}></div>
                      <div className="flex items-center gap-2 w-14 justify-end" style={{ paddingTop: 19 }}>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="1" y="6" width="4" height="18" rx="1" transform="scale(0.67) translate(0,6)" fill="black"/>
                          <path d="M2 20h2V14H2zM6 20h2V10H6zM10 20h2V6h-2zM14 20h2V2h-2z" fill="black" stroke="none"/>
                        </svg>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
                          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
                          <circle cx="12" cy="20" r="1" fill="black"/>
                        </svg>
                        <svg className="w-[25px] h-[12px]" viewBox="0 0 25 12" fill="black">
                          <rect x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="black" strokeWidth="1" fill="none" opacity="0.35"/>
                          <path d="M23 4v4a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" fill="black" opacity="0.4"/>
                          <rect x="2" y="2" width="18" height="8" rx="1.5" fill="black"/>
                        </svg>
                      </div>
                    </div>

                    {/* Yellow DG Branded Header */}
                    <div style={{
                      height: 62,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#FFF200',
                      position: 'relative',
                      paddingLeft: 16,
                      paddingRight: 16,
                      borderBottom: '1px solid #E4E4E7',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}>
                      <button onClick={goPrev} style={{ position: 'absolute', left: 16, top: 'calc(50% - 1px)', transform: 'translateY(-50%)', background: 'none', border: 'none', padding: 0, cursor: 'pointer', zIndex: 1 }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m15 18-6-6 6-6"/>
                        </svg>
                      </button>
                      <img src="/assets/brand/myDG.svg" alt="myDG" style={{ height: 32, marginTop: -2 }} />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 overflow-y-auto px-6 pb-4" style={{ paddingTop: 55 }}>
                      <div className="flex flex-col items-center text-center" style={{ minHeight: '100%' }}>
                        {/* Hero Icon */}
                        {currentScreen.icon && (
                          <div className="mb-4">
                            {currentScreen.icon}
                          </div>
                        )}

                        {/* Headline */}
                        <h1 style={{ fontSize: 22, fontWeight: 600, color: '#18181B', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', marginBottom: 12 }}>
                          {currentScreen.headline}
                        </h1>

                        {/* Body */}
                        <p style={{ fontSize: 15, color: '#71717A', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', lineHeight: 1.5, maxWidth: 320, marginBottom: 16 }}>
                          {currentScreen.body}
                        </p>

                        {/* Error Banner */}
                        {currentScreen.showErrorBanner && (
                          <div style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 12,
                            padding: 16,
                            borderRadius: 12,
                            backgroundColor: '#FEF2F2',
                            border: '1px solid #DC2626',
                            marginBottom: 16,
                          }}>
                            <AlertCircle size={20} color="#DC2626" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: 14, fontWeight: 500, color: '#DC2626', fontFamily: 'Montserrat, sans-serif', textAlign: 'left' }}>
                              {currentScreen.errorMessage}
                            </span>
                          </div>
                        )}

                        {/* Phone Card */}
                        {currentScreen.showPhoneCard && (
                          <div style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            padding: 20,
                            borderRadius: 16,
                            backgroundColor: '#F5F5F5',
                            border: '1px solid #D4D4D8',
                            marginBottom: 16,
                          }}>
                            <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Phone size={20} color="#18181B" strokeWidth={2} />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                              <div style={{ fontSize: 13, color: '#71717A', fontFamily: 'Montserrat, sans-serif' }}>Phone number</div>
                              <div style={{ fontSize: 17, fontWeight: 600, color: '#18181B', fontFamily: 'Montserrat, sans-serif' }}>+1 (•••) •••-4589</div>
                            </div>
                          </div>
                        )}

                        {/* Email Card */}
                        {currentScreen.showEmailCard && (
                          <div style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 16,
                            padding: 20,
                            borderRadius: 16,
                            backgroundColor: '#F5F5F5',
                            border: '1px solid #D4D4D8',
                            marginBottom: 16,
                          }}>
                            <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <Mail size={20} color="#18181B" />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                              <div style={{ fontSize: 13, color: '#71717A', fontFamily: 'Montserrat, sans-serif' }}>Email address</div>
                              <div style={{ fontSize: 17, fontWeight: 600, color: '#18181B', fontFamily: 'Montserrat, sans-serif' }}>{emailAddress}</div>
                            </div>
                          </div>
                        )}

                        {/* Code Input (6 individual boxes) */}
                        {currentScreen.showCodeInput && codeBoxes()}

                        {/* Timer */}
                        {currentScreen.showTimer && (
                          <div className="flex items-center justify-center gap-2 w-full mb-4" style={{ marginTop: currentScreen.showCodeInput ? 8 : 0 }}>
                            <Clock size={16} color="#A1A1AA" />
                            <span style={{ fontSize: 13, color: '#A1A1AA', fontFamily: 'Montserrat, sans-serif' }}>
                              {currentScreen.showCodeInput
                                ? `${Math.floor(codeTimer / 60)}:${String(codeTimer % 60).padStart(2, '0')} remaining`
                                : currentScreen.timerText}
                            </span>
                          </div>
                        )}

                        {/* Info Box */}
                        {currentScreen.showInfoBox && (
                          <div style={{
                            width: '100%',
                            display: 'flex',
                            gap: 12,
                            padding: 16,
                            borderRadius: 12,
                            border: '1.5px solid #E4E4E7',
                            marginBottom: 16,
                            textAlign: 'left',
                          }}>
                            <Info size={20} color="#18181B" style={{ flexShrink: 0, marginTop: 2 }} />
                            <span style={{ fontSize: 14, color: '#71717A', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.5 }}>
                              {currentScreen.infoMessage}
                            </span>
                          </div>
                        )}

                        {/* Menu Items */}
                        {currentScreen.showMenuItems && (
                          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
                            {currentScreen.menuItems.map((item, i) => (
                              <div
                                key={i}
                                onClick={() => item.navigateTo !== undefined && setCurrentStep(item.navigateTo)}
                                style={{
                                  width: '100%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: 20,
                                  borderRadius: 16,
                                  backgroundColor: '#F5F5F5',
                                  border: '1px solid #D4D4D8',
                                  cursor: item.navigateTo !== undefined ? 'pointer' : 'default',
                                }}
                              >
                                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                                  <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <item.icon size={20} color="#18181B" />
                                  </div>
                                  <span style={{ fontSize: 15, fontWeight: 500, color: '#18181B', fontFamily: 'Montserrat, sans-serif' }}>{item.label}</span>
                                </div>
                                <ChevronRight size={20} color="#A1A1AA" />
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Trust Device Toggle */}
                        {currentScreen.showTrustToggle && (
                          <div
                            style={{
                              width: '100%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 16,
                              padding: 20,
                              borderRadius: 16,
                              backgroundColor: '#F5F5F5',
                              border: '1px solid #D4D4D8',
                              marginBottom: 16,
                            }}
                          >
                            <div style={{ textAlign: 'left', flex: 1 }}>
                              <div style={{ fontSize: 15, fontWeight: 600, color: '#18181B', fontFamily: 'Montserrat, sans-serif' }}>Trust this device</div>
                              <div style={{ fontSize: 13, color: '#71717A', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.5, marginTop: 4 }}>
                                Skip verification next time you sign in from this device.
                              </div>
                            </div>
                            <button
                              onClick={() => setTrustDevice(!trustDevice)}
                              style={{
                                width: 50,
                                height: 30,
                                borderRadius: 100,
                                backgroundColor: trustDevice ? '#18181B' : '#E4E4E7',
                                border: 'none',
                                cursor: 'pointer',
                                position: 'relative',
                                transition: 'background-color 0.2s',
                                flexShrink: 0,
                              }}
                            >
                              <div style={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                backgroundColor: '#FFFFFF',
                                position: 'absolute',
                                top: 3,
                                left: trustDevice ? 23 : 3,
                                transition: 'left 0.2s',
                              }} />
                            </button>
                          </div>
                        )}

                        <div style={{ flex: 1 }}></div>

                        {/* Primary Button */}
                        {currentScreen.primaryButton && (() => {
                          const isDisabled = currentScreen.showCodeInput && code.length < 6;
                          return (
                            <button
                              style={{
                                width: '100%',
                                height: 48,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 8,
                                fontWeight: 600,
                                fontSize: 16,
                                fontFamily: 'Montserrat, sans-serif',
                                backgroundColor: isDisabled ? '#D1D5DB' : '#18181B',
                                color: isDisabled ? '#9CA3AF' : '#FFFFFF',
                                border: 'none',
                                cursor: isDisabled ? 'not-allowed' : 'pointer',
                                transition: 'background-color 0.2s, color 0.2s',
                              }}
                              disabled={isDisabled}
                              onClick={() => {
                                if (currentStep === 4) {
                                  setDrawerOpen(true);
                                } else {
                                  goNext();
                                }
                              }}
                            >
                              {currentScreen.primaryButton}
                            </button>
                          );
                        })()}

                        {/* Secondary Buttons (outlined or link style) */}
                        {currentScreen.secondaryButtons && (
                          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 0, marginTop: 6 }}>
                            {currentScreen.secondaryButtons.map((btn, index) => (
                              btn.outlined ? (
                                <button
                                  key={index}
                                  onClick={() => btn.navigateTo !== undefined && setCurrentStep(btn.navigateTo)}
                                  style={{
                                    width: '100%',
                                    height: 40,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 0,
                                    fontWeight: 500,
                                    fontSize: 14,
                                    fontFamily: 'Montserrat, sans-serif',
                                    backgroundColor: 'transparent',
                                    color: '#18181B',
                                    border: 'none',
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                  }}
                                >
                                  {btn.label}
                                </button>
                              ) : (
                                <button
                                  key={index}
                                  onClick={() => btn.navigateTo !== undefined && setCurrentStep(btn.navigateTo)}
                                  className={styles.buttonLink}
                                >
                                  {btn.label}
                                </button>
                              )
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Home Indicator */}
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 8, paddingBottom: 8 }}>
                      <div style={{ width: 134, height: 5, backgroundColor: '#18181B', borderRadius: 100 }}></div>
                    </div>

                    {/* Bottom Drawer Overlay (Code Sent on Email Confirm) */}
                    {(currentStep === 4 || currentStep === 5) && (
                      <>
                        {/* Dim backdrop */}
                        <div
                          onClick={() => currentStep === 4 && setDrawerOpen(false)}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0,0,0,0.5)',
                            opacity: isDrawerVisible ? 1 : 0,
                            pointerEvents: isDrawerVisible ? 'auto' : 'none',
                            transition: currentStep === 5 ? 'none' : 'opacity 0.3s',
                            zIndex: 10,
                          }}
                        />
                        {/* Drawer */}
                        <div style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          backgroundColor: '#FFFFFF',
                          borderTopLeftRadius: 24,
                          borderTopRightRadius: 24,
                          transform: isDrawerVisible ? 'translateY(0)' : 'translateY(100%)',
                          transition: currentStep === 5 ? 'none' : 'transform 0.3s ease-out',
                          zIndex: 11,
                          padding: '12px 24px 0',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}>
                          {/* Handle */}
                          <div style={{ width: 40, height: 4, backgroundColor: '#D1D5DB', borderRadius: 100, marginBottom: 24 }} />

                          {/* Icon */}
                          <div style={{ marginBottom: 16 }}>
                            <div style={{ width: 80, height: 80, borderRadius: '50%', backgroundColor: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <img src="/assets/images/dg-code-sent.svg" alt="Code Sent" style={{ width: 44, height: 44 }} />
                            </div>
                          </div>

                          {/* Headline */}
                          <h2 style={{ fontSize: 22, fontWeight: 600, color: '#18181B', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', marginBottom: 12 }}>
                            Code sent!
                          </h2>

                          {/* Body */}
                          <p style={{ fontSize: 15, color: '#71717A', fontFamily: 'Montserrat, sans-serif', textAlign: 'center', lineHeight: 1.5, maxWidth: 320, marginBottom: 16 }}>
                            We&rsquo;ve sent a 6-digit verification code to your email address {emailAddress}.
                          </p>

                          {/* Timer */}
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
                            <Clock size={16} color="#A1A1AA" />
                            <span style={{ fontSize: 13, color: '#A1A1AA', fontFamily: 'Montserrat, sans-serif' }}>
                              {Math.floor(drawerTimer / 60)}:{String(drawerTimer % 60).padStart(2, '0')} remaining
                            </span>
                          </div>

                          {/* Info Box */}
                          <div style={{
                            width: '100%',
                            display: 'flex',
                            gap: 12,
                            padding: 16,
                            borderRadius: 12,
                            border: '1.5px solid #E4E4E7',
                            marginBottom: 16,
                            textAlign: 'left',
                          }}>
                            <Info size={20} color="#18181B" style={{ flexShrink: 0, marginTop: 2 }} />
                            <span style={{ fontSize: 14, color: '#71717A', fontFamily: 'Montserrat, sans-serif', lineHeight: 1.5 }}>
                              Didn&rsquo;t receive the code? Check your spam folder or wait a moment. You can request a new code after the timer expires.
                            </span>
                          </div>

                          {/* Got it Button */}
                          <button
                            onClick={() => {
                              setDrawerOpen(false);
                              setCurrentStep(6);
                            }}
                            style={{
                              width: '100%',
                              height: 48,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: 8,
                              fontWeight: 600,
                              fontSize: 16,
                              fontFamily: 'Montserrat, sans-serif',
                              backgroundColor: '#18181B',
                              color: '#FFFFFF',
                              border: 'none',
                              cursor: 'pointer',
                            }}
                          >
                            Got it
                          </button>

                          {/* Home Indicator inside drawer */}
                          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 16, paddingBottom: 8, width: '100%' }}>
                            <div style={{ width: 134, height: 5, backgroundColor: '#18181B', borderRadius: 100 }}></div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Step Navigation */}
            <div className="flex items-center justify-between mt-6 px-2" style={{ width: '395px' }}>
              <button
                onClick={goPrev}
                disabled={currentStep === 0}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentStep === 0
                    ? 'text-slate-700 cursor-not-allowed'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                <ChevronLeft size={16} />
                Previous
              </button>
              <span className="text-sm text-slate-500">
                {displayStep + 1} / {steps.length}
              </span>
              {currentStep < steps.length - 1 ? (
                <button
                  onClick={goNext}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:bg-slate-800 transition-colors"
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              ) : (
                <button
                  onClick={restart}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-cyan-400 hover:bg-slate-800 transition-colors"
                >
                  <RotateCcw size={14} />
                  Restart
                </button>
              )}
            </div>
          </div>

          {/* Details Panel */}
          <div className="flex-1 min-w-[280px]">
            {/* Current Screen Info */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-lg shadow-lg p-6 mb-4">
              <div className="flex items-center gap-2 mb-3">
                {journeyBadge(displayScreen.journey)}
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: phaseColor(displayScreen.phase) }}
                />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {displayScreen.phase === 'phone' ? 'Phone Verification' : displayScreen.phase === 'error' ? 'Error State' : displayScreen.phase === 'transition' ? 'Fallback Transition' : displayScreen.phase === 'email' ? 'Email Verification' : 'Success'}
                </span>
              </div>
              <h3 className="font-semibold text-slate-100 mb-1">{displayScreen.label}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{displayScreen.designNotes}</p>
            </div>

            {/* Screen Copy - hidden for now */}

            {/* Flow Legend */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-lg shadow-lg p-6">
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Scenario Flow</h4>
              <div className="space-y-2">
                {steps.map((step, i) => (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(i)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      i === displayStep ? 'bg-slate-800' : 'hover:bg-slate-800/50'
                    }`}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ backgroundColor: i <= displayStep ? phaseColor(step.phase) : '#334155' }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${i === displayStep ? 'font-semibold text-slate-100' : 'text-slate-400'}`}>
                          {step.label}
                        </span>
                        {journeyBadge(step.journey)}
                      </div>
                    </div>
                    {i === displayStep && (
                      <span className="ml-auto text-xs text-slate-600 flex-shrink-0">current</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Scenario Context */}
            <div className="bg-amber-950/40 border border-amber-800/30 rounded-lg p-4 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Bill (Product Manager)</span>
              </div>
              <p className="text-sm text-amber-300/80 italic">
                &ldquo;This is the key October fix — no dead ends. This path alone prevents 25,000 potential dead ends.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneEmailFallbackPrototype;
