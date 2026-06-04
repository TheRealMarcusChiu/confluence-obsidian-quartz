---
title: "Kernel Functions (Similarity Functions)"
created: 2021-09-13T05:29:30.455-05:00
modified: 2024-09-11T13:02:08.635-05:00
parent: "[[Multi-Variable／Multivariable／Multivariate Functions]]"
children:
  - "[[Linear Kernel Function - Dot Product Kernel Function]]"
  - "[[Polynomial Kernel Function]]"
  - "[[Radial Basis \"Kernel\" Function (RBF)]]"
---
<strong>Kernel Functions (Similarity Functions)</strong>
````excerpt
- is a function applied on each data instance to map the original non-linear observations into a higher-dimensional space in which they become linearly separable
	- this is the "[[Kernel Trick|kernel trick]]"
- kernel functions are used as [[Covariance Function (i.e. Kernel Function)|covariance functions]] for [[Gaussian Process Regression (GPR) - Kriging|Gaussian Process Regression (GPR)]]
- kernel functions are used in [[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)|Kernel Density Estimators (KDE)]]
- kernel functions are used in [[Kernel Machines／Methods|Kernel Machines]] such as [[Support Vector Machines (SVM)]]
	- kernel functions are used to expand [[Linear SVM (SVM Without Kernel)|Linear SVMs]] into [[Non-Linear SVM (SVM With Kernels)|Non-Linear SVMs]]
	- kernel functions are used in [[Support Vector Machines (SVM)]] to simultaneously transform a data-point into higher dimensions and calculate the euclidean distance between that transformed data-point and the [[Support Vector Machines (SVM)|Support Vector Classifier]]
````
^excerpt

# Kernel Function Types

how to define kernel function 𝑘(𝑢,𝑣) = ? (output a value that represents the similarity between 𝑢 and 𝑣. larger means more similar)

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Kernel Function Type</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Description</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "![[Kernel Functions (Similarity Functions)/kernels.png|350]]",
        "rowspan": 5
      }
    ],
    [
      {
        "content": "[[Linear Kernel Function - Dot Product Kernel Function|Linear Kernel Function]]",
        "bg": "#F4F5F7"
      },
      "- 𝑘(𝑢,𝑣) = 𝑢ᵀ𝑣 = 𝑢ᵀ𝑣 + 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡"
    ],
    [
      {
        "content": "[[Polynomial Kernel Function]]",
        "bg": "#F4F5F7"
      },
      "- 𝑘(𝑢,𝑣) = (𝑢ᵀ𝑣)<sup>𝑑𝑒𝑔𝑟𝑒𝑒</sup>\n- 𝑘(𝑢,𝑣) = 1 + (𝑢ᵀ𝑣)<sup>𝑑𝑒𝑔𝑟𝑒𝑒</sup>\n- 𝑘(𝑢,𝑣) = 1 + (𝑢ᵀ𝑣 + 𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡)<sup>𝑑𝑒𝑔𝑟𝑒𝑒</sup>"
    ],
    [
      {
        "content": "[[Radial Basis \"Kernel\" Function (RBF)]]",
        "bg": "#F4F5F7"
      },
      "- Gaussian kernels\n\t- $k(u,v) = e^{-𝛾·||u-v||^2}$\n\t- $k(u,v) = e^{-\\frac{1}{2 \\sigma^2}·||u-v||^2}$\n\t- $k(u,v) = 𝒩(u-v; 0, \\sigma^2I)$"
    ],
    [
      {
        "content": "Esoteric Kernel Functions",
        "bg": "#F4F5F7"
      },
      "- string kernel function\n- chi-square kernel function\n- histogram intersection kernel function"
    ]
  ]
}
```
