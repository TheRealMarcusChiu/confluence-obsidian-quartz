---
title: "Dot Product vs Cosine Similarity"
created: 2022-12-05T23:25:09.287-06:00
modified: 2022-12-05T23:26:42.825-06:00
parent: "[[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product]]"
children: []
---
- <strong>[[Cosine Similarity|cosine similarity]]</strong> only cares about angle difference
- <strong>[[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product|dot product]]</strong> cares about angle and magnitude

If you normalize your data to have the same magnitude, the two are indistinguishable. Sometimes it is desirable to ignore the magnitude, hence cosine similarity is nice, but if magnitude plays a role, dot product would be better as a similarity measure. Note that neither of them is a "[[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric]]"
