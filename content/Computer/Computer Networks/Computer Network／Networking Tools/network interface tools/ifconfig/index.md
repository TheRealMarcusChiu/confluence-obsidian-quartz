---
title: "ifconfig"
created: 2019-03-16T23:51:13.905-05:00
modified: 2019-11-16T16:17:16.579-06:00
parent: "[[network interface tools]]"
children: []
---
<strong>ifconfig</strong> configures a [[Network Interface Controller／Card (NIC) - Network Adapter - LAN Adapter - Physical Network Interface|network interface]]
### Installation
<span style="white-space: pre-wrap"><code>sudo apt install net-tools</code></span>

### Commands

<strong>1. display all network interfaces</strong>
<span style="white-space: pre-wrap"><code>  ifconfig</code></span>

<strong>2. display specified network interface</strong>
<span style="white-space: pre-wrap"><code>  ifconfig \<NIC\></code></span>

<strong>3. down and up network interface</strong>
<span style="white-space: pre-wrap"><code>  ifconfig \<NIC\> down</code><br><code>  ifdown \<NIC\></code><br><code></code><br><code>  ifconfig \<NIC\> up</code><br><code>  ifup \<NIC\></code></span>

<strong>4. to change mode look at [[iwconfig]] command</strong>
