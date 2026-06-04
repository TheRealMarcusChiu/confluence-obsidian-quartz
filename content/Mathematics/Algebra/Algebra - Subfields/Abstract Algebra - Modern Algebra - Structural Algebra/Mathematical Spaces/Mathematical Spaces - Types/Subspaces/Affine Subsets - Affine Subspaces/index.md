---
title: "Affine Subsets - Affine Subspaces"
created: 2023-08-04T20:37:52.278-05:00
modified: 2023-08-07T17:22:52.617-05:00
parent: "[[Subspaces]]"
children: []
---
###### Affine Subsets
- is the sum of a vector and a linear subspace
- given a [[Vector Spaces - Linear Spaces|vector space]] 𝑉, a [[Linear Subspaces - Vector Subspaces|linear subspace]] 𝑆 of 𝑉, and a [[Vectors|vector]] 𝑣∊𝑉; an <em>affine subset</em> of 𝑉 is defined as: 𝑣 + 𝑆
- affine subset 𝑣 + 𝑆 is a translation of 𝑆 by 𝑣
- affine subsets are related to [[Cosets|cosets]]
- no <em>affine subsets</em> are linear subspaces unless 𝑣 is the zero vector

###### Affine Subspaces
- is an <em>affine subset</em> where 𝑣 is the zero vector
- all <em>affine subspaces</em> are [[Linear Subspaces - Vector Subspaces|linear subspaces]]

# Affine Subsets - Properties

```merge-table
{
  "rows": [
    [
      "For 𝑣∊𝑉 and 𝑆 a subspace of 𝑉, the <strong>affine subset</strong> 𝑣+𝑆 is parallel to 𝑆\n\n![[Affine Subsets - Affine Subspaces/coset.png|229x250]]\n[coset.drawio](http://confluence.marcuschiu.com/download/attachments/57082867/coset.drawio?version=1&modificationDate=1691202370402&api=v2) (affine subsets ≅ coset)",
      "###### Two affine subsets parallel to 𝑆 are equal or disjoint\nSuppose 𝑆 is a [[Linear Subspaces - Vector Subspaces|subspace]] of 𝑉 and 𝑣,𝑤∊𝑉. Then the following are equivalent:\n- 𝑣 - 𝑤 ∊ 𝑆\n- 𝑣 + 𝑆 = 𝑤 + 𝑆\n- (𝑣 + 𝑆) ∩ (𝑤 + 𝑆) ≠ ⦰"
    ]
  ]
}
```
