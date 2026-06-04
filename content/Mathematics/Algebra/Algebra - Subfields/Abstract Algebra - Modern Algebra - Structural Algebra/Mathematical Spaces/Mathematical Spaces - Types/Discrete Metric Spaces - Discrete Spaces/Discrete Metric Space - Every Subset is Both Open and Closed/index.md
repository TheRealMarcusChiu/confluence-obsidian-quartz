---
title: "Discrete Metric Space - Every Subset is Both Open and Closed"
created: 2023-06-18T19:15:29.893-05:00
modified: 2023-06-19T13:11:53.779-05:00
parent: "[[Discrete Metric Spaces - Discrete Spaces]]"
children: []
---
Let ∅ ≠ 𝑈⊂𝑋 and 𝑥∈𝑈. What we need is to find a radius 𝜀\>0 such that [[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|epsilon-ball 𝐵(𝑥,𝜀)]] ⊂ 𝑈.

If 0\<𝜀\<1, then 𝐵(𝑥,𝜀) = {𝑥}, hence every singleton is [[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|open]].

Recall that open sets in a [[Topology|topology]] are:
- arbitrary unions of open sets
- finite intersection
- the whole space and the empty set

Since every singleton is open then any unions of open sets are also open. Which means every subset of 𝑋 is open.

And every subset 𝑆 of 𝑋 is also closed because the complement 𝑋\\𝑆 is open.
