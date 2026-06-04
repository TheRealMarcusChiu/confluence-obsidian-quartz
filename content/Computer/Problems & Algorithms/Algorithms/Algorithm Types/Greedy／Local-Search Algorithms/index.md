---
title: "Greedy／Local-Search Algorithms"
created: 2019-12-01T13:14:10.206-06:00
modified: 2023-01-21T15:42:25.286-06:00
parent: "[[Algorithm Types]]"
children: []
---
a <strong>Greedy/Local-Search Algorithm</strong> is any [[Algorithms|algorithm]] that follows the problem-solving heuristic of making the locally optimal choice at each stage with the intent of finding a global optimum
# Principles of Greedy Strategy
- cast problem such that greedy choice + 1 sub-problem to solve
- show there is an optimal solution that includes greedy choice
- show optimal sub-structure:
  <span style="white-space: pre-wrap"><code>optimal solution to sub-problem + greedy choice =\> optimal solution to original problem</code></span>

# Problems Using Greedy Algorithms
- activity selection problem
- Huffman code
