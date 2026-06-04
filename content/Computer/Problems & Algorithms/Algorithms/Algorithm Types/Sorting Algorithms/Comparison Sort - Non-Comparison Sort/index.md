---
title: "Comparison Sort - Non-Comparison Sort"
created: 2020-03-30T19:37:25.406-05:00
modified: 2020-03-30T19:42:47.889-05:00
parent: "[[Sorting Algorithms]]"
children: []
---
### Lower Bound For Comparison Based Sorting Algorithms
- each of 𝑛! permutation on 𝑛 elements must appear as one of the leaves of the decision tree
- let 𝑥 be maximum number of comparisons
- the maximum height of tree would be 𝑥
- a tree of height 𝑥 has at most 2<sup>𝑥</sup> leaves

therefore:
- 𝑛! ≤ 2<sup>𝑥</sup>
- 𝑙𝑔(𝑛!) ≤ 𝑥
- 𝑙𝑔(𝑛!) = 𝑂(𝑛·𝑙𝑔(𝑛)) ≤ 𝑥

thus:
- 𝑥 = Ω(𝑛·𝑙𝑜𝑔(2𝑛))
