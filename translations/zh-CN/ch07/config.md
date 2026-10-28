# Config: 现代原子与光学物理 II, Chapter 7 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 7 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch07, every page it lists |
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
| ch07/intro/section.json | `notes` | The book's reader-visible note “The book's typo “to is applicability” (for “its”) is kept.” is translated as printed: 书中的笔误“to is applicability”（应为“its”）予以保留。 The English typo word stays inside the quotes; no comment of ours is added. | The Chinese text (其适用范围的限度) cannot carry the typo, so the note says something the Chinese sentence does not show (translate.md 4). Owner decision: translate the note as written, record the conflict here and in `translation-notes.md`. |
