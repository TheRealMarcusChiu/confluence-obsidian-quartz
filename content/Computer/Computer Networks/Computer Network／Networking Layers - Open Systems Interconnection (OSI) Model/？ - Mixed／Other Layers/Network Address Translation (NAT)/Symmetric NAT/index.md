---
title: "Symmetric NAT"
created: 2019-10-28T11:12:03.800-05:00
modified: 2022-06-24T22:57:56.736-05:00
parent: "[[Network Address Translation (NAT)]]"
children:
  - "[[How Do You Know if You are Behind a Symmetric NAT？]]"
---
###### S<strong>ymmetric NAT</strong>
- applies restrictions exactly the same way as an [[Address Port Restricted Cone NAT]] but handles the NAT translation differently
- all types of NAT discussed so far don’t change the source port when NATing connections. For example, when a client accesses the Internet using IP 192.168.0.1 and source port 56723 NAT changes the source IP to say 56.35.67.35 but keeps the port number the same; this is known as port preservation. A Symmetric NAT however randomly generated ones new ports

# Comparisons to Other NATs

see: [[Network Address Translation (NAT)]]
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
