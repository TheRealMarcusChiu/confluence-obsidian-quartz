---
title: "AOT & AOG - Solving Probabilistic Inference Queries"
created: 2021-09-13T05:25:37.214-05:00
modified: 2021-09-13T05:25:37.214-05:00
parent: "[[AND／OR Search Spaces - Other Stuff]]"
children: []
---
[[AND／OR Search Trees (AOT)|AND/OR Search Trees]] & [[AND／OR Search Graphs (AOG)|AND/OR Search Graphs]] can be used to solve [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probabilistic inference queries]]

read: [[AOT & AOG - Using Tree Decomposition as Guiding Pseudo Tree|AOT & CM-AOG - Using Tree Decomposition as Guiding Pseudo Tree]]
### Example 1

> [!expand]- Click here to expand...
> Given a [[Bayesian Networks (BN)|Bayesian Network]] and its [[Conditional Probability Table (CPT)|Conditional Probability Tables]] for each node
>
> We want to solve the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probability of evidence query]] 𝐏(𝐷=1, 𝐸=0)
>
> This can be done in 2 ways:
> - use [[AND／OR Search Trees (AOT)|AND/OR Search Trees (AOT)]]
> - use [[AND／OR Search Graphs (AOG)|AND/OR Search Graphs (AOG)]]
>
> ```merge-table
> {
>   "rows": [
>     [
>       "![[AOT & AOG - Solving Probabilistic Inference Queries/bayesian-network.png]]",
>       {
>         "content": [
>           "###### P(A)",
>           {
>             "rows": [
>               [
>                 {
>                   "content": "A=0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "A=1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 }
>               ],
>               [
>                 "0.6",
>                 "0.4"
>               ]
>             ]
>           }
>         ]
>       },
>       {
>         "content": [
>           "###### P(B|A)",
>           {
>             "rows": [
>               [
>                 {
>                   "content": "A",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "B=0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "B=1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 }
>               ],
>               [
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.4",
>                 "0.6"
>               ],
>               [
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.1",
>                 "0.9"
>               ]
>             ]
>           },
>           "###### P(C|A)",
>           {
>             "rows": [
>               [
>                 {
>                   "content": "A",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "C=0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "C=1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 }
>               ],
>               [
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.2",
>                 "0.8"
>               ],
>               [
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.7",
>                 "0.3"
>               ]
>             ]
>           }
>         ]
>       },
>       {
>         "content": [
>           "###### P(E|A,B)",
>           {
>             "rows": [
>               [
>                 {
>                   "content": "A",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "B",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "E=0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "E=1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 }
>               ],
>               [
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.4",
>                 "0.6"
>               ],
>               [
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.5",
>                 "0.5"
>               ],
>               [
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.7",
>                 "0.3"
>               ],
>               [
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.2",
>                 "0.8"
>               ]
>             ]
>           }
>         ]
>       },
>       {
>         "content": [
>           "###### P(D|B,C)",
>           {
>             "rows": [
>               [
>                 {
>                   "content": "B",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "C",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "D=0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "D=1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 }
>               ],
>               [
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.2",
>                 "0.8"
>               ],
>               [
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.1",
>                 "0.9"
>               ],
>               [
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "0",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.3",
>                 "0.7"
>               ],
>               [
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 {
>                   "content": "1",
>                   "header": true,
>                   "bg": "#F4F5F7"
>                 },
>                 "0.5",
>                 "0.5"
>               ]
>             ]
>           }
>         ]
>       }
>     ]
>   ]
> }
> ```
> ###### AOT Method
>
> > [!expand]- Click here to expand...
> > to create an [[AND／OR Search Trees (AOT)|AND/OR Search Tree]] we need a [[Pseudo Tree - Extended Graph|pseudo tree]] of the [[Moral Graph - Moralization|moralized network]] of the [[Bayesian Networks (BN)|bayesian network]]
> >
> > <em>![[AOT & AOG - Solving Probabilistic Inference Queries/bayesian-network-to-pseudo-tree.png]]</em>
> >
> > using the pseudo tree we create the Weighted [[AND／OR Search Trees (AOT)|AND/OR Search Tree]], where each edge starting from an OR node down to an AND node is weighted with its corresponding probability value
> >
> > to compute the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probability of evidence query]] 𝐏(𝐷=1, 𝐸=0) we start at the leaves and work our way up:
> > - OR node - marginalization operator (weighted sum)
> > - AND node - combination operator (product)
> > - value of node = updated belief for sub-problem (i.e. sub-tree rooted at that node)
> >
> > ![[AOT & AOG - Solving Probabilistic Inference Queries/and-or-search-tree-for-probability.png|700]]
> ###### AOG Method
>
> > [!expand]- Click here to expand...
> > given an AND/OR Search Tree we merge any identical nodes/sub-trees to reduce the search space size
> >
> > ![[AOT & AOG - Solving Probabilistic Inference Queries/pseudo-tree-extended-graph-contexts.png]]
> >
> > we merge any nodes if they have the same context (context is explained here: [[AOT & AOG - Using Tree Decomposition as Guiding Pseudo Tree|AOT & CM-AOG - Using Tree Decomposition as Guiding Pseudo Tree]])
> >
> > ![[AOT & AOG - Solving Probabilistic Inference Queries/and-or-search-graph-for-probability.png|700]]
### Example 2

> [!expand]- Click here to expand...
> ![[AOT & AOG - Solving Probabilistic Inference Queries/AND_OR-Search-Tree-Bayesian-network.png|350]]![[AOT & AOG - Solving Probabilistic Inference Queries/AND_OR-Search-Tree-Bayesian-network-cpts.png|350]]
>
> Given a [[Bayesian Networks (BN)|Bayesian Network]] and its [[Conditional Probability Table (CPT)|Conditional Probability Tables]] for each node
>
> We want to solve the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probability of evidence query]] 𝐏(𝐺=0, 𝐻=1)
>
> This can be done in 2 ways:
> - use [[AND／OR Search Trees (AOT)|AND/OR Search Trees (AOT)]]
> - use [[AND／OR Search Graphs (AOG)|AND/OR Search Graphs (AOG)]]
>
> ###### AOT Method
>
> > [!expand]- Click here to expand...
> > to create an [[AND／OR Search Trees (AOT)|AND/OR Search Tree]] we need a [[Pseudo Tree - Extended Graph|pseudo tree]] of the [[Moral Graph - Moralization|moralized network]] of the [[Bayesian Networks (BN)|bayesian network]]
> >
> > ![[AOT & AOG - Solving Probabilistic Inference Queries/bayesian-network-to-pseudo-tree.png]]
> > [[bayesian-network-to-pseudo-tree.drawio]]
> >
> > using the pseudo tree we create the Weighted [[AND／OR Search Trees (AOT)|AND/OR Search Tree]], where each edge starting from an OR node down to an AND node is weighted with its corresponding probability value
> >
> > ![[AOT & AOG - Solving Probabilistic Inference Queries/AND_OR-Search-Tree-Weighted.png|600]]
> >
> > to compute the [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probability of evidence query]] 𝐏(𝐺=0, 𝐻=1) we start at the leaves and work our way up:
> > - OR node - marginalization operator (weighted sum)
> > - AND node - combination operator (product)
> > - value of node = updated belief for sub-problem (i.e. sub-tree rooted at that node)
> >
> > the value of the root node equals the probability of evidence
> >
> > ![[AOT & AOG - Solving Probabilistic Inference Queries/AOT-computing-probability-of-evidence.png|600]]
> ###### AOG Method
>
> > [!expand]- Click here to expand...
> > given an AND/OR Search Tree we merge any identical nodes/sub-trees to reduce the search space size
> >
> > TODO
> >
> > ![[AOT & AOG - Solving Probabilistic Inference Queries/pseudo-tree-extended-graph-contexts.png]]
> >
> > we merge any nodes if they have the same context (context is explained here: [[AOT & AOG - Using Tree Decomposition as Guiding Pseudo Tree|AOT & CM-AOG - Using Tree Decomposition as Guiding Pseudo Tree]])
> >
> > ![[AOT & AOG - Solving Probabilistic Inference Queries/AND_OR-Search-Graph-FromBayesian-Network.png|600]]
