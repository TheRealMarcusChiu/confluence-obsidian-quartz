---
title: "Dot Product - Intuition"
created: 2023-03-19T10:59:00.157-05:00
modified: 2023-03-19T11:36:17.194-05:00
parent: "[[Dot Product - Scalar Product - Canonical／Euclidean／Standard Inner Product]]"
children: []
---
Say what want the dot product of \[3,4\] and \[3,2\]

![[Dot Product - Intuition/dot-product-intuition.png|227x250]]

The vector \[3,2\] can be decomposed into 2 vectors each along the axis:
- \[3,2\] = \[3,0\] + \[0,2\]

Applying a linear transformation T on \[3,2\] is the same as applying the same transformation individually on each of the 2 decomposed vectors. This is because of the first law of linear transformations:
- T(\[3,0\]) + T(\[0,2\]) = T(\[3,2\])

Let T be the 1 by 2 matrix \[3,4\] that linearly transforms a 2D vector into a 1D vector scalar. Thus:
- T(\[3,0\]) = 9
- T(\[0,2\]) = 8
- T(\[3,2\]) = 17

This aligns with the equation pitched above

T(\[3,0\]) and T(\[0,2\]) have a nice geometric view. T projects any vector onto itself and multiplies it by T's magnitude (which is nicely explained in the video

![](https://www.youtube.com/watch?v=LyGKycYT2v0)
