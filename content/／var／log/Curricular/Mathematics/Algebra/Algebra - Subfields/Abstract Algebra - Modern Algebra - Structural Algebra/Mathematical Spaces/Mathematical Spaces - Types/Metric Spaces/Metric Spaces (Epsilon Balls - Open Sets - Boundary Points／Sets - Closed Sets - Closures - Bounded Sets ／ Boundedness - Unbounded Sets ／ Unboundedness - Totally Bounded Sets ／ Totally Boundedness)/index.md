---
title: "Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)"
created: 2023-05-20T14:34:11.920-05:00
modified: 2024-01-12T23:48:09.947-06:00
parent: "[[Metric Spaces]]"
children: []
---
Let:
- (𝑋, 𝑑) be a [[Metric Spaces|metric space]] where:
	- 𝑋 be a set of elements
	- 𝑑 is a [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric]] (i.e. 𝑑 : 𝑋×𝑋 → ℝ<sup>+</sup>)
- 𝐴 be a subset of 𝑋 (𝑖.e. 𝐴⊆𝑋)

# Epsilon Balls (𝐵<sub>𝜀</sub>)

The <em>𝜀-ball</em> of point 𝑥∊𝑋 is the set of all points with a distance less than 𝜀:
- 𝐵<sub>𝜀</sub>(𝑥) := { 𝑦∊𝑋 | 𝑑(𝑥,𝑦) \< 𝜀 }

# Open Balls

An <em>open ball</em> is any 𝜀-ball where 𝜀 \> 0
# Boundary Points <sup>[[Mathematical Space (Boundary Sets - Boundary Points - Boundaryless)|(general definition)]]</sup>

𝑥 is a <em>boundary point</em> of 𝐴 if the following holds for all 𝜀 \> 0:
- 𝐵<sub>𝜀</sub>(𝑥) ⋂ 𝐴 ≠ ∅
- 𝐵<sub>𝜀</sub>(𝑥) ⋂ 𝐴<sup>𝑐</sup> ≠ ∅

# Boundary Sets 𝑑𝑏(·) <sup>[[Mathematical Space (Boundary Sets - Boundary Points - Boundaryless)|(general definition)]]</sup>

The <em>boundary set</em> 𝑑𝑏(𝐴) of 𝐴 is defined as:
- 𝑏𝑑(𝐴) = { 𝑥∊𝑋 | 𝑥 is a boundary point for 𝐴 }
- 𝑏𝑑(𝐴) = { 𝑥∊𝑋 | 𝐵<sub>𝜀</sub>(𝑥) ⋂ 𝐴 ≠ ∅ AND 𝐵<sub>𝜀</sub>(𝑥) ⋂ 𝐴<sup>𝑐</sup> ≠ ∅ }

# Open Sets <sup>[[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|(general definition)]]</sup>

𝐴 is an <em>open set</em> if for all 𝑥∊𝐴 there is exists an open ball such that 𝐵<sub>𝜀</sub>(𝑥) ⊆ 𝐴
- 𝐴 is open ↔ 𝐴 ⋂ 𝑑𝑏(𝐴) = ∅

# Closed Sets <sup>[[Mathematical Space (Open Sets - Closed Sets - Clopen Sets)|(general definition)]]</sup>

𝐴 is a <em>closed set</em> if 𝐴<sup>𝑐</sup> is open
- 𝐴 is closed ↔ 𝐴 ⋃ 𝑑𝑏(𝐴) = 𝐴

# Closures <sup>[[Mathematical Space (Closures - Spans - Generated Sets)|(general definition)]]</sup>

Given a set 𝐴 its <em>closure</em> 𝐶𝑙(𝐴) is defined as:
- 𝐶𝑙(𝐴) = 𝐴 ⋃ 𝑑𝑏(𝐴)
- 𝐶𝑙(𝐴) = 𝐴 ⋃ {𝐴's [[Metric Spaces (Limit Points - Accumulation Points - Cluster Points)|limit points]]}

# Bounded Sets <sup>[[Mathematical Space (Bounded Sets - Unbounded Sets)|(general definition)]]</sup>

A subset 𝑆 of a metric space (𝑋,𝑑) is <em>bounded</em> if there exists 𝑟\>0 such that for all 𝑠 and 𝑡 in 𝑆, we have 𝑑(𝑠,𝑡) \< 𝑟
- ∃𝑟\>0 ∀𝑠,𝑡∊𝑆 : 𝑑(𝑠,𝑡) \< 𝑟

# Unbounded Sets <sup>[[Mathematical Space (Bounded Sets - Unbounded Sets)|(general definition)]]</sup>

A subset 𝑆 of a metric space (𝑋,𝑑) is <em>unbounded</em> if there DOES NOT exist an 𝑟\>0 such that for all 𝑠 and 𝑡 in 𝑆, we have 𝑑(𝑠,𝑡) \< 𝑟
# Totally Bounded Sets

A subset 𝑆 of a metric space (𝑋,𝑑) is <em>totally bounded</em> if, for every 𝜀\>0, one can cover 𝑆 by a finite number of open balls of radius 𝜀
# Examples

> [!expand-ui]- Example #1
> Given:
> - 𝑋 = (1,3\] ⋃ (4,∞)
> - 𝑑(𝑥,𝑦) = |𝑥 - 𝑦|
>
> If 𝐴 = (1,3\] then:
> - 𝐴 is an open set
> - 𝐴 is also a closed set
> - 𝑏𝑑(𝐴) = ∅
> - 𝐶𝑙(𝐴) = 𝐴
>
> If 𝐴 = (1,2\] then:
> - 𝐴 is NOT an open set
> - 𝐴 is a closed set
> - 𝑏𝑑(𝐴) = {2}
> - 𝐶𝑙(𝐴) = 𝐴
# Bounded/Unbounded vs Boundary/Boundaryless vs Closed/Open vs Compact

```merge-table
{
  "rows": [
    [
      {
        "content": "Boundary vs Boundaryless",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Bounded vs Unbounded",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Closed vs Open",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Mathematical Space (Compactness／Compact - Sequential／Sequentially／Limit-Point／Weakly-Countably／Countably／Countable Compactness／Compact - Relatively-Compact／Precompact Subspace／Subset)|Compact]]",
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
        "content": "BOUNDARY",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "UNBOUNDED",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "CLOSED",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "bg": "#deebff",
        "align": "center"
      },
      "- a subset 𝑆 of a 1D real space ℝ constrained by an [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]] \\[0,∞)"
    ],
    [
      {
        "content": "BOUNDARY",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "UNBOUNDED",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "OPEN",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "bg": "#deebff",
        "align": "center"
      },
      "- a subset 𝑆 of a 1D real space ℝ constrained by an interval (0,∞)"
    ],
    [
      {
        "content": "BOUNDARY",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "BOUNDED",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "CLOSED",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "COMPACT",
        "bg": "#fffae6",
        "align": "center"
      },
      "- a subset 𝑆 of a 1D real space ℝ constrained by an interval \\[0,1\\]"
    ],
    [
      {
        "content": "BOUNDARY",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "BOUNDED",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "OPEN",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "bg": "#deebff",
        "align": "center"
      },
      "- a subset 𝑆 of a 1D real space ℝ constrained by an interval (0,1)"
    ],
    [
      {
        "content": "BOUNDARYLESS",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "UNBOUNDED",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "> [!expand]- CLOSED & OPEN\n> Any set without boundary is necessarily both closed and open",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "bg": "#deebff",
        "align": "center"
      },
      "- a subset 𝑆 of a 1D real space ℝ constrained by an interval (-∞,∞)\n- the entire set"
    ],
    [
      {
        "content": "BOUNDARYLESS",
        "bg": "#deebff",
        "align": "center"
      },
      {
        "content": "BOUNDED",
        "bg": "#fffae6",
        "align": "center"
      },
      {
        "content": "> [!expand]- CLOSED & OPEN\n> Any set without boundary is necessarily both closed and open",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "COMPACT",
        "bg": "#fffae6",
        "align": "center"
      },
      "- the empty set\n\n> [!info]\n> In fact, in Euclidean spaces (or any connected metric space with an unbounded metric), it is the only example, since a set without boundary is necessarily both closed and open"
    ]
  ],
  "tableStyle": "width: 89.403%;"
}
```
