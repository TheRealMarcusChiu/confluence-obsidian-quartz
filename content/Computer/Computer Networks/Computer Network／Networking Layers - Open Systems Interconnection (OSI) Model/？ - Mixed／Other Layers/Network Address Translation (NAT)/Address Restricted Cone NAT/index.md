---
title: "Address Restricted Cone NAT"
created: 2019-10-28T11:11:22.311-05:00
modified: 2022-06-24T22:58:32.414-05:00
parent: "[[Network Address Translation (NAT)]]"
children: []
---
<strong>Address Restricted Cone NAT</strong>
- a type of [[Network Address Translation (NAT)|Dynamic NAT]]
- works in the same way as a [[Full Cone NAT - Port Forwarding|Full Cone NAT]] but applies additional restrictions based on the source IP address
- the internal client must first have sent packets to IP address X before it can receive packets originating from IP address X
- in terms of restrictions, the only requirement is that packets come in on the mapped port and from an IP address that the internal client has sent packets to

# Comparisons to Other NATs

see: [[Network Address Translation (NAT)]]
