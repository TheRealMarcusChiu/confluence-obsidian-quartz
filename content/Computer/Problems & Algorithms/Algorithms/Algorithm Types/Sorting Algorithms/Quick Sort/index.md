---
title: "Quick Sort"
created: 2020-03-30T19:53:49.982-05:00
modified: 2020-03-30T19:57:56.475-05:00
parent: "[[Sorting Algorithms]]"
children: []
---
### Algorithm
```
QuickSort(A[], p, r)
    if q < r
        q = Partition(A, p, r)      // O(n)
    QuickSort(A, p, q-1)            // T(0) to T(n-1)
    QuickSort(A, q+1, r)            // T(0) to T(n-1)
```
### Time Complexity
- Average Case: 𝑂(𝑛·𝑙𝑔(𝑛)) where q partitions A in half
- Worst Case: 𝑂(𝑛<sup>2</sup>) where q is either end of A

Assuming Partition splits array in half always then recurrence relation:
- 𝑇(𝑛) = 2𝑇(𝑛/2) + 𝑂(𝑛)

Assuming Partition always choose pivot that is smallest/biggest of array:
- 𝑇(𝑛) = 𝑇(𝑛-1) + 𝑂(𝑛)
