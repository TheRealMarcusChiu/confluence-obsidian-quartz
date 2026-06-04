---
title: "OpenGL - Installation"
created: 2020-07-05T10:54:22.059-05:00
modified: 2026-05-14T01:28:27.976-05:00
parent: "[[OpenGL (Open Graphics Library)]]"
children: []
---
[https://www.prinmath.com/csci5229/misc/install.html](https://www.prinmath.com/csci5229/misc/install.html)
### MacOS X 10.4

> [!expand]- Click here to expand...
> In Mac OS X 10.4 (and most likely all versions of OS X) [[OpenGL (Open Graphics Library)|OpenGL]] and [[GLUT (OpenGL Utility Toolkit)|GLUT]] are installed with the Xcode/developer tools that came on your Mac OS X installation disc(s).
>
> To use GLUT and OpenGL from within Xcode:
> - Open Xcode located in "/Developer/Applications/"
> - Choose "New Project" from the file menu
> - Choose "Command Line Tool" under the Application template for Mac OS X
> - Choose type "C++"
> - Enter your desired project name and directory and click create
> - In the "Linked Frameworks and Libraries" area click the "+" button, and select "OpenGL.framework"
> - Repeat for "GLUT.framework"
>
> When <code><font style="color: rgb(122,134,154);">\#including</font></code> OpenGL & GLUT header files (but not the regular ones like iostream) within Xcode, make sure to do so like this:
> ```
> #include <OpenGL/gl.h>
> #include <OpenGl/glu.h>
> #include <GLUT/glut.h>
> ```
>
> in other words:
> ```
> #include <name_of_framework/name_of_header_file.h>
> ```
