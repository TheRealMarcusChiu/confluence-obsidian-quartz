---
title: "Nearest-Neighbor Descent (NN-Descent)"
created: 2020-08-11T13:03:20.804-05:00
modified: 2022-12-09T16:57:09.817-06:00
parent: "[[k-Nearest Neighbors (k-NN) Regression]]"
children: []
---
###### Nearest-Neighbor Descent (NN-Descent)

is a simple yet efficient algorithm for approximate <code><em>K-Nearest Neighbor Graph (K-NNG)</em></code> construction with arbitrary [[Similarity Measures／Metrics／Semi-Metrics／Functions|similarity measures]] or [[Distance Measures／Metrics／Semi-Metrics／Functions|distance measures]]. Our method is based on local search, has minimal space overhead, and does not rely on any shared global index. Hence, it is especially suitable for large-scale applications where data structures need to be distributed over the network. We have shown with a variety of datasets and similarity measures that the proposed method typically converges to above 90% recall with each point comparing only to several percent of the whole dataset on average
# Paper

![[Nearest-Neighbor Descent (NN-Descent)/nearest-neighbor-descent.pdf]]
