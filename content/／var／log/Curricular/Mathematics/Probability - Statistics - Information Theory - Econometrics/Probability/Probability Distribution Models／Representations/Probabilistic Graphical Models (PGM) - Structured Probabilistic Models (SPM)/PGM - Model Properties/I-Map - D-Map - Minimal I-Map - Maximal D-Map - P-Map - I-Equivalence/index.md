---
title: "I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence"
created: 2021-09-13T05:26:37.140-05:00
modified: 2025-10-11T12:14:38.778-05:00
parent: "[[PGM - Model Properties]]"
children: []
---
We use [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic graphical models]] to model some [[Probability Distributions|probability distribution]] 𝐏. This section introduces ways to compare the [[Probability Independence|probability independencies]] induced by the graphical model and the modeled probability distribution. Or even between 2 different [[Probabilistic Graphical Models (PGM) - Structured Probabilistic Models (SPM)|probabilistic graphical models]].
# Terminology for Comparing Independencies
- <font style="color: rgb(128,128,128);"><font style="color: rgb(51,51,51);">model 𝐴 is a(n)</font> <em>(I-Map | D-Map | P-Map | Minimal I-Map | Maximal D-Map)</em> <font style="color: rgb(51,51,51);">of model 𝐵</font></font>

we use the statement above to explain the terms below:

```merge-table
{
  "rows": [
    [
      {
        "content": "Term",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Independence Map (I-Map)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "set of independencies induced by 𝐴 is a SUBSET of the independencies induced by 𝐵"
    ],
    [
      {
        "content": "Dependence Map (D-Map)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "set of independencies induced by 𝐴 is a SUPERSET of the independencies induced by 𝐵"
    ],
    [
      {
        "content": "Perfect Map (P-Map)",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "set of independencies induced by 𝐴 is EQUAL to the set of independencies induced by 𝐵\n- a P-Map is both an I-Map and D-Map\n- <strong>Independence Equivalence (I-Equivalence)</strong> -  two models are I-Equivalent if they express the EXACT same set of independencies"
    ],
    [
      {
        "content": "Minimal I-Map",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "an I-Map in which the removal of ANY edge, no longer makes it not an I-Map (i.e. removal of edge in 𝐴 would introduce an independence not in 𝐵)\n\n> [!expand]- most of the time a Minimal I-Map is a P-Map\n> there are cases where a Minimal I-Map is not a P-Map: where it could not capture anymore of 𝐏's probability INDEPENDENCIES (due to reasons such as: the model was built poorly, limitations of the model type used, etc)\n> ### For Example\n>\n> suppose we have a graph below that:\n> - is a Minimal I-Map of 𝐏\n> - is not a P-Map of 𝐏\n>\n> removing the red edge would add several independencies such as:\n> - independence between B and D\n> - independence between A and D\n> - independence between E and C\n> - etc\n>\n> ![[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence/maximal-d-map.png|301]]"
    ],
    [
      {
        "content": "Maximal D-Map",
        "bg": "#F4F5F7",
        "align": "center"
      },
      "a D-Map model in which an addition of ANY edge, no longer makes it not a D-Map (i.e. addition of edge in 𝐴 would remove an independence that exists in 𝐵, thus 𝐴 no longer contains a SUPERSET of 𝐵's independencies)\n\n> [!expand]- most of the time a Maximal D-Map is a P-Map\n> there can be a case where a Maximal D-Map is not a P-Map: such when an addition of ANY edge removes 2 independencies, so jumping for a proper-superset to a proper-subset (i.e. D-Map to I-Map)\n> ### For Example\n>\n> suppose we have a graph below that:\n> - is a Maximal D-Map of 𝐏\n> - is not a P-Map of 𝐏\n>\n> adding an edge between B and D would remove several independencies such as:\n> - B and D\n> - A and D\n> - E and C\n> - etc\n>\n> ![[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence/minimal-i-map.png|301]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

In most models:
- the REMOVAL of edges typically INCREASES the number of independencies
- the ADDITION of edges typically REDUCES the number of independencies

![[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence/i-map-and-d-map.png|416x250]]
# Formal Definitions

> [!expand]- Click here to expand...
> ```merge-table
> {
>   "rows": [
>     [
>       {
>         "content": "Term",
>         "header": true,
>         "bg": "#F4F5F7"
>       },
>       {
>         "content": "Description",
>         "header": true,
>         "bg": "#F4F5F7"
>       }
>     ],
>     [
>       {
>         "content": "Independence Map (I-Map)",
>         "bg": "#F4F5F7"
>       },
>       "if a [[Graphical Models|graphical model]] 𝐆 is an I-Map of [[Probability Distributions|distribution]] 𝐏, then every [[Probability Independence (Marginal Independence - Conditional Independence)|independence (conditional and marginal)]] in 𝐆 also exists in 𝐏 (denoted as 𝐈(𝐆) ⊆ 𝐈(𝐏))\n\na fully connected DAG 𝐆 is an I-Map for any distribution 𝐏, since 𝐈(𝐆) = ∅ ⊆ 𝐈(𝐏) for all 𝐏"
>     ],
>     [
>       {
>         "content": "Dependence Map (D-Map)",
>         "bg": "#F4F5F7"
>       },
>       "if a [[Graphical Models|graphical model]] 𝐆 is a D-Map of [[Probability Distributions|distribution]] 𝐏, then every [[Probability Independence (Marginal Independence - Conditional Independence)|independence (conditional and marginal)]] in 𝐏 also exists in 𝐆 (denoted as 𝐈(𝐏) ⊆ 𝐈(𝐆))\n\nan unconnected DAG 𝐆 is a D-Map for any distribution 𝐏, since 𝐈(𝐏) ⊆ 𝕌 = 𝐈(𝐆) for all 𝐏"
>     ],
>     [
>       {
>         "content": "Minimal I-Map",
>         "bg": "#F4F5F7"
>       },
>       "[[Graphical Models|graphical model]] 𝐆 is a Minimal I-Map for 𝐏 if the removal of any single edge makes it not an I-Map\n\na distribution 𝐏 may have several Minimal I-Maps, each corresponding to a specific node-ordering"
>     ],
>     [
>       {
>         "content": "Maximal D-Map",
>         "bg": "#F4F5F7"
>       },
>       "[[Graphical Models|graphical model]] 𝐆 is a Maximal D-Map for 𝐏 if an addition of any single edge makes it not a D-Map"
>     ],
>     [
>       {
>         "content": "Perfect Map (P-Map)",
>         "bg": "#F4F5F7"
>       },
>       "[[Graphical Models|graphical model]] 𝐆 is a P-Map for distribution 𝐏 if 𝐈(𝐆) = 𝐈(𝐏)\n\nin other words:\n- if 𝐆 is a P-Map, then 𝐆 is also an I-Map and D-Map\n- if 𝐆 is both an I-Map and a D-Map, then 𝐆 is also a P-Map"
>     ],
>     [
>       {
>         "content": "Independence Equivalence\n\n(I-Equivalence)",
>         "bg": "#F4F5F7"
>       },
>       "two [[Graphical Models|graphical models]] 𝐆𝟏 and 𝐆𝟐 are I-Equivalent if 𝐈(𝐆𝟏) = 𝐈(𝐆𝟐)"
>     ]
>   ],
>   "tableStyle": "width: 1071.2px;"
> }
> ```
# Examples

> [!expand]- Click here to expand...
> suppose, we are given 2 distributions: 𝐏𝟏 and 𝐏𝟐
> - distribution 𝐏𝟏 has independence, 𝐈(𝐏𝟏) = {(𝐼⊥𝐷)}
> - distribution 𝐏𝟐 has no independence, 𝐈(𝐏𝟐) = {∅}
>
> suppose, we are given 2 [[Graphical Models|graphical models]] (DAGs in this case): 𝐆<sub>𝑎</sub> and 𝐆<sub>𝑏</sub>
>
> ![[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence/i-map.png|301]]
>
> from the DAGs, we can observe:
> - 𝐆<sub>𝑎</sub>- 𝐈(𝐆<sub>𝑎</sub>) = {(𝐼⊥𝐷)}
> - 𝐆<sub>𝑏</sub> - 𝐈(𝐆<sub>𝑏</sub>) = {∅}<sub></sub>
>
> therefore, we can say the following:
> - 𝐆<sub>𝑎</sub> is an I-Map of 𝐏𝟏 because 𝐼 and 𝐷 are independent in both 𝐆<sub>𝑎</sub> and 𝐏𝟏
> - 𝐆<sub>𝑎</sub> is not the I-Map of 𝐏𝟐 because 𝐏𝟐 fails to satisfy the independence between I and D
> - 𝐆<sub>𝑎</sub> is a P-Map of 𝐏𝟏 because 𝐈(𝐆<sub>𝑎</sub>) = 𝐈(𝐏𝟏)
> - 𝐆<sub>𝑎</sub> is not a P-Map of 𝐏𝟐 because 𝐈(𝐆<sub>𝑎</sub>) ≠ 𝐈(𝐏𝟐)
>
> - 𝐆<sub>𝑏</sub> is an I-Map of both 𝐏𝟏 and 𝐏𝟐 because the independence in 𝐆<sub>𝑏</sub> is ∅. Since ∅ is a subset of every set, both 𝐏𝟏 and 𝐏𝟐 satisfy the independence implied in 𝐆<sub>𝑏</sub>
> - 𝐆<sub>𝑏</sub> is not a P-Map of 𝐏𝟏 because 𝐈(𝐆<sub>𝑏</sub>) ≠ 𝐈(𝐏𝟏)
> - 𝐆<sub>𝑏</sub> is a P-Map of 𝐏𝟐 because 𝐈(𝐆<sub>𝑏</sub>) = 𝐈(𝐏𝟐)
>
> - 𝐆<sub>𝑎</sub> and 𝐆<sub>𝑏</sub> are not I-Equivalent because their set independencies are not equivalent (i.e. 𝐆<sub>𝑎</sub>'s independencies {(𝐼⊥𝐷)} does not equal 𝐆<sub>𝑏</sub>'s independencies {∅})
# Relation to Gibbs Distribution

> [!expand]- Click here to expand...
> ### Graphical Models
>
> a [[Probability Distributions|probability distribution]] 𝐏(𝐗) is a Gibbs Distribution over a [[Graphical Models|graphical model]] 𝐆 if it can be written as
> - 𝐏(𝐗) = (1/<font style="color: rgb(255,102,0);">𝘡</font>) \* <font style="color: rgb(0,0,255);">∏<sub>𝑐∊</sub><sub><strong>𝐶 </strong></sub>\[ 𝜙<sub>𝑐</sub>(𝐗<sub>𝑐</sub>) \]</font>
>
> where the variables in each [[MN／MRF - Potential Functions (𝜙)|potential function]] <font style="color: rgb(0,0,255);">𝜙</font><sub>𝑐</sub>form a clique in 𝐆
> ### Theorem 1: Factorization Implies Conditional Independencies
>
> If 𝐏(𝐗) is a Gibbs Distribution for 𝐆, then 𝐆 is an [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|I-Map]] for [[Probability Distributions|probability distribution]] 𝐏(𝐗), i.e. 𝐈(𝐆) ⊆ 𝐈(𝐏)
>
> proof:
>
> suppose:
> - A, B, and C are disjoint sets of variables
> - A is connected to B
> - C is connected to B
> - B separates A from C
>
> then we can write
>
> 𝐏(A, B, C) = (1/<font style="color: rgb(255,102,0);">𝘡</font>) \*<font style="color: rgb(0,0,255);"> 𝜙<sub>𝑐1</sub>(A,B) <font style="color: rgb(51,51,51);">\*</font> 𝜙<sub>𝑐2</sub>(B,C)</font>
> ### Theorem 2: Conditional Independencies Implies Factorization
>
> If 𝐏(𝐗) is a positive distribution and 𝐆 is an [[I-Map - D-Map - Minimal I-Map - Maximal D-Map - P-Map - I-Equivalence|I-Map]] for 𝐏(𝐗), then 𝐏(𝐗) is a Gibbs Distribution that factorizes over graphical model 𝐆
