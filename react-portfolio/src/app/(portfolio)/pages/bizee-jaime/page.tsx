'use client';

import s from './bizee.module.css';

// ─── SVG Visuals ────────────────────────────────────────────────────────────

function NetworkVisual() {
  return (
    <div className={s.visNetwork}>
      <div className={s.visNetworkGlow} />
      <svg className={s.visNetworkSvg} viewBox="0 0 200 160" fill="none">
        <defs>
          <radialGradient id="netNodeA" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <line x1="100" y1="80" x2="40" y2="30" stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.18" />
        <line x1="100" y1="80" x2="160" y2="40" stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.18" />
        <line x1="100" y1="80" x2="170" y2="120" stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.14" />
        <line x1="100" y1="80" x2="30" y2="110" stroke="var(--secondary)" strokeWidth="0.6" strokeOpacity="0.14" />
        <line x1="40" y1="30" x2="160" y2="40" stroke="var(--accent)" strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="160" y1="40" x2="170" y2="120" stroke="var(--secondary)" strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="30" y1="110" x2="170" y2="120" stroke="var(--accent)" strokeWidth="0.4" strokeOpacity="0.08" />
        <line x1="40" y1="30" x2="75" y2="140" stroke="var(--accent)" strokeWidth="0.4" strokeOpacity="0.08" />
        <line x1="75" y1="140" x2="170" y2="120" stroke="var(--secondary)" strokeWidth="0.4" strokeOpacity="0.08" />
        <circle cx="40" cy="30" r="3" fill="var(--secondary)" fillOpacity="0.55" />
        <circle cx="160" cy="40" r="2.5" fill="var(--accent)" fillOpacity="0.5" />
        <circle cx="170" cy="120" r="3.5" fill="var(--secondary)" fillOpacity="0.45" />
        <circle cx="30" cy="110" r="2" fill="var(--accent)" fillOpacity="0.4" />
        <circle cx="75" cy="140" r="2.5" fill="var(--secondary)" fillOpacity="0.35" />
        <circle cx="130" cy="145" r="1.5" fill="var(--accent)" fillOpacity="0.3" />
        <circle cx="15" cy="55" r="1.5" fill="var(--accent)" fillOpacity="0.25" />
        <circle cx="185" cy="70" r="2" fill="var(--secondary)" fillOpacity="0.3" />
        <circle cx="100" cy="80" r="10" fill="url(#netNodeA)" />
        <circle cx="100" cy="80" r="6" fill="var(--accent)" fillOpacity="0.18" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="100" cy="80" r="3" fill="var(--accent)" fillOpacity="0.85" />
      </svg>
    </div>
  );
}

function GrowthArcVisual() {
  return (
    <div className={s.visGrowth}>
      <div className={s.visGrowthGlow} />
      <svg className={s.visGrowthSvg} viewBox="0 0 200 140" fill="none">
        <defs>
          <linearGradient id="growthLine" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="10" y1="35" x2="195" y2="35" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.07" />
        <line x1="10" y1="70" x2="195" y2="70" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.07" />
        <line x1="10" y1="105" x2="195" y2="105" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.07" />
        <path d="M10 120 Q50 115 90 100 Q130 88 195 70" stroke="var(--secondary)" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
        <path d="M10 125 Q50 112 90 90 Q130 62 195 28 L195 140 L10 140 Z" fill="url(#growthFill)" />
        <path d="M10 125 Q50 112 90 90 Q130 62 195 28" stroke="url(#growthLine)" strokeWidth="1.5" fill="none" />
        <circle cx="10" cy="125" r="2.5" fill="var(--accent)" fillOpacity="0.3" />
        <circle cx="60" cy="108" r="2.5" fill="var(--accent)" fillOpacity="0.5" />
        <circle cx="120" cy="72" r="3" fill="var(--accent)" fillOpacity="0.7" />
        <circle cx="195" cy="28" r="4" fill="var(--accent)" fillOpacity="0.9" style={{ filter: 'drop-shadow(0 0 4px var(--accent))' }} />
      </svg>
    </div>
  );
}

function VennVisual() {
  return (
    <div className={s.visVenn}>
      <div className={s.visVennGlow} />
      <svg className={s.visVennSvg} viewBox="0 0 200 160" fill="none">
        <defs>
          <radialGradient id="vennCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="60" r="52" fill="var(--secondary)" fillOpacity="0.06" stroke="var(--secondary)" strokeWidth="1" strokeOpacity="0.25" />
        <circle cx="68" cy="110" r="52" fill="var(--accent)" fillOpacity="0.05" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="132" cy="110" r="52" fill="var(--secondary)" fillOpacity="0.05" stroke="var(--secondary)" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="100" cy="93" r="18" fill="url(#vennCenter)" />
        <circle cx="100" cy="93" r="8" fill="var(--accent)" fillOpacity="0.6" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.8" />
        <circle cx="100" cy="93" r="3" fill="var(--accent)" fillOpacity="1" />
      </svg>
    </div>
  );
}

function PipelineVisual() {
  return (
    <div className={s.visPipeline}>
      <svg className={s.visPipelineSvg} viewBox="0 0 200 80" fill="none">
        <defs>
          <linearGradient id="pipeGrad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <line x1="50" y1="40" x2="80" y2="40" stroke="url(#pipeGrad)" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
        <line x1="120" y1="40" x2="150" y2="40" stroke="url(#pipeGrad)" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 3" />
        <path d="M78 36 L84 40 L78 44" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.5" fill="none" />
        <path d="M148 36 L154 40 L148 44" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.7" fill="none" />
        <rect x="5" y="20" width="45" height="40" rx="7" fill="rgba(74,125,255,0.1)" stroke="var(--secondary)" strokeWidth="0.8" strokeOpacity="0.45" />
        <path d="M27.5 28 L22 36 L27.5 44 L33 36 Z" stroke="var(--secondary)" strokeWidth="1" strokeOpacity="0.6" fill="none" />
        <circle cx="27.5" cy="36" r="3" fill="var(--secondary)" fillOpacity="0.5" />
        <rect x="80" y="20" width="40" height="40" rx="7" fill="rgba(0,212,255,0.08)" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.6" />
        <circle cx="100" cy="40" r="7" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        <circle cx="100" cy="40" r="3.5" fill="var(--accent)" fillOpacity="0.65" />
        <line x1="100" y1="29" x2="100" y2="25" stroke="var(--accent)" strokeWidth="0.7" strokeOpacity="0.4" />
        <line x1="111" y1="40" x2="115" y2="40" stroke="var(--accent)" strokeWidth="0.7" strokeOpacity="0.4" />
        <line x1="89" y1="40" x2="85" y2="40" stroke="var(--accent)" strokeWidth="0.7" strokeOpacity="0.4" />
        <rect x="150" y="20" width="45" height="40" rx="7" fill="rgba(0,212,255,0.1)" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.7" />
        <path d="M165 30 L160 40 L165 50" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
        <path d="M180 30 L185 40 L180 50" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function TimelineVisual() {
  return (
    <div className={s.visTimeline}>
      <div className={s.visTimelineGlow} />
      <svg className={s.visTimelineSvg} viewBox="0 0 200 100" fill="none">
        <defs>
          <linearGradient id="timeGrad" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.25" />
            <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="timeFill" x1="0" y1="0" x2="0" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="10" y1="82" x2="190" y2="82" stroke="var(--accent)" strokeWidth="0.4" strokeOpacity="0.12" />
        <line x1="72" y1="72" x2="72" y2="84" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="132" y1="55" x2="132" y2="84" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.25" />
        <path d="M10 80 Q40 80 72 72 Q102 65 132 48 Q162 30 190 18 L190 82 L10 82 Z" fill="url(#timeFill)" />
        <path d="M10 80 Q40 80 72 72 Q102 65 132 48 Q162 30 190 18" stroke="url(#timeGrad)" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="10" cy="80" r="3" fill="var(--secondary)" fillOpacity="0.4" />
        <circle cx="72" cy="72" r="3.5" fill="var(--accent)" fillOpacity="0.6" />
        <circle cx="132" cy="48" r="4" fill="var(--accent)" fillOpacity="0.8" />
        <circle cx="190" cy="18" r="5" fill="var(--accent)" fillOpacity="1" style={{ filter: 'drop-shadow(0 0 5px var(--accent))' }} />
        <rect x="8" y="86" width="20" height="2" rx="1" fill="var(--secondary)" fillOpacity="0.2" />
        <rect x="60" y="86" width="24" height="2" rx="1" fill="var(--accent)" fillOpacity="0.35" />
        <rect x="120" y="86" width="24" height="2" rx="1" fill="var(--accent)" fillOpacity="0.5" />
        <rect x="178" y="86" width="16" height="2" rx="1" fill="var(--accent)" fillOpacity="0.8" />
      </svg>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BizeeJaimePage() {
  return (
    <div className={s.page}>

      {/* ── HERO ── */}
      <section className={s.hero}>
        <div className={s.heroContent}>
          <p className={s.eyebrow}>JD McCulley × Bizee</p>
          <h1 className={s.heroHeadline}>
            Stop Pushing Pixels.<br />
            Start Building the Operating System<br />
            for Entrepreneurs.
          </h1>
          <p className={s.heroSub}>
            I&rsquo;m JD McCulley — a product design leader with 25 years building UX
            organizations across agencies, startups, and enterprise. I&rsquo;ve done this
            transformation twice. Here&rsquo;s why Bizee is where I do it next.
          </p>
          <div className={s.heroPills}>
            {['Team Builder', 'Craft + Judgment', 'Design-Led AI', 'Player-Coach'].map((tag) => (
              <span key={tag} className={s.pill}>{tag}</span>
            ))}
          </div>
          <p className={s.preparedFor}>Prepared for Jaime R. — Head of Product &amp; Design, Bizee</p>
        </div>
        <div className={s.heroVisual} aria-hidden>
          <NetworkVisual />
        </div>
      </section>

      <div className={s.divider} />

      {/* ── YOU DESCRIBED EXACTLY WHAT I BUILD ── */}
      <section className={s.section}>
        <h2 className={s.sectionLabel}>You described exactly what I build.</h2>
        <p className={s.sectionSub}>
          Your LinkedIn post about this role wasn&rsquo;t a job description — it was a design brief.
          Every line maps to something I&rsquo;ve already done.
        </p>
        <div className={s.callGrid}>
          {[
            {
              you: '"High-velocity leader"',
              note: 'Not someone who hides behind process. Someone who ships.',
              proof: 'My team of 5 delivered the output of 9 through AI-augmented workflows. 48-hour crisis ship when 25K users were stuck.',
            },
            {
              you: '"Own the soul of a brand"',
              note: 'Not a manager of a style guide.',
              proof: "Built Swimlane's brand from the logo up. Unified Dollar General's digital experience across 20K+ stores.",
            },
            {
              you: '"Extreme agency, speed"',
              note: 'A leader who operates, not just manages.',
              proof: 'Player-coach model. I run design critiques in the morning and push pixels in Figma in the afternoon.',
            },
            {
              you: '"AI-native operating system"',
              note: 'Rebuilding the experience from the ground up.',
              proof: 'Built production AI pipelines — design-to-code automation, research synthesis, rapid prototyping. Not prototypes. Production.',
            },
          ].map(({ you, note, proof }) => (
            <div key={you} className={s.callCard}>
              <p className={s.callYou}>{you}</p>
              <p className={s.callNote}>{note}</p>
              <p className={s.callProof}>→ {proof}</p>
            </div>
          ))}
        </div>
      </section>

      <div className={s.divider} />

      {/* ── TWO TRANSFORMATIONS ── */}
      <section className={s.section}>
        <h2 className={s.sectionLabel}>Two transformations. Both relevant.</h2>

        <div className={s.statBar}>
          {[
            { value: '6M → 12M+', label: 'MAU Growth' },
            { value: '$9M', label: 'Cash Back to Customers' },
            { value: '130%+', label: 'Wallet YoY Growth' },
            { value: '5 → 9', label: 'AI Team Multiplier' },
          ].map(({ value, label }) => (
            <div key={label} className={s.stat}>
              <span className={s.statValue}>{value}</span>
              <span className={s.statLabel}>{label}</span>
            </div>
          ))}
        </div>

        <div className={s.transformVisualRow} aria-hidden>
          <GrowthArcVisual />
        </div>

        <div className={s.transformGrid}>
          <div className={s.transformCard}>
            <p className={s.transformRole}>Dollar General — Sr. Director of Product Design</p>
            <p className={s.transformYears}>2022–2026</p>
            <p className={s.transformBody}>
              Led embedded design team for a Fortune 500 digital platform. Grew the app from 6M to
              12M+ MAU. Shipped Cash Back ($9M), myDG Wallet (reversed double-digit decline →
              130%+ growth), Rewards By Program Alignment (8 journeys, 113 screens), and Same-Day
              Delivery. Built AI-augmented workflows that turned a 5-person team into the output of 9.
            </p>
          </div>
          <div className={s.transformCard}>
            <p className={s.transformRole}>Swimlane — First Design Hire → Design Leadership</p>
            <p className={s.transformYears}>2016–2022</p>
            <p className={s.transformBody}>
              Built the design function from zero at a cybersecurity startup. Created the brand, design
              system, and product experience language from Series A through Series C. Translated complex
              B2B security automation into interfaces SOC analysts trust under pressure. Earned design&rsquo;s
              seat at the table in an engineering-led culture.
            </p>
          </div>
        </div>
      </section>

      <div className={s.divider} />

      {/* ── THE INTERSECTION ── */}
      <section className={s.section}>
        <h2 className={s.sectionLabel}>The Intersection: Service Design × AI Patterns × Customer Psychology</h2>
        <p className={s.sectionSub}>
          You described the intersection you&rsquo;re looking for. Here&rsquo;s how I operate in all three.
        </p>

        <div className={s.intersectVisualRow} aria-hidden>
          <VennVisual />
        </div>

        <div className={s.intersectGrid}>
          <div className={s.intersectCard}>
            <h3 className={s.intersectTitle}>Service Design</h3>
            <p className={s.intersectSub}>End-to-end experiences that span digital and physical</p>
            <p className={s.intersectBody}>
              Same-Day Delivery connected app ordering to in-store fulfillment across 2,000+ stores.
              Cash Back bridged deal discovery to in-store redemption. For Bizee, the
              formation-to-growth journey is the same class of challenge — it crosses digital, legal,
              compliance, and operational touchpoints. This isn&rsquo;t screen-level design. It&rsquo;s service
              design.
            </p>
          </div>
          <div className={s.intersectCard}>
            <h3 className={s.intersectTitle}>AI Patterns</h3>
            <p className={s.intersectSub}>Production workflows, not prototypes</p>
            <p className={s.intersectBody}>
              Design-to-code automation using Figma and Claude. AI-assisted research synthesis. Rapid
              prototyping systems. The craft judgment stays human — AI compresses everything before
              and after the craft moment.
            </p>
            <div className={s.pipelineWrap} aria-hidden>
              <PipelineVisual />
            </div>
          </div>
          <div className={s.intersectCard}>
            <h3 className={s.intersectTitle}>Customer Psychology</h3>
            <p className={s.intersectSub}>I&rsquo;ve been the entrepreneur</p>
            <p className={s.intersectBody}>
              I used tools like Bizee to start my own LLC. When you&rsquo;re filling out formation
              paperwork, every unclear step creates anxiety. That&rsquo;s not UX polish — that&rsquo;s customer
              psychology. Designing for it requires empathy backed by research, not assumptions.
            </p>
          </div>
        </div>
      </section>

      <div className={s.divider} />

      {/* ── FIRST 90 DAYS ── */}
      <section className={s.section}>
        <h2 className={s.sectionLabel}>First 90 Days: Listen → Align → Ship</h2>
        <p className={s.sectionSub}>
          A team of 2–3 with agency support. A post-checkout engagement challenge. Brand
          inconsistency across channels. Here&rsquo;s how I&rsquo;d approach it.
        </p>

        <div className={s.timelineVisualRow} aria-hidden>
          <TimelineVisual />
        </div>

        <div className={s.phaseGrid}>
          {[
            {
              phase: 'Days 1–30',
              label: 'Listen & Map',
              items: [
                'Immerse in the full product journey — discovery through formation through post-checkout',
                'Talk to every stakeholder: eng, product, marketing, support, data, leadership',
                'Audit the experience end-to-end — where are customers dropping off?',
                'Assess the team: strengths, gaps, morale, capacity',
                'Map where brand is inconsistent across channels',
              ],
            },
            {
              phase: 'Days 31–60',
              label: 'Align & Prioritize',
              items: [
                'Build a design strategy mapped to business priorities — not a 50-page deck',
                'Establish team rituals: critiques, research share-outs, cross-functional syncs',
                "Assess where AI can multiply the small team's capacity",
                'Identify the first high-impact target (post-checkout engagement?)',
              ],
            },
            {
              phase: 'Days 61–90',
              label: 'Ship & Show',
              items: [
                'Pick one meaningful win and ship it — nothing builds credibility like results',
                'Formalize design operations: processes, tools, standards',
                'Demonstrate AI-augmented velocity with the existing team',
                'Present a 6–12 month design roadmap to leadership',
              ],
            },
          ].map(({ phase, label, items }) => (
            <div key={phase} className={s.phaseCard}>
              <p className={s.phaseEyebrow}>{phase}</p>
              <h3 className={s.phaseTitle}>{label}</h3>
              <ul className={s.phaseList}>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className={s.divider} />

      {/* ── PEOPLE-FIRST LEADERSHIP ── */}
      <section className={s.section}>
        <h2 className={s.sectionLabel}>People-First Leadership</h2>
        <p className={s.sectionSub}>Not a style guide manager. A builder and an operator.</p>

        <p className={s.conductorLine}>
          I think of leadership like conducting an orchestra — my job isn&rsquo;t to play every instrument,
          it&rsquo;s to make sure every musician can do their best work.
        </p>

        <blockquote className={s.pullQuote}>
          &ldquo;Craft without speed is a luxury. Speed without craft is a liability.&rdquo;
        </blockquote>

        <div className={s.testimonialsGrid}>
          <div className={s.testimonialCard}>
            <p className={s.testimonialText}>
              &ldquo;A champion for user-grounded design and a strong listener who let me do my best work.&rdquo;
            </p>
            <p className={s.testimonialAttr}>— UX Research Lead, Dollar General</p>
          </div>
          <div className={s.testimonialCard}>
            <p className={s.testimonialText}>
              &ldquo;Thoughtful and collaborative — someone who balances a strong design eye with business goals.&rdquo;
            </p>
            <p className={s.testimonialAttr}>— Product Partners, Dollar General</p>
          </div>
        </div>
      </section>

      <div className={s.divider} />

      {/* ── CTA ── */}
      <section className={s.cta}>
        <h2 className={s.ctaHeadline}>
          Let&rsquo;s build the Operating System for Entrepreneurs.
        </h2>
        <p className={s.ctaBody}>
          Bizee is at exactly the kind of inflection point where I do my best work. Building the
          design function. Owning the experience end-to-end. Bringing AI practices that multiply a
          small team&rsquo;s output — with the urgency and agency this transformation demands.
        </p>
        <div className={s.ctaLinks}>
          <a href="mailto:jdmcculley08@gmail.com" className={s.ctaEmail}>jdmcculley08@gmail.com</a>
          <span className={s.ctaDot}>·</span>
          <a href="https://jdmcculley.com" className={s.ctaSite} target="_blank" rel="noopener noreferrer">jdmcculley.com</a>
        </div>
        <p className={s.ctaAttribution}>
          Prepared for Jaime R. · Bizee Director of Experience Design · March 2026
        </p>
      </section>

    </div>
  );
}
