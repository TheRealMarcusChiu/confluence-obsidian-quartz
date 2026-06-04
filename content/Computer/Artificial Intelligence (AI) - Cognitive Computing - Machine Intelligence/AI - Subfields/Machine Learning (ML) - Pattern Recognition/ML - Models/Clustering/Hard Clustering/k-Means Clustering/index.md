---
title: "k-Means Clustering"
created: 2020-04-05T02:09:59.413-05:00
modified: 2021-11-02T01:29:00.451-05:00
parent: "[[Hard Clustering]]"
children: []
---
<strong>k-Means Clustering</strong> is a type of [[Hard Clustering]] that aims to partition 𝑛 observations into 𝑘 clusters

We note 𝑐<sup>(𝑖)</sup> the cluster of data point 𝑖 and <em>𝜇</em><sub>𝑗</sub> the center of cluster 𝑗

<strong>Algorithm</strong> ― After randomly initializing the cluster centroids <em>𝜇</em><sub>1</sub>, <em>𝜇</em><sub>2</sub>, ..., <em>𝜇</em><sub>𝑘</sub> ∈ ℝ<sup>𝑛</sup>, the k-means clustering repeats the following step until convergence:

![[k-Means Clustering/k-means-algorithm.png|600]]
# K-Means - General Algorithm
```
iterative-clustering-algorithm(points, k) {
	cluster-centers = k random points (means)
	do until convergence:
		for each point in points:
		assign point to closest cluster-center
		change each cluster-center to the average of its assigned points
}
```
# K-Means - Other
- [[Louvain Method vs K-Means]]
- [[K-Means Clustering vs Fuzzy C-Means Clustering]]
