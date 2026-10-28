# Log: 现代原子与光学物理 II

### Pass 1 (2026-10-26): scaffold

The folder was made by `omnistax-content/tools/scaffold_translation.py` from
`Modern Atomic and Optical Physics II` at commit 938e8b7bb95f9561b68f0d687372f010a98ccaa7, chapters ch01. Nothing is translated yet: every
file is the source's, `book.json` carries `language` zh-CN, `translation_of`
and `translation` (claude-sonnet-5-5, medium). The humanizer review is deferred to the owner.

## 2026-10-26: pilot pass, chapter 1 (sections 1.1–1.3)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js of 1.1–1.3, the 44 concepts of chapter 1, chapter.json, and the book-level labels. Glossary built from 术语在线 lookups (not copied from the College Physics glossary).
- Independent review (claude-opus, 4 critical, 13 major, 12 minor) applied by a second pass; one of that pass's own changes (the `l-degeneracy-lifting` statement, 更紧 against the source's "less deeply bound") was reversed to 更松 by the orchestrator.
- Forced scenarios: none under translate.md 4. One deviation from "every tag kept" (the `<sup>th</sup>` in 1.2.3), in `translation-notes.md`.
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on 1.3/figures.js.
- Outstanding: the visual check of translated pages and sims in `npm run dev` (translate.md 8.4) is not done; rows marked `confirm` in the glossary; the owner's naturalness review.

## 2026-10-26: chapter 3 (intro, 3.1–3.4)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js of the intro and 3.1–3.4, the 46 concepts of chapter 3 (staged in `ch03/book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 3`), `chapter.json`.
- Independent review (0 critical, 7 major, 10 minor) applied by a second pass: 衰变, 阵迹, 外加场 and the 谱线增宽 family made uniform; the added words and parentheses that kept the source tag order were removed in favour of span swaps; the concept statement `spin-in-fluctuating-field` corrected; author names Chinese; punctuation and spacing fixed.
- Forced scenarios: none under translate.md 4. Two span-content deviations and the span swaps are in `ch03/config.md` and `translation-notes.md`.
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on 3.1, 3.3 and 3.4 `figures.js`. `verify_parity.py` fails only on the known items: tag sequence of 3.1 and 3.4 (recorded swaps), the `ai` growth of section.json, and the book title "Atom-Photon Interactions".
- Outstanding: the visual check of translated pages and sims in `npm run dev` (translate.md 8.4) is not done; rows marked `confirm` in the glossary; the owner's naturalness review.

## 2026-10-26: chapter 2 (sections 2.1–2.3)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js of 2.1–2.3, the 48 concepts of chapter 2 (staged `ch02/book-rows.json`, `ost merge`), chapter.json.
- Independent review (5 critical, 7 major, 11 minor) applied by a second pass; the owner's rulings applied: "held" = withheld, no words added to keep tag order (spans swap, recorded in `translation-notes.md`), 旋转波近似 for every RWA, 缀饰态图像, 能量移位, 离散.
- Forced scenarios: one (`$k^{th}$个`), in `ch02/config.md` and `translation-notes.md`.
- Not applied: the glossary was not edited (rows for 离散, 暂扣 and the 热库 point are listed in `translation-notes.md`); concept names 产生算符与湮没算符 and 周期共振腔的模 stay as the glossary targets.
- Outstanding: the visual check of the translated pages and sims in `npm run dev`; the owner's naturalness review.


## 2026-10-26: chapter 4 (intro, 4.1–4.3)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js of the intro and 4.1–4.3, the 35 concepts of chapter 4 (staged in `ch04/book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 4`), `chapter.json`.
- Independent review (4 critical, 6 major, 7 minor groups) applied by a second pass: parentheses and the doubled frequency clause removed in favour of span/math swaps; 极化强度 for the medium's polarization (4.1, 4.2, statements, `slowly-varying-polarization` terms), 非均匀谱线增宽, 无功的, 自散焦; 固有线宽 kept with 内禀 for "intrinsic"; added antecedents, 式 before bare numbers, and the other minor items fixed; records added to `ch04/config.md` and `translation-notes.md`.
- Forced scenarios: the `at` restructure in 4.2 `figures.js` and the 满足 in 4.3 l.60, in `ch04/config.md` and `translation-notes.md`.
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on 4.2 and 4.3 `figures.js`. `verify_parity.py` fails only on the known items (SVEA/Figure letters, `ai` growth, 4.2 `figures.js` code outside literals).
- Outstanding: the visual check of translated pages and sims in `npm run dev` (translate.md 8.4) is not done; rows marked `confirm` in the glossary; the owner's naturalness review.

## 2026-10-26: chapter 6 (intro, 6.1–6.3)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js of the intro and 6.1–6.3, the 12 concepts of chapter 6 (staged in `ch06/book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 6`), `chapter.json`.
- Independent review (6 critical, 6 major, 8 minor) applied by a second pass. The review found 6.3 `figures.js` untranslated (byte-identical to the English source although the section's `ai` provenance said it was); it was translated in the revision. Also fixed: the intro `notes` translated as written, the additions 所以 / 这是合理的 / 在下列情形下 / 下式 / 确定的 / 的形式 / 后者 / parentheses / colon removed in favour of span and math swaps, 几率 → 概率, 例 not 示例, list numbering, and the concept statements aligned with the text.
- Forced scenarios: the 6.1 plural collapse and the 6.3 in-branch English grammar, in `ch06/config.md` and `translation-notes.md`.
- Checker: see the revision report; `node --check` passes on 6.1, 6.2 and 6.3 `figures.js`.
- Outstanding: the visual check of translated pages and sims in `npm run dev` (translate.md 8.4); rows marked `confirm` in the glossary; the owner points in `translation-notes.md`.

## 2026-10-26: chapter 5 (intro, 5.1–5.3)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js of the intro and 5.1–5.3, the 44 concepts of chapter 5 (staged `ch05/book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 5`), `chapter.json`.
- Independent review (2 critical, 6 major, 11 minor) applied by a second pass; the owner's rulings applied: no added words (spans/math swap, recorded in `translation-notes.md`), one rendering of "Not to scale." (未按比例绘制。), 上态/下态, 外加场, 远离共振的 (glossary row), author names Chinese also in citations (Hakuta rendering listed for the owner), 重叠 for the squared overlap, `terms` lists as long as the English ones.
- Forced scenarios: two (the apposition 即 in 5.3 l.56; the pronoun "that of" in 5.1 l.72), in `ch05/config.md` and `translation-notes.md`. The intro `figures.js` comparison literals were changed together with the panel titles (see the notes).
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on the four `figures.js`; `verify_parity.py` fails only on the known items (`ai` growth of section.json, English letters: Figure, STIRAP, SVEA).
- Outstanding: the visual check of the translated pages and sims in `npm run dev` (translate.md 8.4; including clipping of the intro panel titles and the wrapped label in 5.3 `figures.js`); the owner's naturalness review; the Hakuta rendering.

## 2026-10-26: chapter 7 (intro, 7.1–7.4)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js (7.2–7.4) of the intro and 7.1–7.4, the 26 concepts of chapter 7 (staged in `ch07/book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 7`), `chapter.json`.
- Independent review (2 critical, 9 major, 17 minor groups) applied by a second pass; the owner's rulings applied: no added words (spans/math swap, recorded in `translation-notes.md`), the intro `notes` translated as written, 浸渐 for every adiabatic compound of 7.4 (绝热定理 for the theorem only), 下态/上态, 外加场, 重叠 for the squared overlap, 小参数, 谱线宽度, 叠加, the derivation `source` fields with 现代原子与光学物理 II，.
- Forced scenarios: one (the intro typo note), in `ch07/config.md` and `translation-notes.md`.
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on 7.2, 7.3 and 7.4 `figures.js`; `verify_parity.py` fails only on the known items (`ai` growth of section.json, English letters: Figure, STIRAP, Optics Express, Novvo Cirr., and tag-sequence lines that are span swaps).
- Outstanding: the visual check of the translated pages and sims in `npm run dev` (translate.md 8.4); the glossary note of the row “adiabaticity” (contradicts its target) and the open `confirm` rows; the owner's naturalness review.


## 2026-10-26: chapter 8 (intro, 8.1–8.6)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js (8.1–8.6) of the intro and 8.1–8.6, the 52 concepts of chapter 8 (staged in `ch08/book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 8`), `chapter.json`.
- Independent review (6 critical, 17 major, 14 minor, 1 structure) applied by a second pass; the owner's rulings applied: no added words, brackets or connectives (spans/math swap, recorded in `translation-notes.md`), the 8.1 lead without a duplicated span, both rendered (既…也…), 反冲能, 扩散常量, 时标, 情形, 谱线宽度, 无规 for “random”, 20世纪90年代, 讲义, derivation `source` with 现代原子与光学物理 II，, reactive = 反应(性的), one aria convention (symbol glyphs, 以…为单位).
- Forced scenarios: the 8.6 `figures.js` plural collapse and moved `'1/3 of '`, the 8.5 `#reabsorption` run inside the span, the intro `notes`, 8.4 `#diffusion-coefficient`, 8.2 `#validity-estimate` and the 8.2 sim-head, in `ch08/config.md` and `translation-notes.md`; silent normalisations of the book's errors listed in `translation-notes.md`.
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on all six `figures.js`; `verify_parity.py` fails only on the known items (`ai` growth of section.json, English letters: Figure, Les Houches LXXII, Laser Cooling and Trapping, Atom-Photon Interactions, PHYS REP, lin⊥lin, the 8.6 prose number 1990 → 20世纪90年代, and tag-sequence lines that are span swaps).
- Outstanding: the visual check of the translated pages and sims in `npm run dev` (translate.md 8.4); the glossary notes and rows listed in `translation-notes.md`; the owner's naturalness review.

## 2026-10-26: chapter 10 (intro, 10.1–10.4)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js (10.1–10.4) of the intro and 10.1–10.4, the 41 concepts of chapter 10 (staged in `ch10/book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 10`), `chapter.json`.
- Independent review (6 critical, 2 structure, 17 major, 14 minor) applied by a second pass; the owner's rulings applied: no added words, brackets or connectives (spans/math swap, recorded in `translation-notes.md`), the ordinals `$N^{th}$`, `$m^{th}$`, `$n^{th}$` restored byte for byte with 个 outside the run, 内态 (concept 内态与运动态), 小参数, 时标, 异相, 梯级, 伙伴, 存储器, 反 J-C, no spaces next to inline math, full-width punctuation in `figures.js` strings.
- Forced scenarios: the 10.2 `figures.js` plural collapse, the ordinals inside math, the 10.2 l.58 pre-modifier and the 10.4 l.22 tail, in `ch10/config.md` and `translation-notes.md`; silent normalisations of the book's errors listed in `translation-notes.md`.
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on the four `figures.js`; `verify_parity.py` fails only on the known items (`ai` growth of section.json, English letters: Figure, 10.1 prose numbers 3D/2D → 三维/二维, and the 10.3 tag sequence where the footnote marker follows the swapped ref spans); the math-run multiset passes in all five files.
- Outstanding: the visual check of the translated pages and sims in `npm run dev` (translate.md 8.4); the glossary rows named in `translation-notes.md`; the owner's naturalness review.

## 2026-10-26: chapter 11 (intro, 11.1–11.8)

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js (11.1–11.8) of the intro and 11.1–11.8, the 93 concepts of chapter 11 (staged in `ch11/book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 11`), the 144 variables of `chapter.json`.
- Independent review (7 critical, 8 structure, 15 major, 18 minor) applied by a second pass; the owner's rulings applied: no added words, brackets or connectives (spans/math swap, recorded in `translation-notes.md`), the ordinals `$l^{th}$`, `$j^{th}$`, `$i^{th}$` restored byte for byte with 个 outside the run, Eq. (11.48) with a single `\text` run, no `\text` run added to the 11.5 readout, no full-width punctuation inside math or `\text`, English left in `\text{}`/labels/derivation `source` fields translated, 情形, 经典数, 外部势, 格子的反冲能, 耦合常量, 粒子数算符, 原子数不确定度, 讲义, 20世纪80年代, 陷俘态/未陷俘态, 陷俘/约束 (no 囚禁), 小参数, no spaces next to inline math.
- Forced scenarios: the 11.4 and 11.8 `figures.js` plural collapses, the ordinals inside math, the 11.4 `#diagonal-elements` span, the 11.3 l.154–156 sentence around Eq. (11.38) and the 11.3 Majorana footnote, in `ch11/config.md` and `translation-notes.md`; silent normalisations of the book's errors listed in `translation-notes.md`.
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on the eight `figures.js`; `verify_parity.py` fails only on the known items (`ai` growth of section.json, English letters: Figure, Table, NaCl, Nature, Science, the 11.3 prose-number artefact, the 11.4 tag sequence where spans swap, and the 11.4 `figures.js` code outside literals); the math-run multiset passes in all nine files.
- Outstanding: the visual check of the translated pages and sims in `npm run dev` (translate.md 8.4); the points for the owner in `translation-notes.md` (author names, glossary rows); the owner's naturalness review.

## 2026-10-26: chapter 9 (intro, 9.1–9.4), revision pass

- Translated by claude-sonnet-5-5 (medium effort): section.json, text.html and figures.js (9.1–9.4) of the intro and 9.1–9.4, the 76 concepts of chapter 9 (staged in `ch09/book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 9`), `chapter.json`.
- Independent review (6 critical, 4 structure, 14 major, 13 minor) applied by a second pass; the owner's rulings applied: the four physics-meaning defects first (the reversed â/α roles in the 9.1 derivation, the referent of "them" in 9.3 exercise 5, the scope of "quantum state engineering", "prevent microwave manipulation"), no added words (spans/math swap, recorded in `translation-notes.md`), the missing period (9.1) and the missing "of" (intro) kept, `$k^{th}$个` restored byte for byte, 式/图 outside the link where the source links only the number, span extents restored, 20世纪80年代末, 耦合系数 for $t_k$, 概率幅 for a photon's probability amplitude, 约束 for confined/unconfined, 求阵迹, 重叠 for the Q-function overlap, the `changes` wording of ch02/ch03.
- Forced scenarios: the 9.3 `figures.js` plural collapse, the ordinal inside math, the intro's missing "of", the missing period, and one glossary-forced rendering (引力波探测), in `ch09/config.md` and `translation-notes.md`; silent normalisations of the book's errors listed in `translation-notes.md`.
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on the four `figures.js`; `verify_parity.py` fails only on the known items (`ai` growth of section.json, English letters: Figure, Phys. Rev. Lett., Laser Physics, CQED, the 9.4 prose number 1980 → 20世纪80年代末, and the 9.2 and 9.3 tag sequences that are link/span swaps); the math-run multiset passes in all five files.
- Outstanding: the visual check of the translated pages and sims in `npm run dev` (translate.md 8.4); the glossary rows named in `translation-notes.md`; the humanizer review and the owner's naturalness review.

## 2026-10-26: whole-book pass (chapters 1–11)

- All 11 chapters (45 sections, 9 chapter opening pages, 2,419 glossary rows) were translated by claude-sonnet-5-5 (medium effort), independently reviewed by a second model pass (Opus) chapter by chapter, and revised against each review. The reviews found, among other things, a figures.js reported translated that was not (6.3), reversed or changed meanings (9.1, 9.3), added words and brackets, changed math runs, and unrecorded deviations: all fixed or recorded in `translation-notes.md` and each chapter's `config.md`.
- Final checks: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; every translated `figures.js` differs from its source and passes `node --check`; `verify_parity.py` fails only on known deviations (span swaps, the dropped `<sup>th</sup>` in 1.2, the 4.2 and 11.4 figures.js code edits, number formats such as 20世纪90年代, kept English eyebrows and titles).
- Glossary: the 1,130 rows marked for confirmation were looked up at 术语在线 once more (`termonline.py verify`): 94 are confirmed; 846 have no entry (compounds, names, apparatus words); 81 differ, of which the physics-vocabulary forms were adopted (耦合常数, 倒易格子, 垂直跃迁, 时间间隔, 能量子, 黏性力, 参量上转换, 人造原子). Rows still marked `confirm` are decisions the owner must confirm.
- Outstanding (not done by an agent): the visual check of every page and sim in `npm run dev` (translate.md 8.4: clipping at slider extremes, longer Chinese labels); the humanizer / naturalness review of the Chinese (translate.md 10); the owner's decisions listed in `translation-notes.md` (title 现代原子与光学物理 II; Chinese author-name renderings; 浸渐 vs 绝热; 挤压 vs 压缩; 原子凝射器 vs 原子激光器; 激光致冷 vs 冷却; 格点 vs 格座; ordinals inside math `$k^{th}$个`; 无功 vs 反应 for 'reactive').
- Licence: the source notes carry no licence and the authors have not given permission to transform them; this translation is local only and must not be committed to `main` or deployed until they do.

## 2026-10-28: owner's calls applied

- The owner delegated the open terminology calls and asked for 第 k 个: see `translation-notes.md`, "Terminology and ordinal decisions of 2026-10-28". 绝热 replaces 浸渐 (231 places), 压缩 replaces 挤压 (184), 激光冷却 replaces 激光致冷 (36), 原子激光器 replaces 原子凝射器 (9); 14 ordinals are now 第$k$个.
- The local git exclusion of `translations/` (added only to avoid an accidental commit, because the source carries no licence) was removed at the owner's request. Nothing is committed or pushed.
