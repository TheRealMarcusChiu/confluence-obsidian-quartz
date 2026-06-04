---
title: "Eigenvalues are the roots of the Characteristic Polynomial"
created: 2023-06-26T19:10:11.089-05:00
modified: 2023-06-26T19:23:46.519-05:00
parent: "[[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)]]"
children: []
---
# Theorem

[[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|Eigenvalues]] are the roots of the [[Characteristic Polynomial]]

Let:
- 𝐴 be an 𝑛⨯𝑛 matrix
- 𝑓(𝜆) = [[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|𝑑𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑛𝑡]](𝐴 - 𝜆𝐼) be its characteristic polynomial

Then a number 𝜆<sub>0</sub> is an [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalue]] of 𝐴 ↔ 𝑓(𝜆<sub>0</sub>) = 0
# Proof

By the invertible matrix theorem, the matrix equation (𝐴 - 𝜆𝐼)𝑥 = 0 has a non-trivial solution if and only if 𝑑𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑛𝑡(𝐴 - 𝜆𝐼) = 0. Therefore:
- 𝜆<sub>0</sub> is an eigenvalue of 𝐴 ↔ 𝐴𝑥 = 𝜆<sub>0</sub>𝑥 has a non-trivial solution
- 𝜆<sub>0</sub> is an eigenvalue of 𝐴 ↔ (𝐴 - 𝜆<sub>0</sub>𝐼)𝑥 = 0 has a non-trivial solution
- 𝜆<sub>0</sub> is an eigenvalue of 𝐴 ↔ (𝐴 - 𝜆<sub>0</sub>𝐼) is not invertible
- 𝜆<sub>0</sub> is an eigenvalue of 𝐴 ↔ 𝑑𝑒𝑡𝑒𝑟𝑚𝑖𝑛𝑎𝑛𝑡(𝐴 - 𝜆<sub>0</sub>𝐼) = 0
- 𝜆<sub>0</sub> is an eigenvalue of 𝐴 ↔ 𝑓(𝜆<sub>0</sub>) = 0
