---
title: "Rectified Linear Unit (ReLU) Activation Function"
created: 2020-01-18T15:42:45.970-06:00
modified: 2024-09-23T09:11:23.691-05:00
parent: "[[Activation Functions (AF)]]"
children:
  - "[[Leaky ReLU]]"
  - "[[Parametric ReLU (PReLU)]]"
  - "[[Scaled Exponential Linear Unit (SELU) Activation Function]]"
---
###### Rectified Linear Unit (ReLU)
````excerpt
- is a type of [[Activation Functions (AF)|activation function]]
- 𝑓(𝑧) = 𝑚𝑎𝑥(0, 𝑧)
````
^excerpt

# ReLU Visual
![[Rectified Linear Unit (ReLU) Activation Function/ReLU-Graph.png|400]]
# ReLU Problem

The downside of being zero for all negative values is a problem called “dying ReLU.”

A ReLU neuron is “dead” if it’s stuck on the negative side and always outputs 0. Because the slope of ReLU in the negative range is also 0, once a neuron gets negative, it’s unlikely for it to recover. Such neurons are not playing any role in discriminating the input and are essentially useless. Over time you may end up with a large part of your network doing nothing
# ReLU Variants

```merge-table
{
  "rows": [
    [
      {
        "content": "Variant",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Graph",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Rectified Linear Unit (ReLU)",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 𝑚𝑎𝑥(𝑧, 0)\n- <font style=\"color: rgb(51,153,102);\">✔ simple</font>\n- <font style=\"color: rgb(51,153,102);\">✔ can wipe the negative signal out</font>\n- <font style=\"color: rgb(255,0,0);\">✘ zero gradient for negative inputs, thus can be fragile during training and \"die\"</font>",
      "![[Rectified Linear Unit (ReLU) Activation Function/ReLU-Graph.png|301]]"
    ],
    [
      {
        "content": "[[Leaky ReLU]]",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 𝑚𝑎𝑥(𝑧, 𝛼𝑧)\n- <font style=\"color: rgb(51,153,102);\">✔ non-zero gradient for negative inputs</font>\n- <font style=\"color: rgb(255,0,0);\">✘ slope 𝛼 needs to be hand-tuned</font>\n- <font style=\"color: rgb(255,0,0);\">✘ cannot wipe the negative signal out</font>",
      {
        "content": "![[Rectified Linear Unit (ReLU) Activation Function/leaky-relu-and-parametric-relu.png|301]]",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "[[Parametric ReLU (PReLU)]]",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 𝑚𝑎𝑥(𝑧, 𝛼𝑧) <font style=\"color: rgb(122,134,154);\">\\# </font><font style=\"color: rgb(122,134,154);\">is Leaky ReLU where 𝛼 is learned</font>\n- <font style=\"color: rgb(51,153,102);\">✔ non-zero gradient for negative inputs</font>\n- <font style=\"color: rgb(255,0,0);\">✘ cannot wipe the negative signal out</font>"
    ],
    [
      {
        "content": "[[Scaled Exponential Linear Unit (SELU) Activation Function|Scaled Exponential Linear Unit (SELU]])",
        "bg": "#F4F5F7"
      },
      "$f(z) = \\begin{cases} z & \\text{if } x \\geq 0 \\\\ \\alpha (e^z - 1) & \\text{if } x < 0 \\\\ \\end{cases}$\n- <font style=\"color: rgb(51,153,102);\">✔ non-zero gradient for negative inputs</font>\n- <font style=\"color: rgb(255,0,0);\">✘ 𝛼 needs to be hand-tuned</font>\n- <font style=\"color: rgb(255,0,0);\">✘ exponential is computationally expensive</font>",
      "![[Rectified Linear Unit (ReLU) Activation Function/exponential-line-unit.png|301]]"
    ],
    [
      {
        "content": "Exponential Linear Unit (ELU)",
        "bg": "#F4F5F7"
      },
      "Is SeLU where 𝛼 = 1",
      ""
    ],
    [
      {
        "content": "Gaussian Error Linear Unit (GeLU)",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 𝑧 ⨯ 𝛷(𝑧)\n\nwhere:\n- 𝛷(𝑧) is the [[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|CDF]] of the [[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|Standard Gaussian]]\n- $𝛷(𝑧) = \\frac{1}{2 \\pi} \\int_{-∞}^z e^{-\\frac{t^2}{2}} dt$\n- <font style=\"color: rgb(51,153,102);\">✔ non-zero gradient for negative inputs</font>\n- <font style=\"color: rgb(255,0,0);\">✘ is computationally expensive</font>",
      ""
    ],
    [
      {
        "content": "SeLU",
        "bg": "#F4F5F7"
      },
      "TODO",
      ""
    ],
    [
      {
        "content": "Concatenated ReLU (CReLU)",
        "bg": "#F4F5F7"
      },
      "- has two outputs concatenated together (this DOUBLES the output dimension):\n\t- one normal ReLU\n\t- one negative ReLU\n- In other words:\n\t- for positive input 𝑧 it outputs the following two values {𝑧, 0}\n\t- for negative input 𝑧 it outputs the following two values {0, 𝑧}",
      ""
    ],
    [
      {
        "content": "ReLU-6",
        "bg": "#F4F5F7"
      },
      "𝑓(𝑧) = 𝑚𝑎𝑥(𝑚𝑖𝑛(𝑧, 6), 0)\n- is ReLU capped at 6\n- according to the authors, the upper bound encouraged their model to learn sparse features earlier",
      "![[Rectified Linear Unit (ReLU) Activation Function/relu-6.png|301]]"
    ]
  ]
}
```
