---
title: "Network Address Translation (NAT)"
created: 2019-07-11T14:19:31.695-05:00
modified: 2026-05-27T11:27:25.534-05:00
parent: "[[？ - Mixed／Other Layers]]"
children:
  - "[[Address Port Restricted Cone NAT]]"
  - "[[Address Restricted Cone NAT]]"
  - "[[Full Cone NAT - Port Forwarding]]"
  - "[[Symmetric NAT]]"
---
###### Network Address Translation (NAT)
````excerpt
- is an OSI cross-layer process, involving layers 3 ([[IPv4|IP]]) and 4 ([[Transmission Control Protocol (TCP)|TCP]], [[Universal／User Datagram Protocol (UDP)|UDP]], etc) and in some cases also [[7 - Application Layer|layer 7 (application)]]
````
^excerpt

# NAT - Common Traits

Every [[Transmission Control Protocol (TCP)|TCP]] packet contains a source [[Internet Protocol (IP)|IP]] address, source port, destination IP address, and destination port. <strong>All types of NAT</strong> create NAT mappings using these values. For example, a connection from an internal client with IP 192.168.0.1 using port 56876 may go to a website IP 56.45.78.89 (destination IP address) on port 80 (destination port) using IP of 45.34.78.98 (translated source IP) and port 56876 (source port). NAT creates a mapping using these 4 values to the 192.168.0.1 internal client for that specific connection. When packets come back from the website to the router using the same values associated with that mapping NAT forwards the packets to the internal client.

<strong>Don't confuse NAT Restriction with NAT Translation</strong> – For example, a [[Full Cone NAT - Port Forwarding|Full Cone NAT]] only looks at the destination port when choosing whether to accept the connection or not (the restriction). When it does the actual the NAT translation however, it always uses the 4 values mentioned above.
# NAT - Categories
- <strong>Static NAT</strong> - the NAT mappings are manually set up and are usually associated with inbound types of NAT
- <strong>Dynamic NAT</strong> - the NAT mappings are automatically set up on demand and are usually associated with outbound types of NAT

# NAT - Translation Methods

see: [https://www.youtube.com/watch?v=FExZvpVvYxA&t=1014s](https://www.youtube.com/watch?v=FExZvpVvYxA&t=1014s)

```merge-table
{
  "rows": [
    [
      {
        "content": "Translation Method",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Category",
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
        "content": "[[Full Cone NAT - Port Forwarding]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "STATIC",
        "align": "center"
      },
      "- once an internal address (iAddr:iPort) is mapped to an external address (eAddr:ePort), any packets from iAddr:iPort are sent through eAddr:ePort\n- any external host can send packets to iAddr:iPort by sending packets to eAddr:ePort"
    ],
    [
      {
        "content": "[[Address Restricted Cone NAT]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "DYNAMIC",
        "align": "center"
      },
      "- once an internal address (iAddr:iPort) is mapped to an external address (eAddr:ePort), any packets from iAddr:iPort are sent through eAddr:ePort\n- an external host (hAddr:any) can send packets to iAddr:iPort by sending packets to eAddr:ePort only if iAddr:iPort has previously sent a packet to hAddr:any. \"Any\" means the port number doesn't matter."
    ],
    [
      {
        "content": "[[Address Port Restricted Cone NAT]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "DYNAMIC",
        "align": "center"
      },
      "- once an internal address (iAddr:iPort) is mapped to an external address (eAddr:ePort), any packets from iAddr:iPort are sent through eAddr:ePort\n- an external host (hAddr:hPort) can send packets to iAddr:iPort by sending packets to eAddr:ePort only if iAddr:iPort has previously sent a packet to hAddr:hPort"
    ],
    [
      {
        "content": "[[Symmetric NAT]]",
        "bg": "#F4F5F7"
      },
      {
        "content": "DYNAMIC",
        "align": "center"
      },
      "- each request from the same internal IP address and port to a specific destination IP address and port is mapped to a unique external source IP address and port; if the same internal host sends a packet even with the same internal IP address and port but to a different destination, a different mapping is used\n- only an external host that receives a packet from an internal host can send a packet back"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```
# NAT - Translation Methods Comparison

Let's say the NAT device has public IP address 5.5.5.5 and it assigned an internal computer with a private IP address 10.0.0.2

![[Network Address Translation (NAT)/nat.png|301x84]]

Let's also say that the NAT device contains a STATIC mapping

```merge-table
{
  "rows": [
    [
      {
        "content": "Internal IP",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Internal Port",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "External IP",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "External Port",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "10.0.0.2",
      "8992",
      "5.5.5.5",
      "3333"
    ]
  ]
}
```

Let's also say that the NAT device contains the following DYNAMIC mappings

```merge-table
{
  "rows": [
    [
      {
        "content": "Internal IP",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Internal Port",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "External IP",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "External Port",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Destination IP",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Destination Port",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "10.0.0.2",
      "8992",
      "5.5.5.5",
      "3333",
      "4.4.4.4",
      "80"
    ],
    [
      "10.0.0.2",
      "8888",
      "5.5.5.5",
      "2222",
      "3.3.3.3",
      "8080"
    ]
  ]
}
```

Given the STATIC and DYNAMIC mappings above, let's simulate incoming packets sent to the NAT device of each of the following Translation Methods

```merge-table
{
  "rows": [
    [
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Packet Details",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null,
      {
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "rowspan": 7
      },
      {
        "content": "Translation Methods",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 4
      },
      null,
      null,
      null
    ],
    [
      {
        "content": "Packet Number",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Source IP",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Source Port",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Dest IP",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Dest Port",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Full Cone NAT - Port Forwarding|Full Cone]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Address Restricted Cone NAT|Address Restricted]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Address Port Restricted Cone NAT|Address Port Restricted]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "[[Symmetric NAT|Symmetric]]",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "1",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "4.4.4.4",
        "align": "center"
      },
      {
        "content": "80",
        "align": "center"
      },
      {
        "content": "5.5.5.5",
        "align": "center"
      },
      {
        "content": "3333",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      }
    ],
    [
      {
        "content": "2",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "3.3.3.3",
        "align": "center"
      },
      {
        "content": "8080",
        "align": "center"
      },
      {
        "content": "5.5.5.5",
        "align": "center"
      },
      {
        "content": "3333",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "3",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "3.3.3.3",
        "align": "center"
      },
      {
        "content": "22",
        "align": "center"
      },
      {
        "content": "5.5.5.5",
        "align": "center"
      },
      {
        "content": "3333",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "4",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "9.8.1.2",
        "align": "center"
      },
      {
        "content": "23",
        "align": "center"
      },
      {
        "content": "5.5.5.5",
        "align": "center"
      },
      {
        "content": "3333",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(0,128,0);\">PASS</font>",
        "bg": "#e3fcef",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      }
    ],
    [
      {
        "content": "5",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "9.8.1.2",
        "align": "center"
      },
      {
        "content": "23",
        "align": "center"
      },
      {
        "content": "5.5.5.5",
        "align": "center"
      },
      {
        "content": "22",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      },
      {
        "content": "<font style=\"color: rgb(255,0,0);\">DROP</font>",
        "bg": "#ffebe6",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "width: 69.1231%;"
}
```
