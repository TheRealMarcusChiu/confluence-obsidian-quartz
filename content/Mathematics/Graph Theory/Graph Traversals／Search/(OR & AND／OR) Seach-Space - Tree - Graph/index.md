---
title: "(OR & AND／OR) Seach-Space - Tree - Graph"
created: 2021-09-13T05:25:34.636-05:00
modified: 2026-05-21T15:02:32.217-05:00
parent: "[[Graph Traversals／Search]]"
children:
  - "[[AND／OR Search Spaces]]"
  - "[[OR Search Spaces]]"
  - "[[Search Algorithms]]"
---
# Graphical Model Problem Example
![[(OR & AND／OR) Seach-Space - Tree - Graph/1-primal-graph.png|150]]
- each variable have domain {1, 2, 3}
- each node should be assigned a value such that adjacent nodes have different values
```merge-table
{
  "rows": [
    [
      {
        "content": "OR Search Tree",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "AND/OR Search Tree",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "![[(OR & AND／OR) Seach-Space - Tree - Graph/or-search-tree.png|301]]",
      "![[(OR & AND／OR) Seach-Space - Tree - Graph/ad-or-search-tree.png|301]]"
    ]
  ]
}
```
# Solution

a solution in an:
- OR Search Space is a consistent path from root to a leaf
- AND/OR Search Space is a subtree that contains the root node and where all of the following is satisfied:
	- for every OR node, it contains one of its child nodes
	- for every AND node, it contains all its child nodes
	- all its leaf nodes are consistent

###### OR Tree & AND/OR Tree Complexity

given:
- graph 𝐺 that is a balanced binary tree:
	- 𝘩 = 𝑙𝑜𝑔<sub>2</sub>𝑛 = [[Tree - Depth & Height|height]] of 𝐺
	- 𝑏 = 2 = [[Tree - Branching Degree／Factor|branching factor]] of 𝐺
	- 𝑛 is the number of variables
	- 𝑘 is the domain size

search-space-size/time complexity is:
- OR Search Tree
	- 𝑂(𝑘<sup>𝑛</sup>)
- AND/OR Search Tree
	- 𝑂((𝑏𝑘)<sup>𝘩</sup>)
	- 𝑂((2𝑘)<sup>𝘩</sup>) <font style="color: rgb(128,128,128);">\# [[Tree - Branching Degree／Factor|branching factor]] 𝑏 = 2 because 𝐺 is a balanced binary tree</font>
	- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">𝑂((2𝑘)<sup>𝑙𝑜𝑔<sub>2</sub>𝑛</sup>)</font> \# [[Tree - Depth & Height|height]] 𝘩 = 𝑙𝑜𝑔<sub>2</sub>𝑛 because 𝐺 is a balanced binary tree</font>
	- 𝑂(𝑛<sup>𝑙𝑜𝑔<sub>2</sub>(2𝑘)</sup>)
	- 𝑂(𝑛<sup>𝑙𝑜𝑔<sub>2</sub>2 + 𝑙𝑜𝑔<sub>2</sub>𝑘</sup>)
	- 𝑂(𝑛<sup>1 + 𝑙𝑜𝑔<sub>2</sub>𝑘</sup>)

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
