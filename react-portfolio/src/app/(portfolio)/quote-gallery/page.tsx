import { type Metadata } from 'next';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import Image from 'next/image';
import s from './gallery.module.css';

export const metadata: Metadata = {
  title: 'Quote Card Gallery — JD McCulley',
};

/* ── Shared quote data ── */
const quote = {
  name: 'Emily Taylor',
  role: 'EVP & Chief Merchandising Officer, Dollar General',
  roleShort: 'EVP & Chief Merchandising Officer',
  text: '\u201CWe are excited to provide an additional innovative option for our customers to help stretch their budgets. Ibotta\u2019s cash back rewards program further complements our continuous efforts to provide financial offerings and rewards to customers alongside our everyday low prices.\u201D',
  source: 'Partnership Announcement, Jan 2023',
  sourceShort: 'Jan 2023',
  sourceTag: 'Partnership Announcement \u00B7 Jan 2023',
  image: '/assets/testimonials/emily-taylor.png',
};

export default function QuoteGalleryPage() {
  return (
    <main>
      {/* ══════════ HEADER ══════════ */}
      <ScrollReveal>
        <header className={s.galleryHeader}>
          <p className={s.galleryLabel}>Quote Treatment Options</p>
          <h1 className={s.galleryTitle}>Executive Quote Card Gallery</h1>
          <p className={s.gallerySubtitle}>
            Six variations using your tech theme &mdash; pick a direction
          </p>
        </header>
      </ScrollReveal>

      {/* ══════════ GALLERY GRID ══════════ */}
      <div className={s.galleryGrid}>

        {/* ── Option 1: Side-by-Side (Current) ── */}
        <ScrollReveal>
          <div className={s.optionCard}>
            <div className={s.optionLabel}>
              <span className={s.optionNumber}>Option 01</span>
              <span className={s.optionName}>Side-by-Side (Current)</span>
            </div>
            <div className={s.optionBody}>
              <div className={s.v1}>
                <Image
                  src={quote.image}
                  alt={quote.name}
                  width={56}
                  height={56}
                  className={s.avatar}
                />
                <div className={s.v1Body}>
                  <p className={s.quoteText}>{quote.text}</p>
                  <span className={s.quoteName}>{quote.name}</span>
                  <span className={s.quoteRole}>{quote.role}</span>
                  <span className={s.quoteSource}>{quote.source}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Option 2: Centered Stack ── */}
        <ScrollReveal>
          <div className={s.optionCard}>
            <div className={s.optionLabel}>
              <span className={s.optionNumber}>Option 02</span>
              <span className={s.optionName}>Centered Stack</span>
            </div>
            <div className={s.optionBody}>
              <div className={s.v2}>
                <Image
                  src={quote.image}
                  alt={quote.name}
                  width={56}
                  height={56}
                  className={s.avatar}
                />
                <p className={s.quoteText}>{quote.text}</p>
                <div className={s.v2Divider} />
                <span className={s.quoteName}>{quote.name}</span>
                <span className={s.quoteRole}>{quote.role}</span>
                <span className={s.quoteSource}>{quote.source}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Option 3: Big Quote + Meta Header ── */}
        <ScrollReveal>
          <div className={s.optionCard}>
            <div className={s.optionLabel}>
              <span className={s.optionNumber}>Option 03</span>
              <span className={s.optionName}>Big Quote + Meta Header</span>
            </div>
            <div className={s.optionBody}>
              <div className={s.v3Header}>
                <Image
                  src={quote.image}
                  alt={quote.name}
                  width={56}
                  height={56}
                  className={s.avatar}
                />
                <div className={s.v3HeaderMeta}>
                  <span className={s.quoteName}>{quote.name}</span>
                  <span className={s.quoteRole}>{quote.role}</span>
                </div>
              </div>
              <p className={s.v3Quote}>{quote.text}</p>
              <div className={s.v3Source}>{quote.source}</div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Option 4: Left-bar Inline ── */}
        <ScrollReveal>
          <div className={s.optionCard}>
            <div className={s.optionLabel}>
              <span className={s.optionNumber}>Option 04</span>
              <span className={s.optionName}>Left-bar Inline</span>
            </div>
            <div className={s.optionBody}>
              <div className={s.v4}>
                <p className={s.v4Quote}>{quote.text}</p>
                <div className={s.v4Footer}>
                  <Image
                    src={quote.image}
                    alt={quote.name}
                    width={56}
                    height={56}
                    className={s.avatar}
                  />
                  <div className={s.v4Meta}>
                    <span className={s.quoteName}>{quote.name}</span>
                    <span className={s.quoteRole}>{quote.roleShort}</span>
                  </div>
                  <span className={s.v4Dot} />
                  <span className={s.quoteSource}>{quote.sourceShort}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Option 5: Split Pane ── */}
        <ScrollReveal>
          <div className={s.optionCard}>
            <div className={s.optionLabel}>
              <span className={s.optionNumber}>Option 05</span>
              <span className={s.optionName}>Split Pane</span>
            </div>
            <div className={s.v5}>
              <div className={s.v5Photo}>
                <Image
                  src={quote.image}
                  alt={quote.name}
                  width={72}
                  height={72}
                  className={s.v5PhotoAvatar}
                />
              </div>
              <div className={s.v5Content}>
                <p className={s.v5Quote}>{quote.text}</p>
                <div className={s.v5Meta}>
                  <span className={s.quoteName}>{quote.name}</span>
                  <span className={s.quoteRole}>{quote.role}</span>
                  <span className={s.quoteSource}>{quote.source}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Option 6: Glass Card + Rounded Square ── */}
        <ScrollReveal>
          <div className={s.optionCard}>
            <div className={s.optionLabel}>
              <span className={s.optionNumber}>Option 06</span>
              <span className={s.optionName}>Glass Card + Rounded Square</span>
            </div>
            <div className={s.optionBody}>
              <div className={s.v6}>
                <div className={s.v6Header}>
                  <Image
                    src={quote.image}
                    alt={quote.name}
                    width={52}
                    height={52}
                    className={s.v6Avatar}
                  />
                  <div className={s.v6HeaderMeta}>
                    <span className={s.quoteName}>{quote.name}</span>
                    <span className={s.quoteRole}>{quote.role}</span>
                    <span className={s.v6SourceTag}>{quote.sourceTag}</span>
                  </div>
                </div>
                <p className={s.v6Quote}>{quote.text}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
