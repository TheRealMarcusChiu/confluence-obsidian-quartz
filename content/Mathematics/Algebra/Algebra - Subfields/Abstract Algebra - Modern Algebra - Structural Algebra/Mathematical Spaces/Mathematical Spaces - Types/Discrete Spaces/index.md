---
title: "Discrete Spaces"
created: 2023-06-18T18:46:54.709-05:00
modified: 2023-07-06T15:50:12.554-05:00
parent: "[[Mathematical Spaces - Types]]"
children: []
---
###### Discrete Space
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- points in set 𝑋 form a discontinuous sequence, meaning they are isolated from each other in a certain sense
````
^excerpt

# Discrete Spaces - Types

Given a set 𝑋:
- the <strong>[[Discrete Topology|discrete topology]]</strong> on 𝑋 is defined by letting every [subset](https://en.wikipedia.org/wiki/Subset) of 𝑋 be [open](https://en.wikipedia.org/wiki/Open_set) (and hence also [closed](https://en.wikipedia.org/wiki/Closed_set)), and 𝑋 is a <strong>[[Discrete Topological Spaces|discrete topological space]]</strong> if it is equipped with its discrete topology;
- the <strong>discrete uniformity</strong> on 𝑋 is defined by letting every [superset](https://en.wikipedia.org/wiki/Superset) of the diagonal { (𝑥,𝑥) : 𝑥∈𝑋 } in 𝑋×𝑋 be an [entourage](https://en.wikipedia.org/wiki/Entourage_(topology)#Entourage_definition), and 𝑋 is a <strong>discrete uniform space</strong> if it is equipped with its discrete uniformity.
- the [[Discrete Distance Metric - Discrete Metric|discrete distance metric (𝑑)]] on 𝑋 is defined by
	- $d(x,y) = \begin{cases} 1 & if \quad x = y \\ 0 & otherwise \end{cases} \quad for \: all \quad x,y ∈ 𝑋$
	- In this case (𝑋,𝑑) is called a <strong>[[Discrete Metric Spaces - Discrete Spaces|discrete metric space]]</strong>.
- a <strong>discrete subspace</strong> of some given topological space (𝑌,𝜏) refers to a [topological subspace](https://en.wikipedia.org/wiki/Topological_subspace) of (𝑌,𝜏) (a subset of 𝑌 together with the [subspace topology](https://en.wikipedia.org/wiki/Subspace_topology) that (𝑌,𝜏) induces on it) whose topology is equal to the discrete topology. For example, if 𝑌 := ℝ has its usual [Euclidean topology](https://en.wikipedia.org/wiki/Euclidean_topology) then 𝑆 = {1/2, 1/3, 1/4, …} (endowed with the subspace topology) is a discrete subspace of ℝ but 𝑆∪{0} is not.
- a [set](https://en.wikipedia.org/wiki/Set_(mathematics)) 𝑆 is <strong>discrete</strong> in a [[Metric Spaces|metric space (𝑋,𝑑)]], for 𝑆⊆𝑋, if for every 𝑥∈𝑆, there exists some 𝛿\>0 (depending on 𝑥) such that 𝑑(𝑥,𝑦) \> 𝛿 for all 𝑦∈𝑆\\{𝑥}; such a set consists of [isolated points](https://en.wikipedia.org/wiki/Isolated_point). A set 𝑆 is <strong>uniformly discrete</strong> in the [[Metric Spaces|metric space (𝑋,𝑑)]], for 𝑆⊆𝑋, if there exists 𝜀 \> 0 such that for any two distinct 𝑥,𝑦∈𝑆, 𝑑(𝑥,𝑦) \> 𝜀.

A [[Metric Spaces|metric space (𝑋,𝑑)]] is said to be <em>[uniformly discrete](https://en.wikipedia.org/wiki/Uniformly_discrete_set)</em> if there exists a <em>packing radius</em> 𝑟 \> 0 such that, for any 𝑥,𝑦∈𝑋, one has either 𝑥 = 𝑦 or 𝑑(𝑥,𝑦) \> 𝑟. The topology underlying a metric space can be discrete, without the metric being uniformly discrete: for example the usual metric on the set {2<sup>−𝑛</sup> : 𝑛∈ℕ<sub>0</sub>}.
# Discrete Spaces - Properties

The underlying uniformity on a discrete metric space is the discrete uniformity, and the underlying topology on a discrete uniform space is the discrete topology. Thus, the different notions of discrete space are compatible with one another. On the other hand, the underlying topology of a non-discrete uniform or metric space can be discrete; an example is the metric space 𝑋 = { 𝑛<sup>−1</sup>: 𝑛∈ℕ } (with metric inherited from the [real line](https://en.wikipedia.org/wiki/Real_line) and given by 𝑑(𝑥,𝑦) = |𝑥−𝑦|). This is not the discrete metric; also, this space is not [complete](https://en.wikipedia.org/wiki/Complete_(topology)) and hence not discrete as a uniform space. Nevertheless, it is discrete as a topological space. We say that 𝑋 is <em>topologically discrete</em> but not <em>uniformly discrete</em> or <em>metrically discrete</em>.

Additionally:
- The [topological dimension](https://en.wikipedia.org/wiki/Topological_dimension) of a discrete space is equal to 0.
- A topological space is discrete if and only if its [singletons](https://en.wikipedia.org/wiki/Singleton_(mathematics)) are open, which is the case if and only if it doesn't contain any [accumulation points](https://en.wikipedia.org/wiki/Accumulation_point).
- The singletons form a [basis](https://en.wikipedia.org/wiki/Basis_(topology)) for the discrete topology.
- A uniform space 𝑋 is discrete if and only if the diagonal {(𝑥,𝑥) : 𝑥∈𝑋} is an [entourage](https://en.wikipedia.org/wiki/Entourage_(topology)).
- Every discrete topological space satisfies each of the [separation axioms](https://en.wikipedia.org/wiki/Separation_axioms); in particular, every discrete space is [Hausdorff](https://en.wikipedia.org/wiki/Hausdorff_space), that is, separated.
- A discrete space is [compact](https://en.wikipedia.org/wiki/Compact_space) [if and only if](https://en.wikipedia.org/wiki/If_and_only_if) it is [finite](https://en.wikipedia.org/wiki/Finite_set).
- Every discrete uniform or metric space is [complete](https://en.wikipedia.org/wiki/Complete_space).
- Combining the above two facts, every discrete uniform or metric space is [totally bounded](https://en.wikipedia.org/wiki/Totally_bounded_space) if and only if it is finite.
- Every discrete metric space is [bounded](https://en.wikipedia.org/wiki/Bounded_space).
- Every discrete space is [first-countable](https://en.wikipedia.org/wiki/First-countable_space); it is moreover [second-countable](https://en.wikipedia.org/wiki/Second-countable_space) if and only if it is [countable](https://en.wikipedia.org/wiki/Countable).
- Every discrete space is [totally disconnected](https://en.wikipedia.org/wiki/Totally_disconnected).
- Every non-empty discrete space is a [second category](https://en.wikipedia.org/wiki/Second_category).
- Any two discrete spaces with the same [cardinality](https://en.wikipedia.org/wiki/Cardinality) are [homeomorphic](https://en.wikipedia.org/wiki/Homeomorphic).
- Every discrete space is metrizable (by the discrete metric).
- A finite space is metrizable only if it is discrete.
- If 𝑋 is a topological space and 𝑋 is a set carrying the discrete topology, then 𝑋 is evenly covered by 𝑋×𝑌 (the projection map is the desired covering)
- The [subspace topology](https://en.wikipedia.org/wiki/Subspace_topology) on the [integers](https://en.wikipedia.org/wiki/Integers) as a subspace of the [real line](https://en.wikipedia.org/wiki/Real_line) is the discrete topology.
- A discrete space is separable if and only if it is countable.
- Any topological subspace of ℝ (with its usual [Euclidean topology](https://en.wikipedia.org/wiki/Euclidean_topology)) that is discrete is necessarily [countable](https://en.wikipedia.org/wiki/Countable_set).

# Discrete Spaces - Transformations/Functions

Any function from a [[Discrete Topological Spaces|discrete topological space]] to another [[Topological Spaces|topological space]] is [continuous](https://en.wikipedia.org/wiki/Continuous_function_(topology)), and any function from a discrete uniform space to another uniform space is [uniformly continuous](https://en.wikipedia.org/wiki/Uniformly_continuous). That is, the discrete space 𝑋 is [free](https://en.wikipedia.org/wiki/Free_object) on the set 𝑋 in the [category](https://en.wikipedia.org/wiki/Category_theory) of topological spaces and continuous maps or in the category of uniform spaces and uniformly continuous maps. These facts are examples of a much broader phenomenon, in which discrete structures are usually free on sets.

With metric spaces, things are more complicated, because there are several categories of metric spaces, depending on what is chosen for the [morphisms](https://en.wikipedia.org/wiki/Morphism). Certainly, the [[Discrete Metric Spaces - Discrete Spaces|discrete metric space]] is free when the morphisms are all uniformly continuous maps or all continuous maps, but this says nothing interesting about the metric [structure](https://en.wikipedia.org/wiki/Mathematical_structure), only the uniform or topological structure. Categories more relevant to the metric structure can be found by limiting the morphisms to [Lipschitz continuous](https://en.wikipedia.org/wiki/Lipschitz_continuous) maps or to [short maps](https://en.wikipedia.org/wiki/Short_map); however, these categories don't have free objects (on more than one element). However, the discrete metric space is free in the category of [bounded metric spaces](https://en.wikipedia.org/wiki/Bounded_metric_space) and Lipschitz continuous maps, and it is free in the category of metric spaces bounded by 1 and short maps. That is, any function from a discrete metric space to another bounded metric space is Lipschitz continuous, and any function from a discrete metric space to another metric space bounded by 1 is short.

Going the other direction, a function 𝑓 from a [[Topological Spaces|topological space]] 𝑌 to a <em>discrete space</em> 𝑋 is continuous if and only if it is [locally constant](https://en.wikipedia.org/wiki/Locally_constant_function) in the sense that every point in 𝑌 has a [neighborhood](https://en.wikipedia.org/wiki/Topological_neighborhood) on which 𝑓 is constant.

Every [ultrafilter](https://en.wikipedia.org/wiki/Ultrafilter_(set_theory)) 𝒰 on a non-empty set 𝑋 can be associated with a topology 𝜏 = 𝒰∪{∅} on 𝑋 with the property that <em>every</em> non-empty proper subset 𝑆 of 𝑋 is <em>either</em> an [open subset](https://en.wikipedia.org/wiki/Open_set) or else a [closed subset](https://en.wikipedia.org/wiki/Closed_set), but never both. Said differently, <em>every</em> subset is open [or](https://en.wikipedia.org/wiki/Logical_disjunction) closed but (in contrast to the discrete topology) the <em>only</em> subsets that are <em>both</em> open and closed (i.e. [[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|clopen]]) are ∅ and 𝑋. In comparison, <em>every</em> subset of 𝑋 is open and closed in the discrete topology.
