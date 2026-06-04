---
title: "Graph Clusters - Maximum Connected Subgraph"
created: 2021-09-13T05:25:23.844-05:00
modified: 2026-05-21T14:58:30.289-05:00
parent: "[[Graph Clusters]]"
children: []
---
# Problem

given a graph find a subgraph that has the maximum edge/node-[[Graph Connectivity (edge-connectivity - node connectivity)|connectivity]]
# Principle of the Algorithm
1. find a minimum cut in the original graph G, let its size be denoted by k = λ(G)
2. let A, B be the two node set into which the minimum cut divides the graph. A key observation is that if there is any subgraph G′ with λ(G′) \> k, then it must be either fully in A or fully in B. Why?
   
   The reason is that if G′ had nodes on both sides, then the found cut of size k would separate these nodes, too. G′, however, cannot be separated by k edges, due to λ(G′) \> k. Thus, if such a G′ exists, then it must be either fully in A or fully in B.
3. let G1, G2 denote the most connected subgraphs within the sets A, B, respectively. We can find them by recursively calling the algorithm for the smaller graphs induced by A and B
4. return the graph that has the highest connectivity among the three graphs G, G1, and G2

# Exercise
- the subgraph with maximum connectivity may not be unique. How would you modify the above algorithm if you want to find a most connected subgraph which also has the maximum number of nodes among the possibly multiple subgraphs of maximum connectivity?
