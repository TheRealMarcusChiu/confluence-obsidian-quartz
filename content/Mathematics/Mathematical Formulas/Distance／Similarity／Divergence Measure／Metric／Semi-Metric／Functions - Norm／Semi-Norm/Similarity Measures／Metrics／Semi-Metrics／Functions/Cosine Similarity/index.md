---
title: "Cosine Similarity"
created: 2021-09-13T05:26:08.147-05:00
modified: 2023-06-02T22:06:59.104-05:00
parent: "[[Similarity Measures／Metrics／Semi-Metrics／Functions]]"
children: []
---
###### Cosine Similarity
- a type of [[Similarity Measures／Metrics／Semi-Metrics／Functions|Similarity Measure]] that measures the similarity (or angle) between 2 [[Vectors|vectors]]
- the similarity is scored between an [[Real Intervals (Empty／Degenerate／Proper／Bounded／Finite／Half-Bounded／Unbounded／Left／Right／Open／Closed Intervals)|interval]] \[-1, 1\]:
	- proportional vectors have a cosine similarity of 1
	- orthogonal vectors have a cosine similarity of 0 (see [[Why Dot Product of 2 Orthogonal Vectors Equals Zero？ (Cosine Similarity)|proof]])
	- opposite vectors have a cosine similarity of -1
- when dealing with positive-only vectors, the similarity is scored between an interval \[0, 1\]

![[Cosine Similarity/cosine-similarity-vector-examples.jpg|750]]
# Cosine Similarity - Formula

```merge-table
{
  "rows": [
    [
      "- 𝑐𝑜𝑠(𝜃) = \\[𝑢̅·𝑣̅\\] / \\[||𝑢̅||\\*||𝑣̅||\\]\n\nwhere:\n- 𝑢̅·𝑣̅ - is the [[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]]\n- ||𝑢̅|| and ||𝑣̅|| - is the magnitude/length of vector",
      "![[Cosine Similarity/cosine-similarity.png|301]]"
    ]
  ]
}
```
# Subpages
- [[Dot Product vs Cosine Similarity]]
- [[Why Dot Product of 2 Orthogonal Vectors Equals Zero？ (Cosine Similarity)|Why Dot Product of 2 Orthogonal Vectors Equals Zero? (Cosine Similarity)]]
