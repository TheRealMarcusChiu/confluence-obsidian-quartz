---
title: "Graphics／Rendering Libraries／APIs"
created: 2020-07-05T11:44:50.402-05:00
modified: 2024-06-30T10:57:26.765-05:00
parent: "[[Graphics／Rendering Libraries／APIs - Widget Toolkit Systems - Desktop Environments]]"
children:
  - "[[Anti-Grain Geometry (AGG)]]"
  - "[[Cairo]]"
  - "[[Direct3D]]"
  - "[[Metal]]"
  - "[[OpenGL Family]]"
  - "[[OpenGL vs Vulkan]]"
  - "[[Pixman]]"
  - "[[Vulkan]]"
---
# Graphics/Rendering Libraries/APIs
- see [https://stackoverflow.com/questions/40543176/does-opengl-use-xlib-to-draw-windows-and-render-things-or-is-it-the-other-way-a](https://stackoverflow.com/questions/40543176/does-opengl-use-xlib-to-draw-windows-and-render-things-or-is-it-the-other-way-a)

The three rendering libraries on Linux (not [[(X - X11 - X Window System) Core Protocol|X11]] based) and can be used "stand-alone" are:
- <strong>Cairo</strong> - used mostly by GDK/GTK+ based programs
- <strong>Anti-Grain-Geometry (AGG)</strong> - none toolkit's primary graphics kit in particular, but used by a number of programs and libraries (most notably plotting, like matplotlib)
- <strong>pixman</strong> - used in the X11 server (but you can use it in your program, too)

When it comes to AGG vs. Cairo the biggest selling point for Cairo is, that it got a pure C binding. Unfortunately Cairo is not a very fast renderer (it made huge progress in the past 10 years). But it's eating the dust of AGG, which is much faster and (ironically) also produces better quality; unfortunately AGG is a C++ library, so to effectively use it you're bound to use C++, which is a downside. Also the principal developer of AGG sadly passed away a few years ago, which stalled development for some time, but it's been picked up by the community again

One must also not forget the "raster" graphics engine in Qt, but that can be used only within Qt within QPainter (so stand-alone if your program uses Qt, but can't be used without Qt).
# Graphics Libraries - Types
- OpenGL is to Vulkan
- Direct3D 11 is to Direct3D 12
```merge-table
{
  "rows": [
    [
      {
        "content": "Library/API",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Platform",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[Cairo]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "ALL",
        "align": "center"
      },
      "![[Cairo#^excerpt]]"
    ],
    [
      {
        "content": "[[Anti-Grain Geometry (AGG)]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "ALL",
        "align": "center"
      },
      "![[Anti-Grain Geometry (AGG)#^excerpt]]"
    ],
    [
      {
        "content": "[[Pixman]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "ALL",
        "align": "center"
      },
      "![[Pixman#^excerpt]]"
    ],
    [
      {
        "content": "[[OpenGL Family|OpenGL]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "ALL",
        "align": "center"
      },
      "![[OpenGL Family#^excerpt]]"
    ],
    [
      {
        "content": "[[Vulkan]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "ALL",
        "align": "center"
      },
      "![[Vulkan#^excerpt]]"
    ],
    [
      {
        "content": "[[Direct3D]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "Windows",
        "align": "center"
      },
      "![[Direct3D#^excerpt]]"
    ],
    [
      {
        "content": "[[Metal]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "MacOS\niOS",
        "align": "center"
      },
      "![[Metal#^excerpt]]"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
