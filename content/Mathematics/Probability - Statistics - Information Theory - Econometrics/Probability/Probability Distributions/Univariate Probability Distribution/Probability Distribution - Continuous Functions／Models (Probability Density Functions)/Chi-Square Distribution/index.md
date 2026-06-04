---
title: "Chi-Square Distribution"
created: 2021-09-13T05:27:24.101-05:00
modified: 2026-05-21T15:28:41.111-05:00
parent: "[[Probability Distribution - Continuous Functions／Models (Probability Density Functions)]]"
children: []
---
###### Chi-Square Distribution (<em>χ</em><sup>2</sup>-distribution)
````excerpt
- with 𝑘[degrees of freedom](https://en.wikipedia.org/wiki/Degrees_of_freedom_(statistics)) is the distribution of a sum of the squares of 𝑣independent[[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|standard normal]] random variables
- assume<font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"> 𝑧 is a random variable with</font> </font>[[z-distribution (Standard Normal Distribution) ｜ z-scores ｜ z-values ｜ z-table ｜ z-statistic ｜ Standardization - Standardized Values - Standard Scores - Normal Deviates|Standard Normal Distribution]], then:
	- 𝑧<sup>2</sup>: has distribution 𝐶𝘩𝑖-𝑆𝑞𝑢𝑎𝑟𝑒(𝑣=1)
	- 𝑧<sub>1</sub><sup>2</sup> + 𝑧<sub>2</sub><sup>2</sup> + ... + 𝑧<sub>𝑘</sub><sup>2</sup> : has distribution 𝐶𝘩𝑖-𝑆𝑞𝑢𝑎𝑟𝑒(𝑣=𝑘)
````
^excerpt

# Probability Density Function

```merge-table
{
  "rows": [
    [
      "𝑓(𝑋=𝑥) = \\[1/(2<sup>𝑣/2</sup>Γ(𝑣/2))\\] \\* 𝑥<sup>𝑣/2-1</sup> \\* 𝑒<sup>-𝑥/2</sup><font style=\"color: rgb(128,128,128);\">\\# for 0≤x≤∞</font>\n\nwhere:\n- Γ(𝛼) = [[Gamma Distribution|gamma function]] = (𝛼 - 1)!\n\nrelation to other distributions\n- 𝐶𝘩𝑖-𝑆𝑞𝑢𝑎𝑟𝑒(𝑣) = [[Gamma Distribution|𝐺𝑎𝑚𝑚𝑎]](𝛼=𝑣/2,𝜆=1/2)\n- 𝐶𝘩𝑖-𝑆𝑞𝑢𝑎𝑟𝑒(𝑣=2) = [[Exponential Distribution|𝐸𝑥𝑝𝑜𝑛𝑒𝑛𝑡𝑖𝑎𝑙]](𝜆=1/2)",
      "![[Chi-Square Distribution/chi-square-densities.png|500]]\n\nChi-square densities with 𝑣 = 1, 5, 10, and 30 degrees of freedom. Each distribution is right-skewed. For large 𝑣, it is approximately Normal"
    ]
  ]
}
```
# Expectation

𝐄(𝑋) = 𝑣

> [!expand]- proof
> - 𝐶𝘩𝑖-𝑆𝑞𝑢𝑎𝑟𝑒(𝑣) = [[Gamma Distribution|𝐺𝑎𝑚𝑚𝑎]](𝛼=𝑣/2,𝜆=1/2)
> - [[Gamma Distribution|𝐺𝑎𝑚𝑚𝑎]](𝛼,𝜆) distribution has 𝐄(𝑋) = 𝛼/𝜆
>
> therefore
> - 𝐄(𝑋) = (𝑣/2) / (1/2)
> - 𝐄(𝑋) = 𝑣
# Variance

𝑉𝑎𝑟(𝑋) = 2𝑣

> [!expand]- proof
> - 𝐶𝘩𝑖-𝑆𝑞𝑢𝑎𝑟𝑒(𝑣) = [[Gamma Distribution|𝐺𝑎𝑚𝑚𝑎]](𝛼=𝑣/2,𝜆=1/2)
> - [[Gamma Distribution|𝐺𝑎𝑚𝑚𝑎]](𝛼,𝜆) distribution has<strong> 𝑉𝑎𝑟</strong>(𝑋) = 𝛼/𝜆<sup>2</sup>
>
> therefore
> - 𝑉𝑎𝑟(𝑋) = (𝑣/2) / (1/2)<sup>2</sup>
> - 𝑉𝑎𝑟(𝑋) = 2𝑣
