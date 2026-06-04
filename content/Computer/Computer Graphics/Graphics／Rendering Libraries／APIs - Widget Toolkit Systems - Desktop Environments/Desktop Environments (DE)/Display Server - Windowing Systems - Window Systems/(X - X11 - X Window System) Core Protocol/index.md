---
title: "(X - X11 - X Window System) Core Protocol"
created: 2019-12-30T20:28:58.559-06:00
modified: 2024-06-29T11:50:39.794-05:00
parent: "[[Display Server - Windowing Systems - Window Systems]]"
children:
  - "[[MacX]]"
  - "[[X.Org]]"
  - "[[XFree86]]"
  - "[[XQuartz]]"
---
###### (X - X11 - X Window System) Core Protocol
````excerpt
- <strong>X Window System</strong> (<strong>X11</strong>, or simply <strong>X</strong>)
- X11 is a [[Display Server - Windowing Systems - Window Systems|windowing-system]] for [[Bitmap (BMP)|bitmap]] displays, common on [[UNIX]]-like[[Operating Systems (OS)|operating systems]]
- X11 is a "major version" of the X protocol, which has evolved since inception
- X11 is the most recent protocol and the most common
- X11 is based on a client–server model:
	- a single server controls the input/output hardware, such as the screen, the keyboard, and the mouse
	- all application programs act as clients, interacting with the user and with the other clients via the server
````
^excerpt

# X Protocol - Server Client Model

```merge-table
{
  "rows": [
    [
      {
        "content": "Server Client",
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
        "content": "X Server",
        "bg": "#F4F5F7"
      },
      "is a server and can be compared to a \"web server\" in that it is a process that listens for incoming connections that speak a particular protocol (the X protocol) and it issues answers. The connections come from X clients, which may be on the local host or on a remote host accessed over a network.\n- X requires input and it has a shared responsibility to manage that with the [[Kernel／Kernels (OS)|Kernel]]. Historically, X did a lot of hardware management itself. In modern times, on the Linux platform, X is gradually becoming \"smaller\" and delegating this responsibility to the [[Linux Kernel|Linux kernel]]. The advantages of this are: smaller X codebase; fewer \"crossed-wires\" with the kernel and X both trying to manage the same stuff. (an example of this is the Linux event interface, where events from mice etc. are interpreted and translated by the kernel and its drivers into the standard interface at <code>/dev/input/event\\*</code>, which is consumed by the X server). Note that on other platforms ([[Berkeley Software Distribution (BSD)|BSD]], [[Solaris (Oracle Solaris)]]) X is still quite monolithic"
    ],
    [
      {
        "content": "X Client",
        "bg": "#F4F5F7"
      },
      "is a \"window manager\" that manages windows. It typically has the responsibility to:\n- decorate windows with bevels/borders\n- drop shadows\n- a menu bar containing buttons, etc\n- handle the logic of window placement\n- support windows being dragged, resized or re-arranged, etc"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# X Protocol - Implementations

Implementations of a X server, X libraries and a collection of clients, all talking X11:
- <strong>[[XFree86]]</strong> - largely defunct (deprecated \~2009?)
- <strong>[[X.Org|X.org]] </strong>- forked off XFree86 during 2003. fundamental technology underlying both the modern [[GNOME Desktop (GNU Network Object Model Environment)|GNOME]] and [[KDE Plasma - KDE Desktop (K Desktop Environment)|KDE]] desktops and older [[CDE Desktop (Common Desktop Environment)|CDE]] desktop environment
- <strong>[[MacX]]</strong> - official X11 implementation for Mac OS X (support removed \~2009)
- <strong>[[XQuartz]]</strong> - open source community effort to further develop and support X11 on [[Macintosh OSs (Mac OS X) - macOS|Mac OS X]]
