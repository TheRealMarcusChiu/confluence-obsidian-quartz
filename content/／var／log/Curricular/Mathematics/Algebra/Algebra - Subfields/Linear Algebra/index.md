---
title: "Linear Algebra"
created: 2021-09-13T05:25:47.308-05:00
modified: 2026-05-19T19:34:40.783-05:00
parent: "[[Algebra - Subfields]]"
children:
  - "[[Linear Algebra - Mathematical Objects]]"
  - "[[Linear Algebra - Operations／Operators]]"
  - "[[Linear Extension Theorem]]"
---
###### Linear Algebra
````excerpt
- is a mathematical discipline that deals with vectors and matrices and, more generally, with vector spaces and linear transformations
- unlike other parts of mathematics that are frequently invigorated by new ideas and unsolved problems, linear algebra is very well understood
````
^excerpt

# Linear Algebra - Definition
<strong>Linear Algebra</strong> deals with <strong>(system of)</strong><strong> [linear equations](https://en.wikipedia.org/wiki/Linear_equation)</strong> such as

> [!indent]
> 𝑎<sub>1</sub>𝑥<sub>1</sub> + ... + 𝑎<sub>𝑛</sub>𝑥<sub>𝑛</sub> = 𝑏

<strong>[[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformations]]</strong> such as

> [!indent]
> (𝑥<sub>1</sub>, ..., 𝑥<sub>𝑛</sub>) → 𝑎<sub>1</sub>𝑥<sub>1</sub> + ... + 𝑎<sub>𝑛</sub>𝑥<sub>𝑛</sub>

and their representations in <strong>[[Vector Spaces - Linear Spaces|vector spaces]]</strong> and through <strong>[[Matrix／Matrices|matrices]]</strong>
- 𝐿(𝑎𝑣̅) = 𝑎𝐿(𝑣̅)
- 𝐿(𝑣̅ + 𝑤̅) = 𝐿(𝑣̅) + 𝐿(𝑤̅)
- 𝐿(\[𝑥 𝑦\]) = 𝐿(𝑥\[1 0\] + 𝑦\[0 1\]) = 𝑥𝐿(\[1 0\]) + 𝑦 𝐿(\[0 1\])

<strong>Linear Algebra</strong> can be expressed in 3 equivalent languages:
- <strong>[[Vector Spaces - Linear Spaces|Vector Spaces]]</strong> - which provide concise and coordinate-free statements
- <strong>[[Matrix／Matrices|Matrices]]</strong> - which are convenient for expressing concisely explicit computations
- <strong>Systems of Linear Equations</strong> - which provide more elementary formulations

# Linear Algebra - Tutorials
- [Gilbert Strang - Video Lectures](https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8)
- [3Blue1Brown - Series](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab)
- [Interactive Linear Algebra](https://textbooks.math.gatech.edu/ila/overview.html) - [[interative-linear-algebra-compressed.pdf|interactive-linear-algebra-compressed.pdf]]

# Linear Algebra - Subpages
- [[Linear Algebra vs Matrix Algebra]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
# Linear Algebra - Extensions
- [[Multilinear Algebra]]
- [[Numerical Linear Algebra (NLA) - Applied Linear Algebra (ALA)]]
