---
title: "IPv4 - Address Classes (now obsolete)"
created: 2019-11-17T21:53:58.325-06:00
modified: 2021-10-05T02:38:26.179-05:00
parent: "[[IPv4 - Address]]"
children: []
---
###### IP Address Classes
- are hierarchical
- contain 2 parts:
	- <strong>network prefix</strong>
		- identifies the network to which the host is attached to
		- con be coalesced into [[IPv4 - Supernetting (CIDR)|supernets (CIDR)]]
	- <strong>host suffix</strong>
		- identifies each host uniquely within the particular network
		- can be further split up into [[IPv4 - Subnetting|subnets]]
- are separated into 5 classes (identified by the most significant bits)

![[IPv4 - Address Classes (now obsolete)/5.png|400]]
````excerpt
# IPv4 Address Classes<font style="color: rgb(255,0,0);"> (now obsolete)</font>

```merge-table
{
  "rows": [
    [
      {
        "content": "Class",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "First Bits",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "IP Address Range",
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
      "A",
      "0",
      "0.X.X.X - [[IPv4 - Source／Loopback／Localhost Address|127.X.X.X]]\n\n00000000.X.X.X - 01111111.X.X.X",
      "- 8-bits for network-prefix\n- 24 bits for host-suffix"
    ],
    [
      "B",
      "10",
      "128.X.X.X - 191.X.X.X\n\n10000000.X.X.X - 10111111.X.X.X",
      "- 16-bits for network-prefix\n- 16 bits for host-suffix"
    ],
    [
      "C",
      "110",
      "192.X.X.X - 233.X.X.X\n\n11000000.X.X.X - 11011111.X.X.X",
      "- 24-bits for network-prefix\n- 8 bits for host-suffix"
    ],
    [
      "[[IPv4 - Multicast／Group／Class-D Addresses|D]]",
      "1110",
      "224.X.X.X - 239.X.X.X\n\n11100000.X.X.X - 11101111.X.X.X",
      "- for multicast purposes"
    ],
    [
      "E",
      "1111",
      "240.X.X.X - 255.X.X.X\n\n11110000.X.X.X - 11111111.X.X.X",
      "- for experimental purposes"
    ]
  ],
  "tableStyle": "width: 99.9141%;"
}
```
````
^excerpt
