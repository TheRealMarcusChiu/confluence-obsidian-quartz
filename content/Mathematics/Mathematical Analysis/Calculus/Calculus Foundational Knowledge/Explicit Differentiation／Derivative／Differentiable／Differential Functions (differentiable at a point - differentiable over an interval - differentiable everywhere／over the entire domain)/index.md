---
title: "Explicit Differentiation／Derivative／Differentiable／Differential Functions (differentiable at a point - differentiable over an interval - differentiable everywhere／over the entire domain)"
created: 2023-08-10T12:31:36.309-05:00
modified: 2026-05-13T15:09:31.362-05:00
parent: "[[Calculus Foundational Knowledge]]"
children:
  - "[[Differential／Derivative Calculus - Examples]]"
  - "[[Differential／Derivative Calculus - Methods／Techniques]]"
  - "[[Differential／Derivative Calculus - Other]]"
---
###### Explicit Differentiable Functions
````excerpt
- measures the instantaneous rate of change of the output variable with respect to the input variable
- a [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|function]] is <strong>differentiable at point</strong> 𝑝 if the derivative exists at 𝑝, 𝑓'(𝑝), i.e. the following two [[Limits - Limit of a Function|limits]] must be equal to each other:
	- $\lim_{𝛿\to0^+}\frac{f(p + 𝛿) - f(p)}{𝛿}$
	- $\lim_{𝛿\to0^-}\frac{f(p) - f(p - 𝛿)}{𝛿}$
	- $\text{Thus } \;\;\; f'(p) = \lim_{𝛿\to0^+}\frac{f(p + 𝛿) - f(p)}{𝛿} = \lim_{𝛿\to0^-}\frac{f(p) - f(p - 𝛿)}{𝛿}$
- a function is <strong>differentiable</strong><strong> over an interval</strong> if it is differentiable at every point within the interval
- a function is <strong>differentiable</strong><strong> (everywhere or over the entire domain)</strong> if it is differentiable at every point within the domain
- a function that is NOT differentiable is a non-differentiable function
- a function that is differentiable (at a point | over an interval | everywhere) implies the function is [[Continuous Functions (continuous at a point - continuous over／on an interval - continuous everywhere／over／on the entire domain)|continuous]] respectively
- opposite: [[Integral／Integration／Integrable Calculus|integral calculus]]
````
^excerpt

```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
