---
title: "Mathematical Space (Compactness／Compact - Sequential／Sequentially／Limit-Point／Weakly-Countably／Countably／Countable Compactness／Compact - Relatively-Compact／Precompact Subspace／Subset)"
created: 2023-06-23T11:23:40.329-05:00
modified: 2026-05-17T16:38:50.060-05:00
parent: "[[Mathematical Spaces - Other]]"
children: []
---
###### Compactness/Compact
- is a property that seeks to generalize the notion of [[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|closed]] subset and [[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)|totally bounded]] subset of [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]]
- the idea is that a <em>compact space</em> has no "punctures" nor "missing endpoints" (i.e. it includes all [[Mathematical Space (Limit Points - Accumulation Points - Cluster Points)|limiting values]] of points)
- a set/space 𝑋 is <strong>compact</strong> if every [[Mathematical Space (Cover／Covering - Open Cover／Covering - Subcover／Subcovering)|open cover]] of 𝑋 has a finite [[Mathematical Space (Cover／Covering - Open Cover／Covering - Subcover／Subcovering)|subcover]]
- a subset 𝑌 of a set/space 𝑋 is <strong>compact</strong> if every open cover of 𝑌 has a finite subcover

###### Sequential Compactness - Sequentially Compact
- a set 𝑋 is <em>sequentially compact</em> if every sequence of points in 𝑋 has a <em>convergent subsequence</em> converging to a point in 𝑋

###### Limit Point Compactness - Weakly Countably Compact
- a set 𝑋 is <em>weakly countably compact</em> if every infinite subset of 𝑋 has a [[Mathematical Space (Limit Points - Accumulation Points - Cluster Points)|limit point]] in 𝑋
- this property generalizes a property of [[Compact Spaces - Compact Set - Compact Subspace|compact spaces]]

###### Countable Compactness - Countably Compact
- a set 𝑋 is <em>countably compact</em> if every countable [[Mathematical Space (Cover／Covering - Open Cover／Covering - Subcover／Subcovering)|open cover]] has a finite [[Mathematical Space (Cover／Covering - Open Cover／Covering - Subcover／Subcovering)|subcover]]

# Compactness - Other
- for [[Metric Spaces|metric spaces]]; <em>compactness</em>, <em>limit point compactness</em>, and <em>sequential compactness</em> are ALL equivalent
- for [[Topological Spaces|topological spaces]]; <em>compactness</em>, <em>limit point compactness</em>, and <em>sequential compactness</em> are NOT equivalent

# Compactness - Examples & Non-Examples
- the open interval (0,1) is <strong><em>not</em> <em>compact</em></strong> because it excludes the limiting values of 0 and 1
- the closed interval \[0,1\] is <strong><em>compact</em></strong>
- the space of [[Numbers Classes／Classification of Numbers|rational numbers (ℚ)]] is <strong><em>not</em> <em>compact</em></strong> because it has infinitely many "punctures" corresponding to the irrational numbers
- the space of [[Real Numbers System|real numbers (ℝ)]] is <strong><em>not</em> <em>compact</em></strong> because it excludes the two limiting values +∞ and -∞
- the [extended real number line](https://en.wikipedia.org/wiki/Extended_real_numbers) would be <strong><em>compact</em></strong> because it contains both infinities
- the entire [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]] of any dimension is <strong><em>not</em> <em>compact</em></strong> since it is not [[Mathematical Space (Bounded Sets - Unbounded Sets)|bounded]]
- any subset (subspaces) of [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean space]] is <strong><em>compact</em></strong> if and only if it is both [[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|closed]] and [[Mathematical Space (Bounded Sets - Unbounded Sets)|bounded]]

# Resources
- [https://en.wikipedia.org/wiki/Compact_space](https://en.wikipedia.org/wiki/Compact_space)

###### Relatively Compact Subspace/Subset - Precompact Subspace/Subset
- a subset 𝑆 of a [[Mathematical Spaces|mathematical space (𝑋)]] is called a <em>relatively compact subspace</em> if its [[Mathematical Space (Closures - Spans - Generated Sets)|closure]] is <em>compact</em>

# Resources
- [https://en.wikipedia.org/wiki/Relatively_compact_subspace](https://en.wikipedia.org/wiki/Relatively_compact_subspace)

![](https://www.youtube.com/watch?v=td7Nz9ATyWY)

Compactness vs Relative Compactness

```merge-table
{
  "rows": [
    [
      {
        "content": "Compact",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Relatively Compact",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
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
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "✔️",
        "bg": "#e3fcef",
        "align": "center"
      },
      ""
    ],
    [
      {
        "content": "✔️",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "❌",
        "bg": "#ffebe6",
        "align": "center"
      },
      "- take any [[Mathematical Space (Neighborhoods)|neighborhood]] of the particular point of an infinite [[Particular Point Spaces|particular point space]]. The neighborhood itself may be <em>compact</em> but is not <em>relatively compact</em> because its [[Mathematical Space (Closures - Spans - Generated Sets)|closure]] is the whole space which is not <em>compact</em>"
    ],
    [
      {
        "content": "✔️",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "✔️",
        "bg": "#e3fcef",
        "align": "center"
      },
      ""
    ]
  ],
  "tableStyle": "width: 93.3582%;"
}
```
