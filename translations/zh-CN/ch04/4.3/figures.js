/* Figures for section 4.3 Nonlinear atomic response.
   The book gives no numbers: distance is in units of 1/α₀ (Figure 4.3), and frequencies are
   angular frequencies in μs⁻¹ as in 2.1 (Figures 4.4 + 4.5). The strong field ℰ₊ (pump) and
   the weak field ℰ₋ (probe) are the section's referents. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['4.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, register, begin, line, dot, text, topline, label, axes, curve, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const sgn = (x, d) => (x < -0.5 * 10 ** -d ? '−' + fmt(-x, d) : fmt(Math.abs(x), d));
const sgnTex = (x, d) => (x < -0.5 * 10 ** -d ? '-' + fmt(-x, d) : fmt(Math.abs(x), d));
/* a closed region between two functions of x, filled */
function band(ctx, lo, hi, x0, x1, X, Y, color, n = 400) {
  ctx.save(); ctx.fillStyle = color; ctx.beginPath();
  for (let i = 0; i <= n; i++) { const x = x0 + ((x1 - x0) * i) / n; if (i) ctx.lineTo(X(x), Y(hi(x))); else ctx.moveTo(X(x), Y(hi(x))); }
  for (let i = n; i >= 0; i--) { const x = x0 + ((x1 - x0) * i) / n; ctx.lineTo(X(x), Y(lo(x))); }
  ctx.closePath(); ctx.fill(); ctx.restore();
}

/* =====================================================================
   FIGURE 4.3 · sim-saturated-decay · still, graph alone
   dI/dz = −α₀ I/(1 + I/I_sat), from α = k̄ Im[χ_n(0)] (4.36, 4.61) with s = I/I_sat.
   Exact profile: α₀z = ln(I(0)/I) + (I(0) − I)/I_sat, solved for I by bisection on ln I.
   Axes fixed: α₀z 0…12 (I(0) = 8 I_sat falls to 1 % of itself at 12.5), I/I(0) 0…1.
===================================================================== */
(function () {
  const d = sim('sim-saturated-decay', 560);
  const s0 = ctl(d.controls, { label: '\\kIint(0)/\\kIint_\\mathrm{sat}', cls: 'intensity', key: 'I0', min: 0.05, max: 8, step: 0.01, value: 1, unit: '', dec: 2,
    aria: '入射光强，以饱和光强为单位', specials: [{ at: 1, label: '饱和光强' }] });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const BOX = { l: 170, r: 1250, t: 120, b: 470 }, ZM = 12;
  /* I(z)/I(0) for an entering s₀ = I(0)/I_sat */
  const u = (z, s) => { let lo = -80, hi = 0; for (let i = 0; i < 60; i++) { const L = (lo + hi) / 2; if (-L + s * (1 - Math.exp(L)) - z > 0) lo = L; else hi = L; } return Math.exp((lo + hi) / 2); };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const s = s0.v, cI = C('intensity');
    const { X, Y } = axes(ctx, BOX, [0, ZM], [0, 1], { nx: 6, ny: 5, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kalpha_0 z$', BOX.r, BOX.b + 58, C('susceptibility'), { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kIint/\\kIint(0)$', BOX.l, BOX.t - 26, cI, { size: 20, weight: 600, tex: true });
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, (z) => Math.exp(-z), 0, ZM, X, Y, alpha(cI, 0.75), 3, 240); ctx.restore();
    curve(ctx, (z) => u(z, s), 0, ZM, X, Y, cI, 5, 300);
    /* the saturation intensity as a level, where the beam starts at or above it */
    if (s >= 1) {
      const yl = 1 / s, zc = Math.log(s) + s - 1;
      line(ctx, BOX.l, Y(yl), BOX.r, Y(yl), alpha(cI, 0.5), 2, [4, 8]);
      dot(ctx, X(zc), Y(yl), cI, true, 9);
      hits.push({ x: X(zc), y: Y(yl), r: 18, name: `光束在α₀z = ${fmt(zc, 2)}处达到饱和光强` });
      if (zc > 1.2) text(ctx, '饱和情形', X(zc / 2) + 20, Y(u(zc / 2, s)) - 6, PAL.muted, { size: 20, weight: 600 });
    }
    const zc = s >= 1 ? Math.log(s) + s - 1 : 0, zl = Math.min(ZM - 1.4, zc + Math.max(1.2, (ZM - zc) / 2));
    let yL = Y(u(zl, s)) - 30; if (s >= 1 && Math.abs(yL - Y(1 / s)) < 20) yL = Y(1 / s) - 24;
    text(ctx, '线性情形', X(zl), yL, PAL.muted, { size: 20, weight: 600, align: 'center' });
    /* legend */
    const lx = BOX.r - 330, ly = BOX.t + 16;
    line(ctx, lx, ly, lx + 44, ly, cI, 5); text(ctx, '这束光', lx + 56, ly, cI, { size: 18, weight: 600 });
    line(ctx, lx, ly + 30, lx + 44, ly + 30, alpha(cI, 0.75), 3, [10, 10]); text(ctx, '弱光束，$e^{-\\kalpha_0 z}$', lx + 56, ly + 30, cI, { size: 18, weight: 600, tex: true });
    if (s >= 1) { line(ctx, lx, ly + 60, lx + 44, ly + 60, alpha(cI, 0.5), 2, [4, 8]); text(ctx, '$\\kIint = \\kIint_\\mathrm{sat}$', lx + 56, ly + 60, cI, { size: 18, weight: 600, tex: true }); }
    const zh = Math.LN2 + s / 2;
    topline(ctx, `以$\\kIint(0)$ = ${fmt(s, 2)} $\\kIint_\\mathrm{sat}$入射时，光束在$\\kalpha_0 z$ = ${fmt(zh, 2)}处衰减到其光强的一半；弱光束则在${fmt(Math.LN2, 2)}处。`);
    ro.set(`\\frac{d\\kIint}{dz} = -\\frac{\\kalpha_0\\kIint}{1 + \\kIint/\\kIint_\\mathrm{sat}},\\qquad \\kalpha(0) = \\frac{\\kalpha_0}{1 + ${fmt(s, 2)}} = ${fmt(1 / (1 + s), 2)}\\,\\kalpha_0`);
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 4.4 + 4.5 · sim-saturation-spectroscopy · still, two graphs on one x scale
   Eq. (4.74) to all orders in Ω₊, integrated numerically: n(v_z) the Gaussian of Eq. (4.51)
   with kv_T = 12 μs⁻¹, radiatively broadened (γ = 2γ₁₂), so S(δ − kv_z) of Eq. (4.71)
   is 2|Ω₊|²/(γ₁₂² + (δ − kv_z)²). Upper: n(v_z)(ρ₁₁ − ρ₂₂)^{(v_z)} against kv_z, the pump's
   hole at kv_z = δ (the text's ν = Δ + kv_z), the probe's class at kv_z = −δ with area ∝ α₋.
   Lower: α₋ against δ relative to its peak without the pump. Axes fixed: −36…36 μs⁻¹.
===================================================================== */
(function () {
  const d = sim('sim-saturation-spectroscopy', 830);
  const KVT = 12, XM = 36;
  const dl = ctl(d.controls, { label: '\\kdelta', cls: 'frequency', key: 'delta', min: -30, max: 30, step: 0.1, value: -12, unit: 'μs⁻¹', dec: 1,
    aria: '两束光相对于原子共振的失谐δ，单位为微秒的倒数', specials: [{ at: 0, label: '共振' }] });
  const om = ctl(d.controls, { label: '|\\kOmegap|', cls: 'coupling', key: 'Omega', min: 0, max: 3, step: 0.01, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: '抽运光的拉比频率，单位为微秒的倒数', specials: [{ at: 0, label: '无抽运光' }] });
  const gm = ctl(d.controls, { label: '\\kgammaonetwo', cls: 'rate', key: 'gamma12', min: 0.5, max: 4, step: 0.01, value: 1, unit: 'μs⁻¹', dec: 2,
    aria: '相干性衰变率γ₁₂，单位为微秒的倒数' });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  const B1 = { l: 170, r: 1250, t: 150, b: 390 }, B2 = { l: 170, r: 1250, t: 510, b: 730 };
  const nv = (x) => Math.exp(-((x / KVT) ** 2));
  const S = (x, o, g) => (2 * o * o) / (g * g + x * x);
  /* α₋(δ) ∝ ∫ n(v_z) γ₁₂/(γ₁₂² + (δ + kv_z)²) / (1 + S(δ − kv_z)) d(kv_z) */
  const absorb = (de, o, g) => {
    const h = Math.min(0.05, g / 12); let a = 0;
    for (let x = -64; x <= 64; x += h) a += (nv(x) * g) / (g * g + (de + x) ** 2) / (1 + S(de - x, o, g));
    return a * h;
  };
  let key = '', spec = null;
  const spectrum = (o, g) => {
    const k = `${o}|${g}`; if (k === key) return spec;
    const N = 288, norm = absorb(0, 0, g), de = [], with_ = [], without = [];
    for (let i = 0; i <= N; i++) { const x = -XM + (2 * XM * i) / N; de.push(x); with_.push(absorb(x, o, g) / norm); without.push(absorb(x, 0, g) / norm); }
    key = k; spec = { de, with_, without, norm, N }; return spec;
  };
  const at = (arr, sp, x) => { const f = ((x + XM) / (2 * XM)) * sp.N, i = Math.max(0, Math.min(sp.N - 1, Math.floor(f))), t = f - i; return arr[i] * (1 - t) + arr[i + 1] * t; };
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const de = dl.v, o = om.v, g = gm.v, cN = C('density'), cX = C('susceptibility'), cF = C('frequency'), rp = F.ref('pump'), rq = F.ref('probe');
    const k = F.arrival(d);
    const pop = (x) => nv(x) / (1 + S(de - x, o, g));
    const cls = (x) => (pop(x) * g * g) / (g * g + (de + x) ** 2);
    /* upper graph: the velocity classes */
    const A = axes(ctx, B1, [-XM, XM], [0, 1.2], { nx: 6, ny: 0 });
    text(ctx, '$\\kkmag\\kvz$ (μs⁻¹)', B1.r, B1.b + 58, cF, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\knv(\\krhooneone - \\krhotwotwo)^{(\\kvz)}$', B1.l, B1.t - 26, cN, { size: 20, weight: 600, tex: true });
    if (o > 1e-6) band(ctx, pop, nv, -XM, XM, A.X, A.Y, alpha(rp, 0.55 * k), 600);
    band(ctx, () => 0, cls, -XM, XM, A.X, A.Y, alpha(rq, 0.6 * k), 900);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, nv, -XM, XM, A.X, A.Y, alpha(cN, 0.8), 3, 300); ctx.restore();
    curve(ctx, pop, -XM, XM, A.X, A.Y, cN, 5, 900);
    curve(ctx, cls, -XM, XM, A.X, A.Y, rq, 2, 900);
    /* the two classes named, pushed apart where they meet */
    const xp = A.X(de), xq = A.X(-de), close = Math.abs(xp - xq) < 170, side = de >= 0 ? 1 : -1;
    const lp = close ? (xp + xq) / 2 + side * 90 : xp, lq = close ? (xp + xq) / 2 - side * 90 : xq;
    if (o > 1e-6) text(ctx, '抽运光$\\kEp$', lp, A.Y(nv(de)) - 30, rp, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    text(ctx, '探测光$\\kEm$', lq, Math.min(A.Y(pop(-de)) - 30, A.Y(nv(-de)) - (close ? 62 : 30)), rq, { size: 20, weight: 600, align: 'center', tex: true, bg: PAL.panel });
    if (o > 1e-6) hits.push({ x: xp, y: A.Y((nv(de) + pop(de)) / 2), r: 22, name: `抽运光使之饱和的原子，kv_z = ${sgn(de, 1)} μs⁻¹：ρ₁₁ − ρ₂₂降到${fmt(1 / (1 + S(0, o, g)), 2)}` });
    hits.push({ x: xq, y: A.Y(cls(-de) / 2), r: 22, name: `吸收探测光的原子，kv_z = ${sgn(-de, 1)} μs⁻¹` });
    const lx = B1.l + 18, ly = B1.t + 6;
    line(ctx, lx, ly, lx + 40, ly, alpha(cN, 0.8), 3, [10, 10]); text(ctx, '无抽运光', lx + 52, ly, cN, { size: 17, weight: 600 });
    line(ctx, lx, ly + 28, lx + 40, ly + 28, cN, 5); text(ctx, '有抽运光', lx + 52, ly + 28, cN, { size: 17, weight: 600 });
    /* lower graph: the probe's absorption */
    const sp = spectrum(o, g);
    const Bq = axes(ctx, B2, [-XM, XM], [0, 1], { nx: 6, ny: 2, fy: (v) => fmt(v, 1) });
    text(ctx, '$\\kdelta = \\knu - \\kDelta$ (μs⁻¹)', B2.r, B2.b + 58, cF, { size: 20, weight: 600, align: 'right', tex: true });
    text(ctx, '$\\kalpha_-$', B2.l, B2.t - 26, cX, { size: 20, weight: 600, tex: true });
    const fW = (x) => at(sp.with_, sp, x), fO = (x) => at(sp.without, sp, x);
    ctx.save(); ctx.setLineDash([10, 10]); curve(ctx, fO, -XM, XM, Bq.X, Bq.Y, alpha(cX, 0.8), 3, sp.N); ctx.restore();
    curve(ctx, fW, -XM, XM, Bq.X, Bq.Y, cX, 5, sp.N);
    const a = fW(de), a0 = fO(de);
    line(ctx, Bq.X(de), Bq.Y(a) + 10, Bq.X(de), B2.b, alpha(PAL.ink, 0.35), 2, [4, 8]);
    line(ctx, Bq.X(de), B1.b, Bq.X(de), A.Y(pop(de)) + 4, alpha(PAL.ink, 0.25), 2, [4, 8]);
    dot(ctx, Bq.X(de), Bq.Y(a), cX);
    hits.push({ x: Bq.X(de), y: Bq.Y(a), r: 18, name: `探测光在δ = ${sgn(de, 1)} μs⁻¹处的吸收：为无抽运光时峰值的${fmt(a, 2)}` });
    const dip = fO(0) - fW(0);
    if (dip > 0.02 && Math.abs(Bq.X(de) - Bq.X(0)) > 60 && Bq.Y(fW(0)) + 34 < B2.b - 24) {
      label(ctx, '凹陷', Bq.X(0), Bq.Y(fW(0)) + 34, { side: 'below', color: cX, gap: 6, leader: false, size: 18 });
    }
    if (dip > 0.02) hits.push({ x: Bq.X(0), y: Bq.Y(fW(0)), r: 18, name: `δ = 0处的饱和吸收凹陷：${fmt(fW(0), 2)}，无抽运光时为${fmt(fO(0), 2)}` });
    const pc = a0 > 1e-9 ? (100 * a) / a0 : 100;
    topline(ctx, o < 1e-6
      ? `无抽运光时，探测光读取$\\kkmag\\kvz$ = ${sgn(-de, 1)} μs⁻¹处的原子，其吸收描出整个多普勒轮廓。`
      : `$\\kdelta$ = ${sgn(de, 1)} μs⁻¹时，抽运光使$\\kkmag\\kvz$ = ${sgn(de, 1)} μs⁻¹处的原子饱和，探测光读取的是${sgn(-de, 1)} μs⁻¹处的原子；它吸收的量为无抽运光时的${fmt(pc, 0)} %。`);
    const Sq = S(2 * de, o, g);
    ro.set(`S(\\kdelta - k\\kvz) = \\frac{4|\\kOmegap|^2(\\kgammaonetwo/\\kgamma)}{\\kgammaonetwo^2 + (\\kdelta - k\\kvz)^2} = \\frac{2(${fmt(o, 2)})^2}{(${fmt(g, 2)})^2 + (${sgnTex(2 * de, 1)})^2} = ${fmt(Sq, Sq < 0.01 ? 4 : 2)}`,
      `在$\\kkmag\\kvz = -\\kdelta$处，探测光读取的原子，其中$\\kgamma = 2\\kgammaonetwo$。`, { form: 'S' });
  }
  register(d.fig, { update: () => {}, draw });
})();

};
