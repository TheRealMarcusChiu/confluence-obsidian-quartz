---
title: "Tensor Product"
created: 2023-08-03T14:13:10.243-05:00
modified: 2026-05-23T11:12:56.142-05:00
parent: "[[Tensor Calculus - Tensor Analysis - Ricci Calculus]]"
children: []
---
###### Tensor Product (·⊗·, ··)
````excerpt
- vectors in [[Tensor Product Spaces|tensor product space]] 𝑉⊗𝑊 are sums of 𝑣⊗𝑤 for 𝑣∊𝑉 and 𝑤∊𝑊 that obey:
	- 𝑣⊗𝑤<sub>1</sub> + 𝑣⊗𝑤<sub>2</sub> = 𝑣⊗(𝑤<sub>1</sub> + 𝑤<sub>2</sub>)
	- 𝑣<sub>1</sub>⊗𝑤 + 𝑣<sub>2</sub>⊗𝑤 = (𝑣<sub>1</sub> + 𝑣<sub>2</sub>)⊗𝑤
	- (𝜆𝑣)⊗𝑤 = 𝜆(𝑣⊗𝑤) = 𝑣⊗(𝜆𝑤)
- the <strong>tensor product</strong> 𝑉⊗𝑊 of two [[Vector Spaces - Linear Spaces|vector spaces]] 𝑉 and 𝑊 (over the same [[Fields (Algebraic Structure) - Field Theory|field]]) is a vector space to which is associated a [[Bilinear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)|bilinear map]] 𝑉×𝑊 → 𝑉⊗𝑊 that maps a pair (𝑣,𝑤), 𝑣∈𝑉,𝑤∈𝑊 to an element of 𝑉⊗𝑊 denoted as 𝑣⊗𝑤
- the tensor product of two vector spaces captures the properties of all bilinear maps in the sense that a bilinear map from 𝑉×𝑊 into another vector space 𝑍 factors uniquely through a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear map]] 𝑉⊗𝑊 → 𝑍
- this is rigged so that a linear map 𝑉⊗𝑊→𝑍 is the same as a bilinear map 𝑉⨯𝑊→𝑍:
	- for bilinear map 𝑓: 𝑉⨯𝑊→𝑍
		- 𝑓(𝑣,𝑤<sub>1</sub>+𝑤<sub>2</sub>) = 𝑓(𝑣,𝑤<sub>1</sub>) + 𝑓(𝑣,𝑤<sub>2</sub>) <font style="color: rgb(122,134,154);">\# The simplest bilinear map ℝ×ℝ→ℝ is 𝑓(𝑥,𝑦) = 𝑥𝑦. Thus 𝑓(𝑥,𝑦+𝑧) = 𝑥(𝑦+𝑧) = (𝑥𝑦)+(𝑥𝑧) = 𝑓(𝑥,𝑦)+𝑓(𝑥,𝑧)</font>
	- for the corresponding linear map 𝑓: 𝑉⊗𝑊→𝑍
		- 𝑓(𝑣⊗(𝑤<sub>1</sub>+𝑤<sub>2</sub>)) = 𝑓(𝑣⊗𝑤<sub>1</sub> + 𝑣⊗𝑤<sub>2</sub>)      <font style="color: rgb(122,134,154);">\# The corresponding linear map ℝ⊗ℝ→ℝ is 𝑓(𝑥⊗𝑦) = 𝑥⊗𝑦 = \[𝑥\]⊗\[𝑦\] = \[𝑥\[𝑦\]\] = \[𝑥𝑦\] = 𝑥𝑦</font>
		- 𝑓(𝑣⊗(𝑤<sub>1</sub>+𝑤<sub>2</sub>)) = 𝑓(𝑣⊗𝑤<sub>1</sub>) + 𝑓(𝑣⊗𝑤<sub>2</sub>) <font style="color: rgb(122,134,154);">\# Thus 𝑓(𝑥⊗(𝑦+𝑧)) = 𝑥⊗(𝑦+𝑧) = \[𝑥\]⊗\[𝑦+𝑧\] = \[𝑥\[𝑦+𝑧\]\] = \[𝑥𝑦+𝑥𝑧\] = \[𝑥𝑦\] + \[𝑥𝑧\] = 𝑓(𝑥⊗𝑦)+𝑓(𝑥⊗𝑧)</font>
- an element of the form 𝑣⊗𝑤 is called the <strong>tensor product</strong> of 𝑣 and 𝑤
- an element of 𝑉⊗𝑊 is a [[Tensors|tensor]]
- the tensor product of two vectors is sometimes called an <em>elementary tensor</em> or a <em>decomposable tensor</em>
	- the elementary tensors span 𝑉⊗𝑊 in the sense that every element of 𝑉⊗𝑊 is a sum of elementary tensors
- if [[Mathematical Space (Basis)|bases]] are given for 𝑉 and 𝑊, a basis of 𝑉⊗𝑊 is formed by all tensor products of a basis element of 𝑉 and a basis element of 𝑊
- is a generalization of the [[Outer Product|outer product]]
````
^excerpt

# Tensor Product - Definition From Bases

Let 𝑉 and 𝑊 be two vector spaces over a field 𝐹, with respective bases 𝐵<sub>𝑉</sub> and 𝐵<sub>𝑊</sub>.

The tensor product of two vectors 𝑣∊𝑉 and 𝑤∊𝑊 is defined from their decomposition on the bases. More precisely, if:
- $v=\sum_{b\in B_V} v_b\,b \in V \quad \text{and} \quad w=\sum_{c\in B_W} w_c\,c \in W$

are vectors decomposed on their respective bases, then the tensor product of 𝑣 and 𝑤 is:
- $\begin{align} v \otimes w &=\left(\sum_{b\in B_V} v_b\,b\right) \otimes \left(\sum_{c\in B_W} w_c\,c\right)\\ &=\sum_{b\in B_V}\sum_{c\in B_W} v_b w_c\, b \otimes c \end{align}$

where:
- the coordinate vector of 𝑣⊗𝑤 is the [[Kronecker Product - Matrix Direct Product|Kronecker product]] of the column-vectors and/or row-vectors of 𝑣 and 𝑤, which results in a block matrix (preferred representation)
- the coordinate vector of 𝑣⊗𝑤 is the [[Outer Product|outer product]] of the coordinate vectors of 𝑣 and 𝑤, which results in a matrix

It is straightforward to verify that the map (𝑣,𝑤) ↦ 𝑣⊗𝑤 is a [[Bilinear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)|bilinear map]] from 𝑉×𝑊 to 𝑉⊗𝑊.
# Tensor Product - Dimension
- dim(𝑉⊗𝑊) = dim(𝑉) \* dim(𝑊)

# Tensor Product - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Tensor Product",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Kronecker Product - Matrix Direct Product|Kronecker Product]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "The <em>tensor product</em> of a vector 𝑣∊𝑉 and a covector 𝛼∊𝑉\\* is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear map]] denoted as 𝑣⊗𝛼",
      "- $v \\otimes 𝛼 = (v^ie_i) \\otimes (𝛼_j𝜀^j)$\n- $v \\otimes v^* = v^i𝛼_j(e_i \\otimes 𝜀^j)$",
      "- $\\begin{bmatrix} v_1 \\\\ v_2 \\\\ \\vdots \\\\ v_m \\end{bmatrix} \\otimes \\begin{bmatrix} 𝛼_1 & 𝛼_2 & \\dots & 𝛼_n \\end{bmatrix} = \\begin{bmatrix} v_1 \\begin{bmatrix} 𝛼_1 & 𝛼_2 & \\dots & 𝛼_n \\end{bmatrix}\\\\ v_2 \\begin{bmatrix} 𝛼_1 & 𝛼_2 & \\dots & 𝛼_n \\end{bmatrix}\\\\ \\vdots \\\\ v_m \\begin{bmatrix} 𝛼_1 & 𝛼_2 & \\dots & 𝛼_n \\end{bmatrix} \\end{bmatrix} = \\begin{bmatrix} \\begin{bmatrix} v_1𝛼_1 & v_1𝛼_2 & \\dots & v_1𝛼_n \\end{bmatrix}\\\\ \\begin{bmatrix} v_2𝛼_1 & v_2𝛼_2 & \\dots & v_2𝛼_n \\end{bmatrix}\\\\ \\vdots \\\\ \\begin{bmatrix} v_m𝛼_1 & v_m𝛼_2 & \\dots & v_m𝛼_n \\end{bmatrix} \\end{bmatrix} = \\begin{bmatrix} v_1𝛼_1 & v_1𝛼_2 & \\dots & v_1𝛼_n \\\\ \\hline v_2𝛼_1 & v_2𝛼_2 & \\dots & v_2𝛼_n \\\\ \\hline \\vdots \\\\ \\hline v_m𝛼_1 & v_m𝛼_2 & \\dots & v_m𝛼_n \\end{bmatrix}$"
    ],
    [
      {
        "content": "The <em>tensor product</em> of a [[Vector Spaces - Linear Spaces|vector space]] 𝑉 and its [[Dual Spaces - Algebraic Dual Spaces - Dual Vector Spaces|dual vector space]] 𝑉* is a [[Tensor Product Spaces|tensor product space]] denoted as 𝑉⊗𝑉\\* where each element in that space is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear map]]",
        "colspan": 3
      },
      null,
      null
    ],
    [
      "The <em>tensor product</em> of two covectors 𝛼∊𝑉* and 𝛽∊𝑊* is a [[Bilinear Functionals - Bilinear Forms - 2／Two Forms|bilinear form]] denoted as 𝛼⊗𝛽",
      "- $𝛼 \\otimes 𝛽 = (𝛼_i𝜀^i) \\otimes (𝛽_j𝜀^j)$\n- $𝛼 \\otimes 𝛽 = 𝛼_i𝛽_j(𝜀^i \\otimes 𝜀^j)$",
      "- $\\begin{bmatrix} 𝛼_1 & \\dots & 𝛼_m \\end{bmatrix} \\otimes \\begin{bmatrix} 𝛽_1 & \\dots & 𝛽_n \\end{bmatrix} = \\begin{bmatrix} 𝛼_1 \\begin{bmatrix} 𝛽_1 & \\dots & 𝛽_n \\end{bmatrix} & \\dots & 𝛼_m \\begin{bmatrix} 𝛽_1 & \\dots & 𝛽_n \\end{bmatrix} \\end{bmatrix}$\n- $\\begin{bmatrix} 𝛼_1 & \\dots & 𝛼_m \\end{bmatrix} \\otimes \\begin{bmatrix} 𝛽_1 & \\dots & 𝛽_n \\end{bmatrix} = \\begin{bmatrix} \\begin{bmatrix} 𝛼_1𝛽_1 & \\dots & 𝛼_1𝛽_n \\end{bmatrix} & \\dots & \\begin{bmatrix} 𝛼_m𝛽_1 & \\dots & 𝛼_m𝛽_n \\end{bmatrix} \\end{bmatrix}$\n- $\\begin{bmatrix} 𝛼_1 & \\dots & 𝛼_m \\end{bmatrix} \\otimes \\begin{bmatrix} 𝛽_1 & \\dots & 𝛽_n \\end{bmatrix} = \\left[\\begin{array}{ccc|c|ccc} 𝛼_1𝛽_1 & \\dots & 𝛼_1𝛽_n & \\dots & 𝛼_m𝛽_1 & \\dots & 𝛼_m𝛽_n \\end{array}\\right]$"
    ],
    [
      {
        "content": "The <em>tensor product</em> of two [[Dual Spaces - Algebraic Dual Spaces - Dual Vector Spaces|dual vector spaces]] 𝑉\\* and 𝑊\\* is a tensor product space denoted as 𝑉\\*⊗𝑊\\* where each element in that space is a [[Bilinear Functionals - Bilinear Forms - 2／Two Forms|bilinear form]]",
        "colspan": 3
      },
      null,
      null
    ],
    [
      "The <em>tensor product</em> of two vectors 𝑣∊𝑉 and 𝑤∊𝑊 is a bilinear map denoted as 𝑣⊗𝑤",
      "- $v \\otimes w = (v^ie_i) \\otimes (w^je_j)$\n- $v \\otimes w = v^iw^j (e_i \\otimes e_j)$",
      "- $\\begin{bmatrix} v^1 \\\\ \\vdots \\\\ v^m \\end{bmatrix} \\otimes \\begin{bmatrix} w^1 \\\\ \\vdots \\\\ w^n \\end{bmatrix} = \\begin{bmatrix} v^1 \\begin{bmatrix} w^1 \\\\ \\vdots \\\\ w^n \\end{bmatrix} \\\\ \\vdots \\\\ v^m \\begin{bmatrix} w^1 \\\\ \\vdots \\\\ w^n \\end{bmatrix} \\end{bmatrix} = \\begin{bmatrix} \\begin{bmatrix} v^1w^1 \\\\ \\vdots \\\\ v^1w^n \\end{bmatrix} \\\\ \\vdots \\\\ \\begin{bmatrix} v^mw^1 \\\\ \\vdots \\\\ v^mw^n \\end{bmatrix} \\end{bmatrix} = \\begin{bmatrix} v^1w^1 \\\\ \\vdots \\\\ v^1w^n \\\\ \\hline \\vdots \\\\                     \\hline v^mw^1 \\\\ \\vdots \\\\ v^mw^n \\end{bmatrix}$"
    ],
    [
      {
        "content": "The <em>tensor product</em> of two [[Vector Spaces - Linear Spaces|vector spaces]] 𝑉 and 𝑊 is a [[Tensor Product Spaces|tensor product space]] denoted as 𝑉⊗𝑊 where each element in that space is a bilinear map",
        "colspan": 3
      },
      null,
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources
- [YouTube's Jim Fowler](https://www.youtube.com/watch?v=tpL95Sd7zT0)
- [YouTube's Mu Prime Math](https://www.youtube.com/watch?v=KnSZBjnd_74)
