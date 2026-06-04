---
title: "KD Trees"
created: 2020-08-04T21:04:08.305-05:00
modified: 2024-09-02T10:38:03.860-05:00
parent: "[[ML - Data Representation]]"
children: []
---
###### KD Trees
````excerpt
- is a space-partitioning [[Data Structures|data structure]] for organizing points in a k-dimensional space
- are a useful data structure for several applications, such as searches involving a multidimensional search key
- are a special case of binary space partitioning trees
````
^excerpt

# Constructing a KD-Tree
- <strong>domain-vector</strong> = a vector of floating point numbers
- <strong>range-vector</strong> = a vector of floating point numbers
- <strong>exemplar</strong> = a pair \<domain-vector, range-vector\>
```
kd-tree-construction(exemplar-set) {
	if (exemplar-set is empty) 
		return empty kd-tree
	call pivot-choosing procedure which returns 2 values:
- 
	- 
		- ex = a member of exemplar-set
		- split = the splitting dimension
	exemplar-set.remove(ex)
	d = domain vector of ex
	r = range  vector of ex
	exemplar-set-left =  {(d',r') in exemplar-set| d'(split) <= d(split)}
	exemplar-set-right = {(d',r') in exemplar-set| d'(split) >  d(split)}
	kd-left  = kd-tree-construction(exemplar-set-left)
	kd-right = kd-tree-construction(exemplar-set-right)
	kd = <d,r,split,kd-left,kd-right>
}
```
# Searching Nearest Neighbor

TODO
