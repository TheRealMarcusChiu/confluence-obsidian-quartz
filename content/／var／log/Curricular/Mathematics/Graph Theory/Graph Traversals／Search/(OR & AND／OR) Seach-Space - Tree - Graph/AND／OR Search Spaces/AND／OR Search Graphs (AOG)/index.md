---
title: "AND／OR Search Graphs (AOG)"
created: 2021-09-13T05:25:35.801-05:00
modified: 2026-05-15T00:14:59.372-05:00
parent: "[[AND／OR Search Spaces]]"
children: []
---
It is often the case that a search space that is a tree can become a graph if nodes that root identical search subspaces, or correspond to identical subproblems, are identified. Any two such nodes can be merged, yielding a graph and thus reducing the size of the search space

read: [[AND／OR Search Trees (AOT)|AND/OR Search Trees (AOT)]]
# AND/OR Search Graph - Example

> [!expand]- Click here to expand...
> ![[AND／OR Search Graphs (AOG)/and-or-search-example-primal-graph.png|301]]
>
> given a constraint graph above where:
> - each variable have domain {1, 2, 3}
> - each node should be assigned a value such that adjacent nodes have different values
>
> we choose some [[Pseudo Tree - Extended Graph|pseudo tree]]. lets say it is the same as the constraint graph
>
> the [[AND／OR Search Trees (AOT)|AND/OR Search Tree]] (shown below) is guided by the [[Pseudo Tree - Extended Graph|pseudo tree]]
>
> ![[AND／OR Search Graphs (AOG)/and-or-search-tree-example.png|301]]
>
> Observe that at level 3 of the [[AND／OR Search Trees (AOT)|AND/OR Search Tree]], node ⟨𝑌, 1⟩ appears twice, (and so are ⟨𝑌, 2⟩ and ⟨𝑌, 3⟩) (not shown explicitly in the figure). Clearly however, the subtrees rooted at each of these two AND nodes are identical and they can be <strong>merged</strong> because in this tree model, any specific assignment to 𝑌 uniquely determines its rooted subtree
>
> the result after merging all identical subtrees, is an AND/OR Search Graph shown below
>
> ![[AND／OR Search Graphs (AOG)/and-or-search-graph-example.png|400]]
# AND/OR Search Graph - Intuition on Merging Subtrees (Context Minimal AND/OR Search Graph "CM-AOG")

> [!expand]- Click here to expand...
> Assume a given weighted AND/OR search graph 𝑆<sub>𝑇</sub>' of a [[Graphical Models|graphical model]] 𝒢 and assume two paths: 𝑝<sub>1</sub> and 𝑝<sub>2</sub> ending at nodes at level 𝑖 and having the same label 𝑥<sub>𝑖</sub>. These nodes can be merged iff the weighted search subgraphs rooted at these nodes are identical. The merge operator, 𝑚𝑒𝑟𝑔𝑒(𝑛𝑜𝑑𝑒-1, 𝑛𝑜𝑑𝑒-2), redirects all the arcs going into 𝑛𝑜𝑑𝑒-2 into 𝑛𝑜𝑑𝑒-1 and removes 𝑛𝑜𝑑𝑒-2 and its subgraph
>
> We can generate the AND/OR search tree and then recursively merge identical subtrees going from leaves to root. This, however, requires generating the whole search tree first, which would still be costly. It turns out that for some nodes it is possible to recognize that they can be merged by using graph properties only, namely based on their contexts. The context of a variable is the set of its ancestor variables in the pseudo tree T that completely determine the conditioned subproblems below it
>
> The general idea of a context is to identify a minimal set of ancestor variables, along the path from the root to the node in the pseudo tree, such that when assigned the same values they yield the same conditioned subproblem, regardless of value assigned to the other ancestors
>
> given:
> - a [[Graphical Models|graphical model]] 𝒢 is a tuple 𝒢 = ⟨<strong>𝐗</strong>, <strong>𝐃</strong>, 𝐒, <strong>𝐅</strong>, <strong>𝐂</strong>⟩
> - a [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] 𝐺 of 𝒢
> - a [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇 of 𝐺
> - an [[Pseudo Tree - Extended Graph|extended graph]] 𝐸 of 𝐺 relative to 𝑇
>
> ###### induced width of a pseudo tree
>
> the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced width]] of 𝐺 relative to a [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇, is the maximum [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|width]] of its induced graph of [[Pseudo Tree - Extended Graph|extended graph]] 𝐸. This induced graph is obtained by recursively connecting the parents of each node in the [[Pseudo Tree - Extended Graph|extended graph]], going from leaves to root along each branch
> ###### ancestors - descendants
> - 𝑎𝑛𝑐𝑒𝑠𝑡𝑜𝑟𝑠 of 𝑋<sub>𝑖</sub> are the nodes from 𝑋<sub>𝑖</sub>to the root of 𝑇
> - 𝑑𝑒𝑠𝑐𝑒𝑛𝑑𝑎𝑛𝑡𝑠 of 𝑋<sub>𝑖</sub>in are any nodes below 𝑋<sub>𝑖</sub> in 𝑇
>
> ###### parents - parent-separators
> - 𝑝𝑎𝑟𝑒𝑛𝑡𝑠 of 𝑋<sub>𝑖</sub> are any 𝑎𝑛𝑐𝑒𝑠𝑡𝑜𝑟𝑠 of 𝑋<sub>𝑖</sub> that are connected (in 𝐺) to either:
> 	- 𝑋<sub>𝑖</sub>
> 	- 𝑑𝑒𝑠𝑐𝑒𝑛𝑑𝑎𝑛𝑡𝑠 of 𝑋<sub>𝑖</sub>
> - 𝑝𝑎𝑟𝑒𝑛𝑡-𝑠𝑒𝑝𝑎𝑟𝑎𝑡𝑜𝑟 of 𝑋<sub>𝑖</sub> are 𝑋<sub>𝑖</sub> plus the 𝑎𝑛𝑐𝑒𝑠𝑡𝑜𝑟𝑠 of 𝑋<sub>𝑖</sub>that are connected (in 𝐺) to 𝑑𝑒𝑠𝑐𝑒𝑛𝑑𝑎𝑛𝑡𝑠 of 𝑋<sub>𝑖</sub>
>
> We use both in order to characterize 2 types of merging: AND node merge & OR node merge
> - 𝑝𝑎𝑟𝑒𝑛𝑡𝑠 of 𝑋<sub>𝑖</sub> separate the (𝑎𝑛𝑐𝑒𝑠𝑡𝑜𝑟𝑠 of 𝑋<sub>𝑖</sub>) from (𝑋<sub>𝑖</sub> and its 𝑑𝑒𝑠𝑐𝑒𝑛𝑑𝑎𝑛𝑡𝑠) in 𝐺
> - 𝑝𝑎𝑟𝑒𝑛𝑡-𝑠𝑒𝑝𝑎𝑟𝑎𝑡𝑜𝑟 of 𝑋<sub>𝑖</sub> separate the (𝑎𝑛𝑐𝑒𝑠𝑡𝑜𝑟𝑠 of 𝑋<sub>𝑖</sub>) from (its 𝑑𝑒𝑠𝑐𝑒𝑛𝑑𝑎𝑛𝑡𝑠) in 𝐺
>
> It is also easy to see that each variable 𝑋<sub>𝑖</sub> and its 𝑝𝑎𝑟𝑒𝑛𝑡𝑠 form a clique in the induced pseudo-graph
> ###### relations between contexts
> - if 𝑋 has a single child 𝑌 in 𝑇, then 𝑝𝑎𝑟𝑒𝑛𝑡-𝑠𝑒𝑝𝑎𝑟𝑎𝑡𝑜𝑟𝑠(𝑋) = 𝑝𝑎𝑟𝑒𝑛𝑡𝑠(𝑌)
> - if 𝑋 has children 𝑌<sub>1</sub>, ..., 𝑌<sub>𝑘</sub> in 𝑇, then 𝑝𝑎𝑟𝑒𝑛𝑡-𝑠𝑒𝑝𝑎𝑟𝑎𝑡𝑜𝑟𝑠(𝑋) = ⋃<sub>1≤𝑖≤𝑘</sub>\[𝑝𝑎𝑟𝑒𝑛𝑡𝑠(𝑌<sub>𝑖</sub>)\]
>
> ###### context
>
> 𝑐𝑜𝑛𝑡𝑒𝑥𝑡(𝑋<sub>𝑖</sub>) is defined as:
> - if 𝑋<sub>𝑖</sub>is an AND node
> 	- 𝑐𝑜𝑛𝑡𝑒𝑥𝑡(𝑋<sub>𝑖</sub>) = 𝑣𝑎𝑙(𝑝𝑎𝑡𝘩(𝑛<sub>1</sub>))\[𝑝𝑎𝑟𝑒𝑛𝑡-𝑠𝑒𝑝𝑎𝑟𝑎𝑡𝑜𝑟(𝑋<sub>𝑖</sub>)\]
> - if 𝑋<sub>𝑖</sub>is an OR node
> 	- 𝑐𝑜𝑛𝑡𝑒𝑥𝑡(𝑋<sub>𝑖</sub>) = 𝑣𝑎𝑙(𝑝𝑎𝑡𝘩(𝑛<sub>1</sub>))\[𝑝𝑎𝑟𝑒𝑛𝑡𝑠(𝑋<sub>𝑖</sub>)\]
>
> ###### context-based merge operators
>
> let:
> - 𝐺<sup>𝑇\*</sup>be the induced pseudo tree of 𝑇
> - 𝑝𝑎𝑡𝘩(𝑋<sub>1</sub>) & 𝑝𝑎𝑡𝘩(𝑋<sub>2</sub>) be any paths in an AND/OR search graph
>
> if both are true:
> - 𝑋<sub>1</sub>and 𝑋<sub>2</sub>are either: both AND nodes or both OR nodes
> - 𝑐𝑜𝑛𝑡𝑒𝑥𝑡(𝑋<sub>1</sub>) = 𝑐𝑜𝑛𝑡𝑒𝑥𝑡(𝑋<sub>2</sub>)
>
> then the AND/OR search subtrees rooted at 𝑋<sub>1</sub> and 𝑋<sub>2</sub> can be merged
> ###### Context Minimal AND/OR Search Graph
>
> The AND/OR Search Graph of [[Graphical Models|graphical model]] 𝒢 guided by a pseudo-tree 𝑇 that is closed under <em>context-based merge operator</em>, (namely no more merging is possible), is called the <strong>Context Minimal AND/OR Search Graph</strong> and is denoted by 𝐶𝑀<sub>𝑇</sub>(𝒢)
# AND/OR Search Graph - CM-AOG Examples

> [!expand]- Click here to expand...
> ![[AND／OR Search Graphs (AOG)/and-or-search-example-primal-graph.png|301]]
>
> given primal graph above, we will show 2 examples with of the following steps:
> - choose a guiding pseudo tree
> - form an AND/OR Search Tree based on guiding pseudo tree
> - find contexts of each variable, by computing the extended graph and then its induced graph
> - use the contexts to merge subtrees
> - end up with a context minimal AND/OR Search Graph
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Example 1",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Example 2",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "For the [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] above consider the chain pseudo tree 𝑑 = (𝑋, 𝑌, 𝑇, 𝑅, 𝑍, 𝐿, 𝑀)\n\n![[AND／OR Search Graphs (AOG)/pseudo-tree-1.png|400]]\n\nthis guiding pseudo tree would construct [[AND／OR Search Trees (AOT)|AND/OR Search Tree]] as shown below (note: since the guiding pseudo tree is a chain the AND/OR Search Tree is the same as an OR Search Tree)\n\n![[AND／OR Search Graphs (AOG)/or-search-tree.png|350]]\n\nnow we merge the subtrees of the [[AND／OR Search Trees (AOT)|AND/OR Search Tree]] based on 𝑐𝑜𝑛𝑡𝑒𝑥𝑡 whenever possible\n\n![[AND／OR Search Graphs (AOG)/chain-pseudo-tree-extended-graph-induced-graph.png|400]]\n- [[Pseudo Tree - Extended Graph|pseudo tree]] - only black edges\n- <font style=\"color: rgb(128,128,128);\">[[Pseudo Tree - Extended Graph|extended graph]]<font style=\"color: rgb(51,51,51);\"> - includes</font> gray edges</font>\n- <font style=\"color: rgb(51,102,255);\">[[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced graph]] <font style=\"color: rgb(51,51,51);\">of extended graph - includes</font> <font style=\"color: rgb(128,128,128);\">gray edges <font style=\"color: rgb(51,51,51);\">&</font> </font>blue edges</font>\n\n[[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]] of induced-graph is 3\n\nthe context of:\n- 𝑋 is 𝑋\n- 𝑌 is 𝑋𝑌\n- 𝑇 is 𝑋𝑌𝑇 (since the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced graph]] has the arc (𝑇,𝑋))\n- 𝑅 is 𝑋𝑅\n- 𝑍 is 𝑍\n- 𝐿 is 𝑍𝐿\n- 𝑀 is 𝑀\n\nThe guiding chain pseudo tree would produce an <strong>Context Minimal AND/OR Search Graph</strong> equivalent to an Context Minimal OR Search Graph (\"minimal\" means all possible merges are made)\n\nIndeed in the first three levels of the minimal OR search graph in figure belowthere are no merged nodes\n\n![[AND／OR Search Graphs (AOG)/minimal-or-search-graph.png|301]]",
>       "In contrast, for the [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] above if we consider the [[Pseudo Tree - Extended Graph|pseudo tree]] of any [[Depth First Search (DFS)|DFS]] ordering, the context of every node is itself yielding a single appearance of each AND node having the same assignment annotation in the minimal AND/OR graph\n\n![[AND／OR Search Graphs (AOG)/pseudo-tree-extended-graph-induced-graph-2.png|301]]\n\nthis guiding pseudo tree would construct an [[AND／OR Search Trees (AOT)|AND/OR Search Tree]] as shown below\n\n![[AND／OR Search Graphs (AOG)/and-or-search-tree.png|301]]\n\nnow we merge the subtrees of the [[AND／OR Search Trees (AOT)|AND/OR Search Tree]] based on 𝑐𝑜𝑛𝑡𝑒𝑥𝑡 whenever possible\n\n![[AND／OR Search Graphs (AOG)/pseudo-tree-extended-graph-induced-graph-2.png|301]]\n- [[Pseudo Tree - Extended Graph|pseudo tree]] (any DFS ordering) - black edges\n- <font style=\"color: rgb(128,128,128);\">[[Pseudo Tree - Extended Graph|extended graph]]<font style=\"color: rgb(51,51,51);\"> - same</font></font>\n- <font style=\"color: rgb(51,102,255);\"><font style=\"color: rgb(51,51,51);\">[[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced graph]] of extended graph - same</font></font>\n\n<font style=\"color: rgb(51,102,255);\"><font style=\"color: rgb(51,51,51);\">[[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]] of induced-graph is 1</font></font>\n\n<font style=\"color: rgb(51,102,255);\"><font style=\"color: rgb(51,51,51);\">the context of:</font></font>\n- 𝑋 is 𝑋\n- 𝑌 is 𝑌\n- 𝑇 is 𝑇\n- 𝑅 is 𝑅\n- 𝑍 is 𝑍\n- 𝐿 is 𝐿\n- 𝑀 is 𝑀\n\nThe guiding pseudo tree would produce an <strong>Context Minimal AND/OR Search Graph</strong> as shown below (\"minimal\" means all possible merges are made)\n\n![[AND／OR Search Graphs (AOG)/minimal-and-or-search-graph.png|301]]"
>     ]
>   ],
>   "tableStyle": "width: 100.0%;"
> }
> ```
# AND/OR Search Graph - CM-AOG Complexity

> [!expand]- Click here to expand...
> Since each context must appear only once in the CM-AOG (different appearances should be merged) the number of nodes in the CM-AOG cannot exceed the number of different contexts. Since the context’s scope size is bounded by the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]] of a [[Pseudo Tree - Extended Graph|pseudo-tree]] ordering that guides it, the size of the CM-AOG can be bounded exponentially by the [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]] along the [[Pseudo Tree - Extended Graph|pseudo-tree]] ordering
>
> given:
> - a [[Graphical Models|graphical model]] 𝒢, where:
> 	- 𝑘 bounds the domain size
> 	- 𝑛 is the number of variables
> - a [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] 𝐺 of 𝒢
> - a [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇 of 𝐺
> - an [[Pseudo Tree - Extended Graph|extended graph]] 𝐸 of 𝐺 relative to 𝑇, where 𝐸 has [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced width]] 𝑤
>
> the size of the CM-AOG 𝐶𝑀<sub>𝑇</sub>(𝒢) based on 𝑇 is:
> - 𝑂(𝑛·𝑘<sup>𝑤</sup>)
>
> since 1 ≤ 𝑤 ≤ 𝑛, then the size can range from:
> - 𝑂(𝑛·𝑘) to 𝑂(𝑛·𝑘<sup>𝑛</sup>)
>
> since the CM-AOG size is bounded by 𝑂(𝑛·𝑘<sup>𝑤</sup>), we want to find a [[Pseudo Tree - Extended Graph|pseudo tree]] ordering of minimum [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]] 𝑤
# AND/OR Search Graph - Other Stuff
```dataview
LIST
FROM ""
WHERE file.folder = [[AND／OR Search Spaces - Other Stuff]].file.folder + "/" + [[AND／OR Search Spaces - Other Stuff]].file.name
```
