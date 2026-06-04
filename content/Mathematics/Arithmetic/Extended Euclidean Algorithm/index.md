---
title: "Extended Euclidean Algorithm"
created: 2021-09-13T05:24:57.588-05:00
modified: 2021-09-13T05:24:57.588-05:00
parent: "[[Arithmetic]]"
children: []
---
In [[Arithmetic]] and [[Cryptography & Cryptanalysis]], the <strong>E</strong><strong>xtended Euclidean Algorithm</strong> is an extension to the Euclidean algorithm. It computes, in addition to the [[Greatest／Highest Common Divisor／Denominator／Factor (GCD - GCF - HCF)|greatest common divisor]] of integers <em>a</em> and <em>b</em>, also the coefficients of [Bézout's identity](https://en.wikipedia.org/wiki/B%C3%A9zout%27s_identity), which are integers <em>x</em> and <em>y</em> such that
<span style="white-space: pre-wrap"><code>ax + by = gcd(a,b)</code></span>

This is a [certifying algorithm](https://en.wikipedia.org/wiki/Certifying_algorithm), because the gcd is the only number that can simultaneously satisfy this equation and divide the inputs. And with the greatest common divisor, it allows one to compute, with almost no extra cost, the quotients of <em>a</em> and <em>b</em>.
