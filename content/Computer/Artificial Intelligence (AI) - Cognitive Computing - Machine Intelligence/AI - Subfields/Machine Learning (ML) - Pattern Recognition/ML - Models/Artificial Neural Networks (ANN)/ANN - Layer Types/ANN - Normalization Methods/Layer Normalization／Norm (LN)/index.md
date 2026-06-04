---
title: "Layer Normalization／Norm (LN)"
created: 2023-12-23T19:02:56.129-06:00
modified: 2023-12-27T01:21:56.960-06:00
parent: "[[ANN - Normalization Methods]]"
children: []
---
###### Layer Normalization/Norm (LN)
````excerpt
- invented \~2016
- unlike [[Batch Normalization／Norm (BN)|batch normalization]], it does not impose any constraint on the size of a mini-batch and it can be used in the pure online regime with batch size 1
- it's often used in recurrent models where batch normalization performs poorly
````
^excerpt

# Equations
- $𝜇^l = \frac{1}{H} \sum_{i=1}^H a_i^l$
- $𝜎^l = \sqrt{\frac{1}{H} \sum_{i=1}^{H} (a_i^l - 𝜇^l)^2}$

where:
- 𝑙 denotes the layer number
- 𝑎<sup>𝑙</sup> denotes the vector inputs to the layer
- 𝐻 denotes the number of hidden units in layer 𝑙

# Resources
- [https://arxiv.org/pdf/1607.06450.pdf](https://arxiv.org/pdf/1607.06450.pdf)
