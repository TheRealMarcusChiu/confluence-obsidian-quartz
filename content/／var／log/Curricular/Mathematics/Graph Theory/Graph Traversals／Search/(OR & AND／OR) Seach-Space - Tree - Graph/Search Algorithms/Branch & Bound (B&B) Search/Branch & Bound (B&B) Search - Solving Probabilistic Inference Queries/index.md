---
title: "Branch & Bound (B&B) Search - Solving Probabilistic Inference Queries"
created: 2021-09-13T05:25:41.045-05:00
modified: 2021-12-11T05:21:29.682-06:00
parent: "[[Branch & Bound (B&B) Search]]"
children: []
---
> [!expand]- probabilistic inference recap
> ![[Probabilistic Inference#^excerpt]]

This article goes over using [[Branch & Bound (B&B) Search]] to solve [[Probabilistic Inference - Query／Task Types (Posterior Conditional - Prior Marginal ／ Probability of Evidence - MPE - MAP)|probabilistic queries]] over a given [[Probability Distribution Models／Representations|probabilistic model]]. Other algorithms are used to solve probabilistic inference queries [[Probabilistic Inference - Algorithms|probabilistic inference algorithms]].

B&B Algorithm only solves the <em>most probable assignment</em> queries such as:
- MPE Queries
- MAP Queries

# Solving MPE Queries

> [!expand]- Click here to expand...
> given a [[Probability Distribution Models／Representations|probabilistic model]], we design a [[(OR & AND／OR) Seach-Space - Tree - Graph|search space]]. This space would be used for B&B Algorithm
>
> the probabilistic model below is a [[Bayesian Networks (BN)|Bayesian Network]].
> ![[Branch & Bound (B&B) Search - Solving Probabilistic Inference Queries/MPE - B&B Search - bn.png]]
>
> For the rest of the examples, we choose OR-Tree as our search space type. There are other types such as:
> - OR-Graph
> - AND/OR Tree
> - AND/OR Graph
>
> ### Naive Method
>
> the naive way, we construct the entire OR-Search Tree (shown below)
> - at each leaf node, we compute its probability
> - select path with the highest leaf probability
>
> The problem is that the size of the OR-Tree is exponential to the number of variables!
>
> ![[Branch & Bound (B&B) Search - Solving Probabilistic Inference Queries/B&B naive OR-Tree.png]]
> ### B&B Method
>
> Instead of constructing the entire OR-Tree, we estimate the upper bound of each node before traversing down. If it is smaller than the current MPE solution we choose not to traverse down that sub-tree (in a sense we prune). The amount of pruning depends on the quality of the upper-bound: lower the upper-bound → more pruning → faster search
>
> ![[Branch & Bound (B&B) Search - Solving Probabilistic Inference Queries/MPE - B&B Search.png]]
> ###### Estimating Upper-Bound MPE at Each Node
>
> estimating the upper bound should be fast!
>
> methods/algorithms:
> - [[Probabilistic Inference - Mini-Cluster／Bucket Elimination|Mini-Cluster/Bucket Elimination]]
# Solving MAP Queries

> [!expand]- Click here to expand...
> same as B&B-MPE with 2 exceptions:
> - the search space consists only of the MAP variables
> - the upper-bounds algorithm is replaced with mini-bucket-elimination-MAP which:
> 	- first, summing out non-MAP variables
> 	- then, maximizing out the MAP variables
> 	- and break buckets larger than i into mini-buckets
