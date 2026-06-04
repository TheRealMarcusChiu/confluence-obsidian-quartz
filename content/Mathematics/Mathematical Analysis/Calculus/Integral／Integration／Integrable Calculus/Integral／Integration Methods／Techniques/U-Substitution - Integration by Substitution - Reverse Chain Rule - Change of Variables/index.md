---
title: "U-Substitution - Integration by Substitution - Reverse Chain Rule - Change of Variables"
created: 2022-02-20T06:34:28.629-06:00
modified: 2023-12-20T16:02:15.928-06:00
parent: "[[Integral／Integration Methods／Techniques]]"
children: []
---
###### U-Substitution
````excerpt
- is an [[Integral／Integration Methods／Techniques|integration technique]]
- it is the counterpart to the [[Chain Rule (Calculus) - Multivariable Chain Rule|chain rule]] for [[Explicit Differentiation／Derivative／Differentiable／Differential Functions (differentiable at a point - differentiable over an interval - differentiable everywhere／over the entire domain)|differentiation]]
- can be thought of as a "change of variables" in 1 dimension (i.e from 𝑢 to 𝑥 and from 𝑥 to 𝑢)
````
^excerpt

# U-Substitution - For [[Definite Integrals／Integrations - Indefinite Integrals／Integrations|Indefinite Integrals]]
- $\int f(\underbrace{g(x)}_{u})  \underbrace{g'(x) dx}_{du} \; = \int f(u) du$

# U-Substitution - For Indefinite Integrals - Examples

> [!expand-ui]- Example #1
> Compute
> - $\int (2x^3 + 1)^7 (x^2) dx$
>
> Set:
> - $u = 2x^3 + 1$
> - $\frac{du}{dx} = 6x^2$
> - $du = 6x^2dx  \;\;\;\;\; \text{in differential form}$
>
> Now:
> - $\int (2x^3 + 1)^7 (x^2) dx = \frac{1}{6} \int \underbrace{(2x^3 + 1)^7}_{u^7} \underbrace{6x^2}_{du} dx$
> - $\int (2x^3 + 1)^7 (x^2) dx = \frac{1}{6} \int u^7 du$
> - $\int (2x^3 + 1)^7 (x^2) dx = \frac{1}{6} (\frac{1}{8} u^8) + C$
> - $\int (2x^3 + 1)^7 (x^2) dx = \frac{1}{48} (2x^3 + 1)^8 + C$
>
> where 𝐶 is an arbitrary [constant of integration](https://en.wikipedia.org/wiki/Constant_of_integration).
# U-Substitution - For [[Definite Integrals／Integrations - Indefinite Integrals／Integrations|Definite Integrals]]

Let 𝑔: \[𝑎, 𝑏\] → 𝐼 be a [[Explicit Differentiation／Derivative／Differentiable／Differential Functions (differentiable at a point - differentiable over an interval - differentiable everywhere／over the entire domain)|differentiable function]] with a continuous derivative, where 𝐼⊂ℝ is an [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]]. Suppose that 𝑓: 𝐼 → ℝ is a [[Continuous Functions (continuous at a point - continuous over／on an interval - continuous everywhere／over／on the entire domain)|continuous function]], then:
- $\int_{x=a}^{x=b} f(\underbrace{g(x)}_{u})  \underbrace{g'(x) dx}_{du} = \int_{u=g(a)}^{u=g(b)} f(u) du$

where:
- $u = g(x)$
- when 𝑥=𝑎 then 𝑢=𝑔(𝑎)
- when 𝑥=𝑏 then 𝑢=𝑔(𝑏)
- $\frac{du}{dx} = g'(x)$
- $du = g'(x)dx$

# U-Substitution - Proof

U-substitution can be derived from the [[The First／Second／Third Fundamental Theorem of Calculus (Part I, II, and III)|fundamental theorem of calculus]].

[https://en.wikipedia.org/wiki/Integration_by_substitution#:~:text=the%20trigonometric%20function.-,Proof,-%5Bedit%5D](https://en.wikipedia.org/wiki/Integration_by_substitution#:~:text=the%20trigonometric%20function.-,Proof,-%5Bedit%5D)
# U-Substitution - Derivation
- u-substitution is a 1-dimensional case of [[Jacobian Matrix - Using Jacobian Determinant to Calculate How a "Change of Basis／Variables" Warps Volume|Using Jacobian Determinant to Calculate How a "Change of Basis/Variables" Warps Volume]]
