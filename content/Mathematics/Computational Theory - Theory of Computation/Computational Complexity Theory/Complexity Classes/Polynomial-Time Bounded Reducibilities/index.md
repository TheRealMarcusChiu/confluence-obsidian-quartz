---
title: "Polynomial-Time Bounded Reducibilities"
created: 2021-09-13T05:24:53.201-05:00
modified: 2021-10-27T23:31:39.059-05:00
parent: "[[Complexity Classes]]"
children: []
---
a function 𝑓:{0,1} ⃰ → {0,1} ⃰ is polynomial-time computable if there is a <strong>polynomial time-bounded</strong> [[Deterministic Turing Machine (DTM)|deterministic Turing machine (DTM)]] 𝑀 that on input 𝑤 outputs 𝑓(𝑤)
# Formal Definition

Let 𝐿1 and 𝐿2 ⊆ {0,1} ⃰ be languages

𝐿1 is <strong>polynomial-time reducible</strong> to 𝐿2 (written as 𝐿1 ≤<sub>𝑝</sub> 𝐿2) if there exists a polynomial-time computable function 𝑓:{0,1} ⃰ → {0,1} ⃰ s.t. 𝑤∈𝐿1 <sup><sub>⟺</sub></sup> 𝑓(𝑤)∈𝐿2
- if 𝐿1 ≤<sub>𝑝</sub> 𝐿2 and 𝐿2 ∈ P, then 𝐿1 ∈ P
- if 𝐿1 ≤<sub>𝑝</sub> 𝐿2 and 𝐿2 ∈ NP, then 𝐿1 ∈ NP
- ≤<sub>𝑝</sub> satisfies [[Binary Relation Over 1 Set (Ordered Binary Relation - Endorelation - Homogeneous Relation)|reflexive and transitive relations]]
