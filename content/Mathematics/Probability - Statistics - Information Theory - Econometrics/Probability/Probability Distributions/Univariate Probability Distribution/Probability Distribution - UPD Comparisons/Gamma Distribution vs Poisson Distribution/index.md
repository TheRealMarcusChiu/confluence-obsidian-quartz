---
title: "Gamma Distribution vs Poisson Distribution"
created: 2021-09-13T05:27:36.858-05:00
modified: 2021-11-11T19:39:34.698-06:00
parent: "[[Probability Distribution - UPD Comparisons]]"
children: []
---
Computation of [[Gamma Distribution|Gamma]] probabilities can be significantly simplified by thinking of a Gamma variable as the time between some rare events (i.e. [[Poisson Distribution]])
# Formula

for:
- [[Gamma Distribution|𝐺𝑎𝑚𝑚𝑎(𝛼,𝜆)]] variable 𝐓
- [[Poisson Distribution|𝑃𝑜𝑖𝑠𝑠𝑜𝑛(λt)]] variable 𝐗

then:
- 𝑃 {𝐓 \> t} = 𝑃 {𝐗 \< 𝛼}
- 𝑃 {𝐓 ≤ t} = 𝑃 {𝐗 ≥ 𝛼}
