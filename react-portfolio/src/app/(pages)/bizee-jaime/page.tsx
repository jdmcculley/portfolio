'use client';

import { useRef, useEffect } from 'react';
import { Workflow, Sparkles, Heart } from 'lucide-react';
import s from './bizee.module.css';

// ─── SVG Visuals ─────────────────────────────────────────────────────────────

function NetworkVisual() {
  return (
    <div className={s.visNetwork}>
      <div className={s.visNetworkGlow} />
      <svg className={s.visNetworkSvg} viewBox="0 0 560 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="netHub" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.9" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="netHubB" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.7" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="netBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient background glow */}
        <ellipse cx="280" cy="190" rx="220" ry="160" fill="url(#netBg)" />

        {/* Outer ring */}
        <circle cx="280" cy="190" r="160" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.06" strokeDasharray="4 8" />
        <circle cx="280" cy="190" r="120" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.08" strokeDasharray="2 6" />
        <circle cx="280" cy="190" r="80" stroke="var(--accent)" strokeWidth="0.5" strokeOpacity="0.10" />

        {/* Primary connections from hub */}
        <line x1="280" y1="190" x2="100" y2="70"  stroke="var(--accent)"    strokeWidth="1.2" strokeOpacity="0.22" />
        <line x1="280" y1="190" x2="440" y2="80"  stroke="var(--accent)"    strokeWidth="1.2" strokeOpacity="0.22" />
        <line x1="280" y1="190" x2="480" y2="290" stroke="var(--accent)"    strokeWidth="1.0" strokeOpacity="0.18" />
        <line x1="280" y1="190" x2="80"  y2="300" stroke="var(--secondary)" strokeWidth="1.0" strokeOpacity="0.18" />
        <line x1="280" y1="190" x2="200" y2="330" stroke="var(--secondary)" strokeWidth="0.8" strokeOpacity="0.14" />
        <line x1="280" y1="190" x2="390" y2="340" stroke="var(--accent)"    strokeWidth="0.8" strokeOpacity="0.14" />
        <line x1="280" y1="190" x2="40"  y2="170" stroke="var(--accent)"    strokeWidth="0.7" strokeOpacity="0.12" />
        <line x1="280" y1="190" x2="520" y2="170" stroke="var(--secondary)" strokeWidth="0.7" strokeOpacity="0.12" />
        <line x1="280" y1="190" x2="280" y2="30"  stroke="var(--accent)"    strokeWidth="0.8" strokeOpacity="0.14" />

        {/* Secondary connections (node-to-node) */}
        <line x1="100" y1="70"  x2="440" y2="80"  stroke="var(--accent)"    strokeWidth="0.6" strokeOpacity="0.10" />
        <line x1="440" y1="80"  x2="480" y2="290" stroke="var(--secondary)" strokeWidth="0.5" strokeOpacity="0.08" />
        <line x1="480" y1="290" x2="390" y2="340" stroke="var(--accent)"    strokeWidth="0.5" strokeOpacity="0.08" />
        <line x1="80"  y1="300" x2="200" y2="330" stroke="var(--accent)"    strokeWidth="0.5" strokeOpacity="0.08" />
        <line x1="100" y1="70"  x2="40"  y2="170" stroke="var(--secondary)" strokeWidth="0.4" strokeOpacity="0.07" />
        <line x1="440" y1="80"  x2="520" y2="170" stroke="var(--accent)"    strokeWidth="0.4" strokeOpacity="0.07" />
        <line x1="280" y1="30"  x2="100" y2="70"  stroke="var(--secondary)" strokeWidth="0.4" strokeOpacity="0.07" />
        <line x1="280" y1="30"  x2="440" y2="80"  stroke="var(--accent)"    strokeWidth="0.4" strokeOpacity="0.07" />

        {/* Tertiary satellite nodes */}
        <circle cx="30"  cy="120" r="3"   fill="var(--accent)"    fillOpacity="0.25" />
        <circle cx="55"  cy="60"  r="2"   fill="var(--secondary)" fillOpacity="0.20" />
        <circle cx="330" cy="20"  r="2.5" fill="var(--accent)"    fillOpacity="0.22" />
        <circle cx="500" cy="50"  r="2"   fill="var(--secondary)" fillOpacity="0.20" />
        <circle cx="530" cy="240" r="3"   fill="var(--accent)"    fillOpacity="0.20" />
        <circle cx="450" cy="350" r="2"   fill="var(--secondary)" fillOpacity="0.18" />
        <circle cx="140" cy="360" r="2.5" fill="var(--accent)"    fillOpacity="0.18" />
        <circle cx="30"  cy="340" r="2"   fill="var(--accent)"    fillOpacity="0.15" />

        {/* Primary satellite nodes */}
        <circle cx="100" cy="70"  r="9"  fill="var(--secondary)" fillOpacity="0.12" stroke="var(--secondary)" strokeWidth="1" strokeOpacity="0.45" />
        <circle cx="100" cy="70"  r="4"  fill="var(--secondary)" fillOpacity="0.65" />

        <circle cx="440" cy="80"  r="11" fill="var(--accent)"    fillOpacity="0.10" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.40" />
        <circle cx="440" cy="80"  r="5"  fill="var(--accent)"    fillOpacity="0.60" />

        <circle cx="480" cy="290" r="8"  fill="var(--secondary)" fillOpacity="0.12" stroke="var(--secondary)" strokeWidth="1" strokeOpacity="0.40" />
        <circle cx="480" cy="290" r="4"  fill="var(--secondary)" fillOpacity="0.55" />

        <circle cx="80"  cy="300" r="7"  fill="var(--accent)"    fillOpacity="0.12" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.35" />
        <circle cx="80"  cy="300" r="3"  fill="var(--accent)"    fillOpacity="0.50" />

        <circle cx="200" cy="330" r="6"  fill="var(--secondary)" fillOpacity="0.12" stroke="var(--secondary)" strokeWidth="1" strokeOpacity="0.30" />
        <circle cx="200" cy="330" r="3"  fill="var(--secondary)" fillOpacity="0.45" />

        <circle cx="390" cy="340" r="7"  fill="var(--accent)"    fillOpacity="0.10" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.30" />
        <circle cx="390" cy="340" r="3"  fill="var(--accent)"    fillOpacity="0.45" />

        <circle cx="40"  cy="170" r="5"  fill="var(--accent)"    fillOpacity="0.10" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.30" />
        <circle cx="40"  cy="170" r="2.5" fill="var(--accent)"   fillOpacity="0.40" />

        <circle cx="520" cy="170" r="6"  fill="var(--secondary)" fillOpacity="0.10" stroke="var(--secondary)" strokeWidth="0.8" strokeOpacity="0.28" />
        <circle cx="520" cy="170" r="3"  fill="var(--secondary)" fillOpacity="0.40" />

        <circle cx="280" cy="30"  r="6"  fill="var(--accent)"    fillOpacity="0.12" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.35" />
        <circle cx="280" cy="30"  r="3"  fill="var(--accent)"    fillOpacity="0.50" />

        {/* Hub center — concentric glow rings */}
        <circle cx="280" cy="190" r="40" fill="url(#netHub)" />
        <circle cx="280" cy="190" r="26" fill="rgba(0,212,255,0.08)" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.30" />
        <circle cx="280" cy="190" r="16" fill="rgba(0,212,255,0.15)" stroke="var(--accent)" strokeWidth="1.4" strokeOpacity="0.55" />
        <circle cx="280" cy="190" r="8"  fill="rgba(0,212,255,0.55)" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.80" />
        <circle cx="280" cy="190" r="3.5" fill="var(--accent)" fillOpacity="1" style={{ filter: 'drop-shadow(0 0 8px var(--accent))' }} />
      </svg>
    </div>
  );
}

function GrowthArcVisual() {
  const milestones = [
    { x: 20,  y: 195, label: 'Series A',    anchor: 'middle', dy: 16  },
    { x: 190, y: 180, label: 'Series B',    anchor: 'middle', dy: 16  },
    { x: 380, y: 155, label: 'Series C',    anchor: 'middle', dy: 16  },
    { x: 570, y: 108, label: 'DG 6M MAU',  anchor: 'end',    dy: -8  },
    { x: 740, y: 52,  label: 'DG 12M+ MAU', anchor: 'end',   dy: -10 },
  ];
  return (
    <div className={s.visGrowth}>
      <div className={s.visGrowthGlow} />
      <svg className={s.visGrowthSvg} viewBox="0 0 760 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="growthLine" x1="0" y1="0" x2="760" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="var(--accent)" stopOpacity="0.05" />
            <stop offset="40%"  stopColor="var(--accent)" stopOpacity="0.40" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="var(--accent)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[40, 80, 120, 160].map(y => (
          <line key={y} x1="20" y1={y} x2="740" y2={y}
            stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.07" />
        ))}
        {/* Vertical divider between Swimlane and DG eras */}
        <line x1="475" y1="20" x2="475" y2="205"
          stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.12" strokeDasharray="4 5" />

        {/* Era labels */}
        <text x="220" y="18" fill="rgba(0,212,255,0.60)" fontSize="10" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" letterSpacing="1">SWIMLANE</text>
        <text x="620" y="18" fill="rgba(0,212,255,0.80)" fontSize="10" fontFamily="'JetBrains Mono', monospace" textAnchor="middle" letterSpacing="1">DOLLAR GENERAL</text>

        {/* Main fill */}
        <path d="M20 195 Q180 185 380 155 Q550 120 740 52 L740 210 L20 210 Z"
          fill="url(#growthFill)" />

        {/* Main growth curve */}
        <path d="M20 195 Q180 185 380 155 Q550 120 740 52"
          stroke="url(#growthLine)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Milestone dots with glow rings */}
        {milestones.map(({ x, y }, i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={15} fill="var(--accent)" fillOpacity="0.05" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity={0.10 + i * 0.04} />
            <circle cx={x} cy={y} r={5} fill="var(--accent)" fillOpacity={0.50 + i * 0.09}
              style={i === 4 ? { filter: 'drop-shadow(0 0 8px var(--accent))' } : undefined} />
          </g>
        ))}

        {/* Milestone labels */}
        {milestones.map(({ x, y, label, anchor, dy }, i) => (
          <text key={i} x={anchor === 'end' ? x - 10 : x} y={y + dy}
            fill="rgba(0,212,255,0.85)" fontSize="10"
            fontFamily="'JetBrains Mono', monospace" textAnchor={anchor} letterSpacing="0.5">
            {label}
          </text>
        ))}

        {/* Axis tick marks */}
        {milestones.map(({ x }) => (
          <line key={x} x1={x} y1="206" x2={x} y2="212"
            stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.25" />
        ))}
      </svg>
    </div>
  );
}

function VennVisual() {
  return (
    <div className={s.visVenn}>
      <div className={s.visVennGlow} />
      <svg className={s.visVennSvg} viewBox="0 0 600 440" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="vennCenter" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--accent)" stopOpacity="0.70" />
            <stop offset="60%"  stopColor="var(--accent)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="vennA" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--secondary)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="vennB" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--accent)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="vennC" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="var(--secondary)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--secondary)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Circle A — Service Design (top) */}
        <circle cx="300" cy="158" r="155" fill="url(#vennA)" />
        <circle cx="300" cy="158" r="155"
          stroke="var(--secondary)" strokeWidth="1.5" strokeOpacity="0.32" fill="none" />
        <circle cx="300" cy="158" r="155"
          stroke="var(--secondary)" strokeWidth="8" strokeOpacity="0.04" fill="none" />

        {/* Circle B — Customer Psychology (bottom-left) */}
        <circle cx="194" cy="308" r="155" fill="url(#vennB)" />
        <circle cx="194" cy="308" r="155"
          stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.28" fill="none" />
        <circle cx="194" cy="308" r="155"
          stroke="var(--accent)" strokeWidth="8" strokeOpacity="0.04" fill="none" />

        {/* Circle C — AI Patterns (bottom-right) */}
        <circle cx="406" cy="308" r="155" fill="url(#vennC)" />
        <circle cx="406" cy="308" r="155"
          stroke="var(--secondary)" strokeWidth="1.5" strokeOpacity="0.28" fill="none" />
        <circle cx="406" cy="308" r="155"
          stroke="var(--secondary)" strokeWidth="8" strokeOpacity="0.04" fill="none" />

        {/* Center intersection glow layers */}
        <circle cx="300" cy="262" r="72"  fill="url(#vennCenter)" />
        <circle cx="300" cy="262" r="50"  fill="rgba(0,212,255,0.10)"
          stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.35" />
        <circle cx="300" cy="262" r="30"  fill="rgba(0,212,255,0.20)"
          stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.55" />
        <circle cx="300" cy="262" r="14"  fill="rgba(0,212,255,0.50)"
          stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.80" />
        <circle cx="300" cy="262" r="5"   fill="var(--accent)" fillOpacity="1"
          style={{ filter: 'drop-shadow(0 0 12px var(--accent))' }} />

        {/* Circle labels */}
        <text x="300" y="88" fill="var(--secondary)" fillOpacity="0.70" fontSize="13" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.5">Service Design</text>
        <text x="148" y="370" fill="var(--accent)" fillOpacity="0.65" fontSize="13" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.5">Customer Psychology</text>
        <text x="452" y="370" fill="var(--secondary)" fillOpacity="0.65" fontSize="13" fontFamily="'Space Grotesk', sans-serif" fontWeight="600" textAnchor="middle" letterSpacing="0.5">AI Patterns</text>
      </svg>
    </div>
  );
}

function PipelineVisual() {
  return (
    <div className={s.visPipeline}>
      <svg className={s.visPipelineSvg} viewBox="0 0 340 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pipeGrad" x1="0" y1="0" x2="340" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="var(--secondary)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--accent)"    stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Connector lines */}
        <line x1="92"  y1="60" x2="128" y2="60" stroke="url(#pipeGrad)" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="4 4" />
        <line x1="212" y1="60" x2="248" y2="60" stroke="url(#pipeGrad)" strokeWidth="1.5" strokeOpacity="0.7" strokeDasharray="4 4" />

        {/* Arrowheads */}
        <path d="M124 54 L132 60 L124 66" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.55" fill="none" strokeLinecap="round" />
        <path d="M244 54 L252 60 L244 66" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.75" fill="none" strokeLinecap="round" />

        {/* Node 1 — Figma */}
        <rect x="6" y="18" width="86" height="84" rx="12"
          fill="rgba(74,125,255,0.10)" stroke="var(--secondary)" strokeWidth="1.2" strokeOpacity="0.50" />
        {/* Figma-like pen diamond icon */}
        <path d="M49 34 L40 52 L49 70 L58 52 Z"
          stroke="var(--secondary)" strokeWidth="1.4" strokeOpacity="0.65" fill="none" strokeLinejoin="round" />
        <circle cx="49" cy="52" r="6"
          fill="rgba(74,125,255,0.20)" stroke="var(--secondary)" strokeWidth="1" strokeOpacity="0.70" />
        <circle cx="49" cy="52" r="2.5" fill="var(--secondary)" fillOpacity="0.80" />

        {/* Node 2 — Claude */}
        <rect x="128" y="18" width="84" height="84" rx="12"
          fill="rgba(0,212,255,0.08)" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.65" />
        {/* Neural orbit icon */}
        <circle cx="170" cy="60" r="14"
          stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.35" fill="none" />
        <circle cx="170" cy="60" r="8"
          stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.55" fill="rgba(0,212,255,0.10)" />
        <circle cx="170" cy="60" r="3.5" fill="var(--accent)" fillOpacity="0.85" style={{ filter: 'drop-shadow(0 0 5px var(--accent))' }} />
        <line x1="170" y1="41" x2="170" y2="35" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.40" />
        <line x1="170" y1="79" x2="170" y2="85" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.40" />
        <line x1="189" y1="60" x2="195" y2="60" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.40" />
        <line x1="151" y1="60" x2="145" y2="60" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.40" />

        {/* Node 3 — Code */}
        <rect x="248" y="18" width="86" height="84" rx="12"
          fill="rgba(0,212,255,0.10)" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.75" />
        {/* Code brackets */}
        <path d="M279 36 L268 60 L279 84"
          stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.65" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M311 36 L322 60 L311 84"
          stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.65" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="285" y1="60" x2="305" y2="60"
          stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.30" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

function TimelineVisual() {
  return (
    <div className={s.visTimeline}>
      <div className={s.visTimelineGlow} />
      <svg className={s.visTimelineSvg} viewBox="0 0 760 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="timeGrad" x1="0" y1="0" x2="760" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="var(--secondary)" stopOpacity="0.20" />
            <stop offset="33%"  stopColor="var(--accent)"    stopOpacity="0.55" />
            <stop offset="66%"  stopColor="var(--accent)"    stopOpacity="0.75" />
            <stop offset="100%" stopColor="var(--accent)"    stopOpacity="1.00" />
          </linearGradient>
          <linearGradient id="timeFill" x1="0" y1="0" x2="0" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%"   stopColor="var(--accent)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Baseline */}
        <line x1="30" y1="128" x2="730" y2="128"
          stroke="var(--accent)" strokeWidth="0.6" strokeOpacity="0.14" />

        {/* Phase dividers */}
        <line x1="253" y1="110" x2="253" y2="132"
          stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.22" strokeDasharray="3 3" />
        <line x1="507" y1="78"  x2="507" y2="132"
          stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.28" strokeDasharray="3 3" />

        {/* Horizontal zone shading */}
        <rect x="30"  y="100" width="223" height="28" fill="rgba(74,125,255,0.04)"  rx="2" />
        <rect x="253" y="68"  width="254" height="60" fill="rgba(0,212,255,0.04)"   rx="2" />
        <rect x="507" y="30"  width="223" height="98" fill="rgba(0,212,255,0.06)"   rx="2" />

        {/* Fill under curve */}
        <path d="M30 126 Q130 126 253 110 Q380 96 507 68 Q630 40 730 20 L730 128 L30 128 Z"
          fill="url(#timeFill)" />

        {/* Arc */}
        <path d="M30 126 Q130 126 253 110 Q380 96 507 68 Q630 40 730 20"
          stroke="url(#timeGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Phase milestone markers */}
        {/* Phase 1 - start */}
        <circle cx="30"  cy="126" r="5"  fill="var(--secondary)" fillOpacity="0.45" />
        <circle cx="30"  cy="126" r="2.5" fill="var(--secondary)" fillOpacity="0.80" />

        {/* Phase 1 - end / Phase 2 - start */}
        <circle cx="253" cy="110" r="16" fill="var(--accent)" fillOpacity="0.05" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.18" />
        <circle cx="253" cy="110" r="8"  fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.35" />
        <circle cx="253" cy="110" r="4"  fill="var(--accent)" fillOpacity="0.70" />

        {/* Phase 2 - end / Phase 3 - start */}
        <circle cx="507" cy="68"  r="20" fill="var(--accent)" fillOpacity="0.06" stroke="var(--accent)" strokeWidth="0.8" strokeOpacity="0.22" />
        <circle cx="507" cy="68"  r="10" fill="var(--accent)" fillOpacity="0.14" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.40" />
        <circle cx="507" cy="68"  r="5"  fill="var(--accent)" fillOpacity="0.85" />

        {/* Phase 3 - end (Ship) */}
        <circle cx="730" cy="20"  r="28" fill="var(--accent)" fillOpacity="0.07" stroke="var(--accent)" strokeWidth="1" strokeOpacity="0.20" />
        <circle cx="730" cy="20"  r="16" fill="var(--accent)" fillOpacity="0.12" stroke="var(--accent)" strokeWidth="1.2" strokeOpacity="0.35" />
        <circle cx="730" cy="20"  r="8"  fill="var(--accent)" fillOpacity="0.30" stroke="var(--accent)" strokeWidth="1.5" strokeOpacity="0.60" />
        <circle cx="730" cy="20"  r="4"  fill="var(--accent)" fillOpacity="1"
          style={{ filter: 'drop-shadow(0 0 12px var(--accent))' }} />

        {/* Phase label bars */}
        <rect x="30"  y="136" width="60"  height="3" rx="1.5" fill="var(--secondary)" fillOpacity="0.22" />
        <rect x="253" y="136" width="80"  height="3" rx="1.5" fill="var(--accent)"    fillOpacity="0.38" />
        <rect x="507" y="136" width="100" height="3" rx="1.5" fill="var(--accent)"    fillOpacity="0.60" />

      </svg>
    </div>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────

const NODE_COLORS = {
  cyan:    { r: 0,   g: 212, b: 255 },
  violet:  { r: 167, g: 139, b: 250 },
  amber:   { r: 245, g: 158, b: 11  },
  emerald: { r: 52,  g: 211, b: 153 },
  blue:    { r: 74,  g: 125, b: 255 },
} as const;
type ColorKey = keyof typeof NODE_COLORS;
const COLOR_KEYS: ColorKey[] = ['cyan', 'violet', 'amber', 'emerald', 'blue'];

class GraphNode {
  x: number; y: number; baseX: number; baseY: number;
  r: number; type: string;
  color: { r: number; g: number; b: number };
  phase: number; speed: number; drift: number;
  pulse: number; pulseSpeed: number;

  constructor(x: number, y: number, r: number, type: string, colorName: ColorKey) {
    this.x = x; this.y = y; this.baseX = x; this.baseY = y;
    this.r = r; this.type = type;
    this.color = NODE_COLORS[colorName];
    this.phase = Math.random() * Math.PI * 2;
    this.speed = 0.003 + Math.random() * 0.004;
    this.drift = 3 + Math.random() * 8;
    this.pulse = 0;
    this.pulseSpeed = 0.02 + Math.random() * 0.02;
  }

  update(t: number) {
    this.x = this.baseX + Math.sin(t * this.speed + this.phase) * this.drift;
    this.y = this.baseY + Math.cos(t * this.speed * 0.7 + this.phase) * this.drift;
    this.pulse = (Math.sin(t * this.pulseSpeed + this.phase) + 1) / 2;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const c = this.color;
    const alpha =
      this.type === 'core'      ? 1 :
      this.type === 'primary'   ? 0.7 + this.pulse * 0.3 :
      this.type === 'secondary' ? 0.4 + this.pulse * 0.3 :
                                  0.15 + this.pulse * 0.15;

    if (this.type === 'core' || this.type === 'primary') {
      const glow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r * 4);
      glow.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${alpha * 0.25})`);
      glow.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * 4, 0, Math.PI * 2);
      ctx.fill();
    }

    if (this.type === 'core') {
      ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${0.3 + this.pulse * 0.3})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * 2 + this.pulse * 6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * 3.5 + this.pulse * 8, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${0.1 + this.pulse * 0.1})`;
      ctx.stroke();
    }

    ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${alpha})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();

    if (this.type === 'core') {
      ctx.fillStyle = `rgba(255,255,255,${0.6 + this.pulse * 0.4})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const W = 1000, H = 1000;
    const cx = W / 2 - 120, cy = H / 2 - 165;

    function resize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      canvas!.width = rect.width * dpr;
      canvas!.height = rect.height * dpr;
      canvas!.style.width  = rect.width  + 'px';
      canvas!.style.height = rect.height + 'px';
      ctx!.scale(dpr, dpr);
    }
    resize();

    // Build nodes
    const nodes: GraphNode[] = [];
    nodes.push(new GraphNode(cx, cy, 12, 'core', 'cyan'));

    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const dist  = 140 + Math.random() * 30;
      nodes.push(new GraphNode(
        cx + Math.cos(angle) * dist,
        cy + Math.sin(angle) * dist,
        7, 'primary', COLOR_KEYS[i % COLOR_KEYS.length]
      ));
    }
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2 + 0.3;
      const dist  = 260 + Math.random() * 50;
      nodes.push(new GraphNode(
        cx + Math.cos(angle) * dist,
        cy + Math.sin(angle) * dist,
        5, 'secondary', COLOR_KEYS[i % COLOR_KEYS.length]
      ));
    }
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist  = 320 + Math.random() * 140;
      nodes.push(new GraphNode(
        cx + Math.cos(angle) * dist,
        cy + Math.sin(angle) * dist,
        3, 'tertiary', COLOR_KEYS[i % COLOR_KEYS.length]
      ));
    }

    function drawConnections(t: number) {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let maxDist = 240;
          if (nodes[i].type === 'core' || nodes[j].type === 'core') maxDist = 320;
          if (nodes[i].type === 'tertiary' && nodes[j].type === 'tertiary') maxDist = 120;

          if (dist < maxDist) {
            const alpha  = (1 - dist / maxDist) * 0.22;
            const isCore = nodes[i].type === 'core' || nodes[j].type === 'core';
            const c1 = nodes[i].color, c2 = nodes[j].color;
            const mr = Math.round((c1.r + c2.r) / 2);
            const mg = Math.round((c1.g + c2.g) / 2);
            const mb = Math.round((c1.b + c2.b) / 2);

            ctx!.strokeStyle = `rgba(${mr},${mg},${mb},${isCore ? alpha * 1.5 : alpha})`;
            ctx!.lineWidth = isCore ? 1 : 0.5;

            const mx = (nodes[i].x + nodes[j].x) / 2 + Math.sin(t * 0.001 + i) * 3;
            const my = (nodes[i].y + nodes[j].y) / 2 + Math.cos(t * 0.001 + j) * 3;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.quadraticCurveTo(mx, my, nodes[j].x, nodes[j].y);
            ctx!.stroke();

            if (isCore && Math.random() < 0.003) {
              const pulsePos = (t * 0.002 + i * 0.5) % 1;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * pulsePos;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * pulsePos;
              const pc = nodes[j].color;
              ctx!.fillStyle = `rgba(${pc.r},${pc.g},${pc.b},0.7)`;
              ctx!.beginPath();
              ctx!.arc(px, py, 1.5, 0, Math.PI * 2);
              ctx!.fill();
            }
          }
        }
      }
    }

    let t = 0;
    let raf: number;
    function animate() {
      t++;
      ctx!.clearRect(0, 0, W, H);
      drawConnections(t);
      for (const node of nodes) { node.update(t); node.draw(ctx!); }
      raf = requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const badges = [
    {
      variant: s.badgeCyan,
      num: '12M+',
      label: 'MAU Growth',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
          <polyline points="16 7 22 7 22 13"/>
        </svg>
      ),
    },
    {
      variant: s.badgeAmber,
      num: '5 → 9',
      label: 'AI Team Multiplier',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/>
          <path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/>
          <path d="M9 2v2"/><path d="M9 20v2"/>
        </svg>
      ),
    },
    {
      variant: s.badgeEmerald,
      num: '130%+',
      label: 'Wallet YoY Growth',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2.5"/>
          <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>
        </svg>
      ),
    },
    {
      variant: s.badgeViolet,
      num: '$9M',
      label: 'Cash Back Shipped',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
    },
  ];

  return (
    <section className={s.hero}>
      <div className={s.gridBg} />
      <div className={s.radialGlow} />
      <div className={s.radialGlow2} />
      <div className={s.scanline} />

      <div className={s.heroInner}>
        <div className={s.heroContent}>
          <p className={s.eyebrow}>JD McCulley × Bizee</p>
          <h1 className={s.heroHeadline}>
            Stop Pushing Pixels.<br />
            Start Building the<br />
            <span className={s.heroEm}>Entrepreneur OS.</span>
          </h1>
          <p className={s.heroSub}>
            I&rsquo;m a product design leader with 25 years building UX organizations
            across agencies, startups, and enterprise. I&rsquo;ve done this transformation
            twice. Here&rsquo;s why Bizee is where I do it next.
          </p>
          <div className={s.heroPills}>
            {['Team Builder', 'Craft + Judgment', 'Design-Led AI', 'Player-Coach'].map((tag) => (
              <span key={tag} className={s.pill}>{tag}</span>
            ))}
          </div>
          <p className={s.preparedFor}>
            Prepared for <strong>Jaime R.</strong> — Head of Product &amp; Design, Bizee
          </p>
        </div>

        <div className={s.graphContainer}>
          <canvas ref={canvasRef} />
        </div>

        <div className={s.statBadges}>
          {badges.map((b, i) => (
            <div key={i} className={`${s.statBadge} ${b.variant}`} style={{ animationDelay: `${1.4 + i * 0.2}s` }}>
              <div className={s.badgeIconRing}>{b.icon}</div>
              <div className={s.badgeText}>
                <div className={s.badgeNum}>{b.num}</div>
                <div className={s.badgeLabel}>{b.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BizeeJaimePage() {
  return (
    <div className={s.page}>

      {/* ── HERO ── */}
      <HeroSection />

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
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3L6 16h8l-2 9 12-13h-8l2-9z" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
            },
            {
              you: '"Own the soul of a brand"',
              note: 'Not a manager of a style guide.',
              proof: "Built Swimlane's brand from the logo up. Unified Dollar General's digital experience across 20K+ stores.",
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4C10.13 4 7 7.13 7 11c0 2.1.87 4 2.27 5.36L8 24h2l.5-2h7l.5 2h2l-1.27-7.64A7 7 0 0 0 21 11c0-3.87-3.13-7-7-7z" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="10" y1="18" x2="18" y2="18" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round"/>
                  <line x1="10.5" y1="21" x2="17.5" y2="21" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="14" cy="11" r="2.5" stroke="var(--accent)" strokeWidth="1.2" fill="none"/>
                </svg>
              ),
            },
            {
              you: '"Extreme agency, speed"',
              note: 'A leader who operates, not just manages.',
              proof: 'Player-coach model. I run design critiques in the morning and push pixels in Figma in the afternoon.',
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 22L22 6M22 6H13M22 6V15" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="19" r="2.5" stroke="var(--accent)" strokeWidth="1.2" fill="none"/>
                </svg>
              ),
            },
            {
              you: '"AI-native operating system"',
              note: 'Rebuilding the experience from the ground up.',
              proof: 'Built production AI pipelines — design-to-code automation, research synthesis, rapid prototyping. Not prototypes. Production.',
              icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="8" width="12" height="12" rx="2" stroke="var(--accent)" strokeWidth="1.5"/>
                  <rect x="11" y="11" width="6" height="6" rx="1" fill="var(--accent)" fillOpacity="0.25" stroke="var(--accent)" strokeWidth="1"/>
                  <line x1="11" y1="5" x2="11" y2="8" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="17" y1="5" x2="17" y2="8" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="11" y1="20" x2="11" y2="23" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="17" y1="20" x2="17" y2="23" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="5" y1="11" x2="8" y2="11" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="5" y1="17" x2="8" y2="17" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="20" y1="11" x2="23" y2="11" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="20" y1="17" x2="23" y2="17" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ),
            },
          ].map(({ you, note, proof, icon }) => (
            <div key={you} className={s.callCard}>
              <div className={s.callIcon}>{icon}</div>
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
            <div className={s.transformLogo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/sw-inline-logo-color-white.svg" alt="Swimlane" className={s.logoImg} />
            </div>
            <div className={s.transformContent}>
              <p className={s.transformRole}>Swimlane — First Design Hire → Design Leadership</p>
              <p className={s.transformYears}>2016–2022</p>
              <ul className={s.transformList}>
                <li>Built the design function from zero — first hire at a cybersecurity startup</li>
                <li>Created the brand, design system, and product language from Series A → C</li>
                <li>Translated complex B2B security automation into interfaces SOC analysts trust</li>
                <li>Grew the design team from 1 to 5 as the company scaled to Series C</li>
                <li>Earned design&rsquo;s seat at the table in an engineering-led culture</li>
              </ul>
            </div>
            <a href="/case-study/swimlane-dashboards/?pw=JD1234" className={s.screenshotLink}>
              <div className={s.screenshotWrap}>
                <div className={s.desktopFrame}>
                  <div className={s.desktopBar}>
                    <span className={s.desktopDot} />
                    <span className={s.desktopDot} />
                    <span className={s.desktopDot} />
                    <span className={s.desktopUrlBar} />
                  </div>
                  <div className={s.desktopScreen}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/images/swimlane/Dashboard 1.png" alt="Swimlane SOAR platform dashboard" />
                  </div>
                </div>
                <div className={s.phoneFrame}>
                  <div className={s.phoneScreen}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/images/swimlane/Application Landing ~ 1.png" alt="" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/case-study/swimlane-dashboards/?pw=JD1234" className={s.caseStudyBtn}>View case study →</a>
          </div>
          <div className={s.transformCard}>
            <div className={s.transformLogo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/dg-stretched.svg" alt="Dollar General" className={s.logoImg} />
            </div>
            <div className={s.transformContent}>
              <p className={s.transformRole}>Dollar General — Sr. Director of Product Design</p>
              <p className={s.transformYears}>2022–2026</p>
              <ul className={s.transformList}>
                <li>Grew the app from 6M to 12M+ MAU</li>
                <li>Shipped Cash Back — $9M returned to customers</li>
                <li>Reversed double-digit myDG Wallet decline → 130%+ YoY growth</li>
                <li>Delivered Rewards By Program Alignment — 8 journeys, 113 screens</li>
                <li>Launched Same-Day Delivery experience</li>
                <li>Built AI-augmented workflows — 5-person team output of 9</li>
              </ul>
            </div>
            <a href="/case-study/rewards/?pw=JD1234" className={s.screenshotLink}>
              <div className={s.screenshotWrap}>
                <div className={s.desktopFrame}>
                  <div className={s.desktopBar}>
                    <span className={s.desktopDot} />
                    <span className={s.desktopDot} />
                    <span className={s.desktopDot} />
                    <span className={s.desktopUrlBar} />
                  </div>
                  <div className={s.desktopScreen}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/images/dg-website-home.png" alt="Dollar General website home redesign" />
                  </div>
                </div>
                <div className={s.phoneFrame}>
                  <div className={s.phoneScreen}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/assets/images/A-Wallet Deals.png" alt="" />
                  </div>
                </div>
              </div>
            </a>
            <a href="/case-study/rewards/?pw=JD1234" className={s.caseStudyBtn}>View case study →</a>
          </div>
        </div>

        {/* RBA Journey Architecture — full-width */}
        <div className={s.fullWidthImageWrap}>
          <p className={s.imageCaption}>RBA Journey Architecture — 8 journeys, 113 screens</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/journey-architecture-flow.png"
            alt="RBA journey architecture flow"
            className={s.fullWidthImage}
          />
        </div>
        <a href="/case-study/rba/?pw=JD1234" className={s.caseStudyBtn} style={{ alignSelf: 'center' }}>View case study →</a>
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
            <Workflow size={28} strokeWidth={1.5} color="var(--accent)" />
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
            <Sparkles size={28} strokeWidth={1.5} color="var(--accent)" />
            <h3 className={s.intersectTitle}>AI Patterns</h3>
            <p className={s.intersectSub}>Production workflows, not prototypes</p>
            <p className={s.intersectBody}>
              Design-to-code automation using Figma and Claude. AI-assisted research synthesis. Rapid
              prototyping systems. The craft judgment stays human — AI compresses everything before
              and after the craft moment.
            </p>
          </div>
          <div className={s.intersectCard}>
            <Heart size={28} strokeWidth={1.5} color="var(--accent)" />
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

        {/* Photo strip — JD + working session */}
        <div className={s.photoStrip}>
          <div className={s.photoCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/swimlane/whiteboard investigation.png"
              alt="JD writing on whiteboard"
              className={s.photoImg}
            />
          </div>
          <div className={s.photoCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/dg-rewards/deals-gallery-flow.png"
              alt="Mobile screen flow"
              className={s.photoImgLeft}
            />
          </div>
          <div className={s.photoCard}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/swimlane/whiteboard generic 2.png"
              alt="Whiteboard design session"
              className={s.photoImg}
            />
          </div>
        </div>

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
          <a href="mailto:jdmcculley@me.com" className={s.ctaEmail}>jdmcculley@me.com</a>
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
