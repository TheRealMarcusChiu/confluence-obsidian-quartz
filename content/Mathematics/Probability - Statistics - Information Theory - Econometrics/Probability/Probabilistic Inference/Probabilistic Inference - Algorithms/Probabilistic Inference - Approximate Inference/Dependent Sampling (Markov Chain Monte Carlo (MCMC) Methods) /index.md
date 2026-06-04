---
title: "Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods) "
created: 2021-09-13T05:28:11.709-05:00
modified: 2026-05-21T02:35:18.458-05:00
parent: "[[Probabilistic Inference - Approximate Inference]]"
children:
  - "[[Markov Chain Monte Carlo (MCMC)]]"
---
###### Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods)
````excerpt
- is where the next value sampled from a distribution is DEPENDENT on the previous sample (as oppose to [[Independent Sampling (Standard Monte Carlo Methods)|Independent Sampling]])
````
^excerpt

# Dependent Sampling - Types
- we could use dependent sampling to sample from a distribution without knowing the value of the normalizing constant <font style="color: rgb(128,128,128);">𝐏(𝐄=𝐞) </font>of that density
	- <font style="color: rgb(128,128,128);">𝐏(𝐐=𝐪|𝐄=𝐞) = 𝐏(𝐄=𝐞|𝐐=𝐪)𝐏(𝐐=𝐪) / 𝐏(𝐄=𝐞)</font>
	- <font style="color: rgb(128,128,128);">𝐏(𝐐=𝐪|𝐄=𝐞) ∝ 𝐏(</font><font style="color: rgb(128,128,128);">𝐄=𝐞|𝐐=𝐪)𝐏(𝐐=𝐪)</font>
- [[Markov Chain Monte Carlo (MCMC)]] methods:
	- [[Metropolis-Hastings (MH) Algorithm]] -
	- [[Gibbs Sampling]] -
	- [[Hamiltonian Monte Carlo Algorithm - Hybrid Monte Carlo|Hamiltonian Monte Carlo]] -

# TODO

![](https://www.youtube.com/watch?v=CfpRdmddVPM)

assume we want to sample from a probability distribution:
- <font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋) <font style="color: rgb(128,128,128);">\# this is an example of [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|posterior probability query]]</font></font>

<font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">where:</font></font>
- <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝜃 - is a single random variable (later it can be extended to multiple variables)</font></font>
- <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">𝑋 - is a set of observed variables</font></font>

<font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);">by [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|bayesian rule]] we have:</font></font>
- <font style="color: rgb(128,0,0);"><font style="color: rgb(51,51,51);"><font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋)</font><font style="color: rgb(128,128,128);"> = </font><font style="color: rgb(0,128,0);">𝐏(𝑋|𝜃)𝐏(𝜃)</font><font style="color: rgb(128,128,128);"> / </font><font style="color: rgb(51,102,255);">𝐏(𝑋)</font></font></font>

where:
- <font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋)</font> - the probability distribution in question
- <font style="color: rgb(51,102,255);">𝐏(</font><font style="color: rgb(51,102,255);">𝑋</font><font style="color: rgb(51,102,255);">) </font>- denominator is the normalizing constant which scales the distribution <font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋)</font>
- <font style="color: rgb(0,128,0);">𝐏(𝑋|𝜃)𝐏(𝜃</font><font style="color: rgb(255,153,0);"><font style="color: rgb(0,128,0);">)</font> </font>- numerator determines the SHAPE of the distribution <font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋)</font>

computing <font style="color: rgb(51,102,255);">𝐏(𝑋) </font>takes a long time and we typically want to avoid that

we could use <strong>dependent sampling</strong> to sample from a distribution without knowing the value of the normalizing constant <font style="color: rgb(51,102,255);">𝐏(</font><font style="color: rgb(51,102,255);">𝑋</font><font style="color: rgb(51,102,255);">)</font> of the probability distribution <font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋)</font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋)</font> = <font style="color: rgb(0,128,0);">𝐏(𝑋|𝜃)𝐏(𝜃)</font> / <font style="color: rgb(51,102,255);">𝐏(𝑋)</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋)</font> ∝ <font style="color: rgb(0,128,0);">𝐏(𝑋|𝜃)𝐏(𝜃)</font></font>

the graph below shows 3 distributions of <font style="color: rgb(128,0,0);">𝐏(𝜃|𝑋) <font style="color: rgb(51,51,51);">where each are divided by a different normalizing constant</font></font>

![[Dependent Sampling (Markov Chain Monte Carlo (MCMC) Methods) /dependent-sampling-explaination.png|313x250]]

[[dependent-sampling-explaination.xml|diagram.draw.io]]

notice that:
- the shape between the 3 distributions are similar. The numerator <font style="color: rgb(0,128,0);">𝐏(𝑋|𝜃)𝐏(𝜃</font><font style="color: rgb(255,153,0);"><font style="color: rgb(0,128,0);">)</font> </font>determines the shape.
- the vertical scale between the 3 distributions are different. This scale is determined by the denominator <font style="color: rgb(51,102,255);">𝐏(</font><font style="color: rgb(51,102,255);">𝑋</font><font style="color: rgb(51,102,255);">)</font>

all we need is to determine the shape, which is the distribution of <font style="color: rgb(0,128,0);">𝐏(𝑋|𝜃)𝐏(𝜃)</font>. We don't care about the scale part, in other words no need to determine the normalizing constant <font style="color: rgb(51,102,255);">𝐏(</font><font style="color: rgb(51,102,255);">𝑋</font><font style="color: rgb(51,102,255);">)</font>
### Comparing Probability Value Between 𝜃<sub>1</sub> and 𝜃<sub>2</sub>

we want to determine the probability ratio:
- <font style="color: rgb(128,128,128);">𝐏(𝜃<sub>1</sub>|𝑋) / 𝐏(𝜃<sub>2</sub>|𝑋)</font>

using [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Baye's Rule]]:
- <font style="color: rgb(128,128,128);"><font style="color: rgb(128,128,128);">𝐏(𝜃<sub>1</sub>|𝑋) / <font style="color: rgb(128,128,128);">𝐏(𝜃</font><sub>2</sub><font style="color: rgb(128,128,128);">|𝑋) = <strong>\[</strong><font style="color: rgb(128,128,128);">𝐏(</font><font style="color: rgb(128,128,128);">𝑋|<font style="color: rgb(128,128,128);">𝜃</font><sub>1</sub></font><font style="color: rgb(128,128,128);">)𝐏(<font style="color: rgb(128,128,128);">𝜃</font><sub>1</sub></font><font style="color: rgb(128,128,128);">)/𝐏(</font><font style="color: rgb(128,128,128);">𝑋</font><font style="color: rgb(128,128,128);">)</font><strong>\]</strong> / <strong>\[</strong><font style="color: rgb(128,128,128);">𝐏(</font><font style="color: rgb(128,128,128);">𝑋|<font style="color: rgb(128,128,128);">𝜃</font><sub>2</sub></font><font style="color: rgb(128,128,128);">)𝐏(<font style="color: rgb(128,128,128);">𝜃</font><sub>2</sub></font><font style="color: rgb(128,128,128);">)/𝐏(</font><font style="color: rgb(128,128,128);">𝑋</font><font style="color: rgb(128,128,128);">)</font><strong>\]</strong></font></font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,128,128);"><font style="color: rgb(128,128,128);">𝐏(𝜃</font><sub>1</sub><font style="color: rgb(128,128,128);">|𝑋) / </font><font style="color: rgb(128,128,128);">𝐏(𝜃</font><sub>2</sub><font style="color: rgb(128,128,128);">|𝑋) = <strong>\[</strong>𝐏(𝑋|𝜃<sub>1</sub>)𝐏(𝜃<sub>1</sub>)<strong>\]</strong> / <strong>\[</strong>𝐏(𝑋|𝜃<sub>2</sub>)𝐏(𝜃<sub>2</sub>)<strong>\]</strong></font></font></font></font>

notice we don't need to compute the normalizing constant <font style="color: rgb(128,128,128);">𝐏(</font><font style="color: rgb(128,128,128);">𝑋</font><font style="color: rgb(128,128,128);">)</font>

notice that the ratio of un-normalized posteriors <font style="color: rgb(128,128,128);"><strong>\[</strong>𝐏(𝑋|𝜃<sub>1</sub>)𝐏(𝜃<sub>1</sub>)<strong>\]</strong> / <strong>\[</strong>𝐏(𝑋|𝜃<sub>2</sub>)𝐏(𝜃<sub>2</sub>)<strong>\]</strong></font> reflects the ratio of normalized posteriors <font style="color: rgb(128,128,128);">𝐏(𝜃<sub>1</sub>|𝑋) / 𝐏(𝜃<sub>2</sub>|𝑋)</font>

therefore, we could design a sampler that uses the ratio of un-normalized posteriors at 2 different points in parameter space <font style="color: rgb(128,128,128);"><strong>\[</strong>𝐏(𝑋|𝜃<sub>1</sub>)𝐏(𝜃<sub>1</sub>)<strong>\]</strong> / <strong>\[</strong>𝐏(𝑋|𝜃<sub>2</sub>)𝐏(𝜃<sub>2</sub>)<strong>\] </strong></font>and we use that ratio to govern how we step around parameter space. This would give us an exact view of whats happening in the ratio of normalized posterior space <font style="color: rgb(128,128,128);">𝐏(𝜃<sub>1</sub>|𝑋) / 𝐏(𝜃<sub>2</sub>|𝑋)<font style="color: rgb(51,51,51);">. In other words we could sample from </font><font style="color: rgb(128,128,128);">𝐏(𝜃</font><sub>1</sub><font style="color: rgb(128,128,128);">|𝑋) / 𝐏(𝜃</font><sub>2</sub><font style="color: rgb(128,128,128);">|𝑋) <font style="color: rgb(51,51,51);">solely from</font> <strong>\[</strong><font style="color: rgb(128,128,128);">𝐏(𝑋|𝜃</font><sub>1</sub><font style="color: rgb(128,128,128);">)𝐏(𝜃</font><sub>1</sub><font style="color: rgb(128,128,128);">)</font><strong>\]</strong><font style="color: rgb(128,128,128);"> / </font><strong>\[</strong><font style="color: rgb(128,128,128);">𝐏(𝑋|𝜃</font><sub>2</sub><font style="color: rgb(128,128,128);">)𝐏(𝜃</font><sub>2</sub><font style="color: rgb(128,128,128);">)</font><strong>\]</strong></font></font>

see video at time 7:23
# Dependent Sampling - General Algorithm

do a series of local steps around parameter space

see video at time 7:23
