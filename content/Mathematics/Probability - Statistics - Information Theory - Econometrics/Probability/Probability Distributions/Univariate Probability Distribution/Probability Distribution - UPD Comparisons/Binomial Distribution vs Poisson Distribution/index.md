---
title: "Binomial Distribution vs Poisson Distribution"
created: 2021-11-11T03:18:08.695-06:00
modified: 2023-08-30T13:06:34.547-05:00
parent: "[[Probability Distribution - UPD Comparisons]]"
children: []
---
Comparing:
- [[Binomial Distribution]]
- [[Poisson Distribution]]

The binomial distribution tends toward the Poisson distribution as 𝑛→∞, 𝑝→0, and 𝑛𝑝→constant≈𝜆.

The Poisson distribution with 𝜆=𝑛𝑝 closely approximates the binomial distribution if 𝑛 is large and 𝑝 is small.
# Derive Poisson Formula From Binomial PMF
1. 𝐏(𝑋=𝑥) = 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛 choose 𝑥\]𝑝<sup>𝑥</sup>(1 - 𝑝)<sup>𝑛-𝑥</sup>
2. 𝐏(𝑋=𝑥) = 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(𝑥!(𝑛-𝑥)!\]𝑝<sup>𝑥</sup>(1 - 𝑝)<sup>𝑛-𝑥</sup> <font style="color: rgb(122,134,154);">\# by [[Combination Without Replacement (Binomial Coefficient - n Choose k)|binomial coefficient]]</font>
3. 𝐏(𝑋=𝑥) = 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(𝑥!(𝑛-𝑥)!\](𝜆/𝑛)<sup>𝑥</sup>(1 - (𝜆/𝑛))<sup>𝑛-𝑥</sup> <font style="color: rgb(122,134,154);">\# 𝑝=𝜆/𝑛 when 𝑛→∞, 𝑝→0</font>
4. 𝐏(𝑋=𝑥) = 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(𝑥!(𝑛-𝑥)!\](𝜆/𝑛)<sup>𝑥</sup><font style="color: rgb(0,128,0);">(1 - (𝜆/𝑛))<sup>𝑛</sup></font><font style="color: rgb(255,102,0);">(1 - (𝜆/𝑛))<sup>-𝑥</sup><font style="color: rgb(122,134,154);"> \# by algebra</font></font>
5. 𝐏(𝑋=𝑥) = 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(𝑥!(𝑛-𝑥)!\](𝜆/𝑛)<sup>𝑥</sup><font style="color: rgb(0,128,0);">𝑒<sup>-𝜆</sup></font><font style="color: rgb(255,102,0);">(1 - (𝜆/𝑛))<sup>-𝑥</sup> <font style="color: rgb(122,134,154);">\# (1 - (𝜆/𝑛))<sup>𝑛</sup>= 𝑒<sup>-𝜆</sup> as 𝑛→∞, see [[number e (Euler's number)]]</font></font>
6. 𝐏(𝑋=𝑥) = 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(𝑥!(𝑛-𝑥)!\](𝜆/𝑛)<sup>𝑥</sup><font style="color: rgb(0,128,0);">𝑒<sup>-𝜆</sup></font><font style="color: rgb(255,102,0);">(1 - (0))<sup>-𝑥</sup> <font style="color: rgb(122,134,154);">\# 𝜆/𝑛<sup></sup>= 0 as 𝑛→∞</font></font>
7. 𝐏(𝑋=𝑥) = 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(<font style="color: rgb(0,128,0);">𝑥!</font>(𝑛-𝑥)!\](𝜆<sup>𝑥</sup>/<font style="color: rgb(255,102,0);">𝑛<sup>𝑥</sup></font>)𝑒<sup>-𝜆</sup> <font style="color: rgb(122,134,154);">\# by algebra</font>
8. 𝐏(𝑋=𝑥) = 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(<font style="color: rgb(255,102,0);">𝑛<sup>𝑥</sup></font>(𝑛-𝑥)!\](𝜆<sup>𝑥</sup>/<font style="color: rgb(0,128,0);">𝑥!</font>)𝑒<sup>-𝜆</sup><font style="color: rgb(122,134,154);"> \# by algebra</font>
9. 𝐏(𝑋=𝑥) = (𝜆<sup>𝑥</sup>/𝑥!)𝑒<sup>-𝜆</sup> <font style="color: rgb(122,134,154);">\# 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(𝑛<sup>𝑥</sup>(𝑛-𝑥)!\] = 1</font>
	1. 
> [!expand]- Click here to expand...
> - 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(𝑛<sup>𝑥</sup>(𝑛-𝑥)!\]
> - 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[𝑛!/(𝑛-𝑥)!\]\*\[1/𝑛<sup>𝑥</sup>\]
> - 𝑙𝑖𝑚<sub>𝑛→∞</sub> \[(𝑛-0)(𝑛-1)(𝑛-2)...(𝑛-𝑥+1)\] / \[𝑛<sup>𝑥</sup>\]
> - 1

# Other
- [[Binomial Distribution - Approximating with Poisson Distribution]]
