---
title: "Computer Number Formats"
created: 2020-01-16T15:23:47.988-06:00
modified: 2023-03-10T19:02:31.522-06:00
parent: "[[Computer Data Encoding & Decoding]]"
children:
  - "[[Fixed-Point Numbers]]"
  - "[[Floating-Point Numbers]]"
  - "[[Signed Binary Numbers (Signed Magnitude One's／Two's Complement)]]"
---
###### Computer Number Formats
````excerpt
- is the internal representation of numeric values in digital computer and calculator hardware and software
````
^excerpt

# Format Types

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Fixed-Point Numbers]]",
        "bg": "#F4F5F7"
      },
      "![[Fixed-Point Numbers#^excerpt]]"
    ],
    [
      {
        "content": "[[Floating-Point Numbers]]",
        "bg": "#F4F5F7"
      },
      "![[Floating-Point Numbers#^excerpt]]"
    ],
    [
      {
        "content": "[[Signed Binary Numbers (Signed Magnitude One's／Two's Complement)|Signed Binary Numbers (Signed Magnitude One's/Two's Complement)]]",
        "bg": "#F4F5F7"
      },
      "![[Signed Binary Numbers (Signed Magnitude One's／Two's Complement)#^excerpt]]"
    ],
    [
      {
        "content": "limited-precision decimal",
        "bg": "#F4F5F7"
      },
      "Basically the same as an IEEE 754 binary floating-point, except that the exponent is interpreted as base 10. As a result, there are no unexpected [rounding errors](https://floating-point-gui.de/errors/rounding/). Also, this kind of format is relatively compact and fast, but usually slower than binary formats"
    ],
    [
      {
        "content": "arbitrary-precision decimal",
        "bg": "#F4F5F7"
      },
      "Sometimes called “bignum”, this is similar to a limited-precision type but has the ability to increase the length of the significand (possibly also the exponent) as required. The downside is that there is some basic overhead (memory and speed) to support this flexibility and that the longer the significand gets, the more memory is needed and the slower all calculations become.\n\nIt can be very tempting to say “My calculation is important, so I need as much precision as possible”, but in practice, the actual importance of precision at the 10,000<sup>th</sup> decimal digit quickly pales in comparison with the performance penalty required to support it."
    ],
    [
      {
        "content": "symbolic calculations",
        "bg": "#F4F5F7"
      },
      "The “holy grail” of exact calculations. Achieved by writing a program that actually knows all the rules of math and represents data as <em>symbols</em> rather than imprecise, rounded numbers. For example:\n- 1/3 is actually a fraction of “one divided by three”\n- The square root of 2 is really the number that, multiplied by itself, is <em>exactly</em> 2\n- Even [[Transcendental Numbers|transcendental numbers]] like <strong>𝑒</strong> and 𝜋 are known, together with their properties, so that 𝑒<sup>𝑖𝜋</sup> is <em>exactly</em> equal to -1.\n\nHowever, these symbolic math systems are complex, slow, and require significant mathematical knowledge to use. They are invaluable tools for mathematicians, but not appropriate for most everyday programming tasks. And even many mathematicians work on problems that are imprecise, numerical solutions are better because no symbolic solution is known."
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
