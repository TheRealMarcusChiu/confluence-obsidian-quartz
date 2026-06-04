---
title: "ping"
created: 2019-03-17T00:04:23.674-05:00
modified: 2019-03-17T00:04:46.321-05:00
parent: "[[Computer Network／Networking Tools]]"
children: []
---
Packet InterNet Groper - uses [[Internet Control Message Protocol  (ICMP)|Internet Control Message Protocol (ICMP)]] echo request and replies to test if a host IP stack is initialized and alive on the network

<strong>1. basic use case</strong>
<span style="white-space: pre-wrap"><code>  ping [google.com](http://google.com/)</code></span>

<strong>2. ping on specific NIC</strong>
<span style="white-space: pre-wrap"><code>  ping -I eth1 [google.com](http://google.com/)</code></span>
