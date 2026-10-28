# Config: 现代原子与光学物理 II, Chapter 11 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 11 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch11, every page it lists |
| Language | zh-CN |
| Translator | claude-sonnet-5-5, medium effort |
| Terminology | `glossary.zh-CN.json`, read before the first sentence; a new term is added as pending |
| Fidelity | the source's tone, sentences and content; nothing added or removed except the forced scenarios below |
| Humanizer review | deferred to the owner |

## Forced scenarios

Every place where a faithful translation was impossible as the source stands
(translate.md item 4), one row each; `translation-notes.md` carries the same
entry.

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch11/11.4/figures.js | line 154 (`bs`, used in the headline and the readout) | `nb === 1 ? 'one bound state' : `${['no','one','two','three'][nb]} bound states`` became `['没有', '有一个', '有两个', '有三个'][nb] + '束缚态'`: the singular/plural ternary is replaced by the one array lookup; nothing else in the code changes. | Chinese has no plural inflection (translate.md 4.1); the count word and the noun are kept. For `nb` > 3 both versions print “undefined”, so the behaviour is the same. |
| ch11/11.8/figures.js | hover `name` of a lattice site, headline (`topline`) and the plateau list | `atom${whole === 1 ? '' : 's'}` became `个原子`; `Plateau${…'s'}` / `stand${…}` and `site${sf === 1 ? '' : 's'}` were removed with their expressions; the list join `', '` / `' and '` became `'、'` / `' 和 '`. | English plural and agreement branches inside template literals (translate.md 4.1); Chinese has one form, the counts and the rest of the code stay. |
| ch11/11.4/text.html | l.55 (`$l^{th}$`), l.134 (`$j^{th}$`) | `第$l^{th}$个勒让德多项式`, `第$j^{th}$个散射体`: the ordinal stays inside the math run, byte for byte; the particle 个 stands outside the run. | The `th` suffix is inside `$…$`, which is kept byte for byte (translate.md 5); the same case and form as `ch02/2.1` (`$k^{th}$个`) and `ch10`. Owner to decide for the whole book. |
| ch11/11.8/text.html | l.29, l.42 (`$i^{th}$` ×2) | `湮没第$i^{th}$个格点上的一个粒子`, `第$i^{th}$个格点的占据`: as above. | As above. |
| ch11/11.4/text.html | l.11 (`#diagonal-elements`) | `偶极、四极等算符的对角<span>矩阵元</span>`: the span wraps 矩阵元 only; “of the dipole” (inside the English span) stands before it as 偶极. | Chinese puts the modifier list “dipole, quadrupole, etc. operators” before 对角矩阵元; the span cannot keep “matrix elements of the dipole” without taking 偶极、四极等算符的对角 along, which would change its extent. |
| ch11/11.3/text.html | l.154–156 (`#probing`, around Eq. (11.38)) | l.154 `非共振成像可以通过测量相位来完成`, Eq. (11.38), l.156 `是原子云通过使图像与参考光束干涉（或者在实际中，在光路中放置合适的相位板）印刻在激光束上的。`: the relative clause “that the atom cloud imprints …” after the display becomes a 是…的 predicate. | The English sentence runs across the display: “…measuring the phase [eq] that the atom cloud imprints…”. Chinese needs a predicate after the equation; 是 is the one word that carries it (no 即, no repeated 相位, no 做法是). |
| ch11/11.3/section.json | footnote `c-majorana` | `书中印的是“Majorana flops”。这些自旋反转称为马约拉纳反转（Majorana flips）。`: the English spelling kept in parentheses. | The footnote is about English spelling (“flops” for “flips”); the text and the concept render both as 马约拉纳反转 (glossary rows), so the correction needs the English word (translate.md 4.3). |
