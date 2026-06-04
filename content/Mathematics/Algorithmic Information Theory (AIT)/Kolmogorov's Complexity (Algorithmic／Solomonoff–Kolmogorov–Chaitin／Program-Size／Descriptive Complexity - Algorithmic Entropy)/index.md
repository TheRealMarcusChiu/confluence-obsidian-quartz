---
title: "Kolmogorov's Complexity (Algorithmic／Solomonoff–Kolmogorov–Chaitin／Program-Size／Descriptive Complexity - Algorithmic Entropy)"
created: 2022-04-17T00:32:18.872-05:00
modified: 2022-04-17T00:37:08.164-05:00
parent: "[[Algorithmic Information Theory (AIT)]]"
children: []
---
###### Kolmogorov's Complexity (Algorithmic/Solomonoff–Kolmogorov–Chaitin/Program-Size/Descriptive Complexity - Algorithmic Entropy)
- the Kolmogorov complexity of an object, such as a piece of text, is the length of the shortest computer program (in a predetermined programming language) that produces the object as output
- is also a way to define randomness

# Definition

Consider the following two strings of 32 lowercase letters and digits:
- abababababababababababababababab
- 4c1j5b2p0cv4w1x8rx2y39umgw5q85s7

The first string has a short English-language description, namely "write ab 16 times", which consists of 17 characters

The second one has no obvious simple description other than writing down the string itself "write 4c1j5b2p0cv4w1x8rx2y39umgw5q85s7" which has 38 characters
