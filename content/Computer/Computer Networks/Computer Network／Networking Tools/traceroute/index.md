---
title: "traceroute"
created: 2019-03-17T00:03:37.197-05:00
modified: 2019-12-03T11:54:15.864-06:00
parent: "[[Computer Network／Networking Tools]]"
children: []
---
### How Traceroute Works
- [[Internet Control Message Protocol  (ICMP)|ICMP]] Time Exceeded messages are used by the traceroute program to determine the path used to deliver a datagram
- a series of IP packets/datagrams are sent to the destination node
- each packet/datagram has an increasing TTL field (starting at 1)

### Commands

<strong>1. example use</strong>
<span style="white-space: pre-wrap"><code>  traceroute [google.com](http://google.com/)</code></span>

‘\*’ field in output depicts that the required field could not be fetched. The reason can be anything from reverse DNS lookup failure to packets not hitting the target router to packets getting lost on their way back.

<strong>2. prevent hostnames being displayed, only display ip addresses</strong>
<span style="white-space: pre-wrap"><code>  traceroute [google.com](http://google.com/) -n</code></span>
