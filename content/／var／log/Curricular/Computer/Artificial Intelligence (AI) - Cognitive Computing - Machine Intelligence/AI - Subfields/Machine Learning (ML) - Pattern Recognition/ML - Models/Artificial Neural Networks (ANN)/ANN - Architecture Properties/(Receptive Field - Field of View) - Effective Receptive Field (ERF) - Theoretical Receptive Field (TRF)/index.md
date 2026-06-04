---
title: "(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)"
created: 2024-08-12T12:52:59.339-05:00
modified: 2024-08-13T19:18:13.711-05:00
parent: "[[ANN - Architecture Properties]]"
children: []
---
###### (Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)
````excerpt
- refers to the region of the input image that a particular neuron in a convolutional layer is “looking at” or taking into account when making its predictions or feature extractions
- is determined by the size of the convolutional kernel (also known as the filter) and the stride used during the convolution operation
- two types of receptive fields:
	- theoretical receptive field - theoretically evenly spaced out across the entire image
	- effective receptive field - in CNNs it is usually more centered of the image
````
^excerpt

## Theoretical Receptive Field (TRF) - Examples

```merge-table
{
  "rows": [
    [
      "![[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)/receptive-field-example.png|500]]",
      "## ![[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)/cnn-vs-transformers-receptive-fields.png|450]]"
    ],
    [
      "- the receptive field in a convolutional neural network with two 3x3 convolutional (conv) layers\n- in the 2nd conv layer, every pixel has a 5x5 field of view, a.k.a. receptive field",
      "- Receptive fields of CNNs vs. Transformers\n- in CNNs, the receptive field grows incrementally one layer after another\n- in transformers, the receptive field spans all input (tokens) after a single layer. Yet, These receptive fields’ estimates are only theoretical\n- in CNNs, the actual receptive field differs from the theoretical"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Theoretical Receptive Field (TRF) vs Effective Receptive Field (ERF)

```merge-table
{
  "rows": [
    [
      "![[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)/gradient-differences-in-neural-networks.png|400]]"
    ],
    [
      "- In CNNs, the pixels at the center of a receptive field have a large impact on the output\n- In the forward pass, the center pixels can propagate information to the output through many different paths\n- Therefore, during a backward pass, the center pixels have a much larger gradient magnitude"
    ]
  ],
  "tableStyle": "width: 32.2972%;"
}
```

Evaluating the receptive field in CNNs empirically is ERF.

While the TRF depends on the architecture only, the ERF dy/dx is dependent on the input, i.e., different inputs generate different ERFs dy/dx

The ERF both follows a [[Univariate Normal／Gaussian／Gauss／Laplace-Gauss﻿ Distribution／Model／Process (Bell Curve)|Gaussian distribution]] and occupies only a fraction of the full TRF

```merge-table
{
  "rows": [
    [
      "![[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)/effects-on-receptive-field.png|550]]"
    ],
    [
      "- comparing the effect of:\n\t- (1) the number of layers on the ERF\n\t- (2) random weight initialization on the ERF\n\t- (3) nonlinear activation on the ERF\n- Kernel size is fixed at 3 × 3 for all the networks.\n\t- Uniform: convolutional kernel weights are all ones, no nonlinearity;\n\t- Random: random kernel weights, no nonlinearity;\n\t- Random + ReLU: random kernel weights, ReLU nonlinearity"
    ]
  ]
}
```

```merge-table
{
  "rows": [
    [
      "![[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)/effects-of-non-linear-activation-functions-on-receptive-field.png|400]]"
    ],
    [
      "- Comparing the effect of non-linearities (RELU, Tanh, and Sigmoid) on the ERF.\n- ReLU makes the distribution a bit less Gaussian. ReLU units output exactly zero for half of its inputs. Thus, it is easy to get a zero output for the center pixel on the output plane"
    ]
  ],
  "tableStyle": "width: 32.2972%;"
}
```

```merge-table
{
  "rows": [
    [
      "![[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)/effects-of-subsample-and-dilation-on-receptive-field.png|400]]"
    ],
    [
      "- Comparing the effect of subsampling and dilation on the ERF. Both increase the ERF significantly"
    ]
  ],
  "tableStyle": "width: 32.2972%;"
}
```

```merge-table
{
  "rows": [
    [
      "![[(Receptive Field - Field of View) - Effective Receptive Field (ERF) - Theoretical Receptive Field (TRF)/effects-of-training-on-receptive-field.png|533]]"
    ],
    [
      "- Comparison of ERF before and after training for models trained on:\n\t- CIFAR-10 classification\n\t- CamVid semantic segmentation tasks\n- The effective receptive field grows significantly after training.\n\t- In the CIFAR experiment, the TRF is 74x74 (i.e. bigger than the input image 32x32). Yet, ERF still won’t cover the input image"
    ]
  ]
}
```
# Resources
- [Receptive Field of CNN](https://www.youtube.com/watch?v=ip2HYPC_T9Q)
- [https://ahmdtaha.medium.com/understanding-the-effective-receptive-field-in-deep-convolutional-neural-networks-b2642297927e](https://ahmdtaha.medium.com/understanding-the-effective-receptive-field-in-deep-convolutional-neural-networks-b2642297927e)
