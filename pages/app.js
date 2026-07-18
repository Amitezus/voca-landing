// Voca landing page — rendering + interactions.
// Reads copy/data from CONTENT + CHART_DATA (content.js), fills [data-i18n] text,
// and builds every chart as inline SVG so the page speaks the same graphic
// language as the product dashboard. Edit copy/data in content.js.

let currentLang = 'he';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function get(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
}
function badgeClass(variant) {
  return variant ? `badge badge--${variant}` : 'badge';
}
function fmtNum(v, dec) {
  return dec ? v.toFixed(dec) : Math.round(v).toLocaleString('en-US');
}

/* ---------- SVG chart builders ---------- */

// Ring holds the number only; the label is rendered below it by the caller.
function gaugeSVG(pct, { size = 124, sw = 12 } = {}) {
  const r = size / 2 - sw / 2 - 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - pct / 100);
  return `
    <div class="gauge" style="width:${size}px;height:${size}px">
      <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <circle class="gauge-track" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${sw}"></circle>
        <circle class="gauge-value" cx="${size / 2}" cy="${size / 2}" r="${r}" stroke-width="${sw}"
          style="--c:${c.toFixed(1)}; --off:${off.toFixed(1)}; stroke-dasharray:${c.toFixed(1)}"></circle>
      </svg>
      <div class="gauge-center">
        <span class="gauge-num" data-count="${pct}" data-suffix="%">0%</span>
      </div>
    </div>`;
}

function gaugeFigure(pct, label, opts) {
  return `<figure class="gauge-figure">
    ${gaugeSVG(pct, opts)}
    <figcaption class="gauge-caption">${label}</figcaption>
  </figure>`;
}

let sparkSeq = 0;
function sparkSVG(data, { w = 240, h = 60 } = {}) {
  const id = `sparkFill${sparkSeq++}`;
  const min = Math.min(...data), max = Math.max(...data), span = max - min || 1;
  const pad = 5, n = data.length;
  const xAt = (i) => (i / (n - 1)) * w;
  const yAt = (v) => pad + (1 - (v - min) / span) * (h - 2 * pad);
  let d = '', len = 0, px = 0, py = 0;
  data.forEach((v, i) => {
    const x = xAt(i), y = yAt(v);
    if (i === 0) d = `M${x.toFixed(1)},${y.toFixed(1)}`;
    else { d += ` L${x.toFixed(1)},${y.toFixed(1)}`; len += Math.hypot(x - px, y - py); }
    px = x; py = y;
  });
  const area = `${d} L${w.toFixed(1)},${h} L0,${h} Z`;
  const lx = xAt(n - 1), ly = yAt(data[n - 1]);
  return `
    <div class="spark">
      <svg viewBox="0 0 ${w} ${h}">
        <defs>
          <linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" style="stop-color:var(--data-primary)" stop-opacity="0.32"></stop>
            <stop offset="1" style="stop-color:var(--data-primary)" stop-opacity="0"></stop>
          </linearGradient>
        </defs>
        <path d="${area}" fill="url(#${id})"></path>
        <path class="spark-line" d="${d}" style="--len:${Math.ceil(len)}"></path>
        <circle class="spark-dot" cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="3.5"></circle>
      </svg>
    </div>`;
}

/* ---------- Section renderers ---------- */

function renderHeroPanel(t) {
  const h = t.hero;
  document.getElementById('heroPanel').innerHTML = `
    <div class="hero-panel-head">
      <span class="hero-panel-title">${h.panelTitle}</span>
      <span class="hero-panel-status"><span class="live-dot"></span>${h.panelStatus}</span>
    </div>
    <div class="hero-panel-grid">
      ${gaugeFigure(h.gaugeValue, h.gaugeLabel, { size: 112 })}
      <div class="hero-spark-block">
        <div class="hero-spark-top">
          <span class="hero-spark-value">${h.sparkValue}</span>
          <span class="hero-spark-delta">${h.sparkDelta}</span>
        </div>
        <span class="hero-spark-label">${h.sparkLabel}</span>
        ${sparkSVG(CHART_DATA.heroSpark, { w: 240, h: 52 })}
      </div>
    </div>
    <div class="hero-chips">
      <div class="hero-chip">
        <div class="hero-chip-value">${h.chip1Value}</div>
        <div class="hero-chip-label">${h.chip1Label}</div>
      </div>
      <div class="hero-chip">
        <div class="hero-chip-value">${h.chip2Value}</div>
        <div class="hero-chip-label">${h.chip2Label}</div>
      </div>
    </div>`;
}

function renderTrust(t) {
  document.getElementById('trustGrid').innerHTML = t.trust.items.map((it) => `
    <div class="trust-item">
      <span class="trust-value">${it.value}</span>
      <span class="trust-label">${it.label}</span>
      <span class="source">${it.source}</span>
    </div>
  `).join('');
}

function renderProblem(t) {
  const p = t.problem;

  document.getElementById('gapCard').innerHTML = `
    <p class="gap-card-title">${p.gapTitle}</p>
    <div class="gap">
      <div class="gap-pair">
        <div class="gap-bar gap-bar--high">
          <div class="gap-bar-head">
            <span class="gap-bar-value">${p.gapHigh.value}%</span>
            <span class="gap-bar-label">${p.gapHigh.label}</span>
          </div>
          <div class="gap-track"><div class="gap-track-fill" style="--pct:${p.gapHigh.value}"></div></div>
        </div>
        <div class="gap-bar gap-bar--low">
          <div class="gap-bar-head">
            <span class="gap-bar-value">${p.gapLow.value}%</span>
            <span class="gap-bar-label">${p.gapLow.label}</span>
          </div>
          <div class="gap-track"><div class="gap-track-fill" style="--pct:${p.gapLow.value}"></div></div>
        </div>
      </div>
    </div>
    <p class="gap-note">${p.gapNote}</p>
    <span class="source">${p.gapSource}</span>`;

  document.getElementById('problemBars').innerHTML = p.bars.map((b) => `
    <div class="problem-stat">
      <span class="problem-stat-num" data-count="${b.value}" data-suffix="%">0%</span>
      <span class="problem-stat-label">${b.label}</span>
      <span class="source">${b.source}</span>
    </div>
  `).join('');
}

// Voca brand mark (assets/logo/voca-mark.svg), inlined so it can be filled from CSS.
// Authored in a 393.06 square viewBox; markGroup() scales/centres it.
const VOCA_MARK_PATHS = [
  'M247.48,101.75v-.34s64.95,48.44,64.95,48.44c9.83,7.33,9.82,22.07-.02,29.38l-65.2,48.47v-.21s-51.04,37.94-51.04,37.94l-.14,63.8,181.56-134.98c9.95-7.4,14.92-18.54,14.92-29.69s-4.96-22.26-14.88-29.66L196.75,0l-.14,63.8,50.87,37.94Z',
  'M145.03,291.31v.34s-64.95-48.44-64.95-48.44c-9.83-7.33-9.82-22.07.02-29.38l65.2-48.47v.21s51.04-37.94,51.04-37.94l.14-63.8L14.92,198.79c-9.95,7.4-14.92,18.54-14.92,29.69s4.96,22.26,14.88,29.66l180.88,134.91.14-63.8-50.87-37.94Z',
  'M196.76,203.01c21.2,0,62.26-17.19,62.26-38.39s-41.06-38.39-62.26-38.39v76.78Z',
  'M196.44,190.05c-21.2,0-62.26,17.19-62.26,38.39s41.06,38.39,62.26,38.39v-76.78Z',
];
const MARK_VB = 393.06;

// Full lockup = mark + "VOCA" wordmark, in the original 1235.62 x 393.06 viewBox.
const VOCA_WORDMARK_PATHS = [
  'M624.12,166.07h.23s-41.83,56.08-41.83,56.08l-41.83-56.27h.14s-25.13-33.81-25.13-33.81l-42.26-.09,89.41,120.27c4.9,6.59,12.28,9.89,19.67,9.89s14.74-3.28,19.64-9.85l89.37-119.82-42.26-.09-25.13,33.7Z',
  'M801.86,165.59c5.85,0,10.6,4.76,10.6,10.6v41.97c0,5.85-4.76,10.6-10.6,10.6h-73.13c-5.85,0-10.6-4.76-10.6-10.6v-41.97c0-5.85,4.76-10.6,10.6-10.6h73.13M801.86,131.83h-73.13c-24.5,0-44.35,19.86-44.35,44.35v41.97c0,24.5,19.86,44.35,44.35,44.35h73.13c24.5,0,44.35-19.86,44.35-44.35v-41.97c0-24.5-19.86-44.35-44.35-44.35h0Z',
  'M979.75,228.73c-.24.02-.47.04-.71.04h-73.13c-5.85,0-10.6-4.76-10.6-10.6v-41.97c0-5.85,4.76-10.6,10.6-10.6h73.13c.24,0,.48.02.71.04h42.36c-4.74-19.39-22.22-33.79-43.08-33.79h-73.13c-24.5,0-44.35,19.86-44.35,44.35v41.97c0,24.5,19.86,44.35,44.35,44.35h73.13c20.85,0,38.34-14.4,43.08-33.79h-42.37Z',
  'M1084.93,228.05h-.23s41.83-56.08,41.83-56.08l41.83,56.27h-.14s25.13,33.81,25.13,33.81l42.26.09-89.41-120.27c-4.9-6.59-12.28-9.89-19.67-9.89s-14.74,3.28-19.64,9.85l-89.37,119.82,42.26.09,25.13-33.7Z',
];
const LOCKUP_VB = { w: 1235.62, h: 393.06 };

function markGroup(cx, cy, size, cls) {
  const k = size / MARK_VB;
  return `<g class="${cls}" transform="translate(${(cx - size / 2).toFixed(1)},${(cy - size / 2).toFixed(1)}) scale(${k.toFixed(4)})">
      ${VOCA_MARK_PATHS.map((d) => `<path d="${d}"></path>`).join('')}
    </g>`;
}

// Full logo (mark + wordmark), centred horizontally on cx, top edge at y.
function lockupGroup(cx, y, height, cls) {
  const k = height / LOCKUP_VB.h;
  const w = LOCKUP_VB.w * k;
  return `<g class="${cls}" transform="translate(${(cx - w / 2).toFixed(1)},${y.toFixed(1)}) scale(${k.toFixed(4)})">
      ${[...VOCA_MARK_PATHS, ...VOCA_WORDMARK_PATHS].map((d) => `<path d="${d}"></path>`).join('')}
    </g>`;
}

// Platforms ← Voca → business data. The point of the page, drawn.
// Two layouts share the same visual language (mark/lockup, node/link/pulse
// styling): a wide horizontal fan (desktop/tablet) and a stacked vertical
// fan (mobile) — the vertical one is the horizontal one rotated 90° CW:
// what was the left column becomes the top row, the right column the
// bottom row, and the hub stays in the middle.
function nodeMotion(kind, i, d) {
  if (reduceMotion) return '';
  return `<circle class="ng-pulse ng-pulse--${kind}" r="2.5">
    <animateMotion dur="3s" begin="${(i * 0.45).toFixed(2)}s" repeatCount="indefinite" path="${d}"></animateMotion>
  </circle>`;
}

function buildHorizontalGraph(s) {
  const W = 1000, H = 510;
  const TOP = 74;                     // headroom for the logo lockup
  const HUB = { x: W / 2, y: TOP + (H - TOP) / 2, r: 52 };
  const NR = 19;                      // node radius
  const LEFT_X = 170, RIGHT_X = W - 170;
  const ys = (n) => {
    const step = 88, mid = (n - 1) / 2;
    return Array.from({ length: n }, (_, i) => HUB.y + (i - mid) * step);
  };

  const linkPath = (nx, ny, side) => {
    const startX = nx + side * NR;
    const endX = HUB.x - side * HUB.r;
    const c1 = nx + side * 130;
    const c2 = HUB.x - side * 130;
    return `M${startX},${ny} C${c1},${ny} ${c2},${HUB.y} ${endX},${HUB.y}`;
  };

  const nodeGroup = (items, xs, yList, side, kind) => items.map((item, i) => {
    const y = yList[i];
    const d = linkPath(xs, y, side);
    const labelX = xs - side * (NR + 14);
    const anchor = side === 1 ? 'end' : 'start';
    return `
      <path class="ng-link ng-link--${kind}" d="${d}"></path>
      ${nodeMotion(kind, i, d)}
      <circle class="ng-node ng-node--${kind}" cx="${xs}" cy="${y}" r="${NR}"></circle>
      <text class="ng-icon ng-icon--${kind}" x="${xs}" y="${y}" text-anchor="middle" dominant-baseline="central">${item.icon}</text>
      <text class="ng-label" x="${labelX}" y="${y}" text-anchor="${anchor}" dominant-baseline="central">${item.label}</text>`;
  }).join('');

  const inner = `
      ${lockupGroup(W / 2, 8, 40, 'ng-lockup')}
      <text class="ng-col-title" x="${LEFT_X}" y="${TOP + 4}" text-anchor="middle">${s.graphPlatformsTitle}</text>
      <text class="ng-col-title" x="${RIGHT_X}" y="${TOP + 4}" text-anchor="middle">${s.graphDataTitle}</text>

      ${nodeGroup(s.platforms, LEFT_X, ys(s.platforms.length), 1, 'platform')}
      ${nodeGroup(s.dataSources, RIGHT_X, ys(s.dataSources.length), -1, 'data')}

      <circle class="ng-hub-ring" cx="${HUB.x}" cy="${HUB.y}" r="${HUB.r}"></circle>
      <circle class="ng-hub" cx="${HUB.x}" cy="${HUB.y}" r="${HUB.r}"></circle>
      ${markGroup(HUB.x, HUB.y, HUB.r, 'ng-hub-mark')}
      <text class="ng-hub-label" x="${HUB.x}" y="${HUB.y + HUB.r + 20}" text-anchor="middle">${s.hubSub}</text>`;

  return { W, H, inner };
}

function buildVerticalGraph(s) {
  const W = 360;
  const NR = 15;                      // node radius (smaller — tight width)
  const n = Math.max(s.platforms.length, s.dataSources.length);
  const MARGIN = 40;
  const pitch = n > 1 ? (W - MARGIN * 2) / (n - 1) : 0;
  const xAt = (i) => MARGIN + i * pitch;

  const LOCKUP_Y = 8, LOCKUP_H = 32;
  const TITLE1_Y = LOCKUP_Y + LOCKUP_H + 42;   // "where customers speak" (+12 headroom for a wrapped label line)
  const LABEL1_Y = TITLE1_Y + 30;              // nearest-to-node label line, above row 1 (outward from hub)
  const ROW1_Y = LABEL1_Y + 24;                // platform node centres

  const HUB = { x: W / 2, y: ROW1_Y + 122, r: 40 };

  const HUB_LABEL_Y = HUB.y + HUB.r + 22;
  const TITLE2_Y = HUB_LABEL_Y + 30;           // "your business data"
  const ROW2_Y = TITLE2_Y + 38;                // data-source node centres
  const LABEL2_Y = ROW2_Y + NR + 16;           // nearest-to-node label line, below row 2 (outward from hub)
  const H = LABEL2_Y + 20 + 12;                 // padding + room for a wrapped second label line

  const bend = 55;
  // Converging down: from a top-row node into the hub.
  const linkDown = (x, y) => {
    const startY = y + NR, endY = HUB.y - HUB.r;
    return `M${x},${startY} C${x},${startY + bend} ${HUB.x},${endY - bend} ${HUB.x},${endY}`;
  };
  // Diverging down: from the hub into a bottom-row node.
  const linkFromHub = (x, y) => {
    const startY = HUB.y + HUB.r, endY = y - NR;
    return `M${HUB.x},${startY} C${HUB.x},${startY + bend} ${x},${endY - bend} ${x},${endY}`;
  };

  // Multi-word labels (in any language) wrap to 2 lines rather than growing
  // sideways into a neighbour — the line nearest the node stays anchored at
  // labelY, and any extra line grows further AWAY from the node/row.
  const LH = 12;
  const wrapLabel = (text) => {
    const idx = text.indexOf(' ');
    return idx === -1 ? [text] : [text.slice(0, idx), text.slice(idx + 1)];
  };
  const labelTspans = (text, x, labelY, dir) => wrapLabel(text).map((line, i, lines) => {
    const distFromNearest = dir === 'below' ? i : lines.length - 1 - i;
    const y = dir === 'below' ? labelY + distFromNearest * LH : labelY - distFromNearest * LH;
    return `<tspan x="${x}" y="${y}">${line}</tspan>`;
  }).join('');

  const row = (items, rowY, labelY, kind, linkFn, dir) => items.map((item, i) => {
    const x = xAt(i);
    const d = linkFn(x, rowY);
    return `
      <path class="ng-link ng-link--${kind}" d="${d}"></path>
      ${nodeMotion(kind, i, d)}
      <circle class="ng-node ng-node--${kind}" cx="${x}" cy="${rowY}" r="${NR}"></circle>
      <text class="ng-icon ng-icon--${kind}" x="${x}" y="${rowY}" text-anchor="middle" dominant-baseline="central">${item.icon}</text>
      <text class="ng-label" text-anchor="middle">${labelTspans(item.label, x, labelY, dir)}</text>`;
  }).join('');

  const inner = `
      ${lockupGroup(W / 2, LOCKUP_Y, LOCKUP_H, 'ng-lockup')}
      <text class="ng-col-title" x="${W / 2}" y="${TITLE1_Y}" text-anchor="middle">${s.graphPlatformsTitle}</text>
      ${row(s.platforms, ROW1_Y, LABEL1_Y, 'platform', linkDown, 'above')}

      <circle class="ng-hub-ring" cx="${HUB.x}" cy="${HUB.y}" r="${HUB.r}"></circle>
      <circle class="ng-hub" cx="${HUB.x}" cy="${HUB.y}" r="${HUB.r}"></circle>
      ${markGroup(HUB.x, HUB.y, HUB.r, 'ng-hub-mark')}
      <text class="ng-hub-label" x="${HUB.x}" y="${HUB_LABEL_Y}" text-anchor="middle">${s.hubSub}</text>

      <text class="ng-col-title" x="${W / 2}" y="${TITLE2_Y}" text-anchor="middle">${s.graphDataTitle}</text>
      ${row(s.dataSources, ROW2_Y, LABEL2_Y, 'data', linkFromHub, 'below')}`;

  return { W, H, inner };
}

let nodeGraphIsMobile = null;
function renderNodeGraph(t) {
  const s = t.solution;
  nodeGraphIsMobile = window.matchMedia('(max-width: 767px)').matches;
  const { W, H, inner } = nodeGraphIsMobile ? buildVerticalGraph(s) : buildHorizontalGraph(s);
  document.getElementById('nodeGraph').innerHTML =
    `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${s.graphPlatformsTitle} → ${s.hubLabel} → ${s.graphDataTitle}">${inner}</svg>`;
}

function renderDashboard(t) {
  document.getElementById('dashMetrics').innerHTML = t.dashboardMetrics.map((m) => `
    <div class="dash-metric">
      <p class="stat-number">${m.value}</p>
      <p class="stat-label">${m.label}</p>
      <p class="delta">${m.delta}</p>
    </div>
  `).join('');

  document.getElementById('dashFeedItems').innerHTML = t.dashboardFeed.map((fd) => `
    <div class="dash-feed-item">
      <div class="feed-item-top">
        <span class="${badgeClass(fd.variant)}">${fd.tag}</span>
        <span class="feed-meta">${fd.meta}</span>
      </div>
      <p class="body">${fd.body}</p>
      <div class="dash-reply">
        <span class="reply-label">${t.dashboard.replyLabel}</span>
        <p>${fd.reply}</p>
      </div>
    </div>
  `).join('');

  const d = t.dashboard;
  document.getElementById('dashQueue').innerHTML = `
    <div class="card card--accent">
      <div class="feed-item-top" style="margin-bottom:var(--space-3);">
        <span class="${badgeClass('accent')}">${d.queueTag}</span>
        <span class="feed-meta" style="margin-inline-start:0; color:var(--text-secondary);">${d.queueMeta}</span>
      </div>
      <p style="font-size:var(--text-sm); margin:0 0 var(--space-4);">${d.queueBody}</p>
      <div class="actions" style="margin-top:0;">
        <button type="button" class="btn btn--primary btn--sm">${d.queueApprove}</button>
        <button type="button" class="btn btn--tertiary btn--sm">${d.queueEdit}</button>
      </div>
    </div>`;
}

function renderFeatures(t) {
  document.getElementById('featureCards').innerHTML = t.features.map((f) => `
    <article class="feature-card">
      <span class="feature-card-icon"><span class="material-symbols-outlined">${f.icon}</span></span>
      <h3>${f.title}</h3>
      <p>${f.body}</p>
    </article>
  `).join('');
}

function renderProof(t) {
  document.getElementById('proofGrid').innerHTML = t.stats.map((s) => {
    const dec = String(s.num).includes('.') ? 1 : 0;
    return `
    <div class="stat-tile">
      <span class="stat-tile-num" data-count="${s.num}" data-decimals="${dec}" data-suffix="${s.suffix}">0${s.suffix}</span>
      <div class="stat-tile-track"><div class="stat-tile-fill" style="--pct:${Math.min(s.num, 100)}"></div></div>
      <span class="stat-tile-label">${s.label}</span>
      <span class="source">${s.source}</span>
    </div>`;
  }).join('');
}

function renderCostBars(t) {
  const p = t.pricing;
  // Voca's bar is held at a visible minimum so the ratio reads as "tiny", not "empty".
  const bar = (mod, name, price, unit, pct) => `
    <div class="cost-bar cost-bar--${mod}">
      <div class="cost-bar-head">
        <span class="cost-bar-name">${name}</span>
        <span class="cost-bar-amount">${price} <span class="cost-bar-unit">${unit}</span></span>
      </div>
      <div class="cost-track"><div class="cost-fill" style="--pct:${pct}"></div></div>
    </div>`;
  document.getElementById('costBars').innerHTML =
    bar('human', p.humanLabel, p.humanPrice, p.humanUnit, 100) +
    bar('voca', p.vocaLabel, p.vocaPrice, p.vocaUnit, 1.66);
}

/* ---------- i18n ---------- */

function applyI18n() {
  const t = CONTENT[currentLang];
  document.documentElement.lang = currentLang;
  document.documentElement.dir = t.dir;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = get(t, el.getAttribute('data-i18n'));
    if (typeof val === 'string') el.textContent = val;
  });
  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  renderHeroPanel(t);
  renderTrust(t);
  renderProblem(t);
  renderNodeGraph(t);
  renderDashboard(t);
  renderFeatures(t);
  renderProof(t);
  renderCostBars(t);

  setupAnimations();
}

/* ---------- Count-up + scroll-draw ---------- */

function countUp(el, animate) {
  const target = parseFloat(el.dataset.count);
  const dec = el.dataset.decimals ? parseInt(el.dataset.decimals, 10) : (String(target).includes('.') ? 1 : 0);
  const suffix = el.dataset.suffix || '';
  const prefix = el.dataset.prefix || '';
  if (!animate) { el.textContent = prefix + fmtNum(target, dec) + suffix; return; }
  const dur = 1100, t0 = performance.now();
  function tick(now) {
    const p = Math.min(1, (now - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = prefix + fmtNum(target * eased, dec) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function drawHost(host, animate) {
  host.classList.add('is-drawn');
  host.querySelectorAll('[data-count]').forEach((el) => countUp(el, animate && !reduceMotion));
}

const ANIMATED_HOSTS = ['heroPanel', 'trustGrid', 'gapCard', 'problemBars', 'nodeGraph', 'proofGrid', 'costBars'];

function setupAnimations() {
  ANIMATED_HOSTS.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.add('animate-on-view');
  });

  // Re-render (e.g. language switch): finalize already-drawn hosts instantly.
  document.querySelectorAll('.animate-on-view.is-drawn').forEach((h) => drawHost(h, false));

  const pending = [...document.querySelectorAll('.animate-on-view:not(.is-drawn)')];
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { drawHost(e.target, true); obs.unobserve(e.target); }
      });
    }, { threshold: 0.2 });
    pending.forEach((h) => io.observe(h));

    const reveals = document.querySelectorAll('.reveal:not(.is-visible)');
    const io2 = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach((r) => io2.observe(r));
  } else {
    pending.forEach((h) => drawHost(h, false));
    document.querySelectorAll('.reveal').forEach((r) => r.classList.add('is-visible'));
  }
}

/* ---------- Interactions ---------- */

document.querySelectorAll('.lang-switch button').forEach((btn) => {
  btn.addEventListener('click', () => { currentLang = btn.dataset.lang; applyI18n(); });
});

// Re-draw the node graph if the viewport crosses the mobile breakpoint
// (e.g. rotating a phone, or resizing a desktop window) so it never shows
// the wrong-orientation layout.
window.matchMedia('(max-width: 767px)').addEventListener('change', (e) => {
  if (e.matches !== nodeGraphIsMobile) renderNodeGraph(CONTENT[currentLang]);
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const modalOverlay = document.getElementById('modalOverlay');
const modalForm = document.getElementById('modalForm');
const stepForm = document.querySelector('.step-form');
const stepThanks = document.querySelector('.step-thanks');

function openModal() {
  stepForm.classList.remove('hidden');
  stepThanks.classList.add('hidden');
  modalForm.reset();
  modalOverlay.classList.add('is-open');
}
function closeModal() { modalOverlay.classList.remove('is-open'); }

document.getElementById('openModalBtn').addEventListener('click', openModal);
document.getElementById('navCtaBtn').addEventListener('click', openModal);
document.getElementById('finalCtaBtn').addEventListener('click', openModal);
document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
modalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  stepForm.classList.add('hidden');
  stepThanks.classList.remove('hidden');
});

applyI18n();
