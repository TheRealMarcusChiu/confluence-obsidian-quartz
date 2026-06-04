---
title: "Normalized Importance Sampling (NIS)"
created: 2025-09-28T14:45:32.903-05:00
modified: 2025-09-28T14:46:04.082-05:00
parent: "[[Importance Sampling (IS)]]"
children: []
---
###### Normalized Importance Sampling (NIS)
````excerpt
- a version of [[Importance Sampling (IS)]]
````
^excerpt

# NIS - General Formula
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄<sub>𝐏</sub>\[𝑓(𝑋)\] ≈ 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑓(𝑥<sub>𝑖</sub>)·𝑤ˆ(𝑥<sub>𝑖</sub>)\] / 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤ˆ(𝑥<sub>𝑖</sub>)\]</font></font>

where
- 𝑛 is the number of samples generated
- 𝑥<sub>𝑖</sub>is a sample generated from 𝑸 distribution
- 𝑤<font style="color: rgb(128,128,128);">ˆ</font>(𝑥<sub>𝑖</sub>) = 𝐏<font style="color: rgb(128,128,128);">ˆ</font>(𝑥<sub>𝑖</sub>)/𝑸<font style="color: rgb(128,128,128);">ˆ</font>(𝑥<sub>𝑖</sub>) is the un-normalized importance weight

# NIS - Determining [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|Expectation]] of a Distribution

<em>un-normalized importance sampling</em> assumes we can easily compute the importance weights 𝑤(𝑥<sub>𝑖</sub>) = 𝐏(𝑥<sub>𝑖</sub>)/𝑸(𝑥<sub>𝑖</sub>). However this is not always the case
- we only know 𝐏(𝑥) up to a normalization constant (i.e. normalization constant 𝑍<sub>𝐏</sub> is unknown or too hard to compute)
	- 𝐏(𝑥) = 𝐏ˆ(𝑥)/𝑍<sub>𝐏</sub><font style="color: rgb(128,128,128);">\# 𝐏ˆ(𝑥) is the un-normalized distribution of 𝐏(𝑥)</font>
- we only know 𝑸(𝑥) up to a normalization constant (i.e. normalization constant 𝑍<sub>𝑸</sub> is unknown or too hard to compute)
	- 𝑸(𝑥) = 𝑸ˆ(𝑥)/𝑍<sub>𝑸</sub><font style="color: rgb(128,128,128);">\# 𝑸ˆ(𝑥) is the un-normalized distribution of 𝑸(𝑥)</font>

<font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">therefore:</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑸ˆ(𝑥) and 𝐏ˆ(𝑥) is easy to compute</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑍<sub>𝑸</sub> and 𝑍<sub>𝐏</sub> is hard to compute</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">thus, 𝑸(𝑥) and 𝐏(𝑥) is also hard to compute</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">therefore computing importance weights 𝑤(𝑥<sub>𝑖</sub>) = 𝐏(𝑥<sub>𝑖</sub>)/𝑸(𝑥<sub>𝑖</sub>) is hard</font></font>

<font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">what do we do?</font><font style="color: rgb(51,51,51);"> This is where normalized importance sampling comes into play!</font></font>

to compute 𝐄<sub>𝐏</sub>\[𝑋\]:
- 𝐄<sub>𝐏</sub>\[𝑋\] = ∫𝑥·𝐏(𝑥) 𝑑𝑥
- 𝐄<sub>𝐏</sub>\[𝑋\] = ∫𝑥·\[𝐏(𝑥)/𝑸(𝑥)\]·𝑸(𝑥) 𝑑𝑥
- 𝐄<sub>𝐏</sub>\[𝑋\] = <strong>∫</strong>𝑥·\[𝐏ˆ(𝑥)/𝑸ˆ(𝑥)\]·\[𝑍<sub>𝑸</sub>/𝑍<sub>𝐏</sub>\]·𝑸(𝑥) 𝑑𝑥
- 𝐄<sub>𝐏</sub>\[𝑋\] = \[𝑍<sub>𝑸</sub>/𝑍<sub>𝐏</sub>\] <strong>∫</strong>𝑥·\[𝐏ˆ(𝑥)/𝑸ˆ(𝑥)\]·𝑸(𝑥) 𝑑𝑥
- 𝐄<sub>𝐏</sub>\[𝑋\] = \[𝑍<sub>𝑸</sub>/𝑍<sub>𝐏</sub>\] ∫𝑥·\[𝑤ˆ(𝑥)\]·𝑸(𝑥) 𝑑𝑥 <font style="color: rgb(128,128,128);">\# 𝑤ˆ(𝑥) is the un-normalized importance weight</font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄<sub>𝐏</sub>\[𝑋\] ≈ \[𝑍<sub>𝑸</sub>/𝑍<sub>𝐏</sub>\] (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>·𝑤ˆ(𝑥<sub>𝑖</sub>)\] </font></font>
	- 𝑍<sub>𝐏</sub>/𝑍<sub>𝑸</sub> = ?
		- 𝐏(𝑥) = 𝐏ˆ(𝑥)/𝑍𝐏 <font style="color: rgb(128,128,128);">\# given above</font>
		- ∫𝐏(𝑥) = ∫𝐏ˆ(𝑥)/𝑍𝐏
		- 1 = ∫𝐏ˆ(𝑥)/𝑍𝐏 <font style="color: rgb(128,128,128);">\# integral of any probability distribution is 1</font>
		- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑍<sub>𝐏</sub> = ∫𝐏ˆ(𝑥)</font></font>
	- 𝑍<sub>𝐏</sub>/𝑍<sub>𝑸</sub> = <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">∫𝐏ˆ(𝑥)</font></font>/𝑍<sub>𝑸</sub>𝑑𝑥
	- 𝑍<sub>𝐏</sub>/𝑍<sub>𝑸</sub> = <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">∫\[𝐏ˆ(𝑥)</font></font>/𝑸ˆ(𝑥)\]𝑸(𝑥) 𝑑𝑥
	- 𝑍<sub>𝐏</sub>/𝑍<sub>𝑸</sub> = <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">∫𝑤ˆ(𝑥)</font></font>𝑸(𝑥) 𝑑𝑥<font style="color: rgb(128,128,128);"> \# the same</font> <font style="color: rgb(128,128,128);">un-normalized importance weight</font>
	- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑍<sub>𝐏</sub>/𝑍<sub>𝑸</sub> =</font> <font style="color: rgb(51,51,51);">(1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤ˆ(𝑥<sub>𝑖</sub>)\]</font></font>
	- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑍<sub>𝑸</sub>/𝑍<sub>𝐏</sub> = 𝑛 / 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤ˆ(𝑥<sub>𝑖</sub>)\]</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄<sub>𝐏</sub>\[𝑋\] ≈ \[𝑍<sub>𝑸</sub>/𝑍<sub>𝐏</sub>\] (1/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>·𝑤ˆ(𝑥<sub>𝑖</sub>)\]</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄<sub>𝐏</sub>\[𝑋\] ≈ (𝑛/𝑛) 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>·𝑤ˆ(𝑥<sub>𝑖</sub>)\] / 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤ˆ(𝑥<sub>𝑖</sub>)\]</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄<sub>𝐏</sub>\[𝑋\] ≈ 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong> 𝑥<sub>𝑖</sub> · 𝑤ˆ(𝑥<sub>𝑖</sub>)<strong>\]</strong> / 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤ˆ(𝑥<sub>𝑖</sub>)\]</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝐄<sub>𝐏</sub>\[𝑋\] ≈ 𝛴<sub>1≤𝑖≤𝑛</sub><strong>\[</strong> 𝑥<sub>𝑖</sub> · \[𝑤ˆ(𝑥<sub>𝑖</sub>) / 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤ˆ(𝑥<sub>𝑖</sub>)\] <strong>\]</strong> \# where</font></font>
	- <font style="color: rgb(128,128,128);">𝑛 is the number of samples generated</font>
	- <font style="color: rgb(128,128,128);">𝑥<sub>𝑖</sub>is a sample generated from 𝑸 distribution</font>

<font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">as you can see there are 2 estimations done here:</font></font>
- numerator - <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑥<sub>𝑖</sub>·𝑤ˆ(𝑥<sub>𝑖</sub>)\]</font></font>
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">denominator - 𝛴<sub>1≤𝑖≤𝑛</sub>\[𝑤ˆ(𝑥<sub>𝑖</sub>)\]</font></font>

<font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">therefore it is not as accurate as <em>standard importance sampling</em> which only contains 1 estimation</font>. <font style="color: rgb(51,51,51);">so use standard importance sampling over this one whenever possible</font></font>
# <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">Resources</font></font>
<font style="color: rgb(128,128,128);">![](https://www.youtube.com/watch?v=gYvlnu5AAzE)</font>
