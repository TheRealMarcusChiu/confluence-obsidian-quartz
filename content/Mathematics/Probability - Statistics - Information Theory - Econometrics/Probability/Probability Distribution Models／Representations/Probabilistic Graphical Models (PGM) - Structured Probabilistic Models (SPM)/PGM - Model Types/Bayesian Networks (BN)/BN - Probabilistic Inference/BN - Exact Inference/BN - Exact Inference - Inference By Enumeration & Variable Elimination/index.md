---
title: "BN - Exact Inference - Inference By Enumeration & Variable Elimination"
created: 2021-09-13T05:26:43.156-05:00
modified: 2026-05-24T19:49:35.915-05:00
parent: "[[BN - Exact Inference]]"
children: []
---
read: [[Probabilistic Inference - Inference by Enumeration Algorithm|Inference by Enumeration]] & [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|Variable Elimination]]
# <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">Inference by Enumeration vs Variable Elimination in a Bayesian Network</font></font>
![[BN - Exact Inference - Inference By Enumeration & Variable Elimination/example-bayesian-network.png|100]]

Much of the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probabilistic queries]] are summations of [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|(full) joint probabilities]]

example probabilistic query <font style="color: rgb(128,128,128);">𝐏(𝑎|</font><font style="color: rgb(128,128,128);">𝑏</font><font style="color: rgb(128,128,128);">) </font>in a domain of 3 variables (𝑎, 𝑏, 𝑐):
- <font style="color: rgb(128,128,128);">𝐏(𝑎|𝑏) = 𝐏(𝑎,𝑏) / 𝐏(𝑏)</font>
- <font style="color: rgb(128,128,128);">𝐏(𝑎|𝑏) = \[ 𝛴<sub>𝑐∊𝐶</sub> 𝐏(𝑎,𝑏,𝑐)</font><font style="color: rgb(128,128,128);"> \] / \[ 𝛴<sub>𝑎∊𝐴</sub>𝛴<sub>𝑐∊</sub><sub>𝐶</sub><sub></sub>𝐏(𝑎,𝑏,𝑐) \]</font>

In order to solve this query <font style="color: rgb(128,128,128);">𝐏(𝑎|</font><font style="color: rgb(128,128,128);">𝑏</font><font style="color: rgb(128,128,128);">) </font>we need to know the value of the full joint probabilities of <font style="color: rgb(128,128,128);">𝐏(𝑎</font><font style="color: rgb(128,128,128);">,𝑏</font><font style="color: rgb(128,128,128);">,𝑐)</font>.

However, with a Bayesian Network these joint probabilities aren't given to us explicitly. We have to compute them by factorizing the joint probability into a product of conditional probabilities (via [Equation 14.2](http://confluence.marcuschiu.com/display/NOT/AI+Chapter+14+-+Probabilistic+Reasoning#AIChapter14-ProbabilisticReasoning-Equation14.2))

example factorization (based on Bayesian Network on the right):
- <font style="color: rgb(128,128,128);">𝐏(𝑎</font><font style="color: rgb(128,128,128);">,𝑏</font><font style="color: rgb(128,128,128);">,𝑐) = 𝐏(𝑎|𝑏,𝑐) 𝐏(𝑏|𝑐) 𝐏(𝑐)</font>

Therefore, the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probabilistic query]] <font style="color: rgb(128,128,128);">𝐏(𝑎|𝑏)</font> can be answered using a <font style="color: rgb(128,128,128);"><strong>Bayesian network</strong></font> by computing sums of products of conditional probabilities from the network
- <font style="color: rgb(128,128,128);">𝐏(𝑎|𝑏) = \[ 𝛴<sub>𝑐∊𝐶</sub> 𝐏(𝑎|𝑏,𝑐) 𝐏(𝑏|𝑐) 𝐏(𝑐)</font><font style="color: rgb(128,128,128);"> \] / \[ 𝛴<sub>𝑎∊𝐴</sub>𝛴<sub>𝑐∊𝐶</sub><sub></sub>𝐏(𝑎|𝑏,𝑐) 𝐏(𝑏|𝑐) 𝐏(𝑐) \]</font>

<font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);"><strong>inference by enumeration</strong> will now compute this naively</font></font>

<strong>variable elimination</strong> takes it a step further by pushing the summation operators into the factor products:
- <font style="color: rgb(128,128,128);">𝛴<sub>𝑎∊𝐴</sub>𝛴<sub>𝑐∊𝐶</sub><sub></sub>𝐏(𝑎|𝑏,𝑐) 𝐏(𝑏|𝑐) 𝐏(𝑐)</font> → <font style="color: rgb(128,128,128);">𝛴<sub>𝑐∊𝐶</sub><sub></sub>𝐏(𝑏|𝑐) 𝐏(𝑐) 𝛴<sub>𝑎∊𝐴</sub> 𝐏(𝑎|𝑏,𝑐)</font>

# Example Inference by Enumeration in a Bayesian Network
![[BN - Exact Inference - Inference By Enumeration & Variable Elimination/Bayesian network for this domain.png|446x250]] 

we would like to compute the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probabilistic query]]:
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(Burglary | JohnCalls=true, MaryCalls=true) = <strong>𝐏</strong>(B|j,m)</font>

The hidden variables for this query are <font style="color: rgb(128,128,128);"><em>Earthquake </em></font>and <font style="color: rgb(128,128,128);"><em>Alarm</em></font>. From [Equation 13.9](http://confluence.marcuschiu.com/#equation%2013.9) above we have:
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(B|j,m) = <strong>𝐏</strong>(B,j,m) / <strong>𝐏</strong>(j,m)</font>
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(B|j,m) = \[ <strong>𝛴</strong><sub>e</sub><strong>𝛴</strong><sub>a</sub> <strong>𝐏</strong>(B,j,m,e,a) \] / \[ <strong>𝛴</strong><sub>b</sub><strong>𝛴</strong><sub>e</sub><strong>𝛴</strong><sub>a</sub> <strong>𝐏</strong>(B,j,m,e,a) \]</font>

The semantics of <font style="color: rgb(128,128,128);"><strong>Bayesian networks</strong></font> [Equation 14.2](http://confluence.marcuschiu.com/display/NOT/AI+Chapter+14+-+Probabilistic+Reasoning#AIChapter14-ProbabilisticReasoning-Equation14.2) then gives us an expression in terms of [[Conditional Probability Table (CPT)|CPT]] entries. For simplicity we do this just for <font style="color: rgb(128,128,128);"><em>Burglary=true</em><font style="color: rgb(0,0,0);">:</font></font>
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(b|j,m) = \[ <strong>𝛴</strong><sub>e</sub><strong>𝛴</strong><sub>a</sub><strong>𝐏</strong>(b)<strong>𝐏</strong>(e)<strong>𝐏</strong>(a|b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \] / \[ <strong>𝛴</strong><sub>b</sub><strong>𝛴</strong><sub>e</sub><strong>𝛴</strong><sub>a</sub> <strong>𝐏</strong>(b)<strong>𝐏</strong>(e)<strong>𝐏</strong>(a|b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \]</font>

To compute this expression, we have to add four terms, each computed by multiplying five numbers. In the worst case, where we have to sum out almost all the variables, the complexity of the algorithm for a network with 𝑛 Boolean variables is 𝑂(𝑛2<sup>𝑛</sup>)

An improvement can be obtained from the following simple observations: the <font style="color: rgb(128,128,128);">𝐏</font><font style="color: rgb(128,128,128);">(b)</font> term is a constant and can be moved outside the summations over <font style="color: rgb(128,128,128);">a</font> and <font style="color: rgb(128,128,128);">e</font>, and the <font style="color: rgb(128,128,128);"><strong>𝐏</strong></font><font style="color: rgb(128,128,128);">(e)</font> term can be moved outside the summation over <font style="color: rgb(128,128,128);">a</font>. Hence, we have:
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(b|j,m) = \[ <strong>𝐏</strong>(b) <strong>𝛴</strong><sub>e</sub> <strong>𝐏</strong>(e) <strong>𝛴</strong><sub>a</sub><strong>𝐏</strong>(a|b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \] / \[ <strong>𝛴</strong><sub>b</sub><strong>𝐏</strong>(b) <strong>𝛴</strong><sub>e</sub> <strong>𝐏</strong>(e) <strong>𝛴</strong><sub>a</sub><strong>𝐏</strong>(a|b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \]</font>

Using the numbers from [Figure 14.2](http://confluence.marcuschiu.com/display/NOT/AI+Chapter+14+-+Probabilistic+Reasoning#AIChapter14-ProbabilisticReasoning-Figure14.2), we obtain:
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(b|j,m) = 0.00059224 / \[ <strong>𝛴</strong><sub>b</sub><strong>𝐏</strong>(b) <strong>𝛴</strong><sub>e</sub> <strong>𝐏</strong>(e) <strong>𝛴</strong><sub>a</sub><strong>𝐏</strong>(a|b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \]</font>
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(b|j,m) = 0.00059224 / \[ 0.00059224 + 0.0014919 \]</font>
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(b|j,m) = 0.284165171</font>

<font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">For Burglary=false we iterate through the same process as for Burglary=true</font></font>
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(<font style="color: rgb(255,0,0);">¬b</font>|j,m) = \[ <strong>𝛴</strong><sub>e</sub><strong>𝛴</strong><sub>a</sub><strong>𝐏</strong>(<font style="color: rgb(255,0,0);">¬b</font>)<strong>𝐏</strong>(e)<strong>𝐏</strong>(a|<font style="color: rgb(255,0,0);">¬b</font>,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \] / \[ <strong>𝛴</strong><sub>b</sub><strong>𝛴</strong><sub>e</sub><strong>𝛴</strong><sub>a</sub> <strong>𝐏</strong>(b)<strong>𝐏</strong>(e)<strong>𝐏</strong>(a|b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \]</font>
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(¬b|j,m) = 0.0014919 / 0.00208414</font>
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(¬b|j,m) = 0.715834829</font>
- 
> [!expand]- variable elimination method
> - <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(<font style="color: rgb(255,0,0);">¬b</font>|j,m) = \[ <strong>𝛴</strong><sub>e</sub><strong>𝛴</strong><sub>a</sub><strong>𝐏</strong>(<font style="color: rgb(255,0,0);">¬b</font>)<strong>𝐏</strong>(e)<strong>𝐏</strong>(a|<font style="color: rgb(255,0,0);">¬b</font>,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \] / \[ <strong>𝛴</strong><sub>b</sub><strong>𝛴</strong><sub>e</sub><strong>𝛴</strong><sub>a</sub> <strong>𝐏</strong>(b)<strong>𝐏</strong>(e)<strong>𝐏</strong>(a|b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \]</font>
> - <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(¬b|j,m) = \[ <strong>𝐏</strong>(¬b) <strong>𝛴</strong><sub>e</sub> <strong>𝐏</strong>(e) <strong>𝛴</strong><sub>a</sub><strong>𝐏</strong>(a|¬b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \] / \[ <strong>𝛴</strong><sub>b</sub><strong>𝐏</strong>(b) <strong>𝛴</strong><sub>e</sub> <strong>𝐏</strong>(e) <strong>𝛴</strong><sub>a</sub><strong>𝐏</strong>(a|b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \]</font><font style="color: rgb(128,128,128);"> \# this step of pushing summation operator into the factor product is called [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|variable elimination]]</font>
> - <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(¬b|j,m) = 0.0014919 / \[ <strong>𝛴</strong><sub>b</sub><strong>𝐏</strong>(b) <strong>𝛴</strong><sub>e</sub> <strong>𝐏</strong>(e) <strong>𝛴</strong><sub>a</sub><strong>𝐏</strong>(a|b,e)<strong>𝐏</strong>(j|a)<strong>𝐏</strong>(m|a) \]</font>
> - <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(¬b|j,m) = 0.0014919 / \[ 0.00059224 + 0.0014919 \]</font>
> - <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(¬b|j,m) = 0.0014919 / 0.00208414</font>
> - <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(¬b|j,m) = 0.715834829</font>

Hence:
- <font style="color: rgb(128,128,128);"><strong>𝐏</strong>(B|j,m) = ⟨0.284165171, 0.715834829⟩</font>

###### Structure of Computation

The structure of <font style="color: rgb(128,128,128);"><strong>P</strong>(b|j,m)</font> computation is shown in Figure 14.8 below
![[BN - Exact Inference - Inference By Enumeration & Variable Elimination/The structure of the expression shown in Equation (14.4).png|350]]![[BN - Exact Inference - Inference By Enumeration & Variable Elimination/enumeration algorithm for answering queries on Bayesian networks.png|355]]

The ENUMERATION-ASK algorithm in Figure 14.9 evaluates such trees using depth-first recursion. The algorithm is very similar in structure to the backtracking algorithm for solving [[Constraint Satisfaction Problems (CSP)|CSPs]] (Figure 6.5) and the DPLL algorithm for satisfiability (Figure 7.17).

The space complexity of ENUMERATION-ASK is only linear in the number of variables: the algorithm sums over the full joint distribution without ever constructing it explicitly. Unfortunately, its time complexity for a network with 𝑛 Boolean variables is always 𝑂(2<sup>𝑛</sup>) better than the 𝑂(𝑛2<sup>𝑛</sup>) for the simple approach described earlier, but still rather grim.

Note that the tree in Figure 14.8 makes explicit the repeated sub-expressions evaluated by the algorithm. The products <strong>𝐏</strong>(j|a) <strong>𝐏</strong>(m|a) and <strong>𝐏</strong>(j|¬a) P(m|¬a) are computed twice, once for each value of e. The next section describes a general method that avoids such wasted computations
# Bucket/Variable Elimination Algorithm in Bayesian Networks

TODO page 543 of [[AI - A Modern Approach - Summaries|AI Textbook]] 3<sup>rd</sup> Edition
