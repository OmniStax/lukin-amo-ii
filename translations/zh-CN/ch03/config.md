# Config: 现代原子与光学物理 II, Chapter 3 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 3 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch03, every page it lists |
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
| ch03/3.3/text.html | 3.3.2 first paragraph (l.39), span `spin-in-fluctuating-field` | The span wraps 涨落场$\kft({\kt})$中的自旋: the math run $\kft({\kt})$ sits inside the span. | Span-content deviation (translate.md 5). In the source the run is outside the span. Chinese word order puts the run inside the noun phrase, and moving it out would need added words. |
| ch03/3.4/text.html | `#pumping-rate`, span `optical-pumping-rate` | The span wraps $\kRopt$的作用类似于与外加（相干）场相关联的非相干抽运率; the source span ends after "incoherent pumping rate". | Span-content deviation. The participle "associated with the applied (coherent) field" is a Chinese pre-modifier of 非相干抽运率, so it falls inside the span; the alternative was a dangling clause. |
