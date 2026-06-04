---
title: "VirtualBox - Connecting USB NIC Device"
created: 2019-11-16T15:48:03.138-06:00
modified: 2021-08-13T19:49:03.115-05:00
parent: "[[VirtualBox]]"
children: []
---
# Steps
1. set network settings to [[Network Address Translation (NAT)|NAT]]
2. plug USB [[Network Interface Controller／Card (NIC) - Network Adapter - LAN Adapter - Physical Network Interface|NIC]]
3. set USB filter to the device
4. create new filter and copy over the Vendor and Product ID
5. unplug USB NIC
6. start VM
7. plug USB NIC and wait for driver to be installed

# Resource

![](https://www.youtube.com/watch?v=K1ETBeRQBs4)
