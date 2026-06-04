---
title: "lp Spaces - Lebesgue Spaces (sequence space)"
created: 2023-07-05T21:56:35.136-05:00
modified: 2023-07-05T22:07:12.857-05:00
parent: "[[Mathematical Spaces - Types]]"
children: []
---
###### 𝓁<sup>𝑝</sup> Spaces - Lebesgue Spaces (𝓁<sup>𝑝</sup>)
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a [[Sequence Spaces|sequence space]] (i.e. a [[Linear Subspaces - Vector Subspaces|linear subspace]] of the [[Vector Space of All Sequences - Sequence Space of All Sequences|vector space of all sequences 𝐹ℕ]])
````
^excerpt

# 𝓁<sup>𝑝</sup> spaces - Types

For 0\<𝑝\<∞, 𝓁<sup>𝑝</sup> is a [[Linear Subspaces - Vector Subspaces|linear subspace]] of [[Vector Space of All Sequences - Sequence Space of All Sequences|vector space of all sequences 𝐹ℕ]] consisting of all sequences 𝑥̅<sub></sub>= (𝑥<sub>𝑛</sub>)<sub>𝑛∈ℕ</sub> satisfying:
- $\sum_n |x_n|^p < ∞$

If 𝑝≥1, then the [[Lp／Minkowski Norm (p-norm)|real-valued function ||·||𝑝]] on 𝓁<sup>𝑝</sup> defined by:
- $||x||_p = (\sum_n|x_n|^p)^{1/p} \quad for \; all \; x ∊ 𝓁^p$

defines a norm on 𝓁<sup>𝑝</sup>. In fact, 𝑙<sup>𝑝</sup>is a [[Complete Metric Spaces (Completeness - Non-Completeness)|complete metric space]] with respect to this norm and therefore is a [[Banach Spaces|Banach space]].

If 𝑝=2 then 𝓁<sup>2</sup> is also a [[Hilbert Spaces|Hilbert space]] when endowed with its [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|canonical inner product, called the Euclidean inner product]], defined for all 𝑥̅,𝑦̅∊𝓁<sup>𝑝</sup> by:
- $⟨\overline{x},\overline{y}⟩ = \sum_n\overline{x_n}y_n$

The canonical norm induced by this inner product is the usual [[L2／Euclidean Norm|𝐿2-norm]]:
- $||x||_2 = \sqrt{⟨x,x⟩} \quad for \; all \; x ∊𝓁^p$

If 𝑝=∞, then 𝓁<sup>∞</sup> is defined to be the space of all bounded sequences endowed with the norm:
- $||x||_∞ = sup_n|x_n|$

𝓁<sup>∞</sup> is also a [[Banach Spaces|Banach space]]

If 0\<𝑝\<1 then 𝓁<sup>𝑝</sup> does not carry a norm, but rather a [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric]] defined by:
- $d(x,y) = \sum_n|x_n-y_n|^p$
