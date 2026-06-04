---
title: "OpenGL Family"
created: 2019-12-24T23:21:36.355-06:00
modified: 2024-06-30T10:54:47.080-05:00
parent: "[[Graphics／Rendering Libraries／APIs]]"
children:
  - "[[GLEW (OpenGL Extension Wrangler)]]"
  - "[[GLM (OpenGL Mathematics)]]"
  - "[[OpenGL (Open Graphics Library)]]"
  - "[[OpenGL - Cross Platform]]"
  - "[[OpenGL - Interfaces]]"
---
###### OpenGL Family
````excerpt
- is a cross-language, cross-platform application programming interface for rendering 2D and 3D vector graphics
- managed by [[Khronos Group]]
- is being replaced with [[Vulkan]]
````
^excerpt

# OpenGL - Core

```merge-table
{
  "rows": [
    [
      {
        "content": "[[OpenGL (Open Graphics Library)|OpenGL]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "language specific to operating system (does not handle window creation nor device input/output)"
    ],
    [
      {
        "content": "[[GLEW (OpenGL Extension Wrangler)|GLEW]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "used for run time loading of the OpenGL API"
    ],
    [
      {
        "content": "[[GLM (OpenGL Mathematics)|GLM]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "for matrix/vector math"
    ]
  ]
}
```
# OpenGL - Interfaces

```merge-table
{
  "rows": [
    [
      {
        "content": "[[WGL (Windows Graphics Library) - Wiggle|WGL]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "an API interface between OpenGL and Microsoft's [[Windowing System Interface (WSI)|Windows System Interface]]"
    ],
    [
      {
        "content": "[[CGL (Core OpenGL)|CGL]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "an API interface between OpenGL and Apple's [[Macintosh OSs (Mac OS X) - macOS|OS X]]"
    ],
    [
      {
        "content": "[[GLX (OpenGL Extension to the X Window System)|GLX]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "an API interface between OpenGL and Linux's [[(X - X11 - X Window System) Core Protocol|X Window System]] (aka X Window System extension)"
    ]
  ]
}
```
# OpenGL - Cross-Platform Libraries For Managing Windows & I/O Events

```merge-table
{
  "rows": [
    [
      {
        "content": "[[GLUT (OpenGL Utility Toolkit)|GLUT]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- allows us to create a windows, and receive mouse and keyboard input in a cross-platform way\n- a higher level interface that hides the differences between WGL, CGL, GLX, etc\n- primarily performs system-level I/O\n- library is no longer maintained, and its license did not permit the redistribution of modified versions of the library\n- open-source alternative to GLUT\n\t- FreeGLUT - intended to be a full replacement for GLUT, and has only a few differences"
    ],
    [
      {
        "content": "[[GLFW (Graphics Library FrameWork)|GLFW]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- allows us to create a windows, and receive mouse and keyboard input in a cross-platform way"
    ]
  ]
}
```
# OpenGL - Other
- [[OpenGL vs Vulkan]]
