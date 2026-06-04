---
title: "Bounded／Unbounded Linear Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)"
created: 2023-06-22T19:12:59.483-05:00
modified: 2023-07-28T12:59:47.866-05:00
parent: "[[Linear Transformation - Properties]]"
children: []
---
###### Bounded/Unbounded Linear Operator (Transformations/Operations/Operators/Mappings/Maps/Functions)
````excerpt
- a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation 𝐿]] between [[Topological Vector Spaces (TVS) - Linear Topological Spaces|topological vector spaces (TVS)]] 𝑋 and 𝑌 is <strong><em>bounded</em></strong> if whenever 𝐵⊆𝑋 is [[Mathematical Space (Bounded Sets - Unbounded Sets)|bounded]] in 𝑋 then 𝐿(𝐵) is bounded in 𝑌
- a linear transformation 𝐿 between [[Normed Vector Spaces - Normed Spaces|normed vector spaces]] (a special type of TVS) 𝑋 and 𝑌 is <strong><em>bounded</em></strong> if and only if there exists some [[Real Numbers System|real number]] 𝛼\>0 such that for all 𝑥∊𝑋:
	- ||𝐿𝑥||<sub>𝑌</sub> ≤ 𝛼·||𝑥||<sub>𝑋</sub>
	- the smallest such 𝛼 is called the [[Operator Norm|operator norm (||·||𝑜𝑝)]] of 𝐿 denoted by ||𝐿||<sub>𝑜𝑝</sub>
	- given a linear transformation 𝐿 between two [[Normed Vector Spaces - Normed Spaces|normed spaces]] then: [[Bounded Linear Operator ↔ Continuous Linear Operator ： Between Normed Spaces|𝐿 is bounded ↔ 𝐿 is continuous]]
- every linear transformation 𝐿 between [[Finite-Dimensional Vector Spaces|finite dimensional vector spaces]] is <strong>bounded</strong>

> [!info]
> outside of [[Functional Analysis|functional analysis]], when a function 𝑓: 𝑋→𝑌 is called "bounded" then this usually means that its [[Functions (Domain - Codomain - Preimage - Image - Range)|image]] 𝑓(𝑋) is a bounded subset of its [[Functions (Domain - Codomain - Preimage - Image - Range)|codomain]]. A linear transformation has this property if and only if it is identically 0. Consequently, in functional analysis, when a linear transformation is called "bounded" then it is never meant in this abstract sense (of having a bounded image)
````
^excerpt

# Bounded Linear Operator - Examples

> [!expand-ui]- The integral ∫𝑓(𝑥)·𝑑𝑥 from 0 to 𝑡 defines a linear transformation on the space of bounded and continuous function 𝑓: [0,1] → ℝ
> TODO

> [!expand-ui]- Every linear transformation 𝐿 between finite dimensional vector spaces is bounded
> Yes, every operator between [[Finite-Dimensional Vector Spaces|finite dimensional vector spaces]] (which includes all finite matrices) is <strong><em>bounded</em></strong>. If the norm taken on the underlying spaces ℝ<sup>𝑛</sup> and ℝ<sup>𝑚</sup>
>  is the usual [[L2／Euclidean Norm|Euclidean norm]], then the induced [[Operator Norm|operator norm]] on the matrix will be precisely the largest [[Singular Values (s-numbers)|singular value]].
>
> In particular, we have$\left(\sup_{\|x\|=1} \|Ax\|\right)^2= \sup_{\|x\|=1} (Ax)^T(Ax)= \sup_{\|x\|=1} x^T(A^TA)x$
>
> and by the Rayleigh Ritz theorem, this coincides with 𝜎<sub>1</sub><sup>2</sup>.
> ## Examples
>
> > [!expand-ui]- The real-valued function 𝑓(𝑥) = 2𝑥
> > Let 𝑇𝑥 = 2𝑥
> >
> > 𝑇 is <em>bounded</em> if and only if there exists some real number 𝛼\>0 such that for all 𝑥:
> > - ||𝑇𝑥|| ≤ 𝛼·||𝑥||
> > - ||2𝑥|| ≤ 𝛼·||𝑥||
> > - 2·||𝑥|| ≤ 𝛼·||𝑥||
> > - 2 ≤ 𝛼
>
> > [!expand-ui]- Any finite 𝑚⨯𝑛 matrix 𝐴
> > Let 𝐴<sub>𝑚,𝑛</sub> be a finite [[Matrix／Matrices|matrix]] as defined below:
> > - $A_{m,n} = \begin{pmatrix} a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\ a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\ \vdots  & \vdots  & \ddots & \vdots  \\ a_{m,1} & a_{m,2} & \cdots & a_{m,n} \end{pmatrix}$
> >
> > TODO
# Bounded Linear Operator - Non-Examples Unbounded

> [!expand-ui]- The derivative 𝛿/𝛿𝑥 in general is not a bounded operator
> Consider the transformation 𝑇 that maps any function 𝑓 to its derivative 𝑓'
>
> Consider a sequence of functions:
> - 𝑓<sub>𝜔</sub>(𝑥) = 𝑠𝑖𝑛(𝜔·𝑥)
> - 𝑓<sub>𝜔</sub>'(𝑥) = 𝜔·𝑐𝑜𝑠(𝜔·𝑥)
>
> where 𝜔 → ∞
>
> The [[L∞infinity／Max／Chebychev／Tchebychev Norm|max norm ||·||∞]] of 𝑓 is:
> - ||𝑓<sub>𝜔</sub>||<sub>∞</sub> = 1
>
> The max norm of 𝑇𝑓 is:
> - ||𝑇𝑓<sub>𝜔</sub>||<sub>∞</sub> = 𝜔 → ∞
>
> 𝑇 is <em>bounded</em> if and only if there exists some real number 𝛼\>0 such that for all 𝑓<sub>𝜔</sub>:
> - ||𝑇𝑓<sub>𝜔</sub>||<sub>∞</sub> ≤ 𝛼·||𝑓<sub>𝜔</sub>||<sub>∞</sub>
> - ||𝑇𝑓<sub>𝜔</sub>||<sub>∞</sub> ≤ 𝛼·1
> - ∞ ≤ 𝛼
>
> Thus contradiction, there does not exist a real number 𝛼 that is greater than ∞.

> [!expand-ui]- The real-valued function 𝑓(𝑥) = 𝑥²
> Let 𝑇𝑥 = 𝑥<sup>2</sup>
>
> 𝑇 is not a [[Vector Spaces - Linear Spaces|vector space]]
# Bounded Linear Operator - Types
- [[Compact Operator (Transformations／Operations／Operators／Mappings／Maps／Functions)|Compact Operator (Transformations/Operations/Operators/Mappings/Maps/Functions)]]

# Bounded Linear Operator - Other
- [[Bounded Linear Operator ↔ Continuous Linear Operator ： Between Normed Spaces|Bounded Linear Operator ↔ Continuous Linear Operator : Between Normed Spaces]]

# Resources
- [https://en.wikipedia.org/wiki/Bounded_operator](https://en.wikipedia.org/wiki/Bounded_operator)
