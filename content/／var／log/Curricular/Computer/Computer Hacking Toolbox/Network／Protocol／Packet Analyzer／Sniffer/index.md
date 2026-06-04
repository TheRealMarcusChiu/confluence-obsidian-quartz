---
title: "Network／Protocol／Packet Analyzer／Sniffer"
created: 2019-03-16T03:02:35.542-05:00
modified: 2023-05-11T19:19:01.476-05:00
parent: "[[Computer Hacking Toolbox]]"
children:
  - "[[Ettercap]]"
  - "[[Wireshark (Ethereal)]]"
  - "[[tcpdump]]"
  - "[[tshark]]"
---
###### Packet Sniffer/Analyzer
````excerpt
- also known as a <strong>network analyzer</strong>, <strong>protocol analyzer,</strong> or <strong>packet sniffer</strong>—or, for particular types of networks, an <strong>Ethernet sniffer</strong> or <strong>wireless sniffer</strong>
- is a computer program or piece of computer hardware that can intercept and log traffic that passes over a network
````
^excerpt

# Packet Sniffer/Analyzer - Software

```merge-table
{
  "rows": [
    [
      {
        "content": "[[Wireshark (Ethereal)]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- powerful sniffer which can decode lots of protocols, lots of filters"
    ],
    [
      {
        "content": "[[tshark]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- command line version of Wireshark"
    ],
    [
      {
        "content": "dumpcap",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- part of Wireshark\n- can only capture traffic and can be used by Wireshark/tshark"
    ],
    [
      {
        "content": "[[Ettercap]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- used for injecting traffic not sniffing\n- sniffer for switched LANs"
    ],
    [
      {
        "content": "[[tcpdump]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- outputs the localhost's TCP/IP activity\n- limited protocol decoding but available on most \\*NIX platforms\n- wireshark/tshark/dumpcap can use tcpdump filter syntax as a capture filter"
    ],
    [
      {
        "content": "ngrep",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- network [[grep]]"
    ],
    [
      {
        "content": "libpcap/winpcap/libnet",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sniffing and injection\n- wireshark/tshark use libpcap (on windows winpcap) for sniffing"
    ],
    [
      {
        "content": "libnids",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- packet reassembly library"
    ],
    [
      {
        "content": "dsniff",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- sniffing, man-in-the-middle attacks"
    ],
    [
      {
        "content": "hunt",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- hijacking"
    ],
    [
      {
        "content": "[[nmap]]",
        "header": true,
        "bg": "#F4F5F7"
      },
      "- port scanning tool"
    ]
  ],
  "tableStyle": "width: 76.25%;"
}
```
