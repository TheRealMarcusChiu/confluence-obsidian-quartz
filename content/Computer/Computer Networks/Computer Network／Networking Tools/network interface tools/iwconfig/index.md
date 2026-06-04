---
title: "iwconfig"
created: 2019-03-16T23:51:00.701-05:00
modified: 2019-11-16T16:18:47.963-06:00
parent: "[[network interface tools]]"
children: []
---
<strong>iwconfig</strong> configures a wireless [[Network Interface Controller／Card (NIC) - Network Adapter - LAN Adapter - Physical Network Interface|network interface]]

related: [[ifconfig]]
### Installation
<span style="white-space: pre-wrap"><code>sudo apt install net-tools</code></span>

### Commands

<strong>1. Change NIC channel</strong>
<span style="white-space: pre-wrap"><code>  iwconfig \<NIC name\> channel \<channel number\></code></span>

<strong>2. change mode of NIC (monitor.. )</strong>
<span style="white-space: pre-wrap"><code>  iwconfig \<NIC\> mode \<mode name\></code></span>
