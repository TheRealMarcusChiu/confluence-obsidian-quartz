---
title: "Complex Conjugate Root Theorem"
created: 2023-06-09T12:07:31.809-05:00
modified: 2023-06-09T12:28:30.747-05:00
parent: "[[Fundamental Theorem of Algebra]]"
children: []
---
###### Complex Conjugate Root Theorem
````excerpt
- states that if 𝑃 is a polynomial in one variable with real coefficients, and 𝑎 + 𝑏𝑖 is a root of 𝑃 with 𝑎 and 𝑏 real numbers, then its complex conjugate 𝑎 - 𝑏𝑖 is also a root of 𝑃
- it follows from this and the [[Fundamental Theorem of Algebra]] that, if the degree of a real polynomial is odd, it must have at least one real root. That fact can also be proved by using the intermediate value theorem
````
^excerpt

# Proof \#1

Consider the polynomial:
- 𝑃(𝑥) = 𝑎<sub>0</sub> + 𝑎<sub>1</sub>𝑥 + 𝑎<sub>2</sub>𝑥<sup>2</sup> + ... + 𝑎<sub>𝑛</sub>𝑥<sup>𝑛</sup>

where all 𝑎<sub>𝑖</sub> are real. Suppose some complex number 𝑧 is a root of 𝑃, that is 𝑃(𝑧) = 0. It needs to be shown that:
- 𝑃(𝑧̅) = 0

If 𝑃(𝑧) = 0, then:
- 𝑎<sub>0</sub> + 𝑎<sub>1</sub>𝑧 + 𝑎<sub>2</sub>𝑧<sup>2</sup> + ... + 𝑎<sub>𝑛</sub>𝑧<sup>𝑛</sup> = 0
- $\sum_{i=0}^{n}a_iz^i = 0$

Now:
- $P(\overline{z}) = \sum_{i=0}^{n}a_i(\overline{z})^i$

and given the properties of complex conjugation:
- $\sum_{i=0}^{n}a_i(\overline{z})^i = \sum_{i=0}^{n}a_i\overline{z^i} = \sum_{i=0}^{n}\overline{a_iz^i} = \overline{\sum_{i=0}^{n}a_iz^i}$

Since
- $\overline{\sum_{i=0}^{n}a_iz^i} = \overline{0}$

It follows that:
- $\sum_{i=0}^{n}a_i(\overline{z})^i = \overline{0} = 0$

That is:
- $P(\overline{z}) = a_0+a_1\overline{z}+a_2\overline{z}^2+...+a_n\overline{z}^n = 0$

Note this only works because 𝑎<sub>𝑖</sub> are real, that is 𝑎̅<sub>𝑖</sub>= 𝑎<sub>𝑖</sub>.
