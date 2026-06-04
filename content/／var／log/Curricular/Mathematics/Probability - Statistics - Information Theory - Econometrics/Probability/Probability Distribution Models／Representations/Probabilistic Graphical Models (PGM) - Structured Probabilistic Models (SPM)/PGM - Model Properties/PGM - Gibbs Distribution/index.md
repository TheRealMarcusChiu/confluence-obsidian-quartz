---
title: "PGM - Gibbs Distribution"
created: 2021-09-13T05:26:38.066-05:00
modified: 2023-12-25T12:37:30.895-06:00
parent: "[[PGM - Model Properties]]"
children:
  - "[[PGM - Gibbs Distribution - Bayesian Network]]"
---
Related: [[Boltzmann／Gibbs Distribution|Boltzmann/Gibbs Distribution]]
# Probabilistic Graphical Models & Gibbs Distribution

A [[Probability Distributions|probability distribution]] 𝐏<sub><strong>𝐅</strong></sub>(𝐗) is a <strong>Gibbs Distribution</strong> over a [[Graphical Models|graphical model]] 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩ if it can be written as
- 𝐏<sub><strong>𝐅</strong></sub>(𝐗) = (1/<font style="color: rgb(255,102,0);">𝘡</font>) \* <font style="color: rgb(0,0,255);">𝛱<sub>1≤𝑖≤𝑚</sub><sub></sub>\[ 𝐹<sub>𝑖</sub>(𝑆<sub>𝑖</sub>) \]</font>

where:
- the set of variables (𝑆<sub>𝑖</sub>) in each factor 𝐹<sub>𝑖</sub><sub></sub>form a clique in the [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] of 𝒢
- 
> [!expand]- graphical model syntax
> ![[Graphical Models#^excerpt]]

# Theorem 1: Factorization Implies Conditional Independencies

> [!expand]- Click here to expand...
> If 𝐏<sub><strong>𝐅</strong></sub>(𝐗) is a Gibbs Distribution for 𝒢, then the [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] of 𝒢 is an [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|I-Map]] for [[Probability Distributions|probability distribution]] 𝐏(𝐗):
> - 𝐈(𝐆) ⊆ 𝐈(𝐏)
>
> proof, suppose:
> - 𝐴, 𝐵, and 𝐶 are disjoint sets of variables
> - 𝐴 is connected to 𝐵
> - 𝐶 is connected to 𝐵
> - 𝐵 separates 𝐴 from 𝐶
>
> then we can write:
> - 𝐏(𝐴, 𝐵, 𝐶) = (1/<font style="color: rgb(255,102,0);">𝘡</font>) \*<font style="color: rgb(0,0,255);"> 𝐹<sub>1</sub>(𝐴,𝐵) <font style="color: rgb(51,51,51);">\*</font> 𝐹<sub>2</sub>(𝐵,𝐶)</font>
# Theorem 2: Conditional Independencies Implies Factorization

> [!expand]- Click here to expand...
> If 𝐏(𝐗) is a positive distribution and the [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] of 𝒢 is an [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|I-Map]] for 𝐏(𝐗), then 𝐏(𝐗) is a Gibbs Distribution that factorizes over graphical model 𝒢
# Subpages
- [[MN／MRF - Variants (Gibbs Distribution)|MN/MRF - Variants (Gibbs Distribution)]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
