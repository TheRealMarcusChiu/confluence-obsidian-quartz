---
title: "Transpose - What is its Corresponding Matrix？"
created: 2024-01-10T13:51:18.693-06:00
modified: 2024-01-10T15:15:23.855-06:00
parent: "[[Transpose of a Linear Transformation - Algebraic Adjoint of a Linear Transformation]]"
children: []
---
[[Transpose of a Linear Transformation - Algebraic Adjoint of a Linear Transformation|Transpose]] itself is a [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear transformation]].

BUT HOW?
# 2D Example

The transpose 𝑇 of a linear transformation 𝐿 : ℝ<sup>2</sup>→ℝ<sup>2</sup> is represented as:
- $T = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ \end{bmatrix}$

Intuition:

> [!expand]- Click here to expand...
> Consider a 2D Matrix 𝑀(2,ℝ) which represents a linear transformation 𝐿 : ℝ<sup>2</sup>→ℝ<sup>2</sup>
> - $M = \begin{bmatrix} a & b \\ c & d \\ \end{bmatrix}$
>
> A basis for this matrix vector space is the standard basis {𝐸<sub>11</sub>, 𝐸<sub>12</sub>, 𝐸<sub>21</sub>, 𝐸<sub>22</sub>} given by (𝐸<sub>𝜇𝜐</sub>)<sub>𝑖𝑗</sub> = 𝛿<sub>𝑖</sub><sub>𝜇</sub>𝛿<sub>𝑗</sub><sub>𝜐</sub>, so:
> - $S = \left\{ \begin{bmatrix} 1 & 0 \\ 0 & 0 \\ \end{bmatrix}, \begin{bmatrix} 0 & 1 \\ 0 & 0 \\ \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 1 & 0 \\ \end{bmatrix}, \begin{bmatrix} 0 & 0 \\ 0 & 1 \\ \end{bmatrix} \right\}$
>
> In this basis, the matrix 𝑀 can be written as:
> - 𝑎𝐸<sub>11</sub> + 𝑏𝐸<sub>12</sub> + 𝑐𝐸<sub>21</sub> + 𝑑𝐸<sub>22</sub>
>
> So it can be represented as a vector 𝑣∊ℝ<sup>4</sup>
> - $v = \begin{bmatrix} a \\ b \\ c \\ d \end{bmatrix}$
>
> Now, the transposition 𝑇 acts on the elements of the basis as follows:
> - 𝑇(𝐸<sub>11</sub>) = 𝐸<sub>11</sub>
> - 𝑇(𝐸<sub>12</sub>) = 𝐸<sub>21</sub>
> - 𝑇(𝐸<sub>21</sub>) = 𝐸<sub>12</sub>
> - 𝑇(𝐸<sub>22</sub>) = 𝐸<sub>22</sub>
>
> Therefore the matrix associated with 𝑇 is just:
> - $T = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ \end{bmatrix}$
>
> Thus:
> - $Tv = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ \end{bmatrix} \begin{bmatrix} a \\ b \\ c \\ d \end{bmatrix} = \begin{bmatrix} a \\ c \\ b \\ d \end{bmatrix}$
>
> Thus:
> - 𝑇𝑣 = 𝑎𝐸<sub>11</sub> + 𝑐𝐸<sub>12</sub> + 𝑏𝐸<sub>21</sub> + 𝑑𝐸<sub>22</sub>
>
> Which results in the following matrix:
> - $M^\text{T} = \begin{bmatrix} a & c \\ b & d \\ \end{bmatrix}$
>
> In summary:
> - $M^T = T \left( \begin{bmatrix} a & b \\ c & d \\ \end{bmatrix} \right)$
> - $M^T = T(𝑎𝐸_{11} + 𝑏𝐸_{12} + 𝑐𝐸_{21} + 𝑑𝐸_{22})$
> - $M^T = 𝑎T(𝐸_{11}) + 𝑏T(𝐸_{12}) + 𝑐T(𝐸_{21}) + 𝑑T(𝐸_{22})$
> - $M^T = 𝑎𝐸_{11} + 𝑏𝐸_{21} + 𝑐𝐸_{12} + 𝑑𝐸_{22}$
> - $M^T = \begin{bmatrix} a & c \\ b & d \\ \end{bmatrix}$
# Generalized Example

The matrix vector space 𝑀(𝑛,ℝ) is a [[Direct Sum|direct sum]] of the space 𝑆(𝑛,ℝ) of symmetric matrices and 𝐴(𝑛,ℝ) of antisymmetric ones:
- 𝑀(𝑛,ℝ) = 𝑆(𝑛,ℝ) ⊕ 𝐴(𝑛,ℝ)

So a basis of 𝑀(𝑛,ℝ) can be found from these two subspaces. Moreover, dim 𝐴(𝑛,ℝ) = (1/2)(𝑛−1)𝑛 and dim𝑆(𝑛,ℝ) = (1/2)𝑛(𝑛+1).

Now, if 𝑥∈𝐴(𝑛,ℝ) then 𝑇(𝑥)=−𝑥, and if 𝑦∈𝑆(𝑛,ℝ) then 𝑇(𝑦)=𝑦, and this is true for the elements of their bases too. So, we form a basis of 𝑀(𝑛,ℝ) consisting of (1/2)𝑛(𝑛+1) linearly independent elements from 𝑆(𝑛,ℝ) and (1/2)𝑛(𝑛−1) elements from 𝐴(𝑛,ℝ).

The matrix representing 𝑇 is diagonal in this basis, since symmetric and antisymmetric matrices are all "eigenvectors" of 𝑇 (and we have a basis for them). So 𝑀 will have 1 as the first (1/2)𝑛(𝑛+1) elements on the diagonal, and −1−1 on the remaining (1/2)𝑛(𝑛−1) ones.

This method applies for any order 𝑛 of the matrices, without doing any calculations.
