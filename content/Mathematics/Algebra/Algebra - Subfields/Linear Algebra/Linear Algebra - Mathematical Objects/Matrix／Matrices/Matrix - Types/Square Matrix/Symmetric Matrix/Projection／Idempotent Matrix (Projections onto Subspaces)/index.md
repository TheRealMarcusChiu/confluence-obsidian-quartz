---
title: "Projection／Idempotent Matrix (Projections onto Subspaces)"
created: 2021-09-13T05:26:02.838-05:00
modified: 2023-09-19T15:03:52.372-05:00
parent: "[[Symmetric Matrix]]"
children: []
---
###### Projection/Idempotent Matrix (Projections onto Subspaces)
````excerpt
- In [[Linear Algebra|linear algebra]] and [[Functional Analysis|functional analysis]], a <strong>projection</strong> is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] 𝑃 from a [[Vector Spaces - Linear Spaces|vector space]] to itself such that 𝑃<sup>2</sup> =𝑃. That is, whenever 𝑃 is applied twice to any value, it gives the same result as if it were applied once (idempotent). It leaves its [[Functions (Domain - Codomain - Preimage - Image - Range)|image]] unchanged
````
^excerpt

# Why Project?

Because 𝐴𝑥 = 𝑏 may have no solution (i.e. inconsistent) because 𝑏 is outside the [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column space]] of 𝐴

If this happens, we can "solve":
- 𝐴𝑥̂ = 𝑝

where:
- 𝑝 - projection of 𝑏 onto the [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column space]] of 𝐴 (is closest vector to 𝑏 that is within the column space of 𝐴)
- 𝑥̂ - best estimate of 𝑥

# Projections onto Subspaces
###### 1-Dimensional Case

> [!expand]- Click here to expand...
> ![[Projection／Idempotent Matrix (Projections onto Subspaces)/projections.png|450]]
>
> find 𝑝 which is a projection of 𝑏 onto 𝑎
> 1. 𝑝 is a multiple of 𝑎, find 𝑥 such that 𝑝=𝑥𝑎:
> 	1. 𝑎<sup>𝑇</sup>𝑒 = 0 <font style="color: rgb(128,128,128);">\# 𝑒 is perpendicular to 𝑎</font>
> 	2. 𝑎<sup>𝑇</sup>(𝑏-𝑝) = 0
> 	3. 𝑎<sup>𝑇</sup>(𝑏-𝑥𝑎) = 0
> 	4. 𝑎<sup>𝑇</sup>𝑏 - 𝑥𝑎<sup>𝑇</sup>𝑎 = 0
> 	5. 𝑥𝑎<sup>𝑇</sup>𝑎 = 𝑎<sup>𝑇</sup>𝑏
> 	6. 𝑥 = (𝑎<sup>𝑇</sup>𝑏) / (𝑎<sup>𝑇</sup>𝑎)
> 2. now plug into equation 𝑝=𝑥𝑎:
> 	1. 𝑝 = \[(𝑎<sup>𝑇</sup>𝑏) / (𝑎<sup>𝑇</sup>𝑎)\] 𝑎
>
> find projection matrix 𝑃 such that 𝑝 = 𝑃𝑏:
> - 𝑃 = (𝑎𝑎<sup>𝑇</sup>) / (𝑎<sup>𝑇</sup>𝑎)
> - 𝑃 = 1/(𝑎<sup>𝑇</sup>𝑎) \* 𝑎𝑎<sup>𝑇</sup>
> 	- 1/(𝑎<sup>𝑇</sup>𝑎) is a scalar
> 	- 𝑎𝑎<sup>𝑇</sup> is a matrix
>
> ###### Properties of 𝑃
> - the [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column space]] of <font style="color: rgb(128,128,128);">𝑃 = (𝑎𝑎<sup>𝑇</sup>) / (𝑎<sup>𝑇</sup>𝑎)</font> is the line through 𝑎 and its [[Matrix Rank|rank]] is 1
###### N-Dimensional Case

> [!expand]- Click here to expand...
> ![[Projection／Idempotent Matrix (Projections onto Subspaces)/projection-n-dimensional.png|400]]
>
> find 𝑝 which is a projection of 𝑏 onto column-space of 𝐴 = \[𝑎<sub>1</sub>, 𝑎<sub>2</sub>\]
> 1. 𝑝 is a linear combination of the columns of 𝐴, find 𝑥<sub>1</sub> & 𝑥<sub>2</sub> such that 𝑝 = = 𝐴𝑥 = 𝑥<sub>1</sub>𝑎<sub>1</sub>+ 𝑥<sub>2</sub>𝑎<sub>2</sub>
> 	1. 𝐴<sup>𝑇</sup>𝑒 = 0 <font style="color: rgb(128,128,128);">\# 𝑒 is perpendicular to column-space of 𝐴</font>
> 		1. 𝑒 = 𝑏 - 𝑝
> 	2. 𝐴<sup>𝑇</sup>(𝑏 - 𝑝) = 0
> 		1. 𝑝 = 𝐴𝑥 <font style="color: rgb(128,128,128);">\# 𝑝 = 𝑥<sub>1</sub>𝑎<sub>1</sub>+ 𝑥<sub>2</sub>𝑎<sub>2</sub></font>
> 	3. 𝐴<sup>𝑇</sup>(𝑏 - 𝐴𝑥) = 0
> 	4. 𝐴<sup>𝑇</sup>𝑏 - 𝐴<sup>𝑇</sup>𝐴𝑥 = 0
> 	5. 𝑥 = (𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>𝑏
> 2. now plug into equation 𝑝 = 𝐴𝑥:
> 	1. 𝑝 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>𝑏
>
> find projection matrix 𝑃 such that 𝑝 = 𝑃𝑏:
> - 𝑃 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>
>
> ###### Properties of 𝑃
> - the [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column space]] of <font style="color: rgb(128,128,128);">𝑃 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup></font>
# Properties of 𝑃 (for all dimensions)
- 𝑃 is [[Symmetric Matrix|symmetric]] (i.e. 𝑃 = 𝑃<sup>𝑇</sup>)
- 𝑃 is idempotent (i.e. 𝑃 =𝑃𝑃)

# If Subspace 𝐴 is a Square Matrix

> [!expand]- Click here to expand...
> - 𝑃 =𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>
>
> becomes
> - 𝑃 =𝐴𝐴<sup>-1</sup>(𝐴<sup>𝑇</sup>)<sup>-1</sup>𝐴<sup>𝑇</sup>
> - 𝑃 = 𝐼 <font style="color: rgb(128,128,128);">\# the</font> [[Identity Matrix|identity matrix]]
>
> thus the equation 𝑝 = 𝑃𝑏 becomes
> - 𝑝 = 𝑏
# If Subspace 𝑄 is a Matrix with Orthonormal Columns

> [!expand]- Click here to expand...
> prerequisite: [[Orthogonal／Orthonormal Matrix|Orthogonal/Orthonormal Matrix]]
> ###### Problem
>
> suppose 𝑄 has orthonormal columns, project onto its [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column space]]
> ###### Solution
>
> from the [[Projection／Idempotent Matrix (Projections onto Subspaces)|projection matrix]] article we learned that the projection matrix 𝑃  onto the column space of matrix 𝐴 is:
> - 𝑃 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>
>
> thus the projection matrix of 𝑄 is:
> - 𝑃 = 𝑄(𝑄<sup>𝑇</sup>𝑄)<sup>-1</sup>𝑄<sup>𝑇</sup>
>
> since the columns of 𝑄 are orthonormal then 𝑄<sup>𝑇</sup>𝑄 = 𝐼:
> - 𝑃 = 𝑄𝑄<sup>𝑇</sup>
> - 𝑃 = 𝐼 <font style="color: rgb(128,128,128);">\# IF 𝑄 is square then 𝑄𝑄<sup>𝑇</sup>= 𝐼</font>
# Further Intuition With Column-Space & Left-Null-Space

> [!expand]- Click here to expand...
> 𝑃 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>
>
> if 𝑏 in [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column-space]] of 𝐴, then 𝑃𝑏 = 𝑏
> - 𝑃𝑏 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>𝑏
> - 𝑃𝑏 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>𝐴𝑥 <font style="color: rgb(128,128,128);">\# since 𝑏 is in the column space of 𝐴 then 𝑏=𝐴𝑥</font>
> - 𝑃𝑏 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>(𝐴<sup>𝑇</sup>𝐴)𝑥
> - 𝑃𝑏 = 𝐴𝑥
> - 𝑃𝑏 = 𝑏
>
> if 𝑏 in [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|null-space]] of 𝐴<sup>𝑇</sup>(i.e. [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|left-null-space]] of 𝐴), then 𝑃𝑏 = 0
> - 𝑃𝑏 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>𝐴<sup>𝑇</sup>𝑏
> - 𝑃𝑏 = 𝐴(𝐴<sup>𝑇</sup>𝐴)<sup>-1</sup>0
> - 𝑃𝑏 = 0
>
> ![[Projection／Idempotent Matrix (Projections onto Subspaces)/projection-matrices-intuition-column-space-left-null-space.png|400]]
>
> vectors 𝑝 & 𝑒 are orthogonal/perpendicular
> - 𝑝 = 𝑃𝑏 <font style="color: rgb(128,128,128);">\# 𝑃 projects onto column-space of 𝐴</font>
> - 𝑒 = (𝐼-𝑃)𝑏 <font style="color: rgb(128,128,128);">\# 𝐼-𝑃 projects 𝑏 onto space perpendicular to column-space of 𝐴 (i.e. null-space of 𝐴<sup>𝑇</sup>)</font>
>
> <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">also</font></font>
> - 𝑏 = 𝑝 + 𝑒
# Resources

![](https://www.youtube.com/watch?v=Y_Ac6KiQ1t0)
