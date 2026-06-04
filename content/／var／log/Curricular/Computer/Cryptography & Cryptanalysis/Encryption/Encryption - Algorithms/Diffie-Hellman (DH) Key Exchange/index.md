---
title: "Diffie-Hellman (DH) Key Exchange"
created: 2019-03-16T02:29:13.477-05:00
modified: 2022-04-06T01:53:39.488-05:00
parent: "[[Encryption - Algorithms]]"
children: []
---
<strong>Diffie-Hellman (DH)</strong> is:
- asymmetric because each side has a different key to start with and they end up with the same secret key
- is used to produce the symmetric/session-key for a [[Symmetric／Single／Secret Key Function|symmetric encryption]]
- invented in 1976

# How it Works
```
	E
	|
	|
A——————————————B
```

A and B wants to secure their connection E is the eavesdropper
###### 1. First A and B agrees publicly on 2 prime numbers
<span style="white-space: pre-wrap"><code>  3</code><br><code>  17</code></span>

for a resulting function 3<sup>𝑥</sup> mod 17
###### 2a. A selects a private random number
<span style="white-space: pre-wrap"><code>  random number = 15</code></span>

then substitute x with that number to get a result

<code>3<sup>15</sup> mod 17 = 6</code>

then sends the result 6 publicly to B
###### 2b. B selects a private random number
<span style="white-space: pre-wrap"><code>  random number = 13</code></span>

then substitute x with that number to get a result

<code>3<sup>13</sup> mod 17 = 12</code>

then sends the result 12 publicly to A
###### 3a. A takes
<code>12 - B’s public result</code><code>15 - its own private number</code>

<code>12<sup>15</sup> mod 17 = 10 = shared secret key</code>
###### 3b. B takes
<code>6 - A’s public result
  13 - its own private number</code>

<code>6<sup>13</sup> mod 17 = 10 = shared secret key</code>
###### 4. A and B derives the same secret key
<span style="white-space: pre-wrap"><code>  And E will have a hard time deriving it from the numbers being passed publicly</code></span>
