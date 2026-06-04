---
title: "PiVPN"
created: 2019-03-16T23:14:38.605-05:00
modified: 2025-05-23T22:44:36.606-05:00
parent: "[[OpenVPN Server]]"
children:
  - "[[PiVPN - Proxmox LXC Installation]]"
---
###### PiVPN ([www.pivpn.io](http://www.pivpn.io/))
````excerpt
- is the simplest [[OpenVPN]] server setup and configuration
- designed for [[Raspbian - Raspberry Pi|Raspberry Pi]]
````
^excerpt

# Installation
```
curl -L https://install.pivpn.io | bash
```
# Setup

[http://kamilslab.com/2017/01/22/how-to-turn-your-raspberry-pi-into-a-home-vpn-server-using-pivpn/](http://kamilslab.com/2017/01/22/how-to-turn-your-raspberry-pi-into-a-home-vpn-server-using-pivpn/)
# Commands
```
pivpn [option]
```

options:
- <code>-a \[nopass\]</code> or <code>add \[nopass\]</code> - create a client ovpn profile \[optional nopass\]
- <code>-c</code> or <code>clients</code> - list connected clients
- <code>-d</code> or <code>debug</code> - start a debugging session
- <code>-l</code> or <code>list</code> - list all valid and revoked certificates
- <code>-r</code> or <code>revoke</code> - revoke a client ovpn profile
- <code>-h</code> or <code>help</code> - show help dialog
- <code>-u</code> or <code>uninstall</code> - uninstall PiVPN

# Other
```
PLAT=Ubuntu
OSCN=jammy
USING_UFW=0
pivpnforceipv6route=1
IPv4dev=ens18
install_user=marcuschiu
install_home=/home/marcuschiu
VPN=openvpn
pivpnPROTO=udp
pivpnPORT=1194
pivpnDNS1=192.168.86.1
pivpnDNS2=192.168.86.1
pivpnSEARCHDOMAIN=
pivpnHOST=150.221.175.11
TWO_POINT_FOUR=1
pivpnENCRYPT=256
USE_PREDEFINED_DH_PARAM=
INPUT_CHAIN_EDITED=0
FORWARD_CHAIN_EDITED=0
INPUT_CHAIN_EDITEDv6=
FORWARD_CHAIN_EDITEDv6=
pivpnDEV=tun0
pivpnNET=10.123.79.0
subnetClass=24
pivpnenableipv6=0
ALLOWED_IPS=""
UNATTUPG=1
INSTALLED_PACKAGES=(dnsutils grepcidr net-tools bsdmainutils iptables-persistent openvpn)
HELP_SHOWN=1
```
