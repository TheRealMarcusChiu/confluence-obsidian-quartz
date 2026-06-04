---
title: "AI Chapter 5 - Game Playing"
created: 2019-03-15T14:48:05.851-05:00
modified: 2023-12-18T18:19:08.761-06:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
a game is defined by:
- <strong>initial state</strong> - the environment setup
- <strong>operators</strong> - defines the legal moves
- <strong>terminal test</strong> - test when game is over
- <strong>utility</strong> or <strong>payoff function</strong> - which says who won, and by how much

# Minimax
- in two-player games with perfect information, <em>minimax</em> algorithm can determine the best move for a player (assuming the opponent plays perfectly) by enumerating the entire game tree

# Alpha Beta Pruning
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
# Cut-Off and Evaluation Function
- usually not feasible to consider the whole game tree (even with alpha-beta pruning), so:
	- cut off the search at some point
	- apply an evaluation function to estimate the <em>utility</em> of the state

# Games That Include an Element of Chance
- mastering games like backgammon
- games of chance can be handled by an extension to the <em>minimax</em> algorithm that evaluates chance nodes by taking the average <em>utility</em> of all its children nodes, weighted by the probability of the child
- the game tree includes
	- chance nodes
	- MAX nodes
	- MIN nodes
- <strong>expectimax value</strong>
- <strong>expectimin value</strong>
- <strong>expectiminimax value</strong>

# Discussion
- <strong>utility of a node expansion</strong>
	- a good search algorithm should select node expansions of high utility—that is, ones that are likely to lead to the discovery of a significantly better move
- <strong>metareasoning</strong>
	- reasoning about reasoning
	- alpha-beta pruning is a simple kind of metareasoning

# Extra: AND-OR Search Trees
![[AI Chapter 5 - Game Playing/1.png|291x250]]
- augment search trees in the following way
	- branching caused by agent's choice of action are called OR nodes. E.g., in vacuum world, agent chooses Left or Right or Suck
	- branching caused by environment's choice of action are called AND nodes. E.g., in erratic vacuum world, Suck action in state 1 leads to a state in { 5, 7 }, so agent would need to find a plan for state 5 and state 7.
- 2 kinds of nodes alternate giving AND-OR tree

![[AI Chapter 5 - Game Playing/2.png]]
### AND-OR Search Algorithm
```java
// returns: conditional plan or failure 
AND_OR_graph_search(Problem problem) {
    OR_search(problem.initial-state, [])
}
 
// returns: conditional plan or failure
OR_search(State state, List path) {
  if (state is goal) return empty plan
  if (state is in path) return failure
  for (action in state.possibleActions) {
    List resulting-states = results(state, action)
    plan = AND_search(resulting-states, problem, [state|path])
    if (plan != failure) return [action|plan]
  }
  return failure
}
 
// returns: conditional plan or failure
AND_search(State states, List path) {
  for (state-i in states) {
    plan-i = OR_search(state-i, path)
    if (plan-i == failure) return failure
  }
  return [if state-1 then plan-1
          elif state-2 then plan-2
          ...
          else plan-n];
}

```
- the above algorithm is Depth First Search
- can be modified to support:
	- un-informed search:
		- breadth-first-search
		- uniform-cost-search
		- iterative-deepening breadth-first-search
	- informed search:
		- greedy-search
		- A\*-search
		- iterative-deepening A\*-search
