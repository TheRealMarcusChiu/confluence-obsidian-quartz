---
title: "Constraint Satisfaction Problems (CSP)"
created: 2021-09-13T05:26:23.329-05:00
modified: 2026-05-21T04:18:42.481-05:00
parent: "[[Operations／Operational Research (OR)]]"
children:
  - "[[CSP - Consistency Types]]"
---
article based on Chapter 5 of [[AI - A Modern Approach - Summaries|Artificial Intelligence: A Modern Approach]] 2<sup>nd</sup> Edition

a <strong>constraint satisfaction problem</strong> is defined by:
- set of variables
- set of constraints
- set of domains for each variable

<strong>consistent</strong> - an assignment of some/all variables that does not violate constraints
<strong>complete</strong> - every variable is assigned a value
<strong>solution</strong> - a <em>complete</em> and <em>consistent</em> assignment. some CSPs also require a solution that maximizes an objective function

<strong>Constraint Optimization Problem</strong> - CSP with preference constraints
### Types of Constraints
- <strong>linear constraint</strong> - variable appears in <em>linear</em> form only
- <strong>nonlinear constraint</strong> - variable appears in <em>nonlinear</em> form

- <strong>unary constraint</strong>
	- restricts value of single variable
	- used with <em>node-consistency</em>
- <strong>binary constraint</strong>
	- restriction on 2 variables
	- used with <em>arc-consistency</em>
- <strong>global/high-order constraint</strong> - restriction on 3 or more variables
- <strong>resource/atmost constraint</strong> (less so called bound constraint)
	- for example, let A, B, C denote the numbers of personnel assigned to each of the 3 variables. The constraint that no more than 10 personnel are assigned in total is written as atmost(10, A, B, C). An inconsistency can be detected by checking the sum total of the minimum values of the current domains. We can enforce consistency by deleting any maximum values that are inconsistent with the minimum values of other domains
	- used with <em>bounds consistency</em>

- <strong>absolute constraint </strong>- a violation of constraint rules out potential solution
- <strong>preference constraint </strong>- indicates which solutions are preferred

- <strong>precedence constraint</strong> - whenever a task must occur before another, and the task takes duration d to complete

- <strong>constraint weighting</strong> - concentrate the search on the important constraints
	- each constraint is given a weight
	- at each step, algorithm choose a variable/value pair to change, resulting in the lowest total weight of all violated constraints
	- weights are then adjusted by incrementing the weight of each constraint that is violated by the current assignment

### Types of Domains
- <strong>discrete domains</strong>
	- <strong>finite domains </strong>- e.g. Boolean CSPs, whose variables are either <em>true</em> or <em>false</em>
	- <strong>infinite domains </strong>- e.g. integers
- <strong>continuous domains</strong>
	- e.g. real numbers
	- well-known category of continuous-domain CSPs is <strong>linear programming </strong>problems, where constraints must be linear inequalities forming a <em>convex</em> region

# CSPs Structure: Constraint Graph
- nodes are variables
- arcs correspond to constraints

![[Constraint Satisfaction Problems (CSP)/1.png|650]]
- <strong>constraint hypergraph </strong>- ordinary nodes and hypernodes which represent n-ary constraints

# Modes of Solving CSPs
### <strong>Incremental Formulation</strong>
1. <strong>initial state: </strong>the empty assignment {}, in which all variables are unassigned
2. <strong>successor function: </strong>a value can be assigned to any unassigned variable, provided that it does not conflict with previously assigned variables
3. <strong>goal test: </strong>the current assignment is <strong><em>complete</em></strong>
4. <strong>path cost: </strong>a constant cost for every step

### <strong>Complete-State Formulation</strong>
1. <strong>initial state: </strong>start with a complete state whether or not it satisfies the constraints
2. <strong>successor function: </strong>
	1. (1. choose a variable) and (2. assign it a different value)
	2. local search methods work well for this formulation
3. <strong>goal test:</strong> the current assignment is <strong><em>consistent</em></strong>
4. <strong>path cost: </strong>a constant cost for every step

# Search Methods for CSPs

<strong>heuristics in choosing (the next variable to assign) and (the value to assign that variable)</strong>
- <strong>minimum remaining values (MRV) </strong>or <strong>most constrained variable </strong>- choose variable with the fewest legal values
- <strong>degree heuristic </strong>- select variable that is involved in largest number of constraints on other unassigned variables
- <strong>least constraining value (LCV)</strong> or<strong> min-conflicts heuristic</strong> - choose value that rules out the fewest choices for the neighboring unassigned variables

<strong>consistency and propagating information through constraints - details on [[CSP - Consistency Types|Consistency Types]]</strong>
- <strong>constraint propagation</strong> - using the constraints to reduce the number of legal values for a variable
- <strong>bounds propagation</strong>

- <strong>node consistency (1-consistency)</strong>
	- variable X is node consistent if, all values in X's domain satisfy the X's unary constraints
- <strong>forward checking</strong>
	- whenever variable X is assigned, look at each unassigned variable Y connected to X by a constraint and deletes from Y's domain any value that is inconsistent with the value chosen for X
- <strong>arc consistency (2-consistency)</strong>
	- stronger than <em>forward checking</em>
	- <em>arc consistency</em> tightens down the domains (unary constraints) using the arcs (binary constraints)
	- (X,Y) is arc consistent if, for every value in domain X, there is some value in domain Y that is consistent
	- the algorithm <strong>MAC</strong> (for Maintaining Arc Consistency (MAC)) detects arc inconsistency
	- the most popular algorithm for arc consistency is called AC-3. The complexity of AC-3 can be analyzed as follows. Assume a CSP with n variables, each with domain size at most d, and with c binary constraints (arcs). Each arc (X<sub>k</sub>,X<sub>i</sub>) can be inserted in the queue only d times because Xi has at most d values to delete. Checking consistency of an arc can be done in O(d<sup>2</sup>) time, so we get O(cd<sup>3</sup>) total worst-case time
	  
	  > [!list-indent-undo]
> > [!indent]
> > ![[Constraint Satisfaction Problems (CSP)/ac-3 algorithm.png|530]]
- <strong>generalized arc consistent</strong>
	- A variable X is <em>generalized arc consistent </em>with respect to i an n-ary constraint if for every value v in the domain of X<sub>i</sub>there exists a tuple of values that is a member of the constraint, has all its values taken from the domains of the corresponding variables, and has its X<sub>i</sub>component equal to v. For example, if all variables have the domain {0,1,2,3}, then to make the variable X consistent with the constraint X \< Y \< Z, we would have to eliminate 2 and 3 from the domain of X because the constraint cannot be satisfied when X is 2 or 3
- <strong>directed arc consistency (DAC)</strong>
	- A CSP is defined to be <em>directed arc-consistent</em> under an ordering of variables X<sub>1</sub>, X<sub>2</sub>, ..., X<sub>n</sub>if and only if every X<sub>i</sub>is <em>arc-consistent</em> with each X<sub>j</sub>for <em>j\>i</em>
- <strong>path consistency</strong>
	- <em>path consistency</em> tightens the binary constraints by using implicit constraints that are inferred by looking at triples of variables
	- any pair of adjacent variables can always be extended to a third neighboring variable
- <strong>k-consistency</strong>
	- a CSP is k-consistent if, for any set of k-1 variables and for any consistent assignment to those variables, a consistent value can always be assigned to any k<sup>th</sup> variable
- <strong>strongly k-consistent</strong>
	- a graph is strongly k-consistent if it is k-consistent, (k-1)-consistent, ..., 1-consistent
- <strong>bounds consistent (used with resource/atmost/bound constraint)</strong>
	- if every variable X, and for both the lower bound and upper bound values of X's domain, there exists some value of Y that satisfies the constraint between X and Y, for every variable Y

<strong>intelligent backtracking: looking backward</strong>
- <strong>chronological backtracking</strong>
	- when branch of search fails, backup to the preceding variable and try a different value
- <strong>backjumping</strong>
	- backtracks to the most recent variable in the conflict set
	- <strong>conflict set </strong>- a conflict set for variable X is the set of previously assigned variables that are connected to X by constraints
- <strong>conflict-directed backjumping</strong>
	- a variant of the <em>backjumping algorithm</em> where each parent variable inherits the children's conflict set

# CSPs Structure: Continued
- [[Constraint Satisfaction Problems (CSP)|CSP Decomposition into Independent Subproblems]]
- [[Constraint Satisfaction Problems (CSP)]]
- [[Constraint Satisfaction Problems (CSP)]]
- [[Constraint Satisfaction Problems (CSP)]]

###### CSP Decomposition into Independent Subproblems
- any solutions of any subproblems yields a solution for the whole problem
- independence can be ascertained simply looking for <strong>connected components </strong>of the CSP's constraint graph
- consider the following: suppose <font style="color: rgb(255,102,0);">each</font> <font style="color: rgb(128,128,128);"><em>independent subproblem</em></font> <font style="color: rgb(255,102,0);">CSP<sub>i</sub> has <strong>c </strong></font><font style="color: rgb(255,102,0);">variables</font> from the <font style="color: rgb(128,0,128);">total of </font><strong><font style="color: rgb(128,0,128);">n </font></strong><font style="color: rgb(128,0,128);">variables</font>, where c is a constant. Then there are <strong><font style="color: rgb(128,0,128);">n</font><font style="color: rgb(128,128,128);">/</font><font style="color: rgb(255,102,0);">c </font></strong>subproblems, each of which takes at most <strong><font style="color: rgb(51,153,102);">d</font><font style="color: rgb(255,102,0);"><sup>c</sup></font></strong>work to solve, where <strong><font style="color: rgb(51,153,102);">d </font></strong><font style="color: rgb(51,153,102);">is the size of the domain</font>.
	- with decomposition of independent subproblems: the total work is <strong><font style="color: rgb(128,128,128);">O(</font><font style="color: rgb(51,153,102);">d</font><font style="color: rgb(255,102,0);"><sup>c</sup></font><font style="color: rgb(128,0,128);">n</font><font style="color: rgb(128,128,128);">/</font><font style="color: rgb(255,102,0);">c</font><font style="color: rgb(128,128,128);">)</font></strong>, which is <strong>linear in n</strong>, exponential in d
	- without the decomposition, the total work is <strong><font style="color: rgb(128,128,128);">O(</font><font style="color: rgb(51,153,102);">d</font><sup><font style="color: rgb(128,0,128);">n</font></sup><font style="color: rgb(128,128,128);">)</font></strong>, which is <strong>exponential in </strong><strong>n</strong>
- for example, dividing a Boolean CSP with 80 variables into four subproblems reduces the worst-case solution time from the lifetime of the universe down to less than a second
- however, completely <font style="color: rgb(255,0,0);">independent subproblems are rare</font>

###### CSP tree-structured constraint graph
- simplest constraint graph
- any 2 variables/nodes are connected by at most 1 path
- <strong>tree-structure algorithm </strong>- can be solved in the following steps: runtime = O(<font style="color: rgb(255,102,0);">n</font><font style="color: rgb(0,0,255);">d<sup>2</sup></font>) where CSP tree have <font style="color: rgb(255,102,0);">n variables/nodes</font> and <font style="color: rgb(0,0,255);"><em>d</em> possible domain values</font>
	- <strong>topologically sort</strong> tree - choose any variable as root of tree, then order all variables and label them X<sub>1</sub>, X<sub>2</sub>, ..., X<sub>n</sub>. therefore every variable except the root has exactly 1 parent
	- for j from n to 2, apply arc consistency to arc (X<sub>i</sub>, X<sub>j</sub>), where X<sub>i</sub> is the parent of X<sub>j</sub>, removing values from X<sub>i</sub>'s domain
	- for j from 1 to n, assign any value for X<sub>j</sub> consistent with the value assigned for X<sub>i</sub>, where X<sub>i</sub> is the parent of X<sub>j</sub>

  > [!list-indent-undo]
  > > [!indent]
  > > ![[Constraint Satisfaction Problems (CSP)/3.png|450]]

  > [!list-indent-undo]
  > > [!indent]
  > > ![[Constraint Satisfaction Problems (CSP)/TREE-CSP-SOLVER algorithm.png|450]]

###### <strong>CSP turning constraint graph into tree-structure</strong>
- <strong>general algorithm is as follows: </strong>runtime = O(d<sup>c</sup>(n-c)d<sup>2</sup>) where c is the size of the <em>cycle cutset</em>
	1. choose a subset S from Variable\[csp\] such that the constraint graph becomes tree after removal of subset S. S is called the<strong> cycle cutset</strong>
	2. for each possible assignment to the variables in S that satisfies all constraints on S:
		1. remove from the domains of the remaining variables (Variable\[csp\] - S) any values that are inconsistent with the assignment for S
		2. run <strong>tree-structure algorithm </strong>on remaining CSP. If tree-structure algorithm has a solution, return it together with the assignment of S
- finding the smallest <em>cycle cutset</em> is NP-hard
> [!list-indent-undo]
> > [!indent]
> > ![[Constraint Satisfaction Problems (CSP)/4.png|450]]

###### <strong>CSP tree-decomposition</strong>
- another approach in solving CSP
- construct a <strong>tree-decomposition</strong> of the constraint graph into a set of connected subproblems
- a tree-decomposition must satisfy the following requirements:
	- every variable in the original problem appears in at least one of the subproblems
	- if 2 variables are connected by a constraint in the original problem, they must appear together (along with constraint) in at least one of the subproblems
	- if a variable appears in two subproblems in the tree, it must appear in every subproblem along the path connecting those subproblems

  > [!list-indent-undo]
  > > [!indent]
  > > ![[Constraint Satisfaction Problems (CSP)/2.png|450]]
