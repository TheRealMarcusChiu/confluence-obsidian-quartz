---
title: "Bootstrap Confidence Intervals"
created: 2021-09-13T05:27:52.164-05:00
modified: 2026-05-21T02:05:17.764-05:00
parent: "[[Bootstrap／Bootstrapping (Statistics)]]"
children:
  - "[[Bias-Corrected and Accelerated (BCa) Bootstrap CI]]"
  - "[[Studentized Bootstrap CI vs Percentile Bootstrap CI]]"
---
types of [[Bootstrap Confidence Intervals|bootstrap]] [[Bootstrap Confidence Intervals|confidence intervals]]
- <strong>Parametric Method</strong> - based on the bootstrap estimation of the standard error
- <strong>Normal Approximation CI</strong> -
- <strong>Non-Studentized Pivotal Bootstrap</strong> - <strong>Basic Bootstrap</strong> -
- <strong>Bootstrap-t</strong> - <strong>Studentized Pivotal Bootstrap</strong> -
- <strong>Percentile Bootstrap CI</strong> - <strong>Nonparametric Bootstrap CI</strong> - based on the bootstrap quantiles
- <strong>Bias Corrected (BC)</strong> -
- <strong>Bias Corrected Accelerated (BCa)</strong> -
- <strong>Test-Inversion Bootstrap (TIB)</strong> -
- <strong>Studentized Test-Inversion Bootstrap (STIB)</strong> -

### Diagram
![[Bootstrap Confidence Intervals/bootstrap-confidence-intervals-families.png]]
- consistent coverage - coverage error is 𝑂(𝑛<sup>-1/2</sup>)
- first-order correct coverage - coverage error is 𝑂(𝑛<sup>-1</sup>)

### Which One to Use?

research shows that <em>studentized bootstrap</em> is the best choice, but it requires [[Bootstrap Confidence Intervals|standard error]] 𝑆𝐸ˆ. However, if 𝑆𝐸ˆ is not available, then <em>percentile bootstrap</em> is often the next best choice. More accurate versions of this method are available
### Parametric Bootstrap CI

> [!expand]- Click here to expand...
> This method is used when we need a confidence interval for a parameter θ, and its estimator θˆ has approximately Normal distribution
>
> given bootstrap estimates:
> - {𝜃ˆ\*<sub>1</sub>, ..., 𝜃ˆ\*<sub>𝑏</sub>}
>
> confidence interval:
> - \[ 𝜃ˆ - 𝑧<sub>𝛼/2</sub>𝑆𝐸\*(𝜃ˆ), 𝜃ˆ + 𝑧<sub>𝛼/2</sub>𝑆𝐸\*(𝜃ˆ) \]
### Normal Approximation CI

> [!expand]- Click here to expand...
> Use 𝑧 critical point but correct 𝜃ˆ for bias and use 𝑉ˆ\* to estimate 𝑉
>
> given bootstrap estimates:
> - {𝜃ˆ\*<sub>1</sub>, ..., 𝜃ˆ\*<sub>𝑏</sub>}
>
> estimated bias of 𝜃ˆ:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Bias Formula",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Bias Estimator Formula (given bootstrap estimates: {𝜃ˆ\\*<sub>1</sub>, ..., 𝜃ˆ\\*<sub>𝑏</sub>})",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- 𝐵 = 𝐄\\*\\[𝜃ˆ\\* - 𝜃ˆ\\]\n- 𝐵 = 𝐄\\[𝜃ˆ\\*\\] - 𝜃ˆ <font style=\"color: rgb(128,128,128);\">\\# 𝜃ˆ is a constant</font>",
>       "- 𝐵\\* = (1/𝑏) ∑<sub>1≤𝑖≤𝑏</sub> (𝜃ˆ\\*<sub>𝑖</sub> - 𝜃ˆ)\n- 𝐵\\* = <strong>\\[</strong> (1/𝑏) ∑<sub>1≤𝑖≤𝑏</sub> (𝜃ˆ\\*<sub>𝑖</sub>) <strong>\\]</strong> - 𝜃ˆ"
>     ]
>   ]
> }
> ```
>
> confidence interval:
> - \[ 𝜃ˆ - 𝐵\* - 𝑧<sub>𝛼/2</sub>𝑆𝐸ˆ\*, 𝜃ˆ - 𝐵\* + 𝑧<sub>𝛼/2</sub>𝑆𝐸ˆ\* \]
### Basic Bootstrap CI - Non-Studentized Pivotal Bootstrap

> [!expand]- Click here to expand...
> Approximate the distribution of (𝜃ˆ − 𝜃) with (𝜃\* − 𝜃ˆ). Use bootstrap to estimate percentiles of 𝜃ˆ − 𝜃
>
> given bootstrap estimates:
> - {𝜃ˆ\*<sub>1</sub>, ..., 𝜃ˆ\*<sub>𝑏</sub>}
>
> define 𝛼<sup>𝑡𝘩</sup> percentile:
> - 𝑞<sub>𝛼</sub>\* = (𝑏𝛼)<sup>𝑡𝘩</sup> ordered value of {𝜃ˆ\*<sub>1</sub>, ..., 𝜃ˆ\*<sub>𝑏</sub>}
>
> uh:
> - 1 - 𝛼 = 𝐏(𝑞<sub>𝛼/2</sub>\* ≤ 𝜃\* ≤ 𝑞<sub>1-</sub><sub>𝛼/2</sub>\*)
> - 1 - 𝛼 = 𝐏(𝑞<sub>𝛼/2</sub>\* - 𝜃ˆ ≤ 𝜃\* - 𝜃ˆ ≤ 𝑞<sub>1-</sub><sub>𝛼/2</sub>\* - 𝜃ˆ)
> - 1 - 𝛼 ≈ 𝐏(𝑞<sub>𝛼/2</sub>\* - 𝜃ˆ ≤ 𝜃ˆ - 𝜃 ≤ 𝑞<sub>1-</sub><sub>𝛼/2</sub>\* - 𝜃ˆ)
> - 1 - 𝛼 = 𝐏(𝑞<sub>𝛼/2</sub>\* - 2𝜃ˆ ≤ -𝜃 ≤ 𝑞<sub>1-</sub><sub>𝛼/2</sub>\* - 2𝜃ˆ)
> - 1 - 𝛼 = 𝐏(2𝜃ˆ - 𝑞<sub>𝛼/2</sub>\* ≥ 𝜃 ≥ 2𝜃ˆ - 𝑞<sub>1-</sub><sub>𝛼/2</sub>\*)
> - 1 - 𝛼 = 𝐏(2𝜃ˆ - 𝑞<sub>1-</sub><sub>𝛼/2</sub>\* ≤ 𝜃 ≤ 2𝜃ˆ - 𝑞<sub>𝛼/2</sub>\*)
>
> confidence interval:
> - \[ 2𝜃ˆ - 𝜃ˆ\*<sub>𝑏(</sub><sub>1-</sub><sub>𝛼/2)</sub>, 2𝜃ˆ - 𝜃ˆ\*<sub>𝑏(</sub><sub>𝛼/2)</sub>\]
>
> doesn't require 𝑆𝐸
### Studentized (Pivotal) Bootstrap CI - Bootstrap-t CI

> [!expand]- Click here to expand...
> use bootstrap critical point of 𝑇 instead of 𝑧 critical point. approximate the distribution of (𝜃ˆ - 𝜃)/𝑆𝐸ˆ with (𝜃\* − 𝜃ˆ)/𝑆𝐸ˆ\*
>
> given bootstrap estimates:
> - {𝜃ˆ\*<sub>1</sub>, ..., 𝜃ˆ\*<sub>𝑏</sub>}
>
> get
> - 𝑇<sub>1</sub>\* = (𝜃<sub>1</sub>ˆ\* − 𝜃ˆ)/𝑆𝐸<sub>1</sub>ˆ\*
> - ...
> - 𝑇<sub>𝑏</sub>\* = (𝜃<sub>𝑏</sub>ˆ\* − 𝜃ˆ)/𝑆𝐸<sub>𝑏</sub>ˆ\*
>
> define 𝛼<sup>𝑡𝘩</sup> percentile of 𝑇:
> - 𝑡<sub>𝛼</sub>\* = (𝑏𝛼)<sup>𝑡𝘩</sup> ordered value of {𝑇<sub>1</sub>\*, ..., 𝑇<sub>𝑏</sub>\*}
>
> confidence interval:
> - \[ 𝜃ˆ - 𝑡\*<sub>1-</sub><sub>𝛼/2</sub>𝑆𝐸ˆ, 𝜃ˆ - 𝑡\*<sub>𝛼/2</sub>𝑆𝐸ˆ \]
### Percentile Bootstrap CI - Nonparametric Bootstrap CI

> [!expand]- Click here to expand...
> given bootstrap estimates:
> - {𝜃ˆ\*<sub>1</sub>, ..., 𝜃ˆ\*<sub>𝑏</sub>}
>
> confidence interval:
> - \[ 𝜃ˆ\*<sub>𝑏(</sub><sub>𝛼/2)</sub>, 𝜃ˆ\*<sub>𝑏(1-</sub><sub>𝛼/2)</sub> \]
>
> for example, to form a 95% confidence interval (𝛼 = 5%) we take the 2.5th percentile and the 97.5th percentile of the bootstrap statistics
> - \[ 𝜃ˆ\*<sub>𝑏(</sub><sub>𝛼/2)</sub>, 𝜃ˆ\*<sub>𝑏(1-</sub><sub>𝛼/2)</sub> \]
> - \[ 𝜃ˆ\*<sub>𝑏(</sub><sub>0.05/2)</sub>, 𝜃ˆ\*<sub>𝑏(1-0.05</sub><sub>/2)</sub> \]
> - \[ 𝜃ˆ\*<sub>𝑏(</sub><sub>0.025)</sub>, 𝜃ˆ\*<sub>𝑏(0.975</sub><sub>)</sub> \]
> - if 𝑏 = 1000
> - \[ 𝜃ˆ\*<sub>25</sub>, 𝜃ˆ\*<sub>975</sub> \]
### Bias-Corrected and Accelerated (BCa) Bootstrap CI

> [!expand]- Click here to expand...
> see: [[Bootstrap Confidence Intervals]]
### Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

### Resources
- [[Bootstrap Confidence Intervals]]
