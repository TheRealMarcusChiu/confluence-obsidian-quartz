---
title: "Laplace Transform - Inverse Laplace Transform"
created: 2023-08-24T18:38:57.173-05:00
modified: 2026-05-16T18:48:17.000-05:00
parent: "[[(Signal-to-Frequency ／ Fourier-Transform) Algorithms]]"
children:
  - "[[Laplace Transform - Examples]]"
---
###### Laplace Transform
````excerpt
- is a mathematical method that converts a function of a real variable to a function of a complex variable
- a function 𝑓(𝑡) that can't be [[Fourier Transform - Inverse Fourier Transform|Fourier Transformed]] can be <em>Laplace Transformed</em> by multiplying the function by a decaying exponential 𝑒<sup>-𝜁𝑡</sup> and a [[Unit Step Function - Heavyside Step Function|heavyside function 𝐻(𝑡)]] where 𝜁 is a constant:
	- 𝐹(𝑡) = <font style="color: rgb(153,204,0);">𝑓(𝑡)</font><font style="color: rgb(0,255,255);">𝑒<sup>-𝜁𝑡</sup></font><font style="color: rgb(255,0,0);">𝐻(𝑡)</font>
	- thus:
		- the Laplace transform of 𝑓(𝑡) is the Fourier transform of 𝐹(𝑡)
		- the Laplace transform is a <font style="color: rgb(255,0,0);">one-sided</font> <font style="color: rgb(0,255,255);">weight</font> <font style="color: rgb(153,204,0);">Fourier transform</font>
- a discrete version is [[Z-Transform]]
````
^excerpt

# Laplace Transform - Definition
###### Laplace Transform Pair:
1. The <strong>Laplace Transform</strong> 𝐿{·} of a function 𝑓(𝑡) is defined as:
	- $\overline{f}(s) = L\{f(t)\}(s) = \int_0^∞ e^{-st} f(t) dt$
	- 
> [!expand]- derivation
> As defined in the excerpt above, let:
> - $F(t) = f(t)e^{-𝜁t}H(t)$
>
> The Laplace transform of 𝑓(𝑡) is the Fourier transform of 𝐹(𝑡):
> - $\overline{f}(s) = L\{f(t)\}(s) = F\{F(t)\}(s) = \hat{F}(s)$
>
> So let's compute the Fourier transform of 𝐹.
>
> Let 𝐹ˆ(𝑤) be the Fourier transform of 𝐹(𝑡):
> - $\hat{F}(w) = \int_{-∞}^∞ F(t)e^{-iwt}dt \;\;\;\; \text{by definition of Fourier Transform}$
> - $\hat{F}(w) = \int_{-∞}^∞ f(t)e^{-𝜁t}H(t)e^{-iwt}dt \;\;\;\; \text{by substitution of }F(t) \text{ as defined in excerpt}$
> - $\hat{F}(w) = \int_0^∞ f(t)e^{-𝜁t}e^{-iwt}dt \;\;\;\; \text{by definition of heavyside function }H(t)$
> - $\hat{F}(w) = \int_0^∞ f(t)e^{-(𝜁 + iw)t}dt$
> - $\hat{F}(s) = \int_0^∞ f(t)e^{-st}dt \;\;\;\; \text{by variable substitution }s = (𝜁 + iw)$
>
> Since the Laplace transform of 𝑓(𝑡) is the Fourier transform of 𝐹(𝑡), then:
> - $\overline{f}(s) = L\{f(t)\}(s) = F\{F(t)\}(s) = \hat{F}(s) = \hat{F}(s) = \int_0^∞ f(t)e^{-st}dt$
2. The <strong>Inverse Laplace Transform</strong> 𝐿<sup>-1</sup>{·} of a function 𝑓ˆ(𝑡) is defined as:
	- $f(t) = L^{-1}\{\overline{f}(s)\}(t) = \frac{1}{2\pi i} \int_{𝜁 - i∞}^{𝜁 + i∞} e^{st} \overline{f}(s) ds$
	- 
> [!expand]- derivation
> As defined in the excerpt above, let:
> - $F(t) = f(t)e^{-𝜁t}H(t)$
>
> So let's compute the Inverse Fourier transform of 𝐹ˆ.
>
> Let 𝐹(𝑡) be the Inverse Fourier transform of 𝐹ˆ(𝑤):
> - $F(t) = F^{-1}\{\hat{F}(w)\}(t)$
> - $F(t) = \frac{1}{2\pi} \int_{-∞}^∞ \hat{F}(w)e^{iwt}dw \;\;\;\; \text{by definition of Inverse Fourier Transform } F^{-1}$
> - $F(t)e^{𝜁𝑡} = \frac{1}{2\pi} \int_{-∞}^∞ \hat{F}(w)e^{iwt}e^{𝜁𝑡} dw \;\;\;\; \text{}$
> - $f(t) = \frac{1}{2\pi} \int_{-∞}^∞ \hat{F}(w)e^{iwt}e^{𝜁𝑡} dw \;\;\;\; \text{ because } F(t) = f(t)e^{-𝜁t}H(t)$
> - $f(t) = \frac{1}{2\pi} \int_{-∞}^∞ \hat{F}(w)e^{(𝜁 + iw)t} dw \;\;\;\; \text{  }$
> - Let's define:
> 	- $s = 𝜁 + iw$
> 	- $ds = idw ⟹ dw = \frac{1}{i}ds$
> 	- The Laplace transform of 𝑓(𝑡) is the Fourier transform of 𝐹(𝑡):
> 	- $\overline{f}(s) = L\{f(t)\}(s) = F\{F(t)\}(w) = \hat{F}(w)$
> - $f(t) = \frac{1}{2\pi} \int_{𝜁 - i∞}^{𝜁 + i∞} \overline{f}(s)e^{st} \frac{1}{i}ds \;\;\;\; \text{ via substitution }$
> - $f(t) = \frac{1}{2\pi i} \int_{𝜁 - i∞}^{𝜁 + i∞} \overline{f}(s)e^{st} ds \;\;\;\; \text{  }$

# Laplace Transform - Examples

See: [[Laplace Transform - Examples]]
# Laplace Transform - Properties

Laplace transforms are [[Linear (Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms) - Vector Space Homomorphism|linear operators]]:
- $L\{a*f(t) + b*g(t)\} = a*L\{f(t)\} + b*L\{g(t)\}$

# Laplace Transform - Use Cases
- used in solving [[Differential Equations (DE) - Ordinary Differential Equations (ODEs) - Partial Differential Equations (PDEs)|differential equations]]:
	- transforms [[Differential Equations (DE) - Ordinary Differential Equations (ODEs) - Partial Differential Equations (PDEs)|PDE]] into [[Differential Equations (DE) - Ordinary Differential Equations (ODEs) - Partial Differential Equations (PDEs)|ODE]]
	- transforms ODE into algebraic expressions
- used in [[Control Theory]]

# Resources
- [https://www.khanacademy.org/math/differential-equations/laplace-transform](https://www.khanacademy.org/math/differential-equations/laplace-transform)
- [The Laplace Transform: A Generalized Fourier Transform](https://www.youtube.com/watch?v=7UvtU75NXTg)
