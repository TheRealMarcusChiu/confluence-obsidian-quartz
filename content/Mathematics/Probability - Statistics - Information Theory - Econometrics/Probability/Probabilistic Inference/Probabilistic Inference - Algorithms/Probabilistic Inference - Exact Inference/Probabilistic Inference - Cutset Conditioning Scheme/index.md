---
title: "Probabilistic Inference - Cutset Conditioning Scheme"
created: 2021-09-13T05:28:25.808-05:00
modified: 2021-12-11T05:23:39.489-06:00
parent: "[[Probabilistic Inference - Exact Inference]]"
children:
  - "[[Probabilistic Inference - Loop Cutset-Conditioning Algorithm]]"
  - "[[Probabilistic Inference - W-Cutset-Conditioning Algorithm]]"
---
<strong>Cutset Conditioning Scheme</strong>
- is an extension of [[Probabilistic Inference - Exact Inference|exact inference algorithm]]
- is based on the fact, that observing the value of certain variables can simplify the variable elimination process
- idea: when a variable is not observed, we can enumerate all of its possible values, then for each value perform an exact inference algorithm of your choice (e.g. [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|Variable Elimination]]), and then sum the results
- the cutset is the set of unobserved variables we are conditioning on
- in terms of number of operations, the conditioning algorithm offers no benefit over the [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|variable elimination algorithm]]. However, it offers a continuum of time-space trade-offs, which can be extremely important in cases where the factors created by variable elimination are too big to fit in main memory

# Cutset Conditioning - Example

> [!expand]- Click here to expand...
> ![[Probabilistic Inference - Cutset Conditioning Scheme/cutset-conditioning.png|200]]
>
> suppose we have a [[Graphical Models|graphical model]] above with binary variables
> ###### Suppose Cutset = {𝐿}:
> - this results in 2 networks, each with 𝐿 instantiated with a corresponding value: 0 or 1
> - for each instantiated network we feed it into an exact inference algorithm and record its output probability
> - sum all probabilities and return that result
>
> ![[Probabilistic Inference - Cutset Conditioning Scheme/cutset-conditioning-L-instantiated.png|500]]
> ###### Suppose Cutset = {𝐿,𝐴}:
> - this results in 4 networks, each with 𝐿 and 𝐴 instantiated with a corresponding value: 0 or 1
> - for each instantiated network we feed it into an exact inference algorithm and record its output probability
> - sum all probabilities and return that result
>
> ![[Probabilistic Inference - Cutset Conditioning Scheme/cutset-conditioning-LA-instantiated.png|500]]
>
> [[cutset-conditioning-LA-instantiated.drawio]]
# Cutset Conditioning - Problems
- if the cutset consists of 𝑤 nodes each with 𝑑 states, then we would need to run the [[Probabilistic Inference - Exact Inference|exact inference algorithm]]𝑑<sup>𝑤</sup> times
- to combine the result of the many possible instantiations of the cutset we need to find priors to each one

# Cutset Conditioning - Variants
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
