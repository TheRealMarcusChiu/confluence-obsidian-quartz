---
title: "Mathematical Capacity of a Communications Channel"
created: 2022-01-08T01:22:56.201-06:00
modified: 2022-01-08T17:57:07.375-06:00
parent: "[[Information Theory - Mathematical Theory of Communication - Telecommunications]]"
children: []
---
# Formula

The capacity 𝐶 of a discrete channel is given by:
- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\[ 𝑙𝑜𝑔𝑁(𝑇) / 𝑇 \]

where:
- 𝑁(𝑇) - is the number of allowed signals of duration 𝑇

> [!info]
> It can be shown that the limit will exist as a finite number in most cases
> [!info]
> 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\[ 𝑙𝑜𝑔<font style="color: rgb(255,0,0);"><strong><sub>2</sub></strong></font>𝑁(𝑇) / 𝑇 \] measures capacity in binary digits (bits)
> 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\[ 𝑙𝑜𝑔<font style="color: rgb(255,0,0);"><strong><sub>10</sub></strong></font>𝑁(𝑇) / 𝑇 \] measures capacity in decimal digits
# Solving 𝑁(𝑇) for Large 𝑇

Suppose all sequences of symbols {𝑆<sub>1</sub>, 𝑆<sub>2</sub>, ..., 𝑆<sub>𝑛</sub>} are allowed and these symbols have duration {𝑡<sub>1</sub>, 𝑡<sub>2</sub>, ..., 𝑡<sub>𝑛</sub>}. What is the channel capacity? If 𝑁(𝑡) represents the number of sequences of duration 𝑡 we have:
- 𝑁(𝑡) = 𝑁(𝑡<sub>1</sub>) + 𝑁(𝑡<sub>2</sub>) + ... + 𝑁(𝑡<sub>𝑛</sub>)

The total number is equal to the sum of the number of sequences ending in 𝑆<sub>1</sub>, 𝑆<sub>2</sub>, ..., 𝑆<sub>𝑛</sub> and these are 𝑁(𝑡 - 𝑡<sub>1</sub>), 𝑁(𝑡 - 𝑡<sub>2</sub>), ..., 𝑁(𝑡 - 𝑡<sub>𝑛</sub>) respectively. According to a well-known result in finite differences, 𝑁(𝑡) is then asymptotic for large 𝑡 to (𝑢<sub>𝑜</sub>)<sup>𝑡</sup> where 𝑢<sub>𝑜</sub> is the largest real solution of the characteristic equation:
- 𝑢<sup>-𝑡₁</sup>+ 𝑢<sup>-𝑡₂</sup>+ ... + 𝑢<sup>-𝑡ₙ</sup>= 1

Thus
- 𝐶 = 𝑙𝑜𝑔(𝑢<sub>𝑜</sub>)

# Calculating Channel Capacity Examples

> [!expand]- teletype example
> Assume in a communications system:
> - there are 32 distinct symbols (thus, each symbol represents 5 bits of information)
> - each symbol have the same duration of (1/𝑛), in other words, the system transmits 𝑛 symbols per unit-time
> - a signal is allowed to have any permutation of symbols
>
> Intuitively, the channel capacity is 5𝑛 bits per unit-time.
>
> When solving it via the formula we should get the same result
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑙𝑜𝑔<sub>2</sub>𝑁(𝑇) / 𝑇 \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑙𝑜𝑔<sub>2</sub>(number-of-symbols^(𝑇/symbol-duration)) / 𝑇 \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑙𝑜𝑔<sub>2</sub>(32^(𝑇𝑛)) / 𝑇 \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ (𝑇𝑛) \\* 𝑙𝑜𝑔<sub>2</sub>(32) / 𝑇 \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[  𝑛 \\* 𝑙𝑜𝑔<sub>2</sub>(32) \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[  𝑛 \\* 𝑙𝑜𝑔<sub>2</sub>(32) \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[  𝑛5 \\]\n- 𝐶 = 𝑛5",
>       "- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑙𝑜𝑔<sub>2</sub>𝑁(𝑇) / 𝑇 \\]\n\t- 𝑁(𝑇) = 𝑁(𝑇 - 𝑡<sub>1</sub>) + 𝑁(𝑇 - 𝑡<sub>2</sub>) + ... + 𝑁(𝑇 - 𝑡<sub>32</sub>)\n\t- 𝑢<sup>-𝑡₁</sup>+ 𝑢<sup>-𝑡₂</sup>+ ... + 𝑢<sup>-𝑡₃₂</sup> = 1\n\t- 𝑢<sup>-(1/𝑛)</sup>+ 𝑢<sup>-(1/𝑛)</sup>+ ... + 𝑢<sup>-(1/𝑛)</sup> = 1\n\t- 32𝑢<sup>-(1/𝑛)</sup>= 1\n\t- 𝑢<sup>-(1/𝑛)</sup>= 1/32\n\t- 𝑢<sup>(1/𝑛)</sup>= 32\n\t- 𝑢<sup></sup>= 32<sup>𝑛</sup>\n\t- thus, 𝑁(𝑇) = (32<sup>𝑛</sup>)<sup>𝑇</sup>\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑙𝑜𝑔<sub>2</sub>\\[(32<sup>𝑛</sup>)<sup>𝑇</sup> \\] / 𝑇 \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑇𝑛 𝑙𝑜𝑔<sub>2</sub>\\[32\\] / 𝑇 \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑛5 \\]\n- 𝐶 = 𝑛5"
>     ]
>   ]
> }
> ```
>
> Thus, channel capacity is 5𝑛 bits per unit-time

> [!expand]- telegraphy example
> Assume in a communications system:
> - allowed symbols:
> 	- a dot - consisting of a unit-time closure followed by a unit-time open
> 	- a dash - consisting of 3 unit-time closure followed by a unit-time open
> 	- a letter space - consisting of 3 unit-time open
> 	- a word space - consisting of 6 unit-time open
> - allowable sequences:
> 	- no spaces follow each other
>
> When solving it via the formula
>
> ```merge-table
> {
>   "rows": [
>     [
>       "- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑙𝑜𝑔<sub>2</sub>𝑁(𝑇) / 𝑇 \\]\n\t- 𝑁(𝑡) = <font style=\"color: rgb(204,153,255);\">𝑁(𝑡 - dot-duration)</font> + <font style=\"color: rgb(0,204,255);\">𝑁(𝑡 - dash-duration)</font> + <font style=\"color: rgb(255,0,255);\">𝑁(𝑡 - dot-letter-space-duration)</font> + <font style=\"color: rgb(0,128,0);\">𝑁(𝑡 - dash-letter-space-duration)</font> + <font style=\"color: rgb(255,0,0);\">𝑁(𝑡 - dot-word-space-duration)</font> + <font style=\"color: rgb(128,0,0);\">𝑁(𝑡 - dash-word-space-duration)</font>\n\t- 𝑁(𝑡) = <font style=\"color: rgb(204,153,255);\">𝑁(𝑡 - 2)</font> + <font style=\"color: rgb(0,204,255);\">𝑁(𝑡 - 4)</font> + <font style=\"color: rgb(255,0,255);\">𝑁(𝑡 - 5)</font> + <font style=\"color: rgb(0,128,0);\">𝑁(𝑡 - 7)</font> + <font style=\"color: rgb(255,0,0);\">𝑁(𝑡 - 8)</font> + <font style=\"color: rgb(128,0,0);\">𝑁(𝑡 - 10)</font>\n\t- 𝑢<sup>-2</sup>+ 𝑢<sup>-4</sup>+ 𝑢<sup>-5</sup>+ 𝑢<sup>-7</sup>+ 𝑢<sup>-8</sup> + 𝑢<sup>-10</sup>= 1\n\t- the roots of the characteristic equation above are:\n\t\t- 𝑢 ≈ -1.15909\n\t\t- 𝑢 ≈ 1.4529\n\t- we choose the largest root\n\t\t- 𝑢 ≈ 1.4529\n\t- 𝑁(𝑇) = (1.4529)<sup>𝑇</sup>\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑙𝑜𝑔<sub>2</sub>\\[(1.4529)<sup>𝑇</sup>\\] / 𝑇 \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑇 𝑙𝑜𝑔<sub>2</sub>\\[1.4529\\] / 𝑇 \\]\n- 𝐶 = 𝑙𝑖𝑚<sub>𝑇→∞</sub>\\[ 𝑙𝑜𝑔<sub>2</sub>\\[1.4529\\] \\]\n- 𝐶 = 𝑙𝑜𝑔<sub>2</sub>\\[1.4529\\]\n- 𝐶 = 0.53893541"
>     ]
>   ]
> }
> ```
>
> Thus, channel capacity is 0.53893541 bits per unit-time
