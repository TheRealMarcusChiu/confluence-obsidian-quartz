---
title: "Stochastic Process - (Joint／Jointly - Strict-Sense／Strictly／Strong-Sense／Strongly - Trend - Cyclo - Wide／Weak-Sense - Nth-Order) Stationary Process"
created: 2021-09-13T05:27:09.987-05:00
modified: 2025-09-13T15:11:52.560-05:00
parent: "[[Stochastic Process - Analysis]]"
children:
  - "[[Strict-Sense Stationarity]]"
---
- <strong>Stationary Process</strong> (<strong>Strict-Sense/Strictly/Strong-Sense/Strongly Stationary Process</strong>) - a [[Stochastic／Random／Markov Models／Process|stochastic process]] whose <em>unconditional </em><em>[[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]]</em> doesn't change when shifted in time. Consequently, parameters such as [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]] and [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] also don't change when shifted over time
- <strong>Cyclo-Stationary Process</strong> - a stochastic process that varies cyclically with time

The most common cause of violation of stationarity is a trend in the mean, which can be due to either:
- presence of a unit root - stochastic shocks have permanent effects, and the process is not mean-reverting
- deterministic trend - the process is called a <strong>Trend Stationary Process</strong>, and stochastic shocks have only transitory effects after which the variable tends toward a deterministically evolving (non-constant) mean

A <strong>Trend Stationary Process</strong> is not strictly stationary, but can easily be transformed into a stationary process by removing the underlying trend, which is solely a function of time. Similarly, processes with one or more unit-roots can be made stationary through differencing

For many applications, strict-sense stationarity is too restrictive. Other forms of stationarity are employed such as:
- <strong>Wide/Weak-Sense Stationarity (WSS)</strong> - a random process whose [[Stochastic Process - Mean Function|mean function]] and [[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|correlation function]] doesn't change when shifted over time
- <strong>N<sup>th</sup>-Order Stationarity</strong> -

# Stationary Comparisons
> [!tabs]
>
> === Strict
>
> a random process {𝑋(𝑡), 𝑡∈𝐽} is a <strong>Stationary Process</strong> if its statistical properties do not change over time
>
> for example, for a stationary process, 𝑋(𝑡) and 𝑋(𝑡+𝛥) have the same [[Probability Distributions|probability distributions]] for all 𝑡∊𝐽 and 𝛥∊𝐽:
> - 𝐹<sub>𝑋(𝑡)</sub>(𝑥) = 𝐹<sub>𝑋(𝑡+𝛥)</sub>(𝑥) <font style="color: rgb(128,128,128);">\# for all 𝑡∊𝐽 and 𝛥∊𝐽</font>
>
> where:
> - 𝐹<sub>𝑋(𝑡)</sub>(𝑥) - is the probability distribution of 𝑋 at time 𝑡
> - 𝐹<sub>𝑋(𝑡+𝛥)</sub>(𝑥) - is the probability distribution of 𝑋 at time 𝑡+𝛥
>
> === Weak/Wide
>
> a random process {𝑋(𝑡), 𝑡∈𝐽} is <strong>Weak/Wide-Sense Stationary (WSS)</strong> if its mean function and correlation function do not change by shifts in time
>
> for example, a weak/wide-sense stationary process, for all 𝑖,𝑗∊𝐽 and 𝛥∊𝐽:
> - 𝐄\[𝑋(𝑖)\] = 𝐄\[𝑋(𝑗)\]
> - 𝐄\[𝑋(𝑖)𝑋(𝑗)\] = 𝐄\[𝑋(𝑖+𝛥)𝑋(𝑗+𝛥)\]
>
> in other words:
> - 𝜇<sub>𝑋</sub>(𝑡) = 𝜇<sub>𝑋</sub> <font style="color: rgb(128,128,128);">\# for all 𝑡∊𝐽</font>
> - 𝑅<sub>𝑋</sub>(𝑖,𝑗) = 𝑅<sub>𝑋</sub>(𝑖-𝑗) <font style="color: rgb(128,128,128);">\# for all 𝑖,𝑗∊𝐽</font>
>
> where:
> - 𝜇<sub>𝑋</sub>(𝑡) - [[Stochastic Process - Mean Function|mean function]] of random process 𝑋
> - <font style="color: rgb(128,128,128);"><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑅<sub>𝑋</sub>(𝑖,𝑗) - [[Autocorrelation - Autocovariance - Auto／Serial Correlation／Covariance Function|auto correlation function]] of random process𝑋</font></font></font>
>
> === Trend
>
> === Cyclo
>
> === Nᵗʰ Order
