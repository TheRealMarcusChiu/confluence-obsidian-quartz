---
title: "Stochastic Process - Models"
created: 2021-09-13T05:26:59.591-05:00
modified: 2022-05-07T19:37:14.787-05:00
parent: "[[Stochastic／Random／Markov Models／Process]]"
children: []
---
Models for time series data can have many forms and represent different [[Stochastic／Random／Markov Models／Process|stochastic processes]]. When modeling variations in the level of a process, three broad classes of practical importance are (the first three classes depend linearly on previous data points):
- <strong>[AutoRegressive](https://en.wikipedia.org/wiki/Autoregressive) (AR) Models</strong> -
- <strong>Integrated (I) Models</strong> -
- <strong>[Moving Average](https://en.wikipedia.org/wiki/Moving_average_model) (MA) Models</strong> -
- <strong>Vector (V) Models</strong> - deal with vector-valued data are available under the heading of multivariate time-series models
- <strong>Exogenous (X) Models</strong> - observed time-series is driven by some "forcing" time-series (which may not have a causal effect on the observed series): the distinction from the multivariate case is that the forcing series may be deterministic or under the experimenter's control

Combinations of these classes produce:
- [AutoRegressive Moving Average](https://en.wikipedia.org/wiki/Autoregressive_moving_average) (ARMA) Models
- [AutoRegressive Integrated Moving Average](https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average) (ARIMA) Models
- [AutoRegressive Fractionally Integrated Moving Average](https://en.wikipedia.org/wiki/Autoregressive_fractionally_integrated_moving_average) (ARFIMA) Models
- [Vector AutoRegression](https://en.wikipedia.org/wiki/Vector_autoregression) (VAR) Models
- [Nonlinear AutoRegressive Exogenous](https://en.wikipedia.org/wiki/Nonlinear_autoregressive_exogenous_model) (NARX) Models

# Non-Linear Models

non-linear dependence of the level of a series on previous data points is of interest, partly because of the possibility of producing a [chaotic](https://en.wikipedia.org/wiki/Chaos_theory) time series.

Among other types of non-linear time series models, there are models to represent the changes in variance over time ([heteroskedasticity](https://en.wikipedia.org/wiki/Heteroskedasticity)). These models represent [autoregressive conditional heteroskedasticity](https://en.wikipedia.org/wiki/Autoregressive_conditional_heteroskedasticity) (ARCH) and the collection comprises a wide variety of representations ([GARCH](https://en.wikipedia.org/wiki/GARCH), TARCH, EGARCH, FIGARCH, CGARCH, etc.). Here changes in variability are related to, or predicted by, recent past values of the observed series. This is in contrast to other possible representations of locally varying variability, where the variability might be modeled as being driven by a separate time-varying process, as in a [doubly stochastic model](https://en.wikipedia.org/wiki/Doubly_stochastic_model).
# Model Free

wavelet transform-based methods (e.g. locally stationary wavelets and wavelet decomposed neural networks) have gained favor. Multiscale (often referred to as multiresolution) techniques decompose a given time series, attempting to illustrate time dependence at multiple scales. See also [Markov Switching Multi-Fractal](https://en.wikipedia.org/wiki/Markov_switching_multifractal) (MSMF) techniques for modeling volatility evolution.
