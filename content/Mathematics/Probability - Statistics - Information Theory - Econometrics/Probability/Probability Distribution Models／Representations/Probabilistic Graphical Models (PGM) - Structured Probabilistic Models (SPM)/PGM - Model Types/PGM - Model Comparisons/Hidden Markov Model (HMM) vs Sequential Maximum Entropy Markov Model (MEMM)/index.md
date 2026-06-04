---
title: "Hidden Markov Model (HMM) vs Sequential Maximum Entropy Markov Model (MEMM)"
created: 2021-09-13T05:26:55.632-05:00
modified: 2021-09-13T05:26:55.632-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[Hidden Markov Model](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=10945915)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Maximum Entropy Markov Model (MEMM) - Conditional Markov Models (CMM)|Sequential Maximum Entropy Markov Model]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "classifies a sequence of hidden variables <font style=\"color: rgb(255,0,0);\">𝒀</font> when given <strong>𝑿</strong>\n<strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝑇</sub>\\] are observed variables\n<font style=\"color: rgb(255,0,0);\">𝒀 = \\[𝑌<sub>1</sub>, ..., 𝑌<sub>𝑇</sub></font><font style=\"color: rgb(255,0,0);\">\\]</font> are hidden variables (to be predicted)",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "[[ML - Generative／Joint vs Discriminative／Conditional Models|generative model]]",
      "[[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative model]] (does not model probability of <strong>𝑿</strong>)"
    ],
    [
      "estimate parameters for ([first-order markov assumption](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=15597722)):\n- \n\t- 𝐏(𝑋<sub>1</sub>|𝑌<sub>1</sub>)𝐏(𝑌<sub>1</sub>) · <strong>\\[</strong> 𝛱<sub>2≤𝑖≤𝑇</sub> 𝐏(𝑋<sub>𝑖</sub>|𝑌<sub>𝑖</sub>)𝐏(𝑌<sub>𝑖</sub>|𝑌<sub>𝑖-1</sub>) <strong>\\]</strong>",
      "estimate parameters for [[Conditional Probability Distribution (CPD)|conditional probability distribution]]'s:\n- 𝐏(𝑌<sub>1</sub>|𝑋<sub>1</sub>), 𝐏(𝑌<sub>2</sub>|𝑌<sub>1</sub>𝑋<sub>2</sub>), ..., 𝐏(𝑌<sub>𝑇</sub>|𝑌<sub>𝑇-1</sub>𝑋<sub>𝑇</sub>)"
    ],
    [
      {
        "content": "![[Hidden Markov Model (HMM) vs Sequential Maximum Entropy Markov Model (MEMM)/hidden-markov-model.png|301]]",
        "align": "center"
      },
      {
        "content": "![[Hidden Markov Model (HMM) vs Sequential Maximum Entropy Markov Model (MEMM)/maximum-entropy-markov-model-serial.png|301]]",
        "align": "center"
      }
    ],
    [
      {
        "content": "HMM cannot be generalized like MEMM",
        "align": "center"
      },
      "MEMM can be generalized to partially-connected and fully-connected models\n\n![[Hidden Markov Model (HMM) vs Sequential Maximum Entropy Markov Model (MEMM)/maximum-entropy-markov-model-general-partially-connected.png|301]]\n\n![[Hidden Markov Model (HMM) vs Sequential Maximum Entropy Markov Model (MEMM)/maximum-entropy-markov-model-general-fully-connected.png|301]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
