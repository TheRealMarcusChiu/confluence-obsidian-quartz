---
title: "Doubly-Centered Distance Matrix"
created: 2023-07-27T17:41:55.138-05:00
modified: 2023-07-27T17:56:22.332-05:00
parent: "[[Distance Matrix]]"
children: []
---
###### Doubly-Centered Distance Matrix
````excerpt
- is a centered distance matrix
- TODO
````
^excerpt

# Formula

A [[Distance Matrix|distance matrix]] 𝑎 is defined as:
- 𝑎<sub>𝑖𝑗</sub> = ||𝑋<sub>𝑖</sub> - 𝑋<sub>𝑗</sub>||

A doubly-centered distance matrix 𝐴 is defined as:
- 𝐴<sub>𝑖𝑗</sub> = 𝑎<sub>𝑖𝑗</sub> - 𝑎̅<sub>𝑖·</sub> - 𝑎̅<sub>·𝑘</sub> + 𝑎̅

where:
- 𝑎̅<sub>𝑖·</sub> is the 𝑖<sup>th</sup> row mean of 𝑎
- 𝑎̅<sub>·𝑗</sub> is the 𝑗<sup>th</sup> column mean of 𝑎
- 𝑎̅ is the [grand mean](https://en.wikipedia.org/wiki/Grand_mean) of 𝑎

# Properties
- all rows and all columns of 𝐴 sum to zero
