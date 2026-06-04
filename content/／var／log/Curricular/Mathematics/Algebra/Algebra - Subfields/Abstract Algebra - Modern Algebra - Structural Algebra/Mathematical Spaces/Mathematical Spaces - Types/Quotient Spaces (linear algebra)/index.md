---
title: "Quotient Spaces (linear algebra)"
created: 2023-08-04T12:56:50.198-05:00
modified: 2023-08-07T20:29:04.840-05:00
parent: "[[Mathematical Spaces - Types]]"
children: []
---
###### Quotient Space - 𝑉/𝑆
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a type of [[Vector Spaces - Linear Spaces|vector space]]
- the <strong>quotient</strong> of a [[Vector Spaces - Linear Spaces|vector space]] 𝑉 by a [[Linear Subspaces - Vector Subspaces|subspace]] 𝑆 is called a <strong>quotient space</strong> and is denoted 𝑉/𝑆 (read as "𝑉 mod 𝑆" or "𝑉 by 𝑆")
- the <strong>quotient space</strong> 𝑉/𝑆 is the set of all [[Affine Subsets - Affine Subspaces|affine subsets]] of 𝑉 that are parallel to 𝑆 where 𝑆 is a subspace of 𝑉
- thus any vector in 𝑆 is equal to zero in <strong>quotient space</strong> 𝑉/𝑆
````
^excerpt

# Quotient Space - Definition
Let:
- 𝑉 be a vector space over a field 𝐹
- 𝑆 be a subspace of 𝑉

We define an equivalence relation∼ on 𝑉 by stating that 𝑥∼𝑦 iff 𝑥−𝑦 ∈ 𝑆. That is, 𝑥 is related to 𝑦 if one can be obtained from the other by adding an element of 𝑆. From this definition, one can deduce that any element of 𝑆 is related to the zero vector; more precisely, all the vectors in 𝑆 get mapped into the [equivalence class](https://en.wikipedia.org/wiki/Equivalence_class) of the zero vector.

The equivalence class —or, in this case, the [[Cosets|coset]]— of 𝑥 is often denoted as \[𝑥\] and is defined as:
- \[𝑥\] = 𝑥 + 𝑆
- \[𝑥\] = {𝑥+𝑠 : 𝑠∊𝑆}

The quotient space 𝑉/𝑆 is then often defined as 𝑉/\~, the set of all equivalence classes induced by \~ on 𝑉:
- 𝑉/\~ = 𝑉/𝑆 = {\[𝑥\] : 𝑥∊𝑉}
- 𝑉/\~ = 𝑉/𝑆 = {𝑥 + 𝑆 : 𝑥∊𝑉}

Scalar multiplication and addition are defined on the equivalence classes by:

```merge-table
{
  "rows": [
    [
      {
        "content": "Syntax #1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Syntax #2",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- \\[𝑣\\] + \\[𝑤\\] = \\[𝑣+𝑤\\]\n- 𝛼\\[𝑣\\] = \\[𝛼𝑣\\]\n\nFor 𝑣,𝑤∊𝑉 and 𝛼∊𝐹",
      "- (𝑣 + 𝑆) + (𝑤 + 𝑆) = (𝑣 + 𝑤) + 𝑆\n- 𝛼(𝑣 + 𝑆) = 𝛼𝑣 + 𝑆\n\nFor 𝑣,𝑤∊𝑉 and 𝛼∊𝐹"
    ],
    [
      {
        "content": "Thus the quotient space 𝑉/𝑆 is a vector space",
        "colspan": 2
      },
      null
    ]
  ]
}
```

These operations turn the quotient space 𝑉/𝑆 into a vector space over 𝐹 with 𝑁 being the zero class (\[0\] = { 0+𝑠 : 𝑠∊𝑆}).
- i.e. the "zero element" of 𝑉/𝑆 is \[0\] = { 0+𝑠 : 𝑠∊𝑆}

The mapping that associates 𝑣∊𝑉 to the equivalence class \[𝑣\] is known as the <strong>quotient map</strong> 𝜋: 𝑉 → 𝑉/𝑆 defined by:
- 𝜋(𝑣) =  𝑣 + 𝑆

The quotient map 𝜋 is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear map]].

Alternatively phrased, the <em>quotient space</em> 𝑉/𝑆 is the set of all [[Affine Subsets - Affine Subspaces|affine subsets]] of 𝑉 which are parallel to 𝑆

Suppose 𝑆 is a [[Linear Subspaces - Vector Subspaces|subspace]] of 𝑉 and 𝑣,𝑤∊𝑉. Then the following are equivalent:
- 𝑣 - 𝑤 ∊ 𝑆
- 𝑣 + 𝑆 = 𝑤 + 𝑆
- (𝑣 + 𝑆) ∩ (𝑤 + 𝑆) ≠ ⦰

# Quotient Space - Examples

> [!expand-ui]- Lines of a Cartesian Plane
> Let:
> - 𝑉 = ℝ<sup>2</sup>
> - 𝑆 be a LINE through the origin in 𝑉
>
> Then:
> - the <strong>quotient space</strong> 𝑉/𝑆 is the space/set of all lines in 𝑉 that are parallel to 𝑆
>
> Note that any point of a line will satisfy the equivalence relation because their difference vectors belong to 𝑆

> [!expand-ui]- Subspaces of Cartesian Space
> Let:
> - 𝑉 = ℝ<sup>𝑛</sup>
> - 𝑆 be a [[Linear Subspaces - Vector Subspaces|subspace]] spanned by the first 𝑚 [[Standard Basis Vectors|standard basis vectors]]
> 	- 𝑆 identified as ℝ<sup>𝑚</sup>, consisting of all 𝑛-tuples such that the last 𝑛-𝑚 entries are zero: (𝑣<sub>1</sub>, ..., 𝑣<sub>𝑚</sub>, 0, ..., 0)
>
> Then:
> - two vectors in ℝ<sup>𝑛</sup>are in the same equivalence class modulo the subspace 𝑆 if and only if they are identical in the last 𝑛-𝑚 coordinates.
> - the <strong>quotient space</strong> ℝ<sup>𝑛</sup>/ℝ<sup>𝑚</sup> is [[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)|isomorphic]] to ℝ<sup>𝑛-𝑚</sup>

> [!expand-ui]- General Subspaces
> More generally, if 𝑉 is an (internal) direct sum of subspaces 𝑈 and 𝑊:
> - 𝑉 = 𝑈 ⊕ 𝑊
>
> then the <strong>quotient space</strong> 𝑉/𝑈 is naturally isomorphic to 𝑊
# Quotient Space - Dimension

Suppose 𝑉 is finite-dimensional and 𝑆 is a subspace of 𝑉. Then:
- 𝑑𝑖𝑚(𝑉/𝑆) = 𝑑𝑖𝑚(𝑉) - 𝑑𝑖𝑚(𝑆)

> [!expand]- Click here to expand...
> - 𝑑𝑖𝑚(𝑉) = 𝑑𝑖𝑚(𝑛𝑢𝑙𝑙-𝑠𝑝𝑎𝑐𝑒 of 𝜋) + 𝑑𝑖𝑚(𝑟𝑎𝑛𝑔𝑒 of 𝜋) <font style="color: rgb(122,134,154);">\# fundamental theorem of linear algebra</font>
> - 𝑑𝑖𝑚(𝑉) = 𝑑𝑖𝑚(𝑆) + 𝑑𝑖𝑚(𝑉/𝑆)
# Quotient Space - Induced Maps

Suppose 𝑇 is a linear map (i.e. 𝑇∊𝐿(𝑉,𝑊)).

The induced map 𝑇˜: 𝑉/(𝑛𝑢𝑙𝑙 𝑇) → 𝑊 is defined as:
- 𝑇˜(𝑣 + 𝑛𝑢𝑙𝑙 𝑇) = 𝑇𝑣

###### Induced Map Properties

Suppose 𝑇∊𝐿(𝑉,𝑊). Then:
1. 𝑇˜ is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear map]] from 𝑉/(𝑛𝑢𝑙𝑙 𝑇) to 𝑊
2. 𝑇˜ is [[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence|injective]] (i.e. every element in the codomain is paired with at most one element in the domain)
3. 𝑟𝑎𝑛𝑔𝑒 𝑇˜ = 𝑟𝑎𝑛𝑔𝑒 𝑇
4. 𝑉/(𝑛𝑢𝑙𝑙 𝑇) is [[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)|isomorphic]] to 𝑟𝑎𝑛𝑔𝑒 𝑇 (true because the third statement and that 𝑇˜ is both [[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence|injective and surjective]], thus an isomorphism)

# Resources
- [YouTube's Sheldon Axler](https://www.youtube.com/watch?v=cbcgfl-FYuQ)
- [https://en.wikipedia.org/wiki/Quotient_space_(linear_algebra)](https://en.wikipedia.org/wiki/Quotient_space_(linear_algebra))
