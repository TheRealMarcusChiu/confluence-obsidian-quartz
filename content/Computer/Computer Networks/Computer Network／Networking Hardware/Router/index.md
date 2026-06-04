---
title: "Router"
created: 2019-03-16T23:27:50.632-05:00
modified: 2023-02-19T15:50:11.203-06:00
parent: "[[Computer Network／Networking Hardware]]"
children:
  - "[[Router Firmware]]"
  - "[[Router Hardware]]"
---
###### Router
- is a network gateway device that connects two or more networks
- routers usually operate at the [[3 - Network Layer|network layer]] of the [[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model|OSI model]]

# Router Types

```merge-table
{
  "rows": [
    [
      {
        "content": "home routers",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- are more [[Network Address Translation (NAT)|NAT]] gateways (therefore operate at the [[4 - Transport Layer|transport layer]])"
    ],
    [
      {
        "content": "industrial routers",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- <strong>[[Exterior Gateway Protocols (EGPs) or Inter-Domain Routing Protocols (IDRP)|EGP]]</strong><strong> routers</strong> - routers that speak across [[Autonomous System (AS) - Domain|autonomous systems]]\n\t- [[Border Router - BGP Speaker]]\n- <strong>[[Interior Gateway Protocols (IGP) or Intra-Domain Routing Protocols (IDRP)|IGP]]</strong><strong> routers</strong> - routers that speak within autonomous systems"
    ]
  ]
}
```
# Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

- [[Raspberry Pi - Router]]
- [[Switch & Router Implementation|router implementation]]
