---
title: "Repeated Measure ANOVA"
created: 2021-09-13T05:29:07.887-05:00
modified: 2021-09-13T05:29:07.887-05:00
parent: "[[Analysis of Variance (ANOVA)]]"
children: []
---
###### Repeated Measure ANOVA
- is a type of [[Analysis of Variance (ANOVA)|ANOVA]]
- used when:
	- one factor variable with at least 2 levels
	- levels are <strong>dependent</strong>
```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "level 1",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "level 2",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "level 3",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "subject 1",
        "header": true,
        "bg": "#F4F5F7"
      },
      "9",
      "6",
      "2"
    ],
    [
      {
        "content": "subject 2",
        "header": true,
        "bg": "#F4F5F7"
      },
      "8",
      "6",
      "3"
    ],
    [
      {
        "content": "subject 3",
        "header": true,
        "bg": "#F4F5F7"
      },
      "9",
      "7",
      "4"
    ]
  ]
}
```
### Repeated Measure ANOVA - Procedure

> [!expand]- Click here to expand...
> ###### steps:
> - state null hypothesis & alternative hypothesis
> - compute 𝐹 Statistic
> - choose significance level (𝛼)
> - compute critical value (𝑓)
> - reject null hypothesis if 𝐹 \>𝑓, otherwise accept it
>
> ### Hypothesis
>
> > [!expand]- Click here to expand...
> > - null hypothesis: there are no difference between the levels
> > - alternative hypothesis: there is a difference between the levels
> ### Table to Compute 𝐹 Statistic
>
> > [!expand]- Click here to expand...
> > - 𝐿 - set of levels
> > - 𝑆 - set of subjects
> > - 𝐷(𝐿=𝑖) - dataset of level 𝑖
> > - 𝐷(𝑆=𝑖) - dataset of subject 𝑖
> > - 𝐷 - dataset of all levels
> >
> > ```merge-table
> > {
> >   "rows": [
> >     [
> >       {
> >         "content": "Source",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       {
> >         "content": "Sum of Squares",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       {
> >         "content": "Degrees of Freedom",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       {
> >         "content": "Mean Squares\nVariance",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       {
> >         "content": "𝐹 Statistic",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       }
> >     ],
> >     [
> >       {
> >         "content": "Between\n\n(Model)",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "Sum of Squares Between\n- 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 𝑆𝑆<sub>𝑡𝑜𝑡𝑎𝑙</sub>- 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>\n- 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = <font style=\"color: rgb(128,0,0);\"><strong>(\\[</strong>∑<sub>𝑖∊𝐿</sub>\\[∑<sub>𝑗∊𝐷(𝐿=𝑖)</sub>(𝑦<sub>𝑗</sub>)\\]<sup>2</sup><strong>\\] </strong>/ <strong>\\[</strong><font style=\"color: rgb(128,0,0);\">𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</font><strong>\\])</strong></font> - <font style=\"color: rgb(0,128,0);\"><strong>(</strong>\\[∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub>)\\]<sup>2</sup> / 𝑠𝑖𝑧𝑒(𝐷)<strong>)</strong></font>",
> >       "𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠 - 1",
> >       "𝑀𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> / 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub>",
> >       "𝐹 = 𝑀𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub><sub></sub>/ 𝑀𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub>"
> >     ],
> >     [
> >       {
> >         "content": "Within",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "Sum of Squares Within\n- 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = ∑<sub>𝑖∊𝐿</sub><strong>\\[</strong> ∑<sub>𝑗∊𝐷(𝑖)</sub>\\[𝑦<sub>𝑗</sub>- 𝑚𝑒𝑎𝑛(𝐷(𝑖))\\]<sup>2</sup><strong>\\]</strong>\n- 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = <font style=\"color: rgb(102,102,153);\"><strong>\\[</strong>∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)<strong>\\]</strong></font> - <font style=\"color: rgb(128,0,0);\"><strong>(\\[</strong>∑<sub>𝑖∊𝐿</sub>\\[∑<sub>𝑗∊𝐷(𝐿=𝑖)</sub>(𝑦<sub>𝑗</sub>)\\]<sup>2</sup><strong>\\] </strong>/ <strong>\\[</strong><font style=\"color: rgb(128,0,0);\">𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</font><strong>\\])</strong></font>",
> >       "𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 𝑛 - 𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠",
> >       "𝑀𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> / 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>",
> >       ""
> >     ],
> >     [
> >       {
> >         "content": "Subjects",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "Sum of Squares Subjects\n- 𝑆𝑆<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub> = <font style=\"color: rgb(128,0,0);\"><font style=\"color: rgb(255,0,0);\"><strong>(\\[</strong>∑<sub>𝑖∊𝑆</sub>\\[∑<sub>𝑗∊𝐷(𝑆=𝑖)</sub>(𝑦<sub>𝑗</sub>)\\]<sup>2</sup><strong>\\] </strong>/ <strong>\\[</strong>𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠<strong>\\]) </strong></font><font style=\"color: rgb(51,51,51);\">-</font> <font style=\"color: rgb(0,128,0);\"><strong>(</strong>\\[∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub>)\\]<sup>2</sup> / 𝑠𝑖𝑧𝑒(𝐷)<strong>)</strong></font></font>",
> >       "𝑑𝑓<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub>= 𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠 - 1",
> >       "𝑀𝑆<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub> = 𝑆𝑆<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub> / 𝑑𝑓<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub>",
> >       ""
> >     ],
> >     [
> >       {
> >         "content": "Error",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "Sum of Squares Within Error\n- 𝑆𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub> = 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>- 𝑆𝑆<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub>",
> >       "𝑑𝑓<sub>𝑒𝑟𝑟𝑜𝑟</sub>= 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>- 𝑑𝑓<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub>",
> >       "𝑀𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub> = 𝑆𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub> / 𝑑𝑓<sub>𝑒𝑟𝑟𝑜𝑟</sub>",
> >       ""
> >     ],
> >     [
> >       {
> >         "content": "Total",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "Sum of Squares Total\n- 𝑆𝑆<sub>𝑡𝑜𝑡𝑎𝑙</sub> = 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> + 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>\n- 𝑆𝑆<sub>𝑡𝑜𝑡𝑎𝑙</sub> = ∑<sub>𝑗∊𝐷</sub>\\[𝑦<sub>𝑗</sub>- 𝑚𝑒𝑎𝑛(𝐷)\\]<sup>2</sup>\n- 𝑆𝑆<sub>𝑡𝑜𝑡𝑎𝑙</sub> = <font style=\"color: rgb(102,102,153);\"><strong>\\[</strong>∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)<strong>\\]</strong></font> - <font style=\"color: rgb(0,128,0);\"><strong>(</strong>\\[∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub>)\\]<sup>2</sup> / <font style=\"color: rgb(0,128,0);\">𝑠𝑖𝑧𝑒(𝐷)</font><strong>)</strong></font>",
> >       "𝑑𝑓<sub>𝑡𝑜𝑡𝑎𝑙</sub> = 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> + 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>\n\n𝑑𝑓<sub>𝑡𝑜𝑡𝑎𝑙</sub> = 𝑛 - 1",
> >       "",
> >       ""
> >     ]
> >   ],
> >   "tableStyle": "width: 99.9012%;"
> > }
> > ```
> ### Choose Significance Level (𝛼), Lookup Critical Value, Accept or Reject Null Hypothesis
>
> > [!expand]- Click here to expand...
> > lookup 𝑓 critical value with:
> > - 𝛼
> > - (𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub>, 𝑑𝑓<sub>𝑒𝑟𝑟𝑜𝑟</sub>)
> >
> > if 𝐹 \>𝑓 reject the null hypothesis, otherwise fail to reject null hypothesis
> >
> > NOTE: 𝐹 and 𝑓 are always positive values
> > ###### f-distribution
> > ![[Repeated Measure ANOVA/f-distribution.png|301]]
### Repeated Measure ANOVA - Example

> [!expand]- Click here to expand...
> let's say we a given:
> - 7 participants/subjects
> - then their anxiety levels are recorded each week
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "week 1",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "week 2",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "week 3",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "subject 1: anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "9",
>       "7",
>       "4"
>     ],
>     [
>       {
>         "content": "subject 2: anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "8",
>       "6",
>       "3"
>     ],
>     [
>       {
>         "content": "subject 3: anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "7",
>       "6",
>       "2"
>     ],
>     [
>       {
>         "content": "subject 4: anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "8",
>       "7",
>       "3"
>     ],
>     [
>       {
>         "content": "subject 5: anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "8",
>       "8",
>       "4"
>     ],
>     [
>       {
>         "content": "subject 6: anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "9",
>       "7",
>       "3"
>     ],
>     [
>       {
>         "content": "subject 7: anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "8",
>       "6",
>       "2"
>     ]
>   ]
> }
> ```
> ###### Factor and Levels
> - factor variable = week
> - week number = {𝑤𝑒𝑒𝑘-1, 𝑤𝑒𝑒𝑘-2, 𝑤𝑒𝑒𝑘-3}
>
> ###### Subjects
> - subjects = {𝑠𝑢𝑏𝑗𝑒𝑐𝑡-1, 𝑠𝑢𝑏𝑗𝑒𝑐𝑡-2, 𝑠𝑢𝑏𝑗𝑒𝑐𝑡-3, 𝑠𝑢𝑏𝑗𝑒𝑐𝑡-4, 𝑠𝑢𝑏𝑗𝑒𝑐𝑡-5, 𝑠𝑢𝑏𝑗𝑒𝑐𝑡-6, 𝑠𝑢𝑏𝑗𝑒𝑐𝑡-7}
>
> ###### Hypothesis Test
> - Null Hypothesis: 𝜇<sub>𝑤𝑒𝑒𝑘-1</sub> = 𝜇<sub>𝑤𝑒𝑒𝑘-2</sub> = 𝜇<sub>𝑤𝑒𝑒𝑘-3</sub>
> - Alternative Hypothesis: not all 𝜇's are equal
>
> ###### Degrees of Freedom
> - 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠 - 1
> - 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 2
>
> - 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 𝑛 - 𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠
> - 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 18
>
> - 𝑑𝑓<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub>= 𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠 - 1
> - 𝑑𝑓<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub>= 6
>
> - 𝑑𝑓<sub>𝑒𝑟𝑟𝑜𝑟</sub>= 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>- 𝑑𝑓<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub>
> - 𝑑𝑓<sub>𝑒𝑟𝑟𝑜𝑟</sub>= 12
>
> - 𝑑𝑓<sub>𝑡𝑜𝑡𝑎𝑙</sub> = 𝑛 - 1
> - 𝑑𝑓<sub>𝑡𝑜𝑡𝑎𝑙</sub> = 20
>
> ###### Sum of Squares Between
> - 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = <font style="color: rgb(128,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝐿</sub>\[∑<sub>𝑗∊𝐷(𝐿=𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠<strong>\])</strong></font> - <font style="color: rgb(0,128,0);"><strong>(</strong>\[∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup> / 𝑠𝑖𝑧𝑒(𝐷)<strong>)</strong></font>
> 	- <font style="color: rgb(128,0,0);"><strong>(\[</strong><font style="color: rgb(128,0,0);">∑</font><sub>𝑖∊𝐿</sub><font style="color: rgb(128,0,0);">\[∑</font><sub>𝑗∊𝐷(𝐿=𝑖)</sub><font style="color: rgb(128,0,0);">(𝑦</font><sub>𝑗</sub><font style="color: rgb(128,0,0);">)\]</font><sup>2</sup><strong>\] </strong><font style="color: rgb(128,0,0);">/ </font><strong>\[</strong><font style="color: rgb(128,0,0);">𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</font><strong>\])</strong> = <strong>(</strong></font><font style="color: rgb(128,0,0);">\[</font><font style="color: rgb(255,102,0);">57</font><sup>2</sup><font style="color: rgb(128,0,0);"> + </font><font style="color: rgb(128,128,0);">47</font><sup>2</sup><font style="color: rgb(128,0,0);"> + </font><font style="color: rgb(0,0,255);">21</font><sup>2</sup><font style="color: rgb(128,0,0);">\] / </font><font style="color: rgb(255,0,255);">7</font><font style="color: rgb(128,0,0);"><strong>)</strong></font>
> 		- <font style="color: rgb(255,102,0);">week 1: 9 + 8 + 7 + 8 + 8 + 9 + 8 = 57</font>
> 		- <font style="color: rgb(128,128,0);">week 2: 7 + 6 + 6 + 7 + 8 + 7 + 6 = 47</font>
> 		- <font style="color: rgb(0,0,255);">week 3: 4 + 3 + 2 + 3 + 4 + 3 + 2 = 21</font>
> 		- <font style="color: rgb(255,0,255);">𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠 = 7</font>
> 	- <font style="color: rgb(128,0,0);"><strong>(\[</strong><font style="color: rgb(128,0,0);">∑</font><sub>𝑖∊𝐿</sub><font style="color: rgb(128,0,0);">\[∑</font><sub>𝑗∊𝐷(𝐿=𝑖)</sub><font style="color: rgb(128,0,0);">(𝑦</font><sub>𝑗</sub><font style="color: rgb(128,0,0);">)\]</font><sup>2</sup><strong>\] </strong><font style="color: rgb(128,0,0);">/ </font><strong>\[</strong><font style="color: rgb(128,0,0);">𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</font><strong>\])</strong> = 842.714285714</font>
> 	- <font style="color: rgb(0,128,0);"><strong><strong>(</strong></strong><font style="color: rgb(0,128,0);">\[∑</font><sub>𝑗∊𝐷</sub><font style="color: rgb(0,128,0);">(𝑦</font><sub>𝑗</sub><font style="color: rgb(0,128,0);">)\]</font><sup>2</sup><font style="color: rgb(0,128,0);"> / 𝑠𝑖𝑧𝑒(𝐷)</font><strong><strong>)</strong></strong></font> = <font style="color: rgb(0,128,0);"><strong>(</strong><font style="color: rgb(0,204,255);">125</font><sup>2</sup> / <font style="color: rgb(255,0,0);">21</font><strong>)</strong></font>
> 		- <font style="color: rgb(0,204,255);">total = 125</font>
> 		- <font style="color: rgb(255,0,0);">total size of all sample sets = 21</font>
> 	- <font style="color: rgb(255,0,0);"><font style="color: rgb(0,128,0);"><strong>(</strong><font style="color: rgb(0,128,0);">\[∑</font><sub>𝑗∊𝐷</sub><font style="color: rgb(0,128,0);">(𝑦</font><sub>𝑗</sub><font style="color: rgb(0,128,0);">)\]</font><sup>2</sup><font style="color: rgb(0,128,0);"> / 𝑠𝑖𝑧𝑒(𝐷)</font><strong>)</strong> = 744.047619048</font></font>
> - 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = <font style="color: rgb(128,0,0);">842.714285714</font> - <font style="color: rgb(0,128,0);">744.047619048</font>
> - <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 98.666666666</font></font>
>
> ###### <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">Sum of Squares Within</font></font>
> - <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = <font style="color: rgb(102,102,153);"><strong>\[</strong>∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)<strong>\]</strong></font> - <font style="color: rgb(128,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝐿</sub>\[∑<sub>𝑗∊𝐷(𝐿=𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠<strong>\])</strong></font></font></font>
> 	- <font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><strong>\[</strong>∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)<strong>\] </strong></font>= 9<sup>2</sup> + 8<sup>2</sup> + 7<sup>2</sup> + 8<sup>2</sup> + 8<sup>2</sup> + 9<sup>2</sup> + 8<sup>2</sup> + 7<sup>2</sup> + 6<sup>2</sup> + 6<sup>2</sup> + 7<sup>2</sup> + 8<sup>2</sup> + 7<sup>2</sup> + 6<sup>2</sup> + 4<sup>2</sup> + 3<sup>2</sup> + 2<sup>2</sup> + 3<sup>2</sup> + 4<sup>2</sup> + 3<sup>2</sup> + 2<sup>2</sup></font>
> 	- <font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><strong>\[</strong>∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)<strong>\]</strong></font>= 853</font>
> 	- <font style="color: rgb(102,102,153);"><font style="color: rgb(128,0,0);"><strong>(\[</strong><font style="color: rgb(128,0,0);">∑</font><sub>𝑖∊𝐿</sub><font style="color: rgb(128,0,0);">\[∑</font><sub>𝑗∊𝐷(𝐿=𝑖)</sub><font style="color: rgb(128,0,0);">(𝑦</font><sub>𝑗</sub><font style="color: rgb(128,0,0);">)\]</font><sup>2</sup><strong>\] </strong><font style="color: rgb(128,0,0);">/ </font><strong>\[</strong><font style="color: rgb(128,0,0);">𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</font><strong>\])</strong> =</font><strong> <font style="color: rgb(128,0,0);"><strong>(</strong></font></strong><font style="color: rgb(128,0,0);">\[</font><font style="color: rgb(255,102,0);">57</font><sup>2</sup><font style="color: rgb(128,0,0);"> + </font><font style="color: rgb(128,128,0);">47</font><sup>2</sup><font style="color: rgb(128,0,0);"> + </font><font style="color: rgb(0,0,255);">21</font><sup>2</sup><font style="color: rgb(128,0,0);">\] / </font><font style="color: rgb(255,0,255);">7</font><strong><font style="color: rgb(128,0,0);"><strong>)</strong></font></strong></font>
> 	- <font style="color: rgb(128,0,0);"><strong>(\[</strong><font style="color: rgb(128,0,0);">∑</font><sub>𝑖∊𝐿</sub><font style="color: rgb(128,0,0);">\[∑</font><sub>𝑗∊𝐷(𝐿=𝑖)</sub><font style="color: rgb(128,0,0);">(𝑦</font><sub>𝑗</sub><font style="color: rgb(128,0,0);">)\]</font><sup>2</sup><strong>\] </strong><font style="color: rgb(128,0,0);">/ </font><strong>\[</strong><font style="color: rgb(128,0,0);">𝑛𝑢𝑚-𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</font><strong>\]) </strong></font><font style="color: rgb(128,0,0);">=</font><font style="color: rgb(128,0,0);"> 842.714285714</font>
> - 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = <font style="color: rgb(102,102,153);">853 - <font style="color: rgb(128,0,0);">842.714285714</font></font>
> - 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = 10.285714286
>
> ###### Sum of Squares Subjects
> - 𝑆𝑆<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub> = <font style="color: rgb(128,0,0);"><font style="color: rgb(255,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝑆</sub>\[∑<sub>𝑗∊𝐷(𝑆=𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠<strong>\]) </strong></font><font style="color: rgb(51,51,51);">-</font> <font style="color: rgb(0,128,0);"><strong>(</strong>\[∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup> / 𝑠𝑖𝑧𝑒(𝐷)<strong>)</strong></font></font>
> 	- <font style="color: rgb(128,0,0);"><font style="color: rgb(255,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝑆</sub>\[∑<sub>𝑗∊𝐷(𝑆=𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠<strong>\])</strong></font> <font style="color: rgb(51,51,51);">=</font><font style="color: rgb(255,0,0);"> <strong>(</strong>\[20</font></font><font style="color: rgb(255,0,0);"><sup>2</sup> + 17<sup>2</sup> + 15<sup>2</sup>+ 18<sup>2</sup> + 20<sup>2</sup> + 19<sup>2</sup> + 16<sup>2</sup>\] / 3<strong>)</strong></font>
> 		- <font style="color: rgb(255,0,0);">𝑠𝑢𝑏𝑗𝑒𝑐𝑡-1: 9 + 7 + 4 = 20</font>
> 		- <font style="color: rgb(255,0,0);">𝑠𝑢𝑏𝑗𝑒𝑐𝑡-2: 8 + 6 + 3 = 17</font>
> 		- <font style="color: rgb(255,0,0);">𝑠𝑢𝑏𝑗𝑒𝑐𝑡-3: 7 + 6 + 2 = 15</font>
> 		- <font style="color: rgb(255,0,0);">𝑠𝑢𝑏𝑗𝑒𝑐𝑡-4: 8 + 7 + 3 = 18</font>
> 		- <font style="color: rgb(255,0,0);">𝑠𝑢𝑏𝑗𝑒𝑐𝑡-5: 8 + 8 + 4 = 20</font>
> 		- <font style="color: rgb(255,0,0);">𝑠𝑢𝑏𝑗𝑒𝑐𝑡-6: 9 + 7 + 3 = 19</font>
> 		- <font style="color: rgb(255,0,0);">𝑠𝑢𝑏𝑗𝑒𝑐𝑡-7: 8 + 6 + 2 = 16</font>
> 		- <font style="color: rgb(255,0,0);">𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠 = 3</font>
> 	- <font style="color: rgb(128,0,0);"><font style="color: rgb(255,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝑆</sub>\[∑<sub>𝑗∊𝐷(𝑆=𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠<strong>\])</strong></font><font style="color: rgb(51,51,51);">=</font> <font style="color: rgb(255,0,0);">751.666666667</font></font>
> 	- <font style="color: rgb(0,128,0);"><strong><strong>(</strong></strong>\[∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup> / </font><font style="color: rgb(0,128,0);">𝑠𝑖𝑧𝑒(𝐷)<strong><strong>)</strong></strong> = <strong>(</strong>125<sup>2</sup> / 21<strong>)</strong></font>
> 	- <font style="color: rgb(255,0,0);"><font style="color: rgb(0,128,0);"><strong>(</strong>\[∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup> / 𝑠𝑖𝑧𝑒(𝐷)<strong>)</strong> = 744.047619048</font></font>
> - 𝑆𝑆<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub> = <font style="color: rgb(255,0,0);">751.666666667 </font>- <font style="color: rgb(0,128,0);">744.047619048</font>
> - 𝑆𝑆<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub> = 7.619047619
>
> ###### Sum of Squares Error
> - 𝑆𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub> = 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>- 𝑆𝑆<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub>
> - 𝑆𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub> = 10.285714286 - 7.619047619
> - 𝑆𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub> = 2.666666667
>
> ###### Sum of Squares Total
> - 𝑆𝑆<sub>??𝑜𝑡𝑎𝑙</sub> =<font style="color: rgb(102,102,153);"><strong>\[</strong>∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)<strong>\]</strong></font> - <font style="color: rgb(0,128,0);"><strong>(</strong>\[∑<sub>𝑗∊𝐷</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup> / 𝑠𝑖𝑧𝑒(𝐷)<strong>)</strong></font>
> - 𝑆𝑆<sub>𝑡𝑜𝑡𝑎𝑙</sub> = <font style="color: rgb(102,102,153);">853 - <font style="color: rgb(0,128,0);">744.047619048</font></font>
> - 𝑆𝑆<sub>𝑡𝑜𝑡𝑎𝑙</sub> = 108.952380952
>
> ###### 𝐹 Statistic
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Source",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Sum of Squares",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Degrees of Freedom",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Mean Squares",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "𝐹 Statistic",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Between",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 98.666666666",
>       "𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 2",
>       "- 𝑀𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 98.666666666 / 2\n- 𝑀𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 49.333333333",
>       "- 𝐹 = 𝑀𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub><sub></sub>/ 𝑀𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>\n- 𝐹 = 49.333333333 / 0.222222222<sub></sub>\n- 𝐹 = 222.00000022"
>     ],
>     [
>       {
>         "content": "Within",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = 10.285714286",
>       "𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 18",
>       "",
>       ""
>     ],
>     [
>       {
>         "content": "Subjects",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "𝑆𝑆<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub> = 7.619047619",
>       "𝑑𝑓<sub>𝑠𝑢𝑏𝑗𝑒𝑐𝑡𝑠</sub>= 6",
>       "",
>       ""
>     ],
>     [
>       {
>         "content": "Error",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "𝑆𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub> = 2.666666667",
>       "𝑑𝑓<sub>𝑒𝑟𝑟𝑜𝑟</sub>= 12",
>       "- 𝑀𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub>= 2.666666667 / 12\n- 𝑀𝑆<sub>𝑒𝑟𝑟𝑜𝑟</sub> = 0.222222222",
>       ""
>     ],
>     [
>       {
>         "content": "Total",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "𝑆𝑆<sub>𝑡𝑜𝑡𝑎𝑙</sub> = 108.952380952",
>       "𝑑𝑓<sub>𝑡𝑜𝑡𝑎𝑙</sub>= 20",
>       "",
>       ""
>     ]
>   ],
>   "tableStyle": "width: 100.0%;"
> }
> ```
> ###### Choose Significance Level (𝛼), Lookup Critical Value, Accept or Reject Null Hypothesis
>
> say we choose [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level (𝛼)]] = 0.05
>
> lookup 𝑓 critical value with:
> - 𝛼 = 0.05
> - (𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub>, 𝑑𝑓<sub>𝑒𝑟𝑟𝑜𝑟</sub>)
>
> 𝑓 = 3.5546
>
> if 𝐹 \>𝑓 reject the null hypothesis, otherwise fail to reject null hypothesis
>
> 𝐹 = 222.00000022
>
> Thus we reject the null hypothesis, and concluded that there is a difference SOMEWHERE within these 3 groups
>
> use [[Post-Hoc Test for One-Way ANOVA]] to tell us where the difference is
### Resources

![](https://www.youtube.com/watch?v=VPB3xrsFl4o&feature=emb_logo&t=520s)
