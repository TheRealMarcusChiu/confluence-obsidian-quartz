---
title: "Moment-Generating Function - Bernoulli Distribution"
created: 2023-09-17T12:42:40.471-05:00
modified: 2023-09-17T13:02:10.033-05:00
parent: "[[Moment-Generating Functions (MGF)]]"
children: []
---
# Computing MGF for Bernoulli Distribution

The [[Moment-Generating Functions (MGF)|moment generating function (MGF)]] of a [[Bernoulli Distribution|Bernoulli]] variable 𝑋 with parameter 𝑝 is defined as:
- 𝑀<sub>𝑋</sub>(𝑡) = 1-𝑝 + 𝑒<sup>𝑡</sup>𝑝

> [!expand-ui]- Computation Steps
> Let 𝑋 be a [[Bernoulli Distribution|Bernoulli distribution]] with parameter 𝑝. Thus:
> - 𝑃(𝑋=1) = 𝑝
> - 𝑃(𝑋=0) = 1-𝑝
>
> Let's compute the [[Moment-Generating Functions (MGF)|moment generating function (MGF)]] of 𝑋:
> - 𝑀<sub>𝑋</sub>(𝑡) = 𝐄\[𝑒<sup>𝑡𝑋</sup>\]
> - 𝑀<sub>𝑋</sub>(𝑡) = 𝛴<sub>𝑥∊𝑋</sub>\[𝑒<sup>𝑡𝑥</sup>·𝑃(𝑋=𝑥)\]
> - 𝑀<sub>𝑋</sub>(𝑡) = 𝑒<sup>𝑡0</sup>·𝑃(𝑋=0) + 𝑒<sup>𝑡1</sup>·𝑃(𝑋=1)
> - 𝑀<sub>𝑋</sub>(𝑡) = 𝑃(𝑋=0) + 𝑒<sup>𝑡</sup>·𝑃(𝑋=1)
> - 𝑀<sub>𝑋</sub>(𝑡) = 1-𝑝 + 𝑒<sup>𝑡</sup>𝑝
# Using the MGF to Compute Moments

> [!expand-ui]- Computing 𝐄[𝑋]
> - $𝐄[𝑋] = 𝐄[𝑋^1]$
> - $𝐄[𝑋] = \frac{d}{dt} [M_X(t)]|_{t=0}$
> - $𝐄[𝑋] = \frac{d}{dt} [1 - p + e^tp]|_{t=0}$
> - $𝐄[𝑋] = [0 - 0 + e^tp]|_{t=0}$
> - $𝐄[𝑋] = p$

> [!expand-ui]- Computing 𝐄[𝑋²]
> - $𝐄[𝑋^2] = 𝐄[𝑋^2]$
> - $𝐄[𝑋^2] = \frac{d^2}{dt^2} [M_X(t)]|_{t=0}$
> - $𝐄[𝑋^2] = \frac{d^2}{dt^2} [1 - p + e^tp]|_{t=0}$
> - $𝐄[𝑋^2] = \frac{d}{dt} [0 - 0 + e^tp]|_{t=0}$
> - $𝐄[𝑋^2] = [e^tp]|_{t=0}$
> - $𝐄[𝑋^2] = p$

> [!expand-ui]- Computing Variance(𝑋)
> Variance is defined as:
> - 𝑉𝑎𝑟(𝑋) = 𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>
>
> Let's use the MGF of a Bernoulli distribution to calculate the variance of 𝑋:
> - 𝑉𝑎𝑟(𝑋) = 𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 𝑝 - 𝑝<sup>2</sup> <font style="color: rgb(122,134,154);">\# from above</font>
> - 𝑉𝑎𝑟(𝑋) = 𝑝(1-𝑝)
