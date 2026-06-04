---
title: "Geometric Series／Succession"
created: 2021-09-13T05:29:24.666-05:00
modified: 2024-02-01T11:37:41.032-06:00
parent: "[[Approximating Known Target Functions]]"
children: []
---
###### Geometric Series/Succession
````excerpt
- is a type of [[Power Series／Expansion|power series]] where its coefficients are equal (𝑎) and is centered on zero (𝑐 = 0)
- is a type of [[Maclaurin Series vs Maclaurin Polynomial|Maclaurin series]] where its coefficients are equal (𝑎)
- the name indicate each term is the [[Geometric Mean (GM)|geometric mean]] of its two neighboring terms
````
^excerpt

# Geometric Series (Finite N)

for 𝑟 ≠ 1:
- 𝑠 = 𝑎𝑟<sup>0</sup> + 𝑎𝑟<sup>1</sup> + ... + 𝑎𝑟<sup>𝑛-1</sup>
- 𝑠 = 𝛴<sub>0≤𝑘≤𝑛-1</sub>\[𝑎𝑟<sup>𝑘</sup>\]
- 𝑠 = 𝑎 \[(1 - 𝑟<sup>𝑛</sup>) / (1 - 𝑟)\]

where:
- 𝑎 is the first term of the series
- 𝑟 is the common ratio

formula derivation:
- 𝑠 = 𝑎 + 𝑎𝑟 + 𝑎𝑟<sup>2</sup> + ... + 𝑎𝑟<sup>𝑛-1</sup>
- 𝑠𝑟 = 𝑎𝑟 + 𝑎𝑟<sup>2</sup> + ... + 𝑎𝑟<sup>𝑛</sup>
- 𝑠 - 𝑠𝑟 = 𝑎 - 𝑎𝑟<sup>𝑛</sup>
- 𝑠(1 - 𝑟) = 𝑎(1 - 𝑟<sup>𝑛</sup>)
- 𝑠 = 𝑎(1 - 𝑟<sup>𝑛</sup>) / (1 - 𝑟)

# Geometric Series (Finite N)
- $\sum_{k=1}^n r^k = \frac{r - r^{n+1}}{1 - r}$
- 
> [!expand]- derivations
> - $\sum_{k=1}^n r^k = \frac{1 - r^{n+1}}{1 - r} - 1$
> - $\sum_{k=1}^n r^k = \frac{1 - r^{n+1}}{1 - r} - \frac{1 - r}{1 - r}$
> - $\sum_{k=1}^n r^k = \frac{1 - r^{n+1} - (1 - r)}{1 - r}$
> - $\sum_{k=1}^n r^k = \frac{1 - r^{n+1} - 1 + r}{1 - r}$
> - $\sum_{k=1}^n r^k = \frac{r - r^{n+1}}{1 - r}$

# Geometric Series (Infinite)

for 𝑟 \< 1:
- 𝑠 = 𝑎𝑟<sup>0</sup> + 𝑎𝑟<sup>1</sup> + ... + 𝑎𝑟<sup>∞</sup>
- 𝑠 = 𝛴<sub>0≤𝑘≤∞</sub>\[𝑎𝑟<sup>𝑘</sup>\]
- 𝑠 = 𝑎/(1-𝑟)

where:
- 𝑎 is the first term of the series
- 𝑟 is the common ratio

formula derivation:
- 𝑠 = 𝑎 + 𝑎𝑟 + 𝑎𝑟<sup>2</sup> + ... + 𝑎𝑟<sup>∞</sup>
- 𝑠𝑟 = 𝑎𝑟 + 𝑎𝑟<sup>2</sup> + ... + 𝑎𝑟<sup>∞</sup>
- 𝑠 - 𝑠𝑟 = 𝑎 - 𝑎𝑟<sup>∞</sup>
- 𝑠(1 - 𝑟) = 𝑎(1 - 𝑟<sup>∞</sup>)
- 𝑠 = 𝑎(1 - 𝑟<sup>∞</sup>) / (1 - 𝑟)
- 𝑠 = 𝑎(1 - 0) / (1 - 𝑟)
- 𝑠 = 𝑎 / (1 - 𝑟)

# Derivatives of Geometric Series (Infinite)

```merge-table
{
  "rows": [
    [
      "- 𝛴<sub>0≤𝑘≤∞</sub>\\[𝑎𝑟<sup>𝑘</sup>\\]",
      "𝑠",
      "- 𝑎/(1-𝑟)"
    ],
    [
      "- 𝛴<sub>1≤𝑘≤∞</sub>\\[𝑎𝑘𝑟<sup>𝑘-1</sup>\\]",
      "𝑠'",
      "- 𝑎/(1-𝑟)<sup>2</sup>"
    ],
    [
      "- 𝛴<sub>𝑙≤𝑘≤∞</sub>\\[𝑎𝑘(𝑘-1)(𝑘-2)...(𝑘-𝑙+1)𝑟<sup>𝑘-𝑙</sup>\\]",
      "𝑠<sup>(𝑘-𝑙)</sup>",
      "- 𝑙!𝑎/(1-𝑟)<sup>𝑙+1</sup>"
    ]
  ]
}
```
