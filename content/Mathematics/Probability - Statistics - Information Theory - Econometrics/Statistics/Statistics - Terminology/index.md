---
title: "Statistics - Terminology"
created: 2021-09-13T05:29:20.840-05:00
modified: 2024-02-12T17:45:02.842-06:00
parent: "[[Statistics]]"
children:
  - "[[Chance Error - Sample／Sampling Bias／Error]]"
---
````excerpt
Some may argue that statisticians are not really interested in generalizing from a sample to a specified population but to an idealized super­population spanning space and time

![[Statistics - Terminology/statistics.png|400]]

best course on statistics: [https://bolt.mph.ufl.edu/6050-6052/](https://bolt.mph.ufl.edu/6050-6052/)

> [!expand]- Introduction & Terminology
> The field of statistics exists because it is usually impossible to collect data from all individuals of interest (population). Our only solution is to collect data from a subset (sample) of the individuals of interest, but our real desire is to know the “truth” about the population. Quantities such as means, standard deviations and proportions are all important values and are called “parameters” when we are talking about a population. Since we usually cannot get data from the whole population, we cannot know the values of the parameters for that population. We can, however, calculate estimates of these quantities for our sample. When they are calculated from sample data, these quantities are called “statistics.” A statistic estimates a parameter.
>
> <strong>![[Statistics - Terminology/the-big-picture-of-statistics.png|400]]</strong>
> - <strong>[[Population Distribution - Sample／Empirical Distribution|population distribution]] </strong>consists of all units of interest
> - <strong>[[Empirical／Sample Distribution|sample/empirical distribution]] </strong>consists of observed units collected from the population
> - <strong>[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|population parameter]] <strong>(<font style="color: rgb(0,51,102);">𝜽)</font></strong></strong>
> 	- sometimes just called a parameter
> 	- is any [[Variate Analysis|variate analysis]] of population distribution (e.g. [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|mean]], [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]], etc)
> 	- usually have an unknown value
> - <strong>[[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|sample statistic]] (<font style="color: rgb(0,51,102);">𝜽ˆ)</font></strong>
> 	- sometimes just called statistic
> 	- is a function of sample distribution as input
> 	- is any [[Variate Analysis|variate analysis]] of a sample distribution (e.g. [[Sample Mean|sample mean]], [[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation|sample variance]], etc)
> 	- is an estimate of the corresponding <em>population parameter </em><font style="color: rgb(0,51,102);">𝜽</font>
> 	- is a random variable because it is computed from a random sample distribution a subset of population distribution. Thus, this statistic has a [[Sampling Distribution - Finite-Sample Distribution|sampling distribution]]
> 	- see [[Point／Parameter Estimation／Estimator／Estimate／Approximation - Estimating Parameters of Parametric Distribution／Population Function／Model (Population Parameters - Sample Statistics)|methods estimating sample statistic]]
> - [[Chance Error - Sample／Sampling Bias／Error|Chance Error - Sample/Sampling Bias/Error]]

> [!expand]- Random Process - Random Variables - Stochastic Model - Probability Distribution - Statistical Inference - Statistical Model - Exploratory Data Analysis - Estimator - Probability Model
> Many times there are observable phenomena that are random in nature. We call it a <strong>Random Process</strong> (Random <strong>Experiment</strong>). The random process has outcomes, and subsets of these outcomes are called [[Probability Spaces (Sample Space - Event Space - Probability Measure)|Events]]. We map these events to a numeric form using <strong>[[Random Variables (RV)|Random Variables]]</strong>.
>
> We study and capture our knowledge about this random process by creating a <strong>Stochastic Model</strong>. The stochastic model predicts the output of an event by:
> 1. providing different choices (of values of a random variable)
> 2. the probability of those choices
>
> These two elements are summarized as a <strong>Probability Distribution</strong>.
>
> This distribution has some parameters (like mean, standard deviation, etc) which were inferred from the observable phenomena using <strong>[[Inferential Statistics|Statistical Inference]]</strong>.
>
> Before inference, the distribution had unknown (not inferred yet) parameters. It was, hence, a family of distributions, since each value of the parameter is a different distribution. This family is called a <strong>Statistical Model</strong>.
>
> Usually, a statistical model is guessed (exponential, binomial, normal, uniform, Bernoulli, etc) using <strong>[[Exploratory Data Analysis (EDA)|Exploratory Data Analysis]]</strong>, then its parameters are <strong>inferred</strong> (estimated) by applying statistical inference (say, algorithms involving loss function minimization) to arrive at a stochastic model (statistical model with known parameters) (a.k.a. <strong>Estimator</strong>) that captures our knowledge about the random process.
>
> The term '<strong>Probability Model</strong>' (probabilistic model) is usually an alias for stochastic models.
````
^excerpt
