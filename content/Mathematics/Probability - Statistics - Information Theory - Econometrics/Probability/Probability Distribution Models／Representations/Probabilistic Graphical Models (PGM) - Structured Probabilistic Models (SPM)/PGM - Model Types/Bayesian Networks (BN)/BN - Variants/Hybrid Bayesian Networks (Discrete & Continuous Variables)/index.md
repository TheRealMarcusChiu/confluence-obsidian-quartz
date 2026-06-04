---
title: "Hybrid Bayesian Networks (Discrete & Continuous Variables)"
created: 2021-09-13T05:26:46.623-05:00
modified: 2026-05-24T19:58:32.082-05:00
parent: "[[BN - Variants]]"
children: []
---
###### Methods in Dealing With Continuous Values
- <strong>discretization</strong> - dividing up the possible values into a fixed set of intervals (e.g. temperatures could be divided into (\<0<sup>o</sup>C), (0<sup>o</sup>C−100<sup>o</sup>C), and (\>100<sup>o</sup>C))
- <strong>[[Probability Distribution Function Variants - Probability／Mass／Density／Cumulative／Survivor／Hazard／Cumulative-Hazard／Inverse／Moment-Generating Distribution Functions|probability density functions]] </strong>such as [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|normal distribution]] <em>N(μ,σ<sup>2</sup>)(x</em><em>) </em>with parameters: mean <em>μ </em>and variance <em>σ<sup>2</sup></em>
- <strong>nonparametric </strong><strong>representation</strong> - define the conditional distribution implicitly with a collection of instances, each containing specific values of the parent and child variables

# Hybrid Bayesian Network

<strong>hybrid Bayesian network</strong> is a network with both discrete and continuous variables

To specify a hybrid network, we have to specify two new kinds of distributions:
- the conditional distribution for a continuous variable given discrete or continuous parents
- the conditional distribution for a discrete variable given continuous parents

# Example Hybrid Bayesian Network

Consider the following example in which a customer buys some fruit depending on its cost, which depends in turn on the size of the harvest and whether the government’s subsidy scheme is operating

![[Hybrid Bayesian Networks (Discrete & Continuous Variables)/hybrid Bayesian network.png|450]]
- variable <font style="color: rgb(128,128,128);"><em>Cost </em></font>is continuous and has continuous and discrete parents
- variable <font style="color: rgb(128,128,128);"><em>Buys </em></font>is discrete and has a continuous parent

# Representing a Continuous Variable that has Continuous and Discrete Parents

For the <font style="color: rgb(128,128,128);"><em>Cost </em></font><em>continuous</em>variable with 2 parents: discrete variable <font style="color: rgb(128,128,128);"><em>Subsidy</em></font> and continuous variable <font style="color: rgb(128,128,128);"><em>Harvest</em></font>, we need to specify <font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cost | Harvest, Subsidy)</em></font>
- the <strong>discrete </strong><strong>parent <font style="color: rgb(128,128,128);"><em>Subsidy</em></font></strong> is handled by <strong>enumeration</strong>—that is, by specifying both <em><font style="color: rgb(128,128,128);"><strong>P</strong>(Cost | Harvest, subsidy</font></em><em><font style="color: rgb(128,128,128);">)</font></em> and <font style="color: rgb(128,128,128);"><em><strong>P</strong>(Cost | Harvest , ¬subsidy)</em></font>
- the <strong>continuous parent </strong><font style="color: rgb(128,128,128);"><em><strong>Harvest</strong> </em></font>is handled by specifying how the distribution over the <font style="color: rgb(128,128,128);"><em>cost </em></font><font style="color: rgb(128,128,128);"><em>c </em></font>depends on the continuous value <em><font style="color: rgb(128,128,128);">h </font></em>of <font style="color: rgb(128,128,128);"><em>Harvest </em></font>the most common choice is the <strong>linear Gaussian </strong><strong>distribution</strong>, in which the child has a Gaussian distribution whose mean μ varies linearly with the value of the parent and whose standard deviation σ is fixed. We need two distributions: one for <font style="color: rgb(128,128,128);"><em>subsidy </em></font>and one for <em><font style="color: rgb(128,128,128);">¬subsidy </font></em>with different parameters:
  
  > [!list-indent-undo]
  > > [!indent]
  > > ![[Hybrid Bayesian Networks (Discrete & Continuous Variables)/linear Gaussian distribution.png|500]]
  
  the conditional distribution for Cost is specified by naming the linear Gaussian distribution and providing the parameters at, bt, σt, af , bf , and σf . Figures 14.6(a) and (b) show these two relationships
  
  > [!list-indent-undo]
  > > [!indent]
  > > ![[Hybrid Bayesian Networks (Discrete & Continuous Variables)/linear gaussian distribution graphs.png|600]]
  
  Notice that in each case the slope is negative, because cost decreases as supply increases. (Of course, the assumption of linearity implies that the cost becomes negative at some point; the linear model is reasonable only if the harvest size is limited to a narrow range.) Figure 14.6(c) shows the distribution P(c|h), averaging over the two possible values of Subsidy and assuming that each has prior probability 0.5

# Representing a Discrete Variable that has a Continuous Parent

For the discrete variable <em><font style="color: rgb(128,128,128);">Buys</font></em> with a continuous variable parent <font style="color: rgb(128,128,128);"><em>Cost</em></font>
- It seems reasonable to assume that the customer will buy if the cost is low and will not buy if it is high and that the probability of buying varies smoothly in some intermediate region. In other words, the conditional distribution is like a<strong> “soft” threshold function</strong>
- 2 methods for this "soft" threshold function:
- <strong>probit distribution </strong>- Figure 14.7(a)
	- uses the standard normal distribution to produce a soft threshold:
> [!list-indent-undo]
> > [!indent]
> > ![[Hybrid Bayesian Networks (Discrete & Continuous Variables)/standard normal distribution.png|200]]
- 
	- Then the probability of Buys given Cost might be
> [!list-indent-undo]
> > [!indent]
> > ![[Hybrid Bayesian Networks (Discrete & Continuous Variables)/standard normal distribution use.png|301]]
- 
	- which means that the cost threshold occurs around μ, the width of the threshold region is proportional to σ, and the probability of buying decreases as cost increases
- <strong>logit distribution </strong>- Figure 14.7(b)
	- uses the logistic function <strong><font style="color: rgb(128,128,128);"><em>1/(1 + e−x) </em></font></strong>to produce a soft threshold:
> [!list-indent-undo]
> > [!indent]
> > ![[Hybrid Bayesian Networks (Discrete & Continuous Variables)/logistic.png|301]]
- > [!list-indent-undo]
  > > [!indent]
  > > ![[Hybrid Bayesian Networks (Discrete & Continuous Variables)/probit and logit.png|463x250]]
