---
title: "Estimator／Model - Error Measures - Pointwise Error"
created: 2021-09-13T05:27:42.810-05:00
modified: 2021-09-13T05:27:42.810-05:00
parent: "[[Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis]]"
children: []
---
###### Estimator/Model - Error Measures
- given an unknown model 𝑓, we want to find a model 𝑓ˆ that closely resembles 𝑓
- the <strong>error measure</strong> 𝐸(𝑓ˆ,𝑓) is a way that quantifies this similarity between 𝑓ˆ and 𝑓 estimator/model 𝑓ˆ
	- lower values → more similar
	- higher values → less similar
- 2 types of error measures:
	- 𝐸<sub>𝑝𝑜𝑝𝑢𝑙𝑎𝑡𝑖𝑜𝑛</sub>(𝑓ˆ,𝑓) - population error
	- 𝐸<sub>𝑠𝑎𝑚𝑝𝑙𝑒</sub>(𝑓ˆ,𝑓) - sample error
- we want 𝐸<sub>𝑝𝑜𝑝𝑢𝑙𝑎𝑡𝑖𝑜𝑛</sub>(𝑓ˆ,𝑓) to be small, but we can't calculate that because we don't have the entire population
	- 𝐸<sub>𝑝𝑜𝑝𝑢𝑙𝑎𝑡𝑖𝑜𝑛</sub>(𝑓ˆ,𝑓) = 𝐄\[𝑒(𝑓ˆ(𝑥),𝑓(𝑥))\]
- general assumption is that the sample is an unbiased representation of the larger population, thus
	- 𝐸<sub>𝑠𝑎𝑚𝑝𝑙𝑒</sub>(𝑓ˆ,𝑓) ≈ 𝐸<sub>𝑝𝑜𝑝𝑢𝑙𝑎𝑡𝑖𝑜𝑛</sub>(𝑓ˆ,𝑓)
- 𝐸<sub>𝑠𝑎𝑚𝑝𝑙𝑒</sub>(𝑓ˆ,𝑓) can be computed as:
	- 𝐸<sub>𝑠𝑎𝑚𝑝𝑙𝑒</sub>(𝑓ˆ,𝑓) = 𝛴<sub>1≤𝑖≤𝑛</sub> \[𝑒(𝑓ˆ(𝑥),𝑓(𝑥))\]
- where:
	- 𝑒(𝑓ˆ(𝑥),𝑓(𝑥)) - <strong>pointwise error</strong>

### Pointwise Error - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Method of Least Mean Squared／Squares Error／Estimation／Estimator (LMS／LSE／MMSE) - Sum of Square Errors／Residuals - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate - Root Mean Square Deviation／Error (RMSD／E - MSE)|Squared Error]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑒(𝑓ˆ(𝑥),𝑓(𝑥)) = [𝑓ˆ(𝑥) - 𝑓(𝑥)]<sup>2</sup>"
    ],
    [
      {
        "content": "Binary Error",
        "header": true,
        "bg": "#F4F5F7"
      },
      "𝑒(𝑓ˆ(𝑥),𝑓(𝑥)) = 𝐼\\[𝑓ˆ(𝑥) ≠ 𝑓(𝑥)\\] <font style=\"color: rgb(128,128,128);\">\\# 𝐼 is the</font> [[Indicator Function - Characteristic Function|indicator function]]\n- 𝐼\\[𝑓ˆ(𝑥) ≠ 𝑓(𝑥)\\] = 1 if 𝑓ˆ(𝑥) ≠ 𝑓(𝑥)\n- 𝐼\\[𝑓ˆ(𝑥) ≠ 𝑓(𝑥)\\] = 0 if 𝑓ˆ(𝑥) = 𝑓(𝑥)"
    ]
  ],
  "tableStyle": "width: 74.0209%;"
}
```
