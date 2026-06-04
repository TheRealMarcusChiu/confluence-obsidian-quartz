---
title: "Markov Chain Property - Stochastic Matrix - Contains Eigenvalue 1 and all other Eigenvalues are Less than 1"
created: 2023-06-10T15:52:39.368-05:00
modified: 2023-06-10T17:18:07.845-05:00
parent: "[[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)]]"
children: []
---
# Let 𝐴 be a [[Markov Chains／Chain (Transition Markov／Probability／Stochastic Matrix) - Discrete Time Markov Chains (DTMC)|stochastic matrix]]. Then:
1. 𝐴 contains an [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalue]] = 1
> [!expand]- proof
> If 𝐴 is stochastic, then the entries of each row of 𝐴 sum up to 1. By multiplying 𝐴 by a vector of ones (1, 1, ..., 1) we get the same vector. Therefore 1 is an eigenvalue of 𝐴.
>
> 𝐴<sup>𝑇</sup> also has 1 as an eigenvalue ([[A matrix and its transpose have the same characteristic polynomial and eigenvalues|see here]]).
2. All other eigenvalues of 𝐴 have absolute values less than or equal to 1
> [!expand]- proof
> Let:
> - 𝜆 be any eigenvalue of 𝐴
> - 𝑥 = (𝑥<sub>1</sub>, 𝑥<sub>2</sub>, ..., 𝑥<sub>𝑛</sub>) be an eigenvector of 𝐴 with eigenvalue 𝜆
>
> So:
> - 𝐴𝑥 = 𝜆𝑥
>
> The 𝑗<sup>th</sup> entry of this equation is:
> - $𝜆x_j = \sum_{i=1}^{n}a_{ij}x_i$
>
> Let:
> - 𝑥<sub>𝑧</sub> be the largest absolute value entry of the eigenvector 𝑥
>
> Then:
> - $|𝜆|·|x_z| = |\sum_{i=1}^{n}a_{iz}x_i| ≤ \sum_{i=1}^{n}a_{iz}·|x_i| ≤  \sum_{i=1}^{n}a_{iz}·|x_z| = 1·|x_z|$
>
> Where the last equality holds because$\sum_{i=1}^{n}a_{iz} = 1$
>
> This implies |𝜆| ≤ 1

# Let 𝐴 be a positive stochastic matrix (i.e. all entries are positive) Then:
1. 𝐴 contains an eigenvalue = 1
2. All other eigenvalues of 𝐴 have absolute values less than 1
