---
title: "Curl (𝛻⨯ ｜ 𝛻⨯𝑓)"
created: 2023-12-14T14:52:47.623-06:00
modified: 2023-12-18T23:20:46.572-06:00
parent: "[[Multivariable／Multi-Variable／Multivariate Calculus／Analysis]]"
children: []
---
###### Curl (𝛻⨯𝑓)
````excerpt
- measures the "rotation" in a [[Vector-Valued Functions - Vector Fields|vector field / vector-valued function]]
- the 3D curl is a [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|transformation]] that takes in a 3D vector-valued function and outputs another 3D vector-valued function that represents the rotation at each point
- the 2D curl is a transformation that takes in a 2D vector-valued function and outputs a scaler-valued function that represents the rotation at each point
````
^excerpt

# Curl - Definition

> [!expand-ui]- 2D Definition
> If a vector field is given by a function:
> - $\overline{v}(x,y) = v_1(x,y)\hat{i} + v_2(x,y)\hat{j}$
> - $\overline{v}(x,y) = \begin{bmatrix} v_1(x,y) \\ v_2(x,y) \\ \end{bmatrix}$
>
> Curl is given by the formula:
> - $\text{2d-curl} \; \overline{v} = \frac{𝜕v_2}{𝜕x} - \frac{𝜕v_1}{𝜕y}$

> [!expand-ui]- 3D Definition
> If a vector field is given by a function:
> - $\overline{v}(x,y,z) = v_1(x,y,z)\hat{i} + v_2(x,y,z)\hat{j} + v_3(x,y,z)\hat{k}$
> - $\overline{v}(x,y) = \begin{bmatrix} v_1(x,y,z) \\ v_2(x,y,z) \\ v_3(x,y,z) \\ \end{bmatrix}$
>
> Curl is given by the formula:
> - $\nabla ⨯ \overline{v} = (\frac{𝜕v_3}{𝜕y} - \frac{𝜕v_2}{𝜕z}) \hat{i} + (\frac{𝜕v_1}{𝜕z} - \frac{𝜕v_3}{𝜕x}) \hat{j} + (\frac{𝜕v_2}{𝜕x} - \frac{𝜕v_1}{𝜕y}) \hat{k}$
> - $\nabla ⨯ \overline{v} = \begin{bmatrix} \frac{𝜕v_3}{𝜕y} - \frac{𝜕v_2}{𝜕z} \\ \frac{𝜕v_1}{𝜕z} - \frac{𝜕v_3}{𝜕x} \\ \frac{𝜕v_2}{𝜕x} - \frac{𝜕v_1}{𝜕y} \\ \end{bmatrix}$
>
> where:
> - $\nabla = \begin{bmatrix} \frac{𝜕}{𝜕x} \frac{𝜕}{𝜕y} \frac{𝜕}{𝜕z} \end{bmatrix}$
> - ⨯ is the [[Cross Product - Vector Product - Directed Area Product|cross-product]] of 𝑣̅ and 𝛻.
>
> Intuition:
> - $(\frac{𝜕v_3}{𝜕y} - \frac{𝜕v_2}{𝜕z})\hat{i} \;\; \text{ ←  rotational component parallel to the }yz \text{-plane}$
> - $(\frac{𝜕v_1}{𝜕z} - \frac{𝜕v_3}{𝜕x})\hat{j} \;\; \text{ ←  rotational component parallel to the }xz \text{-plane}$
> - $(\frac{𝜕v_2}{𝜕x} - \frac{𝜕v_1}{𝜕y})\hat{k} \;\; \text{ ←  rotational component parallel to the } xy \text{-plane}$

In 2D to describe rotation, you need a single number: the angular velocity:
- a positive number indicates a counter-clockwise​ rotation
- a negative number indicates a clockwise rotation

The absolute value of the angular velocity gives the speed of rotation, typically in radians per second.

In 3D to describe rotation you need a vector:
- the magnitude of the vector is equal to <strong>twice</strong> the angular velocity
- the direction is determined by a super-important convention called the "right-hand rule"

# Resources
- [Steve Brunton's The Curl of a Vector Field: Measuring Rotation](https://www.youtube.com/watch?v=QtiCZQIwBT8&list=PLMrJAkhIeNNQromC4WswpU1krLOq5Ro6S&index=5)
- [https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/divergence-and-curl-articles/a/curl-warmup](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/divergence-and-curl-articles/a/curl-warmup)
- [https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/curl-grant-videos/v/2d-curl-intuition](https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/curl-grant-videos/v/2d-curl-intuition)
