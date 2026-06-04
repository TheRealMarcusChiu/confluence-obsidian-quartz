---
title: "Branch and Cut"
created: 2021-09-13T05:26:13.188-05:00
modified: 2026-05-21T15:07:00.317-05:00
parent: "[[ILP - Algorithms Solving Problem]]"
children: []
---
###### Branch and Cut
````excerpt
- is the combination of the [[Cutting Plane Algorithm|Cutting Plane]] and [[Branch And Bound (B&B)|Branch and Bound]] Algorithms for solving [[Integer／Discrete Linear Programming／Optimization (ILP)|ILP]] problems
````
^excerpt

### Example ILP Problem

consider the integer programming problem:

```merge-table
{
  "rows": [
    [
      {
        "content": "ILP Problem",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- <strong>objective function:</strong>\n  min Z = -5x<sub>1</sub> - 6x<sub>2</sub>\n- <strong>linear constraints:</strong>\n  x<sub>1</sub> + 2x<sub>2</sub> ≤ 7\n  2x<sub>1</sub> - x<sub>2</sub> ≤ 3\n- <strong>non-negative integer variables:</strong>\n  x<sub>1</sub>, x<sub>2</sub> ∈ non-negative integers"
    ]
  ]
}
```
# Branch and Cut - Algorithm Details

> [!expand]- Click here to expand...
> 1. relax the integer constraints, which gives new problem (i.e. LP relaxation):
>     ```merge-table
>     {
>       "rows": [
>         [
>           {
>             "content": "Relaxed LP Problem",
>             "header": true,
>             "bg": "#F4F5F7"
>           }
>         ],
>         [
>           "- <strong>objective function:</strong>\n  min Z = -5x<sub>1</sub> - 6x<sub>2</sub>\n- <strong>linear constraints:</strong>\n  x<sub>1</sub> + 2x<sub>2</sub> ≤ 7\n  2x<sub>1</sub> - x<sub>2</sub> ≤ 3\n- <strong>non-negative variables:</strong>\n  x<sub>1</sub>, x<sub>2</sub> ≥ 0"
>         ]
>       ],
>       "tableStyle": "width: 22.1212%;"
>     }
>     ```
> 2. next solve the relaxed LP problem with a general [LP solver](http://confluence.marcuschiu.com/display/NOT/LP+-+Ways+Solving+Problem)
> 3. the Solver returns an optimal vector/point (x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>) = (a, b, ..., c) with value Z = something
> 4. this optimal vector/point can be either:
> 	- vector values are all integers (i.e. a valid solution for ILP problem)
> 	- vector values contain a non-integer value (i.e. not a valid solution for ILP)
> 5. if the vector values are all integers, we go ahead and return this vector and Z value as the optimal solution of the ILP problem
> 6. if the vector contains non-integer values, we have 2 choices:
> 	1. should the LP relaxation be improved by adding a cutting plane (i.e. [[Cutting Plane Algorithm]]) (e.g. adding constraint: x<sub>1</sub>+ x<sub>2</sub>≤ 4)?
> > [!expand]- Click here to expand...
> > let this vector be x<sub>optimal-1</sub>
> >
> > then any integer vector x, that within the feasible region of the LP satisfies the inequality:
> > - cx ≤ ⌊cx<sub>optimal-1</sub>⌋
> >
> > note: If with a given <strong>c</strong> we cannot cut anymore (because <font style="color: rgb(0,51,102);"><strong>cx<sub>optimal-i</sub></strong></font> is already an integer), then we use another arbitrary integer vector <strong>c' </strong>
> >
> > now let's add the inequality to the ILP problem (note that ⌊cx<sub>optimal-1</sub>⌋ is a numerical constant, since x<sub>optimal-1</sub>is already known)
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "New ILP Problem",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       }
> >     ],
> >     [
> >       "- <strong>objective function:</strong>\n  max Z = cx\n- <strong>linear constraints:</strong>\n  Ax <font style=\"color: rgb(0,51,102);\">≤</font> b\n  <font style=\"color: rgb(255,0,255);\">cx ≤ ⌊cx<sub>optimal-1</sub>⌋</font>\n- <strong>integer variables:</strong>\n  x<sub>1</sub> ∈ ℤ\n  x<sub>2</sub> ∈ ℤ\n  ...\n  x<sub>n</sub> ∈ ℤ"
> >     ]
> >   ],
> >   "tableStyle": "width: 217.0px;"
> > }
> > ```
> >
> > this new inequality "cuts down" some part of the [polytope](http://confluence.marcuschiu.com/display/NOT/Polytope+-+Polygon+-+Polyhedron), but guarantees to keep all integer vectors of the original feasibility region
> >
> > > [!list-indent-undo]
> > > > [!indent]
> > > > ![[Branch and Cut/cutting-plane-algorithm.png|400x250]]
> >
> > then we recursively solve this New ILP Problem by repeating the algorithm
> 	2. should the problem be divided into 2 by splitting on a variable (i.e. [[Branch And Bound (B&B)|Branch and Bound Algorithm]])?
> > [!expand]- Click here to expand...
> > 1. let's say the algorithm chooses to split on variable x<sub>2</sub>whose optimal value is 2.2
> > 2. now we introduce 2 new constraints:
> > 	1. x<sub>2</sub> ≤ floor(2.2) = 2
> > 	2. x<sub>2</sub> ≥ ceiling(2.2) = 3
> > 3. we add these constraints to the original problem, giving 2 new subproblems:
> > 4. now we introduce 2 new constraints:
> >     ```merge-table
> >     {
> >       "rows": [
> >         [
> >           {
> >             "content": "ILP Subproblem 1",
> >             "header": true,
> >             "bg": "#F4F5F7"
> >           },
> >           {
> >             "content": "ILP Subproblem 2",
> >             "header": true,
> >             "bg": "#F4F5F7"
> >           }
> >         ],
> >         [
> >           "- <strong>objective function:</strong>\n  min Z = -5x<sub>1</sub> - 6x<sub>2</sub>\n- <strong>linear constraints:</strong>\n  x<sub>1</sub> + 2x<sub>2</sub> ≤ 7\n  2x<sub>1</sub> - x<sub>2</sub> ≤ 3\n  <font style=\"color: rgb(255,0,255);\">x<sub>2</sub>≤ 2</font>\n- <strong>non-negative integer variables:</strong>\n  x<sub>1</sub>, x<sub>2</sub> ∈ non-negative integers",
> >           "- <strong>objective function:</strong>\n  min Z = -5x<sub>1</sub> - 6x<sub>2</sub>\n- <strong>linear constraints:</strong>\n  x<sub>1</sub> + 2x<sub>2</sub> ≤ 7\n  2x<sub>1</sub> - x<sub>2</sub> ≤ 3\n  <font style=\"color: rgb(255,0,255);\">x<sub>2</sub>≥ 3</font>\n- <strong>non-negative integer variables:</strong>\n  x<sub>1</sub>, x<sub>2</sub> ∈ non-negative integers"
> >         ]
> >       ],
> >       "tableStyle": "width: 44.1667%;"
> >     }
> >     ```
> > 5. the optimal solution to the original problem will be the better of the solutions to these 2 sub-problems
> > 6. then we recursively repeat the algorithm for each of the subproblems
> > 	1. the solution to the LP relaxation of the first sub-problem is (1,3) with value -23. since this solution is integral, it solves the first sub-problem. this solution becomes the incumbent best known feasible solution. The optimal solution for the LP relaxation of the second subproblem is (2.5, 2), with value -24.5. Since this point is non-integral, it does not solve the subproblem. Therefore, the second sub-problem must be attacked further
> > 	2. we can then recursively repeat the algorithm for that subproblem
> 7. end
# Branch and Cut - Algorithm Pseudocode

using [[Cutting Plane Algorithm]] and [[Branch And Bound (B&B) - On Infinite Domain|Branch & Bound - On Infinite Domain]] pseudocode
```
BRANCH-AND-CUT(ilp-problem) {
    relaxed-lp-problem = relax-integer-constraints(ilp-problem)
    (optimal-vector, optimal-z-value) = lp-solver(relaxed-lp-problem)
    if optimal-vector contains all integers
        return (optimal-vector, optimal-z-value)
    else
		// choose between cutting-plane or branch-and-cut
		return cpa(ilp-problem, optimal-vector)
		or
		retrun bb(ilp-problem, optimal-vector)
}

cpa() {
	c = get-arbitrary-vector()
    new-ilp-problem = add-constraint(ilp-problem, "cx ≤ floor(c- optimal-vector)")
    return BRANCH-AND-CUT(new-ilp-problem)
}

bb() {
	xᵢ = choose-variable-to-branch-from() # could be anything
    xᵢ-value = get-xᵢ-value-from(optimal-vector)
    ilp-subproblem-1 = add-constraint(ilp-problem, "xᵢ ≤ floor(xᵢ-value)")
    ilp-subproblem-2 = add-constraint(ilp-problem, "xᵢ ≥ ceiling(xᵢ-value)")
    (vector-1, value-1) = BRANCH-AND-CUT(ilp-subproblem-1)
    (vector-2, value-2) = BRANCH-AND-CUT(ilp-subproblem-2)
    if value-1 > value-2
        return (vector-1, value-1)
    else
        return (vector-2, value-2)
}
```
