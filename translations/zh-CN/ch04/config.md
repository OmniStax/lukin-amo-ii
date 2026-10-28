# Config: 现代原子与光学物理 II, Chapter 4 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 4 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch04, every page it lists |
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
| ch04/4.2/figures.js | l.53–57, the `topline` of the susceptibility sim | `const at = \`At $\\kdeltanu = …$\`` became `` `$\\kdeltanu = …$` `` and the three templates `${at} the medium …` became `当${at}时，介质的…` | The English preposition "At" sits inside the template variable; Chinese 当…时 wraps the whole condition, so the preposition cannot stay in `at`. `at` is read only by these three templates (translate.md 4.1, grammar-bearing code string). |
| ch04/4.3/text.html | l.60, "atoms Doppler shifted by ν = Δ − kv_z" | 多普勒频移后满足$\knu = \kDelta - \kkmag\kvz$的原子 | The book's "shifted by ν = …" equates a shift with a frequency; 满足 is the least repair that makes the Chinese read. Owner to confirm. |
