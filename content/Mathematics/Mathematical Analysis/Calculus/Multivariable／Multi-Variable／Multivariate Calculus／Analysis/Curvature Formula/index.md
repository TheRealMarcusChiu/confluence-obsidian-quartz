---
title: "Curvature Formula"
created: 2023-08-16T21:25:02.607-05:00
modified: 2026-05-16T18:57:49.912-05:00
parent: "[[Multivariable／Multi-Variable／Multivariate Calculus／Analysis]]"
children: []
---
###### Curvature Formula (𝜅)
````excerpt
- 𝜅 = 1/𝑟 where 𝑟 is the radius of the curve
````
^excerpt

# Curvature - Definition

> [!expand-ui]- Curvature of a Position Scalar-Valued Function
> Assume we are given a position [[Scalar-Valued Functions - Scalar Fields|scalar-valued function]]:
> - 𝑓(𝑡)
>
> The curvature of 𝑓(𝑡) denoted as ||𝑑𝑇/𝑑𝑓|| is defined as:
> - $𝜅 = ||\frac{dT}{df}|| = \frac{||\frac{dT}{dt}||}{||\frac{df}{dt}||}$
>
> where:
> - 𝑇 is the unit tangent vector, defined as:
> 	- $T(t) = \frac{\frac{df}{dt}}{||\frac{df}{dt}||}$

> [!expand-ui]- Curvature of a Position Vector-Valued Function (2D)
> Assume we are given a position 2D [[Vector-Valued Functions - Vector Fields|vector-valued function]]:
> - $f(t) = \begin{bmatrix} x(t) \\ y(t) \end{bmatrix}$
>
> The curvature of 𝑓(𝑡) denoted as ||𝑑𝑇/𝑑𝑓|| is defined as:
> - $𝜅 = ||\frac{dT}{df}|| = \frac{||\frac{dT}{dt}||}{||\frac{df}{dt}||} = \frac{y'(t)x''(t) - x'(t)y''(t)}{(x'(t)^2 + y'(t)^2)^{3/2}}$
>
> show work:
>
> > [!expand]- Click here to expand...
> > - $\frac{df}{dt} = f'(t) = \begin{bmatrix} x'(t) \\ y'(t) \end{bmatrix}$
> > - $||\frac{df}{dt}|| = ||f'(t)|| = \sqrt{x'(t)^2 + y'(t)^2}$
> > - $T(t) = \frac{1}{||\frac{df}{dt}||} \frac{df}{dt} = \frac{1}{\sqrt{x'(t)^2 + y'(t)}} \begin{bmatrix} x'(t) \\ y'(t) \end{bmatrix} = \begin{bmatrix} \frac{x'(t)}{\sqrt{x'(t)^2 + y'(t)^2}} \\ \frac{y'(t)}{\sqrt{x'(t)^2 + y'(t)^2}} \end{bmatrix}$
> > - $\frac{dT}{dt} = T'(t) = \frac{1}{(x'(t)^2 + y'(t)^2)^{3/2}} \begin{bmatrix} y'(t)^2x''(t) - x'(t)y'(t)y''(t)\\ x'(t)^2y''(t) - y'(t)x'(t)x''(t)\\ \end{bmatrix}$
> > 	- 
> > > [!expand]- show work
> > > > [!list-indent-undo]
> > > > > [!indent]
> > > > > ![[Curvature Formula/1.png|600]]
> > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{y'(t)x''(t) - x'(t)y''(t)}{x'(t)^2 + y'(t)^2}$
> > 	- 
> > > [!expand]- show work
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = || \frac{1}{(x'(t)^2 + y'(t)^2)^{3/2}} \begin{bmatrix} y'(t)^2x''(t) - x'(t)y'(t)y''(t)\\ x'(t)^2y''(t) - y'(t)x'(t)x''(t)\\ \end{bmatrix} ||$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{(x'(t)^2 + y'(t)^2)^{3/2}} || \begin{bmatrix} y'(t)^2x''(t) - x'(t)y'(t)y''(t)\\ x'(t)^2y''(t) - y'(t)x'(t)x''(t)\\ \end{bmatrix} ||$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{(x'(t)^2 + y'(t)^2)^{3/2}} \sqrt{ [y'(t)^2x''(t) - x'(t)y'(t)y''(t)]^2 + [x'(t)^2y''(t) - y'(t)x'(t)x''(t)]^2 }$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{(x'(t)^2 + y'(t)^2)^{3/2}} \sqrt{ y'(t)^4x''(t)^2 + x'(t)^2y'(t)^2y''(t)^2 - 2x'(t)y'(t)^3x''(t)y''(t) + x'(t)^4y''(t)^2 + y'(t)^2x'(t)^2x''(t)^2 - 2x'(t)^3y'(t)x''(t)y''(t) }$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{(x'(t)^2 + y'(t)^2)^{3/2}} \sqrt{ y'(t)^4x''(t)^2 + x'(t)^2y'(t)^2y''(t)^2 + x'(t)^4y''(t)^2 + y'(t)^2x'(t)^2x''(t)^2 - [x'(t)^2 + y'(t)^2]*[2x'(t)y'(t)x''(t)y''(t)] }$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{(x'(t)^2 + y'(t)^2)^{3/2}} \sqrt{ [x'(t)^2 + y'(t)^2]*[y'(t)^2x''(t)^2] + [x'(t)^2 + y'(t)^2]*[x'(t)^2y''(t)^2] - [x'(t)^2 + y'(t)^2]*[2x'(t)y'(t)x''(t)y''(t)] }$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{(x'(t)^2 + y'(t)^2)^{3/2}} \sqrt{ [x'(t)^2 + y'(t)^2]*[y'(t)^2x''(t)^2 + x'(t)^2y''(t)^2 - 2x'(t)y'(t)x''(t)y''(t)] }$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{(x'(t)^2 + y'(t)^2)^{3/2}} \sqrt{x'(t)^2 + y'(t)^2} \sqrt{y'(t)^2x''(t)^2 + x'(t)^2y''(t)^2 - 2x'(t)y'(t)x''(t)y''(t)}$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{x'(t)^2 + y'(t)^2} \sqrt{y'(t)^2x''(t)^2 + x'(t)^2y''(t)^2 - 2x'(t)y'(t)x''(t)y''(t)}$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{x'(t)^2 + y'(t)^2} \sqrt{[y'(t)x''(t) - x'(t)y''(t)]^2}$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{1}{x'(t)^2 + y'(t)^2} [y'(t)x''(t) - x'(t)y''(t)]$
> > > - $||\frac{dT}{dt}|| = ||T'(t)|| = \frac{y'(t)x''(t) - x'(t)y''(t)}{x'(t)^2 + y'(t)^2}$
> > - $||\frac{dT}{df}|| = \frac{||\frac{dT}{dt}||}{||\frac{df}{dt}||} = \frac{\frac{y'(t)x''(t) - x'(t)y''(t)}{x'(t)^2 + y'(t)^2}}{(x'(t)^2 + y'(t)^2)^{1/2}} = \frac{y'(t)x''(t) - x'(t)y''(t)}{(x'(t)^2 + y'(t)^2)^{3/2}}$

> [!expand-ui]- Curvature of a Position Vector-Valued Function (3D)
> Assume we are given a position 3D [[Vector-Valued Functions - Vector Fields|vector-valued function]]:
> - $f(t) = \begin{bmatrix} x(t) \\ y(t) \\ z(t) \end{bmatrix}$
>
> The curvature of 𝑓(𝑡) denoted as ||𝑑𝑇/𝑑??|| is defined as:
> - $𝜅 = ||\frac{dT}{df}|| = \frac{||\frac{dT}{dt}||}{||\frac{df}{dt}||} = \frac{||f' ⨯ f''||}{||f'||^3}$

> [!expand-ui]- Curvature of a Position Vector-Valued Function (Generalized)
> Assume we are given a position [[Vector-Valued Functions - Vector Fields|vector-valued function]]:
> - $f(t) = \begin{bmatrix} x(t) \\ y(t) \\ z(t) \\ \vdots \end{bmatrix}$
>
> The curvature of 𝑓(𝑡) denoted as ||𝑑𝑇/𝑑??|| is defined as:
> - $𝜅 = \frac{f'(t) ∧ f''(t)}{||f'(t)||^3}$
>
> where:
> - ∧ is the [[Wedge Product - Exterior Product|wedge product]]
> - $f'(t) = \begin{bmatrix} x'(t) \\ y'(t) \\ z'(t) \\ \vdots \end{bmatrix}$
# Example

> [!expand-ui]- 2D Curvature Example - Circle
> from: [https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/curvature/v/curvature-formula-part-2](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/curvature/v/curvature-formula-part-2)
>
> Consider the following position [[Vector-Valued Functions - Vector Fields|vector-valued function]] 𝑓(𝑡):
> - $f(t) = \begin{bmatrix} cos(t)r \\ sin(t)r \end{bmatrix}$
>
> The derivative of 𝑓(𝑡):
> - $f'(t) = \begin{bmatrix} -sin(t)r \\ cos(t)r \end{bmatrix}$
>
> The unit tangent function of 𝑓(𝑡):
> - $T(t) = \frac{f'(t)}{||f'(t)||}$
> 	- $||f'(t)|| = || \begin{bmatrix} -sin(t)r \\ cos(t)r \end{bmatrix} ||$
> 	- $||f'(t)|| = \sqrt{sin^2(t)r^2 + cos^2(t)r^2}$
> 	- $||f'(t)|| = r\sqrt{sin^2(t) + cos^2(t)}$
> 	- $||f'(t)|| = r$
> - $T(t) = \frac{1}{r} f'(t)$
> - $T(t) = \frac{1}{r} \begin{bmatrix} -sin(t)r \\ cos(t)r \end{bmatrix}$
> - $T(t) = \begin{bmatrix} -sin(t) \\ cos(t) \end{bmatrix}$
>
> Next, find the derivative of 𝑇 over 𝑡:
> - $\frac{dT}{dt} = \begin{bmatrix} -cos(t) \\ -sin(t) \end{bmatrix}$
>
> Next, solve for:
> - $||\frac{dT}{df}|| = \frac{||\frac{dT}{dt}||}{||\frac{df}{dt}||}$
> 	- $||\frac{dT}{dt}|| = \sqrt{cos^2(t) + sin^2(t)}$
> 	- $||\frac{dT}{dt}|| = 1$
> 	- $||\frac{df}{dt}|| = ||f'(t)|| = r$
> - $||\frac{dT}{df}|| = \frac{1}{r}$
# Resources
- [Khan Academy](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/curvature/v/curvature-intuition)
- [YouTube's Khan Academy's Curvature videos](https://www.youtube.com/watch?v=ugtUGhBSeE0&list=PLSQl0a2vh4HC5feHa6Rc5c0wbRTx56nF7&index=35)
