---
title: "If AB = I, then BA = I"
created: 2024-01-11T19:45:57.157-06:00
modified: 2024-01-11T19:51:02.303-06:00
parent: "[[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem]]"
children: []
---
Given 𝐴𝐵 = 𝐼, prove 𝐵𝐴 = 𝐼
###### PROOF
- 𝐵 = 𝐵𝐼
- 𝐵 = 𝐵(𝐴𝐵)
- 𝐵 = (𝐵𝐴)𝐵
- 𝐼𝐵 = (𝐵𝐴)𝐵
- 𝐼𝐵 - (𝐵𝐴)𝐵 = 0
- (𝐼 - 𝐵𝐴)𝐵 = 0

Since 𝐵 is full rank, (𝐼 - 𝐵𝐴) is 0 on all vectors.

This means (𝐼 - 𝐵𝐴) must be the 0 matrix.

So 𝐼 = 𝐵𝐴
