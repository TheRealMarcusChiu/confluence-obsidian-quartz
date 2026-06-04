---
title: "bridge-utils"
created: 2019-03-16T23:37:33.001-05:00
modified: 2019-03-16T23:39:12.681-05:00
parent: "[[Computer Network／Networking Tools]]"
children: []
---
Utilities for configuring the Linux Ethernet bridge

This package contains utilities for configuring the Linux Ethernet bridge in Linux. The Linux Ethernet bridge can be used for connecting multiple Ethernet devices together. The connecting is fully transparent: hosts connected to one Ethernet device see hosts connected to the other Ethernet devices directly.
# Installation

> [!expand]- apt-get
> <strong>1. install bridge-utils</strong>
> <span style="white-space: pre-wrap"><code>  apt-get install brigde-utils</code></span>
>
> <strong>2. verify bridge-utils was installed</strong>
> <span style="white-space: pre-wrap"><code>  which bridge-utils</code></span>
# Commands

> [!expand]- Click here to expand...
> 1. brctl —help
>
> addbr \<bridge\> add bridge
> delbr \<bridge\> delete bridge
> addif \<bridge\> \<device\> add interface to bridge
> delif \<bridge\> \<device\> delete interface from bridge
> hairpin \<bridge\> \<port\> {on|off} turn hairpin on/off
> setageing \<bridge\> \<time\> set ageing time
> setbridgeprio \<bridge\> \<prio\> set bridge priority
> setfd \<bridge\> \<time\> set bridge forward delay
> sethello \<bridge\> \<time\> set hello time
> setmaxage \<bridge\> \<time\> set max message age
> setpathcost \<bridge\> \<port\> \<cost\> set path cost
> setportprio \<bridge\> \<port\> \<prio\> set port priority
> show \[ \<bridge\> \] show a list of bridges
> showmacs \<bridge\> show a list of mac addrs
> showstp \<bridge\> show bridge stp info
> stp \<bridge\> {on|off} turn stp on/off
