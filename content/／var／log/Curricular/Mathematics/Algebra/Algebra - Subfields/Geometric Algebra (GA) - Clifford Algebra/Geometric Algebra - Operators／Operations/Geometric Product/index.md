---
title: "Geometric Product"
created: 2024-01-08T12:54:02.405-06:00
modified: 2026-05-16T02:35:42.289-05:00
parent: "[[Geometric Algebra - Operators／Operations]]"
children: []
---
###### Geometric Product
````excerpt
- defines the multiplication of [[Vectors|vectors]] that results in higher-dimensional objects called [[Multi-Vectors／Multivectors／p-Vectors - Clifford Number - Multors|multivectors]]
- geometric product was first briefly mentioned by Hermann Grassmann, who was chiefly interested in developing the closely related [[Exterior Algebra - Grassmann Algebra|exterior algebra]]
- can be thought of as the "reduced form" of the [[Outer Product|outer product]]
````
^excerpt

# Geometric Product - Definition/Assumptions

For vectors 𝑣,𝑢,𝑤, the geometric product on vectors is defined as follows:
- [[Associativity／Associative|Associativity]]:
	- (𝑢𝑣)𝑤 = 𝑢(𝑣𝑤)
- Left and right [[Distributivity／Distributive|distributivity]] over addition:
	- 𝑣(𝑢 + 𝑤) = 𝑣𝑢 + 𝑣𝑤
	- (𝑢 + 𝑤)𝑣 = 𝑢𝑣 + 𝑤𝑣
- Contraction:
	- 𝑣<sup>2</sup>= 𝒬(𝑣) = 𝜀<sub>𝑣</sub>|𝑣|<sup>2</sup>
	- where:
		- 𝒬 is the [[Quadratic Forms|quadratic form]]
		- |𝑣| is the magnitude of 𝑣
		- 𝜀<sub>𝑣</sub> is the [metric signature](https://en.wikipedia.org/wiki/Metric_signature). For a space with [[L2／Euclidean Distance Metric|Euclidean metric]] 𝜀<sub>𝑣</sub> is 1 so can be omitted, and the contraction condition becomes: 𝑣<sup>2</sup>= ||𝑣||<sup>2</sup>

The contraction assumption also yields the following identities:
- the product of a basis vector with itself is 1: 𝑒<sub>𝑖</sub>𝑒<sub>𝑖</sub> = 1
	- 
> [!expand]- Click here to expand...
> > [!info]
> > 𝑣<sup>2</sup>= ||𝑣||<sup>2</sup>
> - 𝑒<sub>𝑖</sub><sup>2</sup> = ||𝑒<sub>𝑖</sub>||<sup>2</sup>
> - 𝑒<sub>𝑖</sub><sup>2</sup> = 1<sup>2</sup>
> - 𝑒<sub>𝑖</sub><sup>2</sup> = 1
> - 𝑒<sub>𝑖</sub>𝑒<sub>𝑖</sub> = 1
- basis vectors anti-commute with other basis vectors: 𝑒<sub>𝑖</sub>𝑒<sub>𝑗</sub> = −𝑒<sub>𝑗</sub>𝑒<sub>𝑖</sub>
	- 
> [!expand]- Click here to expand...
> - ||𝑒<sub>𝑖</sub> + 𝑒<sub>𝑗</sub>|| = sqrt(1<sup>2</sup> + 1<sup>2</sup>) = sqrt(2)
>
> > [!info]
> > 𝑣<sup>2</sup>= ||𝑣||<sup>2</sup>
> - (𝑒<sub>𝑖</sub> + 𝑒<sub>𝑗</sub>)<sup>2</sup> = sqrt(2)<sup>2</sup>
> - 𝑒<sub>𝑖</sub>𝑒<sub>𝑖</sub> + 𝑒<sub>𝑖</sub>𝑒<sub>𝑗</sub>+ 𝑒<sub>𝑗</sub>𝑒<sub>𝑖</sub> + 𝑒<sub>𝑗</sub>𝑒<sub>𝑗</sub> = 2
> - 1 + 𝑒<sub>𝑖</sub>𝑒<sub>𝑗</sub>+ 𝑒<sub>𝑗</sub>𝑒<sub>𝑖</sub> + 1 = 2
> - 𝑒<sub>𝑖</sub>𝑒<sub>𝑗</sub>+ 𝑒<sub>𝑗</sub>𝑒<sub>𝑖</sub> = 0
> - 𝑒<sub>𝑖</sub>𝑒<sub>𝑗</sub> = -𝑒<sub>𝑗</sub>𝑒<sub>𝑖</sub>

# Geometric Product of 1-Vectors

The <em>geometric product</em> between two [[Vectors|1-vectors]] 𝑣,𝑢 equals the sum of the [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product(⋅)]] and [[Wedge Product - Exterior Product|wedge product (∧)]]
- 𝑢𝑣 = 𝑢⋅𝑣 + 𝑢∧𝑣

Derivation

> [!expand]- derivation
> Given 2 vectors:
> - 𝑢 = 𝑢<sub>1</sub>𝑒<sub>1</sub> + 𝑢<sub>2</sub>𝑒<sub>2</sub>+ ...
> - 𝑣 = 𝑣<sub>1</sub>𝑒<sub>1</sub> + 𝑣<sub>2</sub>𝑒<sub>2</sub>+ ...
>
> The geometric product is distributive over addition:
> - 𝑢𝑣 = 𝑢(𝑣<sub>1</sub>𝑒<sub>1</sub>) + 𝑢(𝑣<sub>2</sub>𝑒<sub>2</sub>) + ...
> - 𝑢𝑣 = (𝑢<sub>1</sub>𝑒<sub>1</sub> + 𝑢<sub>2</sub>𝑒<sub>2</sub>+ ...)(𝑣<sub>1</sub>𝑒<sub>1</sub>) + (𝑢<sub>1</sub>𝑒<sub>1</sub> + 𝑢<sub>2</sub>𝑒<sub>2</sub>+ ...)(𝑣<sub>2</sub>𝑒<sub>2</sub>) + ...
> - 𝑢𝑣 = (𝑢<sub>1</sub>𝑒<sub>1</sub>)(𝑣<sub>1</sub>𝑒<sub>1</sub>) + (𝑢<sub>2</sub>𝑒<sub>2</sub>)(𝑣<sub>1</sub>𝑒<sub>1</sub>) + ...  + (𝑢<sub>1</sub>𝑒<sub>1</sub>)(𝑣<sub>2</sub>𝑒<sub>2</sub>) + (𝑢<sub>2</sub>𝑒<sub>2</sub>)(𝑣<sub>2</sub>𝑒<sub>2</sub>) + ...
>
> The geometric product is associative:
> - 𝑢𝑣 = 𝑢<sub>1</sub>𝑒<sub>1</sub>𝑣<sub>1</sub>𝑒<sub>1</sub> + 𝑢<sub>2</sub>𝑒<sub>2</sub>𝑣<sub>1</sub>𝑒<sub>1</sub> + ...  + 𝑢<sub>1</sub>𝑒<sub>1</sub>𝑣<sub>2</sub>𝑒<sub>2</sub> + 𝑢<sub>2</sub>𝑒<sub>2</sub>𝑣<sub>2</sub>𝑒<sub>2</sub> + ...
>
> The geometric product has the following identities:
> - scalars commute with basis vectors: 𝛼𝑒<sub>𝑖</sub> = 𝑒<sub>𝑖</sub>𝛼
> - the product of a basis vector with itself is 1: 𝑒<sub>𝑖</sub>𝑒<sub>𝑖</sub> = 1
> - basis vectors anti-commute with other basis vectors: 𝑒<sub>𝑖</sub>𝑒<sub>𝑗</sub> = −𝑒<sub>𝑗</sub>𝑒<sub>𝑖</sub>
>
> Continuing our computation:
> - 𝑢𝑣 = 𝑢<sub>1</sub>𝑣<sub>1</sub>𝑒<sub>1</sub>𝑒<sub>1</sub> + 𝑢<sub>2</sub>𝑣<sub>1</sub>𝑒<sub>2</sub>𝑒<sub>1</sub> + ...  + 𝑢<sub>1</sub>𝑣<sub>2</sub>𝑒<sub>1</sub>𝑒<sub>2</sub>+ 𝑢<sub>2</sub>𝑣<sub>2</sub>𝑒<sub>2</sub>𝑒<sub>2</sub> + ...
> - 𝑢𝑣 = 𝑢<sub>1</sub>𝑣<sub>1</sub> - 𝑢<sub>2</sub>𝑣<sub>1</sub>𝑒<sub>1</sub>𝑒<sub>2</sub> + ...  + 𝑢<sub>1</sub>𝑣<sub>2</sub>𝑒<sub>1</sub>𝑒<sub>2</sub>+ 𝑢<sub>2</sub>𝑣<sub>2</sub> + ...
> - 𝑢𝑣 = 𝑢<sub>1</sub>𝑣<sub>1</sub> + 𝑢<sub>2</sub>𝑣<sub>2</sub> + ...  + (𝑢<sub>1</sub>𝑣<sub>2</sub> - 𝑢<sub>2</sub>𝑣<sub>1</sub>)𝑒<sub>1</sub>𝑒<sub>2</sub> + ...
> - 𝑢𝑣 = 𝑢⋅𝑣 + (𝑢<sub>1</sub>𝑣<sub>2</sub> - 𝑢<sub>2</sub>𝑣<sub>1</sub>)𝑒<sub>1</sub>𝑒<sub>2</sub> + ... <font style="color: rgb(122,134,154);">\# by definition of [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]]</font>
> - 𝑢𝑣 = 𝑢⋅𝑣 + 𝑢∧𝑣 <font style="color: rgb(122,134,154);">\# by definition of</font> [[Wedge Product - Exterior Product|wedge product]]

The geometric product between two 1-vectors 𝑣,𝑢 equals the sum of the symmetric product and an antisymmetric product
- TODO [README](https://en.wikipedia.org/wiki/Geometric_algebra#:~:text=under%20this%20embedding%29.-,The%20geometric%20product,-%5Bedit%5D)

# Resources
- [Freya Holmer - Why can't you multiply vectors?](https://www.youtube.com/watch?app=desktop&v=htYh-Tq7ZBI)
