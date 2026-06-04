---
title: "Cutting Plane Algorithm"
created: 2021-09-13T05:26:13.931-05:00
modified: 2021-09-13T05:26:13.931-05:00
parent: "[[ILP - Algorithms Solving Problem]]"
children: []
---
cutting plane algorithm is one of several methods used to solve [[Integer／Discrete Linear Programming／Optimization (ILP)|ILP problems]]
# <strong>Cutting Plane Algorithm - Algorithm Description</strong>

> [!expand]- Click here to expand...
> consider the following [[Integer／Discrete Linear Programming／Optimization (ILP)|ILP]] problem:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "ILP Problem (Matrix Form)",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "ILP Problem (Expanded Form)",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- <strong>objective function:</strong>\n  max Z = cx\n- <strong>linear constraints:</strong>\n  Ax <font style=\"color: rgb(0,51,102);\">≤</font> b\n- <strong>integer variables:</strong>\n  x<sub>1</sub> ∈ ℤ\n  x<sub>2</sub> ∈ ℤ\n  ...\n  x<sub>n</sub> ∈ ℤ\n\nwhere ℤ is the set of integers",
>       "- <strong>objective function:</strong>\n  max Z = c<sub>1</sub>x<sub>1</sub> + c<sub>1</sub>x<sub>1</sub> + ... + c<sub>n</sub>x<sub>n</sub>\n- <strong>linear constraints:</strong>\n  a<sub>11</sub>x<sub>1</sub> + a<sub>12</sub>x<sub>2</sub> + ... + a<sub>1n</sub>x<sub>n</sub><font style=\"color: rgb(0,51,102);\">≤</font> b<sub>1</sub>\n  a<sub>21</sub>x<sub>1</sub> + a<sub>22</sub>x<sub>2</sub> + ... + a<sub>2n</sub>x<sub>n</sub><font style=\"color: rgb(0,51,102);\">≤</font> b<sub>2</sub>\n  ...\n  a<sub>m1</sub>x<sub>1</sub> + a<sub>m2</sub>x<sub>2</sub> + ... + a<sub>mn</sub>x<sub>n</sub><font style=\"color: rgb(0,51,102);\">≤</font> b<sub>m</sub>\n- <strong>integer variables:</strong>\n  x<sub>1</sub> ∈ ℤ\n  x<sub>2</sub> ∈ ℤ\n  ...\n  x<sub>n</sub> ∈ ℤ"
>     ]
>   ],
>   "tableStyle": "width: 664.0px;"
> }
> ```
>
> assume for simplicity that the coefficients of each c<sub>i</sub> are integers (if they are rationals, multiply them by a sufficiently large number to make them integers)
>
> first remove/relax the integer-variable-restriction from the ILP problem (i.e. LP relaxation)
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
>       "- <strong>objective function:</strong>\n  max Z = cx\n- <strong>linear constraints:</strong>\n  Ax <font style=\"color: rgb(0,51,102);\">≤</font> b"
>     ]
>   ],
>   "tableStyle": "width: 24.1176%;"
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
> if the vector contains non-integer values, let this vector be x<sub>optimal-1</sub>
>
> then any integer vector x, that within the feasible region of the LP satisfies the inequality:
> - cx ≤ ⌊cx<sub>optimal-1</sub>⌋
>
> note: If with a given <strong>c</strong> we cannot cut anymore (because <font style="color: rgb(0,51,102);"><strong>cx<sub>optimal-i</sub></strong></font> is already an integer), then we use another arbitrary integer vector <strong>c' </strong>
>
> now let's add the inequality to the ILP problem (note that ⌊cx<sub>optimal-1</sub>⌋ is a numerical constant, since x<sub>optimal-1</sub>is already known)
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "New ILP Problem",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "- <strong>objective function:</strong>\n  max Z = cx\n- <strong>linear constraints:</strong>\n  Ax <font style=\"color: rgb(0,51,102);\">≤</font> b\n  <font style=\"color: rgb(255,0,255);\">cx ≤ ⌊cx<sub>optimal-1</sub>⌋</font>\n- <strong>integer variables:</strong>\n  x<sub>1</sub> ∈ ℤ\n  x<sub>2</sub> ∈ ℤ\n  ...\n  x<sub>n</sub> ∈ ℤ"
>     ]
>   ],
>   "tableStyle": "width: 19.7794%;"
> }
> ```
>
> this new inequality "cuts down" some part of the [[Polytope (Polygon - Polyhedron／Polyhedra)|polytope]], but guarantees to keep all integer vectors of the original feasibility region
>
> ![[Cutting Plane Algorithm/cutting-plane-algorithm.png|400x250]]
>
> then we recursively solve this New ILP Problem by repeating the algorithm
> ### Theorem 1
>
> > [!expand]- Click here to expand...
> > at some point after a finite amount of iterations (without checking whether optimal vector returned by LP solver is integral or not) we arrive at a system in which all vertices of [[Polytope (Polygon - Polyhedron／Polyhedra)|polytope]] are integer vectors
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "Final ILP Problem (after m repetitions)",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       }
> >     ],
> >     [
> >       "- <strong>objective function:</strong>\n  max Z = cx\n- <strong>linear constraints:</strong>\n  Ax <font style=\"color: rgb(0,51,102);\">≤</font> b\n  <font style=\"color: rgb(255,0,255);\">cx ≤ ⌊cx<sub>optimal-1</sub>⌋</font>\n  <font style=\"color: rgb(255,0,255);\">cx ≤ ⌊cx<sub>optimal-2</sub>⌋</font>\n  <font style=\"color: rgb(255,0,255);\">...</font>\n  <font style=\"color: rgb(255,0,255);\">cx ≤ ⌊cx<sub>optimal-m</sub>⌋</font>\n- <strong>integer variables:</strong>\n  x<sub>1</sub> ∈ ℤ\n  x<sub>2</sub> ∈ ℤ\n  ...\n  x<sub>n</sub> ∈ ℤ"
> >     ]
> >   ],
> >   "tableStyle": "width: 23.3824%;"
> > }
> > ```
> >
> > then solving this LP system we will ALWAYS get the optimum integer solution of the ILP
> >
> > ![[Cutting Plane Algorithm/cutting-plane-algorithm-final-iteration.png|253x250]]
# <strong>Cutting Plane Algorithm - Algorithm Pseudocode</strong>
```
cpa(ilp-problem) {
    relaxed-lp-problem = relax-integer-constraints(ilp-problem)
    (optimal-vector, optimal-z-value) = lp-solver(relaxed-lp-problem)
    if optimal-vector contains all integers
        return (optimal-vector, optimal-z-value)
    else
        c = get-arbitrary-vector()
        new-ilp-problem = add-constraint(ilp-problem, "cx ≤ floor(c- optimal-vector)")
        return cpa(new-ilp-problem)
}
```
