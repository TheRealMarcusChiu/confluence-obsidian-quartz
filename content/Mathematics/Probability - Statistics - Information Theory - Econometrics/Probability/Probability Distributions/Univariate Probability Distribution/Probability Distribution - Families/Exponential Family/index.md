---
title: "Exponential Family"
created: 2021-09-13T05:27:36.453-05:00
modified: 2021-12-21T15:13:54.809-06:00
parent: "[[Probability Distribution - Families]]"
children: []
---
###### Exponential family
- is a parametric set of [[Probability Distributions|probability distributions]] of a certain form, specified below
- can be represented with [[Log-Linear Model - Log-Level Model - Structured Logistic Regression|Log-Linear Models]]

# Exponential Family - Form Specification

Let 𝑋 be a random variable/vector with:
- sample space ℝ<sup>𝑑</sup>
- probability model 𝐏<sub>𝜃</sub>

The class of probability models {𝐏<sub>𝜃</sub>: 𝜽∊𝛩} is an<strong> Exponential Family</strong> if 𝐏<sub>𝜃</sub>'s [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|PMF]] or [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|PDF]] (i.e. 𝐏(𝑥|𝜃)) can be written as:
- 𝐏(𝑥|𝜃) = 𝐏<sub>𝜃</sub>(𝑥) = 𝑒𝑥𝑝\[𝛴<sub>1≤𝑖≤𝑘</sub>𝜂<sub>𝑖</sub>(𝜃)𝑠<sub>𝑖</sub>(𝑥)\] · ℎ(𝑥) / 𝑧(𝜃)

where:
- 𝜂: 𝛩 → ℝ and 𝜂(𝜃)
- 𝑠: ℝ<sup>𝑑</sup> → ℝ and 𝑠(𝑥) is a natural sufficient for 𝜃
- ℎ: ℝ<sup>𝑑</sup> → \[0, ∞) and ℎ(𝑥) is the support & scaling
- 𝑧: 𝛩 → \[0, ∞) and 𝑧(𝜃) is the partition function / normalization factor
- 𝑥 ∊ ℝ<sup>𝑑</sup>
- 𝑘 = number of parameters
	- if 𝑘 = 1 then 𝐏<sub>𝜃</sub>(𝑥)<sub></sub>belongs to a one-parameter exponential family
	- if 𝑘 \> 1 then 𝐏<sub>𝜃</sub>(𝑥)<sub></sub>belongs to a multi-parameter exponential family

# Exponential Family - Examples

```merge-table
{
  "rows": [
    [
      {
        "content": "Probability Density Functions",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Probability Mass Functions",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "PDFs that belong to the Exponential Family\n- [[Exponential Distribution|exponential distribution]]\n- [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]]\n- [[Beta Distribution|beta distribution]]\n- [[Gamma Distribution|gamma distribution]]\n- [[Chi-Square Distribution|chi-square distribution]]\n- etc\n\nExample PDF - [[Exponential Distribution]]\n\n> [!expand]- Click here to expand...\n> Exponential(𝜃) for 𝜃 \\> 0\n> - 𝐏(𝑥|𝜃) = 𝐏<sub>𝜃</sub>(𝑥) = 𝜃·𝑒𝑥𝑝(-𝜃𝑥)·𝐼(𝑥≥0)\n>\n> where:\n> - 𝑑 = 1\n> - 𝑘 = 1\n> - 𝜃 ∊ (0,∞)\n> - 𝛩 = (0,∞)\n> - 𝜂<sub>1</sub>(𝜃) = 𝜃\n> - 𝑠<sub>1</sub>(𝑥) = -𝑥\n> - ℎ(𝑥) = 𝐼(𝑥≥0)\n> - 𝑧(𝜃) = 1/𝜃",
      "PMFs that belong to the Exponential Family\n- [[Bernoulli Distribution|bernoulli distribution]]\n- [[Binomial Distribution|binomial distribution]]\n- [[Poisson Distribution|poisson distribution]]\n- [[Geometric Distribution|geometric distribution]]\n- [[Multinomial Distribution|multinomial distribution]]\n- etc\n\nExample PMF - [[Bernoulli Distribution]]\n\n> [!expand]- Click here to expand...\n> Bernoulli(𝜃) for 𝜃 ∊ \\[0,1\\]\n> - 𝐏(𝑥|𝜃) = 𝐏<sub>𝜃</sub>(𝑥) = (𝜃)<sup>𝐼(𝑥=1)</sup>· (1 - 𝜃)<sup>𝐼(𝑥=0)</sup><sup></sup>· 𝐼(𝑥∊{0,1})\n>\n> transform 𝐏(𝑥|𝜃) = 𝑒𝑥𝑝(𝑙𝑜𝑔𝐏<sub>𝜃</sub>(𝑥)) =\n> - 𝑒𝑥𝑝(𝑙𝑜𝑔\\[(𝜃)<sup>𝐼(𝑥=1)</sup>· (1 - 𝜃)<sup>𝐼(𝑥=0)</sup><sup></sup>· 𝐼(𝑥∊{0,1})\\])\n> - 𝑒𝑥𝑝(𝑙𝑜𝑔\\[(𝜃)<sup>𝐼(𝑥=1)</sup>\\] + 𝑙𝑜𝑔\\[(1 - 𝜃)<sup>𝐼(𝑥=0)</sup>\\] + 𝑙𝑜𝑔\\[𝐼(𝑥∊{0,1})\\])\n> - 𝑒𝑥𝑝(𝑙𝑜𝑔\\[(𝜃)<sup>𝐼(𝑥=1)</sup>\\] + 𝑙𝑜𝑔\\[(1 - 𝜃)<sup>𝐼(𝑥=0)</sup>\\]) · 𝑒𝑥𝑝(𝑙𝑜𝑔\\[𝐼(𝑥∊{0,1})\\])\n> - 𝑒𝑥𝑝(𝑙𝑜𝑔\\[(𝜃)<sup>𝐼(𝑥=1)</sup>\\] + 𝑙𝑜𝑔\\[(1 - 𝜃)<sup>𝐼(𝑥=0)</sup>\\]) · 𝐼(𝑥∊{0,1})\n> - 𝑒𝑥𝑝(𝐼(𝑥=1)·𝑙𝑜𝑔(𝜃) + 𝐼(𝑥=0)·𝑙𝑜𝑔(1 - 𝜃)) · 𝐼(𝑥∊{0,1})\n>\n> where:\n> - 𝑑 = 1\n> - 𝑘 = 2\n> - 𝜃 ∊ \\[0,1\\]\n> - 𝛩 = \\[0,1\\]\n> - 𝜂<sub>1</sub>(𝜃) = 𝑙𝑜𝑔(𝜃)\n> - 𝑠<sub>1</sub>(𝑥) = 𝐼(𝑥=1)\n> - 𝜂<sub>2</sub>(𝜃) = 𝑙𝑜𝑔(1 - 𝜃)\n> - 𝑠<sub>2</sub>(𝑥) = 𝐼(𝑥=0)\n> - ℎ(𝑥) = 𝐼(𝑥∊{0,1})\n> - 𝑧(𝜃) = 1"
    ]
  ]
}
```
# Exponential Family - Properties
- they all have [[Conjugate Prior|conjugate priors]]
- use in maximum entropy

# Exponential Family - Other
- [[MLE - Exponential Family]]

# Exponential Family - Resources
- [mathematicalmonk - YouTube](https://www.youtube.com/watch?v=_aNk4QKi2_o)
