---
title: "Approximating Known Target Functions"
created: 2021-09-13T05:29:24.125-05:00
modified: 2023-12-20T17:53:19.496-06:00
parent: "[[Function Approximation Problem]]"
children:
  - "[[Arithmetic Series／Succession]]"
  - "[[Geometric Series／Succession]]"
  - "[[Padé Approximants]]"
  - "[[Taylor Series vs Taylor Polynomial]]"
---
a type of [[Function Approximation Problem|function approximation]] where the target function is known

```merge-table
{
  "rows": [
    [
      {
        "content": "Methods",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Taylor Series vs Taylor Polynomial]]",
        "bg": "#F4F5F7"
      },
      "is a representation of a function as an infinite sum of terms calculated from the values of its derivatives at a single point\n\n![[Approximating Known Target Functions/taylor-series-polynomial-1.png|320]]"
    ],
    [
      {
        "content": "[[Maclaurin Series vs Maclaurin Polynomial]]",
        "bg": "#F4F5F7"
      },
      "is a special case of the Taylor Polynomial, that uses zero as our single point\n\n![[Approximating Known Target Functions/maclaurin-series-polynomial-1.png|301]]"
    ],
    [
      {
        "content": "[[Geometric Series／Succession|Geometric Series]]\n[[Geometric Series／Succession|Geometric Progression]]",
        "bg": "#F4F5F7"
      },
      "𝑎 \\[(1 - 𝑟<sup>𝑛</sup>) / (1 - 𝑟)\\] = 𝛴<sub>0≤𝑘≤𝑛-1</sub>\\[𝑎𝑟<sup>𝑘</sup>\\] <font style=\"color: rgb(128,128,128);\">\\# for 𝑟 ≠ 1</font>\n𝑎/(1-𝑟) = 𝛴<sub>0≤𝑖≤∞</sub>\\[𝑎𝑟<sup>𝑖</sup>\\] <font style=\"color: rgb(128,128,128);\">\\# for |𝑟| \\< 1</font>\n- 1/(1-𝑟) = 𝛴<sub>0≤𝑖≤∞</sub>\\[𝑟<sup>𝑖</sup>\\] <font style=\"color: rgb(128,128,128);\">\\# for |𝑟| \\< 1</font>\n- 𝑟/(1-𝑟)= 𝛴<sub>0≤𝑖≤∞</sub>\\[𝑟<sup>𝑖+1</sup>\\] <font style=\"color: rgb(128,128,128);\">\\# for |𝑟| \\< 1</font>\n- 𝑟/(1-𝑟)<sup>2</sup>= 𝛴<sub>0≤𝑖≤∞</sub>\\[𝑖𝑟<sup>𝑖</sup>\\] <font style=\"color: rgb(128,128,128);\">\\# for |𝑟| \\< 1</font>"
    ],
    [
      {
        "content": "[[Padé Approximants]]",
        "bg": "#F4F5F7"
      },
      "![[Padé Approximants#^excerpt]]"
    ],
    [
      {
        "content": "[[Fourier Analysis]]",
        "bg": "#F4F5F7"
      },
      "- [[Fourier Series]] - is a way of representing a periodic function as a (possibly infinite) sum of [sine](http://confluence.marcuschiu.com/display/NOT/Sine+Function) and [cosine](http://confluence.marcuschiu.com/display/NOT/Cosine+Function) functions\n- [[Fourier Transform - Inverse Fourier Transform|Fourier Transform]] - is a way of representing a non-periodic function (satisfying some constraints) as a (possibly infinite) sum of [sine](http://confluence.marcuschiu.com/display/NOT/Sine+Function) and [cosine](http://confluence.marcuschiu.com/display/NOT/Cosine+Function) functions\n- etc"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
