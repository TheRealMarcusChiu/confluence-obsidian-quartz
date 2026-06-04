---
title: "Likelihood vs Probability"
created: 2021-09-13T05:26:30.310-05:00
modified: 2021-11-05T20:11:41.641-05:00
parent: "[[Probability Definition]]"
children: []
---
# Probability vs Likelihood

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Probability]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Likelihood Function - Log-Likelihood Function - Score Function|Likelihood]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "<strong>Discrete Example (e.g. [[Bernoulli Distribution]])</strong>\nTODO",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "<strong>Continuous Example (e.g. [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Normal Distribution]])</strong>\n![[Likelihood vs Probability/likelihood-vs-probability.png|500]]",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "𝐏(𝑑𝑎𝑡𝑎|𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛-𝑝𝑎𝑟𝑎𝑚𝑡𝑒𝑟-𝜃)",
        "align": "center"
      },
      {
        "content": "𝐋(𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛-𝑝𝑎𝑟𝑎𝑚𝑒𝑡𝑒𝑟-𝜃|𝑑𝑎𝑡𝑎)",
        "align": "center"
      }
    ],
    [
      "- data value varies\n- 𝜃 value is constant",
      "- data value is constant\n- 𝜃 value varies"
    ],
    [
      "- <strong>integrates to 1</strong>: given constant value 𝜃, the sum of all probability for each possible data value equals 1",
      "- <strong>does not integrate to 1</strong>: given constant value data, the sum of all likelihood values for each possible 𝜃 does not equal to 1"
    ],
    [
      "- is the area under a fixed [[Probability Distributions|probability distribution]]",
      "- is the y-axis value of a fixed [[Probability Distributions|probability distribution]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Probability vs Likelihood - Duality

the [[Probability|probability]] of data conditioned on the value(s) of distribution parameter(s) is equal to the [[Likelihood Function - Log-Likelihood Function - Score Function|likelihood]] of the distribution parameter value(s) given the same data 𝐏(𝑑𝑎𝑡𝑎|𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛-𝑝𝑎𝑟𝑎𝑚𝑡𝑒𝑟-𝜃) = 𝐋(𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛-𝑝𝑎𝑟𝑎𝑚𝑒𝑡𝑒𝑟-𝜃|𝑑𝑎𝑡𝑎)
###### Discrete Example (Bernoulli Distribution)

Consider a coin flip where it falls heads with probability 𝜃:
- 𝑑𝑎𝑡𝑎 = 0 when tails
- 𝑑𝑎𝑡𝑎 = 1 when heads

Thus, 𝐏(𝑑𝑎𝑡𝑎=𝑘|𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛-𝑝𝑎𝑟𝑎𝑚𝑡𝑒𝑟-𝜃) = 𝜃<sup>𝑘</sup>(1 - 𝜃)<sup>1-𝑘</sup>

Now when:
- 𝑑𝑎𝑡𝑎=1 ⇒ 𝐏(𝑑𝑎𝑡𝑎=1|𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛-𝑝𝑎𝑟𝑎𝑚𝑡𝑒𝑟-𝜃) = 𝜃 = 𝐋(𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛-𝑝𝑎𝑟𝑎𝑚𝑒𝑡𝑒𝑟-𝜃|𝑑𝑎𝑡𝑎=1)
- 𝑑𝑎𝑡𝑎=0 ⇒ 𝐏(𝑑𝑎𝑡𝑎=0|𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛-𝑝𝑎𝑟𝑎𝑚𝑡𝑒𝑟-𝜃) = (1 - 𝜃) = 𝐋(𝑑𝑖𝑠𝑡𝑟𝑖𝑏𝑢𝑡𝑖𝑜𝑛-𝑝𝑎𝑟𝑎𝑚𝑒𝑡𝑒𝑟-𝜃|𝑑𝑎𝑡𝑎=0)

###### Continuous Example
- similar to [[Probability Distribution - Density vs Mass|probability density]] = 𝐏/𝛥𝜃 = 𝐋(𝜃)

# Resources![](https://www.youtube.com/watch?v=pYxNSUDSFH4)![](https://www.youtube.com/watch?v=ZA4JkHKZM50&ab_channel=3Blue1Brown)![](https://www.youtube.com/watch?v=bWaACQGsk7c&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG&index=14)![](https://www.youtube.com/watch?v=IhoEwC9R8pA&list=PLwJRxp3blEvZ8AKMXOy0fc0cqT61GsKCG&index=16)
