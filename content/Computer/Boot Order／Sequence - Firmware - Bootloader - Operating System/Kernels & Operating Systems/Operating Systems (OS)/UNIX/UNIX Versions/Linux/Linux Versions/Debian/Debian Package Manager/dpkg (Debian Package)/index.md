---
title: "dpkg (Debian Package)"
created: 2019-03-15T03:42:42.170-05:00
modified: 2026-05-21T18:03:00.701-05:00
parent: "[[Debian Package Manager]]"
children: []
---
###### dpkg (Debian Package)
````excerpt
- is a low-level tool compared to the [[apt-get - apt-cache|apt-get]] command
````
^excerpt

# Commands

[https://www.tecmint.com/dpkg-command-examples/](https://www.tecmint.com/dpkg-command-examples/)

<strong>install a .deb package</strong>
<span style="white-space: pre-wrap"><code>  dpkg -i some.deb</code></span>

<strong>list all packages</strong>
<span style="white-space: pre-wrap"><code>  dpkg -l</code></span>

<strong>remove a package</strong>
<span style="white-space: pre-wrap"><code>  dpkg -r something</code><br><code>  dpkg --remove something</code></span>

<strong>view the Content of a Package</strong>
<span style="white-space: pre-wrap"><code>  dpkg -c something</code></span>

view location of packages installed
<span style="white-space: pre-wrap"><code>  dpkg -L something</code></span>

<strong>check package status</strong>
<span style="white-space: pre-wrap"><code>  dpkg -s something</code></span>
