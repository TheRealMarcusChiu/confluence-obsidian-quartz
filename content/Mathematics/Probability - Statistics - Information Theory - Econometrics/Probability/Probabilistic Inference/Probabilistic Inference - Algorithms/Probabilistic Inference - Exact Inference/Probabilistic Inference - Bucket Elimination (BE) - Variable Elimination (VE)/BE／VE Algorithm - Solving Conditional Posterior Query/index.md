---
title: "BE／VE Algorithm - Solving Conditional Posterior Query"
created: 2021-09-13T05:28:23.387-05:00
modified: 2026-05-17T02:50:21.576-05:00
parent: "[[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)]]"
children: []
---
using [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|BE/VE Algorithm]] to solve a [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|Conditional Posterior Query]]
- <font style="color: rgb(128,128,128);">𝐏(𝐐|𝐄=𝐞) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\[ 𝐏(<font style="color: rgb(128,128,128);">𝐐</font></font><font style="color: rgb(128,128,128);">, <strong>𝐇</strong>=<strong>𝐡</strong></font><font style="color: rgb(128,128,128);">, 𝐄=𝐞) \] / 𝐏(𝐄=𝐞)</font>

a generalization of [[BE／VE Algorithm - Solving Belief-Updating Query|BE/VE Algorithm - Solving Belief-Updating Query]] allowing MULTIPLE query variables
# Algorithm

input:
- [[Graphical Models|graphical model]] 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩
- evidence 𝐄=𝐞
- query variable 𝐐 ⊆ 𝐗 \\ 𝐄

output:
- the distribution of 𝐐

algorithm:
- let <strong>𝐇</strong> = 𝐗 \\ {𝐄 ∪ 𝐐}
- compute both:
	- <font style="color: rgb(128,128,128);">𝐏(𝐐, 𝐄=𝐞) = <strong>𝛴</strong><sub><strong>𝐡</strong>∊<strong>𝐇 </strong></sub>\[ 𝐏(𝐐, <strong>𝐇</strong>=<strong>𝐡</strong>, 𝐄=𝐞) \]</font>
	- <font style="color: rgb(128,128,128);">𝐏(𝐄=𝐞) = <strong>𝛴</strong><sub><strong>𝐪</strong>∊𝐐</sub>𝐏(<font style="color: rgb(128,128,128);">𝐐</font>=<strong>𝐪</strong>, 𝐄=𝐞)</font>
- then use [[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|Baye's Theorem]]:
	- <font style="color: rgb(128,128,128);">𝐏(<font style="color: rgb(128,128,128);">𝐐</font>|𝐄=𝐞) = 𝐏(<font style="color: rgb(128,128,128);">𝐐</font>, 𝐄=𝐞) / 𝐏(𝐄=𝐞)</font>

# Algorithm - Detailed

> [!expand]- Click here to expand...
> BE-posterior(<strong>𝐅</strong>, 𝐐, 𝐄=𝐞, 𝐇)
> 1. multiply factors with appropriate [[Conditional Probability Table (CPT)|conditional probability tables]] / [[MN／MRF - Potential Functions (𝜙)|potential functions]] while 𝐇 is not empty
> 2. for (remove the first variable 𝐻<sub>𝑖</sub> from 𝐇 until empty)
> 	1. <strong>𝐅</strong> = sum-out(𝐻<sub>𝑖</sub>, <strong>𝐅</strong>)
> 3. 𝐏(𝐐, 𝐄=𝐞) = product of all factors
> 4. return 𝐏(𝐐, 𝐄=𝐞) / 𝛴<sub>𝐪∊𝐐</sub> \[ 𝐏(𝐐=𝐪, 𝐄=𝐞) \]<font style="color: rgb(128,128,128);"> \# equals 𝐏(𝐐|𝐄=𝐞) because </font>[[Bayes' Rule／Theorem／Law (Prior - Posterior - Distribution - Likelihood - Probability of Evidence)|bayes theorem]]
>
> sum-out(𝑋<sub>𝑖</sub>, <strong>𝐅</strong>)
> 1. <strong>𝐅</strong><sub>𝑋<sub>𝑖</sub></sub> = collect all functions that contain variable 𝑋<sub>𝑖</sub>
> 2. 𝜙<sub>𝑋<sub>𝑖</sub></sub> = 𝛴<sub>𝑑∊𝐷<sub>𝑖</sub></sub> \[ product of all factors in <strong>𝐅</strong><sub>𝑋<sub>𝑖</sub></sub>\]
> 3. return (<strong><strong>𝐅</strong> </strong>-<strong> <strong>𝐅</strong><sub>𝑋<sub>𝑖</sub></sub></strong>) ∪ {𝜙<sub>𝑋<sub>𝑖</sub></sub>}
# BE/VE Algorithm - Example Solving Conditional Posterior Query

> [!expand]- Click here to expand...
> Let’s consider the graphical model below
>
> ![[BE／VE Algorithm - Solving Conditional Posterior Query/example-directed-graph.png|150]]
>
> we would like to compute the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|posterior marginal query]] 𝐏(A|H=h)
>
> The [[Joint Probability Distribution (Compound - Bivariate - Multivariate - Full)|full joint probability distribution]] factorizes to
>
> 𝐏(a,b,c,d,e,f,g,h) = 𝐏(a)𝐏(b)𝐏(c|b)𝐏(d|a)𝐏(e|c,d)𝐏(f|a)𝐏(g|e)𝐏(h|e,f)
>
> To calculate the conditional probability 𝐏(A|H=h), we first choose an elimination order:
>
> H, G, F, E, D, C, B
>
> We condition on the evidence node H by fixing its value to h. To treat marginalization and conditioning as formally equivalent, we can define an evidence potential 𝛿(h = h˜) whose value is one if the inner statement is true and zero otherwise. Then, we obtain
>
> 𝐏(H=h˜| e,f) = 𝛴<sub>h</sub>\[ 𝐏(h|e,f)𝛿(h=h˜) \]
>
> The conditional probability P(a|h) is calculated as:
> - 𝐏(a,h˜) = 𝛴<sub>b</sub>𝛴<sub>c</sub>𝛴<sub>d</sub>𝛴<sub>e</sub>𝛴<sub>f</sub>𝛴<sub>g</sub> 𝐏(a,b,c,d,e,f,g,h) <font style="color: rgb(128,128,128);">\# [[Marginal Probability Distribution|marginalize probability]] rule</font>
> - 𝐏(a,h˜) = 𝛴<sub>b</sub>𝛴<sub>c</sub>𝛴<sub>d</sub>𝛴<sub>e</sub>𝛴<sub>f</sub>𝛴<sub>g</sub> 𝐏(a)𝐏(b)𝐏(c|b)𝐏(d|a)𝐏(e|c,d)𝐏(f|a)𝐏(g|e)𝐏(h|e,f) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> factorize joint probability</font>
> - 𝐏(a,h˜) = 𝐏(a) 𝛴<sub>b</sub>𝐏(b) 𝛴<sub>c</sub>𝐏(c|b) 𝛴<sub>d</sub>𝐏(d|a) 𝛴<sub>e</sub>𝐏(e|c,d) 𝛴<sub>f</sub> 𝐏(f|a) 𝛴<sub>g</sub>𝐏(g|e) 𝐏(H=h˜| e,f) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> move factors/terms as far left </font>
> - 𝐏(a,h˜) = 𝐏(a) 𝛴<sub>b</sub>𝐏(b) 𝛴<sub>c</sub>𝐏(c|b) 𝛴<sub>d</sub>𝐏(d|a) 𝛴<sub>e</sub>𝐏(e|c,d) 𝛴<sub>f</sub> 𝐏(f|a) 𝛴<sub>g</sub>𝐏(g|e) 𝛴<sub>h</sub>\[ 𝐏(h|e,f)𝛿(h=h˜) \] <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> h is observed variable</font>
> - 𝐏(a,h˜) = 𝐏(a) 𝛴<sub>b</sub>𝐏(b) 𝛴<sub>c</sub>𝐏(c|b) 𝛴<sub>d</sub>𝐏(d|a) 𝛴<sub>e</sub>𝐏(e|c,d) 𝛴<sub>f</sub> 𝐏(f|a) 𝛴<sub>g</sub>𝐏(g|e) m<sub>h</sub>(e,f) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> compute innermost summation</font>
> - 𝐏(a,h˜) = 𝐏(a) 𝛴<sub>b</sub>𝐏(b) 𝛴<sub>c</sub>𝐏(c|b) 𝛴<sub>d</sub>𝐏(d|a) 𝛴<sub>e</sub>𝐏(e|c,d) 𝛴<sub>f</sub> 𝐏(f|a) m<sub>h</sub>(e,f) 𝛴<sub>g</sub>𝐏(g|e) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> move factors/terms as far left</font>
> - 𝐏(a,h˜) = 𝐏(a) 𝛴<sub>b</sub>𝐏(b) 𝛴<sub>c</sub>𝐏(c|b) 𝛴<sub>d</sub>𝐏(d|a) 𝛴<sub>e</sub>𝐏(e|c,d) 𝛴<sub>f</sub> 𝐏(f|a) m<sub>h</sub>(e,f) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> compute innermost summation</font>
> - 𝐏(a,h˜) = 𝐏(a) 𝛴<sub>b</sub>𝐏(b) 𝛴<sub>c</sub>𝐏(c|b) 𝛴<sub>d</sub>𝐏(d|a) 𝛴<sub>e</sub>𝐏(e|c,d) m<sub>f</sub>(a,e) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> compute innermost summation</font>
> - 𝐏(a,h˜) = 𝐏(a) 𝛴<sub>b</sub>𝐏(b) 𝛴<sub>c</sub>𝐏(c|b) 𝛴<sub>d</sub>𝐏(d|a) m<sub>e</sub>(a,c,d) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> compute innermost summation</font>
> - 𝐏(a,h˜) = 𝐏(a) 𝛴<sub>b</sub>𝐏(b) 𝛴<sub>c</sub>𝐏(c|b) m<sub>d</sub>(a,c) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> compute innermost summation</font>
> - 𝐏(a,h˜) = 𝐏(a) 𝛴<sub>b</sub>𝐏(b) m<sub>c</sub>(a,b) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> compute innermost summation</font>
> - 𝐏(a,h˜) = 𝐏(a) m<sub>b</sub>(a) <font style="color: rgb(128,128,128);">\#</font><font style="color: rgb(128,128,128);"> compute innermost summation</font>
>
> Therefore
> - 𝐏(a|h˜) = 𝐏(a,h˜) / 𝐏(h˜)
> - 𝐏(a|h˜) = \[ 𝐏(a) m<sub>b</sub>(a) \] / \[ 𝛴<sub>a</sub>𝐏(a) m<sub>b</sub>(a) \]
>
> ### Similarities to Graph Elimination Algorithm
>
> > [!expand]- Click here to expand...
> > read this first: [[BE／VE Algorithm - Solving Conditional Posterior Query]]
> >
> > There are mainly 2 steps in the graph elimination algorithm:
> > - moralization step
> > > [!expand]- Click here to expand...
> > > [[Moral Graph - Moralization|Moralization]] is a process of converting a directed acyclic graph (DAG) into “equivalent” undirected graph. The resulting graph is called a [[Moral Graph - Moralization|moral graph]]
> > >
> > > Its procedure is:
> > > - Starting from an input DAG
> > > - Connect nodes if they share a common child
> > > - Make directed edges to undirected edges
> > - (undirected) graph elimination step
> > > [!expand]- Click here to expand...
> > > Input moral graph & the elimination order 𝐼
> > >
> > > for each node 𝑋<sub>𝑖</sub> in 𝐼
> > > - 𝑛𝑒𝑖𝑔𝘩<em>𝑏𝑜𝑟𝑠</em> = get all remaining neighbors of 𝑋<sub>𝑖</sub>
> > > - connect each node in the set 𝑛𝑒𝑖𝑔𝘩𝑏𝑜𝑟𝑠 with every other node in the set
> > > - remove 𝑋<sub>𝑖</sub> from the graph
> >
> > ### BE/VE Algorithm vs Graph Elimination Algorithm
> >
> > As shown in the figure below, the summation step in Variable Elimination can be represented by an elimination step in graph elimination algorithm
> >
> > elimination order: H, G, F, E, D, C, B
> >
> > ![[BE／VE Algorithm - Solving Conditional Posterior Query/graph-elimination.png|700x107]]
> >
> > In addition, the intermediate terms in Elimination correspond to the elimination cliques resulted from graph elimination algorithm (Figure a)
> >
> > In addition, we can also construct a [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|clique tree (also called tree decomposition)]] to represent the elimination process (Figure b)
> >
> > ![[BE／VE Algorithm - Solving Conditional Posterior Query/cliques.png|700]]
