---
title: "Conditional Random Field (CRF) vs Linear Chain CRF"
created: 2021-09-13T05:26:53.474-05:00
modified: 2021-09-13T05:26:53.474-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Conditional／Discriminative Random Fields (CRF)|Conditional Random Field (CRF)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[First-Order Linear Chain CRF]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "both classifies a sequence of hidden state variables <font style=\"color: rgb(255,0,0);\">𝒀 </font>given set <strong>𝑿</strong>both a type of [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]]\n\n<strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝐽</sub>\\] are observed variables\n<font style=\"color: rgb(255,0,0);\">𝒀 = \\[𝑌<sub>1</sub>, ..., 𝑌<sub>𝐾</sub></font><font style=\"color: rgb(255,0,0);\">\\]</font> are hidden state variables (to be predicted)",
        "colspan": 2
      },
      null
    ],
    [
      "capable of modeling <strong><font style=\"color: rgb(0,128,0);\">ALL</font></strong> 𝐏(𝒀|𝑿):\n- 𝐏(𝒀=𝒚|𝑿=𝒙) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒀=𝒚,𝑿=𝒙) \\]</sup> / 𝑍(𝑿=𝒙)\n- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝑘</sub>∊𝑌<sub>𝑘</sub></sub><strong>\\[</strong> 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>1</sub>=𝑦<sub>1</sub>,...,𝑌<sub>𝑘</sub>=𝑦<sub>𝑘</sub>,𝑿=𝒙) \\]</sup><strong>\\]</strong>",
      "capable of modeling<strong><font style=\"color: rgb(128,0,0);\"> LIMITED</font></strong> 𝐏(𝒀|𝑿):\n- 𝐏(𝒀=𝒚|𝑿=𝒙;𝜽) = 𝑒<sup>𝛴<sub>1≤𝑡≤𝑘</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>,𝑿=𝒙) \\]</sup> / 𝑍(𝑿=𝒙)\n- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝑇</sub>∊𝑌<sub>𝑇</sub></sub><strong>\\[</strong> 𝑒<sup>𝛴<sub>1≤𝑡≤𝑘</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>,𝑿=𝒙) \\]</sup> <strong>\\]</strong>"
    ],
    [
      "![[Conditional Random Field (CRF) vs Linear Chain CRF/general-conditional-random-field.png|301]]",
      {
        "content": "![[Conditional Random Field (CRF) vs Linear Chain CRF/linear-chain-conditional-random-field.png|301]]",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
