---
title: "Function Spaces"
created: 2021-09-13T05:29:38.560-05:00
modified: 2023-07-05T23:45:32.307-05:00
parent: "[[Mathematical Spaces - Types]]"
children:
  - "[[Basis Functions]]"
  - "[[Calculating Number of Distinct Functions in a Function Space]]"
---
###### Function Spaces (𝑋 → 𝑌 or 𝑌<sup>𝑋</sup>)
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a set of [[Functions (Domain - Codomain - Preimage - Image - Range)|functions]] between two fixed [[Set Theory|sets]]
- the set of functions from set 𝑋 to set 𝑌 may be denoted 𝑋 → 𝑌 or 𝑌<sup>𝑋</sup>
````
^excerpt

# Function Spaces - Examples
###### Function Spaces that are also [[Vector Spaces - Linear Spaces|Vector Spaces]]
- a [[Finite-Dimensional Vector Spaces|finite-dimensional vector space (𝑉,𝐹)]] where 𝑉 is a set of all polynomial functions of degree 𝑘 or less
	- example finite basis \#1 {1, 𝑥, 𝑥<sup>2</sup>, ..., 𝑥<sup>𝑘</sup>} <font style="color: rgb(122,134,154);">\# "standard basis"</font>
	- example finite basis \#2 {4, 6𝑥, 1𝑥<sup>2</sup>, ..., 2𝑥<sup>𝑘</sup>}
- an [[Infinite-Dimensional Vector Spaces|infinite-dimensional vector space (𝑉,𝐹)]] where 𝑉 is a set of all polynomial functions of any degree
	- example infinite basis \#1 {1, 𝑥, 𝑥<sup>2</sup>, ... } <font style="color: rgb(122,134,154);">\# "standard basis"</font>
	- example infinite basis \#2 {4, 6𝑥, 1𝑥<sup>2</sup>, ... }
- an [[Infinite-Dimensional Vector Spaces|infinite-dimensional vector space (𝑉,𝐹)]] where 𝑉 is a set of functions, where each function (𝑓) outputs a [[Fields (Algebraic Structure) - Field Theory|field (𝐹)]] (i.e. 𝑓: 𝑋 → 𝐹)
	- example infinite basis \#1 {1, 𝑥, 𝑥<sup>2</sup>, ..., 𝑐𝑜𝑠(𝑥), ..., 5<sup>𝑥</sup>, ... }
- the [[Vector Space of All Sequences - Sequence Space of All Sequences|vector space of all sequences (𝐹ℕ)]] where it is the set of all functions 𝑓: ℕ → 𝐹
	- any [[Sequence Spaces|sequence space]] (i.e. [[Linear Subspaces - Vector Subspaces|linear subspace]] of 𝐹<sup>ℕ</sup>)
- any [[Lp Spaces - Lebesgue Spaces (function space)|𝐿𝑝 spaces (function space)]]

###### Function Spaces that are NOT [[Vector Spaces - Linear Spaces|Vector Spaces]]
- 
> [!expand]- If the domain of the functions is not a vector space, then the function space is not a vector space
> Let:
> - 𝑋 = {red, green, blue}
> - 𝑌 = {marcus, erina}
> - $f(x) = \begin{cases} marcus & \text{if } x = red \; or \; green \\ erina  & \text{if } x = blue \end{cases}$
>
> The domain 𝑋 is not a vector space

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
