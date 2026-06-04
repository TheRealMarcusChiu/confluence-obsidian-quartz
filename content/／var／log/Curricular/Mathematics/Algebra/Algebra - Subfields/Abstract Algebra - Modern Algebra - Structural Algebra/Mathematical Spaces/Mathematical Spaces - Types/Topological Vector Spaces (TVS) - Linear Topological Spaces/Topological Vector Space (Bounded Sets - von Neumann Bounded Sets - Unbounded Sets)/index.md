---
title: "Topological Vector Space (Bounded Sets - von Neumann Bounded Sets - Unbounded Sets)"
created: 2023-06-23T16:02:36.036-05:00
modified: 2023-06-24T11:05:50.604-05:00
parent: "[[Topological Vector Spaces (TVS) - Linear Topological Spaces]]"
children: []
---
# Bounded Sets - von Neumann Bounded Sets <sup>[[Mathematical Space (Bounded Sets - Unbounded Sets)|(general definition)]]</sup>
A set in a [[Topological Vector Spaces (TVS) - Linear Topological Spaces|topological vector space (𝑉,𝐹,𝜏)]] is called bounded or von Neumann bounded if every [[Topological Spaces (Neighborhoods of a Point／Set)|neighborhood]] of the [zero vector](https://en.wikipedia.org/wiki/Bounded_set_(topological_vector_space)#:~:text=a%20set%20in%20a%20topological%20vector%20space%20is%20called%20bounded%20or%20von%20Neumann%20bounded%2C%20if%20every%20neighborhood%20of%20the%20zero%20vector%20can%20be%20inflated%20to%20include%20the%20set) can be <em>inflated</em> to include the set

If the topology of the topological vector space is induced by a [[Distance Measures／Metrics／Semi-Metrics／Functions|metric]] that is [homogeneous](https://en.wikipedia.org/wiki/Homogeneous_metric), as in the case of a metric induced by the [[Norms - Semi-Norms|norm]] of [[Normed Vector Spaces - Normed Spaces|normed vector spaces]], then the two definitions coincide.
### Definition
Given a [[Topological Vector Spaces (TVS) - Linear Topological Spaces|topological vector space (𝑉,𝐹,𝜏)]], a subset 𝑆 of 𝑉 is called von Neumann bounded or just bounded in 𝑉 if any of the following equivalent conditions are satisfied:
1. for everyneighborhood (𝑁)
of the origin, there exists a real number 𝑟\>0 such that 𝑆⊆𝛼𝑁 for all scalars 𝛼 satisfying |𝛼|≥𝑟
- 
	- this definition was introduced by John von Neumann in 1935
2. 𝑆 is absorbed by every neighborhood of the origin
3. for every neighborhood 𝑁 of the origin, there exists a scalar 𝛼 such that 𝑆⊆𝛼𝑁
4. for every neighborhood 𝑁 of the origin, there exists a real 𝑟\>0 such that 𝛼𝑆∊𝑁 for all scalars 𝛼 satisfying |𝛼|≤𝑟
5. for every neighborhood 𝑁 of the origin, there exists a real 𝑟\>0 such that 𝑡𝑆⊆𝑁 for all real 0\<𝑡≤𝑟
6. any one of statements (1) through (5) above but with the word "neighborhood" replaced by any of the following: "balanced neighborhood", "open balanced neighborhood", "closed balanced neighborhood", "open neighborhood", "closed neighborhood"
	1. e.g. statement (2) may become: 𝑆 is bounded if and only if 𝑆 is absorbed by every balanced neighborhood of the origin
	2. if 𝑉 is locally convex then the adjective "convex" may be also be added to any of these 5 replacements
7. for every sequence of scalars (𝑠<sub>1</sub>, 𝑠<sub>2</sub>, ...) that converges to 0 and every sequence (𝑏<sub>1</sub>, 𝑏<sub>2</sub>, ...), the sequence (𝑠<sub>1</sub>𝑏<sub>1</sub>, 𝑠<sub>2</sub>𝑏<sub>2</sub>, ...) converges to 0 in 𝑉
	1. this definition was introduced by Andrey Kolmogorov in 1934
8. for every sequence (𝑠<sub>1</sub>, 𝑠<sub>2</sub>, ...) in 𝑆, the sequence (\[1/𝑖\]𝑠<sub>𝑖</sub>)<sub>1≤𝑖≤∞</sub> converges to 0 in 𝑉
9. every countable subset of 𝑆 is bounded (according to any defining condition other that this one)

TODO: [https://en.wikipedia.org/wiki/Bounded_set_(topological_vector_space)#:~:text=one).%5B1%5D-,If,at%20the%20origin%20then%20this%20list%20may%20be%20extended%20to%20include,-%3A](https://en.wikipedia.org/wiki/Bounded_set_(topological_vector_space)#:~:text=one%29.%5B1%5D-,If,at%20the%20origin%20then%20this%20list%20may%20be%20extended%20to%20include,-%3A)
# Unbounded Sets <sup>[[Mathematical Space (Bounded Sets - Unbounded Sets)|(general definition)]]</sup>

A set that is not bounded is called unbounded
