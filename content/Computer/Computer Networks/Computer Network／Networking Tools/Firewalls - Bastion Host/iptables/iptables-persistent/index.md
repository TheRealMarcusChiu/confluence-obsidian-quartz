---
title: "iptables-persistent"
created: 2019-03-16T23:41:08.643-05:00
modified: 2019-03-16T23:42:18.710-05:00
parent: "[[iptables]]"
children: []
---
please use iptables-persistent; it's the easy way
# Installation

> [!expand]- apt-get
> <span style="white-space: pre-wrap"><code>sudo apt<font style="color: rgb(102,102,0);">-</font>get install iptables<font style="color: rgb(102,102,0);">-</font>persistent</code></span>
# Reloading Rules
```bash
sudo /etc/init.d/iptables-persistent save 
sudo /etc/init.d/iptables-persistent reload

sudo netfilter-persistent save
sudo netfilter-persistent reload
```
