---
title: "Conjugate Prior - of Multinoulli／Multinomial Distribution"
created: 2021-09-13T05:28:33.501-05:00
modified: 2021-09-13T05:28:33.501-05:00
parent: "[[Conjugate Prior]]"
children: []
---
###### Proof That Dirichlet is the [[Conjugate Prior|conjugate prior]] of Multinoulli/Multinomial Distribution

<font style="color: rgb(0,0,255);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)</font> ∝ <font style="color: rgb(128,0,0);">𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)</font><font style="color: rgb(0,128,0);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)</font>
- <font style="color: rgb(128,0,0);">𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)</font> - [[Likelihood Function - Log-Likelihood Function - Score Function|likelihood function]] of a [[Multinoulli／Categorical Distribution - Generalized Bernoulli Distribution|Multinoulli Distribution]] with 𝑘 classes
- <font style="color: rgb(0,128,0);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)</font> - assume [[Prior Probability Distribution - Posterior Probability Distribution|prior]] has [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet Distribution]]
- <font style="color: rgb(0,0,255);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>)</font> - [[Prior Probability Distribution - Posterior Probability Distribution|posterior]] also with [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet Distribution]] because prior is the [[Conjugate Prior|conjugate]] of likelihood

<font style="color: rgb(128,0,0);">𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>) = ∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>𝑀<sub>𝑖</sub></sup>\]</font>

where:
- 𝑀<sub>𝑖</sub> - is the number of samples in {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} that has class 𝑖

<font style="color: rgb(0,128,0);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>) ∝ ∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>(𝛼<sub>𝑖</sub> - 1)</sup>\]</font>

therefore:
- 𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝ <font style="color: rgb(128,0,0);">𝐏(𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>|𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)</font><font style="color: rgb(0,128,0);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>)</font>
- 𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝ <font style="color: rgb(128,0,0);">∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>𝑀<sub>𝑖</sub></sup>\] </font><font style="color: rgb(0,128,0);">∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>(𝛼<sub>𝑖</sub> - 1)</sup>\]</font>
- <font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝</font> <font style="color: rgb(128,0,0);">∏<sub>1≤𝑖≤𝑘</sub>\[𝜃<sub>𝑖</sub><sup>𝑀<sub>𝑖</sub></sup></font><sup>+ 𝛼<sub>𝑖</sub> - 1)</sup>\]</font>
- <font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);">𝐏(𝜃<sub>𝑖</sub>, ..., 𝜃<sub>𝑘</sub>|𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>) ∝</font> [[Multivariate Beta Distribution (MBD) - Dirichlet Distribution|Dirichlet]](<font style="color: rgb(128,0,0);">𝑀<sub>1</sub></font> <font style="color: rgb(51,51,51);">+</font> 𝛼<sub>1</sub><font style="color: rgb(51,51,51);">, ...,</font> <font style="color: rgb(128,0,0);">𝑀<sub>𝑘</sub></font> <font style="color: rgb(51,51,51);">+</font> 𝛼<sub>𝑘</sub><font style="color: rgb(51,51,51);">)</font></font>
