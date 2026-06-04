---
title: "CIE (XYZ Lab Luv) (Commission International de l' éclairage)"
created: 2020-07-07T20:03:12.155-05:00
modified: 2020-07-07T20:53:29.985-05:00
parent: "[[Color Decompositions／Spaces／Models／Gamuts／Profiles]]"
children: []
---
###### CIE (Commission International de l' éclairage)
````excerpt
- device-independent color space
- describe all colors visible to the human eye based upon the average response from a set of people with no vision problems
````
^excerpt

### CIE Common Forms

each contains the same colors, but they distribute colors differently:

```merge-table
{
  "rows": [
    [
      {
        "content": "CIE xyz (1931)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "CIE L a\\*b\\*",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "CIE L u'v' (1976)",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "![[CIE (XYZ Lab Luv) (Commission International de l' éclairage)/CIE-xyz.png|200]]",
        "align": "center"
      },
      {
        "content": "![[CIE (XYZ Lab Luv) (Commission International de l' éclairage)/CIE-Lab.png|230]]",
        "align": "center"
      },
      {
        "content": "![[CIE (XYZ Lab Luv) (Commission International de l' éclairage)/CIE-Luv.png|204]]",
        "align": "center"
      }
    ],
    [
      "is based on a direct graph of the signals from each of the three types of color sensors in the human eye. These are also referred to as the X, Y and Z [tristimulus functions](https://www.cambridgeincolour.com/tutorials/color-perception.htm) (that were created in 1931). However, this representation allocates too much area to the greens — confining most of the apparent color variation to a small area",
      "remaps the visible colors so that they extend equally on two axes — conveniently filling a square. Each axis in the L\\*a\\*b\\* color space also represents an easily recognizable property of color, such as the red-green and blue-yellow shifts (used in the 3D visualization at the start of this tutorial). These traits make L\\*a\\*b\\* a useful color space for editing digital images, such as with Adobe Photoshop, GIMP, etc",
      "was created to correct for the CIE xyz distortion by distributing colors roughly proportional to their perceived color difference. A region that is twice as large in u'v' will therefore also appear to have twice the color diversity — making it far more useful for visualizing and comparing different color spaces"
    ]
  ]
}
```
