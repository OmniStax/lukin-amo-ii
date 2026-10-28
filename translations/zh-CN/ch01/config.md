# Config: 现代原子与光学物理 II, Chapter 1 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 1 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch01, every page it lists |
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
| ch01/1.2/text.html | 1.2.3, "n<sup>th</sup> eigenvalue" | 第 n 个本征值, the `<sup>th</sup>` tag dropped | Deviation from "every tag kept" (translate.md 5): an ordinal suffix with no Chinese form. |
