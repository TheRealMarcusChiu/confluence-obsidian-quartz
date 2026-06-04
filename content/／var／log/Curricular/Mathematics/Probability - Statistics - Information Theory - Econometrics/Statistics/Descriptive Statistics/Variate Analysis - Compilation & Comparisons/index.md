---
title: "Variate Analysis - Compilation & Comparisons"
created: 2021-09-13T05:28:56.496-05:00
modified: 2021-11-07T21:36:24.209-06:00
parent: "[[Descriptive Statistics]]"
children:
  - "[[Statistics as Geometry]]"
---
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Discrete Variable",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Continuous Variable",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Characteristics",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝐏(𝑥) is a [[Probability Distribution - Discrete Functions／Models (Probability Mass Functions)|Discrete Probability Distribution Function/Model (Probability Mass Function)]]\n- 1 = 𝛴<sub>𝑥∊𝑋</sub>𝐏(𝑋=𝑥)",
        "bg": "#F4F5F7"
      },
      {
        "content": "𝑓(𝑥) is a [[Probability Distribution - Continuous Functions／Models (Probability Density Functions)|Continuous Probability Distribution Function/Model (Probability Density Function)]]\n- 1 = ∫𝑓(𝑥)𝑑𝑥",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|Mean]]\n[[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|Expectation]]\n𝜇 or 𝐄\\[𝑋\\]",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "𝐄\\[𝑋\\] <font style=\"color: rgb(128,128,128);\">\\# by definition of</font> [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|first raw moment]]",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝐄\\[𝑋\\] = 𝛴<sub>𝑥∊𝑋</sub>\\[𝑥·𝐏(𝑋=𝑥)\\]",
      "- 𝐄\\[𝑋\\] = ∫𝑥·𝑓(𝑥)𝑑𝑥"
    ],
    [
      {
        "content": "𝐄\\[𝑋<sup>2</sup>\\]",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "𝐄\\[𝑋<sup>2</sup>\\] <font style=\"color: rgb(128,128,128);\">\\# by definition of</font> [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|second raw moment]]",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝐄\\[𝑋<sup>2</sup>\\] = 𝛴<sub>𝑥∊𝑋</sub>\\[𝑥<sup>2</sup>·𝐏(𝑋=𝑥)\\]",
      "- 𝐄\\[𝑋<sup>2</sup>\\] = ∫𝑥<sup>2</sup>·𝑓(𝑥)𝑑𝑥"
    ],
    [
      {
        "content": "[[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|Variance]]\n(𝜎<sub>𝑋</sub>)<sup>2</sup>or <strong>𝑉𝑎𝑟</strong>(𝑋)",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "𝑉𝑎𝑟(𝑋) = 𝐄\\[(𝑋 − 𝐄\\[𝑋\\])<sup>2</sup>\\] = 𝐄\\[(𝑋 − <em>𝜇</em>)<sup>2</sup>\\] = 𝐄\\[𝑋<sup>2</sup>\\] − <em>𝜇</em><sup>2</sup><font style=\"color: rgb(128,128,128);\">\\# by definition of</font> [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|second central moment]]",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝑉𝑎𝑟(𝑋) = 𝛴<sub>𝑥∊𝑋</sub>\\[(𝑥 − <em>𝜇</em>)<sup>2</sup>𝑃(𝑥)\\]\n- 𝑉𝑎𝑟(𝑋) = 𝛴<sub>𝑥∊𝑋</sub>\\[𝑥<sup>2</sup>𝑃(𝑥)\\] - <em>𝜇</em><sup>2</sup>",
      "- 𝑉𝑎𝑟(𝑋) = ∫(𝑥 − <em>𝜇</em>)<sup>2</sup>𝑓(𝑥)𝑑𝑥\n- 𝑉𝑎𝑟(𝑋) = ∫𝑥<sup>2</sup>𝑓(𝑥)𝑑𝑥 - <em>𝜇</em><sup>2</sup>"
    ],
    [
      {
        "content": "[[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|Standard Deviation]]\n𝜎<sub>𝑋</sub>or <strong>𝑆𝑡𝑑</strong>(𝑋)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝜎<sub>𝑋</sub>= 𝑆𝑡𝑑(𝑋) = √𝑉𝑎𝑟(𝑋)",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "[[Covariation - Covariance|Covariance]]\n<strong>𝜎<sub>𝑋𝑌</sub> or 𝐶𝑜𝑣</strong>(𝑋,𝑌)",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "𝜎<sub>𝑋𝑌</sub> = 𝐶𝑜𝑣(𝑋,𝑌) = 𝐄\\[(𝑋−𝐄\\[𝑋\\])(𝑌−𝐄\\[𝑌\\])\\] = 𝐄\\[(𝑋−<em>𝜇<sub>𝑋</sub></em>)(𝑌−<em>𝜇<sub>𝑌</sub></em>)\\] = 𝐄\\[𝑋𝑌\\] - <em>𝜇<sub>𝑋</sub></em><em>𝜇<sub>𝑌</sub></em> \n<font style=\"color: rgb(128,128,128);\">\\# modified</font> [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|second central moment]]\n𝐶𝑜𝑣(𝑋,𝑋) = 𝑉𝑎𝑟(𝑋)",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "- 𝐶𝑜𝑣(𝑋,𝑌) = 𝛴<sub>𝑦</sub>𝛴<sub>𝑥</sub>(𝑥 − <em>𝜇<sub>𝑋</sub></em>)(𝑦 − <em>𝜇<sub>𝑌</sub></em>)𝑃(𝑥,𝑦)\n- 𝐶𝑜𝑣(𝑋,𝑌) = 𝛴<sub>𝑦</sub>𝛴<sub>𝑥</sub>(𝑥𝑦)𝑃(𝑥,𝑦) - <em>𝜇<sub>𝑋</sub></em><em>𝜇<sub>𝑌</sub></em>",
      "- 𝐶𝑜𝑣(𝑋,𝑌) = ∫∫(𝑥 − <em>𝜇<sub>𝑋</sub></em>)(𝑦 − <em>𝜇<sub>𝑌</sub></em>)𝑓(𝑥,𝑦)𝑑𝑥𝑑𝑦\n- 𝐶𝑜𝑣(𝑋,𝑌) = ∫∫(𝑥𝑦)𝑓(𝑥,𝑦)𝑑𝑥𝑑𝑦 - <em>𝜇<sub>𝑋</sub></em><em>𝜇<sub>𝑌</sub></em>"
    ],
    [
      {
        "content": "[[Correlation]]\n𝜌<sub>𝑋𝑌</sub>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "𝜌<sub>𝑋𝑌</sub> = 𝐶𝑜𝑣(𝑋,𝑌) / \\[𝑆𝑡𝑑(𝑋) 𝑆𝑡𝑑(𝑌)\\]",
        "colspan": 2
      },
      null
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
###### Properties of Expected Value / Mean

> [!expand]- Click here to expand...
> ![[Expected Value ／ Expectation - Properties#^excerpt]]
###### Properties of Variance and Standard Deviation

> [!expand]- Click here to expand...
> ![[Properties of Variance#^excerpt]]
###### Properties of Covariance

> [!expand]- Click here to expand...
> ![[Properties of Covariance#^excerpt]]
###### Properties of Correlation

> [!expand]- Click here to expand...
> ![[Properties of Pearson's Correlation#^excerpt]]
# Resources
- [[Continuous Probability Distribution - Calculating Statistics]]
