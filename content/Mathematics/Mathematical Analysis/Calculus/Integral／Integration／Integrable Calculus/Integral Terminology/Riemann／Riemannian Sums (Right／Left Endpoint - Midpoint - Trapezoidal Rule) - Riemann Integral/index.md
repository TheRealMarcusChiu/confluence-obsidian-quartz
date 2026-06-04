---
title: "Riemann／Riemannian Sums (Right／Left Endpoint - Midpoint - Trapezoidal Rule) - Riemann Integral"
created: 2023-08-10T14:28:56.816-05:00
modified: 2023-12-20T13:05:34.836-06:00
parent: "[[Integral Terminology]]"
children: []
---
###### Riemann/Riemannian Sums - Riemann Integral
````excerpt
- a <strong>Riemann sum</strong> is a certain kind of approximation of an [[Integral／Integration／Integrable Calculus|integral]] by a finite sum
- a <strong>Riemann sum</strong> 𝑆 of 𝑓 over [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]] \[𝑎,𝑏\] is defined as:
	- $S = \sum_{i=1}^n f(x̃_i)𝛥x_i$
- where:
	- 𝛥𝑥<sub>𝑖</sub> = 𝑥<sub>𝑖</sub> - 𝑥<sub>𝑖-1</sub>
	- 𝑥̃<sub>𝑖</sub> ∊ \[𝑥<sub>𝑖-1</sub>, 𝑥<sub>𝑖</sub>\]
- a <strong>Riemann integral</strong> is the limit of the Riemann sums of a function as the partitions get finer
	- $\lim_{𝛥x_i \to 0} \sum_{i=1}^n f(x̃_i)𝛥x_i$
	- used to define [[Definite Integrals／Integrations - Indefinite Integrals／Integrations|Definite Integrals]]
````
^excerpt

# Riemann Sums - Types

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
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Left Riemann Sum",
        "bg": "#F4F5F7"
      },
      "- 𝑥̃<sub>𝑖</sub> = 𝑥<sub>𝑖-1</sub>",
      {
        "content": "![[Riemann／Riemannian Sums (Right／Left Endpoint - Midpoint - Trapezoidal Rule) - Riemann Integral/riemann-sum-types.jpg]]",
        "rowspan": 6
      }
    ],
    [
      {
        "content": "Right Riemann Sum",
        "bg": "#F4F5F7"
      },
      "- 𝑥̃<sub>𝑖</sub> = 𝑥<sub>𝑖</sub>"
    ],
    [
      {
        "content": "Middle Riemann Sum",
        "bg": "#F4F5F7"
      },
      "- 𝑥̃<sub>𝑖</sub> = (𝑥<sub>𝑖</sub> + 𝑥<sub>𝑖-1</sub>) / 2"
    ],
    [
      {
        "content": "Upper Riemann Sum",
        "bg": "#F4F5F7"
      },
      "- 𝑥̃<sub>𝑖</sub> = 𝑠𝑢𝑝 𝑓(\\[𝑥<sub>𝑖-1</sub>, 𝑥<sub>𝑖</sub>\\])"
    ],
    [
      {
        "content": "Lower Riemann Sum",
        "bg": "#F4F5F7"
      },
      "- 𝑥̃<sub>𝑖</sub> = 𝑖𝑛𝑓 𝑓(\\[𝑥<sub>𝑖-1</sub>, 𝑥<sub>𝑖</sub>\\])"
    ],
    [
      {
        "content": "Trapezoidal Reimann Sum",
        "bg": "#F4F5F7"
      },
      "- taking the average of both:\n\t- left Riemann sum\n\t- right Riemann sum"
    ]
  ]
}
```
