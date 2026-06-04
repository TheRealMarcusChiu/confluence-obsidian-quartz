---
title: "IPSec - Encapsulating Security Payload (ESP)"
created: 2019-11-09T20:52:18.665-06:00
modified: 2019-12-03T19:27:40.557-06:00
parent: "[[Internet Protocol Security (IPSec)]]"
children: []
---
![[IPSec - Encapsulating Security Payload (ESP)/IPsec-ESP-modes.png|450]]

![[IPSec - Encapsulating Security Payload (ESP)/ipsec-esp-format.png|400]]

```merge-table
{
  "rows": [
    [
      {
        "content": "<strong>Section</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Field Name</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Size (bytes)</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Description</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Encryption Coverage</strong>",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "<strong>Authentication Coverage</strong>",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      {
        "content": "<strong>ESP Header</strong>",
        "bg": "yellow",
        "rowspan": 2
      },
      {
        "content": "<strong><em>SPI</em></strong>",
        "bg": "yellow"
      },
      "4",
      "<strong>Security Parameter Index (SPI):</strong> A 32-bit value that is combined with the destination address and security protocol type to identify the security association to be used for this datagram. [See the topic on security associations for more details](http://www.tcpipguide.com/free/t_IPSecSecurityAssociationsandtheSecurityAssociation.htm).",
      {
        "content": "NO",
        "bg": "red",
        "rowspan": 2
      },
      {
        "content": "from SPI to Next Header",
        "bg": "green",
        "rowspan": 6
      }
    ],
    [
      {
        "content": "<strong><em>Sequence Number</em></strong>",
        "bg": "yellow"
      },
      "4",
      "<strong>Sequence Number:</strong> A counter field initialized to zero when a security association is formed between two devices, and then incremented for each datagram sent using that SA. This is used to provide protection against replay attacks."
    ],
    [
      {
        "content": "<strong>Payload Data</strong>",
        "bg": "blue",
        "colspan": 2
      },
      null,
      "Variable",
      "<strong>Payload Data:</strong> The encrypted payload data, consisting of a higher layer message (e.g. TCP) or encapsulated IP packet/datagram. May also include support information such as an initialization vector, required by certain encryption methods.",
      {
        "content": "from Payload to Next Header",
        "bg": "green",
        "rowspan": 4
      }
    ],
    [
      {
        "content": "<strong>ESP Trailer</strong>",
        "bg": "yellow",
        "rowspan": 3
      },
      {
        "content": "<strong><em>Padding</em></strong>",
        "bg": "yellow"
      },
      "Variable (0 to 255)",
      "<strong>Padding:</strong> Additional padding bytes included as needed for encryption or for alignment."
    ],
    [
      {
        "content": "<strong><em>Pad Length</em></strong>",
        "bg": "yellow"
      },
      "1",
      "<strong>Pad Length:</strong> The number of bytes in the preceding Padding field."
    ],
    [
      {
        "content": "<strong><em>Next Header</em></strong>",
        "bg": "yellow"
      },
      "1",
      "<strong>Next Header:</strong> Contains the protocol number of the next header in the datagram. Used to chain together headers."
    ],
    [
      {
        "content": "<strong>ESP\nAuthentication Data</strong>",
        "bg": "yellow",
        "colspan": 2
      },
      null,
      "Variable",
      "<strong>ESP Authentication Data:</strong> This field contains the <em>Integrity Check Value (ICV)</em> resulting from the application of the optional ESP authentication algorithm.",
      {
        "content": "NO",
        "bg": "red"
      },
      {
        "content": "NO",
        "bg": "red"
      }
    ]
  ],
  "tableStyle": "width: 99.7559%;"
}
```
