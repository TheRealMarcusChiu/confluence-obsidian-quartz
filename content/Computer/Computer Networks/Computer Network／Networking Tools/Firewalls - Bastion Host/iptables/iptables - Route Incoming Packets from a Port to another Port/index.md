---
title: "iptables - Route Incoming Packets from a Port to another Port"
created: 2022-11-25T06:37:08.835-06:00
modified: 2022-11-25T06:38:45.535-06:00
parent: "[[iptables]]"
children: []
---
Route incoming packets from port 443 to port 8006
```
/sbin/iptables -t nat -A PREROUTING -p tcp --dport 443 -j REDIRECT --to-ports 8006
```
