---
title: "Volume Integral"
created: 2023-12-18T12:56:21.895-06:00
modified: 2023-12-18T13:15:51.342-06:00
parent: "[[Integral Examples]]"
children: []
---
###### Volume Integral (∭)
````excerpt
- TODO
````
^excerpt

# Volume Integral - Definition

The volume integral of a [[Scalar-Valued Functions - Scalar Fields|scalar-valued function]] 𝑓(𝑥,𝑦,𝑧) over a region 𝐷⊂ℝ<sup>3</sup> is defined as:
- $∭_D f(x,y,z) \; dx \; dy \; dz$

# Volume Integral - Examples

Integrating the scalar-valued function 𝑓(𝑥,𝑦,𝑧) = 1 over a unit cube yields the following result:
- $\int_0^1 \int_0^1 \int_0^1 1 \; dx \; dy \; dz = \int_0^1 \int_0^1 (1 - 0) \; dy \; dz = \int_0^1 (1 - 0) \; dz = 1 - 0 = 1$

So the volume of the unit cube is 1 as expected. This is rather trivial, however, and a volume integral is far more powerful. For instance, if we have a scalar density function on the unit cube then the volume integral will give the total mass of the cube. For example for density function:
- $f(x,y,z) = x + y + z$

the total mass of the cube is:
- $\int_0^1 \int_0^1 \int_0^1 (x+y+z) \; dx \; dy \; dz = \int_0^1 \int_0^1 [\frac{1}{2}x + yx + zx]_0^1 \; dy \; dz$
- $\int_0^1 \int_0^1 \int_0^1 (x+y+z) \; dx \; dy \; dz = \int_0^1 \int_0^1 [(\frac{1}{2}1 + y1 + z1) - (\frac{1}{2}0 + y0 + z0)]_0^1 \; dy \; dz$
- $\int_0^1 \int_0^1 \int_0^1 (x+y+z) \; dx \; dy \; dz = \int_0^1 \int_0^1 (\frac{1}{2} + y + z) \; dy \; dz = \int_0^1 (1 + z) \; dz = 1 - 0 = \frac{3}{2}$
