import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContentSection } from '@/components/case-study/ContentSection';
import { StrategicContext } from '@/components/case-study/StrategicContext';
import { ResultsGrid } from '@/components/case-study/ResultsGrid';
import { ProcessTimeline } from '@/components/case-study/ProcessTimeline';
import { DecisionCallout } from '@/components/case-study/DecisionCallout';
import { PullQuote } from '@/components/case-study/PullQuote';
import { ExecQuote } from '@/components/case-study/ExecQuote';
import { ContextCards } from '@/components/case-study/ContextCards';
import { NextStudy } from '@/components/case-study/NextStudy';
import { Badge } from '@/components/ui/Badge';
import s from '../case-study.module.css';

export const metadata: Metadata = {
  title: 'Case Study: myDG Cash Back at Scale — JD McCulley',
};

/* ── Inline SVG Components ── */

function DGLogo() {
  return (
    <svg width="62" height="62" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
      <rect width="40" height="40" rx="4" fill="black" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.22 24.88H11.88V15.07H12.84C15.54 15.07 17.09 15.83 17.09 19.83C17.09 23 16.54 24.88 13.22 24.88ZM28.15 19.75V22.3H29.85V24.51C29.38 24.73 28.63 24.9 27.97 24.9C25.51 24.9 24.34 23.15 24.34 19.79C24.34 16.75 25.44 15.04 27.08 15.04C28.36 15.04 28.98 15.86 29.31 17.4L33.91 16.62C33.25 13.38 30.93 11.65 27.34 11.65C24.22 11.65 21.95 12.89 20.7 15.17C19.27 12.67 16.41 11.97 12.32 11.97H5.83V15.07H7.45V27.98H12.79C16.27 27.98 19.13 27.17 20.62 24.78C21.7 26.91 23.72 28.28 26.91 28.28C28.49 28.28 30.06 27.82 31.08 27.17L31.61 27.98H34.21V19.75H28.15Z" fill="#FFF000" />
    </svg>
  );
}

function DGLogoLarge() {
  return (
    <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g clipPath="url(#clip0_dg)">
        <path d="M49.5 0H5.5C2.46243 0 0 2.46243 0 5.5V49.5C0 52.5376 2.46243 55 5.5 55H49.5C52.5376 55 55 52.5376 55 49.5V5.5C55 2.46243 52.5376 0 49.5 0Z" fill="#FFF000" />
        <path fillRule="evenodd" clipRule="evenodd" d="M18.1786 34.2163H16.3386V20.7156H17.6597C21.3702 20.7156 23.4955 21.7665 23.4955 27.2629C23.4955 31.6214 22.7432 34.2163 18.1786 34.2163ZM38.7132 27.1591V30.6615H41.0508V33.6974C40.4021 34.0087 39.362 34.2422 38.4538 34.2422C35.0807 34.2422 33.4741 31.8292 33.4741 27.2111C33.4741 23.038 34.9789 20.6768 37.2344 20.6768C38.9988 20.6768 39.855 21.8054 40.2981 23.9202L46.6207 22.8562C45.7169 18.3935 42.5252 16.0193 37.5975 16.0193C33.3094 16.0193 30.1761 17.729 28.4686 20.8568C26.5019 17.4214 22.5591 16.4519 16.9352 16.4519H8.01172V20.7156H10.241V38.4717H17.5818C22.3758 38.4717 26.3052 37.3585 28.3572 34.0722C29.844 37.0022 32.6123 38.8868 37.0007 38.8868C39.1803 38.8868 41.336 38.2511 42.7328 37.3558L43.4595 38.4717H47.0358V27.1591H38.7132Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_dg"><rect width="55" height="55" fill="white" /></clipPath>
      </defs>
    </svg>
  );
}

function IbottaLogo() {
  return (
    <svg width="159" height="55" viewBox="0 0 159 55" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Ibotta logo">
      <path d="M6.63281 20.8844H15.7816L15.0665 48.2739H6.82923L6.63281 20.8844Z" fill="#ED2764" />
      <path d="M29.7749 7.48744L29.5754 21.0686C31.6286 20.341 33.8137 19.9757 35.9989 19.942C38.5155 19.942 40.9983 20.7371 43.0177 22.2259C46.7926 24.9428 48.7138 28.949 48.7138 34.2507C48.7138 39.1195 47.0596 42.963 43.7788 45.7443C40.9308 48.1941 37.4198 49.422 33.3165 49.422C29.8731 49.422 26.4941 48.5594 23.5141 46.871C22.5872 46.3399 21.7248 45.7443 20.8993 45.0812C21.2952 43.359 21.4609 41.603 21.4302 39.8471L21.065 13.9772C21.065 12.2887 20.8993 10.5972 20.6016 8.9088L29.7749 7.48438V7.48744ZM29.2531 28.8784L29.3176 40.593C30.5575 41.3759 31.96 41.7995 33.427 41.7995C35.6459 41.8977 37.7329 40.8202 39.0065 38.9936C39.9518 37.6552 40.4428 36.0251 40.3753 34.3612C40.3753 32.111 39.6909 30.4133 38.319 29.2376C37.0454 28.16 35.4495 27.5737 33.7861 27.6074C32.1871 27.6412 30.6219 28.0649 29.2501 28.8815L29.2531 28.8784Z" fill="#ED2764" />
      <path d="M65.6032 19.7731C68.2794 19.7731 70.9219 20.5559 73.1715 21.9926C77.7075 24.863 79.9571 29.0411 79.9571 34.4901C79.9571 36.7096 79.4353 38.8954 78.4226 40.8847C77.0845 43.6261 74.8993 45.8763 72.1924 47.313C69.9735 48.5195 67.4938 49.1396 64.9495 49.1396C60.4473 49.1396 56.7952 47.5095 54.0208 44.2769C51.8018 41.6675 50.6295 38.306 50.6939 34.88C50.6295 30.7019 52.3573 26.6896 55.4233 23.8499C58.1639 21.173 61.8161 19.7056 65.6002 19.77L65.6032 19.7731ZM65.6032 27.3434C63.547 27.279 61.592 28.289 60.3828 29.9528C59.3394 31.322 58.7839 32.989 58.7532 34.6835C58.7194 36.5101 59.4069 38.2722 60.613 39.6107C61.6902 40.9799 63.3537 41.7657 65.0815 41.7657C66.4841 41.7657 67.8528 41.2776 68.9301 40.3628C70.7899 38.9599 71.8978 36.7403 71.8334 34.3919C71.8978 32.2368 71.017 30.1831 69.4518 28.7464C68.4083 27.8009 67.0058 27.279 65.6032 27.3434Z" fill="#ED2764" />
      <path d="M100.182 22.8123L100.148 29.4217H93.2335L93.0708 35.9575L93.037 37.2285C93.037 38.5332 93.2304 39.4787 93.6508 40.0681C94.2002 40.9829 95.2007 41.5048 96.235 41.5048C97.3337 41.4403 98.4324 41.1119 99.4022 40.59L101.501 46.039C99.0462 47.8656 96.6216 48.7804 94.1664 48.7804C91.8401 48.8142 89.5782 47.9331 87.8657 46.3337C86.2177 44.8663 85.2816 42.745 85.3123 40.5255V29.4217H81.6602L81.6939 22.8123H85.5732L85.6069 18.5421C85.6714 16.9857 85.6069 15.3985 85.4136 13.8421L93.6386 13.9403C93.6386 14.3701 93.6048 15.067 93.5404 16.0248C93.5404 16.3563 93.5066 17.0839 93.4759 18.2412L93.347 22.8092H100.179L100.182 22.8123Z" fill="#ED2764" />
      <path d="M120.784 22.8123L120.75 29.4217H114.109L113.946 35.9606L113.913 37.2315C113.913 38.5362 114.109 39.4817 114.533 40.0712C115.088 40.986 116.098 41.5079 117.141 41.5079C118.249 41.4434 119.36 41.1149 120.339 40.593L122.46 46.0421C119.98 47.8687 117.5 48.7835 115.054 48.7835C112.706 48.8172 110.423 47.9362 108.692 46.3368C106.995 44.8694 106.05 42.7481 106.179 40.5286V29.4217H102.266L102.299 22.8123H106.179L106.212 18.5267C106.277 16.9764 106.212 15.3954 106.019 13.8452L114.244 13.9434C114.244 14.3732 114.21 15.0639 114.146 16.0217C114.146 16.3502 114.112 17.0777 114.081 18.232L113.952 22.8153H120.784V22.8123Z" fill="#ED2764" />
      <path d="M125.3 22.1891C128.823 20.8199 132.509 20.1016 136.293 20.0341C139.654 20.0341 142.459 20.8169 144.708 22.3518C146.568 23.6258 147.578 25.5169 147.839 27.9973C147.872 28.3565 147.903 28.7464 147.903 29.1731L147.968 38.2784C148.001 42.1925 148.652 45.2623 149.858 47.4788L142.324 49.4036L141.246 46.564C139.258 48.2616 136.744 49.1734 134.136 49.1089C130.744 49.1089 128.068 47.8349 126.11 45.3237C124.643 43.4972 123.86 41.2439 123.827 38.9292C123.762 36.2215 124.968 33.6091 127.089 31.9145C129.112 30.2169 131.72 29.3358 134.363 29.4033C136.45 29.4371 138.472 29.9252 140.366 30.7725C140.007 27.8039 138.211 26.3335 135.016 26.3335C132.374 26.3672 129.796 26.9198 127.384 27.9636L125.297 22.1891H125.3ZM136.001 34.7173C134.826 34.6835 133.684 35.1747 132.936 36.0865C132.217 36.8048 131.794 37.7841 131.794 38.8279C131.828 40.0036 132.316 41.1119 133.196 41.8947C133.948 42.6437 134.992 43.0704 136.066 43.0367C137.306 43.0704 138.481 42.5148 139.295 41.6C139.914 40.9154 140.274 40.0006 140.24 39.055C140.274 37.8793 139.847 36.7373 139 35.9238C138.217 35.1409 137.106 34.6835 135.998 34.7173H136.001Z" fill="#ED2764" />
      <path d="M15.9565 18.0171H15.4317C8.63688 18.0171 6.56836 14.2228 6.56836 14.2228V7.72076C6.56836 7.72076 8.86706 9.93108 15.266 9.93108H15.9565V18.0171Z" fill="#ED2764" />
    </svg>
  );
}

export default function CashBackCaseStudy() {
  return (
    <main className={s.main}>
      {/* ══════════ HERO ══════════ */}
      <ScrollReveal>
        <section className={s.hero}>
          <div className={s.caseStudyLabel}>Case Study</div>
          <div className={s.heroTitleContainer}>
            <DGLogo />
            <h1 className={s.heroTitle}>myDG Cash Back at Scale</h1>
          </div>
          <p className={s.heroSubtitle}>
            Designing the Ibotta partnership integration that put $9 million back in customers&apos; pockets, grew deal engagement 191% YoY, and redefined how Dollar General competes at 20,000+ stores.
          </p>

          <div className={s.metadata}>
            <div><div className={s.metadataLabel}>Role</div><div className={s.metadataValue}>UX Team Lead &amp; Design</div></div>
            <div><div className={s.metadataLabel}>Team</div><div className={s.metadataValue}>5 Cross-Functional</div></div>
            <div><div className={s.metadataLabel}>Timeline</div><div className={s.metadataValue}>Jan – Jul 2023</div></div>
            <div><div className={s.metadataLabel}>Platforms</div><div className={s.metadataValue}>App, Web, POS</div></div>
            <div><div className={s.metadataLabel}>Company</div><div className={s.metadataValue}>Dollar General</div></div>
          </div>

          {/* ── Growth Chart ── */}
          <div className={s.heroChart} role="figure" aria-label="Engagement growth trajectory showing clips growing from 1.2M to 17.2M and redemptions from 0.4M to 15.8M between Q1 2023 and Q1 2024">
            <div className={s.chartHeader}>
              <span className={s.chartTitle}>Engagement Growth Trajectory</span>
              <div className={s.chartLegend}>
                <div className={s.legendItem}><div className={s.legendDot} style={{ background: '#00d4ff' }} /><span>Clips</span></div>
                <div className={s.legendItem}><div className={s.legendDot} style={{ background: '#4a7dff' }} /><span>Redemptions</span></div>
              </div>
            </div>
            <div className={s.chartArea}>
              <svg className={s.chartSvg} viewBox="0 0 800 200" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="clipsFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="redemptionsFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4a7dff" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#4a7dff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="50" x2="800" y2="50" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />
                <line x1="0" y1="100" x2="800" y2="100" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />
                <line x1="0" y1="150" x2="800" y2="150" stroke="rgba(0,212,255,0.06)" strokeWidth="1" />
                {/* Clips line */}
                <path d="M0 180 C100 175 150 165 200 155 C280 140 320 125 400 105 C480 82 540 60 600 40 C660 25 720 18 800 12" stroke="#00d4ff" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M0 180 C100 175 150 165 200 155 C280 140 320 125 400 105 C480 82 540 60 600 40 C660 25 720 18 800 12 V200 H0 Z" fill="url(#clipsFill)" />
                {/* Redemptions line */}
                <path d="M0 185 C100 182 150 175 200 168 C280 152 320 135 400 110 C480 80 540 50 600 30 C660 18 720 10 800 5" stroke="#4a7dff" strokeWidth="1.5" fill="none" strokeDasharray="6 3" strokeLinecap="round" />
                <path d="M0 185 C100 182 150 175 200 168 C280 152 320 135 400 110 C480 80 540 50 600 30 C660 18 720 10 800 5 V200 H0 Z" fill="url(#redemptionsFill)" />
              </svg>

              {/* Clips data points */}
              <div className={`${s.chartDot} ${s.tooltipSideRight}`} style={{ left: '0%', top: '90%', background: '#00d4ff', boxShadow: '0 0 0 3px rgba(0, 212, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q1 2023 &middot; Clips</div>
                  <div className={s.chartTooltipValue} style={{ color: '#00d4ff' }}>1.2M</div>
                  <div className={s.chartTooltipSub}>Program launch baseline</div>
                </div>
              </div>
              <div className={s.chartDot} style={{ left: '25%', top: '77.5%', background: '#00d4ff', boxShadow: '0 0 0 3px rgba(0, 212, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q2 2023 &middot; Clips</div>
                  <div className={s.chartTooltipValue} style={{ color: '#00d4ff' }}>3.8M</div>
                  <div className={s.chartTooltipSub}>+217% — early adoption surge</div>
                </div>
              </div>
              <div className={s.chartDot} style={{ left: '50%', top: '52.5%', background: '#00d4ff', boxShadow: '0 0 0 3px rgba(0, 212, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q3 2023 &middot; Clips</div>
                  <div className={s.chartTooltipValue} style={{ color: '#00d4ff' }}>8.1M</div>
                  <div className={s.chartTooltipSub}>Co-mingled feed drives discovery</div>
                </div>
              </div>
              <div className={`${s.chartDot} ${s.tooltipBelow}`} style={{ left: '75%', top: '20%', background: '#00d4ff', boxShadow: '0 0 0 3px rgba(0, 212, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q4 2023 &middot; Clips</div>
                  <div className={s.chartTooltipValue} style={{ color: '#00d4ff' }}>14.6M</div>
                  <div className={s.chartTooltipSub}>Holiday peak — 191% YoY growth</div>
                </div>
              </div>
              <div className={`${s.chartDot} ${s.tooltipSideLeft}`} style={{ left: '100%', top: '6%', background: '#00d4ff', boxShadow: '0 0 0 3px rgba(0, 212, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q1 2024 &middot; Clips</div>
                  <div className={s.chartTooltipValue} style={{ color: '#00d4ff' }}>17.2M</div>
                  <div className={s.chartTooltipSub}>Sustained growth post-holiday</div>
                </div>
              </div>

              {/* Redemptions data points */}
              <div className={`${s.chartDot} ${s.tooltipSideRight}`} style={{ left: '0%', top: '92.5%', background: '#4a7dff', width: 8, height: 8, boxShadow: '0 0 0 3px rgba(74, 125, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q1 2023 &middot; Redemptions</div>
                  <div className={s.chartTooltipValue} style={{ color: '#4a7dff' }}>0.4M</div>
                  <div className={s.chartTooltipSub}>Initial redemption baseline</div>
                </div>
              </div>
              <div className={s.chartDot} style={{ left: '25%', top: '84%', background: '#4a7dff', width: 8, height: 8, boxShadow: '0 0 0 3px rgba(74, 125, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q2 2023 &middot; Redemptions</div>
                  <div className={s.chartTooltipValue} style={{ color: '#4a7dff' }}>1.6M</div>
                  <div className={s.chartTooltipSub}>Redemption rate climbing</div>
                </div>
              </div>
              <div className={s.chartDot} style={{ left: '50%', top: '55%', background: '#4a7dff', width: 8, height: 8, boxShadow: '0 0 0 3px rgba(74, 125, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q3 2023 &middot; Redemptions</div>
                  <div className={s.chartTooltipValue} style={{ color: '#4a7dff' }}>5.9M</div>
                  <div className={s.chartTooltipSub}>$9M back in customers&apos; pockets</div>
                </div>
              </div>
              <div className={`${s.chartDot} ${s.tooltipBelow}`} style={{ left: '75%', top: '15%', background: '#4a7dff', width: 8, height: 8, boxShadow: '0 0 0 3px rgba(74, 125, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q4 2023 &middot; Redemptions</div>
                  <div className={s.chartTooltipValue} style={{ color: '#4a7dff' }}>12.1M</div>
                  <div className={s.chartTooltipSub}>Conversion rate exceeds projections</div>
                </div>
              </div>
              <div className={`${s.chartDot} ${s.tooltipSideLeft}`} style={{ left: '100%', top: '2.5%', background: '#4a7dff', width: 8, height: 8, boxShadow: '0 0 0 3px rgba(74, 125, 255, 0.15)' }}>
                <div className={s.chartTooltip}>
                  <div className={s.chartTooltipLabel}>Q1 2024 &middot; Redemptions</div>
                  <div className={s.chartTooltipValue} style={{ color: '#4a7dff' }}>15.8M</div>
                  <div className={s.chartTooltipSub}>Redemptions closing the clip gap</div>
                </div>
              </div>
            </div>
            <div className={s.chartLabels}>
              <span className={s.chartLabelItem}>Q1 2023</span>
              <span className={s.chartLabelItem}>Q2</span>
              <span className={s.chartLabelItem}>Q3</span>
              <span className={s.chartLabelItem}>Q4</span>
              <span className={s.chartLabelItem}>2024</span>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════ 01 — THE PROBLEM ══════════ */}
      <ContentSection number="01 — THE PROBLEM" title="Competing Without a Modern Rewards Mechanism" reduced>
        <div className={s.problemBodyWrap}>
          <div className={s.sectionBody}>
            <p>Dollar General needed more than coupons. Larger competitors had established cash back programs that drove both engagement and known-customer identification. DG had 20,000+ stores, 12 million monthly active app users, and a deeply loyal base of value-conscious shoppers — but no modern rewards mechanism to match. No one in the discount channel had made this move yet.</p>
            <p>The timing amplified the urgency. Inflation was running hot, SNAP emergency allotments had ended, and DG&apos;s core customers were stretching harder than ever. The challenge wasn&apos;t just building a feature — it was fundamentally shifting how a customer base accustomed to paper coupons and traditional discounting would engage with a new category of value delivery, without fracturing the deals experience they already relied on.</p>
          </div>
          {/* Partnership Lockup */}
          <div className={s.partnership} aria-label="Dollar General and Ibotta partnership">
            <div className={s.partnerLogoDg}>
              <DGLogoLarge />
            </div>
            <div className={s.partnerConnector}>
              <span className={s.partnerX} aria-hidden="true">&times;</span>
            </div>
            <div className={s.partnerLogoIbotta}>
              <IbottaLogo />
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ══════════ Strategic Context ══════════ */}
      <StrategicContext
        label="Strategic Context"
        stats={[
          { value: 'First in Channel', desc: 'Dollar General was the first retailer in the discount channel to join the Ibotta Performance Network \u2014 moving ahead of every competitor in the space.' },
          { value: 'Two-Phase Rollout', desc: 'Jan 2023: IPN partnership announced. Jul 2023: DG Cash Back program launched publicly. A deliberate phased strategy from infrastructure to consumer-facing product.' },
          { value: 'Market Timing', desc: 'Launched during peak inflation and the end of SNAP emergency benefits. DG\u2019s value-conscious customer base needed new ways to stretch their budgets.' },
        ]}
        ecosystemLabel="Part of DG's Financial Services Ecosystem"
        ecosystem={[
          { label: 'DG Cash Back', active: true },
          { label: 'spendwell Banking' },
          { label: 'Sezzle BNPL' },
          { label: 'FIS Card Rewards' },
          { label: 'myDG Wallet' },
        ]}
      />

      {/* ══════════ Executive Quote ══════════ */}
      <ScrollReveal>
        <ExecQuote
          name="Emily Taylor"
          role="EVP &amp; Chief Merchandising Officer, Dollar General"
          initials="ET"
          avatar="/assets/testimonials/emily-taylor.png"
          text={`\u201CWe are excited to provide an additional innovative option for our customers to help stretch their budgets. Ibotta\u2019s cash back rewards program further complements our continuous efforts to provide financial offerings and rewards to customers alongside our everyday low prices.\u201D`}
          source="Partnership Announcement, Jan 2023"
        />
      </ScrollReveal>

      {/* ══════════ 02 — THE APPROACH ══════════ */}
      <ContentSection number="02 — THE APPROACH" title="Native Integration, Not a Bolt-On">
        <div className={s.sectionBody}>
          <p>Led UX for the white-label Ibotta integration — the strategic decision that defined the entire project. Rather than embedding a partner experience inside DG&apos;s app, we designed from the customer backward: cash back offers would live alongside existing coupons in a single, co-mingled gallery. Same interaction patterns. Same visual language. No seams.</p>
          <p>AI-assisted synthesis of thousands of Alchemer survey responses informed our initial discovery framework, surfacing the insight that customers didn&apos;t distinguish between deal types — they distinguished between &ldquo;useful&rdquo; and &ldquo;not useful.&rdquo; That shaped every decision downstream.</p>
          <div style={{ marginTop: '16px' }}>
            <Badge variant="ai">AI-Synthesized Research</Badge>
          </div>
        </div>

        {/* ── Device Showcase: Before → After ── */}
        <div className={s.deviceShowcase}>
          {/* BEFORE */}
          <div className={s.deviceCol}>
            <span className={s.deviceColLabel}>Before</span>
            <div className={s.deviceAnnotated}>
              <div className={`${s.deviceFrame} ${s.deviceFrameBefore}`}>
                <div className={s.deviceNotch} />
                <div className={s.deviceScreen}>
                  <img src="/assets/images/dg-deals-before.png" alt="DG Explore Deals — Coupons only" className={s.deviceScreenshot} />
                </div>
              </div>

              <div className={s.annotationLeft} style={{ top: '12.5%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Separate Categories</strong>
                  Coupons, Weekly Ads, and Rebates exist as tabs — but no Cash Back in the ecosystem
                </div>
              </div>

              <div className={s.annotationLeft} style={{ top: '37.7%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>No Cash Back</strong>
                  Only coupons available — no modern rewards mechanism to compete
                </div>
              </div>

              <div className={s.annotationLeft} style={{ top: '57.7%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Single Deal Type</strong>
                  Every card is a coupon — declining differentiation against competitors
                </div>
              </div>

              <div className={s.annotationLeft} style={{ top: '77%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Single Deal Gallery</strong>
                  Column list with basic Coupon cards — no visual hierarchy between deal types
                </div>
              </div>
            </div>
          </div>

          {/* Transition Arrow */}
          <div className={s.deviceTransition} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </div>

          {/* AFTER */}
          <div className={s.deviceCol}>
            <span className={`${s.deviceColLabel} ${s.deviceColLabelAfter}`}>After</span>
            <div className={s.deviceAnnotated}>
              <div className={s.deviceFrame}>
                <div className={s.deviceNotch} />
                <div className={s.deviceScreen}>
                  <img src="/assets/images/dg-deals-after.png" alt="DG Explore Deals — Coupons and Cash Back co-mingled" className={s.deviceScreenshot} />
                </div>
              </div>

              <div className={s.annotation} style={{ top: '9.5%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Unified Tabs</strong>
                  Coupons &amp; Cash Back in a single entry point — no separate sections
                </div>
              </div>

              <div className={s.annotation} style={{ top: '34.7%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Search-First Filters</strong>
                  Toggle between deal types without leaving the feed
                </div>
              </div>

              <div className={s.annotation} style={{ top: '54.7%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Co-Mingled Feed</strong>
                  Cash Back and Coupons side by side — customers can clip everything from a single location
                </div>
              </div>

              <div className={s.annotation} style={{ top: '77%' }}>
                <div className={s.annotationLine} />
                <div className={s.annotationLabel}>
                  <strong>Tile &amp; Gallery Redesign</strong>
                  Two-column grid with rich product imagery, badge system, and clip actions at a glance
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContextCards cards={[
          { type: 'before', title: 'Coupons Only', text: 'Traditional digital coupons with declining differentiation. Competitors offered richer savings experiences. Known-customer identification lagging behind the industry. No cash back mechanism at any scale.' },
          { type: 'after', title: 'Co-Mingled Deals Ecosystem', text: 'Cash back alongside coupons in a unified gallery. Closed-loop rewards keeping value in the DG ecosystem. First-in-channel positioning. A modern rewards mechanism that competes with anyone \u2014 at DG scale.' },
        ]} />

        {/* ── Integration Architecture ── */}
        <div className={s.architecture} role="figure" aria-label="Integration architecture diagram">
          <div className={s.archLabel}>Integration Architecture</div>
          <div className={s.archFlow}>
            <div className={s.archNode}>
              <div className={`${s.archIcon} ${s.archIconPartner}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7da3ff" strokeWidth="1.5" aria-hidden="true"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" /></svg>
              </div>
              <span className={s.archNodeLabel}>Ibotta IPN</span>
              <span className={s.archNodeSub}>White-label offers via Performance Network</span>
            </div>
            <span className={s.archArrow} aria-hidden="true">&rarr;</span>
            <div className={s.archNode}>
              <div className={`${s.archIcon} ${s.archIconDesign}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5ee6ff" strokeWidth="1.5" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
              </div>
              <span className={s.archNodeLabel}>UX Design Layer</span>
              <span className={s.archNodeSub}>Taxonomy, gallery, filters</span>
            </div>
            <span className={s.archArrow} aria-hidden="true">&rarr;</span>
            <div className={s.archNode}>
              <div className={`${s.archIcon} ${s.archIconNative}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" /></svg>
              </div>
              <span className={s.archNodeLabel}>DG Native App</span>
              <span className={s.archNodeSub}>Seamless customer experience</span>
            </div>
            <span className={s.archArrow} aria-hidden="true">&rarr;</span>
            <div className={s.archNode}>
              <div className={`${s.archIcon} ${s.archIconNative}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
              </div>
              <span className={s.archNodeLabel}>20,000+ Stores</span>
              <span className={s.archNodeSub}>POS redemption at scale</span>
            </div>
          </div>
        </div>

        {/* ── Business Model Callout ── */}
        <div className={s.bizModel}>
          <div className={s.bizModelIcon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
          </div>
          <div>
            <div className={s.bizModelLabel}>Why UX Drives Revenue</div>
            <div className={s.bizModelTitle}>Pay-Per-Sale, Not Pay-Per-Click</div>
            <div className={s.bizModelText}>
              The Ibotta Performance Network uses a pay-per-sale model — advertisers only pay when a customer actually purchases. That makes the clip-to-purchase conversion funnel the literal revenue engine. Every UX decision that improves discoverability, clip rates, or redemption friction directly impacts the business model. Design isn&apos;t decorating the feature — it&apos;s the mechanism that makes the economics work.
            </div>
          </div>
        </div>
      </ContentSection>

      {/* ══════════ 03 — THE PROCESS ══════════ */}
      <ContentSection number="03 — THE PROCESS" title="Discovery, Taxonomy, Iteration">
        <div className={s.sectionBody}>
          <p>The fundamental question: how do you make two deal types coexist without confusion? Coupons required clipping. Cash back required purchasing. Different mechanics, different mental models — but our customers expected a single, unified savings experience.</p>
        </div>

        <ProcessTimeline steps={[
          { num: '01', title: 'Taxonomy Design', desc: 'Separated cash back from coupons in the data model while presenting them together in the UI. Clean categories, shared visual language.' },
          { num: '02', title: 'Gallery Architecture', desc: 'Co-mingled deals gallery with searchable, filterable discovery. Designed card layouts and offer hierarchy for maximum clip rates.' },
          { num: '03', title: 'Wallet Integration', desc: 'Integrated DG Cash redemption pathway into the wallet. Cash back earnings felt immediate and accessible, not buried.' },
          { num: '04', title: 'Clip Rate Optimization', desc: 'Iterated on deal presentation, savings callout prominence, and interaction patterns with Ibotta\u2019s team. Tested and shipped.' },
        ]} />

        <DecisionCallout decisions={[
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4" /></svg>, title: 'Co-Mingled vs. Separate Tabs', text: 'We chose to show cash back and coupons together rather than in separate tabs. Customer research showed they don\'t think in deal categories \u2014 they think in products and brands. Separating would have forced a mental model that didn\'t exist.' },
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>, title: 'Search-First Discovery', text: 'Added full-text search and quick filters to a deals surface that had previously only offered browsing. With hundreds of offers at any time, findability drove clip rates more than presentation.' },
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>, title: 'Native Feel Over Partner Branding', text: 'Ibotta\'s white-label SDK allowed customization, but the real work was in the UX layer. Every interaction \u2014 from offer cards to redemption confirmation \u2014 used DG\'s design language. Customers never felt they\'d left the app.' },
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" /></svg>, title: 'Closed-Loop Reward Ecosystem', text: 'DG Cash can only be redeemed in-store at Dollar General. This was a deliberate business and design decision: earned value stays in the DG ecosystem, driving repeat visits and reinforcing the savings loop. The wallet UX had to make this feel like a benefit, not a limitation \u2014 immediate access, clear balance, frictionless spend.' },
          { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" strokeWidth="1.5" aria-hidden="true"><path d="M4 4h16v16H4z" /><path d="M4 12h16M12 4v16" /></svg>, title: 'Anti-Stacking Logic', text: 'Digital coupons and cash back offers can\'t apply to the same item simultaneously \u2014 coupons take priority. We designed the gallery UI to make this transparent, not confusing: clear visual differentiation between deal types, contextual messaging when both exist for the same product, and smart defaults that always favor the customer\'s best deal.' },
        ]} />
      </ContentSection>

      {/* ══════════ 04 — THE RESULTS ══════════ */}
      <ContentSection number="04 — THE RESULTS" title="Proof at Scale">
        <div className={s.sectionBody}>
          <p>This became one of the highest-impact consumer-facing features in Dollar General&apos;s digital history. The combination of partner integration, native design, and operational scale delivered results that validated the approach at every level.</p>
        </div>

        {/* ── Results Hero Devices ── */}
        <div className={s.deviceShowcaseHero}>
          <div className={`${s.heroDeviceCol} ${s.heroDeviceColAnnotated}`}>
            <span className={s.heroDeviceLabel}>Wallet</span>
            <div className={`${s.deviceFrame} ${s.heroDevice}`}>
              <div className={s.deviceNotch} />
              <div className={s.deviceScreen}>
                <img src="/assets/images/wallet-old.png" alt="myDG Wallet showing DG Cash balance and earnings" className={s.deviceScreenshot} />
              </div>

              {/* Left-side annotations */}
              <div className={s.heroAnnotation} style={{ top: '18%' }}>
                <div className={s.heroAnnotationLine} />
                <div className={s.heroAnnotationLabel}>
                  <strong>Cash Management</strong>
                  DG Cash balance, lifetime earnings, and spending power in one view
                </div>
              </div>

              <div className={s.heroAnnotation} style={{ top: '36%' }}>
                <div className={s.heroAnnotationLine} />
                <div className={s.heroAnnotationLabel}>
                  <strong>Quick Actions</strong>
                  How-to guides and saved deals accessible in a single tap
                </div>
              </div>

              <div className={s.heroAnnotation} style={{ top: '52%' }}>
                <div className={s.heroAnnotationLine} />
                <div className={s.heroAnnotationLabel}>
                  <strong>Activity Tracking</strong>
                  Full transaction history — earned, spent, and pending DG Cash
                </div>
              </div>
            </div>
          </div>
          <div className={s.heroDeviceCol} style={{ position: 'relative' }}>
            <span className={s.heroDeviceLabel}>Scan to Spend</span>
            <div className={`${s.deviceFrame} ${s.heroDevice}`}>
              <div className={s.deviceNotch} />
              <div className={s.deviceScreen}>
                <img src="/assets/images/wallet-scan-old.png" alt="Scan to Pay screen for spending DG Cash in-store" className={s.deviceScreenshot} />
              </div>

              {/* Right-side insight note */}
              <div className={s.heroInsight}>
                <div className={s.heroInsightCard}>
                  <strong>What This Validated</strong>
                  This wallet design confirmed the home for cashback within the myDG app — and opened the door for the full evolution of the myDG Wallet.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA to Wallet Case Study */}
        <div className={s.walletCta}>
          <a href="/case-study/wallet" className={s.walletCtaLink}>
            View myDG Wallet Case Study
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <ResultsGrid results={[
          { metric: '435M', label: 'Total deal clips across the platform', context: 'One of DG\u2019s highest-engagement features', featured: true },
          { metric: '$9M', label: 'Earned by Customers', context: 'Real savings, real loyalty' },
          { metric: '191%', label: 'YoY Clip Growth', context: 'Accelerating, not plateauing' },
          { metric: '209%', label: 'YoY Redemption Growth', context: 'Customers aren\u2019t just clipping \u2014 they\u2019re buying' },
          { metric: '12M+', label: 'Monthly Active Users', context: 'Cash back drives account creation and known customer growth' },
        ]} />

        <ExecQuote
          name="Chad Fox"
          role="Chief Marketing Officer, Dollar General"
          initials="CF"
          avatar="/assets/testimonials/chad-fox.jpg"
          text={`\u201CAs customers continue to seek new ways to stretch their budgets, we\u2019re excited to introduce DG Cash Back on hundreds of Dollar General items to help them achieve that goal.\u201D`}
          source="Press Release, Jul 2023"
        />
      </ContentSection>

      {/* ══════════ 05 — THE LEARNING ══════════ */}
      <ContentSection number="05 — THE LEARNING" title="Make the Feature Disappear">
        <div className={s.sectionBody}>
          <p>Partner integrations succeed when they feel native. The taxonomy decision — cleanly separating deals from coupons in the data model while presenting them together in the UI — made the Ibotta partnership feel like it had always been part of Dollar General. Customers didn&apos;t know it was powered by a partner. They didn&apos;t care. That&apos;s the bar.</p>
          <p>The lesson extends beyond this one partnership. Every integration, acquisition, or feature expansion should be evaluated against a single question: does it feel like it belongs here? If the answer is no, the experience is failing — regardless of how the numbers look.</p>
        </div>

        <PullQuote
          text="Design isn&apos;t about the feature. It&apos;s about making the feature disappear into the product."
          attr="Reflection — Cash Back Integration"
        />
      </ContentSection>

      {/* ══════════ Next Study ══════════ */}
      <NextStudy
        prevHref="/case-study/wallet"
        prevTitle="myDG Wallet"
        href="/case-study/swimlane-dashboards"
        title="Swimlane — SOAR Platform Design"
        desc="Led design across Swimlane's Security Orchestration, Automation & Response platform — from dashboards and analytics to workflow and design systems."
        metrics={[
          { value: 'A→C', label: 'Series' },
          { value: '0→1', label: 'UX Build' },
          { value: '6yr', label: 'Tenure' },
        ]}
      />
    </main>
  );
}
