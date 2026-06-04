---
title: "The First／Second／Third Fundamental Theorem of Calculus (Part I, II, and III)"
created: 2023-08-10T13:29:55.925-05:00
modified: 2023-12-18T18:27:50.462-06:00
parent: "[[Calculus Foundational Knowledge]]"
children: []
---
###### Fundamental Theorem of Calculus
````excerpt
- establishes the relationship between [[Explicit Differentiation／Derivative／Differentiable／Differential Functions (differentiable at a point - differentiable over an interval - differentiable everywhere／over the entire domain)|differentiation]] and [[Integral／Integration／Integrable Calculus|integration]]
- It also guarantees that any integrable function has an antiderivative
````
^excerpt

# Fundamental Theorem of Calculus - Definitions

> [!expand-ui]- First Fundamental Theorem of Calculus
> For 𝑓 a real-valued [[Continuous Functions (continuous at a point - continuous over／on an interval - continuous everywhere／over／on the entire domain)|continuous function]] on an [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|open interval]] 𝐼 and 𝑎 any number in 𝐼.
>
> If 𝐹 is defined by:
> - $F(x) = \int_a^x f(t)dt$
>
> then
> - $F'(x) = f(x)$

> [!expand-ui]- Second Fundamental Theorem of Calculus
> If
> - 𝑓 a real-valued [[Continuous Functions (continuous at a point - continuous over／on an interval - continuous everywhere／over／on the entire domain)|continuous function]] on a [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|closed interval]] \[𝑎, 𝑏\]
> - 𝐹 is the [[Definite Integrals／Integrations - Indefinite Integrals／Integrations|indefinite integral]] of 𝑓 on \[𝑎, 𝑏\]
>
> Then
> - $\int_a^b f(x)dx = F(b) - F(a)$

> [!expand-ui]- Third Fundamental Theorem of Calculus
> This applies to integrals along curves.
>
> If 𝑓(𝑧) has a continuous indefinite integral 𝐹(𝑧) in a region 𝑅 containing a parameterized curve 𝛾: 𝑧 = 𝑧(𝑡) for 𝛼≤𝑡≤𝛽, then:
> - $\int_𝛾 f(z)dz = F(z(𝛽)) - F(z(𝛼))$
# Fundamental Theorem of Calculus - Proof

> [!expand]- Click here to expand...
> ![](https://www.youtube.com/watch?v=tgOgjbYs97A)
# Interpreting the Behavior of Accumulation Function (TODO Why is this Here?)

```merge-table
{
  "rows": [
    [
      {
        "content": "When the function 𝑓 is...",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "The antiderivative 𝑔 = ∫<sub>𝑎</sub><sup>𝑥</sup>𝑓(𝑡)𝑑𝑡 is...",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Positive +",
        "align": "center"
      },
      {
        "content": "Increasing ↗",
        "align": "center"
      }
    ],
    [
      {
        "content": "Negative −",
        "align": "center"
      },
      {
        "content": "Decreasing ↘",
        "align": "center"
      }
    ],
    [
      {
        "content": "Increasing ↗",
        "align": "center"
      },
      {
        "content": "Concave up ∪",
        "align": "center"
      }
    ],
    [
      {
        "content": "Decreasing ↘",
        "align": "center"
      },
      {
        "content": "Concave down ∩",
        "align": "center"
      }
    ],
    [
      {
        "content": "Changes sign / crosses the 𝑥-axis",
        "align": "center"
      },
      {
        "content": "Extremum point",
        "align": "center"
      }
    ],
    [
      {
        "content": "Extremum point",
        "align": "center"
      },
      {
        "content": "Inflection point",
        "align": "center"
      }
    ]
  ]
}
```
# Resources
- [https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-4/v/fundamental-theorem-of-calculus](https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-4/v/fundamental-theorem-of-calculus)
