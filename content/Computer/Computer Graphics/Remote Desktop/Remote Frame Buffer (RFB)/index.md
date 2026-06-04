---
title: "Remote Frame Buffer (RFB)"
created: 2025-07-14T13:42:55.099-05:00
modified: 2025-07-14T13:44:38.686-05:00
parent: "[[Remote Desktop]]"
children: []
---
###### Remote Frame Buffer (RFB)
````excerpt
- is an open simple protocol for remote access to graphical user interfaces
- because it works at the framebuffer level it is applicable to all windowing systems and applications, including Microsoft [[Windows]], [[Macintosh OSs (Mac OS X) - macOS|macOS]], the [[(X - X11 - X Window System) Core Protocol|X Window System]] and [[Wayland]]
- is the protocol used in [[Virtual Network Computing  (VNC)|Virtual Network Computing (VNC)]] and its derivatives
````
^excerpt

# Description

By default, a viewer/client uses TCP port 5900 to connect to a server (or 5800 for browser access), but can also be set to use any other port. Alternatively, a server can connect to a viewer in "listening mode" (by default on port 5500). One advantage of listening mode is that the server site does not have to configure its firewall/NAT to allow access on the specified ports; the burden is on the viewer, which is useful if the server site has no computer expertise, while the viewer user would be expected to be more knowledgeable.

Although RFB started as a relatively simple protocol, it has been enhanced with additional features (such as file transfers) and more sophisticated compression and security techniques as it has developed. To maintain seamless cross-compatibility between the many different VNC client and server implementations, the clients and servers negotiate a connection using the best RFB version, and the most appropriate compression and security options that they can both support.
