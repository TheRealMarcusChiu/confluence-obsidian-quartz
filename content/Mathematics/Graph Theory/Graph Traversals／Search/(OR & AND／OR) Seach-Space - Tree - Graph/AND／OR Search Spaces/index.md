---
title: "AND／OR Search Spaces"
created: 2021-09-13T05:25:35.110-05:00
modified: 2021-12-11T05:20:27.404-06:00
parent: "[[(OR & AND／OR) Seach-Space - Tree - Graph]]"
children:
  - "[[AND／OR Search Graphs (AOG)]]"
  - "[[AND／OR Search Space - Algorithms]]"
  - "[[AND／OR Search Spaces - Other Stuff]]"
  - "[[AND／OR Search Trees (AOT)]]"
---
<strong>AND/OR Search Spaces</strong> can capture the independencies in the graphical model to yield [[AND／OR Search Trees (AOT)|AND/OR Search Trees]] that are exponentially smaller than the standard search tree (OR Search Tree). AND/OR search tree is bounded exponentially by the [[Tree - Depth & Height|height]] of a [[Pseudo Tree - Extended Graph|pseudo tree]] that spans the graphical model. The AND/OR Search Tree may contain redundancy and can be removed yielding AND/OR Search Graphs. These additional savings can reduce the size of the AND/OR Search Space further to the point that it can be guaranteed to be no larger than exponentially in the graphical model [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|treewidth]]
# AND/OR Search Space - Representation Types
- [[AND／OR Search Trees (AOT)|AND/OR Search Trees (AOT)]]
- [[AND／OR Search Graphs (AOG)|AND/OR Search Graphs (AOG)]]

# AND/OR Search Space - AOT & AOG Other Stuff
```dataview
LIST
FROM ""
WHERE file.folder = [[AND／OR Search Spaces - Other Stuff]].file.folder + "/" + [[AND／OR Search Spaces - Other Stuff]].file.name
```

# AND/OR Search Space - Complexity Comparison (AOT vs AOG)

> [!expand]- Click here to expand...
> given:
> - a [[Graphical Models|graphical model]] 𝒢, where:
> 	- 𝑘 bounds the domain size
> 	- 𝑛 is the number of variables
> - a [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] 𝐺 of 𝒢
> - a [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇 of 𝐺, where 𝑇 has [[Tree - Depth & Height|height]] 𝘩
> - an [[Pseudo Tree - Extended Graph|extended graph]] 𝐸 of 𝐺 relative to 𝑇, where 𝐸 has [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced width]] 𝑤
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "###### AOT Complexity",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "###### AOG Complexity",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- memory-space complexity = 𝑂(𝑛)\n- search-space-size/time complexity = 𝑂(𝑛𝑘<sup>𝘩</sup>)\n\n<strong>[[AOT & AOG - Using Tree Decomposition as Guiding Pseudo Tree|Using Tree Decomposition as Pseudo Tree]]</strong>\n\na [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] of a [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] 𝐺 can be used as a guiding [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇\n\ngiven:\n- [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] of [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|treewidth]] 𝑤, then the height 𝘩 satisfies 𝘩 ≤ 𝑤·𝑙𝑜𝑔(𝑛)\n\nsearch-space-size/time complexity is:\n- search-space-size/time complexity = 𝑂(𝑛·𝑘<sup>𝑤·𝑙𝑜𝑔(𝑛</sup><sup>)</sup>)",
>       "- memory-space complexity = 𝑂(𝑛𝑘<sup>𝑤</sup>)\n- search-space-size/time complexity = 𝑂(𝑛𝑘<sup>𝑤</sup>)\n\n<strong>[[AOT & AOG - Using Tree Decomposition as Guiding Pseudo Tree|Using Tree Decomposition as Pseudo Tree]]</strong>\n\na [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] of a [[Hypergraphs - Primal Graphs - Dual Graphs - Cluster Graphs - Cluster Trees - Factor Graphs|primal graph]] 𝐺 can be used as a guiding [[Pseudo Tree - Extended Graph|pseudo tree]] 𝑇\n\ngiven:\n- [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|tree decomposition]] of [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|treewidth]] 𝑤\n\nsearch-space-size/time complexity is:\n- Context Minimal AND/OR Graph is bounded by 𝑂(𝑛·𝑘<sup>𝑤</sup>)\n- Context Minimal OR Search Graph is bounded by 𝑂(𝑛·𝑘<sup>𝑤·𝑙𝑜𝑔(𝑛</sup><sup>)</sup>)"
>     ]
>   ],
>   "tableStyle": "width: 99.8925%;"
> }
> ```
> ###### Summary
> - AOT is bounded exponentially by the [[Tree - Depth & Height|height]] of the pseudo tree
> - AOG is bounded exponentially by [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced-width]] of pseudo tree
>
> It is not possible to generate a pseudo tree that is optimal w.r.t. both: [[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)|induced width]] and [[Tree - Depth & Height|height]] (e.g. chain pseudo tree)
# AND/OR Search Space - Algorithms
- [[AND／OR Search Space - Algorithms|AND/OR Search Space - Algorithms]]
