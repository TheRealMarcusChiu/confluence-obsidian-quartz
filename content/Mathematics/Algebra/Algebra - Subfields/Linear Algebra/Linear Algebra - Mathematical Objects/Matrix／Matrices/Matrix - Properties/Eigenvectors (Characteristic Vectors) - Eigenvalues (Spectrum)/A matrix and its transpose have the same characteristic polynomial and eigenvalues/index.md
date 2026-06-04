---
title: "A matrix and its transpose have the same characteristic polynomial and eigenvalues"
created: 2023-06-10T16:35:11.144-05:00
modified: 2023-06-10T16:46:13.582-05:00
parent: "[[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)]]"
children: []
---
# Fact

Matrix 𝐴 and its [[Transpose Matrix - Complex-Conjugate／Hermitian／Adjoint／Transjugate／Bedaggered Transpose Matrix|transpose]] 𝐴<sup>𝑇</sup> have the same:
- [[Characteristic Polynomial|characteristic polynomial]]
- [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]]

# Proof - Same Characteristic Polynomial

The characteristic polynomial of 𝐴 is defined as:
- 𝑑𝑒𝑡𝑒𝑚𝑖𝑛𝑎𝑛𝑡(𝐴 - 𝜆𝐼)

The determinant of a matrix and its transpose are the same ([[Determinants - Invertible／Non-Singular - Not-Invertible／Singular|see here]]). Thus:
- 𝑑𝑒𝑡𝑒𝑚𝑖𝑛𝑎𝑛𝑡(𝐴 - 𝜆𝐼) = 𝑑𝑒𝑡𝑒𝑚𝑖𝑛𝑎𝑛𝑡((𝐴 - 𝜆𝐼)<sup>𝑇</sup>)

Simplifying the right-hand side yields:
- 𝑑𝑒𝑡𝑒𝑚𝑖𝑛𝑎𝑛𝑡(𝐴 - 𝜆𝐼) = 𝑑𝑒𝑡𝑒𝑚𝑖𝑛𝑎𝑛𝑡(𝐴<sup>𝑇</sup> - 𝜆𝐼)

The characteristic polynomial defined on the right is of 𝐴<sup>𝑇</sup>
# Proof - Same Eigenvalues

Since both 𝐴 and 𝐴<sup>𝑇</sup>have the same characteristic polynomial. They necessarily have the same eigenvalues.
