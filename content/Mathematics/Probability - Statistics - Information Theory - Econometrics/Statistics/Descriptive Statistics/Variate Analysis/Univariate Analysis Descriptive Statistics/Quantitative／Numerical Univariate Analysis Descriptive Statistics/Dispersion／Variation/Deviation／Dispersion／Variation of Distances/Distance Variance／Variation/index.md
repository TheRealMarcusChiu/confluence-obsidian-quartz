---
title: "Distance Variance／Variation"
created: 2021-11-12T02:20:01.021-06:00
modified: 2023-07-27T18:06:36.772-05:00
parent: "[[Deviation／Dispersion／Variation of Distances]]"
children:
  - "[[Distance Variance／Variation - Properties]]"
---
###### Distance Variance/Variation
````excerpt
- a type of [[Deviation／Dispersion／Variation of Distances|Deviation/Dispersion/Variation of Distances]]
- used to compute the dispersion of a variable 𝑋 from its mean (for dispersion between 2 variables see [[Distance Covariance／Covariation|Distance Covariance]])
````
^excerpt

# Sample Distance Variance

Calculate the [[Doubly-Centered Distance Matrix|doubly-centered distance matrix]] (𝐴) of a statistical sample {𝑋<sub>1</sub>, ..., 𝑋<sub>𝑛</sub>}:

> [!expand]- Click here to expand...
> Let (𝑋<sub>𝑖</sub>) for 𝑖 = 1, 2, ..., 𝑛 be a [statistical sample](https://en.wikipedia.org/wiki/Statistical_sample) from a pair of real-valued or vector-valued random variables 𝑋
>
> First, compute the 𝑛x𝑛 [[Distance Matrix|distance matrix]] (𝑎)
> - 𝑎<sub>𝑖𝑗</sub> = ||𝑋<sub>𝑖</sub> - 𝑋<sub>𝑗</sub>||
>
> where:
> - ||⋅|| denotes [[L2／Euclidean Distance Metric|Euclidean distance]]/[[L2／Euclidean Norm|Euclidean norm]]
>
> Next, compute the [[Doubly-Centered Distance Matrix|doubly-centered distance matrix]] (𝐴)
> - 𝐴<sub>𝑖𝑗</sub> = 𝑎<sub>𝑖𝑗</sub> - 𝑎̅<sub>𝑖·</sub> - 𝑎̅<sub>·𝑗</sub> + 𝑎̅
>
> where:
> - 𝑎̅<sub>𝑖·</sub> is the 𝑖<sup>th</sup> row mean of 𝑎
> - 𝑎̅<sub>·𝑗</sub> is the 𝑗<sup>th</sup> column mean of 𝑎
> - 𝑎̅ is the [grand mean](https://en.wikipedia.org/wiki/Grand_mean) of 𝑎
>
> All rows and all columns of 𝐴 sum to zero

The <strong>sample distance variance</strong> (a scalar) is simply the arithmetic average of the products 𝐴<sub>𝑖𝑗</sub>𝐴<sub>𝑖𝑗</sub>:
- 𝑑𝑉𝑎𝑟(𝑋) = (1/𝑛<sup>2</sup>) 𝛴<sub>1≤𝑖≤𝑛</sub>𝛴<sub>1≤𝑖≤𝑛</sub>\[𝐴<sub>𝑖𝑗</sub>𝐴<sub>𝑖𝑗</sub>\]

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
