---
title: "Denial of Service (DoS) - Mitigation"
created: 2019-11-14T18:25:30.844-06:00
modified: 2023-05-07T12:11:27.226-05:00
parent: "[[Denial of Service (DoS)]]"
children:
  - "[[Secure Overlay Service (SOS)]]"
---
# Denial of Service (DoS) Mitigation
- client puzzles
- captchas - verify human

# Denial of Service (DoS) - Source Identification
- prevent spoofed source [[IPv4 - Address|IP address]]
	- ingress filtering - ISP only forwards packets with legitimate source IP address
	- enforce source IP at peer AS
	- IP traceback
		- IP traceback goal: given set of attack packets, determine path to source
		- how to make routers record info in packets:
			- simple method: each router appends own IP address to packets, then victim reads path from packet (problem: no space in IP packet to store this information)
			- better method:
				- store 1 node/edge info in each packet, including distance
				- router probabilistically stores its own info into packet
				- given enough attack packets, victim can deduce path and origin
				- edge sampling vs node sampling:
					- edge sampling
					- node sampling
				- reducing space in edge sampling
					- XOR "⊕" edge IP addresses
						- store edge as "start ⊕ end", and store distance from source
						- work backwards to get path (with help of distance value) - <font style="color: rgb(128,128,128);">(start ⊕ end) ⊕ end = start</font>
		- where to store path info
			- IP header's Identification Field
