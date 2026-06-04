---
title: "Character Encoding (Character Set - Encoding Scheme)"
created: 2019-03-16T02:24:28.015-05:00
modified: 2022-12-28T21:42:24.572-06:00
parent: "[[Computer Data Encoding & Decoding]]"
children:
  - "[[ASCII]]"
  - "[[ISO 8859-1 - Latin1]]"
  - "[[Unicode]]"
  - "[[Unicode Transformation Format (UTF-8)]]"
---
- <strong>character set</strong> is a binding where every character is assigned a number (<font style="color: rgb(51,153,102);"><em>code units/points</em></font><em>)</em>
	- <em>similar to the [[Numeral／Numerical／Number Systems／Representations／Notations|numeral system]], but different</em>
- <strong>encoding scheme</strong> defines how a number (<font style="color: rgb(51,153,102);"><em>code units/points</em></font><em>)</em> is encoded into a sequence of bytes or binary
- <strong>character</strong><strong>encoding</strong> is the combination of <em>character set</em> and <em>encoding scheme</em> (i.e. the mapping of characters to a sequence of bytes or binary, and vice versa)

![[Character Encoding (Character Set - Encoding Scheme)/character-encoding_character-set_encoding-scheme.jpg|700]]
# Character Sets and/or Encoding Schemes

```merge-table
{
  "rows": [
    [
      {
        "content": "Common Standards",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Character Set",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Encoding Scheme",
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
        "content": "[[ASCII]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\"> ✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\"><strong>✗</strong></font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "mapping of characters to numbers"
    ],
    [
      {
        "content": "[[ISO 8859-1 - Latin1]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\"> ✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\"> ✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "mapping of characters to a single byte (a superset of [[ASCII]])"
    ],
    [
      {
        "content": "[[Unicode]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\"> ✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\"><strong>✗</strong></font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      "mapping of characters to numbers (a superset of [[ASCII]])"
    ],
    [
      {
        "content": "[[Unicode Transformation Format (UTF-8)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\"><strong>✗</strong></font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(51,153,102);\"> ✔</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      "mapping of numbers to one or more bytes"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Other Encoding Schemes

```merge-table
{
  "rows": [
    [
      {
        "content": "Other Encoding Schemes",
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
        "content": "[HTML Encoding](https://skorks.com/2009/08/different-types-of-encoding-schemes-a-primer/#html-encoding)",
        "bg": "#f4f5f7"
      },
      "HTML Encoding is mainly used to represent various characters so that they can be safely used within an [[HyperText Markup Language (HTML)|HTML]] document"
    ],
    [
      {
        "content": "[URL Encoding](https://skorks.com/2009/08/different-types-of-encoding-schemes-a-primer/#url-encoding)",
        "bg": "#f4f5f7"
      },
      "When dealing with [[Uniform Resource Locator (URL) - Uniform Resource Identifier (URI) - Uniform Resource Name (URN) - Path／Query／Anchor|URLs]], they can only contain printable [[ASCII]] characters (these are characters with ASCII codes between decimal 32 and 126, i.e. hex 0x20 – 0x7E). However, some characters within this range may have special meanings within the URL or within the [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]] protocol. URL encoding comes into play when we have either some characters with special meaning in the URL or want to have characters outside the printable range. To URL encode a character we simply prefix its hex value with a %"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Resources
- [The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
