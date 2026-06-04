---
title: "Proxmox - Cloned VM template has same IP as original"
created: 2024-08-22T17:25:05.732-05:00
modified: 2025-06-23T14:18:53.830-05:00
parent: "[[Proxmox Virtual Environment (PVE)]]"
children: []
---
# Problem

Cloned VM template has same IP as original
# Solution

In guest machine, before cloning/templating:
```
echo -n >/etc/machine-id
rm /var/lib/dbus/machine-id
ln -s /etc/machine-id /var/lib/dbus/machine-id
```
