---
title: "Principal Component Analysis (PCA) vs Factor Analysis (FA)"
created: 2023-05-17T19:39:46.180-05:00
modified: 2023-05-17T19:46:12.556-05:00
parent: "[[Feature Projection／Extraction - Embeddings - Comparisons]]"
children: []
---
Mathematically, [[Principal Component Analysis (PCA)|PCA]] is just the simplest type of [[Factor Analysis (FA) - Factor Methods|factor analysis]]; [[Eigenvectors (Characteristic Vectors) - Eigenvalues (Spectrum)|eigenvector]] extraction, no rotations, no transformations.

However, from a practical standpoint:
- PCA, by itself, is observational
- FA is a modeling approach

While there is an underlying model implicit in PCA, there isn't really one explicitly. It just simply looks for each subsequent principal component that accounts for the greatest variance. Factor analysis, in contrast, explicitly attempts to model underlying "[[Data Observability Types (Complete／Fully-Observable Data ｜ Incomplete／Partially-Observable Data ｜ Latent／Hidden／Hypothetical Variables)|latent variables]]." While it also (usually) starts off with principal components, they are rotated in order to improve interpretability. The typical goal in factor analysis is to identify variables that are related to one another, and separate them from others (a form of variable clustering); rotations help improve this interpretation.

Note: A really annoying reality is that "principal component analysis" means several different things in the context of factor analysis. I've seen simple forms of factor analysis called "principal component analysis," but then differentiated from "factor analysis." And I've seen some people differentiate "principal co-ordinate analysis." Be wary of this, especially if you read any literature.
