---
title: "Quadratic Forms"
created: 2021-09-13T05:26:05.214-05:00
modified: 2023-12-29T16:28:58.478-06:00
parent: "[[Multi-Variable／Multivariable／Multivariate Functions]]"
children: []
---
###### Quadratic Forms
````excerpt
- a <em>quadratic form</em> on ℝ<sup>𝑛</sup> is a [[Functions (Domain - Codomain - Preimage - Image - Range)|function]] 𝑄 defined on ℝ<sup>𝑛</sup>whose value at vector 𝑣∊ℝ<sup>𝑛</sup>can be computed by:
	- 𝑄(𝑣) = 𝑣<sup>𝑇</sup>𝐴𝑣
- where:
	- 𝐴 - [[Symmetric Matrix|symmetric matrix]] (also called the <em>matrix of the quadratic form</em>)
- is a polynomial where all terms are of degree two (e.g. 𝑓(𝑥,𝑦) = 𝑥<sup>2</sup> + 3𝑥𝑦 + 4𝑦<sup>2</sup>), where 𝑣=(𝑥,𝑦) ∊ ℝ<sup>2</sup>)
- is a special case of a [[Bilinear Functionals - Bilinear Forms - 2／Two Forms|bilinear form 𝐵: 𝑉⨯𝑉→𝐹]] where the two sets of vectors 𝑣,𝑢∊𝑉 are equal (i.e. 𝑣=𝑢):
	- for example, consider:
		- bilinear form 𝐵(𝑣,𝑢) = 𝑣<sub>1</sub>𝑢<sub>1</sub> + 2𝑣<sub>1</sub>𝑢<sub>2</sub> + 3𝑣<sub>2</sub>𝑢<sub>1</sub>+ 4𝑣<sub>2</sub>𝑢<sub>2</sub>
		- quadratic form 𝑄(𝑣) = (𝑣<sub>1</sub>)<sup>2</sup>+ 5𝑣<sub>1</sub>𝑣<sub>2</sub> + 4(𝑣<sub>2</sub>)<sup>2</sup>
		- thus 𝑄(𝑣) = 𝐵(𝑣,𝑣)
- not to be confused with a quadratic equation, which has only one variable and includes terms of degree two or less:
	- for example, 𝑓(𝑥) = 𝑥<sup>2</sup>+ 5𝑥 + 4, is a quadratic equation NOT a quadratic form
````
^excerpt

# Quadratic Form - Examples

> [!expand]- Simplest Quadratic Form
> The simplest quadratic form is:
> - 𝑄(𝑥) = 𝑥<sup>𝑇</sup>𝐼𝑥 = ||𝑥||<sup>2</sup>

> [!expand]- Other Examples
> ###### from matrix form to function form
> ![[Quadratic Forms/quadratic-form-example-1.png|350]]<font style="color: rgb(128,128,128);">without cross-product terms</font>
>
> ![[Quadratic Forms/quadratic-form-example-2.png|350]] <font style="color: rgb(128,128,128);">with cross-product terms</font>
> ###### from function form to matrix form
>
> 𝑄(𝑥) = 5𝑥<sub>1</sub><sup>2</sup> + 3𝑥<sub>2</sub><sup>2</sup> + 3𝑥<sub>3</sub><sup>2</sup> - 𝑥<sub>1</sub>𝑥<sub>2</sub> + 8𝑥<sub>2</sub>𝑥<sub>3</sub>
>
> ![[Quadratic Forms/quadratic-form-example-3.png|301]]
# Quadratic Form - Changing Basis such that its Quadratic Form has no Cross-Products
###### Proof that any symmetric matrix 𝐴 can be rewritten to 𝐷 such that its quadratic form has no cross-products (see also Principal Axis Theorem below)

> [!expand]- Click here to expand...
> Change of variable/basis is an equation of the form:
> - 𝑥 = 𝑃𝑦
> - 𝑦 = 𝑃<sup>-1</sup>𝑥
>
> 𝑦 is the coordinate vector of 𝑥 relative to the basis of ℝ<sup>𝑛</sup> determined by the columns of 𝑃
>
> If the change of variable is made in a quadratic form 𝑥<sup>𝑇</sup>𝐴𝑥
> - 𝑥<sup>𝑇</sup>𝐴𝑥 = 𝑥<sup>𝑇</sup>𝐴𝑥
> - 𝑥<sup>𝑇</sup>𝐴𝑥 = (𝑃𝑦)<sup>𝑇</sup>𝐴𝑃𝑦
> - 𝑥<sup>𝑇</sup>𝐴𝑥 = 𝑦<sup>𝑇</sup>𝑃<sup>𝑇</sup>𝐴𝑃𝑦
> - 𝑥<sup>𝑇</sup>𝐴𝑥 = 𝑦<sup>𝑇</sup>𝐷𝑦 <font style="color: rgb(122,134,154);">\# Since 𝐴 is </font>[[Symmetric Matrix|symmetric]] <font style="color: rgb(122,134,154);">it guarantees an</font> [[Orthogonal／Orthonormal Matrix|orthogonal matrix]] <font style="color: rgb(122,134,154);">𝑃 such that 𝑃<sup>𝑇</sup>𝐴𝑃 is a</font> [[Diagonal Matrix|diagonal matrix]]<font style="color: rgb(122,134,154);"> 𝐷 (see proof</font> [[Spectral Theorem - 𝐴 is Orthogonally Diagonalizable ⟺ 𝐴 is Symmetric|here]]<font style="color: rgb(122,134,154);"> and Principal Axis Theorem below)</font>
###### Example

> [!expand]- Click here to expand...
> make a <em>change of variable</em> that transforms the quadratic form 𝑥<sup>𝑇</sup>𝐴𝑥 into a quadratic form with no cross-product term
>
> > [!indent]
> ![[Quadratic Forms/quadratic-form-change-of-basis-example.png|301]]
>
> [[Orthogonal Eigen／Spectral Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Orthogonally Diagonalizable／Non-Defective Matrix|orthogonally diagonalize]] 𝐴
> - [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues and eigenvectors]] of 𝐴
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Quadratic Forms/quadratic-forms-change-of-variables-basis-example-1.png|301]]
> - let
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Quadratic Forms/quadratic-forms-change-of-variables-basis-example-2.png|301]]
> - then
> - 𝐴 = 𝑃𝐷𝑃<sup>𝑇</sup>
> - and
> - 𝐷 = 𝑃<sup>-1</sup>𝐴𝑃 = 𝑃<sup>𝑇</sup>𝐴𝑃
>
> a suitable <em>change of variable</em> is:
> - 𝑥 = 𝑃𝑦
>
> where:
> > [!list-indent-undo]
> > > [!indent]
> > > ![[Quadratic Forms/quadratic-forms-change-of-variables-basis-example-3.png|310]]
>
> then:
> - 𝑥<sub>1</sub><sup>2</sup> - 8𝑥<sub>1</sub>𝑥<sub>2</sub> - 5𝑥<sub>2</sub><sup>2</sup> = 𝑥<sup>𝑇</sup>𝐴𝑥
> - 𝑥<sub>1</sub><sup>2</sup> - 8𝑥<sub>1</sub>𝑥<sub>2</sub> - 5𝑥<sub>2</sub><sup>2</sup> = (𝑃𝑦)<sup>𝑇</sup>𝐴𝑃𝑦
> - 𝑥<sub>1</sub><sup>2</sup> - 8𝑥<sub>1</sub>𝑥<sub>2</sub> - 5𝑥<sub>2</sub><sup>2</sup> = 𝑦<sup>𝑇</sup>(𝑃<sup>𝑇</sup>𝐴𝑃)𝑦
> - 𝑥<sub>1</sub><sup>2</sup> - 8𝑥<sub>1</sub>𝑥<sub>2</sub> - 5𝑥<sub>2</sub><sup>2</sup> = 𝑦<sup>𝑇</sup>𝐷𝑦
> - 𝑥<sub>1</sub><sup>2</sup> - 8𝑥<sub>1</sub>𝑥<sub>2</sub> - 5𝑥<sub>2</sub><sup>2</sup>= 3𝑦<sub>1</sub><sup>2</sup> - 7𝑦<sub>2</sub><sup>2</sup>
>
> ![[Quadratic Forms/quadratic-forms-change-of-variables-basis-example-4.png|301]]
> ###### 𝑄(𝑥) for 𝑥 = (2,-2)
>
> solve 𝑥<sup>𝑇</sup>𝐴𝑥:
> - 𝑥<sup>𝑇</sup>𝐴𝑥 = 𝑥<sub>1</sub><sup>2</sup> - 8𝑥<sub>1</sub>𝑥<sub>2</sub> - 5𝑥<sub>2</sub><sup>2</sup>
> - 𝑥<sup>𝑇</sup>𝐴𝑥 = 2<sup>2</sup> - 8(2)(-2) - 5(-2)<sup>2</sup>
> - 𝑥<sup>𝑇</sup>𝐴𝑥 = <font style="color: rgb(255,0,0);">16</font>
>
> find 𝑦 coordinates for 𝑥 = (2,-2):
>
> > [!indent]
> ![[Quadratic Forms/quadratic-forms-change-of-variables-basis-example-5.png|301]]
>
> solve 𝑦<sup>𝑇</sup>𝐷𝑦:
> - 𝑦<sup>𝑇</sup>𝐷𝑦 = 3𝑦<sub>1</sub><sup>2</sup> - 7𝑦<sub>2</sub><sup>2</sup>
> - 𝑦<sup>𝑇</sup>𝐷𝑦 = 3(6/√5)<sup>2</sup> - 7(-2/√5)<sup>2</sup>
> - 𝑦<sup>𝑇</sup>𝐷𝑦 = <font style="color: rgb(255,0,0);">16</font>
# Principal Axis/Axes Theorem - & Geometric View

> [!expand]- Click here to expand...
> ###### Principal Axis Theorem
>
> The principal Axis Theorem states that the principal axes are perpendicular
>
> Let 𝐴 be an 𝑛✕𝑛 symmetric matrix. Then there is an orthogonal <em>change of variable</em> 𝑥 = 𝑃𝑦 that transforms the quadratic form 𝑥<sup>𝑇</sup>𝐴𝑥 into a quadratic form 𝑦<sup>𝑇</sup>𝐷𝑦 with no cross-product terms
> ###### Principal Axis Theorem - Geometric View
>
> Say: 𝑄(𝑥) = 𝑥<sup>𝑇</sup>𝐴𝑥 and 𝐴 is a 2✕2 symmetric matrix
>
> Then the set of all 𝑥's that satisfy
> - 𝑄(𝑥) = 𝑥<sup>𝑇</sup>𝐴𝑥 = 𝑐
>
> Either corresponds to a graph looking like a:
> - ellipse (circle)
> - hyperbola
> - 2 intersecting lines
> - single point
> - no points at all
>
> If 𝐴 is a diagonal matrix then the graph is in "standard form"
>
> ```merge-table
> {
>   "rows": [
>     [
>       "![[Quadratic Forms/principal-axis-geometric-view-example-formula-1.png|301]]\n\n![[Quadratic Forms/principal-axis-geometric-view-3.png|301]]",
>       {
>         "content": "![[Quadratic Forms/principal-axis-geometric-view-example-formula-2.png|301]]\n\n![[Quadratic Forms/principal-axis-geometric-view-4.png|330]]",
>         "align": "center"
>       }
>     ]
>   ]
> }
> ```
>
> If 𝐴 is NOT a [[Diagonal Matrix|diagonal matrix]] then the graph is rotated out of "standard form"
>
> ```merge-table
> {
>   "rows": [
>     [
>       "𝑎𝑥<sub>1</sub><sup>2</sup> - 𝑏𝑥<sub>1</sub>𝑥<sub>2</sub> + 𝑐𝑥<sub>2</sub><sup>2</sup> = 1\n\n![[Quadratic Forms/principal-axis-geometric-view-2.png|301]]",
>       "𝑎𝑥<sub>1</sub><sup>2</sup> - 𝑏𝑥<sub>1</sub>𝑥<sub>2</sub> - 𝑐𝑥<sub>2</sub><sup>2</sup> = 1\n\n![[Quadratic Forms/principal-axis-geometric-view-1.png|330]]"
>     ]
>   ]
> }
> ```
# Quadratic Form - Matrix Form Duality & Classifying Quadratic Functions

> [!expand]- Click here to expand...
> see [[Positive／Negative Definite／Semi-Definite Indefinite Matrix|Positive/Negative Definite/Semi-Definite Indefinite Matrix]]
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "If Quadratic Form 𝑄(𝑥)",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "If Matrix Form 𝐴 (whose quadratic form is 𝑥<sup>𝑇</sup>𝐴𝑥)",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "then 𝑄(𝑥) and 𝐴 is",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Class",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       "if 𝑄(𝑥) > 0 for all 𝑥 ≠ 0",
>       "if eigenvalues of 𝐴 are all positive",
>       "then 𝑄(𝑥) and 𝐴 is",
>       {
>         "content": "positive definite",
>         "bg": "#F4F5F7"
>       },
>       "𝑄(𝑥) is strictly [[Convex Function - Concave Function|convex function]]"
>     ],
>     [
>       "if 𝑄(𝑥) < 0 for all 𝑥 ≠ 0",
>       "if eigenvalues of 𝐴 are all negative",
>       "then 𝑄(𝑥) and 𝐴 is",
>       {
>         "content": "negative definite",
>         "bg": "#F4F5F7"
>       },
>       "𝑄(𝑥) is strictly [[Convex Function - Concave Function|concave function]]"
>     ],
>     [
>       "if 𝑄(𝑥) can be positive and negative",
>       "if eigenvalues of 𝐴 are both positive and negative",
>       "then 𝑄(𝑥) and 𝐴 is",
>       {
>         "content": "indefinite",
>         "bg": "#F4F5F7"
>       },
>       "𝑄(𝑥) is neither convex nor concave"
>     ],
>     [
>       "if 𝑄(𝑥) ≥ 0 for all 𝑥",
>       "if eigenvalues of 𝐴 are all positive or zero",
>       "then 𝑄(𝑥) and 𝐴 is",
>       {
>         "content": "positive semi-definite",
>         "bg": "#F4F5F7"
>       },
>       "𝑄(𝑥) is a convex function"
>     ],
>     [
>       "if 𝑄(𝑥) ≤ 0 for all 𝑥",
>       "if eigenvalues of 𝐴 are all negative or zero",
>       "then 𝑄(𝑥) and 𝐴 is",
>       {
>         "content": "negative semi-definite",
>         "bg": "#F4F5F7"
>       },
>       "𝑄(𝑥) is a concave function"
>     ]
>   ],
>   "tableStyle": "width: 100.0%;"
> }
> ```
> ###### Quadratic Matrix Duality & Classification
> - by the <strong>principal axis theorem</strong>, there exists a <font style="color: rgb(122,134,154);"><em>change of variables/basis</em> (𝑥 = 𝑃𝑦)</font> such that:
> 	- 𝑄(𝑥) = 𝑥<sup>𝑇</sup>𝐴𝑥 = 𝑦<sup>𝑇</sup>𝐷𝑦 = 𝜆<sub>1</sub>𝑦<sub>1</sub><sup>2</sup> + ... + 𝜆<sub>𝑛</sub>𝑦<sub>𝑛</sub><sup>2</sup>
> - where:
> 	- 𝜆<sub>𝑖</sub>- are the eigenvalues of 𝐴
> - 𝑦<sub>𝑖</sub><sup>2</sup>is always positive
> - thus, the eigenvalues (𝜆<sub>𝑖</sub>) determine the sign of 𝑄(𝑥)
# Resources
- [https://en.wikipedia.org/wiki/Quadratic_form](https://en.wikipedia.org/wiki/Quadratic_form)
