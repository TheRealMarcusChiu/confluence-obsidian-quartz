---
title: "LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Gradient Descent)"
created: 2020-08-03T12:52:00.753-05:00
modified: 2026-05-21T03:00:01.681-05:00
parent: "[[LR - Methods Estimating Unknown Regression Coefficients]]"
children: []
---
# Introduction
![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Gradient Descent)/LITMUS-rt_A-Status-Report-compressed.pdf]]
# Next

Let's use [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent]] to solve [[Ordinary Least Squares (OLS) Regression|Linear Regression]] by using [[Linear Least Squares (LLS)]] in its cost function 𝐽(𝜃)

given sample/training data:
- (𝑦<sup>(1)</sup>, 𝑥<sub>1</sub><sup>(1)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(1)</sup>) <font style="color: rgb(128,128,128);">\# sample 1</font>
- (𝑦<sup>(2)</sup>, 𝑥<sub>1</sub><sup>(2)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(2)</sup>)<font style="color: rgb(128,128,128);"> \# sample 2</font>
- ...
- (𝑦<sup>(𝑛)</sup>, 𝑥<sub>1</sub><sup>(𝑛)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑛)</sup>)<font style="color: rgb(128,128,128);"> \# sample 𝑛</font>

given inputs {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>} and trained [[ML - Model Parameters & Hyperparameters|model parameters]] {𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>}, the predicted value 𝑦̂ is defined as (i.e. hypothesis):
- 𝐄{𝑌|𝑋<sub>1</sub>=𝑥<sub>1</sub>, ..., 𝑋<sub>𝑘</sub>=𝑥<sub>𝑘</sub>} = ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑦̂ = 𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑓<sub>1</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) + ... + 𝜃<sub>𝑘</sub>𝑓<sub>𝑘</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)

# Cost Function
the cost function of a single sample 𝑖:
- (1/2)\[ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\]<sup>2</sup>

the cost function of all samples:
- 𝐽(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>) = (1/2𝑛)𝛴<sub>1≤𝑖≤𝑛</sub>\[ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\]<sup>2</sup>

# Goal
minimize 𝐽(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>) with respect to the regression coefficients {𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>} using gradient descent
# Gradient Descent
repeat until convergence:
- 𝜃<sub>0</sub>← 𝜃<sub>0</sub>- 𝛼·(1/𝑚)𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>\[ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\] · 𝑓<sub>1</sub>(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>)<strong>\]</strong>
- ...
- 𝜃<sub>𝑘</sub>← 𝜃<sub>𝑘</sub>- 𝛼·(1/𝑚)𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>\[ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\] · 𝑓<sub>𝑘</sub>(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>)<strong>\]</strong>

derivation:

> [!expand]- Click here to expand...
> ###### generic [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|gradient descent]] algorithm:
>
> > [!indent]
> <font style="color: rgb(128,128,128);">repeat until convergence:</font>
>
> - 
> 	- <font style="color: rgb(128,128,128);">𝜃<sub>0</sub>← 𝜃<sub>0</sub>- 𝛼·(𝛿/𝛿𝜃<sub>0</sub>)𝐽(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)</font>
> 	- <font style="color: rgb(128,128,128);">...</font>
> 	- <font style="color: rgb(128,128,128);">𝜃<sub>𝑘</sub>← 𝜃<sub>𝑘</sub>- 𝛼·(𝛿/𝛿𝜃<sub>𝑘</sub>)𝐽(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>)</font>
>
> ###### taking the partial derivative of 𝐽(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>) wrt to 𝜃<sub>𝑖</sub>:
> - (𝛿/𝛿𝜃<sub>𝑖</sub>)𝐽(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>) = (𝛿/𝛿𝜃<sub>𝑖</sub>)(1/2𝑚)𝛴<sub>1≤𝑖≤𝑛</sub>\[ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\]<sup>2</sup>
> - (𝛿/𝛿𝜃<sub>𝑖</sub>)𝐽(𝜃<sub>0</sub>, ..., 𝜃<sub>𝑘</sub>) = (1/𝑚)𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>\[ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\] · (𝛿/𝛿𝜃<sub>𝑖</sub>)ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>)<strong>\]</strong>
>
> ###### modified gradient descent algorithm:
>
> > [!indent]
> <font style="color: rgb(128,128,128);">repeat until convergence:</font>
>
> - 
> 	- <font style="color: rgb(128,128,128);">𝜃<sub>0</sub>← 𝜃<sub>0</sub>- 𝛼·(1/𝑚)𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>\[ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\] · (𝛿/𝛿𝜃<sub>0</sub>)ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>)<strong>\]</strong></font>
> 	- <font style="color: rgb(128,128,128);">...</font>
> 	- <font style="color: rgb(128,128,128);">𝜃<sub>𝑘</sub>← 𝜃<sub>𝑘</sub>- 𝛼·(1/𝑚)𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>\[ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>) - 𝑦<sup>(𝑖)</sup>\] · (𝛿/𝛿𝜃<sub>𝑘</sub>)ℎ(𝑥<sub>1</sub><sup>(𝑖)</sup>, ..., 𝑥<sub>𝑘</sub><sup>(𝑖)</sup>)<strong>\]</strong></font>
>
> ###### partial derivative of ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) wrt to 𝜃<sub>𝑗</sub>:
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = (𝛿/𝛿𝜃<sub>𝑗</sub>) \[𝜃<sub>0</sub>+ 𝜃<sub>1</sub>𝑓<sub>1</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) + ... + 𝜃<sub>𝑘</sub>𝑓<sub>𝑘</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)\]
> - (𝛿/𝛿𝜃<sub>𝑗</sub>)ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = 𝑓<sub>𝑗</sub>(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>)
>
> ###### FINAL modified gradient descent algorithm:
>
> > [!indent]
> <font style="color: rgb(128,128,128);">repeat until convergence:</font>
>
> - 
> 	- <font style="color: rgb(128,128,128);">𝜃<sub>0</sub>← 𝜃<sub>0</sub>- 𝛼·(1/𝑚)𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>\[ℎ(<font style="color: rgb(128,128,128);">𝑥</font><sub>1</sub><sup>(𝑖)</sup><font style="color: rgb(128,128,128);">, ..., 𝑥</font><sub>𝑘</sub><sup>(𝑖)</sup>) - <font style="color: rgb(128,128,128);">𝑦</font><sup>(𝑖)</sup>\] · 𝑓<sub>1</sub>(<font style="color: rgb(128,128,128);">𝑥</font><sub>1</sub><sup>(𝑖)</sup><font style="color: rgb(128,128,128);">, ..., 𝑥</font><sub>𝑘</sub><sup>(𝑖)</sup>)<strong>\]</strong></font>
> 	- <font style="color: rgb(128,128,128);">...</font>
> 	- <font style="color: rgb(128,128,128);">𝜃<sub>𝑘</sub>← 𝜃<sub>𝑘</sub>- 𝛼·(1/𝑚)𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong>\[ℎ(<font style="color: rgb(128,128,128);">𝑥</font><sub>1</sub><sup>(𝑖)</sup><font style="color: rgb(128,128,128);">, ..., 𝑥</font><sub>𝑘</sub><sup>(𝑖)</sup>) - <font style="color: rgb(128,128,128);">𝑦</font><sup>(𝑖)</sup>\] · 𝑓<sub>𝑘</sub>(<font style="color: rgb(128,128,128);">𝑥</font><sub>1</sub><sup>(𝑖)</sup><font style="color: rgb(128,128,128);">, ..., 𝑥</font><sub>𝑘</sub><sup>(𝑖)</sup>)<strong>\]</strong></font>
# Gradient Descent Variants

see [[Gradient Descent／Ascent Algorithms - The Method of Steepest Descent／Ascent Algorithms|Gradient Descent/Ascent Algorithms - The Method of Steepest Descent/Ascent Algorithms]]
