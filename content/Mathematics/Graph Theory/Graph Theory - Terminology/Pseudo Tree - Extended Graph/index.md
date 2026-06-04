---
title: "Pseudo Tree - Extended Graph"
created: 2021-09-13T05:25:31.137-05:00
modified: 2021-12-11T05:36:59.065-06:00
parent: "[[Graph Theory - Terminology]]"
children:
  - "[[Pseudo Tree - Minimal／Minimum (Height／Depth - Induced-Width - Tree-Width)]]"
---
- <strong>Pseudo Tree</strong> - a <strong>pseudo tree</strong> of an undirected graph 𝐆 = (𝐕, 𝐄) is a directed rooted tree 𝐓 = (𝐕, 𝐄') if any arc in 𝐄 which is not in 𝐄' is a back-arc in 𝐓 (i.e. it connects a node in 𝐓 to an ancestor in 𝐓). The arcs in 𝐄' do not have to be in 𝐄
- <strong>Extended Graph</strong> - given a pseudo tree 𝐓 of 𝐆, the extended graph of 𝐆 relative to 𝐓 includes also the arcs in 𝐄' that are not in 𝐄. That is, the <strong>extended graph</strong> is defined as 𝐆<sup>𝐓</sup> = (𝐕, 𝐄 ∪ 𝐄')

# Examples

```merge-table
{
  "rows": [
    [
      "![[Pseudo Tree - Extended Graph/pseudo-tree-examples.png]]"
    ],
    [
      "pseudo tree - black edges only\n<font style=\"color: rgb(128,128,128);\">extended graph - includes gray edges</font>[[Pseudo Tree - Extended Graph]]"
    ]
  ]
}
```
# Subpages

maximum height pseudo tree is simply a chain, finding the minimum height pseudo tree however is [[P - NP - NPC - NPI - NPO - NPH|NP-Complete]]. This problem is found in various tasks (e.g. finding the smallest possible [[Pseudo Tree - Extended Graph|AND/OR Search Graph]])

```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
