---
title: "macchanger"
created: 2019-03-16T23:49:20.881-05:00
modified: 2019-03-16T23:50:33.675-05:00
parent: "[[Computer Network／Networking Tools]]"
children: []
---
utility for viewing/manipulating the MAC address of network interfaces.
# Installation

> [!expand]- manual
> [https://github.com/shilch/macchanger](https://github.com/shilch/macchanger) [https://github.com/acrogenesis/macchanger](https://github.com/acrogenesis/macchanger)
>
> <strong>1. install macchanger</strong>
> <span style="white-space: pre-wrap"><code>  sudo sh -c "curl [https://raw.githubusercontent.com/shilch/macchanger/master/macchanger.sh](https://raw.githubusercontent.com/shilch/macchanger/master/macchanger.sh) \> /usr/local/bin/macchanger && chmod +x /usr/local/bin/macchanger"</code><br><code></code><br><code>  brew install acrogenesis/macchanger/macchanger</code></span>
>
> <strong>2. verify macchanger was installed</strong>
> <span style="white-space: pre-wrap"><code>  which macchanger</code><br><code>  macchanger —help</code></span>

> [!expand]- apt-get
> <strong>1. install macchanger</strong>
> <span style="white-space: pre-wrap"><code>  sudo apt-get install macchanger</code></span>
# Commands

> [!expand]- Click here to expand...
> [https://blog.sleeplessbeastie.eu/2013/01/11/how-to-change-the-mac-address-of-an-ethernet-interface/](https://blog.sleeplessbeastie.eu/2013/01/11/how-to-change-the-mac-address-of-an-ethernet-interface/)
>
> <strong>TEMPORAL CHANGE</strong>
>
> sudo ifconfig eth0 hw ether 08:00:00:00:00:01 - for ubuntu
>
> sudo ifconfig eth0 ether 08:00:00:00:00:01 - for mac
>
> you may need to shutdown desired ethernet interface before changing the MAC address
> <span style="white-space: pre-wrap"><code>sudo ifconfig eth0 down</code></span>
>
> then after changing address bring it up again
> <span style="white-space: pre-wrap"><code>sudo ifconfig eth0 up</code></span>
>
> <strong>PERMANENT CHANGE</strong>
>
> edit /etc/network/interfaces configuration file to look something like this
> <span style="white-space: pre-wrap"><code><font style="color: rgb(136,0,0);">\# This file describes the network interfaces available on your system</font><font style="color: rgb(136,0,0);">\# and how to activate them. For more information, see interfaces(5).</font><font style="color: rgb(136,0,0);">\# The loopback network interface</font> auto lo iface lo inet loopback <font style="color: rgb(136,0,0);">\# Network interfaces</font> allow<font style="color: rgb(102,102,0);">-</font>hotplug eth0 iface eth0 inet dhcp hwaddress ether <font style="color: rgb(0,102,102);">08</font><font style="color: rgb(102,102,0);">:</font><font style="color: rgb(0,102,102);">00</font><font style="color: rgb(102,102,0);">:</font><font style="color: rgb(0,102,102);">00</font><font style="color: rgb(102,102,0);">:</font><font style="color: rgb(0,102,102);">00</font><font style="color: rgb(102,102,0);">:</font><font style="color: rgb(0,102,102);">00</font><font style="color: rgb(102,102,0);">:</font><font style="color: rgb(0,102,102);">01</font></code></span>
>
> then reboot network interfaces
> <span style="white-space: pre-wrap"><code>sudo service networking restart</code></span>
