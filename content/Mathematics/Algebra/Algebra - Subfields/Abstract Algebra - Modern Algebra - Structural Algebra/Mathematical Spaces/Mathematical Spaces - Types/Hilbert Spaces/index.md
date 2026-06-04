---
title: "Hilbert Spaces"
created: 2023-06-15T20:46:32.713-05:00
modified: 2025-06-30T23:55:24.486-05:00
parent: "[[Mathematical Spaces - Types]]"
children: []
---
###### Hilbert Spaces (𝓗)
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a real or complex [[Inner Product Spaces|inner product space (𝑉,𝐹,⟨·,·⟩)]] that is also a [[Complete Metric Spaces (Completeness - Non-Completeness)|complete metric space]] with respect to the [[Distance Measures／Metrics／Semi-Metrics／Functions|distance function (𝑑⟨·,·⟩)]] induced by the [[Inner Products|inner product (⟨·,·⟩)]]
- if given an [[Inner Products|inner product (⟨·,·⟩)]], then the induced [[Norms - Semi-Norms|norm (||·||)]] is defined as:
	- $||·||_{⟨·,·⟩} = \sqrt{⟨·,·⟩}$
- the tuple (𝑉,𝐹,⟨·,·⟩) is a <em>Hilbert space</em>, if (𝑉,𝐹,||·||<sub>⟨·,·⟩</sub>) is a [[Banach Spaces|Banach space]]
````
^excerpt

# Hilbert Spaces - Intro![](https://www.youtube.com/watch?v=K5auAUDS05A)![](https://www.youtube.com/watch?v=FFPXm-tuOt8)
# Hilbert Spaces - Examples

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑉",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "⟨·,·⟩",
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
        "content": "Example #1",
        "bg": "#F4F5F7"
      },
      "ℝ<sup>2</sup>",
      "ℝ",
      "$⟨x,y⟩ = \\sum_{i=1}^{2}x_iy_i$",
      ""
    ],
    [
      {
        "content": "Example #2",
        "bg": "#F4F5F7"
      },
      "ℂ<sup>2</sup>",
      "ℂ",
      "$⟨x,y⟩ = \\sum_{i=1}^{2}\\overline{x_i}y_i$",
      "- 𝑥̅<sub>𝑖</sub> is the complex conjugate"
    ],
    [
      {
        "content": "Example #3",
        "bg": "#F4F5F7"
      },
      "𝐿<sup>2</sup>(ℕ)",
      "ℝ",
      "$⟨x,y⟩ = \\sum_{i=1}^{∞}x_iy_i$",
      "- 𝐿<sup>2</sup>(ℕ) is [[Lp Spaces - Lebesgue Spaces (function space)|Lp space]] with p = 2"
    ]
  ]
}
```
# Hilbert Spaces - Non-Examples

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑉",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐹",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "⟨·,·⟩",
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
        "content": "Example #1",
        "bg": "#F4F5F7"
      },
      "𝐶([0,1])",
      "ℂ",
      "$⟨f,g⟩ = \\int_{0}^{1}\\overline{f(t)}g(t)dt$",
      "- 𝐶(\\[0,1\\]) is the [[Vector Space of Continuous Functions - Set of Continuous Functions|vector space of continuous functions]] defined on the unit interval \\[0,1\\]\n- IS NOT A HILBERT SPACE BECAUSE IT FAILS [[Complete Metric Spaces (Completeness - Non-Completeness)|COMPLETENESS]]"
    ]
  ]
}
```
# Resources
- [https://en.wikipedia.org/wiki/Hilbert_space](https://en.wikipedia.org/wiki/Hilbert_space)
