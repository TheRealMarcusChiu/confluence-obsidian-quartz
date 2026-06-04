---
title: "Color Decompositions／Spaces／Models／Gamuts／Profiles"
created: 2020-07-07T19:40:41.618-05:00
modified: 2021-12-21T19:31:49.870-06:00
parent: "[[Computer Graphics]]"
children:
  - "[[CIE (XYZ Lab Luv) (Commission International de l' éclairage)]]"
  - "[[CMYK (Cyan Magenta Yellow Black)]]"
  - "[[Color Space - Conversions]]"
  - "[[HSL／HSV／HSB (Hue Saturation Lightness／Value／Brightness)]]"
  - "[[RGB (Red Green Blue)]]"
---
# Color Models

```merge-table
{
  "rows": [
    [
      {
        "content": "Color Model",
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
        "content": "[[HSL／HSV／HSB (Hue Saturation Lightness／Value／Brightness)|HSV/HSB/HSL]]",
        "bg": "#F4F5F7"
      },
      "![[HSL／HSV／HSB (Hue Saturation Lightness／Value／Brightness)#^excerpt]]"
    ],
    [
      {
        "content": "[[RGB (Red Green Blue)|RGB]]",
        "bg": "#F4F5F7"
      },
      "![[RGB (Red Green Blue)#^excerpt]]"
    ],
    [
      {
        "content": "[[CMYK (Cyan Magenta Yellow Black)|CMYK]]",
        "bg": "#F4F5F7"
      },
      "![[CMYK (Cyan Magenta Yellow Black)#^excerpt]]"
    ],
    [
      {
        "content": "[[CIE (XYZ Lab Luv) (Commission International de l' éclairage)|CIE (XYZ Lab Luv)]]",
        "bg": "#F4F5F7"
      },
      "![[CIE (XYZ Lab Luv) (Commission International de l' éclairage)#^excerpt]]"
    ]
  ]
}
```
# Space Types

```merge-table
{
  "rows": [
    [
      {
        "content": "Space Type",
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
        "content": "Device-Dependent Spaces",
        "bg": "#F4F5F7"
      },
      "express color relative to some other reference space. These can tell you valuable information about the subset of colors that can be displayed using a particular monitor or printer or can be captured using a particular digital camera or scanner"
    ],
    [
      {
        "content": "Device-Independent Spaces",
        "bg": "#F4F5F7"
      },
      "express color in absolute terms. These often serve as universal reference colors, so they're useful as a backdrop for comparing other devices. Otherwise, these are usually an unseen color space since they're knowingly interacted with during the photo editing process only rarely"
    ],
    [
      {
        "content": "Working Spaces",
        "bg": "#F4F5F7"
      },
      "are used by image editing programs and file formats to constrain the range of colors to a standard palette. Two of the most commonly used working spaces in digital photography are Adobe RGB 1998 and sRGB IEC61966-2.1. For an in-depth comparison for each of these color spaces, please see [sRGB vs. Adobe RGB 1998](https://www.cambridgeincolour.com/tutorials/sRGB-AdobeRGB1998.htm)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# Color Space - Conversions
- [[Color Space - Conversions]]
