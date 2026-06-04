---
title: "Compact Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)"
created: 2023-06-22T13:53:31.333-05:00
modified: 2023-07-07T19:31:48.077-05:00
parent: "[[Linear Transformation - Properties]]"
children: []
---
###### Compact Operator (𝐿/𝑇: 𝑋 → 𝑇)
````excerpt
- is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear operator]] 𝐿: 𝑋 → 𝑌, where 𝑋 and 𝑌 are [[Normed Vector Spaces - Normed Spaces|normed vector spaces]], with the property that 𝐿 maps [bounded subsets](https://en.wikipedia.org/wiki/Bounded_set) of 𝑋 to [relatively compact](https://en.wikipedia.org/wiki/Relatively_compact) subsets of 𝑌 (subsets with compact [closure](https://en.wikipedia.org/wiki/Closure_(topology)) in 𝑌)
- such an operator is necessarily a [[Bounded／Unbounded Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|bounded operator]], and so [[Continuous Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|continuous]]
- some authors require that 𝑋,𝑌 are [[Banach Spaces|Banach spaces]], but the definition can be extended to more general spaces
````
^excerpt

# Compact Operator - Definitions

> [!expand]- Topological Vector Spaces
> A linear operator 𝐿: 𝑋 → 𝑌 between two [[Topological Vector Spaces (TVS) - Linear Topological Spaces|topological vector spaces]] is said to be <strong>compact</strong> if there exists a [[Topological Spaces (Neighborhoods of a Point／Set)|neighborhood (𝑁𝜏)]] of the origin in 𝑋 such that 𝐿(𝑁<sub>𝜏</sub>(origin)) is a [[Mathematical Space (Compactness／Compact - Sequential／Sequentially／Limit-Point／Weakly-Countably／Countably／Countable Compactness／Compact - Relatively-Compact／Precompact Subspace／Subset)|relatively compact]] subset of 𝑌.

> [!expand]- Normed Vector Spaces
> Let 𝐿: 𝑋 → 𝑌 be a linear operator between two [[Normed Vector Spaces - Normed Spaces|normed vector spaces]]. Then the following statements are equivalent:
> - 𝐿 is a <em>compact operator</em>
> - the [[Functions (Domain - Codomain - Preimage - Image - Range)|image]] of the unit ball of 𝑋 under 𝐿 is [[Mathematical Space (Compactness／Compact - Sequential／Sequentially／Limit-Point／Weakly-Countably／Countably／Countable Compactness／Compact - Relatively-Compact／Precompact Subspace／Subset)|relatively compact]] in 𝑌
> - the image of any [[Mathematical Space (Bounded Sets - Unbounded Sets)|bounded subset]] of 𝑋 under 𝐿 is [[Mathematical Space (Compactness／Compact - Sequential／Sequentially／Limit-Point／Weakly-Countably／Countably／Countable Compactness／Compact - Relatively-Compact／Precompact Subspace／Subset)|relatively compact]] in 𝑌
> - there exists a [[Metric Spaces (Neighborhoods)|neighborhood (𝑁)]] of the origin in 𝑋 and a [[Mathematical Space (Compactness／Compact - Sequential／Sequentially／Limit-Point／Weakly-Countably／Countably／Countable Compactness／Compact - Relatively-Compact／Precompact Subspace／Subset)|compact subset]] 𝐴⊆𝑌 such that 𝐿(𝑁(origin))⊆𝐴
> - for any bounded sequence (𝑥<sub>𝑛</sub>)<sub>𝑛∈ℕ</sub> in 𝑋, the sequence (𝐿(𝑥<sub>𝑛</sub>))<sub>𝑛∈ℕ</sub> contains a converging subsequence

> [!expand]- Hilbert Spaces (𝓗)
> If 𝑌 is a [[Hilbert Spaces|Hilbert space (𝓗)]], it is true that any <em>compact operator</em> is a limit of finite-rank operators

> [!expand]- Banach Spaces
> If in addition, 𝑌 is [[Banach Spaces|Banach]], these statements are also equivalent to:
> - the image of any bounded subset of 𝑋 under 𝐿 is [totally bounded](https://en.wikipedia.org/wiki/Totally_bounded_space) in 𝑌.
# Compact Operator - Properties
- If a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear operator]] 𝐿 is <em>compact</em>, then it is [[Continuous Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|continuous]].

# Compact Operator - Types
- Any [[Bounded／Unbounded Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|bounded operator (𝐿)]] that has a finite rank is a compact operator

# Compact Operator - Other
- [[Singular Values (s-numbers)]]
