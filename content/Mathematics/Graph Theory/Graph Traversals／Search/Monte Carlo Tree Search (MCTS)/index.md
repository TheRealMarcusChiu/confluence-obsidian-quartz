---
title: "Monte Carlo Tree Search (MCTS)"
created: 2021-09-13T05:25:41.629-05:00
modified: 2022-09-17T00:04:32.754-05:00
parent: "[[Graph Traversals／Search]]"
children: []
---
###### Monte Carlo Tree Search (MCTS)
- is a heuristic search algorithm for some kinds of decision processes, most notably those employed in game play

# Algorithm

![](https://www.youtube.com/watch?v=UXW2yZndl7U)
# Steps
1. <strong>selection</strong> - selecting good child nodes, starting from the root node R, that represent states leading to a better overall outcome (win)
2. <strong>expansion</strong> - if <em>L</em> is not a terminal node (i.e. it does not end the game), then create one or more child nodes and select one (<em>C)</em>
3. <strong>simulation (rollout)</strong> - run a simulated play-out from <em>C</em> until a result is achieved
4. <strong>back-propagation</strong> - update the current move sequence with the simulation result
