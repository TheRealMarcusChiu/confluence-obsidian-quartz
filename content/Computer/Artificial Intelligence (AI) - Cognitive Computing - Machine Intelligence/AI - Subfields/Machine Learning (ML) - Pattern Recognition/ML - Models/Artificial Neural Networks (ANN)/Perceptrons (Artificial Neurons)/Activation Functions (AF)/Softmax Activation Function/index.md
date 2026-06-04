---
title: "Softmax Activation Function"
created: 2022-11-29T13:28:41.449-06:00
modified: 2025-08-28T11:54:41.101-05:00
parent: "[[Activation Functions (AF)]]"
children: []
---
###### Softmax Activation Function
````excerpt
- is a type of [[Activation Functions (AF)|activation function]] used as the final output layer
- is a type of [[ANN - Loss Function Layer|loss layer]]
- uses the [[Soft-Arg-Max／Argmax Function - Softmax Function|soft-argmax function]]
````
^excerpt

# Function & Its Derivative
- 𝑓(𝑧, 𝐳) = (𝑒<sup><strong>𝑧</strong></sup>) / (𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\])
- 𝛿𝑓(𝑧, 𝐳)/𝛿𝑧 = 𝑓(𝑧, 𝐳) \* \[1 - 𝑓(𝑧, 𝐳)\] <font style="letter-spacing: 0.0px;color: rgb(122,134,154);">\# see</font> [[Soft-Arg-Max／Argmax Function - Derivative Derivation|derivation]]

# Function With Cross-Entropy Loss Function & Its Derivative

Using [[Cross-Entropy Loss Function - Log Loss Function - Negative Log Likelihood Loss Function|cross-entropy loss function]] -𝑙𝑛(·):
- 𝐿(𝑧) = -𝑙𝑛(𝑓(𝑧, 𝐳))
- 𝐿(𝑧) = -𝑙𝑛((𝑒<sup><strong>𝑧</strong></sup>) / ((𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\]))
- 𝐿(𝑧) = 𝑙𝑛(𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\]) - 𝑙𝑛(𝑒<sup><strong>𝑧</strong></sup>)
- 𝐿(𝑧) = 𝑙𝑛(𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\]) - 𝑧

Derivative of loss-function 𝐿(𝑧) w.r.t. <font style="color: rgb(255,0,0);">𝑧</font>:
- 𝛿𝐿/𝛿<font style="color: rgb(255,0,0);">𝑧</font> = 𝛿/𝛿<font style="color: rgb(255,0,0);">𝑧</font>·𝑙𝑛(𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\]) - 𝛿/𝛿<font style="color: rgb(255,0,0);">𝑧</font>·𝑧
- 𝛿𝐿/𝛿<font style="color: rgb(255,0,0);">𝑧</font> = 1/(𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\])\*𝛿/𝛿<font style="color: rgb(255,0,0);">𝑧</font>·𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\] - 𝛿/𝛿<font style="color: rgb(255,0,0);">𝑧</font>·𝑧 <font style="color: rgb(122,134,154);">\# via [[Derivative of Logarithm Function|derivative of logarithm]]</font>
- 𝛿𝐿/𝛿<font style="color: rgb(255,0,0);">𝑧</font> = 1/(𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\])\*(𝑒<sup><font style="color: rgb(255,0,0);">𝑧</font></sup>) - 𝛿/𝛿<font style="color: rgb(255,0,0);">𝑧</font>·𝑧
- 𝛿𝐿/𝛿<font style="color: rgb(255,0,0);">𝑧</font> = (𝑒<sup><font style="color: rgb(255,0,0);">𝑧</font></sup>)/(𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\]) - 𝛿/𝛿<font style="color: rgb(255,0,0);">𝑧</font>·𝑧
- 𝛿𝐿/𝛿<font style="color: rgb(255,0,0);">𝑧</font> = 𝑓(<font style="color: rgb(255,0,0);">𝑧</font>, 𝐳) - 𝛿/𝛿<font style="color: rgb(255,0,0);">𝑧</font>·𝑧 <font style="color: rgb(122,134,154);">\# substitute softmax function</font>

either:
- 𝛿𝐿/𝛿<font style="color: rgb(255,0,0);">𝑧</font> = 𝑓(<font style="color: rgb(255,0,0);">𝑧</font>, 𝐳) - 1 <font style="color: rgb(122,134,154);">\# if <font style="color: rgb(255,0,0);">𝑧</font> and <font style="color: rgb(51,51,51);">𝑧</font> are the same variable in <font style="color: rgb(51,51,51);">𝛿/𝛿<font style="color: rgb(255,0,0);">𝑧</font>·𝑧</font></font>
- 𝛿𝐿/𝛿<font style="color: rgb(255,0,0);">𝑧</font> = 𝑓(<font style="color: rgb(255,0,0);">𝑧</font>, 𝐳) - 0 <font style="color: rgb(122,134,154);">\# if <font style="color: rgb(255,0,0);">𝑧</font> and <font style="color: rgb(51,51,51);">𝑧</font> are NOT the same variable in <font style="color: rgb(51,51,51);">𝛿/𝛿<font style="color: rgb(255,0,0);">𝑧</font>·𝑧</font></font>

# Subpages
- [[Sigmoid vs Softmax - Activation Function]]
