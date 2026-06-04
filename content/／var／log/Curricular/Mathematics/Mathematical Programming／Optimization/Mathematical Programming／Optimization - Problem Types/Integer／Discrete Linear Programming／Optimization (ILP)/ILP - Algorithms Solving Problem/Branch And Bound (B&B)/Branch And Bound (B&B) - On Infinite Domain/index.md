---
title: "Branch And Bound (B&B) - On Infinite Domain"
created: 2021-09-13T05:26:12.622-05:00
modified: 2021-09-13T05:26:12.622-05:00
parent: "[[Branch And Bound (B&B)]]"
children: []
---
# <strong>B&B </strong><strong>Exhaustive </strong><strong>Search - Algorithm Description</strong>

> [!expand]- Click here to expand...
> if the discrete variables have a INFINITE size domain (i.e. [Integer Linear Programming (ILP)](http://confluence.marcuschiu.com/display/NOT/Integer+Linear+Programming+%28ILP%29+-+Integer+Linear+Optimization) problems)
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "ILP Problem",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- <strong>objective function:</strong>\n  maximize Z = cx<sub></sub>+ c<sub>2</sub>x<sub>2</sub>+ ... + c<sub>n</sub>x<sub>n</sub>\n- <strong>linear constraints:</strong>\n  a<sub>11</sub>x<sub>1</sub>+ a<sub>12</sub>x<sub>2</sub>+ ... + a<sub>1n</sub>x<sub>n</sub>= b<sub>1</sub>\n  a<sub>21</sub>x<sub>1</sub>+ a<sub>22</sub>x<sub>2</sub>+ ... + a<sub>2n</sub>x<sub>n</sub>= b<sub>2</sub>\n  .. .. ..\n  a<sub>m1</sub>x<sub>1</sub>+ a<sub>m2</sub>x<sub>2</sub>+ ... + a<sub>mn</sub>x<sub>n</sub>= b<sub>m</sub>\n- <strong>variables constrained to <font style=\"color: rgb(255,0,255);\">non-negative</font> <font style=\"color: rgb(255,0,255);\">integer<strong>-values</strong></font>:</strong>\n  x<sub>1</sub>, ..., x<sub>n</sub>∈ <strong>ℤ</strong>\n  x<sub>1</sub>, ..., x<sub>n</sub> ≥ 0"
>     ]
>   ]
> }
> ```
>
> relax the integer constraints, which gives new problem (i.e. LP relaxation):
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Relaxed LP Problem",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- <strong>objective function:</strong>\n  maximize Z = cx<sub></sub>+ c<sub>2</sub>x<sub>2</sub>+ ... + c<sub>n</sub>x<sub>n</sub>\n- <strong>linear constraints:</strong>\n  a<sub>11</sub>x<sub>1</sub>+ a<sub>12</sub>x<sub>2</sub>+ ... + a<sub>1n</sub>x<sub>n</sub>= b<sub>1</sub>\n  a<sub>21</sub>x<sub>1</sub>+ a<sub>22</sub>x<sub>2</sub>+ ... + a<sub>2n</sub>x<sub>n</sub>= b<sub>2</sub>\n  .. .. ..\n  a<sub>m1</sub>x<sub>1</sub>+ a<sub>m2</sub>x<sub>2</sub>+ ... + a<sub>mn</sub>x<sub>n</sub>= b<sub>m</sub>\n- <strong>variables constrained to <font style=\"color: rgb(255,0,255);\">non-negative</font> <font style=\"color: rgb(255,0,255);\"><strong>values</strong></font>:</strong>\n  x<sub>1</sub>, ..., x<sub>n</sub> ≥ 0"
>     ]
>   ]
> }
> ```
>
> next solve the relaxed LP problem with a general [LP solver](http://confluence.marcuschiu.com/display/NOT/LP+-+Ways+Solving+Problem)
>
> the Solver returns an optimal vector/point (x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>) = (a, b, ..., c) with value Z = something
>
> this optimal vector/point can be either:
> - vector values are all integers (i.e. a valid solution for ILP problem)
> - vector values contain a non-integer value (i.e. not a valid solution for ILP)
>
> if the vector values are all integers, we go ahead and return this vector and Z value as the optimal solution of the ILP problem
>
> if the vector contains non-integer values, we have to split the ILP problem into 2 subproblems
>
> let's say the LP solver returns the point (x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>) = (2.6, 2.2, ..., 4.5), with value Z = 26.2
>
> now we divide the ILP problem into 2 subproblems by splitting on a variable
>
> let's say the algorithm chooses to split on variable x<sub>2</sub> whose optimal value is 2.2
>
> now we introduce 2 new constraints:
> - x<sub>2</sub> ≤ floor(2.2) = 2
> - x<sub>2</sub> ≥ ceiling(2.2) = 3
>
> we add these constraints to the original problem, giving 2 new subproblems:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "ILP Subproblem 1",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "ILP Subproblem 2",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- <strong>objective function:</strong>\n  maximize Z = cx<sub></sub>+ c<sub>2</sub>x<sub>2</sub>+ ... + c<sub>n</sub>x<sub>n</sub>\n- <strong>linear constraints:</strong>\n  a<sub>11</sub>x<sub>1</sub>+ a<sub>12</sub>x<sub>2</sub>+ ... + a<sub>1n</sub>x<sub>n</sub>= b<sub>1</sub>\n  a<sub>21</sub>x<sub>1</sub>+ a<sub>22</sub>x<sub>2</sub>+ ... + a<sub>2n</sub>x<sub>n</sub>= b<sub>2</sub>\n  .. .. ..\n  a<sub>m1</sub>x<sub>1</sub>+ a<sub>m2</sub>x<sub>2</sub>+ ... + a<sub>mn</sub>x<sub>n</sub>= b<sub>m</sub>\n  <font style=\"color: rgb(255,0,255);\">x<sub>2</sub> ≤ 2</font><sub></sub>\n- <strong>variables constrained to non-negative integer<strong>-values</strong>:</strong>\n  x<sub>1</sub>, ..., x<sub>n</sub>∈ <strong>ℤ</strong>\n  x<sub>1</sub>, ..., x<sub>n</sub> ≥ 0",
>       "- <strong>objective function:</strong>\n  maximize Z = cx<sub></sub>+ c<sub>2</sub>x<sub>2</sub>+ ... + c<sub>n</sub>x<sub>n</sub>\n- <strong>linear constraints:</strong>\n  a<sub>11</sub>x<sub>1</sub>+ a<sub>12</sub>x<sub>2</sub>+ ... + a<sub>1n</sub>x<sub>n</sub>= b<sub>1</sub>\n  a<sub>21</sub>x<sub>1</sub>+ a<sub>22</sub>x<sub>2</sub>+ ... + a<sub>2n</sub>x<sub>n</sub>= b<sub>2</sub>\n  .. .. ..\n  a<sub>m1</sub>x<sub>1</sub>+ a<sub>m2</sub>x<sub>2</sub>+ ... + a<sub>mn</sub>x<sub>n</sub>= b<sub>m</sub>\n  <font style=\"color: rgb(255,0,255);\">x<sub>2</sub> ≥ 3</font><sub></sub>\n- <strong>variables constrained to non-negative integer<strong>-values</strong>:</strong>\n  x<sub>1</sub>, ..., x<sub>n</sub>∈ <strong>ℤ</strong>\n  x<sub>1</sub>, ..., x<sub>n</sub> ≥ 0"
>     ]
>   ]
> }
> ```
>
> then we recursively solve these 2 ILP subproblems
>
> the optimal solution to the original problem will be the better of the solutions to these 2 subproblems
# <strong>B&B </strong><strong>Exhaustive </strong><strong>Search -</strong><strong> Algorithm Pseudocode</strong>
```
b&b-solver(ilp-problem) {
	relaxed-lp-problem = relax-integer-constraints(ilp-problem)
	(optimal-vector, optimal-z-value) = lp-solver(relaxed-lp-problem)
	if optimal-vector contains all integers
		return (optimal-vector, optimal-z-value)
	else
		xᵢ = choose-variable-to-branch-from() # could be anything
		xᵢ-value = get-xᵢ-value-from(optimal-vector)
		ilp-subproblem-1 = add-constraint(ilp-problem, "xᵢ ≤ floor(xᵢ-value)")
		ilp-subproblem-2 = add-constraint(ilp-problem, "xᵢ ≥ ceiling(xᵢ-value)")
		(vector-1, value-1) = b&b-solver(ilp-subproblem-1)
		(vector-2, value-2) = b&b-solver(ilp-subproblem-2)
		if value-1 > value-2
			return (vector-1, value-1)
		else
			return (vector-2, value-2)
}
```
# <strong>B&B </strong><strong>Exhaustive </strong><strong>Search - With Memory - Algorithm Pseudocode</strong>

extend <strong>B&B </strong><strong>Exhaustive </strong><strong>Search </strong>by keeping track of the biggest integer z-value seen so far
```
global current-max-z-value = -infinity

b&b-solver(ilp-problem) {
	relaxed-lp-problem = relax-integer-constraints(ilp-problem)
	(optimal-vector, optimal-z-value) = lp-solver(relaxed-lp-problem)
	if optimal-z-value < current-max-z-value
		return (bogus-vector, -infinity)
	else
		if optimal-vector contains all integers
			current-max-z-value = optimal-z-value
			return (optimal-vector, optimal-z-value)
		else
			xᵢ = choose-variable-to-branch-from() # could be anything
			xᵢ-value = get-xᵢ-value-from(optimal-vector)
			ilp-subproblem-1 = add-constraint(ilp-problem, "xᵢ ≤ floor(xᵢ-value)")
			ilp-subproblem-2 = add-constraint(ilp-problem, "xᵢ ≥ ceiling(xᵢ-value)")
			(vector-1, value-1) = b&b-solver(ilp-subproblem-1)
			(vector-2, value-2) = b&b-solver(ilp-subproblem-2)
			if value-1 > value-2
				current-max-z-value = value-1
				return (vector-1, value-1)
			else
				current-max-z-value = value-2
				return (vector-2, value-2)
}
```
# <strong>B&B </strong><strong>Exhaustive </strong><strong>Search - With Upper Bound Function - Algorithm Pseudocode</strong>

TODO - similar to Upper Bound Function of: [[Branch And Bound (B&B) - On Finite Domain]]
