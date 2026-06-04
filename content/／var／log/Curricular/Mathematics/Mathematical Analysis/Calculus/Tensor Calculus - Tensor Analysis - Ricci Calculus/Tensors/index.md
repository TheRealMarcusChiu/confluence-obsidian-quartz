---
title: "Tensors"
created: 2021-09-13T05:26:04.229-05:00
modified: 2026-05-23T11:26:30.184-05:00
parent: "[[Tensor Calculus - Tensor Analysis - Ricci Calculus]]"
children:
  - "[[Tensor - 1 - How do basis vector components change WRT change of basis？]]"
  - "[[Tensor - 10 - How do Metric Tensor Components Change WRT Change of Basis]]"
  - "[[Tensor - 11 - How do Basis of a Metric Tensor Change WRT Change of Basis]]"
  - "[[Tensor - 12 - Bilinear Forms Introduction]]"
  - "[[Tensor - 13 - How do Bilinear Form Components Change WRT Change of Basis]]"
  - "[[Tensor - 2 - How do vector components change WRT change of basis？]]"
  - "[[Tensor - 3 - Covector Introduction]]"
  - "[[Tensor - 4 - How do covector components change WRT change of basis？]]"
  - "[[Tensor - 5 - How do dual basis covectors change WRT change of basis？]]"
  - "[[Tensor - 6 - Linear Maps Introduction]]"
  - "[[Tensor - 7 - How do Linear Map Components Change WRT Change of Basis？]]"
  - "[[Tensor - 8 - How do basis of a linear transformation change WRT change of basis？]]"
  - "[[Tensor - 9 - Metric Tensor Introduction]]"
---
###### Tensors
````excerpt
- a tensor is an object that is invariant under a change of coordinate/basis and has COMPONENTS that change in a special predictable way under a change of coordinates/basis
- a tensor is a collection of vectors and covectors combined together using the tensor product
- tensors can take several different forms (e.g. [[Scalars|scalars]],[[Vectors|vectors]], [[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|covectors]], [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear maps]], [[Bilinear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)|bilinear maps]], [[Multilinear／Multi-Linear k-Linear Map (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms)|multilinear maps]], etc)
````
^excerpt

# Tensors - Introduction

> [!expand]- Click here to expand...
> ###### 1 - How do basis vector components change WRT change of basis?
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 1 - How do basis vector components change WRT change of basis？#^excerpt]]
> ###### 2 - How do vector components change WRT change of basis?
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 2 - How do vector components change WRT change of basis？#^excerpt]]
> ###### 3 - Covector Introduction
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 3 - Covector Introduction#^excerpt]]
> ###### 4 - How do covector components change WRT change of basis?
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 4 - How do covector components change WRT change of basis？#^excerpt]]
> ###### 5 - How do dual basis covectors change WRT change of basis?
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 5 - How do dual basis covectors change WRT change of basis？#^excerpt]]
> ###### 6 - Linear Maps Introduction
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 6 - Linear Maps Introduction#^excerpt]]
> ###### 7 - How do linear transformations change WRT change of basis?
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 7 - How do Linear Map Components Change WRT Change of Basis？#^excerpt]]
> ###### 8 - How do basis of a linear transformation change WRT change of basis?
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 8 - How do basis of a linear transformation change WRT change of basis？#^excerpt]]
> ###### 9 - Metric Tensor Introduction
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 9 - Metric Tensor Introduction#^excerpt]]
> ###### 10 - How do Metric Tensor Components Change WRT Change of Basis
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 10 - How do Metric Tensor Components Change WRT Change of Basis#^excerpt]]
> ###### 11 - How do Basis of a Metric Tensor Change WRT Change of Basis
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 11 - How do Basis of a Metric Tensor Change WRT Change of Basis#^excerpt]]
> ###### 12 - Bilinear Forms Introduction
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 12 - Bilinear Forms Introduction#^excerpt]]
> ###### 13 - How do Bilinear Form Components Change WRT Change of Basis
>
> > [!expand]- Click here to expand...
> > ![[Tensor - 13 - How do Bilinear Form Components Change WRT Change of Basis#^excerpt]]
# Tensors - Types

(m,n)-tensor
- m = number of contravariant indices (top of 𝑇)
- n = number of covariant indices (bottom of 𝑇)

For example, a (3,3)-tensor 𝑇 is denoted as:
- $T = T_{rst}^{ijk} \;\; \text{  is short for } \;\; T_{rst}^{ijk}e_ie_je_k𝜀^r𝜀^s𝜀^t$
- $T = \tilde{T}_{rst}^{ijk} \;\; \text{  is short for } \;\; \tilde{T}_{rst}^{ijk}ẽ_iẽ_jẽ_k𝜀̃^r𝜀̃^s𝜀̃^t$

How do components of a (3,3)-tensor 𝑇 change WRT change of basis?
- $T = \tilde{T}^{xyz}_{abc} = B_i^x B_j^y B_k^z T_{rst}^{ijk} F_a^r F_b^s F_c^t$
> [!expand]- how it's computed
> Prerequisite knowledge:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "How Basis Vectors 𝑒<sub>𝑗</sub> Change WRT Change of Basis",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "How Dual Basis Covectors 𝜀<sub>𝑖</sub> Change WRT Change of Basis",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- $ẽ_j = F^i_j e_i$\n- $e_j = B^i_j ẽ_i$",
>       "- $𝜀̃^i = B^i_j 𝜀^j$\n- $𝜀^i = F^i_j 𝜀̃^j$"
>     ]
>   ]
> }
> ```
>
> Start with the definition:
> - $T = T_{rst}^{ijk}e_ie_je_k𝜀^r𝜀^s𝜀^t$
>
> Next, transform all the basis vectors and basis covectors individually and resolve:
> - $T = T_{rst}^{ijk}B^x_iẽ_xB^y_jẽ_yB^z_kẽ_z F^r_a𝜀̃^aF^s_b𝜀̃^bF^t_c𝜀̃^c$
> - $T = (B^x_iB^y_jB^z_k  T_{rst}^{ijk}  F^r_aF^s_bF^t_c)  ẽ_xẽ_yẽ_z 𝜀̃^a𝜀̃^b𝜀̃^c$
> - $T = (\tilde{T}^{xyz}_{abc})  ẽ_xẽ_yẽ_z 𝜀̃^a𝜀̃^b𝜀̃^c$
>
> Thus
> - $\tilde{T}^{xyz}_{abc} = B^x_iB^y_jB^z_k  T_{rst}^{ijk}  F^r_aF^s_bF^t_c$
- $T = T^{xyz}_{abc} = F_i^x F_j^y F_k^z \tilde{T}_{rst}^{ijk} B_a^r B_b^s B_c^t$
> [!expand]- how it's computed
> Prerequisite knowledge:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "How Basis Vectors 𝑒<sub>𝑗</sub> Change WRT Change of Basis",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "How Dual Basis Covectors 𝜀<sub>𝑖</sub> Change WRT Change of Basis",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- $ẽ_j = F^i_j e_i$\n- $e_j = B^i_j ẽ_i$",
>       "- $𝜀̃^i = B^i_j 𝜀^j$\n- $𝜀^i = F^i_j 𝜀̃^j$"
>     ]
>   ]
> }
> ```
>
> Start with the definition:
> - $T = \tilde{T}_{rst}^{ijk}ẽ_iẽ_jẽ_k𝜀̃^r𝜀̃^s𝜀̃^t$
>
> Next, transform all the basis vectors and basis covectors individually and resolve:
> - $T = \tilde{T}_{rst}^{ijk}  F^x_ie_xF^y_je_yF^z_ke_z B^r_a𝜀^aB^s_b𝜀^bB^t_c𝜀^c$
> - $T = (F^x_iF^y_jF^z_k  \tilde{T}_{rst}^{ijk}  B^r_aB^s_bB^t_c)  e_xe_ye_z 𝜀^a𝜀^b𝜀^c$
> - $T = (T_{rst}^{ijk})  e_xe_ye_z 𝜀^a𝜀^b𝜀^c$
>
> Thus
> - $T^{xyz}_{abc} = F^x_iF^y_jF^z_k  \tilde{T}_{rst}^{ijk}  B^r_aB^s_bB^t_c$

```merge-table
{
  "rows": [
    [
      {
        "content": "Name",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Tensor Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Longer\nSyntax",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Shorter\nSyntax",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "How Components Change\nWRT Change of Basis",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Is an Element of",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Available\nFunctions",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Additional",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Basis Vectors|basis vectors]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "covariant\n(0,1)-tensor",
        "align": "center"
      },
      {
        "content": "$e_j$",
        "align": "center"
      },
      {
        "content": "$e_j$",
        "align": "center"
      },
      "- $ẽ_j = F^i_j e_i$\n- $e_j = B^i_j ẽ_i$\n- \n> [!expand]- computation steps\n> ![[Tensor - 1 - How do basis vector components change WRT change of basis？#^excerpt]]",
      {
        "content": "$e_j ∊ V$",
        "align": "center"
      },
      "N/A",
      "> [!expand]- Click here to expand...\n> basis vector components are covariant with the change of basis"
    ],
    [
      {
        "content": "[[Vectors|vectors]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "contravariant \n(1,0)-tensor",
        "align": "center"
      },
      {
        "content": "$v^ie_i$",
        "align": "center"
      },
      {
        "content": "$v^i$",
        "align": "center"
      },
      "- $𝑣̃^𝑖 = 𝐵^𝑖_𝑗 𝑣^𝑗$\n- $𝑣^𝑖 = 𝐹^𝑖_𝑗 𝑣̃^𝑗$\n- \n> [!expand]- computation steps\n> ![[Tensor - 2 - How do vector components change WRT change of basis？#^excerpt]]",
      {
        "content": "$v^ie_i ∊ V$",
        "align": "center"
      },
      "> [!expand]- Click here to expand...\n> ```merge-table\n> {\n>   \"rows\": [\n>     [\n>       \"$v^i(𝛼_i) = s = scalar$\",\n>       \"$V^* → ℝ$\"\n>     ]\n>   ]\n> }\n> ```",
      "> [!expand]- Click here to expand...\n> vectors themselves are invariant to the change of basis\n> vector components are contravariant to the change of basis\n> column vectors are coordinate representations of vectors"
    ],
    [
      {
        "content": "[[Dual Basis - Dual Basis Covectors／Vectors - Dual Sets - Reciprocal Basis|dual basis covectors]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "contravariant \n(1,0)-tensor",
        "align": "center"
      },
      {
        "content": "$𝜀^i$",
        "align": "center"
      },
      {
        "content": "$𝜀^i$",
        "align": "center"
      },
      "- $𝜀̃^i = B^i_j 𝜀^j$\n- $𝜀^i = F^i_j 𝜀̃^j$\n- \n> [!expand]- computation steps\n> ![[Tensor - 5 - How do dual basis covectors change WRT change of basis？#^excerpt]]",
      {
        "content": "$𝜀^i ∊ V^*$",
        "align": "center"
      },
      "N/A",
      "> [!expand]- Click here to expand...\n> dual basis covector components are contravariant with the change of basis"
    ],
    [
      {
        "content": "[[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|covectors]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "covariant \n(0,1)-tensor",
        "align": "center"
      },
      {
        "content": "$𝛼_j𝜀^j$",
        "align": "center"
      },
      {
        "content": "$𝛼_j$",
        "align": "center"
      },
      "- $𝛼̃_j = F^i_j 𝛼_i$\n- $𝛼_j = 𝛣^i_j 𝛼̃_i$\n- \n> [!expand]- computation steps\n> ![[Tensor - 4 - How do covector components change WRT change of basis？#^excerpt]]",
      {
        "content": "$𝛼_j𝜀^j ∊ V^*$",
        "align": "center"
      },
      "> [!expand]- Click here to expand...\n> ```merge-table\n> {\n>   \"rows\": [\n>     [\n>       \"$𝛼_j(v^i) = s = scalar$\",\n>       \"$V → ℝ$\"\n>     ]\n>   ]\n> }\n> ```",
      "> [!expand]- Click here to expand...\n> covectors themselves are invariant to the change of basis\n> covector components are covariant to the change of basis\n> row vectors are coordinate representations of covectors"
    ],
    [
      {
        "content": "[[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear maps]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "(1,1)-tensor",
        "align": "center"
      },
      {
        "content": "$L^i_je_i𝜀^j$",
        "align": "center"
      },
      {
        "content": "$L^i_j$",
        "align": "center"
      },
      "- $\\tilde{L}^i_j = B^i_k L^k_l F^l_j$\n- $L^i_j = B^i_k \\tilde{L}^k_l F^l_j$\n- \n> [!expand]- computation steps\n> ![[Tensor - 7 - How do Linear Map Components Change WRT Change of Basis？#^excerpt]]",
      {
        "content": "$L^i_je_i𝜀^j ∊ V\\otimes V^*$",
        "align": "center"
      },
      "> [!expand]- Click here to expand...\n> ```merge-table\n> {\n>   \"rows\": [\n>     [\n>       \"$L^i_j(v^j) = w^i = vector$\",\n>       \"$V → V$\"\n>     ],\n>     [\n>       \"$L^i_j(𝛼_j) = 𝛽_j = covector$\",\n>       \"$V^* → V^*$\"\n>     ],\n>     [\n>       \"$L^i_j(v^i,𝛼_j) = s = scalar$\",\n>       \"$V⨯V^* → ℝ$\"\n>     ],\n>     [\n>       \"$L^i_j(𝛼_j,v^i) = s = scalar$\",\n>       \"$V^*⨯V → ℝ$\"\n>     ]\n>   ]\n> }\n> ```",
      "> [!expand]- Click here to expand...\n> linear transformations themselves are invariant to the change of basis\n> linear transformation components are both contravariant and covariant to the change of basis\n> matrices are coordinate representations of linear maps"
    ],
    [
      {
        "content": "[[Bilinear Functionals - Bilinear Forms - 2／Two Forms|bilinear forms]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "(0,2)-tensor",
        "align": "center"
      },
      {
        "content": "$\\mathcal{B}_{ij}𝜀^i𝜀^j$",
        "align": "center"
      },
      {
        "content": "$\\mathcal{B}_{ij}$",
        "align": "center"
      },
      "- $\\tilde{\\mathcal{B}}_{ij} = F^k_i F^l_j \\mathcal{B}_{ij}$\n- $\\mathcal{B}_{ij} = B^k_i B^l_j \\tilde{\\mathcal{B}}_{ij}$\n- \n> [!expand]- computation steps\n> TODO",
      {
        "content": "$\\mathcal{B}_{ij}𝜀^i𝜀^j ∊ V^* \\otimes V^*$",
        "align": "center"
      },
      "> [!expand]- Click here to expand...\n> ```merge-table\n> {\n>   \"rows\": [\n>     [\n>       \"$\\\\mathcal{B}_{ij}(v^i) = 𝛽_j = covector$\",\n>       \"$V → V^*$\"\n>     ],\n>     [\n>       \"$\\\\mathcal{B}_{ij}(v^j) = 𝛽_i = covector$\",\n>       \"$V → V^*$\"\n>     ],\n>     [\n>       \"$\\\\mathcal{B}_{ij}(v^i, u^j) = s = scalar$\",\n>       \"$V⨯V → ℝ$\"\n>     ]\n>   ]\n> }\n> ```",
      ""
    ],
    [
      {
        "content": "[[Metric Tensors (Metrics)|metric tensors]]",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "(0,2)-tensor",
        "align": "center"
      },
      {
        "content": "$g_{ij}𝜀^i𝜀^j$",
        "align": "center"
      },
      {
        "content": "$g_{ij}$",
        "align": "center"
      },
      "- $g̃_{ij} = F^k_i F^l_j g_{kl}$\n- $g_{ij} = B^k_i B^l_j g̃_{kl}$\n- \n> [!expand]- computation steps\n> ![[Tensor - 10 - How do Metric Tensor Components Change WRT Change of Basis#^excerpt]]",
      {
        "content": "$g_{ij}𝜀^i𝜀^j ∊ V^* \\otimes V^*$",
        "align": "center"
      },
      "> [!expand]- Click here to expand...\n> ```merge-table\n> {\n>   \"rows\": [\n>     [\n>       \"$g_{ij}(v^i) = 𝛽_j = covector$\",\n>       \"$V → V^*$\"\n>     ],\n>     [\n>       \"$g_{ij}(v^j) = 𝛽_i = covector$\",\n>       \"$V → V^*$\"\n>     ],\n>     [\n>       \"$g_{ij}(v^i, u^j) = s = scalar$\",\n>       \"$V⨯V → ℝ$\"\n>     ]\n>   ]\n> }\n> ```",
      "> [!expand]- Click here to expand...\n> lengths and angles themselves are invariant to the change of basis\n> metric tensor components are covariant to the change of basis\n> symmetric matrices are coordinate representations of metric tensors\n>\n> metric tensors are a special type of bilinear forms"
    ]
  ]
}
```
# Resources
- [NASA's - An Introduction to Tensors for Students of Physics and Engineering](https://www.grc.nasa.gov/www/k-12/Numbers/Math/documents/Tensors_TM2002211716.pdf)
- 
> [!expand]- Brian Keng's Tensor Introduction
> ###### Original Article
> - [https://bjlkeng.io/posts/tensors-tensors-tensors/](https://bjlkeng.io/posts/tensors-tensors-tensors/)
>
> ###### Article Copy
>
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Tensors/screencapture-bjlkeng-io-posts-tensors-tensors-tensors-2023-10-31-17_00_28.png]]
>
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Tensors/screencapture-bjlkeng-io-posts-tensors-tensors-tensors-2023-10-31-17_00_28-2.png]]
- [YouTube - FloatHeadPhysics - Intuitive Tensors](https://www.youtube.com/watch?v=k2FP-T6S1x0)
- [YouTube - Mu Prime Math - A Concrete Introduction to Tensor Products](https://www.youtube.com/watch?v=KnSZBjnd_74)
- [YouTube - EigenChris - Tensors for Beginners](https://www.youtube.com/playlist?list=PLJHszsWbB6hrkmmq57lX8BV-o-YIOFsiG)
- [YouTube - EigenChris - Tensor Calculus](https://www.youtube.com/playlist?list=PLJHszsWbB6hpk5h8lSfBkVrpjsqvUGTCx)
- 
> [!expand]- Old Stuff
> # Tensor Ranks
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Tensor Rank",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Name",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Description",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "\\# of components",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "tensor of rank 0",
>         "bg": "#F4F5F7"
>       },
>       "[[Scalars|scalar]]",
>       "magnitude (no direction)",
>       "- 1"
>     ],
>     [
>       {
>         "content": "tensor of rank 1",
>         "bg": "#F4F5F7"
>       },
>       "[[Vectors|vector]]",
>       "each component describes the magnitude in a particular direction\n- magnitude in the x-direction\n- magnitude in the y-direction\n- magnitude in the z-direction",
>       "- 3 - for 3 dimensions"
>     ],
>     [
>       {
>         "content": "tensor of rank 2",
>         "bg": "#F4F5F7"
>       },
>       "dyad",
>       "each direction is described with a vector\n- x direction is described with a vector\n- y direction is described with a vector\n- z direction is described with a vector",
>       "- 9 - for 3 components for each of the 3 dimensions"
>     ],
>     [
>       {
>         "content": "tensor of rank 3",
>         "bg": "#F4F5F7"
>       },
>       "triad",
>       "",
>       "- 27"
>     ]
>   ]
> }
> ```
>
> Einstein's Theory of Relativity required a tensor of rank 4 (x,y,z,t); thus 4\*4\*4\*4=256 components to describe the Theory of Relativity
> # Tensor - Represented as a Matrix
>
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Tensors/Tensors-as-generalizations-of-scalars-vectors-and-matrices.png|600]]
