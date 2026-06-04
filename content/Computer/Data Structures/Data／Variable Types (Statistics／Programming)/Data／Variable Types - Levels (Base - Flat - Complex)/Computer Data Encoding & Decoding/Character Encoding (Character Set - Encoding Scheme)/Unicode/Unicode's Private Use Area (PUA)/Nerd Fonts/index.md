---
title: "Nerd Fonts"
created: 2023-04-29T17:08:47.473-05:00
modified: 2023-04-29T17:21:00.001-05:00
parent: "[[Unicode's Private Use Area (PUA)]]"
children: []
---
###### Nerd Fonts ([www.nerdfonts.com](http://www.nerdfonts.com))
````excerpt
- is a project that patches developer-targeted fonts with a high number of glyphs (icons)
- utilizes Unicode's [[Unicode's Private Use Area (PUA)|Private Use Area]] code-points
- is an iconic font aggregator, collection, and patcher
````
^excerpt

# Overview

The following table shows how the glyph sets are relocated to different code points. It is sorted by Nerd Font (target) code point.

For comparison the Private Use Areas are <font style="color: rgb(122,134,154);"><code>e000</code> - <code>f8ff</code></font>, <font style="color: rgb(122,134,154);"><code>f0000</code> - <code>fffff</code></font>, and <font style="color: rgb(122,134,154);"><code>100000</code> - <code>10ffff</code></font>.

```merge-table
{
  "rows": [
    [
      {
        "content": "Glyph Set",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "original if different",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "location in Nerd Font",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "rough area",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "IEC Power Symbols",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>23fb</code> - <code>23fe</code>",
      "<code>23</code>"
    ],
    [
      {
        "content": "Octicons",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>2665</code>",
      "<code>26</code>"
    ],
    [
      {
        "content": "Octicons",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>26a1</code>",
      "<code>26</code>"
    ],
    [
      {
        "content": "IEC Power Symbols",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>2b58</code>",
      "<code>2b</code>"
    ],
    [
      {
        "content": "Pomicons",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>e000</code> - <code>e00a</code>",
      "<code>e0</code>"
    ],
    [
      {
        "content": "Powerline",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>e0a0</code> - <code>e0a2</code>",
      "<code>e0</code>"
    ],
    [
      {
        "content": "Powerline Extra",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>e0a3</code>",
      "<code>e0</code>"
    ],
    [
      {
        "content": "Powerline",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>e0b0</code> - <code>e0b3</code>",
      "<code>e0</code>"
    ],
    [
      {
        "content": "Powerline Extra",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>e0b4</code> - <code>e0c8</code>",
      "<code>e0</code>"
    ],
    [
      {
        "content": "Powerline Extra",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>e0ca</code>",
      "<code>e0</code>"
    ],
    [
      {
        "content": "Powerline Extra",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>e0cc</code> - <code>e0d4</code>",
      "<code>e0</code>"
    ],
    [
      {
        "content": "Font Awesome Extension",
        "bg": "#F4F5F7"
      },
      "<code>e000</code> - <code>e0a9</code>",
      "<code>e200</code> - <code>e2a9</code>",
      "<code>e2</code>"
    ],
    [
      {
        "content": "Weather Icons",
        "bg": "#F4F5F7"
      },
      "<code>f000</code> - <code>f0eb</code>",
      "<code>e300</code> - <code>e3eb</code>",
      "<code>e3</code>"
    ],
    [
      {
        "content": "Seti-UI + Custom",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>e5fa</code> - <code>e631</code>",
      "<code>e6</code>"
    ],
    [
      {
        "content": "Devicons",
        "bg": "#F4F5F7"
      },
      "<code>e600</code> - <code>e6c5</code>",
      "<code>e700</code> - <code>e7c5</code>",
      "<code>e7</code>"
    ],
    [
      {
        "content": "Codicons",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>ea60</code> - <code>ebeb</code>",
      "<code>ea</code> - <code>eb</code>"
    ],
    [
      {
        "content": "Font Awesome",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>f000</code> - <code>f2e0</code>",
      "<code>f0</code> - <code>f2</code>"
    ],
    [
      {
        "content": "Font Logos",
        "bg": "#F4F5F7"
      },
      "-",
      "<code>f300</code> - <code>f32f</code>",
      "<code>f3</code>"
    ],
    [
      {
        "content": "Octicons",
        "bg": "#F4F5F7"
      },
      "<code>f000</code> - <code>f105</code> <code>\\*</code>",
      "<code>f400</code> - <code>f4a8</code>",
      "<code>f4</code>"
    ],
    [
      {
        "content": "Octicons",
        "bg": "#F4F5F7"
      },
      "<code>f27c</code>",
      "<code>f4a9</code>",
      "<code>f4</code>"
    ],
    [
      {
        "content": "Material Design",
        "bg": "#F4F5F7"
      },
      "<code>f001</code> - <code>f847</code>",
      "<code>f500</code> - <code>fd46</code>",
      "<code>f5</code> - <code>fd</code>"
    ]
  ]
}
```

<em><code>\*</code>: Original has unused codepoints in the range that we remove.</em>
