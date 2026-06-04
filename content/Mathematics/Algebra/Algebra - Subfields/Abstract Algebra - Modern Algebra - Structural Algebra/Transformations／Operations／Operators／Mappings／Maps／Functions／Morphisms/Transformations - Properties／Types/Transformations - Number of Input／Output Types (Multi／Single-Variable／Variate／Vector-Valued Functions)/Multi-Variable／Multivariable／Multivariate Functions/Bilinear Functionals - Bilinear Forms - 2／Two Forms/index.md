---
title: "Bilinear Functionals - Bilinear Forms - 2／Two Forms"
created: 2023-06-28T13:08:21.883-05:00
modified: 2023-12-15T20:51:13.208-06:00
parent: "[[Multi-Variable／Multivariable／Multivariate Functions]]"
children:
  - "[[Degenerate Bilinear Functionals - Degenerate Bilinear Forms]]"
  - "[[Non-Degenerate Bilinear Functionals - Non-Degenerate Bilinear Forms]]"
---
###### Bilinear Functionals - Bilinear Forms - 2/Two Forms (𝐵: 𝑉⨯𝑉→𝐹)
````excerpt
- is a [[Bilinear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)|bilinear transformation (𝐵)]] that combines two elements from the same [[Vector Spaces - Linear Spaces|vector space (𝑉, 𝐹)]] and yields an element from its [[Scalar-Valued Functions - Scalar Fields|field of scalars (𝐹)]]
- denoted as:
	- 𝐵: 𝑉 ⨯ 𝑉 → 𝐹
	- 𝑓(𝑣,𝑢) or 𝐵(𝑣,𝑢) where 𝑣,𝑢∊𝑉
````
^excerpt

# Bilinear Functionals - Definition

Given a [[Vector Spaces - Linear Spaces|vector space]] 𝑉 over a [[Fields (Algebraic Structure) - Field Theory|field 𝐹]]. A <em>bilinear functional</em> is a [function](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1022702):
- 𝐵: 𝑉⨯𝑉→𝐹

such that:
- for all 𝑤∊𝑉, the map <font style="color: rgb(122,134,154);">𝐵<sub>𝑤</sub>: 𝑣 ↦ 𝐵(𝑣,𝑤)</font> is a [[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|linear functional]] from 𝑉 to 𝐹
- for all 𝑣∊𝑉, the map <font style="color: rgb(122,134,154);">𝐵<sub>𝑣</sub>: 𝑤 ↦ 𝐵(𝑣,𝑤)</font> is a [[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|linear functional]] from 𝑉 to 𝐹

In other words, 𝐵: 𝑉⨯𝑉→𝐹 that is linear wrt each argument separately:
- 𝐵(𝑣+𝑢,𝑤) = 𝐵(𝑣,𝑤) + 𝐵(𝑢,𝑤)
- 𝐵(𝑣,𝑢+𝑤) = 𝐵(𝑣,𝑢) + 𝐵(𝑣,𝑤)
- 𝐵(𝜆𝑣,𝑣) = 𝐵(𝑢,𝑣𝜆) = 𝜆𝐵(𝑢,𝑣)

# Bilinear Functionals - Degenerate vs Non-Degenerate

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Degenerate Bilinear Functionals - Degenerate Bilinear Forms|Degenerate Bilinear Functionals]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Degenerate Bilinear Functionals - Degenerate Bilinear Forms#^excerpt]]"
    ],
    [
      {
        "content": "[[Non-Degenerate Bilinear Functionals - Non-Degenerate Bilinear Forms|Non-Degenerate Bilinear Functionals]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[Non-Degenerate Bilinear Functionals - Non-Degenerate Bilinear Forms#^excerpt]]"
    ]
  ]
}
```
# Bilinear Functionals - Examples
- [[Quadratic Forms]]
- [[Metric Tensors (Metrics)|Metric Tensors]]
- [[Inner Products]]
	- [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|Dot Product]]

# Bilinear Functionals - Properties
- [[Orthogonal／Orthogonality - Orthogonal Sets - Orthogonal Complement|Orthogonal/Orthogonality]] - if 𝐵(𝑥,𝑦) = 0, then 𝑥 and 𝑦 are orthogonal

# Resources
- [https://en.wikipedia.org/wiki/Bilinear_form](https://en.wikipedia.org/wiki/Bilinear_form)
