import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const OG_SIZE = { width: 1200, height: 630 };

/* ── Theme tokens (no CSS vars in Satori) ── */
const colors = {
  bg: '#0a0e1a',
  text: '#ffffff',
  textSoft: '#b1bad0',
  textMuted: '#4a5270',
  accent: '#00d4ff',
  secondary: '#4a7dff',
  border: 'rgba(255,255,255,0.08)',
};

/* ── Font loaders (local files — avoids fetch hang in webpack dev) ── */
let fontCache: { name: string; data: Buffer; weight: 700 | 400 }[] | null = null;

async function loadFonts() {
  if (fontCache) return fontCache;
  const dir = join(process.cwd(), 'src/lib/fonts');
  const [spaceGrotesk, inter] = await Promise.all([
    readFile(join(dir, 'SpaceGrotesk-Bold.ttf')),
    readFile(join(dir, 'Inter-Regular.ttf')),
  ]);
  fontCache = [
    { name: 'Space Grotesk', data: spaceGrotesk, weight: 700 as const },
    { name: 'Inter', data: inter, weight: 400 as const },
  ];
  return fontCache;
}

/* ── Shared layout pieces ── */
function GradientBar() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 6,
        background: `linear-gradient(90deg, ${colors.accent}, ${colors.secondary}, ${colors.accent})`,
      }}
    />
  );
}

function Badge({ children, color }: { children: string; color?: string }) {
  const c = color ?? colors.accent;
  return (
    <span
      style={{
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 400,
        letterSpacing: '2.5px',
        textTransform: 'uppercase',
        color: c,
        padding: '6px 16px',
        borderRadius: 6,
        border: `1px solid ${c}33`,
        background: `${c}12`,
      }}
    >
      {children}
    </span>
  );
}

function Branding() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginTop: 'auto',
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: `linear-gradient(135deg, ${colors.accent}, ${colors.secondary})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Space Grotesk',
          fontSize: 18,
          fontWeight: 700,
          color: colors.bg,
        }}
      >
        JD
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: 16,
            fontWeight: 700,
            color: colors.text,
            letterSpacing: '-0.3px',
          }}
        >
          JD McCulley
        </span>
        <span
          style={{
            fontFamily: 'Inter',
            fontSize: 13,
            color: colors.textMuted,
          }}
        >
          jdmcculley.com
        </span>
      </div>
    </div>
  );
}

/* ── Metric card ── */
function Metric({ val, lbl }: { val: string; lbl: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px 28px',
        borderRadius: 10,
        border: `1px solid ${colors.border}`,
        background: 'rgba(255,255,255,0.03)',
      }}
    >
      <span
        style={{
          fontFamily: 'Space Grotesk',
          fontSize: 28,
          fontWeight: 700,
          color: colors.accent,
          lineHeight: 1,
        }}
      >
        {val}
      </span>
      <span
        style={{
          fontFamily: 'Inter',
          fontSize: 12,
          color: colors.textMuted,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginTop: 6,
        }}
      >
        {lbl}
      </span>
    </div>
  );
}

/* ═══════════════════════════════════════
   Public generators
   ═══════════════════════════════════════ */

export interface OgHomeProps {
  title: string;
  subtitle: string;
  description: string;
}

export async function generateHomeOg({ title, subtitle, description }: OgHomeProps) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 72px',
          background: colors.bg,
          position: 'relative',
        }}
      >
        <GradientBar />
        <Badge>{subtitle}</Badge>
        <h1
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: 72,
            fontWeight: 700,
            color: colors.text,
            lineHeight: 1.1,
            letterSpacing: '-2px',
            marginTop: 32,
            marginBottom: 0,
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontFamily: 'Inter',
            fontSize: 22,
            color: colors.textSoft,
            lineHeight: 1.6,
            marginTop: 20,
            maxWidth: 800,
          }}
        >
          {description}
        </p>
        <Branding />
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}

export interface OgCaseStudyProps {
  title: string;
  company: string;
  companyColor?: string;
  metrics?: { val: string; lbl: string }[];
}

export async function generateCaseStudyOg({ title, company, companyColor, metrics }: OgCaseStudyProps) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 72px',
          background: colors.bg,
          position: 'relative',
        }}
      >
        <GradientBar />
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Badge>Case Study</Badge>
          <Badge color={companyColor}>{company}</Badge>
        </div>
        <h1
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: 56,
            fontWeight: 700,
            color: colors.text,
            lineHeight: 1.15,
            letterSpacing: '-1.5px',
            marginTop: 32,
            marginBottom: 0,
            maxWidth: 900,
          }}
        >
          {title}
        </h1>
        {metrics && metrics.length > 0 && (
          <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
            {metrics.map((m) => (
              <Metric key={m.lbl} val={m.val} lbl={m.lbl} />
            ))}
          </div>
        )}
        <Branding />
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}

export interface OgArticleProps {
  title: string;
  description?: string;
}

export async function generateArticleOg({ title, description }: OgArticleProps) {
  const fonts = await loadFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '60px 72px',
          background: colors.bg,
          position: 'relative',
        }}
      >
        <GradientBar />
        <Badge>Article</Badge>
        <h1
          style={{
            fontFamily: 'Space Grotesk',
            fontSize: 60,
            fontWeight: 700,
            color: colors.text,
            lineHeight: 1.15,
            letterSpacing: '-1.5px',
            marginTop: 32,
            marginBottom: 0,
            maxWidth: 900,
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: 22,
              color: colors.textSoft,
              lineHeight: 1.6,
              marginTop: 20,
              maxWidth: 800,
            }}
          >
            {description}
          </p>
        )}
        <Branding />
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
