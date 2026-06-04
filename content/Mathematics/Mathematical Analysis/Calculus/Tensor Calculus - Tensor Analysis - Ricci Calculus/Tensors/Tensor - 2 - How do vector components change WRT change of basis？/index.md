---
title: "Tensor - 2 - How do vector components change WRT change of basis？"
created: 2023-08-01T22:57:32.811-05:00
modified: 2023-08-01T22:59:25.684-05:00
parent: "[[Tensors]]"
children: []
---
````excerpt
- 𝑣 = 𝑣\[1\] · 𝑒<sub>1</sub> + 𝑣\[2\] · 𝑒<sub>2</sub>
- 𝑣̃ = 𝑣̃\[1\] · 𝑒̃<sub>1</sub> + 𝑣̃\[2\] · 𝑒̃<sub>2</sub>
- 𝑣 = 𝑣̃ are geometrically the same vector
```merge-table
{
  "rows": [
    [
      "- $v = ṽ = \\sum_{i=1}^n v[i] · e_i$\n- $v = ṽ = \\sum_{i=1}^n ṽ[i] · ẽ_i$"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      "- $v = ṽ = \\sum_{j=1}^n v[j] · e_j$\n- $v = ṽ = \\sum_{j=1}^n v[j] · \\sum_{i=1}^n B_{ij} ẽ_i$\n- $v = ṽ = \\sum_{i=1}^n \\sum_{j=1}^n B_{ij} v[j] ẽ_i$\n\nThus\n- $ṽ[i] = \\sum_{j=1}^n B_{ij} v[j]$",
      "- $v = ṽ = \\sum_{j=1}^n ṽ[j] · ẽ_j$\n- $v = ṽ = \\sum_{j=1}^n ṽ[j] · \\sum_{i=1}^n F_{ij} e_i$\n- $v = ṽ = \\sum_{i=1}^n \\sum_{j=1}^n F_{ij} ṽ[j] e_i$\n\nThus\n- $v[i] = \\sum_{j=1}^n F_{ij} ṽ[j]$"
    ],
    [
      {
        "content": "Thus",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝐵 is used to transform vector components from old to new",
      "- 𝐹 is used to transform vector components from new to old"
    ]
  ]
}
```
````
^excerpt
