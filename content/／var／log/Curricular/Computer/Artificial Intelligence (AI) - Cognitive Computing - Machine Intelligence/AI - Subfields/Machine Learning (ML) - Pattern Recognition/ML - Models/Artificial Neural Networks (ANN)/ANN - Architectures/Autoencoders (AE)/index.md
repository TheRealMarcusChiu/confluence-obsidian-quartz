---
title: "Autoencoders (AE)"
created: 2020-08-17T22:48:19.235-05:00
modified: 2026-01-01T08:40:45.100-06:00
parent: "[[ANN - Architectures]]"
children:
  - "[[Beta Variational Autoencoders (𝛽-VAE)]]"
  - "[[Convolutional Autoencoders (CAE)]]"
  - "[[Masked Autoencoders (MAE)]]"
  - "[[Sparse Autoencoders (SAE)]]"
  - "[[Stacked Autoencoders (SAE)]]"
  - "[[Variational Autoencoders (VAE)]]"
---
###### Autoencoders (AE)
````excerpt
- is a type of [[ANN - Architectures|ANN architecture]] used to learn (efficient encodings / latent space) of unlabeled data. They do this by taking a high-dimensional signal 𝑥 and compressing it into "latent space" and then decompressing it to a high-dimensional signal 𝑥̅, which is somewhat equivalent to the original signal 𝑥
- is a type of [[Non-Linear／Nonlinear Dimensionality Reduction (NLDR) - Manifold Learning|manifold learning]]
- is a form of compression
- can reconstruct the [[Principal Component Analysis (PCA)]]
````
^excerpt

# AE - Introduction

```merge-table
{
  "rows": [
    [
      "![[Autoencoders (AE)/autoencoders-example.png|500]]\n- <strong>bottleneck hidden layer</strong> - forces network to learn a compressed latent representation\n- <strong>reconstruction loss</strong> - forces the compressed latent representation to capture/encode as much information about the data as possible",
      "![](https://www.youtube.com/watch?v=hZ4a4NgM3u0)"
    ]
  ],
  "tableStyle": "width: 71.4179%;"
}
```
# AE - Latent Space Dimensionality → Reconstruction Quality
![[Autoencoders (AE)/ae-latent-space-dimensionality-reconstruction-quality.png|500]]
# AE - Variants

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Beta Variational Autoencoders (𝛽-VAE)]]",
        "bg": "#F4F5F7"
      },
      "![[Beta Variational Autoencoders (𝛽-VAE)#^excerpt]]"
    ],
    [
      {
        "content": "[[Convolutional Autoencoders (CAE)]]",
        "bg": "#F4F5F7"
      },
      "![[Convolutional Autoencoders (CAE)#^excerpt]]"
    ],
    [
      {
        "content": "[[Masked Autoencoders (MAE)]]",
        "bg": "#F4F5F7"
      },
      "![[Masked Autoencoders (MAE)#^excerpt]]"
    ],
    [
      {
        "content": "[[Sparse Autoencoders (SAE)]]",
        "bg": "#F4F5F7"
      },
      "![[Sparse Autoencoders (SAE)#^excerpt]]"
    ],
    [
      {
        "content": "[[Stacked Autoencoders (SAE)]]",
        "bg": "#F4F5F7"
      },
      "![[Stacked Autoencoders (SAE)#^excerpt]]"
    ],
    [
      {
        "content": "[[Variational Autoencoders (VAE)]]",
        "bg": "#F4F5F7"
      },
      "![[Variational Autoencoders (VAE)#^excerpt]]"
    ]
  ]
}
```
# Resources
- [https://www.pyimagesearch.com/2020/02/17/autoencoders-with-keras-tensorflow-and-deep-learning/](https://www.pyimagesearch.com/2020/02/17/autoencoders-with-keras-tensorflow-and-deep-learning/)
