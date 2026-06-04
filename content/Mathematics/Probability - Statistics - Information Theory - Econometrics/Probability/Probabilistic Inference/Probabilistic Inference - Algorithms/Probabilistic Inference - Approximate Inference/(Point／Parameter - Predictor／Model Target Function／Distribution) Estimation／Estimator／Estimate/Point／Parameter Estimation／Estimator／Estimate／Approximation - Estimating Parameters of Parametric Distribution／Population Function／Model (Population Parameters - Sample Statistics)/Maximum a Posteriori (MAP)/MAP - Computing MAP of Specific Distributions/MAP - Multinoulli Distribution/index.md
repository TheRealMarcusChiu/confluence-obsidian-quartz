---
title: "MAP - Multinoulli Distribution"
created: 2021-09-13T05:27:59.226-05:00
modified: 2021-09-13T05:27:59.226-05:00
parent: "[[MAP - Computing MAP of Specific Distributions]]"
children: []
---
𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝ 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)
- 𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>) - [[Likelihood Function - Log-Likelihood Function - Score Function|likelihood function]] of a [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli Distribution]] with 𝑘 classes
- 𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>) - assume [[Prior Probability Distribution - Posterior Probability Distribution|prior]] has [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet(𝛼1, ..., 𝛼𝑘) Distribution]]
- 𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) - [[Prior Probability Distribution - Posterior Probability Distribution|posterior]] also with [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet Distribution]] because prior is the [[Conjugate Prior|conjugate]] of likelihood

𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>) = ∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>𝑀<sub>𝑖</sub></sup>\]

where:
- 𝑀<sub>𝑖</sub> - is the number of samples in {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} with class 𝑖

𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>) ∝ ∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>(𝛼<sub>𝑖</sub> - 1)</sup>\]

therefore:
- 𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝ <font style="color: rgb(128,0,0);">𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)</font><font style="color: rgb(0,128,0);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)</font>
- 𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝ <font style="color: rgb(128,0,0);">∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>𝑀<sub>𝑖</sub></sup>\] </font><font style="color: rgb(0,128,0);">∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>(𝛼<sub>𝑖</sub> - 1)</sup>\]</font>
- <font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝</font> <font style="color: rgb(128,0,0);">∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>𝑀<sub>𝑖</sub></sup></font><font style="color: rgb(0,128,0);"><sup>+ 𝛼<sub>𝑖</sub> - 1)</sup>\]</font></font>
- <font style="color: rgb(0,128,0);"><font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝</font> [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet]](<font style="color: rgb(128,0,0);">𝑀<sub>1</sub></font><font style="color: rgb(0,128,0);"> <font style="color: rgb(51,51,51);">+</font> 𝛼<sub>1</sub></font><font style="color: rgb(51,51,51);">, ...,</font> <font style="color: rgb(128,0,0);">𝑀<sub>𝑘</sub></font><font style="color: rgb(0,128,0);"> <font style="color: rgb(51,51,51);">+</font> 𝛼<sub>𝑘</sub></font><font style="color: rgb(51,51,51);">)</font></font></font>

### Bayesian Prediction (Predicting First Sample)

> [!expand]- Click here to expand...
> suppose we have a graphical model:
>
> ![[MAP - Multinoulli Distribution/bayesian-prediction-without-data.png|150]]
>
> where:
> - 𝜃 - is a random variable with [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet(𝛼1, ..., 𝛼𝑘) Distribution]]
>
> then:
> - 𝐏(𝑋) = ∫𝐏(𝑋,𝜃)𝛿𝜃
> - 𝐏(𝑋) = ∫𝐏(𝑋|𝜃)𝐏(𝜃)𝛿𝜃
>
> where:
> - 𝐏(𝑋=𝑥<sub>𝑖</sub>|𝜃) has multinoulli(𝜃<sub>1</sub>, ..., 𝜃<sub>𝑘</sub>) distribution
> - 𝐏(𝜃) has dirichlet(𝛼<sub>1</sub>, ..., 𝛼<sub>𝑘</sub>) distribution
>
> for each class 𝑥<sub>𝑖</sub>
> - 𝐏(𝑋=𝑥<sub>𝑖</sub>|𝜃) = ∫<font style="color: rgb(0,128,0);">𝐏(𝑋=𝑥<sub>𝑖</sub>|𝜃)</font><font style="color: rgb(128,0,0);">𝐏(𝜃)</font>𝛿𝜃
> - 𝐏(𝑋=𝑥<sub>𝑖</sub>|𝜃) = ∫<font style="color: rgb(0,128,0);">𝜃<sub>𝑖</sub></font><font style="color: rgb(128,0,0);">(1/𝑍)∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>(𝛼<sub>𝑖</sub> - 1)</sup>\]</font>𝛿𝜃
> - 𝐏(𝑋=𝑥<sub>𝑖</sub>|𝜃) = <font style="color: rgb(128,0,0);">(1/𝑍)</font>∫<font style="color: rgb(0,128,0);">𝜃<sub>𝑖</sub></font><font style="color: rgb(128,0,0);">∏<sub>1≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub><sup>(𝛼<sub>𝑗</sub> - 1)</sup>\]</font>𝛿𝜃
> - ...
> - 𝐏(𝑋=𝑥<sub>𝑖</sub>|𝜃) = 𝛼<sub>𝑖</sub>/ ∑<sub>1≤𝑗≤𝑘</sub> 𝛼<sub>𝑗</sub>
>
> dirichlet hyperparameters {𝛼<sub>1</sub>, ..., 𝛼<sub>𝑘</sub>} are prior beliefs that can be thought as the number of samples we have seen BEFORE actually seeing data.
### Bayesian Prediction (Predicting n+1<sup>th</sup> Sample)

> [!expand]- Click here to expand...
> suppose we have a graphical model:
>
> ![[MAP - Multinoulli Distribution/byesan-prediction-with-data.png|301]]
>
> where:
> - 𝜃 - is a random variable with [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet(𝛼1, ..., 𝛼𝑘) Distribution]]
>
> then:
> - 𝐏(𝑋<sub>𝑛+1</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = ∫𝐏(𝑋<sub>𝑛+1</sub>,𝜃|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>,𝜃)𝛿𝜃
> - 𝐏(𝑋<sub>𝑛+1</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = ∫𝐏(𝑋<sub>𝑛+1</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>,𝜃)𝐏(𝜃|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)𝛿𝜃
> - 𝐏(𝑋<sub>𝑛+1</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = ∫𝐏(𝑋<sub>𝑛+1</sub>|𝜃)𝐏(𝜃|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)𝛿𝜃 <font style="color: rgb(128,128,128);">\# 𝑋<sub>𝑛+1</sub>and {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} is [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given 𝜃</font>
> 	- 𝐏(𝜃|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) = [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet]]<font style="color: rgb(0,128,0);">(</font><font style="color: rgb(128,0,0);">𝑀<sub>1</sub></font><font style="color: rgb(0,128,0);"> <font style="color: rgb(51,51,51);">+</font> 𝛼<sub>1</sub></font>, ...,<font style="color: rgb(128,0,0);">𝑀<sub>𝑘</sub></font><font style="color: rgb(0,128,0);"> <font style="color: rgb(51,51,51);">+</font> 𝛼<sub>𝑘</sub></font>)<font style="color: rgb(128,128,128);">\# see [[Conjugate Prior - of Multinoulli／Multinomial Distribution|Conjugate Prior of Multinoulli Distribution]]</font>
> 	- <font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝐏(𝜃|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) =</font> (1/𝑍)∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>𝑀<sub>𝑖</sub></sup></font><font style="color: rgb(0,128,0);"><sup>+ 𝛼<sub>𝑖</sub> - 1)</sup>\]</font></font>
>
> for each class 𝑥<sub>𝑖</sub>
> - 𝐏(𝑋<sub>𝑛+1</sub>=𝑥<sub>𝑖</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>,𝜃) = ∫<font style="color: rgb(0,128,0);">𝐏(𝑋<sub>𝑛+1</sub>=𝑥<sub>𝑖</sub>|𝜃)</font><font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)</font>𝛿𝜃
> - 𝐏(𝑋<sub>𝑛+1</sub>=𝑥<sub>𝑖</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>,𝜃) = ∫<font style="color: rgb(0,128,0);">𝜃<sub>𝑖</sub></font><font style="color: rgb(128,0,0);">(1/</font><font style="color: rgb(128,0,0);">𝑍)</font><font style="color: rgb(128,0,0);">∏<sub>1≤𝑗≤𝑘</sub>\[𝜃<sub>𝑗</sub><sup>𝑀<sub>𝑗</sub></sup></font><font style="color: rgb(0,128,0);"><sup><font style="color: rgb(128,0,0);">+ 𝛼<sub>𝑗</sub> - 1)</font></sup><font style="color: rgb(128,0,0);">\]</font></font>𝛿𝜃
> - ...
> - 𝐏(𝑋<sub>𝑛+1</sub>=𝑥<sub>𝑖</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>,𝜃) = (𝑀<sub>𝑖</sub> +<sub></sub>𝛼<sub>𝑖</sub>) / \[∑<sub>1≤𝑗≤𝑘</sub>(𝑀<sub>𝑗</sub> +<sub></sub>𝛼<sub>𝑗</sub>)\]
>
> where:
> - 𝑀<sub>𝑗</sub> - is the number of samples in {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} with class 𝑖
>
> prior equivalent sample size: 𝛼 = 𝛼<sub>1</sub> + ... + 𝛼<sub>𝑘</sub>
> - larger 𝛼 → increased confidence in prior
