---
title: "Norms - Semi-Norms"
created: 2023-06-15T18:22:50.385-05:00
modified: 2025-10-03T00:20:16.943-05:00
parent: "[[Distance／Similarity／Divergence Measure／Metric／Semi-Metric／Functions - Norm／Semi-Norm]]"
children:
  - "[[Inner Product Norm]]"
  - "[[L0 \"Norm\"]]"
  - "[[L1／Absolute Norm]]"
  - "[[L2／Euclidean Norm]]"
  - "[[LF／Frobenius／Hilbert-Schmidt Norm]]"
  - "[[Lpq Norm]]"
  - "[[Lp／Minkowski Norm (p-norm)]]"
  - "[[L∞infinity／Max／Chebychev／Tchebychev Norm]]"
  - "[[Relationships Between Lp Norms]]"
  - "[[Spectral Norm]]"
  - "[[Supremum Norm - Sup Norm - Uniform Norm]]"
---
###### Norms - Semi-Norms
````excerpt
- given a [[Vector Spaces - Linear Spaces|vector space (𝑉,𝐹)]], a <strong>norm/semi-norm (</strong>||·||<strong>)</strong> is a [[Real Numbers System|real]]-valued [[Continuous／Continuity [at a point - everywhere] (Transformations／Operations／Operations／Mappings／Maps／Functions／Morphisms)|continuous function]] on 𝑉 that takes in a vector from 𝑉 and outputs a non-negative [[Real Numbers System|real number]] (i.e. ||·||: 𝑉 → ℝ<sup>+</sup>)
- a vector space with a norm is called a [[Normed Vector Spaces - Normed Spaces|normed vector space]]
- used to measure the length of a vector
- an [[Inner Products|inner product (⟨·,·⟩)]] induces a <em>norm (</em><em>||·||<sub>⟨·,·⟩</sub></em><em>)</em> defined as: ||·||<sub>⟨·,·⟩</sub> = √⟨·,·⟩
- a <em>norm (||·||)</em>induces a [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric (𝑑||·||)]] defined as: 𝑑<sub>||·||</sub>(𝑥,𝑦) = ||𝑥-𝑦||
````
^excerpt

# Norm - Semi-Norm - Definitions

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "Properties",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null
    ],
    [
      {
        "content": "> [!expand]- Triangle Inequality\n> ||𝑣+𝑢|| ≤ ||𝑣|| + ||𝑢||\n>\n> for all 𝑣,𝑢∈𝑉\n>\n> Also called Subadditivity",
        "bg": "#F4F5F7"
      },
      {
        "content": "> [!expand]- Absolute Homogeneity\n> ||𝑠𝑣|| = |𝑠|·||𝑣||\n>\n> for all 𝑣∈𝑉and all scalars 𝑠",
        "bg": "#F4F5F7"
      },
      {
        "content": "> [!expand]- Non Negativity\n> ||𝑣|| ≥ 0\n>\n> for all 𝑣∈𝑉\n>\n> Some authors include non-negativity as part of the definition of \"norm\", although this is not necessary. Although this article defined \"positive\" to be a synonym of \"positive definite\", some authors instead define \"positive\" to be a synonym of \"non-negative\"; these definitions are not equivalent.",
        "bg": "#F4F5F7"
      },
      {
        "content": "> [!expand]- Positive Definiteness\n> ||𝑣|| = 0 ↔ 𝑣 = 0\n>\n> Also called Positiveness or Point-Separating\n>\n> Because property (2) implies ||0|| = 0, some authors replace the property (3) with the equivalent condition: for every 𝑣∈𝑉, ||𝑣|| = 0 if and only if 𝑣 = 0",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Norm",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">IMPLIED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "Semi-Norm",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">IMPLIED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "bg": "#ffebe6",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Types of Vector Norms

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Category",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Input",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "[[Relationships Between Lp Norms|Relationships Between Lp Vector Norms]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "[[L0 \"Norm\"]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">FAILS HOMOGENEITY</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vector</font>",
        "align": "center"
      },
      "- 𝐿<sub>0</sub> = ||𝑣̅||<sub>0</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>|𝑣̅<sub>𝑖</sub>|<sup>0</sup>(where 0<sup>0</sup> = 0)",
      ""
    ],
    [
      {
        "content": "[[L1／Absolute Norm|L1/Absolute Norm]]",
        "bg": "#f4f5f7",
        "align": "left"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vector</font>",
        "align": "center"
      },
      {
        "content": "- 𝐿<sub>1</sub> = ||𝑣̅||<sub>1</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>|𝑣̅<sub>𝑖</sub>|",
        "align": "left"
      },
      ""
    ],
    [
      {
        "content": "[[L2／Euclidean Norm|L2/Euclidean Norm]]",
        "bg": "#f4f5f7",
        "align": "left"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vector</font>",
        "align": "center"
      },
      {
        "content": "- 𝐿<sub>2</sub> = ||𝑣̅||<sub>2</sub> = ||𝑣̅|| = \\[ 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑣̅<sub>𝑖</sub>)<sup>2</sup> \\]<sup>(1/2)</sup>",
        "align": "left"
      },
      "- ||𝑣̅||<sub>2</sub> ≤ ||𝑣̅||<sub>1</sub>"
    ],
    [
      {
        "content": "[[Lp／Minkowski Norm (p-norm)|Lp/Minkowski Norm]]",
        "bg": "#f4f5f7",
        "align": "left"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vector</font>",
        "align": "center"
      },
      {
        "content": "- 𝐿<sub>𝑝</sub> = ||𝑣̅||<sub>𝑝</sub> = \\[ 𝛴<sub>1≤𝑖≤𝑛</sub>|𝑣̅<sub>𝑖</sub>|<sup>𝑝</sup> \\]<sup>(1/𝑝)</sup>",
        "align": "left"
      },
      "- ||𝑣̅||<sub>𝑝+1</sub> ≤ ||𝑣̅||<sub>𝑝</sub>"
    ],
    [
      {
        "content": "[[L∞infinity／Max／Chebychev／Tchebychev Norm|L∞/Max/Tchebychev Norm]]",
        "bg": "#f4f5f7",
        "align": "left"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vector</font>",
        "align": "center"
      },
      {
        "content": "- 𝐿<sub>∞</sub> = ||𝑣̅||<sub>∞</sub> = \\[ 𝛴<sub>1≤𝑖≤𝑛</sub>|𝑣̅<sub>𝑖</sub>|<sup>∞</sup> \\]<sup>(1/∞)</sup> = 𝑚𝑎𝑥(|𝑣̅<sub>𝑖</sub>|)",
        "align": "left"
      },
      "- ||𝑣̅||<sub>∞</sub> ≤ ||𝑣̅||<sub>𝑝</sub>"
    ]
  ]
}
```
# Types of Matrix Norms

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Category",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Input",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "Matrix [[Lpq Norm]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">matrices</font>",
        "align": "center"
      },
      "- 𝐿<sub>𝑝𝑞</sub> = ||𝐴||<sub>𝑝𝑞</sub>= (𝛴<sub>𝑗</sub><font style=\"color: rgb(255,0,0);\">(𝛴<sub>𝑖</sub>|𝐴<sub>𝑖𝑗</sub></font><font style=\"color: rgb(255,0,0);\">|<sup>𝑝</sup>)</font><sup><font style=\"color: rgb(255,0,0);\">(𝑞/𝑝)</font></sup>)<sup>(1/𝑞)</sup>"
    ],
    [
      {
        "content": "Matrix L<sub>11</sub>/Absolute Norm",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">matrices</font>",
        "align": "center"
      },
      "- 𝐿<sub>11</sub> = ||𝐴||<sub>11</sub> = (𝛴<sub>𝑗</sub><font style=\"color: rgb(255,0,0);\">(𝛴<sub>𝑖</sub>|𝐴<sub>𝑖𝑗</sub></font><font style=\"color: rgb(255,0,0);\">|<sup>1</sup>)</font><sup><font style=\"color: rgb(255,0,0);\">(1/1)</font></sup>)<sup>(1/1)</sup> = 𝛴<sub>𝑖𝑗</sub>|𝐴<sub>𝑖𝑗</sub>|"
    ],
    [
      {
        "content": "Matrix [[LF／Frobenius／Hilbert-Schmidt Norm|L22/]][[LF／Frobenius／Hilbert-Schmidt Norm|L𝐹]][[LF／Frobenius／Hilbert-Schmidt Norm|/Frobenius Norm]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">matrices</font>",
        "align": "center"
      },
      "- 𝐿<sub>22</sub> = ||𝐴||<sub>22</sub> = (𝛴<sub>𝑗</sub><font style=\"color: rgb(255,0,0);\">(𝛴<sub>𝑖</sub>|𝐴<sub>𝑖𝑗</sub></font><font style=\"color: rgb(255,0,0);\">|<sup>2</sup>)</font><sup><font style=\"color: rgb(255,0,0);\">(2/2)</font></sup>)<sup>(1/2)</sup>= \\[𝛴<sub>𝑖𝑗</sub>|𝐴<sub>𝑖𝑗</sub>|<sup>2</sup>\\]<sup>(1/2)</sup> = 𝐿<sub>𝐹</sub>"
    ],
    [
      {
        "content": "Matrix L<sub>∞∞</sub>/Max/Tchebychev Norm",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">matrices</font>",
        "align": "center"
      },
      "- 𝐿<sub>∞∞</sub> = ||𝐴||<sub>∞∞</sub> = (𝛴<sub>𝑗</sub><font style=\"color: rgb(255,0,0);\">(𝛴<sub>𝑖</sub>|𝐴<sub>𝑖𝑗</sub></font><font style=\"color: rgb(255,0,0);\">|<sup>∞</sup>)</font><sup><font style=\"color: rgb(255,0,0);\">(∞/∞)</font></sup>)<sup>(1/∞)</sup> = 𝑚𝑎𝑥(𝐴<sub>𝑖𝑗</sub>)"
    ],
    [
      {
        "content": "[[Operator Norm]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">matrices</font>",
        "align": "center"
      },
      "- informally, the <em>operator norm </em><em>‖𝐿‖<sub>𝑜𝑝</sub></em> of a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear operator]] 𝐿: 𝑋→𝑌 is the maximum factor by which it \"lengthens\" vectors"
    ],
    [
      {
        "content": "[[Spectral Norm]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">matrices</font>",
        "align": "center"
      },
      "- TODO"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Types of Other Norms

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "Category",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Input",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "[[Supremum Norm - Sup Norm - Uniform Norm]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "depends",
        "align": "center"
      },
      "- ||𝑓||<sub>∞</sub> = ||𝑓||<sub>∞,𝑆</sub> = 𝑠𝑢𝑝{|𝑓(𝑠)| : 𝑠∊𝑆}"
    ],
    [
      {
        "content": "[[Inner Product Norm]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">NORM</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "depends",
        "align": "center"
      },
      "- an [[Inner Products|inner product (⟨·,·⟩)]] induces a norm (||·||<sub>⟨·,·⟩</sub>) defined as: ||·||<sub>⟨·,·⟩</sub> = √⟨·,·⟩"
    ],
    [
      {
        "content": "Constant 0 Map",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">SEMI-NORM</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "anything",
        "align": "center"
      },
      "- the <em>trivial semi-norm</em> on 𝑉 which refers to the constant 0 map on 𝑉"
    ]
  ]
}
```
