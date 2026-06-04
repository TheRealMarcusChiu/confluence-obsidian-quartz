---
title: "Simple Network Time Protocol (SNTP)"
created: 2026-01-06T10:40:03.579-06:00
modified: 2026-01-06T10:41:26.513-06:00
parent: "[[7 - Application Layer]]"
children: []
---
###### Simple Network Time Protocol (SNTP)
````excerpt
- is a simplified variant of the [[Network Time Protocol (NTP)]] used to synchronize computer clocks over IP networks
- it operates using the [[Universal／User Datagram Protocol (UDP)|UDP]] on port 123 and supports both IPv4 and IPv6 networks
- is designed for environments where high precision is not required and computational resources are limited, such as in embedded devices or small networks. Unlike full NTP implementations, which use complex statistical algorithms to minimize clock drift and network jitter, SNTP typically applies simpler, less accurate adjustments to system time, often resulting in larger time offsets.
- the current version, SNTPv4, is defined in RFC 4330 and is interoperable with NTP servers, though it is recommended for use only at the extremities of a synchronization subnet, such as end devices, rather than as intermediate time sources
````
^excerpt
