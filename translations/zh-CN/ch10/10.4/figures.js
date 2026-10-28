/* Figures for section 10.4 Ion trap quantum computation.
   Figure 10.7 is a raster the book may not copy, so it is recomputed from the model and keeps
   its number with `withheld`. The levels |g⟩, |e⟩, the auxiliary |r₁⟩, ions m and n, and the
   two modes are the section's referents. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['10.4'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, choice, select, register, cycle, begin, line, arrow, dot, text, topline, label, axes, hbracket, hover, readout } = F;
const sim = (id, H) => F.sim(root, id, H);
const TAU = 2 * Math.PI;
/* a double-headed arrow between two points, dashed where asked */
function both(ctx, x1, y1, x2, y2, col, w, dash) {
  const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  line(ctx, x1 + ux * 10, y1 + uy * 10, x2 - ux * 10, y2 - uy * 10, col, w, dash);
  arrow(ctx, x1 + ux * 24, y1 + uy * 24, x1, y1, col, w); arrow(ctx, x2 - ux * 24, y2 - uy * 24, x2, y2, col, w);
}

/* =====================================================================
   FIGURE 10.7 · sim-ion-string · moving, 2D, graph below
   N ⁴⁰Ca⁺ ions in a harmonic trap of axial frequency ν. In units of
   ℓ = (e²/4πε₀mν²)^{1/3} the equilibrium solves u_m = Σ_{n≠m} sgn(u_m − u_n)/(u_m − u_n)²
   (relaxed once per N). The center-of-mass mode moves every ion equally at ν; the
   mode at √3ν moves ion m in proportion to u_m (the string's breathing, which for
   two ions is (10.34)'s stretch). Both are exact for any N. Scene ±14 μm fixed (N = 5
   at ν/2π = 0.5 MHz reaches ±12.3 μm); swings drawn at 0.3 of the closest spacing
   at most. Graph: X(t) and x(t) in the drawn scale, t from 0 to 4 μs; 4 μs of motion
   play over about 6 s.
===================================================================== */
(function () {
  const d = sim('sim-ion-string', 640);
  const K = 2.307077e-28 / (39.9626 * 1.66053907e-27);   /* e²/4πε₀m for ⁴⁰Ca⁺, m³/s² */
  const ell = (f) => Math.cbrt(K / (TAU * f * 1e6) ** 2) * 1e6;   /* μm */
  const EQ = {};
  const equil = (N) => {
    if (EQ[N]) return EQ[N];
    let u = Array.from({ length: N }, (_, i) => i - (N - 1) / 2);
    for (let it = 0; it < 3000; it++) u = u.map((x, m) => x - 0.1 * (x - u.reduce((s, y, n) => (n === m ? s : s + Math.sign(x - y) / (x - y) ** 2), 0)));
    return (EQ[N] = u);
  };
  const T = 4, CX = 700, SX = 1080 / 28, Y0 = 250, GB = { l: 190, r: 1250, t: 410, b: 560 };
  const cy = cycle(() => T, 1.2);
  const nPick = choice(d.controls, { label: '\\text{离子}', key: 'N', value: '2', ms: 0, aria: '离子数', onInput: () => cy.reset(),
    options: ['2', '3', '4', '5'].map((v) => ({ value: v, label: v })) });
  const COEF = { cm: [1, 0], s: [0, 1], both: [1, 1] };
  const mode = select(d.controls, { label: '\\text{模式}', key: 'mode', value: 'cm', aria: '离子以哪个模式摆动', onInput: () => cy.reset(),
    options: [{ value: 'cm', label: '质心' }, { value: 's', label: '伸缩' }, { value: 'both', label: '两者' }] });
  const fv = ctl(d.controls, { label: '\\knu/2\\pi', cls: 'frequency', key: 'nu', min: 0.5, max: 2, step: 0.01, value: 1, unit: 'MHz', dec: 2,
    aria: '阱频率除以 2π，以兆赫兹为单位', onInput: () => cy.reset() });
  const ro = readout(d);
  const hits = []; hover(d.stage, () => hits, d.c);
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const N = +nPick.value, u = equil(N), l = ell(fv.v), f = fv.v, now = cy.now();
    const [ccm, cs] = mode.mix((v) => COEF[v]);
    const cCm = F.ref('mode-cm'), cS = F.ref('mode-s'), cl = C('length'), ct = C('time');
    const umax = Math.max(...u.map(Math.abs)), gaps = u.slice(1).map((x, i) => x - u[i]), gmin = Math.min(...gaps);
    const A = Math.min(40, 0.3 * gmin * l * SX);
    const X0 = (t) => Math.cos(TAU * f * t), x0 = (t) => Math.cos(Math.sqrt(3) * TAU * f * t);
    /* the trap: ½mν²X², its walls steepening with ν² (200 units at the edge at 2 MHz) */
    ctx.save(); ctx.strokeStyle = alpha(PAL.ink, 0.45); ctx.lineWidth = 3; ctx.beginPath();
    for (let i = 0; i <= 120; i++) { const xm = -14 + (28 * i) / 120, y = Y0 + 16 - 200 * (f / 2) ** 2 * (xm / 14) ** 2; i ? ctx.lineTo(CX + xm * SX, y) : ctx.moveTo(CX + xm * SX, y); }
    ctx.stroke(); ctx.restore();
    hits.push({ x: CX + 12.5 * SX, y: Y0 + 16 - 200 * (f / 2) ** 2 * 0.8, r: 26, name: '阱的谐振势，(m/2)ν²X²' });
    line(ctx, CX - 14 * SX, Y0, CX + 14 * SX, Y0, alpha(PAL.ink, 0.25), 2, [4, 8]);
    u.forEach((um, i) => {
      const xe = CX + um * l * SX, dx = A * (ccm * X0(now) + cs * (um / umax) * x0(now));
      dot(ctx, xe, Y0, PAL.muted, false, 11);
      dot(ctx, xe + dx, Y0, F.el('Ca'), true, 11);
      hits.push({ x: xe + dx, y: Y0, r: 16, name: `离子 ${i + 1}，⁴⁰Ca⁺；其平衡位置是空心圆环，距中心 ${fmt(um * l, 1)} μm` });
    });
    /* the two middle ions' spacing */
    const j = Math.floor((N - 1) / 2), xa = CX + u[j] * l * SX, xb = CX + u[j + 1] * l * SX, sp = (u[j + 1] - u[j]) * l;
    hbracket(ctx, xa, xb, Y0 + 50, cl, (N === 2 ? 'a = ' : '') + fmt(sp, 1) + ' μm', { side: 'below' });
    hits.push({ x: (xa + xb) / 2, y: Y0 + 50, r: 30, name: N === 2 ? `平衡间距 a = ${fmt(sp, 1)} μm` : `中间离子的间距，${fmt(sp, 1)} μm` });
    /* the normal coordinates */
    const { X, Y } = axes(ctx, GB, [0, T], [-1.25, 1.25], { nx: 4, ny: 0, xl: 't (μs)', xc: ct, yl: '位移，所画比例', fx: (v) => fmt(v, 0) });
    const trace = (g, amp, col, name) => {
      ctx.save(); ctx.globalAlpha *= 0.25; F.curve(ctx, (t) => amp * g(t), 0, T, X, Y, col, 3, 400); ctx.restore();
      F.curve(ctx, (t) => amp * g(t), 0, Math.max(now, 1e-3), X, Y, col, 5, Math.max(8, Math.round(400 * now / T)));
      dot(ctx, X(now), Y(amp * g(now)), col, true, 9);
      hits.push({ x: X(now), y: Y(amp * g(now)), r: 18, name });
    };
    trace(x0, cs, cS, 'x，伸缩坐标，以 √3ν 摆动');
    trace(X0, ccm, cCm, 'X，质心坐标，以 ν 摆动');
    const L1 = 'X，质心', L2 = 'x，伸缩', w1 = F.measure(ctx, L1, { size: 20, weight: 600 }), w2 = F.measure(ctx, L2, { size: 20, weight: 600 });
    const ly = GB.t - 26, lx2 = GB.r - w2 - 46, lx1 = lx2 - 40 - w1 - 46;
    line(ctx, lx1, ly, lx1 + 36, ly, cCm, 5); text(ctx, L1, lx1 + 46, ly, cCm, { size: 20, weight: 600 });
    line(ctx, lx2, ly, lx2 + 36, ly, cS, 5); text(ctx, L2, lx2 + 46, ly, cS, { size: 20, weight: 600 });
    const who = N === 2 ? '两个离子' : `全部 ${N} 个离子`;
    topline(ctx, mode.value === 'cm' ? `质心：${who}一起以$\\knu$摆动，如同单个离子。`
      : mode.value === 's' ? `伸缩：离子彼此反向以$\\knus$摆动${N > 2 ? '，外侧的离子摆得最远' : ''}。`
      : `两个模式：每个离子的运动不规则，但$\\kXcm$以$\\knu$摆动，$\\kxdisp$以$\\knus$摆动。`);
    ro.set(`\\knu = 2\\pi\\times ${fmt(f, 2)}\\ \\text{MHz},\\qquad \\knus = \\sqrt{3}\\times 2\\pi\\times ${fmt(f, 2)}\\ \\text{MHz} = 2\\pi\\times ${fmt(Math.sqrt(3) * f, 2)}\\ \\text{MHz}`,
      N === 2 ? `$\\kasep = (e^2/2\\pi\\epsilon_0\\km\\knu^2)^{1/3} = ${fmt(sp, 1)}$ μm，对于两个 ⁴⁰Ca⁺ 离子。`
        : `中间的离子相距 ${fmt(sp, 1)} μm，离子串长 ${fmt((u[N - 1] - u[0]) * l, 1)} μm。`, { form: 'modes' });
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 6), draw });
})();

/* =====================================================================
   FIGURE 10.8 · fig-gate-levels · faithful copy, still
   The book's four levels: the qubit |g⟩, |e⟩ (the book's |r₀⟩) in an ellipse, the
   auxiliary |r₁⟩ degenerate with |e⟩ and reached by another polarization (dashed),
   and the short-lived level of a dipole-allowed transition (excitation up, decay
   squiggle down) for cooling and readout. Every arrow is notation.
===================================================================== */
(function () {
  const d = sim('fig-gate-levels', 540);
  const hits = []; hover(d.stage, () => hits, d.c);
  const YE = 190, YG = 400, YM = 110;
  function squiggle(ctx, x1, y1, x2, y2, col) {
    const L = Math.hypot(x2 - x1, y2 - y1), ux = (x2 - x1) / L, uy = (y2 - y1) / L, n = 140, end = L - 22;
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath();
    for (let i = 0; i <= n; i++) { const s = (end * i) / n, w = 9 * Math.sin((TAU * s) / 26); const x = x1 + ux * s - uy * w, y = y1 + uy * s + ux * w; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.stroke(); ctx.restore();
    arrow(ctx, x1 + ux * (end - 4), y1 + uy * (end - 4), x2, y2, col, 3);
  }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const g = F.ref('lvl-g'), e = F.ref('lvl-e'), r = F.ref('lvl-aux'), cc = C('coupling'), cr = C('rate'), cst = C('state');
    ctx.save(); ctx.strokeStyle = cst; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(600, 295, 100, 205, 0, 0, TAU); ctx.stroke(); ctx.restore();
    text(ctx, '量子比特', 600, 522, cst, { size: 22, weight: 600, align: 'center' });
    line(ctx, 520, YE, 680, YE, e, 5); line(ctx, 520, YG, 680, YG, g, 5); line(ctx, 330, YE, 470, YE, r, 5); line(ctx, 760, YM, 900, YM, PAL.ink, 5);
    text(ctx, '|e⟩', 600, YE - 32, e, { size: 26, weight: 600, align: 'center' });
    text(ctx, '|g⟩', 600, YG + 32, g, { size: 26, weight: 600, align: 'center' });
    text(ctx, '|r_1⟩', 400, YE - 32, r, { size: 26, weight: 600, align: 'center' });
    text(ctx, '辅助能级', 425, YE + 30, r, { size: 20, weight: 600, align: 'right' });
    both(ctx, 600, YE + 6, 600, YG - 6, cc, 4);
    both(ctx, 430, YE + 8, 560, YG - 8, cc, 3, [10, 8]);
    text(ctx, '用不同的', 470, 300, PAL.ink, { size: 20, align: 'right' });
    text(ctx, '光偏振寻址', 470, 328, PAL.ink, { size: 20, align: 'right' });
    arrow(ctx, 700, YG - 10, 840, YM + 6, cc, 4);
    squiggle(ctx, 800, YM + 8, 676, YG - 28, cr);
    text(ctx, '态测量，通过', 860, 236, PAL.ink, { size: 20 });
    text(ctx, '量子跳跃', 860, 264, PAL.ink, { size: 20 });
    hits.push({ x: 600, y: YG, r: 30, name: '基态 |g⟩ = |0⟩' }, { x: 600, y: YE, r: 30, name: '激发态 |e⟩ = |1⟩，长寿命（书中的 |r₀⟩）' },
      { x: 400, y: YE, r: 30, name: '辅助能级 |r₁⟩，与 |e⟩ 简并' }, { x: 830, y: YM, r: 30, name: '偶极容许跃迁的短寿命能级，用于冷却和读出' },
      { x: 600, y: 295, r: 26, name: '量子比特跃迁 |g⟩ ↔ |e⟩' }, { x: 495, y: 295, r: 24, name: '辅助跃迁 |g⟩ ↔ |r₁⟩，由另一偏振的光驱动' },
      { x: 760, y: 250, r: 26, name: '偶极容许跃迁上的激发，以及自发衰变回 |g⟩' });
  }
  register(d.fig, { update: () => {}, draw });
})();

/* =====================================================================
   FIGURE 10.9 · sim-phase-gate · still, a step choice, 2D
   The three pulses of the gate on all four inputs |q_m⟩|q_n⟩|0⟩ at once. A π pulse
   on the red sideband of ion m maps |e,0⟩ → −i|g,1⟩ and |g,1⟩ → −i|e,0⟩ (−iσ_x on the
   pair; |g,0⟩ has no partner); the 2π pulse on ion n's |g,1⟩ ↔ |r₁,0⟩ multiplies |g,1⟩
   by −1 (|g,0⟩ has no partner, |e⟩ is not coupled to |r₁⟩). The last column is the
   gate (10.40)–(10.43) whatever the coupling's sign.
===================================================================== */
(function () {
  const d = sim('sim-phase-gate', 620);
  const hits = []; hover(d.stage, () => hits, d.c);
  const step = choice(d.controls, { label: '\\text{步骤}', key: 'step', value: '1', aria: '门的步骤',
    options: [{ value: '1', label: '第1步' }, { value: '2', label: '第2步' }, { value: '3', label: '第3步' }] });
  const ro = readout(d);
  /* states as [qm, qn, phonons, re, im] */
  const mul = (s, re, im) => [s[0], s[1], s[2], s[3] * re - s[4] * im, s[3] * im + s[4] * re];
  const pi = (s) => (s[0] === 'e' && s[2] === 0 ? mul(['g', s[1], 1, s[3], s[4]], 0, -1) : s[0] === 'g' && s[2] === 1 ? mul(['e', s[1], 0, s[3], s[4]], 0, -1) : s);
  const twoPi = (s) => (s[1] === 'g' && s[2] === 1 ? mul(s, -1, 0) : s);
  const ROWS = [['g', 'g'], ['g', 'e'], ['e', 'g'], ['e', 'e']].map(([a, b]) => {
    const s0 = [a, b, 0, 1, 0], s1 = pi(s0), s2 = twoPi(s1), s3 = pi(s2);
    return [s0, s1, s2, s3];
  });
  const amp = (s) => (s[4] === 0 ? (s[3] > 0 ? '' : '−') : s[4] > 0 ? 'i ' : '−i ');
  const ket = (s) => `${amp(s)}|${s[0]}⟩|${s[1]}⟩|${s[2]}⟩`;
  const same = (a, b) => a.every((v, i) => v === b[i]);
  const IONX = [120, 200, 280, 360, 440, 520], XM = 200, XN = 440, IY = 130;
  const COLX = [775, 945, 1115, 1285], ROWY = [230, 310, 390, 470];
  /* a level line with its ket, the ket below for |g⟩ rows and above otherwise */
  function level(ctx, x1, x2, y, col, s, below, name) {
    line(ctx, x1, y, x2, y, col, 5);
    text(ctx, s, (x1 + x2) / 2, below ? y + 26 : y - 24, col, { size: 20, weight: 600, align: 'center' });
    hits.push({ x: (x1 + x2) / 2, y, r: 24, name });
  }
  function draw() {
    const { ctx } = begin(d.c); hits.length = 0;
    const g = F.ref('lvl-g'), e = F.ref('lvl-e'), r = F.ref('lvl-aux'), cm = F.ref('ion-m'), cn = F.ref('ion-n'), cc = C('coupling');
    const s = +step.value, onN = step.mix((v) => (v === '2' ? 1 : 0));
    const mA = step.from !== '2' && step.value !== '2' ? 1 : Math.max(step.a('1'), step.a('3')), nA = step.a('2');
    /* the ion string and the laser on the ion the step addresses */
    IONX.forEach((x, i) => {
      const col = x === XM ? cm : x === XN ? cn : PAL.ink;
      dot(ctx, x, IY, col, true, 13);
      hits.push({ x, y: IY, r: 18, name: x === XM ? '离子 m' : x === XN ? '离子 n' : `离子串的第 ${i + 1} 个离子` });
    });
    text(ctx, 'm', XM, IY - 36, cm, { size: 22, weight: 600, align: 'center' });
    text(ctx, 'n', XN, IY - 36, cn, { size: 22, weight: 600, align: 'center' });
    const lx = XM + (XN - XM) * onN;
    arrow(ctx, lx - 64, IY + 76, lx - 10, IY + 16, cc, 4);
    text(ctx, '激光', lx - 70, IY + 92, cc, { size: 20, weight: 600, align: 'right' });
    hits.push({ x: lx - 40, y: IY + 46, r: 22, name: s === 2 ? '离子 n 上的激光' : '离子 m 上的激光' });
    /* ion m's levels and its red-sideband π pulse (steps 1 and 3) */
    F.faded(ctx, mA, step.from === '2' || step.value === '2' ? step.off(step.value === '2' ? step.from : step.value, [0, 12]) : [0, 0], () => {
      level(ctx, 120, 260, 540, g, '|g, 0⟩', true, '离子 m 处于 |g⟩，无声子');
      level(ctx, 120, 260, 320, e, '|e, 0⟩', false, '离子 m 处于 |e⟩，无声子');
      level(ctx, 380, 520, 500, g, '|g, 1⟩', true, '离子 m 处于 |g⟩，有一个声子');
      level(ctx, 380, 520, 280, e, '|e, 1⟩', false, '离子 m 处于 |e⟩，有一个声子');
      F.faded(ctx, step.a('1'), [0, 0], () => arrow(ctx, 262, 330, 392, 492, cc, 4));
      F.faded(ctx, step.a('3'), [0, 0], () => arrow(ctx, 392, 492, 262, 330, cc, 4));
      text(ctx, 'π 脉冲', 345, 390, cc, { size: 20, weight: 600 });
      hits.push({ x: 327, y: 411, r: 24, name: '红边带上的 π 脉冲：|e, 0⟩ ↔ |g, 1⟩' });
    });
    /* ion n's levels and the 2π pulse to the auxiliary level (step 2) */
    F.faded(ctx, nA, step.off('2', [0, 12]), () => {
      level(ctx, 210, 320, 540, g, '|g, 0⟩', true, '离子 n 处于 |g⟩，无声子');
      level(ctx, 210, 320, 320, e, '|e, 0⟩', false, '离子 n 处于 |e⟩，无声子');
      level(ctx, 70, 180, 320, r, '|r_1, 0⟩', false, '离子 n 处于辅助能级，无声子');
      level(ctx, 500, 610, 500, g, '|g, 1⟩', true, '离子 n 处于 |g⟩，有一个声子');
      level(ctx, 500, 610, 280, e, '|e, 1⟩', false, '离子 n 处于 |e⟩，有一个声子');
      level(ctx, 370, 480, 280, r, '|r_1, 1⟩', false, '离子 n 处于辅助能级，有一个声子');
      both(ctx, 184, 330, 500, 492, cc, 4);
      text(ctx, '2π 脉冲', 380, 382, cc, { size: 20, weight: 600 });
      hits.push({ x: 342, y: 411, r: 24, name: '|g, 1⟩ ↔ |r₁, 0⟩ 上的 2π 脉冲：到辅助能级再回来，符号改变' });
      line(ctx, 206, 532, 124, 440, alpha(cc, 0.6), 3, [10, 8]);
      line(ctx, 112, 428, 136, 452, cc, 4); line(ctx, 136, 428, 112, 452, cc, 4);
      hits.push({ x: 124, y: 440, r: 22, name: '|g, 0⟩ 没有伙伴：不存在 |r₁, −1⟩' });
    });
    /* the four inputs through the steps */
    const show = step.mix((v) => [1, 1, +v >= 2 ? 1 : 0.15, +v >= 3 ? 1 : 0.15]);
    ['起始', '第1步', '第2步', '第3步'].forEach((h, c) => text(ctx, h, COLX[c], 168, c === s ? PAL.ink : PAL.muted, { size: 20, weight: c === s ? 600 : 400, align: 'center' }));
    ROWS.forEach((row, i) => row.forEach((st, c) => {
      const moved = c === s && !same(st, row[c - 1]);
      F.faded(ctx, show[c], [0, 0], () => {
        if (moved) { ctx.save(); ctx.fillStyle = alpha(cc, 0.16); ctx.fillRect(COLX[c] - 84, ROWY[i] - 24, 168, 48); ctx.restore(); }
        text(ctx, ket(st), COLX[c], ROWY[i], PAL.ink, { size: 22, weight: moved ? 600 : 400, align: 'center' });
      });
      hits.push({ x: COLX[c], y: ROWY[i], r: 30, name: c ? `输入 ${ket(row[0])} 经第${c}步后：${ket(st)}` : `输入 ${ket(st)}，量子比特 m 和 n 以及质心声子` });
    }));
    text(ctx, '|离子 m⟩ |离子 n⟩ |声子⟩', COLX[0], 530, PAL.muted, { size: 17, align: 'center' });
    topline(ctx, s === 1 ? '第1步：离子 m 上的 π 脉冲把其量子比特写到集体运动上。'
      : s === 2 ? '第2步：离子 n 上的 2π 脉冲改变 |g⟩|1⟩ 的符号，而不改变其他任何态的符号。'
      : '第3步：离子 m 上的 π 脉冲把运动写回；只有 |e⟩|e⟩ 最终带负号。');
    if (s === 1) ro.set('|e\\rangle_m|0\\rangle \\;\\to\\; -i\\,|g\\rangle_m|1\\rangle', '$|g\\rangle_m|0\\rangle$在红边带上没有伙伴，因为它下面一个声子处没有能级，所以保持不变。', { form: 1 });
    else if (s === 2) ro.set('|g\\rangle_n|1\\rangle \\;\\to\\; |r_1\\rangle_n|0\\rangle \\;\\to\\; -|g\\rangle_n|1\\rangle', '$|g\\rangle_n|0\\rangle$没有伙伴，而$|e\\rangle_n$不与$|r_1\\rangle_n$耦合。', { form: 2 });
    else ro.set('-i\\,|g\\rangle_m|1\\rangle \\;\\to\\; (-i)^2\\,|e\\rangle_m|0\\rangle = -|e\\rangle_m|0\\rangle', '合起来：$|1\\rangle|1\\rangle \\to -|1\\rangle|1\\rangle$，其余三个输入不变，式 (10.40)–(10.43)。', { form: 3 });
  }
  register(d.fig, { update: () => {}, draw });
})();
};
