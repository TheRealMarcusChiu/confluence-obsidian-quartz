---
title: "Transpose of a Linear Transformation - Algebraic Adjoint of a Linear Transformation"
created: 2023-06-11T19:58:29.104-05:00
modified: 2024-01-10T15:23:14.125-06:00
parent: "[[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism]]"
children:
  - "[[Transpose - What Does it Have to Do With Matrices？]]"
  - "[[Transpose - What is its Corresponding Matrix？]]"
---
###### Transpose of a Linear Transformation - Algebraic Adjoint of a Linear Transformation
````excerpt
- the <strong>transpose</strong> takes as input a linear transformation 𝐿 and converts it into another linear transformation 𝐿<sup>T</sup>
- any [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation (𝐿 : 𝑉→𝑊)]] between two [[Vector Spaces - Linear Spaces|vector spaces (𝑉,𝑊)]] over the same [[Fields (Algebraic Structure) - Field Theory|field (𝐹)]] induces a linear transformation 𝐿<sup>T</sup>: 𝑊<sup>∗</sup>→𝑉<sup>∗</sup> between two [[Dual Spaces - Algebraic Dual Spaces - Dual Vector Spaces|dual vector spaces (𝑉∗,𝑊∗)]]
	- 𝐿<sup>T</sup> is the <strong>transpose</strong> of 𝐿
- if the linear transformation 𝐿 is represented by a matrix 𝐴, then the <strong>transpose</strong> of this linear transformation 𝐿<sup>T</sup> is represented by the [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|Transpose Matrix (𝐴T)]]
	- [[Transpose - What Does it Have to Do With Matrices？|But What Does it Have to Do With Matrices?]]
- the <strong>transpose</strong> itself is a linear transformation
	- [[Transpose - What is its Corresponding Matrix？|But What is its Corresponding Matrix?]]
- is generalized by [adjoint functors](https://en.wikipedia.org/wiki/Adjoint_functors)
````
^excerpt

# Transpose - Definition

Let 𝐿: 𝑉→𝑊 be a linear transformation. The transpose of 𝐿 is defined as:
- 𝐿<sup>T</sup>: 𝑊<sup>∗</sup>→𝑉<sup>∗</sup>

Where 𝐿<sup>T</sup>'s:
- INPUT is a linear functional 𝑓 ∊ 𝑊<sup>∗</sup> (where 𝑓: 𝑊→𝐹)
- OUTPUT is a linear functional 𝐿<sup>T</sup>(𝑓) ∊ 𝑉<sup>∗</sup> (where 𝐿<sup>T</sup>(𝑓): 𝑉→𝐹)

Thus when given any vector 𝑣∊𝑉:
- 𝐿<sup>T</sup>(𝑓)(𝑣) = 𝑓(𝐿(𝑣))

# Transpose - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Transpose - Properties
- given a finite [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation (𝐿 : ℝ𝑛→ℝ𝑛)]] and a [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|standard inner product]] (⟨·,·⟩)
, we have

⟨𝐿𝑥,𝑦⟩ = ⟨𝑥,𝐿<sup>T</sup>𝑦⟩
- if 𝐿 is also an [[Orthogonal／Orthonormal／Unitary (Transformations／Operations／Operators／Mappings／Maps／Functions)|orthogonal transformation]], 𝐿 preserves the inner product between 2 vectors 𝑥 and 𝑦:
	- ⟨𝑥,𝑦⟩ = ⟨𝐴𝑥,𝐴𝑦⟩ = ⟨𝑥,𝐴<sup>T</sup>𝐴𝑦⟩ and we find that 𝐴<sup>T</sup>𝐴 = 𝐼 and 𝐴<sup>-1</sup> = 𝐴<sup>T</sup>

# Resources
- [Dr Peyam - Transpose Definition](https://www.youtube.com/watch?v=DA0cnhpSFok&list=PLJb1qAQIrmmCs0fJDQnXgeuyFR8iQDwLV&index=4)
- [https://en.wikipedia.org/wiki/Transpose_of_a_linear_map](https://en.wikipedia.org/wiki/Transpose_of_a_linear_map)
- [https://en.wikipedia.org/wiki/Dual_space#Transpose_of_a_linear_map](https://en.wikipedia.org/wiki/Dual_space#Transpose_of_a_linear_map)
