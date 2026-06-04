---
title: "Combination Without Replacement (Binomial Coefficient - n Choose k)"
created: 2021-09-13T05:26:10.290-05:00
modified: 2023-08-28T15:18:40.988-05:00
parent: "[[Permutations - Combinations - Total Combination]]"
children: []
---
###### Combination Without Replacement (Binomial Coefficient - n Choose k)
````excerpt
- is the number of UNORDERED ways of choosing 𝑘 items from a set of 𝑛 possible items
````
^excerpt

# Formula

![[Combination Without Replacement (Binomial Coefficient - n Choose k)/combinations-n-choose-k.png|301]]

where:
- 𝑃(𝑛,𝑘) - permutation without replacement of 𝑘 items out of 𝑛 total items
- 𝑃(𝑘,𝑘) - permutation without replacement of 𝑘 items out of 𝑘 total items

# Formula Explanation

The only difference from [[Permutations - Combinations - Total Combination|Permutation Without Replacement]] of 𝑘 items out of 𝑛 total items is disregarding the order. Now the same objects sampled in a different order produce the same outcome. Thus, 𝑃(𝑘,𝑘) = 𝑘! different permutations (rearrangements) of the same objects yield only 1 combination. The total number of combinations is then

![[Combination Without Replacement (Binomial Coefficient - n Choose k)/combinations-n-choose-k.png|301]]
