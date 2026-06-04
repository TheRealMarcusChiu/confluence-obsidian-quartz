---
title: "Modeling - KL Divergence vs Reverse KL Divergence"
created: 2021-09-13T05:26:29.100-05:00
modified: 2022-01-02T19:46:40.295-06:00
parent: "[[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)]]"
children: []
---
when we want to model 𝑃 with 𝑄 we can use the following as cost functions:
- KL Divergence 𝐷<sub>𝐾𝐿</sub>(𝑃||𝑄)
- Reverse KL Divergence 𝐷<sub>𝐾𝐿</sub>(𝑄||𝑃)

as we know from [[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|Univariate Entropy]]:
- 𝐷<sub>𝐾𝐿</sub>(𝑃||𝑄) = 𝐄<sub>𝑋\~</sub><sub>𝑃</sub>\[ 𝑙𝑔\[𝑃(𝑋)/𝑄(𝑋)\] \]
- 𝐷<sub>𝐾𝐿</sub>(𝑄||𝑃) = 𝐄<sub>𝑋\~</sub><sub>𝑄</sub>\[ 𝑙𝑔\[𝑄(𝑋)/𝑃(𝑋)\] \]

when modeling 𝑃 with:
- 𝐷<sub>𝐾𝐿</sub>(𝑃||𝑄) we want 𝑄(𝑋) to be non-zero if 𝑃(𝑋) is non-zero. Otherwise, the KL value will be high. Therefore, it tries to cover what 𝑃 will cover
- 𝐷<sub>𝐾𝐿</sub>(𝑄||𝑃) we want 𝑄(𝑋) to be zero if 𝑃<em>(𝑋)</em> is zero. Otherwise, the KL value will be high.

# Modeling with KL vs Reverse KL - Example

Let’s say the ground truth 𝑃 is a bimodal distribution (the blue curve below) and we want to model it with a single-mode [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Gaussian distribution]] (the red curve):
- if 𝐷<sub>𝐾𝐿</sub>(𝑃||𝑄) is used as the training objective function, we will get a Gaussian distribution that overlaps both modes of the ground truth 𝑃 that peaks at the trough between the two modes (diagram a)
- If 𝐷<sub>𝐾𝐿</sub>(𝑄||𝑃) is used, we will either get one of the local optimal in (diagram b or c)

the problem is that we are using a simple model for complex ground truth (i.e. high bias, see [[Estimator & Predictor／Model (Bias - Variance - Irreducible／Bayes／Noise) Error - Predictor／Model Capacity／Complexity - Generalization (Underfit - Goodfit - Overfit)|bias-variance tradeoff]]). If both models have similar complexity, this will be a non-issue
# 2D Topology
![[Modeling - KL Divergence vs Reverse KL Divergence/kl-diveregence-vs-reverse-kl-divergence.jpeg]]
###### 2D Cross Section
![[Modeling - KL Divergence vs Reverse KL Divergence/modeling-with-kl-divergence.png|450x193]]![[Modeling - KL Divergence vs Reverse KL Divergence/modeling-with-reverse-kl-divergence.png|454]]
