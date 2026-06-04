---
title: "Transitive Closure Algorithm"
created: 2021-09-13T05:25:45.372-05:00
modified: 2022-04-28T04:03:12.084-05:00
parent: "[[All-Pairs Shortest Paths Problem]]"
children: []
---
<strong>Transitive Closure Algorithm</strong> solves the [[All-Pairs Shortest Paths Problem]]

input:
- G(V,E)
- NxN boolean matrix A where aᵢⱼ=1 \<=\> (i,j)∈E

output:
- a matrix A, where A\[i,j\]=1 if there exist a path i \~\> j

# Algorithm Implementation
```
Algorithm(A,n) {
	for k = 1 to n:
		for i = 1 to n:
			for j = 1 to n:
				A[i,j] = A[i,j] or (A[i,k] and A[k,j])
	return matrix A
}
```
