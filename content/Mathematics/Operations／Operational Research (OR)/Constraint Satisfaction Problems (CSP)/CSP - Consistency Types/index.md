---
title: "CSP - Consistency Types"
created: 2021-09-13T05:26:24.199-05:00
modified: 2021-09-13T05:26:24.199-05:00
parent: "[[Constraint Satisfaction Problems (CSP)]]"
children: []
---
- Unary Constraint - restricts the value of a single variable
- Binary Constraint - restricts the values of two variables through a relation
- Global Constraint - constraint involving an arbitrary number of variables

# node-consistency (1-consistency)

The node representing a variable V in constraint graph is <strong>node consistent </strong>if for every value x in the current domain of V, each unary constraint on V is satisfied
# arc-consistency (2-consistency)
Arc (V<sub>i</sub>,V<sub>j</sub>) is <strong>arc consistent</strong> if for every value x the current domain of V<sub>i</sub> there is some value y in the domain of V<sub>j</sub> such that V<sub>i</sub>=x and V<sub>j</sub>=y is permitted by the binary constraint between V<sub>i</sub> and V<sub>j</sub>

![[CSP - Consistency Types/Screen Shot 2019-03-25 at 10.03.07 PM.png|200]]
(exp. this constraint graph is arc consistent but there is no solution that satisfies all the constraints)
# path-consistency v 3-consistency
3-consistency coincides with path consistency only if all constraints are binary, because path consistency does not involve ternary constraints while 3-consistency does
# k-consistency

A graph is <strong>k-consistent</strong> if, for any set of k-1 variables and for any consistent assignment to those variables, a consistent value can always be assigned to any k<sup>th</sup> variable
# strongly k-consistent
A graph is <strong>strongly k-consistent </strong>If it is k-consistent and is also (k-1) consistent, (k-2) consistent.... all the way down to 1
# bounds consistency
The node representing a variable V<sub>i</sub> in constraint graph is <strong>bound consistent </strong>if both the lower-bound and upper-bound values of domain of V<sub>i</sub>, there exists some value of V<sub>j</sub>that satisfies the constraint between V<sub>i</sub>and V<sub>j</sub>for every variable V<sub>j</sub>
# directional arc and path consistency
Assuming that the order of evaluation of the variables is ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/737e02a5fbf8bc31d443c91025339f9fd1de1065), a constraint satisfaction problem is <strong>directionally arc consistent</strong> if every variable ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/e87000dd6142b81d041896a30fe58f0c3acb2158) is arc consistent with any other variable ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/5db47cb3d2f9496205a17a6856c91c1d3d363ccd) such that ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/e60ff2d1b23e30fb2979e8c1536da03493f943cf). <strong>Directional path consistency</strong> is similar, but two variables ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/1cd4d8ff7cb1b6282ffbee7cdfebd612cf5fb146) have to be path consistent with ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/10539e8b5112451bc309563fbd6cbb7b8dd67de4) only if ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/cf30cab844a14db8f3973c27875fd5aa14ddf683). 
# relational consistency
todo

[https://en.wikipedia.org/wiki/Local_consistency#Path_consistency](https://en.wikipedia.org/wiki/Local_consistency#Path_consistency)[https://ktiml.mff.cuni.cz/~bartak/constraints/consistent.html#pc](https://ktiml.mff.cuni.cz/~bartak/constraints/consistent.html#pc)
