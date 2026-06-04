---
title: "Power／Exponential Function - Logistic Function"
created: 2021-09-13T05:29:33.110-05:00
modified: 2023-08-24T16:37:37.864-05:00
parent: "[[Single-Variable／Univariate Functions]]"
children:
  - "[[Logistic Function - Sigmoid Function (Standard Logistic Function)]]"
  - "[[Power／Exponential Function]]"
---
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Power/Exponential vs Logistic

```merge-table
{
  "rows": [
    [
      {
        "content": "Power/Exponential Function",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Logistic Function",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      "In <strong>exponential growth</strong>, a population's <em>per capita</em> (per individual) growth rate stays the same regardless of population size, making the population grow faster and faster as it gets larger",
      "In <strong>logistic growth</strong>, a population's <em>per capita</em> growth rate gets smaller and smaller as population size approaches a maximum imposed by limited resources in the environment, known as the <strong>carrying capacity</strong> (𝐾)"
    ],
    [
      {
        "content": "![[Power／Exponential Function - Logistic Function/exponential-growth-vs-logistic-growth.png]]\n\n𝑟 - the per capita rate of increase\n𝑟<sub>𝑚𝑎𝑥</sub>- the maximum per capita rate of increase",
        "align": "center",
        "colspan": 2
      },
      null
    ],
    [
      "𝑟 = 𝑟<sub>𝑚𝑎𝑥</sub>\n- 𝑑𝑁/𝑑𝑇 = 𝑟𝑁\n- 𝑑𝑁/𝑑𝑇 = 𝑟<sub>𝑚𝑎𝑥</sub>𝑁",
      "𝑟 = 𝑟<sub>𝑚𝑎𝑥</sub> ((𝐾-𝑁)/𝐾)\n- 𝑑𝑁/𝑑𝑇 = 𝑟𝑁\n- 𝑑𝑁/𝑑𝑇 = 𝑟<sub>𝑚𝑎𝑥</sub> ((𝐾-𝑁)/𝐾) 𝑁"
    ],
    [
      "- we get exponential growth when 𝑟 is positive and constant\n- if 𝑟=1 or 𝑟<sub>𝑚𝑎𝑥</sub>=1 then 𝑁 = 𝑓(𝑡) = 𝑒<sup>𝑡</sup><font style=\"color: rgb(122,134,154);\">\\# see </font>[[number e (Euler's number)]]",
      "- 𝐾 - carrying capacity\n- acts like exponential growth when 𝑁 is small\n- growth stops increasing when 𝑁 = 𝐾/2\n- stabilizes when 𝑁 reaches near 𝐾"
    ],
    [
      "produces J-curve",
      "produces S-curve"
    ]
  ],
  "tableStyle": "width: 76.5858%;"
}
```
