---
title: "Covariation - Covariance"
created: 2021-09-13T05:28:43.904-05:00
modified: 2023-09-09T10:34:02.400-05:00
parent: "[[Covariance - Covariation]]"
children:
  - "[[Properties of Covariance]]"
---
###### Covariance - Covariation
````excerpt
- a type of [[Covariance - Covariation|covariance/covariation]] that summarizes interrelation of 2 variables by outputting a scalar value ranging from (-∞, +∞)
- is a stepping stone for [[Correlation|correlation]]
- is a [[Mixed Moments - Central Mixed Moments|central mixed moment]] of order 𝑘<sub>1</sub>=1 & 𝑘<sub>2</sub>=1
````
^excerpt

# Covariance - Formula
###### Population Covariance Formula
- 𝐶𝑜𝑣(𝑋,𝑌) = 𝐄\[(𝑥<sub>𝑖</sub> - <font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font>)(𝑦<sub>𝑖</sub> - <font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>)\]
- 𝐶𝑜𝑣(𝑋,𝑌) = 𝐄\[𝑥<sub>𝑖</sub>𝑦<sub>𝑖</sub>\] - <font style="color: rgb(255,0,0);letter-spacing: 0.0px;">𝜇<sub>𝑥</sub></font><font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>
- 
> [!expand]- Click here to expand...
> - 𝐶𝑜𝑣(𝑋,𝑌) = 𝐄\[𝑥<sub>𝑖</sub>𝑦<sub>𝑖</sub> - <font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font>𝑦<sub>𝑖</sub> - <font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>𝑥<sub>𝑖</sub> + <font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font><font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>\]
> - 𝐶𝑜𝑣(𝑋,𝑌) = 𝐄\[𝑥<sub>𝑖</sub>𝑦<sub>𝑖</sub>\] - 𝐄\[<font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font>𝑦<sub>𝑖</sub>\] - 𝐄\[<font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>𝑥<sub>𝑖</sub>\] + 𝐄\[<font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font><font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>\]
> - 𝐶𝑜𝑣(𝑋,𝑌) = 𝐄\[𝑥<sub>𝑖</sub>𝑦<sub>𝑖</sub>\] - <font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font>𝐄\[𝑦<sub>𝑖</sub>\] - <font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>𝐄\[𝑥<sub>𝑖</sub>\] + 𝐄\[<font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font><font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>\]
> - 𝐶𝑜𝑣(𝑋,𝑌) = 𝐄\[𝑥<sub>𝑖</sub>𝑦<sub>𝑖</sub>\] - <font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font><font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font> - <font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font><font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font> + <font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font><font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>
> - 𝐶𝑜𝑣(𝑋,𝑌) = 𝐄\[𝑥<sub>𝑖</sub>𝑦<sub>𝑖</sub>\] - <font style="color: rgb(255,0,0);">𝜇<sub>𝑥</sub></font><font style="color: rgb(255,0,0);">𝜇<sub>𝑦</sub></font>
- 𝐶𝑜𝑣(𝑋,𝑌) = \[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥<sub>𝑖</sub> - <font style="color: rgb(255,0,0);letter-spacing: 0.0px;">𝜇<sub>𝑥</sub></font>)(𝑦<sub>𝑖</sub> - <font style="color: rgb(255,0,0);letter-spacing: 0.0px;">𝜇<sub>𝑦</sub></font>)\] / <font style="letter-spacing: 0.0px;color: rgb(255,0,0);">(𝑛)</font>
- 𝐶𝑜𝑣(𝑋,𝑌) = \[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥<sub>𝑖</sub>𝑦<sub>𝑖</sub>)\]/<font style="color: rgb(255,0,0);">(𝑛)<font style="color: rgb(51,51,51);"> - </font>𝜇<sub>𝑥</sub>𝜇<sub>𝑦</sub></font>

where:
- 𝜇<sub>𝑥</sub>- true average (population mean) of all 𝑥 values
- 𝜇<sub>𝑦</sub>- true average (population mean) of all 𝑦 values

###### Sample Covariance Formula
- 𝐶𝑜𝑣'(𝑋,𝑌) = 𝐄\[(𝑥<sub>𝑖</sub> - <font style="color: rgb(255,0,0);">𝑥̅</font>)(𝑦<sub>𝑖</sub> - <font style="color: rgb(255,0,0);">𝑦̅</font>)\]
- 𝐶𝑜𝑣'(𝑋,𝑌) = \[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥<sub>𝑖</sub> - <font style="color: rgb(255,0,0);">𝑥̅</font>)(𝑦<sub>𝑖</sub> - <font style="color: rgb(255,0,0);">𝑦̅</font>)\] / <font style="color: rgb(255,0,0);">(𝑛 - 1)</font>
- 𝐶𝑜𝑣'(𝑋,𝑌) = \[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥<sub>𝑖</sub>𝑦<sub>𝑖</sub>)\]/<font style="color: rgb(255,0,0);">(𝑛 - 1)<font style="color: rgb(51,51,51);"> - <font style="color: rgb(255,0,0);">𝑥̅𝑦̅</font></font></font>

where:
- 𝑥̅ - estimated average ([[Sample Mean|sample mean]]) of all 𝑥 values
- 𝑦̅ - estimated average ([[Sample Mean|sample mean]]) of all 𝑦 values

# Covariance - With Itself is Variance
- 𝐶𝑜𝑣(𝑋,𝑋) = 𝐄\[(𝑥<sub>𝑖</sub> - 𝜇<sub>𝑥</sub>)(𝑥<sub>𝑖</sub> - 𝜇<sub>𝑥</sub>)\]
- 𝐶𝑜𝑣(𝑋,𝑋) = \[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥<sub>𝑖</sub> - 𝜇<sub>𝑥</sub>)(𝑥<sub>𝑖</sub> - 𝜇<sub>𝑥</sub>)\] / (𝑛)
- 𝐶𝑜𝑣(𝑋,𝑋) = \[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑥<sub>𝑖</sub> - 𝜇<sub>𝑥</sub>)<sup>2</sup>\] / (𝑛)
- 𝐶𝑜𝑣(𝑋,𝑋) = [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|𝑉𝑎𝑟]](𝑋)

# Covariance - Diagrams

![](https://www.youtube.com/watch?v=qtaqvPAeEJY)
# Covariance - Properties

![[Properties of Covariance#^excerpt]]
# Covariance - Other
- [[Stochastic Process - Auto／Cross／Partial Correlation／Covariance|Auto/Cross/Partial Covariance]]

<strong>![[Covariation - Covariance/covariance-diagram.png|750]]</strong>
