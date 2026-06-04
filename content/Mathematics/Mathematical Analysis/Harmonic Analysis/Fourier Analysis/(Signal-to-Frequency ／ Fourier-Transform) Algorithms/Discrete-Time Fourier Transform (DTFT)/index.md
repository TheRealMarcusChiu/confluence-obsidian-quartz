---
title: "Discrete-Time Fourier Transform (DTFT)"
created: 2025-08-18T13:12:12.790-05:00
modified: 2025-08-18T13:32:48.332-05:00
parent: "[[(Signal-to-Frequency ／ Fourier-Transform) Algorithms]]"
children: []
---
###### Discrete-Time Fourier Transform (DTFT)
````excerpt
- takes DISCRETE signal as input and outputs a CONTINUOUS frequency spectrum
- it's defined by an infinite summation over the discrete-time signal
- while mathematically powerful, the DTFT is not directly computable on a computer because of its continuous nature and infinite summation
- thus [[Discrete Fourier Transform (DFT) - Discrete Fourier Series]] is a computationally efficient way to approximate the DTFT
````
^excerpt

# DTFT - Subpages
- [[Discrete-Time Fourier Transform (DTFT) vs Discrete Fourier Transform (DFT)]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
