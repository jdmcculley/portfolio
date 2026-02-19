import { NextRequest } from 'next/server';
import { generateHomeOg, generateCaseStudyOg, generateArticleOg } from '@/lib/og';

/* ── Page data registry ── */
const pages: Record<string, () => Promise<Response>> = {
  home: () =>
    generateHomeOg({
      title: 'JD McCulley',
      subtitle: 'Product Design Leader',
      description:
        'Building UX/AI teams that deliver at enterprise scale. 25+ years of design leadership with AI-augmented workflows.',
    }),

  /* Case studies */
  rba: () =>
    generateCaseStudyOg({
      title: 'Authentication Redesign Under Pressure',
      company: 'Dollar General',
      companyColor: '#fdd835',
      metrics: [
        { val: '25K+', lbl: 'Rescued' },
        { val: '75K', lbl: 'Prevented' },
        { val: '61%', lbl: 'Improvement' },
      ],
    }),
  cashback: () =>
    generateCaseStudyOg({
      title: 'Cash Back at Scale',
      company: 'Dollar General',
      companyColor: '#fdd835',
      metrics: [
        { val: '435M', lbl: 'Clips' },
        { val: '$9M', lbl: 'Savings' },
        { val: '191%', lbl: 'YoY Growth' },
      ],
    }),
  wallet: () =>
    generateCaseStudyOg({
      title: 'myDG Wallet Turnaround',
      company: 'Dollar General',
      companyColor: '#fdd835',
      metrics: [
        { val: '130%+', lbl: 'Engagement' },
        { val: '40%', lbl: 'Faster' },
        { val: '28%', lbl: 'Discovery' },
      ],
    }),
  cumberland: () =>
    generateCaseStudyOg({
      title: 'Cumberland Design System',
      company: 'Dollar General',
      companyColor: '#fdd835',
      metrics: [
        { val: '35%', lbl: 'Velocity' },
        { val: '89%', lbl: 'Consistency' },
        { val: '5-day', lbl: 'Onboarding' },
      ],
    }),
  swimlane: () =>
    generateCaseStudyOg({
      title: 'Improving Dashboard Experiences',
      company: 'Swimlane',
      companyColor: '#2196ff',
      metrics: [
        { val: 'A\u2192C', lbl: 'Series' },
        { val: '0\u21921', lbl: 'UX Build' },
        { val: '6yr', lbl: 'Tenure' },
      ],
    }),
  'swimlane-dashboards': () =>
    generateCaseStudyOg({
      title: 'SOAR Platform Design',
      company: 'Swimlane',
      companyColor: '#2196ff',
      metrics: [
        { val: 'A\u2192C', lbl: 'Series' },
        { val: '0\u21921', lbl: 'UX Build' },
        { val: '6yr', lbl: 'Tenure' },
      ],
    }),
  'swimlane-portfolio': () =>
    generateCaseStudyOg({
      title: 'Swimlane Portfolio',
      company: 'Swimlane',
      companyColor: '#2196ff',
    }),

  /* Articles */
  'design-led-ai': () =>
    generateArticleOg({
      title: 'Design-Led AI in Practice',
      description:
        'How I operate as creative director of AI-augmented output \u2014 compressing multi-sprint initiatives into weeks while raising the quality bar.',
    }),
  'job-search-strategy': () =>
    generateArticleOg({ title: 'Job Search Strategy' }),
  'interview-prep': () =>
    generateArticleOg({ title: 'Interview Prep' }),
};

export async function GET(req: NextRequest) {
  const page = req.nextUrl.searchParams.get('page') ?? 'home';
  const generator = pages[page];

  if (!generator) {
    return new Response('Unknown page', { status: 404 });
  }

  return generator();
}
