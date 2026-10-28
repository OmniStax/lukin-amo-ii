# Config: 现代原子与光学物理 II, Chapter 9 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 9 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch09, every page it lists |
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
| ch09/9.3/figures.js | lines 273–274 (hover `name`s of the two rung states) | `` `…, ${n - 1} photon${n - 1 === 1 ? '' : 's'} in the cavity` `` and `` `${n} photon${n === 1 ? '' : 's'} …` `` became `腔中有 ${n - 1} 个光子` and `腔中有 ${n} 个光子`: the plural branch of each ternary is collapsed; the ternary is not kept. | Chinese has no plural inflection (translate.md 4.1); the count and the noun stay, nothing else changes. |
| ch09/9.1/text.html | l.84, `$k^{th}$` | `经典场$k^{th}$个模的傅里叶分量`: the ordinal stays inside the math run, byte for byte; the particle 个 stands outside the run. | The `th` suffix is inside `$…$`, which is kept byte for byte (translate.md 5); the same case and form as `ch02/2.1` (`$k^{th}$个`). Owner to decide for the whole book. |
| ch09/intro/text.html and section.json `notes` | l.2, “the quantum properties the electromagnetic field” | `明确地包含了电磁场量子性质`: the book's missing “of” is kept as a gap (the 的 that would join 电磁场 and 量子性质 is left out); the `notes` field says the same. | The `notes` field of the source says the missing “of” is kept; text and note agree. |
| ch09/9.1/text.html | l.47, missing full stop after `$\delta x\delta p \geq 1/2$` | `限定$\delta x\delta p \geq 1/2$<正交分量算符>对电磁场具有确定的物理意义`: the book's missing period stays missing, the two sentences run on. | The book's own error is kept (translate.md 3.2); Chinese can carry the run-on without the stop, but it reads as a typo. |
| ch09/9.4/text.html | l.159, “gravity wave detection” | `引力波探测`, although the book says “gravity wave”. | Glossary row `gravity wave detection` → 引力波探测 (the book means gravitational waves; 重力波 is the literal term). |
