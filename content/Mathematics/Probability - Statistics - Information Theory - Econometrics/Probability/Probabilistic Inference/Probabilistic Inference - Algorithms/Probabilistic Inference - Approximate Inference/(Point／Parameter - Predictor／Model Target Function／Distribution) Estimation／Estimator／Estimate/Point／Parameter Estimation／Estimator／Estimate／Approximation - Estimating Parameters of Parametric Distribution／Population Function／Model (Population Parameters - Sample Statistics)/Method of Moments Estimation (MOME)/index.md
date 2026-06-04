---
title: "Method of Moments Estimation (MOME)"
created: 2021-09-13T05:28:07.440-05:00
modified: 2021-09-13T05:28:07.440-05:00
parent: "[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)]]"
children:
  - "[[MOME - Exponential Distribution]]"
  - "[[MOME - Gamma Distribution]]"
  - "[[MOME - Poisson Distribution]]"
---
<strong>Method of Moments Estimation (MOME)</strong> is a [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|method of estimating]] the [[Raw Moments - Central／Mean Moments - (Zeroth／First／Second／Third／Fourth／kth／nth)|Raw Moments - Central/Mean Moments - (Zeroth/First/Second/Third/Fourth/kth/nth)]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Moments",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Central Moments",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "for all 𝑘 ≥ 1:\n- 𝑘<sup>th</sup> <strong>population moment</strong>:\n\t- 𝜇<sub>𝑘</sub> = 𝐄\\[𝑋<sup>𝑘</sup>\\]\n- and its <strong>sample moment counterpart</strong>:\n\t- 𝑚<sub>𝑘</sub> = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\\[ 𝑋<sub>𝑖</sub><sup>𝑘</sup> \\]\n\nthe first sample moment (𝑘=1) is the [[Sample Mean|sample mean]] 𝑋̅",
      "for all 𝑘 ≥ 2:\n- 𝑘<sup>th</sup> <strong>population central moment</strong>:\n\t- 𝜇<sub>𝑘</sub>' = 𝐄\\[𝑋 - 𝜇<sub>1</sub>\\]<sup>𝑘</sup>\n- and its <strong>sample central moment</strong> counterpart:\n\t- 𝑚<sub>𝑘</sub>' = (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\\[ 𝑋<sub>𝑖</sub> - 𝑋̅ \\]<sup>𝑘</sup>\n\nthe second sample central moment (𝑘=2) is the sample variance 𝑠<sup>2</sup>"
    ]
  ],
  "tableStyle": "width: 99.8925%;"
}
```
### Method of Moments
to estimate 𝑘 parameters, equate the first 𝑘 population and sample moments 
- 𝑚<sub>1</sub> = 𝜇<sub>1</sub>
- ...
- 𝑚<sub>𝑘</sub> = 𝜇<sub>𝑘</sub>

On rare occasions, when 𝑘 equations are not enough to estimate 𝑘 parameters, we’ll consider higher moments
### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
