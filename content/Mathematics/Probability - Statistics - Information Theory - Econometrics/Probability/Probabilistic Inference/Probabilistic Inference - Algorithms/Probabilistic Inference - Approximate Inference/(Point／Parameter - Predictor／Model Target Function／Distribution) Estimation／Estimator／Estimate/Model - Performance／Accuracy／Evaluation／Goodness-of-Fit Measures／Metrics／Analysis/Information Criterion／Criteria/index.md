---
title: "Information Criterion／Criteria"
created: 2021-09-13T05:27:43.004-05:00
modified: 2023-10-23T15:10:03.428-05:00
parent: "[[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis]]"
children:
  - "[[AIC vs BIC (TODO)]]"
  - "[[Akaike's Information Criterion／Criteria (AIC)]]"
  - "[[Bayesian Information Criterion／Criteria (BIC)]]"
---
###### Information Criterion/Criteria
````excerpt
- is a measure of the quality of a statistical model
- it takes into account: how well the model fits the data. the complexity of the model
````
^excerpt

# Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "R Code",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Akaike's Information Criterion／Criteria (AIC)|Akaike's Information Criterion/Criteria (AIC)]]",
        "bg": "#F4F5F7"
      },
      "- AIC = 2𝑘 - 2·𝑙𝑛(𝐿)",
      "<span style=\"white-space: pre-wrap\"><code>AIC(lm(dist \\~ speed, data=cars))</code></span>"
    ],
    [
      {
        "content": "[[Bayesian Information Criterion／Criteria (BIC)|Bayesian Information Criterion/Criteria (BIC)]]",
        "bg": "#F4F5F7"
      },
      "- <em>B</em><em>I</em><em>C</em> = 𝑘·𝑙𝑛(𝑛) - 2·𝑙𝑛(𝐿)",
      "<span style=\"white-space: pre-wrap\"><code>BIC(lm(dist \\~ speed, data=cars))</code></span>"
    ]
  ]
}
```

let:
- 𝑘 - number of estimated [parameters](https://en.wikipedia.org/wiki/Statistical_parameter) in the model
- 𝐿 - maximum value of the [[Likelihood Function - Log-Likelihood Function - Score Function|likelihood function]] for the model
- 𝑛 - sample size

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
