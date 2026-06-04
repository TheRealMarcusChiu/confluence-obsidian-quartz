---
title: "Linear Chain CRF vs Maximum Entropy Markov Model (MEMM)"
created: 2021-09-13T05:26:56.195-05:00
modified: 2021-09-13T05:26:56.195-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[First-Order Linear Chain CRF]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)|Maximum Entropy Markov Model]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "both classifies a sequence of hidden state variables <font style=\"color: rgb(255,0,0);\">𝒀 </font>given set <strong>𝑿</strong>\nboth a type of [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]]\n\n<strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝐽</sub>\\] are observed variables\n<font style=\"color: rgb(255,0,0);\">𝒀 = \\[𝑌<sub>1</sub>, ..., 𝑌<sub>𝐾</sub></font><font style=\"color: rgb(255,0,0);\">\\]</font> are hidden state variables (to be predicted)",
        "colspan": 2
      },
      null
    ],
    [
      "capable of modeling 𝐏(𝒀|𝑿):\n- 𝐏(𝒚|𝒙;𝜽) = 𝑒<sup>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖</sub>, 𝑦<sub>𝑖-1</sub>, 𝒙) \\]</sup> / 𝑍(𝒙)\n- 𝑍(𝒙) = 𝛴<sub>𝑦<sub>1</sub>∊𝑌<sub>1</sub></sub> ... 𝛴<sub>𝑦<sub>𝐾</sub>∊𝑌<sub>𝐾</sub></sub><strong>\\[</strong> 𝑒<sup>𝛴<sub>1≤𝑖≤𝐾</sub>𝛴<sub>0≤𝑗≤𝑘</sub>\\[ 𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖</sub>, 𝑦<sub>𝑖-1</sub>, 𝒙) \\]</sup> <strong>\\]</strong>",
      "models 𝐏(𝒀|𝑿) with 𝐏(𝑌<sub>1</sub>|𝑿)·𝐏(𝑌<sub>2</sub>|𝑌<sub>1</sub>𝑿)·...·𝐏(𝑌<sub>𝐾</sub>|𝑌<sub>𝐾-1</sub>𝑿) :\n- 𝐏(𝑦<sub>𝑖</sub>|𝑦<sub>𝑖-1</sub>,𝒙;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖</sub>, 𝑦<sub>𝑖-1</sub>, 𝒙)\\]</sup> / 𝑍(𝑦<sub>𝑖-1</sub>, 𝒙)\n- 𝑍(𝑦<sub>𝑖-1</sub>,𝒙) = 𝛴<sub>𝑦<sub>𝑖</sub>∊𝑌<sub>𝑖</sub></sub><strong>\\[</strong> 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑦<sub>𝑖</sub>, 𝑦<sub>𝑖-1</sub>, 𝒙)\\]</sup><strong>\\]</strong>"
    ],
    [
      "- computes all state transitions 𝒀 in a <strong>SINGLE GLOBAL</strong> regression model\n- hence, does NOT suffer the [[MEMM - Label Bias Problem - Causal-Competition Biases|label bias problem]]",
      "- computes state transitions 𝒀 in<strong> <font style=\"color: rgb(255,0,0);\">𝐾 </font>LOCAL</strong> regression models\n- hence, suffers the [[MEMM - Label Bias Problem - Causal-Competition Biases|label bias problem]]"
    ],
    [
      {
        "content": "First-Order Linear Chain CRF\n![[Linear Chain CRF vs Maximum Entropy Markov Model (MEMM)/linear-chain-conditional-random-field.png|301]]",
        "align": "center"
      },
      {
        "content": "[[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)|Fully Connected MEMM]]\n[[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)]]",
        "align": "center"
      }
    ],
    [
      {
        "content": "Linear Chain CRF can be generalized to [[Conditional／Discriminative Random Fields (CRF)|Conditional Random Fields (CRF)]]\n\nSecond-Order Linear Chain CRF\n![[Linear Chain CRF vs Maximum Entropy Markov Model (MEMM)/second-order-linear-chain-conditional-random-field.png|301]]\n\nGeneric CRF\n![[Linear Chain CRF vs Maximum Entropy Markov Model (MEMM)/general-conditional-random-field.png|301]]",
        "align": "center"
      },
      {
        "content": "[[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)|Other MEMM Variants]]\n\nSecond-Order Sequential MEMM\n![[Linear Chain CRF vs Maximum Entropy Markov Model (MEMM)/maximum-entropy-markov-model-serial-second-order.png|301]]\n\nPartially-Connected MEMM\n![[Linear Chain CRF vs Maximum Entropy Markov Model (MEMM)/maximum-entropy-markov-model-general-partially-connected.png|301]]",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
