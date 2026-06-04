---
title: "OpenDNS"
created: 2019-03-16T22:58:56.640-05:00
modified: 2019-03-16T22:59:36.874-05:00
parent: "[[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)]]"
children: []
---
# Prevent DNS leaks

<strong>0. go online and find a trustworthy dns service</strong>
<span style="white-space: pre-wrap"><code>  locate the IP address</code></span>

<strong>1. edit the /etc/resolv.conf</strong>
<span style="white-space: pre-wrap"><code>  comment out any nameserver</code><br><code>  then add your nameserver with the IP address you found</code></span>

<strong>2. it should look like the example resolv.conf.txt</strong>

<strong>3. do not restart NetworkManager because it will preload the file and will use the DNS server from your ISP</strong>

example resolv.conf
```
# not sure what this does
domain tx.rr.com

# the original DNS IP addresses
#nameserver 209.18.47.61
#nameserver 209.18.47.62

# new ones
# we have 2 just in case one fails
nameserver 
nameserver 
```
