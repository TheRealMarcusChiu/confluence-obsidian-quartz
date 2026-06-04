---
title: "Divergences"
created: 2023-06-26T17:25:32.612-05:00
modified: 2023-07-18T19:07:15.053-05:00
parent: "[[Distance／Similarity／Divergence Measure／Metric／Semi-Metric／Functions - Norm／Semi-Norm]]"
children:
  - "[[Bregman Divergence]]"
  - "[[Dual Divergence - Primal Divergence]]"
  - "[[Total Variation Distance]]"
---
###### Divergences 𝐷(·,·) 𝐷(·||·)
````excerpt
- is a kind of statistical [[Distance Measures／Metrics／Semi-Metrics／Functions|distance]]
- measures the "separation/distances" between 2 [[Probability Distributions|probability distributions]]
- is a [[Binary／Dyadic Operations／Operators|binary operation]] that establishes the separation from one [[Probability Distributions|probability distribution]] to another on a statistical [[Manifolds (n-Dimensional Manifold (n-Manifold)|manifold]]
````
^excerpt

# Divergence - Definition

Given a [[Differentiable／Differential Manifold|differentiable manifold (𝑀)]] of dimension 𝑛, a <em>divergence</em> on 𝑀 is a [[C0 Functions - C1 Functions - C2 Functions - Ck Functions|𝐶2-function]] 𝐷: 𝑀 × 𝑀 → \[0,∞) satisfying:
1. 𝐷(𝑝,𝑞) ≥ 0 for all 𝑝,𝑞∈𝑀 (non-negativity)
2. 𝐷(𝑝,𝑞) = 0 if and only if 𝑝=𝑞 (positivity)
3. At every point, 𝑝∈𝑀, 𝐷(𝑝,𝑝+𝑑𝑝) is a [[Positive／Negative Semi Definite／Definiteness Indefinite Functions|positive-definite]] [[Quadratic Forms|quadratic form]] for infinitesimal displacements 𝑑𝑝 from 𝑝

Statistics and probability generally only require conditions 1 and 2. In information geometry, condition 3 is also required.

As an example, the [[Total Variation Distance|total variation distance]], a commonly used statistical divergence, does not satisfy condition 3.
# Divergence - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|Kullback-Leibler (KL) Divergence]]

# Divergence - Other
- [[Distance Measure／Metric vs Divergence|Distance Measure/Metric vs Divergence]]
