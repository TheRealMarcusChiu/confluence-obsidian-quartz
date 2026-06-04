---
title: "Variance of Product of Two Random Variables"
created: 2024-01-31T12:17:55.079-06:00
modified: 2024-01-31T13:06:04.770-06:00
parent: "[[Properties of Variance]]"
children: []
---
# Variance of Product of Two Random Variables (INDEPENDENT)
- 𝑉𝑎𝑟\[𝑋𝑌\] = ?

\#1 Via definition of 𝑉𝑎𝑟\[𝑋\] = 𝐄\[(𝑋 - 𝐄\[𝑋\])<sup>2</sup>\]:
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝐄\[(𝑋𝑌 - 𝐄\[𝑋𝑌\])<sup>2</sup>\]
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝐄\[𝑋<sup>2</sup>𝑌<sup>2</sup> - 2𝑋𝑌𝐄\[𝑋𝑌\] + 𝐄\[𝑋𝑌\]<sup>2</sup>\]
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝐄\[𝑋<sup>2</sup>𝑌<sup>2</sup> - 2𝑋𝑌𝐄\[𝑋\]𝐄\[𝑌\] + 𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup>\]
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝐄\[𝑋<sup>2</sup>𝑌<sup>2</sup>\] - 𝐄\[2𝑋𝑌𝐄\[𝑋\]𝐄\[𝑌\]\] + 𝐄\[𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup>\]
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝐄\[𝑋<sup>2</sup>𝑌<sup>2</sup>\] - 2𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup> + 𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup>
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝐄\[𝑋<sup>2</sup>𝑌<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup> -  𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup> + 𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup>
	- 𝑉𝑎𝑟\[𝑋\] = 𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>
	- 𝐄\[𝑋\]<sup>2</sup> = 𝐄\[𝑋<sup>2</sup>\] - 𝑉𝑎𝑟\[𝑋\]
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝐄\[𝑋<sup>2</sup>𝑌<sup>2</sup>\] - (𝐄\[𝑋<sup>2</sup>\] - 𝑉𝑎𝑟\[𝑋\])𝐄\[𝑌\]<sup>2</sup> -  𝐄\[𝑋\]<sup>2</sup>(𝐄\[𝑌<sup>2</sup>\] - 𝑉𝑎𝑟\[𝑌\]) + 𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup>
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝐄\[𝑋<sup>2</sup>𝑌<sup>2</sup>\] - 𝐄\[𝑋<sup>2</sup>\]𝐄\[𝑌\]<sup>2</sup> + 𝑉𝑎𝑟\[𝑋\]𝐄\[𝑌\]<sup>2</sup> -  𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌<sup>2</sup>\] + 𝑉𝑎𝑟\[𝑌\]𝐄\[𝑋\]<sup>2</sup>+ 𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup>
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝐄\[𝑋<sup>2</sup>𝑌<sup>2</sup>\] - 𝐄\[𝑋<sup>2</sup>\]𝐄\[𝑌\]<sup>2</sup> -  𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌<sup>2</sup>\] + 𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup> + 𝑉𝑎𝑟\[𝑋\]𝐄\[𝑌\]<sup>2</sup> + 𝑉𝑎𝑟\[𝑌\]𝐄\[𝑋\]<sup>2</sup>
	- 𝑉𝑎𝑟\[𝑋\]𝑉𝑎𝑟\[𝑌\] = (𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>)(𝐄\[𝑌<sup>2</sup>\] - 𝐄\[𝑌\]<sup>2</sup>)
	- 𝑉𝑎𝑟\[𝑋\]𝑉𝑎𝑟\[𝑌\] = 𝐄\[𝑋<sup>2</sup>\]𝐄\[𝑌<sup>2</sup>\] - 𝐄\[𝑋<sup>2</sup>\]𝐄\[𝑌\]<sup>2</sup> - 𝐄\[𝑌<sup>2</sup>\]𝐄\[𝑋\]<sup>2</sup> + 𝐄\[𝑌\]<sup>2</sup>𝐄\[𝑋\]<sup>2</sup>
- 𝑉𝑎𝑟\[𝑋𝑌\] = 𝑉𝑎𝑟\[𝑋\]𝑉𝑎𝑟\[𝑌\] + 𝑉𝑎𝑟\[𝑋\]𝐄\[𝑌\]<sup>2</sup> + 𝑉𝑎𝑟\[𝑌\]𝐄\[𝑋\]<sup>2</sup>

\#2 Via [this](https://www.ucl.ac.uk/%7Eucfbpve/geotopes/indexch10.html) approach:
- 𝑉𝑎𝑟\[𝑋𝑌\] = 2𝐄\[𝑋\]𝐄\[𝑌\]𝐶𝑜𝑣\[𝑋,𝑌\] + 𝑉𝑎𝑟\[𝑋\]𝐄\[𝑌\]<sup>2</sup> + 𝑉𝑎𝑟\[𝑌\]𝐄\[𝑋\]<sup>2</sup>

###### How \#1 and \#2 Relates

Does 𝑉𝑎𝑟\[𝑋\]𝑉𝑎𝑟\[𝑌\] = 2𝐄\[𝑋\]𝐄\[𝑌\]𝐶𝑜𝑣\[𝑋,𝑌\]?????
- 𝑉𝑎𝑟\[𝑋\]𝑉𝑎𝑟\[𝑌\] = 𝑉𝑎𝑟\[𝑋\]𝑉𝑎𝑟\[𝑌\]
	- 𝑉𝑎𝑟\[𝑋\] = 𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>
	- 𝑉𝑎𝑟\[𝑌\] = 𝐄\[𝑌<sup>2</sup>\] - 𝐄\[𝑌\]<sup>2</sup>
- 𝑉𝑎𝑟\[𝑋\]𝑉𝑎𝑟\[𝑌\] = (𝐄\[𝑋<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>) \* (𝐄\[𝑌<sup>2</sup>\] - 𝐄\[𝑌\]<sup>2</sup>)
- 𝑉𝑎𝑟\[𝑋\]𝑉𝑎𝑟\[𝑌\] = 𝐄\[𝑋<sup>2</sup>\]𝐄\[𝑌<sup>2</sup>\] - 𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌<sup>2</sup>\] - 𝐄\[𝑋<sup>2</sup>\]𝐄\[𝑌\]<sup>2</sup>+ 𝐄\[𝑋\]<sup>2</sup>𝐄\[𝑌\]<sup>2</sup>
- TODO

[https://math.stackexchange.com/questions/4271183/variance-of-product-of-two-random-variables-fx-y-xy](https://math.stackexchange.com/questions/4271183/variance-of-product-of-two-random-variables-fx-y-xy)
