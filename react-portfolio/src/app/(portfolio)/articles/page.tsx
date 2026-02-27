import { type Metadata } from 'next';
import Link from 'next/link';
import { Lock } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Badge } from '@/components/ui/Badge';
import { sortedArticles } from '@/data/articles';
import s from './articles-index.module.css';

export const metadata: Metadata = {
  title: 'Articles — JD McCulley',
  description: 'Thinking on design leadership, AI-augmented workflows, and building products at scale.',
  openGraph: { images: [{ url: '/api/og/?page=articles', width: 1200, height: 630 }] },
};

export default function ArticlesIndexPage() {
  return (
    <main className={s.page}>
      <Container>
        {/* ── Hero ── */}
        <ScrollReveal>
          <SectionHeader
            label="ARTICLES"
            heading="Thinking Out Loud"
            sub="Design leadership, AI-augmented workflows, and lessons from building products at scale."
          />
        </ScrollReveal>

        {/* ── Article Grid ── */}
        <div className={s.grid}>
          {sortedArticles.filter((a) => !a.hidden).map((article, i) => (
            <ScrollReveal key={article.slug} delay={i * 0.1}>
              <Link href={`/articles/${article.slug}`} className={s.card}>
                {article.featured && (
                  <span className={s.featuredBadge}>Featured</span>
                )}
                {article.protected && (
                  <span className={s.protectedBadge}>
                    <Lock size={10} />
                    Protected
                  </span>
                )}

                <div className={s.cardContent}>
                  <div className={s.cardMeta}>
                    <time className={s.cardDate}>
                      {new Date(article.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                    <span className={s.cardDot}>&middot;</span>
                    <span className={s.cardReadTime}>{article.readTime}</span>
                  </div>

                  <h2 className={s.cardTitle}>{article.title}</h2>
                  <p className={s.cardDesc}>{article.description}</p>

                  <div className={s.cardTags}>
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="tag">{tag}</Badge>
                    ))}
                  </div>
                </div>

                <div className={s.cardArrow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
