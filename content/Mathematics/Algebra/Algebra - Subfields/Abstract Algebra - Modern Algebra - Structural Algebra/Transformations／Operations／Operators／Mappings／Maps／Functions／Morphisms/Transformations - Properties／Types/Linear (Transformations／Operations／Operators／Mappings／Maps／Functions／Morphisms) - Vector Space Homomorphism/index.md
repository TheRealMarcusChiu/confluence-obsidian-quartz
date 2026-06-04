---
title: "Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism"
created: 2021-09-13T05:29:40.139-05:00
modified: 2024-01-09T17:00:02.640-06:00
parent: "[[Transformations - Properties／Types]]"
children:
  - "[[Bounded Linear Operator ↔ Continuous Linear Operator ： Between Normed Spaces]]"
  - "[[Linear Transformation - Properties]]"
  - "[[Transpose of a Linear Transformation - Algebraic Adjoint of a Linear Transformation]]"
---
###### Linear (Transformations/Operations/Operators/Mappings/Maps/Functions/Morphisms) - Vector Space Homomorphism (𝐿/𝑇 : 𝑉 → 𝑊)
````excerpt
- is a type of [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|transformation (𝑇)]] between two [[Vector Spaces - Linear Spaces|vector spaces]] (𝑉 → 𝑊) that preserves the operations of vector addition and scalar multiplication
- a linear transformation (𝐿 : 𝑉 → 𝑊) assigns each vector 𝑥̅ ∊ 𝑉  to a single vector 𝐿(𝑥̅) ∊ 𝑊, such that:
	- 𝐿(𝑢̅ + 𝑣̅) = 𝐿(𝑢̅) + 𝐿(𝑣̅) <font style="color: rgb(128,128,128);">\# for all 𝑢̅, 𝑣̅ in 𝑉, linear transformation 𝐿 is distributive over vector addition</font>
	- 𝐿(𝑐𝑢̅) = 𝑐𝐿(𝑢̅) <font style="color: rgb(128,128,128);">\# for all 𝑢̅ in 𝑉 and all scalars 𝑐, linear transformation 𝐿 is commutative w.r.t. scalar multiplication of a vector</font>
- a [[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)|homomorphism]] of vector spaces is called a <em>linear transformation</em>
- is a (1,1)-[[Tensors|tensor]]
- if a linear transformation is a [[Function - Injective／Injection／One-to-one - Surjective／Surjection／Unto／Onto - Bijective／Bijection／One-to-one Correspondence|bijection]] then it is called a <em>linear [[Morphisms - Homomorphic／Homomorphisms (Isomorphic／Isomorphisms - Monomorphic／Monomorphisms／Injective - Epimorphic／Epimorphisms／Surjective - Endomorphic／Endomorphisms - Automorphic／Automorphisms)|isomorphism]]</em>, which means the transformation is [[Invertibility／Invertible／Inverse Element - Right／Left Inverse Element|invertible]]
- if a linear transformation 𝐿 is finite (i.e. transforms from one finite space of dimension 𝑛 to another finite space of dimension 𝑚), then 𝐿 can be represented as a 𝑚⨯𝑛 [matrix](http://confluence.marcuschiu.com/pages/viewpage.action?pageId=1023009)
````
^excerpt

# Linear Transformation - Intuition

> [!expand-ui]- Understanding how a linear transformation 𝑇 transforms arbitrary basis vectors 𝑖 and 𝑗
> For example, given the following linear transformation 𝑇:
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-matrix.png|70]]
>
> and also the following basis vectors 𝑖 and 𝑗 (in this example 𝑖 and 𝑗 are the [[Standard Basis Vectors|standard basis vectors]]):
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-1.png|60]]
>
> Taking the transformation of 𝑇 on 𝑖 and 𝑗:
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-2.png|150]]
>
> This is what it looks like graphically
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-3.png|301]]

> [!expand-ui]- Understanding how a linear transformation 𝑇 transforms an arbitrary vector 𝑣, where 𝑣 is expressed by basis vectors 𝑖 and 𝑗
> For example, given the following linear transformation 𝑇, basis vectors 𝑖 and 𝑗, and vector 𝑣:
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-matrix.png|70]]
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-1.png|60]]
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-4.png|60]]
>
> Vector 𝑣 can be decomposed into its constituent basis vectors:
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-5.png|200]]
>
> Taking the transformation of 𝑇 on 𝑣 is the same as taking the transformations of the basis vectors 𝑖 and 𝑗 individually:
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-6.png|200]]
>
> This is what it looks like geometrically
>
> ![[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism/change-of-basis-7.png|301]]
# Linear Transformation - Tensor Intuition

See [[Tensor - 6 - Linear Maps Introduction|Linear Maps Introduction]]
# Linear Transformation - Examples
- If 𝑊 is the base [[Fields (Algebraic Structure) - Field Theory|field 𝐹]], such that (𝐿 : 𝑉 → 𝐹) then the transformation 𝐿 is called a [[Linear Functionals - Linear Forms - 1／One-Forms - Covectors|linear form]]
- 
> [!expand]- Expected Value of a Random Variable
> The [[Arithmetic Mean - Average - Location - Expected Value - Expectation Operator|expected value]] of a [random variable](https://en.wikipedia.org/wiki/Random_variable#Definition) is linear, as for random variables 𝑋 and 𝑋 we have:
> - 𝐄\[𝑋+𝑌\] = 𝐄\[𝑋\] + 𝐄\[𝑌\]
> - 𝐄\[𝛼𝑋\] = 𝛼𝐄\[𝑋\]
>
> but the [[Variance - Standard Deviation (Root Mean Square (RMS) Deviation)|variance]] of a random variable is not linear
- [[Gradient (𝛻 ｜ 𝛻𝑓)|Gradient (𝛻 | 𝛻𝑓)]]

# [[Linear Transformation - Properties]]
```dataview
LIST
FROM ""
WHERE file.folder = [[Linear Transformation - Properties]].file.folder + "/" + [[Linear Transformation - Properties]].file.name
```

# Linear Transformation - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
