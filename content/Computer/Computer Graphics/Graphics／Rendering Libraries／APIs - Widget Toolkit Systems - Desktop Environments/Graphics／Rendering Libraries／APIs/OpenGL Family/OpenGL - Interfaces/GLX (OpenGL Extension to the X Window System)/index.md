---
title: "GLX (OpenGL Extension to the X Window System)"
created: 2019-12-30T20:03:54.167-06:00
modified: 2024-06-29T11:47:02.170-05:00
parent: "[[OpenGL - Interfaces]]"
children: []
---
###### GLX (OpenGL Extension to the X Window System)
````excerpt
- is an extension to the[[(X - X11 - X Window System) Core Protocol|X Window System core protocol]] providing an interface between [[OpenGL (Open Graphics Library)|OpenGL]] and the [[(X - X11 - X Window System) Core Protocol|X Window System]] as well as extensions to OpenGL itself
- it enables programs wishing to use OpenGL to do so within a window provided by the X Window System
- GLX has a dependency on [[Xlib]] (which is, why you can't fully ditch Xlib in favor of [[Xcb]] if you want to GLX)
````
^excerpt
