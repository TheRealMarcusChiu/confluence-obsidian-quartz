---
title: "IPv4 - Packet Header Format"
created: 2019-09-03T13:50:22.364-05:00
modified: 2019-11-09T19:47:37.295-06:00
parent: "[[IPv4]]"
children: []
---
- <strong>Version</strong>
	- specifies version of [[Internet Protocol (IP)|IP]]
	- current version is [[IPv4]]
	- future version is [[IPv6]]
- <strong>HLen</strong>
	- header length in size of 32-bit words
	- maximum header length = 2<sup>4</sup> = 16 (i.e. 64 bytes)
	- most of the time Hlen = 5 32-bit words(without options and pad fields)
- <strong>TOS (Type of Service)</strong>
	- basic function is to allow packets to be treated differently based on application needs
- <strong>Length</strong>
	- length of datagram including header in bytes
	- Maximum Datagram Size (including header) = 2<sup>16</sup>- 1 = 65,535 bytes
	- Length = HLen + size(Data)
	- IP supports <em>fragmentation and reassembly</em> process for lower layer protocols
- fields used for [[IPv4 - Fragmentation & Assembly|fragmentation and reassembly]]
	- <strong>Ident (Identifier)</strong>
		- all fragments of same IP datagram carry the same identifier
	- <strong>Flags (3 bits)</strong>
		- bit 0: Reserved; must be zero
		- bit 1: Don't Fragment (DF)
		- bit 2: More Fragments (MF)
	- <strong>Offset (13 bits)</strong>
		- counts 8-byte chunks, not bytes
- <strong>TTL (Time to Live)</strong>
	- TTL initial default value = 64
	- used to prevent an IP datagram from looping eternally within an internetwork
	- routers would decrement this field by 1 until it reached 0 in which case it would drop it
- <strong>Protocol</strong>
	- a demultiplexing key that identifies the [[4 - Transport Layer|transport layer]] protocols (e.g. [[Transmission Control Protocol (TCP)|TCP]], [[Universal／User Datagram Protocol (UDP)|UDP]], etc)
- <strong>Checksum</strong>
	- Checksum = the result of [checksum algorithm](http://doc.marcuschiu.com/) of IP header as a sequence of 16-bit words, adding them up using ones complement arithmetic, and taking the ones complement of the result
	- not the same as [CRC](http://doc.marcuschiu.com/) but is much easier to calculate
- <strong>SourceAddr </strong>- example,172.217.6.142
- <strong>DestinationAddr </strong>- example, 208.67.222.222
- <strong>Options</strong> (optional)
- <strong>Pad</strong> (optional)
- <strong>Data</strong>
	- size of data is determined by header size
	- Maximum Data Size = 65,535 - header size
	- Data Size = Length - HLen

![[IPv4 - Packet Header Format/ipv4-packet-header-format.png]]
