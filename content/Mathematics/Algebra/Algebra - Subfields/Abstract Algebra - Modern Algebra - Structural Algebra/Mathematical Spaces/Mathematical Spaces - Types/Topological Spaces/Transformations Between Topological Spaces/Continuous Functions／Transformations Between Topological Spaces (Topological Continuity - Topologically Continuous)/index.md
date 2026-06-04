---
title: "Continuous Functions／Transformations Between Topological Spaces (Topological Continuity - Topologically Continuous)"
created: 2023-06-19T13:29:55.333-05:00
modified: 2024-01-12T00:37:45.540-06:00
parent: "[[Transformations Between Topological Spaces]]"
children: []
---
###### Continuous Transformations Between Topological Spaces <sup>([[Continuous／Continuity [at a point - everywhere] (Transformations／Operations／Operations／Mappings／Maps／Functions／Morphisms)|general definition]]</sup><sup>)</sup>
````excerpt
- is a type of [[Continuous／Continuity [at a point - everywhere] (Transformations／Operations／Operations／Mappings／Maps／Functions／Morphisms)|continuous transformation]]
- a function 𝑓: 𝑋 → 𝑌 between two [[Topological Spaces|topological spaces]] (𝑋,𝜏<sub>𝑋</sub>,𝑁<sub>𝜏𝑋</sub>) and (𝑌,𝜏<sub>𝑌</sub>,𝑁<sub>𝜏𝑌</sub>) is <em>continuous</em> <strong><font style="color: rgb(122,134,154);">at point 𝑥</font></strong> if for any [[Topological Spaces (Neighborhoods of a Point／Set)|neighborhood 𝑁𝜏𝑌(𝑓(𝑥))]] there is a [[Topological Spaces (Neighborhoods of a Point／Set)|neighborhood 𝑁𝜏𝑋(𝑥)]] in its [[Functions (Domain - Codomain - Preimage - Image - Range)|domain]] such that 𝑓(𝑥) ∊ 𝑁<sub>𝜏𝑌</sub>(𝑓(𝑥)) whenever 𝑥 ∊ 𝑁<sub>𝜏𝑋</sub>(𝑥):
	- 𝑥∊𝑁<sub>𝜏𝑋</sub>(𝑥) → 𝑓(𝑥)∊𝑁<sub>𝜏𝑌</sub>(𝑓(𝑥))
- a function 𝑓: 𝑋 → 𝑌 between two [[Topological Spaces|topological spaces]] (𝑋,𝜏<sub>𝑋</sub>,𝑁<sub>𝜏𝑋</sub>) and (𝑌,𝜏<sub>𝑌</sub>,𝑁<sub>𝜏𝑌</sub>) is <em>continuous</em> <font style="color: rgb(122,134,154);"><strong>everywhere</strong></font> if for any [[Topological Spaces (Neighborhoods of a Point／Set)|neighborhood 𝑁𝜏𝑌(𝑓(𝑥))]] there is a [[Topological Spaces (Neighborhoods of a Point／Set)|neighborhood 𝑁𝜏𝑋(𝑥)]] in its [[Functions (Domain - Codomain - Preimage - Image - Range)|domain]] such that 𝑓(𝑥) ∊ 𝑁<sub>𝜏𝑌</sub>(𝑓(𝑥)) whenever 𝑥 ∊ 𝑁<sub>𝜏𝑋</sub>(𝑥) <font style="color: rgb(122,134,154);"><strong>for all points 𝑥∊𝑋</strong></font>:
	- ∀𝑥∊𝑋 : 𝑥∊𝑁<sub>𝜏𝑋</sub>(𝑥) → 𝑓(𝑥)∊𝑁<sub>𝜏𝑌</sub>(𝑓(𝑥))

- a function 𝑓: 𝑋 → 𝑌 between two [[Topological Spaces|topological spaces]] 𝑋 and 𝑌 is <em>continuous</em> if for every [[Topological Spaces (Open Sets - Closed Sets - Clopen Sets - Closures)|open set]] 𝑆⊆𝑌, the [inverse image](https://en.wikipedia.org/wiki/Image_(mathematics)#Inverse_image) 𝑓<sup>-1</sup>(𝑉) = {𝑥∊𝑋 | 𝑓(𝑥)∊𝑉} is an open subset of 𝑋
- this is equivalent to the condition that preimages of the [[Topological Spaces (Open Sets - Closed Sets - Clopen Sets - Closures)|closed sets]] (the complements of the open subsets) in 𝑌 are closed in 𝑋
````
^excerpt

# Continuous Functions Between Topological Spaces - Examples

> [!expand-ui]- Discrete Space to Any Topological Space are Continuous
> Given a [[Discrete Topological Spaces|discrete topological space (𝑋,𝜏𝑋)]] (in which every subset 𝑆∊𝜏<sub>𝑋</sub> is [[Topological Spaces (Open Sets - Closed Sets - Clopen Sets - Closures)|clopen]]), all functions 𝑓: 𝑋 → 𝑌 to any [[Topological Spaces|topological space (𝑌,]][[Discrete Topological Spaces|𝜏]][[Topological Spaces|𝑌)]] is <em>continuous</em>, because ALL subsets of a discrete topological space are clopen.

> [!expand-ui]- Any function whose co-domain is Indiscrete is Continuous
> TODO prove
