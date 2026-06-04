---
title: "Radial Basis Function (RBF) Networks"
created: 2020-06-02T16:40:30.652-05:00
modified: 2022-12-03T15:42:37.565-06:00
parent: "[[ANN - Architectures]]"
children: []
---
###### Radial Basis Function (RBF) Networks
````excerpt
- a type of [[Instance-Based Learning|instance-based learning]] and [[Artificial Neural Networks (ANN)|artificial neural network]] constructed from spatially localized kernel functions. These can be seen as a blend of instance-based approaches (spatially localized influence of each kernel function) and neural network approaches (a global approximation to the target function is formed at training time rather than a local approximation at query time)
- RBF networks have been used successfully in applications such as interpreting visual scenes, in which the assumption of spatially local influences is well-justified
````
^excerpt

# Hypothesis Representation
- 𝑓ˆ(𝑋) = 𝑤ₒ + 𝛴<sub>1≤𝑖≤𝑘</sub>\[𝑤ᵢ \* 𝐾ᵢ(𝑑(𝑥ᵢ,𝑥))\]

where:
- each 𝑥ᵢ is an instance from 𝑋
- 𝐾ᵢ(𝑑(𝑥ᵢ,𝑥)) is a kernel function that is [[Proportionality (Directly - Inversely) - Coefficient of Proportionality Constant|inversely proportional]] to distance 𝑑(𝑥ᵢ,𝑥)
- 𝑑 is a user-provided constant

# Kernel Function 𝐾ᵢ(𝑑(𝑥ᵢ,𝑥))

can be a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|gaussian function]]
- 𝐾ᵢ(𝑑(𝑥ᵢ,𝑥)) = 𝑒<sup>(1/2𝜎ᵢ²) \* 𝑑²(𝑥ᵢ,𝑥)</sup>

where:
- [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] = 𝑥ᵢ
- [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] = 𝜎ᵢ²
