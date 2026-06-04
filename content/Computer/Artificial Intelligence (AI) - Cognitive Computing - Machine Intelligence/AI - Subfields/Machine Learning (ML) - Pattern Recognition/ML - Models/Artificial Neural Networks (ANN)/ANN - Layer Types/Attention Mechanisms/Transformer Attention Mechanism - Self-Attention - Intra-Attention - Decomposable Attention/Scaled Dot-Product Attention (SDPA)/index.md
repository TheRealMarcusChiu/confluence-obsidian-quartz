---
title: "Scaled Dot-Product Attention (SDPA)"
created: 2025-10-10T19:49:34.254-05:00
modified: 2025-10-10T20:23:32.629-05:00
parent: "[[Transformer Attention Mechanism - Self-Attention - Intra-Attention - Decomposable Attention]]"
children: []
---
###### Scaled Dot-Product Attention (SDPA)
````excerpt
- allows the [[Transformer Neural Networks (TNN) - Transformers|Transformer]] model to focus on the most relevant parts of the input for each word
````
^excerpt

# SDPA

```merge-table
{
  "rows": [
    [
      "First computes dot-product of query 𝑄 and key 𝐾, then divides by 𝑑<sub>𝑘</sub> which is the dimension of 𝑄 and 𝐾, then applies [[Softmax Activation Function|softmax function]] to obtain the weights used to scale the values 𝑉.\n- $\\text{attention}(Q,K,V) = \\text{softmax} \\left( \\frac{QK^T}{\\sqrt{d_k}} \\right)V$\n\nSDPA is identical to [[Luong Attention Mechanism - Multiplicative／Dot-Product Attention|multiplicative attention]], except for the added scaling factor 𝑑<sub>𝑘</sub> which is used to counter the effect of large magnitudes of dot products.",
      "![[Scaled Dot-Product Attention (SDPA)/scalar-dot-product-attention.png]]"
    ]
  ]
}
```
# Resources
- [https://machinelearningmastery.com/the-transformer-attention-mechanism/](https://machinelearningmastery.com/the-transformer-attention-mechanism/)
