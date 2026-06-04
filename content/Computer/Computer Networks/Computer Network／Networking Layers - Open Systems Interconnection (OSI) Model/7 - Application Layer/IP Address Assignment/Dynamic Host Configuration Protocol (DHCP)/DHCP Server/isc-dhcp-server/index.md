---
title: "isc-dhcp-server"
created: 2019-03-16T22:45:54.291-05:00
modified: 2019-03-16T22:48:06.751-05:00
parent: "[[DHCP Server]]"
children: []
---
The Dynamic Host Configuration Protocol (DHCP) is a network service that enables host computers to be automatically assigned settings from a server as opposed to manually configuring each network host. Computers configured to be DHCP clients have no control over the settings they receive from the DHCP server, and the configuration is transparent to the computer's user.
# Installation

> [!expand]- homebrew
> <strong>1. install isc-dhcp</strong>
> <span style="white-space: pre-wrap"><code>  brew install isc-dhcp</code></span>
>
> This install of dhcpd expects config files to be in /usr/local/etc. All state files (leases and pids) are stored in /usr/local/var/dhcpd.
>
> Dhcpd needs to run as root since it listens on privileged ports.
>
> There are two plists because a single dhcpd process may do either DHCPv4 or DHCPv6 but not both. Use one or both as needed.
>
> Note that you must create the appropriate config files before starting the services or dhcpd will refuse to run. DHCPv4: /usr/local/etc/dhcpd.conf DHCPv6: /usr/local/etc/dhcpd6.conf
>
> Sample config files may be found in /usr/local/etc.

> [!expand]- apt-get
> [https://help.ubuntu.com/community/isc-dhcp-server](https://help.ubuntu.com/community/isc-dhcp-server)
>
> <strong>1. install isc-dhcp-server</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get install isc-dhcp-server</code></span>
# Commands

> [!expand]- homebrew
> <strong>1. To have launchd start isc-dhcp now and restart at startup</strong>
> <span style="white-space: pre-wrap"><code>  sudo brew services start isc-dhcp</code><br><code>  sudo brew services stop isc-dhcp</code><br><code>  sudo brew services restart isc-dhcp</code></span>

> [!expand]- apt-get
> <strong>Start Stop Restart</strong>
> <span style="white-space: pre-wrap"><code>sudo service isc-dhcp-server restart</code><br><code>sudo service isc-dhcp-server start</code><br><code>sudo service isc-dhcp-server stop</code><br><code>sudo service isc-dhcp-server status</code><br><code></code><br><code>/etc/init.d/isc-dhcp-server start</code><br><code>/etc/init.d/isc-dhcp-server stop</code><br><code>/etc/init.d/isc-dhcp-server restart</code></span>
