---
title: "Full Cone NAT - Port Forwarding"
created: 2019-10-28T11:11:00.572-05:00
modified: 2022-06-24T22:44:58.039-05:00
parent: "[[Network Address Translation (NAT)]]"
children: []
---
###### <strong>Full Cone NAT</strong> (One-to-One NAT)
- is a type of [[Network Address Translation (NAT)|Static NAT]]
- is the only type of [[Network Address Translation (NAT)|NAT]] where the port is permanently open and allows <strong>inbound connections from any external host</strong>
- maps a (public IP address and port) to a (private IP and port)
- any external host can send data to the LAN's [[IPv4 - Reserved／Private IP Address|private IP address]] through the mapped NAT's public IP address and port. If it tries to send data through a different port it will fail
- this type of NAT is also known as port forwarding

# Comparisons to Other NATs

see: [[Network Address Translation (NAT)]]
