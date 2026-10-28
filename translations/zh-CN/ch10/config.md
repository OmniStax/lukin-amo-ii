# Config: 现代原子与光学物理 II, Chapter 10 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 10 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch10, every page it lists |
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
| ch10/10.2/figures.js | line 93 (hover `name` of a motional-state rung) | `` `${n} quant${n === 1 ? 'um' : 'a'} of vibration` `` became `` `${n}个振动量子` ``: the plural branch of the ternary is collapsed; the ternary is not kept. | Chinese has no plural inflection (translate.md 4.1); the count and the noun stay, nothing else changes. |
| ch10/10.3/text.html | l.21 (`#procedure`), `$N^{th}$` | `谐振子的$N^{th}$个梯级`: the ordinal stays inside the math run, byte for byte; the particle 个 stands outside the run. | The `th` suffix is inside `$…$`, which is kept byte for byte (translate.md 5); the same case and the same form as `ch02/2.1` (`$k^{th}$个`). Owner to decide for the whole book. |
| ch10/10.4/text.html | l.44 (`#procedure`), `$m^{th}$` ×3, `$n^{th}$` ×3 | `<span data-ref="ion-m">$m^{th}$个</span>`, `$m^{th}$个离子`, `$n^{th}$个离子`, `$n^{th}$个原子`: the math runs stay as in the source, 个 outside them. | As above. The referent labels `ion-m` and `ion-n` in `figures.js` and `section.json` read 第 m 个 / 第 n 个 (plain text). |
| ch10/10.2/text.html | l.58 (`#eq-10-16` lead-in) | `我们应当理解作为如下算符的本征态的<裸能级>的结构` and then the equation: the clause “which are eigenstates of” + equation is a pre-modifier of 裸能级. | Chinese needs a head noun after the equation; the pre-modifier keeps “of” + equation attached to the eigenstates with only the pointer 如下 added (tolerated, like the 下式 / 如下 tails of ch01, ch02, ch04, ch07). |
| ch10/10.4/text.html | l.22 | `对每个离子的光照射耦合离子的内态和运动态，经由` and then Eq. (10.38); the clause continues in l.24 with 其中. | The sentence ends “via” + equation; 经由 is the plain rendering of “via”, no 下式 added. |
