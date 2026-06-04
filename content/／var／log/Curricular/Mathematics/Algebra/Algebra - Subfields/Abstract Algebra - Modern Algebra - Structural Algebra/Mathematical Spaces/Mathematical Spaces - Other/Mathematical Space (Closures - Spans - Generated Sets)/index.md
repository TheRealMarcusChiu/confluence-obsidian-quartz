---
title: "Mathematical Space (Closures - Spans - Generated Sets)"
created: 2023-06-24T01:20:44.862-05:00
modified: 2023-07-06T15:05:46.778-05:00
parent: "[[Mathematical Spaces - Other]]"
children: []
---
###### Closures - Spans - Generated Sets (𝐶𝑙(·), 𝑐𝑙(·), ·̅, ·‾)
````excerpt
- the <em>closure</em> of a subset 𝑆, denoted as 𝐶𝑙(𝑆), under some operations is the smallest superset that is [[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|closed]] under these operations
- the <em>closure</em> of a subset is the result of a [closure operator](https://en.wikipedia.org/wiki/Closure_operator) applied to the subset
- it is often called the <em>span</em> (e.g. [linear span](https://en.wikipedia.org/wiki/Linear_span)) or the <em>generated set</em>
````
^excerpt

# Closure - Definitions
- [[Topological Spaces (Open Sets - Closed Sets - Clopen Sets - Closures)]]
- [[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|Metric Spaces (Epsilon Balls - Open Sets - Boundary Points/Sets - Closed Sets - Closures - Bounded Sets / Boundedness - Unbounded Sets / Unboundedness - Totally Bounded Sets / Totally Boundedness)]]

can be defined using any of the following equivalent definitions:
- 𝐶𝑙(𝑆) is the set of all [points of closure](https://en.wikipedia.org/wiki/Adherent_point) of 𝑆
- 𝐶𝑙(𝑆) is the set 𝑆 together with all of its [[Mathematical Space (Limit Points - Accumulation Points - Cluster Points)|limit points]]:
	- each point of 𝑆 is a point of closure of 𝑆
	- each limit point of 𝑆 is a point of closure of 𝑆
- 𝐶𝑙(𝑆) is the intersection of all [[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|closed sets]] containing 𝑆
- 𝐶𝑙(𝑆) is the smallest closed set containing 𝑆
- 𝐶𝑙(𝑆) is the union of 𝑆 and its [[Mathematical Space (Boundary Sets - Boundary Points - Boundaryless)|boundary 𝑏𝑑(𝑆)]]
- 𝐶𝑙(𝑆) is the set of all 𝑥∊𝑋 for which there exists a net (valued) in 𝑆 that converges to 𝑥 in (𝑋,𝜏)

# Closure - Properties
- 𝐶𝑙(𝑆) is a closed superset of 𝑆
- the set 𝑆 is closed if and only if 𝑆 = 𝐶𝑙(𝑆)
- if 𝑆⊆𝑇 then 𝐶𝑙(𝑆)⊆𝐶𝑙(𝑇)
- if 𝐴 is a closed set, then 𝐴 contains 𝑆 if and only if 𝐴 contains 𝐶𝑙(𝑆)

# Closure - Examples

In [[Topological Spaces|topological space (𝑋,𝜏)]]
- ⦰ = 𝐶𝑙(⦰)
- 𝑋 = 𝐶𝑙([[Topological Spaces|𝑋]])

Given ℝ and ℂ the [[Standard／Euclidean／Usual／Natural Topology|standard topology (𝜏)]]:
- If 𝑋=ℝ, then 𝐶𝑙<sub>𝑋</sub>((0,1)) = \[0,1\]
- If 𝑋=ℝ, then 𝐶𝑙<sub>𝑋</sub>(ℚ) = ℝ
	- the closure of the set ℚ of rational numbers is the whole space ℝ
	- we say that ℚ is [dense](https://en.wikipedia.org/wiki/Dense_(topology)) in ℝ
- If 𝑋 is the complex plane ℂ = ℝ<sup>2</sup>, then 𝐶𝑙<sub>𝑋</sub>({𝑧∊ℂ : |𝑧| \> 1}) = {𝑧∊ℂ : |𝑧| ≥ 1}
- If 𝑆 is a finite subset of a Euclidean space 𝑋, then 𝐶𝑙<sub>𝑋</sub>(𝑆) = 𝑆

Closures depend on the underlying [[Topology|topology (𝜏)]]
- If 𝑋=ℝ is endowed with the [[Standard／Euclidean／Usual／Natural Topology|standard topology]], then 𝐶𝑙<sub>𝑋</sub>((0,1)) = \[0,1\]
- If 𝑋=ℝ is endowed with the [[Lower Limit Topology|lower limit topology]], then 𝐶𝑙<sub>𝑋</sub>((0,1)) = \[0,1)
- If 𝑋=ℝ is endowed with the [[Discrete Topology|discrete topology]], then 𝐶𝑙<sub>𝑋</sub>((0,1)) = (0,1)
	- in fact any subset 𝑆, 𝐶𝑙<sub>𝑋</sub>(𝑆) = 𝑆
- If 𝑋=ℝ is endowed with the [[Indiscrete Topology - Trivial Topology|indiscrete topology]], then 𝐶𝑙<sub>𝑋</sub>((0,1)) = ℝ = 𝑋
	- in fact any subset 𝑆, 𝐶𝑙<sub>𝑋</sub>(𝑆) = ℝ = 𝑋
