---
title: "CI - 2 Independent Samples - Variance & Standard Deviation"
created: 2021-09-13T05:29:17.150-05:00
modified: 2021-09-13T05:29:17.150-05:00
parent: "[[CI - 2 Independent Samples]]"
children: []
---
given 2 independent samples:
- 𝑿 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} from [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal]](𝜇<sub>𝑋</sub>, 𝜎<sub>𝑋</sub>)
- 𝒀 = {𝑌<sub>1</sub>, ..., 𝑌<sub>𝑚</sub>} from [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal]](𝜇<sub>𝑌</sub>, 𝜎<sub>𝑌</sub>)

the standardized ratio of variances:
- 𝐹 = <font style="color: rgb(128,0,0);">\[(𝑠<sub>𝑋</sub>)<sup>2</sup></font><font style="color: rgb(128,0,0);">/ (𝜎<sub>𝑋</sub>)<sup>2</sup>\]</font> / <font style="color: rgb(0,128,0);">\[(𝑠<sub>𝑌</sub>)<sup>2</sup></font><font style="color: rgb(0,128,0);"> / (𝜎<sub>𝑌</sub>)<sup>2</sup>\]</font>
- 𝐹 = <font style="color: rgb(0,128,0);"> <font style="color: rgb(128,0,0);">\[∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub> - 𝑋̅\]<font style="color: rgb(128,0,0);"> / (𝜎<sub>𝑋</sub>)<sup>2</sup></font> / (𝑛 - 1)\]</font> / <font style="color: rgb(0,128,0);">\[∑<sub>1≤𝑖≤𝑚</sub>\[𝑌<sub>𝑖</sub> - 𝑌̅\]<font style="color: rgb(0,128,0);"> / (𝜎<sub>𝑌</sub>)<sup>2</sup></font> / (𝑚 - 1)\]</font></font>

<font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">has [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|F-distribution]] with with (𝑛 − 1) and (𝑚 − 1) degrees of freedom</font></font>

> [!expand]- how it was computed
> Unlike population means and proportions, variances are scale factors, and they are compared through their ratio:
> - 𝜃 = (𝜎<sub>𝑋</sub>)<sup>2</sup> / (𝜎<sub>𝑌</sub>)<sup>2</sup>
>
> an estimator of 𝜃 is the ratio of sample variances:
> - 𝜃ˆ = <font style="color: rgb(128,0,0);">(𝑠<sub>𝑋</sub>)<sup>2</sup> </font>/ <font style="color: rgb(0,128,0);">(𝑠<sub>𝑌</sub>)<sup>2</sup></font>
> 	- (𝑠<sub>𝑋</sub>)<sup>2</sup> = ∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub> - 𝑋̅\] / (𝑛 - 1)
> 	- (𝑠<sub>𝑌</sub>)<sup>2</sup> = ∑<sub>1≤𝑖≤𝑚</sub>\[𝑌<sub>𝑖</sub> - 𝑌̅\] / (𝑚 - 1)
> - 𝜃ˆ = <font style="color: rgb(128,0,0);">\[∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub> - 𝑋̅\] / (𝑛 - 1)\]</font> / <font style="color: rgb(0,128,0);">\[∑<sub>1≤𝑖≤𝑚</sub>\[𝑌<sub>𝑖</sub> - 𝑌̅\] / (𝑚 - 1)\]<font style="color: rgb(128,128,128);"> \# 𝑓𝑜𝑟𝑚𝑢𝑙𝑎 1</font></font>
>
> Its standard form, after we divide each sample variance in <font style="color: rgb(0,128,0);"><font style="color: rgb(128,128,128);">𝑓𝑜𝑟𝑚𝑢𝑙𝑎 1</font></font> by the corresponding population variance, is therefore called the Fisher-Snedecor distribution or simply [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|F-distribution]] with (𝑛 − 1) and (𝑚 − 1) degrees of freedom:
> - 𝐹 = <font style="color: rgb(0,128,0);"> <font style="color: rgb(128,0,0);">\[∑<sub>1≤𝑖≤𝑛</sub>\[𝑋<sub>𝑖</sub> - 𝑋̅\]<font style="color: rgb(128,0,0);"> / (𝜎<sub>𝑋</sub>)<sup>2</sup></font> / (𝑛 - 1)\]</font> / <font style="color: rgb(0,128,0);">\[∑<sub>1≤𝑖≤𝑚</sub>\[𝑌<sub>𝑖</sub> - 𝑌̅\]<font style="color: rgb(0,128,0);"> / (𝜎<sub>𝑌</sub>)<sup>2</sup></font> / (𝑚 - 1)\]</font></font>
###### Example F-Distribution

![[CI - 2 Independent Samples - Variance & Standard Deviation/example-f-distribution.png|450]]
### Confidence Interval - Ratio of Population Variances

![[CI - 2 Independent Samples - Variance & Standard Deviation/conidence-interval-ratio-of-2-variances.png|350]]

where:
- 𝐹<sub>𝛼</sub>(𝑖, 𝑗) - is the [[f-distribution ｜ f-scores ｜ f-value ｜ f-table ｜ f-statistic|f-distribution]] with degrees 𝑖 and 𝑗

how confidence interval was constructed

> [!expand]- Click here to expand...
> start with estimator 𝜃ˆ:
> - 𝜃ˆ = <font style="color: rgb(128,0,0);">(𝑠<sub>𝑋</sub>)<sup>2</sup> </font>/ <font style="color: rgb(0,128,0);">(𝑠<sub>𝑌</sub>)<sup>2</sup></font>
>
> standardizing it to:
> - 𝐹 = <font style="color: rgb(128,0,0);">\[(𝑠<sub>𝑋</sub>)<sup>2</sup></font><font style="color: rgb(128,0,0);">/ (𝜎<sub>𝑋</sub>)<sup>2</sup>\]</font> / <font style="color: rgb(0,128,0);">\[(𝑠<sub>𝑌</sub>)<sup>2</sup></font><font style="color: rgb(0,128,0);"> / (𝜎<sub>𝑌</sub>)<sup>2</sup>\]</font>
> - 𝐹 = <font style="color: rgb(128,0,0);">\[(𝑠<sub>𝑋</sub>)<sup>2</sup></font><font style="color: rgb(128,0,0);">/ <font style="color: rgb(0,128,0);">(𝑠<sub>𝑌</sub>)<sup>2</sup></font>\]</font> / <font style="color: rgb(0,128,0);">\[</font><font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">(𝜎<sub>𝑋</sub>)<sup>2</sup></font>/ (𝜎<sub>𝑌</sub>)<sup>2</sup>\]</font>
> - 𝐹 = 𝜃ˆ / <font style="color: rgb(0,128,0);"><font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">𝜃</font></font></font>
>
> we get an F-variable with (𝑛-1) and (𝑚-1) degrees of freedom. Therefore:
>
> ![[CI - 2 Independent Samples - Variance & Standard Deviation/confidence-inerval-f-distribution-1.png|450]]
>
> Solving the double inequality for the unknown parameter <font style="color: rgb(0,128,0);"><font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">𝜃</font></font></font>, we get:
>
> ![[CI - 2 Independent Samples - Variance & Standard Deviation/confidence-interval-f-distribution-2.png|450]]
>
> therefore:
> ###### Confidence Interval Without Reciprocal
> ![[CI - 2 Independent Samples - Variance & Standard Deviation/f-distribution-confidence-interval.png|650]]
>
> is a (1 - 𝛼)100% confidence interval for 𝜃 = (𝜎<sub>𝑋</sub>)<sup>2</sup>/ (𝜎<sub>𝑌</sub>)<sup>2</sup>
> ###### Reciprocal Property of F-Distribution
>
> 𝐹<sub>1-𝛼</sub>(𝑣<sub>1</sub>, 𝑣<sub>2</sub>) = 1 / 𝐹<sub>𝛼</sub>(𝑣<sub>2</sub>, 𝑣<sub>1</sub>)
> ###### Confidence Interval With Reciprocal
>
> ![[CI - 2 Independent Samples - Variance & Standard Deviation/conidence-interval-ratio-of-2-variances.png|350]]
