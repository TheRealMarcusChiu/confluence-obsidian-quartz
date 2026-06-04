---
title: "Properties of Variance"
created: 2021-09-13T05:28:54.023-05:00
modified: 2024-01-31T13:12:48.126-06:00
parent: "[[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)]]"
children:
  - "[[Variance of Product of Multiple Random Variables]]"
  - "[[Variance of Product of Two Random Variables]]"
---
###### properties of [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] and standard deviation
````excerpt
- 𝑉𝑎𝑟(𝑋 + 𝑌) = <font style="color: rgb(128,0,0);">𝐶𝑜𝑣(𝑋,𝑋)</font> + <font style="color: rgb(0,128,0);">𝐶𝑜𝑣(𝑌,𝑌)</font> + <font style="color: rgb(255,102,0);">𝐶𝑜𝑣(𝑋,𝑌)</font> + <font style="color: rgb(255,102,0);">𝐶𝑜𝑣(𝑌,𝑋)</font>
- 𝑉𝑎𝑟(𝑋 + 𝑌) = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑋)</font> + <font style="color: rgb(0,128,0);">𝑉𝑎𝑟(𝑌)</font> + <font style="color: rgb(255,102,0);">2𝐶𝑜𝑣(𝑋,𝑌)</font>
- 𝑉𝑎𝑟(𝑋 + 𝑌) = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑋)</font> + <font style="color: rgb(0,128,0);">𝑉𝑎𝑟(𝑌)</font> + <font style="color: rgb(255,102,0);">2𝐶𝑜𝑟(𝑋,𝑌)𝑠𝑑(𝑋)𝑠𝑑(𝑌)</font>
- 𝑉𝑎𝑟(𝑋 + 𝑌) = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑋)</font> + <font style="color: rgb(0,128,0);">𝑉𝑎𝑟(𝑌)</font><font style="color: rgb(255,102,0);"><font style="color: rgb(122,134,154);"> \# when 𝑋 and 𝑌 are uncorrelated</font></font>
- 𝑉𝑎𝑟(𝑋 - 𝑌) = <font style="color: rgb(128,0,0);">𝐶𝑜𝑣(𝑋,𝑋)</font> + <font style="color: rgb(0,128,0);">𝐶𝑜𝑣(𝑌,𝑌)</font> - <font style="color: rgb(255,102,0);">𝐶𝑜𝑣(𝑋,𝑌)</font> - <font style="color: rgb(255,102,0);">𝐶𝑜𝑣(𝑌,𝑋)</font>
- 𝑉𝑎𝑟(𝑋 - 𝑌) = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑋)</font> + <font style="color: rgb(0,128,0);">𝑉𝑎𝑟(𝑌)</font> - <font style="color: rgb(255,102,0);">2𝐶𝑜𝑣(𝑋,𝑌)</font>
- 𝑉𝑎𝑟(𝑋 - 𝑌) = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑋)</font> + <font style="color: rgb(0,128,0);">𝑉𝑎𝑟(𝑌)</font> - <font style="color: rgb(255,102,0);">2𝐶𝑜𝑟(𝑋,𝑌)𝑠𝑑(𝑋)𝑠𝑑(𝑌)</font>
- 𝑉𝑎𝑟(𝑋 - 𝑌) = <font style="color: rgb(128,0,0);">𝑉𝑎𝑟(𝑋)</font> + <font style="color: rgb(0,128,0);">𝑉𝑎𝑟(𝑌)</font><font style="color: rgb(255,102,0);"><font style="color: rgb(122,134,154);"> \# when 𝑋 and 𝑌 are uncorrelated</font></font>
- 𝑉𝑎𝑟(𝑎𝑋) = 𝑎<sup>2</sup>𝑉𝑎𝑟(𝑋)
- 𝑉𝑎𝑟(𝑐) = 0

together:
- 𝑉𝑎𝑟(𝑎𝑋 + 𝑏𝑌 + 𝑐) = 𝑎<sup>2</sup>𝑉𝑎𝑟(𝑋) + 𝑏<sup>2</sup>𝑉𝑎𝑟(𝑌) + 2𝑎𝑏𝐶𝑜𝑣(𝑋,𝑌)

for [[Probability Independence (Marginal Independence - Conditional Independence)|independent]] 𝑋 and 𝑌:
- 𝑉𝑎𝑟(𝑋 + 𝑌) = 𝑉𝑎𝑟(𝑋) + 𝑉𝑎𝑟(𝑌) <font style="color: rgb(128,128,128);">\# because 𝐶𝑜𝑣(𝑋,𝑌) = 0</font>
- 𝑉𝑎𝑟(𝑋𝑌) = 𝑉𝑎𝑟(𝑋)𝑉𝑎𝑟(𝑌) + 𝑉𝑎𝑟\[𝑋\]𝐄\[𝑌\]<sup>2</sup> + 𝑉𝑎𝑟\[𝑌\]𝐄\[𝑋\]<sup>2</sup><font style="color: rgb(128,128,128);">\# see [[Variance of Product of Two Random Variables|here]]</font>

for independent {𝑋<sub>1</sub>, 𝑋<sub>2</sub>, ..., 𝑋<sub>𝑛</sub>}:
- $Var[X_1X_2 ... X_n] = \prod_{i=1}^n \left( Var[X_i] + 𝐄[X_i]^2 \right) - \prod_{i=1}^n 𝐄[X_i]^2$<font style="color: rgb(128,128,128);"> \# see [[Variance of Product of Multiple Random Variables|here]]</font>
````
^excerpt
