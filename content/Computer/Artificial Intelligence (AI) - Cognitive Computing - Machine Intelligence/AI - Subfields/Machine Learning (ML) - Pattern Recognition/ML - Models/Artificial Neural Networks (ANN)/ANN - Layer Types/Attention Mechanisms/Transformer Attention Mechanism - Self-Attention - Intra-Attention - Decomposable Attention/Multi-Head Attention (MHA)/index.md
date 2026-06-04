---
title: "Multi-Head Attention (MHA)"
created: 2025-10-10T20:24:30.865-05:00
modified: 2025-10-10T20:37:15.263-05:00
parent: "[[Transformer Attention Mechanism - Self-Attention - Intra-Attention - Decomposable Attention]]"
children: []
---
###### Multi-Head Attention (MHA)
````excerpt
- the idea is to allow attention function to extract information from different representation subspaces, which would otherwise be impossible with a single attention head
````
^excerpt

# MHA

```merge-table
{
  "rows": [
    [
      "First linearly projects the queries, keys, and values ℎ times, then single attention mechanism is applied to each of these projections in parallel, which are then concatenated and projected to final result.\n- $multihead(Q,K,V) = concat(head_1, ..., head_h)W^O$\n- $head_i = attention(QW_i^Q, KW_i^K, VW_i^V)$\n\nstep-by-step procedure:\n- compute the linearly projected versions of queries, keys, and values through multiplication with their respective weights 𝑊<sub>??</sub><sup>𝑄</sup>, 𝑊<sub>𝑖</sub><sup>𝐾</sup> and 𝑊<sub>𝑖</sub><sup>𝑉</sup> one for each ℎ𝑒𝑎𝑑<sub>𝑖</sub>.\n- apply single head attention for each ℎ𝑒𝑎𝑑<sub>𝑖</sub>:\n\t- by multiplying the queries and keys matrices\n\t- apply the scaling and softmax operations\n\t- weighting the values matrix to generate output\n- concatenate the outputs of each attention head\n- apply a linear projection via 𝑊<sup>𝑂</sup>",
      "![[Multi-Head Attention (MHA)/multi-head-attention.png]]"
    ]
  ]
}
```
# Resources
- [https://machinelearningmastery.com/the-transformer-attention-mechanism/](https://machinelearningmastery.com/the-transformer-attention-mechanism/)
