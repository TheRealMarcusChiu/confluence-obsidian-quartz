---
title: "DNS Transfer Zone Attack"
created: 2019-03-16T02:51:54.326-05:00
modified: 2019-03-16T02:52:49.111-05:00
parent: "[[DNS Attacks]]"
children: []
---
[https://security.stackexchange.com/questions/10452/dns-zone-transfer-attack](https://security.stackexchange.com/questions/10452/dns-zone-transfer-attack)

DNS Zone transfer is the process where a DNS server passes a copy of part of it's database (which is called a "zone") to another DNS server. It's how you can have more than one DNS server able to answer queries about a particular zone; there is a Master DNS server, and one or more Slave DNS servers, and the slaves ask the master for a copy of the records for that zone.

A basic DNS Zone Transfer Attack isn't very fancy: you just pretend you are a slave and ask the master for a copy of the zone records. And it sends you them; DNS is one of those really old-school Internet protocols that was designed when everyone on the Internet literally knew everyone else's name and address, and so servers trusted each other implicitly.

It's worth stopping zone transfer attacks, as a copy of your DNS zone may reveal a lot of topological information about your internal network. In particular, if someone plans to subvert your DNS, by poisoning or spoofing it, for example, they'll find having a copy of the real data very useful.

An interesting fact about DNS zone transfers is that they usually rely on TCP port 53 instead of UDP port 53. If you see TCP port 53 in use, it could tell you that someone is doing a zone transfer.

To actually complete a zone transfer on a vulnerable DNS server you could issue these commands:

WINDOWS and MAC: nslookup
```bash
server 
set type=any
ls -d 
```

UNIX (nslookup is deprecated on UNIX):
```bash
dig -axfr @ 
dig @192.168.11.24 example.org -t AXFR
```
