---
title: "Branch And Bound (B&B) - On Finite Domain"
created: 2021-09-13T05:26:12.173-05:00
modified: 2026-05-24T20:40:59.531-05:00
parent: "[[Branch And Bound (B&B)]]"
children: []
---
# B&B Exhaustive Search

given an optimization problem where discrete variables have a FINITE size domain (i.e. [Combinatorial Programming & 0-1 Programming](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=8225143) problems)

```merge-table
{
  "rows": [
    [
      {
        "content": "Finite ILP Problem",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "- <strong>objective function <font style=\"color: rgb(255,0,255);\">(can be non-linear)</font>:</strong>\n  maximize Z = cx<sub></sub>+ c<sub>2</sub>x<sub>2</sub>+ ... + c<sub>n</sub>x<sub>n</sub>\n- <strong>linear constraints:</strong>\n  a<sub>11</sub>x<sub>1</sub>+ a<sub>12</sub>x<sub>2</sub>+ ... + a<sub>1n</sub>x<sub>n</sub>≤ b<sub>1</sub>\n  a<sub>21</sub>x<sub>1</sub>+ a<sub>22</sub>x<sub>2</sub>+ ... + a<sub>2n</sub>x<sub>n</sub>≤ b<sub>2</sub>\n  .. .. ..\n  a<sub>m1</sub>x<sub>1</sub>+ a<sub>m2</sub>x<sub>2</sub>+ ... + a<sub>mn</sub>x<sub>n</sub>≤ b<sub>m</sub>\n- <strong>variables constrained to given<font style=\"color: rgb(255,0,255);\"> finite set of <strong>possible integer values</strong></font>:</strong>\n  x<sub>1</sub>, ..., x<sub>n</sub>∈ \\[finite size of possible integer values\\]"
    ]
  ]
}
```

we need to somehow remove the linear constraints without changing the problem (i.e. transform our constrained task into an unconstrained one)

It can be done by the method that is often called penalty function method. It is based on the idea that we can substitute a constraint by modifying the objective function, such that we “penalize” those vectors that violate the constraint. In this way, we can do the search over all vectors (with the modified objective function), because when a global, unconstrained optimum is found, the “penalty” does not allow it to be taken at a vector that violates the constraint

![[Branch And Bound (B&B) - On Finite Domain/branch-and-bound-penalty-function.png|370]]
### B&B Exhaustive Search - Pseudocode
- i is index
- x is a n-dimensional vector

call with F(i=0, x=anything)
```
function F(i, x)
    if i == n
        return penalty-function(x)
    else
        max = -infinity
        for v in possible-values:
            xᵢ₊₁ = v
            u = F(i+1, x)
            if u > max
                max = u
        return max
```

see PDF below for more details
# B&B Exhaustive Search - With Memory & Upper Bound Function

extend <strong>B&B </strong><strong>Exhaustive </strong><strong>Search </strong>by:
- keeping track of the biggest integer z-value seen so far
- using an upper-bound-function U(i, x) such that:
  
  <span style="white-space: pre-wrap"><code>F(i, x) ≤ U(i, x)</code></span>

### B&B Exhaustive Search - With Memory & Upper Bound Function - Pseudocode
```
global current-max-z-value = -infinity

function F(i, x)
    if i == n
		pf = penalty-function(x)
		if pf > current-max-z-value
			current-max-z-value = pf
        return pf
    else
		if U(i, x) > current-max-z-value
        	max = -infinity
        	for v in possible-values:
          		xᵢ₊₁ = v
            	u = F(i+1, x)
            	if u > max
					max = u
        	return max
		else
			return current-max-z-value
```

this approach makes sense only if we can compute the upper-bound-function significantly faster than the original task
### How Do We Get The Upper-Bound-Function U(i, x)?

2 ways:
- relaxing the ILP problem to a LP problem
- fast greedy algorithm

###### Relaxing the ILP Problem

> [!expand]- Click here to expand...
> U(i, x) is the optimum solution of the relaxed LP problem of the original ILP problem
>
> relaxed LP problem is obtained by replacing the ILP discrete constraint
>
> ```merge-table
> {
>   "rows": [
>     [
>       "xᵢ ∈ {finite size of possible integer values}\n\nby\n<span style=\"white-space: pre-wrap\"><code>smallest-of({finite size of possible integer values}) ≤ xᵢ ≤ largest-of({finite size of possible integer values})</code></span>"
>     ]
>   ]
> }
> ```
>
> for example
>
> ```merge-table
> {
>   "rows": [
>     [
>       "<span style=\"white-space: pre-wrap\"><code>xᵢ ∈ {1, 2, 6}</code></span>\n\nbecomes\n<span style=\"white-space: pre-wrap\"><code>1 ≤ xᵢ ≤ 6</code></span>"
>     ]
>   ]
> }
> ```
###### Fast Greedy Algorithm

> [!expand]- Click here to expand...
> greedy algorithm is dependent on the problem itself
# More Resources

![[Branch And Bound (B&B)/10 - Branch and Bound Algorithm.pdf]]
