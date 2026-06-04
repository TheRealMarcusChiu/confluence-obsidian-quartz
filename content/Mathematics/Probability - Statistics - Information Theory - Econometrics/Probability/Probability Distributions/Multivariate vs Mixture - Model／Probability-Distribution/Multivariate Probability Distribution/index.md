---
title: "Multivariate Probability Distribution"
created: 2021-09-13T05:27:19.368-05:00
modified: 2021-10-31T03:09:27.741-05:00
parent: "[[Multivariate vs Mixture - Model／Probability-Distribution]]"
children:
  - "[[Multivariate Gaussian／Normal Distribution／Model／Process (MVN)]]"
---
````excerpt
<strong>[[Multivariate Probability Distribution]]</strong> is a type of [[Probability Distributions|probability distribution]] involving multiple random variables. This is contrasted to [[Univariate Probability Distribution|Univariate Probability Distributions]]
````
^excerpt

# MPD - Representation Forms

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|Joint Probability Distribution]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- MPD is represented as 𝐏(𝑋,𝑌)\n- more expressive than Conditional PD\n- requires more parameters than Conditional PD"
    ],
    [
      {
        "content": "[[Conditional Probability Distribution (CPD)|Conditional Probability Distribution]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- MPD is represented as 𝐏(𝑋|𝑌)𝐏(𝑌) or 𝐏(𝑌|𝑋)𝐏(𝑋)\n- less expressive than Joint PD\n- requires fewer parameters than Joint PD"
    ]
  ]
}
```
# MPD - Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# MPD - Other
- an MPD can be used to derive a [[Marginal Probability Distribution]]
