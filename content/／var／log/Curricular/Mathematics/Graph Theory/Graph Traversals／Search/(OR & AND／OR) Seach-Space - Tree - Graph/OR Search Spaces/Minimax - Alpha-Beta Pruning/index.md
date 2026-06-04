---
title: "Minimax - Alpha-Beta Pruning"
created: 2021-09-13T05:25:40.126-05:00
modified: 2021-09-13T05:25:40.126-05:00
parent: "[[OR Search Spaces]]"
children: []
---
a game is defined by:
- <strong>initial state</strong> - the environment setup
- <strong>operators</strong> - defines the legal moves
- <strong>terminal test</strong> - test when game is over
- <strong>utility</strong> or <strong>payoff function</strong> - which says who won, and by how much

## Minimax
- in two-player games with perfect information, <em>minimax</em> algorithm can determine the best move for a player (assuming the opponent plays perfectly) by enumerating the entire game tree

## Alpha Beta Pruning
- [simulation](http://inst.eecs.berkeley.edu/~cs61b/fa14/ta-materials/apps/ab_tree_practice/)
- does the same calculation as <em>minimax</em>, but is more efficient by pruning irrelevant branches of search tree
```py
function minimax(node, depth, isMaximizingPlayer, alpha, beta):
 
    if node is a leaf node :
        return value of the node
    
    if isMaximizingPlayer :
        bestVal = -INFINITY 
        for each child node :
            value = minimax(node, depth+1, false, alpha, beta)
            bestVal = max( bestVal, value) 
            alpha = max( alpha, bestVal)
            if beta <= alpha:
                break
        return bestVal
 
    else :
        bestVal = +INFINITY 
        for each child node :
            value = minimax(node, depth+1, true, alpha, beta)
            bestVal = min( bestVal, value) 
            beta = min( beta, bestVal)
            if beta <= alpha:
                break
        return bestVal

```
## Cut-Off and Evaluation Function
- usually not feasible to consider the whole game tree (even with alpha-beta pruning), so:
	- cut off the search at some point
	- apply an evaluation function to estimate the <em>utility</em> of the state
