# Voca Design System — SKILL.md

Read this before touching any file in `voca-design-system/`. It's the whole system in one page — no other context needed.

## What Voca is

Voca is an AI startup for business voice/customer-service agents. The visual identity is **young, sharp, and precise** — confident technology with human warmth. Not corporate, not childishly playful.

This folder is the foundation every future Voca screen builds on. Plain HTML + CSS + vanilla JS, no framework, no build step — open any HTML file directly in a browser, or edit any file with any editor/LLM with zero setup.

## The 60/30/10 rule

- **60% Neutral** — the page's quiet base, derived from `#E6EAF0`. Backgrounds, page structure.
- **30% Navy** — brand identity, derived from `#004A7D`. Headings, nav, emphasized text, footer, structural surfaces.
- **10% Coral** — energy/attention, derived from `#FF5E5E` (light tint `#FFA8A8`). CTA buttons, highlights, interactive accents.

**Iron rule**: navy and coral never carry equal weight in the same section. If navy dominates, coral shows up only as isolated points — one button, one icon, one highlight. Never a 50/50 split.

## Token table — always use semantic tokens

Never write a hex value or reference a primitive (`--neutral-100`, `--navy-500`, `--coral-500`...) directly inside a page or component file. Primitives exist **only** to define semantic tokens inside `tokens/colors.css` itself. Everywhere else: `var(--semantic-token-name)`.

| Token | Points to | Use for |
|---|---|---|
| `--bg-page` | neutral-50 | page background |
| `--bg-surface` | neutral-0 (white) | cards, nav, surfaces above the page bg |
| `--bg-inverse` | navy-900 | dark structural sections/cards |
| `--bg-accent` | coral-500 | the CTA band background, accent fills |
| `--bg-accent-subtle` | coral-50 | soft accent tint (badges, highlight rows) |
| `--text-primary` | neutral-900 | body/heading text on light backgrounds |
| `--text-secondary` | neutral-600 | supporting/muted text |
| `--text-brand` | navy-500 | brand-colored text/links |
| `--text-on-accent` / `--text-on-brand` | neutral-0 | text on coral or navy backgrounds |
| `--border-default` | neutral-200 | standard hairlines, card borders |
| `--border-strong` | neutral-300 | emphasized dividers |
| `--border-focus` | coral-500 | focus rings |
| `--btn-primary-bg` / `-hover` | coral-500 / coral-700 | primary CTA button |
| `--btn-secondary-bg` / `-hover` | navy-500 / navy-700 | secondary button |
| `--btn-tertiary-border` / `-text` | navy-500 | ghost/outline button |
| `--link-color` / `-hover` | navy-500 / coral-500 | inline links |
| `--state-success/warning/danger-bg/-text` | success/warning/coral ramps | system feedback (forms, badges) |

Full primitive ramps (neutral, navy, coral, success, warning 50→900) live in `tokens/colors.css` — extend them there if a new shade is genuinely needed; don't invent one-off hex values in a component file.

## Typography — the Rubik rule

One family for Hebrew and English both: **Rubik**, loaded from Google Fonts in every page's `<head>`. Only two weights ever ship: **400 (regular)** for body copy, **700 (bold)** for headings and isolated emphasis points. Never 100/300/500/600/800/900 — that restraint is deliberate, part of the clean/precise identity.

Type scale, spacing scale (strict 4/8 multiples), radius (`--radius-default: 12px`), and breakpoints (mobile ≤767px / tablet 768–991px / desktop ≥992px) are in `tokens/typography.css` and `tokens/spacing.css`. **All spacing goes through `var(--space-*)`** — no arbitrary pixel values, ever.

## Citing sources — the `.source` class

Every statistic on the site carries its source, and a source is **always** `<span class="source">` — never inline-styled, never a plain `<p>`. It renders at `--text-2xs` (10px, vs 16px body) in muted uppercase, so a citation can never be mistaken for running copy. Use `.source--on-inverse` on dark surfaces.

Icons are **Google Material Symbols** (loaded in the page `<head>`); reference them by ligature name, e.g. `<span class="material-symbols-outlined">hub</span>`.

## Before adding anything new

**Check `tokens/` first.** If a color, spacing value, or type size close to what you need already exists, use it — don't add a new token for a one-off. Only extend the primitive ramps in `colors.css` if a genuinely new shade is needed system-wide, and only add semantic tokens (never raw hex) to component/page files.

## Reference implementation — button + card

```html
<button class="btn btn--primary">התחל עכשיו</button>

<div class="card">
  <span class="card-label">תווית</span>
  <p>תוכן הכרטיס, טקסט רגיל במשקל 400.</p>
</div>
```

```css
/* This is the expected shape of every component rule: semantic tokens only */
.btn--primary {
  background: var(--btn-primary-bg);
  color: var(--btn-primary-text);
  border-radius: var(--radius-default);
}
.btn--primary:hover {
  background: var(--btn-primary-bg-hover);
}
```

## File map

```
voca-design-system/
├── SKILL.md              ← you are here
├── tokens/
│   ├── colors.css         primitives + semantic tokens, 60/30/10
│   ├── typography.css     Rubik, 400/700 only, type scale
│   └── spacing.css        8px scale, radius, breakpoints
├── components/
│   ├── buttons.css        primary/secondary/tertiary/on-accent
│   ├── cards.css          card, stat, feature-row, price-card, badge
│   ├── charts.css         data-viz: bars, gap, gauge, sparkline, split-bar, stat-tile, cost-bars
│   └── nav.css            sticky header, mobile toggle, lang-switch
├── assets/
│   ├── logo/               Voca_logo_DeepBluemdpi.svg (default), LOGO_WHTIE.svg (inverse sections)
│   └── fonts/               currently empty — Rubik loads from Google Fonts, not self-hosted
└── pages/
    ├── landing.html        landing page, built on this system
    ├── landing.css         page-specific layout (hero, sections, dashboard, modal…)
    ├── content.js           all copy (`he`/`en`) + chart data — edit text/data here, not in the HTML
    └── app.js               i18n pass, SVG chart builders, count-up/scroll-draw, nav/modal
```

## Data-viz — the product's graphic language on the page

Voca ships dashboards, so the marketing page speaks in charts too. `components/charts.css`
holds the reusable marks; `app.js` builds them as **inline SVG/CSS from data in
`content.js`** (never hardcoded in HTML), so they stay bilingual and editable.

Built per the dataviz method (see the `dataviz` skill): coral (`--data-primary`) is
the primary hue, navy (`--data-secondary`) the comparison hue — a **CVD-safe pair
(ΔE 56)** — on neutral tracks. Every mark is **direct-labeled**; colour never carries
meaning alone. Marks are thin, ends rounded, and a 2px surface gap separates adjacent
fills. Data-viz tokens live in `colors.css` (`--data-*`, incl. `-on-inverse` variants
for the dark dashboard/hero surfaces).

Marks available: `.chart`/`.bar-row` (horizontal bars), `.gap` (paired comparison),
`.gauge` (radial %), `.spark` (sparkline+area), `.split-bar` (stacked), `.stat-tile`
(big number + micro-bar), `.cost-bar` (dramatic magnitude ratio), and `.nodegraph`
(platforms → Voca → business data). Values are passed as inline `--pct`/`--seg`/`--c`/`--off`;
the `.is-drawn` class (added by the IntersectionObserver in `app.js` when a host scrolls
into view) animates marks from zero and runs number count-ups. All motion respects
`prefers-reduced-motion`.

Rules worth knowing before you touch these:
- **A gauge ring holds the number only** — its label always sits below, via `.gauge-figure > .gauge-caption`.
- **`.nodegraph svg` is pinned to `direction: ltr`.** Under `dir=rtl`, SVG `text-anchor: start/end` swap sides and every label lands back on top of its node. Hebrew still shapes correctly via bidi.
- **The node graph has two layouts, not one.** `app.js` has `buildHorizontalGraph()` (desktop/tablet: platforms left column, data right column, hub centre) and `buildVerticalGraph()` (mobile ≤767px: platforms top row, hub middle, data bottom row) — the vertical one is the horizontal one rotated 90° clockwise, same visual language. `renderNodeGraph()` picks one via `matchMedia('(max-width: 767px)')` and a `change` listener re-renders it live if the viewport crosses the breakpoint. Both share `nodeMotion()` for the flow-pulse animation and `markGroup()`/`lockupGroup()` for the brand mark/logo.
- **Multi-word node labels wrap, they never shrink to fit.** `wrapLabel()`/`labelTspans()` split a label with a space into two `<tspan>` lines that grow *away* from the node (upward for a row whose labels sit above it, downward for one below) — this is language-agnostic: it fixed real overlaps in English ("Service policy" vs "Customer history") the same way it handles Hebrew two-word labels. If you add a new platform/data-source item with a long label, this handles it automatically; don't add manual line breaks in `content.js`.

**Marketing stats are real and sourced.** The numbers come from the PDFs in
`Documents/` — `Voca_ROI_Report` (BrightLocal, Harvard, Bain, Womply, ReviewTrackers,
Vendasta figures), `Voca_Investor_Brief` (market size, pricing tiers, the four brand
values, architecture), and `Voca_ICP_GTM` (segments and per-segment messaging). Each
stat object in `content.js` carries a `source`. When adding a stat, cite a real one —
credibility is the whole point.

## The message

Positioning, from `Voca_Investor_Brief`: Voca is **"שכבת האמפתיה של העסק הדיגיטלי"** —
the layer every channel and every business system plugs into. Tagline: **"הקול של כל עסק."**

The page must read as *infrastructure a service business already needs*, not a bolt-on
tool. The core insight (ROI report + ICP): **the gap is capacity, not awareness** — the
owner already knows reputation matters, they just cannot be everywhere at once. The
node graph in the solution section is that argument, drawn. The capability cards are
the four official brand values (context → precision, a voice like yours, availability
with no substitute, you stay in control).

## Bilingual (he/en)

`landing.html` ships with a live language switch (nav, top-right in RTL) driven by `content.js` + `app.js` — same pattern as the original `../design_handoff/voca-landing/` example. Static text lives on elements as `data-i18n="section.key"`; `app.js`'s `applyI18n()` reads the matching key from `CONTENT[currentLang]` in `content.js` and fills it in, and also flips `dir`/`lang` on `<html>`. Repeating lists (feed items, dashboard metrics, feature rows, proof stats) are rendered from arrays in `content.js` by small render functions in `app.js` — never hardcode a list item in the HTML.

**Adding a new piece of copy**: add the key to both `he` and `en` objects in `content.js`, then reference it with `data-i18n="..."` on the element (or read it inside the relevant `render*()` function in `app.js` if it's part of a list).

## What's intentionally not here yet

- **ElevenLabs voice widget**: mentioned as optional in the build brief, not embedded — no widget code/credentials were provided. Slot it into `landing.html` and restyle its colors/fonts via ElevenLabs' customization API to match these tokens when ready.
