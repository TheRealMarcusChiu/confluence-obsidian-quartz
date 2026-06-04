---
title: "Logistic Regression Model vs Sequential Maximum Entropy Markov Model (MEMM)"
created: 2021-09-13T05:26:57.224-05:00
modified: 2021-09-13T05:26:57.224-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Logistic (Logit) Regression Model|Logistic Regression Model]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)|Sequential Maximum Entropy Markov Model]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- classifies a SINGLE hidden variable <font style=\"color: rgb(255,0,0);\">𝑌</font> given set <strong>𝑿</strong>\n- [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]]",
      "- classifies a SEQUENCE of hidden variables <font style=\"color: rgb(255,0,0);\">𝒀 </font>given set <strong>𝑿</strong>\n- [[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]]"
    ],
    [
      "- <strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>\\] are observed variables\n- <font style=\"color: rgb(255,0,0);\">𝑌</font> is a hidden variable (to be predicted)\n\ncapable of modeling 𝐏(𝑌|<strong>𝑿</strong>):\n- 𝐏(𝑌=𝑦|<strong>𝑿</strong>=𝒙;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌=𝑦,𝒙)\\]</sup> / 𝛴<sub>𝑦'∊𝑌</sub>\\[𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌=𝑦',𝒙)\\]</sup>\\]",
      "- <strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝑇</sub>\\] are observed variables\n- <font style=\"color: rgb(255,0,0);\">𝒀 = \\[𝑌<sub>1</sub>, ..., 𝑌<sub>𝑇</sub></font><font style=\"color: rgb(255,0,0);\">\\]</font> are hidden variables (to be predicted)\n\ncapable of modeling 𝐏(𝑌<sub>1</sub>|𝑋<sub>1</sub>)·𝐏(𝑌<sub>2</sub>|𝑌<sub>1</sub>𝑋<sub>2</sub>)·...·𝐏(𝑌<sub>𝑇</sub>|𝑌<sub>𝑇-1</sub>𝑋<sub>𝑇</sub>):\n- 𝐏(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>|𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>;𝜽) = 𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>,𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>)\\]</sup> / 𝑍(𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>)\n- 𝑍(𝑋<sub>𝑡</sub>=𝑥<sub>𝑡</sub>,𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>) = 𝛴<sub>𝑦<sub>𝑡</sub>'∊𝑌<sub>𝑡</sub></sub>\\[𝑒<sup>𝛴<sub>0≤𝑗≤𝑘</sub>\\[𝜃<sub>𝑗</sub>·𝑓<sub>𝑗</sub>(𝑌<sub>𝑡</sub>=𝑦<sub>𝑡</sub>',𝑌<sub>𝑡-1</sub>=𝑦<sub>𝑡-1</sub>,𝑿=𝒙)\\]</sup>\\]"
    ],
    [
      {
        "content": "![[Logistic Regression Model vs Sequential Maximum Entropy Markov Model (MEMM)/logistic-regression-vs-naive-bayes-2.png|301]]",
        "align": "center"
      },
      {
        "content": "![[Logistic Regression Model vs Sequential Maximum Entropy Markov Model (MEMM)/maximum-entropy-markov-model-serial.png|301]]",
        "align": "center"
      }
    ],
    [
      "",
      {
        "content": "Sequential MEMM can be generalized to [[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)|Partially-Connected MEMM]] and [[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)|Fully-Connected MEMM]]\n\n![[Logistic Regression Model vs Sequential Maximum Entropy Markov Model (MEMM)/maximum-entropy-markov-model-general-partially-connected.png|301]]\n\n![[Logistic Regression Model vs Sequential Maximum Entropy Markov Model (MEMM)/maximum-entropy-markov-model-general-fully-connected.png|301]]",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
