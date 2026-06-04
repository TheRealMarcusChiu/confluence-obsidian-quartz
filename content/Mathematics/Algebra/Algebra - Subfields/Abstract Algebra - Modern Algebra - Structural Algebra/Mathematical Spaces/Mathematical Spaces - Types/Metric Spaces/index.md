---
title: "Metric Spaces"
created: 2023-05-07T15:13:15.043-05:00
modified: 2023-06-23T11:02:55.972-05:00
parent: "[[Mathematical Spaces - Types]]"
children:
  - "[[Metric Spaces (Compactness／Compact - Sequential Compactness - Sequentially Compact - Limit Point Compactness)]]"
  - "[[Metric Spaces (Epsilon Balls - Open Sets - Boundary Points／Sets - Closed Sets - Closures - Bounded Sets ／ Boundedness - Unbounded Sets ／ Unboundedness - Totally Bounded Sets ／ Totally Boundedness)]]"
  - "[[Metric Spaces (Limit Points - Accumulation Points - Cluster Points)]]"
  - "[[Metric Spaces (Neighborhoods)]]"
  - "[[Metric Spaces (Sequences - Convergent／Convergence／Converges - Bounded - Cauchy Sequences)]]"
  - "[[Transformations Between Metric Spaces]]"
---
###### Metric Spaces (𝑋,𝑑)
````excerpt
- is a type of [[Mathematical Spaces|mathematical space]]
- is a tuple (𝑋,𝑑) where:
	- 𝑋 be a set of elements
	- 𝑑 is a [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric]] (i.e. 𝑑 : 𝑋×𝑋 → ℝ<sup>+</sup>)
- is a type of [[Topological Spaces|topological space (𝑋,𝜏)]] where [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric (𝑑)]] is defined and 𝑑 induces a [[Topology|topology (𝜏)]] on set 𝑋
````
^excerpt

# Metric Space - Examples
1. All [[Normed Vector Spaces - Normed Spaces|normed vector spaces]] are metric spaces
2. [[Euclidean Vector Spaces - Euclidean Spaces|Euclidean Vector Space (ℝ𝑛)]] with [[L2／Euclidean Distance Metric|Euclidean Distance Metric (𝑑)]]. (ℝ<sup>𝑛</sup>,𝑑) forms a <em>metric space</em>.
	1. [[Real Numbers System|Real Numbers (ℝ)]] with [[L1／Manhattan／Rectilinear Distance Metric|Absolute Distance Metric (𝑑(𝑥,𝑦) = |𝑦-𝑥|)]]. (ℝ,𝑑) forms a <em>metric space</em>.
3. Let 𝐺(𝑉,𝐸,𝑊) be a simple, weighted, undirected graph; with [[Distance Measures／Metrics／Semi-Metrics／Functions|distance metric (𝑑)]] defined as the [[Shortest Path(s) Problems|shortest path function]] 𝑑:𝑉×𝑉→ℝ<sup>+</sup> (i.e. the length of the shortest path between any two vertices). (𝐺,𝑑) forms a <em>metric space</em>.

# Subpages
- [[Complete Metric Spaces (Completeness - Non-Completeness)|Completeness - Non-Completeness]]
> [!list-indent-undo]
> ```dataview
> LIST
> FROM ""
> WHERE file.folder = this.file.folder + "/" + this.file.name
> ```
