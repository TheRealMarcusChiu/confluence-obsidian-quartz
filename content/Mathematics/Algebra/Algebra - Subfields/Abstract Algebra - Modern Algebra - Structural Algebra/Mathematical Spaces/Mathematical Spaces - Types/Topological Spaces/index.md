---
title: "Topological Spaces"
created: 2022-06-25T19:30:27.787-05:00
modified: 2023-06-23T16:02:14.998-05:00
parent: "[[Mathematical Spaces - Types]]"
children:
  - "[[Algebraic Topology]]"
  - "[[Kolmogorov Classification]]"
  - "[[Topological Spaces (Boundary - Boundaryless)]]"
  - "[[Topological Spaces (Compactness／Compact - Sequential Compactness - Sequentially Compact - Limit Point Compactness)]]"
  - "[[Topological Spaces (Cover／Covering - Open Cover／Covering - Subcover／Subcovering)]]"
  - "[[Topological Spaces (Limit Points - Accumulation Points - Cluster Points)]]"
  - "[[Topological Spaces (Neighborhoods of a Point／Set)]]"
  - "[[Topological Spaces (Open Sets - Closed Sets - Clopen Sets - Closures)]]"
  - "[[Topology]]"
  - "[[Transformations Between Topological Spaces]]"
---
###### Topological Spaces (𝑋,𝜏)
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a tuple (𝑋,𝜏) where:
	- 𝑋 be a set of elements
	- 𝜏 is a [t](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1023353)[[Topology|opology]]
````
^excerpt

# Topological Space - Definitions

> [!expand-ui]- Definition via Open Sets (Topology (𝜏))
> see [[Topology|Topology (𝜏)]]

> [!expand-ui]- Definition via Closed Sets
> ### Definition
>
> Using [de Morgan's laws](https://en.wikipedia.org/wiki/De_Morgan%27s_laws), the above axioms defining open sets become axioms defining <strong>[[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|closed sets]]</strong>:
> 1. The empty set and 𝑋 are closed.
> 2. The intersection of any collection of closed sets is also closed.
> 3. The union of any finite number of closed sets is also closed.
>
> Using these axioms, another way to define a topological space is as a set 𝑋 together with a collection 𝜏 of closed subsets of 𝑋. Thus the sets in the topology 𝜏 are the closed sets, and their complements in 𝑋 are the open sets.

> [!expand-ui]- Definition via Neighborhoods
> ### Definition
>
> A <em>topological space</em> is a pair (𝑋,𝒩) where:
> - 𝑋 be a [[Set Theory|set]]
> - 𝒩 be a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]] assigning to each 𝑥∊𝑋 a non-empty collection 𝒩(𝑥) of subsets of 𝑋. The elements of 𝒩(𝑥) will be called <em>neighbourhoods</em> of 𝑥 with respect to 𝒩 (or, simply, <em>neighbourhoods of 𝑥</em>). The function 𝒩 is called a [neighbourhood topology](https://en.wikipedia.org/wiki/Neighbourhood_(topology)) if the axioms below are satisfied:
> 	1. If 𝑁 is a neighbourhood of 𝑥 (i.e., 𝑁∈𝒩(𝑥)), then 𝑥∈𝑁. In other words, each point belongs to every one of its neighbourhoods.
> 	2. If 𝑁 is a subset of 𝑋 and includes a neighbourhood of 𝑥, then 𝑁 is a neighbourhood of 𝑥 (i.e. every superset of a neighbourhood of a point 𝑥∈𝑋 is again a neighbourhood of 𝑥)
> 	3. The intersection of two neighbourhoods of 𝑥 is a neighbourhood of 𝑥
> 	4. Any neighbourhood 𝑁 of 𝑥 includes a neighbourhood 𝑀 of 𝑥 such that 𝑁 is a neighbourhood of each point of 𝑀
>
> The first three axioms for neighbourhoods have a clear meaning. The fourth axiom has a very important use in the structure of the theory, that of linking together the neighbourhoods of different points of 𝑋.
> ### Examples
>
> A standard example of such a system of neighbourhoods is for the real line ℝ, where a subset 𝑁 of ℝ is defined to be a <em>neighbourhood</em> of a real number 𝑥 if it includes an open interval containing 𝑥.
>
> Given such a structure, a subset 𝑈 of 𝑋 is defined to be <strong>open</strong> if 𝑈 is a neighbourhood of all points in 𝑈. The open sets then satisfy the axioms given below. Conversely, when given the open sets of a <em>topological space</em>, the neighbourhoods satisfying the above axioms can be recovered by defining 𝑁 to be a neighbourhood of 𝑥 if 𝑁 includes an open set 𝑈 such that 𝑥∈𝑈.
# Topological Spaces - Types
- All [[Metric Spaces|Metric Spaces (𝑋,𝑑)]] can induce a [[Topology|topology (𝜏)]] defined as [[Distance Metric Topology|distance metric topology (𝜏𝑑)]]
- [[Topological Vector Spaces (TVS) - Linear Topological Spaces|Topological Vector Spaces (TVS)]]
- [[Indiscrete Topological Spaces]]
- [[Discrete Topological Spaces]]
- [[Function Spaces]]
- Proximity Spaces
- Uniform Spaces
- Cauchy Spaces
- Convergence Spaces

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [https://en.wikipedia.org/wiki/Topological_space](https://en.wikipedia.org/wiki/Topological_space)
- [https://mathworld.wolfram.com/TopologicalSpace.html](https://mathworld.wolfram.com/TopologicalSpace.html)
