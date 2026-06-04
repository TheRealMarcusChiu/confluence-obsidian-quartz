---
title: "Tensor - 5 - How do dual basis covectors change WRT change of basis？"
created: 2023-08-01T23:03:29.420-05:00
modified: 2023-08-01T23:04:40.235-05:00
parent: "[[Tensors]]"
children: []
---
````excerpt
We define:
- 𝜀<sup>𝑖</sup>(𝑒<sub>𝑗</sub>) = 𝛿<sub>𝑖𝑗</sub> = 𝜀̃<sup>𝑖</sup>(𝑒̃<sub>𝑗</sub>)

By definition of basis

```merge-table
{
  "rows": [
    [
      "- $𝜀̃^i = \\sum_{j=1}^n 𝛼_j · 𝜀^j$\n- $𝜀̃^i = \\sum_{j=1}^n 𝜀̃^i(e_j) · 𝜀^j$\n- $𝜀̃^i = \\sum_{j=1}^n 𝜀̃^i(\\sum_{k=1}^n B_{kj}·ẽ_k) · 𝜀^j$\n- $𝜀̃^i = \\sum_{j=1}^n \\sum_{k=1}^n B_{kj} · 𝜀̃^i(ẽ_k) · 𝜀^j$\n- $𝜀̃^i = \\sum_{j=1}^n \\sum_{k=1}^n B_{kj} · 𝛿_{ik} · 𝜀^j$",
      "- $𝜀^i = \\sum_{j=1}^n 𝛼̃_j · 𝜀̃^j$\n- $𝜀^i = \\sum_{j=1}^n 𝜀^i(ẽ_j) · 𝜀̃^j$\n- $𝜀̃^i = \\sum_{j=1}^n 𝜀^i(\\sum_{k=1}^n F_{kj}·e_k) · 𝜀̃^j$\n- $𝜀̃^i = \\sum_{j=1}^n \\sum_{k=1}^n F_{kj} · 𝜀^i(e_k) · 𝜀̃^j$\n- $𝜀^i = \\sum_{j=1}^n \\sum_{k=1}^n F_{kj} · 𝛿_{ik} · 𝜀̃^j$"
    ],
    [
      "- $𝜀̃^i = \\sum_{j=1}^n B_{ij} · 𝜀^j$",
      "- $𝜀^i = \\sum_{j=1}^n F_{ij} · 𝜀̃^j$"
    ]
  ]
}
```
````
^excerpt
