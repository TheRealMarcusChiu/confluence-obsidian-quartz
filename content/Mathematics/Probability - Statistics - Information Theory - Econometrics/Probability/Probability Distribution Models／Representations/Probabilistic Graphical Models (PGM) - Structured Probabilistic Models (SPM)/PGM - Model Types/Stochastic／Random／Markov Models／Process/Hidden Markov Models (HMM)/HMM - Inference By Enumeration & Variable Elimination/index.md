---
title: "HMM - Inference By Enumeration & Variable Elimination"
created: 2021-09-13T05:27:02.776-05:00
modified: 2026-05-21T03:59:54.864-05:00
parent: "[[Hidden Markov Models (HMM)]]"
children: []
---
![[HMM - Inference By Enumeration & Variable Elimination/hidden-markov-model.png|301]]
# Inference Methods

```merge-table
{
  "rows": [
    [
      {
        "content": "Inference by Enumeration",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Variable Elimination",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "read: [[Probabilistic Inference - Inference by Enumeration Algorithm|Inference by Enumeration]]",
        "align": "center"
      },
      {
        "content": "read: [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|Variable Elimination]]",
        "align": "center"
      }
    ],
    [
      {
        "content": "the conditional probability of variable 𝑦<sub>𝑖</sub> given 𝑥: 𝐏(𝑦<sub>𝑖</sub> | 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)𝑦<sub>𝑖</sub> is now the query variable𝑥 = {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>} is now the evidence variables\n\ncan be calculated as:𝐏(𝑦<sub>𝑖</sub> | 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>) = <font style=\"color: rgb(128,0,0);\">𝐏(𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub></font><font style=\"color: rgb(128,0,0);\">)</font> / <font style=\"color: rgb(0,128,0);\">𝐏(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font>",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "where:\n- <font style=\"color: rgb(128,0,0);\">𝐏(𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font> = 𝛴<sub>𝑦<sub>1</sub></sub> ··· 𝛴<sub>𝑦<sub>𝑖-1</sub></sub>𝛴<sub>𝑦<sub>𝑖+1</sub></sub>··· 𝛴<sub>𝑦<sub>𝑇</sub></sub> \\[ 𝐏(𝑦<sub>1</sub>, ..., 𝑦<sub>𝑇</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>) \\] <font style=\"color: rgb(128,128,128);\">\\# notice missing 𝛴<sub>𝑦<sub>𝑖</sub></sub></font>\n- <font style=\"color: rgb(128,0,0);\">𝐏(𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font> = 𝛴<sub>𝑦<sub>1</sub></sub> ··· 𝛴<sub>𝑦<sub>𝑖-1</sub></sub>𝛴<sub>𝑦<sub>𝑖+1</sub></sub><sub><sub></sub></sub>··· 𝛴<sub>𝑦<sub>𝑇</sub></sub> \\[ 𝐏(𝑦<sub>1</sub>)𝐏(𝑥<sub>1</sub>|𝑦<sub>1</sub>) ... 𝐏(𝑦<sub>𝑇</sub>|𝑦<sub>𝑇-1</sub>)𝐏(𝑥<sub>𝑇</sub>|𝑦<sub>𝑇</sub>) \\]\n\nand:\n- <font style=\"color: rgb(0,128,0);\">𝐏(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font> = 𝛴<sub>𝑦<sub>1</sub></sub><sub><sub></sub></sub>··· 𝛴<sub>𝑦<sub>𝑇</sub></sub> \\[ 𝐏(𝑦<sub>1</sub>, ..., 𝑦<sub>𝑇</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>) \\]\n- <font style=\"color: rgb(0,128,0);\">𝐏(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font> = 𝛴<sub>𝑦<sub>1</sub></sub> ··· 𝛴<sub>𝑦<sub>𝑇</sub></sub> \\[ 𝐏(𝑦<sub>1</sub>)𝐏(𝑥<sub>1</sub>|𝑦<sub>1</sub>) ... 𝐏(𝑦<sub>𝑇</sub>|𝑦<sub>𝑇-1</sub>)𝐏(𝑥<sub>𝑇</sub>|𝑦<sub>𝑇</sub>) \\]\n\ninference by enumeration would solve this naively:\n- <font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝐏(</font><font style=\"color: rgb(128,0,0);\">𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub></font><font style=\"color: rgb(128,0,0);\">) <font style=\"color: rgb(0,0,0);\">computation [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|time complexity]] = 𝑂(𝑛</font><font style=\"color: rgb(51,51,51);\"><sup>𝑇-1</sup></font><font style=\"color: rgb(0,0,0);\">) where 𝑛 is the cardinality of </font><font style=\"color: rgb(0,0,0);\">𝑦</font><font style=\"color: rgb(51,51,51);\"><sub>𝑖</sub></font></font></font>\n- <font style=\"color: rgb(0,128,0);\">𝐏(</font><font style=\"color: rgb(0,128,0);\">𝑥</font><font style=\"color: rgb(0,128,0);\"><sub>1</sub></font><font style=\"color: rgb(0,128,0);\">, ..., 𝑥</font><font style=\"color: rgb(0,128,0);\"><sub>𝑇</sub></font><font style=\"color: rgb(0,128,0);\">) </font>computation time complexity = 𝑂(𝑛<sup>𝑇</sup>) where 𝑛 is the cardinality of 𝑦<sub>𝑖</sub>",
      "where:\n- <font style=\"color: rgb(128,0,0);\">𝐏(𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font> = 𝛴<sub>𝑦<sub>1</sub></sub> ··· 𝛴<sub>𝑦<sub>𝑖-1</sub></sub>𝛴<sub>𝑦<sub>𝑖+1</sub></sub>··· 𝛴<sub>𝑦<sub>𝑇</sub></sub> \\[ 𝐏(𝑦<sub>1</sub>, ..., 𝑦<sub>𝑇</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>) \\] <font style=\"color: rgb(128,128,128);\">\\# notice missing 𝛴<sub>𝑦<sub>𝑖</sub></sub></font>\n- <font style=\"color: rgb(128,0,0);\">𝐏(𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font> = 𝛴<sub>𝑦<sub>2</sub></sub> ··· 𝛴<sub>𝑦<sub>𝑖-1</sub></sub>𝛴<sub>𝑦<sub>𝑖+1</sub></sub><sub><sub></sub></sub>··· 𝛴<sub>𝑦<sub>𝑇</sub></sub> \\[ 𝐏(𝑥<sub>2</sub>|𝑦<sub>2</sub>) ... 𝐏(𝑦<sub>𝑇</sub>|𝑦<sub>𝑇-1</sub>)𝐏(𝑥<sub>𝑇</sub>|𝑦<sub>𝑇</sub>) <font style=\"color: rgb(255,0,255);\">𝛴<sub>𝑦<sub>1</sub></sub>\\[ 𝐏(𝑦<sub>1</sub>)𝐏(𝑥<sub>1</sub>|𝑦<sub>1</sub>)𝐏(𝑦<sub>2</sub>|𝑦<sub>1</sub>) \\]</font> \\]\n- <font style=\"color: rgb(128,0,0);\">𝐏(𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font> = 𝛴<sub>𝑦<sub>2</sub></sub> ··· 𝛴<sub>𝑦<sub>𝑖-1</sub></sub>𝛴<sub>𝑦<sub>𝑖+1</sub></sub><sub><sub></sub></sub>··· 𝛴<sub>𝑦<sub>𝑇</sub></sub> \\[ 𝐏(𝑥<sub>2</sub>|𝑦<sub>2</sub>) ... 𝐏(𝑦<sub>𝑇</sub>|𝑦<sub>𝑇-1</sub>)𝐏(𝑥<sub>𝑇</sub>|𝑦<sub>𝑇</sub>) <font style=\"color: rgb(255,0,255);\">𝑚(𝑥<sub>1</sub>,𝑦<sub>2</sub>)</font> \\] <font style=\"color: rgb(128,128,128);\">\\# 𝑚(𝑥<sub>1</sub>,𝑦<sub>2</sub>)</font><font style=\"color: rgb(128,128,128);\"> is equal to the</font> [[Marginal Probability Distribution|marginal probability]]<font style=\"color: rgb(128,128,128);\"> 𝐏(𝑥<sub>1</sub>,𝑦<sub>2</sub>)</font>\n- <font style=\"color: rgb(128,0,0);\">𝐏(𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font> = 𝛴<sub>𝑦<sub>3</sub></sub> ··· 𝛴<sub>𝑦<sub>𝑖-1</sub></sub>𝛴<sub>𝑦<sub>𝑖+1</sub></sub><sub><sub></sub></sub>··· 𝛴<sub>𝑦<sub>𝑇</sub></sub> \\[ 𝐏(𝑥<sub>3</sub>|𝑦<sub>3</sub>) ... 𝐏(𝑦<sub>𝑇</sub>|𝑦<sub>𝑇-1</sub>)𝐏(𝑥<sub>𝑇</sub>|𝑦<sub>𝑇</sub>) <font style=\"color: rgb(0,255,0);\">𝛴<sub>𝑦<sub>2</sub></sub>\\[ 𝐏(𝑥<sub>2</sub>|𝑦<sub>2</sub>)𝐏(𝑦<sub>3</sub>|𝑦<sub>2</sub>)𝑚(𝑥<sub>1</sub>,𝑦<sub>2</sub>) \\]</font> \\]\n- <font style=\"color: rgb(128,0,0);\">𝐏(𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub>)</font> = 𝛴<sub>𝑦<sub>3</sub></sub> ··· 𝛴<sub>𝑦<sub>𝑖-1</sub></sub>𝛴<sub>𝑦<sub>𝑖+1</sub></sub><sub><sub></sub></sub>··· 𝛴<sub>𝑦<sub>𝑇</sub></sub> \\[ 𝐏(𝑥<sub>3</sub>|𝑦<sub>3</sub>) ... 𝐏(𝑦<sub>𝑇</sub>|𝑦<sub>𝑇-1</sub>)𝐏(𝑥<sub>𝑇</sub>|𝑦<sub>𝑇</sub>) <font style=\"color: rgb(0,255,0);\">𝑚(𝑥<sub>1</sub>,𝑥<sub>2</sub>,𝑦<sub>3</sub>)</font> \\] <font style=\"color: rgb(128,128,128);\">\\# 𝑚(𝑥<sub>1</sub>,𝑥<sub>2</sub>,𝑦<sub>3</sub>)</font><font style=\"color: rgb(128,128,128);\"> is equal to the</font> <font style=\"color: rgb(128,128,128);\">marginal probability</font><font style=\"color: rgb(128,128,128);\"> 𝐏(<font style=\"color: rgb(128,128,128);\">𝑥</font><sub>1</sub><font style=\"color: rgb(128,128,128);\">,𝑥</font><sub>2</sub><font style=\"color: rgb(128,128,128);\">,𝑦</font><sub>3</sub>)</font>\n- ...\n\nvariable elimination would solve this:\n- <font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(128,0,0);\">𝐏(</font><font style=\"color: rgb(128,0,0);\">𝑦<sub>𝑖</sub>, 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑇</sub></font><font style=\"color: rgb(128,0,0);\">) <font style=\"color: rgb(0,0,0);\">computation [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|time complexity]] = 𝑂((𝑇-1)𝑛</font><font style=\"color: rgb(0,0,0);\">) where 𝑛 is the cardinality of </font><font style=\"color: rgb(0,0,0);\">𝑦</font><font style=\"color: rgb(51,51,51);\"><sub>𝑖</sub></font></font></font>\n- <font style=\"color: rgb(0,128,0);\">𝐏(</font><font style=\"color: rgb(0,128,0);\">𝑥</font><font style=\"color: rgb(0,128,0);\"><sub>1</sub></font><font style=\"color: rgb(0,128,0);\">, ..., 𝑥</font><font style=\"color: rgb(0,128,0);\"><sub>𝑇</sub></font><font style=\"color: rgb(0,128,0);\">) </font>computation time complexity = 𝑂(𝑇𝑛) where 𝑛 is the cardinality of 𝑦<sub>𝑖</sub>"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
