---
title: "iptables"
created: 2019-03-16T23:40:03.058-05:00
modified: 2022-11-27T07:18:26.312-06:00
parent: "[[Firewalls - Bastion Host]]"
children:
  - "[[iptables - Route Incoming Packets from a Port to another Port]]"
  - "[[iptables-persistent]]"
---
###### iptables
- is the software firewall that is included with most [[Linux]] distributions by default
- [[ufw (Uncomplicated FireWall)]] is a command-line wrapper for <strong>iptables</strong>

# Installation

> [!expand]- apt-get
> <strong>1. install iptables</strong>
> ```
>   apt-get install iptables
> ```
>
> <strong>2. verify iptables was installed</strong>
> ```
>   which iptables
> ```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Commands
- [digitalocean - tutorial](https://www.digitalocean.com/community/tutorials/iptables-essentials-common-firewall-rules-and-commands)

![[iptables/iptables.jpg|400]]
