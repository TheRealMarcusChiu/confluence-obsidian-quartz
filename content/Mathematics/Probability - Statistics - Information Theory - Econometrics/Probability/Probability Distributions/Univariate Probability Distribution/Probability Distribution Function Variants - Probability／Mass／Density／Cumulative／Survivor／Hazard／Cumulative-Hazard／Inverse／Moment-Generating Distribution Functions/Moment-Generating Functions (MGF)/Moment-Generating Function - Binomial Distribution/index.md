---
title: "Moment-Generating Function - Binomial Distribution"
created: 2023-09-17T13:04:06.751-05:00
modified: 2023-09-17T22:59:20.728-05:00
parent: "[[Moment-Generating Functions (MGF)]]"
children: []
---
# Computing MGF for Bernoulli Distribution

The [[Moment-Generating Functions (MGF)|moment generating function (MGF)]] of a [[Binomial Distribution|binomial]] variable 𝑋 with parameters 𝑝 and 𝑛 is defined as:
- $M_X(t) = [1-p+pe^t]^n$

> [!expand-ui]- Computation Steps
> Let 𝑋 be a [[Binomial Distribution|binomial distribution]] with parameters 𝑝 and 𝑛, where 𝑋 is equal to the sum of 𝑛 [[Bernoulli Distribution|Bernoulli]] variables 𝑌. Thus:
> - 𝑋 = 𝛴<sub>1≤𝑖≤𝑛</sub>𝑌<sub>𝑖</sub>
>
> Let's compute the [[Moment-Generating Functions (MGF)|moment generating function (MGF)]] of 𝑋:
> - $M_X(t) = 𝐄[e^{tX}]$
> - $M_X(t) = 𝐄[e^{t\sum_{i=1}^nY_i}]$
> - $M_X(t) = 𝐄[e^{tY_1}e^{tY_2} ... e^{tY_n}]$
> - $M_X(t) = 𝐄[e^{tY_1}]𝐄[e^{tY_2}] ... 𝐄[e^{tY_n}]$
>
> Each 𝐄\[𝑒<sup>𝑡𝑌</sup>\] is the [[Moment-Generating Function - Bernoulli Distribution|moment-generating function of a Bernoulli variable]], which is equal to \[1 - 𝑝 + 𝑝𝑒<sup>𝑡</sup>\]:
> - $M_X(t) = [1-p+pe^t][1-p+pe^t] ... [1-p+pe^t]$
> - $M_X(t) = [1-p+pe^t]^n$
# Using the MGF to Compute Moments

> [!expand-ui]- Computing 𝐄[𝑋]
> - $𝐄[𝑋] = 𝐄[𝑋^1]$
> - $𝐄[𝑋] = \frac{d}{dt} [M_X(t)]|_{t=0}$
> - $𝐄[𝑋] = \frac{d}{dt} [[1-p+pe^t)^n]|_{t=0}$
> - $𝐄[𝑋] = [n(1-p+pe^t)^{(n-1)}pe^t]|_{t=0}$
> - $𝐄[𝑋] = n(1-p+pe^0)^{(n-1)}pe^0$
> - $𝐄[𝑋] = n(1-p+p)^{(n-1)}p$
> - $𝐄[𝑋] = n1^{(n-1)}p$
> - $𝐄[𝑋] = np$

> [!expand-ui]- Computing 𝐄[𝑋²]
> - $𝐄[𝑋^2] = 𝐄[𝑋^2]$
> - $𝐄[𝑋^2] = \frac{d^2}{dt^2} [M_X(t)]|_{t=0}$
> - $𝐄[𝑋^2] = \frac{d^2}{dt^2} [(1-p+pe^t)^n]|_{t=0}$
> - $𝐄[𝑋^2] = \frac{d}{dt} [n(1-p+pe^t)^{(n-1)}pe^t]|_{t=0}$
> - $𝐄[𝑋^2] = [n(n-1)(1-p+pe^t)^{(n-2)}pe^tpe^t + n(1-p+pe^t)^{(n-1)}pe^t]|_{t=0}$
> - $𝐄[𝑋^2] = n(n-1)(1-p+pe^0)^{(n-2)}pe^0pe^0 + n(1-p+pe^0)^{(n-1)}pe^0$
> - $𝐄[𝑋^2] = n(n-1)(1-p+p)^{(n-2)}pp + n(1-p+p)^{(n-1)}p$
> - $𝐄[𝑋^2] = n(n-1)(1)^{(n-2)}pp + n(1)^{(n-1)}p$
> - $𝐄[𝑋^2] = n(n-1)pp + np$
> - $𝐄[𝑋^2] = (n^2 - n)p^2 + np$
> - $𝐄[𝑋^2] = n^2p^2 - np^2 + np$

> [!expand-ui]- Computing Variance(𝑋)
> Variance is defined as:
> - 𝑉𝑎𝑟(𝑋) = 𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>
>
> Let's use the MGF of a Bernoulli distribution to calculate the variance of 𝑋:
> - 𝑉𝑎𝑟(𝑋) = 𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = \[𝑛<sup>2</sup>𝑝<sup>2</sup> - 𝑛𝑝<sup>2</sup> + 𝑛𝑝\] - \[𝑛𝑝\]<sup>2</sup> <font style="color: rgb(122,134,154);">\# from above</font>
> - 𝑉𝑎𝑟(𝑋) = 𝑛<sup>2</sup>𝑝<sup>2</sup> - 𝑛𝑝<sup>2</sup> + 𝑛𝑝 - 𝑛<sup>2</sup>𝑝<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 𝑛𝑝 - 𝑛𝑝<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 𝑛(𝑝 - 𝑝<sup>2</sup>)
> - 𝑉𝑎𝑟(𝑋) = 𝑛𝑝(1 - 𝑝)
