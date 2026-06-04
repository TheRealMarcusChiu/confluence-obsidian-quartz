---
title: "IP Address Assignment"
created: 2019-03-16T22:44:03.154-05:00
modified: 2026-05-27T11:20:29.802-05:00
parent: "[[7 - Application Layer]]"
children:
  - "[[Bootstrap Protocol (BootP)]]"
  - "[[Dynamic Host Configuration Protocol (DHCP)]]"
---
###### IP Address Assignment
````excerpt
- are [[Computer Network／Networking Communication Protocols|network protocols]] at the [[7 - Application Layer|application layer]] used to assign [[IPv4 - Address|IP addresses]] to IP hosts when they boot
````
^excerpt

# IP Address Assignment - Protocols

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Address Resolution Protocol (ARP) - Reverse ARP (RARP)|Reverse Address Resolution Protocol (RARP)]]",
        "bg": "#F4F5F7"
      },
      "<font style=\"color: rgb(255,0,0);\">obsolete</font>"
    ],
    [
      {
        "content": "[[Bootstrap Protocol (BootP)]]",
        "bg": "#F4F5F7"
      },
      "is a computer networking protocol used in IP networks to automatically assign an IP address to network devices from a configuration server"
    ],
    [
      {
        "content": "[[Dynamic Host Configuration Protocol (DHCP)]]",
        "bg": "#F4F5F7"
      },
      "provides static and/or dynamic IP address allocation that can be manual or automatic. This is the protocol that delivers to your computer its new IP address, DNS servers, gateway IP address, and subnet mask"
    ],
    [
      {
        "content": "[[Automatic Private IP Addressing (APIPA)]]",
        "bg": "#F4F5F7"
      },
      "with APIPA, DHCP clients can automatically self-configure an IP address and subnet mask when a [[DHCP Server|DHCP server]] isn't available"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
