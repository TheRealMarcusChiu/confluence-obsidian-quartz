---
title: "Network Switch"
created: 2019-03-16T23:27:10.676-05:00
modified: 2024-07-04T18:59:00.009-05:00
parent: "[[Computer Network／Networking Hardware]]"
children:
  - "[[Network Switch Brands]]"
  - "[[Network Switch Chips]]"
  - "[[Spine & Leaf Architecture - Spine Switch vs Leaf Switch]]"
---
# Switch - Intro
- switches operate at [[2 - Data Link Layer|Data Link Layer 2]][[2 - Data Link Layer]]of the OSI model
- a switch is a multi-input, multi-output (MIMO) device (i.e. transfers packets from an input to one or more outputs)
- switches identifies 2 things:
	- a way to identify the host address:
		- [[802.3 - Ethernet|Ethernet]] 48-bit [[Ethernet - Media Access Control (MAC) Address - Physical Hardware Address|MAC address]] (addresses are assumed to be a <em>globally unique</em> identifier)
	- a way to identify port:
		- by number
		- by name
- switches contain:
	- [[Routing Tables - Forwarding Tables|forwarding table]]
		- tells switch how to forward a packet
		- used in [[Packet Switching - Datagram, Virtual Circuit, Source Routing|Datagram scheme]]
	- <strong>virtual table</strong>
		- tells switch how to forward a packet
		- used in [[Packet Switching - Datagram, Virtual Circuit, Source Routing|Virtual Circuit scheme]]

# Switch - Types

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Switch Type</strong>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<strong><strong>Managed Switches</strong></strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Unmanaged Switches</strong>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "Features",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Dynamic ARP Inspection, IPv4 DHCP snooping, QoS, SNMP, VLAN, CLI, IP routing, port mirroring, redundancy, etc.",
        "align": "left"
      },
      {
        "content": "Fixed configuration—doesn’t support any configuration interface or options",
        "align": "left"
      }
    ],
    [
      {
        "content": "Performance",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Switch can be configured Control over Access Control over LAN traffic—Priority SNMP—Allows for remote troubleshooting of the network",
        "align": "left"
      },
      {
        "content": "Plug and play with limited configurations like default QoS settings",
        "align": "left"
      }
    ],
    [
      {
        "content": "Security",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Very good. Provide protection of the data plane, control plane, and management plane",
        "align": "left"
      },
      {
        "content": "Not very good. No security other than accessories such as a lockable port cover",
        "align": "left"
      }
    ],
    [
      {
        "content": "Costs",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Expensive",
        "align": "left"
      },
      {
        "content": "Less expensive",
        "align": "left"
      }
    ],
    [
      {
        "content": "Application Places",
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Data centers, large-size enterprise networks",
        "align": "left"
      },
      {
        "content": "Small-size business network, home, lab, conference rooms, etc.",
        "align": "left"
      }
    ]
  ]
}
```
# Switch - Ways Switches Forward Packets
- [[CN - Chapter 3 - Internetworking]]
	- [[Packet Switching - Datagram, Virtual Circuit, Source Routing]]

# Switch - Subpages
```dataview
LIST
FROM ""
WHERE file.folder = this.file.folder + "/" + this.file.name
```

# Switch - Implementations
- [[Switch & Router Implementation]]
