---
title: "Probability vs Odds"
created: 2021-09-13T05:26:32.981-05:00
modified: 2022-02-12T18:03:23.034-06:00
parent: "[[Probability Definition]]"
children:
  - "[[Log-Probability vs Log-Odds]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>[[Probability]]\n(only works for [[Bernoulli Distribution|Bernoulli distribution]] e.g. true or false)</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Odds",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "both are different ways to numerically represent uncertainty. Uncertainty can also be represented in [[Odds Ratio]]",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<font style=\"color: rgb(153,204,0);\">𝐏(𝑋)</font>",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,204,255);\">𝐎(𝑋)</font>",
        "align": "center"
      }
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,128,0);\">the number of ways that an outcome can occur<code><font style=\"color: rgb(51,51,51);\">+</font></code></font><code></code><font style=\"color: rgb(128,0,0);\">the number of ways it cannot occur<code><font style=\"color: rgb(51,51,51);\"> = </font></code><font style=\"color: rgb(255,102,0);\">the whole number of cases possibl</font><font style=\"color: rgb(255,102,0);\">e</font></font>",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "the ratio of <font style=\"color: rgb(0,128,0);\">the number of ways that an outcome can occur <font style=\"color: rgb(51,51,51);\">compared</font></font> to <font style=\"color: rgb(255,102,0);\">the whole number of cases possible</font>\n\n<font style=\"color: rgb(255,102,0);\"><font style=\"color: rgb(0,128,0);\"><font style=\"color: rgb(51,51,51);\">probability<code>=</code></font>the number of ways that an outcome can occur<code><font style=\"color: rgb(51,51,51);\"> /</font></code><font style=\"color: rgb(255,102,0);\">the whole number of cases possible</font></font></font>\n\nprobability = odds / (1 + odds)",
        "align": "center"
      },
      {
        "content": "the ratio of <font style=\"color: rgb(0,128,0);\">the number of ways that an outcome can occur <font style=\"color: rgb(51,51,51);\">compared</font></font> to<font style=\"color: rgb(128,0,0);\">the number of ways it cannot occur</font>\n\n<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\">odds</font><code><font style=\"color: rgb(51,51,51);\"> =</font></code><font style=\"color: rgb(0,128,0);\">the number of ways that an outcome can occur</font><code><font style=\"color: rgb(51,51,51);\"> /</font></code></font><font style=\"color: rgb(128,0,0);\">the number of ways it cannot occur</font>\n\n<font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(51,51,51);\">odds = probability / (1 - probability)</font></font>",
        "align": "center"
      }
    ],
    [
      {
        "content": "<font style=\"color: rgb(153,204,0);\">1/5 = 𝐏(𝑋)</font> ≈ <font style=\"color: rgb(51,204,204);\">𝐎(𝑋) =</font><font style=\"color: rgb(0,255,255);\"> <font style=\"color: rgb(51,204,204);\">1/4</font></font> ≈ <font style=\"color: rgb(255,0,255);\">1:4 = Odds Ratio</font>",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "ranges between an interval of [0,1]",
        "align": "center"
      },
      {
        "content": "ranges between an [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]] between [0, infinity)",
        "align": "center"
      }
    ]
  ]
}
```
# Relation Between Probability and Odds
- odds = probability / (1 - probability)
- odds(1 - probability) = probability
- odds - odds\*probability = probability
- odds = probability + odds\*probability
- odds = probability (1 + odds)
- odds/(1 + odds) = probability
