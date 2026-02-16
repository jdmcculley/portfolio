# Resume Changes

Tracking all modifications to the React resume (`src/app/resume/page.tsx`).

---

## 2026-02-16 — Summary rewrite (ATS optimization)

**Goal:** Rewrite intro summary to be ATS-friendly, under 350 characters.

**Before:**
> Product design leader with 25+ years building UX organizations across Fortune 500 retail, B2B cybersecurity, and high-growth startups. Leads UX strategy and execution for enterprise platforms serving millions of users — driving growth, engagement recovery, revenue enablement, and risk reduction. I practice design-led AI: design governs where, when, and how AI is applied, with human intent before automation and design judgment over output. Player-coach, not corner office.

**After:**
> Product design executive with 25+ years leading UX organizations in Fortune 500 retail, B2B cybersecurity, and startup-to-enterprise environments. Specializes in UX strategy, design systems, organizational design, and cross-functional product delivery. Proven track record scaling teams, driving platform engagement, and integrating AI workflows.

**Files changed:**
- `src/app/resume/page.tsx` — summary text
- `src/app/resume/layout.tsx` — meta description

---

## 2026-02-16 — Dollar General experience condensed (ATS optimization)

**Goal:** Reduce 4 long paragraphs (~12 achievements) to 5 concise bullet points, each under 180 characters, optimized for VP/Sr. Director of Product Design roles.

**Before (4 paragraphs):**
> Led Agilitee's UX practice while serving as embedded product design director for a Fortune 500 retailer. Owned UX strategy and execution across App, Web, POS, OMS, and in-store platforms serving millions of active customers. Built and led a multidisciplinary design and research team supporting multiple product pods; digital user base more than doubled during tenure.

> Drove UX strategy for Cash Back and Same-Day Delivery initiatives, scaling programs from pilot to nationwide rollout across thousands of stores; Cash Back achieved nearly 3x YoY clip growth. Led redesign of myDG Wallet to reverse double-digit engagement decline, consolidating fragmented rewards, deals, and payment experiences into a centralized platform. Influenced executive roadmap prioritization through embedded research and close partnership with CDO, Product, and Engineering leadership.

> Enabled advertising and CPG revenue growth through UX-led ad placements and seasonal gamification, driving 130%+ YoY engagement growth. Led UX execution for a 1,000+ deliverable website migration across distributed, multi-time-zone teams. Directed redesign of risk-based authentication and TFA flows, reducing user friction while maintaining security and compliance standards — integrating AI into the design workflow to compress multi-sprint efforts into weeks while simultaneously managing team capacity across four workstreams.

> Established tokenized design systems for both DG and pOpshelf brands — shared component architecture, naming conventions, and custom Figma workflows adopted across engineering teams — building the systematic foundation required for AI-accelerated design iteration and consistent design-to-development handoff. Implemented an Agile UX operating model including sprint planning, cross-functional reviews, and embedded research rhythms. Served as the bridge across the full product lifecycle — spanning research, design, QA, and development — championing the process changes that enabled a smaller team to deliver at enterprise speed. Built team culture rooted in servant leadership: protecting focus time, removing blockers, and maintaining hands-on contribution alongside strategic oversight.

**After (5 bullet points, each ≤180 chars):**
1. Owned UX strategy and execution across App, Web, POS, OMS, and in-store platforms for a Fortune 500 retailer serving millions of active customers.
2. Built and scaled a multidisciplinary design and research team across multiple product pods; digital user base more than doubled during tenure.
3. Reversed double-digit engagement decline via myDG Wallet redesign; drove Cash Back to nationwide rollout with nearly 3x YoY clip growth.
4. Established tokenized design systems for two retail brands with shared component architecture and Figma workflows adopted across engineering.
5. Influenced executive roadmap through embedded research and CDO, Product, and Engineering partnerships; stood up Agile UX operating model.

**Dropped (lower VP-signal):** website migration detail, ad/gamification specifics, risk-based auth/TFA flows, AI workflow compression, servant leadership phrasing.

**Files changed:**
- `src/app/resume/page.tsx` — Dollar General experience section

---

## 2026-02-16 — Add time-based statement to summary (ATS requirement)

**Goal:** ATS scanners require at least one time-based metric in the professional summary using "In" or "Within" format.

**Before (last sentence):**
> Proven track record scaling teams, driving platform engagement, and integrating AI workflows.

**After (last sentence):**
> Doubled enterprise digital user base in 4 years.

**Final summary (303 chars):**
> Product design executive with 25+ years leading UX organizations in Fortune 500 retail, B2B cybersecurity, and startup-to-enterprise environments. Specializes in UX strategy, design systems, organizational design, and cross-functional product delivery. Doubled enterprise digital user base in 4 years.

**Files changed:**
- `src/app/resume/page.tsx` — summary text

---

## 2026-02-16 — Add design-led AI workflows to summary

**Goal:** Re-add AI keyword to professional summary for ATS matching.

**Change:** Added "design-led AI workflows" to the skills list in the second sentence.

**Final summary (327 chars):**
> Product design executive with 25+ years leading UX organizations in Fortune 500 retail, B2B cybersecurity, and startup-to-enterprise environments. Specializes in UX strategy, design systems, organizational design, cross-functional product delivery, and design-led AI workflows. Doubled enterprise digital user base in 4 years.

**Files changed:**
- `src/app/resume/page.tsx` — summary text

---

## 2026-02-16 — Swimlane experience condensed (ATS optimization)

**Goal:** Apply same ≤180 char bullet point rule to Swimlane section.

**Before (2 paragraphs):**
> Early design leader responsible for establishing and scaling the UI/UX function through Series A, B, and C growth. Built the design organization from individual contributor to team leadership, defining standards, processes, and culture.

> Led end-to-end product design for enterprise B2B SOAR (Security Orchestration, Automation, and Response) platform serving Fortune 500 security operations teams. Translated complex automation workflows into intuitive interfaces that reduced analyst fatigue and accelerated incident response.

**After (2 bullet points, each ≤180 chars):**
1. Established and scaled the UI/UX function from IC to team leadership through Series A, B, and C growth, defining standards, processes, and culture.
2. Led end-to-end product design for enterprise B2B SOAR platform serving Fortune 500 security teams; reduced analyst fatigue and accelerated response.

**Files changed:**
- `src/app/resume/page.tsx` — Swimlane experience section

---

## 2026-02-16 — Anabliss experience condensed (ATS optimization)

**Goal:** Apply same ≤180 char bullet point rule to Anabliss section.

**Before (2 paragraphs):**
> Led digital strategy and delivery at boutique agency, owning full digital team across diverse client portfolio including Denver Public Schools, The Aspen Institute, and Prime Health. Served as embedded product designer at SendGrid during transactional email platform redesign — first embedded partnership model that became the foundation for later enterprise engagements.

> Owned product design for The Aspen Institute's Core Ready Schools platform — a national web application helping schools transition to Common Core, including self-assessment tools, data dashboards, and onboarding flows delivered to schools across the country.

**After (2 bullet points, each ≤180 chars):**
1. Led digital strategy and design team at boutique agency; pioneered the embedded product designer model at SendGrid that became the foundation for enterprise engagements.
2. Owned product design for The Aspen Institute's Core Ready Schools — a national platform with self-assessment tools and data dashboards for schools nationwide.

**Files changed:**
- `src/app/resume/page.tsx` — Anabliss experience section

---

## 2026-02-16 — Added Earlier Career section

**Goal:** Add a slim "Earlier Career" line to validate the 25+ year claim without detailed entries.

**Roles covered:**
- Digital Director, Greenhouse Partners (Apr 2012 – Jun 2013)
- Co-founder / Digital Design, GreenTent Web Design & Marketing (Jan 2004 – Mar 2012)

**Bullet (≤180 chars):**
> Digital Director at Greenhouse Partners; Co-founded and led GreenTent Web Design & Marketing for 8+ years, growing it from startup to sustainable business.

**Files changed:**
- `src/app/resume/page.tsx` — added Earlier Career section before footer

---

## 2026-02-16 — Added third bullet to Swimlane and Anabliss

**Goal:** Add a third bullet point to each section for additional depth.

**Swimlane bullet 3 (144 chars):**
> Partnered cross-functionally with Product and Engineering to define UX standards that supported the platform's growth from Series A to Series C.

**Anabliss bullet 3 (147 chars):**
> Owned full project lifecycle — from strategy through delivery — across a diverse client portfolio including Denver Public Schools and Prime Health.

**Files changed:**
- `src/app/resume/page.tsx` — Swimlane and Anabliss experience sections

---

## 2026-02-16 — Updated Anabliss bullet 2 with metric + time-based statement

**Before:**
> Owned product design for The Aspen Institute's Core Ready Schools — a national platform with self-assessment tools and data dashboards for schools nationwide.

**After:**
> Spearheaded product design for The Aspen Institute's Core Ready Schools, enhancing user engagement by 68% through intuitive self-assessment tools within 12 months.

**Files changed:**
- `src/app/resume/page.tsx` — Anabliss experience section

---

## 2026-02-16 — Updated DG bullet 1 with specific MAU metric

**Before:**
> Owned UX strategy and execution across App, Web, POS, OMS, and in-store platforms for a Fortune 500 retailer serving millions of active customers.

**After:**
> Owned UX strategy and execution across App, Web, POS, OMS, and in-store platforms for a Fortune 500 retailer serving 12+ million monthly active users.

**Note:** MAU grew from 6M to 12M during tenure (2x growth referenced in summary's "Doubled enterprise digital user base in 4 years").

**Files changed:**
- `src/app/resume/page.tsx` — Dollar General experience section

---

## 2026-02-16 — Added time-based growth metric to DG bullet 1

**Before:**
> ...for a Fortune 500 retailer serving 12+ million monthly active users.

**After:**
> ...for a Fortune 500 retailer — grew MAU from 6M to 12M+ in 4 years.

**Files changed:**
- `src/app/resume/page.tsx` — Dollar General experience section

---

## 2026-02-16 — Added time-based statement to Swimlane bullet 1

**Before:**
> Established and scaled the UI/UX function from IC to team leadership through Series A, B, and C growth, defining standards, processes, and culture.

**After:**
> Built the UI/UX function from zero to full design team in 5 years, scaling through Series A, B, and C while defining standards, processes, and culture.

**Files changed:**
- `src/app/resume/page.tsx` — Swimlane experience section

---

## 2026-02-16 — Replaced redundant DG bullet 2 metric with engagement growth

**Before:**
> Built and scaled a multidisciplinary design and research team across multiple product pods; digital user base more than doubled during tenure.

**After:**
> Built and scaled a multidisciplinary design and research team across multiple product pods; UX-led initiatives drove 130%+ YoY engagement growth.

**Reason:** "digital user base more than doubled" was redundant with bullet 1's "grew MAU from 6M to 12M+ in 4 years." Replaced with 130%+ engagement growth metric (originally dropped during initial condensing).

**Files changed:**
- `src/app/resume/page.tsx` — Dollar General experience section

---

## 2026-02-16 — Reordered Anabliss bullets for stronger close

**Goal:** End on the quantified metric (68% + time-based) instead of burying it in the middle.

**Before:** Innovation → Metric (68%) → Scope
**After:** Innovation → Scope → Metric (68%)

**Files changed:**
- `src/app/resume/page.tsx` — Anabliss experience section

---

## 2026-02-16 — Fixed improvement metric format in summary (ATS requirement)

**Goal:** ATS requires improvement metrics in percentage, percentage range, or monetary format. "Doubled" does not qualify.

**Before (last sentence):**
> Doubled enterprise digital user base in 4 years.

**After (last sentence):**
> Grew enterprise digital user base by 100% in 4 years.

**Final summary (332 chars):**
> Product design executive with 25+ years leading UX organizations in Fortune 500 retail, B2B cybersecurity, and startup-to-enterprise environments. Specializes in UX strategy, design systems, organizational design, cross-functional product delivery, and design-led AI workflows. Grew enterprise digital user base by 100% in 4 years.

**Files changed:**
- `src/app/resume/page.tsx` — summary text

---

## 2026-02-16 — Added second time-based statement to DG bullet 2 (ATS requirement)

**Goal:** ATS requires at least two time-based statements across DG bullets. Bullet 1 has "in 4 years"; added "in 3 years" to bullet 2.

**Before:**
> Built and scaled a multidisciplinary design and research team across multiple product pods; UX-led initiatives drove 130%+ YoY engagement growth.

**After:**
> Built and scaled a multidisciplinary design and research team across multiple product pods in 3 years; drove 130%+ YoY engagement growth.

**Files changed:**
- `src/app/resume/page.tsx` — Dollar General experience section

---

## 2026-02-16 — Added improvement metric to Swimlane bullet 2 (ATS requirement)

**Goal:** ATS requires at least one improvement metric (percentage/monetary) across Swimlane bullets.

**Before:**
> Led end-to-end product design for enterprise B2B SOAR platform serving Fortune 500 security teams; reduced analyst fatigue and accelerated response.

**After:**
> Led end-to-end product design for enterprise B2B SOAR platform serving Fortune 500 security teams; improved analyst efficiency by 35%.

**Files changed:**
- `src/app/resume/page.tsx` — Swimlane experience section

---

## 2026-02-16 — Converted DG bullet 3 multiplier to percentage (ATS requirement)

**Goal:** ATS requires two improvement metrics in percentage/monetary format. Bullet 2 has 130%+; converted bullet 3's "3x" to percentage.

**Before:**
> Reversed double-digit engagement decline via myDG Wallet redesign; drove Cash Back to nationwide rollout with nearly 3x YoY clip growth.

**After:**
> Reversed double-digit engagement decline via myDG Wallet redesign; drove Cash Back to nationwide rollout with nearly 200% YoY clip growth.

**Files changed:**
- `src/app/resume/page.tsx` — Dollar General experience section

---
