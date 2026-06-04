---
title: "Causality／Causation vs Dependence vs Correlation vs Relationships vs Association vs Laws"
created: 2021-09-13T04:44:24.094-05:00
modified: 2021-11-11T23:46:45.591-06:00
parent: "[[Causality (Necessary - Sufficient - Contributory)]]"
children:
  - "[[Variable Relationship Types - ([Strictly] [Strong｜Weak] [Positive｜Negative] [Linear｜Non-Linear｜Monotonic] Relationship)]]"
---
```merge-table
{
  "rows": [
    [
      {
        "content": "Terminology",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Causality (Necessary - Sufficient - Contributory)|causality]]",
        "bg": "#F4F5F7"
      },
      "- a cause contributes to the production of an effect\n- requires a dimension of time?"
    ],
    [
      {
        "content": "[[Probability Dependence|dependence]]",
        "bg": "#F4F5F7"
      },
      "- two events are dependent if the outcome or occurrence of the first affects the outcome or occurrence of the second so that the probability is changed"
    ],
    [
      {
        "content": "[[Correlation|correlation]]",
        "bg": "#F4F5F7"
      },
      "- correlation means that they move together (positive correlation indicates increasing and decreasing together, negative correlation means they move in the opposite direction). linear correlation is more specific still; then they move in proportion, not just in the same (or opposite) direction\n- correlation is the strength of association as measured by a correlation coefficient ranging from -1 to 1\n- there is no independent and no dependent variable in a correlation. It’s a [[Bivariate／Multivariate Analysis Descriptive Statistics|bivariate descriptive statistic]]\n- [[Probability Independence (Marginal Independence - Conditional Independence)|independent]] variables have 0 correlation. however, 0 correlation does not always mean the variables are independent"
    ],
    [
      {
        "content": "relationship",
        "bg": "#F4F5F7"
      },
      "- a relationship suggests that as one variable changes the other tends to change as well. For example, two variables may have a quadratic relationship. This may occur with correlation or variables may be related but uncorrelated. That is unless accompanied by some qualifying term, I tend to interpret \"relationship\" to essentially imply \"functional relationship\". However, the word \"relation\" in the mathematical sense is more general and many people often use it more broadly without qualifying it. For example, imagine points scattered about a set of concentric ring shapes. I probably wouldn't say that the variables were related (at least not without adding something to say that they weren't functionally related) but some people would happily do so"
    ],
    [
      {
        "content": "association",
        "bg": "#F4F5F7"
      },
      "- similar to correlation?\n- association simply means the presence of a relationship: certain values of one variable tend to co-occur with certain values of the other variable\n- association may be more general still; (to me at least) suggests almost any form of dependence between the variables. For example, imagine two variables where all the points tend to lay within small discs of probability (and not outside them), but where these discs are scattered about in a way that looks random. Then I would usually avoid the term \"relationship\" (qualified or not) and stick to associated or dependent"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Causality vs Dependence
- causality ≠ dependence

If 𝑋 and 𝑌 are in <strong>𝑽</strong> and are [[Probability Dependence|probabilistically dependent]], then either:
- 𝑋 causes 𝑌
- 𝑌 causes 𝑋
- 𝑋 and 𝑌 are both effects of some common cause 𝑍 in <strong>𝑽</strong>

<strong>![[Causality／Causation vs Dependence vs Correlation vs Relationships vs Association vs Laws/causality-vs-dependence.png|301]]</strong>
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
