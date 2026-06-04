---
title: "AI Chapter 14 - Probabilistic Reasoning"
created: 2019-04-19T22:44:13.957-05:00
modified: 2026-05-24T20:21:15.392-05:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
## Sections
- Representing Knowledge in an Uncertain Domain
- The Semantics of Bayesian Networks
- Efficient Representations of Conditional Distributions
- Exact Inference of Bayesian Networks
- Approximate Inference in Bayesian Networks
- Relational and First-Order Probability Models
- Other Approaches to Uncertain Reasoning

# Representing Knowledge in an Uncertain Domain

A <strong>[[Bayesian Networks (BN)|Bayesian Network]]</strong> is a [[Graph Theory - Terminology|Directed Acyclic Graph (DAG)]] in which each node is annotated with probability information. The full specification is as follows:
1. each node corresponds to a random variable (discrete or continuous)
2. a set of directed links or arrows connects pairs of nodes
	1. an arrow from node X to node Y, means X is a parent of Y
	2. the graph has no directed cycles (i.e. Directed Acyclic Graph (DAG))
3. each node X<sub>i</sub> has a <em>[[Conditional Probability Distribution (CPD)|conditional probability distribution]]</em> P(X<sub>i</sub>|Parents(X<sub>i</sub>))

###### Example Bayesian Network

suppose you have a new burglar alarm installed at home. It is fairly reliable at detecting a burglary, but also responds on occasion to minor earthquakes. You also have two neighbors, John and Mary, who have promised to call you at work when they hear the alarm. John nearly always calls when he hears the alarm, but sometimes confuses the telephone ringing with the alarm and calls then, too. Mary, on the other hand, likes rather loud music and often misses the alarm altogether. Given the evidence of who has or has not called, we would like to estimate the probability of a burglarybayesian network for this domain 

![[AI Chapter 14 - Probabilistic Reasoning/Bayesian network for this domain.png|446x250]]

Figure 14.2 shows several examples of a <strong>Conditional Probability Table (</strong><strong>CPT)</strong>:
- a CPT is used for representing a [[Conditional Probability Distribution (CPD)|conditional probability distribution]] on a node variable when given 0 or more parent node values
- each row in the CPT contains the conditional probability of a node value given a <strong>conditioning case </strong>(i.e. a conditioning case is just a possible combination of values for the parent nodes)

# The Semantics of Bayesian Networks

There are 2 <em>equivalent</em> views in understanding the semantics of Bayesian networks:
- [[AI Chapter 14 - Probabilistic Reasoning|view the network as a representation of the joint probability distribution]] - helpful in [[AI Chapter 14 - Probabilistic Reasoning|constructing bayesian networks]]
- [[AI Chapter 14 - Probabilistic Reasoning|view the network as an encoding of a collection of conditional independence statements]] - helpful in designing inference procedures

### Representing the Full Joint Distribution
###### ![[AI Chapter 14 - Probabilistic Reasoning/Representing the full joint distribution.png|301]]
where <em><font style="color: rgb(128,128,128);">parents(X<sub>i</sub>) </font></em>denotes the values of <font style="color: rgb(128,128,128);"><em>Parents(X<sub>i</sub>) </em></font>that appear in <font style="color: rgb(128,128,128);"><em>x<sub>1</sub>, ..., x<sub>n</sub></em></font>

To illustrate this, we can calculate the probability that the alarm has sounded, but neither a burglary nor an earthquake has occurred, and both John and Mary call. We multiply entries from the joint distribution

<em>P(j,m,a,¬b,¬e) = P(j | a) P(m | a) P(a | ¬b ∧ ¬e) P(¬b) P(¬e)
P(j,m,a,¬b,¬e) = 0.90 × 0.70 × 0.001 × 0.999 × 0.998
P(j,m,a,¬b,¬e) = 0.000628</em>
###### Constructing Bayesian Networks

First, we rewrite the entries in the <strong><font style="color: rgb(128,128,128);"><em>joint distribution</em></font></strong> in terms of <strong><font style="color: rgb(128,128,128);"><em>conditional probability</em></font></strong>, using the <font style="color: rgb(128,128,128);"><em><strong>product rule</strong></em></font>

<em>P(x<sub>1</sub>, ..., x<sub>n</sub>) = P(x<sub>n</sub>| x<sub>n−1</sub>, ..., x<sub>1</sub>) P(x<sub>n−1</sub>| x<sub>n−2</sub>, ..., x<sub>1</sub>) ··· P(x<sub>2</sub>| x<sub>1</sub>) P(x<sub>1</sub>)</em><em>P(x<sub>1</sub>, ..., x<sub>n</sub>) = ∏<sub>1</sub><sup>n</sup>P(x<sub>i</sub>| x<sub>i−1</sub>, ..., x<sub>1</sub>)</em>

this identity is called <strong>chain rule</strong>

Comparing it with Equation ([[AI Chapter 14 - Probabilistic Reasoning|14.2]]), we see that the specification of the joint distribution is equivalent to the general assertion that, for every variable X<sub>i</sub>in the network,

<font style="color: rgb(128,128,128);"><em>P(X<sub>i</sub>| X<sub>i−1</sub>, ..., X<sub>1</sub>) = P(X<sub>i</sub>|</em> Parents(X<sub>i</sub>))</font>, provided that <font style="color: rgb(128,128,128);"><em>Parents(X<sub>i</sub>) ⊆ {X<sub>i−1</sub>, ..., X<sub>1</sub>} </em></font>

This last condition (<font style="color: rgb(128,128,128);"><em>Parents(X<sub>i</sub>) ⊆ {X<sub>i−1</sub>, ..., X<sub>1</sub>}</em></font>) is satisfied by numbering the nodes in a way that is consistent with the [[Binary Ordered Relations - Types (Partial Order - Total Order - Quasi Order)|partial order]] implicit in the graph structure

What Equation ([[AI Chapter 14 - Probabilistic Reasoning]]) says is that the Bayesian network is a correct representation of the domain only if each node is conditionally independent of its other predecessors in the node ordering, given its parents. We can satisfy this condition with this methodology:
1. <strong>Nodes</strong>: first determine the set of variables that are required to model the domain. then order them, {X<sub>1</sub>, ..., X<sub>n</sub>}. any order will work, but the resulting network will be more [[AI Chapter 14 - Probabilistic Reasoning|compact]] if the variables are ordered such that <font style="color: rgb(128,128,128);"><strong>causes</strong></font> precede <font style="color: rgb(128,128,128);"><strong>effects</strong></font>.
2. <strong>Links</strong>: for i = 1 to n:
	1. for X<sub>i</sub>choose a minimal set of parents from {X<sub>1</sub>, ..., X<sub>i−1</sub>}, such that [[AI Chapter 14 - Probabilistic Reasoning]] - <font style="color: rgb(128,128,128);"><em>P(X<sub>i</sub>| X<sub>i−1</sub>, ..., X<sub>1</sub>) = P(X<sub>i</sub>|</em> Parents(X<sub>i</sub>))</font> is satisfied
	2. For each parent insert a link from the parent to X<sub>i</sub>
	3. CPTs: Write down the conditional probability table, <strong>P</strong>(X<sub>i</sub>|Parents(X<sub>i</sub>))

Intuitively, the parents of node <strong><em><font style="color: rgb(128,128,128);">X<sub>i</sub></font></em></strong>should contain all those nodes in <strong><em><font style="color: rgb(128,128,128);">X<sub>1</sub>, ..., X<sub>i−1</sub></font></em></strong>that directly influence <font style="color: rgb(128,128,128);"><em><strong>X<sub>i</sub></strong></em></font>. For example, suppose we have completed the network in Figure 14.2 except for the choice of parents for <font style="color: rgb(128,128,128);"><em>MaryCalls</em></font>. <em><font style="color: rgb(128,128,128);">MaryCalls </font></em>is certainly influenced by whether there is a <font style="color: rgb(128,128,128);"><em>Burglary </em></font>or an <font style="color: rgb(128,128,128);"><em>Earthquake</em></font>, but not directly influenced. Intuitively, our knowledge of the domain tells us that these events influence Mary’s calling behavior only through their effect on the alarm. Also, given the state of the alarm, whether John calls has no influence on Mary’s calling. Formally speaking, we believe that the following [[Probability Independence (Marginal Independence - Conditional Independence)|conditional independence]] statement holds:

<em><font style="color: rgb(128,128,128);"><strong>P</strong>(MaryCalls | JohnCalls, Alarm, Earthquake, Burglary) =<strong> P</strong>(MaryCalls | Alarm)</font></em>

Thus, <font style="color: rgb(128,128,128);"><em>Alarm </em></font>will be the only parent node for <font style="color: rgb(128,128,128);"><em>MaryCalls</em></font>
###### Compactness
a <font style="color: rgb(128,128,128);"><strong>Bayesian network</strong></font> can often be far more <em>compact </em>than the <font style="color: rgb(128,128,128);"><strong>full joint distribution</strong></font>

the compactness is an example of a general property of <strong>locally structured </strong>(also called <strong>sparse</strong>) systems. In a locally structured system, each subcomponent interacts directly with only a bounded number of other components, regardless of the total number of components. Local structure is usually associated with linear rather than exponential growth in complexity. In the case of Bayesian networks, it is reasonable to suppose that in most domains each random variable is directly influenced by at most k others, for some constant k. If we assume n Boolean variables for simplicity, then the amount of information needed to specify each conditional probability table will be at most 2<sup>k</sup>numbers, and the complete network can be specified by n2<sup>k</sup>numbers. In contrast, the joint distribution contains 2<sup>n</sup>numbers. To make this concrete, suppose we have n = 30 nodes, each with five parents (k = 5). Then the Bayesian network requires 960 numbers, but the full joint distribution requires over a billion
###### Node Ordering

![[AI Chapter 14 - Probabilistic Reasoning/Screen Shot 2019-04-20 at 5.25.55 PM.png|397x250]]

Even in a locally structured domain, we will get a compact Bayesian network only if we choose the <strong>node ordering</strong> well. What happens if we happen to choose the wrong order? Consider the burglary example again. Suppose we decide to add the nodes in the order \[<font style="color: rgb(128,128,128);"><em>MaryCalls</em></font>, <font style="color: rgb(128,128,128);"><em>JohnCalls</em></font>, <em><font style="color: rgb(128,128,128);">Alarm</font></em>, <em><font style="color: rgb(128,128,128);">Burglary</font></em>, <em><font style="color: rgb(128,128,128);">Earthquake</font></em>\]. We then get the somewhat more complicated network shown in [[AI Chapter 14 - Probabilistic Reasoning|Figure 14.3(a)]]. The process goes as follows:
- <strong>Adding <em>MaryCalls</em></strong>: No parents.
- <strong>Adding <em>JohnCalls</em></strong>: If Mary calls, that probably means the alarm has gone off, which of course would make it more likely that John calls. Therefore, <font style="color: rgb(128,128,128);"><em>JohnCalls </em></font>needs <font style="color: rgb(128,128,128);"><em>MaryCalls </em></font>as a parent.
- <strong>Adding <em>Alarm</em></strong>: Clearly, if both call, it is more likely that the alarm has gone off than if just one or neither calls, so we need both <font style="color: rgb(128,128,128);"><em>MaryCalls </em></font>and <font style="color: rgb(128,128,128);"><em>JohnCalls </em></font>as parents.
- <strong>Adding <em>Burglary</em></strong>: If we know the alarm state, then the call from John or Mary might give us information about our phone ringing or Mary’s music, but not about burglary: <em><font style="color: rgb(128,128,128);"><strong>P</strong>(Burglary | Alarm, JohnCalls, MaryCalls) = <strong>P</strong>(Burglary | Alarm) </font></em>Hence we need just <font style="color: rgb(128,128,128);"><em>Alarm </em></font>as parent.
- <strong>Adding <em>Earthquake</em></strong>: If the alarm is on, it is more likely that there has been an earthquake. (The alarm is an earthquake detector of sorts.) But if we know that there has been a burglary, then that explains the alarm, and the probability of an earthquake would be only slightly above normal. Hence, we need both <font style="color: rgb(128,128,128);"><em>Alarm </em></font>and <font style="color: rgb(128,128,128);"><em>Burglary </em></font>as parents

The resulting network has 3 more links than the original network in [[AI Chapter 14 - Probabilistic Reasoning]] and requires three more probabilities to be specified

\[<font style="color: rgb(128,128,128);"><em>MaryCalls</em></font>, <font style="color: rgb(128,128,128);"><em>JohnCalls</em></font>, <font style="color: rgb(128,128,128);"><em>Earthquake</em></font>, <font style="color: rgb(128,128,128);"><em>Burglary</em></font>, <em>Alarm</em>\] - is a <font style="color: rgb(128,0,0);">bad</font> node ordering as shown in [[AI Chapter 14 - Probabilistic Reasoning|Figure 14.3(b)]]
\[<font style="color: rgb(128,128,128);"><em>Earthquake</em></font>, <font style="color: rgb(128,128,128);"><em>Burglary<font style="color: rgb(0,51,102);">,</font> <font style="color: rgb(128,128,128);"><em>Alarm<font style="color: rgb(0,51,102);">,</font> <font style="color: rgb(128,128,128);"><em>MaryCalls</em></font><font style="color: rgb(0,51,102);">,</font> <font style="color: rgb(128,128,128);"><em>JohnCalls</em></font></em></font></em></font>\] - is a <font style="color: rgb(51,153,102);">good</font> node ordering as shown in [[AI Chapter 14 - Probabilistic Reasoning]]
### Conditional Independence Relations in Bayesian Networks

[[AI Chapter 14 - Probabilistic Reasoning]] provides a <font style="color: rgb(128,128,128);"><strong>“numerical” semantics</strong></font> for Bayesian Networks in terms of the representation of the full joint distribution

we can also go in the other direction. We can start from a <font style="color: rgb(128,128,128);"><strong>“topological” semantics</strong></font> that specifies the conditional independence relationships encoded by the graph structure, and from this we can derive the <strong><font style="color: rgb(128,128,128);">“numerical” semantics </font></strong>

![[AI Chapter 14 - Probabilistic Reasoning/condional independence.png|445x250]]
###### <strong>topological semantics</strong>
- specifies that each variable is conditionally independent of its non-descendants, given its parents
- for example, in[[AI Chapter 14 - Probabilistic Reasoning|Figure 14.2]], <em>JohnCalls </em>is independent of <em>Burglary</em>, <em>Earthquake</em>, and <em>MaryCalls </em>given the value of <em>Alarm</em>
- this property is illustrated in Figure 14.4(a)

###### implied by topological semantics
- a node is conditionally independent of all other nodes in the network, given its parents, children, and children’s parents—that is, given its <strong>Markov blanket</strong>.
- for example, <em>Burglary </em>is independent of <em>JohnCalls </em>and <em>MaryCalls</em>, given <em>Alarm </em>and <em>Earthquake</em>
- this property is illustrated in Figure 14.4(b)

# Efficient Representations of Conditional Distributions
if the maximum number of parents = k, filling in the CPT for a node requires up to O(2<sup>k</sup>) numbers Usually the relationship between parents and the child can be describable by a <strong>canonical distribution </strong>that fits some standard pattern. In such cases, the complete CPT table can be specified by naming the pattern and perhaps supplying a few parameters—much easier than supplying an exponential number of parameters 
### Deterministic Nodes
- a simple example of canonical distribution
- a deterministic node has its value specified exactly by the values of its parents, with no uncertainty
- The relationship can be a logical one: for example, the relationship between the parent nodes <font style="color: rgb(128,128,128);"><em>Canadian</em></font>, <font style="color: rgb(128,128,128);"><em>US</em></font>, <font style="color: rgb(128,128,128);"><em>Mexican </em></font>and the child node <font style="color: rgb(128,128,128);"><em>NorthAmerican </em></font>is simply that the child is the disjunction of the parents
- The relationship can also be numerical: for example, if the parent nodes are the prices of a particular model of car at several dealers and the child node is the price that a bargain hunter ends up paying, then the child node is the minimum of the parent values; or if the parent nodes are a lake’s inflows (rivers, runoff, precipitation) and outflows (rivers, evaporation, seepage) and the child is the change in the water level of the lake, then the value of the child is the sum of the inflow parents minus the sum of the outflow parents

### Noisy-OR Relation
- is a generalization of the logical OR. In propositional logic, we might say that Fever is true if and only if Cold, Flu, or Malaria is true. The noisy-OR model allows for uncertainty about the ability of each parent to cause the child to be true—the causal relationship between parent and child may be inhibited, and so a patient could have a cold, but not exhibit a fever
- First, it assumes that all the possible causes are listed. (If some are missing, we can always add a so-called leak node that covers “miscellaneous causes.”) Second, it assumes that inhibition of each parent is independent of inhibition of any other parents: for example, whatever inhibits Malaria from causing a fever is independent of whatever inhibits Flu from causing a fever. Given these assumptions, Fever is false if and only if all its true parents are inhibited, and the probability of this is the product of the inhibition probabilities q for each parent
- In general, noisy logical relationships in which a variable depends on k parents can be described using O(k) parameters instead of O(2<sup>k)</sup>for the full conditional probability table (as shown in the following example)
- Let us suppose these individual inhibition probabilities are as follows:
  <em>q<sub>cold</sub>= P(¬fever | cold, ¬flu, ¬malaria) = 0.6
  q<sub>flu</sub>= P(¬fever | ¬cold, flu, ¬malaria) = 0.2
  q<sub>malaria</sub>= P(¬fever | ¬cold, ¬flu, malaria) = 0.1</em>
- Then, from this information and the noisy-OR assumptions, the entire CPT can be built. The general rule is that
  
  > [!list-indent-undo]
  > > [!indent]
  > > ![[AI Chapter 14 - Probabilistic Reasoning/1.png|310]]
- where the product is taken over the parents that are set to true for that row of the CPT. The following table illustrates this calculation
  
  > [!list-indent-undo]
  > > [!indent]
  > > ![[AI Chapter 14 - Probabilistic Reasoning/2.png|340x150]]

### Bayesian Nets With Continuous Variables
###### <strong>Methods in Dealing With Continuous Values</strong>
- <strong>discretization</strong> - dividing up the possible values into a fixed set of intervals (e.g. temperatures could be divided into (\<0oC), (0oC−100oC), and (\>100oC))
- <strong>probability density functions </strong>such as Gaussian (or normal) distribution <em>N(μ,σ<sup>2</sup>)(x</em><em>)</em> has the mean <em>μ </em>and the variance <em>σ<sup>2</sup> </em>as parameters
- <strong>nonparametric </strong><strong>representation</strong> - define the conditional distribution implicitly with a collection of instances, each containing specific values of the parent and child variables

###### <strong>Hybrid Bayesian Network</strong>
- <strong>hybrid Bayesian network</strong> is a network with both discrete and continuous variables
- To specify a hybrid network, we have to specify two new kinds of distributions:
	- the conditional distribution for a continuous variable given discrete or continuous parents
	- the conditional distribution for a discrete variable given continuous parents
- Consider the simple example in Figure 14.5, in which a customer buys some fruit depending on its cost, which depends in turn on the size of the harvest and whether the government’s subsidy scheme is operating
  
  > [!list-indent-undo]
  > > [!indent]
  > > ![[AI Chapter 14 - Probabilistic Reasoning/hybrid Bayesian network.png|450]]
	- variable <font style="color: rgb(128,128,128);"><em>Cost </em></font>is continuous and has continuous and discrete parents
	- variable <font style="color: rgb(128,128,128);"><em>Buys </em></font>is discrete and has a continuous parent
- For the <font style="color: rgb(128,128,128);"><em>Cost </em></font><em>continuous</em>variable with 2 parents: discrete variable <font style="color: rgb(128,128,128);"><em>Subsidy</em></font> and continuous variable <font style="color: rgb(128,128,128);"><em>Harvest</em></font>, we need to specify <font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cost | Harvest, Subsidy)</em></font>
	- the <strong>discrete </strong><strong>parent <font style="color: rgb(128,128,128);"><em>Subsidy</em></font></strong> is handled by <strong>enumeration</strong>—that is, by specifying both <em><font style="color: rgb(128,128,128);"><strong>P</strong>(Cost | Harvest, subsidy</font></em><em><font style="color: rgb(128,128,128);">)</font></em> and <font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cost | Harvest , ¬subsidy)</em></font>
	- the <strong>continuous parent </strong><font style="color: rgb(128,128,128);"><em><strong>Harvest</strong> </em></font>is handled by specifying how the distribution over the <font style="color: rgb(128,128,128);"><em>cost </em></font><font style="color: rgb(128,128,128);"><em>c </em></font>depends on the continuous value <em><font style="color: rgb(128,128,128);">h </font></em>of <font style="color: rgb(128,128,128);"><em>Harvest </em></font>the most common choice is the <strong>linear Gaussian </strong><strong>distribution</strong>, in which the child has a Gaussian distribution whose mean μ varies linearly with the value of the parent and whose standard deviation σ is fixed. We need two distributions: one for <font style="color: rgb(128,128,128);"><em>subsidy </em></font>and one for <em><font style="color: rgb(128,128,128);">¬subsidy </font></em>with different parameters:
> [!list-indent-undo]
> > [!indent]
> > ![[AI Chapter 14 - Probabilistic Reasoning/linear Gaussian distribution.png|500]]
	  
	  the conditional distribution for Cost is specified by naming the linear Gaussian distribution and providing the parameters at, bt, σt, af , bf , and σf . Figures 14.6(a) and (b) show these two relationships

> [!list-indent-undo]
> > [!indent]
> > ![[AI Chapter 14 - Probabilistic Reasoning/linear gaussian distribution graphs.png|600]]
	  
	  Notice that in each case the slope is negative, because cost decreases as supply increases. (Of course, the assumption of linearity implies that the cost becomes negative at some point; the linear model is reasonable only if the harvest size is limited to a narrow range.) Figure 14.6(c) shows the distribution P(c|h), averaging over the two possible values of Subsidy and assuming that each has prior probability 0.5
- For the discrete variable <em><font style="color: rgb(128,128,128);">Buys</font></em> with a continuous variable parent <font style="color: rgb(128,128,128);"><em>Cost</em></font>
	- It seems reasonable to assume that the customer will buy if the cost is low and will not buy if it is high and that the probability of buying varies smoothly in some intermediate region. In other words, the conditional distribution is like a<strong> “soft” threshold function</strong>
	- 2 methods for this "soft" threshold function:
		- <strong>probit distribution </strong>- [[AI Chapter 14 - Probabilistic Reasoning|Figure 14.7(a)]]
			- uses the standard normal distribution to produce a soft threshold:
> [!list-indent-undo]
> > [!indent]
> > ![[AI Chapter 14 - Probabilistic Reasoning/standard normal distribution.png|200]]
- 
	- 
		- 
			- Then the probability of Buys given Cost might be
> [!list-indent-undo]
> > [!indent]
> > ![[AI Chapter 14 - Probabilistic Reasoning/standard normal distribution use.png|301]]
- 
	- 
		- 
			- which means that the cost threshold occurs around μ, the width of the threshold region is proportional to σ, and the probability of buying decreases as cost increases
		- <strong>logit distribution </strong>- [[AI Chapter 14 - Probabilistic Reasoning|Figure 14.7(b)]]

  > [!list-indent-undo]
  > > [!indent]
  > > ![[AI Chapter 14 - Probabilistic Reasoning/probit and logit.png|463x250]]

# Exact Inference of Bayesian Networks
the basic task for any probabilistic inference system is to compute the posterior probability distribution for a set of query variables, given some observed event—that is, some assignment of values to a set of evidence variables.

In this section we discuss exact algorithms for computing posterior probabilities and will consider the complexity of this task. It turns out that the general case is intractable, so section [[AI Chapter 14 - Probabilistic Reasoning]] covers methods for approximate inference
###### Exact Algorithms
- [[AI Chapter 14 - Probabilistic Reasoning]]
- [[AI Chapter 14 - Probabilistic Reasoning]]

### Computing Posterior Probability Distribution - <font style="color: rgb(128,0,0);">Simple Single Query Variable</font>

to simplify the presentation, we will consider only one query variable at a time:
- X denotes the query variable
- <strong>E </strong>denotes the set of evidence variables E<sub>1</sub>, ..., E<sub>m</sub>
- <strong>e </strong>is a particular observed event
- <strong>Y </strong>will denotes the non-evidence, non-query variables Y<sub>1</sub>, ..., Y<sub>l</sub>(called the hidden variables)

thus, the complete set of variables is <strong>X </strong>= {X} ∪ <strong>E </strong>∪ <strong>Y</strong>a typical query asks for the posterior probability distribution <strong>P</strong>(X|<strong>e</strong>)

In the burglary network shown below, we might observe the event in which <font style="color: rgb(128,128,128);"><em>JohnCalls=true </em></font>and <em><font style="color: rgb(128,128,128);">MaryCalls=true</font></em>. We could then ask for, say, the probability that a burglary has occurred:

<font style="color: rgb(128,128,128);"><em><strong>P</strong>(Burglary | JohnCalls=true, MaryCalls=true) = ⟨0.284, 0.716⟩</em></font>

![[AI Chapter 14 - Probabilistic Reasoning/Bayesian network for this domain.png|446x250]]
###### Inference by Enumeration

a query <strong>P</strong>(X|<strong>e</strong>) is a conditional probability and as [[AI Chapter 13 - Quantifying Uncertainty|Chapter 13]] has explained [[AI Chapter 13 - Quantifying Uncertainty|general inference procedure]] showing that conditional probabilities can be computed by summing terms from the full joint distribution:

<font style="color: rgb(128,128,128);"><em><font style="color: rgb(0,0,0);">Equation 13.9 -</font><strong> P</strong>(X|<strong>e</strong>) = α <strong>P</strong>(X,<strong>e</strong>) = α <strong>Σ<sub>y</sub></strong> <strong>P</strong>(X,<strong>e</strong>,<strong>y</strong>)</em><font style="color: rgb(0,0,0);">, where<font style="color: rgb(128,128,128);"> <strong>y</strong></font> is a particular un-observed event (<strong>y</strong> is a grounded instantiation of non-evidence, non-query variables <strong>Y</strong>) </font></font>

Now, a <font style="color: rgb(128,128,128);"><strong>Bayesian network</strong></font> gives a complete representation of the full joint distribution. More specifically, [[AI Chapter 14 - Probabilistic Reasoning]] shows that the terms P(x, <strong>e</strong>, <strong>y</strong>) in the joint distribution can be written as products of conditional probabilities from the network. Therefore, a posterior conditional query can be answered using a <font style="color: rgb(128,128,128);"><strong>Bayesian network</strong></font> by computing sums of products of conditional probabilities from the network

For example, the query <font style="color: rgb(128,128,128);"><em><strong>P</strong>(Burglary | JohnCalls=true, MaryCalls=true)</em></font>. The hidden variables for this query are <font style="color: rgb(128,128,128);"><em>Earthquake </em></font>and <font style="color: rgb(128,128,128);"><em>Alarm</em></font>. From [[AI Chapter 14 - Probabilistic Reasoning]] we have:

<font style="color: rgb(128,128,128);"><em><strong>P</strong>(B | j,m) = α <strong>P</strong>(B,j,m) = α <strong>Σ</strong><sub>e</sub><strong>Σ</strong><sub>a</sub> <strong>P</strong>(B,j,m,e,a)</em></font>

The semantics of <font style="color: rgb(128,128,128);"><strong>Bayesian networks</strong></font> [[AI Chapter 14 - Probabilistic Reasoning]] then gives us an expression in terms of CPT entries. For simplicity we do this just for <font style="color: rgb(128,128,128);"><em>Burglary=true</em><font style="color: rgb(0,0,0);">:</font></font>

<font style="color: rgb(128,128,128);"><em>P(b | j,m) = α <strong>Σ</strong><sub>e</sub><strong>Σ</strong><sub>a</sub>P(b) P(e) P(a|b,e) P(j|a) P(m|a)</em></font>

To compute this expression, we have to add four terms, each computed by multiplying five numbers. In the worst case, where we have to sum out almost all the variables, the complexity of the algorithm for a network with n Boolean variables is O(n2<sup>n</sup>)

An improvement can be obtained from the following simple observations: the P(b) term is a constant and can be moved outside the summations over a and e, and the P(e) term can be moved outside the summation over a. Hence, we have:

<font style="color: rgb(128,128,128);"><em>P(b | j,m) = α P(b) <strong>Σ</strong><sub>e</sub> P(e) <strong>Σ</strong><sub>a</sub>P(a|b,e) P(j|a) P(m|a)</em></font>

Using the numbers from [[AI Chapter 14 - Probabilistic Reasoning]], we obtain:

<em>P(b | j,m) = α × 0.00059224
P(¬b|j,m) = α × 0.0014919</em>

hence:

<em><strong>P</strong>(B | j, m) = α ⟨0.00059224, 0.0014919⟩
<strong>P</strong>(B | j, m) ≈ ⟨0.284, 0.716⟩</em>

The structure of <font style="color: rgb(128,128,128);"><em>P(b | j,m)</em></font> computation is shown in Figure 14.8 below
![[AI Chapter 14 - Probabilistic Reasoning/The structure of the expression shown in Equation (14.4).png|382x250]]![[AI Chapter 14 - Probabilistic Reasoning/enumeration algorithm for answering queries on Bayesian networks.png|389x250]]

The ENUMERATION-ASK algorithm in Figure 14.9 evaluates such trees using depth-first recursion. The algorithm is very similar in structure to the backtracking algorithm for solving CSPs (Figure 6.5) and the DPLL algorithm for satisfiability (Figure 7.17).

The space complexity of ENUMERATION-ASK is only linear in the number of variables: the algorithm sums over the full joint distribution without ever constructing it explicitly. Unfortunately, its time complexity for a network with n Boolean variables is always O(2<sup>n</sup>) better than the O(n 2<sup>n</sup>) for the simple approach described earlier, but still rather grim.

Note that the tree in Figure 14.8 makes explicit the repeated sub-expressions evaluated by the algorithm. The products P(j|a) P(m|a) and P(j|¬a) P(m|¬a) are computed twice, once for each value of e. The next section describes a general method that avoids such wasted computations
###### The Variable Elimination Algorithm
<font style="color: rgb(255,0,0);"><strong>TODO page 543 of AI Textbook 3<sup>rd</sup> Edition</strong></font>
###### The Complexity of Exact Inference

the complexity of exact inference in <font style="color: rgb(128,128,128);"><strong>Bayesian networks</strong></font> depends strongly on the structure of the network

<strong>singly connected </strong><strong>networks</strong> or <strong>polytrees</strong>
- the time and space complexity of exact inference in polytrees is linear in the size of the network
- the size is defined as the number of CPT entries; if the number of parents of each node is bounded by a constant, then the complexity will also be linear in the number of nodes.

<strong>connected </strong><strong>networks</strong>
- variable elimination can have exponential time and space complexity in the worst case, even when the number of parents per node is bounded
- e.g. see [[AI Chapter 14 - Probabilistic Reasoning|Figure 14.12(a)]]

###### Clustering Algorithms

The basic idea of clustering is to join individual nodes of the network to form cluster nodes in such a way that the resulting network is a polytree

![[AI Chapter 14 - Probabilistic Reasoning/Figure 14.12.png|492x250]]
# Approximate Inference in Bayesian Networks

2 families of algorithms:
- direct sampling
- Markov chain sampling

<font style="color: rgb(255,0,0);"><strong>TODO page 549 of AI Textbook 3<sup>rd</sup> Edition</strong></font>
# Relational and First-Order Probability Models
# Other Approaches to Uncertain Reasoning
