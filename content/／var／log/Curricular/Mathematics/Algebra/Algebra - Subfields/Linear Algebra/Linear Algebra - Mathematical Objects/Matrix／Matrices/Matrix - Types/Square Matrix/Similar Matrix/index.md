---
title: "Similar Matrix"
created: 2021-09-13T05:25:58.343-05:00
modified: 2023-06-09T01:28:40.413-05:00
parent: "[[Square Matrix]]"
children: []
---
###### Similar Matrix

𝐴 and 𝐵 are similar matrices when:
- 𝐴 = 𝑃𝐵𝑃<sup>-1</sup>

where:
- 𝑃 - any [[Inverse Matrix - Invertible／Non-Singular Matrix - 2-Sided Inverse Matrix - Invertible Matrix Theorem|invertible matrix]] (𝑃 can be thought of as the [[Change of Basis Matrix - Transition Matrix|change of basis matrix]])

# Similar Matrices - Properties

Suppose that 𝐴 = 𝑃𝐵𝑃<sup>-1</sup>, then:
- 𝐴 and 𝐵 have exactly the same [[Characteristic Polynomial|characteristic polynomial]]
> [!expand]- proof
> Suppose that 𝐴 = 𝑃𝐵𝑃<sup>-1</sup>,where 𝐴, 𝐵, 𝑃are 𝑛×𝑛matrices. The characteristic polynomial of 𝐴 is 𝑑𝑒𝑡(𝐴 − 𝜆𝐼):
> 1. 𝐴 − 𝜆𝐼 = 𝑃𝐵𝑃<sup>−1</sup> − 𝜆𝑃𝑃<sup>−1</sup>
> 2. 𝐴 − 𝜆𝐼 = 𝑃𝐵𝑃<sup>−1</sup> − 𝑃𝜆𝑃<sup>−1</sup>
> 3. 𝐴 − 𝜆𝐼 = 𝑃𝐵𝑃<sup>−1</sup> − 𝑃𝜆𝐼𝑃<sup>−1</sup>
> 4. 𝐴 − 𝜆𝐼 = 𝑃(𝐵 − 𝜆𝐼)𝑃<sup>−1</sup>
> 5. 𝑑𝑒𝑡(𝐴 − 𝜆𝐼) = 𝑑𝑒𝑡(𝑃(𝐵 − 𝜆𝐼)𝑃<sup>−1</sup>)
> 6. 𝑑𝑒𝑡(𝐴 − 𝜆𝐼) = 𝑑𝑒𝑡(𝑃) 𝑑𝑒𝑡(𝐵 − 𝜆𝐼) 𝑑𝑒𝑡(𝑃)<sup>−1</sup> <font style="color: rgb(122,134,154);">\# multiplicative property of [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|determinants]] 𝑑𝑒𝑡(𝑃)<sup>−1</sup>= 1/𝑑𝑒𝑡(𝑃)</font>
> 7. 𝑑𝑒𝑡(𝐴 − 𝜆𝐼) = 𝑑𝑒𝑡(𝐵 − 𝜆𝐼)
- 𝐴 and 𝐵 have exact same [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]]
> [!expand]- proof
> - 𝐴𝑥 = 𝜆𝑥 <font style="color: rgb(128,128,128);">\#</font>[[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalue/eigenvector equation]]
> - 𝐴𝑃𝑃<sup>-1</sup>𝑥 = 𝜆𝑥 <font style="color: rgb(128,128,128);">\# 𝑃𝑃<sup>-1</sup>= 𝐼</font>
> - 𝑃<sup>-1</sup>𝐴𝑃𝑃<sup>-1</sup>𝑥 = 𝜆𝑃<sup>-1</sup>𝑥
> - 𝐵𝑃<sup>-1</sup>𝑥 = 𝜆𝑃<sup>-1</sup>𝑥
>
> So, if 𝑥 is an eigenvector of 𝐴, with eigenvalue 𝜆, then 𝑃<sup>-1</sup>𝑥 is an eigenvector of 𝐵 with the same eigenvalue. So, every eigenvalue of 𝐴 is an eigenvalue of 𝐵.
> Since you can interchange the roles of 𝐴 and 𝐵 in the previous calculations, every eigenvalue of 𝐵 is an eigenvalue of 𝐴 too. Hence, 𝐴 and 𝐵 have the same eigenvalues.
>
> Geometrically, in fact, also 𝑥 and 𝑃<sup>-1</sup>𝑥 are the same vector, written in different coordinate systems. Geometrically, 𝐴 and 𝐵 are matrices associated with the same endomorphism. So, they have the same eigenvalues and geometric multiplicities
- 𝐴 and 𝐵 have the <font style="color: rgb(0,128,0);">same number </font><font style="color: rgb(255,0,0);">but different</font> eigenvectors:
	- 𝑥 is an eigenvector of 𝐴 → 𝑃<sup>-1</sup>𝑥 is an eigenvector of 𝐵
> [!expand]- proof
> Suppose that 𝑥 is an eigenvector of 𝐴 with eigenvalue 𝜆 (i.e. 𝐴𝑥 = 𝜆𝑥). 
> Let's prove that 𝑃<sup>-1</sup>𝑥 is also an eigenvector of 𝐵, such that 𝐵𝑃<sup>-1</sup>𝑥 = 𝜆𝑃<sup>-1</sup>𝑥:
> - 𝐵𝑃<sup>-1</sup>𝑥 = 𝐵𝑃<sup>-1</sup>𝑥
> - 𝐵𝑃<sup>-1</sup>𝑥 = 𝑃<sup>-1</sup>𝑃𝐵𝑃<sup>-1</sup>𝑥
> - 𝐵𝑃<sup>-1</sup>𝑥 = 𝑃<sup>-1</sup>𝐴𝑥
> - 𝐵𝑃<sup>-1</sup>𝑥 = 𝑃<sup>-1</sup>𝜆𝑥
> - 𝐵𝑃<sup>-1</sup>𝑥 = 𝜆𝑃<sup>-1</sup>𝑥
>
> So that 𝑃<sup>-1</sup>𝑥 is an eigenvector of 𝐵 with eigenvalue 𝜆.
- 
	- 𝑥 is an eigenvector of 𝐵 → 𝑃𝑥 is an eigenvector of 𝐴
> [!expand]- proof
> Suppose that 𝑥 is an eigenvector of 𝐵 with eigenvalue 𝜆 (i.e. 𝐵𝑥 = 𝜆𝑥). 
> Let's prove that 𝑃𝑥 is also an eigenvector of 𝛢, such that 𝛢𝑃𝑥 = 𝜆𝑃𝑥:
> - 𝛢𝑃𝑥 = 𝛢𝑃𝑥
> - 𝛢𝑃𝑥 = 𝑃𝐵𝑃<sup>-1</sup>𝑃𝑥
> - 𝛢𝑃𝑥 = 𝑃𝐵𝐼𝑥
> - 𝛢𝑃𝑥 = 𝑃𝐵𝑥
> - 𝛢𝑃𝑥 = 𝑃𝜆𝑥
> - 𝛢𝑃𝑥 = 𝜆𝑃𝑥
>
> So that 𝑃𝑥 is an eigenvector of 𝛢 with eigenvalue 𝜆.

Other
- Let 𝐴 = 𝑃𝐵𝑃<sup>-1</sup>, then for any 𝑛≥1, we have 𝐴<sup>𝑛</sup> = 𝑃𝐵<sup>𝑛</sup>𝑃<sup>-1</sup>
> [!expand]- proof
> First, note that:
> - 𝐴<sup>2</sup>= 𝐴𝐴 = (𝑃𝐵𝑃<sup>-1</sup>)(𝑃𝐵𝑃<sup>-1</sup>) = 𝑃𝐵(𝑃<sup>-1</sup>𝑃)𝐵𝑃<sup>-1</sup> = 𝑃𝐵𝐼𝐵𝑃<sup>-1</sup> = 𝑃𝐵<sup>2</sup>𝑃<sup>-1</sup>
>
> Next, we have:
> - 𝐴<sup>2</sup> = 𝐴<sup>2</sup>𝐴 = (𝑃𝐵<sup>2</sup>𝑃<sup>-1</sup>)(𝑃𝐵𝑃<sup>-1</sup>) = 𝑃𝐵<sup>2</sup>(𝑃<sup>-1</sup>𝑃)𝐵𝑃<sup>-1</sup> = 𝑃𝐵<sup>3</sup>𝑃<sup>-1</sup>
>
> The pattern is clear

# Similar Matrices - Computing 𝐴𝑥 in Terms of 𝑃𝐵𝑃<sup>-1</sup>𝑥

Suppose that 𝐴 = 𝑃𝐵𝑃<sup>-1</sup>, where 𝑃 is an invertible matrix with columns 𝑣<sub>1</sub>, 𝑣<sub>2</sub>, ..., 𝑣<sub>𝑛</sub>. Let 𝔹 = {𝑣<sub>1</sub>, 𝑣<sub>2</sub>, ..., 𝑣<sub>𝑛</sub>}, a basis for ℝ<sup>𝑛</sup>. Let 𝑥 be a vector in ℝ<sup>𝑛</sup>. To compute 𝐴𝑥, one does the following:
1. Multiply 𝑥 by 𝑃<sup>-1</sup>, which changes to the 𝔹-coordinates: \[𝑥\]<sub>𝔹</sub> = 𝑃<sup>-1</sup>𝑥
2. Multiply this by 𝐵: 𝐵\[𝑥\]<sub>𝔹</sub> = 𝐵𝑃<sup>-1</sup>𝑥
3. Interpreting this vector as a 𝔹-coordinate vector, we multiply it by 𝑃 to change back to the usual coordinates: 𝐴𝑥 = 𝑃𝐵𝑃<sup>-1</sup>𝑥 = 𝑃𝐵\[𝑥\]<sub>𝔹</sub>

To summarize: if 𝐴 = 𝑃𝐵𝑃<sup>-1</sup>, then 𝐴 and 𝐵 do similar transformations, only in different coordinate systems.

![[Similar Matrix/similar-matrices-computing-example.png|616x250]]
# Similar Matrices - Equivalence Relation

The similarity follows the [[Equivalence Relations|equivalence relation]]. Let 𝐴, 𝐵, and 𝐶 be 𝑛×𝑛 matrices, then:
1. <strong>reflexivity</strong> - 𝐴 is similar to itself
2. <strong>symmetry</strong> - if 𝐴 is similar to 𝐵, then 𝐵 is similar to 𝐴
3. <strong>transitivity</strong> - if 𝐴 is similar to 𝐵 and 𝐵 is similar to 𝐶, then 𝐴 is similar to 𝐶

# Similar Matrices - [[Eigenspaces|𝜆-Eigenspace]]

If 𝐴 = 𝑃𝐵𝑃<sup>-1</sup>, then:
- 𝑃<sup>-1</sup>takes the 𝜆-eigenspace of 𝐴 to the 𝜆-eigenspace of 𝐵
- 𝑃 takes the 𝜆-eigenspace of 𝐵 to the 𝜆-eigenspace of 𝐴

To see why, refer to the properties section above.
# Similar Matrices - Identity Matrix

The only matrix similar to the [[Identity Matrix|identity matrix (𝐼)]] is itself

> [!expand]- proof
> - 𝐼 = 𝑃𝐵𝑃<sup>-1</sup>
> - 𝑃<sup>-1</sup>𝐼𝑃 = 𝑃<sup>-1</sup>𝑃𝐵𝑃<sup>-1</sup>𝑃
> - 𝑃<sup>-1</sup>𝐼𝑃 = 𝐼𝐵𝐼
> - 𝑃<sup>-1</sup>𝑃 = 𝐵
> - 𝐼 = 𝐵
# Similar Matrices - In Relation to Eigendecomposition/Diagonalization

Given the following equation 𝐴 = 𝑃<sup>-1</sup>𝐵𝑃: if 𝐵 is a diagonal matrix, then 𝑃<sup>-1</sup>𝐵𝑃 is an [[Eigen Decomposition／Factorization - Diagonalization／Diagonalizing／Diagonalize - Diagonalizable／Non-Defective Matrix - Non-Diagonalizable／Defective Matrix|eigendecomposition]] of matrix 𝐴
# Resources
- [https://textbooks.math.gatech.edu/ila/similarity.html#similarity-eq-reln](https://textbooks.math.gatech.edu/ila/similarity.html#similarity-eq-reln)

![](https://www.youtube.com/watch?v=TSdXJw83kyA&list=PLE7DDD91010BC51F8&index=30)
