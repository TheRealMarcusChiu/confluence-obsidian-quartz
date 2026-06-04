---
title: "Causal Networks／Models／Graphs／Diagrams"
created: 2021-09-13T05:26:44.851-05:00
modified: 2021-09-13T05:26:44.851-05:00
parent: "[[BN - Variants]]"
children: []
---
A <strong>Causal Network</strong> is a [[Bayesian Networks (BN)|Bayesian Network]] with the requirement that the relationships be causal

Although Bayesian Networks are often used to represent [[Causality (Necessary - Sufficient - Contributory)|causal]] relationships, this need not be the case: a directed edge from node 𝑢 to node 𝑣 does not require that the random variables 𝑋<em><sub>𝑣</sub></em> be causally dependent on 𝑋<em><sub>𝑢</sub></em>. This is demonstrated by the fact that Bayesian networks on the graphs:
- 𝑎 → 𝑏 → 𝑐 AND 𝑎 ← 𝑏 ← 𝑐

are equivalent: that is they impose exactly the same [[Probability Independence (Marginal Independence - Conditional Independence)|conditional independence]] requirements
