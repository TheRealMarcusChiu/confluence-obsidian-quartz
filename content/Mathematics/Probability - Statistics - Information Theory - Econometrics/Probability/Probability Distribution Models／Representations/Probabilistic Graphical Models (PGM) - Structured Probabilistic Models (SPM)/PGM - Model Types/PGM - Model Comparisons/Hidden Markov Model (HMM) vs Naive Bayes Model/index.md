---
title: "Hidden Markov Model (HMM) vs Naive Bayes Model"
created: 2021-09-13T05:26:55.204-05:00
modified: 2021-09-13T05:26:55.204-05:00
parent: "[[PGM - Model Comparisons]]"
children: []
---
```merge-table
{
  "rows": [
    [
      {
        "content": "[[Naive Bayes Model - Bayes Model|Naive Bayes Model]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Hidden Markov Models (HMM)|Hidden Markov Model]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "- classify a single hidden variable",
      "- classify a sequence of hidden variables"
    ],
    [
      "- <strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>\\] are observed variables\n- <font style=\"color: rgb(255,0,0);\">𝑌</font> is a hidden variable (to be predicted)\n\nestimates parameters for:\n- 𝐏(𝑌)\n- 𝛱<sub>1≤𝑖≤𝑛</sub>𝐏(<strong>𝑋<sub>𝑖</sub></strong>|𝑌) <font style=\"color: rgb(128,128,128);\">\\# which approximates 𝐏(<strong>𝑿</strong>|𝑌)</font>",
      "- <strong>𝑿 </strong>= \\[𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>\\] are observed variables\n- <font style=\"color: rgb(255,0,0);\">𝒀 = \\[𝑌<sub>1</sub>, ..., 𝑌<sub>𝑛</sub></font><font style=\"color: rgb(255,0,0);\">\\]</font> are hidden variables (to be predicted)\n\nestimate parameters for:\n- [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|first-order markov assumption]]:\n\t- 𝐏(𝑋<sub>1</sub>|𝑌<sub>1</sub>)𝐏(𝑌<sub>1</sub>) · <strong>\\[</strong> 𝛱<sub>2≤𝑖≤𝑇</sub> 𝐏(𝑋<sub>𝑖</sub>|𝑌<sub>𝑖</sub>)𝐏(𝑌<sub>𝑖</sub>|𝑌<sub>𝑖-1</sub>) <strong>\\]</strong>\n- [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|second-order markov assumption]]:\n\t- 𝐏(𝑋<sub>1</sub>|𝑌<sub>1</sub>)𝐏(𝑌<sub>1</sub>) · 𝐏(𝑋<sub>2</sub>|𝑌<sub>2</sub>𝑌<sub>1</sub>)𝐏(𝑌<sub>2</sub>|𝑌<sub>1</sub>) · \\[ 𝛱<sub>3≤𝑖≤𝑇</sub> 𝐏(𝑋<sub>𝑖</sub>|𝑌<sub>𝑖</sub>𝑌<sub>𝑖-1</sub>)𝐏(𝑌<sub>𝑖</sub>|𝑌<sub>𝑖-1</sub>𝑌<sub>𝑖-2</sub>) \\]"
    ],
    [
      "![[Hidden Markov Model (HMM) vs Naive Bayes Model/logistic-regression-vs-naive-bayes-1.png|301]]",
      "![[Hidden Markov Model (HMM) vs Naive Bayes Model/hidden-markov-model.png|301]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
