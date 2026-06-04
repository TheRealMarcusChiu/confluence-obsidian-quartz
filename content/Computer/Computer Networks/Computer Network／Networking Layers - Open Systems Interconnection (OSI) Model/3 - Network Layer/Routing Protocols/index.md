---
title: "Routing Protocols"
created: 2019-03-16T20:48:31.076-05:00
modified: 2023-11-16T17:28:59.544-06:00
parent: "[[3 - Network Layer]]"
children:
  - "[[Dynamic Routing Protocols]]"
  - "[[Multicast Routing Protocols]]"
---
###### Routing Protocols
````excerpt
- are [[Computer Network／Networking Communication Protocols|network protocols]] (that operate at the [[3 - Network Layer|network layer]]) used by routers to find all networks in the internetwork, update the routing table, and ensure all routers have the same <em>routing-table</em>. This same table helps [[Routed Protocols|routed protocols]] determine the path of an [[Internet Protocol (IP)|IP]] packet through an internetwork
- <strong>Routing Convergence</strong> is the time required by routing protocols to update the <em>routing-tables</em> (forwarding tables) on all routers in a network
````
^excerpt

# Routing Protocols Categories
- [[Dynamic Routing Protocols|dynamic routing]] or static routing
- proactive, reactive, or hybrid
- unicast routing or [[Multicast Routing Protocols|multicast routing]]

# Dynamic vs Static

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
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
        "content": "[[Dynamic Routing Protocols]]",
        "bg": "#F4F5F7"
      },
      "dynamically updates <em>routing-tables</em>"
    ],
    [
      {
        "content": "Static Routing",
        "bg": "#F4F5F7"
      },
      "manual updates <em>routing-tables</em> (rarely used)"
    ]
  ]
}
```
# Proactive vs Reactive vs Hybrid

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Description",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Example Routing Protocols",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "proactive routing",
        "bg": "#F4F5F7"
      },
      "- continuously updates <em>routing-tables</em>\n- works well when network topology slowly changes or static",
      "- <em>[[Distant Vector Protocols|Distance-Vector]]</em>\n- <em>[[Open Shortest Path First (OSPF)|Open Shortest Path First]]</em>"
    ],
    [
      {
        "content": "reactive routing",
        "bg": "#F4F5F7"
      },
      "- only updates <em>routing-tables</em> upon demand (i.e when router receives an IP packet and needs to determine its path through an internetwork)\n- works well when network topology changes frequently\n- can lead to delay and is not appropriate for real-time traffic",
      "- <em>On-Demand [[Distant Vector Protocols|Distance Vector]]</em>\n- <em>Dynamic [[Packet Switching - Datagram, Virtual Circuit, Source Routing|Source Routing]]</em>"
    ],
    [
      {
        "content": "hybrid",
        "bg": "#F4F5F7"
      },
      "- a mix of proactive and reactive",
      "- <em>Zone Routing Protocol</em>"
    ]
  ],
  "tableStyle": "width: 99.9186%;"
}
```
# Unicast vs Multicast

```merge-table
{
  "rows": [
    [
      {
        "content": "Type",
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
        "content": "Unicast Routing",
        "bg": "#F4F5F7"
      },
      "updates <em>unicast-routing-tables</em> for unicast forwarding"
    ],
    [
      {
        "content": "[[Multicast Routing Protocols|Multicast Routing]]",
        "bg": "#F4F5F7"
      },
      "updates <em>multicast-routing-tables</em> for multicast forwarding"
    ]
  ]
}
```
