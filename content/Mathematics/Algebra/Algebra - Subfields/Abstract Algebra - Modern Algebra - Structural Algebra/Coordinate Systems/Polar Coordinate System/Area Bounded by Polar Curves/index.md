---
title: "Area Bounded by Polar Curves"
created: 2023-08-15T10:52:22.342-05:00
modified: 2023-08-15T11:10:03.257-05:00
parent: "[[Polar Coordinate System]]"
children: []
---
# Area of Polar Curve

Given a curve function 𝑟(𝜃) the area bounded by the curve is defined as:
- $\text{Area of Polar Curve} = \lim_{n \to ∞} \sum_{i=0}^{n} \frac{1}{2}r(𝜃_i)^2𝛥𝜃      \;\;\;\; \text{as Riemann sum}$
- $\text{Area of Polar Curve} = \frac{1}{2} \int_{a}^{b} r(𝜃)^2𝛥𝜃      \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\; \text{as definite integral}$

where:
- 𝜃<sub>𝑖</sub> = 𝑎 + 𝑖·(𝛥𝜃)
- 𝛥𝜃 = (𝑏 - 𝑎) / 𝑛

# Intuition

> [!expand]- Click here to expand...
> ### 𝜋 Definition
> - 𝜋 = circumference / diameter
> - 𝜋  = circumference / 2𝑟
>
> ### Circumference Formula
> - circumference = 2𝜋𝑟
>
> ### Area of Circle Formula
> - Area of Circle = base \* height
> - Area of Circle = circumference/2 \* 𝑟
> - Area of Circle = 𝜋𝑟<sup>2</sup>
>
> ### Area of a Slice of Circle Formula
> - Area of a Slice = Area of Circle \* (slice in radians / total-radians)
> - Area of a Slice = (𝜋𝑟<sup>2</sup>) \* (𝑑𝜃/2𝜋)
> - Area of a Slice = (1/2)𝑟<sup>2</sup> \* 𝑑𝜃
>
> ### Area of Polar Curve
> - $\text{Area of Polar Curve} = \lim_{n \to ∞} \sum_{i=0}^{n} \frac{1}{2}r(𝜃_i)^2𝛥𝜃      \;\;\;\; \text{as Riemann sum}$
> - $\text{Area of Polar Curve} = \frac{1}{2} \int_{a}^{b} r(𝜃)^2𝛥𝜃      \;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\;\; \text{as definite integral}$
>
> where:
> - 𝜃<sub>𝑖</sub> = 𝑎 + 𝑖·(𝛥𝜃)
> - 𝛥𝜃 = (𝑏 - 𝑎) / 𝑛
