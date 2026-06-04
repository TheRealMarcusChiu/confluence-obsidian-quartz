---
title: "Principal Component Analysis (PCA)"
created: 2019-11-04T17:36:22.554-06:00
modified: 2023-08-09T15:49:18.795-05:00
parent: "[[Feature Projection／Extraction - Embeddings]]"
children:
  - "[[Empirical Principal Component Modal Factor Analysis Karhunen-Loeve Hotelling Transform Proper Orthogonal Spectral Singular Value Eigenvalue Eigenfunction Decomposition Eckart-Young Theorem Quasiharmonic Modes]]"
---
###### Principal Component Analysis (PCA)

```merge-table
{
  "rows": [
    [
      "````excerpt\n- is a statistical procedure that uses an orthogonal transformation to convert a set of observations of possibly [[Correlation|correlated variables]] into a set of values of linearly uncorrelated/independent variables called principal components\n- helpful when most of the variation of the data is due to variations of a few principal components\n- depends on the:\n\t- eigen-decomposition of a [[Positive Semi-Definite Matrix|positive semi-definite matrices]]\n\t- [[Singular Value Decomposition／Factorization (SVD) - Reduced SVD|singular value decomposition]] of rectangular matrices\n- learns a linear projection that aligns the direction of greatest variance with axes of the new space\n- can be viewed as an [[Unsupervised Learning|unsupervised learning algorithm]] that learns a new \"representation\" of data:\n\t- that has lower dimensionality than the original input data\n\t- whose elements have no linear correlation with each other\n````\n^excerpt\n\nPCA is a linear technique for [[Feature Dimensional／Dimensionality Reduction|dimensionality reduction]] which performs a linear mapping of the data to a lower-dimensional space in such a way that the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] of the data in the low-dimensional representation is maximized. In practice, the [[Covariation - Covariance|covariance]] or [[Correlation|correlation]]matrix of the data-variables is constructed and the [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvectors]] on this matrix are computed. The eigenvectors that correspond to the largest [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]] can now be used to reconstruct a large fraction of the variance of the original data",
      "![](https://www.youtube.com/watch?v=g-Hb26agBFg)"
    ]
  ]
}
```
# PCA - Introduction

let 𝑋 be a 𝑝✕𝑛 matrix of 𝑛 observations:
- 𝑋 = \[𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>\]

where each 𝑋<sub>𝑖</sub>is a 𝑝✕1 vector

sample mean 𝑀 be a 𝑝✕1 vector defined as:
- 𝑀 = (1/𝑛) (𝑋<sub>1</sub> + ... + 𝑋<sub>𝑛</sub>)

translate the 𝑛 observations as so:
- 𝑋<sub>𝑖</sub>ˆ = 𝑋<sub>𝑖</sub>- 𝑀

assign 𝑋 to be the mean-deviation form (having sample mean = 0)
- 𝑋 = \[𝑋<sub>1</sub>ˆ, ..., 𝑋<sub>𝑛</sub>ˆ\]

let 𝑆 be a 𝑝✕𝑝 sample [[Covariance & Correlation Matrix|covariance matrix]]
- 𝑆 = (1/(𝑛-1)) 𝑋𝑋<sup>𝑇</sup>

find the [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvalues]] and [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvectors]] of 𝑆
- eigenvalues {𝜆<sub>1</sub>, ..., 𝜆<sub>𝑝</sub>}
- eigenvectors {𝑣<sub>1</sub>, ..., 𝑣<sub>𝑝</sub>}

normalize the eigenvectors to get the principal components:
- 𝑢<sub>𝑖</sub>= 𝑣<sub>𝑖</sub>/ ||𝑣<sub>𝑖</sub>||
- principal components = {𝑢<sub>1</sub>, ..., 𝑢<sub>𝑝</sub>}

let 𝑃 be the change of variable/basis matrix that contains the <em>principal components</em> as columns
- 𝑃 = \[𝑢<sub>1</sub>, ..., 𝑢<sub>𝑝</sub>\]

𝑃 is used to transform vector 𝑋<sub>𝑖</sub>with basis defined by the observations axis to a vector 𝑌<sub>𝑖</sub>with basis {𝑢<sub>1</sub>, ..., 𝑢<sub>𝑝</sub>}
- 𝑋<sub>𝑖</sub>= 𝑃𝑌<sub>𝑖</sub>
- 𝑋<sub></sub>= 𝑃𝑌

- 𝑌<sub>𝑖</sub>= 𝑃<sup>𝑇</sup>𝑋<sub>𝑖</sub>
- 𝑌<sub></sub>= 𝑃<sup>𝑇</sup>𝑋

for any orthogonal 𝑃 the [[Covariance & Correlation Matrix|covariance matrix]] of 𝑌 = \[𝑌<sub>1</sub>, ..., 𝑌<sub>𝑝</sub>\] is:
- 𝑆 = (1/(𝑛-1)) 𝑋𝑋<sup>𝑇</sup>
- 𝑆 = (1/(𝑛-1)) (𝑃𝑌)(𝑃𝑌)<sup>𝑇</sup>
- 𝑆 = (1/(𝑛-1)) 𝑃𝑌𝑌<sup>𝑇</sup>𝑃<sup>𝑇</sup>
- 𝑃<sup>𝑇</sup>𝑆𝑃 = (1/(𝑛-1)) 𝑌𝑌<sup>𝑇</sup>

thus, covariance matrix of 𝑌 = 𝑃<sup>𝑇</sup>𝑆𝑃
# PCA - Reducing the Dimension of Multivariate Data
- an orthogonal <em>change of variable/basis</em> does not change the total-variance of the data (because left-multiplication by 𝑃 does not change lengths of vectors nor angles between them)
- this means if 𝑆 = 𝑃𝐷𝑃<sup>𝑇</sup> then:
	- {total-variance of observation 𝑥<sub>1</sub>, ..., 𝑥<sub>𝑝</sub>} = {total-variance of 𝑦<sub>1</sub>, ..., 𝑦<sub>𝑝</sub>} = 𝑡𝑟𝑎𝑐𝑒(𝑆) = 𝑡𝑟𝑎𝑐𝑒(𝐷) = 𝜆<sub>1</sub> + ... + 𝜆<sub>𝑝</sub>
- the variance of 𝑦<sub>𝑖</sub>= 𝜆<sub>𝑖</sub>
- the quotient 𝜆<sub>𝑖</sub>/𝑡𝑟𝑎𝑐𝑒(𝐷) measures the fraction of total variance explained or captured by 𝑦<sub>𝑖</sub>

# PCA - Example

> [!expand]- Click here to expand...
> 3 measurements made on each of the 4 individuals:
> ![[Principal Component Analysis (PCA)/mean-covariance-pca-1.png|350]]
>
> sample mean vector
> ![[Principal Component Analysis (PCA)/mean-covariance-pca-2.png|350]]
>
> translate the observations
> ![[Principal Component Analysis (PCA)/mean-covariance-pca-3.png|350]]
>
> mean-deviation matrix
> ![[Principal Component Analysis (PCA)/mean-covariance-pca-4.png|350]]
>
> sample [[Covariance & Correlation Matrix|covariance matrix]] (which is [[Positive Semi-Definite Matrix|positive semi-definite]])
>
> ![[Principal Component Analysis (PCA)/mean-covariance-pca-5.png|350]]
>
> 𝑆 's eigenvalues and unit eigenvectors
> ![[Principal Component Analysis (PCA)/mean-covariance-pca-7.png|301]]
>
> the 3 principal components are the 3 unit eigenvectors
> - 𝑦<sub>1</sub> = -0.074𝑥<sub>1</sub> - 0.303𝑥<sub>2</sub> + 0.950𝑥<sub>3</sub>
> - 𝑦<sub>2</sub> = -0.819𝑥<sub>1</sub> - 0.525𝑥<sub>2</sub> - 0.231𝑥<sub>3</sub>
> - 𝑦<sub>3</sub> = -0.569𝑥<sub>1</sub> + 0.796𝑥<sub>2</sub> + 0.209𝑥<sub>3</sub>
>
> the sample covariance matrix of the transformed data using variable/basis {𝑦<sub>1</sub>, 𝑦<sub>2</sub>, 𝑦<sub>3</sub>} is
> ![[Principal Component Analysis (PCA)/mean-covariance-pca-6.png|350]]
>
> compare trace between 𝑆 and 𝐷 (they should be equal)
> - 𝑡𝑟𝑎𝑐𝑒(𝑆) = 10 + 8 + 32 = 50
> - 𝑡𝑟𝑎𝑐𝑒(𝐷) = 34.55 + 13.84 + 1.601 = 49.991 = 50 because of round off errors
> - 𝑡𝑟𝑎𝑐𝑒(𝑆) = 𝑡𝑟𝑎𝑐𝑒(𝐷)
>
> the percentages of "total-variance" explained/captured by each "principal-component" are:
> - 𝑦<sub>1</sub>= 34.55 / 50 = 69.1%
> - 𝑦<sub>2</sub>= 13.84 / 50 = 27.68%
> - 𝑦<sub>3</sub>= 1.601 / 50 = 3.202%
# PCA - Subpages
- [[Principal Component Analysis (PCA) vs Factor Analysis (FA)]]
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Resources
- [PCA ~ Herve Abdi & Lynne J. Williams](https://personal.utdallas.edu/~herve/abdi-awPCA2010.pdf)
- [Andrew Ng's Video Lecture](https://www.coursera.org/lecture/machine-learning/principal-component-analysis-problem-formulation-GBFTt)
