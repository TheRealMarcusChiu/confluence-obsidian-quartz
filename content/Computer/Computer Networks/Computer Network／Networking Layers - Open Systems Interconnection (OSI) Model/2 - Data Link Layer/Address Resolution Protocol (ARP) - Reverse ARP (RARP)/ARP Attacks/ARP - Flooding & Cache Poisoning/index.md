---
title: "ARP - Flooding & Cache Poisoning"
created: 2019-12-03T10:27:13.391-06:00
modified: 2019-12-03T10:30:18.890-06:00
parent: "[[ARP Attacks]]"
children: []
---
Switched Ethernet does not allow direct sniffing

<strong>ARP flooding</strong> and <strong>ARP cache poisoning</strong> can be used to bypass this protection
### ARP flooding

Ethernet Switches maintain a table that maps between [[Ethernet - Media Access Control (MAC) Address - Physical Hardware Address|MAC addresses]] and ethernet ports

Flooding the switch with bogus MAC addresses will overflow table memory and revert the behavior from “switch” to “hub”
### ARP cache poisoning

Send a spoofed ARP reply to node A telling that IP<sub>B</sub> is associated with your own MAC address

Do the same to node B... tell that IP<sub>A</sub> is associated with your MAC address

Both A and B will send messages to you thinking that they are sending it to each other… the switch will not know anything
