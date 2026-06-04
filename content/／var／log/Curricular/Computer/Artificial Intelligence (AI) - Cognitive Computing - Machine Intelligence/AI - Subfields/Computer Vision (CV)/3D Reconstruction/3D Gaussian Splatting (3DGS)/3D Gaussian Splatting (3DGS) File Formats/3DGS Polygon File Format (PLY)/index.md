---
title: "3DGS Polygon File Format (PLY)"
created: 2025-09-10T23:21:55.201-05:00
modified: 2026-03-31T00:25:12.261-05:00
parent: "[[3D Gaussian Splatting (3DGS) File Formats]]"
children: []
---
###### 3DGS Polygon File Format (PLY)
````excerpt
- is the standard file format for storing [[3D Gaussian Splatting (3DGS)|3D Gaussian Splat]] data
- while PLY has been around since the 1990s as a format for storing 3D mesh data, its use in Gaussian Splatting represents a specialized application with unique characteristics and considerations
````
^excerpt

# PLY File Contents

3DGS PLY files contain specialized properties for each Gaussian splat:
- <strong>Position</strong> (<code>x</code>, <code>y</code>, <code>z</code>) - 3D location of the splat center
- <strong>Scale</strong> (<code>scale\_0</code>, <code>scale\_1</code>, <code>scale\_2</code>) - size of the Gaussian along each axis
- <strong>Rotation</strong> (<code>rot\_0</code>, <code>rot\_1</code>, <code>rot\_2</code>, <code>rot\_3</code>) - quaternion representing splat orientation
- <strong>Opacity</strong> - transparency/alpha value
- <strong>[[Spherical Harmonics]] Coefficients</strong> - view-dependent color encoding using two sets of properties:
	- <strong>Direct Color Component</strong> (<code>f\_dc\_0</code>, <code>f\_dc\_1</code>, <code>f\_dc\_2</code>) - the base color values (RGB) representing the 0<sup>th</sup>-order spherical harmonic coefficients. These define the primary color of the splat.
	- <strong>Higher-Order Coefficients</strong> (<code>f\_rest\_0</code> through <code>f\_rest\_44</code>) - additional spherical harmonic coefficients that encode how the color changes based on viewing direction. These 45 coefficients are distributed across higher-order bands:
		- <strong>1st order</strong> - 3 coefficients × 3 color channels = 9 coefficients
		- <strong>2nd order</strong> - 5 coefficients × 3 color channels = 15 coefficients
		- <strong>3rd order</strong> - 7 coefficients × 3 color channels = 21 coefficients

# PLY File Viewers
- [https://playcanvas.com/viewer](https://playcanvas.com/viewer)
- [https://github.com/playcanvas/model-viewer](https://github.com/playcanvas/model-viewer)
- [https://sparkjs.dev/viewer/](https://sparkjs.dev/viewer/)

# PLY File Editors
- [https://superspl.at/editor](https://superspl.at/editor)
- [https://github.com/playcanvas/supersplat](https://github.com/playcanvas/supersplat)

![](https://www.youtube.com/watch?v=MwzaEM2I55I)
