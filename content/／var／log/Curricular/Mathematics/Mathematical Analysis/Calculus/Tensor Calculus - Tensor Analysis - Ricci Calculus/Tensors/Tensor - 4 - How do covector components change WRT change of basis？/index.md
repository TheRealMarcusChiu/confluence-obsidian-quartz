---
title: "Tensor - 4 - How do covector components change WRT change of basis？"
created: 2023-08-01T23:01:21.395-05:00
modified: 2023-08-01T23:03:18.325-05:00
parent: "[[Tensors]]"
children: []
---
````excerpt
Let's define:

```merge-table
{
  "rows": [
    [
      "𝜀<sup>1</sup>(𝑒<sub>1</sub>) = 1 = 𝜀̃<sup>1</sup>(𝑒̃<sub>1</sub>)\n𝜀<sup>1</sup>(𝑒<sub>2</sub>) = 0 = 𝜀̃<sup>1</sup>(𝑒̃<sub>2</sub>)\n𝜀<sup>2</sup>(𝑒<sub>1</sub>) = 0 = 𝜀̃<sup>2</sup>(𝑒̃<sub>1</sub>)\n𝜀<sup>2</sup>(𝑒<sub>2</sub>) = 1 = 𝜀̃<sup>2</sup>(𝑒̃<sub>2</sub>)",
      "𝜀<sup>𝑖</sup>(𝑒<sub>𝑗</sub>) = 𝛿<sub>𝑖𝑗</sub> = 𝜀̃<sup>𝑖</sup>(𝑒̃<sub>𝑗</sub>)"
    ]
  ]
}
```

Thus

```merge-table
{
  "rows": [
    [
      "- 𝛼 = 𝛼̃ = 𝛼<sub>1</sub>·𝜀<sup>1</sup> + 𝛼<sub>2</sub>·𝜀<sup>2</sup>",
      "- 𝛼 = 𝛼̃ = 𝛼̃<sub>1</sub>·𝜀̃<sup>1</sup> + 𝛼̃<sub>2</sub>·𝜀̃<sup>2</sup>"
    ],
    [
      "- 𝛼(𝑒<sub>1</sub>) = 𝛼<sub>1</sub>\n- 𝛼(𝑒<sub>2</sub>) = 𝛼<sub>2</sub>",
      "- 𝛼(𝑒̃<sub>1</sub>) = 𝛼̃<sub>1</sub>\n- 𝛼(𝑒̃<sub>2</sub>) = 𝛼̃<sub>2</sub>"
    ]
  ]
}
```

Thus

```merge-table
{
  "rows": [
    [
      "- 𝛼 = 𝛼<sub>1</sub>·𝜀<sup>1</sup> + 𝛼<sub>2</sub>·𝜀<sup>2</sup>\n- 𝛼 = 𝛼(𝑒<sub>1</sub>)·𝜀<sup>1</sup> + 𝛼(𝑒<sub>2</sub>)·𝜀<sup>2</sup>",
      "- 𝛼 = 𝛼̃<sub>1</sub>·𝜀̃<sup>1</sup> + 𝛼̃<sub>2</sub>·𝜀̃<sup>2</sup>\n- 𝛼 = 𝛼(𝑒̃<sub>1</sub>)·𝜀̃<sup>1</sup> + 𝛼(𝑒̃<sub>2</sub>)·𝜀̃<sup>2</sup>"
    ]
  ]
}
```

Thus

```merge-table
{
  "rows": [
    [
      "- $𝛼 = \\sum_{j=1}^n 𝛼_j · 𝜀^j$\n- $𝛼 = \\sum_{j=1}^n 𝛼(e_j) · 𝜀^j$\n- $𝛼 = \\sum_{j=1}^n 𝛼(\\sum_{i=1}^n B_{ij} ẽ_i) · 𝜀^j$\n- $𝛼 = \\sum_{j=1}^n \\sum_{i=1}^n B_{ij} · 𝛼(ẽ_i) · 𝜀^j$\n- $𝛼 = \\sum_{j=1}^n \\sum_{i=1}^n B_{ij} · 𝛼̃_i · 𝜀^j$",
      "- $𝛼 = \\sum_{j=1}^n 𝛼̃_j · 𝜀̃^j$\n- $𝛼 = \\sum_{j=1}^n 𝛼(ẽ_j) · 𝜀̃^j$\n- $𝛼 = \\sum_{j=1}^n 𝛼(\\sum_{i=1}^n F_{ij} e_i) · 𝜀̃^j$\n- $𝛼 = \\sum_{j=1}^n \\sum_{i=1}^n F_{ij} · 𝛼(e_i) · 𝜀̃^j$\n- $𝛼 = \\sum_{j=1}^n \\sum_{i=1}^n F_{ij} · 𝛼_i · 𝜀̃^j$"
    ],
    [
      "- $𝛼_j = \\sum_{i=1}^n B_{ij} · 𝛼̃_i$",
      "- $𝛼_j = \\sum_{i=1}^n F_{ij} · 𝛼_i$"
    ]
  ]
}
```
````
^excerpt
