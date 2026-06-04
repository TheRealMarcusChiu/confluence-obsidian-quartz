---
title: "Agglomerative Clustering"
created: 2020-06-02T14:35:45.137-05:00
modified: 2020-06-02T14:48:06.719-05:00
parent: "[[Hierarchical Clustering]]"
children: []
---
<strong>Agglomerative Clustering</strong> is a type of [[Hierarchical Clustering|hierarchical clustering]] that takes the bottom-up approach
### Algorithm
```
agglomerative-clustering(points) {
	each point is its own cluster
	repeat until one cluster left:
		pick 2 "CLOSEST" clusters
		merge them into new cluster
	return that cluster
}
```

produces a family of clusterings represented by a dendrogram
### Defining "Closest" for Clusters of Multiple Elements
- closest pair (single-link clustering)
- farthest pair (complete-link clustering)
- average of all pairs
- Ward's Method (min variance, like[[k-Means Clustering|k-means]]) - find pair of clusters that leads to minimum increase in total within cluster distance after merging
