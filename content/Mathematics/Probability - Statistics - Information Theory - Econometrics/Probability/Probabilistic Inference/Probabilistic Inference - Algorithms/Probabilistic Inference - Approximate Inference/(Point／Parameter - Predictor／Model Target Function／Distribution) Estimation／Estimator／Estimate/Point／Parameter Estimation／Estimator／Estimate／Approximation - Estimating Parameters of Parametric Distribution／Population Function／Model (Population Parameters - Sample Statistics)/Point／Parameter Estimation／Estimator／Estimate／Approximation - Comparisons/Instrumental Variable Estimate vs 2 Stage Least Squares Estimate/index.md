---
title: "Instrumental Variable Estimate vs 2 Stage Least Squares Estimate"
created: 2021-09-13T05:28:08.516-05:00
modified: 2021-09-13T05:28:08.516-05:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Comparisons]]"
children: []
---
[[Instrumental Variables (IV) Estimator|Instrumental Variable (IV) Estimate]] is an example of [[Two-Stage Least Squares (2SLS)|2 Stage Least Squares (2SLS) Estimate]] when the number of instrument variables is just one

![[Instrumental Variable Estimate vs 2 Stage Least Squares Estimate/2SLS-vs-IV-Estimates.png|150]]

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Instrumental Variables (IV) Estimator|Instrumental Variable (IV) Estimate]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "[[Two-Stage Least Squares (2SLS)|2 Stage Least Squares (2SLS) Estimate]]",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "assume we have:\n- a regression model: 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>\n- an instrumental variable 𝑧<sub>𝑖</sub> such that:\n\t- 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>) ≠ 0\n\t- 𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑒<sub>𝑖</sub>) = 0\n\nthen the IV Estimate 𝜃<sub>1</sub>ˆ of true population parameter 𝜃<sub>1</sub> is defined as:\n- 𝜃<sub>1</sub>ˆ = 𝑆𝑎𝑚𝑝𝑙𝑒-𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑦<sub>𝑖</sub>) / 𝑆𝑎𝑚𝑝𝑙𝑒-𝐶𝑜𝑟(𝑧<sub>𝑖</sub>,𝑥<sub>𝑖</sub>)",
      "run 2 regressions on the following 2 linear models:\n1. 𝑥<sub>𝑖</sub>= 𝛿<sub>0</sub> +𝛿<sub>1</sub>𝑧<sub>𝑖</sub>\n2. 𝑦<sub>𝑖</sub> = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>𝑖</sub>\n\nwhere:\n- 𝑧<sub>𝑖</sub>- is the \"instrumental variable\"\n\n𝑥<sub>𝑖</sub>= 𝛿<sub>0</sub> + 𝛿<sub>1</sub>𝑧<sub>𝑖</sub>will essentially tell you whether the is a correlation between the variables 𝑧<sub>𝑖</sub>and 𝑥<sub>𝑖</sub>. We could test this correlation by a statistical test on the null-hypothesis that 𝛿<sub>1</sub>=0"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
### Resources

![](https://www.youtube.com/watch?v=WjcoHAJ4_Mc&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=143&ab_channel=BenLambert)

![](https://www.youtube.com/watch?v=phVSac1iO18&list=PLwJRxp3blEvZyQBTTOMFRP_TDaSdly3gU&index=144&frags=wn&ab_channel=BenLambert)
