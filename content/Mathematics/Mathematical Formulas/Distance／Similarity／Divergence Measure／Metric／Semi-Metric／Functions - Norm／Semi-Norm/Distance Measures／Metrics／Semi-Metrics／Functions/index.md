---
title: "Distance Measures／Metrics／Semi-Metrics／Functions"
created: 2021-09-13T05:26:07.941-05:00
modified: 2023-06-26T18:19:49.089-05:00
parent: "[[Distance／Similarity／Divergence Measure／Metric／Semi-Metric／Functions - Norm／Semi-Norm]]"
children:
  - "[[Cosine Distance Measure]]"
  - "[[Discrete Distance Metric - Discrete Metric]]"
  - "[[Error Distances (Absolute - Relative)]]"
  - "[[Hamming Distance Metric]]"
  - "[[Jaccard Distance Metric]]"
  - "[[L1／Manhattan／Rectilinear Distance Metric]]"
  - "[[L2／Euclidean Distance Metric]]"
  - "[[Lp／Minkowski Distance Metric]]"
  - "[[L∞infinite／Chebyshev／Tchebychev／Maximum Distance Metric]]"
  - "[[Norm Distance Metric]]"
  - "[[Squared Euclidean Distance]]"
---
- <strong>Distance Measure (𝑑) - is a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]] </strong>that takes two elements in some set (𝑋) and outputs a non-negative [[Real Numbers System|real number]]
	- used to measure the distance between two elements
- <strong>Distance Metric (𝑑)</strong> - is a distance measure that satisfies 4 properties
	- when paired with its elements (𝑋) it forms a [[Metric Spaces|metric space (𝑋,𝑑)]]
	- a [[Norms - Semi-Norms|norm (||·||)]] induces a <em>distance metric (𝑑<sub>||·||</sub>)</em> defined as: 𝑑<sub>||·||</sub>(𝑥,𝑦) = ||𝑥-𝑦||
	- a <em>distance metric (𝑑)</em> induces a [[Topology|topology (𝜏)]][[Topology]]where the set { 𝐵<sub>𝑑</sub>(𝑥,𝜖) | 𝑥∈𝑋 and 𝜖\>0 } forms the [[Basis Vectors|basis]] of a [[Distance Metric Topology|metric topology (𝜏𝑑)]], where 𝐵<sub>𝑑</sub>(𝑥,𝜖) is an [[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|epsilon-ball/open-set]] defined as 𝐵<sub>𝑑</sub>(𝑥,𝜖) = { 𝑦∈𝑋 : 𝑑(𝑥,𝑦) \< 𝜖 }
- <strong>Distance Semi-Metric (𝑑)</strong> - is a distance measure that satisfies 3 properties

# Distance Measure - Categories

```merge-table
{
  "rows": [
    [
      {
        "content": "Category",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
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
        "content": "> [!expand]- positivity\n> 𝑑(𝑥,𝑦) ≥ 0 ∀𝑥,𝑦∊𝑋",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "> [!expand]- identity-discerning\n> 𝑑(𝑥,𝑦) = 0 if and only if 𝑥=𝑦",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "> [!expand]- symmetry\n> 𝑑(𝑥,𝑦) = 𝑑(𝑦,𝑥) ∀𝑥,𝑦∊𝑋",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "> [!expand]- triangle-inequality\n> 𝑑(𝑥,𝑧) ≤ 𝑑(𝑥,𝑦) + 𝑑(𝑦,𝑧) ∀𝑥,𝑦,𝑧∊𝑋",
        "bg": "#F4F5F7",
        "align": "left"
      }
    ],
    [
      {
        "content": "Distance Measure",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NOT-REQUIRED</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NOT-REQUIRED</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NOT-REQUIRED</font>",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "Distance Metric",
        "bg": "#F4F5F7",
        "align": "left"
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
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
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
        "content": "Distance Semi-Metric",
        "bg": "#F4F5F7",
        "align": "left"
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
        "content": "<font style=\"color: rgb(0,128,0);\">REQUIRED</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">NOT REQUIRED</font>",
        "bg": "#ffebe6",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Distance Measure - Types
- [[taxonomy-of-principal-distances-and-divergences.pdf]]
```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Category",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Input Type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Norm Distance Metric]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">METRIC</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "depends",
        "bg": "#eae6ff",
        "align": "center"
      },
      "- an [[Norms - Semi-Norms|norm (||·||)]]induces a <em>distance metric (𝑑<sub>||·||</sub>)</em> defined as: 𝑑<sub>||·||</sub>(𝑥,𝑦) = ||𝑥-𝑦||"
    ],
    [
      {
        "content": "[[L1／Manhattan／Rectilinear Distance Metric|L1/Manhattan/Rectilinear Distance Metric]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">METRIC</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vectors</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- 𝑑(𝑢̅,𝑣̅) = 𝐿<sub>1</sub> = ||𝑢̅-𝑣̅||<sub>1</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>|𝑢̅<sub>𝑖</sub>-𝑣̅<sub>𝑖</sub>|"
    ],
    [
      {
        "content": "[[L2／Euclidean Distance Metric|L2/Euclidean Distance Metric]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">METRIC</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vectors</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- 𝑑(𝑢̅,𝑣̅) = 𝐿<sub>2</sub> = ||𝑢̅-𝑣̅||<sub>2</sub> = ||𝑢̅-𝑣̅|| = \\[ 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑢̅<sub>𝑖</sub>-𝑣̅<sub>𝑖</sub>)<sup>2</sup> \\]<sup>(1/2)</sup>"
    ],
    [
      {
        "content": "[[Lp／Minkowski Distance Metric|Lp/Minkowski Distance Metric]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">METRIC</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vectors</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- 𝑑(𝑢̅,𝑣̅) = 𝐿<sub>𝑝</sub> = ||𝑢̅-𝑣̅||<sub>𝑝</sub> = \\[ 𝛴<sub>1≤𝑖≤𝑛</sub>|𝑢̅<sub>𝑖</sub>-𝑣̅<sub>𝑖</sub>|<sup>𝑝</sup> \\]<sup>(1/𝑝)</sup>"
    ],
    [
      {
        "content": "[[L∞infinite／Chebyshev／Tchebychev／Maximum Distance Metric|L∞/Max/Tchebychev Distance Metric]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">METRIC</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vectors</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- 𝑑(𝑢̅,𝑣̅) = 𝐿<sub>∞</sub> = ||𝑢̅-𝑣̅||<sub>∞</sub> = \\[ 𝛴<sub>1≤𝑖≤𝑛</sub>|𝑢̅<sub>𝑖</sub>-𝑣̅<sub>𝑖</sub>|<sup>∞</sup> \\]<sup>(1/∞)</sup> = 𝑚𝑎𝑥(|𝑢̅<sub>𝑖</sub>-𝑣̅<sub>𝑖</sub>|)"
    ],
    [
      {
        "content": "[[Squared Euclidean Distance]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">MEASURE</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vectors</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- 𝑑(𝑢̅,𝑣̅) = 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑢̅<sub>𝑖</sub>-𝑣̅<sub>𝑖</sub>)<sup>2</sup>"
    ],
    [
      {
        "content": "[[Cosine Distance Measure]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">MEASURE</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vectors</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- 𝑑(𝑢̅,𝑣̅) = 𝑐𝑜𝑠-𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒(𝑢̅,𝑣̅) = 1 - 𝑐𝑜𝑠-𝑠𝑖𝑚𝑖𝑙𝑎𝑟𝑖𝑦(𝑢̅,𝑣̅) <font style=\"color: rgb(122,134,154);\">\\# 𝑐𝑜𝑠-𝑠𝑖𝑚𝑖𝑙𝑎𝑟𝑖𝑡𝑦(𝑢̅,𝑣̅) = \\[𝑢̅·𝑣̅\\] / \\[||𝑢̅||\\*||𝑣̅||\\]</font>\n- used for measuring distance when the magnitude of the vectors does not matter"
    ],
    [
      {
        "content": "[[Jaccard Distance Metric]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">METRIC</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">sets</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      "- 𝑑(𝐴,𝐵) = 𝐽<sub>𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒</sub>(𝐴,𝐵) = 1 - 𝐽<sub>𝑠𝑖𝑚𝑖𝑙𝑎𝑟𝑖𝑡𝑦</sub>(𝐴,𝐵) <font style=\"color: rgb(122,134,154);\">\\# 𝐽(𝐴,𝐵) = |𝐴⋂𝐵| / |𝐴⋃𝐵|</font>"
    ],
    [
      {
        "content": "[[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|KL-Divergence]]\n[[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|Relative Entropy]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">MEASURE</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">random variables/vectors</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "- measures the difference between 2 [[Probability Distributions|probability distributions]]"
    ],
    [
      {
        "content": "[[Hamming Distance Metric]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">METRIC</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,102,0);\">strings</font>",
        "bg": "#deebff"
      },
      "- measures the similarity between 2 strings of equal length"
    ],
    [
      {
        "content": "[[Discrete Distance Metric - Discrete Metric|Discrete Distance Metric]]\n[[Discrete Distance Metric - Discrete Metric|Discrete Metric]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,102,255);\">METRIC</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "anything",
        "bg": "#eae6ff",
        "align": "center"
      },
      "- $d(x,y) = \\begin{cases} \\text{0,} &\\quad\\text{if x=y}\\\\ \\text{1,} &\\quad\\text{otherwise}\\\\ \\end{cases}$"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Distance Measure - Other
- [[Distance Measure／Metric vs Similarity Measure|Distance Measure/Metric vs Similarity Measure]]
- [[Distance Measure／Metric vs Divergence|Distance Measure/Metric vs Divergence]]
