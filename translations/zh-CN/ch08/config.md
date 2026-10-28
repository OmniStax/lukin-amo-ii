# Config: 现代原子与光学物理 II, Chapter 8 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 8 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch08, every page it lists |
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
| ch08/8.6/figures.js | line 208 (`topline`) | `After ${n} pumping cycle${n === 1 ? '' : 's'} the atom's energy…` became `经过${n}次光抽运循环，原子的能量为…`: the plural branch is collapsed; the ternary is not kept. | Chinese has no plural inflection (translate.md 4.1); the count `${n}` carries the number. |
| ch08/8.6/figures.js | line 72 (hit `name`) | `shifted by ${… ? '' : '1/3 of '}|Ω|²/δ` became `移动了|Ω|²/δ${… ? '' : '的1/3'}`: the in-branch text `'1/3 of '` stands after the quantity as `'的1/3'`. | The Chinese 的1/3 follows what it divides (translate.md 4.1); the condition and the quantity are unchanged. |
| ch08/8.5/text.html | `#reabsorption` (l.40) | `<span data-concept="reservoir-operator-solution">热库算符$\hat{R}$的源项</span>`: the math run `$\hat{R}$` stands inside the span. The source has the span before the run (`The source term for the reservoir operator</span> $\hat{R}$`). | 热库算符的源项$\hat{R}$ would name the source term as R̂; Chinese needs R̂ as the reservoir operator inside the possessive. No span or run is dropped or added. |
| ch08/intro/section.json | `notes` | The note about the split “semi-/classical” is translated as printed; the Chinese text writes 半经典 without a split. | The Chinese cannot show the line-end split of an English word (translate.md 4.3); same case as the ch07 intro note. |
| ch08/8.4/text.html | `#diffusion-coefficient` (l.15) | `…和二阶关联函数$g(\kt-\kt')$表示，满足` then the display equation: the relative clause “which satisfies” has no subject and no 后者/它/归一化条件. | The English clause is followed directly by the equation; Chinese needs a verb with the equation as its object, added nothing else. |
| ch08/8.2/text.html | `#validity-estimate` (l.10) | `…成立的情形为` + display equation, with no 如下 and no colon. | The English sentence ends “valid in the regime” and the equation follows with no punctuation. |
| ch08/8.2/text.html | sim-head (l.29) | `上方的条带是光沿$x$的强度$|\kOmega(x)|^2$，如<偶极阱>中那样紧聚焦的光束或如<光学格子>中那样的驻波`: the appositive is juxtaposed, with no 即, no 可以是…也可以是…, and “across $x$” is 沿$x$. | The Chinese reads as the apposition “intensity …, a focused beam … or a standing wave”; nothing is added (ch07 precedent). |
