---
title: "UDP - Header Format"
created: 2019-11-14T09:55:31.216-06:00
modified: 2019-11-14T10:01:55.637-06:00
parent: "[[Universal／User Datagram Protocol (UDP)]]"
children: []
---
1. <strong>Source Port :</strong> Source Port is 2 Byte long field used to identify port number of source.
2. <strong>Destination Port :</strong> It is 2 Byte long field, used to identify the port of destined packet.
3. <strong>Length :</strong> Length is the length of UDP including header and the data. It is 16-bits field.
4. <strong>Checksum : </strong>Checksum is 2 Bytes long field. It is the 16-bit one’s complement of the one’s complement sum of the UDP header, pseudo header of information from the IP header and the data, padded with zero octets at the end (if necessary) to make a multiple of two octets. (UDP checksum is optional in [[IPv4]] but mandatory in [[IPv6]])

![[UDP - Header Format/UDP Format.png|596x250]]

![[UDP - Header Format/UDP Queue.png]]
