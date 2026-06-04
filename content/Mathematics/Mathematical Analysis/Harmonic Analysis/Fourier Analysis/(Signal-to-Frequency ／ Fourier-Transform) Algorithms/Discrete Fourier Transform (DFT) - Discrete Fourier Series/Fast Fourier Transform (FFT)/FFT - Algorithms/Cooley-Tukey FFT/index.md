---
title: "Cooley-Tukey FFT"
created: 2025-08-17T00:48:36.960-05:00
modified: 2025-08-17T01:15:38.447-05:00
parent: "[[FFT - Algorithms]]"
children:
  - "[[Mixed-Radix Cooley-Tukey Algorithm (FFT Implementation)]]"
  - "[[Radix-2 Cooley-Tukey Algorithm (FFT Implementation)]]"
  - "[[Radix-4 Cooley-Tukey Algorithm (FFT Implementation)]]"
---
###### Cooley-Tukey FFT
````excerpt
- is a [[Fast Fourier Transform (FFT)|fast Fourier transform (FFT)]] algorithm for computing the [[Discrete Fourier Transform (DFT) - Discrete Fourier Series|discrete Fourier transform (DFT)]]
- it is a divide-and-conquer approach that breaks down a large DFT into smaller DFTs until the smaller DFTs can be easily computed (e.g., size 2 or 4)
````
^excerpt

# Types
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

Cooley-Tukey Algorithm vs Radix-2 Cooley-Yuley Algorithm:
- Cooley-Tukey is a general framework for FFT algorithms, while radix-2 is a specific implementation within that framework
- Cooley-Tukey can handle various composite input sizes, while radix-2 is most efficient for powers of 2
- Other radices (like 4, 8, or mixed-radix) can be used in Cooley-Tukey to optimize performance for different input sizes
