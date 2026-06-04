---
title: "ANN - Convolutional Layer"
created: 2024-08-14T23:06:19.320-05:00
modified: 2024-08-15T00:13:23.107-05:00
parent: "[[ANN - Layer Types]]"
children:
  - "[[Feature Maps - Activation Maps]]"
---
###### Convolutional Layer
````excerpt
- is the core building block of an [[Convolutional Neural Networks (CNN) - Translation／Translational／Shift Equivariant／Equivariance／Invariant／Invariance CNN|Convolutional Neural Network (CNN)]]
- the layer's parameters consist of a set of learnable filters/[kernels](https://en.wikipedia.org/wiki/Kernel_(image_processing)), which have a small [[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)|receptive field]]
- during forward pass, each filter is [convolved](https://en.wikipedia.org/wiki/Convolution) across the width and height of the input image, producing a 2D [[Feature Maps - Activation Maps|feature/activation map]] of that filter/kernel. As a result, the network learns filters that activate when it detects a specific type of [[Features - Feature Functions - Feature Engineering - Feature-Based Models|feature]] at some spatial position in the input image
````
^excerpt

# Convolutional Layer - Example

```merge-table
{
  "rows": [
    [
      "![[ANN - Convolutional Layer/convolutional-layer-example.png|200]]"
    ],
    [
      "neurons of a convolutional layer (blue) connected to their [[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)|receptive field]] (red)"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      "![[ANN - Convolutional Layer/convolutional-neural-network--convolution-worked-example.png|500]]"
    ],
    [
      "- A worked example of performing a convolution\n- The convolution has stride 1, zero padding, with kernel size 3x3\n- The convolution kernel is a [discrete Laplacian operator](https://en.wikipedia.org/wiki/Discrete_Laplace_operator)"
    ]
  ]
}
```
# Convolutional Layer - 3 Hyperparameters Controlling Size of Output (i.e. Feature Map)

> [!expand-ui]- depth
> The <strong>depth</strong> of the output volume controls the number of neurons in a layer that connect to the same region of the input volume. These neurons learn to activate for different features in the input. For example, if the first convolutional layer takes the raw image as input, then different neurons along the depth dimension may activate in the presence of various oriented edges, or blobs of color

> [!expand-ui]- stride
> Stride controls how depth columns around the width and height are allocated. If the stride is 1, then we move the filters one pixel at a time. This leads to heavily overlapping receptive fields between the columns, and to large output volumes. For any integer 𝑆\>0 a stride 𝑆 means that the filter is translated 𝑆 units at a time per output. In practice, 𝑆≥3 is rare. A greater stride means smaller overlap of [[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)|receptive fields]] and smaller spatial dimensions of the output volume

> [!expand-ui]- padding size
> Sometimes, it is convenient to pad the input with zeros (or other values, such as the average of the region) on the border of the input volume. The size of this padding is a third hyperparameter. Padding provides control of the output volume's spatial size. In particular, sometimes it is desirable to exactly preserve the spatial size of the input volume, this is commonly referred to as "same" padding

The spatial size is defined as below:
- $\frac{W - K + 2P}{S} + 1$

where:
- 𝑊 - input volume size
- 𝐾 - kernel field size
- 𝑃 - padding size on the border
- 𝑆 - stride length

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
