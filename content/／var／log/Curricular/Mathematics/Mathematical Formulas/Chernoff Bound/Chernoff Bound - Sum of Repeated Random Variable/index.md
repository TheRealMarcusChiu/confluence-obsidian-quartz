---
title: "Chernoff Bound - Sum of Repeated Random Variable"
created: 2024-01-22T14:11:39.344-06:00
modified: 2024-01-22T14:17:07.505-06:00
parent: "[[Chernoff Bound]]"
children: []
---
Let:
- 𝑆 = 𝑋<sub>1</sub> + 𝑋<sub>2</sub> + ... + 𝑋<sub>𝑛</sub>
- 𝐄\[𝑋<sub>𝑖</sub>\] = 𝑝
- 𝑆 = 𝑋<sub>1</sub> + 𝑋<sub>2</sub> + ... + 𝑋<sub>𝑛</sub>
- 𝐄\[𝑆\] = 𝑛𝑝 <font style="color: rgb(122,134,154);">\# because</font> [[Expected Value ／ Expectation - Properties|expectation is linear]]

[[Chernoff Bound]] states:
- $𝐏(𝑆 > 𝜇 + 𝛿𝑛) ≤ 𝜀^{-2n𝛿^2}$
- $𝐏(𝑆 < 𝜇 - 𝛿𝑛) ≤ 𝜀^{-2n𝛿^2}$

Thus:
- $𝐏(|𝑆 - 𝜇| > 𝛿𝑛) ≤ 2𝜀^{-2n𝛿^2}$
