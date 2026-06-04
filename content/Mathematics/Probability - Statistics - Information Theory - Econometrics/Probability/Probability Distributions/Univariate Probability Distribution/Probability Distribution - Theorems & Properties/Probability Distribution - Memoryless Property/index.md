---
title: "Probability Distribution - Memoryless Property"
created: 2021-09-13T05:27:38.206-05:00
modified: 2021-09-13T05:27:38.206-05:00
parent: "[[Probability Distribution - Theorems & Properties]]"
children: []
---
### Exponential Distribution

It is said that “[[Exponential Distribution|Exponential variables]] lose memory.”

Suppose that an Exponential variable 𝑇 represents waiting time. Memoryless property means that the fact of having waited for 𝑡 minutes gets “forgotten,” and it does not affect the future waiting time.

Regardless of the event 𝑇 \> 𝑡, when the total waiting time exceeds 𝑡, the remaining waiting time still has Exponential distribution with the same parameter. Mathematically,

𝑷 {𝑇 \> 𝑡+𝑥 | 𝑇 \> 𝑡} = 𝑷 {𝑇 \> 𝑥} for 𝑡, 𝑥 \> 0.
###### Proof

given exponential function 𝑷 {𝑇 \> 𝑖} = 𝑒<sup>-λ𝑖</sup>
- 𝑷 {𝑇 \> 𝑡+𝑥 | 𝑇 \> 𝑡} = 𝑷 {𝑇 \> 𝑡+𝑥, 𝑇 \> 𝑡} / 𝑷 {𝑇 \> 𝑡}
- 𝑷 {𝑇 \> 𝑡+𝑥 | 𝑇 \> 𝑡} = 𝑷 {𝑇 \> 𝑡+𝑥} / 𝑷 {𝑇 \> 𝑡}
- 𝑷 {𝑇 \> 𝑡+𝑥 | 𝑇 \> 𝑡} = 𝑒<sup>-λ(𝑡+𝑥)</sup> / 𝑒<sup>-λ𝑡</sup>
- 𝑷 {𝑇 \> 𝑡+𝑥 | 𝑇 \> 𝑡} = 𝑒<sup>-λ𝑥</sup>𝑒<sup>-λ𝑡</sup>/ 𝑒<sup>-λ𝑡</sup>
- 𝑷 {𝑇 \> 𝑡+𝑥 | 𝑇 \> 𝑡} = 𝑒<sup>-λ𝑥</sup>
- 𝑷 {𝑇 \> 𝑡+𝑥 | 𝑇 \> 𝑡} = 𝑷 {𝑇 \> 𝑥}

### Geometric Distribution

[[Geometric Distribution|geometric distribution]] also has this memoryless property
