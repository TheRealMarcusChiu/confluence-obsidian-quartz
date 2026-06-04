---
title: "Dynamic Programming (DP)"
created: 2019-11-30T21:12:15.925-06:00
modified: 2019-12-01T13:09:55.932-06:00
parent: "[[Algorithm Types]]"
children: []
---
<strong>Dynamic Programming (DP)</strong> is a method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions using a memory-based data structure
### When DP Applies to a Problem

original problem can be divided into 2 or more subproblems
- <strong>subproblems overlap</strong> - original problem contains multiple occurrences of a single subproblem, therefore we could memoize these subproblems to save computation time
- <strong>optimal substructure</strong> - the solution of the subproblems when put together also becomes the optimal solution of the original problem

### Steps to DP
1. Characterize the structure of an optimal solution
2. Recursively define the value of an optimal solution
3. Compute the value of an optimal solution (bottom-up) or (top-down memoized)
	1. make sure recurrence is acyclic/topological order
4. Construct an optimal solution from computed information

Steps 1-3 is the basis for DP
Step 4 is needed only when we want to know how the optimal solution is obtained
### Example Problems Where We Could Use DP
- computing Fibonacci numbers
- cutting rod
- substring matching
- [[Knapsack Problem|knapsack problem]]
- etc
