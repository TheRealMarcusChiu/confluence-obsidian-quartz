---
title: "Activation Functions (AF)"
created: 2020-01-18T14:15:27.180-06:00
modified: 2024-08-14T23:12:18.012-05:00
parent: "[[Perceptrons (Artificial Neurons)]]"
children:
  - "[[Linear Activation Function]]"
  - "[[LogSigmoid Activation Function]]"
  - "[[Maxout Unit Activation Function]]"
  - "[[Rectified Linear Unit (ReLU) Activation Function]]"
  - "[[Sigmoid Activation Function]]"
  - "[[Softmax Activation Function]]"
  - "[[Tanh Activation Function]]"
---
A [[Perceptrons (Artificial Neurons)|perceptron]] contains 2 phases:
1. <strong>weighted sum function</strong> (ideally linear) - calculate a “weighted sum” of its input and its bias/constant
2. <strong>activation function</strong> (ideally non-linear) - then decide whether it should be “fired” or not
	1. synonymous to [[ANN - Non-Linear Layer|non-linear layer]]

# Weighted Sum Function
- outputs a 𝑧 value ranging from (-∞ to +∞)
- doesn't have a builtin mechanism whether to fire the perceptron or not, this is why we have activation functions

example weighted sum function

> [!indent]
> 𝑧 = \[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑤𝑒𝑖𝑔ℎ𝑡<sub>𝑖</sub>\* 𝑖𝑛𝑝𝑢𝑡<sub>𝑖</sub>)\] + \[𝑤𝑒𝑖𝑔ℎ𝑡<sub>0</sub> \* 𝑏𝑖𝑎𝑠/𝑐𝑜𝑛𝑠𝑡𝑎𝑛𝑡\]
> 𝑧 = \[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑤<sub>𝑖</sub>\* 𝑥<sub>𝑖</sub>)\] + \[𝑤<sub>0</sub> \* 𝑥<sub>0</sub>\]
> 𝑧 = \[𝛴<sub>0≤𝑖≤𝑛</sub>(𝑤<sub>𝑖</sub>\* 𝑥<sub>𝑖</sub>)\]
> 𝑧 = 𝑤<sup>𝑇</sup>𝑥

# Independent Activation Functions

![[Activation Functions (AF)/perceptron.png|400]]

there are various types of activation functions each with there pros and cons

```merge-table
{
  "rows": [
    [
      {
        "content": "AF",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Output Function",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Output Range",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Pros",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Cons",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Unit Step Function - Heavyside Step Function|Step Function]]",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 1, if 𝑧 \\> threshold\n𝑓(𝑧) = 0, if 𝑧 ≤ threshold",
      "0 or 1",
      "",
      "- hard to train for classifying 3 or more classes (bc each node for classification outputs 0 or 1 not a range of values in which we could obtain max or softmax"
    ],
    [
      {
        "content": "[[Linear Activation Function|Linear]]",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 𝑐𝑧\n\nfor some scalar 𝑐",
      "(-inf, +inf)",
      "",
      "- is linear, which means derivative with respect to 𝑌 is always a constant c (i.e. the gradient has no relationship with 𝑌)\n- output is not bounded which could blow up activations"
    ],
    [
      {
        "content": "[[Sigmoid Activation Function|Sigmoid]]",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 1/(1+𝑒<sup>-𝑧</sup>)",
      "(0, 1)",
      "- non-linear\n- output is bounded therefore won't blow up activations\n- outputs a probability\n- can be used to classify NOT mutually exclusive classes",
      "- saturation causes [[Vanishing Gradient Problem]]\n- outputs are not 0 centered\n- exp() is a bit compute expensive"
    ],
    [
      {
        "content": "[[Tanh Activation Function|Tanh]]",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 𝑡𝑎𝑛ℎ(𝑧) = 2 𝑠𝑖𝑔𝑚𝑜𝑖𝑑(2𝑧) - 1",
      "(-1, 1)",
      "- non-linear\n- output is bounded therefore won't blow up activations\n- outputs are zero centered",
      "- saturation causes [[Vanishing Gradient Problem]]"
    ],
    [
      {
        "content": "[[Rectified Linear Unit (ReLU) Activation Function|ReLU]]",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 𝑚𝑎𝑥(0, 𝑧)",
      "[0, +inf)",
      "- non-linear\n- sparsity of activation\n- less computationally expensive than sigmoid and tanh\n- does not saturate in + region",
      "- Dying ReLU Problem (i.e. bc of the horizontal line the gradient will be 0 and thus stop responding to variations in error/input)\n- outputs are not zero centered"
    ],
    [
      {
        "content": "[[Softplus Function|Softplus]]",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 𝑙𝑜𝑔(1+𝑒<sup>𝑧</sup>)",
      "(0, +inf)",
      "",
      ""
    ]
  ],
  "tableStyle": "width: 99.0494%;"
}
```
# Dependent Activation Functions

```merge-table
{
  "rows": [
    [
      {
        "content": "Activation Function",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Output Function",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Output Range",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Softmax Activation Function|Softmax]]",
        "bg": "#F4F5F7"
      },
      "- 𝑓(𝑧, 𝐳) = (𝑒<sup><strong>𝑧</strong></sup>) / (𝛴<sub>𝑧<sub>𝑖</sub>∈𝐳</sub>\\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\\])\n\nwhere: 𝑧 is some element in set 𝐳\n\nfor example, 𝐳=\\[2,-1,3\\]:\n- 𝑓(𝑧=2, 𝐳) = 0.265\n- 𝑓(𝑧=-1, 𝐳) = 0.013\n- 𝑓(𝑧=3, 𝐳) = 0.721",
      "[0, 1]",
      "- non-linear\n- output is bounded therefore won't blow up activations\n- outputs a probability\n- summation of all outputs equal 1\n- used for classifying mutually exclusive classes"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Activation Functions Comparisons
```dataview
LIST
FROM ""
WHERE file.folder = [[Activation Functions (AF) - Comparisons]].file.folder + "/" + [[Activation Functions (AF) - Comparisons]].file.name
```

# Resources
- [Imperial's Deep learning course: Activation Functions](https://www.youtube.com/watch?v=KQFDxhySz_M&list=PLut9dwe1z0dDOlSikFHe-HH4O3uxETj4m&index=13)
