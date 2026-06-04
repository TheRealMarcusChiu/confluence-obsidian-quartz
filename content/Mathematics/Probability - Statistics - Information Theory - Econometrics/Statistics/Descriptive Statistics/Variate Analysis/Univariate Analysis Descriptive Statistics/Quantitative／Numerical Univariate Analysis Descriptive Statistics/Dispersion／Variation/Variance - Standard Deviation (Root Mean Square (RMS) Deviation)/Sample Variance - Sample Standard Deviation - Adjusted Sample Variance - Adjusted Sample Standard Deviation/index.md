---
title: "Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation"
created: 2021-09-13T05:28:54.613-05:00
modified: 2023-09-09T09:57:16.413-05:00
parent: "[[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)]]"
children:
  - "[[Sample Variance - Why (n - 1)？]]"
  - "[[Sampling Distribution of Sample Variance／Standard Deviation - Sample Variance／Standard-Deviation Distribution﻿]]"
---
- <strong>Sample Variance</strong> = <strong>Adjusted Sample Variance</strong>
- <strong>Sample Standard Deviation</strong> = <strong>Adjusted Sample Standard Deviation</strong>

# Sample Variance - Intuition

> [!expand]- Click here to expand...
> read: [[Sample Mean]]
>
> Let's say we want the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] of the height of 1 trillion people.
>
> There are 2 methods:
> 1. population variance - measure the height of all 1 trillion people, acquire population mean, use [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|population variance formula]]
> 2. sample variance - get a sample of 100 people, acquire sample mean, use [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance formula]]
>
> The first method will get you the actual variance <em>of</em> height as it is the definition of variance over a population. However, it is impractical to measure 1 trillion people.
>
> The second method is much easier, we only need to measure the height of 100 people. However, this sample variance may not accurately reflect the population variance. How well the sample variance reflects to population variance is through calculating sample variance's:
> - expected value - denoted as 𝐄(sample variance) = ?
> - variance - denoted as 𝐕𝐚𝐫(sample variance) = ?
>
> we want:
> - 𝐄(sample variance) = population variance
> - 𝐕𝐚𝐫(sample variance) = 0
>
> Not surprisingly, the more we samples we take from population to calculate to sample variance:
> - the closer 𝐄(sample variance) becomes the population variance
> - the closer 𝐕𝐚𝐫(sample variance) becomes 0
>
> below goes through the mathematics on why this is the case
# Sample Variance - Definition / Formula
- sample variance (𝑠<sup>2</sup>) = \[ 𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\] / (𝑛 - 1)

where:
- each<em> 𝑋<sub>𝑖</sub></em><sub></sub>is a random sample drawn from a population
- 𝑛 is the sample size
- 𝑋̅ - is the [[Sample Mean|sample mean]]

# Sample Standard Deviation - Definition / Formula
- sample standard deviation (𝑠) = 𝑟𝑜𝑜𝑡<strong>(</strong>𝑠<sup>2</sup><strong><strong>)</strong></strong>

where:
- each<em> 𝑋</em><sub>𝑖</sub>is a random sample drawn from a population
- 𝑛 is the sample size
- 𝑋̅ - is the [[Sample Mean|sample mean]]

# Sample Variance - Expected Value
𝐄(sample variance 𝑠<sup>2</sup>) = <em>𝜎<sup>2</sup></em>

> [!expand]- proof
> - 𝐄(𝑠<sup>2</sup>) = 𝐄(\[ 𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\] / (𝑛 - 1)) <font style="color: rgb(128,128,128);">\# substitution of sample variance formula</font>
> - (𝑛 - 1)𝐄(𝑠<sup>2</sup>) = 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub><sup>2</sup>- 2𝑋<sub>𝑖</sub>𝑋̅ + 𝑋̅<sup>2</sup>)\]
> - (𝑛 - 1)𝐄(𝑠<sup>2</sup>) = 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>·𝛴<sub>1≤𝑖≤𝑛</sub>1\] - 𝐄\[2𝑋̅·𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>\] + 𝐄\[𝑋̅<sup>2</sup>·𝛴<sub>1≤𝑖≤𝑛</sub>1\]
> - (𝑛 - 1)𝐄(𝑠<sup>2</sup>) = 𝐄\[𝑛𝑋<sub>𝑖</sub><sup>2</sup>\] - 𝐄\[2𝑋̅·𝑛·𝑋̅\] + 𝐄\[𝑋̅<sup>2</sup>·𝑛\] <font style="color: rgb(128,128,128);">\# 𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub> = 𝑛·𝑋̅</font>
> - (𝑛 - 1)𝐄(𝑠<sup>2</sup>) = 𝑛·𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 2𝑛·𝐄\[𝑋̅<sup>2</sup>\] + 𝑛·𝐄\[𝑋̅<sup>2</sup>\]
> - (𝑛 - 1)𝐄(𝑠<sup>2</sup>) = 𝑛·𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 𝑛·𝐄\[𝑋̅<sup>2</sup>\]
> - \[(𝑛 - 1)/𝑛\]·𝐄(𝑠<sup>2</sup>) = 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 𝐄\[𝑋̅<sup>2</sup>\]
> 	- 𝐄\[𝑋̅<sup>2</sup>\] = 𝑉𝑎𝑟\[𝑋̅\] + 𝐄\[𝑋̅\]<sup>2</sup>
> 	- 𝐄\[𝑋̅<sup>2</sup>\] = 𝑉𝑎𝑟\[(1/𝑛)𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>\] + 𝜇<sup>2</sup>
> 	- 𝐄\[𝑋̅<sup>2</sup>\] = (1/𝑛<sup>2</sup>)𝑉𝑎𝑟\[𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub>\] + 𝜇<sup>2</sup>
> 	- 𝐄\[𝑋̅<sup>2</sup>\] = (1/𝑛<sup>2</sup>)\[𝛴<sub>1≤𝑖≤𝑛</sub>𝑉𝑎𝑟(𝑋<sub>𝑖</sub>)\] + 𝜇<sup>2</sup>
> 	- 𝐄\[𝑋̅<sup>2</sup>\] = (1/𝑛<sup>2</sup>)\[𝛴<sub>1≤𝑖≤𝑛</sub>𝜎<sup>2</sup>\] + 𝜇<sup>2</sup>
> 	- 𝐄\[𝑋̅<sup>2</sup>\] = (1/𝑛<sup>2</sup>)\[𝑛𝜎<sup>2</sup>\] + 𝜇<sup>2</sup>
> 	- 𝐄\[𝑋̅<sup>2</sup>\] = (1/𝑛)\[𝜎<sup>2</sup>\] + 𝜇<sup>2</sup>
> - \[(𝑛 - 1)/𝑛\]·𝐄(𝑠<sup>2</sup>) = 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - \[(1/𝑛)\[𝜎<sup>2</sup>\] + 𝜇<sup>2</sup>\]
> 	- 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] = 𝑉𝑎𝑟\[𝑋<sub>𝑖</sub>\] + 𝐄\[𝑋<sub>𝑖</sub>\]<sup>2</sup>
> 	- 𝐄\[𝑋̅<sup>2</sup>\] = 𝜎<sup>2</sup> + 𝜇<sup>2</sup>
> - \[(𝑛 - 1)/𝑛\]·𝐄(𝑠<sup>2</sup>) = 𝜎<sup>2</sup> + 𝜇<sup>2</sup> - \[(1/𝑛)\[𝜎<sup>2</sup>\] + 𝜇<sup>2</sup>\]
> - \[(𝑛 - 1)/𝑛\]·𝐄(𝑠<sup>2</sup>) = 𝜎<sup>2</sup> - (1/𝑛)\[𝜎<sup>2</sup>\]
> - (𝑛 - 1)·𝐄(𝑠<sup>2</sup>) = 𝑛𝜎<sup>2</sup> - 𝜎<sup>2</sup>
> - (𝑛 - 1)·𝐄(𝑠<sup>2</sup>) = (𝑛 - 1)𝜎<sup>2</sup>
> - 𝐄(𝑠<sup>2</sup>) = <em><em>𝜎</em><sup>2</sup></em>
>
> the expected value / mean of the sample variance 𝑠<sup>2</sup> is <em>population variance 𝜎<sup>2</sup></em>
# Sample Standard Deviation - Expected Value
𝐄(sample standard deviation 𝑠) = <em>𝜎</em>

> [!expand]- proof
> - 𝐄(𝑠) = 𝐄(√<strong>( </strong>\[ 𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\] / (𝑛 - 1) <strong>)</strong>) <font style="color: rgb(128,128,128);">\# substitution of sample standard deviation formula</font>
> - 𝐄(𝑠) = √𝐄<strong>( </strong>\[ 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\] / (𝑛 - 1) <strong>)</strong>
> - 𝐄(𝑠) = √𝐄(𝑠<sup>2</sup>)
> - 𝐄(𝑠) = √<em>𝜎<sup>2</sup></em>\# see Expected Value of Sample Variance
> - 𝐄(𝑠) = <em>𝜎</em>
>
> the expected value / mean of the sample standard deviation 𝑠 is population standard deviation<em> 𝜎</em>
# Sample Variance - Variance
𝐕𝐚𝐫(sample variance 𝑠<sup>2</sup>) = ?

> [!expand]- proof
> - 𝐕𝐚𝐫(𝑠<sup>2</sup>) = 𝐕𝐚𝐫(\[ 𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\] / (𝑛 - 1)) <font style="color: rgb(128,128,128);">\# substitution of sample variance formula</font>
> - (𝑛 - 1)<sup>2</sup>𝐕𝐚𝐫(𝑠<sup>2</sup>) = 𝐕𝐚𝐫\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub><sup>2</sup>- 2𝑋<sub>𝑖</sub>𝑋̅ + 𝑋̅<sup>2</sup>)\]
> - (𝑛 - 1)<sup>2</sup>𝐕𝐚𝐫(𝑠<sup>2</sup>) = 𝐕𝐚𝐫\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub><sup>2</sup>) - 𝛴<sub>1≤𝑖≤𝑛</sub>(2𝑋<sub>𝑖</sub>𝑋̅) + 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋̅<sup>2</sup>)\]
> - (𝑛 - 1)<sup>2</sup>𝐕𝐚𝐫(𝑠<sup>2</sup>) = 𝐕𝐚𝐫\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub><sup>2</sup>) - 2𝑋̅𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>) + 𝑛𝑋̅<sup>2</sup>\]
> - (𝑛 - 1)<sup>2</sup>𝐕𝐚𝐫(𝑠<sup>2</sup>) = 𝐕𝐚𝐫\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub><sup>2</sup>) - 2𝑋̅𝑛·𝑋̅ + 𝑛𝑋̅<sup>2</sup>\] <font style="color: rgb(128,128,128);">\# 𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub> = 𝑛·𝑋̅</font>
> - (𝑛 - 1)<sup>2</sup>𝐕𝐚𝐫(𝑠<sup>2</sup>) = 𝐕𝐚𝐫\[𝛴<sub>1≤𝑖≤𝑛</sub>𝑋<sub>𝑖</sub><sup>2</sup>\] - 𝑛<sup>2</sup>𝐕𝐚𝐫\[𝑋̅<sup>2</sup>\]
> 	- TODO
> - 𝐕𝐚𝐫(𝑠<sup>2</sup>) = ?
# Sample Standard Deviation - Variance
𝐕𝐚𝐫(sample standard deviation 𝑠) = ?

> [!expand]- proof
> - 𝐕𝐚𝐫(𝑠) = 𝐕𝐚𝐫(√<strong>( </strong>\[ 𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\] / (𝑛 - 1) <strong>)</strong>) <font style="color: rgb(128,128,128);">\# substitution of sample standard deviation formula</font>
> - TODO
> - 𝐕𝐚𝐫(𝑠) = ?
# Sample Variance - Standard Deviation / [[Standard Error (SE) - Estimated Standard Error (SEˆ)|Standard Error]]
𝐒𝐄(𝑠<sup>2</sup>) = 𝐒𝐭𝐝(𝑠<sup>2</sup>) = ?
# Sample Standard Deviation - Standard Deviation / [[Standard Error (SE) - Estimated Standard Error (SEˆ)|Standard Error]]
𝐒𝐄(𝑠) = 𝐒𝐭𝐝(𝑠) = ?
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
