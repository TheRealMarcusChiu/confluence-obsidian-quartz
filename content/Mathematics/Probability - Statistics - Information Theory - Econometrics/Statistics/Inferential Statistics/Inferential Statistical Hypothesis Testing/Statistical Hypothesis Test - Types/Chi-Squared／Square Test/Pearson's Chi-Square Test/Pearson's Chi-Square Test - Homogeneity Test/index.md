---
title: "Pearson's Chi-Square Test - Homogeneity Test"
created: 2021-09-13T05:29:09.760-05:00
modified: 2026-05-24T20:17:16.105-05:00
parent: "[[Pearson's Chi-Square Test]]"
children: []
---
###### Pearson's Chi-Square Test - Homogeneity Test
- a type of [[Pearson's Chi-Square Test]] for independence
````excerpt
- comparing different populations with respect to a variable of interest
````
^excerpt

# Setup & Chi-Square Test Statistic For Homogeneity

similar to the [[Pearson's Chi-Square Test - Contingency Table Test - Statistical Independence Test|Chi-Square Statistical Independence Test]] (for difference see: [[Pearson's Chi-Square Test - Homogeneity Test vs Independence Test|Homogeneity Test vs Independence Test]])
# Example With Code

> [!expand]- Click here to expand...
> A sample of 150 carriers of a certain antigen and a sample of 500 non-carriers showed the following blood group distributions:
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "header": true,
>         "bg": "#F4F5F7",
>         "colspan": 2,
>         "rowspan": 2
>       },
>       null,
>       {
>         "content": "Type",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 2
>       },
>       null,
>       {
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "𝐶𝑎𝑟𝑟𝑖𝑒𝑟",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "𝑁𝑜𝑛-𝐶𝑎𝑟𝑟𝑖𝑒𝑟",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "total",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Blood Group",
>         "header": true,
>         "bg": "#F4F5F7",
>         "rowspan": 4
>       },
>       {
>         "content": "𝑂",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "72",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "230",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "302",
>         "bg": "#fffae6"
>       }
>     ],
>     [
>       {
>         "content": "𝐴",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "54",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "192",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "246",
>         "bg": "#fffae6"
>       }
>     ],
>     [
>       {
>         "content": "𝐵",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "16",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "63",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "79",
>         "bg": "#fffae6"
>       }
>     ],
>     [
>       {
>         "content": "𝐴𝐵",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "8",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "15",
>         "bg": "#deebff",
>         "align": "center"
>       },
>       {
>         "content": "23",
>         "bg": "#fffae6"
>       }
>     ],
>     [
>       {
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "total",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "150",
>         "bg": "#fffae6"
>       },
>       {
>         "content": "500",
>         "bg": "#fffae6"
>       },
>       "650"
>     ]
>   ]
> }
> ```
>
> Are carriers and non-carriers similar with respect to blood group distributions?
> ```
> x <- c(72, 230, 54, 192, 16, 63, 8, 15)
> xmat <- matrix(x, byrow=T, ncol=2)
> xmat
> #     [,1] [,2]
> # [1,]  72  230
> # [2,]  54  192
> # [3,]  16   63
> # [4,]   8   15
>
> chisq.test(xmat)
> Pearson's Chi-squared test
> data: xmat
> X-squared = 2.4052, df = 3, p-value = 0.4927
> ```
