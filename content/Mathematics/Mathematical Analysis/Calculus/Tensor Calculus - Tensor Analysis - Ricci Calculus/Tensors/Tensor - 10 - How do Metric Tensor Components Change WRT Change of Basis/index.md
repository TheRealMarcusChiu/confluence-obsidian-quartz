---
title: "Tensor - 10 - How do Metric Tensor Components Change WRT Change of Basis"
created: 2023-08-02T00:03:10.050-05:00
modified: 2023-08-02T00:58:01.975-05:00
parent: "[[Tensors]]"
children: []
---
````excerpt
HOW METRIC TENSOR COMPONENTS CHANGE WRT CHANGE OF BASIS
- 𝑔<sub>𝑘𝑙</sub>= 𝑒<sub>𝑘</sub>·𝑒<sub>𝑙</sub>
- 𝑔̃<sub>𝑖𝑗</sub> = 𝑒̃<sub>𝑖</sub>·𝑒̃<sub>𝑗</sub>
```merge-table
{
  "rows": [
    [
      "- 𝑔̃<sub>𝑖𝑗</sub> = 𝑒̃<sub>𝑖</sub>·𝑒̃<sub>𝑗</sub>\n- 𝑔̃<sub>𝑖𝑗</sub> = (𝐹<sup>𝑘</sup><sub>𝑖</sub> 𝑒<sub>𝑘</sub>)·(𝐹<sup>𝑙</sup><sub>𝑗</sub> 𝑒<sub>𝑙</sub>)\n- 𝑔̃<sub>𝑖𝑗</sub> = 𝐹<sup>𝑘</sup><sub>𝑖</sub>𝐹<sup>𝑙</sup><sub>𝑗</sub> (𝑒<sub>𝑘</sub>·𝑒<sub>𝑙</sub>)\n- 𝑔̃<sub>𝑖𝑗</sub> = 𝐹<sup>𝑘</sup><sub>𝑖</sub>𝐹<sup>𝑙</sup><sub>𝑗</sub> 𝑔<sub>𝑘𝑙</sub>",
      "- 𝑔<sub>𝑖𝑗</sub> = 𝑒<sub>𝑖</sub>·𝑒<sub>𝑗</sub>\n- 𝑔<sub>𝑖𝑗</sub> = (𝐵<sup>𝑘</sup><sub>𝑖</sub> 𝑒̃<sub>𝑘</sub>)·(𝐵<sup>𝑙</sup><sub>𝑗</sub> 𝑒̃<sub>𝑙</sub>)\n- 𝑔<sub>𝑖𝑗</sub> = 𝐵<sup>𝑘</sup><sub>𝑖</sub>𝐵<sup>𝑙</sup><sub>𝑗</sub> (𝑒̃<sub>𝑘</sub>·𝑒̃<sub>𝑙</sub>)\n- 𝑔<sub>𝑖𝑗</sub> = 𝐵<sup>𝑘</sup><sub>𝑖</sub>𝐵<sup>𝑙</sup><sub>𝑗</sub> 𝑔̃<sub>𝑘𝑙</sub>"
    ]
  ]
}
```

CONFIRM THE SQUARED LENGTH OF A VECTOR REMAINS THE SAME WRT CHANGE OF BASIS

verify the following two statements are equivalent:
- ||𝑣||<sup>2</sup> = 𝑣<sup>𝑖</sup>𝑣<sup>𝑗</sup> 𝑔<sub>𝑖𝑗</sub>
- ||𝑣||<sup>2</sup> = 𝑣̃<sup>𝑖</sup>𝑣̃<sup>𝑗</sup> 𝑔̃<sub>𝑖𝑗</sub>

proof:
- ||𝑣||<sup>2</sup> = 𝑣̃<sup>𝑖</sup>𝑣̃<sup>𝑗</sup> 𝑔̃<sub>𝑖𝑗</sub>
- ||𝑣||<sup>2</sup> = (𝐵<sup>𝑖</sup><sub>𝑎</sub> 𝑣<sup>𝑎</sup>) (𝐵<sup>𝑗</sup><sub>𝑏</sub> 𝑣<sup>𝑏</sup>) (𝐹<sup>𝑘</sup><sub>𝑖</sub> 𝐹<sup>𝑙</sup><sub>𝑗</sub> 𝑔<sub>𝑘𝑙</sub>)
- ||𝑣||<sup>2</sup> = 𝑣<sup>𝑎</sup>𝑣<sup>𝑏</sup>𝑔<sub>𝑘𝑙</sub>(𝐵<sup>𝑖</sup><sub>𝑎</sub>𝐹<sup>𝑘</sup><sub>𝑖</sub> 𝐵<sup>𝑗</sup><sub>𝑏</sub>𝐹<sup>𝑙</sup><sub>𝑗</sub>)
- ||𝑣||<sup>2</sup> = 𝑣<sup>𝑎</sup>𝑣<sup>𝑏</sup>𝑔<sub>𝑘𝑙</sub>(𝛿<sub>𝑎𝑘</sub> 𝛿<sub>𝑏𝑙</sub>) <font style="color: rgb(122,134,154);">\# 𝐵𝐹 simplifies to</font> [[Kronecker Delta Function／Symbol|Kronecker delta function]]
- ||𝑣||<sup>2</sup> = 𝑣<sup>𝑘</sup>𝑣<sup>𝑙</sup>𝑔<sub>𝑘𝑙</sub>
- ||𝑣||<sup>2</sup> = 𝑣<sup>𝑖</sup>𝑣<sup>𝑗</sup>𝑔<sub>𝑖𝑗</sub>
````
^excerpt
