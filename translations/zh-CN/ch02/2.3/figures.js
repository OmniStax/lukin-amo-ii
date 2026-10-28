/* Figures for section 2.3 Quantized electromagnetic fields. Boots against the section's text article. */
window.OMNISTAX_FIGURES = window.OMNISTAX_FIGURES || {};
window.OMNISTAX_FIGURES['2.3'] = function (root, F) {
const { fmt, C, PAL, alpha, ctl, cycle, register, begin, line, dot, text, topline, axes, curve } = F;
const sim = (id, H) => F.sim(root, id, H);

/* =====================================================================
   SIM: the photon of Eq. (2.100) leaving an excited atom. Moving: the
   front runs out at c while |c₂|² = e^{−γt} drains. Drawn is z times the
   one-photon amplitude, e^{−γ(t − z/c)/2}Θ(t − z/c), the 1/z of the
   spherical wave taken out; the optical carrier is not drawn. γ follows
   Eq. (2.89) from the sliders ω and |μ|. Axes fixed: z 0 to 30 m (the
   distance light covers in the 100 ns clock), amplitude 0 to 1.
===================================================================== */
(function () {
  const d = sim('sim-photon-wavepacket', 540);
  const EPS0 = 8.8541878e-12, HBAR = 1.0545718e-34, CL = 2.99792458e8, EA0 = 8.4783536e-30;   /* SI; e a₀ in C·m */
  const T = 100, CNS = CL * 1e-9;                /* the clock in ns; c in m/ns */
  const W = ctl(d.controls, { label: '\\komega', cls: 'frequency', min: 2, max: 4.7, step: 0.01, value: 3.2, unit: '10¹⁵ s⁻¹', dec: 2, aria: '原子跃迁频率', onInput: () => cy.reset() });
  const MU = ctl(d.controls, { label: '|\\kmu|', cls: 'dipole', min: 1, max: 4, step: 0.05, value: 2.5, unit: 'e a₀', dec: 2, aria: '偶极矩阵元', onInput: () => cy.reset() });
  const cy = cycle(() => T, 1.2);
  const ro = F.readout(d);
  const BOX = { l: 250, r: 1300, t: 150, b: 440 };
  const BAR = { x: 110, w: 44 };
  const gammaOf = () => (Math.pow(W.v * 1e15, 3) * Math.pow(MU.v * EA0, 2)) / (3 * Math.PI * EPS0 * HBAR * CL * CL * CL);   /* Eq. (2.89), s⁻¹ */
  const sci = (x) => { const e = Math.floor(Math.log10(x)); return `${fmt(x / Math.pow(10, e), 2)}\\times 10^{${e}}`; };
  let hits = []; F.hover(d.stage, () => hits);
  function draw() {
    const { ctx } = begin(d.c);
    hits = [];
    const t = cy.now(), g = gammaOf(), gns = g * 1e-9, front = CNS * t, len = CNS / gns, pop = Math.exp(-gns * t);
    const cE = C('electric-field'), cP = C('population');
    const { X, Y } = axes(ctx, BOX, [0, 30], [0, 1], {
      nx: 6, ny: 2, fy: (v) => (v ? fmt(v, 1) : ''),
      xl: 'z (m)', xc: C('length'), yl: 'z × 单光子概率幅，相对值', yc: cE,
    });
    /* the packet: the atom's amplitude at the retarded time, filled from its outline */
    const env = (z) => (z <= front ? Math.exp(-gns * (t - z / CNS) / 2) : 0);
    const zf = Math.min(front, 30);
    if (zf > 0) {
      ctx.save(); ctx.beginPath(); ctx.moveTo(X(0), Y(0));
      for (let i = 0; i <= 240; i++) { const z = (zf * i) / 240; ctx.lineTo(X(z), Y(env(z))); }
      ctx.lineTo(X(zf), Y(0)); ctx.closePath(); ctx.fillStyle = alpha(cE, 0.18); ctx.fill(); ctx.restore();
      curve(ctx, env, 0, zf, X, Y, cE, 5, 240);
      if (front <= 30) line(ctx, X(zf), Y(env(zf)), X(zf), Y(0), cE, 5);
    }
    /* the front, z = ct */
    if (front <= 30) {
      line(ctx, X(front), BOX.t, X(front), BOX.b, alpha(PAL.ink, 0.4), 2, [10, 10]);
      if (front > 1.5) text(ctx, 'z = ct', X(front) + (front > 26 ? -10 : 10), BOX.t + 18, PAL.ink, { size: 20, weight: 600, align: front > 26 ? 'right' : 'left', bg: PAL.panel });
      hits.push({ x: X(front), y: Y(0.5), r: 16, name: `光子的波前，距原子 ${fmt(front, 1)} m，此时 t = ${fmt(t, 0)} ns` });
    }
    /* the atom at z = 0, and its excited population beside the axis */
    dot(ctx, X(0), Y(0), PAL.ink, true, 11);
    text(ctx, '原子', X(0), Y(0) + 50, PAL.ink, { size: 20, align: 'center', bg: PAL.panel });
    hits.push({ x: X(0), y: Y(0), r: 16, name: '原子，在 t = 0 时处于激发态，位于真空中' });
    ctx.save(); ctx.fillStyle = alpha(cP, 0.15); ctx.fillRect(BAR.x, BOX.t, BAR.w, BOX.b - BOX.t); ctx.fillStyle = cP; ctx.fillRect(BAR.x, Y(pop), BAR.w, Y(0) - Y(pop)); ctx.restore();
    text(ctx, '|c_2|^2', BAR.x + BAR.w / 2, BOX.t - 24, cP, { size: 22, weight: 600, align: 'center' });
    text(ctx, fmt(pop, 2), BAR.x + BAR.w / 2, BOX.b + 26, cP, { size: 18, weight: 600, align: 'center' });
    hits.push({ x: BAR.x + BAR.w / 2, y: (BOX.t + BOX.b) / 2, r: 30, name: `激发态布居 |c₂|² = ${fmt(pop, 3)}` });
    if (zf > 0) hits.push({ x: X(zf / 2), y: Y(env(zf / 2)), r: 16, name: `光子波包，发射于原子衰变开始后 ${fmt(t - zf / 2 / CNS, 0)} ns 时` });
    topline(ctx, `在 t = ${fmt(t, 0)} ns 时，波前位于 ${fmt(front, 1)} m 处；其后光强每隔 c/γ = ${fmt(len, len < 10 ? 1 : 0)} m 下降为原来的 1/e。`);
    ro.set(`\\kgamma = \\frac{\\komega^3|\\kmu|^2}{3\\pi\\epsilon_0\\hbar c^3} = \\frac{(${fmt(W.v, 2)}\\times 10^{15}\\ \\text{s}^{-1})^3(${fmt(MU.v, 2)}\\ e a_0)^2}{3\\pi\\epsilon_0\\hbar c^3} = ${sci(g)}\\ \\text{s}^{-1}`,
      `$|\\kctwo|^2 = e^{-\\kgamma\\kt} = e^{-(${sci(g)}\\ \\text{s}^{-1})(${fmt(t, 0)}\\ \\text{ns})} = ${fmt(pop, 2)}$；光子带走了其余的 ${fmt(1 - pop, 2)}。`);
  }
  register(d.fig, { update: (dt) => cy.step(dt, () => T / 5), draw });
})();
};
