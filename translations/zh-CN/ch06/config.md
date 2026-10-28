# Config: 现代原子与光学物理 II, Chapter 6 (translation)

The translation pass of `Modern Atomic and Optical Physics II` chapter 6 into zh-CN, under `docs/prompts/translate.md`.
Each line is a setting and its value.

| Setting | Value |
|---|---|
| Source | `Modern Atomic and Optical Physics II` ch06, every page it lists |
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
| ch06/6.1/figures.js | l.102, `topline` of the trajectory sim | `` `${J} quantum jump${J === 1 ? '' : 's'} among ${N} trajector${N === 1 ? 'y' : 'ies'} …` `` became `` `截至$\\kt$ = …，${N}条轨迹中有${J}次量子跳跃。` ``; both plural branches removed, the template variables kept | English plural branches (translate.md 4.1); Chinese has one form, and the clause order of the sentence changes with it. |
| ch06/6.1/figures.js | l.90, hover name of the tracked trajectory | `', jumped ' + n + '×'` became `'，已跳跃' + n + '次'` | The multiplication sign stands for "times" in English; Chinese counts jumps with 次. Code kept. |
| ch06/6.3/figures.js | l.86, `topline` of the leak sim | the in-template English words ` in both` and `, not the master equation’s ` became `'两者均为' + …` and `… + '，而非主方程的' + …`; the sentence opens `到$\\kt$ = …时，已泄漏…%：` | English grammar built inside the ternary branches (translate.md 4.1); the ternary and its condition are kept byte for byte. There is no plural branch in this file. |
| ch06/6.3/figures.js | l.88, `small` line of the readout | `` `Over $|\\kOmega|^2$ it is …/$\\kgamma^2$; as … , …` `` became `` `除以$|\\kOmega|^2$为…/$\\kgamma^2$；当…时，为…。` `` | The elliptical English ("it is", "as … → 0, …") needs a verb in each clause; 为 is the plainest. |
