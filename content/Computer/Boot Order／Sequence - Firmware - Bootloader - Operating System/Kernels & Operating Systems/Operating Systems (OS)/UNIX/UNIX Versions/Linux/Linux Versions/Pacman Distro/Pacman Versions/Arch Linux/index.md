---
title: "Arch Linux"
created: 2019-03-15T02:34:56.418-05:00
modified: 2026-05-21T13:37:15.575-05:00
parent: "[[Pacman Versions]]"
children: []
---
###### Arch Linux
````excerpt
- is a lightweight and flexible [[Linux]] distribution that tries to Keep It Simple
````
^excerpt

# Installation

> [!expand]- version 1
> Based on: [http://www.cs.columbia.edu/~jae/4118-LAST/arch-setup-2016-1.html](http://www.cs.columbia.edu/~jae/4118-LAST/arch-setup-2016-1.html)
>
> Pick a name for a non-root user and add the user. For example:
> ```
> useradd -m -g users -s /bin/bash archie
> passwd archie
> ```
>
> At this point, you can make the non-root user a “sudoer”. A sudoer can run a command as root by passing it through the sudo command.
> - First, install sudo:
> 	- <code><font style="color: rgb(122,134,154);">pacman -S sudo</font></code>
> - Then, add the following lines (within the stared box) to /etc/sudoers (you can omit the comments of course, and replace archie with your user name):
> 	- <code><font style="color: rgb(102,102,0);">\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</font><font style="color: rgb(102,102,0);">\*</font><font style="color: rgb(136,0,0);">\# The basic structure of a user spec looks like this: \*</font><font style="color: rgb(102,102,0);">\*</font><font style="color: rgb(136,0,0);">\# who where = (as\_whom) how: what \*</font><font style="color: rgb(102,102,0);">\*</font> archie ALL<font style="color: rgb(102,102,0);">=(</font>ALL<font style="color: rgb(102,102,0);">)</font> NOPASSWD<font style="color: rgb(102,102,0);">:</font> ALL <font style="color: rgb(102,102,0);">\*</font><font style="color: rgb(102,102,0);">\*</font><font style="color: rgb(102,0,102);">Package</font> management <font style="color: rgb(102,102,0);">\*</font><font style="color: rgb(102,102,0);">\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*</font></code>
>
> This is also a good time to install some essential packages:
> ```
> pacman -S net-tools pkgfile base-devel
> ```
>
> And perhaps your favorite editors:
> ```
> pacman -S vim emacs
> ```
>
> You can also try running a full system upgrade to see if any of your installed packages have new versions:
> ```
> pacman -Syu
> ```
# Resources
- [https://www.archlinux.org/](https://www.archlinux.org/)
