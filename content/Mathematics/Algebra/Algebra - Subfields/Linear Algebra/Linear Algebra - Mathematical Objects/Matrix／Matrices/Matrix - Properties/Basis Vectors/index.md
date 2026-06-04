---
title: "Basis Vectors"
created: 2021-09-13T05:25:52.156-05:00
modified: 2024-01-12T15:17:42.208-06:00
parent: "[[Matrix - Properties]]"
children:
  - "[[Dual Basis - Dual Basis Covectors／Vectors - Dual Sets - Reciprocal Basis]]"
  - "[[Eigenbasis - Eigenvector Basis]]"
  - "[[Hamel Basis Vectors - Basis for Infinite-Dimensional Vector Spaces]]"
  - "[[Linear Combinations]]"
  - "[[Linear Independence - Linearly Independent - Linear Dependence - Linearly Dependent]]"
  - "[[Linear Span／Hull - Span／Spans - Spanning Set]]"
  - "[[Orthogonal Basis Vectors]]"
  - "[[Orthonormal Basis Vectors]]"
  - "[[Standard Basis Vectors]]"
---
###### Basis Vectors
````excerpt
- a set 𝐵 of vectors in a [[Vector Spaces - Linear Spaces|vector space 𝑉]] is called a [[Mathematical Space (Basis)|basis]] if it is a [[Linear Independence - Linearly Independent - Linear Dependence - Linearly Dependent|linearly independent]] [[Linear Span／Hull - Span／Spans - Spanning Set|spanning set]], i.e.:
	1. every element of 𝐵 is [[Linear Independence - Linearly Independent - Linear Dependence - Linearly Dependent|linearly independent]]
	2. every element of 𝑉 is a FINITE [[Linear Combinations|linear combination]] of the elements of 𝐵 (i.e. 𝐵 [[Linear Span／Hull - Span／Spans - Spanning Set|spans]] 𝑉)
- [[Vector Spaces - Linear Spaces|vector space]] is to the <em>basis vector</em> as [[Function Spaces|function space]] is to the [[Basis Functions|basis function]]
- is a (0,1)-[[Tensors|tensor]] (except for the [[Dual Basis - Dual Basis Covectors／Vectors - Dual Sets - Reciprocal Basis|dual basis covectors]])
````
^excerpt

# Basis Vectors - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Standard Basis Vectors]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Standard Basis Vectors#^excerpt]]"
    ],
    [
      {
        "content": "[[Eigenbasis - Eigenvector Basis|Eigenbasis]]\n[[Eigenbasis - Eigenvector Basis|Eigenvector Basis]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Eigenbasis - Eigenvector Basis#^excerpt]]"
    ],
    [
      {
        "content": "[[Orthogonal Basis Vectors]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Orthogonal Basis Vectors#^excerpt]]"
    ],
    [
      {
        "content": "[[Orthonormal Basis Vectors]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Orthonormal Basis Vectors#^excerpt]]"
    ],
    [
      {
        "content": "[[Dual Basis - Dual Basis Covectors／Vectors - Dual Sets - Reciprocal Basis|Dual Basis]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "> [!expand]- Click here to expand...\n> ![[Dual Basis - Dual Basis Covectors／Vectors - Dual Sets - Reciprocal Basis#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Basis Vectors - Linear Transformation Intuition

> [!expand-ui]- Understanding how a linear transformation 𝑇 transforms standard basis vectors 𝑖 and 𝑗
> For example, given the following [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]] 𝑇:
>
> ![[Basis Vectors/change-of-basis-matrix.png|70]]
>
> and also the following basis vectors 𝑖 and 𝑗 (in this example 𝑖 and 𝑗 are the [[Standard Basis Vectors|standard basis vectors]]):
>
> ![[Basis Vectors/change-of-basis-1.png|60]]
>
> Taking the transformation of 𝑇 on 𝑖 and 𝑗:
>
> ![[Basis Vectors/change-of-basis-2.png|150]]
>
> This is what it looks like graphically
>
> ![[Basis Vectors/change-of-basis-3.png|301]]

> [!expand-ui]- Understanding how a linear transformation 𝑇 transforms an arbitrary vector 𝑣, where 𝑣 is expressed by basis vectors 𝑖 and 𝑗
> For example, given the following linear transformation 𝑇, basis vectors 𝑖 and 𝑗, and vector 𝑣:
>
> ![[Basis Vectors/change-of-basis-matrix.png|70]]
>
> ![[Basis Vectors/change-of-basis-1.png|60]]
>
> ![[Basis Vectors/change-of-basis-4.png|60]]
>
> Vector 𝑣 can be decomposed into its constituent basis vectors:
>
> ![[Basis Vectors/change-of-basis-5.png|200]]
>
> Taking the transformation of 𝑇 on 𝑣 is the same as taking the transformations of the basis vectors 𝑖 and 𝑗 individually:
>
> ![[Basis Vectors/change-of-basis-6.png|200]]
>
> This is what it looks like geometrically
>
> ![[Basis Vectors/change-of-basis-7.png|301]]
# Basis Vectors - Change of Basis

see: [[Change of Basis Matrix - Transition Matrix]]
