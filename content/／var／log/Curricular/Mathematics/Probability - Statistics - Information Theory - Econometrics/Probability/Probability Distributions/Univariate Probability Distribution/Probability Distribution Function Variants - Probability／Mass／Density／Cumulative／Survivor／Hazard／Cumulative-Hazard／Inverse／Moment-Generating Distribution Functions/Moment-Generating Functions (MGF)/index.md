---
title: "Moment-Generating Functions (MGF)"
created: 2023-09-09T01:58:20.036-05:00
modified: 2023-10-23T16:13:24.770-05:00
parent: "[[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions]]"
children:
  - "[[Convergence of Moment-Generating Functions (MGF) → Convergence of Cumulative Distribution Functions (CDF)]]"
  - "[[Moment-Generating Function - Bernoulli Distribution]]"
  - "[[Moment-Generating Function - Binomial Distribution]]"
  - "[[Moment-Generating Function - Gamma Distribution]]"
  - "[[Moment-Generating Function - Geometric Distribution]]"
---
###### Moment-Generating Functions (MGF)
````excerpt
- is an alternative specification of a real-valued random variable's probability distribution
- Not all random variables have an MGF
- As its name implies, the MGF can be used to compute a distribution’s moments: the 𝑛<sup>th</sup> [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|moment about 0]] is the 𝑛<sup>th</sup> [[Differential Calculus|derivative]] of the MGF evaluated at 0
````
^excerpt

# MGF - Definition

The MGF of a random variable 𝑋 is defined as:
- $M_X(t) = 𝐄[e^{tX}] = \begin{cases} \sum_{x \in X} e^{tx} P_X(x)     & X \text{ is discrete} \\ \int_{-∞}^∞    e^{tx} f_X(x) dx  & X \text{ is continuous} \\ \end{cases}$

Provided the [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expectation]] 𝐄 exists for some 𝑡 in a [[Mathematical Space (Neighborhoods)|neighborhood]] of 0.
# MGF - Using MGF to Calculate Moments

The [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|𝑛th moment]] of random variable 𝑋 denoted as 𝐄\[𝑋<sup>𝑛</sup>\] is defined as the 𝑛<sup>th</sup> derivative of the MGF of 𝑋 evaluated at 𝑡=0:
- $𝐄[X^n] = \frac{d^n}{dt^n}M_X(t) |_{t=0}$

# MGF - Algebra

If the MGF of 𝑋  is 𝑀<sub>𝑋</sub>(𝑡), then the MGF of 𝑎𝑋+𝑏 is 𝑒<sup>𝑏𝑡</sup>𝑀<sub>𝑋</sub>(𝑎𝑡)
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [YouTube - Christina Knudson - Moment Generating Functions](https://www.youtube.com/playlist?list=PLdxWrq0zBgPU0DUvONdlNpgndFr0e6qt3)
- [https://en.wikipedia.org/wiki/Moment-generating_function](https://en.wikipedia.org/wiki/Moment-generating_function)
