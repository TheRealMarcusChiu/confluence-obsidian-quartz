---
title: "Markov Networks／Nets - Markov Random Fields (MRF)"
created: 2021-09-13T05:26:47.485-05:00
modified: 2021-12-11T05:05:21.778-06:00
parent: "[[PGM - Model Types]]"
children:
  - "[[MN／MRF - Inferring Independence]]"
  - "[[MN／MRF - Inferring Probabilities]]"
  - "[[MN／MRF - Potential Functions (𝜙)]]"
  - "[[MN／MRF - To Bayesian Network]]"
  - "[[MN／MRF - To Factor Graph]]"
  - "[[MN／MRF - Variants (Gibbs Distribution)]]"
---
<strong>Markov Network</strong> or <strong>Markov Random Field (MRF)</strong>
- is a type of undirected [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic graphical model]] in which each node corresponds to a random variable or a collection of random variables, and the edges identify conditional dependencies
- is a (set of random variables - Random Field) having a [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|Markov Property]] described by an undirected graph
- may be considered to be a generalization of a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|Markov Chains]] in multiple dimensions. In a Markov chain, state depends only on the previous state in time, whereas in a Markov random field, each state depends on its neighbors in any of multiple directions
- may be visualized as a field or graph of random variables, where the [[Probability Distributions|distribution]] of each random variable depends on the neighboring variables with which it is connected
- is a [[Probability Distributions|probability distribution]] 𝑝 over variables 𝑥<sub>1</sub>, …, 𝑥<sub>𝑛</sub> defined by an <em>undirected</em> graph 𝐆 in which nodes correspond to variables 𝑥<sub>𝑖</sub>
- given an undirected graph 𝐆=(𝑉,𝐸), a set of random variables 𝐗=(𝑋<sub>𝑣</sub>)<sub>𝑣∈𝑉</sub> indexed by 𝑉 form a [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Random Field]] with respect to <strong>𝐆</strong> if they satisfy the [[Markov Condition／Assumption／Property - First／Second／Nth-Order - (Pairwise - Local - Global - Markov-Blanket) - Causal Markov (CMC) Condition／Assumption／Property|Local Markov Property]]

# Formal Definition

![[Markov Networks／Nets - Markov Random Fields (MRF)/Markov_random_field_example.png|150]]

<strong>FIGURE 1 </strong>

𝐴 depends on 𝐵 and 𝐷𝐵 depends on 𝐴 and 𝐷𝐷 depends on 𝐴, 𝐵, and 𝐸𝐸 depends on 𝐷 and 𝐶𝐶 depends on 𝐸

a Markov Network 𝓜 = ⟨𝐗, 𝐃, 𝐒, 𝛷, 𝛱⟩ is a type of [[Graphical Models|graphical model]]:
- 𝐗 = {𝑋<sub>1</sub>, ..., 𝑋<font style="color: rgb(128,0,0);"><sub>𝑛</sub></font>} set of ordered variables
- 𝐃 = {𝐷<sub>1</sub>, ..., 𝐷<font style="color: rgb(128,0,0);"><sub>𝑛</sub></font>} set of corresponding domains of each variable (e.g. if 𝑋<sub>1</sub>is a boolean variable then 𝐷<sub>1</sub>= {true, false})
- 𝐒 = {𝑆<sub>1</sub>, ..., 𝑆<font style="color: rgb(0,128,128);"><sub>𝑚</sub></font>} set of variable scopes, where each 𝑆<sub>𝑖</sub>is a subset of 𝐗
- 𝛷 = {𝜙<sub>1</sub>, ..., 𝜙<font style="color: rgb(0,128,128);"><sub>𝑚</sub></font>} factorization - set of potential functions where each potential 𝜙<sub>𝑖</sub> is a non-negative real-valued function defined over its corresponding variable scope 𝑆<sub>𝑖</sub>

# Factor Representation - Potential Functions (𝜙)

> [!expand]- Click here to expand...
> ![[MN／MRF - Potential Functions (𝜙)#^excerpt]]
# Joint Probability Distribution of a given Markov Network

> [!expand]- Click here to expand...
> The [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint distribution]] for any random variable in the graph can be computed as the product of the "[[Graph Theory - Terminology|clique]] potentials" of all the cliques in the graph that contain that random variable. Modeling a problem as a MRF is useful because it implies that the joint distributions at each vertex in the graph may be computed in this manner
>
> the joint distribution is computed like so, with <strong>𝘡 </strong>= partition function
>
> 𝑃(𝑋<sub>1</sub>, ..., 𝑋<font style="color: rgb(128,0,0);"><sub>𝑛</sub></font>) = (1/<font style="color: rgb(255,102,0);">𝘡</font>) \* <font style="color: rgb(0,0,255);">𝛱<sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \]</font>
>
> where <font style="color: rgb(255,102,0);">𝘡</font> is the Partition Function
> - <font style="color: rgb(255,102,0);">𝘡</font> = 𝛴<sub>𝒙<sub>1</sub>∊𝑋<sub>1</sub></sub> ... 𝛴<sub>𝒙<sub><font style="color: rgb(128,0,0);">𝑛</font></sub>∊𝑋<sub><font style="color: rgb(128,0,0);">𝑛</font></sub></sub><font style="color: rgb(0,0,255);">𝛱</font><font style="color: rgb(0,0,255);"><sub>𝑐∊</sub><sub><strong>𝐶</strong></sub>\[ 𝜙<sub>𝑐</sub>(𝒙<sub>𝑐</sub>) \]</font>
> - <font style="color: rgb(255,102,0);">𝘡 </font>normalizes the joint distribution
> - <font style="color: rgb(255,102,0);">𝘡 </font>makes the potentials scale invariant
>
> ###### Example
> ![[Markov Networks／Nets - Markov Random Fields (MRF)/markov-network-example.png|400]]
>
> a 3x3 square grid pairwise Markov Network 𝓜 with:
> - 𝐗 = <strong>{</strong>𝐴, 𝐵, 𝐶, 𝐷, 𝐸, 𝐹, 𝐺, 𝐻, 𝐼<strong>}</strong>
> - 𝐃 = <strong>{</strong>{0, 1} for each variable<strong>}</strong>
> - 𝐒 = <strong>{</strong>𝑆<sub>1</sub>={𝐴, 𝐵}, 𝑆<sub>2</sub>={𝐵, 𝐶}, 𝑆<sub>3</sub>={𝐴, 𝐷}, 𝑆<sub>4</sub>={𝐵, 𝐸}, 𝑆<sub>5</sub>={𝐶, 𝐹}, 𝑆<sub>6</sub>={𝐶, 𝐷}, 𝑆<sub>7</sub>={𝐷, 𝐸}, 𝑆<sub>8</sub>={𝐷, 𝐺}, 𝑆<sub>9</sub>={𝐸, 𝐻}, 𝑆<sub>10</sub>={𝐹, 𝐼}, 𝑆<sub>11</sub>={𝐺, 𝐻}, 𝑆<sub>12</sub>={𝐻, 𝐼}<strong>}</strong>
> - <strong>ɸ</strong> = <strong>{</strong>𝜙<sub>1</sub>(𝐴, 𝐵), 𝜙<sub>2</sub>(𝐵, 𝐶), 𝜙<sub>3</sub>(𝐴, 𝐷), 𝜙<sub>4</sub>(𝐵, 𝐸), 𝜙<sub>5</sub>(𝐶, 𝐹), 𝜙<sub>6</sub>(𝐶, 𝐷), 𝜙<sub>7</sub>(𝐷, 𝐸), 𝜙<sub>8</sub>(𝐷, 𝐺), 𝜙<sub>9</sub>(𝐸, 𝐻), 𝜙<sub>10</sub>(𝐹, 𝐼), 𝜙<sub>11</sub>(𝐺, 𝐻), 𝜙<sub>12</sub>(𝐻, 𝐼)<strong>}</strong>
>
> joint distribution 𝐏(𝑎, 𝑏, 𝑐, 𝑑, 𝑒, 𝑓, 𝑔, ℎ, 𝑖):
> - 𝐏(𝑎, 𝑏, 𝑐, 𝑑, 𝑒, 𝑓, 𝑔, ℎ, 𝑖) = (1/<font style="color: rgb(255,102,0);">𝘡</font>) \* <font style="color: rgb(0,0,255);">𝐅(𝑎, 𝑏, 𝑐, 𝑑, 𝑒, 𝑓, 𝑔, ℎ, 𝑖)</font>
> - <font style="color: rgb(0,0,255);">𝐅(𝑎, 𝑏, 𝑐, 𝑑, 𝑒, 𝑓, 𝑔, ℎ, 𝑖</font><font style="color: rgb(0,0,255);">)</font> = <font style="color: rgb(0,0,255);">𝛱<sub>𝜙∊</sub><sub><strong>ɸ</strong></sub>𝜙(...)</font>
> - <font style="color: rgb(0,0,255);">𝐅(𝑎, 𝑏, 𝑐, 𝑑, 𝑒, 𝑓, 𝑔, ℎ, 𝑖) </font>= 𝜙<sub>1</sub>(𝐴=𝑎, 𝐵=𝑏) \* 𝜙<sub>2</sub>(𝐵=𝑏, 𝐶=𝑐) \* 𝜙<sub>3</sub>(𝐴=𝑎, 𝐷=𝑑) \* 𝜙<sub>4</sub>(𝐵=𝑏, 𝐸=𝑒) \* 𝜙<sub>5</sub>(𝐶=𝑐, 𝐹=𝑓) \* 𝜙<sub>6</sub>(𝐶=𝑐, 𝐷=𝑑) \* 𝜙<sub>7</sub>(𝐷=𝑑, 𝐸=𝑒) \* 𝜙<sub>8</sub>(𝐷=𝑑, 𝐺=𝑔) \* 𝜙<sub>9</sub>(𝐸=𝑒, 𝐻=ℎ) \* 𝜙<sub>10</sub>(𝐹=𝑓, 𝐼=𝑖) \* 𝜙<sub>11</sub>(𝐺=𝑔, 𝐻=ℎ) \* 𝜙<sub>12</sub>(𝐻=ℎ, 𝐼=𝑖)
> - <font style="color: rgb(255,102,0);">𝘡</font> = 𝛴<sub>𝑎∊𝐴</sub>𝛴<sub>𝑏∊𝐵</sub>𝛴<sub>𝑐∊𝐶</sub>𝛴<sub>𝑑∊𝐷</sub>𝛴<sub>𝑒∊𝐸</sub>𝛴<sub>𝑓∊𝐹</sub>𝛴<sub>𝑔∊𝐺</sub>𝛴<sub>ℎ∊𝐻</sub>𝛴<sub>𝑖∊𝐼</sub><font style="color: rgb(0,0,255);">𝐅(𝑎, 𝑏, 𝑐, 𝑑, 𝑒, 𝑓, 𝑔, ℎ, 𝑖)</font>
# Subpages
- [[Bayesian Network (BN) vs Markov Random Field (MRF)]]
- [[Conditional Random Field (CRF) vs Markov Random Field (MRF)]]
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [http://homes.sice.indiana.edu/natarasr/Courses/I590/Papers/MRF.pdf](http://homes.sice.indiana.edu/natarasr/Courses/I590/Papers/MRF.pdf)
- [https://ermongroup.github.io/cs228-notes/representation/undirected/](https://ermongroup.github.io/cs228-notes/representation/undirected/)
