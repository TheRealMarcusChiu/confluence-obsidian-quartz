---
title: "ANN - Output Layer"
created: 2024-09-23T09:16:25.582-05:00
modified: 2024-09-23T09:46:28.084-05:00
parent: "[[ANN - Loss Layer vs Output Layer]]"
children: []
---
###### Output Layer
````excerpt
- used for inference
- generally not included when training model
````
^excerpt

# Output Layer - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Output Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Regression",
        "bg": "#F4F5F7"
      },
      {
        "content": "Positive Regression",
        "bg": "#F4F5F7"
      },
      {
        "content": "Binary Classification",
        "bg": "#F4F5F7"
      },
      {
        "content": "General Classification",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "$ℝ^n \\rightarrow ℝ$",
        "align": "left"
      },
      {
        "content": "$ℝ^n \\rightarrow ℝ^+$",
        "align": "left"
      },
      {
        "content": "$ℝ^n \\rightarrow [0, 1]$",
        "align": "left"
      },
      {
        "content": "$ℝ^n \\rightarrow [0, ..., C]$",
        "align": "left"
      }
    ],
    [
      {
        "content": "Possible Output Transformations",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "- identity mapping: 𝑔(𝑜) = 𝑜",
        "align": "center"
      },
      "- ReLU: 𝑔(𝑜) = 𝑚𝑎𝑥(𝑜, 0)\n- Soft ReLU: 𝑔(𝑜) = 𝑙𝑜𝑔(1 + 𝑒<sup>𝑜</sup>)",
      "- Thresholding: 𝑔(𝑜) = 1{𝑜 \\> 0}\n- Logistic Regression: 𝑔(𝑜) = 𝜎(𝑜)",
      "- argmax: 𝑔(𝑜) = 𝑎𝑟𝑔𝑚𝑎𝑥(𝑜)\n- one-hot: 𝑔(𝑜) = \\[0, ..., 1, ..., 0\\]<sup>T</sup>\n\t- 𝑔(𝑜)<sub>𝑖</sub> = 1 if 𝑜<sub>𝑖</sub> ≥ 𝑜<sub>𝑗</sub>∀𝑗\n- softmax: 𝑔(𝑜) = 𝑠𝑜𝑓𝑡𝑚𝑎𝑥(𝑜)"
    ],
    [
      {
        "content": "Possible ANN Architecture",
        "header": true,
        "bg": "#F4F5F7"
      },
      "![[ANN - Output Layer/a-output--regression.png|150]]",
      "![[ANN - Output Layer/b-output--positive-regression.png|150]]",
      "![[ANN - Output Layer/c-output--binary-classification.png|150]]",
      "![[ANN - Output Layer/d-output--general-classification.png|150]]"
    ]
  ]
}
```
# Output Representations in Practice

Do not add Output Layers to the model during training, most output transformations are not differentiable (or hard to differentiate)
