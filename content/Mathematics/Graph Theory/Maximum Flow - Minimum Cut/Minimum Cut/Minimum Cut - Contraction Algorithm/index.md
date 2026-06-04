---
title: "Minimum Cut - Contraction Algorithm"
created: 2021-09-13T05:25:42.806-05:00
modified: 2021-09-13T05:25:42.806-05:00
parent: "[[Minimum Cut]]"
children: []
---
the <strong>contraction algorithm</strong> uses randomization, so it will guarantee the result only with a certain probability, less than 1, but it can be made arbitrarily close to 1

the algorithm works as follows:
1. pick an edge (v, w) uniformly at random among all edges from the current graph G
2. contract the selected edge (i.e. merge its endpoints). keep the resulting parallel edges, but remove the self-loops. The contracted graph, denoted by G/(v,w), will be the new value of G
3. repeat steps 1 and 2 until there are only 2 nodes left
4. the set of edges between the remaining 2 nodes form a cut

the obtained cut will be a minimum cut with probability at least 1/n<sup>2</sup> in a graph of n nodes.

If we repeat the algorithm K times independently and choose the smallest of the found cuts, say C, then the following holds:
<span style="white-space: pre-wrap"><code>P(C is not a minimum cut) ≤ (1 - 1/n²)ᴷ</code></span>

If K is chosen as K = tn<sup>2</sup>, then the above probability will be approximately e<sup>-t</sup>, which is very small already for moderate values of t

An interesting by-product of this algorithm is the theorem that the number of minimum cuts in a graph is a t most n<sup>2</sup>, since each arises with at least 1/n<sup>2</sup> probability in a run and these are mutually exclusive events. Note that the total number of different cuts may be exponentially large, but only at most n<sup>2</sup> of them can be minimum (actually, n<sup>2</sup> is only an upper bound, the precise tight bound is n(n-1)/2)
