---
title: "Soft-Arg-Max／Argmax Function - Softmax Function"
created: 2022-11-29T12:43:59.075-06:00
modified: 2022-11-29T20:53:16.883-06:00
parent: "[[Single-Variable／Univariate Functions]]"
children:
  - "[[Soft-Arg-Max／Argmax Function - Derivative Derivation]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "soft-argmax",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝑓(𝑧, 𝐳) = (𝑒<sup><strong>𝑧</strong></sup>) / (𝛴<sub>𝑧𝑖∈𝐳</sub>\\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\\])"
    ],
    [
      {
        "content": "softmax",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝑓(𝐳) = 𝑙𝑛(𝛴<sub>𝑧𝑖∈𝐳</sub>\\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\\])"
    ]
  ]
}
```
# Soft-Arg-Max Function (sometimes referred to as Softmax, unfortunately)
- 𝑓(𝑧, 𝐳) = (𝑒<sup><strong>𝑧</strong></sup>) / (𝛴<sub>𝑧𝑖∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\])

soft-argmax vs argmax
- argmax(\[3,5,0\]) = \[0, 1, 0\]
- softargmax(\[3,5,0\]) ≈ \[0.12, 0.88, 0\]

soft-argmax use cases:
- [[Softmax Activation Function]]

# Softmax Function
- 𝑓(𝐳) = 𝑙𝑛(𝛴<sub>𝑧𝑖∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\])

softmax is approximating max:
- 𝑙𝑛(𝛴<sub>𝑧𝑖∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\]) ≈ 𝑙𝑛(𝑒<sup>𝑧<sub>𝑚𝑎𝑥</sub></sup>)
- 𝑙𝑛(𝛴<sub>𝑧𝑖∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\]) ≈ 𝑧<sub>𝑚𝑎𝑥</sub>

softmax vs max:
- max(\[3,5,0\]) = 5
- softmax(\[3,5,0\]) ≈ 5.13

Graph <font style="color: rgb(255,0,0);">max(\[0,x\])</font> and <font style="color: rgb(51,102,255);">softmax(\[0,x\])</font>

![[Soft-Arg-Max／Argmax Function - Softmax Function/softmax-vs-max.png|400]]
###### Why is it called Softmax?
- It is an approximation of Max.
- It is a soft/smooth approximation of max. Notice how it approximates the sharp corner at 0 using a smooth curve.

###### What is the purpose of Softmax?
Softmax gives us the[differentiable](https://en.wikipedia.org/wiki/Differentiable_function) approximation of a [non-differentiable](https://math.stackexchange.com/questions/1329252/is-max0-x-a-differentiable-function) function max. Why is that important? For optimizing models, including machine learning models, it is required that functions describing the model be differentiable. So if we want to optimize a model which uses the max function then we can do that by replacing the max with softmax.
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
