---
title: "Gaussian Splats (i.e. 3D Gaussian Functions)"
created: 2025-09-13T14:21:45.026-05:00
modified: 2025-09-13T14:22:20.575-05:00
parent: "[[3D Gaussian Splatting (3DGS)]]"
children: []
---
# What is a Gaussian Splat (i.e. 3D Gaussian Functions)?

A Gaussian splat is a 3D ellipsoid defined by:
- <strong>Position (x, y, z)</strong> - The center point of the splat in 3D space
- <strong>Covariance matrix</strong> - Defines the size, orientation, and shape of the ellipsoid
- <strong>Color (RGB)</strong> - The color contribution of the splat
- <strong>Opacity (α)</strong> - How transparent or opaque the splat is

Each splat can be thought of as a small, semi-transparent cloud of color that contributes to the final rendered image. When millions of these splats are combined, they create detailed 3D scenes.

Gaussian functions are chosen because they have several advantageous properties:
1. <strong>Smooth falloff</strong> - They fade smoothly from the center to the edges
2. <strong>Differentiable</strong> - Essential for optimization during training
3. <strong>Efficient rendering</strong> - Can be rasterized quickly on modern GPUs
4. <strong>Compact representation</strong> - Each splat requires only a small amount of data

# Creating 3D Gaussian Splats

The process of taking multiple 2D images into 3D Gaussian Splats, can be broken down into two main steps:
1. <strong>[[Structure from Motion (SfM)]]</strong> - Input images are analyzed to estimate original camera poses and create an initial 3D point cloud, identifying key points in the scene.
2. <strong>Training</strong> - The algorithm performs the following over many thousands of iterations:
	- <strong>Adds splats</strong> in areas that need more detail
	- <strong>Removes splats</strong> that don't contribute significantly
	- <strong>Adjusts splat parameters</strong> to better match the input images
