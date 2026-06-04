---
title: "Wavelet Transform (WT)"
created: 2023-12-13T11:21:23.618-06:00
modified: 2025-08-19T12:17:38.763-05:00
parent: "[[Spectrogram Producing Algorithms]]"
children:
  - "[[Continuous Wavelet Transform (CWT)]]"
  - "[[Discrete Wavelet Transform (DWT)]]"
---
###### Wavelet Transform (WT)
````excerpt
- generalizes the [[Fourier Transform - Inverse Fourier Transform|Fourier transform]] and is better suited to multi-scale data
- it is like the [[Gabor Transforms (GT)|Gabor Transform]] but takes advantage of the idea that lower frequencies tend to last for a long time, and higher frequencies tend to change faster in time
````
^excerpt

# Wavelet Types
- Haar Wavelet - is a sequence of rescaled "square-shaped" functions which together form a wavelet family or basis
- Daubechies Wavelets - are a family of orthogonal wavelets defining a discrete wavelet transform
- Ricker Wavelet - Mexican Hat Wavelet
- Coiflet Wavelet - are discrete wavelets
- Meyer Wavelet -
- Shannon Wavelet -
- Guassian Wavelet -
- Symlet Wavelet -
- Morlet Wavelet -

# Subpages
- [[Short-Time Fourier Transform (STFT) to Wavelet Transform (WT)]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```

# Resources
- [Steve Brunton's - Wavelets and Multiresolution Analysis](https://www.youtube.com/watch?v=y7KLbd7n75g&list=PLMrJAkhIeNNT_Xh3Oy0Y4LTj0Oxo8GqsC&index=31)
- [Artem Kirsanov's - Wavelets: A Mathematical Microscope](https://www.youtube.com/watch?v=jnxqHcObNK4)
- [Mike X Cohen's - Morlet Wavelets in Time and in Frequency](https://www.youtube.com/watch?v=7ahrcB5HL0k)
