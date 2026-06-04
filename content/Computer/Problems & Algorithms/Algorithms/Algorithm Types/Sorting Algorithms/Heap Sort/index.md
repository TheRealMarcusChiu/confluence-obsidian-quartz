---
title: "Heap Sort"
created: 2020-03-30T19:44:09.656-05:00
modified: 2020-09-14T17:00:19.339-05:00
parent: "[[Sorting Algorithms]]"
children: []
---
### Algorithm
```
HeapSort(A[])
    // build max or min heap
    for i = A.len/2 to 0                  -
    // heapify at node i                  ㅏ---- O(nlgn) intuitively. O(n) for realz
        max-or-min-heapify(A[], A.len, i) -

    // extract min or max from root, then heapify at root
    for i = A.len to 0                    -
    // switch root and end nodes          |
                                          ㅏ---- O(nlgn)
    // heapify at root node               |
    max-or-min-heapify(A[], i, 0)         -
```

Therefore [[Growth／Asymptotic Complexity／Analysis (Resource - Time／Space／Memory Complexity)|time-complexity]] of Heap Sort = 𝑂(𝑛·𝑙𝑔(𝑛))
### Why the code snippet runs 𝑂(𝑛)
```
    for i = A.len/2 to 0
        max-or-min-heapify(A[], A.len, i)
```
- 𝑇(𝑛) = 𝛴<sub>1≤ℎ≤𝑙𝑔(𝑛)</sub> \[ℎ\*(\# of nodes at height ℎ)\]
- 𝑇(𝑛) = 𝛴<sub>1≤ℎ≤𝑙𝑔(𝑛)</sub> \[ℎ\*(𝑛/2<sup>ℎ+1</sup>)\]
- 𝑇(𝑛) = 𝛴<sub>1≤ℎ≤𝑙𝑔(𝑛)</sub> (1/2)<sup>ℎ</sup>
- 𝑇(𝑛) = 2𝑛 - 1 <font style="color: rgb(128,128,128);">\# using</font> [[Approximating Known Target Functions|summation formula]]
