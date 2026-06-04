---
title: "Probabilistic Inference - Mini-Cluster／Bucket Elimination"
created: 2021-09-13T05:28:30.091-05:00
modified: 2021-09-13T05:28:30.091-05:00
parent: "[[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm]]"
children: []
---
<strong>Mini-Cluster/Bucket Elimination</strong>
- an approximate method that reduces both the time & space complexity
- is an extension of [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]] where a cluster having more than 𝑖 variables are broken into mini-clusters each having 𝑖 or less variables. Then the product-combination operator is done over each mini-cluster
- is used as the an upper bound approximation

### Mini Bucket Elimination - Idea

read: [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]]
- split a bucket into 𝑘 mini-buckets
- thus, instead of generating a single new factor like in BE/VE Algorithm we create 𝑘 new factors. Each of these factors are independent from each other and are placed into their appropriate buckets for later processing
- the rest is the same as [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]]

### Mini Bucket Elimination - Example (𝑖 = 3)
![[Probabilistic Inference - Mini-Cluster／Bucket Elimination/mini-bucket elimination - example.png|500]]
### Mini Bucket Elimination - Complexity
- time complexity = 𝑂(𝑛·𝑒𝑥𝑝(𝑖))

where:
- 𝑛 - the number of variables (minus evidence variables)
- 𝑖 - the chosen value

### Choosing 𝑖-Bounds
- parameter 𝑖 which controls the size of each mini-bucket
- higher 𝑖-bound the upper bound is better, and thus prune more nodes in[[Branch & Bound (B&B) Search - Solving Probabilistic Inference Queries|B&B Algorithm]]
- in practice, 𝑖-bounds is usually around 22 to 25
