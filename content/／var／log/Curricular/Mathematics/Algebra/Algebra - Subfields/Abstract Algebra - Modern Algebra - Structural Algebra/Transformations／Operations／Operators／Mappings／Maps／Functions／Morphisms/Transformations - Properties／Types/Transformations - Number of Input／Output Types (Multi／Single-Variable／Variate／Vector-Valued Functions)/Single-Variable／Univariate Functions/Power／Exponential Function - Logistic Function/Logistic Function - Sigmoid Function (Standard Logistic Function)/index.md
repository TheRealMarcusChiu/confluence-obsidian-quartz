---
title: "Logistic Function - Sigmoid Function (Standard Logistic Function)"
created: 2021-09-13T05:29:33.599-05:00
modified: 2022-12-03T10:56:06.685-06:00
parent: "[[Power／Exponential Function - Logistic Function]]"
children:
  - "[[Error Function (erf) - Gauss Error Function]]"
---
# Logistic Function
![[Logistic Function - Sigmoid Function (Standard Logistic Function)/logistic-function.png|301]]

where:
- 𝑒 = the [natural logarithm](https://en.wikipedia.org/wiki/Natural_logarithm) base (also known as [Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)))
- 𝑥<sub>0</sub> = the 𝑥-value of the function's midpoint
- 𝐿 = the curve's maximum value
- 𝑘 = the logistic growth rate or steepness of the curve

# Standard Logistic Function (Sigmoid Function)
- 𝜎(𝑥) = 1 / (1 + 𝑒<sup>-𝑥</sup>)
- 𝜎(𝑥) = 1 / (1 + 𝑒<sup>-𝑥</sup>) \* \[𝑒<sup>𝑥</sup>/𝑒<sup>𝑥</sup>\]
- 𝜎(𝑥) = 𝑒<sup>𝑥</sup> / (1 + 𝑒<sup>𝑥</sup>)

a sigmoid function is a logistic function where:
- 𝐿 = 1
- 𝑘 = 1
- 𝑥<sub>0</sub> = 0

![[Logistic Function - Sigmoid Function (Standard Logistic Function)/standard-logistic-function-sigmoid-function.png]]
# Sigmoid Function - Derivative
- 𝜎'(𝑥) = 𝜎(𝑥) \[1 - 𝜎(𝑥)\]
- 𝜎'(𝑥) = 𝑒<sup>-𝑥</sup> / (1 + 𝑒<sup>-𝑥</sup>)<sup>2</sup>

![[Logistic Function - Sigmoid Function (Standard Logistic Function)/sigmoid-and-derivative.png|400]]
