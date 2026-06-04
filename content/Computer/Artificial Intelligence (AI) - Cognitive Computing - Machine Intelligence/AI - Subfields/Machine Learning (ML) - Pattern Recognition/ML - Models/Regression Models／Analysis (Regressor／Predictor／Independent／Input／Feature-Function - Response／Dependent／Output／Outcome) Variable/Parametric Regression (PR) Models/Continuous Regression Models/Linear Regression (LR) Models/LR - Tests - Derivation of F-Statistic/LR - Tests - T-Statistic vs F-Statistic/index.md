---
title: "LR - Tests - T-Statistic vs F-Statistic"
created: 2024-02-01T15:37:44.932-06:00
modified: 2024-02-01T16:09:54.035-06:00
parent: "[[LR - Tests - Derivation of F-Statistic]]"
children: []
---
- [[LR - Tests - Derivation of Student T-Statistic]]
- [[LR - Tests - Derivation of F-Statistic]]

From the above articles we have:
- $T = \frac{\hat{𝛽}_1}{\hat{𝜎}\sqrt{C_1}}$
- $F = \frac {(\hat{e}_r^T\hat{e}_r - \hat{e}_f^T\hat{e}_f) / (1)} {(\hat{e}_f^T\hat{e}_f) / (n - p)}$

These are the same tests:
- $T^2 = \frac{\hat{𝛽}_1^2}{\hat{𝜎}^2C_1}$
	- $\hat{𝜎}^2 = \frac{\hat{e}^T_f\hat{e}_f}{n - p}$
- $T^2 = \frac{\hat{𝛽}_1^2}{C_1\hat{e}^T_f\hat{e}_f/(n - p)}$
	- $\frac{\hat{𝛽}_1^2}{C_1} = \hat{e}_r^T\hat{e}_r - \hat{e}_f^T\hat{e}_f$
- $T^2 = F$
