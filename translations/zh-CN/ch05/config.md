# Config: 现代原子与光学物理 II, Chapter 5 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 5 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch05, every page it lists |
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
| ch05/5.3/text.html | l.56 (`sim-phase-matching` sim-head), "the phase-matched growth of Eq. (5.77), the dashed parabola, only while" | 保持式 (5.77) 的相位匹配增长，即虚线抛物线 | The apposition has no Chinese marker without 即 (as in ch02 2.3 l.101); the source's commas are the only punctuation, no parentheses added. |
