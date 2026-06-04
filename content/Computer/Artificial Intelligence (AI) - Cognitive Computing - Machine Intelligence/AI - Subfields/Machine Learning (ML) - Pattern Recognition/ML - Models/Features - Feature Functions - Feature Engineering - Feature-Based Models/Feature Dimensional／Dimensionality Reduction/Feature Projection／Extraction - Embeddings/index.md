---
title: "Feature Projection／Extraction - Embeddings"
created: 2020-01-21T19:40:50.973-06:00
modified: 2024-08-27T05:02:12.293-05:00
parent: "[[Feature Dimensional／Dimensionality Reduction]]"
children:
  - "[[Correspondence Analysis (CA)]]"
  - "[[Factor Analysis (FA) - Factor Methods]]"
  - "[[Feature Projection／Extraction - Embeddings - Comparisons]]"
  - "[[Generalized Low Rank Models]]"
  - "[[Grand Tour]]"
  - "[[Hessian Eigenmaps]]"
  - "[[Independent Component Analysis (ICA)]]"
  - "[[Isomap]]"
  - "[[Kernel PCA]]"
  - "[[Laplacian Eigenmaps]]"
  - "[[Local Tangent Space Alignment (LTSA)]]"
  - "[[Locally Linear Embedding (LLE)]]"
  - "[[Multidimensional Scaling (MDS)]]"
  - "[[Neighborhood Component Analysis]]"
  - "[[Non-Linear／Nonlinear Dimensionality Reduction (NLDR) - Manifold Learning]]"
  - "[[Non-Negative Matrix Factorization (NMF)]]"
  - "[[Principal Component Analysis (PCA)]]"
  - "[[Random Projection]]"
  - "[[Self-Organizing Map (SOM) - Self-Organizing Feature Map (SOFM)]]"
  - "[[T-distributed Stochastic Neighbor Embedding (t-SNE／tSNE)]]"
  - "[[Two／Multi-Group Multiple Discriminant／Discriminative Analysis]]"
  - "[[Uniform Manifold Approximation and Projection (UMAP)]]"
---
<strong>Feature Projection</strong> - <strong>Feature Extraction</strong>
- transforms the data in the high-dimensional space to a space of fewer dimensions
- data transformation may be:
	- linear
	- nonlinear
- there are really only 2 techniques:
	- matrix factorization
	- neighbor graph
- for multidimensional data, tensor representation can be used in dimensionality reduction through multilinear subspace learning
- is used in [[Information Retrieval (IR) - Information Extraction (IE)|Information Extraction]] as well as other fields

###### Embeddings
- embedding is a relatively low-dimensional space into which you can translate high-dimensional vectors
- embeddings make it easier to do machine learning on large inputs like sparse vectors representing words (i.e. [[Word Embeddings／Embedding|word embeddings]])
- ideally, an embedding captures some of the semantics of the input by placing semantically similar inputs close together in the embedding space
- an embedding can be learned and reused across models
- embeddings simply learn to map the <font style="color: rgb(128,0,0);"><em>one-hot encoded</em> categorical variables</font> to <font style="color: rgb(0,128,0);">vectors of floating-point numbers</font> of smaller dimensionality than the input vectors
	- for example, a <font style="color: rgb(128,0,0);">one-hot vector representing a word from the vocabulary of size 50,000</font> is mapped to a <font style="color: rgb(0,128,0);">real-valued vector of size 100</font>
- <code><font style="color: rgb(83,90,96);"><font style="color: rgb(128,0,0);">one-hot vector</font> </font><font style="color: rgb(83,90,96);">→</font><font style="color: rgb(83,90,96);"> <font style="color: rgb(0,128,0);">real-valued vector</font> </font><font style="color: rgb(83,90,96);">→</font><font style="color: rgb(83,90,96);"> ml models (e.g. ANN)</font></code>

# Resources
- [Chris Olah's Visualizing MNIST](http://colah.github.io/posts/2014-10-Visualizing-MNIST/)
- [Tensorflow's Feature Projector Visualization](http://projector.tensorflow.org/)
- [Ali Ghodsi - STAT 442/842: Data Visualization](https://www.youtube.com/playlist?list=PLehuLRPyt1HzQoXEhtNuYTmd0aNQvtyAK)

# Feature Projection/Extraction Methods - Types
- [[Non-Linear／Nonlinear Dimensionality Reduction (NLDR) - Manifold Learning|Non-Linear/Nonlinear Dimensionality Reduction (NLDR) - Manifold Learning]]
- Linear Dimensionality Reduction (LDR)

# Feature Projection/Extraction Methods - Technique Types
- <strong>Matrix Factorization</strong> - axis is usually interpretable
- <strong>Neighboring Graph</strong> - axis are NOT usually interpretable

# Feature Projection/Extraction Methods

```merge-table
{
  "rows": [
    [
      {
        "content": "Method",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Data Transformation Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Technique Type",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Principal Component Analysis (PCA)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "LINEAR",
        "bg": "#e6fcff",
        "align": "center"
      },
      {
        "content": "MATRIX FACTORIZATION",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Independent Component Analysis (ICA)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "LINEAR & NON-LINEAR",
        "bg": "#eae6ff",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Singular Value Decomposition／Factorization (SVD) - Reduced SVD|Singular Value Decomposition (SVD)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "LINEAR",
        "bg": "#e6fcff",
        "align": "center"
      },
      {
        "content": "MATRIX FACTORIZATION",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Non-Negative Matrix Factorization (NMF)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "LINEAR",
        "bg": "#e6fcff",
        "align": "center"
      },
      {
        "content": "MATRIX FACTORIZATION",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Kernel PCA]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "NON-LINEAR",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[Graph-Based Kernel PCA](https://en.wikipedia.org/wiki/Dimensionality_reduction#Graph-based_kernel_PCA)",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Correspondence Analysis (CA)]]",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "[[Factor Analysis (FA) - Factor Methods|Factor Analysis (FA)]]",
        "bg": "#F4F5F7"
      },
      "",
      ""
    ],
    [
      {
        "content": "[[Linear／Normal Discriminant／Discriminative Analysis (LDA／NDA)|Linear Discriminant Analysis (LDA)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "LINEAR",
        "bg": "#e6fcff",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Quadratic Discriminant／Discriminative Analysis (QDA)|Quadratic Discriminant Analysis (QDA)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "NON-LINEAR",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Generalized Discriminant／Discriminative Analysis (GDA)|Generalized Discriminant Analysis (GDA)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "NON-LINEAR",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Grand Tour]]",
        "bg": "#f4f5f7"
      },
      {
        "content": "LINEAR",
        "bg": "#e6fcff",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "Linear/Nonlinear [[Autoencoders (AE)|Autoencoder]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "LINEAR & NON-LINEAR",
        "bg": "#eae6ff",
        "align": "center"
      },
      {
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Generalized Low Rank Models|Generalized Low-Rank Models]]",
        "bg": "#F4F5F7"
      },
      "",
      {
        "content": "MATRIX FACTORIZATION",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Word2Vec]]",
        "bg": "#F4F5F7"
      },
      "",
      {
        "content": "MATRIX FACTORIZATION",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[GloVe (Global Vectors for Word Representation)|GloVe]]",
        "bg": "#F4F5F7"
      },
      "",
      {
        "content": "MATRIX FACTORIZATION",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "Latent Dirichlet Allocation",
        "bg": "#F4F5F7"
      },
      "",
      {
        "content": "MATRIX FACTORIZATION",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[T-distributed Stochastic Neighbor Embedding (t-SNE／tSNE)|T-distributed Stochastic Neighbor Embedding (t-SNE/tSNE)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "NON-LINEAR",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "NEIGHBOR GRAPHS",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Uniform Manifold Approximation and Projection (UMAP)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "NON-LINEAR",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "NEIGHBOR GRAPHS",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Laplacian Eigenmaps]]",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "content": "NEIGHBOR GRAPHS",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Hessian Eigenmaps]]",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "content": "NEIGHBOR GRAPHS",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Local Tangent Space Alignment (LTSA)]]",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "content": "NEIGHBOR GRAPHS",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Multidimensional Scaling (MDS)]]",
        "bg": "#F4F5F7"
      },
      "",
      {
        "content": "NEIGHBOR GRAPHS",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Isomap]]",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "content": "NEIGHBOR GRAPHS",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Locally Linear Embedding (LLE)]]",
        "bg": "#F4F5F7"
      },
      {
        "align": "center"
      },
      {
        "content": "NEIGHBOR GRAPHS",
        "bg": "#e3fcef",
        "align": "center"
      }
    ]
  ]
}
```
# [[Feature Projection／Extraction - Embeddings - Comparisons|Feature Projection/Extraction Methods - Comparisons]]
```dataview
LIST
FROM ""
WHERE file.folder = [[Feature Projection／Extraction - Embeddings - Comparisons]].file.folder + "/" + [[Feature Projection／Extraction - Embeddings - Comparisons]].file.name
```
