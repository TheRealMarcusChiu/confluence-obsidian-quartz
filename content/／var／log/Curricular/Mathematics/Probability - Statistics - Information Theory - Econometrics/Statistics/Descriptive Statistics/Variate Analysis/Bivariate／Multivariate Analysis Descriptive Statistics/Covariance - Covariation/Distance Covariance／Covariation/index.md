---
title: "Distance Covariance／Covariation"
created: 2021-11-12T00:18:32.724-06:00
modified: 2023-07-27T18:11:12.960-05:00
parent: "[[Covariance - Covariation]]"
children:
  - "[[Distance Covariance／Covariation - Java Code]]"
  - "[[Distance Covariance／Covariation - Properties]]"
---
###### Distance Covariance/Covariation
````excerpt
- a type of [[Covariance - Covariation|covariance/covariation]] between 2 variables 𝑋 and 𝑌 (if between itself see [[Distance Variance／Variation|Distance Variance]])
- is used to calculate [[Distance Correlation Coefficient|distance correlation]]
````
^excerpt

# Sample Distance Covariance Formula

Given a statistical sample {(𝑋<sub>1</sub>, 𝑌<sub>1</sub>), ..., (𝑋<sub>𝑛</sub>, 𝑌<sub>𝑛</sub>)} compute their respective [[Doubly-Centered Distance Matrix|doubly-centered distance matrices]] 𝐴 and 𝐵:

> [!expand]- Click here to expand...
> Let (𝑋<sub>𝑖</sub>, 𝑌<sub>𝑖</sub>), 𝑖 = 1, 2, ..., 𝑛 be a [statistical sample](https://en.wikipedia.org/wiki/Statistical_sample) from a pair of real-valued or vector-valued random variables (𝑋, 𝑌)
>
> First, compute the 𝑛x𝑛 [distance matrices](https://en.wikipedia.org/wiki/Distance_matrix) 𝑎 and 𝑏
> - 𝑎<sub>𝑖𝑗</sub> = ||𝑋<sub>𝑖</sub> - 𝑋<sub>𝑗</sub>||
> - 𝑏<sub>𝑖𝑗</sub> = ||𝑌<sub>𝑖</sub> - 𝑌<sub>𝑗</sub>||
>
> where:
> - ||⋅|| denotes [[Distance Measures／Metrics／Semi-Metrics／Functions|Euclidean distance/norm]]
>
> Next, compute the [[Doubly-Centered Distance Matrix|doubly-centered distance matrices]] 𝐴 and 𝐵:
> - 𝐴<sub>𝑖𝑗</sub> = 𝑎<sub>𝑖𝑗</sub> - 𝑎̅<sub>𝑖·</sub> - 𝑎̅<sub>·𝑗</sub> + 𝑎̅
> - 𝐵<sub>𝑖𝑗</sub> = 𝑏<sub>𝑖𝑗</sub> - 𝑏̅<sub>𝑖·</sub> - 𝑏̅<sub>·𝑗</sub> + 𝑏̅
>
> where:
> - 𝑎̅<sub>𝑖·</sub> is the 𝑖<sup>th</sup> row mean of 𝑎
> - 𝑎̅<sub>·𝑗</sub> is the 𝑗<sup>th</sup> column mean of 𝑎
> - 𝑎̅ is the [grand mean](https://en.wikipedia.org/wiki/Grand_mean) of 𝑎
> - the notation is similar for the <em>b</em> values

The <strong>sample distance covariance</strong> (a scalar) is simply the arithmetic average of the products 𝐴<sub>𝑖𝑗</sub>𝐵<sub>𝑖𝑗</sub>:
- 𝑑𝐶𝑜𝑣<sup>2</sup>(𝑋,𝑌) = (1/𝑛<sup>2</sup>) 𝛴<sub>1≤𝑖≤𝑛</sub>𝛴<sub>1≤𝑗≤𝑛</sub>\[𝐴<sub>𝑖𝑗</sub>𝐵<sub>𝑖𝑗</sub>\]

# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
