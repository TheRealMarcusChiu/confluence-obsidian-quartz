---
title: "Banach Spaces"
created: 2023-06-15T20:52:01.952-05:00
modified: 2026-01-05T14:28:31.113-06:00
parent: "[[Mathematical Spaces - Types]]"
children: []
---
###### Banach Spaces
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a [[Vector Spaces - Linear Spaces|vector space (𝑉,𝐹)]] over the real or complex numbers on which a [norm (||·||)](http://confluence.marcuschiu.com/display/NOT/Norm+-+Semi-Norm) is defined and is [[Complete Metric Spaces (Completeness - Non-Completeness)|complete]]
- is a [[Normed Vector Spaces - Normed Spaces|normed vector space (𝑉,𝐹,||·||)]] with [[Complete Metric Spaces (Completeness - Non-Completeness)|completeness]]
- is both a [[Complete Metric Spaces (Completeness - Non-Completeness)|complete metric space]] and a real/complex [[Vector Spaces - Linear Spaces|vector space]] tied together by the norm
- the chosen [[Norms - Semi-Norms|norm (||·||)]] implicitly defines a [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric (𝑑||·||)]]; thus making a <em>Banach space</em> a special case of a [[Metric Spaces|metric space]]
- local theory of Banach spaces, a field which studies the properties of very large-dimensional convex sets and is also called [[Asymptotic Geometry - Asymptotic Geometric Analysis - High-Dimensional Geometry|Asymptotic Geometric Analysis]]
````
^excerpt

# Banach Spaces - Example \#1

Given:
- ℝ is a one-dimensional [[Real Vector Spaces|real vector space]]
- ||·|| : ℝ → \[0, ∞\] is a norm

Thus:
- 𝑑<sub>||·||</sub>(𝑥,𝑦) = |𝑥-𝑦| is a [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric]]
- (ℝ,𝑑<sub>||·||</sub>) is a Banach space

# Banach Spaces - Example \#2

Given:
- 𝑉 is a zero-dimensional [[Real Vector Spaces|real vector space]]
- ||·|| : 𝑉 → \[0, ∞\] is a norm defined by ||0|| = 0

Thus:
- (𝑉,||·||) is a Banach space

# Banach Spaces - Example \#3

Given:
- ℕ is the set of [[Numbers Classes／Classification of Numbers|natural numbers]]
- 𝔽 is a field of real and/or complex numbers
- 𝑝 ∊ \[1,∞)

Let 𝐿<sup>𝑝</sup>(ℕ,𝔽) an [[Lp Spaces - Lebesgue Spaces (function space)|Lp space]] be defined as all sequences (𝑥<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> in 𝔽 such that:
- $\sum_{n=1}^{∞}|x_n|^p < ∞ \quad (converges!)$

Then ||·||<sub>𝑝</sub> : 𝐿<sup>𝑝</sup> → \[0, ∞) is the norm defined as:
- $||x||_p = (\sum_{n=1}^{∞}|x_n|^p)^{1/p}$

(𝐿<sup>𝑝</sup>,||·||<sub>𝑝</sub>) is a Banach space.
