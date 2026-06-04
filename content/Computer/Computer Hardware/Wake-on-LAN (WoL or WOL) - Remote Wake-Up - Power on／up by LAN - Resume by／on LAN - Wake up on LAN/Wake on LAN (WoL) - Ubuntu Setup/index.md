---
title: "Wake on LAN (WoL) - Ubuntu Setup"
created: 2025-07-14T20:29:21.760-05:00
modified: 2025-09-17T22:17:28.480-05:00
parent: "[[Wake-on-LAN (WoL or WOL) - Remote Wake-Up - Power on／up by LAN - Resume by／on LAN - Wake up on LAN]]"
children: []
---
# Enable in BIOS

Usually under power management.
# Enable in OS

Install <code><font style="color: rgb(122,134,154);">ethtool</font></code>
```
apt install ethtool -y
```

Show network interfaces and find Ethernet interface ID (here the ID is <code><font style="color: rgb(122,134,154);">enp12s0</font></code>)
```
$ ip addr
1: enp12s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
...
```

Show its current configuration
```
$ sudo ethtool enp12s0
...
	Supports Wake-on: pumbg
	Wake-on: g
...
```
# Wake-on-LAN Options

Set Wake-on-LAN options. Not all devices support this. The argument to this option is a string of characters specifying which options to enable.
- p Wake on phy activity
- u Wake on unicast messages
- m Wake on multicast messages
- b Wake on broadcast messages
- a Wake on ARP
- g Wake on MagicPacket(tm)
- s Enable SecureOn(tm) password for MagicPacket(tm)
- d Disable (wake on nothing). This option clears all previous options.

# Set Wake-on-LAN Options
###### Temporarily Set Options

the following resets after computer restart
```
ethtool -s enp12s0 wol g
```
###### Permanently Set Options

create a service file <code><font style="color: rgb(122,134,154);">/etc/systemd/system/wol.service</font></code> with the following
```
[Unit]
Description=Enable Wake On Lan
# Run after everything else
After=multi-user.target network-online.target default.target
Wants=network-online.target

[Service]
Type=oneshot
ExecStart = /usr/sbin/ethtool --change enp12s0 wol g

[Install]
WantedBy=default.target
```
```
sudo systemctl daemon-reload
sudo systemctl enable wol.service
systemctl status wol
```
# Verify

Send magic packet (see: [[wakeonlan (Terminal Command)|wakeonlan]])
