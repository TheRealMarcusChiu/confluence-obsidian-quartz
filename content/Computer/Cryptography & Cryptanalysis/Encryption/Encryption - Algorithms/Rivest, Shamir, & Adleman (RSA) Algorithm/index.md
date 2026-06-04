---
title: "Rivest, Shamir, & Adleman (RSA) Algorithm"
created: 2019-03-16T02:28:20.793-05:00
modified: 2026-05-21T13:57:20.004-05:00
parent: "[[Encryption - Algorithms]]"
children: []
---
###### Rivest, Shamir, & Adleman (RSA) Algorithm
````excerpt
- is an [[Asymmetric／Two／Public-Private Key Function|asymmetric encryption algorithm]]
- invented in April 1977
````
^excerpt

# RSA - Introduction

![](https://www.youtube.com/watch?v=wXB-V_Keiu8)
# RSA Creation Steps
###### Using modular exponentiation for encryption
- 𝑚<sup>𝑒</sup> 𝑚𝑜𝑑 𝑁 ≡ 𝑐

Given 𝑚, 𝑒, 𝑁 it is EASY to compute 𝑐 (encrypting 𝑚)
- 𝑚<sup>𝑒</sup> 𝑚𝑜𝑑 𝑁 ≡ ?

Given 𝑐, 𝑒, 𝑁 it is HARD to compute 𝑚 (decrypting 𝑐)
- ?<sup>𝑒</sup> 𝑚𝑜𝑑 𝑁 ≡ 𝑐

###### Determine what is needed for decryption

Find <strong><font style="color: rgb(255,0,0);">𝑑</font></strong> to "undo" 𝑒
- 𝑚<sup>𝑒</sup> 𝑚𝑜𝑑 𝑁 ≡ 𝑐
- 𝑐<strong><font style="color: rgb(255,0,0);"><sup>𝑑</sup></font></strong> 𝑚𝑜𝑑 𝑁 ≡ 𝑚

With [[Modular Arithmetic|modular arithmetic]] the 2 equations above result in:
- 𝑚<sup>𝑒</sup><strong><font style="color: rgb(255,0,0);"><sup>𝑑</sup></font></strong> 𝑚𝑜𝑑 𝑁 ≡ 𝑚

The problem is figuring out what value to choose for 𝑒 and <font style="color: rgb(255,0,0);">𝑑</font>
###### Introducing phi function 𝛷(𝑁)

𝛷(𝑛) is the number of integers 𝑘 in the range 1 ≤ 𝑘 ≤ 𝑛 for which the greatest common divisor 𝑔𝑐𝑑(𝑛, 𝑘) is equal to 1.
- 𝛷(𝑠𝑜𝑚𝑒-𝑛𝑢𝑚𝑏𝑒𝑟) is HARD to compute
- 𝛷(𝑝𝑟𝑖𝑚𝑒-𝑛𝑢𝑚𝑏𝑒𝑟) is EASY to compute, 𝛷(𝑝𝑟𝑖𝑚𝑒-𝑛𝑢𝑚𝑏𝑒𝑟) = 𝑝𝑟𝑖𝑚𝑒-𝑛𝑢𝑚𝑏𝑒𝑟 - 1
- 𝛷(𝑎 \* 𝑏) = 𝛷(𝑎) \* 𝛷(𝑏)

Choosing 𝑁 to be equal to 𝑝𝑟𝑖𝑚𝑒-𝑜𝑛𝑒 \* 𝑝𝑟𝑖𝑚𝑒-𝑡𝑤𝑜, then:
- 𝛷(𝑁) = 𝛷(𝑝𝑟𝑖𝑚𝑒-𝑜𝑛𝑒) \* 𝛷(𝑝𝑟𝑖𝑚𝑒-𝑡𝑤𝑜)

Thus, 𝛷(𝑁) is EASY to compute when its prime-factorization (i.e. 𝑝𝑟𝑖𝑚𝑒-𝑜𝑛𝑒 \* 𝑝𝑟𝑖𝑚𝑒-𝑡𝑤𝑜) is known. The prime-factorization of large 𝑁 is HARD to compute.
###### Merging 𝛷(𝑁) with modulo exponentiation

Euler's theorem states, for any 𝑚,𝑛, and gcd(𝑚,𝑛) = 1 then:
- 𝑚<sup>𝛷(𝑛)</sup> ≡ 1 𝑚𝑜𝑑 𝑛

Rearranging Euler's theorem with [[Modular Arithmetic|modular arithmetic]]:
- 𝑚<sup>𝛷(𝑛)𝑘</sup> ≡ 1<sup>𝑘</sup> 𝑚𝑜𝑑 𝑛
- 𝑚<sup>𝛷(𝑛)𝑘</sup> ≡ 1 𝑚𝑜𝑑 𝑛
- 𝑚·𝑚<sup>𝛷(𝑛)𝑘</sup> ≡ 𝑚·1 𝑚𝑜𝑑 𝑛
- 𝑚<sup>𝛷(𝑛)𝑘+1</sup> ≡ 𝑚 𝑚𝑜𝑑 𝑛

Now we have modulo exponentiation that depends on 𝛷(𝑁)!

Thus, the values for 𝑒 and <font style="color: rgb(255,0,0);">𝑑</font>:
- <font style="color: rgb(255,0,0);">𝑑 </font>= \[𝛷(𝑛)𝑘+1\] / 𝑒

# RSA - Usage

```merge-table
{
  "rows": [
    [
      {
        "content": "###### Algorithm",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "private-public key pair - setup:\n- select two large prime numbers, p and q\n- n = pq\n- z = (p-1)(q-1)\n- select a number e:\n\t- 1 \\< e \\< z\n\t- e is a prime relative to z (e and z have no common factors, except 1)\n- select a number d:\n\t- ((e\\*d) - 1) is divisible by z (i.e. <em>ed mod z = 1</em>)\n- the public key is: (e, n)\n- the private key is: (d, n)\n\nprivate-public key pair - encryption/decryption:\n- a message m (m\\<n) is encrypted as cipher-text c: \n  c = m<sup>e</sup>mod n\n- a cipher-text c is decrypted as follows:\n  m = c<sup>d</sup> mod n",
      "private-public key pair - setup:\n- select primes: <font style=\"color: rgb(78,133,66);\">p</font><font style=\"color: rgb(78,133,66);\">=17 & </font><font style=\"color: rgb(78,133,66);\">q</font><font style=\"color: rgb(78,133,66);\">=11 </font>\n- <font style=\"color: rgb(78,133,66);\">n = pq = 17 x 11 = 187 </font>\n- <font style=\"color: rgb(78,133,66);\">z = (p–1)(q-1) =16 x 10 = 160 </font>\n- select a number <font style=\"color: rgb(78,133,66);\">e:</font>\n\t- <font style=\"color: rgb(78,133,66);\">1 \\< e \\< 160</font>\n\t- <font style=\"color: rgb(78,133,66);\">gcd(e,160) = 1</font>\n- <font style=\"color: rgb(78,133,66);\">e = 7 </font>\n- select a number <font style=\"color: rgb(78,133,66);\">d:</font>\n\t- <font style=\"color: rgb(78,133,66);\">((e\\*d) - 1) </font>is divisible by <font style=\"color: rgb(78,133,66);\">z</font>\n\t- <font style=\"color: rgb(78,133,66);\">(e\\*d) - 1 =</font> <font style=\"color: rgb(78,133,66);\">z</font>\n\t- <font style=\"color: rgb(78,133,66);\">(7\\*d) =</font> <font style=\"color: rgb(78,133,66);\">161</font>\n\t- <font style=\"color: rgb(78,133,66);\">d = 23</font>\n- <font style=\"color: rgb(78,133,66);\">d = 23</font>\n- the public key is: <font style=\"color: rgb(78,133,66);\">(e=7, n=187)</font>\n- the private key is: <font style=\"color: rgb(78,133,66);\">(d=23, n=187)</font>\n\nprivate-public key pair - encryption/decryption:\n- encrypt message: <font style=\"color: rgb(51,153,102);\">m = 55</font>\n  <font style=\"color: rgb(51,153,102);\">c = m<sup>e</sup>mod n</font>\n  <font style=\"color: rgb(51,153,102);\">c = 55<sup>7</sup> mod 187</font>\n  <font style=\"color: rgb(51,153,102);\">c = 132</font>\n- decrypt cipher-text: <font style=\"color: rgb(51,153,102);\">c = 132</font>\n  <font style=\"color: rgb(51,153,102);\">m = c<sup>d</sup> mod n</font>\n  <font style=\"color: rgb(51,153,102);\">m = 132<sup>23</sup> mod 187 <font style=\"color: rgb(128,128,128);\"><em>(use wolfram alpha)</em></font></font>\n  <font style=\"color: rgb(51,153,102);\">m = 55</font>"
    ]
  ]
}
```
