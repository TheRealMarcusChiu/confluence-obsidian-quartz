---
title: "Address Resolution Protocol (ARP) - Reverse ARP (RARP)"
created: 2019-03-16T20:47:00.371-05:00
modified: 2023-11-16T17:32:08.413-06:00
parent: "[[2 - Data Link Layer]]"
children:
  - "[[ARP - Packet Format]]"
  - "[[ARP Attacks]]"
---
# Terms Simple
- <strong>ARP </strong>- find [[Ethernet - Media Access Control (MAC) Address - Physical Hardware Address|MAC/Physical Hardware Address]] given [[IPv4 - Address|IP address]]
- <strong>RARP</strong> - find IP address given MAC address

# Terms Detailed
- <strong>Address Resolution Protocol (ARP)</strong> is a [[2 - Data Link Layer|data link layer]]/[[3 - Network Layer|network layer]] protocol used to convert an [[IPv4 - Address|IP address]] into a physical address (called a Data Link Control (DLC) address), such as an [[802.3 - Ethernet|Ethernet]]'s [[Ethernet - Media Access Control (MAC) Address - Physical Hardware Address|MAC address]]. A host wishing to obtain a MAC address broadcasts an ARP request onto the TCP/IP network. The host on the network that has the IP address in the request then replies with its MAC address
- <strong>Reverse ARP (RARP)</strong> is used by a host to discover its IP address. In this case, the host broadcasts its MAC address and a RARP server replies with the host's IP address

# ARP Types

```merge-table
{
  "rows": [
    [
      {
        "content": "ARP Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Use Case",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Proxy ARP",
        "bg": "#F4F5F7"
      },
      "allows the host to answer ARP requests in place of the actual host",
      "- used by routers to register for traffic to be forwarded between hosts within the same subnet address but on different links"
    ],
    [
      {
        "content": "Gratuitous ARP",
        "bg": "#F4F5F7"
      },
      "A Gratuitous ARP is an ARP Response that was not prompted by an ARP Request. The Gratuitous ARP is sent as a broadcast, as a way for a node to announce or update its IP to MAC mapping to the entire network",
      "- used to determine if the address is already in use\n- used to update the cache entries of other hosts on the same links (e.g. in case of a change of hardware address)"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# ARP Format
- [[ARP - Packet Format]]

# ARP Tools
- [[arp]]
- [[arping]]

# ARP Attacks
```dataview
LIST
FROM ""
WHERE file.folder = [[ARP Attacks]].file.folder + "/" + [[ARP Attacks]].file.name
```
