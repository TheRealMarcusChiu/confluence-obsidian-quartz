---
title: "Mathematical Spaces"
created: 2021-09-13T05:29:38.304-05:00
modified: 2026-05-13T19:14:33.150-05:00
parent: "[[Abstract Algebra - Modern Algebra - Structural Algebra]]"
children:
  - "[[Mathematical Spaces - Other]]"
  - "[[Mathematical Spaces - Types]]"
---
###### Mathematical Spaces
````excerpt
- is, informally, a collection/[[Set Theory|set]]/universe of [[Mathematical Object|mathematical objects]] that are treated as "points" with some selected structure/relationship(s) between these points
- it is the relationships that define the nature of the space
````
^excerpt

# Mathematical Spaces - Types of Relationships/Structure Between Points

```merge-table
{
  "rows": [
    [
      {
        "content": "Relationship/Structure Type",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      },
      {
        "content": "What Does it Measure?",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null,
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7",
        "rowspan": 2
      }
    ],
    [
      {
        "content": "closeness",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "distances",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "lengths",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "angles",
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "[[Topology|Topology (𝜏)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "[[Distance Measures／Metrics／Semi-Metrics／Functions|Distance Metric (𝑑)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- a distance metric (𝑑) induces a topology (𝜏<sub>𝑑</sub>) where the set { 𝐵<sub>𝑑</sub>(𝑥,𝜖) | 𝑥∈𝑋 and 𝜖\\>0 } forms the [[Basis Vectors|basis]] of a [[Distance Metric Topology|metric topology (𝜏𝑑)]], where 𝐵<sub>𝑑</sub>(𝑥,𝜖) is an[[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|epsilon ball]]defined as𝐵<sub>𝑑</sub>(𝑥,𝜖) = {𝑦∈𝑋 :𝑑(𝑥,𝑦) \\<𝜖 }"
    ],
    [
      {
        "content": "[[Norms - Semi-Norms|Norm (||·||)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- a norm (||·||)induces a distance metric (𝑑<sub>||·||</sub>) defined as: 𝑑<sub>||·||</sub>(𝑥,𝑦) = ||𝑥-𝑦||"
    ],
    [
      {
        "content": "[[Inner Products|Inner Product (⟨·,·⟩)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">✅</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "- an inner product (⟨·,·⟩) induces a norm (||·||<sub>⟨·,·⟩</sub>) defined as: ||·||<sub>⟨·,·⟩</sub> = √⟨·,·⟩"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# [[Mathematical Spaces - Other]]
```dataview
LIST
FROM ""
WHERE file.folder = [[Mathematical Spaces - Other]].file.folder + "/" + [[Mathematical Spaces - Other]].file.name
```

# Mathematical Spaces - Transformations From 1 Space to Another

see [[Transformations／Operations／Operators／Mappings／Maps／Functions／Morphisms|Transformations/Operations/Operators/Mappings/Maps/Functions/Morphisms]]
# [[Mathematical Spaces - Types]]
```dataview
LIST
FROM ""
WHERE file.folder = [[Mathematical Spaces - Types]].file.folder + "/" + [[Mathematical Spaces - Types]].file.name
```

- [[Measurable Space - Borel space]]
	- [[Measure Spaces]]
		- [[Complete Measure Spaces]]
		- [[Probability Spaces (Sample Space - Event Space - Probability Measure)]]

# Mathematical Spaces - Diagram
An arrow from space 𝐴 to space <em>𝐵</em> implies that space <em>𝐴</em> is also a kind of space <em>𝐵</em> (e.g. a <em>normed [[Vector Spaces - Linear Spaces|vector space]]</em> is also a <em>[[Metric Spaces|metric space]]</em>)

<code>------ [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean Vector Space (ℝᴺ)]] ----------------
     |                 |                               |

     |                 |                               |

     |                 v                               v

     |           [[Banach Spaces]] \<---------------- [[Hilbert Spaces]]
     |       ([[Norms - Semi-Norms|norm]] and [[Complete Metric Spaces (Completeness - Non-Completeness)|completeness]])    ([[Inner Products|inner-product]] and [[Complete Metric Spaces (Completeness - Non-Completeness)|completeness]])

     |                 |                               |

     |                 |                               |

     |                 v                               v

     |         [[Normed Vector Spaces - Normed Spaces|Normed Vector Space]] \<---------- [[Inner Product Spaces]]
     |               ([[Norms - Semi-Norms|norm]])                      ([[Inner Products|inner product]])

     |                 |\\\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_ |

     |                 |                              \\|
    
    |                 v                               v

     |           [[Metric Spaces]]                 [[Locally Convex Topological Vector Spaces (LCTVS) - Locally Convex Spaces|Locally Convex Space]]
     |         ([[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric]])                  ([[Norms - Semi-Norms|semi-norm]])

     |                 | \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_/|

     |                 |/                              |

    v                 v                               v

[[Manifolds (n-Dimensional Manifold (n-Manifold)|Manifold]] ---\> [[Topological Spaces]]                  [[Vector Spaces - Linear Spaces|Vector Space]]
            ([[Topology|topology]] and [[Topological Spaces (Open Sets - Closed Sets - Clopen Sets - Closures)|open set]])           (linear combination)</code>

![[Mathematical Spaces/space.png|600]]
# Resources
- [The Bright Side of Mathematics's Lecture Series on Functional Analysis](https://www.youtube.com/playlist?list=PLBh2i93oe2qsGKDOsuVVw-OCAfprrnGfr)
