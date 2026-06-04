---
title: "Trigonometry & Complex Numbers"
created: 2023-04-01T20:29:28.659-05:00
modified: 2023-07-08T14:52:56.897-05:00
parent: "[[Trigonometry]]"
children:
  - "[[Euler's Formula - Intuition via Trigonometry & Complex Numbers]]"
---
###### Trigonometry & Complex Numbers
````excerpt
- [[Trigonometry|trigonometry]] and [[Complex Numbers System|complex numbers]] are closely related
````
^excerpt

# Trigonometry - Geometric View

![[Trigonometric／Circular／Angle／Goniometric Functions (sine - cosine - tangent - cosecant - secant - cotangent)#^excerpt]]
# Complex Numbers
- adding complex numbers is simple
- multiplying complex numbers is like rotating and scaling. For example, multiplying a complex number by 𝑖 is like rotating it 90 degrees counterclockwise

# Computing 𝑐𝑜𝑠(75°)

> [!expand]- Click here to expand...
> 𝑐𝑜𝑠(75) = Is like taking \[1,0\] and rotating it 45 degrees and then 30 degrees counter-clockwise
>
> 𝑐𝑜𝑠(75) = \[1, 0\] \[𝑐𝑜𝑠(45), 𝑖·𝑠𝑖𝑛(45)\] \[𝑐𝑜𝑠(30), 𝑖·𝑠𝑖𝑛(30)\]
> - 𝑐𝑜𝑠(45) = √(1/2)
> - 𝑠𝑖𝑛(45) = √(1/2)
> - 𝑐𝑜𝑠(30) = √(3)/2
> - 𝑠𝑖𝑛(30) = 1/2
>
> 𝑐𝑜𝑠(75) = \[1, 0\] \[√(1/2), i√(1/2)\] \[√(3)/2, i(1/2)\]
>               = \[1, 0\] \[√(1/2)\*√(3)/2 - √(1/2)(1/2), √(1/2)√(3)/2 + √(1/2)/2\]
>               = \[1, 0\] \[√(1/2)\*√(3)(1/2) - √(1/2)(1/2), √(1/2)√(3)/2 + √(1/2)/2\]
>               = \[1, 0\] \[√(3/2)\*√(1/4) - √(1/2)√(1/4), √(1/2)√(3)/2 + √(1/2)/2\]
>               = \[1, 0\] \[√(6/4)\*√(1/4) - √(2/4)√(1/4), √(1/2)√(3)/2 + √(1/2)/2\]
>               = \[1, 0\] \[√(6/16) - √(2/16), √(1/2)√(3)/2 + √(1/2)/2\]
>               = \[1, 0\] \[√(6)/4 - √(2)/4, √(1/2)√(3)/2 + √(1/2)/2\]
>               = \[1, 0\] \[(1/4)\[√(6) - √(2)\], √(1/2)√(3)/2 + √(1/2)/2\]
>               = \[(1/4)\[√(6) - √(2)\], 0\]
>               = (1/4)\[√(6) - √(2)\]
# Multiplying Complex Numbers is Like Adding Rotations Together
1. \[𝑐𝑜𝑠(𝑥) + 𝑖·𝑠𝑖𝑛(𝑥)\] \* \[𝑐𝑜𝑠(𝑦) + 𝑖·𝑠𝑖𝑛(𝑦)\] = \[𝑐𝑜𝑠(x+y) + 𝑖·𝑠𝑖𝑛(x+y)\]
2. \[𝑐𝑜𝑠(𝑥) + 𝑖·𝑠𝑖𝑛(𝑥)\] \* \[𝑐𝑜𝑠(𝑦) + 𝑖·𝑠𝑖𝑛(𝑦)\] = \[𝑐𝑜𝑠(𝑥)𝑐𝑜𝑠(𝑦) - 𝑠𝑖𝑛(𝑥)𝑠𝑖𝑛(𝑦) + i𝑐𝑜𝑠(𝑦)𝑠𝑖𝑛(𝑥) + i𝑐𝑜𝑠(𝑥)𝑠𝑖𝑛(𝑦)\]
3. \[𝑐𝑜𝑠(𝑥) + 𝑖·𝑠𝑖𝑛(𝑥)\] \* \[𝑐𝑜𝑠(𝑦) + 𝑖·𝑠𝑖𝑛(𝑦)\] = \[𝑐𝑜𝑠(𝑥)𝑐𝑜𝑠(𝑦) - 𝑠𝑖𝑛(𝑥)𝑠𝑖𝑛(𝑦) + i \[𝑐𝑜𝑠(𝑦)𝑠𝑖𝑛(𝑥) + 𝑐𝑜𝑠(𝑥)𝑠𝑖𝑛(𝑦)\]\]

Because of 1 and 3 above, we have:
1. 𝑐𝑜𝑠(𝑥+𝑦) = 𝑐𝑜𝑠(𝑥)𝑐𝑜𝑠(𝑦) - 𝑠𝑖𝑛(𝑥)𝑠𝑖𝑛(𝑦)
2. 𝑠𝑖𝑛(𝑥+𝑦) = 𝑐𝑜𝑠(𝑦)𝑠𝑖𝑛(𝑥) + 𝑐𝑜𝑠(𝑥)𝑠𝑖𝑛(𝑦)

Because of 1 above, we have:
- 𝑐𝑜𝑠(2𝑥) = 𝑐𝑜𝑠<sup>2</sup>(𝑥) - 𝑠𝑖𝑛<sup>2</sup>(𝑥)
- 𝑐𝑜𝑠(2𝑥) = 𝑐𝑜𝑠<sup>2</sup>(𝑥) - (1 - 𝑐𝑜𝑠<sup>2</sup>(𝑥)) <font style="color: rgb(122,134,154);">\# because 1 = 𝑐𝑜𝑠<sup>2</sup>(𝑥) + 𝑠𝑖𝑛<sup>2</sup>(𝑥)</font>
- 𝑐𝑜𝑠(2𝑥) = 𝑐𝑜𝑠<sup>2</sup>(𝑥) - (1 - 𝑐𝑜𝑠<sup>2</sup>(𝑥))
- 𝑐𝑜𝑠(2𝑥) = 2𝑐𝑜𝑠<sup>2</sup>(𝑥) - 1

Thus:
- 𝑐𝑜𝑠<sup>2</sup>(𝑥) = \[𝑐𝑜𝑠(2𝑥) + 1\] / 2

# Euler's Formula
- 𝑒<sup>𝑖𝑥</sup> = 𝑐𝑜𝑠(𝑥) + 𝑖·𝑠𝑖𝑛(𝑥)

see: [[Euler's Formula - Intuition via Trigonometry & Complex Numbers]]
# Resources
- [#1 Trigonometry Fundamentals - 3Brown1Blue](https://www.youtube.com/watch?v=yBw67Fb31Cs&list=PLZHQObOWTQDP5CVelJJ1bNDouqrAhVPev&index=3)
- [#2 Complex Number Fundamentals - 3Brown1Blue](https://www.youtube.com/watch?v=5PcpBw5Hbwo&list=PLZHQObOWTQDP5CVelJJ1bNDouqrAhVPev&index=5)
