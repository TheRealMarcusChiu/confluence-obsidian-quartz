---
title: "WiFi - Handling Collisions"
created: 2019-10-02T10:52:01.194-05:00
modified: 2019-10-02T10:54:21.792-05:00
parent: "[[802.11 - WiFi／Wi-Fi]]"
children: []
---
[[802.11 - WiFi／Wi-Fi|WiFi]] does not use [CSMA/CD](http://doc.marcuschiu.com/log-page/5c6e08e0154cee28cd8f4082) because:
- wireless nodes cannot usually transmit and receive simultaneously, because power generated to transmit signal usually swamps the receiving circuitry
- hidden terminal problem

WiFi uses [CSMA/CA](http://doc.marcuschiu.com/log-page/5c6e08e0154cee28cd8f4082)
### WiFi: Hidden Terminal Problem

RTS & CTS (Ready-to-Send & Clear-to-Send)
1. sender sends an RTS to receiver
2. receiver receives RTS then sends CTS
3. even though RTS may not reach hidden terminal, CTS is likely heard. this effectively tells all nodes within range of receiver to not send anything for awhile. The amount of time of intended transmission is included in the RTS and CTS packet
