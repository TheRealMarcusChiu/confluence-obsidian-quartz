---
title: "Probabilistic Inference - Loop Cutset-Conditioning Algorithm"
created: 2021-09-13T05:28:26.617-05:00
modified: 2021-09-13T05:28:26.617-05:00
parent: "[[Probabilistic Inference - Cutset Conditioning Scheme]]"
children: []
---
<strong>Loop Cutset-Conditioning Algorithm</strong>
- a type of [[Probabilistic Inference - Cutset Conditioning Scheme|Cutset Conditioning Algorithm]]
- inference on graphs with loops/cycles are hard, so we want to remove them
- applies search to the [[Loop Cutset|loop cutset variables]] and [[Probabilistic Inference - Exact Inference|exact inference algorithm]] (e.g. [[Probabilistic Inference - Bucket Elimination (BE) - Variable Elimination (VE)|variable elimination]]) to the remaining network
