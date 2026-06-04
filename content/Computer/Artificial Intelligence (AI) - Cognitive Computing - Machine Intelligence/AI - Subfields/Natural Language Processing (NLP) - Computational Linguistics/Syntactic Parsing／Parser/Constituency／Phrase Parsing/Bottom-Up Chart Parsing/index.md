---
title: "Bottom-Up Chart Parsing"
created: 2020-11-07T17:41:43.891-06:00
modified: 2020-11-07T18:25:01.273-06:00
parent: "[[Constituency／Phrase Parsing]]"
children: []
---
###### Bottom-Up Chart Parsing
- a [[Syntactic Parsing／Parser|parser]] for [[Constituency／Phrase Parsing|constituency/phrase-based parsing]]

### Bottom-Up Chart Parsing - Notation

‘•’ means ‘complete to here’

```merge-table
{
  "rows": [
    [
      {
        "content": "<font style=\"color: rgb(0,176,240);\">A </font>→ <font style=\"color: rgb(0,176,80);\">X </font><font style=\"color: rgb(255,192,0);\">Y</font>•<font style=\"color: rgb(255,0,0);\">Z </font>(active-arc)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "in parsing an <font style=\"color: rgb(0,176,240);\">A</font>, we’ve so far seen an <font style=\"color: rgb(0,176,80);\">X </font>and a <font style=\"color: rgb(255,192,0);\">Y</font>, and our <font style=\"color: rgb(0,176,240);\">A </font>will be complete once we’ve seen a <font style=\"color: rgb(255,0,0);\">Z</font>"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,176,240);\">A </font>→ <font style=\"color: rgb(0,176,80);\">X </font><font style=\"color: rgb(255,192,0);\">Y </font><font style=\"color: rgb(255,0,0);\">Z</font>• (inactive-arc)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "we have seen an <font style=\"color: rgb(0,176,80);\">X</font>, a <font style=\"color: rgb(255,192,0);\">Y</font>, and a <font style=\"color: rgb(255,0,0);\">Z</font>, and hence completed the parse of an <font style=\"color: rgb(0,176,240);\">A</font>"
    ],
    [
      {
        "content": "<font style=\"color: rgb(0,176,240);\">A </font>→ •<font style=\"color: rgb(0,176,80);\">X </font><font style=\"color: rgb(255,192,0);\">Y </font><font style=\"color: rgb(255,0,0);\">Z </font>(active-arc)",
        "header": true,
        "bg": "#F4F5F7"
      },
      "in parsing an <font style=\"color: rgb(0,176,240);\">A</font>, so far we haven’t seen anything"
    ]
  ]
}
```
### Bottom-Up Chart Parsing - Algorithm
Initialize <font style="color: rgb(128,0,0);">agenda</font> with the list of lexical categories (e.g. [[Part of Speech (PoS)|PoS]]) of each word in the input sentence

Until <font style="color: rgb(128,0,128);">agenda </font>is empty, repeat:
- move next constituent 𝐶from <font style="color: rgb(128,0,128);">agenda</font> to <font style="color: rgb(255,0,255);">completed-arcs section</font> of the chart
- find <font style="color: rgb(0,255,0);">grammar rules</font> whose RHS starts with 𝐶and add corresponding active-arcs to the <font style="color: rgb(255,0,255);">active-arcs section</font> of the chart
- find active-arcs from the <font style="color: rgb(255,0,255);">active section</font> that continue with 𝐶and extend them; add the new active-arcs to the <font style="color: rgb(255,0,255);">active-arcs section</font> of the chart
- find active-arcs from the <font style="color: rgb(255,0,255);">active section</font> that have been completed; and add their LHS as a new constituent 𝐶 to the <font style="color: rgb(128,0,128);">agenda</font>

### Bottom-Up Chart Parsing - Example
> [!tabs]
>
> === 1
>
> ![[Bottom-Up Chart Parsing/chart-parsing-example-01.jpg|600]]
>
> === 2
>
> ![[Bottom-Up Chart Parsing/chart-parsing-example-02.jpg|600]]
>
> === 3
>
> ![[Bottom-Up Chart Parsing/chart-parsing-example-03.jpg|600]]
>
> === 4
>
> ![[Bottom-Up Chart Parsing/chart-parsing-example-04.jpg|600]]
>
> === 5
>
> ![[Bottom-Up Chart Parsing/chart-parsing-example-05.jpg|600]]
>
> === 6
>
> ![[Bottom-Up Chart Parsing/chart-parsing-example-06.jpg|600]]
>
> === 7
>
> ![[Bottom-Up Chart Parsing/chart-parsing-example-07.jpg|600]]
>
> === 8
>
> ![[Bottom-Up Chart Parsing/chart-parsing-example-08.jpg|600]]
>
> === 9
>
> ![[Bottom-Up Chart Parsing/chart-parsing-example-09.jpg|600]]
