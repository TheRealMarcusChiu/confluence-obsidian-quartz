---
title: "Why dx squared (dx)² = 0？"
created: 2021-11-19T05:40:02.814-06:00
modified: 2023-08-22T18:41:49.370-05:00
parent: "[[Differential／Derivative Calculus - Other]]"
children: []
---
Let's take the [[Explicit Differentiation／Derivative／Differentiable／Differential Functions (differentiable at a point - differentiable over an interval - differentiable everywhere／over the entire domain)|derivative]] of
- 𝑓(𝑥) = 𝑥<sup>2</sup>

The definition of derivative:
- $\frac{df}{dx} = \frac{\text{amount of change in output}}{\text{amount of change in input}}$
- $\frac{df}{dx} = \lim_{dx\to0} \frac{f(x + dx) - f(x)}{dx}$
- $\frac{df}{dx} = \lim_{dx\to0} \frac{(x + dx)^2 - x^2}{dx}$
- $\frac{df}{dx} = \lim_{dx\to0} \frac{x^2 + 2xdx + dx^2 - x^2}{dx}$
- $\frac{df}{dx} = \lim_{dx\to0} \frac{2xdx + dx^2}{dx}$
- $\frac{df}{dx} = \lim_{dx\to0} 2x + dx$
- $\frac{df}{dx} = 2x$
