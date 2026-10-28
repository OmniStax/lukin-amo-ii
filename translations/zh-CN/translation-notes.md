# Translation notes: 现代原子与光学物理 II

Every forced scenario of the translation of `Modern Atomic and Optical Physics II` into zh-CN
(`docs/prompts/translate.md` item 4), and anything else the owner should see: one entry per
place, with the file, the span or line, what was done and why.

| File | Span or line | What was done | Why |
|---|---|---|---|

## Pilot pass of chapter 1 (2026-10-26)

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch01/1.2/text.html | 1.2.3, "n<sup>th</sup> eigenvalue" | 第 n 个本征值, the `<sup>th</sup>` tag dropped | Deviation from "every tag kept" (translate.md 5): an ordinal suffix with no Chinese form. |
| book.json | `title` | 现代原子与光学物理 II | No official Chinese edition. Owner to confirm. |
| book.json | `concepts` outside chapter 1 | kept in English | Pilot of chapter 1 only; the table is copied whole so every id matches. |
| glossary.zh-CN.json | every row with `"confirm"` | to be confirmed | Rows marked `termonline` are established usage not listed in 术语在线; rows marked `owner` are the book's own labels, book titles and the like. |
| ch01/1.3/text.html | `#principal-n`, "have $n$ are allowed" | 具有相同主量子数$n$的所有角动量态$l = 0, \cdots, n-1$都是允许的 | The source clause is garbled ("with the same principal quantum number have $n$ are allowed"). Chinese cannot carry the broken grammar, so the words are followed as printed, with no count added; the `$n$` run is kept and placed after 主量子数. Owner to decide. |

## The book's own errors (policy)

Duplications and broken grammar of the English are smoothed into grammatical Chinese where Chinese cannot carry them; English misspellings cannot carry over. Nothing is corrected in substance. Places:

- 1.2: "the the basis" (one 在…基中); "do no commute" (不对易).
- 1.3: "dipole interaction interaction" (one 偶极相互作用); "a reduced the energy splitting" (one verb); "principal quantum $n$ number" (主量子数$n$); the stray space in ", for example) ." (dropped); "have $n$ are allowed" (see the row above).
- Misspellings: "exercize", "explicitely", "Simliarly", "transitions strengths", "Clebsch-Gordon" (written CG 系数, per the glossary).
- Tolerated grammatical tails: "下式" added in 1.2 ("都有下式成立时"), 1.3 ("矩阵元满足下式时" and the other "由下式给出" lines).
- Tolerated ellipsis wording in figures.js: 'L lifted' as 'L简并解除' (adds 简并), "类氢情形下" (adds 情形下). The other review items on connectives and antecedents (M10 and the m3 list) were changed in the text and need no entry.
- Book titles stay in English as printed, in Chinese quotation marks: Vanier and Audoin, Metcalf and van der Straten, Sakurai (author names are rendered in Chinese by the owner's decision: 瓦尼耶, 梅特卡夫, 樱井纯, and in chapter 2 Meystre, Sargent, Cohen-Tannoudji, Scully and Zubairy per the glossary rows that cite it).

## Pass of chapter 3 (2026-10-26)

Rows from the forced-scenario table of `ch03/config.md` are repeated first.

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch03/3.3/text.html | 3.3.2 first paragraph (l.39), span `spin-in-fluctuating-field` | The span wraps 涨落场$\kft({\kt})$中的自旋: the math run $\kft({\kt})$ sits inside the span. | Span-content deviation (translate.md 5). In the source the run is outside the span. Chinese word order puts the run inside the noun phrase, and moving it out would need added words. |
| ch03/3.4/text.html | `#pumping-rate`, span `optical-pumping-rate` | The span wraps $\kRopt$的作用类似于与外加（相干）场相关联的非相干抽运率; the source span ends after "incoherent pumping rate". | Span-content deviation. The participle "associated with the applied (coherent) field" is a Chinese pre-modifier of 非相干抽运率, so it falls inside the span; the alternative was a dangling clause. |

### Span and math-run swaps within a sentence (translate.md 3.3; nothing added)

| File | Line | Swap | Why |
|---|---|---|---|
| ch03/3.1/text.html | 35 (`sim-thermal` sim-head) | `<a href="#eq-3-12">` and `<span data-concept="two-level-atom">` swap: 对于式 (3.12) 的二能级原子 | Chinese word order of "the two-level atom of Eq. (3.12)". |
| ch03/3.1/text.html | 5 | math runs in a different order than the English | Chinese word order. |
| ch03/3.3/text.html | 23, 34 | math runs in a different order than the English | Chinese word order. |
| ch03/3.3/text.html | 73 (`#coarse`) | $\kDeltat$ now precedes the span `correlation-time`, and precedes the span `reduced-density-operator`: 在介于关联时间与…之间的时标$\kDeltat$上取平均; 对大于$\kDeltat$的时间有效的系统约化密度算符的运动方程 | The two relative clauses of the English become pre-modifiers; no clause was added. |
| ch03/3.4/text.html | 31 (`#thermal-spontaneous`) | `<em>两个</em>` now precedes the span `thermal-and-spontaneous-transitions`: 导致两个方向上的非相干跃迁 | The English "transitions in both directions" is a pre-modifier in Chinese; no verb added. |
| ch03/3.4/text.html | 62 (`#saturated`) | the span `lvl-1 lvl-2` (基态和激发态) now precedes the span `pure-and-mixed-states` (统计混合): 处于基态和激发态等权重的统计混合 | Same reason; no clause added. |

### The book's own errors

Smoothed, because Chinese cannot carry them (nothing is corrected in substance):

- 3.3 l.25: "correspnds" (misspelling).
- 3.3 l.82: "interpreted an addition" (broken grammar).
- 3.4 `exercises[1]`: MIT's "loosing" (misspelling of "losing").

Kept as printed:

- `$\kHS R$` (3.3 l.52).
- "where the second line when we cyclically permute…" (3.3 l.89), kept as an equally broken sentence.
- The misprinted `\krhoonetwo(\kdeltanu)` in eq. 3.95, with its footnote.
- The sign-convention footnote of 3.4 and every derivation `note` that names a misprint.
- The concept `spin-in-fluctuating-field`: the source says the splitting "is a random field"; that garble is kept, and the "which" is resolved to the off-diagonal element (该非对角元), the thing that depends on the moments in eq. 3.34.

### Terms and names

- Author names are Chinese by the owner's decision (科恩-塔诺季 in 3.4 l.16); the book title "Atom-Photon Interactions" stays in English. No Latin author name is left in ch03.
- Line broadening in the sim-head of 3.4 is written 谱线增宽 (glossary family 均匀谱线增宽, 多普勒谱线增宽).

## Chapter 2 (2026-10-26)

Deviations and forced scenarios, one row each (`ch02/config.md` carries the forced-scenario row).

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch02/2.1/text.html | l.106, l.108, `$k^{th}$个跃迁` | Ordinal inside math, kept; Chinese particle 个 attached | The `th` suffix is inside the `$…$` run, which stays byte for byte; no Chinese form is possible without altering it. chapter.json `variables` reads 第 k 个. Owner to decide. |
| ch02/2.1/text.html | l.96, "Eq. (2.23)" | `<a>式 (2.23)</a>的<span>有效哈密顿量</span>变为`: span and link swapped | translate.md 3.3, Chinese order; no parentheses added. |
| ch02/2.1/text.html | l.98, "Hamiltonian of Eq. (2.32) leads to the equations of motion" | `<a>式 (2.32)</a>的<span>哈密顿量</span>导致如下运动方程`: span and link swapped; "如下" added so that Eq. (2.33) stays attached to 运动方程 | 3.3; "如下" is the minimum grammatical tail, like the tolerated "下式". |
| ch02/2.1/text.html | l.58, "adiabatically follows the amplitude c1 according to …" | the math run `\kctildetwo = …` moved before 浸渐跟随 | 3.3, Chinese order. |
| ch02/2.1/text.html | l.69, "the original Hamiltonian after making the RWA, written in the rotating frame" | spans reordered (旋转波近似, 转动参考系, 哈密顿量) | 3.3, Chinese relative clause. |
| ch02/2.3/text.html | l.29, "define creation and annihilation operators for excitations of each mode and polarization j" | the two spans swapped | 3.3. |
| ch02/2.3/text.html | l.45, "the dipole Hamiltonian for a two-level atom" | `二能级原子的偶极哈密顿量`: the two spans swapped | 3.3. |
| ch02/2.3/text.html | l.101 (sim-head), "the photon wavepacket of Eq. (2.100)", "the spontaneous emission rate of Eq. (2.89)" | `式 (2.100)的光子波包`, `式 (2.89)的自发发射率`: link and span swapped | 3.3. |
| ch02/2.3/text.html | l.101, "the bar beside the atom, the excited population …, drains" | 原子旁边的条形，即激发态布居 …，不断减少 | The apposition has no Chinese marker without 即; the commas are the source's. |
| ch02/2.3/text.html | l.9, "can be found using" | "可以由下式求得" | Tolerated "下式" tail (as in chapter 1). |
| ch02/2.1/text.html | l.30 | "旋转波近似（RWA）" kept inside the span | The source defines the acronym there. This is the only place the acronym is printed in prose. |
| all ch02 prose | every "RWA" | written 旋转波近似 | Glossary row RWA → 旋转波近似, so concept spans match the concept terms. Expansion of the acronym: RWA = rotating wave approximation (旋转波近似). Math subscripts `RWA` stay. |
| ch02/2.1/text.html | l.71 | "dressed state picture" → 缀饰态图像 | Glossary row. 绘景 stays for the Schrödinger, Heisenberg, Dirac and Bloch pictures. |
| ch02/2.1, 2.3 section.json | `exercise_notes` | "none is held" → 没有一问被暂扣 / 没有一部分被暂扣 | "held" means withheld in this book (RULES.md, exercise kinds): a numerical part is held back and named in `exercise_notes`. The source says none is. |
| ch02 | "energy shift" → 能量移位; Stark shift → 斯塔克偏移; "discrete" → 离散 everywhere | | One form each. |

### The book's own errors in chapter 2 (smoothed, not carried over)

- 2.1 l.7: "energy differency" → 能量差.
- 2.1 l.45: comma splice "varies with time, In this case" → two sentences.
- 2.2 l.10: "infinitesmal" → 无穷小.
- 2.2 l.17: stray space in "for $\kgamma$ ," removed.
- 2.3 l.2: "the atom interaction with" → 原子与…的相互作用.
- Exercise prompts: "anzatz" → 拟设; "Schrodinger" → 薛定谔 (2.1 exercises 1 and 2).
- Kept as printed: "each bound state |k⟩" (2.2 l.3, a footnote explains it); the wrong opening quote of ”Atom-Photon Interactions” (2.3 l.61); "Floquet basis" for a Fourier series (2.1 l.117); ∇²φ = 4πρ, p − qA/c, ν_i and ∂²t inside math; the period inside “Quantum Optics.” (2.3 l.63, no 。 added after it).
- 2.3 l.99, the dangling "with a kind of wavefunction for the photon describing …": 带有… kept as printed.

### Glossary points for the owner

- reservoir → 热库 is used for a measured-and-reset cavity (2.3 exercise 7 solution); 库 or 储库 would fit better.
- mode → 模式 but modes → 模 (ch02 writes 模); golden rule → 黄金定则 but Fermi's Golden Rule → 费米黄金规则.
- Concept names 产生算符与湮没算符 and 周期共振腔的模 are glossary targets and stay; the text spans read 产生算符和湮没算符 and 模.
- No glossary row for "discrete" (离散 used), "held" in the exercise sense (暂扣), "AMO" (原子分子光物理 in the chapter title).


## Chapter 4 (2026-10-26)

Deviations and forced scenarios, one row each (`ch04/config.md` carries the forced-scenario rows).

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch04/4.2/figures.js | l.53–57, `topline` of the susceptibility sim | `const at` lost the English "At"; the three templates read `当${at}时，介质的…` | The preposition sat inside the template variable; Chinese 当…时 wraps the condition. `at` is read only by these templates. Forced scenario (translate.md 4.1). |
| ch04/4.2/figures.js | l.113, l.120 hover names | `'静止原子谱线的峰值γ/γ₁₂ = ' + fmt(1 / g, 2)`, `'气体的吸收谱，共振时Im[χ] = ' + fmt(sp.peak, 2)`: the trailing `+ '…'` concatenation of the English was dropped | The English tail ("of the line of atoms at rest", "on resonance") moves in front of the number; `verify_parity.py` therefore reports "figures.js code outside string literals" for 4.2 (one `+` operator removed, nothing else). |
| ch04/4.2/text.html | l.44 (sim-head, Figure 4.1) | `实线所示的<span>电极化率</span>虚部是…；虚线所示的实部是…`: the span moved after "实线所示的" | 3.3. The source has "solid"/"dashed" as appositions between commas; no parentheses added. 所示 is the one word Chinese needs to attach 实线 to 虚部. |
| ch04/4.2/text.html | l.68 (sim-head, Figure 4.2) | `每条都画到它们求和所得的实线谱为止` | The appositive "solid" becomes a modifier of 谱, no parentheses. |
| ch04/4.2/text.html | l.41 | `呈现<span>谱线宽度为$\kgammaonetwo$</span>的洛伦兹线型`: "with linewidth γ₁₂" becomes a pre-modifier; 为 is inside the span | Chinese order; the span keeps the words with the same meaning. |
| ch04/4.3/text.html | l.2 | `各分量作为含时外加场$\kOmega(\kt)$的函数的含时解`: math run and span swapped | 3.3. |
| ch04/4.3/text.html | l.3 | `受到频率相对于原子共振<span>失谐</span>$\kdelta…$的光子照射的<span>均匀</span><span>二能级原子</span>系综`: the `detuning` span before the `homogeneous` and `two-level-atom` spans | 3.3, the English participle becomes a Chinese pre-modifier. |
| ch04/4.3/text.html | l.13 | `是通过$\kRopt$进入的外加场强度$\kOmega = …$的函数`: the two math runs swapped | 3.3. |
| ch04/4.3/text.html | l.54 | `通常用频率同为$\knu$、接近与原子跃迁能量$\kDelta$共振的<span>两束对传光束</span>来进行`: math runs and the `pump probe` span swapped | 3.3; no "频率均为" repeated. |
| ch04/4.3/text.html | l.60 | `…显示出尖锐的特征` moved: `谱将由于被<span pump>强场</span><span saturation>饱和</span>的静止原子而在$\knu = \kDelta$附近显示出尖锐的特征` | Chinese order of the "due to … saturated by …" clause; the spans stay in their order. |
| ch04/4.3/text.html | l.58 (sim-head) | `被…的原子吸收，阴影所示的速度类，其面积就是它的吸收`: the apposition kept as a bare apposition | No 这是 added. |
| ch04/4.3/text.html | l.60 | "atoms Doppler shifted by ν = Δ − kv_z" → `多普勒频移后满足$\knu = \kDelta - \kkmag\kvz$的原子` | The book equates a shift with a frequency; 满足 is the least repair. Owner to confirm (also in `ch04/config.md`). |
| ch04/4.3/text.html | l.76 | `通过对所有原子速度类对<span>极化</span>的贡献求和` | Chinese order, no stray 、. |
| ch04/4.3/section.json | `derivations[0,1,6]` notes | bare "(4.53)" etc. where the source has no "Eq." (no 式 added) | As in 4.1's notes. |
| ch04/intro/text.html | l.5 | colon after 宏观极化 dropped (the source sentence ends at "by" with the equation following); the ASCII spaces around inline math (intro l.5, l.14) removed to match 4.1–4.3 | The source has no colon; chapter-wide spacing. |

Tails that could not be removed: intro l.5 "通过下式" (for "by"), intro l.7 "满足以下条件" (for the displayed conditions), 4.3 l.54 "如下电场分布" (for "The beams create an electric field profile …,"). They are the least Chinese needs to introduce the equation that follows, as in chapters 1–3.

### The book's own errors in chapter 4 (smoothed, not carried over)

- "susceptiblity" ×2 (4.3 l.11) → 电极化率; "inhomogenous" ×4 (4.2 l.56, l.60; 4.3 l.54, l.64) → 非均匀 / 非均匀谱线增宽; "homogenously" (4.2 l.70) → 均匀增宽; "focussing" (4.1 l.11, 4.3 l.34) → 聚焦.
- "processes which affects" (4.2 l.56) → plural 过程; the stray space in "detunings ," (4.3 l.32) removed.
- "Doppler shifted by ν = Δ − kv_z" (4.3 l.60): see above, 满足 added.
- "saturated spectroscopy" (4.3 l.62) → 饱和光谱学 through the glossary row.
- Kept as printed: "in a resonant field" (4.2 l.2, with its footnote); the missing sentence break in the Fig. 4.4/4.5 caption; "atomic transition energy Δ"; ∏ with ⊗ in Eq. (4.3); N_i/V_i; the misprints named in the derivation notes.

### Terminology decisions for the owner

- Polarization of the medium: bare "polarization" (P) is 极化强度 in 4.1, 4.2 and the ch04 concept statements; the compounds keep their glossary form (宏观极化, 缓变极化, 缓变极化振幅, 极化源). The concept `slowly-varying-polarization` has terms ['缓变极化', '极化强度'] so that every span matches a term. Not changed: the `macroscopic-polarization` span in the 4.1 lead (极化), the `atomic-polarization` spans in intro and 4.3 (极化; the concept belongs to ch02 and its term is 极化, a substring of 极化强度), and the glossary rows atomic polarization → 原子极化强度 / polarization of the atom → 原子极化 (two targets for one concept).
- 固有线宽 (natural linewidth, glossary form, 物理学名词 规范名; the usual 自然线宽 is not used). 4.3 l.54 and `saturation-spectroscopy` say 固有线宽 for "natural". 4.2 l.64 "intrinsic atomic linewidth" now reads 内禀谱线宽度, so that "intrinsic" and "natural" are two different words as in the book. 内禀 is not from termonline: owner to confirm (本征 is the other candidate).
- 非均匀谱线增宽 everywhere (4.2 l.64 ×3 and the `assumes` entry were 非均匀增宽). 4.2 l.70 "homogenously or inhomogeneously broadened" is the verb: 均匀增宽还是非均匀增宽.
- "reactive" (component of susceptibility) is 无功的 (glossary), was 反应性的.
- self-focussing or de-focussing → 自聚焦或自散焦 (the glossary row de-focusing → 散焦 is the plain optics term).
- Family unevenness left as the glossary has it: 谱线致宽 (line broadening), 增宽 (inhomogeneous/Doppler/homogeneous), 辐射增宽, and the linewidth forms 谱线宽度 / …线宽 (4.2 l.66 non-uniform 线宽 and 辐射线宽 next to 谱线宽度). Owner to pick one length per family.
- Checker note: `verify_parity.py` fails ch04 only on the known items: SVEA/Figure English letters, the `ai` growth of section.json, and 4.2 figures.js code outside literals (one `+` removed, see above).

## Chapter 6 (2026-10-26)

Deviations and forced scenarios, one row each (`ch06/config.md` carries the forced-scenario rows).

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch06/6.1/figures.js | l.102 `topline` | both plural branches (`jump${J === 1 ? '' : 's'}`, `trajector${N === 1 ? 'y' : 'ies'}`) collapsed to `${N}条轨迹中有${J}次量子跳跃` | Forced scenario, translate.md 4.1. |
| ch06/6.1/figures.js | l.90 hover name | `' jumped ' + n + '×'` became `'，已跳跃' + n + '次'` | × for "times" is 次 in Chinese. |
| ch06/6.3/figures.js | whole file (found untranslated in the review, translated in the revision) | `ctl` aria, axis `text`, hover names, legend keys, both `topline` sentences and the readout `small` line translated; code, ids, keys, comments, numbers and `$…$` runs untouched | The first pass left the file byte-identical to the English source although `section.json` claimed it translated. |
| ch06/6.3/figures.js | l.86 `topline` ternary | ` in both` and `, not the master equation’s ` became `'两者均为' + …` / `… + '，而非主方程的' + …` | Forced scenario, translate.md 4.1 (English grammar inside the branches); the ternary is kept. |
| ch06/6.1/text.html | l.28 | `对应于<a>式 (6.8)</a>前两项的<span schrodinger-equation>薛定谔方程</span>是`: the anchor and the span swap places | 3.3. No word added. |
| ch06/6.1/text.html | sim-head of the table (l.53 of the review) | `表中的流程运行于一个经由一个通道$\hat{c} = |1\rangle\langle 2|$以速率$\kgamma$从$|2\rangle$衰变到$|1\rangle$、并且可以…共振驱动的二能级原子上`: the math runs $\hat{c}$, $\kgamma$ move in front of $|2\rangle$, $|1\rangle$ | 3.3. The colon, 该原子, 通道为, 速率为 were removed. |
| ch06/6.1/text.html | l.16 | `为了看出这一点，把（原则上任意的）算符$\kchatk$取为` | The "with" before the displayed equations is 取为; no 与下式等同起来. |
| ch06/6.1/text.html | l.18 | `我们将把它写成离散时间，` | 的形式 removed; "write it in discrete time". |
| ch06/6.2/text.html | l.8 | `由于…恰好是…<span>发射一个光子的概率</span>，它理应等于<span>处于激发态的概率</span>乘以该激发态衰变的概率。` | "it makes sense that it is equal to" is 理应等于 in place of the tail 这是合理的; 所以 removed. |
| ch06/6.2/text.html | l.11 (sim-head) | `二者之积，即虚线，为…`; the math runs of the sentences swap inside their clauses where Chinese order demands it | The appositive "dashed" has no parentheses (3.3); 即 is the apposition marker. Owner to confirm. |
| ch06/6.2/text.html | l.20 (`#use-cases`) | `使用蒙特卡罗法进行模拟有利的情形是` | "advantageous … when" with the list following; no 在下列情形下. |
| ch06/6.2/text.html | l.17 | `以某种方式演化` | 确定的 removed ("in a certain way"). |
| ch06/6.2/figures.js | hover names, aria | `平均在起始值一半处`, `无光子时的 p₂ 在起始值一半处`, `激发态的初始布居，概率幅 a2 的平方` | 降至 and 即 removed. "amplitude" is 概率幅 as in the `a_1`/`a_2` concepts of chapter.json (the glossary row amplitude → 振幅 is for the field amplitude). |
| ch06/6.3/text.html | l.5 | `因此到外加场的最低阶，我们可以忽略…` | As 6.1 derivations[2] "到小时间$\delta t$的最低阶". |
| ch06/6.3/text.html | sim-head | `…就会低于<span>主方程的</span>、由衰变不断重新填充的那一个。` | The relative clause on the master equation's ρ₁₁; no repeated antecedent 后者. 几率 became 概率 (also in 6.2 l.11). |
| ch06/6.3/text.html | l.2 | `(1)`, `(2)` in ASCII with a space, as the English prints | The first pass had full-width （1）（2）, the other pages ASCII. |
| ch06/intro/text.html | l.3 | `转化为某种更像薛定谔方程的东西`: 的形式 removed | "something more like". |
| ch06/intro/section.json | `notes` | translated as written: 书中的笔误“continous”予以保留。… 主方程/密度矩阵 | The reader-visible note is the book's own; the English typo word stays in the quotes. No commentary of ours there. |
| ch06/chapter.json | `meaning` of γ (×3) | `2.2 的衰变，以场的真空模为连续谱` (节 and 作为 removed) | Added word; chapters 3 and 8 use 为. Chapters 2, 3, 4, 8 still differ among themselves (see below). |
| ch06/book-rows.json | concept rows | `null-measurement` 一种; `monte-carlo-use-cases` 万不得已才用的方法; `mcwf-two-level-decay` 衰变 (not 衰减); `no-jump-evolution` term 从未跳跃 (as the span); `jump-probability` statement turned to the appositive | Statements aligned with the text; `terms` lengths unchanged. |
| ch06/6.2/section.json | `derivations[0,1].source`, `footnotes[0].html` | 例 not 示例 (section title 例：二能级原子的衰变); the footnote ends `：$…$。` | Title and glossary row; full-width punctuation. |

### The book's own errors in chapter 6 (smoothed, not carried over)

- "Schrodinger" (no umlaut: intro l.5, 6.1 l.28 and l.47, 6.3) → 薛定谔.
- "continous" (intro): the translation reads 连续; the intro `notes` field, which names the typo, keeps the English word in its quotes.
- "corresponds the state" (6.1 l.43, "to" missing) → 对应于.
- "two level system" (6.2 l.2) → 二能级系统.
- "Monte Carlo Wavefunction method" (capitals) → 蒙特卡罗波函数法.
- "1990s" (intro) → 20世纪90年代 (Chinese has no "1990s" form; `verify_parity.py` lists it as a prose-number FAIL).
- Kept as printed: eq. (6.24) with `+` (footnote c-eq-6-24); the tilde of 6.2 l.37 and the table step 3 index and step 7 sum (footnotes); "probability … decays more slowly" (6.2).
- 6.3 l.3 尽管如此 translates the source's own "Nevertheless".

### Points for the owner

- Concept name `null-measurement` 未探测到光子也是一种测量: 也 is not in the English name "Not detecting a photon is a measurement" but is in the glossary row and the text span; the glossary was not edited.
- Names 达利巴尔, 卡斯坦, 默尔默, 卡迈克尔 carry `confirm: owner` in the glossary (translate.md 2.7 keeps the original where no standard rendering exists).
- The γ meaning "the decay of 2.2": ch02 2.2 节的 / ch03 2.2 节的 / ch04 2.2 中的 / ch06 2.2 的 / ch08 2.2 的, and 作为 / 为; ch06 now follows ch08's 2.2 的 … 为; the other chapters were not touched.
- 二者之积，即虚线，为 (6.2 sim-head): 即 may be dropped if the owner prefers the bare apposition.
- The visual check in `npm run dev` of the 6.3 sim strings (width of the legend keys 无跳跃/主方程/泄漏 and the new topline) is not done.

## Chapter 5 (2026-10-26)

The forced-scenario row is also in `ch05/config.md`. Rows are one per place.

| File | Span or line | What was done | Why |
|---|---|---|---|
| ch05/5.3/text.html | l.56 (`sim-phase-matching` sim-head) | 保持式 (5.77) 的相位匹配增长，即虚线抛物线 | Apposition without a Chinese marker (as in ch02); no parentheses added. |
| ch05/5.1/text.html | l.72 | "corresponds to that of a radiatively broadened system" → 与辐射增宽系统的电极化率相对应 | "that of" is a pronoun with the susceptibility of the previous line as antecedent; a bare 的 would leave the Chinese sentence without a noun. |

### Span and math-run swaps within a sentence (translate.md 3.3; nothing added)

| File | Line | Swap | Why |
|---|---|---|---|
| ch05/5.1/text.html | 7, 11, 28, 30, 67, 69 | spans/links in a different order than the English | Chinese word order; relative clauses become pre-modifiers. |
| ch05/5.1/text.html | 16, 67, 93 | math runs in a different order | Chinese word order. |
| ch05/5.1/text.html | 69 | the span `detuning` (大的单光子失谐) now precedes the run $\kgammaonethree|\kOmegatwo|^2/\kDelta^2$: 由激发态衰变产生的、被大的单光子失谐强烈抑制的一项… | The relative clause "which is strongly suppressed by…" is a pre-modifier; no 该项 added. |
| ch05/5.1/text.html | 80 | the span `lvl-3` (激发态 $|3\rangle$) now precedes the run $|+\rangle$: 到非常接近激发态 $|3\rangle$ 的 $|+\rangle$ 的跃迁 | Pre-modifier instead of 该态. |
| ch05/5.2/text.html | 21, 25, 34, 36, 40, 42 | spans/links in a different order than the English | Chinese word order. |
| ch05/5.2/text.html | 23, 40 | math runs in a different order | Chinese word order. |
| ch05/5.2/text.html | 23 | the span `field-1 field-2` (两束光) now precedes the span `dark-state` (暗态): 与两束光都解耦的暗态的产生 | Pre-modifier instead of 这些暗态. |
| ch05/5.2/text.html | 36 | "Unlike π pulses based on Rabi oscillations, which are exquisitely sensitive to…" → 基于拉比振荡、对脉冲振幅和时序极为敏感的 π 脉冲 | Pre-modifier instead of 后者. |
| ch05/5.3/text.html | 20, 27, 63 | spans/links in a different order than the English | Chinese word order. |
| ch05/5.3/text.html | 10, 33 | math runs in a different order | Chinese word order. |
| ch05/5.3/text.html | 10 | the span `wavefunction-parity` now precedes the span `lvl-2`: 混合成没有确定宇称的混杂态 | Pre-modifier instead of 它没有确定的宇称. |
| ch05/5.3/text.html | 10 | 驱动从 $|1\rangle$ 到 $|2\rangle$、远离居间态 $|i\rangle$ 的双光子跃迁 | Pre-modifier instead of 该跃迁. |
| ch05/5.3/text.html | 18 | the sentence ends on 拉比频率 (the displayed equation follows) | Neither 其…为 nor a repeated antecedent added. |
| ch05/intro/text.html | 8 | 一个容许跃迁由场 Ω₁，ν₁ 驱动，另一个由场 Ω₂，ν₂ | The English leaves the verb out in the second clause; one verb, not 驱动 twice. |
| ch05/5.1/text.html | 74, 93 | 拖动 and 变慢 stated once, the second and third clauses leave the verb out as the English does | No repeated verbs. |

### The intro figures.js change (code-adjacent)

`ch05/intro/figures.js` compares the panel titles in code (`p.title === 'Λ 型系统'`, `p.title === '级联系统'`, l.42) to choose the hover strings. The comparison literals were changed to the translated titles together with the titles themselves, so the ternary still maps the three panels to the same hover strings (the V panel stays on the else branch). Nothing else reads these titles (grep of the translation and of `omnistax-web/src`).

### The book's own errors in chapter 5 (smoothed, not carried over)

- 5.1 l.28 and l.30: "Louvillian" (刘维尔算符); l.30 "will account for from |3⟩ to |1⟩ at rate γ" (rendered 将计入从…的速率γ).
- Misspellings: "singe-photon", "typcially", "configuation", "approprately", "mathmatical".
- "the the" (5.2 caption and l.31); "For a atomic cloud" (5.3 l.52); "(n a lossless system)" (5.3 l.71, 在无损耗系统中); "may also employed"; "net output nonlinear processes" (5.3 l.54); the mismatched ”slow light” quote; "frequency sum generation" (5.3 figures.js l.38).
- Kept as printed: "Figure 7.3"/"Figure 9.3" (图 7.3/9.3 with the footnotes), "real and complex parts" (实部和复数部分), "proportional to the wavelength λ²", "UUV", the missing period at the end of the fig-5-2 caption, the missing punctuation before eq. 5.41.

### Terms and names

- `terms` lists: every ch05 concept's `terms` has the same length as the English list (the duplicated Chinese entries of `raman-transition`, `lambda-system`, `lambda-detunings`, `electromagnetically-induced-transparency`, `sum-frequency-generation`, `phase-matching` were de-duplicated in the first pass and are restored; as in ch02, ch04, ch06, ch07).
- "Not to scale." is 未按比例绘制。 everywhere (intro, 5.1, 5.3), without 示意图.
- 上态/下态, 外加光场/外加场, 远离共振的 (glossary row far-off resonant), 非共振 for off-resonant.
- The readout in 5.2 `figures.js` for the squared modulus $|\langle D|\psi\rangle|^2$ is labelled 重叠, not 内积: 内积 is ⟨D|ψ⟩ itself. The glossary rows "overlap (of two states)" → 内积 stay as they are.
- Owner decision: author names are Chinese also in citations. 5.3 l.68 keeps K.哈库塔, L.马尔梅 and B.P.斯托伊切夫 (Hakuta is Japanese; a kanji form such as 白田耕藏 would be more usual and is not verified; the glossary rows Hakuta/K. Hakuta say "no standard Chinese rendering found").
- 讲义 for "previous lectures" (intro l.2); 缀饰态解释 (the glossary row); 激励 for "stimulate" (intro l.4 and the concept `raman-transition`).
- Checker: `npm run check:content -- --books lukin-amo-ii-zh-cn` reports no errors; `node --check` passes on the four ch05 `figures.js`; `verify_parity.py` fails only on the known items (the `ai` growth of section.json; "Figure", STIRAP, SVEA in the English-letters check).

## Chapter 7 (2026-10-26)

Translated by claude-sonnet-5-5 (medium effort); an independent review (2 critical, 9 major, 17 minor groups) was applied by a second pass under the owner's rulings below.

### Forced scenario

- ch07/intro/section.json `notes`: the book's own note “The book's typo “to is applicability” (for “its”) is kept.” is translated as printed (书中的笔误“to is applicability”（应为“its”）予以保留。). The Chinese sentence (其适用范围的限度) cannot show the typo, so the note and the text disagree. Owner ruling: the note is the book's own reader-visible note and carries no commentary of ours; the conflict is recorded here and in `ch07/config.md`.

### Span and math-run swaps within a sentence (translate.md 3.3; nothing added)

| File | Line | Swap |
|---|---|---|
| ch07/7.1/text.html | 18 | the links `7.4`, `7.6` precede the span `非对角耦合` (Chinese pre-modifier order) |
| ch07/7.2/text.html | 20, 24 | math runs in a different order (Chinese word order) |
| ch07/7.2/text.html | 34 | spans in a different order |
| ch07/7.3/text.html | 2 | 特别是导致EIT的暗态的浸渐跟随: the spans `electromagnetically-induced-transparency`, `dark-state`, `adiabatic-theorem` now in this order; no 它 added |
| ch07/7.3/text.html | 6, 11, 25, 28, 32 | spans/math runs in a different order (Chinese word order) |
| ch07/7.4/text.html | 10, 12, 57, 61 | math runs in a different order |
| ch07/7.4/text.html | 14 | the marker `c-psi-paren` and the span `非厄米薛定谔方程` |
| ch07/7.4/text.html | 25 (#expansion-note) | the markers `footnote-3` and `c-c2-2` stand in the other order, but each is still after the same words: footnote-3 after 无法求解, c-c2-2 after the misprinted $c_2^{(2)}$. The correction numbering is unchanged (c-psi-paren, c-c2-2, c-eq-7-56, c-final-time, c-alzetta). |
| ch07/7.4/text.html | 37 (#fidelity) | 从$|1\rangle$到$-|2\rangle$的浸渐通道的保真度: the data-ref spans `lvl-1`, `lvl-2` now precede the concept span `stirap-fidelity`; no 即 or 的转移 added |
| ch07/7.4/text.html | 45, 51, 55, 69 | the spans `bright-dark-basis`, the bright-state superposition and `bright dark` in a different order (Chinese pre-modifiers) |
| ch07/7.4/text.html | 61 | 一旦$\kOmegaNA$与$\kgammaB$之比$\kgammaonethree/\kOmega^2\ktau$不再很小: the math runs swap; the apposition is juxtaposed, with no parenthesis, 即 or 作为 added |
| ch07/7.4/text.html | 65 | 进入无损耗地在介质中传播的$|1\rangle$和$|2\rangle$的叠加: relative clause as a pre-modifier, no 该叠加态 |
| ch07/7.4/text.html | 77 | the `pumped` span wraps the whole phrase $m_J = -1$和$m_J = 1$的暗叠加, as the source span does |
| ch07/7.1, 7.2, 7.3, 7.4 | several lines | attribute order inside tags differs (data-ref before id and the like); no attribute changed |
| ch07/7.3/text.html | 25 | 组成的系统，通过外加场…: the subject is shared, no 它们 added |
| ch07/7.3/section.json | derivation 0, node 1, step 0 `cap` | 作用于沿$|3\rangle$没有分量的下能级态时: pre-modifier instead of the parenthesis （它沿|3⟩没有分量） |

### The book's own errors in chapter 7 (smoothed, not carried over)

- intro: “to is applicability” (the note keeps the typo word in quotes; the sentence says 其适用范围的限度).
- 7.1 l.24 and 7.4 l.14: “Schrodinger” (薛定谔).
- 7.4 l.34: “us thus” (因此是).
- 7.4 l.45: “the the”.
- 7.4 l.55: the stray space and comma in “|B⟩ , since”.
- 7.4 l.71: the stray commas in “basis, (e.g. …)”.
- 7.4 l.77: “superpostion” (暗叠加).
- 7.4 caption of Figure 7.5 + 7.6: “S = Ω₃ ,C = Ω₄” (comma misplaced) is written S = Ω₃，C = Ω₄.
- 7.4 l.68: “Alzelter” is written 阿尔泽塔, the rendering of the correct name Alzetta (glossary row “Alzetta (name)”); the correction c-alzetta still says that the book misspells the first author's name, and the journal misspelling “Novvo Cirr.” and “5/76” stay in Latin as printed.
- Kept as printed: the unclosed parenthesis “（见图 (9.3)” (7.2 l.20), |ψ(t))⟩, $c_2^{(2)}$, |D₁₃⟩ / |D₃₄⟩, “Turning on Ω₄”, “the probe pulse” on the pump referent (探测脉冲), and every misprint named in the derivation notes.

### Deviations and tolerated forms

- 7.4 `figures.js` l.117: `order.join('、')` — the separator literal `', '` is reader-visible punctuation inside code and was changed to the full-width 顿号; the code around it is unchanged.
- 7.4 `notes`: 图 7.6，即托伊尔等人的氖分束器数据，…: the appositive 即 follows the ch02 precedent.
- 7.4 footnote-3: 具有如下形式： is the tolerated 下式 class.
- 叠加 / 叠加态: 叠加 (glossary: superposition) is used for the sense “a superposition of A and B” in text, statements and labels (7.1–7.4); the compound 叠加态 is not used.
- 定时 for “timing” in 7.3 and 7.4 (7.4 caption: 由控制脉冲 Ω₄ 的定时、相位和功率决定); the aria strings in 7.4 `figures.js` that give a pulse's peak time read 时刻.
- 前面几讲 (7.3 l.2) and 上一讲 (7.4 l.80) for “previous lectures” / “the previous lecture”.
- 浸渐 for every adiabatic compound of 7.4 incl. 非浸渐损耗, 非浸渐修正, 非浸渐耦合 (the concept span `nonadiabatic-rabi-frequency` matches the term 非浸渐耦合), 非浸渐暗态制备; 绝热定理 stays for the theorem only (7.1 title, 7.1 text, 7.2, 7.4 l.2, the concept name and term).
- 小参数 (glossary: small parameter) in the statements of `landau-zener`, `adiabatic-expansion`, `stirap-fidelity`; 谱线宽度 for “linewidth” (7.4 l.64).
- 7.3 `figures.js` l.172: the readout of $|\langle\Phi_0|\psi\rangle|^2$ says 重叠, not 内积 (ch05 precedent); the concept `three-level-dressed-states` says 与 |3⟩ 的内积为零, as 7.3 l.6.
- The `terms` of `adiabatic-atomic-beamsplitter` are ['原子分束器', '原子分束器']: the English list has two variants (“beamsplitter for atoms”, “atomic beamsplitter”) and the list keeps its length.
- Author names in the 7.4 l.12 citation are Chinese (托伊尔, 乌纳尼扬, 哈布沙伊德, 克莱因, 贝格曼; owner ruling); the journal name stays in Latin.

### Points for the owner (not applied)

- Glossary row “adiabaticity” → 浸渐性: its note says it “follows 绝热 of the unlisted adiabatic compounds”, which contradicts the target. The glossary was not edited; the note needs correcting.
- Glossary row 混杂基 (7.4 l.49) is still marked unconfirmed.
- 7.2 l.22 keeps 当…时 in the English clause order (“State transfer is possible when …”); a main-clause-first order was not forced.


## Chapter 8 (2026-10-26)

### Forced scenarios

The same rows are in `ch08/config.md`: the 8.6 `figures.js` plural collapse (`pumping cycle${…'s'}` → 次光抽运循环) and the `'1/3 of '` branch moved after the quantity (`|Ω|²/δ${…'的1/3'}`); the 8.5 `#reabsorption` run `$\hat{R}$` inside the span 热库算符$\hat{R}$的源项; the intro `notes` (“semi-/classical” split word); 8.4 `#diffusion-coefficient` (“which satisfies” → 表示，满足 with the equation after it); 8.2 `#validity-estimate` (…成立的情形为, no 如下, no colon); 8.2 sim-head (appositive juxtaposed, no 即).

### Span and math-run swaps and rewrites within a sentence (translate.md 3.3; nothing added)

| File | Line | Swap or rewrite |
|---|---|---|
| ch08/8.1/section.json | `lead` | `<二能级原子>在<运动时的哈密顿量>`: the spans `two-level-atom` and `moving-atom-hamiltonian` swap; the concept is not duplicated |
| ch08/8.1/text.html | 2 | the Rabi span and Ω in a different order |
| ch08/8.2/text.html | 3, 19, 39, 47 | spans/math runs in a different order |
| ch08/8.2/text.html | 10 | `…成立的情形为` instead of 在如下情形下成立：; 各自独立的 → 分别给出贡献 (“separate contributions”) |
| ch08/8.2/text.html | 37 | 把…重新表示，用一点代数就可以直接证实这个结果 (the by-clause first; no 办法是) |
| ch08/8.2/section.json | `lead` | 偶极阱和光学格子背后的、远失谐光的偶极力: the spans `dipole-trap`, `optical-lattice` precede `dipole-force` (pre-modifier; no 原理) |
| ch08/8.2/section.json | exercises 0–3 `changes` | 沿$\hat{p}$的偶极矩$\mathbf{p}$记为沿单位矢量$\hat{\mathbf{n}}$的$\mathbf{d}$ (no parentheses) |
| ch08/8.2/section.json | exercise 9 `prompt` | the question reordered: 在给定的光子散射率下，三种情形中动量的（纵向）$x$分量的动量扩散常量$D$是多少 (the English parentheses stay as in the source, none added) |
| ch08/8.2/section.json | exercises 5, 6 `prompt` | 计算在…之间累积的EM场总能量减少; 原子密度按$n(t)$线性上升，速率为$\dot{n}$ |
| ch08/8.3/text.html | 11, 38, 55 | spans/math runs in a different order; 11: 虚线所示的每束光的力 (pre-modifier, no （虚线）) |
| ch08/8.4/text.html | 19, 28, 61, 88, 90 | spans/math runs in a different order |
| ch08/8.4/text.html | 47 | 考虑按照哈密顿量演化的一个一般的系统和热库 (participle as a pre-modifier; no 它们) |
| ch08/8.4/section.json | derivation 1, nodes 0 and 1, `assumes` 3 | 至多正比于取为很小的$\Delta t$ (one $\Delta t$, no repeated run) |
| ch08/8.4/section.json | derivation 5, node 0, `assumes` 2 | 主值部分，能量的移位，并入…: the appositive is juxtaposed with commas (no 是, no 即) |
| ch08/8.5/text.html | 3, 15, 24, 29 | spans/math runs in a different order; 24: 既知道…，又知道… renders “both … and …” |
| ch08/8.5/text.html | 40 | `$\hat{R}$` inside the span (forced scenario above) |
| ch08/8.6/text.html | 13–100, 13 lines | spans/math runs in a different order; 92: 因此它对…必定是关键的; 98: 原子在…态之间以速率$1/\tau_p$跳跃时，瞬时偶极力的涨落也带来动量扩散 (the participial clause as a 时-clause; spans `laser-cooling-diffusion`, `dipole-force`, `quantum-jump` reordered) |
| ch08/8.3/section.json | footnote `c-eta-sign` | 书中写作…，其中$\keta$为正: the first sentence read with its source meaning (the book writes the equation with $\keta$ positive); 所以运动方程为 (no 应) |

### The book's own errors and silent normalisations in chapter 8

- 8.4 l.108: the mismatched closing quote `”white noise”` is written “白噪声”.
- 8.5 footnote-3: “Bill Phillip’s” (sic) is written 比尔·菲利普斯, the glossary row “Bill Phillips” (8.3 has “Phillips’” correctly).
- 8.6 caption, l.26, l.50: “Clebsch-Gordon” is written CG 系数 (the glossary rows for the misspelling and the correct form).
- Stray spaces removed: 8.3 l.19 “than slower atoms .”, 8.6 l.57 “over a few wavelengths ,”.
- Typos with no trace in Chinese: 8.2 l.47 “miniscule”, 8.2 exercise 4 “thorough a thin capillary”, 8.6 l.2 “deBroglie”.
- 8.6 l.2 “1990’s”: the apostrophe plural has no counterpart; written 20世纪90年代初, and the footnote `c-early-1990s` 20世纪80年代末.
- 8.4 l.70 `quantum Langevin force,”` and 8.5 footnote 1 “(… each beam.)” keep their punctuation as printed; 8.6 l.2 “$\kTD \sim 10$ nm” is kept.

### Terminology decisions in chapter 8

- 反冲能 (not 反冲平动能), 扩散常量 (not 扩散常数; incl. `chapter.json` D_diff and two concepts), 时标 (not 时间尺度), 情形 for “regime” (not 区域), 谱线宽度 for “linewidth”, 讲义 for “lectures”, 20世纪90年代 / 80年代.
- “random process”, “random fluctuations”, “random kicks”, “randomly / at random” are 无规…; 随机 only for “stochastic” (8.4 “stochastic momentum kicks”). 8.2 exercise answers keep 随机方向 / 随机时刻 (not process words).
- Collision (translate.md 4.5): “reactive” in the light-force sense is 反应(性的) in all of chapter 8 (反应力, 反应分量, 反应性的, `\text{反应}`, the concept name 反应光力与耗散光力); 无功的 stays for the reactive component of the susceptibility (chapter 4). The glossary row `reactive` → 反应性的 now exists.
- aria strings in the `figures.js` of 8.1–8.6 follow one convention: the symbol glyph as the visible label has it (ℏk, γ₁₂, γ₁₂/k, δ, η, D, 1/(2kτ_P)), and 以…为单位 (not 单位为).
- Exercise apparatus in 8.2 and 8.5: 每个小问各用一张卡片, 本小问, (a) 小问, 书中, and 记为 for “X is Y” (写作 only where the source writes “writes”).
- Derivation `source` fields read 现代原子与光学物理 II，8.x … in all of 8.1–8.6.
- Kept English: Les Houches LXXII, “Laser Cooling and Trapping”, “Atom-Photon Interactions”, PHYS REP, PRL, JOSA B, lin⊥lin, Dark SPOT (written Dark SPOT阱, no glossary row).
- Intro/8.5 “both … and …”: 既…也… / 既知道…又知道…, nothing else added.
- `Delta t`, `\hat R`, equation formulas, and every kept field are unchanged.

### Points for the owner (not applied)

- Glossary: the `recoil energy` note still argues for 反冲平动能 (the target is 反冲能); the `dissipative` note refers to 反应性的 (row now present); no rows yet for “random kicks/fluctuations”, `momentum spread` (the concept name 朗之万力下的动量展宽 and derivation 4 `what` use 展宽, which is spectral broadening; 动量弥散 suggested) or “Dark SPOT”.
- 8.6 `#compare`: 很有启发的是比较…，在小功率和大失谐的极限下： leaves the limit clause after a comma; the span `doppler-sisyphus-comparison` wraps 很有启发的是比较, so it was not moved.
- Open: the rendering of “Bill Phillip’s” (比尔·菲利普 would keep the book's error).

## Chapter 9 (2026-10-26)

### Forced scenarios

The same rows are in `ch09/config.md`: the 9.3 `figures.js` plural collapse (`photon${n === 1 ? '' : 's'} in the cavity` ×2, lines 273–274 → `腔中有 ${n - 1} 个光子`, `腔中有 ${n} 个光子`); the ordinal inside math, `$k^{th}$` (9.1 l.84), restored byte for byte as in the source and written `$k^{th}$个` with the particle outside the run (the same form as ch02 `$k^{th}$个`; owner to decide for the whole book); the intro's missing “of” kept as a gap (`电磁场量子性质`, text and `notes` agree); the 9.1 l.47 missing full stop kept missing; `坍缩恢复现象` and `引力波探测`, forced by glossary rows (see the terminology section).

### Span and math-run swaps and rewrites within a sentence (translate.md 3.3; nothing added)

| File | Line | Swap or rewrite |
|---|---|---|
| ch09/9.1/text.html | 15, 25, 40/41, 87, 91, 93 | spans/math runs in a different order inside a sentence (the INFO lines of verify_parity), none across blocks |
| ch09/9.1/text.html | 68 (sim-head) | `角度为$\kalphacoh$的辐角$\kphi$`: the apposition “the angle φ, the argument of α” is a genitive with the two math runs swapped (no 即) |
| ch09/9.1/section.json | `lead` | `在<正交分量算符>平面中看到的激光<相干态>，产生它的<平移算符>…`: “the coherent state of a laser seen in the plane of the quadrature operators” becomes a pre-modifier, the two spans swap |
| ch09/9.2/text.html | 2 | `提供了一种将说明…非平庸动力学的、本质上非谐的介质`: the relative clause “which will illustrate …” is a pre-modifier (no 它) |
| ch09/9.2/text.html | 9, 14, 25, 40, 47 | spans/math runs in a different order inside a sentence |
| ch09/9.2/text.html | 53 (sim-head) | the two `<a>` links stand in the order of the Chinese clauses (the second link before the span pair); `观察指针随着振荡<坍缩>、场分裂而散开，并在…相遇的<恢复>时重新排成一线` (no 如何) |
| ch09/9.3/text.html | 13 | `一个腔并不完美、而是与外部世界耦合的更现实的情景` (the relative clause is a pre-modifier, no colon) |
| ch09/9.3/text.html | 36, 99, 135 | spans/math runs in a different order inside a sentence |
| ch09/9.3/text.html | 38, 72 | `式 <a>(9.89)</a>`, `式 <a>(9.107)</a>`: the source links only the number, so 式 stands outside the link; the link moves across a span inside the sentence |
| ch09/9.3/text.html | 74, 103 | `式 <a>(9.107)</a>`, `图 <a>9.8</a>`: as above |
| ch09/9.3/text.html | 97 | `由把原子算符$\hat{\sigma}_{ij}$与<腔模>$\hat{a}$耦合起来的<J-C 哈密顿量>描述`: the relative clause “which couples …” is a pre-modifier of the Hamiltonian (no 它); the display follows |
| ch09/9.3/text.html | 104 | `…通过改变光在腔内循环时获得的相移而使<腔>的共振频率发生移动的原子<色散>的表现`: the relative clause “which shifts …” is a pre-modifier of 色散 (no repeated 色散) |
| ch09/9.3/text.html | 105 (and `figures/5` caption in section.json) | `一个由无穷多个各自以 g√n 耦合的独立二能级系统构成的阶梯`: “each coupled by g√n” is a pre-modifier (no repeated 每个二能级系统) |
| ch09/9.3/text.html | 126 | the span `vacuum-rabi-oscillations` covers `与单光子腔态之间的拉比振荡`, as in the source |
| ch09/9.3/text.html | 131 | `压倒原子-场耦合，$\kg < \kkappa$时` (no 即) |
| ch09/9.3/text.html | 166 | `求出在长时极限和<强耦合情形>下自由空间<模>的概率幅`: the tail “in the long-time limit and the strong-coupling regime” moves before its noun; the two spans swap |
| ch09/9.3/section.json | exercise 7 prompt | `漏腔系统的态为$$…$$` (the display ends the clause; no 给出) |
| ch09/9.4/text.html | 5 | `额外的噪声与指出任意的量子态不能被复制的<量子不可克隆定理>有关`: “which states …” is a pre-modifier (no 该定理) |
| ch09/9.4/text.html | 12, 15, 38, 82, 128, 153 | spans/math runs in a different order inside a sentence |
| ch09/9.4/text.html | 134 (sim-head) | `…依次读出每个正交分量，<图 9.10>在一个周期内描出的带`: the apposition “the band Figure 9.10 traces” stands bare (no 即) |
| ch09/9.4/text.html | 151 (sim-head) | `<span sq-in><挤压>真空态$\hat{a}_i$</span>`: the span `squeezed-state` covers 挤压 only; 真空态 stays outside, as “vacuum” does in the source |
| ch09/9.4/text.html | 165 | `<“原子散粒噪声。”>`: the full stop stays inside the quotation and the span, as in the source (and as in 9.3 l.104, l.135) |
| ch09/9.4/section.json | exercise 5 prompt | `其哈密顿量$H$为$$…, \qquad (2)$$其中…` (the display ends the clause; no 给出) |

### Spacing and punctuation

- No space between Chinese and an inline math run (as in ch04); the stray spaces of the first pass (9.2 l.58, 9.3 l.31, l.162, footnote 3) are removed. `50/50 分束器` is written with the space everywhere in ch09 (9.3 and 9.4 text, section.json, figures.js).
- The full-width parentheses inside `\text{}` in 9.3 exercise 12 are ASCII `\text{(相干态)}`, `\text{(光子数态 } n = 2\text{)}`: inside math (translate.md 3.5).
- `（` `）` full-width in the concept statements (`photon-bunching`, `beamsplitter-transformation`, `open-and-closed-cavities`) and in 9.4 exercise 14 (`（(d) 问）`).
- The `changes` strings use the wording of ch02/ch03: `改用卢金的记号重述：` (not 用…重新表述), `算符带有帽子`, `重复给出`, 记为/写作 (9.1, 9.3, 9.4 alike).

### The book's own errors and silent normalisations in chapter 9

- intro l.2 “the quantum properties the electromagnetic field” (missing “of”): kept as a gap, 电磁场量子性质; the `notes` field states it.
- 9.1 l.47 missing full stop after `$\delta x\delta p \geq 1/2$`: kept missing (run-on).
- 9.2 l.3 the stray closing quote `known as ”<span>…</span>”`: written “…” with the opening quote supplied (Chinese cannot carry two closing quotes sensibly).
- 9.2 l.31 “is very different coherent states” (missing “from”) → 与…相干态非常不同 (unavoidable).
- 9.2 l.32 “Wigner Wiesskopf theory” → 维格纳-韦斯科普夫理论 (spelling and the missing hyphen have no counterpart).
- 9.2 l.58 “posesses”, “superpostion” → 具有, 叠加态 (spelling, no trace).
- 9.3 l.162 “via a the Hamiltonian” → 通过哈密顿量 (doubled article smoothed).
- 9.3 l.166 “Wigner-Weisskopf theory find” (missing “to”) → 利用…的结果，求出.
- 9.3 exercise 7 prompt “the the un-normalized states” → 未归一化的态 (smoothed).
- 9.4 l.52 “can be described an effective Hamiltonian” (missing “by”) → 可以由…来描述.
- 9.4 l.122 “the output only partially squeezed” (missing “is”) → 输出只是部分被挤压; “Lorentizian” → 洛伦兹线型.
- 9.4 l.159 “late1980’s” → 20世纪80年代末 (the ch08 form); “gravity wave detection” → 引力波探测 (glossary row).
- 9.4 l.163 “the collective spin projection we find $S_z = N/2$” (garbled) → 则我们得到集体自旋投影$\kScoll_z = N/2$ (smoothed).
- Kept as printed: 9.1 l.58 “Eq. 9.19” (no parentheses) → 式 9.19; 9.4 l.40 式 9.145; 9.1 l.104 `$E_1^\mathrm{in}, E_1^\mathrm{in}$` (a footnote explains); 9.2 l.39 “Eq. (11.6)”; the unclosed “（见PRL … (1987)。” of 9.4 `figures/5`; 9.3 exercise 0 “i.e. Define …, we have” (即定义…，我们有).

### Terminology decisions in chapter 9

- Trace as a verb: 求阵迹 / 对…求阵迹 (glossary row `tracing over the environment`) in 9.4 l.57 and the `chapter.json` variable (replacing 对原子分迹).
- coupling coefficient $t_k$ → 耦合系数 (9.3 l.42); the glossary row `coupling coefficient (g_i)` → 耦合系数 was corrected before this pass.
- unconfined / confined → 不受约束的 / 受约束的, 约束 (glossary row `confined (atoms and ions)`): 9.2 l.3, l.8, 9.3 l.76, l.91, l.92, l.152, derivation, `cavity-qed` and `open-and-closed-cavities` statements. A glossary row `unconfined (modes)` → 不受约束的 is proposed.
- probability amplitude of a photon → 概率幅 (9.3 exercises 3–5; the `purcell-effect` statement); 振幅 stays for the field and the coherent amplitude.
- overlap in the Q-function sense (⟨β|ρ|β⟩, 9.2 l.53 and `figures.js` l.90) → 重叠; it collides with the glossary row `overlap (of two states)` → 内积, which is the inner product. A row `overlap (⟨β|ρ|β⟩, Q-function sense)` → 重叠 is proposed.
- “error detection” → 检错 (and 量子检错码); “click” → 响应; “anti-squeezed” → 反挤压的; “separate (reservoirs)” → 各自的 (`figures.js`, not 分立的); Gardiner 加德纳, Collett 科莱特. New rows are listed in the pending file `revision-ch09`.
- Concept statements aligned with the section text: 非谐, 混合, 恒等算符, 边界, 因式分解, 束缚态到自由态的问题, 发生移动, 无损耗, 约束 (`book-rows.json`, merged with `ost merge lukin-amo-ii-zh-cn 9`).
- `collapse and revival` was 坍缩恢复现象 (the glossary row was corrected to 坍缩与恢复 in the final pass and the text follows it); and `gravity wave detection` → 引力波探测 are kept because the glossary rows say so (see the forced scenarios); the 9.2 figure caption writes 坍缩与恢复 (the book's caption words).

### Points for the owner (not applied)

- Glossary: the row `collapse and revival` should read 坍缩与恢复 (the text has “phenomenon” only at 9.2 l.55); rows for `unconfined`, `overlap` (Q-function sense), `error detection`, `anti-squeezed`, `click`, `separate`, Gardiner and Collett are missing.
- The displays that end in a comma or period and now land mid-sentence: 9.4 exercise 0 prompt (“…(15)$$，对于$$…(16)$$，其中…”), 9.4 exercise 12 solution (“它在$$R|\alpha|^2 > ….$$时为负”). Not changed: a fix needs a word the source does not have.
- 9.3 l.159 “液体氦温度” follows the glossary row `liquid helium` → 液体氦 (液氦温度 is the usual form).
- The visual check of the translated pages in `npm run dev` (translate.md 8.4) and the humanizer review are outstanding.

## Chapter 10 (2026-10-26)

### Forced scenarios

The same rows are in `ch10/config.md`: the 10.2 `figures.js` plural collapse (`quant${n === 1 ? 'um' : 'a'} of vibration` → `${n}个振动量子`); the ordinals inside math, `$N^{th}$` (10.3 l.21) and `$m^{th}$` ×3, `$n^{th}$` ×3 (10.4 l.44), restored byte for byte as in the source and written `$N^{th}$个`, `$m^{th}$个`, `$n^{th}$个` with the particle outside the run (the same form as ch02 `$k^{th}$个`; owner to decide for the whole book); the 10.2 l.58 pre-modifier with the tolerated pointer 如下; the 10.4 l.22 tail 经由 before Eq. (10.38).

### Span and math-run swaps and rewrites within a sentence (translate.md 3.3; nothing added)

| File | Line | Swap or rewrite |
|---|---|---|
| ch10/intro/text.html | 2 | the relative clause “which bear a remarkable similarity to …” becomes a pre-modifier of 过程 (一些与<腔量子电动力学>…惊人相似的、相当不同的过程); “so tight that” is 紧到…的阱 (no 使得, no 它们, no 也) |
| ch10/10.1/text.html | 5 (Fig 10.1) | `以$\komegaplus$进行的…回旋圈`, `以$\komegaz$进行的沿$\kB$的往返`, `由正交的电场和磁场驱动的、以$\komegaminus$进行的…磁控圆周`: “at ω” is 以…进行 (no 频率为), the relative clause “that the crossed fields drive” is a pre-modifier (no 后者) |
| ch10/10.1/text.html | 9 | （离子的所谓“微运动”）: no 即, 所谓 attached to 离子的 |
| ch10/10.1/text.html | 11 (Fig 10.2) | `以<阱频率>$\knu$进行的、使它保持在中心附近的缓慢摆动` (the clause “that keeps it near the centre” is a pre-modifier, no 这一摆动); `曲面没有画出的沿$z$的带电端盖` (the relative clause “which the surface does not draw” is a pre-modifier, no parentheses) |
| ch10/10.1/section.json | footnote `c-rotates` | `驱动以射频反转其符号，<式 (10.1)>中的$\alpha = \cdots$，因此…，是该段其余部分所描述的振荡`: link and math juxtaposed (no 即, no 这就是) |
| ch10/10.2/text.html | 6, 7, 9 | `与将耦合…跃迁的激光束相互作用`; `与构成其环境的辐射热浴和声子热库都是隔离的`; `通向一个立即衰变并用于冷却的短寿命能级`, `通向用于编码信息的<长寿命的$|e\rangle$>`: the relative clauses are pre-modifiers (no repeated 激光束 / 它 / 该能级) |
| ch10/10.2/text.html | 58 | see the forced scenarios |
| ch10/10.2/text.html | 69 | `被调谐到与<裸原子跃迁频率>$\komega = \komegaeg$共振`: the math run moved inside the phrase (no 即) |
| ch10/10.2/text.html | 78 | `“反 J-C”哈密顿量` (the quoted name is the glossary row `anti-Jaynes Cummings` → 反 J-C; no 模型) |
| ch10/10.2/text.html | 92 (sim-head) | `一束虚线所示的、相对于裸共振的<失谐>为$\kDelta$的弱激光驱动一个…`: “the dashed line” as a 所示 pre-modifier (ch04 form), no parentheses; the span `detuning` after 相对于裸共振的 |
| ch10/10.2/section.json | `lead` | `作为置于谐振子阶梯之上的<二能级系统>的陷俘离子：…` (the source is a noun phrase; no 是) |
| ch10/10.2/section.json | exercise 0 solution | `其中$\Delta = …$：到$\eta$一阶的式 (10.14)，耦合的符号除外`; the closing 红边带对于$n = 0$没有伙伴 (no 这就是) |
| ch10/10.2/section.json | exercise 1 solution | `…$$式 (4.55) 的光抽运率$R_{opt}$，取…` (apposition after the display, no 这就是); `用这里两倍大的MIT的$\Omega$表示，前置因子写作…` (no parentheses) |
| ch10/10.2/section.json | exercise 2 solution | `因而离子几乎总是处于$|0\rangle$态` (the dropped “and”); `达到这一温度需要几倍的时间常量$$…,$$由于驱动很弱，…` so that the comma inside the display closes a clause |
| ch10/10.2/section.json | footnotes `c-eq-10-16`, `c-eq-10-24` | 因此该项为 (no 应); `对于实的$\kOmega$，书中印的项带有一个相对负号` (no 这就是, no 但) |
| ch10/10.3/text.html | 13 | `施加一个适当时间的激光脉冲` (no 持续) |
| ch10/10.3/text.html | 23 | `确定将把<$|e\rangle|N-1\rangle$>清空到<$|g\rangle|N-1\rangle$>的脉冲长度<sup>`: the relative clause is a pre-modifier of 脉冲长度, so the two ref spans stand before the footnote marker `c-step-2` (verify_parity: tag sequence differs, 136 vs 136) |
| ch10/10.3/figures.js | 165 | `把${ket('g')}与已经带有${b}的${ket('e')}交换` (the clause “which already holds” is a pre-modifier; the template parts swap) |
| ch10/10.4/text.html | 2 | `…，使我们能够写入任意量子态` (no 这) |
| ch10/10.4/text.html | 15 (Fig 10.7) | `离子在质心模式、伸缩模式或二者同时摆动` (no 作用下); `比离子的约 10 nm 的基态运动大数百倍` (the clause “which is about 10 nm” is a pre-modifier, no repeated 基态运动) |
| ch10/10.4/text.html | 22 | `…，经由` + Eq. (10.38) (forced scenario) |
| ch10/10.4/text.html | 42 | `与<激发态>简并、并与<基态>通过<正交的激光偏振>耦合的<一个辅助离子能级>`: the relative clause is a pre-modifier, so the span `lvl-aux` follows the other three spans (no 它) |
| ch10/10.4/text.html | 44 | the ordinal math runs (forced scenario) |
| ch10/10.1–10.4/text.html | the other lines | spans/math runs in a different order inside a sentence (the INFO lines of verify_parity), none across blocks |

### Spacing and punctuation

- No space between Chinese and an inline math run in ch10 (as in ch04); ch10 10.1 had spaces on 37 sides, 10.3 two, 10.4 four. Plain-text Latin symbols (`|g⟩`, `ω₋`) in `figures.js` names are left as written.
- `figures.js` strings: ASCII `,` and `.` between math runs in the 10.1 and 10.2 `topline`/readout strings are 全角 (，。；).
- Enumerators are `(1) 使用` with a space (as in ch06).

### The book's own errors and silent normalisations in chapter 10

- 10.1 l.9 “when the is near the center” (subject missing): kept, 使得当靠近阱的中心时.
- 10.1 l.9 “LaPlace’s equation” → 拉普拉斯方程 (spelling, no trace).
- 10.3 l.2 “these these techniques” → 这些技术 (the doubled word is smoothed, no trace; Chinese could carry 这些这些技术 but that would read as a typo of the translation).
- 10.2 l.90 “cooled ions in to the trap ground state” → 冷却到阱的基态 (smoothed).
- 10.2 l.78 “anti-Jaynes Cummings” (missing hyphen) → 反 J-C (no trace).
- 10.4 l.3 “focussed” (spelling) → 聚焦 (no trace).
- Kept as printed: “the position of the atom” (10.1), “the momentum kick imparted to the atom” (10.2), “the $n^{th}$ atom” (10.4) → 原子; `h.c` without its period inside math; “5-10$\mu$m”; the frequency $\komegaR$ called “recoil energy” → 反冲能.
- 10.1: “3D confinement”, “2D potential” are written 三维约束, 二维势, so `verify_parity.py` reports a “prose numbers” FAIL for 10.1 (digits 3, 3, 2 of the source); that is the standard rendering, not a defect.

### Terminology decisions in chapter 10

- 内态 (glossary `internal state`); the concept `ion-hilbert-space` is named 内态与运动态 (glossary row `Internal and motional states`).
- 小参数 for “small parameter”; “expansion parameter” and “coupling parameter” are 展开参数, 耦合参数, as 兰姆-迪克参数 (parameter is 参数 in this chapter; the glossary's 参量 rows belong to other chapters).
- 时标 for “timescale” (text and `chapter.json` variables).
- 异相 for “out of phase” (text and the `micromotion` statement); 梯级 for “rung” (text and the `motional-state-preparation` statement).
- partner: 伙伴 everywhere (text, `section.json`, `figures.js`); the glossary has no row for it (new row proposed: `partner (of a state in a ladder)` → 伙伴).
- 存储器 for “memory” of a quantum computer (10.4 l.31), glossary row `memory (of a quantum computer)`; the row `memory` 记忆 stays for the memory effect (translate.md 4.5 collision).
- 反 J-C: the quoted adjective “anti-Jaynes Cummings” is 反 J-C; the concept `anti-jaynes-cummings` keeps its `name` 反 J-C 模型 and its `terms` are ['反 J-C'].
- 约束 for “confined” (the intro had 限制), 开启和关闭 for “switched on and off”, 振动能量量子, 光波长, 逐一…寻址, 取代, 展开到最低阶 in the concept statements, aligned with the text.
- Statements and `chapter.json` brought to the text's words: 衰变率, 陷俘离子 (not 被陷俘离子).

### Points for the owner (not applied)

- Glossary: the row `Hamiltonian ... anti-Jaynes Cummings (quoted)` still reads “反 J-C 模型”哈密顿量 (contradicts the row `anti-Jaynes Cummings` → 反 J-C and the text); rows for `partner`, `expansion parameter` / `coupling parameter`, `vibrational quantum` exist or are still missing as noted above.
- 10.2 `exercises/0/prompt`: “…and transform to the frame defined by” + display ending with a comma stays 并变换到由$$…,$$定义的参考系 (the comma is inside the source's display; the only fix is a tail such as “下面的”, not applied).
- 10.1 l.11 keeps 即<微运动> (an apposition marker the ch02 notes tolerate); `figures.js` aria strings keep the symbol glyphs (η, 2π) as in ch08's open convention.

## Chapter 11 (2026-10-26)

Translated by claude-sonnet-5-5 (medium effort); an independent review (7 critical, 8 structure, 15 major, 18 minor) was applied by a second pass under the owner's rulings below.

### Forced scenarios

The same rows are in `ch11/config.md`:

- 11.4 `figures.js` `bs`: the singular/plural ternary with the `['no','one','two','three'][nb]` lookup becomes the one array lookup `['没有','有一个','有两个','有三个'][nb] + '束缚态'`.
- 11.8 `figures.js`: `atom${…'s'}` → `个原子`; `Plateau${…'s'}`, `stand${…}` and `site${…'s'}` removed with their expressions; the list join `', '` / `' and '` → `'、'` / `' 和 '`.
- The ordinals inside math, `$l^{th}$` (11.4 l.55), `$j^{th}$` (11.4 l.134), `$i^{th}$` ×2 (11.8 l.29, l.42): restored byte for byte, written `第$l^{th}$个` with the particle outside the run (the same form as ch02 `$k^{th}$个` and ch10; owner to decide for the whole book). ch09 `$k^{th}$` was not touched.
- 11.4 l.11 `#diagonal-elements`: the span wraps 矩阵元 only; 偶极、四极等算符的对角 stand before it.
- 11.3 l.154–156 (`#probing`, around Eq. (11.38)): the clause after the display is `是原子云通过使图像与参考光束干涉（或者在实际中，在光路中放置合适的相位板）印刻在激光束上的` (no 即, no repeated 相位, no 做法是).
- 11.3 footnote `c-majorana`: “Majorana flips” is kept in English in parentheses (the footnote is about the printed spelling “flops”).

### Span and math-run swaps and rewrites within a sentence (translate.md 3.3; nothing added)

| File | Line | Swap or rewrite |
|---|---|---|
| ch11/11.1/text.html | 4, 10 | spans follow the Chinese order inside the sentence |
| ch11/11.3/text.html | 64, 67, 89–90, 97, 107 | spans/links follow the Chinese order inside the sentence |
| ch11/11.3/text.html | 118 | `是以阱底<密度>为参照的<密度>的<压缩因子>`: “a compression factor for the density referenced to the density at the bottom” is a pre-modifier of 压缩因子 (no 针对, no repeated antecedent); the span `linear-trap-atom-number` stands after the two density spans |
| ch11/11.3/text.html | 122 | `是<非弹性>过程的<速率常数>`: the two spans swap (no 对应于) |
| ch11/11.4/text.html | 3 | `几乎不比由<范德瓦耳斯相互作用>的尾部决定的原子大小$\krzero \sim 1\mathrm{nm}$大`: the participle “set by the tail of …” is a pre-modifier of 原子大小 (no 后者); the span stands before the math run |
| ch11/11.4/text.html | 22 | 写成如下形式 stays (the pointer 如下 before the display, tolerated as in ch01/ch02/ch04/ch07/ch10); 11.4 l.182 and 11.5 l.39, l.41 likewise |
| ch11/11.4/text.html | 36 (Eq. (11.48)) | `\frac{\text{单位时间内散射进立体角 d}\Omega}{\text{入射束的强度}}`: one `\text` run in the numerator as in the source (words reordered inside it), no `\text` run added |
| ch11/11.4/text.html | 66 | `可以通过论证当$r \sim \krzero$时两项的量级应当相当来定性地估计，于是` (the English order “estimated qualitatively by arguing that …”; no colon, no bare 论证) |
| ch11/11.4/text.html | 92 | `硬球由势刻画` (no 如下 before the display) |
| ch11/11.4/text.html | 186 (`#fesh-tune`) | `对于超冷原子气体中所预期的低能碰撞，` (no parentheses) |
| ch11/11.4/text.html | 257 | `物质波<相干态>与电磁<相干态>的类似之处在于，它具有…` (“in the sense that”, no 因为) |
| ch11/11.4/section.json | exercise 4 solution | `$$…$$，这里偶极沿一条与$\mathbf{r}$成角$\theta$的固定轴（…）` (no 对应于, no 该轴) |
| ch11/11.5/text.html | 7 | `…的类比，其中电场算符 … 可以很好地近似为…` (no colon, no repeated 经典相干光束) |
| ch11/11.5/figures.js | 109 (readout) | `\text{为虚数, 当}\ \kq < …` : the `\text` words moved (“is imaginary for” → 为虚数, 当) so that no `\text` run is added; the ASCII comma stays inside the `\text` |
| ch11/11.6/text.html | 9 | `耦合输出到一个经受磁场梯度的未陷俘态<sup>而产生的`: the relative clause is a pre-modifier (no repeated 未陷俘态); the footnote marker follows the clause |
| ch11/11.7/text.html | 12 (Fig 11.13) | `结合成比它们低$\kt$的离域态$|+\rangle$和比它们高$\kt$的$|-\rangle$` (no parentheses) |
| ch11/11.7/text.html | 37 | `基于与红失谐光源产生的<交流斯塔克偏移>相联系、吸引可极化粒子到强度极大处的<光学偶极力>`: the relative clause is a pre-modifier, the spans `ac-stark-shift` and `dipole-force` swap (no 该力) |
| ch11/11.7/text.html | 39 | `与上面讨论的<双阱势>类似之处在于，它可以…` (“in that”, no 因为) |
| ch11/11.7/section.json | exercise 1, 2 prompts | `其$P = …$的 (a) 问中，相位因子的横向（纵向）分量可以写成：`; exercise 1 solution `对于一次符合事件中分别来自$A$和$B$的两个原子` (no parentheses) |
| ch11/11.8/text.html | 100 | the span `mott-interference-signature` keeps its source extent (`通过观察…是否存在干涉，观测到了超流体到莫特绝缘体的转变`) |
| ch11/11.8/section.json | derivation 3 step 0 `cap` | `在每个 $\epsilon_i$ 都相同时，第一项是…` (no 所以); `notes` `书中的图像再现已发表的数据，此处不予显示。` (no 因此) |
| ch11/11.7/figures.js | last readout | `…，对比式 (11.169) 的 $\sqrt{N}/2$ = …` (“against”) |

### Spacing and punctuation

- No space between Chinese and an inline math run in the text and `section.json` of ch11 (as in ch04 and ch10); 11.1, 11.2, 11.5, 11.6, 11.8 and the intro had spaces on 451 sides. Plain-text Latin symbols in `figures.js` strings are left as written.
- No full-width punctuation inside math or `\text{}`: `\text{玻色子:}`, `\text{费米子:}` (11.4), `\text{q 小,}` (11.5), `\text{当 r 更大时.}` (11.4 derivation), `\text{: }`, `\text{, 莫特态 }`, `\text{, 能量最小}` (11.8 `figures.js`). A display or a TeX readout has no place outside the math for them.
- English words inside `\text{}` and in `figures.js` labels are translated: `\text{(玻色子)}`, `\text{(费米子).}` (11.8), `\sum_{\text{子能级}}` (11.4), the axis label `能量 / h  (MHz)` (11.3), `射频关闭`, `Kr-石墨` (Table 11.1).

### The book's own errors and silent normalisations in chapter 11

- 11.3 l.2 “outside word” → 外界 (spelling, no trace).
- 11.2 l.8 “quantatively” → 定量 (spelling).
- 11.4 l.21 “is the is the interatomic distance” → 是原子间距 (doubled word smoothed).
- 11.4 l.74 “can written” → 可以写成 (missing verb smoothed).
- 11.4 l.146 “corresponds energy cost” → 对应于…的能量代价 (missing preposition smoothed).
- 11.4 l.9 “between the atom” → 原子之间 (number smoothed).
- 11.4 l.11 “The first term corresponds to …, is nonzero only if” → 第一项对应库仑势，仅当原子带电时才不为零 (comma splice smoothed).
- 11.8 l.53 “an Bose condensate” → 玻色凝聚体 (article).
- 11.4 l.253 “Pitaeveski”, “Gross-Pitaevski” and “Pitaevskii” → 皮塔耶夫斯基 (all variants of one name); “Schroedinger”/“Schrodinger” → 薛定谔; “deBroglie”/“DeBroglie” → 德布罗意.
- 11.4 l.180 “inhomogenous”, 11.5 l.25 “homogenous”, “focussed”/“focussing” (spelling, no trace).
- Mismatched quotes normalised to “…”: 11.3 l.40 ”effective vapor pressure”, 11.3 l.88 ”boil off”, 11.8 l.96 ”wedding-cake”.
- Kept as printed: 11.3 l.96 “into an untrapped,” (the missing noun, 激发到一个未陷俘的，); 11.6 caption “(2000)” and “c.f.”; 11.4 l.264 “ratio of the trap frequency to the mean-field energy”; 11.4 l.3 “$\kndens \sim 1nm$”; 11.7 l.28 “$N-$粒子”; the Table 11.3 MV/cm entry.
- “Majorana flops” (11.3 l.80, concept terms) is rendered 马约拉纳反转 as the glossary rows say; the English stays only in the footnote (forced scenario).

### Terminology decisions in chapter 11 (applied from the glossary, which was not edited)

- regime → 情形 (稳定情形, 在这一情形下, 大波数和小波数情形, 两种情形); “region” stays 区域.
- c-number → 经典数 (11.4, 11.5, 11.8, concept `matter-wave-symmetry-breaking`).
- external potential → 外部势 (11.4, 11.8, `chapter.json`); “trapping potential” → 陷俘势, “harmonic/periodic trapping potential” → 谐振/周期陷俘势.
- recoil energy of the lattice → 格子的反冲能 (text, `chapter.json`, concept name).
- coupling constant → 耦合常量 (11.4 l.184, as the glossary row now reads); rate constant → 速率常数 (11.3, `chapter.json`, concept `two-body-loss`) follows its glossary row.
- number operator for the matter field → 粒子数算符 (11.4 l.223); number uncertainty → 原子数不确定度 (11.6, 11.7 text, footnote and exercise), the atom number of a condensate.
- trapped / untrapped state → 陷俘态 / 未陷俘态 everywhere; trap(ped) → 陷俘, confine → 约束 (囚禁 and 束缚 for “confine” are gone from text, `section.json`, `chapter.json` and the concepts).
- 讲义 (intro), 20世纪80年代 (11.3 l.93), 小参数 and 力程 (concept `dilute-quantum-gas`, `chapter.json` `r_0`), 离域 (`Delta_eps`), 斜变 (`tau`), 损失 for “loss” (11.3 l.105, 11.7 l.31), 等 not 等人 (11.8), 产生算符与湮没算符, 一级玻恩近似 (11.4 l.49; no glossary row, proposed), 谐振子阱 for “harmonic oscillator trap” (11.4 l.266), 再现 for “reproduces” (11.6 and 11.8 `notes`, `withheld`), 呈二项分布 for “spreads binomially”, 分布 for “spread with density”.
- “252 times greater” → 是…的 252 倍 (11.1 l.17 and the concept `indistinguishability-statistics`).

### Points for the owner (not applied)

- 11.8 footnote 2 keeps “Capogrosso-Sansone, Prokof'ev and Svistunov” in Latin; the renderings (卡波格罗索-桑索内, 普罗科菲耶夫, 斯维斯图诺夫) are not looked up. The person-name renderings of ch11 (西尔韦拉, 瓦尔拉芬, 普里查德, 克莱普纳, 赫斯, 格雷塔克, 安德鲁斯, 布洛赫, 格赖纳, 拜姆, 伦敦, 托马斯-赖歇-库恩, 约费) and the termonline-unlisted rows (原子凝射器束, 时间轨道势, 公度, 恢复长度) are unchecked.
- Glossary: `number uncertainty` → 粒子数不确定度 and `atom number uncertainty` → 原子数不确定度 both exist; ch11 uses 原子数不确定度 for the atom number. A row for 一级玻恩近似 is proposed.
- The pointer 如下 before a display (11.4 l.22, l.182; 11.5 l.39, l.41) and 11.5 l.13 `并且场算符将被正确归一化，如果` (the sentence ends with “if” + the display) stay.
- 11.3 footnote 4 keeps 大一百万倍 (no 比 comparator, so no 253× reading).
- The 11.3 `c-majorana`, 耦合常量/速率常数 and 光子数算符 glossary rows are listed above.

## Terminology and ordinal decisions of 2026-10-28 (owner delegated the calls)

The owner asked the translator to make the open terminology calls and to write ordinals as 第 k 个. Applied to the whole book (text.html, section.json, figures.js, chapter.json, book.json, glossary):

| Choice | Decision | Why |
|---|---|---|
| adiabatic | 绝热 everywhere (the 浸渐 family is gone: 浸渐近似, 浸渐跟随, 浸渐通道, 非浸渐 … became 绝热近似, 绝热跟随, 绝热通道, 非绝热 …) | The form Chinese AMO and quantum-optics texts use; 术语在线 lists both families (绝热定理, 绝热膨胀; 浸渐近似, 浸渐条件). |
| squeezed | 压缩 (压缩态, 压缩光, 压缩真空态, 自旋压缩, 压缩参数) | Quantum-optics standard (光学名词, 电子学名词); 物理学名词 lists 挤压态. The classical 'compression factor' 压缩因子 keeps its own English word, so the two are told apart by context. |
| laser cooling | 激光冷却 (致冷 is no longer used) | Matches 多普勒冷却, 蒸发冷却, 亚多普勒冷却; 物理学名词 lists 激光致冷. |
| atom laser | 原子激光器 | 光学名词 and common usage; 物理学名词 lists 原子凝射器. |
| lattice site | 格点 (unchanged) | The usage of the optical-lattice literature; 物理学名词 lists 格座. |
| reactive | split kept: 无功的 for the reactive component of a susceptibility (chapter 4), 反应(性的) with 反应力 for the force (chapter 8) | A collision, not an error: 反应性 alone reads as chemical reactivity, 无功力 is not used. |
| ordinals inside math | 第 k 个 with the math run written `$k$` (the `^{th}` of the English is not carried: 14 places in 2.1, 9.1, 10.3, 10.4, 11.4, 11.8) | The Chinese ordinal is 第…个; the `^{th}` suffix has no Chinese form. These 14 math runs therefore differ from the source by design; the older notes of chapters 2, 9, 10 and 11 that say `$k^{th}$个` is kept are superseded. |
