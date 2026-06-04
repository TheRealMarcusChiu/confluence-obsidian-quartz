---
title: "Similarity Measures／Metrics／Semi-Metrics／Functions"
created: 2022-12-05T23:36:15.588-06:00
modified: 2023-06-26T17:29:49.359-05:00
parent: "[[Distance／Similarity／Divergence Measure／Metric／Semi-Metric／Functions - Norm／Semi-Norm]]"
children:
  - "[[Cosine Similarity]]"
  - "[[Jaccard Index Similarity Coefficient]]"
---
###### Similarity Measures/Metrics/Semi-Metrics/Functions
````excerpt
- is a real-valued function that quantifies the similarity between two objects
````
^excerpt

# Similarity Measure - Types

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
        "content": "Input Type",
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
        "content": "[[Distance Measures／Metrics／Semi-Metrics／Functions|Distance Measure/Metric]] Dependent",
        "bg": "#F4F5F7"
      },
      {
        "content": "depends on the algorithm used",
        "align": "center"
      },
      "- 1 / distance measure/metric formula?"
    ],
    [
      {
        "content": "Discrete Similarity Metric",
        "bg": "#F4F5F7"
      },
      {
        "content": "anything",
        "align": "center"
      },
      "- $d(x,y) = \\begin{cases} \\text{1,} &\\quad\\text{if x=y}\\\\ \\text{0,} &\\quad\\text{otherwise}\\\\ \\end{cases}$"
    ],
    [
      {
        "content": "[Kernel Functions](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1022754)",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vectors</font>",
        "align": "center"
      },
      "- measures the similarity between 2 vectors in transformed space"
    ],
    [
      {
        "content": "[[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|Dot Product]]\n[[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|Scalar Product]]",
        "bg": "#F4F5F7",
        "align": "left"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vectors</font>",
        "align": "center"
      },
      {
        "content": "- 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑣̅<sub>𝑖</sub>𝑢̅<sub>𝑖</sub>)",
        "align": "left"
      }
    ],
    [
      {
        "content": "[[Cosine Similarity]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">vectors</font>",
        "align": "center"
      },
      "- 𝑐𝑜𝑠(𝜃) = \\[𝑢̅·𝑣̅\\] / \\[||𝑢̅||\\*||𝑣̅||\\]\n- used for measuring the similarity of vectors when the magnitude of the vectors does not matter"
    ],
    [
      {
        "content": "[[Jaccard Index Similarity Coefficient|Jaccard Similarity]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(128,128,0);\">sets</font>",
        "align": "center"
      },
      "- 𝐽(𝐴,𝐵) = |𝐴⋂𝐵| / |𝐴⋃𝐵|"
    ]
  ],
  "tableStyle": "width: 86.6912%;"
}
```
# Similarity Measure - Other
- [[Distance Measure／Metric vs Similarity Measure|Distance Measure/Metric vs Similarity Measure]]
