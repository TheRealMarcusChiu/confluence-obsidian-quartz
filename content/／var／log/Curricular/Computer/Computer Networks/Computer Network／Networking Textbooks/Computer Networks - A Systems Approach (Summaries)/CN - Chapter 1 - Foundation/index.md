---
title: "CN - Chapter 1 - Foundation"
created: 2019-03-17T00:07:23.741-05:00
modified: 2019-12-03T11:23:32.968-06:00
parent: "[[Computer Networks - A Systems Approach (Summaries)]]"
children: []
---
### Important Terms
- <strong>links</strong> - medium that connects computers
	- types of links
		- point-to-point
		- multiple-access
- <strong>network</strong> - a set of computers/nodes connected together
- <strong>switches</strong> - nodes inside network - store and forward packets
- <strong>hosts</strong> - nodes outside network - runs applications that uses the network
- <strong>internetwork (internet)</strong> - set of independent networks (clouds) that are connected
- <strong>router/gateway</strong> - a node that is connected to multiple networks - same role as switch but forwards data across different networks
- <strong>address</strong> - each node is assigned an address
- <strong>routing</strong> - the process of forwarding messages to destination node based on address
- <strong>casting types</strong>
	- <strong>unicast</strong> - single destination
	- <strong>broadcast</strong> - to all nodes
	- <strong>multicast</strong> - to subset of nodes
- <strong>constant bit rate (CBR)</strong> - source sends at <em>constant</em> rate (e.g. uncompressed voice)
- <strong>variable bit rate (VBR)</strong> - source sends at <em>variable</em> rates (e.g images)

# <strong>Switched Networks</strong>
- <strong>circuit switching</strong>
	- in contrast to <em>packet switching</em>, first establish dedicated "circuit" across a sequence of "links" then stream bits of data to destination node
	- employed in telephone systems
	- used in optical networking
- <strong>packet switching</strong>
	- sends discrete "packets" of data using a strategy called "store-and-forward"
	- majority of computer networks
	- [[Packet Switching - Datagram, Virtual Circuit, Source Routing|packet switching methodologies]]:
		- <strong>virtual-circuit switching</strong> - similar to <em>circuit switching</em>, but built on top of a packet switching internetwork
		- <strong>datagram switching </strong>- packets are called datagrams/packets and are routed independently through the network
		- <strong>source routing</strong> - similar to datagram switching, but path is predetermined by sender in which gateways must adhere to
- <strong>message switching</strong>

# <strong>Characterizing Networks by Size</strong>

![[Computer Network／Networking Sizes (NANO／NFC／BAN／PAN／SAN／LAN／CAN／MAN／RAN／WAN) Near-Field Communication Body／Personal／Storage／System／Local／Controller／Metropolitan／Radio／Wide Area／Access Network#^excerpt]]
# <strong>Some Requirements in Computer Networks</strong>
- <strong>Resource Sharing</strong>
	- multiplexing
		- taking multiple signals and combining them into one signal for transmission over a single medium
		- types of multiplexing:
			- <strong>synchronous time-division multiplexing (STDM)</strong>
				- divide time into equal size which is to be shared
				- problem - what happens when one doesn't need it
			- <strong>frequency-division multiplexing (FDM)</strong>
				- transmit each flow at a different frequency
			- <strong>code-division multiplexing (CDM)</strong>
				- df
			- <strong>statistical multiplexing</strong>
				- resource shared over time (like STDM)
				- data is transmitted on demand rather than predetermined time-slot
				- to ensure all eventually get their share, max-size data is defined referred as "packet" therefore message is fragmented into several packets during transmission
				- one of the issues that faces a network designer is how to transmit "packets" in a fair manner
					- this could be done in:
						- FIFO
						- round robin - based on different flows
					- sometimes a node (most often a switch) receive more than it can send. therefore memory is needed to buffer to overflow packets. however, if this continues, the switch will run out of memory and is forced to drop the packets. The switch in this state is considered "congested"
- <strong>Support Common Services</strong>
	- types of services:
		- request/reply - request webpages
		- message stream - video conference
		- real-time - gaming
	- example application protocols:
		- http - hypertext transfer protocol
		- ftp - file transfer protocol
		- nfs - network file system
- <strong>Reliability</strong>
	- we want a computer network to be resilient to various errors
	- 3 general classes of failure:
		- bit errors
			- rare but do happen
		- packet error
			- a complete packet is lost by the network
			- main difficulties is distinguishing between "lost" and "late" packets
		- node and link errors
			- link is disconnected, node crashes
			- main difficulties, is distinguishing between "cut" or "flaky" link
			- main difficulties, is distinguishing between "failed" and "slow" computers
- <strong>Manageability</strong>
	- networks need to be managed
	- partly related to the issue of scalability

# <strong>Network Architecture</strong>

network architectures - are general blueprints that guide the design and implementation of networks. Go over 2 architectures:
- <strong>[[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model|OSI architecture]]</strong>
- <strong>[[Transmission Control Protocol (TCP)|TCP]]/[[Internet Protocol (IP)|IP]] architecture</strong>

Layering and Protocols
- the point of layering and protocols is for blackbox abstractions
	- app programs
	- process-to-process channels
	- host-to-host connectivity
	- hardware
- process-to-process channels can be split into
	- request/reply channel
	- message stream channel
	- real-time channel

![[CN - Chapter 1 - Foundation/1.png|301]]![[CN - Chapter 1 - Foundation/2.png|340]]
- each protocol has 2 interfaces:
	- service interface
	- peer-to-peer interface

![[CN - Chapter 1 - Foundation/3.png|450]]
# <strong>OSI Architecture</strong>

<strong>Open Systems Interconnection (OSI)</strong> partitions network functionality into 7 layers
1. <strong>physical</strong>
	- handles transmission of raw bits over a link (wireless or wired)
2. <strong>data-link</strong>
	- here data is called <em>frame</em>
	- collects stream of bits over "link"
3. <strong>network</strong>
	- here data is called <em>packet</em>
	- handles routing among nodes within a packet-switched network
4. <strong>transport</strong>
	- here data is called <em>message</em>
	- implements "process-to-process" channel
5. <strong>session</strong>
6. <strong>presentation</strong>
7. <strong>application</strong>
	- e.g. [[Hypertext／Hyper Text Transfer Protocol (HTTP) - 1／1.1／2|HTTP]], [[File Transfer Protocol (FTP)|FTP]], [[Simple Mail Transfer Protocol (SMTP)]]

see more: [[Computer Network／Networking Layers - Open Systems Interconnection (OSI) Model|Computer Network/Networking Layers - Open Systems Interconnection (OSI) Model]]
# <strong>Internet Architecture</strong>

![[CN - Chapter 1 - Foundation/4.png|500]]

also known as TCP/IP architecture

evolved out of its predecessor ARPANET
- <strong>Physical and Data-link Layer 1 and 2</strong>
	- contains wide variety of network protocols:
		- [[802.3 - Ethernet|ethernet]]
		- [[802.11 - WiFi／Wi-Fi|wifi]]
- <strong>IP Layer 3</strong>
	- supports interconnection of multiple networking technologies into a single, logical internetwork
- <strong>Transport Layer 4</strong>
	- end-to-end protocols
	- 2 most prominent implementations:
		- [[Transmission Control Protocol (TCP)|TCP]] - provides reliable byte-stream channel
		- [[Universal／User Datagram Protocol (UDP)|UDP]] - provides unreliable datagram delivery channel (datagram synonymous to message)
- <strong>Application Layer 5</strong>
	- (e.g. HTTP, FTP, Telnet (remote login), SMTP, etc)

# <strong>Implementing Network Software</strong>

![[CN - Chapter 1 - Foundation/5.png|400]]
### Application Programming Interface (Sockets)

application programming interface (API) is an interface provided by the [[Operating Systems (OS)|OS]]. Some types include:
- socket interface

keep in mind:
- protocol provides a certain set of services
- API provides a syntax that invokes those services

Steps of Socket
- create socket
	- int socket(int domain, int type, int protocol)
		- domain
			- specifies the protocol "family" to be used
				- PF\_INET - denotes Internet family
				- PF\_UNIX - denotes Unix pipe facility
				- PF\_PACKET - denote direct access to network interface (bypass TCP/IP protocol stack)
		- type
			- denote semantics of the communication stream
				- SOCK\_STREAM - denote byte stream
				- SOCK\_DGRAM - denote message-oriented service
		- protocol
			- identifies specific protocol to be used
				- UNSPEC - unspecified
- for server machine, perform "passive" open (listen for connections)
	- the server does this by invoking the following 3 operations:
		- int bind(int socket, struct sockaddr \*address, int addr\_len)
		- int listen(int socket, int backlog)
		- int accept(int socket, struct sockaddr \*address, int \*addr\_len)
	- bind operation
		- binds newly created socket to specified network address (IP address and TCP port number)
		- ports are used to indirectly identify processes (also a form of "demux keys")
	- listen operation
		- defines how many connections can be pending on specified socket
	- accept operation
		- carries out passive open
		- is a blocking operation and does not return until remote participant has connected
		- returns a new socket that corresponds to the just-established connection
		- address argument - contains the remote participant address
		- when accept returns, the original socket that was given as an argument still exists and still corresponds to passive open; it is used in future invocations of accept
- for client machine, perform "active" open
	- says who to connect to by invoking
		- int connect(int socket, struct sockaddr \*address, int addr\_len)
	- connect operation
		- blocking operation until TCP established connection
		- address argument - remote participant's address
- both server and client
	- once connection between server and client is established, application invokes the following 2 operations to send and receive data:
		- int send(int socket, char \*message, int msg\_len, int flags)
		- int recv(int, socket, char \*buffer, int buf\_len, int flags)

# <strong>Performance</strong>

network performance is measured in 2 fundamental ways:
- <strong>bandwidth</strong> (throughput)
	- number of bits that can be transmitted over the network at a certain period of time
	- example: 10 million bits per second
- <strong>latency</strong> (delay)
	- how long it takes a message to travel from end to end
	- example: 24 milliseconds
	- the are times when we want to know the "round-trip time" RTT of a network
	- total latency
		- latency = propagation + transmit + queue
		- propagation = distance / speed of light
		- transmit = size / bandwidth
		- where:
			- distance - is length of wire
			- speed of light - effective speed of light over the wire
			- size - size of packet
			- bandwidth - bandwidth of which the packet is transmitted

<strong>latency x bandwidth product</strong> (lb-product)
- to calculate the capacity of a channel, we calculate the <em>latency x bandwidth priduct</em>
- i.e. the lb-product of a channel with: one-way latency of 50ms and bandwidth of 45Mbps
	- lb-product = (latency) x (bandwidth)
	- lb-product = (50 x 10⁻³seconds) x (45 x 10⁶bits/seconds)
	- lb-product = 2.25 x 10⁶bits
