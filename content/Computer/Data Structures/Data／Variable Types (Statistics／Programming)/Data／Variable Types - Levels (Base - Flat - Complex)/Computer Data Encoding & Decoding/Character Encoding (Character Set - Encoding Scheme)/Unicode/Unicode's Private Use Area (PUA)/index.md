---
title: "Unicode's Private Use Area (PUA)"
created: 2023-04-29T17:08:02.201-05:00
modified: 2023-04-29T17:16:09.505-05:00
parent: "[[Unicode]]"
children:
  - "[[Nerd Fonts]]"
---
###### Private Use Area (PUA)
````excerpt
- is a range of code points that, by definition, will not be assigned characters by the Unicode Consortium
- Three private use areas are defined:
	- one in the Basic Multilingual Plane (U+E000–U+F8FF)
	- plane 15 (U+F0000–U+FFFFD)
	- plane 16 (U+100000–U+10FFFD)
````
^excerpt

# PUA - Overview

```merge-table
{
  "rows": [
    [
      {
        "content": "Range",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Plane",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Block name",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Number of code points",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Note",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "U+E000 - U+F8FF",
      "[BMP (0)](https://en.wikipedia.org/wiki/Plane_(Unicode)#Basic_Multilingual_Plane)",
      "Private Use Area",
      "6,400",
      ""
    ],
    [
      "U+F0000 - U+FFFFD",
      "[PUP (15)](https://en.wikipedia.org/wiki/Plane_15_(Unicode))",
      "[Supplementary Private Use Area-A](https://en.wikipedia.org/wiki/Supplementary_Private_Use_Area-A)",
      "65,534",
      {
        "content": "[UTF-16](https://en.wikipedia.org/wiki/UTF-16) encodes these characters using codepoints from the block High Private Use Surrogates (U+DB80..U+DBFF) in the BMP.",
        "rowspan": 2
      }
    ],
    [
      "U+100000 - U+10FFFD",
      "[PUP (16)](https://en.wikipedia.org/wiki/Plane_16_(Unicode))",
      "[Supplementary Private Use Area-B](https://en.wikipedia.org/wiki/Supplementary_Private_Use_Area-B)",
      "65,534"
    ]
  ],
  "tableStyle": "text-align: left;width: 100.0%;"
}
```
# PUA - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
