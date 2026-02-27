/**
 * Articles data model — single source of truth for the articles listing.
 *
 * Each article maps to a route under /articles/[slug].
 * The index page (/articles) reads this array to render the card grid.
 *
 * When you add a new article page, add an entry here and the listing
 * updates automatically.
 */

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;          // ISO date for sorting
  readTime: string;      // e.g. "8 min read"
  tags: string[];
  featured?: boolean;
  protected?: boolean;
}

export const articles: Article[] = [
  {
    slug: 'design-systems-are-the-api',
    title: 'Design Systems Are the API Now',
    description:
      'Why the design-code gap was never about skill, how tools like Pencil.dev are compressing the translation layer, and what this means for design systems and AI-augmented workflows.',
    date: '2026-02-25',
    readTime: '7 min read',
    tags: ['Design Systems', 'Design-Code Convergence', 'AI Workflows'],
  },
  {
    slug: 'design-led-ai',
    title: 'Design-Led AI in Practice',
    description:
      'How I operate as creative director of an AI-augmented design process — orchestrating Claude Code, Code to Canvas, and automated pipelines to multiply a small team\'s capacity.',
    date: '2026-02-10',
    readTime: '12 min read',
    tags: ['AI Workflow', 'Design Leadership', 'Code to Canvas'],
    featured: true,
  },
  {
    slug: 'emergent-design',
    title: 'Design Didn\'t Disappear — It Relocated',
    description:
      'Why the designer\'s job isn\'t disappearing — it\'s relocating. On where design work actually lives in the age of AI.',
    date: '2026-02-15',
    readTime: '8 min read',
    tags: ['Design Leadership', 'AI', 'Emergent Design'],
  },
  {
    slug: 'design-process-timeline',
    title: 'Design Process Timeline',
    description:
      'A visual walkthrough of my design process evolution — from traditional waterfall to AI-augmented sprints across 25 years of practice.',
    date: '2026-02-05',
    readTime: '8 min read',
    tags: ['Design Process', 'Career', 'Evolution'],
  },
  {
    slug: 'interview-prep',
    title: 'Interview Preparation Framework',
    description:
      'The 3-level answer framework, modular story bank, and AI narrative approach I use to prepare for design leadership interviews.',
    date: '2026-01-28',
    readTime: '10 min read',
    tags: ['Interview', 'Career Strategy', 'Frameworks'],
    protected: true,
  },
  {
    slug: 'job-search-strategy',
    title: 'Job Search Strategy',
    description:
      'Positioning, target role analysis, and the systematic approach to finding the right design leadership opportunity.',
    date: '2026-01-20',
    readTime: '9 min read',
    tags: ['Job Search', 'Strategy', 'Positioning'],
    protected: true,
  },
];

/** Articles sorted newest-first */
export const sortedArticles = [...articles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
