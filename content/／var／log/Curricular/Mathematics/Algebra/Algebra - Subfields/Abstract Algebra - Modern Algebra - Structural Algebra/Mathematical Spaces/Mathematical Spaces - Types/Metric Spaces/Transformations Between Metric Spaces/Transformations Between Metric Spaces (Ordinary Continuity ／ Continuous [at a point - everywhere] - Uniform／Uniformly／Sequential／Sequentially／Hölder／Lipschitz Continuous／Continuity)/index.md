---
title: "Transformations Between Metric Spaces (Ordinary Continuity ／ Continuous [at a point - everywhere] - Uniform／Uniformly／Sequential／Sequentially／Hölder／Lipschitz Continuous／Continuity)"
created: 2023-06-22T20:39:20.272-05:00
modified: 2023-07-07T19:50:02.130-05:00
parent: "[[Transformations Between Metric Spaces]]"
children: []
---
Given a function 𝑓: 𝑋 → 𝑌 with [[Metric Spaces|metric spaces]] (𝑋,𝑑<sub>𝑋</sub>) and (𝑌,𝑑<sub>𝑌</sub>)
# Ordinary Continuity - Continuous (at a point)
𝑓 is <em>continuous at point</em> <font style="color: rgb(255,0,0);">𝑥̃∊𝑋</font> if:
- <font style="color: rgb(0,128,0);">∀𝜀\>0 ∃𝛿\>0</font> <font style="color: rgb(0,204,255);">∀𝑥∊𝑋</font> : 𝑑<sub>𝑋</sub>(<font style="color: rgb(255,0,0);">𝑥̃</font>,<font style="color: rgb(0,204,255);">𝑥</font>) \< 𝛿 → 𝑑<sub>𝑌</sub>(𝑓(<font style="color: rgb(255,0,0);">𝑥̃</font>),𝑓(<font style="color: rgb(0,204,255);">𝑥</font>)) \< 𝜀

# Ordinary Continuity - Continuous (everywhere) <sup>([[Continuous／Continuity [at a point - everywhere] (Transformations／Operations／Operations／Mappings／Maps／Functions／Morphisms)|general definition]]</sup><sup>)</sup>

𝑓 is <em>continuous</em> if:
- <font style="color: rgb(255,0,0);">∀𝑥̃∊𝑋</font> <font style="color: rgb(51,153,102);">∀𝜀\>0 ∃𝛿\>0</font> <font style="color: rgb(0,204,255);">∀𝑥∊𝑋</font> : 𝑑<sub>𝑋</sub>(<font style="color: rgb(255,0,0);">𝑥̃</font>,<font style="color: rgb(0,204,255);">𝑥</font>) \< 𝛿 → 𝑑<sub>𝑌</sub>(𝑓(<font style="color: rgb(255,0,0);">𝑥̃</font>),𝑓(<font style="color: rgb(0,204,255);">𝑥</font>)) \< 𝜀

# Uniform Continuity - Uniformly Continuous

𝑓 is <em>uniformly continuous</em> if:
- <font style="color: rgb(51,153,102);">∀𝜀\>0 ∃𝛿\>0</font> <font style="color: rgb(255,0,0);">∀𝑥̃∊𝑋</font> <font style="color: rgb(0,204,255);">∀𝑥∊𝑋</font> : 𝑑<sub>𝑋</sub>(<font style="color: rgb(255,0,0);">𝑥̃</font>,<font style="color: rgb(0,204,255);">𝑏</font>) \< 𝛿 → 𝑑<sub>𝑌</sub>(𝑓(<font style="color: rgb(255,0,0);">𝑥̃</font>),𝑓(<font style="color: rgb(0,204,255);">𝑥</font>)) \< 𝜀

# Hölder Continuous/Continuity

𝑓 is <em>Hölder continuous</em> with exponent 𝛼∊ℝ if:
- ∃𝐾∊ℝ<font style="color: rgb(255,0,0);"> ∀𝑥̃∊𝑋</font> <font style="color: rgb(0,204,255);">∀𝑥∊𝑋</font> : 𝑑<sub>𝑌</sub>(𝑓(<font style="color: rgb(255,0,0);">𝑥̃</font>),𝑓(<font style="color: rgb(0,204,255);">𝑥</font>)) ≤ 𝐾 · (𝑑<sub>𝑋</sub>(<font style="color: rgb(255,0,0);">𝑥̃</font>,<font style="color: rgb(0,204,255);">𝑥</font>))<sup>𝛼</sup>

Any <em>Hölder continuous</em> function is <em>uniformly continuous</em>
# Lipschitz Continuous/Continuity

𝑓 is <em>Lipschitz</em><em> continuous</em> (i.e. <em>Hölder continuous</em> with exponent 𝛼=1) if:
- ∃𝐾∊ℝ<font style="color: rgb(255,0,0);"> ∀𝑥̃∊𝑋</font> <font style="color: rgb(0,204,255);">∀𝑥∊𝑋</font> : 𝑑<sub>𝑌</sub>(𝑓(<font style="color: rgb(255,0,0);">𝑥̃</font>),𝑓(<font style="color: rgb(0,204,255);">𝑥</font>)) ≤ 𝐾 · 𝑑<sub>𝑋</sub>(<font style="color: rgb(255,0,0);">𝑥̃</font>,<font style="color: rgb(0,204,255);">𝑥</font>)

# Sequential Continuity - Sequentially Continuous

𝑓 is <em>sequentially continuous</em> if, for any [[Metric Spaces (Sequences - Convergent／Convergence／Converges - Bounded - Cauchy Sequences)|convergent sequence]] in 𝑋 and any limit of the sequence, the sequence in 𝑌 converges to the point of the limit:
- <font style="color: rgb(255,0,0);">∀𝑥̃∊𝑋</font> <font style="color: rgb(51,204,204);">∀(𝑥<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub>⊆𝑋</font> : 𝑙𝑖𝑚<sub>𝑛→∞</sub><font style="color: rgb(51,204,204);">𝑥<sub>𝑛</sub></font> = <font style="color: rgb(255,0,0);">𝑥̃</font> → 𝑙𝑖𝑚<sub>𝑛→∞</sub>𝑓(<font style="color: rgb(51,204,204);">𝑥<sub>𝑛</sub></font>) = 𝑓(<font style="color: rgb(255,0,0);">𝑥̃</font>)
