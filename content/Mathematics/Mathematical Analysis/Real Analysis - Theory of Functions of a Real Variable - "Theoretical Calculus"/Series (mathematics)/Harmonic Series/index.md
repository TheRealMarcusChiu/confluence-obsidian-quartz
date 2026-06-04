---
title: "Harmonic Series"
created: 2023-07-12T12:55:14.598-05:00
modified: 2023-07-12T13:16:11.088-05:00
parent: "[[Series (mathematics)]]"
children: []
---
###### Harmonic Series
````excerpt
- 𝛴<sub>1≤𝑖≤∞</sub>(1/𝑖)
````
^excerpt

# Harmonic Series - Is Divergent to Infinity
- 𝛴<sub>1≤𝑖≤∞</sub>(1/𝑖) = 1/1 + 1/2 + 1/3 + ... = ∞

Proof

> [!expand]- Click here to expand...
> Let:
> - 𝑠<sub>𝑛</sub> = 𝛴<sub>1≤𝑖≤𝑛</sub>(1/𝑖)
>
> The sequence (𝑠<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is monotonically increasing.
>
> Show that (𝑠<sub>𝑛</sub>)<sub>𝑛∊ℕ</sub> is not bounded from above.
> - 𝛴<sub>1≤𝑖≤∞</sub>(1/𝑖) = 1/1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 + 1/7 + 1/8 + ...
> - 𝛴<sub>1≤𝑖≤∞</sub>(1/𝑖) = 1/1 + 1/2 + (1/3 + 1/4) + (1/5 + 1/6 + 1/7 + 1/8) + ... <font style="color: rgb(122,134,154);">\# group terms</font>
> - 𝛴<sub>1≤𝑖≤∞</sub>(1/𝑖) \> 1/1 + 1/2 + (1/4 + 1/4) + (1/8 + 1/8 + 1/8 + 1/8) + ... <font style="color: rgb(122,134,154);">\# replace the terms in each group by the smallest term in the group</font>
> - 𝛴<sub>1≤𝑖≤∞</sub>(1/𝑖) \> 1/1 + 1/2 + (1/2) + (1/2) + ...
> - 𝛴<sub>1≤𝑖≤∞</sub>(1/𝑖) \> ∞ <font style="color: rgb(122,134,154);">\# since there are infinitely many 1/2</font>
