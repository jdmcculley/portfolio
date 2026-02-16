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
              Product Design Leader <span className={s.accent}>building and scaling</span><br />UX organizations for the enterprise.
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
              <div className={s.cVal}><a href="https://linkedin.com/in/jdmcc" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>linkedin.com/in/jdmcc</a></div>
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
                <div className={s.skItem}>Team Building &amp; Talent Development</div>
                <div className={s.skItem}>Research-Informed Decision Making</div>
              </div>
              <div className={s.skGroup}>
                <div className={s.skGroupLabel}>Systems &amp; Delivery</div>
                <div className={s.skItem}>Design Systems</div>
                <div className={s.skItem}>Agile UX Operating Models</div>
                <div className={s.skItem}>Cross-Functional Product Delivery</div>
                <div className={s.skItem}>Metrics-Driven Design</div>
                <div className={s.skItem}>Design-Led AI Workflows</div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className={s.sTitle}>Education</div>
              <div className={s.edu}>
                <div className={s.eduSchool}>Texas Tech University</div>
                <div className={s.eduDegree}>Management Info Systems</div>
                <div className={s.eduLine} />
                <div className={s.eduDate}>AUG 1995 &ndash; DEC 1998</div>
              </div>
              <div className={s.edu}>
                <div className={s.eduSchool}>Wayland Baptist University</div>
                <div className={s.eduDegree}>BBA, Management Info Systems</div>
                <div className={s.eduLine} />
                <div className={s.eduDate}>JAN 1999 &ndash; DEC 2000</div>
              </div>
            </div>
          </div>

          {/* ── MAIN ── */}
          <div className={s.main}>
            <div className={s.summary}>
              <strong>Product design executive with 25+ years</strong> leading UX organizations in Fortune 500 retail, B2B cybersecurity, and startup-to-enterprise environments. Specializes in UX strategy, design systems, organizational design, cross-functional product delivery, and design-led AI workflows. Grew enterprise digital user base by 100% in 4 years.
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
                <li className={s.expP}>Owned UX strategy and execution across App, Web, POS, OMS, and in-store platforms for a Fortune 500 retailer &mdash; grew MAU from 6M to 12M+ in 4 years.</li>
                <li className={s.expP}>Built and scaled a multidisciplinary design and research team across multiple product pods in 3 years; drove 130%+ YoY engagement growth.</li>
                <li className={s.expP}>Reversed double-digit engagement decline via myDG Wallet redesign; drove Cash Back to nationwide rollout — nearly 200% YoY clip growth.</li>
                <li className={s.expP}>Established tokenized design systems for two retail brands with shared component architecture and Figma workflows adopted across engineering.</li>
                <li className={s.expP}>Influenced executive roadmap through embedded research and CDO, Product, and Engineering partnerships; stood up Agile UX operating model.</li>
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
                <li className={s.expP}>Built the UI/UX function from zero to full design team in 5 years, scaling through Series A, B, and C while defining standards, processes, and culture.</li>
                <li className={s.expP}>Led end-to-end product design for enterprise B2B SOAR platform serving Fortune 500 security teams; improved analyst efficiency by 35%.</li>
                <li className={s.expP}>Partnered cross-functionally with Product and Engineering to define UX standards that supported the platform&apos;s growth from Series A to Series C.</li>
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
                <li className={s.expP}>Led digital strategy and design team at boutique agency; pioneered the embedded product designer model at SendGrid that became the foundation for enterprise engagements.</li>
                <li className={s.expP}>Owned full project lifecycle &mdash; from strategy through delivery &mdash; across a diverse client portfolio including Denver Public Schools and Prime Health.</li>
                <li className={s.expP}>Spearheaded product design for The Aspen Institute&apos;s Core Ready Schools, enhancing user engagement by 68% through intuitive self-assessment tools within 12 months.</li>
              </ul>
            </div>

            {/* Earlier Career */}
            <div className={s.exp}>
              <div className={s.expDateRow}>
                <div className={s.expDot} />
                <div className={s.expDate}>2004 &ndash; 2013</div>
              </div>
              <div className={s.expCompany}>Earlier Career</div>
              <ul className={s.expList}>
                <li className={s.expP}>Digital Director at Greenhouse Partners; Co-founded and led GreenTent Web Design &amp; Marketing for 8+ years, growing it from startup to sustainable business.</li>
              </ul>
            </div>

            <div className={s.foot}>&mdash; References available upon request &mdash;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
