---
title: "Generalized Linear Model as CPD"
created: 2021-09-13T05:27:14.086-05:00
modified: 2021-09-13T05:27:14.086-05:00
parent: "[[CPD - Representations]]"
children: []
---
[[Conditional Probability Distribution (CPD)|conditional probability distribution]] over binary value 𝑌 is commonly defined by:
- 𝐏(𝑌=1) = 𝑠𝑖𝑔𝑚𝑜𝑖𝑑(𝑓(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>))
- 𝐏(𝑌=1) = 𝑠𝑖𝑔𝑚𝑜𝑖𝑑(𝑤<sub>0</sub> + 𝑤<sub>1</sub>𝑋<sub>1</sub> + ... + 𝑤<sub>𝑛</sub>𝑋<sub>𝑛</sub>))

where:
- 𝑠𝑖𝑔𝑚𝑜𝑖𝑑(𝒛) = 1 / (1 + 𝑒<sup><code>-𝒛</code></sup>) <font style="color: rgb(128,128,128);">\# is the </font>[[Logistic Function - Sigmoid Function|sigmoid function]]

![[Generalized Linear Model as CPD/perceptron.png|473x250]]

similar to: [[Logistic Function - Sigmoid Function|Sigmoid]] [[Activation Functions (AF)]]
