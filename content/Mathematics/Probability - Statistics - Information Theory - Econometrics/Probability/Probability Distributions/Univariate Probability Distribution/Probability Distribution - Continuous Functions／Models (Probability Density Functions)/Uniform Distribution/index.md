---
title: "Uniform Distribution"
created: 2021-09-13T05:27:28.683-05:00
modified: 2024-03-18T10:17:19.372-05:00
parent: "[[Probability Distribution - Continuous Functions／Models (Probability Density Functions)]]"
children: []
---
###### Uniform Distribution
````excerpt
- is used in any situation when a value is picked “at random” from a given interval; that is, without any preference for lower, higher, or medium values
````
^excerpt

# Probability Density Function
![[Uniform Distribution/uniform-distribution.png|330]]
# Expectation

𝐄\[𝑋\] = (𝑏 + 𝑎) / 2

> [!expand]- Click here to expand...
> - 𝐄\[𝑋\] = <sub>-∞</sub>∫<sup>∞</sup> 𝑥·𝑃𝐷𝐹(𝑋=𝑥)·𝑑𝑥
> - 𝐄\[𝑋\] = <sub>𝑎</sub>∫<sup>𝑏</sup> 𝑥·\[1/(𝑏 - 𝑎)\]·𝑑𝑥
> - 𝐄\[𝑋\] = \[1/(𝑏 - 𝑎)\] <sub>𝑎</sub>∫<sup>𝑏</sup> 𝑥·𝑑𝑥
> - 𝐄\[𝑋\] = \[1/(𝑏 - 𝑎)\]·(1/2)·\[𝑥<sup>2</sup>\]<sub>𝑎</sub><sup>𝑏</sup>
> - 𝐄\[𝑋\] = \[1/(𝑏 - 𝑎)\]·(1/2)·(𝑏<sup>2</sup>-𝑎<sup>2</sup>)
> - 𝐄\[𝑋\] = \[1/(𝑏 - 𝑎)\]·(1/2)·(𝑏-𝑎)·(𝑏+𝑎)
> - 𝐄\[𝑋\] = (1/2)·(𝑏+𝑎)
> - 𝐄\[𝑋\] = (𝑏+𝑎)/2
# Variance

𝑉𝑎𝑟(𝑋) = (𝑏 - 𝑎)<sup>2</sup> / 12

> [!expand]- Click here to expand...
> - 𝑉𝑎𝑟(𝑋) = 𝐄\[(𝑋 - 𝐄\[𝑋\])<sup>2</sup>\] <font style="color: rgb(128,128,128);">\# as defined in</font> [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|Second Central Moment]]
> - 𝑉𝑎𝑟(𝑋) = <sub>-∞</sub>∫<sup>∞</sup> (𝑥 - 𝐄\[𝑋\])<sup>2</sup>·𝑃𝐷𝐹(𝑋=𝑥)·𝑑𝑥
> - 𝑉𝑎𝑟(𝑋) = <sub>-∞</sub>∫<sup>∞</sup> \[𝑥 - ((𝑏+𝑎)/2)\]<sup>2</sup>·𝑃𝐷𝐹(𝑋=𝑥)·𝑑𝑥
> - 𝑉𝑎𝑟(𝑋) = <sub>𝑎</sub>∫<sup>𝑏</sup> \[𝑥 - ((𝑏+𝑎)/2)\]<sup>2</sup>·\[1/(𝑏 - 𝑎)\]·𝑑𝑥
> - 𝑉𝑎𝑟(𝑋) = \[1/(𝑏 - 𝑎)\] <sub>𝑎</sub>∫<sup>𝑏</sup> \[𝑥 - ((𝑏+𝑎)/2)\]<sup>2</sup>·𝑑𝑥
> - 𝑉𝑎𝑟(𝑋) = \[1/(𝑏 - 𝑎)\] <sub>𝑎</sub>∫<sup>𝑏</sup> \[𝑥<sup>2</sup> - 𝑥(𝑏+𝑎) + ((𝑏+𝑎)/2)<sup>2</sup>\]·𝑑𝑥
> - 𝑉𝑎𝑟(𝑋) = \[1/(𝑏 - 𝑎)\] <sub>𝑎</sub>∫<sup>𝑏</sup> \[𝑥<sup>2</sup> - 𝑥(𝑏+𝑎) + ((𝑏+𝑎)<sup>2</sup>/4)\]·𝑑𝑥
> - 𝑉𝑎𝑟(𝑋) = \[1/(𝑏 - 𝑎)\] · \[(1/3)𝑥<sup>3</sup> - (1/2)𝑥<sup>2</sup>(𝑏+𝑎) + 𝑥((𝑏+𝑎)<sup>2</sup>/4)\]<sub>𝑎</sub><sup>𝑏</sup>
> - 𝑉𝑎𝑟(𝑋) = \[1/(𝑏 - 𝑎)\] · <strong>\[</strong>\[<font style="color: rgb(255,102,0);">(1/3)𝑏<sup>3</sup> - (1/2)𝑏<sup>2</sup>(𝑏+𝑎) + 𝑏((𝑏+𝑎)<sup>2</sup>/4)</font>\] - \[<font style="color: rgb(0,128,0);">(1/3)𝑎<sup>3</sup> - (1/2)𝑎<sup>2</sup>(𝑏+𝑎) + 𝑎((𝑏+𝑎)<sup>2</sup>/4)</font>\]<strong>\]</strong>
> - 𝑉𝑎𝑟(𝑋) = \[1/(𝑏 - 𝑎)\] · <strong>\[</strong>\[<font style="color: rgb(255,102,0);">(𝑏<sup>3</sup>/3) - (𝑏<sup>3</sup>+𝑎𝑏<sup>2</sup>)/2 + (𝑏<sup>3</sup>+2𝑎𝑏<sup>2</sup>+𝑏𝑎<sup>2</sup>)/4</font>\] - \[<font style="color: rgb(0,128,0);">(<font style="color: rgb(0,128,0);">𝑎</font><sup>3</sup>/3) - (𝑏<font style="color: rgb(0,128,0);">𝑎</font><sup>2</sup>+<font style="color: rgb(0,128,0);">𝑎</font><sup>3</sup>)/2 + (𝑎𝑏<sup>2</sup>+2𝑎<sup>2</sup>𝑏+𝑎<sup>3</sup>)/4)</font>\]<strong>\]</strong>
> - 𝑉𝑎𝑟(𝑋) = \[1/(𝑏 - 𝑎)\] · <strong>\[</strong>\[<font style="color: rgb(255,102,0);">(4𝑏<sup>3</sup>/12) - (6𝑏<sup>3</sup>+6𝑎𝑏<sup>2</sup>)/12 + (3𝑏<sup>3</sup>+6𝑎𝑏<sup>2</sup>+3𝑏𝑎<sup>2</sup>)/12</font>\] - \[<font style="color: rgb(0,128,0);">(4𝑎<sup>3</sup>/12) - (6𝑏𝑎<sup>2</sup>+6𝑎<sup>3</sup>)/12 + (3𝑎𝑏<sup>2</sup>+6𝑎<sup>2</sup>𝑏+3𝑎<sup>3</sup>)/12)</font>\]<strong>\]</strong>
> - 𝑉𝑎𝑟(𝑋) = \[1/(𝑏 - 𝑎)\] · \[1/12\] · <strong>\[</strong>\[<font style="color: rgb(255,102,0);">4𝑏<sup>3</sup> - 6𝑏<sup>3</sup>- 6𝑎𝑏<sup>2</sup> + 3𝑏<sup>3</sup>+ 6𝑎𝑏<sup>2</sup>+ 3𝑏𝑎<sup>2</sup></font>\] - \[<font style="color: rgb(0,128,0);">4𝑎<sup>3</sup> - 6𝑏𝑎<sup>2</sup>- 6𝑎<sup>3</sup> + 3𝑎𝑏<sup>2</sup>+ 6𝑎<sup>2</sup>𝑏 + 3𝑎<sup>3</sup></font>\]<strong>\]</strong>
> - 𝑉𝑎𝑟(𝑋) = \[1/12(𝑏 - 𝑎)\] · \[<font style="color: rgb(255,102,0);">4𝑏<sup>3</sup> - 6𝑏<sup>3</sup>- 6𝑎𝑏<sup>2</sup> + 3𝑏<sup>3</sup>+ 6𝑎𝑏<sup>2</sup>+ 3𝑏𝑎<sup>2</sup></font> - <font style="color: rgb(0,128,0);">4𝑎<sup>3</sup> + 6𝑏𝑎<sup>2</sup> + 6𝑎<sup>3</sup> - 3𝑎𝑏<sup>2</sup>- 6𝑎<sup>2</sup>𝑏 - 3𝑎<sup>3</sup></font>\]
> - 𝑉𝑎𝑟(𝑋) = \[1/12(𝑏 - 𝑎)\] · \[<font style="color: rgb(255,102,0);">𝑏<sup>3</sup>+ 3𝑏𝑎<sup>2</sup></font> - <font style="color: rgb(0,128,0);">𝑎<sup>3</sup> - 3𝑎𝑏<sup>2</sup></font>\]
> - 𝑉𝑎𝑟(𝑋) = \[1/12(𝑏 - 𝑎)\] · \[<font style="color: rgb(255,102,0);">𝑏<sup>3</sup>+ 3𝑏𝑎<sup>2</sup></font><font style="color: rgb(0,128,0);"> - 3𝑎𝑏<sup>2</sup></font> - <font style="color: rgb(0,128,0);">𝑎<sup>3</sup></font>\]
> 	- \[𝑏 - 𝑎\]<sup>3</sup>
> 	- \[𝑏 - 𝑎\]\[𝑏 - 𝑎\]\[𝑏 - 𝑎\]
> 	- \[𝑏<sup>2</sup> - 2𝑎𝑏 + 𝑎<sup>2</sup>\]\[𝑏 - 𝑎\]
> 	- 𝑏\[𝑏<sup>2</sup> - 2𝑎𝑏 + 𝑎<sup>2</sup>\] - 𝑎\[𝑏<sup>2</sup> - 2𝑎𝑏 + 𝑎<sup>2</sup>\]
> 	- \[𝑏<sup>3</sup> - 2𝑎𝑏<sup>2</sup> + 𝑏𝑎<sup>2</sup>\] - \[𝑎𝑏<sup>2</sup> - 2𝑎<sup>2</sup>𝑏 + 𝑎<sup>3</sup>\]
> 	- 𝑏<sup>3</sup> - 2𝑎𝑏<sup>2</sup> + 𝑏𝑎<sup>2</sup> - 𝑎𝑏<sup>2</sup> + 2𝑎<sup>2</sup>𝑏 - 𝑎<sup>3</sup>
> 	- 𝑏<sup>3</sup> - 3𝑎𝑏<sup>2</sup> + 3𝑏𝑎<sup>2</sup> - 𝑎<sup>3</sup>
> - 𝑉𝑎𝑟(𝑋) = \[1/12(𝑏 - 𝑎)\] · \[𝑏 - 𝑎\]<sup>3</sup>
> - 𝑉𝑎𝑟(𝑋) = (𝑏 - 𝑎)<sup>2</sup>/12
