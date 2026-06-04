---
title: "Fast Fourier Transform (FFT)"
created: 2022-11-03T22:56:29.435-05:00
modified: 2025-08-17T01:15:58.767-05:00
parent: "[[Discrete Fourier Transform (DFT) - Discrete Fourier Series]]"
children:
  - "[[FFT - Algorithms]]"
  - "[[FFT - Use Cases]]"
---
###### Fast Fourier Transform
````excerpt
- is an [[Algorithms|algorithm]] that computes the [[Discrete Fourier Transform (DFT) - Discrete Fourier Series|discrete Fourier transform (DFT)]] of a sequence FAST, or its inverse ([[Inverse Discrete Fourier Transform (IDFT)|IDFT]])
	- direct computation of the DFT is computationally expensive, with a complexity of 𝑂(𝑁<sup>2</sup>)
	- FFTs, like the [[Cooley-Tukey FFT|Cooley-Tukey]] algorithm, reduce this complexity to 𝑂(𝑁 𝑙𝑜𝑔 𝑁) by exploiting the symmetries and redundancies in the DFT calculation
````
^excerpt

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [Steve Brunton's The Fast Fourier Transform (FFT)](https://www.youtube.com/watch?v=E8HeD-MUrjY&list=PLMrJAkhIeNNT_Xh3Oy0Y4LTj0Oxo8GqsC&index=17)
- [Gilbert Strang's Complex Matrices; Fast Fourier Transform](https://www.youtube.com/watch?v=M0Sa8fLOajA)
