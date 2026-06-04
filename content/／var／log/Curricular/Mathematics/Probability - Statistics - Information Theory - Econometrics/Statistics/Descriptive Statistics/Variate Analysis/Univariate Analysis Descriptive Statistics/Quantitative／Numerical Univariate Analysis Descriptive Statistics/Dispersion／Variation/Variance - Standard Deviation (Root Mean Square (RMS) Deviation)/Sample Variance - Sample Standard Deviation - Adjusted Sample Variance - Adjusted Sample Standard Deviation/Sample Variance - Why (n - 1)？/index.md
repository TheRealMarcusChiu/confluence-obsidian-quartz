---
title: "Sample Variance - Why (n - 1)？"
created: 2022-02-22T02:34:31.542-06:00
modified: 2023-08-31T11:47:35.027-05:00
parent: "[[Sample Variance - Sample Standard Deviation - Adjusted Sample Variance - Adjusted Sample Standard Deviation]]"
children: []
---
# Why Dividing by n Always Underestimates Variance

![](https://www.youtube.com/watch?v=sHRBg6BhKjI)
# Why Divide by n-1 Instead of n-2?

> [!expand-ui]- Analytical (v1)
> (𝑠<sup>2</sup>) = \[ 𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\] / (𝑛 - 1)
> 1. 𝐄\[𝑠<sup>2</sup>\] = 𝐄\[( 𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>) / (𝑛 - 1)\]
> 2. 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\]
> 3. 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub><sup>2</sup> - 2𝑋<sub>𝑖</sub>𝑋̅ + 𝑋̅<sup>2</sup>)\]
> 4. 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] ( 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub><sup>2</sup>)\] - 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(2𝑋<sub>𝑖</sub>𝑋̅)\] + 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋̅<sup>2</sup>)\] )
> 5. 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] ( 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub><sup>2</sup>)\] - 𝐄\[2𝑋̅𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>)\] + 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋̅<sup>2</sup>)\] ) <font style="color: rgb(122,134,154);">\# 2𝑋̅ is the same value and can be pulled out of summation</font>
> 6. 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] ( 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub><sup>2</sup>)\] - 𝐄\[2𝑋̅𝑛𝑋̅\] + 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋̅<sup>2</sup>)\] ) <font style="color: rgb(122,134,154);">\# 𝛴<sub>1≤𝑖≤𝑛</sub>(𝑋<sub>𝑖</sub>) = 𝑛𝑋̅</font>
> 7. 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] ( 𝑛𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 2𝑛𝐄\[𝑋̅<sup>2</sup>\] + 𝑛𝐄\[𝑋̅<sup>2</sup>\] )
> 8. 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\] ( 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 2𝐄\[𝑋̅<sup>2</sup>\] + 𝐄\[𝑋̅<sup>2</sup>\] )
> 9. 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\] ( 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 𝐄\[𝑋̅<sup>2</sup>\] )
> 10. 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\] ( <font style="color: rgb(0,51,102);">\[𝜎<sup>2</sup> + 𝜇<sup>2</sup></font>\] - 𝐄\[𝑋̅<sup>2</sup>\] ) <font style="color: rgb(122,134,154);">\# 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] = 𝜎<sup>2</sup> + 𝜇<sup>2</sup></font><font style="color: rgb(122,134,154);"> because</font> [[Raw Moments - Moments About the Origin／Zero - Central／Mean Moments - Moments About The Mean - (Zeroth／First／Second／Third／Fourth／kth／nth) -  of a Probability Density Function|2nd moment]]: <font style="color: rgb(122,134,154);">𝜎<sup>2</sup> = 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 𝜇<sup>2</sup></font>
> 11. 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\] ( \[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\] - \[𝜎<sup>2</sup>/𝑛 + 𝜇<sup>2</sup>\] )<font style="color: rgb(122,134,154);"> \# </font><font style="color: rgb(122,134,154);">𝐄\[𝑋̅<sup>2</sup>\] = 𝜎<sup>2</sup>/𝑛 + 𝜇<sup>2</sup></font><font style="color: rgb(122,134,154);"> because</font> <font style="color: rgb(122,134,154);">𝐄\[𝑋̅<sup>2</sup>\] = 𝑉𝑎𝑟(𝑋̅) + 𝜇<sup>2</sup></font> <font style="color: rgb(122,134,154);">and see</font> [[Sample Mean|variance of sample mean]] <font style="color: rgb(122,134,154);">and</font> [[Expected Value ／ Expectation - Properties|properties of expectation]]
> 12. 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\] ( 𝜎<sup>2</sup> + 𝜇<sup>2</sup> - 𝜎<sup>2</sup>/𝑛 - 𝜇<sup>2</sup> )
> 13. 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\] ( 𝜎<sup>2</sup> - 𝜎<sup>2</sup>/𝑛 )
> 14. 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\]𝜎<sup>2</sup> - \[𝑛/(𝑛 - 1)\]𝜎<sup>2</sup>/𝑛
> 15. 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\]𝜎<sup>2</sup> - \[1/(𝑛 - 1)\]𝜎<sup>2</sup>
> 16. 𝐄\[𝑠<sup>2</sup>\] = 𝜎<sup>2</sup>( \[𝑛/(𝑛 - 1)\] - \[1/(𝑛 - 1)\] )
> 17. 𝐄\[𝑠<sup>2</sup>\] = 𝜎<sup>2</sup>\[1/(𝑛 - 1)\] \[𝑛 - 1\]
> 18. 𝐄\[𝑠<sup>2</sup>\] = 𝜎<sup>2</sup>

> [!expand-ui]- Analytical (v2)
> (𝑠<sup>2</sup>) = \[ 𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\] / (𝑛 - 1)
> - 𝐄\[𝑠<sup>2</sup>\] = 𝐄\[( 𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>) / (𝑛 - 1)\]
> - 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] 𝐄\[𝛴<sub>1≤𝑖≤𝑛</sub> (𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\]
> - 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] 𝛴<sub>1≤𝑖≤𝑛</sub> 𝐄\[(𝑋<sub>𝑖</sub>- 𝑋̅)<sup>2</sup>\]
> - 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] 𝛴<sub>1≤𝑖≤𝑛</sub> 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup> - 2𝑋<sub>𝑖</sub>𝑋̅ + 𝑋̅<sup>2</sup>\]
> - 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] 𝛴<sub>1≤𝑖≤𝑛</sub> ( 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 𝐄\[2𝑋<sub>𝑖</sub>𝑋̅\] + 𝐄\[𝑋̅<sup>2</sup>\] )
> - 𝐄\[𝑠<sup>2</sup>\] = \[1/(𝑛 - 1)\] 𝑛 ( 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 𝐄\[2𝑋<sub>𝑖</sub>𝑋̅\] + 𝐄\[𝑋̅<sup>2</sup>\] )
> - 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\] ( 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - 𝐄\[2𝑋<sub>𝑖</sub>𝑋̅\] + 𝐄\[𝑋̅<sup>2</sup>\] )
> - 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\]·𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - \[𝑛/(𝑛 - 1)\]·𝐄\[2𝑋<sub>𝑖</sub>𝑋̅\] + \[𝑛/(𝑛 - 1)\]·𝐄\[𝑋̅<sup>2</sup>\]
> - 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\]·𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] - \[𝑛/(𝑛 - 1)\]·𝐄\[2𝑋<sub>𝑖</sub>𝑋̅\] + \[𝑛/(𝑛 - 1)\]·𝐄\[𝑋̅<sup>2</sup>\]
> - 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\]·\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\] - \[𝑛/(𝑛 - 1)\]·𝐄\[2𝑋<sub>𝑖</sub>𝑋̅\] + \[𝑛/(𝑛 - 1)\]·𝐄\[𝑋̅<sup>2</sup>\] <font style="color: rgb(122,134,154);">\# 𝐄\[𝑋<sub>𝑖</sub><sup>2</sup>\] = 𝜎<sup>2</sup> + 𝜇<sup>2</sup></font>
> - 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\]·\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\] - 2·\[𝑛/(𝑛 - 1)\]·<font style="color: rgb(255,102,0);">𝐄\[𝑋<sub>𝑖</sub>𝑋̅\]</font> + \[𝑛/(𝑛 - 1)\]·<font style="color: rgb(0,128,0);">𝐄\[𝑋̅<sup>2</sup>\]</font>
> 	- The expected value of 𝐄\[𝑋<sub>𝑗</sub>𝑋<sub>𝑘</sub>\] depends on whether you are sampling different (independent) samples where 𝑗≠𝑘, or the same (definitely dependent in this case!) sample where 𝑗=𝑘. Since we have n samples, the possibility of getting the same sample is 1/𝑛
> 		- 𝐄\[𝑋<sub>𝑗</sub>𝑋<sub>𝑘</sub>\] = 𝐄\[𝑋<sub>𝑗</sub>\]𝐄\[𝑋<sub>𝑘</sub>\] = 𝜇<sup>2</sup> <font style="color: rgb(122,134,154);">if 𝑗≠𝑘</font>
> 		- 𝐄\[𝑋<sub>𝑗</sub>𝑋<sub>𝑘</sub>\] = 𝐄\[𝑋<sub>𝑗</sub><sup>2</sup>\] = 𝜎<sup>2</sup> + 𝜇<sup>2</sup> <font style="color: rgb(122,134,154);">if 𝑗=𝑘</font>
> 	- <font style="color: rgb(255,102,0);">𝐄\[𝑋<sub>𝑖</sub>𝑋̅\] = \[(𝑛-1)/𝑛\]𝜇<sup>2</sup> + \[1/𝑛\]\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\]</font>
> 	- <font style="color: rgb(0,128,0);">𝐄\[𝑋̅<sup>2</sup>\] = \[(𝑛<sup>2</sup>-𝑛)/𝑛<sup>2</sup>\]𝜇<sup>2</sup> + \[𝑛/𝑛<sup>2</sup>\]\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\]</font>
> 	- <font style="color: rgb(0,128,0);">𝐄\[𝑋̅<sup>2</sup>\] = \[(𝑛-1)/𝑛\]𝜇<sup>2</sup> + \[1/𝑛\]\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\]</font>
> - 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\]·\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\] - 2·\[𝑛/(𝑛 - 1)\]·<font style="color: rgb(255,102,0);">( \[(𝑛-1)/𝑛\]𝜇<sup>2</sup> + \[1/𝑛\]\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\] )</font> + \[𝑛/(𝑛 - 1)\]·<font style="color: rgb(0,128,0);">( \[(𝑛-1)/𝑛\]𝜇<sup>2</sup> + \[1/𝑛\]\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\] )</font>
> - 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\]·\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\] - 2<font style="color: rgb(255,102,0);">𝜇<sup>2</sup> - \[2/(𝑛 - 1)\]\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\]</font> +<font style="color: rgb(0,128,0);"> 𝜇<sup>2</sup> + \[1/(𝑛 - 1)\]\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\]</font>
> - 𝐄\[𝑠<sup>2</sup>\] = \[𝑛/(𝑛 - 1)\]·\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\] - 𝜇<sup>2</sup> - \[1/(𝑛 - 1)\]\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\]
> - 𝐄\[𝑠<sup>2</sup>\] = \[(𝑛 - 1)/(𝑛 - 1)\]·\[𝜎<sup>2</sup> + 𝜇<sup>2</sup>\] - 𝜇<sup>2</sup>
> - 𝐄\[𝑠<sup>2</sup>\] = 𝜎<sup>2</sup> + 𝜇<sup>2</sup> - 𝜇<sup>2</sup>
> - 𝐄\[𝑠<sup>2</sup>\] = 𝜎<sup>2</sup>
>
> # Resources
> - [https://towardsdatascience.com/why-sample-variance-is-divided-by-n-1-89821b83ef6d](https://towardsdatascience.com/why-sample-variance-is-divided-by-n-1-89821b83ef6d)

> [!expand-ui]- Geometric
> ![[Sample Variance - Why (n - 1)？/sample-variance-why-n-1.png|500]]
>
> TODO
>
> Samples of n-values generate n-1 dimensional space of SSDs. The remaining dimension (1,1, …, 1) has nothing to do with sample variance but sample mean
>
> TODO
> # Resources
> - [https://medium.com/fun-with-data-science/sample-variance-how-does-n-1-come-f60c71be09cb](https://medium.com/fun-with-data-science/sample-variance-how-does-n-1-come-f60c71be09cb)
