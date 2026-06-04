---
title: "Packets - Protocol Data Unit (PDU) - Maximum Transmission Unit (MTU) - Path MTU (PMTU) - Maximum Frame Size (MFS) - Maximum Datagram Size (MDS) - Maximum Segment Size (MSS)"
created: 2019-05-07T14:06:11.457-05:00
modified: 2026-05-21T02:55:36.386-05:00
parent: "[[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model]]"
children: []
---
# Protocol Data Unit (PDU)
- PDU is a single unit of information transmitted among peer entities of the OSI network layers
- for example:
	- the PDU of the [[1 - Physical Layer|physical layer]] are bits
	- the PDU of the [[2 - Data Link Layer|data link layer]] are frames
	- the PDU of the [[3 - Network Layer|network layer]] are datagrams, packets
	- the PDU of the [[4 - Transport Layer|transport layer]] are segments
		- [[Transmission Control Protocol (TCP)|TCP]] segments are referred as packets
		- [[Universal／User Datagram Protocol (UDP)|UDP]] segments are referred as datagrams
	- the PDU of [[5 - Session Layer|session]], [[6 - Presentation Layer|presentation]], and [[7 - Application Layer|application]] layer are data

# Maximum Transmission Unit (MTU)
- MTU is the size of the largest PDU that can be communicated in a single network layer transaction
- MTU is often considered a property of a network link, and will generally refer to the layer 2 MTU (i.e. Maximum Frame Data Size)

# Path MTU (PMTU)
- Path MTU is the smallest MTU supported by any of the hops on the path between a source and destination
- Path MTU is the largest packet size that can traverse this path without suffering fragmentation

# Path MTU Discovery (PMTUD)

Path MTU Discovery works by sending packets with the DF (don't fragment) option in the [[IPv4 - Packet Header Format|IP header]] set. Any device along the path whose MTU is smaller than the packet will drop such packets and send back an [ICMP Destination Unreachable (Datagram Too Big)](https://en.wikipedia.org/wiki/ICMP_Destination_Unreachable) message which indicates its MTU

```merge-table
{
  "rows": [
    [
      {
        "content": "Network Layer",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Protocol Data Unit (PDU)",
        "header": true,
        "bg": "#F4F5F7"
      },
      {
        "content": "Maximum Thing Name",
        "header": true,
        "bg": "#F4F5F7"
      }
    ],
    [
      "[2 Data Link Layer](http://confluence.marcuschiu.com/display/NOT/2+-+Data+Link+Layer)",
      "frames",
      "- <strong><strong>MTU (</strong>Maximum Transmission Unit)</strong>\n\t- [[802.3 - Ethernet|Ethernet]], default MTU is 1500 bytes\n\t- [[Wireless]], default MTU is 2,312 bytes (including packet header)\n- <strong>MFS (Maximum Frame Size) </strong>= MTU + Layer2Header\n- <strong><strong>MFDS (</strong>Maximum Frame Data Size) </strong>= MTU = MDS = MFS - Layer2Header"
    ],
    [
      "[3 Network Layer](http://confluence.marcuschiu.com/display/NOT/3+-+Network+Layer)",
      "datagrams\n- [[Internet Protocol (IP)|IP]] packets",
      "- <strong>MDS (Maximum Datagram Size)</strong> = MFDS = MDDS + Layer3Header\n- <strong>MDDS (Maximum Datagram Data Size)</strong> = MDS - Layer3Header = MSS"
    ],
    [
      "[4 Transport Layer](http://confluence.marcuschiu.com/display/NOT/4+-+Transport+Layer)",
      "segments\n- [[Transmission Control Protocol (TCP)|TCP]] packets\n- [[Universal／User Datagram Protocol (UDP)|UDP]] datagrams",
      "- <strong>MSS (Maximum Segment Size) </strong>= MDDS = MSDS + Layer4Header\n- <strong>MSDS (Maximum Segment Data Size) </strong>= MSS - Layer4Header"
    ]
  ],
  "tableStyle": "width: 100.0%;"
}
```

![[Packets - Protocol Data Unit (PDU) - Maximum Transmission Unit (MTU) - Path MTU (PMTU) - Maximum Frame Size (MFS) - Maximum Datagram Size (MDS) - Maximum Segment Size (MSS)/3.jpg|315x197]]
# Choosing MSS/MSDS Value - Detailed
The [[802.3 - Ethernet|Ethernet]] <strong>MTU</strong> is 1500 bytes, meaning the <strong>Maximum Frame Data Size (MFDS)</strong> = <strong>MTU</strong> = 1500 bytes. Adding 26 bytes for the [[Ethernet - Frame Format|Ethernet header]] results in a <strong>Maximum Frame Size</strong><strong> (MFS)</strong> of 1526 bytes (not the same as MTU) 

The length of an [[Internet Protocol (IP)|IP]] packet is limited by the maximum value of the 16 bit Total Length field in the IP header ([[IPv4 - Packet Header Format|IPv4]] and [[IPv6 - Packet Header Format|IPv6]]) allowing a <strong>Maximum Datagram Size (MDS)</strong> of 2<sup>16</sup>-1 = 65,535 bytes:
- IPv4 has a 20 byte header, resulting in a<strong> Maximum Datagram Data Size (MDDS)</strong> of 65,515 bytes
- IPv6 has a 40 byte header, resulting in a<strong> Maximum Datagram Data Size (MDDS) </strong>of 65,495 bytes

When setting up a [[Transmission Control Protocol (TCP)|TCP]] connection, a <strong>Maximum Segment Data Size (MSDS)</strong> is agreed upon. It is often set to the largest payload that can be sent in a TCP segment without causing fragmentation of IP datagrams (breakage of datagrams into smaller frames), thus reflecting the lowest layer 2 MTU on the path.
- With an Ethernet MTU of 1500, the MSDS would be 1460 after subtracting 20-byte IPv4 header and 20-byte TCP header
  <font style="color: rgb(128,128,128);"><strong>MSDS</strong> = <strong>MTU</strong> - TCPHdrLen - IPHdrLen</font>

\*\*\*sometimes <strong>MSDS </strong>is simplified to<strong> Maximum Segment Size (MSS) </strong>since MSDS = MDDS\*\*\*
# Choosing MSS/MSDS Value - Simple (Plus Notifying MSS/MSDS to the Other End)
- The [[Network Interface Controller／Card (NIC) - Network Adapter - LAN Adapter - Physical Network Interface|Network Interface Controller/Card (NIC) - Network Adapter - LAN Adapter - Physical Network Interface]] should know the <strong>MTU</strong> of the directly attached network
- The IP should ask the Network Driver for the <strong>MTU</strong>
- The TCP should ask the IP for the <strong>MDDS</strong>. this is the <strong>MTU</strong> minus the [[IPv4 - Packet Header Format|IP header]] length
  <font style="color: rgb(128,128,128);"><strong>MDDS</strong> = <strong>MTU</strong> - IPHdrLen</font>
- When opening a connection, TCP can send an <strong>MSS/MSDS</strong> option with the value equal to:
  <font style="color: rgb(128,128,128);"><strong>MSS/MSDS</strong> = <strong>MTU</strong> - TCPHdrLen - IPHdrLen</font>
  <font style="color: rgb(128,128,128);"><strong><strong>MSS/MSDS</strong><font style="color: rgb(128,128,128);"> = </font>MDDS</strong><font style="color: rgb(128,128,128);"> - TCPHdrLen</font></font>

# While Sending TCP Segments to the Other End
- TCP should determine the <strong>MSDS</strong> from either the default or the received <strong>MSS/MSDS</strong> value from other side
- TCP should determine if source fragmentation is possible (by asking the IP) and desirable
	- If so, TCP may hand to IP, segments (including the TCP header) up to <strong>MSDS</strong> + TCPHdrLen
	- If not, TCP may hand to IP, segments (including the TCP header) up to the lesser of (MSDS + TCPHdrLen) and <strong>MDDS</strong>
- IP checks the length of data passed to it by TCP. If the length is less than or equal <strong>MDDS</strong>, IP attaches the IP header and hands it to the ND. Otherwise the IP must do source fragmentation
