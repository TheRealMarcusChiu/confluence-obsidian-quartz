---
title: "Complex Numbers - Arithmetic"
created: 2023-06-09T11:37:43.236-05:00
modified: 2023-06-22T12:33:52.335-05:00
parent: "[[Complex Numbers System]]"
children:
  - "[[Complex Conjugate／Conjugation]]"
---
<strong>Addition</strong> is performed componentwise:
- (𝑎 + 𝑏𝑖) + (𝑐 + 𝑑𝑖) = (𝑎+𝑐) + (𝑏+𝑑)𝑖

<strong>Multiplication</strong> is performed using distributivity and 𝑖<sup>2</sup> = -1:
- (𝑎 + 𝑏𝑖)(𝑐 + 𝑑𝑖) = 𝑎𝑐 + 𝑎𝑑𝑖 + 𝑏𝑐𝑖 + 𝑏𝑑𝑖<sup>2</sup>
- (𝑎 + 𝑏𝑖)(𝑐 + 𝑑𝑖) = (𝑎𝑐 - 𝑏𝑑) + (𝑎𝑑 + 𝑏𝑐)𝑖

<strong>[[Complex Conjugate／Conjugation|Complex Conjugation]]</strong> replaces 𝑖 with -𝑖, and is denoted with a bar:
- $\overline{a+bi} = a - bi$

One checks that for any 2 complex numbers 𝑧, 𝑤, we have:
- $\overline{z+w} = \overline{z} + \overline{w}$
- $\overline{zw} = \overline{z} · \overline{w}$

Also, (𝑎 + 𝑏𝑖)(𝑎 - 𝑏𝑖) = 𝑎<sup>2</sup> + 𝑏<sup>2</sup>, so 𝑧𝑧̅ is a non-negative real number for any complex number 𝑧

The <strong>absolute value</strong> of a complex number 𝑧 is the real number$|z|=\sqrt{z\overline{z}}:$
- $|a+bi|=\sqrt{a^2+b^2}$

One checks that |𝑧𝑤| = |𝑧|·|𝑤|

<strong>Division by a nonzero real number</strong> proceeds componentwise:
- $\frac{a+bi}{c} = \frac{a}{c}+\frac{b}{c}i$

<strong>Division by a nonzero complex number</strong> requires multiplying the numerator and denominator by the complex conjugate of the denominator:
- $\frac{z}{w} = \frac{z\overline{w}}{w\overline{w}} = \frac{z\overline{w}}{|w|^2}$

For example:
- $\frac{1+i}{1-i} = \frac{(1+i)^2}{1^2+(-1)^2} = \frac{1+2i+i^2}{2} = i$

The <strong>real</strong> and <strong>imaginary</strong> parts of a complex number are:
- 𝑅𝑒(𝑎 + 𝑏𝑖) = 𝑎
- 𝐼𝑚(𝑎 + 𝑏𝑖) = 𝑏
