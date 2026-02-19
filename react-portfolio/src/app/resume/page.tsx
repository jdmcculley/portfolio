'use client';

import Image from 'next/image';
import Link from 'next/link';
import s from './resume.module.css';

/* ── Icosahedron Logo ── */
function PolyLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="49" height="40" viewBox="0 0 49 40" fill="none">
      <path
        opacity="0.8"
        d="M12.0788 38.4312L1.15674 19.5906M12.0788 38.4312H35.9088M12.0788 38.4312L10.0927 22.5655M12.0788 38.4312L32.9298 34.4647M1.15674 19.5906L12.0788 0.75M1.15674 19.5906L10.0927 22.5655M35.9088 38.4312L46.8309 19.5906M35.9088 38.4312L32.9298 34.4647M10.0927 22.5655L12.0788 0.75M10.0927 22.5655L31.9369 10.666M10.0927 22.5655L32.9298 34.4647M32.9298 34.4647L46.8309 19.5906M32.9298 34.4647L31.9369 10.666M12.0788 0.75H35.9088M12.0788 0.75L31.9369 10.666M35.9088 0.75L46.8309 19.5906M35.9088 0.75L31.9369 10.666M31.9369 10.666L46.8309 19.5906"
        stroke="url(#resumeLogoGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="resumeLogoGrad" x1="10.6255" y1="0.750001" x2="38.0164" y2="38.6813" gradientUnits="userSpaceOnUse">
          <stop stopColor="#01E1B8" />
          <stop offset="0.313265" stopColor="#01CCD4" />
          <stop offset="1" stopColor="#02AAFF" />
        </linearGradient>
      </defs>
    </svg>
  );
}


export default function ResumePage() {
  return (
    <div style={{ background: 'var(--bg)' }}>
      {/* ══════ CONTROL BAR ══════ */}
      <div className={s.controlBar}>
        <Link href="/" className={s.cbPortfolio}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
          </svg>
          View Portfolio.
        </Link>
        <div className={s.cbControls}>
          <a className={s.cbBtn} href="/assets/resume/JD 2026.pdf" download title="Download resume as PDF">
            <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
            PDF
          </a>
        </div>
      </div>

      {/* ══════ PAGE ══════ */}
      <div className={s.page}>
        {/* ── HEADER ── */}
        <div className={s.header}>
          <Image
            className={s.headerPhoto}
            src="/assets/images/JD-corporate.jpg"
            alt="JD McCulley"
            width={160}
            height={160}
            priority
          />
          <div className={s.headerRight}>
            <div className={s.headerLogo}>
              <PolyLogo />
            </div>
            <div className={s.headerHeadline}>
              Product Design Leader <span className={s.accent}>| Building UX/AI Teams</span><br />That Deliver at Enterprise Scale
            </div>
            <div className={s.headerTags}>
              Fortune 500 Retail <span>/</span> B2B Cybersecurity <span>/</span> Startup-to-Enterprise Scale <span>/</span> Design-Led AI
            </div>
          </div>
        </div>

        {/* ── BODY GRID ── */}
        <div className={s.bodyGrid}>
          {/* ── SIDEBAR ── */}
          <div className={s.sidebar}>
            <div className={s.nameBlock}>
              <h2>JD McCulley</h2>
              <div className={s.loc}>Denver, CO</div>
            </div>

            {/* Contact */}
            <div>
              <div className={s.sTitle}>Contact</div>
              <div className={s.cLabel}>Phone</div>
              <div className={s.cVal}>(720) 530-2896</div>
              <div className={s.cLabel}>Email</div>
              <div className={s.cVal}><a href="mailto:jdmcculley@me.com" style={{ color: 'inherit', textDecoration: 'none' }}>jdmcculley@me.com</a></div>
              <div className={s.cLabel}>LinkedIn</div>
              <div className={s.cVal}><a href="https://www.linkedin.com/in/jdmcc/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>linkedin.com/in/jdmcc</a></div>
              <div className={s.cLabel}>Website</div>
              <div className={s.cVal}><a href="https://jdmcculley.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>jdmcculley.com</a></div>
            </div>

            {/* Three Pillars */}
            <div>
              <div className={s.sTitle}>Three Pillars</div>
              <div className={s.pillar}>
                <div className={s.pillarName}>Team Builder</div>
                <div className={s.pillarDesc}>
                  Servant leader who builds design functions from zero, scales through growth, and stays close to the work
                </div>
              </div>
              <div className={s.pillar}>
                <div className={s.pillarName}>Craft + Judgment</div>
                <div className={s.pillarDesc}>
                  25+ years hands-on across enterprise, startup, and agency means the eye is earned, not theoretical
                </div>
              </div>
              <div className={s.pillar}>
                <div className={s.pillarName}>Design-Led AI</div>
                <div className={s.pillarDesc}>
                  Design governs where, when, and how AI is applied &mdash; human intent before automation, judgment over output
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className={s.sTitle}>Skills</div>
              <div className={s.skGroup}>
                <div className={s.skGroupLabel}>Executive Leadership &amp; Strategy</div>
                <div className={s.skItem}>UX &amp; Product Strategy</div>
                <div className={s.skItem}>Organizational Design</div>
                <div className={s.skItem}>Executive Stakeholder Alignment</div>
                <div className={s.skItem}>Servant Leadership</div>
                <div className={s.skItem}>Team Building &amp; Talent Development</div>
                <div className={s.skItem}>Research-Informed Decision Making</div>
              </div>
              <div className={s.skGroup}>
                <div className={s.skGroupLabel}>Systems &amp; Delivery</div>
                <div className={s.skItem}>Design Systems</div>
                <div className={s.skItem}>Platform Thinking</div>
                <div className={s.skItem}>Agile UX Operating Models</div>
                <div className={s.skItem}>Cross-Functional Product Delivery</div>
                <div className={s.skItem}>Metrics-Driven Design</div>
                <div className={s.skItem}>Design-Led AI Workflows</div>
              </div>
              <div className={s.skGroup}>
                <div className={s.skGroupLabel}>Design Infrastructure</div>
                <div className={s.skItem}>Figma Enterprise &amp; MCP</div>
                <div className={s.skItem}>Claude Code</div>
                <div className={s.skItem}>Design Tokens / System Architecture</div>
                <div className={s.skItem}>AI-Assisted Design Workflows</div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className={s.sTitle}>Education</div>
              <div className={s.edu}>
                <div className={s.eduSchool}>Wayland Baptist University</div>
                <div className={s.eduDegree}>BBA, Management Info Systems</div>
                <div className={s.eduLine} />
                <div className={s.eduDate}>JAN 1999 &ndash; DEC 2000</div>
              </div>
              <div className={s.edu}>
                <div className={s.eduSchool}>Texas Tech University</div>
                <div className={s.eduDegree}>Management Info Systems</div>
                <div className={s.eduLine} />
                <div className={s.eduDate}>AUG 1995 &ndash; DEC 1998</div>
              </div>
            </div>
          </div>

          {/* ── MAIN ── */}
          <div className={s.main}>
            <div className={s.summary}>
              <strong>Product design leader with 25+ years</strong> building UX organizations across Fortune 500 retail, B2B cybersecurity, and high-growth startups. Leads UX strategy and execution for enterprise platforms serving millions of users &mdash; driving growth, engagement recovery, revenue enablement, and risk reduction. I practice design-led AI: design governs where, when, and how AI is applied, with human intent before automation and design judgment over output. Player-coach, not corner office.
            </div>

            <div className={s.expTitle}>Experience</div>

            {/* Dollar General × Agilitee */}
            <div className={s.exp}>
              <div className={s.expDateRow}>
                <div className={s.expDot} />
                <div className={s.expDate}>Jan 2022 &ndash; Jan 2026</div>
              </div>
              <div className={s.expCompany}>
                Dollar General &times; Agilitee <span className={s.expCompanyLoc}>| Remote</span>
              </div>
              <div className={s.expRole}>Sr. Director of Product Design &mdash; Embedded via Agilitee</div>
              <ul className={s.expList}>
                <li className={s.expP}>Owned UX strategy and execution across App, Web, POS, OMS, and in-store platforms for a Fortune 500 retailer &mdash; grew digital user base from 5M to 6.6M+ MAU (+20.9% YoY), with trajectory toward 12M+ following company expansion strategy.</li>
                <li className={s.expP}>Built and led a multidisciplinary design and research team supporting multiple product pods; reversed double-digit engagement decline via myDG Wallet redesign &mdash; consolidating fragmented rewards, deals, and payment experiences into a centralized platform that achieved 130%+ YoY engagement growth.</li>
                <li className={s.expP}>Drove Cash Back and Same-Day Delivery from pilot to nationwide rollout &mdash; Cash Back achieved $9M in customer savings with 191% YoY clip growth and 209% YoY redemption growth; Same-Day Delivery launched across 2,000+ pilot stores.</li>
                <li className={s.expP}>Supported $18M DGMN onsite advertising revenue goal through GAM integration, Criteo display placements, native ad implementations, and seasonal gamification. Led UX for a 1,200+ deliverable website migration across 52 team members spanning 12 time zones.</li>
                <li className={s.expP}>Directed redesign of risk-based authentication and TFA flows &mdash; preventing 75,000 potential user dead-ends and increasing email verification from 28% to 45%+ while maintaining security and compliance standards.</li>
                <li className={s.expP}>Established tokenized design systems for DG and pOpshelf brands &mdash; shared component architecture, naming conventions, and custom Figma workflows adopted across engineering. Integrated AI into the design workflow to compress multi-sprint efforts into weeks.</li>
                <li className={s.expP}>Implemented Agile UX operating model with sprint planning, cross-functional reviews, and embedded research rhythms. Influenced executive roadmap through CDO, Product, and Engineering partnerships. Built team culture rooted in servant leadership: protecting focus time, removing blockers, and maintaining hands-on contribution.</li>
              </ul>
            </div>

            {/* Swimlane */}
            <div className={s.exp}>
              <div className={s.expDateRow}>
                <div className={s.expDot} />
                <div className={s.expDate}>Dec 2016 &ndash; Jan 2022</div>
              </div>
              <div className={s.expCompany}>
                Swimlane <span className={s.expCompanyLoc}>| Louisville, CO</span>
              </div>
              <div className={s.expRole}>Sr. Director of UI/UX</div>
              <ul className={s.expList}>
                <li className={s.expP}>Early design leader responsible for establishing and scaling the UI/UX function through Series A, B, and C growth &mdash; built the design organization from individual contributor to team leadership, defining standards, processes, and culture.</li>
                <li className={s.expP}>Led end-to-end product design for enterprise B2B SOAR platform serving Fortune 500 security operations teams. Translated complex automation workflows into intuitive interfaces that reduced analyst fatigue and accelerated incident response.</li>
                <li className={s.expP}>Partnered cross-functionally with Product and Engineering to define UX standards that supported the platform&apos;s growth from startup to enterprise scale.</li>
              </ul>
            </div>

            {/* Anabliss */}
            <div className={s.exp}>
              <div className={s.expDateRow}>
                <div className={s.expDot} />
                <div className={s.expDate}>Jun 2013 &ndash; Dec 2016</div>
              </div>
              <div className={s.expCompany}>
                Anabliss <span className={s.expCompanyLoc}>| Denver, CO</span>
              </div>
              <div className={s.expRole}>Sr. Interactive Director</div>
              <ul className={s.expList}>
                <li className={s.expP}>Led digital strategy and delivery at boutique agency, owning full digital team across diverse client portfolio including Denver Public Schools, The Aspen Institute, and Prime Health.</li>
                <li className={s.expP}>Served as embedded product designer at SendGrid during transactional email platform redesign &mdash; first embedded partnership model that became the foundation for later enterprise engagements.</li>
                <li className={s.expP}>Spearheaded product design for The Aspen Institute&apos;s Core Ready Schools, delivering intuitive self-assessment tools that drove measurable engagement improvements.</li>
              </ul>
            </div>

            {/* Greenhouse Partners */}
            <div className={s.exp}>
              <div className={s.expDateRow}>
                <div className={s.expDot} />
                <div className={s.expDate}>Apr 2012 &ndash; Jun 2013</div>
              </div>
              <div className={s.expCompany}>
                Greenhouse Partners <span className={s.expCompanyLoc}>| Boulder, CO</span>
              </div>
              <div className={s.expRole}>Sr. Digital Director</div>
              <ul className={s.expList}>
                <li className={s.expP}>First director-level role at a Boulder-based brand strategy and creative firm known for its &ldquo;Whole Brand&rdquo; methodology &mdash; aligning internal culture with external brand identity.</li>
                <li className={s.expP}>Led digital strategy and delivery across all projects within the agency, owning client presentations, project management, and vendor relationships while operating at a larger scale with national brand clients.</li>
              </ul>
            </div>

            {/* GreenTent Web Design & Marketing */}
            <div className={s.exp}>
              <div className={s.expDateRow}>
                <div className={s.expDot} />
                <div className={s.expDate}>Jan 2004 &ndash; Mar 2012</div>
              </div>
              <div className={s.expCompany}>
                GreenTent Web Design &amp; Marketing <span className={s.expCompanyLoc}>| Denver, CO</span>
              </div>
              <div className={s.expRole}>Co-founder, Digital Design</div>
              <ul className={s.expList}>
                <li className={s.expP}>Co-founded and led web design and marketing firm for 8+ years, providing full-stack digital services to non-profit, small business, and professional services clients.</li>
                <li className={s.expP}>Owned creative direction, UX design, graphic design, and front-end development across the entire project lifecycle. Won the 2008 W3 Silver Award for Good Seed in the web design category.</li>
              </ul>
            </div>

            <div className={s.foot}>&mdash; References available upon request &mdash;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
