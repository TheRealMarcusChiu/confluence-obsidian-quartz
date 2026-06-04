---
title: "ANN - Normalization Methods"
created: 2023-12-23T19:07:35.450-06:00
modified: 2024-09-25T13:46:45.563-05:00
parent: "[[ANN - Layer Types]]"
children:
  - "[[Batch Normalization／Norm (BN)]]"
  - "[[Exploding／Vanishing Activation Problem]]"
  - "[[Group Normalization／Norm (GN)]]"
  - "[[Instance Normalization／Norm (IN)]]"
  - "[[Internal Covariate Shift Problem]]"
  - "[[Layer Normalization／Norm (LN)]]"
  - "[[Local Response Normalization／Norm (LRN)]]"
  - "[[Weight Normalization／Norm (WN)]]"
---
# The Problem Normalization Solves
- [[Exploding／Vanishing Activation Problem|Exploding/Vanishing Activation Problem]]
- somewhat handles [[Vanishing Gradient Problem|vanishing gradient problem]]
- [[Internal Covariate Shift Problem]]

# Normalization - Intuition

```merge-table
{
  "rows": [
    [
      "The idea is to normalize the outputs of the linear layer before feeding it into the non-linear layer\n- $\\hat{a} = \\frac{a - \\mu_a}{\\sigma_a}$\n\nwhere:\n- 𝜇<sub>𝑎</sub> - is the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]]\n- 𝜎<sub>𝑎</sub> - is the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]]\n\n𝜇<sub>𝑎</sub> and 𝜎<sub>𝑎</sub> are calculated in various methods shown below",
      "![[ANN - Normalization Methods/Normalization Layer Intuition.png|400]]"
    ]
  ]
}
```
# Normalization - Methods
- [[Batch Normalization／Norm (BN)|Batch Normalization/Norm (BN)]]
- [[Layer Normalization／Norm (LN)|Layer Normalization/Norm (LN)]]
- [[Instance Normalization／Norm (IN)|Instance Normalization/Norm (IN)]]
- [[Group Normalization／Norm (GN)|Group Normalization/Norm (GN)]]
- [[Local Response Normalization／Norm (LRN)|Local Response Normalization/Norm (LRN)]]
- [[Weight Normalization／Norm (WN)|Weight Normalization/Norm (WN)]]

![[ANN - Normalization Methods/normalizations.png]]
- 𝐻,𝑊 denotes the height and width of an "input image"
- 𝐶 denotes the channel of an "input image" (e.g. red channel of an RGB image)
- 𝑁 denotes the indexed "input image" element of a batch
