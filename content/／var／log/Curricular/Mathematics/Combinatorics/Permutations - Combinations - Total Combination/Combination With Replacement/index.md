---
title: "Combination With Replacement"
created: 2021-09-13T05:26:09.814-05:00
modified: 2023-08-28T15:19:37.967-05:00
parent: "[[Permutations - Combinations - Total Combination]]"
children: []
---
###### Combination With Replacement
````excerpt
- is the number of UNORDERED ways of selecting 𝑘 items from 𝑛 possible items with replacement after each selection
````
^excerpt

# Formula
![[Combination With Replacement/combination-with-replacement.png|340]]
# Formula Intuition

> [!expand]- Click here to expand...
> Suppose:
> - 𝑛 = 10
> - 𝑘 = 9
>
> We want to figure out the number of UNORDERED ways of selecting 𝑘=9 items from 𝑛=10 possible items with replacement after each selection
>
> In the figure below, we draw a circle for each time object \#1 is sampled, then draw a separating bar, then a circle for each time object \#2 is sampled, etc. Two bars next to each other mean that the corresponding object has never been sampled.
>
> ![[Combination With Replacement/combination-with-replacement-intuition.png|600]]
>
> the figure above represents:
> - object \#1 chosen 2 times
> - object \#2 chosen 1 time
> - object \#3 chosen 0 times
> - object \#4 chosen 3 times
> - object \#5 chosen 0 times
> - object \#6 chosen 0 times
> - object \#7 chosen 2 times
> - object \#8 chosen 1 time
> - object \#9 chosen 0 times
> - object \#10 chosen 0 times
>
> The resulting picture will always have:
> - 𝑘 circles for a sample of size 𝑘
> - (𝑛 − 1) bars separating 𝑛 objects
>
> Each picture with these conditions represents an outcome. How many outcomes are there?
>
> It is the number of allocations of 𝑘 circles among (𝑘 + 𝑛 − 1) slots available for them
>
> In other words, there are (𝑘 + 𝑛 - 1) distinct items and we want to choose 𝑘 of them. Also, the order doesn't matter!
>
> Hence, hence this can be reduced to a [[Combination Without Replacement (Binomial Coefficient - n Choose k)|Combination WITHOUT Replacement]] <font style="color: rgb(128,128,128);">(𝑛+𝑘-1) choose (𝑘)</font> problem
>
> ![[Combination With Replacement/combination-with-replacement.png|340]]
>
> There's another way to derive the 𝐶<sub>𝑟</sub>(𝑛,𝑘) formula. Instead of choosing the allocations of 𝑘 circles, we could choose the allocations of (𝑛 − 1) bars among (𝑘 + 𝑛 - 1) slots available for them. This would result in the same formula!
