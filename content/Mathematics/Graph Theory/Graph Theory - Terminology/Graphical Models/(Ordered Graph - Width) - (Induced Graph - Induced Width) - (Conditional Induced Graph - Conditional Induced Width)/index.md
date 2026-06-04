---
title: "(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)"
created: 2021-09-13T05:25:25.340-05:00
modified: 2026-05-21T15:00:43.790-05:00
parent: "[[Graphical Models]]"
children: []
---
# Ordered Graph
given an undirected graph <em>𝐆</em> = (𝑉<em>, 𝐸</em>) an <em>ordered graph</em> is a pair (<em>𝐆</em><em>, 𝑑</em>) where:
- 𝑉 = {<em>𝑣</em><sub>1</sub>, …, <em>𝑣</em><sub><em>𝑛</em></sub>} is the set of nodes
- <em>𝐸</em> is a set of arcs over 𝑉
- <em>𝑑</em> = (<em>𝑣</em><sub>1</sub>, …, <em>𝑣</em><sub><em>𝑛</em></sub>) is an ordering of the nodes

# Width
<font style="color: rgb(255,0,0);">The nodes adjacent to <em><em>𝑣</em></em> that precede it in the ordering <em>𝑑 </em>are called its <em>parents</em></font>
- <em>width of a node</em> in an ordered undirected graph is its number of parents (i.e. number of the node’s neighbors that precede it in the ordering)
- <em>width of an ordering <em>𝑑</em></em>, denoted <em>𝑤</em>(<em>𝑑</em>), is the maximum width over all nodes
- <em>width of a graph</em>, denoted 𝑤(<em>𝐆</em>), is the minimum width of all the orderings of the graph

# Induced Graph
The <em>induced graph</em> <em>𝐆<sup>𝑖</sup></em>of an ordered graph (<em>𝐆</em><em>, 𝑑</em>) is as follows:
- the nodes of <em>𝐆</em> are processed from last to first (top to bottom) along node ordering <em>𝑑</em>
- when a node <em><em>𝑣</em></em> is processed, all of its parents are connected with an edge

THEOREM: the resulting induced graph is triangulated (i.e. [[Chordal Graphs|chordal graph]] where there are no loops of length \> 3 without a "bridge")
# Induced Width (= [[Cluster／Clique／Join／Junction Trees - Tree Decompositions - Tree-Width|Tree Width]])
<font style="color: rgb(255,0,0);">The nodes adjacent to <em><em>𝑣</em></em> that precede it in the ordering <em>𝑑 </em>are called its <em>parents</em></font>
- <em>induced width</em> of a node in a graph is its number of parents in the induced graph (<em>𝐆<em><sup>𝑖</sup></em></em><em>, 𝑑</em>)
- <em>induced width</em> of an ordered graph 𝑤<sup>𝑖</sup>(𝑑) is the maximum <em>induced width</em> over all nodes in the induced graph (<em>𝐆<em><sup>𝑖</sup></em></em><em>, 𝑑</em>)
- <em>induced width</em> of a graph 𝑤<sup>𝑖</sup>(<em>𝐆</em>) is the minimal <em>induced width</em> over all its orderings

A rather important observation is that a graph is a tree (has no cycles) if and only if it has an induced-width = 1

The task of finding the [[Pseudo Tree - Minimal／Minimum (Height／Depth - Induced-Width - Tree-Width)|minimal induced width of a graph]] (over all possible orderings) is [[Complexity Classes|NP-Complete]] (Arnborg, 1985)

[[Tree Width vs Induced Width]]
# Example Induced Graphs & Induced Width

> [!expand]- Click here to expand...
> ```merge-table
> {
>   "rows": [
>     [
>       "![[(Ordered Graph - Width) - (Induced Graph - Induced Width) - (Conditional Induced Graph - Conditional Induced Width)/ordered-graph-and-induced-graph (1).png|400]]\n\n[[ordered-graph-and-induced-graph.drawio]]",
>       "a. depicts graph 𝐆\nb. 𝑑<sub>1</sub> = (𝐸, 𝐷, 𝐶, 𝐹, 𝐴, 𝐵)\nc. 𝑑<sub>2</sub> = (𝐵, 𝐴, 𝐶, 𝐹, 𝐸, 𝐷)d. 𝑑<sub>3</sub> = (𝐵, 𝐷, 𝐸, 𝐶, 𝐴, 𝐹)\n\nfor each ordering 𝑑:\n- <em>ordered graph</em> - black edges\n- <font style=\"color: rgb(128,128,128);\"><em>induced graph</em> - includes gray edges</font>"
>     ]
>   ]
> }
> ```
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "rowspan": 2
>       },
>       {
>         "content": "Along 𝑑<sub>1</sub>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null,
>       {
>         "content": "Along 𝑑<sub>2</sub>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null,
>       {
>         "content": "Along 𝑑<sub>3</sub>",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null
>     ],
>     [
>       {
>         "content": "Width",
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Induced Width",
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Width",
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Induced Width",
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Width",
>         "bg": "#F4F5F7",
>         "align": "center"
>       },
>       {
>         "content": "Induced Width",
>         "bg": "#F4F5F7",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "𝐴",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "4",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "2",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "2",
>         "bg": "#fffae6",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "𝐵",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "3",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "3",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "𝐶",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "2",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "𝐷",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "𝐸",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "𝐹",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "0",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "3",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#fffae6",
>         "align": "center"
>       }
>     ],
>     [
>       {
>         "content": "Max",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "3",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "4",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "1",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "2",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "2",
>         "bg": "#deebff",
>         "align": "center"
>       }
>     ]
>   ]
> }
> ```
>
> The <em>width</em> of the graph 𝐆 is 1
>
> The <em>induced width</em> of the graph 𝐆 is also 1
# Conditional Induced Graph
The <em>conditional</em> <em>induced graph</em> <em>𝐆<sup>𝑐𝑖</sup></em>of an ordered graph (<em>𝐆</em><em>, 𝑑</em>) given evidence variables 𝐄 is obtained as follows:
- obtain induced graph <em>𝐆<sup>𝑐𝑖</sup></em>
- disregard all edges connected to observed nodes in <em>𝐆<sup>𝑐𝑖</sup></em>
- the resulting graph is a conditional induced graph

# Conditional Induced Width
conditional induced width
- conditional induced width of an ordered graph (<em>𝐆</em><em>, 𝑑</em>) given a set of evidence variables 𝐄, denoted as 𝑤<sup>𝑖</sup><sub>𝐄</sub>(𝑑), is the width of the conditional induced graph (<em>𝐆<em><sup>𝑖</sup></em></em><em>, 𝑑</em>)
- conditional induced width of a graph <em>𝐆 </em>given a set of evidence variables 𝐄, denoted as 𝑤<sup>𝑖</sup>(<em>𝐆</em>), is the minimal conditional induced width over all its orderings
