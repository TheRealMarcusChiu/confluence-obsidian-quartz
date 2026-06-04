---
title: "IPv6 - Packet Header Format"
created: 2019-11-07T15:21:56.352-06:00
modified: 2019-11-09T11:28:06.562-06:00
parent: "[[IPv6]]"
children: []
---
### IPv6 Format Diagram

```merge-table
{
  "rows": [
    [
      {
        "content": "<em>Offsets</em>",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Octet",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 8
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      {
        "content": "1",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 8
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      {
        "content": "2",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 8
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      {
        "content": "3",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center",
        "colspan": 8
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      {
        "content": "Octet",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "Bit",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "1",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "2",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "3",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "4",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "5",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "6",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "7",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "8",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "9",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "10",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "11",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "12",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "13",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "14",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "15",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "16",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "17",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "18",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "19",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "20",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "21",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "22",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "23",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "24",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "25",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "26",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "27",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "28",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "29",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "30",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "31",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "0",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "0",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Version</em>",
        "colspan": 4
      },
      null,
      null,
      null,
      {
        "content": "<em>Traffic Class</em>",
        "colspan": 8
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      {
        "content": "<em>Flow Label</em>",
        "colspan": 20
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      {
        "content": "4",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "32",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Payload Length</em>",
        "colspan": 16
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      {
        "content": "<em>Next Header</em>",
        "colspan": 8
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      {
        "content": "<em>Hop Limit</em>",
        "colspan": 8
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      {
        "content": "8",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "64",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Source Address</em>",
        "align": "center",
        "colspan": 32,
        "rowspan": 4
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      {
        "content": "12",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "96",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "16",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "128",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "20",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "160",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "24",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "192",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "<em>Destination Address</em>",
        "align": "center",
        "colspan": 32,
        "rowspan": 4
      },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    ],
    [
      {
        "content": "28",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "224",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "32",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "256",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ],
    [
      {
        "content": "36",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      },
      {
        "content": "288",
        "header": true,
        "bg": "#F4F5F7",
        "align": "center"
      }
    ]
  ],
  "tableStyle": "text-align: center;"
}
```
### IPv6 Format Description
- <strong>Version (4 bits)</strong> - The constant 6 (bit sequence 0110).
- <strong>Traffic Class (6+2 bits)</strong> - The bits of this field hold two values. The six most-significant bits hold the Differentiated Services (DS) field, which is used to classify packets. Currently, all standard DS fields end with a '0' bit. Any DS field that ends with two '1' bits is intended for local or experimental use. The remaining two bits are used for Explicit Congestion Notification (ECN); priority values subdivide into ranges: traffic where the source provides congestion control and non-congestion control traffic.
- <strong>Flow Label (20 bits)</strong> - A high-entropy identifier of a flow of packets between a source and destination. A flow is group of packets, e.g., a TCP session or a media stream. The special flow label 0 means the packet does not belong to any flow (using this scheme). An older scheme identifies flow by source address and port, destination address and port, protocol (value of the last Next Header field). It has further been suggested that the flow label be used to help detect spoofed packets.
- <strong>Payload Length (16 bits)</strong> - The size of the payload in octets, including any extension headers. The length is set to zero when a Hop-by-Hop extension header carries a Jumbo Payload option.
- <strong>Next Header (8 bits)</strong> - Specifies the type of the next header. This field usually specifies the transport layer protocol used by a packet's payload. When extension headers are present in the packet this field indicates which extension header follows. The values are shared with those used for the IPv4 protocol field, as both fields have the same function (see List of IP protocol numbers).
- <strong>Hop Limit (8 bits)</strong> - Replaces the time to live field of IPv4. This value is decremented by one at each forwarding node and packet discarded if it becomes 0. However destination node should process the packet normally even if hop limit becomes 0.
- <strong>Source Address (128 bits)</strong> - The IPv6 address of the sending node.
- <strong>Destination Address (128 bits)</strong> - The IPv6 address of the destination node(s)

In order to increase performance, and since current [[2 - Data Link Layer|link layer]] technology and [[4 - Transport Layer|transport]] or [[7 - Application Layer|application]] layer protocols are assumed to provide sufficient error detection, the header has no [[Error Detection - Checksum|checksum]] to protect it.
