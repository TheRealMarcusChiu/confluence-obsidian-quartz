---
title: "Bayesian Networks (BN)"
created: 2021-09-13T05:26:39.426-05:00
modified: 2023-12-27T00:55:15.440-06:00
parent: "[[PGM - Model Types]]"
children:
  - "[[BN - Inferring Independence]]"
  - "[[BN - Learning Structure & Parameters]]"
  - "[[BN - Probabilistic Inference]]"
  - "[[BN - To Markov Network]]"
  - "[[BN - Variants]]"
---
###### Bayesian Networks (BN) - Bayes Nets
- is a type of [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|Probabilistic Graphical Models (PGM)]]
- sometimes thought as a [[Causal Networks／Models／Graphs／Diagrams|Causal Network]]
- is a [[Graph Theory - Terminology|Directed Acyclic Graph (DAG)]] with specification is as follows:
	1. each node 𝑖 corresponds to a random variable 𝑋<sub>𝑖</sub>(discrete or continuous)
	2. a set of directed edges connecting pairs of nodes (i.e. an arrow from node 𝑋 to node 𝑌, means 𝑋 is a parent of 𝑌)
	3. each node 𝑋<sub>𝑖</sub> has a <em>[[Conditional Probability Distribution (CPD)|conditional probability distribution]]</em> 𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠(𝑋<sub>𝑖</sub>)) (NOTE: nodes without parents are simply 𝐏(𝑋<sub>𝑖</sub>))
- representing and determining [[Probability Distributions|probability distributions]]:
	- EXPLICITLY represents univariate [[Conditional Probability Distribution (CPD)|conditional probability distribution]] via [[Conditional Probability Table (CPT)|Conditional Probability Tables (CPTs)]] i.e. 𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠(𝑋<sub>𝑖</sub>)) for all 𝑋<sub>𝑖</sub>
	- IMPLICITLY represents [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] of any subset of variables
	- IMPLICITLY represents multivariate [[Conditional Probability Distribution (CPD)|conditional probability distribution]] of any subset of variables
- representing and determining [[Probability Independence (Marginal Independence - Conditional Independence)|independence & conditional independence]] (see: [[BN - (D-Separation ｜ D-Connection)|D-Separation]])
	- determine whether 2 variables are [[Probability Independence (Marginal Independence - Conditional Independence)|conditional independent]] given a set of known variables
	- determine whether 2 variables are [[Probability Independence (Marginal Independence - Conditional Independence)|independence]]

![[Bayesian Networks (BN)/bayesian-network.png|301]]
# Formal Definition
A Bayesian Network (BN) 𝔅 = ⟨𝐗, 𝐃, 𝐒, 𝐏<sub>𝐺</sub>⟩ is a type of [[Graphical Models|graphical model]]:
- 𝐗 = {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} set of ordered variables
- 𝐃 = {𝐷<sub>1</sub>, ..., 𝐷<sub>𝑛</sub>} set of corresponding domains of each variable (e.g. if 𝑋<sub>1</sub>is a boolean variable then 𝐷<sub>1</sub>= {true, false})
- 𝐒 = {𝑆<sub>1</sub>, ..., 𝑆<font style="color: rgb(0,51,102);"><sub>𝑛</sub></font>} set of variable scopes, where each 𝑆<sub>𝑖</sub>is a set that contains variable 𝑋<sub>𝑖</sub> and a subset of {𝑋<sub>𝑖+1</sub>, ..., 𝑋<sub>𝑛</sub>}
- 𝐏<sub>𝐺</sub> = {𝑃<sub>1</sub>, ..., 𝑃<sub>𝑛</sub>} set of corresponding [[Conditional Probability Table (CPT)|Conditional Probability Tables (CPT)]] for each variable 𝑋<sub>𝑖</sub>over variable scope 𝑆<sub>𝑖</sub> (i.e. 𝑃<sub>𝑖</sub> = 𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>)) where 𝑝𝑎𝑟𝑒𝑛𝑡𝑠-𝑜𝑓(𝑋<sub>𝑖</sub>)<sub></sub>⊆ {𝑋<sub>𝑖+1</sub>, ..., 𝑋<sub>𝑛</sub>})

# Factor Representation - Conditional Probability Representations

> [!expand]- Click here to expand...
> ### Conditional Probability Representations
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = [[CPD - Representations]].file.folder + "/" + [[CPD - Representations]].file.name
> ```
>
> ### Conditional Probability Table (CPT) - Example
>
> ![[Bayesian Networks (BN)/Bayesian network for this domain.png|446x250]]
# Joint Probability Distribution of a given Bayesian Network

> [!expand]- Click here to expand...
> <strong>problem</strong>: given a Bayesian Network of [[Conditional Probability Distribution (CPD)|conditional probabilities]] how do we find a [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|joint probability distribution]] of any set of variables?
>
> <strong>solution</strong>: using the <font style="color: rgb(128,128,128);"><em>product rule</em></font>, a <font style="color: rgb(128,0,0);"><em>joint probability distribution</em></font> can be represented in terms of <font style="color: rgb(51,102,255);"><em>conditional probabilities</em></font>
>
> <font style="color: rgb(128,0,0);">Joint Probability</font> = <font style="color: rgb(51,102,255);">Conditional Probabilities</font>
> <font style="color: rgb(128,0,0);"><font style="color: rgb(128,0,0);">𝐏</font>(𝑥<sub>1</sub>,...,<font style="color: rgb(128,0,0);"><font style="color: rgb(128,0,0);">𝑥</font></font><sub>𝑛</sub>)</font> = <font style="color: rgb(51,102,255);"><font style="color: rgb(51,102,255);">𝐏</font>(𝑥<sub>𝑛</sub>|<font style="color: rgb(51,102,255);">𝑥</font><sub><font style="color: rgb(51,102,255);">𝑛</font>−1</sub>,...,<font style="color: rgb(51,102,255);">𝑥</font><sub>1</sub>) <font style="color: rgb(51,102,255);">𝐏</font>(x<sub><font style="color: rgb(51,102,255);">𝑛</font>−1</sub>|<font style="color: rgb(51,102,255);">𝑥</font><sub><font style="color: rgb(51,102,255);">𝑛</font>−2</sub>,...,<font style="color: rgb(51,102,255);">𝑥</font><sub>1</sub>)</font> ··· <font style="color: rgb(51,102,255);">𝐏</font><font style="color: rgb(51,102,255);">(<font style="color: rgb(51,102,255);">𝑥</font><sub>3</sub>|<font style="color: rgb(51,102,255);">𝑥</font><sub>2</sub>,<font style="color: rgb(51,102,255);">𝑥</font><sub>1</sub>) <font style="color: rgb(51,102,255);">𝐏</font></font><font style="color: rgb(51,102,255);">(<font style="color: rgb(51,102,255);">𝑥</font><sub>2</sub>|<font style="color: rgb(51,102,255);">𝑥</font><sub>1</sub>) <font style="color: rgb(51,102,255);">𝐏</font>(<font style="color: rgb(51,102,255);">𝑥</font><sub>1</sub>)</font>
> <font style="color: rgb(128,0,0);">𝐏(<font style="color: rgb(128,0,0);">𝑥</font><sub>1</sub>,...,<font style="color: rgb(128,0,0);">𝑥</font><sub><font style="color: rgb(128,0,0);">𝑛</font></sub></font>) = <font style="color: rgb(51,102,255);">𝛱<sub>1≤𝑖≤𝑛</sub></font><font style="color: rgb(51,102,255);"><sup></sup>𝐏(<font style="color: rgb(51,102,255);">𝑥</font><sub>𝑖</sub>|<font style="color: rgb(51,102,255);">𝑥</font><font style="color: rgb(51,102,255);"><sub>𝑖</sub></font><sub>−1</sub>,...,<font style="color: rgb(51,102,255);">𝑥</font><sub>1</sub>)</font>
>
> <font style="color: rgb(128,128,128);">𝐏(𝑋<sub>𝑖</sub>|𝑋<sub>𝑖</sub><sub>−1</sub>,...,𝑋<sub>1</sub>) = 𝐏(𝑋<sub>𝑖</sub>|Parents(𝑋<sub>𝑖</sub>))</font> provided that <font style="color: rgb(128,128,128);">Parents(𝑋<sub>𝑖</sub>) ⊆ {𝑋<sub>𝑖</sub><sub>−1</sub>, ..., 𝑋<sub>1</sub>} </font>
# Bayesian Networks - Compactness

> [!expand]- Click here to expand...
> a <font style="color: rgb(128,128,128);"><strong>Bayesian Network</strong></font> is often far more <em>compact </em>than the <font style="color: rgb(128,128,128);"><strong>Full Joint Distribution</strong></font>
>
> it is reasonable to suppose that each random variable is directly influenced by at most 𝑘 others, for some constant 𝑘. If we assume n Boolean variables for simplicity, then the amount of information needed to specify each conditional probability table will be at most 2<sup>𝑘</sup>numbers, and the complete network can be specified by 𝑛2<sup>𝑘</sup>numbers. In contrast, the joint distribution contains 2<sup>𝑛</sup>numbers.
> - Bayesian Network = requires 𝑛2<sup>𝑘</sup>numbers
> - Full Joint Distribution = requires 2<sup>𝑛</sup>numbers
>
> for example, suppose we have 𝑛 = 30 nodes, each with five parents (i.e. 𝑘 = 5):
> - Bayesian Network = requires 960 numbers
> - Full [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|Joint Distribution]] = requires 1,073,741,824 numbers
# Constructing a Bayesian Network

> [!expand]- Click here to expand...
> ###### <strong>Construction Steps</strong>
> 1. choose any ordering of variables {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>} (note: the resulting bayesian network will be more compact if the variables are ordered such that <font style="color: rgb(128,128,128);"><strong>causes</strong></font> precede <font style="color: rgb(128,128,128);"><strong>effects</strong></font>)
> 2. for 𝑖 = 1 to 𝑛
> 	1. for 𝑋<sub>𝑖</sub><sub></sub>choose a minimal set of parents from {𝑋<sub>𝑖+1</sub>, ..., 𝑋<sub>𝑛</sub>}, such that<font style="color: rgb(128,128,128);"> 𝐏(𝑋<sub>𝑖</sub><sub></sub>| minimal-subset(𝑋<sub>𝑖+1</sub>, ..., 𝑋<sub>𝑛</sub>)) = 𝐏(𝑋<sub>𝑖</sub><sub></sub>| 𝑋<sub>𝑖+1</sub>, ..., 𝑋<sub>𝑛</sub>)</font>
> 	2. for each parent insert a directed edge from parent to 𝑋<sub>𝑖</sub>
> 	3. CPTs: Write down the conditional probability table, 𝐏(𝑋<sub>𝑖</sub>|𝑝𝑎𝑟𝑒𝑛𝑡-𝑜𝑓(𝑋<sub>𝑖</sub>))
>
> ###### Construction Example
> 1. ordering of variables = \[<em><font style="color: rgb(128,128,128);">Burglary</font></em>, <em><font style="color: rgb(128,128,128);">Earthquake, <em>Alarm<em>, </em><em>MaryCalls</em>, <em>JohnCalls</em></em></font></em>\]
> 2. add variables in the following order:
> 	1. <strong>Adding Burglary</strong>
> 		1. No parents
> 		2. therefore no directed edge is added
> 	2. <strong>Adding Earthquake</strong>
> 		1. knowing <font style="color: rgb(128,128,128);">Burglary</font> does not affect the probability of <font style="color: rgb(128,128,128);">Earthquake</font> (i.e. <em><font style="color: rgb(128,128,128);">𝐏(Earthquake|Burglary) = 𝐏(<em>Earthquake</em>)</font></em><font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">) </font></font>
> 		2. <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">therefore no directed edge is added</font></font>
> 	3. <strong>Adding Alarm</strong>
> 		1. knowing whether <font style="color: rgb(128,128,128);">Burglary </font>and/or<font style="color: rgb(128,128,128);"> Earthquake</font>, affects the probability of <font style="color: rgb(128,128,128);">Alarm</font>
> 		2. therefore 2 directed edges are added:
> 			1. <font style="color: rgb(128,128,128);">Burglary </font>→ <font style="color: rgb(128,128,128);">Alarm</font>
> 			2. <font style="color: rgb(128,128,128);">Earthquake</font> → <font style="color: rgb(128,128,128);">Alarm</font>
> 	4. <strong>Adding MaryCalls</strong>
> 		1. the minimal set of parents from {<font style="color: rgb(128,128,128);">Burglary</font>, <font style="color: rgb(128,128,128);">Earthquake</font>, <font style="color: rgb(128,128,128);">Alarm</font>} is {<font style="color: rgb(128,128,128);">Alarm</font>}
> 		2. this is because {<font style="color: rgb(128,128,128);">MaryCalls</font>} and {<font style="color: rgb(128,128,128);">Burglary</font>, <font style="color: rgb(128,128,128);">Earthquake</font>} are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given {<font style="color: rgb(128,128,128);">Alarm</font>} (i.e. 𝐏(<font style="color: rgb(128,128,128);">MaryCalls</font>|<font style="color: rgb(128,128,128);">Burglary</font>, <font style="color: rgb(128,128,128);">Earthquake</font>, <font style="color: rgb(128,128,128);">Alarm</font>) = 𝐏(<font style="color: rgb(128,128,128);">MaryCalls</font>|<font style="color: rgb(128,128,128);">Alarm</font>))
> 		3. therefore 1 directed edge is added from <font style="color: rgb(128,128,128);">Alarm</font> → <font style="color: rgb(128,128,128);">MaryCalls</font>
> 	5. <strong>Adding JohnCalls</strong>
> 		1. the minimal set of parents from {<font style="color: rgb(128,128,128);">Burglary</font>, <font style="color: rgb(128,128,128);">Earthquake</font>, <font style="color: rgb(128,128,128);">Alarm</font>, <font style="color: rgb(128,128,128);">MaryCalls</font>} is {<font style="color: rgb(128,128,128);">Alarm</font>}
> 		2. this is because {<font style="color: rgb(128,128,128);">JohnCalls</font>} and {<font style="color: rgb(128,128,128);">Burglary</font>, <font style="color: rgb(128,128,128);">Earthquake</font>, <font style="color: rgb(128,128,128);">MaryCalls</font>} are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given {<font style="color: rgb(128,128,128);">Alarm</font>} (i.e. 𝐏(<font style="color: rgb(128,128,128);">JohnCalls</font>|<font style="color: rgb(128,128,128);">Burglary</font>, <font style="color: rgb(128,128,128);">Earthquake</font>, <font style="color: rgb(128,128,128);">Alarm</font>, <font style="color: rgb(128,128,128);">MaryCalls</font>) = 𝐏(<font style="color: rgb(128,128,128);">JohnCalls</font>|<font style="color: rgb(128,128,128);">Alarm</font>))
> 		3. therefore 1 directed edge is added from <font style="color: rgb(128,128,128);">Alarm</font> → <font style="color: rgb(128,128,128);">JohnCalls</font>
> 3. this outputs a Bayesian Network as shown in Figure 14.2
>
> ###### How Node Ordering Affects Resulting Bayesian Network
> ![[Bayesian Networks (BN)/how-node-ordering-affects-resulting-bayesian-network|397x250]]
> 1. ordering of variables = \[<font style="color: rgb(128,128,128);"><em>MaryCalls</em></font>, <font style="color: rgb(128,128,128);"><em>JohnCalls</em></font>, <em><font style="color: rgb(128,128,128);">Alarm</font></em>, <em><font style="color: rgb(128,128,128);">Burglary</font></em>, <em><font style="color: rgb(128,128,128);">Earthquake</font></em>\] would output a Bayesian Network as shown in Figure 14.3(a)
> 2. add variables in the following order:
> 	1. <strong>Adding <em>MaryCalls</em></strong>
> 		1. no parents
> 	2. <strong>Adding <em>JohnCalls</em></strong>
> 		1. If Mary calls, that probably means the alarm has gone off, which of course would make it more likely that John calls
> 		2. Therefore, <font style="color: rgb(128,128,128);"><em>JohnCalls </em></font>needs <font style="color: rgb(128,128,128);"><em>MaryCalls </em></font>as a parent
> 	3. <strong>Adding <em>Alarm</em></strong>
> 		1. Clearly, if both call, it is more likely that the alarm has gone off than if just one or neither calls
> 		2. so we need both <font style="color: rgb(128,128,128);"><em>MaryCalls </em></font>and <font style="color: rgb(128,128,128);"><em>JohnCalls </em></font>as parents
> 	4. <strong>Adding <em>Burglary</em></strong>
> 		1. if we know the alarm state, then the call from John or Mary might give us information about our phone ringing or Mary’s music, but not about burglary: <em><font style="color: rgb(128,128,128);"><strong>𝐏</strong>(Burglary | Alarm, JohnCalls, MaryCalls) = <strong>𝐏</strong>(Burglary | Alarm)</font></em>
> 		2. Hence we need just <font style="color: rgb(128,128,128);"><em>Alarm </em></font>as parent
> 	5. <strong>Adding <em>Earthquake</em></strong>
> 		1. If the alarm is on, it is more likely that there has been an earthquake. (The alarm is an earthquake detector of sorts.) But if we know that there has been a burglary, then that explains the alarm, and the probability of an earthquake would be only slightly above normal.
> 		2. Hence, we need both <font style="color: rgb(128,128,128);"><em>Alarm </em></font>and <font style="color: rgb(128,128,128);"><em>Burglary </em></font>as parents
>
> \[<font style="color: rgb(128,128,128);"><em>MaryCalls</em></font>, <font style="color: rgb(128,128,128);"><em>JohnCalls</em></font>, <font style="color: rgb(128,128,128);"><em>Earthquake</em></font>, <font style="color: rgb(128,128,128);"><em>Burglary</em></font>, <em>Alarm</em>\] - is a <font style="color: rgb(128,0,0);">bad</font> node ordering as shown in Figure 14.3(b)
> \[<font style="color: rgb(128,128,128);"><em>MaryCalls</em></font>, <font style="color: rgb(128,128,128);"><em>JohnCalls</em></font>, <em><font style="color: rgb(128,128,128);">Alarm</font></em>, <em><font style="color: rgb(128,128,128);">Burglary</font></em>, <em><font style="color: rgb(128,128,128);">Earthquake</font></em><font style="color: rgb(128,128,128);"><font style="color: rgb(0,0,0);">\] - is a <font style="color: rgb(255,204,0);">okay</font> node ordering as shown in Figure 14.3(a)</font></font>\[<font style="color: rgb(128,128,128);"><em>Earthquake</em></font>, <font style="color: rgb(128,128,128);"><em>Burglary<font style="color: rgb(0,51,102);">,</font> <em>Alarm<font style="color: rgb(0,51,102);">,</font> <em>MaryCalls</em><font style="color: rgb(0,51,102);">,</font> <em>JohnCalls</em></em></em></font>\] - is a <font style="color: rgb(51,153,102);">good</font> node ordering as shown in Figure 14.2
# Subpages
- [[Bayesian Network (BN) vs Markov Random Field (MRF)]]
- [[Naive Bayes Model vs Bayes Model vs Bayesian Network]]
- [[PGM - Gibbs Distribution - Bayesian Network]]
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
