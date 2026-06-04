---
title: "Functors"
created: 2024-01-12T13:47:37.760-06:00
modified: 2024-01-12T13:56:22.866-06:00
parent: "[[Category Theory]]"
children: []
---
###### Functors
````excerpt
- in [[Category Theory|category theory]], a <strong>functor</strong> is a mapping between [[Category／Categories|categories]]
````
^excerpt

# Functors - Definition

Let 𝐶 and 𝐷 be [[Category／Categories|categories]]. A <strong>functor</strong> 𝐹 from 𝐶 to 𝐷 is a mapping that:
- associates each [object](https://en.wikipedia.org/wiki/Mathematical_object) 𝑋 in 𝐶 to an object 𝐹(𝑋) in 𝐷
- associates each [morphism](https://en.wikipedia.org/wiki/Morphism) 𝑓 : 𝑋 → 𝑌 in 𝐶 to a morphism 𝐹(𝑓) : 𝐹(𝑋) → 𝐹(𝑌) in 𝐷 such that functor 𝐹 preserves the following conditions:
	- <strong>[identity morphisms](https://en.wikipedia.org/wiki/Morphism#Definition)</strong> - 𝐹(𝑖𝑑<sub>𝑋</sub>) = 𝑖𝑑<sub>𝐹(𝑋)</sub> for every object 𝑋 in 𝐶
	- <strong>[[Composition of Morphisms|composition of morphisms]]</strong> - 𝐹(𝑔∘𝑓) = 𝐹(𝑔)∘𝐹(𝑓) for all morphisms 𝑓 : 𝑋 → 𝑌 and 𝑔 : 𝑌 → 𝑍 in 𝐶
