---
title: "／usr directory"
created: 2019-12-31T15:33:22.013-06:00
modified: 2020-06-25T22:12:30.562-05:00
parent: "[[UNIX - Filesystem Standard (FSSTND) & Filesystem Hierarchy Structure (FHS)]]"
children: []
---
###### /usr directory
- stands for Unix System Resources
- contains system utilities
- contents are usually static

### Subdirectories

```merge-table
{
  "rows": [
    [
      {
        "content": "directory",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "/usr/include",
      "- contains standard C/C++ header files (.h)\n- this should actually be below /usr/lib for consistency, but the tradition is overwhelmingly in support for this name"
    ],
    [
      "/usr/lib",
      "- contains precompiled libraries for use by everyone on the system. for instance, in /usr/lib you can find the file libstdc++.so.6, which is needed for C++ programs. (similar to the folder containing all the .dll files in Windows)\n- contains unchanging data files for programs and subsystems, including some site-wide configuration files. The name lib comes from library; originally libraries of programming subroutines were stored in /usr/lib\n- contains libraries for the binaries in <code>/usr/bin</code> and <code>/usr/sbin</code>"
    ],
    [
      "/usr/lib\\<qual\\>",
      "- alternative format libraries, <em>e.g.</em> <code>/usr/lib32</code> for 32-bit libraries on a 64-bit machine (optional)"
    ],
    [
      "/usr/share/man\n/usr/share/info\n/usr/share/doc",
      "- /usr/share/man - manual pages\n- /usr/share/info - GNU info documents\n- /usr/share/doc - miscellaneous other documents"
    ],
    [
      "/usr/bin",
      "- contains executables for common UNIX utilities\n- contains non-essential command binaries (not needed in single user mode); for all users"
    ],
    [
      "/usr/local",
      "- The place for locally installed software and other files. Distributions may not install anything in here. It is reserved solely for the use of the local administrator. This way he can be absolutely certain that no updates or upgrades to his distribution will overwrite any extra software he has installed locally\n- <em>tertiary-hierarchy</em> for local data, specific to this host\n- typically has further subdirectories (<em>e.g.</em>, <code>bin</code>, <code>lib</code>, <code>share)</code>"
    ],
    [
      "/usr/sbin",
      "- non-essential system binaries, <em>e.g.</em>, [daemons](https://en.wikipedia.org/wiki/Daemon_(computer_software)) for various [network-services](https://en.wikipedia.org/wiki/Network-services)"
    ],
    [
      "/usr/share",
      "- architecture-independent (shared) data"
    ],
    [
      "/usr/src",
      "- [Source code](https://en.wikipedia.org/wiki/Source_code), <em>e.g.</em>, the kernel source code with its header files"
    ],
    [
      "/usr/X11R6",
      "- [[(X - X11 - X Window System) Core Protocol|X Window System]], Version 11, Release 6 (up to FHS-2.3, optional)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
