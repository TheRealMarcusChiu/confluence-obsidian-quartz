---
title: "Chi-Squared／Square Test"
created: 2021-09-13T05:29:08.358-05:00
modified: 2023-09-13T20:49:18.223-05:00
parent: "[[Statistical Hypothesis Test - Types]]"
children:
  - "[[Pearson's Chi-Square Test]]"
---
###### Chi-Squared/Square Test
````excerpt
- is a [[Inferential Statistical Hypothesis Testing|statistical hypothesis test]] that is valid to perform when the test statistic is [[Chi-Square Distribution|chi-square distributed]] under the null hypothesis
- tests on categorical/[[Data／Variable Types - Measurement Scales (Nominal／Categorical／Factor - Ordinal - Interval - Ratio)|nominal]] variables and that none is a dependent variable (If you have a categorical dependent variable you will probably want some form of [[Logistic (Logit) Regression Model|logistic regression]])
````
^excerpt

# Chi-Square Test - Population Variances

```merge-table
{
  "rows": [
    [
      {
        "content": "𝐻<sub>0</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐻<sub>𝑎</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "test (chi-squared) statistic",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Rejection Region",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "p-value",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "𝜎<sup>2</sup> = 𝜎<sub>0</sub><sup>2</sup>",
        "rowspan": 3
      },
      "𝜎<sup>2</sup> > 𝜎<sub>0</sub><sup>2</sup>",
      {
        "content": "𝒳<sup>2</sup><sub>𝑜𝑏𝑠</sub> = [(𝑛-1)𝑠<sup>2</sup>] / 𝜎<sub>0</sub><sup>2</sup>",
        "rowspan": 3
      },
      "𝒳<sup>2</sup><sub>𝑜𝑏𝑠</sub>≥ 𝒳<sup>2</sup><sub>𝛼</sub>",
      "𝐏(𝒳<sup>2</sup> ≥ 𝒳<sup>2</sup><sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>)"
    ],
    [
      "𝜎<sup>2</sup> < 𝜎<sub>0</sub><sup>2</sup>",
      "𝒳<sup>2</sup><sub>𝑜𝑏𝑠</sub>≤ 𝒳<sup>2</sup><sub>𝛼</sub>",
      "𝐏(𝒳<sup>2</sup> ≤ 𝒳<sup>2</sup><sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>)"
    ],
    [
      "𝜎<sup>2</sup> ≠ 𝜎<sub>0</sub><sup>2</sup>",
      "𝒳<sup>2</sup><sub>𝑜𝑏𝑠</sub>≥ 𝒳<sup>2</sup><sub>𝛼</sub>\n\n𝑜𝑟\n\n𝒳<sup>2</sup><sub>𝑜𝑏𝑠</sub>≤ 𝒳<sup>2</sup><sub>1-𝛼/2</sub>",
      "2 * 𝑚𝑖𝑛(𝐏(𝒳<sup>2</sup> ≥ 𝒳<sup>2</sup><sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>), 𝐏(𝒳<sup>2</sup> ≤ 𝒳<sup>2</sup><sub>𝑜𝑏𝑠</sub> | 𝐻<sub>0</sub>))"
    ]
  ],
  "tableStyle": "width: 897.6px;"
}
```
# Chi-Square Tests
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- one-way chi-square test
- two-way chi-square test
- multi-way chi-square test
