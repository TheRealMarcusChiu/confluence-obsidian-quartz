---
title: "Measure／Measures"
created: 2023-05-13T21:22:17.174-05:00
modified: 2024-01-20T14:52:21.688-06:00
parent: "[[Measure Theory]]"
children: []
---
###### Measure (𝜇)
````excerpt
- a <em>measure</em> on a set is a systematic way to assign a number to each suitable subset of that set, intuitively interpreted as its size. In this sense, a measure is a generalization of the concepts of length, area, and volume
````
^excerpt

# Measure - Properties

Let:
- 𝑋 be a [[Set／Sets|set]]
- 𝛴 a [[σ-Algebra - σ-Field of Sets - σ-field|𝜎-algebra]] over 𝑋

A [set function](https://en.wikipedia.org/wiki/Set_function), 𝜇 : 𝛴 → [extended real number line](https://en.wikipedia.org/wiki/Extended_real_number_line), is called a <strong>measure</strong> if the following conditions hold:
- 𝜇(∅) = 0
- <strong>non-negativity</strong> - for all 𝐸∊𝛴, 𝜇(𝐸) ≥ 0
- <strong>countable additivity</strong> (or [𝜎-additivity](https://en.wikipedia.org/wiki/Sigma_additivity)) - for all [countable](https://en.wikipedia.org/wiki/Countable) collections {𝐸<sub>𝑘</sub>}<sub>1≤𝑘≤∞</sub> of [[Disjoint - Pairwise Disjoint - Mutually Exclusive／Disjoint|pairwise disjoint]] sets in 𝛴:
	- 𝜇(⋃<sub>1≤𝑘≤∞</sub>𝐸<sub>𝑘</sub>) = 𝛴<sub>1≤𝑘≤∞</sub>𝜇(𝐸<sub>𝑘</sub>)

# Measure - Types
- [[Probability Measure]] - has an additional property that it must assign the value 1 to the entire set 𝑋 (i.e. 𝜇(𝑋) = 1)
	- [Martingale / Risk-Neutral measure](https://en.wikipedia.org/wiki/Martingale_measure) - is a probability measure such that each share price is exactly equal to the discounted expectation of the share price under this measure
- [Borel measure](https://en.wikipedia.org/wiki/Borel_measure) – measure defined on all open sets of a topological space
- [Fuzzy measure](https://en.wikipedia.org/wiki/Fuzzy_measure) – theory of generalized measures in which the additive property is replaced by the weaker property of monotonicity
- [Haar measure](https://en.wikipedia.org/wiki/Haar_measure) – left-invariant (or right-invariant) measure on locally compact topological group
- [Lebesgue measure](https://en.wikipedia.org/wiki/Lebesgue_measure) – the concept of area in any dimension
