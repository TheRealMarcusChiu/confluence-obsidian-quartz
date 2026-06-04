---
title: "Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)"
created: 2021-09-13T05:28:54.350-05:00
modified: 2023-09-16T12:45:57.750-05:00
parent: "[[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)]]"
children: []
---
###### Sample Pooled/Combined/Composite/Overall Variance
- is a method for estimating the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] of several different populations when the mean of each population may be different, but one may assume that the variance of each population is the same

###### Sample Pooled/Combined/Composite/Overall Standard Deviation
- is just a weighted average of the standard deviation (variances) from two or more groups of data when they are assumed to come from populations with a common [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|standard deviation]]

# Sample Pooled Variance - Definition
- $s_p^2 = \frac{(n_X - 1)(s_X)^2 + (n_Y - 1)(s_Y)^2}{n_X + n_Y - 2}$

where:
- 𝑠<sub>𝑝</sub><sup>2</sup> is the sample pooled variance
- 𝑛<sub>𝑋</sub>is the sample size for 𝑋
- 𝑛<sub>𝑌</sub>is the sample size for 𝑌
- (𝑠<sub>𝑋</sub>)<sup>2</sup>is the sample variance for 𝑋
- (𝑠<sub>𝑌</sub>)<sup>2</sup>is the sample variance for 𝑌

# Sample Pooled Standard Deviation - Definition
- $s_p = \sqrt{\frac{(n_X - 1)(s_X)^2 + (n_Y - 1)(s_Y)^2}{n_X + n_Y - 2}}$

where:
- 𝑠<sub>𝑝</sub>is the sample pooled standard deviation
- 𝑛<sub>𝑋</sub>is the sample size for 𝑋
- 𝑛<sub>𝑌</sub>is the sample size for 𝑌
- (𝑠<sub>𝑋</sub>)<sup>2</sup>is the sample variance for 𝑋
- (𝑠<sub>𝑌</sub>)<sup>2</sup>is the sample variance for 𝑌

# Sample Pooled Standard Deviation - Expectation - When 𝜎<sub>𝑋</sub> = 𝜎<sub>𝑌</sub> = 𝜎

𝐄(𝑠<sub>𝑝</sub>) = 𝜎

> [!expand]- proof
> - 𝐄(𝑠<sub>𝑝</sub>) = 𝐄(𝑠𝑞𝑟𝑡( <strong>\[</strong> (𝑛<sub>𝑋</sub> - 1)(𝑠<sub>𝑋</sub>)<sup>2</sup> + (𝑛<sub>𝑌</sub> - 1)(𝑠<sub>𝑌</sub>)<sup>2</sup><strong>\]</strong><strong>/</strong><strong>\[</strong> 𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2 <strong>\] </strong>))
> - 𝐄(𝑠<sub>𝑝</sub>) = 𝐄(𝑠𝑞𝑟𝑡( <strong>\[</strong> (𝑛<sub>𝑋</sub> - 1)(𝜎<sub>𝑋</sub>)<sup>2</sup> + (𝑛<sub>𝑌</sub> - 1)(𝜎<sub>𝑌</sub>)<sup>2</sup> <strong>\]</strong> <strong>/</strong> <strong>\[</strong> 𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2 <strong>\] </strong>)) <font style="color: rgb(128,128,128);">\# expectation of</font> [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample standard deviation (𝑠𝑖)]] <font style="color: rgb(128,128,128);">is</font> [[Sample Pooled／Combined／Composite／Overall (Variance - Standard Deviation)|population standard deviation (𝜎𝑖)]]
> - 𝐄(𝑠<sub>𝑝</sub>) = 𝐄(𝑠𝑞𝑟𝑡( <strong>\[</strong> (𝑛<sub>𝑋</sub> - 1)𝜎<sup>2</sup> + (𝑛<sub>𝑌</sub> - 1)𝜎<sup>2</sup> <strong>\]</strong> <strong>/</strong> <strong>\[</strong> 𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2 <strong>\] </strong>)) <font style="color: rgb(128,128,128);">\# 𝜎𝑋 = 𝜎𝑌 = 𝜎</font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄(𝑠<sub>𝑝</sub>) = 𝐄(𝑠𝑞𝑟𝑡( <strong>\[</strong> (𝑛<sub>𝑋</sub> - 1 + 𝑛<sub>𝑌</sub> - 1)𝜎<sup>2</sup> <strong>\]</strong> <strong>/</strong> <strong>\[</strong> 𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2 <strong>\] </strong>))</font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄(𝑠<sub>𝑝</sub>) = 𝐄(𝑠𝑞𝑟𝑡( <strong>\[</strong> (𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2)𝜎<sup>2</sup> <strong>\]</strong> <strong>/</strong> <strong>\[</strong> 𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2 <strong>\] </strong>))</font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄(𝑠<sub>𝑝</sub>) = 𝐄(𝑠𝑞𝑟𝑡( (𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2) 𝜎<sup>2</sup> <strong>/</strong> (𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2) ))</font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄(𝑠<sub>𝑝</sub>) = 𝐄(𝑠𝑞𝑟𝑡( 𝜎<sup>2</sup>(𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2)<strong>/</strong>(𝑛<sub>𝑋</sub> + 𝑛<sub>𝑌</sub> - 2) ))</font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄(𝑠<sub>𝑝</sub>) = 𝐄(𝑠𝑞𝑟𝑡(𝜎<sup>2</sup>))</font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄(𝑠<sub>𝑝</sub>) = 𝐄(𝜎)</font></font>
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄(𝑠<sub>𝑝</sub>) = 𝜎 <font style="color: rgb(128,128,128);">\# expected value of constant is itself</font></font></font>
