---
title: "Conditional Random Field (CRF) vs Markov Random Field (MRF)"
created: 2021-09-13T05:26:54.514-05:00
modified: 2021-09-13T05:26:54.514-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Conditional／Discriminative Random Fields (CRF)|Conditional/Discriminative Random Fields (CRF)]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Networks/Nets - Markov Random Fields (MRF)]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝑿 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝐽</sub>} - sequence of source/input/observed variables\n𝒀 = {𝑌<sub>1</sub> , ..., 𝑌<sub>𝐾</sub>} - sequence of target/output/hidden variables\n\nTypically, we have input features 𝑥, and are interested in either/both:\n- predicting the distribution of 𝐏(𝒀|𝑿=𝒙)\n- best possible label 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝒚</sub> 𝐏(𝒀=𝒚|𝑿=𝒙)",
        "colspan": 2
      },
      null
    ],
    [
      "is a [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]] that models the [[Conditional Probability Distribution (CPD)|CONDITIONAL probabilities]] 𝐏(𝒀|𝑿) <font style=\"color: rgb(128,128,128);\">(it does not model anything else)</font>:\n- 𝐏(𝒀=𝒚|𝑿=𝒙) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒚, 𝒙) \\]</sup> / 𝑍(𝒙)\n- 𝑍(𝑿=𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\\[</strong> 𝛱<sub>0≤𝑗≤𝑘</sub>\\[ 𝜙<sub>𝑗</sub>(𝑦<sub>1</sub>, ..., 𝑦<sub>𝐾</sub>, 𝒙) \\] <strong>\\]</strong>",
      "is a [[ML - Generative／Joint vs Discriminative／Conditional Models|generative model]] that models the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|JOINT probabilities]] 𝐏(𝒀,𝑿) <font style=\"color: rgb(128,128,128);\">(which can be used to compute 𝐏(𝒀|𝑿))</font>:\n- 𝐏(𝒀=𝒚,𝑿=𝒙) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝒚, 𝒙) \\]</sup> / 𝑍\n- 𝑍 = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub>𝛴<sub>𝑥<sub>1</sub>∊𝑋<sub>1</sub></sub> ... 𝛴<sub>𝑥<sub>𝐽</sub>∊𝑋<sub>𝐽</sub></sub><strong>\\[</strong> 𝛱<sub>0≤𝑗≤𝑘</sub>\\[ 𝜙<sub>𝑗</sub>(𝑦<sub>1</sub>,...,𝑦<sub>𝐾</sub>,𝑥<sub>1</sub>,...,𝑥<sub>𝐽</sub>) \\] <strong>\\]</strong>"
    ],
    [
      {
        "content": "![[Conditional Random Field (CRF) vs Markov Random Field (MRF)/conditional-markov-model.png|301]]",
        "align": "center"
      },
      {
        "content": "![[Conditional Random Field (CRF) vs Markov Random Field (MRF)/markov-model.png|301]]",
        "align": "center"
      }
    ],
    [
      "the advantage of CRFs is that they are more directly modeling the standard prediction problem 𝐏(𝑌|𝑋). As such, they're often more accurate. But they cannot (without further modifications) be used for anything other than the standard prediction problem",
      "the advantage of MRFs is that they are fully generative, and so can model arbitrary prediction problems. For instance, suppose for some reason that you had missing values in your input 𝑥. Then an MRF can marginalize over the missing values because it models the full probability distribution. As another example, suppose you had the 𝑦 and wanted to predict 𝑋. Then an MRF can also predict 𝐏(𝑋|𝑌=𝑦), but a CRF cannot"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
