---
title: "Radial Basis \"Kernel\" Function (RBF)"
created: 2021-09-13T05:29:31.406-05:00
modified: 2024-09-11T12:59:23.600-05:00
parent: "[[Kernel Functions (Similarity Functions)]]"
children:
  - "[[Gaussian RBF Kernel Function]]"
---
###### Radial Basis "Kernel" Function (RBF)
````excerpt
- is a real-valued [[Kernel Functions (Similarity Functions)|kernel function]] 𝑘(𝑢,𝑣)
````
^excerpt

# RBF - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "The formula where 𝑢,𝑣 are scalars",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "The formula where 𝑢,𝑣 are vectors",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Gaussian RBF Kernel Function|Gaussian Kernel Function]]\n[[Gaussian RBF Kernel Function|Squared Exponential Kernel Function]]\n[[Gaussian RBF Kernel Function|Squared Exponential Covariance Function]]",
        "bg": "#F4F5F7"
      },
      "- 𝑘(𝑢,𝑣) = 𝑒𝑥𝑝(-𝛾·(𝑢-𝑣)<sup>2</sup>)\n- <font style=\"color: rgb(128,0,0);\">𝑘(𝑢,𝑣) = 𝑒𝑥𝑝(-\\[1/(2𝜎²)\\]·(𝑢-𝑣)<sup>2</sup>)</font>\n- <font style=\"color: rgb(128,0,0);\">𝑘(𝑢,𝑣) = [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|𝒩𝑜𝑟𝑚𝑎𝑙]](𝑢-𝑣; 𝜇=0, 𝜎)</font>",
      "- 𝑘(𝑢,𝑣) = 𝑒𝑥𝑝(-𝛾·||𝑢-𝑣||<sup>2</sup>)\n- <font style=\"color: rgb(128,0,0);\">𝑘(𝑢,𝑣) = 𝑒𝑥𝑝(-\\[1/(2𝜎²)\\]·||𝑢-𝑣||<sup>2</sup>)</font>\n- <font style=\"color: rgb(128,0,0);\">𝑘(𝑢,𝑣) = 𝒩(𝑢-𝑣; 𝜇=0, 𝜎𝐼)</font>",
      "- used in [[Gaussian Process Regression (GPR) - Kriging|Gaussian Process Regression]]"
    ],
    [
      {
        "content": "Multi-Quadric Kernel Function",
        "bg": "#F4F5F7"
      },
      "- 𝑘(𝑢,𝑣) = (1 + 𝛾·(𝑢-𝑣)<sup>2</sup>)<sup>(1/2)</sup>",
      "- 𝑘(𝑢,𝑣) = (1 + 𝛾·||𝑢-𝑣||<sup>2</sup>)<sup>(1/2)</sup>",
      ""
    ],
    [
      {
        "content": "Inverse Quadric Kernel Function",
        "bg": "#F4F5F7"
      },
      "- 𝑘(𝑢,𝑣) = 1 / (1 + 𝛾·(𝑢-𝑣)<sup>2</sup>)",
      "- 𝑘(𝑢,𝑣) = 1 / (1 + 𝛾·||𝑢-𝑣||<sup>2</sup>)",
      ""
    ],
    [
      {
        "content": "Inverse Multi-Quadric Kernel Function",
        "bg": "#F4F5F7"
      },
      "- 𝑘(𝑢,𝑣) = 1 / (1 + 𝛾·(𝑢-𝑣)<sup>2</sup>)<sup>(1/2)</sup>",
      "- 𝑘(𝑢,𝑣) = 1 / (1 + 𝛾·||𝑢-𝑣||<sup>2</sup>)<sup>(1/2)</sup>",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources

![](https://www.youtube.com/watch?v=Qc5IyLW_hns)
