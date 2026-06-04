---
title: "Multicast DNS (mDNS)"
created: 2026-05-27T12:32:50.767-05:00
modified: 2026-05-27T12:36:27.026-05:00
parent: "[[7 - Application Layer]]"
children: []
---
###### Multicast DNS (mDNS)
````excerpt
- is a protocol that allows devices on a local network to discover each other and resolve hostnames to IP addresses without the need for a traditional, centralized [[DNS Server (DNS Resolver - Root Server - Top-Level Server - Authoritative Server)|DNS server]]
````
^excerpt

# OSI Model Stack Context

mDNS requires several layers to work in concert:

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>OSI Layer</strong>",
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Role in mDNS</strong>",
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "[[7 - Application Layer|Layer 7 Application]]",
        "bg": "#F4F5F7"
      },
      "Formulates DNS queries and responses; handles service discovery logic"
    ],
    [
      {
        "content": "[[4 - Transport Layer|Layer 4 Transport]]",
        "bg": "#F4F5F7"
      },
      "Uses [[Universal／User Datagram Protocol (UDP)|UDP]] port 5353 for connectionless \"fire-and-forget\" communication"
    ],
    [
      {
        "content": "[[3 - Network Layer|Layer 3 Network]]",
        "bg": "#F4F5F7"
      },
      "Uses IP Multicast (<code><font style=\"color: rgb(122,134,154);\">224.0.0.251</font></code> for [[IPv4]] or <code><font style=\"color: rgb(122,134,154);\">ff02::fb</font></code> for [[IPv6]]) to reach all local hosts"
    ],
    [
      {
        "content": "[[2 - Data Link Layer|Layer 2 Data Link]]",
        "bg": "#F4F5F7"
      },
      "Uses multicast MAC addresses to deliver packets to nodes on the local broadcast domain"
    ]
  ],
  "tableStyle": "margin-left: 0.0px;"
}
```
