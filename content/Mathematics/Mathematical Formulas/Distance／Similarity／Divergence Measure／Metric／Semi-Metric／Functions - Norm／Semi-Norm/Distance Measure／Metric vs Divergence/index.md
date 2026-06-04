---
title: "Distance Measure／Metric vs Divergence"
created: 2023-06-26T17:25:58.264-05:00
modified: 2023-06-26T18:39:08.323-05:00
parent: "[[Distance／Similarity／Divergence Measure／Metric／Semi-Metric／Functions - Norm／Semi-Norm]]"
children: []
---
- [[Divergences|divergences]] are defined specifically on [[Probability Distributions|probability distributions]]
- [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metrics]] can be defined on other types of objects too

All distance metrics between probability distributions are also divergences, but the [[Conditional Statements - Antecedent - Consequent (Conditional - Converse - Inverse - Contrapositive - Biconditional)|converse]] is not true--a divergence may or may not be a distance metric

Unlike [[Distance Measures／Metrics／Semi-Metrics／Functions|metrics]], divergences are not required to be symmetric, and asymmetry is important in applications.

Secondly, divergences generalize <em>squared</em> distance, not linear distance, and thus do not satisfy the [triangle inequality](https://en.wikipedia.org/wiki/Triangle_inequality), but some divergences (such as the [[Bregman Divergence|Bregman divergence]]) do satisfy generalizations of the [[Pythagorean Theorem|Pythagorean theorem]].
