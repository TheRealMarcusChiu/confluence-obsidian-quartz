---
title: "AI Chapter 4 - Informed Search & Hill-Climbing"
created: 2019-03-15T14:47:34.891-05:00
modified: 2023-12-18T18:18:43.037-06:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
# Best-First Search
- idea: expand "best" node according to the <em>evaluation function</em> f(n)
- types of best-first search algorithms
	- greedy search
	- A\* search

### Types of Cost Functions
- <strong>heuristic function</strong>
	- h(n) = estimated cost from state <em>n</em> to a goal state
	- <strong>admissible heuristic function</strong>
		- h(n) = estimated cost from state <em>n</em> to a goal state that <em>never overestimates</em> the true cost
- <strong>total cost function</strong>
	- g(n) = cost from initial state to state <em>n</em>
- <strong>combined cost function</strong>
	- f(n) = g(n) + h(n)
	- f(n) = estimated cost of the cheapest solution through <em>n</em>

# Greedy Search
- idea: expand node based on <em>heuristic function</em> h(n)
- like depth-first search where it follows a single path towards goal and backs up when reached dead end
- not optimal & incomplete

# Uniform-Cost Search
- idea: expand node based on <em>total cost function</em> g(n)
- optimal & complete
- but can be very inefficient

# A\* Search
- idea: expand node based on f(n) where <em>f(n) = g(n) + h(n)</em>
- optimal & complete if h(n) is a <em>admissible heuristic</em>
- <strong>monotonicity</strong>
	- an attribute of f(n) that along any path from root, the f-cost never decreases
	- holds true for almost all admissible heuristics
- <strong>non-monotonicity</strong>
	- example: let's say state <em>n</em> is the parent of <em>n'</em>, a non-monotonicity heuristic is when f(n) \> f(n')
- <strong>non-monotonicity to monotonicity</strong>
	- <strong>pathmax</strong> equation - f(n') = max(f(n), g(n') + h(n'))

# Heuristic Functions
- <strong>Effects of Heuristic Accuracy and Performance</strong>
	- <strong>effective branching factor</strong> b\*
		- if number of nodes expanded by A\* is <em>N</em> and solution depth is <em>d</em>
		- then b\* is the branching factor that a uniform tree of depth <em>d</em> would have to have in order to contain <em>N </em>nodes
		- thus, N = 1 + b\* + (b\*)² + ... (b\*)ᵈ
		- e.g. if A ⃰ finds a solution at depth 5 using 52 nodes, then b\* = 1.91
	- <strong>dominates</strong>
		- h2 dominates h1 if A\* using h2 expands fewer nodes
	- hence, it is always better to use heuristic function with higher values, as long as they don't overestimate
- <strong>Inventing Heuristic Functions</strong>
	- problem: finding the best heuristic
	- <strong>relaxed problem</strong> - a problem with less restrictions on the operators
	- <strong>composite heuristic</strong>
		- if a collection of heuristics contains no single dominating heuristic, we could define
		- h(n) = max(h1(n), ..., hₓ(n))
	- <strong>features</strong>
		- selecting and weighting the possible <em>features</em> of a state in order to evaluate the heuristic function

# Heuristics For Constraint Satisfaction Problems (CSP)
- <strong>constraint satisfaction problems</strong> consists of:
	- a set of variables that can take on values from a given domain
	- a set of constraints that specify properties of the solution
- <strong>Choosing Next Variable to Assign Value</strong>
	- <strong>most-constrained-variable heuristic</strong>
		- used with forward checking
		- variable with fewest possible values is chosen to have value assigned
	- <strong>most-constraining-variable heuristic</strong>
		- assign value to variable that is involved in the largest number of constraints on other unassigned variables
- <strong>Choosing Value to be Assigned to Variable</strong>
	- <strong>least-constraining-value heuristic</strong>
		- choose value that rules out the smallest number of <em>values</em> in variables connected to the current variable by constraints

# Memory Bound Search
- <strong>Iterative Deepening A\* Search (IDA\*)</strong>
	- similar to regular <em>iterative deepening</em> from chapter 3
	- a depth-first search modified to use f-cost limit
	- optimal and complete
	- has some difficulties in certain problem spaces that can be traced back to using too little memory
- <strong>Simplified Memory-Bounded A\* Search (SMA\*)</strong>
	- makes use of all the available memory to carry out search
	- SMA ⃰ has the following properties
		- will utilize whatever memory is made available to it
		- avoids repeated states as far as its memory allows
		- is complete if available memory is sufficient to store the shallowest solution path
		- is optimal if enough memory is available to store the shallowest optimal solution path. otherwise, it returns the best solution that can be reached with the available memory
		- when enough memory is available for the entire search tree, the search is optimally efficient
	- when space runs out, drop nodes that are <em>unpromising</em>

# Iterative Improvement Hill-Climbing Algorithms
- <strong>Hill-Climbing Search</strong>
	- general idea: start with a complete configuration and to make modifications to improve its quality
	- make moves in direction of increasing value. It does not maintain a search tree, and it does not look beyond the immediate neighbors of the current state.
	- Hill climbing is often called "greedy local search" because it grabs a good neighbor state without thinking ahead about where to go next
	- 3 drawbacks:
		- local maxima - algorithm would halt thinking it is the global maxima
		- plateaux - search would conduct random walk
		- ridges - steep sloping sides
	- variants of hill-climbing algorithms
		- <strong>stochastic hill-climbing</strong>
			- chooses at random from the uphill moves, the probability of selection can vary with the steepness of the uphill move
		- <strong>first choice hill climbing</strong>
			- implements stochastic hill climbing by generating successors randomly until one is generated that is better than the current state
		- <strong>random-restart hill-climbing</strong>
			- conducts a series of hill-climbing searches from random initial states
			- can use a fixed number of iterations or continue until the best saved result no longer improved for a certain number of iterations
- <strong>Simulated Annealing</strong>
	- general idea: to escape local maxima allow search to take downhill steps

# Iterative Improvements in Constraint Satisfaction Problems
- <strong>heuristic repair</strong>
	- assign values to all variables, then apply modifications to move towards solution
- <strong>min-conflicts heuristic</strong>
	- select value that results in the minimum number of conflicts with other variables
