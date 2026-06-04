---
title: "Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)"
created: 2021-09-13T05:28:30.488-05:00
modified: 2026-05-24T14:30:52.151-05:00
parent: "[[Probabilistic Inference]]"
children: []
---
###### Syntax

> [!expand]- Click here to expand...
> ![[Probabilistic Inference - Syntax#^excerpt]]
# Probabilistic Query Types
````excerpt
- product comes from a joint probability <font style="color: rgb(128,128,128);">𝐏(𝐐=𝐪</font><font style="color: rgb(128,128,128);">, 𝐇=𝐡</font><font style="color: rgb(128,128,128);">, 𝐄=𝐞) <font style="color: rgb(51,51,51);">being factorized into a product of conditional probabilities</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">when we take the log of products it becomes sum of factors</font></font>
```merge-table
{
  "rows": [
    [
      {
        "content": "Query",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Product\nSum",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Marginalization<font style=\"color: rgb(128,128,128);\"><strong>𝛴</strong></font>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Maximization<font style=\"color: rgb(128,128,128);\">𝑎𝑟𝑔𝑚𝑎𝑥</font>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Posterior Conditional Query<font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪|𝐄=𝐞) = 𝛴<sub>𝐡∊𝐇</sub>\\[ 𝐏(𝐐=𝐪</font><font style=\"color: rgb(128,128,128);\">, 𝐇=𝐡</font><font style=\"color: rgb(128,128,128);\">, 𝐄=𝐞) \\] / 𝐏(𝐄=𝐞)</font>\n\nBelief Updating Query\n(a type of posterior conditional query)<font style=\"color: rgb(128,128,128);\">𝐏(𝑄<sub>𝑖</sub>=𝑞<sub>𝑖</sub>|𝐄=𝐞) = 𝛴<sub>𝐡∊𝐇</sub>\\[ 𝐏(<font style=\"color: rgb(128,128,128);\">𝑄</font><sub>𝑖</sub><font style=\"color: rgb(128,128,128);\">=</font><font style=\"color: rgb(128,128,128);\">𝑞</font><sub>𝑖</sub></font><font style=\"color: rgb(128,128,128);\">, 𝐇=𝐡</font><font style=\"color: rgb(128,128,128);\">, 𝐄=𝐞) \\] / 𝐏(𝐄=𝐞)</font>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- sum-product problem\n- sum-log-sums problem"
    ],
    [
      {
        "content": "Prior Marginal Query<font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪) = 𝛴<sub>𝐡∊𝐇</sub>\\[ 𝐏(𝐐=𝐪, 𝐇=𝐡) \\]</font>\n\nProbability of Evidence Query<font style=\"color: rgb(128,128,128);\">𝐏(𝐄=𝐞</font><font style=\"color: rgb(128,128,128);\">)</font><font style=\"color: rgb(128,128,128);\"> = </font><font style=\"color: rgb(128,128,128);\">𝛴<sub>𝐡∊𝐇</sub>\\[ 𝐏(</font><font style=\"color: rgb(128,128,128);\">𝐇=𝐡, 𝐄=𝐞</font><font style=\"color: rgb(128,128,128);\">) \\]</font>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- sum-product problem\n- sum-log-sums problem\n- both queries <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\">essentially the same where 𝐐 = 𝐄</font></font>\n- <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\">\\#P-Hard Problem</font></font>"
    ],
    [
      {
        "content": "Maximum a Posterior (𝑴𝑨𝑷) Query𝑀𝐴𝑃(𝐐=?|𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub>\\[ 𝛴<sub>𝐡∊𝐇</sub>\\[ 𝐏(𝐐=𝐪, 𝐇=𝐡, 𝐄=𝐞) \\] \\]\nwhere: 𝐐∪𝐄⊂𝐗 and 𝐐∪𝐇∪𝐄=𝐗",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "- max-sum-product problem\n- max-sum-log-sums problem\n- most probable assignment because they include maximization\n- NP<sup>PP</sup>-Hard Problem"
    ],
    [
      {
        "content": "Most Probable Explanation (𝑴𝑷𝑬) Query𝑀𝑃𝐸(𝐐=?|𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub>\\[ 𝐏(𝐐=𝐪, 𝐄=𝐞) \\] \nwhere: 𝐐∪𝐄=𝐗",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">✘</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "- max-product problem\n- max-log-sums problem\n- most probable assignment because they include maximization\n- NP-Hard Problem"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

more details: [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)]]
````
^excerpt

all queries can be further classified as either: prediction vs diagnosis ([[ML - Generative／Joint vs Discriminative／Conditional Models|discriminative vs generative]] models):
- if the query node <font style="color: rgb(128,128,128);">𝐐</font> is a terminal variable in a directed graphical model, the inference process is called prediction
- if the query node <font style="color: rgb(128,128,128);">𝐐</font> is an ancestor of the evidence, the inference process is called diagnosis
```merge-table
{
  "rows": [
    [
      {
        "content": "Query Type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Posterior Marginals\n\nor\n\na Posterior Belief\n\nor\n\nConditional Probability Query",
        "bg": "#f4f5f7"
      },
      "a <strong>posterior</strong> <strong>marginal query</strong> <font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪|𝐄=𝐞)</font>\n\ncompact joint probability form\n\n<font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪|𝐄=𝐞) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\\[ 𝐏(𝐐=𝐪</font><font style=\"color: rgb(128,128,128);\">, <strong>𝐇</strong>=<strong>𝐡</strong></font><font style=\"color: rgb(128,128,128);\">, 𝐄=𝐞) \\] / 𝐏(𝐄=𝐞)</font>\n\nexpanded joint probability form\n\n<font style=\"color: rgb(128,128,128);\">𝐏(𝑄<sub>1</sub>=𝑞<sub>1</sub>, ..., 𝑄<sub>𝑟</sub>=𝑞<sub>𝑟</sub>| 𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub>) = 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub>... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \\[ 𝐏(𝑄<sub>1</sub>=𝑞<sub>1</sub>, ..., 𝑄<sub>𝑟</sub>=𝑞<sub>𝑟</sub>, 𝐻<sub>1</sub>=𝘩<sub>1</sub>, ..., 𝐻<sub>𝑡</sub>=𝘩<sub>𝑡</sub>, 𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub>) \\] / 𝑃(𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub>)</font>\n\nconditional probability form\n\n> [!expand]- conditional probability form\n> <font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪</font><font style=\"color: rgb(128,128,128);\">, <strong>𝐇</strong>=<strong>𝐡</strong></font><font style=\"color: rgb(128,128,128);\">, 𝐄=𝐞)</font> could be written as a product of conditional probabilities ([Equation 14.2](http://confluence.marcuschiu.com/display/NOT/AI+Chapter+14+-+Probabilistic+Reasoning#AIChapter14-ProbabilisticReasoning-Equation14.2))\n> - <font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪|𝐄=𝐞) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub><strong>\\[</strong> 𝐏(𝐐=𝐪, <strong>𝐇</strong>=<strong>𝐡</strong>, 𝐄=𝐞) <strong>\\]</strong> / 𝐏(𝐄=𝐞)</font>\n> - <font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪|𝐄=𝐞) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub><strong>\\[</strong> 𝛱<sub>1≤</sub><sub>𝑘≤𝑛</sub>\\[ 𝐏(<strong><strong><strong>𝑋</strong></strong></strong><sub>𝑘</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(<strong><strong><strong>𝑋</strong></strong></strong><sub>𝑘</sub>)) \\] <strong>\\]</strong> / 𝐏(𝐄=𝐞)</font>\n>\n> where each variable in 𝑃(<strong>𝑋</strong><sub>𝑘</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(<strong>𝑋</strong><sub>𝑘</sub>)) is instantiated with <font style=\"color: rgb(128,128,128);\">𝐪</font>, <font style=\"color: rgb(128,128,128);\">𝐞</font>, and <font style=\"color: rgb(128,128,128);\"><strong>𝐡</strong></font>"
    ],
    [
      {
        "content": "Prior Marginals\n\nor\n\nLikelihood",
        "bg": "#f4f5f7"
      },
      "a <strong>prior</strong> <strong>marginal query</strong> <font style=\"color: rgb(128,128,128);\">𝐏(</font><font style=\"color: rgb(128,128,128);\">𝐐</font><font style=\"color: rgb(128,128,128);\">=</font><font style=\"color: rgb(128,128,128);\">𝐪</font><font style=\"color: rgb(128,128,128);\">)</font> where set of evidence variables <font style=\"color: rgb(128,128,128);\">𝐄</font> is empty, and <font style=\"color: rgb(128,128,128);\"><strong>𝐇</strong></font> is the remainder of the variables\n\ncompact joint probability form\n\n<font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\\[ 𝐏(𝐐=𝐪, <strong>𝐇</strong>=<strong>𝐡</strong>) \\]</font>\n\nexpanded joint probability form\n\n<font style=\"color: rgb(128,128,128);\">𝐏(𝑄<sub>1</sub>=𝑞<sub>1</sub>, ..., 𝑄<sub>𝑟</sub>=𝑞<sub>𝑟</sub>) = 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub>... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \\[ 𝐏(𝑄<sub>1</sub>=𝑞<sub>1</sub>, ..., 𝑄<sub>𝑟</sub>=𝑞<sub>𝑟</sub>, 𝐻<sub>1</sub>=𝘩<sub>1</sub>, ..., 𝐻<sub>𝑡</sub>=𝘩<sub>𝑡</sub></font><font style=\"color: rgb(128,128,128);\">) \\]</font>\n\nconditional probability form\n\n> [!expand]- conditional probability form\n> <font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪</font><font style=\"color: rgb(128,128,128);\">, <strong>𝐇</strong>=<strong>𝐡</strong></font><font style=\"color: rgb(128,128,128);\">)</font> could be written as a product of conditional probabilities ([Equation 14.2](http://confluence.marcuschiu.com/display/NOT/AI+Chapter+14+-+Probabilistic+Reasoning#AIChapter14-ProbabilisticReasoning-Equation14.2))\n> - <font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub><strong>\\[</strong> 𝐏(𝐐=𝐪, <strong>𝐇</strong>=<strong>𝐡</strong>) <strong>\\]</strong></font>\n> - <font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub><strong>\\[</strong> 𝛱<sub>1≤</sub><sub>𝑘≤𝑛</sub>\\[ 𝐏(<strong><strong><strong>𝑋</strong></strong></strong><sub>𝑘</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(<strong><strong><strong>𝑋</strong></strong></strong><sub>𝑘</sub>)) \\] <strong>\\]</strong></font>\n>\n> where each variable in 𝑃(<strong>𝑋</strong><sub>𝑘</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(<strong>𝑋</strong><sub>𝑘</sub>)) is instantiated with <font style=\"color: rgb(128,128,128);\">𝐪</font> and <font style=\"color: rgb(128,128,128);\"><strong>𝐡</strong></font>"
    ],
    [
      {
        "content": "Probability of Evidence (PoE)\n\nor\n\nLikelihood",
        "bg": "#f4f5f7"
      },
      "a <strong>probability of evidence</strong> <strong>query</strong> <font style=\"color: rgb(128,128,128);\">𝐏</font><font style=\"color: rgb(128,128,128);\">(</font><font style=\"color: rgb(128,128,128);\">𝐄</font><font style=\"color: rgb(128,128,128);\">=</font><font style=\"color: rgb(128,128,128);\">𝐞</font><font style=\"color: rgb(128,128,128);\">)</font> where set of query variables <font style=\"color: rgb(128,128,128);\">𝐐</font> is empty (similar to prior marginal query)\n\ncompact joint probability form\n\n<font style=\"color: rgb(128,128,128);\">𝐏(𝐄=𝐞</font><font style=\"color: rgb(128,128,128);\">)</font><font style=\"color: rgb(128,128,128);\"> = </font><font style=\"color: rgb(128,128,128);\"><strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\\[ 𝐏(</font><font style=\"color: rgb(128,128,128);\"><strong>𝐇</strong>=<strong>𝐡, 𝐄=𝐞</strong></font><font style=\"color: rgb(128,128,128);\">) \\]</font>\n\nexpanded joint probability form\n\n<font style=\"color: rgb(128,128,128);\">𝐏(𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub>) = 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub>... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \\[ 𝐏(𝐻<sub>1</sub>=𝘩<sub>1</sub>, ..., 𝐻<sub>𝑡</sub>=𝘩<sub>𝑡</sub></font><font style=\"color: rgb(128,128,128);\">, 𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub>) \\]</font>\n\nconditional probability form\n\n> [!expand]- conditional probability form\n> <font style=\"color: rgb(128,128,128);\">𝐏(</font><font style=\"color: rgb(128,128,128);\"><strong>𝐇</strong>=<strong>𝐡, 𝐄=𝐞</strong></font><font style=\"color: rgb(128,128,128);\">) </font>could be written as a product of conditional probabilities ([Equation 14.2](http://confluence.marcuschiu.com/display/NOT/AI+Chapter+14+-+Probabilistic+Reasoning#AIChapter14-ProbabilisticReasoning-Equation14.2))\n> - <font style=\"color: rgb(128,128,128);\">𝐏(𝐄=𝐞</font><font style=\"color: rgb(128,128,128);\">)</font><font style=\"color: rgb(128,128,128);\"> = </font><font style=\"color: rgb(128,128,128);\"><strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\\[ 𝐏(</font><font style=\"color: rgb(128,128,128);\"><strong>𝐇</strong>=<strong>𝐡, 𝐄=𝐞</strong></font><font style=\"color: rgb(128,128,128);\">) \\]</font>\n> - <font style=\"color: rgb(128,128,128);\">𝐏(𝐄=𝐞) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub><strong>\\[</strong> 𝛱<sub>1≤</sub><sub>𝑘≤𝑛</sub>\\[ 𝐏(<strong><strong><strong>𝑋</strong></strong></strong><sub>𝑘</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(<strong><strong><strong>𝑋</strong></strong></strong><sub>𝑘</sub>)) \\] <strong>\\]</strong></font>\n>\n> where each variable in 𝑃(<strong>𝑋</strong><sub>𝑘</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(<strong>𝑋</strong><sub>𝑘</sub>)) is instantiated with <font style=\"color: rgb(128,128,128);\">𝐞</font>, and <font style=\"color: rgb(128,128,128);\"><strong>𝐡</strong></font>"
    ],
    [
      {
        "content": "Maximum a Posteriori (MAP) Hypothesis\n\nor\n\nMarginal MAP\n\nor\n\nMost Probable Assignment (MPA)",
        "bg": "#f4f5f7"
      },
      "the <strong>𝑀𝐴𝑃</strong> task is to find an assignment <font style=\"color: rgb(128,128,128);\">𝐐</font><font style=\"color: rgb(128,128,128);\">=</font><font style=\"color: rgb(128,128,128);\">𝐪</font> with the greatest probability given evidence <font style=\"color: rgb(128,128,128);\">𝐞</font>\n\na <strong>𝑀𝐴𝑃 query</strong> <font style=\"color: rgb(128,128,128);\"><strong>𝑀𝐴𝑃</strong>(𝐐=?, 𝐄=𝐞)</font> is defined as\n\ncompact form\n\n<strong>𝑀𝐴𝑃</strong><font style=\"color: rgb(128,128,128);\">(𝐐=?| 𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥</font><sub>𝐪</sub><strong>\\[</strong>𝛴<sub>𝐡∊𝐇</sub><font style=\"color: rgb(128,128,128);\">\\[ 𝐏(𝐐=𝐪, 𝐇=𝐡, 𝐄=𝐞) \\] </font><strong>\\]\n𝑀𝐴𝑃</strong>(𝐐=?, 𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub><strong>\\[</strong> <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\\[ 𝐏(𝐐=𝐪, 𝐇=𝐡 | 𝐄=𝐞) \\] <strong>\\]</strong>\n\nexpanded form\n\n<font style=\"color: rgb(128,128,128);\"><strong>𝑀𝐴𝑃</strong> (𝑄<sub>1</sub>=?, ..., 𝑄<sub>𝑟</sub>=?, 𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub>) = <font style=\"color: rgb(128,128,128);\">𝑎𝑟𝑔𝑚𝑎𝑥</font><sub><font style=\"color: rgb(128,128,128);\">𝑞</font><sub>1</sub>∊<font style=\"color: rgb(128,128,128);\">𝑄</font><sub>1</sub></sub>, ...,𝑎<font style=\"color: rgb(128,128,128);\">𝑟𝑔𝑚𝑎𝑥</font><sub><font style=\"color: rgb(128,128,128);\">𝑞</font><sub>𝑟</sub>∊𝑄<sub><font style=\"color: rgb(128,128,128);\">𝑟</font></sub></sub><strong>\\[</strong> 𝛴<sub>𝘩<sub>1</sub>∊𝐻<sub>1</sub></sub>... 𝛴<sub>𝘩<sub>𝑡</sub>∊𝐻<sub>𝑡</sub></sub> \\[ 𝐏(𝑄<sub>1</sub>=𝑞<sub>1</sub>, ..., 𝑄<sub>𝑟</sub>=𝑞<sub>𝑟</sub>, 𝐻<sub>1</sub>=𝘩<sub>1</sub>, ..., 𝐻<sub>𝑡</sub>=𝘩<sub>𝑡</sub> | 𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub>) \\] <strong>\\]</strong></font>\n\niono:\n- <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪|𝐄=𝐞) = <font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪,𝐄=𝐞) / <font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝐏(𝐄=𝐞)</font></font></font></font></font></font></font></font>\n- <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪|𝐄=𝐞) ∝ <font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪,𝐄=𝐞)</font></font></font></font></font></font></font></font></font></font></font></font></font></font>\n- <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪|𝐄=𝐞) ∝ <font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">(1/𝑍) 𝛱<sub><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝑘</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></sub>\\[ϕ'<sub>𝑘</sub>(𝐷'<sub>𝑘</sub>)</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font>\\] \\# 𝑍 is the partition function</font></font></font></font></font></font></font></font>\n- <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝐏(𝐐=𝐪|𝐄=𝐞) ∝<font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"> 𝛱<sub><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝑘</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></sub>\\[ϕ'<sub>𝑘</sub>(𝐷'<sub>𝑘</sub>)</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font>\\]</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font>\n\ntherefore:\n- <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub> 𝐏(𝐐=𝐪|𝐄=𝐞) = <font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝑎𝑟𝑔𝑚𝑎𝑥</font><sub>𝐪</sub></font> <font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝛱<sub><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(51,51,51);\"><font style=\"color: rgb(128,128,128);\"><font style=\"color: rgb(128,128,128);\">𝑘</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></sub>\\[ϕ'<sub>𝑘</sub>(𝐷'<sub>𝑘</sub>)</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font>\\]</font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font></font>"
    ],
    [
      {
        "content": "Most Probable Explanation (MPE)\n\nor\n\nMost Probable Assignment (MPA)",
        "bg": "#f4f5f7"
      },
      "the <strong>𝑀𝑃𝐸</strong> task is to find an assignment <font style=\"color: rgb(128,128,128);\">𝐐</font><font style=\"color: rgb(128,128,128);\">=</font><font style=\"color: rgb(128,128,128);\">𝐪</font> with the greatest probability given evidence <font style=\"color: rgb(128,128,128);\">𝐞</font>\n\na <strong>𝑀𝑃𝐸 query</strong> <font style=\"color: rgb(128,128,128);\"><strong>𝑀𝑃𝐸</strong>(𝐐=?, 𝐄=𝐞) </font>is analogous to <strong>𝑀𝐴𝑃 </strong>except <font style=\"color: rgb(128,128,128);\"><strong>𝐇</strong></font> is empty (i.e. it is interested in all the unobserved variables)\n\ncompact form\n\n<font style=\"color: rgb(128,128,128);\"><strong>𝑀𝑃𝐸</strong>(𝐐=?| 𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝐪</sub>\\[ 𝐏(𝐐=𝐪, 𝐄=𝐞) \\]</font><strong>𝑀𝑃𝐸</strong><font style=\"color: rgb(128,128,128);\">(𝐐=?, 𝐄=𝐞) = 𝑎𝑟𝑔𝑚𝑎𝑥</font><sub>𝐪</sub><font style=\"color: rgb(128,128,128);\">\\[ 𝐏(𝐐=𝐪 | 𝐄=𝐞) \\]</font>\n\nexpanded form\n\n<font style=\"color: rgb(128,128,128);\"><strong>𝑀𝑃𝐸</strong>(𝑄<sub>1</sub>=?, ..., 𝑄<sub>𝑟</sub>=?, 𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub>) = <font style=\"color: rgb(128,128,128);\">𝑎𝑟𝑔𝑚𝑎𝑥</font><sub>𝑞<sub>1</sub>∊𝑄<sub>1</sub></sub><font style=\"color: rgb(128,128,128);\">,</font><font style=\"color: rgb(128,128,128);\"> ...,</font><font style=\"color: rgb(128,128,128);\">𝑎</font><font style=\"color: rgb(128,128,128);\">𝑟𝑔𝑚𝑎𝑥</font><sub>𝑞<sub>𝑟</sub>∊𝑄<sub>𝑟</sub></sub></font><font style=\"color: rgb(128,128,128);\">\\[ 𝐏(𝑄<sub>1</sub>=𝑞<sub>1</sub>, ..., 𝑄<sub>𝑟</sub>=𝑞<sub>𝑟</sub>| 𝐸<sub>1</sub>=𝑒<sub>1</sub>, ..., 𝐸<sub>𝑠</sub>=𝑒<sub>𝑠</sub>) \\]</font>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
