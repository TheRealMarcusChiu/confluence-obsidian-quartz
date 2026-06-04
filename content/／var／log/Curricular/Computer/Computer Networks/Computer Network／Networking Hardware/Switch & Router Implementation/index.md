---
title: "Switch & Router Implementation"
created: 2019-03-16T23:30:33.537-05:00
modified: 2023-01-26T19:46:05.509-06:00
parent: "[[Computer Network／Networking Hardware]]"
children: []
---
# [[Network Switch]] & [[Router]] Implementations
- the processor has a mechanism to move data directly from an interface to its main memory without having to be directly copied by the CPU, a technique called <strong>direct memory access</strong> (DMA)
- the upper bound on aggregate throughput is the lesser of:
	- half the main memory bandwidth
	- half the I/O bus bandwidth

![[Switch & Router Implementation/1.png]]
# Ports
- input ports
- fabric
- output ports

![[Switch & Router Implementation/2.png]]
# Buffering
- not just holding onto packets, but also including <em>packet scheduling</em> and <em>discard algorithms</em>
- types of buffering within a switch/router:
	- <strong>input buffering</strong> - buffering at input ports
	- <strong>output buffering</strong> - buffering at output ports
	- <strong>internal buffering</strong> - buffering within the fabric

![[Switch & Router Implementation/3.png|868x250]]
# Fabrics
- a switch fabric should be able to move packets from input ports to output ports while minimizing delay
- types of fabric types:
	- <strong>shared bus</strong>
		- the bus bandwidth determines the throughput of switch
	- <strong>shared memory</strong>
		- packets are written into memory by an input port and read from memory by the output ports
		- memory bandwidth determines the switch throughput
	- <strong>crossbar</strong>
		- is a matrix of pathways that can be configured to connect any input port to any output port
		- main problem with crossbars is that output ports are required to accept packets from all inputs at once
	- <strong>self-routing</strong>
		- fabric relies on some information in the packet header to direct each packet to its correct output
		- usually a special "self-routing header" is appended to packet by the input port, and is removed by output port as it exits
- <strong>self-routing</strong> fabrics are the most scalable design

![[Switch & Router Implementation/4.png]]![[Switch & Router Implementation/5.png]]
# Router Implementations
- routers must be designed to handle variable-length packets
- routers designed using a switching fabric that is cell based requires ports to problem <em>segmentation and re-assembly</em>(SAR)
- <strong>line-rate</strong> - is used to characterizing performance. <em>line-rate = packet-size x packets-per-second</em>
- router forwarding models:
	- centralized - single processing engine handles all traffic of all ports
	- distributed - several processing engines handling traffic
- IP forwarding in routers more complicated than in bridges and ATM switches
	- bridges and ATM switches, forwarding simply involves looking up a fixed-length identifier (MAC address or VCI), finding the correct output port in the table, and sending the packet to that port
	- IP forwarding, forwarding a packet requires examining a variable amount of bits
