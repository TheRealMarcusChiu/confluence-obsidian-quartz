---
title: "LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)"
created: 2020-06-09T13:34:36.581-05:00
modified: 2023-09-20T15:54:41.509-05:00
parent: "[[LR - Methods Estimating Unknown Regression Coefficients]]"
children: []
---
Prerequisite: [[Projection／Idempotent Matrix (Projections onto Subspaces)|Projection/Idempotent Matrix (Projections onto Subspaces)]]
# Simple Example

Find the best-fit line of form 𝜃<sub>0</sub> + 𝜃<sub>1</sub>𝑥<sub>1</sub> = 𝑓(𝑥<sub>1</sub>) that goes through the 3 points of the form (𝑥<sub>𝑖</sub>,𝑦<sub>𝑖</sub>):
- (1,1)
- (2,2)
- (3,2)

In other words, find the values of 𝜃<sub>0</sub> and 𝜃<sub>1</sub>

![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)/linear-algebra-least-squares-projection-matrix-graph.png|130]]

This produces the following system of linear equations:
- 𝜃<sub>0</sub> + 1𝜃<sub>1</sub> = 1
- 𝜃<sub>0</sub> + 2𝜃<sub>1</sub> = 2
- 𝜃<sub>0</sub> + 3𝜃<sub>1</sub> = 2

In matrix form we get

> [!indent]
> ![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)/linear-algebra-least-square-projection-matrices.png|301]]

Which is often denoted as:

> [!indent]
> 𝑋𝜽 = 𝒚

Given the equation above we should solve for 𝜽. But we know that these linear equations are inconsistent (i.e. no solution). Therefore from [[Projection／Idempotent Matrix (Projections onto Subspaces)|Projections onto Subspaces]], we estimate 𝜽 with 𝜽ˆ by solving:

> [!indent]
> 𝑋<sup>𝑇</sup>𝑋𝜽ˆ = 𝑋<sup>𝑇</sup>𝒚
> 𝜽ˆ = (𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup>𝒚<font style="color: rgb(255,0,0);"> \# for 𝑋<sup>𝑇</sup>𝑋 to be</font> [[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem|invertible]]<font style="color: rgb(255,0,0);">, 𝑋 must have linearly independent columns (otherwise consider using <strong>pseudoinverse approach</strong> below)</font>

so using the formula we get:

> [!indent]
> ![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)/linear-algebra-least-squares-projection-matrix-2.png|350]]

thus:
- 𝜃<sub>0</sub> = 2/3
- 𝜃<sub>1</sub>= 1/2

![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)/linear-algebra-least-squares-projection-matrix-graph-solution.png|200]]
# Adding More of the Same Points

> [!expand]- Click here to expand...
> what happens when we add multiples of the same points? assume we now have the following points:
> - (1,1)
> - (2,2)
> - (3,2)
> - (2,2)
> - (3,2)
>
> this would produce a new line where:
> - 𝜃<sub>0</sub> = 6/7
> - 𝜃<sub>1</sub>= 3/7
>
> ![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)/linear-algebra-least-squares-projection-matrix-graph-other.png|200]]
# Further Intuition With Column-Space & Left-Null-Space (Projection Matrix)

> [!expand]- Click here to expand...
> 𝑃 = 𝑋(𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup> is the [[Projection／Idempotent Matrix (Projections onto Subspaces)|projection matrix]]
>
> if 𝒚 in [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|column-space]] of 𝑋, then 𝑃𝒚 = 𝒚
> - 𝑃𝒚 = 𝑋(𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup>𝒚
> - 𝑃𝒚 = 𝑋(𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup>𝑋𝜽 <font style="color: rgb(128,128,128);">\# since 𝒚 is in the column space of 𝑋 then 𝒚=𝑋𝜽</font>
> - 𝑃𝒚 = 𝑋(𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>(𝑋<sup>𝑇</sup>𝑋)𝜽
> - 𝑃𝒚 = 𝑋𝜽
> - 𝑃𝒚 = 𝒚
>
> if 𝒚 in [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|null-space]] of 𝑋<sup>𝑇</sup>(i.e. [[4 Fundamental Subspaces (Row／Null／Kernel／Column／Left-Null Space - Image／Range of Matrix)|left-null-space]] of 𝑋), then 𝑃𝒚 = 0
> - 𝑃𝒚 = 𝑋(𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>𝑋<sup>𝑇</sup>𝒚
> - 𝑃𝒚 = 𝑋(𝑋<sup>𝑇</sup>𝑋)<sup>-1</sup>0
> - 𝑃<strong>𝒚</strong> = 0
>
> ![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)/projection-matrices-intuition-column-space-left-null-space.png|400]]
>
> vectors 𝒑 & 𝒆 are orthogonal/perpendicular
> - 𝒑 = 𝑃𝒚 <font style="color: rgb(128,128,128);">\# 𝑃 projects onto column-space of 𝑋</font>
> - 𝒆 = (𝐼-𝑃)𝒚 <font style="color: rgb(128,128,128);">\# 𝐼-𝑃 projects 𝒚 onto space perpendicular to column-space of 𝑋 (i.e. null-space of 𝑋<sup>𝑇</sup>)</font>
>
> <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">also</font></font>
> - 𝒚 = 𝒑 + 𝒆
# Relation to Minimizing ||𝑋𝜽 - 𝒚||<sup>2</sup> = ||𝒆||<sup>2</sup>With Calculus Derivatives

> [!expand]- Click here to expand...
> ![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)/linear-algebra-least-square-projection-matrices.png|301]]
> - ||𝒆||<sup>2</sup>= (𝑒<sub>1</sub>)<sup>2</sup> + (𝑒<sub>2</sub>)<sup>2</sup> + (𝑒<sub>3</sub>)<sup>2</sup>
>
> - ||𝑋𝜽 - 𝒚||<sup>2</sup>= (𝜃<sub>0</sub> + 𝜃<sub>1</sub> - 1)<sup>2</sup> + (𝜃<sub>0</sub> + 𝜃𝑥<sub>1</sub> - 2)<sup>2</sup> + (𝜃<sub>0</sub> + 𝜃𝑥<sub>1</sub> - 2)<sup>2</sup>
>
> from [[Projection／Idempotent Matrix (Projections onto Subspaces)|Projection/Idempotent Matrix (Projections onto Subspaces)]] we estimate 𝜽 with 𝜽ˆ by solving:
> - 𝑋<sup>𝑇</sup>𝑋𝜽ˆ = 𝑋<sup>𝑇</sup>𝒚
> > [!list-indent-undo]
> > > [!indent]
> > > ![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)/linear-algebra-least-squares-relation-to-minimize-error.png|330]]
> - 3𝜃<sub>0</sub> + 6𝜃<sub>1</sub> = 5 <font style="color: rgb(128,128,128);">\# this equation is the partial derivative of ||<font style="color: rgb(128,128,128);">𝑋</font><font style="color: rgb(128,128,128);">𝜃</font> - 𝒚||<sup>2</sup>wrt 𝜃<sub>0</sub>and set to 0</font>
> - 6𝜃<sub>0</sub> + 14𝜃<sub>1</sub> = 11 <font style="color: rgb(128,128,128);">\# this equation is the partial derivative of ||𝑋𝜃 - 𝒚||<sup>2</sup>wrt 𝜃<sub>1</sub>and set to 0</font>
>
> 𝜃<sub>0</sub> & 𝜃<sub>1</sub>are combinations of columns of 𝑋 that give 𝒑
>
> ![[LR - Methods Estimating Unknown Coefficients - Method of Least Squares (Projection Matrix - Normal Equation - Pseudoinverse)/linear-algebra-least-squares-projection-matrix-graph-solution-labelled.png|200]]
> - 𝑦<sub>𝑖</sub> = 𝑝<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>
# Pseudo Inverse Approach (When 𝑋<sup>𝑇</sup>𝑋 is not Invertible)
given the equation 𝑋𝜽 = 𝒚, use [[Moore-Penrose Pseudo-Inverse Matrix|pseudoinverse (𝑋†)]] of 𝑋
- 𝜽ˆ = 𝑋<sup>†</sup>𝒚
- 𝜽ˆ = 𝑉𝐷<sup>-1</sup>𝑈<sup>𝑇</sup>𝒚

# Resources

![](https://www.youtube.com/watch?v=osh80YCg_GM&list=PLE7DDD91010BC51F8&index=17)
