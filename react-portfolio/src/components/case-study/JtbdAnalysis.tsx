import s from '@/app/(portfolio)/case-study/case-study.module.css';

/* ── Priority color map ── */
const PRIORITY = {
  critical: { dot: '#ff5050', bg: 'rgba(255, 80, 80, 0.10)', border: 'rgba(255, 80, 80, 0.25)', text: '#ff5050' },
  important: { dot: '#fbbf24', bg: 'rgba(251, 191, 36, 0.10)', border: 'rgba(251, 191, 36, 0.25)', text: '#fbbf24' },
  helpful:   { dot: '#34d399', bg: 'rgba(52, 211, 153, 0.10)', border: 'rgba(52, 211, 153, 0.25)', text: '#34d399' },
} as const;

type Priority = keyof typeof PRIORITY;

/* ── Data types ── */
interface Job {
  id: string;
  priority: Priority;
  title: string;
  expanded?: boolean;
  when?: string;
  want?: string;
  so?: string;
  userTypes?: string[];
  motivations?: string[];
  successMetric?: string;
  refs?: string[];
}

interface Journey {
  num: number;
  name: string;
  subtitle: string;
  critical: number;
  important: number;
  helpful: number;
  totalJobs: number;
  expanded: boolean;
  jobs: Job[];
}

/* ── Hardcoded JTBD data from the RBA analysis ── */
const JOURNEYS: Journey[] = [
  {
    num: 1, name: 'Trusted Device', subtitle: 'Silent bypass for previously trusted devices',
    critical: 1, important: 1, helpful: 2, totalJobs: 4, expanded: true,
    jobs: [
      { id: 'J1.2', priority: 'critical', title: 'Access Account from Trusted Device Without Friction' },
      {
        id: 'J2.1', priority: 'important', title: 'Understand Why Verification Is Needed',
        expanded: true,
        when: "I'm asked to verify my device or identity",
        want: 'see a clear explanation of why this is happening',
        so: "understand it's for my security and not feel frustrated",
        userTypes: ['Any User'],
        motivations: ['Clarity', 'Trust'],
        successMetric: '<10% confusion/support contacts about "why"',
        refs: ['Journey 2: Phone', 'Journey 3: Email', 'Journey 4: Re-auth', 'Journey 5: Care', 'Journey 6: Partial Reg', 'Journey 7: Prerequisites'],
      },
      { id: 'J3.1', priority: 'helpful', title: 'Manage My Trusted Devices' },
      { id: 'J3.2', priority: 'helpful', title: 'Be Notified When Devices Are Trusted' },
    ],
  },
  {
    num: 2, name: 'Phone Verification', subtitle: 'SMS/voice code with retry logic',
    critical: 1, important: 2, helpful: 1, totalJobs: 4, expanded: false, jobs: [],
  },
];

/* ── Sub-components ── */

function PriorityDots({ critical, important, helpful }: { critical: number; important: number; helpful: number }) {
  return (
    <div className={s.jtbdJourneyBadges}>
      {critical > 0 && (
        <span className={s.jtbdBadge}>
          <span className={s.jtbdBadgeDot} style={{ background: PRIORITY.critical.dot }} />
          {critical}
        </span>
      )}
      {important > 0 && (
        <span className={s.jtbdBadge}>
          <span className={s.jtbdBadgeDot} style={{ background: PRIORITY.important.dot }} />
          {important}
        </span>
      )}
      {helpful > 0 && (
        <span className={s.jtbdBadge}>
          <span className={s.jtbdBadgeDot} style={{ background: PRIORITY.helpful.dot }} />
          {helpful}
        </span>
      )}
    </div>
  );
}

function JobCard({ job }: { job: Job }) {
  const p = PRIORITY[job.priority];

  if (job.expanded) {
    return (
      <div className={`${s.jtbdJob} ${s.jtbdJobExpanded}`} style={{ borderColor: p.border }}>
        {/* Head row */}
        <div className={s.jtbdJobExpandedHead}>
          <span className={s.jtbdJobId}>{job.id}</span>
          <span className={s.jtbdJobPriority} style={{ background: p.bg, color: p.text, border: `1px solid ${p.border}` }}>
            {job.priority}
          </span>
        </div>

        {/* Title */}
        <div className={s.jtbdJobTitle} style={{ marginBottom: 8, fontSize: 11, fontWeight: 500, color: 'var(--text)' }}>
          {job.title}
        </div>

        {/* User story */}
        <div className={s.jtbdStory}>
          <div className={s.jtbdStoryLine}>
            <span className={s.jtbdStoryLabel}>When </span>
            <span className={s.jtbdStoryValue}>{job.when}</span>
          </div>
          <div className={s.jtbdStoryLine}>
            <span className={s.jtbdStoryLabel}>I want to </span>
            <span className={s.jtbdStoryValue}>{job.want}</span>
          </div>
          <div className={s.jtbdStoryLine}>
            <span className={s.jtbdStoryLabel}>So I can </span>
            <span className={s.jtbdStoryValue}>{job.so}</span>
          </div>
        </div>

        {/* Metadata grid */}
        <div className={s.jtbdMeta}>
          {job.userTypes && (
            <div>
              <div className={s.jtbdMetaLabel}>User Types</div>
              <div className={s.jtbdMetaTags}>
                {job.userTypes.map(t => <span key={t} className={s.jtbdMetaTag}>{t}</span>)}
              </div>
            </div>
          )}
          {job.motivations && (
            <div>
              <div className={s.jtbdMetaLabel}>Motivations</div>
              <div className={s.jtbdMetaTags}>
                {job.motivations.map(m => <span key={m} className={s.jtbdMetaTag}>{m}</span>)}
              </div>
            </div>
          )}
          {job.successMetric && (
            <div className={s.jtbdMetaFull}>
              <div className={s.jtbdMetaLabel}>Success Metric</div>
              <div className={s.jtbdMetaValue}>{job.successMetric}</div>
            </div>
          )}
        </div>

        {/* Cross-journey refs */}
        {job.refs && job.refs.length > 0 && (
          <div className={s.jtbdRefs}>
            <div className={s.jtbdRefsLabel}>Also applies to</div>
            <div className={s.jtbdRefsTags}>
              {job.refs.map(r => <span key={r} className={s.jtbdRefTag}>{r}</span>)}
            </div>
          </div>
        )}
      </div>
    );
  }

  /* Collapsed job */
  return (
    <div className={s.jtbdJob}>
      <span className={s.jtbdJobId}>{job.id}</span>
      <span className={s.jtbdJobPriority} style={{ background: p.bg, color: p.text, border: `1px solid ${p.border}` }}>
        {job.priority}
      </span>
      <span className={s.jtbdJobTitle}>{job.title}</span>
    </div>
  );
}

function JourneyBlock({ journey }: { journey: Journey }) {
  return (
    <div className={`${s.jtbdJourney} ${journey.expanded ? s.jtbdJourneyExpanded : ''}`}>
      <div className={s.jtbdJourneyHead}>
        <div className={s.jtbdJourneyNum}>{journey.num}</div>
        <div className={s.jtbdJourneyInfo}>
          <div className={s.jtbdJourneyName}>{journey.name}</div>
          <div className={s.jtbdJourneySub}>{journey.subtitle}</div>
        </div>
        <PriorityDots critical={journey.critical} important={journey.important} helpful={journey.helpful} />
        <span className={s.jtbdJourneyCount}>{journey.totalJobs}</span>
      </div>

      {/* Expandable job list */}
      <div className={`${s.jtbdJobs} ${journey.expanded ? s.jtbdJobsOpen : ''}`}>
        <div className={s.jtbdJobsInner}>
          <div className={s.jtbdJobsList}>
            {journey.jobs.map(job => <JobCard key={job.id} job={job} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main component ── */
export function JtbdAnalysis() {
  return (
    <div className={s.jtbdContainer}>
      {/* Header */}
      <div className={s.jtbdHeader}>
        <div className={s.jtbdDot} />
        <span className={s.jtbdLabel}>JTBD Analysis</span>
        <span className={s.jtbdStat}>33 Jobs &middot; 8 Journeys</span>
      </div>

      {/* Journey blocks */}
      <div className={s.jtbdJourneys}>
        {JOURNEYS.map(j => <JourneyBlock key={j.num} journey={j} />)}
      </div>

      {/* More indicator */}
      <div className={s.jtbdMore}>
        <span className={s.jtbdMoreLabel}>+6 more journeys</span>
      </div>
    </div>
  );
}
