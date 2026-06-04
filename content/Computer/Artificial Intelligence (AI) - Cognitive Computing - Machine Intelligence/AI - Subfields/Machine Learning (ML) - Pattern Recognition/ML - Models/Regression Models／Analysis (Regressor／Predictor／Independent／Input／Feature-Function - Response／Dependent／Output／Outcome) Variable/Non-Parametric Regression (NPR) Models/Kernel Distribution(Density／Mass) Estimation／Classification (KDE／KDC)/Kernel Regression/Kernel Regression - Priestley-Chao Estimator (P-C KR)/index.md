---
title: "Kernel Regression - Priestley-Chao Estimator (P-C KR)"
created: 2021-12-18T18:49:51.279-06:00
modified: 2022-02-21T16:29:09.685-06:00
parent: "[[Kernel Regression]]"
children: []
---
# Priestley-Chao Estimator - Formula
- 𝑦ˆ(𝑥) = ℎ<sup>-1</sup> · 𝛴<sub>2≤𝑖≤𝑛</sub>\[𝑘<sub>ℎ</sub>(𝑥<sub>𝑖</sub>-𝑥<sub>𝑖-1</sub>)·𝑘((𝑥-𝑥<sub>𝑖</sub>)/ℎ)·𝑦<sub>𝑖</sub>\]

where:
- 𝑘<sub>ℎ</sub>() - [kernel](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1022754)
- ℎ - bandwidth (or smoothing parameter)
