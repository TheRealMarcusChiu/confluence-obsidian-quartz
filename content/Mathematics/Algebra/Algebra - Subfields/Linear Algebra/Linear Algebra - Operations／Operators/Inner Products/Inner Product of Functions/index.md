---
title: "Inner Product of Functions"
created: 2023-12-11T21:20:35.770-06:00
modified: 2023-12-13T20:43:45.274-06:00
parent: "[[Inner Products]]"
children: []
---
###### Inner Product of Functions
````excerpt
- is a type of [[Inner Products|inner product (⟨·,·⟩)]] that takes two functions 𝑓(𝑥) and 𝑔(𝑥)
	- $⟨f(x),g(x)⟩_{a,b} = \int_a^b f(x)g(x)dx \;\;\;\; \text{on the interval of } [a,b]$
````
^excerpt

# Intuition

The [[Inner Product of Functions|inner product of functions]] is exactly the regular [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]], just in infinite dimensions and with a different "weight".

Since ℝ<sup>𝑛</sup> is discrete, each component has a weight of 1, whereas in function spaces each component has weight "𝑑𝑥".

On finite [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]] ℝ<sup>𝑛</sup>:
- $(x_1, ..., x_n)⋅(y_1, ..., y_n) = x_1 × y_1 × 1 + ⋯ + x_n × y_n × 1$

On [[Sequence Spaces|sequence space]]:
- $(x_1, ...)⋅(y_1, ...) = x_1 × y_1 × 1 + ⋯$

On [[Function Spaces|function space]]:
- $𝑓⋅𝑔 = 𝑓(𝑎)×𝑔(𝑎)×𝑑𝑥 + 𝑓(𝑎+𝑑𝑥)𝑔(𝑎+𝑑𝑥)×𝑑𝑥 + ⋯ = \int_a^b 𝑓(𝑥)𝑔(𝑥)𝑑𝑥$

# Resources
- [Inner Products in Hilbert Space (of Functions)](https://www.youtube.com/watch?v=g-eNeXlZKAQ&list=PLMrJAkhIeNNT_Xh3Oy0Y4LTj0Oxo8GqsC&index=4)
