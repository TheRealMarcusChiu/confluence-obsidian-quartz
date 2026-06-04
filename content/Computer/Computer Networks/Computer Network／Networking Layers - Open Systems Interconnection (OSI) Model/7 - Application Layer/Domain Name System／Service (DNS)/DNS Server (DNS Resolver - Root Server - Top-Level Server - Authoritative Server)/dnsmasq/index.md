---
title: "dnsmasq"
created: 2019-03-16T22:57:49.796-05:00
modified: 2022-07-22T20:01:55.015-05:00
parent: "[[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)]]"
children: []
---
###### dnsmasq
- is a lightweight, easy to configure DNS forwarder, designed to provide DNS (and optionally DHCP and TFTP) services to a small-scale network
- it can serve the names of local machines which are not in the global DNS

# Features
- [[Dynamic Host Configuration Protocol (DHCP)|DHCP]]
- [[Domain Name System／Service (DNS)|DNS]] and DNS caching
- [[Trivial File Transfer Protocol (TFTP)]]

# Installation

> [!expand]- homebrew
> <strong>1. install dnsmasq</strong>
> <span style="white-space: pre-wrap"><code>  brew install dnsmasq</code></span>
>
> <strong>2. verify dnsmasq was installed</strong>
> <span style="white-space: pre-wrap"><code>  which dnsmasq</code></span>
>
> <strong>3. To configure dnsmasq, copy the example configuration to /usr/local/etc/dnsmasq.conf and edit to taste</strong>
> <span style="white-space: pre-wrap"><code>  cp /usr/local/opt/dnsmasq/dnsmasq.conf.example /usr/local/etc/dnsmasq.conf</code></span>
>
> <strong>4. To have launchd start dnsmasq now and restart at startup</strong>
> <span style="white-space: pre-wrap"><code>  sudo brew services start dnsmasq</code></span>

> [!expand]- apt-get
> <strong>1. install dnsmasq</strong>
> <span style="white-space: pre-wrap"><code>  apt-get install dnsmasq</code></span>
>
> <strong>2. verify dnsmasq was installed</strong>
> <span style="white-space: pre-wrap"><code>  which dnsmasq</code></span>
