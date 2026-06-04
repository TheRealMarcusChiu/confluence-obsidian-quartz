---
title: "ip binary"
created: 2019-03-16T23:46:04.045-05:00
modified: 2019-03-16T23:46:59.123-05:00
parent: "[[Computer Network／Networking Tools]]"
children: []
---
internet protocol - show/manipulate routing, devices, policy routing and tunnels
# Installation

> [!expand]- homebrew
> <strong>1. install ip (iproute suite)</strong>
> <span style="white-space: pre-wrap"><code>  brew install iproute</code></span>
>
> <strong>2. verify ip was installed</strong>
> <span style="white-space: pre-wrap"><code>  which ip </code><br><code>  man ip</code></span>
# Commands

> [!expand]- Click here to expand...
> The central utility in the iproute suite is called simply ip. Its basic syntax is as follows:
>
> \~\> ip object command
>
> Where object can be only one of the following (frequent objects are shown – refer to man ip for complete list):
> - link : network device.
> - addr : protocol (IP or IPv6) address on a device.
> - route : routing table entry.
> - rule : rule in routing policy database.
