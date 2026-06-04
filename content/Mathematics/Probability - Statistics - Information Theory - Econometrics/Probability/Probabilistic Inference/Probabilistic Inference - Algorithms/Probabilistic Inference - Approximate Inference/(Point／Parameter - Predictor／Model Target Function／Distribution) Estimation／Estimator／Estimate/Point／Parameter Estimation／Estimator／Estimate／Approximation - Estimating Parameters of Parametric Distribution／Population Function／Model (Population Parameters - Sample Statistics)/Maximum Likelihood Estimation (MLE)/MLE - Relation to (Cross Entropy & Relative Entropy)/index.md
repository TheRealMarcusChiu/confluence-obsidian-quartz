---
title: "MLE - Relation to (Cross Entropy & Relative Entropy)"
created: 2021-09-13T05:28:07.176-05:00
modified: 2022-09-20T03:21:40.667-05:00
parent: "[[Maximum Likelihood Estimation (MLE)]]"
children: []
---
one way to interpret [[Maximum Likelihood Estimation (MLE)|MLE]] is to view it as minimizing the dissimilarity between the empirical distribution 𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub> defined by the training set and the model distribution 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>, with the degree of dissimilarity between the 2 measured by the [[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|KL-Divergence / Relative Entropy]]
- 𝐷<sub>𝐾𝐿</sub>(𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub>||𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>) = 𝐄<sub>𝑥\~𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub></sub>\[𝑙𝑜𝑔𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub>(𝑥) - 𝑙𝑜𝑔𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝑥)\]

where:
- 𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub> - [[Empirical／Sample Distribution|empirical distribution]] (which is a sample of the [[Population Distribution|population distribution]] 𝐏<sub>𝑑𝑎𝑡𝑎</sub>)
- 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub> - model distribution (the one we are trying to match with 𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub>)

the term 𝑙𝑜𝑔𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub>(𝑥) on the left is a function only of the data generating process, not the model. This means when we train the model to minimize the KL-Divergence, we need only minimize
- -𝐄<sub>𝑥\~𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub></sub>\[𝑙𝑜𝑔𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝑥)\] <font style="color: rgb(128,128,128);">\# this is the [[Univariate Entropy (Information Content - Entropy - Cross Entropy - KL Divergence)|cross entropy]] between the distributions: 𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub>and 𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub></font>

which of course is the same as the maximization in MLE:
- 𝜃<sub>𝑀𝐿</sub> = 𝑎𝑟𝑔𝑚𝑎𝑥<sub>𝜃</sub> 𝐄<sub>𝑥\~𝐏ˆ<sub>𝑑𝑎𝑡𝑎</sub></sub>\[ 𝑙𝑜𝑔𝐏<sub>𝑚𝑜𝑑𝑒𝑙</sub>(𝑋<sub>𝑖</sub>;𝜃) \] <font style="color: rgb(128,128,128);">\# see</font> [[Maximum Likelihood Estimation (MLE)|MLE]] <font style="color: rgb(128,128,128);">for derivation</font>
