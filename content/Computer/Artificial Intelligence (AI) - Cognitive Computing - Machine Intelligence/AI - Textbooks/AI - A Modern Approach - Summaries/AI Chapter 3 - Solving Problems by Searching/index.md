---
title: "AI Chapter 3 - Solving Problems by Searching"
created: 2019-03-15T14:45:22.443-05:00
modified: 2023-12-18T18:18:09.164-06:00
parent: "[[AI - A Modern Approach - Summaries]]"
children: []
---
# Problem Formulation
- a <strong>problem</strong> consist of 4 parts:
	- initial state
	- set of operators or successor function
	- goal test function
	- path cost function
- <strong>state space</strong> - environment of the problem
- <strong>path</strong> - a set of states starting with root

# Knowledge and Problem Types
- <strong>single-state problem</strong> - environment is accessible and actions are deterministic
- <strong>multiple-state problem</strong> - environment is in-accessible and/or actions are non-deterministic
- <strong>contingency problem</strong> - a problem requires <em>interleaving</em> of search and execution
- <strong>exploration problem</strong> - initially, agent has no info about the effects of its actions. agent must learn effects of actions and the possible states of environment

# Types of Search Algorithms
- <strong>breadth first search (bfs)</strong>
- <strong>uniform cost search (ucs)</strong>
	- bfs with expanding the lowest-cost node based on g() on the <em>fringe</em>
	- this will find optimal solution when g() is always positive
- <strong>depth first search (dfs)</strong>
- <strong>depth limited search (dls)</strong>
	- dfs with with cutoff at max depth of a path
- <strong>iterative deepening search (ids)</strong>
	- execute multiple dls with increasing values of max depth
	- mix of bfs and dfs
- <strong>bidirectional search</strong>
	- search both:
		- forwards from initial state
		- backwards from goal state

# Performance of Search Algorithms
- judged on the basis of:
	- completeness - is the strategy guaranteed to find a solution when there is one
	- optimality - does the strategy find the highest-quality solution when there are several different solutions
	- time complexity - how long does it take to find a solution
	- space complexity - how much memory does it need to perform the search

![[AI Chapter 3 - Solving Problems by Searching/big o of search algorithms.png|881x250]]
# Avoiding Repeated States
- 3 ways to avoid repeated states (increasing order of effectiveness and computational overhead):
	- <strong>do not return to the state you just came from</strong>
		- have (<em>expand-function</em> or <em>operator-set</em>) NOT generate successor(s) that's the same as node's parent
	- <strong>do not create paths with cycles in them</strong>
		- have (<em>expand-function</em> or <em>operator-set</em>) NOT generate successor(s) that's the same as any of the current node's ancestors
	- <strong>do not generate any state that was ever generated before</strong>
		- requires every generated state to be stored in memory - resulting in space complexity of O(|states|)

# Constraint Satisfaction Problem (CSP)
- <strong>CSP</strong> - a special kind of problem
	- <strong>states</strong> - defined by the values of a set of variables
	- <strong>goal</strong> - set of <em>constraints</em> that the values must obey
	- <strong>solution</strong> - assigned values to all variables such that the constraints are satisfied
- <strong>constraints</strong>
	- can be either
		- <strong>unary constraint</strong> - the allowable subset of the variable's domain
		- <strong>binary constraints</strong> - the allowable subset of the cross-product of the 2 variable's domains
		- <strong>n-nary/global constraints</strong> - the allowable subset of the cartesian-product of the n variable's domains
	- can be either
		- <strong>absolute constraint</strong> - violation of which rules out a potential solution
		- <strong>preference constraint</strong> - determines which solutions are preferred
- <strong>variables</strong>
	- each variable has its own <em>domain</em>
	- <strong>domain</strong>
		- is a set of possible values that the variable can take on
		- can be <em>discrete</em> or <em>continuous</em>
- <strong>backtracking search</strong>
	- before the <em>successor</em> generation step check whether any constraint has been violated by the variable assignments made up to this point, if violated backtracks to try something else
- <strong>forward checking</strong>
	- special case of <em>arc consistency</em>
	- each time variable is instantiated, look ahead to detect unsolvability by deleting from domains of uninstantiated variables. then check for any empty domains, if there exists an empty domain, backtrack immediately
- <strong>arc consistency</strong>
	- a state is <em>arc consistent</em> if every variable has a value in its domain that is consistent with each of the constraints on that variable
	- arc consistency can be achieved by deletion of values that are inconsistent with constraint
	- as values are deleted in domains, other values may become inconsistent because they relied on the deleted values
	- arc consistency exhibits a form of <strong>constraint propagation</strong>
