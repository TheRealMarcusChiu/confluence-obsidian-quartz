---
title: "Dynamic Host Configuration Protocol (DHCP)"
created: 2019-03-16T22:44:20.409-05:00
modified: 2020-06-25T22:20:19.623-05:00
parent: "[[IP Address Assignment]]"
children:
  - "[[DHCP Client]]"
  - "[[DHCP Server]]"
---
<strong>Dynamic Host Configuration Protocol (DHCP)</strong> provides static and dynamic address allocation that can be manual or automatic. This is the protocol that delivers to your computer its IP address, DNS servers, gateway IP address, and subnet mask
### Implementations
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```
### DHCP Format
![[Dynamic Host Configuration Protocol (DHCP)/1.png|350]]
