---
title: "Orthogonal／Orthogonality - Orthogonal Sets - Orthogonal Complement"
created: 2023-06-18T13:06:15.217-05:00
modified: 2023-07-03T14:50:29.051-05:00
parent: "[[Inner Products]]"
children: []
---
###### Orthogonal/Orthogonality (·⟂·)
````excerpt
- given an [[Inner Product Spaces|inner product space (𝑉,𝐹,⟨·,·⟩)]]:
	- vectors 𝑢∊𝑉 and 𝑣∊𝑉 are <em>orthogonal</em> if the [[Inner Products|inner product ⟨𝑢,𝑣⟩]] = 0 (denoted as 𝑢⟂𝑣)
- given a [[Vector Spaces - Linear Spaces|vector space (𝑉,𝐹)]] with [[Bilinear Functionals - Bilinear Forms - 2／Two Forms|bilinear form (𝐵)]]:
	- vectors 𝑢∊𝑉 and 𝑣∊𝑉 are <em>orthogonal</em> if 𝐵(𝑢,𝑣) = 0
- subsets 𝐴,𝐵⊆𝑉 are <em>orthogonal</em> if 𝑎⟂𝑏 for all 𝑎∊𝐴 and 𝑏∊𝐵 (denoted as 𝐴⟂𝐵)
````
^excerpt

###### Orthogonal Sets
- a set of vectors form an <em>orthogonal set</em> if all vectors in the set are mutually <em>orthogonal</em>
- an <em>orthogonal set</em> which forms a [[Basis Vectors|basis]] is called an [[Orthogonal Basis Vectors|orthogonal basis]]
- can be represented as an [[Orthogonal／Orthonormal Matrix|orthogonal matrix]]

# Orthogonal - Examples

> [!expand-ui]- Empty Set and Universe
> - ⦰<sup>⟂</sup> = 𝑋
> - 𝑋<sup>⟂</sup> = ⦰

> [!expand-ui]- 𝐴⊆𝐵 and its Contraposition
> Statement:
> - 𝐴⊆𝐵 → 𝐴<sup>⟂</sup>⊇𝐵<sup>⟂</sup>
>
> Proof:
> - 𝑏<sub>1</sub>∊𝐵<sup>⟂</sup> <font style="color: rgb(165,173,186);">→</font> ⟨𝑏<sub>1</sub>,𝑏<sub>2</sub>⟩ for all 𝑏<sub>2</sub>∊𝐵 <font style="color: rgb(165,173,186);">→</font> ⟨𝑏<sub>1</sub>,𝑎⟩ for all 𝑎∊𝐴 <font style="color: rgb(165,173,186);">→</font> 𝑏<sub>1</sub>∊𝐴<sup>⟂</sup>
# Orthogonal - In Relation to [[Norms - Semi-Norms|Norm]] & [[Pythagorean Theorem]]

If 𝑎⟂𝑏, then (||𝑎+𝑏||<sub>⟨·,·⟩</sub>)<sup>2</sup> = (||𝑎||<sub>⟨·,·⟩</sub>)<sup>2</sup> + (||𝑏||<sub>⟨·,·⟩</sub>)<sup>2</sup>

Where ||·||<sub>⟨·,·⟩</sub> is the [[Inner Product Norm]]
###### Orthogonal Complement  (·<sup>⟂</sup>)
- for 𝐴⊆𝑉, the <em>orthogonal complement</em> of 𝐴 is 𝐴<sup>⟂</sup> = { 𝑥 |  ⟨𝑥,𝑎⟩ = 0 for all 𝑎∊𝐴, 𝑥∊𝑋}
	- 𝐴<sup>⟂</sup> is always a subspace in 𝑋
	- 𝐴<sup>⟂</sup> is always [[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|closed]] in 𝑋

# Orthogonal Complement - 𝐴<sup>⟂</sup> is always a subspace in 𝑋

TODO
# Orthogonal Complement - 𝐴<sup>⟂</sup> is always closed in 𝑋

Given:
- an [[Inner Product Spaces|inner product space (𝑉,𝐹,⟨·,·⟩)]]
- 𝐴⊆𝑋

Then:
- 𝐴<sup>⟂</sup> is [[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|closed]]

Proof:
- Let (𝑥<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> ⊆ 𝐴<sup>⟂</sup> be a [[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|sequence]] with limit 𝑥̅∊𝑋
- ⟨𝑥<sub>𝑛</sub>,𝑎⟩ = 0 for all 𝑎∊𝐴
- 𝑙𝑖𝑚<sub>𝑛→∞</sub>⟨𝑥<sub>𝑛</sub>,𝑎⟩ = 0 for all 𝑎∊𝐴
- ⟨𝑥̅,𝑎⟩ = 0 for all 𝑎∊𝐴
- 𝑥̅∊𝐴<sup>⟂</sup>
- Since all sequences converge to elements 𝑥̅ that exist in 𝐴<sup>⟂</sup>
- then by definition, 𝐴<sup>⟂</sup>is closed
