---
title: "Randomized Numerical Linear Algebra (Randomized NLA - RandNLA)"
created: 2024-08-21T23:30:07.239-05:00
modified: 2024-08-27T05:21:15.840-05:00
parent: "[[Numerical Linear Algebra (NLA) - Applied Linear Algebra (ALA)]]"
children: []
---
###### Randomized Numerical Linear Algebra (Randomized NLA - RandNLA)
````excerpt
- is an interdisciplinary research area that exploits randomization as a computational resource to develop improved algorithms for large-scale [[Linear Algebra|linear algebra]] problems
- introduced around 2016?
````
^excerpt

# RandNLA - Introduction

![](https://www.youtube.com/watch?v=6htbyY3rH1w)
# RandNLA - Algorithm

RandNLA algorithms involve taking an input matrix; constructing a “sketch” of that input matrix—where a sketch is a smaller or sparser matrix that represents the essential information in the original matrix—by random sampling; and then using that sketch as a surrogate for the full matrix to help compute quantities of interest.

To be useful, the sketch should be similar to the original matrix in some way. Several basic design principles underlie much of RandNLA:

```merge-table
{
  "rows": [
    [
      {
        "content": "element-wise sampling",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- randomly sample, in a careful data-dependent manner, a small number of ELEMENTS from an input matrix to create a much sparser sketch of the original matrix\n- \n> [!expand]- Click here to expand...\n> A meta-algorithm for element-wise sampling:\n> - INPUT:\n> \t- 𝑚x𝑛 matrix 𝐴\n> \t- integer 𝑠\\>0 denoting the number of elements to be sampled\n> \t- probability distribution 𝑝<sub>𝑖𝑗</sub>(𝑖=1,...,𝑚 and 𝑗=1,...,𝑛) with 𝛴<sub>𝑖𝑗</sub>𝑝<sub>𝑖𝑗</sub> = 1\n> - Let 𝐴ˆ be all zeroes 𝑚x𝑛 matrix\n> - for 𝑡=1 to 𝑠:\n> \t- randomly sample one element 𝐴<sub>𝑖𝑗</sub><sup>(𝑡)</sup> from 𝐴 using 𝑝<sub>𝑖𝑗</sub>\n> \t- 𝐴<sub>𝑖𝑗</sub>ˆ<sup>(𝑡)</sup> := 𝐴<sub>𝑖𝑗</sub>ˆ<sup>(𝑡)</sup> + (1/𝑠𝑝<sub>𝑖𝑗</sub><sup>(𝑡)</sup>) 𝐴<sub>𝑖𝑗</sub><sup>(𝑡)</sup>\n> - OUTPUT:\n> \t- return 𝐴ˆ"
    ],
    [
      {
        "content": "row/column sampling",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- randomly sample, in a careful data-dependent manner, a small number of COLUMNS and/or ROWS from an input matrix to create a much smaller sketch of the original matrix\n- \n> [!expand]- Click here to expand...\n> A meta-algorithm for element-wise sampling:\n> - INPUT:\n> \t- 𝑚x𝑛 matrix 𝐴\n> \t- integer 𝑠\\>0 denoting the number of ROWS to be sampled\n> \t- probability distribution 𝑝<sub>𝑖</sub>(𝑖=1,...,𝑚) with 𝛴<sub>𝑖</sub>𝑝<sub>𝑖</sub> = 1\n> - Let 𝐴ˆ be an empty matrix\n> - for 𝑡=1 to 𝑠:\n> \t- randomly sample one ROW 𝐴<sub>𝑖</sub><sup>(𝑡)</sup> from 𝐴 using 𝑝<sub>𝑖</sub>\n> \t- 𝐴<sub>𝑖</sub>ˆ<sup>(𝑡)</sup> := (1/√(𝑠𝑝<sub>𝑖</sub><sup>(𝑡)</sup>)) 𝐴<sub>𝑖</sub><sup>(𝑡)</sup>\n> - OUTPUT:\n> \t- return the 𝑠x𝑛 matrix 𝐴ˆ"
    ],
    [
      {
        "content": "random projections as pre-conditioners",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- preprocess an input matrix with a [[Random Projection|random-projection]]-type matrix, in order to “spread out” or uniformize the information in the original matrix, and then use naïve data-independent uniform sampling of rows/columns/elements in order to create a sketch\n- \n> [!expand]- Click here to expand...\n> A meta-algorithm for element-wise sampling:\n> - INPUT:\n> \t- 𝑚x𝑛 matrix 𝐴\n> \t- randomized pre-processing matrices 𝛱<sub>𝐿</sub> and/or 𝛱<sub>𝑅</sub>\n> - OUTPUT:\n> \t- to uniformize information across the ROWS of 𝐴, return 𝛱<sub>𝐿</sub>𝐴\n> \t- to uniformize information across the COLUMNS of 𝐴, return 𝐴𝛱<sub>𝑅</sub>\n> \t- to uniformize information across the ELEMENTS of 𝐴, return 𝛱<sub>𝐿</sub>𝐴𝛱<sub>𝑅</sub>"
    ]
  ]
}
```
# Resources
- [[RandNLA in CACM 2016.pdf]]
