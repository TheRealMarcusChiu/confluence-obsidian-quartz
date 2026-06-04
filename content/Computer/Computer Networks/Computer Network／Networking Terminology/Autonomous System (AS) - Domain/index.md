---
title: "Autonomous System (AS) - Domain"
created: 2019-03-16T21:02:36.293-05:00
modified: 2023-11-16T17:30:44.254-06:00
parent: "[[Computer Network／Networking Terminology]]"
children: []
---
###### Autonomous System (AS) or Domain
````excerpt
- is a collection of networks or subnets that are in the same administrative domain
````
^excerpt

# Autonomous System Number (ASN)
each AS is assigned an Autonomous System Number (ASN) a 16-bit integer by the <em>Internet Network Information Center (InterNIC)</em>

its 16-bit number are used in [[IPv4 - Multicast／Group／Class-D Addresses|IP GLOP addresses]]

ASNs were just 16-bit numbers, but are now 32-bit numbers (because the internet grew to the point of running out of the 65,536 or 2^16 initial allocation)
# Autonomous System & Network Protocols

each AS is composed of routers that have 2 goals:
- [[Routing Tables - Forwarding Tables|routing]] packets (building and maintaining routing tables) by utilizing [[Routing Protocols|routing protocols]]
- [[Routing Tables - Forwarding Tables|forwarding]] packets (sending packet to destination) by utilizing [[Routed Protocols|routed protocols]]

- [[Routing Protocols|routing protocols]] - are used to find all networks within and across multiple autonomous systems by updating and ensuring all routers have the same/correct <em>routing table</em>
	- 2 types of routing protocols: dynamic and static
		- static routing protocols - are rarely used
		- [[Dynamic Routing Protocols|dynamic routing protocols]] - have 2 types:
		- 
			- [[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)|IGP]] - routers communicating within an AS can run whatever [[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)|IGP]] (e.g. [[Distant Vector Protocols]] and/or [[Link-State Protocols]] protocols)
			- [[Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)|EGP]] - routers communicating across ASs must use the same [[Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)|EGP]] (e.g. [[Border Gateway Protocol (BGP)|Border Gateway Protocol]])
- [[Routed Protocols|routed protocols]] - with routing tables built by routing protocols, routers are able to determine the path to <em>forward</em> a packet within and between autonomous systems

![[Autonomous System (AS) - Domain/1.png|708x250]]
# Autonomous System Types

```merge-table
{
  "rows": [
    [
      {
        "content": "AS Types",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Non-Transit AS (Subscriber AS)",
        "bg": "#F4F5F7"
      },
      "an AS does not let transit traffic from another AS pass through itself\n\ntypes of Non-Transit AS:\n- <strong>Stub AS</strong> - an AS connected to only one other AS\n- <strong>Multi-Homed AS</strong> - an AS connected to more than one other AS",
      "- <strong>Stub AS</strong> - a corporate network that is connected to an AS is considered to have the same AS number as the AS it is connected to\n- <strong>Multi-Homed AS</strong> - corporate network with several Internet connections to different ISPs"
    ],
    [
      {
        "content": "Transit AS (Provider)",
        "bg": "#F4F5F7"
      },
      "an AS connected to more than one other AS and can be used for transit traffic between autonomous systems\n\ntypes of Transit AS:\n- <strong>Direct Transit AS</strong> - directly connected to subscribers\n- <strong>Indirect Transit AS</strong> - connected to other providers, not directly connected to subscribers",
      "- <strong>Direct Transit AS</strong> - They are usually administered by large Internet service providers (ISPs)\n- <strong>Indirect Transit AS</strong> - backbone networks"
    ]
  ],
  "tableStyle": "width: 98.3824%;"
}
```
# Autonomous System Relationships & Policies

```merge-table
{
  "rows": [
    [
      {
        "content": "AS Relationships & Policies",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Provider-Customer",
        "bg": "#F4F5F7"
      },
      "- providers connects customers to internet\n- customer maybe a corporation or smaller ISP\n- common policy is to advertise\n\t- all routes I know to my customer\n\t- routes learned from customers to everyone"
    ],
    [
      {
        "content": "Customer-Provider",
        "bg": "#F4F5F7"
      },
      "- the other direction of <em>Provider-Customer</em>\n- customer wants\n\t- to get traffic directed to him by his provider\n\t- to be able to send traffic to the rest of the Internet through his provider\n- common policy is to\n\t- advertise own prefixes and routes learned from own customers to provider\n\t- but don't advertise routes learned from one provider to another"
    ],
    [
      {
        "content": "Peer",
        "bg": "#F4F5F7"
      },
      "- is symmetrical peering between autonomous systems\n- 2 providers can get access to each other's customers without having to pay another provider\n- common policy\n\t- advertise routes learned from own customers to peer\n\t- advertise routes from peer to own customers\n\t- but don't advertise routes from peer to any provider or vice versa"
    ]
  ]
}
```

![[Autonomous System (AS) - Domain/2.png|500]]
