# Config: 现代原子与光学物理 II, Chapter 2 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 2 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch02, every page it lists |
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
| ch02/2.1/text.html | l.106 and l.108, `$k^{th}$个跃迁` | the math run `$k^{th}$` kept byte for byte; the Chinese particle 个 attached after it | Ordinal inside math, kept; Chinese particle 个 attached. The ordinal suffix `th` lives inside the `$…$` run, so it cannot be turned into 第 $k$ 个 without altering the run. |
