---
title: "Message Broker vs Event-Bus"
created: 2020-05-26T22:34:17.463-05:00
modified: 2026-05-21T13:03:33.007-05:00
parent: "[[Architectural Design Patterns - Comparisons]]"
children: []
---
# Event-Bus
- apps using a shared (common) set of interfaces
- apps have a set of agreed-upon message schemas
- when an app wants to send a message it passes it to the message bus, which is responsible for delivering the message to all the other apps listening for messages on the bus’ shared infrastructure

![[Message Broker vs Event-Bus/message-bus-mediating-collaboration.png|400]]
# Message Broker
- fully decouples apps from one another
- apps have no awareness of either the number or destination / location of consuming apps

![[Message Broker vs Event-Bus/message-broker-mediating-collaboration.png|400]]
