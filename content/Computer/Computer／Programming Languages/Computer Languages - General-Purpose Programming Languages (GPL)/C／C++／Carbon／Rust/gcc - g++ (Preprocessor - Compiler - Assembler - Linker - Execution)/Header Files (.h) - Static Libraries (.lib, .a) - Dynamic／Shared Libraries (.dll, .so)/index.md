---
title: "Header Files (.h) - Static Libraries (.lib, .a) - Dynamic／Shared Libraries (.dll, .so)"
created: 2019-12-25T21:50:12.809-06:00
modified: 2019-12-25T23:33:38.766-06:00
parent: "[[gcc - g++ (Preprocessor - Compiler - Assembler - Linker - Execution)]]"
children: []
---
read: [[gcc - g++ (Preprocessor - Compiler - Assembler - Linker - Execution)]]

```merge-table
{
  "rows": [
    [
      {
        "content": "Thing",
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
      "<strong>header file</strong>",
      "- a collection of C/C++ code"
    ],
    [
      "<strong>library</strong>",
      "- a collection of object files (i.e. compiled C/C++ code) that can be linked into your programs via the linker\n- you can list the contents of a library via \"<code>nm <em>filename</em></code>\""
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
### Static Library vs. Shared Library

```merge-table
{
  "rows": [
    [
      {
        "content": "External Libraries",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Extension",
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
      "<strong>static library</strong>",
      "- <code>.a</code> (archive file) in Unixes\n- <code>.lib</code> (library) in Windows",
      "When your program is linked against a static library, the machine code of external functions used in your program is copied into the executable. A static library can be created via the <em>archive</em> program \"<code>ar.exe</code>\""
    ],
    [
      "<strong>shared library</strong>",
      "- <code>.so</code> (shared objects) in Unixes\n- <code>.dll</code> (dynamic link library) in Windows",
      "When your program is linked against a shared library, only a small table is created in the executable. Before the executable starts running, the operating system loads the machine code needed for the external functions - a process known as <em>dynamic linking</em>. Dynamic linking makes executable files smaller and saves disk space, because one copy of a library can be shared between multiple programs. Furthermore, most operating systems allows one copy of a shared library in memory to be used by all running programs, thus, saving memory. The shared library codes can be upgraded without the need to recompile your program."
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# <strong>Searching for Header Files and Object-Files/Libraries (-I, -L and -l)</strong>

when building a C/C++ program:
- <em>preprocessor</em> needs to know where the <em>header files</em> are to preprocess the source codes
- <em>linker</em> needs to know where the <em>libraries</em> are to resolve the source code's external references to other object files

The <em>preprocessor</em> and <em>linker</em> will not find the headers & libraries unless you set the appropriate options (e.g. -I, -L, -l) specifying where things are
### Header Files (-I)

For each of the headers (e.g. <code><font style="color: rgb(128,0,0);">\#include "glew.h"</font></code>) used in the C/C++ program, the <em>preprocessor</em> searches through the <em>include-paths</em> for files that match the headers.

The <em>include-paths</em> are specified:
- <span style="white-space: pre-wrap"><code>-I option - (e.g. g++ main.cpp -I/path/to/directory/containing/header-file)</code></span>
- environment variable <code>CPATH</code>

Since the header's filename is known (e.g., <code>iostream.h</code>, <code>stdio.h</code>), the compiler only needs the directories
### Object-Files/Libraries (-L, -l)

The <em>linker</em> searches the <em>library-paths</em> for libraries needed to link the program into an executable.

The library-path is specified:
- <span style="white-space: pre-wrap"><code>-L option - (e.g. g++ main.cpp -L/path/to/directory/containing/object-files)</code></span>
- environment variable <code>LIBRARY\_PATH</code>

In addition, you also have to specify the library name:
- In Unixs, the library <code>lib<em>xxx</em>.a</code> is specified via <code>-l<em>xxx</em></code> option (lowercase letter <code>'l'</code>, without the prefix "<code>lib</code>" and <code>".a</code>" extension)
- In Windows, provide the full name such as <code>-lxxx.lib</code>.

<font style="color: rgb(255,0,0);">The linker needs to know both the directories as well as the library names. Hence, two options (-L, -l) need to be specified</font>
### GCC Environment Variables

GCC uses the following environment variables:
- <code>PATH</code>: for searching the executables and run-time shared libraries (<code>.dll</code>, <code>.so</code>).
- <code>CPATH</code>: for searching the <em>include-paths</em> for headers. It is searched after paths specified in <code>-I\<<em>dir</em>\></code> options
	- <code>C\_INCLUDE\_PATH</code> & <code>CPLUS\_INCLUDE\_PATH</code> can be used to specify C and C++ headers if the particular language was indicated in pre-processing.
- <code>LIBRARY\_PATH</code>: for searching <em>library-paths</em> for link libraries. It is searched after paths specified in -<code>L\<<em>dir</em>\></code> options.

# <strong>Default Include-Paths, Library-Paths and Libraries</strong>
list default include-paths
```
cpp -v
......
#include "..." search starts here:
#include <...> search starts here:
 /usr/lib/gcc/x86_64-pc-cygwin/6.4.0/include
 /usr/include
 /usr/lib/gcc/x86_64-pc-cygwin/6.4.0/../../../../lib/../include/w32api
```

list default library-paths
```bash
ld --verbose | grep SEARCH_DIR | tr -s ' ;' \\012
```

<strong>gcc</strong> passes a few extra -L paths to the linker, which you can list with the following command
```bash
gcc -print-search-dirs | sed '/^lib/b 1;d;:1;s,/[^/.][^/]*/\.\./,/,;t 1;s,:[^=]*=,:;,;s,;,;  ,g' | tr \; \\012
```
