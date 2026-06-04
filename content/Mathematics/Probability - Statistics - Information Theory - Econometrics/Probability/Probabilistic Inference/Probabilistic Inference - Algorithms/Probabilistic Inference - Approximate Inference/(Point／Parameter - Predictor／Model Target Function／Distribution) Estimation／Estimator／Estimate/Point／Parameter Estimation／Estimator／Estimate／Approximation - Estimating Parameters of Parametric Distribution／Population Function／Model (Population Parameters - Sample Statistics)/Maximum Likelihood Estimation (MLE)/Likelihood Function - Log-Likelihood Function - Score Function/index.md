---
title: "Likelihood Function - Log-Likelihood Function - Score Function"
created: 2021-09-13T05:28:00.683-05:00
modified: 2022-01-01T03:13:16.835-06:00
parent: "[[Maximum Likelihood Estimation (MLE)]]"
children:
  - "[[Expected Log-Likelihood Function]]"
  - "[[Log-Likelihood Function - Of Specific Distributions]]"
  - "[[Sufficient Statistic]]"
---
# Likelihood Function - Log-Likelihood Function - Score Function

```merge-table
{
  "rows": [
    [
      {
        "content": "Likelihood Function\n(<strong>likelihood</strong>)\n\n𝐿(𝜃)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- see: [[Likelihood vs Probability|likelihood vs probability]]\n- measures the goodness of fit of a ([[Probability Distributions|probability distribution]] / [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic model]]) to a sample of data for given values of the unknown parameters of distribution or model\n- it is formed from the [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] of the sample (e.g. 𝛱<sub>1≤𝑖≤𝑛</sub> 𝐏(𝑥<sub>𝑖</sub>|𝜃)), but viewed and used as a function over parameter 𝜃, thus treating the random variables as fixed at the observed 𝑛 values 𝑥<sub>𝑖</sub>\n- always outputs a non-negative number",
      "- 𝐿(𝜃) = 𝐏(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>|𝜃)\n- 𝐿(𝜃) = 𝛱<sub>1≤𝑖≤𝑛</sub> 𝐏(𝑥<sub>𝑖</sub>|𝜃) <font style=\"color: rgb(128,128,128);\">\\# iff 𝑥<sub>𝑖</sub>'s are [[Independent and Identically Distributed (IID)|i.i.d.]] from distribution 𝐏(𝐱|<strong>𝜽</strong>)</font>\n\nwhere:\n- 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub><sub></sub>- are sample data\n- 𝜃 - is a parameter of 𝑓\n- 𝐏 - is some [[Parametric Probability Distribution Models|parametric probability distribution]]"
    ],
    [
      {
        "content": "Log-Likelihood Function\n(<strong>log-likelihood</strong>)\n\n𝐿𝐿(𝜃)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is computational equivalent to the likelihood function, but uses summation of logs\n- the log-likelihood always outputs:\n\t- a negative value for discrete distributions\n\t- either negative or positive value for continuous distributions",
      "- 𝐿𝐿(𝜃) = 𝑙𝑜𝑔(𝐿(𝜃))\n- 𝐿𝐿(𝜃) = 𝛴<sub>1≤𝑖≤𝑛</sub> 𝑙𝑜𝑔\\[𝐏(𝑥<sub>𝑖</sub>|𝜃)\\]"
    ],
    [
      {
        "content": "Score Function\n(score)\n\n𝑠(𝜃)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- is the gradient of the log-likelihood function with respect to the parameter 𝜽\n- the [[Expected Value ／ Expectation - Properties|expected value]] of score function with respect to 𝑋 is zero\n\t- 𝐄<sub>\\~𝑋</sub>\\[𝑠(𝜽)\\] = 0\n\t- \n> [!expand]- proof\n> - 𝐄<sub>\\~𝑋</sub>\\[𝑠(𝜽)\\] = 𝐄<sub>\\~𝑋</sub><strong>\\[</strong> \\[1/𝐿(𝜃)\\] · 𝛿/𝛿𝜃 \\[𝐿(𝜃)\\] <strong>\\]</strong>\n> - 𝐄<sub>\\~𝑋</sub>\\[𝑠(𝜽)\\] = 𝐄<sub>\\~𝑋</sub><strong>\\[</strong> \\[1/𝐏(𝑋=𝑥|𝜃)\\] · 𝛿/𝛿𝜃 \\[𝐏(𝑋=𝑥|𝜃)\\] <strong>\\]</strong>\n> - 𝐄<sub>\\~𝑋</sub>\\[𝑠(𝜽)\\] = ∫ \\[1/𝐏(𝑋=𝑥|𝜃)\\] · 𝛿/𝛿𝜃 \\[𝐏(𝑋=𝑥|𝜃)\\] · 𝐏(𝑋=𝑥|𝜃) 𝑑𝑥\n> - 𝐄<sub>\\~𝑋</sub>\\[𝑠(𝜽)\\] = ∫ 𝛿/𝛿𝜃 \\[𝐏(𝑋=𝑥|𝜃)\\] · 𝑑𝑥\n> - 𝐄<sub>\\~𝑋</sub>\\[𝑠(𝜽)\\] = 𝛿/𝛿𝜃 ∫ \\[𝐏(𝑋=𝑥|𝜃)\\] · 𝑑𝑥 <font style=\"color: rgb(122,134,154);\">\\# via dominant convergence theorem</font>\n> - 𝐄<sub>\\~𝑋</sub>\\[𝑠(𝜽)\\] = 𝛿/𝛿𝜃 \\[1\\]\n> - 𝐄<sub>\\~𝑋</sub>\\[𝑠(𝜽)\\] = 0\n- the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] of score function with respect to 𝑋 is the [[Fisher Information - Fisher Information Matrix|Fisher Information 𝐼(𝜃)]]\n\t- 𝑉𝑎𝑟<sub>\\~𝑋</sub>\\[𝑠(𝜃)\\] = [[Fisher Information - Fisher Information Matrix|Fisher Information 𝐼(𝜃)]]",
      "- 𝑠(𝜃) = 𝛿/𝛿𝜃 \\[𝐿𝐿(𝜃)\\]\n- 𝑠(𝜃) = 𝛿/𝛿𝜃 \\[𝑙𝑜𝑔(𝐿(𝜃))\\]\n- 𝑠(𝜃) = \\[1/𝐿(𝜃)\\] · 𝛿/𝛿𝜃 \\[𝐿(𝜃)\\]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
