---
title: "One-Way ANOVA"
created: 2021-09-13T05:29:07.216-05:00
modified: 2026-05-20T00:30:09.302-05:00
parent: "[[Analysis of Variance (ANOVA)]]"
children:
  - "[[Post-Hoc Test for One-Way ANOVA]]"
---
<strong>One-Way ANOVA</strong>
- is the simplest type of [[Analysis of Variance (ANOVA)|ANOVA]]
- used when:
	- one factor variable with at least 2 levels
	- levels are independent

# One-Way ANOVA - Procedure

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
> > - 𝐷(𝑖) - dataset of level 𝑖
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
> >         "content": "Mean Squares",
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
> >       "Sum of Squares Between\n- 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 𝑆𝑆<sub>𝑇𝑂𝑇</sub>- 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>\n- 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = <font style=\"color: rgb(128,0,0);\"><strong>(\\[</strong>∑<sub>𝑖∊𝐿</sub>\\[∑<sub>𝑗∊𝐷(𝑖)</sub>(𝑦<sub>𝑗</sub>)\\]<sup>2</sup><strong>\\] </strong>/ <strong>\\[</strong>𝑠𝑖𝑧𝑒(𝐷(𝑖))<strong>\\])</strong></font> - <font style=\"color: rgb(0,128,0);\"><strong>(</strong><strong>\\[</strong>∑<sub>𝑖∊𝐿</sub>\\[∑<sub>𝑗∊𝐷(𝑖)</sub>(𝑦<sub>𝑗</sub>)\\]<strong>\\]</strong><sup>2</sup> / ∑<sub>𝑖∊𝐿</sub>\\[𝑠𝑖𝑧𝑒(𝐷(𝑖))\\]<strong>)</strong></font>",
> >       "𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠 - 1",
> >       "𝑀𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> / 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub>",
> >       "𝐹 = 𝑀𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub><sub></sub>/ 𝑀𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>"
> >     ],
> >     [
> >       {
> >         "content": "Within\n\n(Error)",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "Sum of Squares Within\n- 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = ∑<sub>𝑖∊𝐿</sub><strong>\\[</strong> ∑<sub>𝑗∊𝐷(𝑖)</sub>\\[𝑦<sub>𝑗</sub>- 𝑚𝑒𝑎𝑛(𝐷(𝑖))\\]<sup>2</sup><strong>\\]</strong>\n- 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = <font style=\"color: rgb(102,102,153);\"><strong>\\[</strong>∑<sub>𝑖∊𝐿</sub>\\[∑<sub>𝑗∊𝐷(𝑖)</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)\\]<strong>\\]</strong></font> - <font style=\"color: rgb(128,0,0);\"><strong>(\\[</strong>∑<sub>𝑖∊𝐿</sub>\\[∑<sub>𝑗∊𝐷(𝑖)</sub>(𝑦<sub>𝑗</sub>)\\]<sup>2</sup><strong>\\] </strong>/ <strong>\\[</strong>𝑠𝑖𝑧𝑒(𝐷(𝑖))<strong>\\])</strong></font>",
> >       "𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 𝑛 - 𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠\n\n𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 𝑛 - 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub>- 1",
> >       "𝑀𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = 𝑆𝑆<sub>𝐸𝑅𝑅</sub> / 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>",
> >       ""
> >     ],
> >     [
> >       {
> >         "content": "Total",
> >         "header": true,
> >         "bg": "#F4F5F7"
> >       },
> >       "Sum of Squares Total\n- 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = ∑<sub>𝑗∊𝐷</sub>\\[𝑦<sub>𝑗</sub>- 𝑚𝑒𝑎𝑛(𝐷)\\]<sup>2</sup>\n- 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = <font style=\"color: rgb(102,102,153);\"><strong>\\[</strong>∑<sub>𝑖∊𝐿</sub>\\[∑<sub>𝑗∊𝐷(𝑖)</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)\\]<strong>\\]</strong></font> - <font style=\"color: rgb(0,128,0);\"><strong>(</strong><strong>\\[</strong>∑<sub>𝑖∊𝐿</sub>\\[∑<sub>𝑗∊𝐷(𝑖)</sub>(𝑦<sub>𝑗</sub>)\\]<strong>\\]</strong><sup>2</sup> / ∑<sub>𝑖∊𝐿</sub>\\[𝑠𝑖𝑧𝑒(𝐷(𝑖))\\]<strong>)</strong></font>",
> >       "𝑑𝑓<sub>𝑇𝑂𝑇</sub> = 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> + 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>\n\n𝑑𝑓<sub>𝑇𝑂𝑇</sub> = 𝑛 - 1",
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
> > - 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub>
> > - 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>
> >
> > if 𝐹 \>𝑓 reject the null hypothesis, otherwise fail to reject null hypothesis
> >
> > NOTE: 𝐹 and 𝑓 are always positive values
> > ###### f-distribution
> > ![[One-Way ANOVA/f-distribution.png|301]]
# One-Way ANOVA - Example

> [!expand]- Click here to expand...
> let's say we a given:
> - 21 participants that divided into 3 groups of 7
> - each group is given 1 of 3 different dosages
> - then their anxiety levels are recorded
>
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "header": true,
>         "bg": "#F4F5F7",
>         "rowspan": 2
>       },
>       {
>         "content": "Dosage",
>         "header": true,
>         "bg": "#F4F5F7",
>         "align": "center",
>         "colspan": 3
>       },
>       null,
>       null
>     ],
>     [
>       {
>         "content": "0mg",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "50mg",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "100mg",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "9",
>       "7",
>       "4"
>     ],
>     [
>       {
>         "content": "anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "8",
>       "6",
>       "3"
>     ],
>     [
>       {
>         "content": "anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "7",
>       "6",
>       "2"
>     ],
>     [
>       {
>         "content": "anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "8",
>       "7",
>       "3"
>     ],
>     [
>       {
>         "content": "anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "8",
>       "8",
>       "4"
>     ],
>     [
>       {
>         "content": "anxiety level",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "9",
>       "7",
>       "3"
>     ],
>     [
>       {
>         "content": "anxiety level",
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
> - factor variable = dosage
> - dosage levels = {0mg, 50mg, 100mg}
>
> ###### Hypothesis Test
> - Null Hypothesis: 𝜇<sub>0𝑚𝑔</sub> = 𝜇<sub>50𝑚𝑔</sub> = 𝜇<sub>100𝑚𝑔</sub>
> - Alternative Hypothesis: not all 𝜇's are equal
>
> ###### Degrees of Freedom
> - 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠 - 1
> - 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 2
>
> - 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 𝑛 - 𝑛𝑢𝑚-𝑙𝑒𝑣𝑒𝑙𝑠
> - 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 18
>
> - 𝑑𝑓<sub>𝑇𝑂𝑇</sub> = 𝑛 - 1
> - 𝑑𝑓<sub>𝑇𝑂𝑇</sub> = 20
>
> ###### Sum of Squares Between
> - 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = <font style="color: rgb(128,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup><font style="color: rgb(128,0,0);">2</font></sup><strong>\] </strong>/ <strong>\[</strong>𝑠𝑖𝑧𝑒-𝑜𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)<strong>\])</strong></font> - <font style="color: rgb(0,128,0);"><strong>(</strong><strong>\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<strong>\]</strong><sup>2</sup> / ∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[𝑠𝑖𝑧𝑒-𝑜𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)\]<strong>)</strong></font>
> 	- <font style="color: rgb(128,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑠𝑖𝑧𝑒-𝑜𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)<strong>\])</strong> = <strong>(</strong></font><font style="color: rgb(128,0,0);">\[</font><font style="color: rgb(255,102,0);">57</font><sup>2</sup><font style="color: rgb(128,0,0);"> + </font><font style="color: rgb(128,128,0);">47</font><sup>2</sup><font style="color: rgb(128,0,0);"> + </font><font style="color: rgb(0,0,255);">21</font><sup>2</sup><font style="color: rgb(128,0,0);">\] / </font><font style="color: rgb(255,0,255);">7</font><font style="color: rgb(128,0,0);"><strong>)</strong></font>
> 		- <font style="color: rgb(255,102,0);">0mg group: 9 + 8 + 7 + 8 + 8 + 9 + 8 = 57</font>
> 		- <font style="color: rgb(128,128,0);">50mg group: 7 + 6 + 6 + 7 + 8 + 7 + 6 = 47</font>
> 		- <font style="color: rgb(0,0,255);">100mg group: 4 + 3 + 2 + 3 + 4 + 3 + 2 = 21</font>
> 		- <font style="color: rgb(255,0,255);">size of level i sample set = 7</font>
> 	- <font style="color: rgb(128,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑠𝑖𝑧𝑒-𝑜𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)<strong>\])</strong> = 842.714285714</font>
> 	- <font style="color: rgb(0,128,0);"><strong>(</strong><strong>\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<strong>\]</strong><sup>2</sup> / ∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[𝑠𝑖𝑧𝑒-𝑜𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)\]<strong>)</strong></font> = <font style="color: rgb(0,128,0);"><strong>(</strong><font style="color: rgb(0,204,255);">125</font><sup>2</sup> / <font style="color: rgb(255,0,0);">21</font><strong>)</strong></font>
> 		- <font style="color: rgb(0,204,255);">total = 125</font>
> 		- <font style="color: rgb(255,0,0);">total size of all sample sets = 21</font>
> 	- <font style="color: rgb(255,0,0);"><font style="color: rgb(0,128,0);"><strong>(</strong><strong>\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<strong>\]</strong><sup>2</sup> / ∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[𝑠𝑖𝑧𝑒-𝑜𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)\]<strong>)</strong> = 744.047619048</font></font>
> - <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = <font style="color: rgb(128,0,0);"><strong>(</strong>\[57<sup>2</sup> + 47<sup>2</sup> + 21<sup>2</sup>\] / 7<strong>)</strong></font> - <font style="color: rgb(0,128,0);"><strong>(</strong>125<sup>2</sup> / 21<strong>)</strong></font></font></font>
> - 𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = <font style="color: rgb(128,0,0);"><font style="color: rgb(128,0,0);">842.714285714</font></font> - <font style="color: rgb(0,128,0);"><font style="color: rgb(0,128,0);">744.047619048</font></font>
> - <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">𝑆𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub> = 98.666666666</font></font>
>
> ###### <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">Sum of Squares Within</font></font>
> - <font style="color: rgb(255,0,0);"><font style="color: rgb(51,51,51);">𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = <font style="color: rgb(102,102,153);"><strong>\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)\]<strong>\]</strong></font> - <font style="color: rgb(128,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑠𝑖𝑧𝑒-𝑜𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)<strong>\])</strong></font></font></font>
> 	- <font style="color: rgb(102,102,153);"><strong>\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)\]<strong>\]</strong> = 9<sup>2</sup> + 8<sup>2</sup> + <font style="color: rgb(102,102,153);">7</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 8</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 8<sup>2</sup><font style="color: rgb(102,102,153);"> + 9</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 8<sup>2</sup><font style="color: rgb(102,102,153);"> + 7</font><sup>2</sup><font style="color: rgb(102,102,153);"> + <font style="color: rgb(102,102,153);">6</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 6</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 7<sup>2</sup><font style="color: rgb(102,102,153);"> + 8</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 7<sup>2</sup><font style="color: rgb(102,102,153);"> + 6</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 4<sup>2</sup><font style="color: rgb(102,102,153);"> + 3</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 2<sup>2</sup><font style="color: rgb(102,102,153);"> + 3</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 4<sup>2</sup><font style="color: rgb(102,102,153);"> + 3</font><sup>2</sup><font style="color: rgb(102,102,153);"> + 2<sup>2</sup></font></font></font></font></font></font></font></font></font></font>
> 	- <font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><strong>\[</strong><font style="color: rgb(102,102,153);">∑</font><sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub><font style="color: rgb(102,102,153);">\[∑</font><sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub><font style="color: rgb(102,102,153);">(𝑦</font><sub>𝑗</sub><sup>2</sup><font style="color: rgb(102,102,153);">)\]</font><strong>\]</strong><font style="color: rgb(102,102,153);"> =</font><font style="color: rgb(102,102,153);"> 853</font></font></font></font></font></font></font></font></font></font></font></font>
> 	- <font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(102,102,153);"><font style="color: rgb(128,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑠𝑖𝑧𝑒-𝑜𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)<strong>\])</strong> =</font><strong> <font style="color: rgb(128,0,0);"><strong>(</strong></font></strong><font style="color: rgb(128,0,0);">\[</font><font style="color: rgb(255,102,0);">57</font><sup>2</sup><font style="color: rgb(128,0,0);"> + </font><font style="color: rgb(128,128,0);">47</font><sup>2</sup><font style="color: rgb(128,0,0);"> + </font><font style="color: rgb(0,0,255);">21</font><sup>2</sup><font style="color: rgb(128,0,0);">\] / </font><font style="color: rgb(255,0,255);">7</font><strong><font style="color: rgb(128,0,0);"><strong>)</strong></font></strong></font></font></font></font></font></font></font></font></font></font></font></font>
> 	- <font style="color: rgb(128,0,0);"><font style="color: rgb(128,0,0);"><strong>(\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<sup>2</sup><strong>\] </strong>/ <strong>\[</strong>𝑠𝑖𝑧𝑒-𝑜</font></font><font style="color: rgb(128,0,0);">𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)<strong>\])</strong> =</font><font style="color: rgb(128,0,0);"> 842.714285714</font>
> - 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = <font style="color: rgb(102,102,153);">853 - <font style="color: rgb(128,0,0);">842.714285714</font></font>
> - 𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = 10.285714286 + 98.666666666
>
> ###### Sum of Squares Total
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = <font style="color: rgb(102,102,153);"><strong>\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub><sup>2</sup>)\]<strong>\]</strong></font> - <font style="color: rgb(0,128,0);"><strong>(</strong><strong>\[</strong>∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[∑<sub>𝑗∊𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡(𝑖)</sub>(𝑦<sub>𝑗</sub>)\]<strong>\]</strong><sup>2</sup> / ∑<sub>𝑖∊𝑙𝑒𝑣𝑒𝑙𝑠</sub>\[𝑠𝑖𝑧𝑒-𝑜𝑓(𝑠𝑎𝑚𝑝𝑙𝑒𝑠-𝑠𝑒𝑡)\]<strong>)</strong></font>
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = <font style="color: rgb(102,102,153);">853 - <font style="color: rgb(0,128,0);">744.047619048</font></font>
> - 𝑆𝑆<sub>𝑇𝑂𝑇</sub> = 108.952380952
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
>       "- 𝐹 = 𝑀𝑆<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub><sub></sub>/ 𝑀𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>\n- 𝐹 = 86.333333398"
>     ],
>     [
>       {
>         "content": "Within",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "𝑆𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = 10.285714286",
>       "𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 18",
>       "- 𝑀𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>= 10.285714286 / 18\n- 𝑀𝑆<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub> = 0.571428571",
>       ""
>     ],
>     [
>       {
>         "content": "Total",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       "𝑆𝑆<sub>𝑇𝑂𝑇</sub> = 108.952380952",
>       "𝑑𝑓<sub>𝑇𝑂𝑇</sub> = 20",
>       "",
>       ""
>     ]
>   ],
>   "tableStyle": "width: 96.6411%;"
> }
> ```
> ###### Choose Significance Level (𝛼), Lookup Critical Value, Accept or Reject Null Hypothesis
>
> say we choose [[Significance Level (𝛼) - Confidence Level (1 - 𝛼) Coverage Probability|significance level (𝛼)]] = 0.05
>
> lookup 𝑓 critical value with:
> - 𝛼 = 0.05
> - 𝑑𝑓<sub>𝑏𝑒𝑡𝑤𝑒𝑒𝑛</sub>
> - 𝑑𝑓<sub>𝑤𝑖𝑡ℎ𝑖𝑛</sub>
>
> 𝑓 = 3.5546
>
> if 𝐹 \>𝑓 reject the null hypothesis, otherwise fail to reject null hypothesis
>
> 𝐹 = 86.333333398
>
> Thus we reject the null hypothesis, and concluded that there is a difference SOMEWHERE within these 3 groups
>
> use [[Post-Hoc Test for One-Way ANOVA]] to tell us where the difference is
# Resources

![](https://www.youtube.com/watch?v=q48uKU_KWas&t=1269s)

![](https://www.youtube.com/watch?v=51QZa7b0Ozk)

![](https://www.youtube.com/watch?v=rZuYwJupGus&list=PL568547ACA9211CCA&index=75&t=1s)
