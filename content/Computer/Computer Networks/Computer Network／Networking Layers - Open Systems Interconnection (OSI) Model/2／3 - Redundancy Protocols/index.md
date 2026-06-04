---
title: "2／3 - Redundancy Protocols"
created: 2025-08-27T13:38:51.561-05:00
modified: 2025-08-27T13:45:54.106-05:00
parent: "[[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model]]"
children:
  - "[[Virtual Router Redundancy Protocol (VRRP)]]"
---
###### Redundancy Protocols
````excerpt
- are designed to ensure high availability for network devices or services, usually by providing backup paths or failover mechanisms
- most operate at [[2 - Data Link Layer|Layer 2]] or [[3 - Network Layer|Layer 3]]
````
^excerpt

# Spanning Tree Protocols (STP/RSTP/MSTP)

These operate at Layer 2 to provide loop-free redundant paths in Ethernet networks.

```merge-table
{
  "rows": [
    [
      {
        "content": "Protocol",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Layer",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Notes",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Spanning Tree Protocol (STP)",
        "bg": "#F4F5F7"
      },
      "2",
      "Original IEEE 802.1D; disables loops by blocking redundant links."
    ],
    [
      {
        "content": "Rapid Spanning Tree Protocol (RSTP)",
        "bg": "#F4F5F7"
      },
      "2",
      "IEEE 802.1w; faster convergence than STP."
    ],
    [
      {
        "content": "Multiple Spanning Tree Protocol (MSTP)",
        "bg": "#F4F5F7"
      },
      "2",
      "IEEE 802.1s; allows multiple VLANs to use different spanning trees."
    ]
  ]
}
```
# Link Aggregation / NIC Teaming

Provides redundant links for bandwidth and failover.

```merge-table
{
  "rows": [
    [
      {
        "content": "Protocol",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Layer",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Notes",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Link Aggregation Control Protocol (LACP)",
        "bg": "#F4F5F7"
      },
      "2",
      "IEEE 802.3ad; multiple physical links appear as one logical link."
    ],
    [
      {
        "content": "Active/Backup NIC Teaming",
        "bg": "#F4F5F7"
      },
      "2",
      "One link active, others take over if it fails."
    ]
  ]
}
```
# First Hop Redundancy Protocols (FHRP)

These provide a highly available default gateway.

```merge-table
{
  "rows": [
    [
      {
        "content": "Protocol",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Layer",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Notes",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Virtual Router Redundancy Protocol (VRRP)",
        "bg": "#F4F5F7"
      },
      "3",
      "Open standard; elects a master router for a virtual IP."
    ],
    [
      {
        "content": "Hot Standby Router Protocol (HSRP)",
        "bg": "#F4F5F7"
      },
      "3",
      "Cisco proprietary; similar to VRRP."
    ],
    [
      {
        "content": "Gateway Load Balancing Protocol (GLBP)",
        "bg": "#F4F5F7"
      },
      "3",
      "Cisco proprietary; provides both redundancy and load balancing."
    ],
    [
      {
        "content": "Common Address Redundancy Protocol (CARP)",
        "bg": "#F4F5F7"
      },
      "3",
      "OpenBSD/FreeBSD; similar to VRRP."
    ]
  ],
  "tableStyle": "letter-spacing: 0.0px;"
}
```
