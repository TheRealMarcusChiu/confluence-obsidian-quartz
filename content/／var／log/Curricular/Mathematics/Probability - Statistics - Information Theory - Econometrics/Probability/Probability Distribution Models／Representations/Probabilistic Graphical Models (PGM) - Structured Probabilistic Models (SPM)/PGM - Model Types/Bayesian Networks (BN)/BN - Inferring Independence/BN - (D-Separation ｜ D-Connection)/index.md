---
title: "BN - (D-Separation ｜ D-Connection)"
created: 2021-09-13T05:26:40.545-05:00
modified: 2026-05-21T03:29:02.192-05:00
parent: "[[BN - Inferring Independence]]"
children: []
---
<strong>d-separation</strong> and <strong>d-connection</strong>
- "d" stands for dependence
- is a way to determine the [[Probability Independence (Marginal Independence - Conditional Independence)|independence (marginal or conditional)]] in a [[Bayesian Networks (BN)|Bayesian Network]]

# <font style="color: rgb(0,128,0);">ACTIVE</font> vs <font style="color: rgb(128,0,0);">INACTIVE</font> Path
consider all of the possible undirected paths between a pair of variables 𝐴 and 𝐵 that go through a third variable 𝐶

If the path between 𝐴 and B is:
- <font style="color: rgb(0,128,0);"><font style="color: rgb(128,0,0);">INACTIVE</font></font> then 𝐴 and 𝐵 are [[Probability Independence (Marginal Independence - Conditional Independence)|independent]]
	- 𝐴 and 𝐵 are [[Probability Independence (Marginal Independence - Conditional Independence)|marginally independent]] if 𝐶 is UNKNOWN (?)
	- 𝐴 and 𝐵 are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] if 𝐶 is KNOWN (true or false, or any value)
- <font style="color: rgb(128,0,0);"><font style="color: rgb(0,128,0);">ACTIVE</font> </font>then 𝐴 and 𝐵 are dependent
```merge-table
{
  "rows": [
    [
      {
        "content": "Possible Path",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "COLLIDER\n\nNON-COLLIDER",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 2
      },
      {
        "content": "When 𝐶 UNKNOWN",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "When 𝐶 KNOWN",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "Path Between 𝐴 & 𝐵 is",
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      {
        "content": "𝐴 → 𝐶 → 𝐵",
        "align": "center"
      },
      {
        "content": "𝐴 is an indirect cause of 𝐵",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\">NON-COLLIDER</font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">ACTIVE</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">INACTIVE</font>",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝐴 ← 𝐶 ← 𝐵",
        "align": "center"
      },
      {
        "content": "𝐵 is an indirect cause of 𝐴",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\"><font style=\"color: rgb(0,0,255);\">NON-COLLIDER</font></font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">ACTIVE</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">INACTIVE</font>",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝐴 ← 𝐶 → 𝐵",
        "align": "center"
      },
      {
        "content": "𝐶 is a common cause of 𝐴 and 𝐵",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,0,255);\"><font style=\"color: rgb(0,0,255);\">NON-COLLIDER</font></font>",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">ACTIVE</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">INACTIVE</font>",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "𝐴 → 𝐶 ← 𝐵",
        "align": "center"
      },
      {
        "content": "𝐶 is a common effect of 𝐴 and 𝐵",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,153,0);\">COLLIDER</font>",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(128,0,0);\">INACTIVE</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">ACTIVE</font>",
        "bg": "#e3fcef",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Why 𝐴 → 𝐶 ← 𝐵 is <font style="color: rgb(0,128,0);">ACTIVE</font> when 𝐶 is KNOWN

consider the following [[Bayesian Networks (BN)|Bayesian Network]]:
<span style="white-space: pre-wrap"><code>dead battery → car won't start ← no gas</code></span>

Telling you that the battery is charged tells you nothing about whether there is gas, but telling you that the battery is charged <em>after</em> I have told you that the car won't start tells me that the gas tank must be empty. So independent causes are made dependent by conditioning on a common effect
# Generalize <font style="color: rgb(0,128,0);">ACTIVE</font> vs <font style="color: rgb(128,0,0);">INACTIVE</font> Path

let:
- 𝐆 be a directed acyclic graph (i.e. Bayesian Network)
- 𝑿, 𝒀 and 𝒁 be disjoint sets of variables that correspond to vertices in 𝐆
- 𝑿 and 𝒀  be the query sets, whether or not they are independent
- 𝒁 be the set of vertices that are observed

###### D-Connection
𝑿 and 𝒀 are d-connected by 𝒁 in 𝐆 if and only if there exists an undirected path 𝑼 between some vertex in 𝑿 and some vertex in 𝒀 such that:
- for every collider 𝐶 in 𝑼, either 𝐶 or a descendent of 𝐶 is in 𝒁
- no non-collider in 𝑼 is in 𝒁

###### D-Separation
𝑿 and 𝒀 are d-separated by 𝒁 in 𝐆 if and only if they are not d-connected by 𝒁 in 𝐆
###### Ending Remarks
if 𝑿 and 𝒀 are d-separated by 𝒁, then they are [[Probability Independence (Marginal Independence - Conditional Independence)|conditionally independent]] given 𝒁 in all [[Probability Distributions|probability distributions]] such a graph 𝐆 can represent
# Resource
- video - [https://www.youtube.com/watch?v=yDs_q6jKHb0](https://www.youtube.com/watch?v=yDs_q6jKHb0)
- [https://www.andrew.cmu.edu/user/scheines/tutor/d-sep.html#d-sepapplet2](https://www.andrew.cmu.edu/user/scheines/tutor/d-sep.html#d-sepapplet2)
