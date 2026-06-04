---
title: "Why is navigator.mediaDevices undefined in Some Domains"
created: 2020-06-27T19:39:46.910-05:00
modified: 2020-06-27T19:45:49.739-05:00
parent: "[[JavaScript - Navigator]]"
children: []
---
### Short Answer
- chrome only allows it in [[IPv4 - Source／Loopback／Localhost Address|localhost]] or [[Host Name ／ Hostname - Domain Name - Fully Qualified Domain Name (FQDN) - Absolute Domain Name (ADN) - Partially Qualified Domain Name (PQDN) - Relative Domain Name (RDN)|domains]] with [[Hyper Text Transfer Protocol Secure (HTTPS)|https://]]

### Problem
![[Why is navigator.mediaDevices undefined in Some Domains/marcuschiu.com.png|301]]

![[Why is navigator.mediaDevices undefined in Some Domains/google.com.png|301]]

![[Why is navigator.mediaDevices undefined in Some Domains/localhost.png|301]]
### Solution
- secure domain with https
