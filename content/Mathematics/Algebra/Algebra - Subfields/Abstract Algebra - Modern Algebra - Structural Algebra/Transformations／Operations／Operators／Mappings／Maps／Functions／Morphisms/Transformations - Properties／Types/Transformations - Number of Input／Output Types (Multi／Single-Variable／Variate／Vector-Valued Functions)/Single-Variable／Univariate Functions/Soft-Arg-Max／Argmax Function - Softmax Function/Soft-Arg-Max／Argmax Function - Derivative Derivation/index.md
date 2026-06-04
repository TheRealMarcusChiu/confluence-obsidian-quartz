---
title: "Soft-Arg-Max／Argmax Function - Derivative Derivation"
created: 2022-11-29T20:26:08.763-06:00
modified: 2022-11-29T20:52:27.792-06:00
parent: "[[Soft-Arg-Max／Argmax Function - Softmax Function]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Soft-Arg-Max／Argmax Function - Softmax Function|soft-argmax function]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝑠(𝑧, 𝐳) = (𝑒<sup><strong>𝑧</strong></sup>) / (𝛴<sub>𝑧𝑖∈𝐳</sub>\\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\\])"
    ],
    [
      {
        "content": "soft-argmax function'",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- 𝛿𝑠(𝑧, 𝐳)/𝛿𝑧 = 𝑠(𝑧, 𝐳) \\* \\[1 - 𝑠(𝑧, 𝐳)\\]"
    ]
  ]
}
```
# Derivation

recall the [[Product Rule - Quotient Rule|quotient rule]] for derivatives:
- (𝑓/𝑔)′ = (𝑓′𝑔<font style="color: rgb(255,0,0);"> -</font> 𝑓𝑔′) / 𝑔<sup>2</sup>

Let:
- 𝑓 = 𝑒<sup><strong>𝑧</strong></sup>
- 𝑔 = 𝛴<sub>𝑧𝑖∈𝐳</sub>\[𝑒<sup>𝑧<sub>𝑖</sub></sup>\] = 𝛴
- 𝛿𝑓/𝛿𝑧 = 𝑒<sup><strong>𝑧</strong></sup>
- 𝛿𝑔/𝛿𝑧 = 𝑒<sup><strong>𝑧</strong></sup>

Therefore:
- 𝛿𝑠/𝛿𝑧 = (𝑒<sup><strong>𝑧 </strong></sup>\* 𝛴 <font style="color: rgb(255,0,0);">-</font>𝑒<sup><strong>𝑧 </strong></sup>\* 𝑒<sup><strong>𝑧</strong></sup>) / 𝛴<sup>2</sup>
- 𝛿𝑠/𝛿𝑧 = (𝑒<sup><strong>𝑧 </strong></sup>\* (𝛴 <font style="color: rgb(255,0,0);letter-spacing: 0.0px;">-</font>𝑒<sup><strong>𝑧</strong></sup>)) / 𝛴<sup>2</sup>
- 𝛿𝑠/𝛿𝑧 = (𝑒<sup><strong>𝑧</strong></sup>/𝛴) \* ((𝛴 <font style="color: rgb(255,0,0);">-</font>𝑒<sup><strong>𝑧</strong></sup>) / 𝛴)
- 𝛿𝑠/𝛿𝑧 = (𝑒<sup><strong>𝑧</strong></sup>/𝛴) \* (𝛴/𝛴<font style="color: rgb(255,0,0);">-</font>𝑒<sup><strong>𝑧</strong></sup>/𝛴)
- 𝛿𝑠/𝛿𝑧 = 𝑠 \* (1<font style="color: rgb(255,0,0);">-</font> 𝑠)

# Resources
- [https://ljvmiranda921.github.io/notebook/2017/08/13/softmax-and-the-negative-log-likelihood/#derivative-of-the-softmax](https://ljvmiranda921.github.io/notebook/2017/08/13/softmax-and-the-negative-log-likelihood/#derivative-of-the-softmax)
