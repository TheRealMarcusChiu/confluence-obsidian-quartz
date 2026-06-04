---
title: "Topology"
created: 2021-09-13T05:29:40.651-05:00
modified: 2023-08-04T13:30:16.292-05:00
parent: "[[Topological Spaces]]"
children:
  - "[[Discrete Topology]]"
  - "[[Distance Metric Topology]]"
  - "[[Extension Topology (Open & Closed Extension Topology)]]"
  - "[[Indiscrete Topology - Trivial Topology]]"
  - "[[Lower Limit Topology]]"
  - "[[Particular Point Topology - Sierpinski Space - Finite／Countable／Uncountable Particular Point Topology]]"
  - "[[Product Topology]]"
  - "[[Quotient Topology]]"
  - "[[Topology (Theory)]]"
  - "[[Vector Topology]]"
---
###### Topology (𝜏)
````excerpt
- used to measure closeness
- when paired with its elements (𝑋) it forms a [[Topological Spaces|topological space (𝑋,𝜏)]]
- a <em>topology (𝜏)</em> on a set 𝑋 is defined as a collection of subsets of 𝑋, called open sets<strong>,</strong> and satisfies the following axioms:
	1. the [empty set](https://en.wikipedia.org/wiki/Empty_set) and 𝑋 itself belong to 𝜏:
		1. 𝑋∈𝜏 and ∅∈𝜏
	2. any arbitrary (finite or infinite) union of sets of 𝜏 belongs to 𝜏:
		1. if {𝑈<sub>𝑖</sub> : 𝑖∈𝐼} ⊆ 𝜏 then ⋃<sub>𝑖∊𝐼</sub>𝑈<sub>𝑖</sub> ∈ 𝜏
	3. the intersection of any finite number of sets of 𝜏 belongs to 𝜏:
		1. if 𝑈<sub>1</sub>, …, 𝑈<sub>𝑛</sub> ∈ 𝜏 then 𝑈<sub>1</sub> ∩ ⋯ ∩ 𝑈<sub>𝑛</sub> ∈ 𝜏
- a [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric (𝑑)]] induces a <em>t</em><em>opology (𝜏<sub>𝑑</sub>)</em> where the set { 𝐵<sub>𝑑</sub>(𝑥,𝜖) | 𝑥∈𝑋 and 𝜖\>0 } forms the [[Basis Vectors|basis]] of a [[Distance Metric Topology|metric topology (𝜏𝑑)]], where 𝐵<sub>𝑑</sub>(𝑥,𝜖) is an [[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|epsilon-ball/open-set]] defined as 𝐵<sub>𝑑</sub>(𝑥,𝜖) = { 𝑦∈𝑋 : 𝑑(𝑥,𝑦) \< 𝜖 }
````
^excerpt

# Topology - Types

[https://en.wikipedia.org/wiki/List_of_topologies](https://en.wikipedia.org/wiki/List_of_topologies)

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Distance Metric Topology]]",
        "bg": "#F4F5F7"
      },
      "- a [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric (𝑑)]] induces a <em>t</em><em>opology (𝜏)</em> where the set { 𝐵<sub>𝑑</sub>(𝑥,𝜖) | 𝑥∈𝑋 and 𝜖\\>0 } forms the [[Basis Vectors|basis]] of a [[Distance Metric Topology|metric topology (𝜏𝑑)]], where 𝐵<sub>𝑑</sub>(𝑥,𝜖) is an [[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|epsilon-ball/open-set]] defined as 𝐵<sub>𝑑</sub>(𝑥,𝜖) = { 𝑦∈𝑋 : 𝑑(𝑥,𝑦) \\< 𝜖 }",
      "> [!expand]- Click here to expand...\n> ```dataview\n> LIST\n> FROM \"\"\n> WHERE file.folder = [[Distance Metric Topology]].file.folder + \"/\" + [[Distance Metric Topology]].file.name\n> ```"
    ],
    [
      {
        "content": "[[Indiscrete Topology - Trivial Topology|Indiscrete Topology]]",
        "bg": "#F4F5F7"
      },
      "- when paired with its set 𝑋 it is called an [[Indiscrete Topological Spaces|indiscrete topological space]]",
      "Given 𝑋 = {1,2,3,4}, the [[Indiscrete Topology - Trivial Topology|indiscrete topology]] on 𝑋 is the family 𝜏 = {{},{1,2,3,4}} = {∅,𝑋} consisting of only the two subsets of 𝑋 required by the axioms forms a topology of 𝑋"
    ],
    [
      {
        "content": "[[Discrete Topology]]",
        "bg": "#F4F5F7"
      },
      "- when paired with its set 𝑋 it is called a [[Discrete Topological Spaces|discrete topological space]]",
      "Given 𝑋 = {1,2,3,4}, the [[Discrete Topology|discrete topology]] on 𝑋 is the [[Set Operators／Operations|power set]] of 𝑋, which is the family 𝜏 = ℘(𝑋) consisting of all possible subsets of 𝑋"
    ],
    [
      {
        "content": "[[Vector Topology]]",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "[[Product Topology]]",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "[[Lower Limit Topology]]",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "[[Particular Point Topology - Sierpinski Space - Finite／Countable／Uncountable Particular Point Topology|Particular Point Topology]]",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "[[Extension Topology (Open & Closed Extension Topology)|Extension Topology]]",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "[[Quotient Topology]]",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Topological - Examples
1. Given 𝑋 = {1,2,3,4}, the family 𝜏 = {{},{2},{1,2},{2,3},{1,2,3},{1,2,3,4}} = {∅,{2},{1,2},{2,3},{1,2,3},𝑋} of six subsets of 𝑋 forms another topology of 𝑋
2. Given 𝑋 = ℤ, the set of integers, the family 𝜏 of all finite subsets of the integers plus ℤ itself is <em>not</em> a topology, because (for example) the union of all finite sets not containing zero is not finite and therefore not a member of the family of finite sets. The union of all finite sets not containing zero is also not all of ℤ, and so it cannot be in 𝜏
```merge-table
{
  "rows": [
    [
      "![[Topology/topological-space-examples.png]]",
      "Let 𝜏 be denoted with the circles.\n\nHere are four examples and two non-examples of topologies on the three-point set {1,2,3}.\n\nThe bottom-left example is not a topology because the union of {2} and {3} \\[i.e. {2,3}\\] is missing\n\nThe bottom-right example is not a topology because the intersection of {1,2} and {2,3} \\[i.e. {2}\\], is missing."
    ]
  ]
}
```
# Resources
- [Topology & Geometry by Dr Tadashi Tokieda](https://www.youtube.com/playlist?list=PLTBqohhFNBE_09L0i-lf3fYXF5woAbrzJ)
