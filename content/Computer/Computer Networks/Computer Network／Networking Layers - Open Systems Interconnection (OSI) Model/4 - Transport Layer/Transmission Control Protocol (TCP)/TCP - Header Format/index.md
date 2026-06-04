---
title: "TCP - Header Format"
created: 2019-11-14T09:47:20.717-06:00
modified: 2019-11-14T09:49:03.848-06:00
parent: "[[Transmission Control Protocol (TCP)]]"
children: []
---
- Acknowledgement, SequenceNum, and AdvertisedWindow fields are all involved in TCP's sliding window algorithm
- flags - 6-bits - SYN FIN RESET PUSH URG ACK
	- SYN and FIN are used for establishing and terminating a TCP connection
	- ACK is set any time Acknowledgement field is valid
	- URG signifies that this segment contains urgent data. when set UrgPtr field indicates where the non-urgent data contained in this segment begins
	- PUSH signifies that sender invoked the push operation
	- RESET signifies that receiver has become confused
- HdrLen
	- gives length of header in 32-bit words
	- also known as offset, measuring the offset from start of packet to the start of data

![[TCP - Header Format/TCP Format.png|402x250]]
### TCP Extensions (Header Options)
1. <strong>timestamp option (<strong>32-bit)</strong></strong>
	- helps to improve TCP's timeout mechanism
		- sender reads system clock and puts value in 32-bit timestamp option. the receiver then echos back this timestamp in its acknowledgements, the sender then subtracts this timestamp from the current timestamp to measure RTT
	- addresses the problem of TCP's 32-bit SequenceNum field from wrapping around too soon on high-speed network
		- TCP decides whether to accept or reject a segment based on a 64-bit identifier that has the SequenceNum field in the low-order 32 bits and the timestamp in the high-order 32 bits
		- since timestamp is always increasing it serves to distinguish between 2 different incarnations of the same number
2. <strong>scaling factor option</strong>
	- allows TCP to advertise a larger window
	- with this option, rather than interpreting the AdvertisedWindow field as the number of individual bytes, both sides can agree that the AdvertisedWindow counts larger chunks
3. <strong>selective acknowledgement option (SACK)</strong>
