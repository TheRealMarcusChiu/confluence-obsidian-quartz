---
title: "Change of Basis Matrix - Transition Matrix"
created: 2023-03-19T13:02:24.934-05:00
modified: 2023-06-08T22:59:54.963-05:00
parent: "[[Matrix - Properties]]"
children: []
---
###### Change of Basis Matrix - Transition Matrix
````excerpt
- <strong>change of basis</strong> consists of converting every assertion expressed in terms of coordinates relative to one basis into an assertion expressed in terms of coordinates relative to the other basis
- <strong>change of basis matrix</strong> is the matrix whose columns are the coordinate vectors of the new [[Basis Vectors|basis vectors]] on the old basis
````
^excerpt

# Change of Basis - Intuition
###### Understanding how a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] 𝑇 transforms standard [[Basis Vectors|basis vectors]] 𝑖 and 𝑗.

> [!expand]- Click here to expand...
> For example, given the following linear transformation 𝑇:
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-matrix.png|70]]
>
> and also the following basis vectors 𝑖 and 𝑗 (in this example 𝑖 and 𝑗 are the [[Standard Basis Vectors|standard basis]] vectors):
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-1.png|60]]
>
> Taking the transformation of 𝑇 on 𝑖 and 𝑗:
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-2.png|150]]
>
> This is what it looks like graphically
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-3.png|301]]
###### Understanding how a linear transformation 𝑇 transforms an arbitrary vector 𝑣, where 𝑣 is expressed by basis vectors 𝑖 and 𝑗

> [!expand]- Click here to expand...
> For example, given the following linear transformation 𝑇, basis vectors 𝑖 and 𝑗, and vector 𝑣:
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-matrix.png|70]]
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-1.png|60]]
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-4.png|60]]
>
> Vector 𝑣 can be decomposed into its constituent [[Basis Vectors|basis vectors]]:
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-5.png|200]]
>
> Taking the transformation of 𝑇 on 𝑣 is the same as taking the transformations of the basis vectors 𝑖 and 𝑗 individually:
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-6.png|200]]
>
> This is what it looks like geometrically
>
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-7.png|301]]
# Change of Basis Matrix - Intuition
###### A Vector Expressed in a Different Basis

![](https://www.youtube.com/watch?v=P2LTAUO1TdA&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab&index=14)

> [!expand]- Click here to expand...
> Say we have the following basis vectors 𝑖 and 𝑗 defined as:
>
> > [!indent]
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-9.png|60]]
>
> Given a vector 𝑣 expressed under those basis vectors, what would that vector be when expressed under the standard basis vectors?
>
> First, take the basis vectors 𝑖 and 𝑗 as columns to form matrix 𝐶 like so:
>
> > [!indent]
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-8.png|80]]
>
> Then apply the transformation 𝐶 onto vector 𝑣 like so:
>
> > [!indent]
> 𝐶𝑣
>
> Given a vector expressed under the [[Standard Basis Vectors|standard basis]] vectors, what would that vector be when expressed under the basis vectors 𝑖 and 𝑗?
>
> > [!indent]
> 𝐶<sup>-1</sup>𝑣
###### A Matrix Transformation Expressed in a Different Basis

> [!expand]- Click here to expand...
> Say we have a transformation matrix 𝑇 expressed under the [[Standard Basis Vectors|standard basis]] vectors. How would we describe 𝑇 in a different set of basis vectors 𝑖 and 𝑗?
>
> Say the following basis vectors 𝑖 and 𝑗 are defined as:
>
> > [!indent]
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-9.png|60]]
>
> Thus, the change of basis matrix 𝐶 is defined as:
>
> > [!indent]
> ![[Change of Basis Matrix - Transition Matrix/change-of-basis-8.png|80]]
>
> The transformation matrix 𝑇 expressed in basis 𝑖 and 𝑗 is defined as:
>
> > [!indent]
> 𝐶<sup>-1</sup>𝑇𝐶
>
> 𝐶<sup>-1</sup>𝑇𝐶 can be thought of as:
> - 𝐶 transforms a vector expressed from basis 𝑖 and 𝑗 to the standard basis
> - 𝑇 transforms a vector expressed in the standard basis
> - 𝐶<sup>-1</sup> transforms a vector expressed from the standard basis to basis 𝑖 and 𝑗
# Change of Basis Matrix - Use Cases
- [[Similar Matrix]]
- [[Eigen Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Diagonalizable／Non-Defective Matrix - Non-Diagonalizable／Defective Matrix|Eigen Decomposition/Factorization - Diagonalization/Diagonalizing/Diagonalize - Diagonalizable/Non-Defective Matrix - Non-Diagonalizable/Defective Matrix]]
