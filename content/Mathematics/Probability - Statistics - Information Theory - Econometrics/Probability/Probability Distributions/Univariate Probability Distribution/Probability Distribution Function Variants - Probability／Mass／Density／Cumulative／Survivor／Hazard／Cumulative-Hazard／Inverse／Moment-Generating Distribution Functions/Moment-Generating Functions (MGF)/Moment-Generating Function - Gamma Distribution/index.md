---
title: "Moment-Generating Function - Gamma Distribution"
created: 2023-09-17T23:01:26.828-05:00
modified: 2023-09-17T23:56:24.075-05:00
parent: "[[Moment-Generating Functions (MGF)]]"
children: []
---
# Computing MGF for Gamma Distribution

Let 𝑋 be a [[Gamma Distribution|gamma]] variable with parameters 𝜆 and 𝛼 be defined as:
- 𝑓(𝑥) = (1/\[𝛤(𝛼)𝜆<sup>𝛼</sup>\]) · 𝑥<sup>𝛼-1</sup>· 𝑒<sup>-𝑥/𝜆</sup><font style="color: rgb(128,128,128);">\# for 𝑥 \> 0</font>

The [[Moment-Generating Functions (MGF)|moment generating function (MGF)]] of 𝑋 is defined as:
- $M_X(t) = (1 - 𝜆t)^{-𝛼}$

> [!expand-ui]- Computation Steps
> Let 𝑋 be a [[Gamma Distribution|gamma distribution]] with parameters 𝜆 and 𝛼. Thus:
> - 𝑓(𝑥) = (1/\[𝛤(𝛼)𝜆<sup>𝛼</sup>\]) · 𝑥<sup>𝛼-1</sup>· 𝑒<sup>-𝑥/𝜆</sup><font style="color: rgb(128,128,128);">\# for 𝑥 \> 0</font>
>
> where:
> - 𝛼 - number of events
> - 𝜆 - number of events per unit of time
> - 𝛤(𝛼) = [[Gamma Function|gamma function]] = (𝛼 - 1)!
>
> Let's compute the [[Moment-Generating Functions (MGF)|moment generating function (MGF)]] of 𝑋:
> - $M_X(t) = 𝐄[e^{tX}]$
> - $M_X(t) = 𝐄[e^{tX}]$
> - 𝑓(𝑥) = (1/\[𝛤(𝛼)𝜆<sup>𝛼</sup>\]) · 𝑥<sup>𝛼-1</sup>· 𝑒<sup>-𝑥/𝜆</sup><font style="color: rgb(128,128,128);">\# for 𝑥 \> 0</font>
> - $M_X(t) = \int_0^∞ \frac{x^{𝛼-1}}{𝛤(𝛼)} \frac{e^{-x/𝜆}}{𝜆^𝛼} e^{tx} dx$
> - $M_X(t) = \frac{1}{𝛤(𝛼)𝜆^𝛼} \int_0^∞ x^{𝛼-1} e^{-x/𝜆} e^{tx} dx$
> - $M_X(t) = \frac{1}{𝜆^𝛼} \frac{1}{𝛤(𝛼)} \int_0^∞ x^{𝛼-1} e^{-x(1/𝜆 - t)} dx$
> 	- $x^{𝛼-1} e^{-x(1/𝜆 - t)} \text{ looks like } Gamma(𝛼, \frac{1}{1/𝜆 - t})$
> 	- We know:
>
> - 
> 	- 
> 		- $1 = \int_0^∞ \frac{1}{𝛤(𝛼)} (1/𝜆 - t)^𝛼 x^{𝛼-1} e^{-x(1/𝜆 - t)} dx$
> 		- $(1/𝜆 - t)^{-𝛼} = \frac{1}{𝛤(𝛼)} \int_0^∞ x^{𝛼-1} e^{-x(1/𝜆 - t)} dx$
> - $M_X(t) = \frac{1}{𝜆^𝛼} (1/𝜆 - t)^{-𝛼}$
> - $M_X(t) = [1/𝜆]^𝛼 [1/(1/𝜆 - t)]^𝛼$
> - $M_X(t) = [1/(𝜆(1/𝜆 - t))]^𝛼$
> - $M_X(t) = (1 - 𝜆t)^{-𝛼}$
# Using the MGF to Compute Moments

> [!expand-ui]- Computing 𝐄[𝑋]
> - $𝐄[𝑋] = 𝐄[𝑋^1]$
> - $𝐄[𝑋] = \frac{d}{dt} [M_X(t)]|_{t=0}$
> - $𝐄[𝑋] = \frac{d}{dt} [(1 - 𝜆t)^{-𝛼}]|_{t=0}$
> - $𝐄[𝑋] = [-𝛼(1 - 𝜆t)^{-𝛼 - 1} * -𝜆]|_{t=0}$
> - $𝐄[𝑋] = [𝛼𝜆(1 - 𝜆t)^{-𝛼 - 1}]|_{t=0}$
> - $𝐄[𝑋] = 𝛼𝜆(1 - 𝜆0)^{-𝛼 - 1}$
> - $𝐄[𝑋] = 𝛼𝜆(1)^{-𝛼 - 1}$
> - $𝐄[𝑋] = 𝛼𝜆$

> [!expand-ui]- Computing 𝐄[𝑋²]
> - $𝐄[𝑋^2] = 𝐄[𝑋^2]$
> - $𝐄[𝑋^2] = \frac{d^2}{dt^2} [M_X(t)]|_{t=0}$
> - $𝐄[𝑋^2] = \frac{d^2}{dt^2} [(1 - 𝜆t)^{-𝛼}]|_{t=0}$
> - $𝐄[𝑋^2] = \frac{d}{dt} [-𝛼(1 - 𝜆t)^{-𝛼 - 1} * -𝜆]|_{t=0}$
> - $𝐄[𝑋^2] = \frac{d}{dt} [𝛼𝜆(1 - 𝜆t)^{-𝛼 - 1}]|_{t=0}$
> - $𝐄[𝑋^2] = [𝛼𝜆(-𝛼 - 1)(1 - 𝜆t)^{-𝛼 - 2} * -𝜆]|_{t=0}$
> - $𝐄[𝑋^2] = [-𝛼𝜆(𝛼+1)(1 - 𝜆t)^{-𝛼 - 2} * -𝜆]|_{t=0}$
> - $𝐄[𝑋^2] = [𝛼𝜆𝜆(𝛼+1)(1 - 𝜆t)^{-𝛼 - 2}]|_{t=0}$
> - $𝐄[𝑋^2] = 𝛼𝜆𝜆(𝛼+1)(1 - 𝜆0)^{-𝛼 - 2}$
> - $𝐄[𝑋^2] = 𝛼𝜆𝜆(𝛼+1)(1)^{-𝛼 - 2}$
> - $𝐄[𝑋^2] = 𝛼^2𝜆^2 + 𝛼𝜆^2$

> [!expand-ui]- Computing Variance(𝑋)
> Variance is defined as:
> - 𝑉𝑎𝑟(𝑋) = 𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>
>
> Let's use the MGF of a Bernoulli distribution to calculate the variance of 𝑋:
> - 𝑉𝑎𝑟(𝑋) = 𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = \[𝛼<sup>2</sup>𝜆<sup>2</sup> + 𝛼𝜆<sup>2</sup>\] - \[𝛼𝜆\]<sup>2</sup> <font style="color: rgb(122,134,154);">\# from above</font>
> - 𝑉𝑎𝑟(𝑋) = 𝛼<sup>2</sup>𝜆<sup>2</sup> + 𝛼𝜆<sup>2</sup> - 𝛼<sup>2</sup>𝜆<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 𝛼𝜆<sup>2</sup>
