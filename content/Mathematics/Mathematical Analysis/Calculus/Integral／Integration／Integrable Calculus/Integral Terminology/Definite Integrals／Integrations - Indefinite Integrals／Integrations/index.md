---
title: "Definite Integrals／Integrations - Indefinite Integrals／Integrations"
created: 2021-11-06T17:45:13.978-05:00
modified: 2023-12-20T13:03:54.493-06:00
parent: "[[Integral Terminology]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Term",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Definition",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Other",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "definite integrals/integrations",
        "header": true,
        "bg": "#F4F5F7"
      },
      "has limits of integration and the answer is a specific area",
      "- can be defined as [[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|Linear Functionals]]"
    ],
    [
      {
        "content": "indefinite integrals/integrations",
        "header": true,
        "bg": "#F4F5F7"
      },
      "returns a function of the independent variable(s)",
      ""
    ]
  ]
}
```
# Definite Integrals
- the <strong>definite integral</strong> over the [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]] \[𝑎,𝑏\] is a [[Limits - Limit of a Function|limit]] of [[Riemann／Riemannian Sums (Right／Left Endpoint - Midpoint - Trapezoidal Rule) - Riemann Integral|Riemann sums]]:
	- $\underbrace{\int_a^b f(x)dx}_{\text{Definite Integral}} = \lim_{n\to∞} \underbrace{\sum_{i=1}^n f(x_i)𝛥x}_{\text{Riemann Sums}}$
- where:
	- 𝑥<sub>𝑖</sub> = 𝑎 + 𝑖·(𝛥𝑥)
	- 𝛥𝑥 = (𝑏 - 𝑎) / 𝑛
