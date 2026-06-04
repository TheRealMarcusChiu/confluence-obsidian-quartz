---
title: "Probabilistic Inference - Belief Propagation - Factor Graphs"
created: 2021-09-13T05:28:28.891-05:00
modified: 2021-09-13T05:28:28.891-05:00
parent: "[[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm]]"
children: []
---
here we will go over a [[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm|belief propagation algorithm]] for [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|factor graphs]]
###### Factor Graphs
A [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|factor graph]] is a bipartite graph containing 2 sets of nodes: variables nodes 𝐗 = {𝑋<sub>1</sub>, ..., 𝑋<font style="color: rgb(128,0,0);"><sub>𝑛</sub></font>} and factors nodes 𝐅 = {𝐹<sub>1</sub>, ..., 𝐹<font style="color: rgb(0,128,128);"><sub>𝑚</sub></font>} (see [[Probabilistic Inference - Syntax|syntax definition]]), with edges between variables and the factors in which they appear. We can write the joint distribution as
- 𝐏(𝑋<sub>1</sub>, ..., 𝑋<font style="color: rgb(128,0,0);"><sub>𝑛</sub></font>) = ∏<sub>𝐹<sub>𝑖</sub>∊𝐅</sub> \[ 𝐹<sub>𝑖</sub>(𝑆<sub>𝑖</sub>) \] <font style="color: rgb(128,128,128);">\# where 𝑆<sub>𝑖</sub> is the corresponding variable scope of 𝐹<sub>𝑖</sub></font>

###### Probabilistic Graphical Models to Factor Graphs
- any [[Bayesian Networks (BN)|Bayesian Network]] can be represented as a factor graph by using a factor for each node with its parents
- any [[Markov Networks／Nets - Markov Random Fields (MRF)|Markov Network]] can be represented as a factor for each node with its neighborhood

### Message Types & Computation

> [!expand]- Click here to expand...
> ###### 2 Types of Messages
> - message from variable node 𝑣 to factor node 𝑎
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Probabilistic Inference - Belief Propagation - Factor Graphs/sum-product-algorithm-message-from-variable-to-factor-node.png|310]]
> - message from factor node 𝑎 to variable node 𝑣
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Probabilistic Inference - Belief Propagation - Factor Graphs/sum-product-algorithm-message-from-factor-to-variable-node.png|380]]
>
> where:
> - 𝑎 - is a factor node
> - 𝑣 - is variable node
> - 𝐷𝑜𝑚(𝑣) - is a set of values variable 𝑣 can take
> - 𝑥<sub>𝑣</sub> - is a specific value of variable 𝑣 can take
> - 𝑁(𝑣) - is a set of neighboring factors of variable 𝑣
> - <em>μ</em><sub>𝑥→𝑦</sub>(𝑥<sub>𝑣</sub>) - is a belief of variable 𝑣's taking on value 𝑥<sub>𝑣</sub>. This belief is a "message" from node 𝑥 to node 𝑦
> - 𝐱<em>'</em><sub>𝑎</sub> - is a set of variables and value assignments
> - 𝑓<sub>𝑎</sub>(𝐱<em>'</em><sub>𝑎</sub>) - is a function of factor node 𝑎, taking 𝑎's scope of variable(s) and their value assignments and outputting a value
>
> ###### Message From Variable Node 𝑣 to Factor Node 𝑎
> - variable node 𝑣 sends to factor node 𝑎, a <strong>BELIEF</strong> for each value variable 𝑎 can take (<strong>BELIEF</strong> can be thought as an <strong>estimated probability</strong>). For example, if variable 𝑎 is a boolean variable, the message would contain some form like {(true, belief-value(true)), (false, belief-value(false))}. Following the syntax above, the general message format would be something like {(𝑥<sub>𝑣</sub>, <em>μ</em><sub>𝑥→𝑦</sub>(𝑥<sub>𝑣</sub>)), ...}. Continuing with the the example, the values true and false are already given with the problem statement, however, the belief-values have to be computed.
> - For simplicity, lets compute the belief-value(true). This belief value depends on the destination of the message being sent to. Therefore, the belief-value(true) maybe different between 2 factor nodes even though they are sent from the same variable node. This is implied by the formula above. With that said, lets say the variable node 𝑣 wants to compute the belief-value(true) that is to be sent to factor node 𝑎. It does this by taking the product of all messages previously received from all factor nodes MINUS factor node 𝑎. The product is actually the product of belief-value(true) contained within each message (this is further explained in the next section). This product is belief-value(true). Next belief-value(false) is computed in similar manner. Both of these belief values would be plugged into the message format and thus, sent to the appropriate factor node.
>
> ###### Message From Factor Node𝑎 to Variable Node 𝑣
> - factor node 𝑎 sends to variable node 𝑣, an <strong>UPDATED BELIEF</strong> for each value variable 𝑎 can take. This is because the factor node contains the factor-function (e.g. potential function, conditional probability table, etc) that holds the probability information of each variable value. Continuing with the example above, the factor node would send messages of the similar form {(true, belief-value(true)), (false, belief-value(false))}. However, the computation of belief-value(false) is slightly different.
> - For simplicity, lets compute the belief-value(true). Here we introduce 𝐱<em>'</em><sub>𝑎</sub> which is a set of variables ATTACHED to factor node 𝑎. This 𝐱<em>'</em><sub>𝑎</sub> also includes the value assignment of each variable. As shown in the formula above, the summation iterates through every possible value assignment of the set of variables. However, since we are computing belief-value(true), the variable 𝑣 is always assigned to true. No that is out of the way, what are we doing a summation of? We are essentially summing a product of probabilities (more accurately, product of estimated probabilities & factor function). This product however, does not include the estimated probability of variable 𝑣. This is an important remark because variable 𝑣 is already sending its own beliefs to factor node 𝑎. If factor node 𝑎 were to be included beliefs of variable 𝑣 into the product, it would be a definition of a cycle. This would cause a feedback loop, and have undesirable outcomes.
> - So why do we compute belief-value(true) as a sum-of-products? consider the factor graph below
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Probabilistic Inference - Belief Propagation - Factor Graphs/factor-graph-example.png|100]]
> 	- the black-square represents the factor node 𝑎 and is directly connected to variable nodes 𝐴, 𝐵, 𝐶. Thus the factor function is 𝑓<sub>𝑎</sub>(𝐴, 𝐵, 𝐶)
> 	- the messages sent to factor node 𝑎 are:
> 		- <em>μ</em><sub>𝐴→𝑎</sub>(𝑥<sub>𝐴</sub>) - message sent from node 𝐴
> 		- <em>μ</em><sub>𝐵→𝑎</sub>(𝑥<sub>𝐵</sub>) - message sent from node 𝐵
> 		- <em>μ</em><sub>𝐶→𝑎</sub>(𝑥<sub>𝐶</sub>) - message sent from node 𝐶
> 	- now let's say factor node wants to send a message to variable node 𝐴, and for simplicity let all variables be boolean variables. now let's compute: belief-value(𝐴=true) ≈ <em>μ</em><sub>𝑎→𝐴</sub>(true)
> 	- <em>μ</em><sub>𝑎→𝐴</sub>(true) = ∑<sub>𝑥<sub>𝐵</sub>∊𝐷𝑜𝑚(𝐵)</sub>∑<sub>𝑥<sub>𝐶</sub>∊𝐷𝑜𝑚(𝐶)</sub> \[ 𝑓<sub>𝑎</sub>(𝐴=true, 𝐵=𝑥<sub>𝐵</sub>, 𝐶=𝑥<sub>𝐶</sub>) \* <em>μ</em><sub>𝐵→𝑎</sub>(𝑥<sub>𝐵</sub>) \* <em>μ</em><sub>𝐶→𝑎</sub>(𝑥<sub>𝐶</sub>) \]
> 		- <em>μ</em><sub>𝑎→𝐴</sub>(true) can be thought as probability 𝐏(𝐴=true)
> 		- 𝑓<sub>𝑎</sub>(𝐴=true, 𝐵=𝑥<sub>𝐵</sub>, 𝐶=𝑥<sub>𝐶</sub>) can be thought as an INTERNAL local joint probability 𝐏(true, 𝑥<sub>𝐵</sub>, 𝑥<sub>𝐶</sub>)
> 		- <em>μ</em><sub>𝐵→𝑎</sub>(𝑥<sub>𝐵</sub>) can be thought as probability 𝐏(𝐵=𝑥<sub>𝐵</sub>) EXTERNAL to the local system
> 		- <em>μ</em><sub>𝐶→𝑎</sub>(𝑥<sub>𝐶</sub>) can be thought as probability 𝐏(𝐶=𝑥<sub>𝐶</sub>) EXTERNAL to the local system
> 	- substitute and we get
> 	- <em>𝐏(𝐴=true) </em>= ∑<sub>𝑥<sub>𝐵</sub>∊𝐷𝑜𝑚(𝐵)</sub>∑<sub>𝑥<sub>𝐶</sub>∊𝐷𝑜𝑚(𝐶)</sub> \[ 𝐏(𝐴=true, 𝑥<sub>𝐵</sub>, 𝑥<sub>𝐶</sub>) \* 𝐏(𝑥<sub>𝐵</sub>) \* 𝐏(𝑥<sub>𝐶</sub>) \]
> 	- the equation can be further simplified by considering: internal vs external
> 		- 𝐏(true, 𝑥<sub>𝐵</sub>, 𝑥<sub>𝐶</sub>) \* 𝐏(𝑥<sub>𝐵</sub>) \* 𝐏(𝑥<sub>𝐶</sub>) can be thought as probability 𝐏(true, 𝑥<sub>𝐵</sub>, 𝑥<sub>𝐶</sub>) EXTERNAL to the local system
> 	- substitute and we get
> 	- <em>𝐏(𝐴=true) </em>= ∑<sub>𝑥<sub>𝐵</sub>∊𝐷𝑜𝑚(𝐵)</sub>∑<sub>𝑥<sub>𝐶</sub>∊𝐷𝑜𝑚(𝐶)</sub> \[ 𝐏(𝐴=true, 𝑥<sub>𝐵</sub>, 𝑥<sub>𝐶</sub>) \]
> 	- now this should look familiar, as this is the definition of [[Marginal Probability Distribution|marginal probability]]
### Algorithm

> [!expand]- Click here to expand...
> a typical run:
> 1. all variable nodes sends messages to its neighboring factors (all messages are initially equal to 1, <em>μ</em><sub>𝑣→𝑎</sub>(𝑥<sub>𝑣</sub>) = 1)
> 2. all factor nodes sends messages to its neighboring variable nodes based on the received messages
> 3. all variable nodes sends messages to its neighboring factors based on the received messages
> 4. repeat steps 2 and 3 until convergence (each message pass updates the probability until no changes are made, this is called convergence)
>
> Different scheduling can be used for updating the messages. In the case where the graphical model is a tree, an optimal scheduling allows to reach convergence after computing each messages only once (see collect & distribute algorithm in [[Probabilistic Inference - Message Passing - Belief Propagation - Sum-Product Algorithm|Belief Propagation]]). When the factor graph has cycles, such an optimal scheduling does not exist, and a typical choice is to update all messages simultaneously at each iteration.
> ###### Estimating Probabilities
>
> Upon convergence (if convergence happened), the estimated marginal distribution of each node is proportional to the product of all messages from adjoining factors (missing the normalization constant)
>
> ![[Probabilistic Inference - Belief Propagation - Factor Graphs/sum-product-algorithm-marginal-probability-of-a-variable.png|190]]
>
> Likewise, the estimated joint marginal distribution of the set of variables belonging to one factor is proportional to the product of the factor and the messages from the variables
>
> ![[Probabilistic Inference - Belief Propagation - Factor Graphs/sum-product-algorithm-joint-probability.png|220]]
> ###### When a Variable is Observed
>
> if a variable is observed, substitute the observed value in all factors with scope containing the corresponding variable & remove the variable node from the factor graph. You may need to normalize afterwards
### Video Tutorials

> [!expand]- Click here to expand...
> ![](https://www.youtube.com/watch?v=-z5lKPHcumo)
> ### Video Tutorial 2
>
> ![](https://www.youtube.com/watch?v=8H5LJVgtzsg)
>
> ![](https://www.youtube.com/watch?v=OA93soK919o)
>
> ![](https://www.youtube.com/watch?v=LlfjKyuKgIc)
>
> ![](https://www.youtube.com/watch?v=yKoiF1VQzp4)
>
> ![](https://www.youtube.com/watch?v=zhfX3h48GLA)
