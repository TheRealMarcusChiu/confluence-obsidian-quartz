---
title: "Ettercap"
created: 2019-03-16T03:02:57.971-05:00
modified: 2019-03-16T03:03:38.904-05:00
parent: "[[Network／Protocol／Packet Analyzer／Sniffer]]"
children: []
---
[https://ettercap.github.io/ettercap/](https://ettercap.github.io/ettercap/)

Ettercap is a comprehensive suite for man in the middle attacks. It features sniffing of live connections, content filtering on the fly and many other interesting tricks. It supports active and passive dissection of many protocols and includes many features for network and host analysis.
# Installation

> [!expand]- apt-get
> <strong>1. install ettercap</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get install zlib1g zlib1g-dev</code><br><code>  sudo apt-get install build-essential</code><br><code>  sudo apt-get install ettercap</code></span>
>
> <strong>2. for installing ettercap-graphical, use the command</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get install ettercap-graphical</code></span>
>
> <strong>3. for installing ettercap-text only, use the command</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get install ettercap-text-only</code></span>
>
> <strong>4. starting ettercap</strong>
>
> For opening ettercap in graphic mode
> <span style="white-space: pre-wrap"><code>  sudo ettercap -G</code><br><code>  sudo ettercap -G -i {interface}</code></span>
>
> For text mode, use
> <span style="white-space: pre-wrap"><code>  sudo ettercap -T</code><br><code>  sudo ettercap -T -i {interface}</code></span>
