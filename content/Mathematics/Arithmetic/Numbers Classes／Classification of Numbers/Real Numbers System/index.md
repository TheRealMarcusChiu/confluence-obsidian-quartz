---
title: "Real Numbers System"
created: 2023-06-11T16:41:33.328-05:00
modified: 2023-07-08T16:07:06.456-05:00
parent: "[[Numbers Classes／Classification of Numbers]]"
children: []
---
###### Real Numbers System (ℝ)
````excerpt
- a type of [[Numbers Classes／Classification of Numbers|number class]] that can be expressed as an infinite decimal expansion
- are used in measurements of continuously varying quantities such as size and time, in contrast to the natural numbers 1, 2, 3, …, arising from counting
````
^excerpt

# Real Numbers - Axioms

A non-empty set ℝ together with operations +,· and ordering ≤ is called the <em>real numbers</em> if it satisfies:
- (ℝ, +, 0) is an [[Abelian Groups (Algebraic Structure)|abelian group]]
- (ℝ\\{0}, ·, 1) is an [[Abelian Groups (Algebraic Structure)|abelian group]]
- · is [[Distributivity／Distributive|distributive]] over : <font style="color: rgb(122,134,154);">𝑥·(𝑦 + 𝑧) = 𝑥·𝑦 + 𝑥·𝑧</font>
- ≤ is a [[Binary Ordered Relations - Types (Partial Order - Total Order - Quasi Order)|total order]], compatible with + and · (i.e. Archimedean property)
- every [[Mathematical Space (Cauchy Sequences)|Cauchy sequence]] is a [[Metric Spaces (Sequences - Convergent／Convergence／Converges - Bounded - Cauchy Sequences)|convergent sequence]]

Given a non-empty set ℝ, we define the <em>absolute value operation</em> as follows:
- $|x| = \begin{cases} x  & \text{if } x≥0 \\ -x & \text{if } x<0 \\ \end{cases}$

With the <em>absolute value operation</em> we have the following properties:
- |𝑥 · 𝑦| = |𝑥| · |𝑦|
- |𝑥 + 𝑦| ≤ |𝑥| + |𝑦|
