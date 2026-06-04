---
title: "Kernel Regression - Nadaraya-Watson Estimator (N-W KR)"
created: 2021-12-18T17:43:31.972-06:00
modified: 2022-02-21T16:39:07.244-06:00
parent: "[[Kernel Regression]]"
children: []
---
# Nadaraya-Watson Estimator - Formula
- 𝑦ˆ(𝑥) = \[𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<sub>𝑖</sub>)𝑦<sub>𝑖</sub>\] / \[𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<sub>𝑖</sub>)\]

where:
- 𝑘<sub>ℎ</sub>() - [[Kernel Functions (Similarity Functions)|kernel]]
- ℎ - bandwidth

# Nadaraya-Watson Estimator - Derivation
- 𝐄\[𝑌|𝑋=𝑥\] = ∫𝑦·𝑓(𝑦|𝑥)·𝑑𝑦
- 𝐄\[𝑌|𝑋=𝑥\] = ∫𝑦·𝑓(𝑦,𝑥)/𝑓(𝑥)·𝑑𝑦

Using the [[Kernel Distribution(Density／Mass) Estimation／Classification (KDE／KDC)|kernel density estimation]] for the joint distribution 𝑓(𝑦,𝑥) and 𝑓(𝑥) with a kernel 𝑘<sub>ℎ</sub>()
- 𝑓ˆ(𝑦,𝑥) = (1/𝑛)·𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<sub>𝑖</sub>)𝑘<sub>ℎ</sub>(𝑦-𝑦<sub>𝑖</sub>)
- 𝑓ˆ(𝑥) = (1/𝑛)·𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<sub>𝑖</sub>)

We get
- 𝐄ˆ\[𝑌|𝑋=𝑥\] = ∫𝑦·<font style="color: rgb(0,128,0);">𝑓(𝑦,𝑥)</font>/<font style="color: rgb(255,102,0);">𝑓(𝑥)</font>·𝑑𝑦
- 𝐄ˆ\[𝑌|𝑋=𝑥\] = ∫𝑦·<font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<sub>𝑖</sub>)𝑘<sub>ℎ</sub>(𝑦-𝑦<sub>𝑖</sub>)</font>/<font style="color: rgb(255,102,0);">𝛴<sub>1≤<font style="color: rgb(128,0,0);"><strong>𝑗</strong></font>≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<font style="color: rgb(128,0,0);"><sub>𝑗</sub></font>)</font>·𝑑𝑦
- 𝐄ˆ\[𝑌|𝑋=𝑥\] = <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<sub>𝑖</sub>)</font>∫𝑦·<font style="color: rgb(0,128,0);">𝑘<sub>ℎ</sub>(𝑦-𝑦<sub>𝑖</sub>)<font style="color: rgb(51,51,51);">·𝑑𝑦</font></font>/<font style="color: rgb(255,102,0);">𝛴<sub>1≤<font style="color: rgb(128,0,0);"><strong>𝑗</strong></font>≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<font style="color: rgb(128,0,0);"><sub>𝑗</sub></font>)</font>
- 𝐄ˆ\[𝑌|𝑋=𝑥\] = <font style="color: rgb(0,128,0);">𝛴<sub>1≤𝑖≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<sub>𝑖</sub>)</font>𝑦<font style="color: rgb(0,128,0);"><font style="color: rgb(51,51,51);"><sub>𝑖</sub></font></font>/<font style="color: rgb(255,102,0);">𝛴<sub>1≤<font style="color: rgb(128,0,0);"><strong>𝑗</strong></font>≤𝑛</sub>𝑘<sub>ℎ</sub>(𝑥-𝑥<font style="color: rgb(128,0,0);"><sub>𝑗</sub></font>)</font>

# Nadaraya-Watson Estimator - Other
- [[Gaussian Process Regression vs Nadaraya-Watson Kernel Regression]]

# Resources
- [Justin Esarey - Kernel Density Estimation & Kernel Regression](https://www.youtube.com/watch?v=QSNN0no4dSI&t=5815s)
