---
title: "VirtualBox - Exposing Guest Machine Ports to Host Machine"
created: 2019-11-16T15:46:14.637-06:00
modified: 2019-11-16T16:15:39.549-06:00
parent: "[[VirtualBox]]"
children: []
---
[[VirtualBox]] will create a private network (10.0.2.x) which will be connected to your host network using [[Network Address Translation (NAT)|NAT]]. (Unless configured otherwise.)

This means that you cannot directly access any host of the private network from the host network. To do so, you need some port forwarding.
### Example Port Forwarding

In the VirtualBox network preferences of your Guest VM you can for example configure that VirtualBox should open port 8080 (Host Port) on 127.0.0.1 (Host IP) and forward TCP traffic to port 80 (Guest Port) of 10.0.2.15 (Guest IP)

![[VirtualBox - Exposing Guest Machine Ports to Host Machine/virtualbox-port-forwarding.png|649x400]]

to figure out the Guest IP of VM, execute the [[ifconfig]] command
<span style="white-space: pre-wrap"><code>ifconfig</code></span>
