---
title: "Moore-Penrose Pseudo-Inverse Matrix"
created: 2021-09-13T05:25:56.486-05:00
modified: 2023-09-19T22:48:52.276-05:00
parent: "[[Generalized Inverse Matrix - G-Inverse Matrix]]"
children: []
---
###### Moore-Penrose Pseudo Inverse Matrix
````excerpt
- is a type of [[Generalized Inverse Matrix - G-Inverse Matrix|generalized inverse matrix]]
````
^excerpt

# Pseudo Inverse - Finding It

𝐴 does not have full rank (𝑟 \< 𝑚 & 𝑟 \< 𝑛)
- start with [[Singular Value Decomposition／Factorization (SVD) - Reduced SVD|SVD]]: 𝐴 = 𝑈𝛴𝑉<sup>𝑇</sup>
	- 𝛴 is a 𝑚✕𝑛 matrix with 𝑟 entries in diagonal (each entry = 𝜎<sub>𝑖</sub>)
	- 𝛴<sup>+</sup> is a 𝑛✕𝑚 matrix with 𝑟 entries in diagonal (each entry = 1/𝜎<sub>𝑖</sub>)
	- 𝛴𝛴<sup>+</sup>is a 𝑚✕𝑚 matrix with 𝑟 1's in diagonal
	- 𝛴<sup>+</sup>𝛴 is a 𝑛✕𝑛 matrix with 𝑟 1's in diagonal
- 𝐴<sup>+</sup>= 𝑉𝛴<sup>+</sup>𝑈<sup>𝑇</sup>

# Intuition

if 2 different vectors 𝑥 and 𝑦 in row-space, then 𝐴𝑥 ≠ 𝐴𝑦

> [!expand]- proof
> suppose
> - 2 different vectors 𝑥 and 𝑦 are in row-space of 𝐴
> - 𝐴𝑥 = 𝐴𝑦
>
> then 𝐴(𝑥-𝑦) = 0
>
> then (𝑥-𝑦) is in null-space of 𝐴
>
> (𝑥-𝑦) is in row space of 𝐴 because 𝑥 and 𝑦 are in row-space of 𝐴
>
> the only vector that is in both the row-space and null-space is the zero vector
>
> thus (𝑥-𝑦) = 0
>
> thus 𝑥 = 𝑦
>
> thus contradiction
