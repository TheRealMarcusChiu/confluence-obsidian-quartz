---
title: "Transmission Control Protocol (TCP)"
created: 2019-03-16T21:45:10.710-05:00
modified: 2026-05-17T13:04:57.900-05:00
parent: "[[4 - Transport Layer]]"
children:
  - "[[TCP - Header Format]]"
  - "[[TCP／IP - Internet Protocol Suite - Implementations]]"
---
###### Transmission Control Protocol (TCP)
````excerpt
- is a [[Computer Network／Networking Communication Protocols|network protocol]] that operates at the [[4 - Transport Layer|transport layer]]
- connection oriented
- with error correction
- in-order delivery
- slow 3-way TCP handshake (SYN, SYN-ACK, ACK)
- slower than [[Universal／User Datagram Protocol (UDP)|UDP]]
- application protocols that use TCP: DNS, HTTP, HTTPs, FTP, SMTP, Telnet
- supports [[Ports - Sockets - An Application Demultiplexer|demultiplexing]]
- reliable
- implements flow-control (throttle how fast TCP sends data to not overload the receiver)
- implements congestion-control (throttle how fast TCP sends data to not overload the network)
````
^excerpt

### Obstacles
- TCP connections have <strong>variable round-trip times</strong>, therefore the timeout mechanism that triggers retransmissions must be adaptive
- packets may be reordered as they cross the Internet
- sending side of TCP connection has no idea what links will be traversed to reach the destination, and thus have no knowledge where <strong>network congestion(s)</strong> are along the path(s)

# Header Format
[[TCP - Header Format]]
# Connection Establishment & Termination Phases

2 Phases:
- <strong>connection establishment phase</strong> - establish a shared state to enable sliding window algorithm to begin
- <strong>teardown phase</strong> - signals each host it's OK to free this state

###### Connection Establishment Phase (TCP 3-Way Handshake)
1. SYN: The active open is performed by the client sending a [SYN](https://ddos-guard.net/en/terminology/protocols/syn-flag) to the server. The client sets the segment's sequence number to a random value A.
2. SYN-ACK: In response, the server replies with a [SYN-ACK](https://ddos-guard.net/en/terminology/protocols/syn-ack-packet). The acknowledgment number is set to one more than the received sequence number i.e. A+1, and the sequence number that the server chooses for the packet is another random number, B.
3. ACK: Finally, the client sends an [ACK](https://ddos-guard.net/en/terminology/protocols/ack-flag) back to the server. The sequence number is set to the received acknowledgement value i.e. A+1, and the acknowledgement number is set to one more than the received sequence number i.e. B+1.

![[Transmission Control Protocol (TCP)/TCP State transition.png|301]]
# Reliable and Ordered Delivery

<strong>sender side</strong>

three pointers maintained:
- LastByteAcked
- LastByteSent
- LastByteWritten

LastByteAcked ≤ LastByteSent ≤ LastByteWritten

<strong>receiver side</strong>

three pointers maintained:
- LastByteRead
- NextByteExpected
- LastByteRcvd

LastByteRead \< NextByteExpected ≤ LastByteRcvd + 1

![[Transmission Control Protocol (TCP)/TCP sender receiver relationship.png|400]]
# Flow Control (how sender sends data at approximately the same rate receiver consumes them)

introduce buffers of finite size: MaxSendBuffer and MaxRcvBuffer

<strong>receiver side</strong>
- LastByteRcvd − LastByteRead ≤ MaxRcvBuffer
- AdvertisedWindow = MaxRcvBuffer − ((NextByteExpected − 1) − LastByteRead)

<strong>sender side</strong>
- LastByteSent − LastByteAcked ≤ AdvertisedWindow
- EffectiveWindow = AdvertisedWindow − (LastByteSent − LastByteAcked)
- LastByteWritten − LastByteAcked ≤ MaxSendBuffer

# Protecting Against Wraparound
- SequenceNum field is 32 bits
- AdvertisedWindow field is 16 bits
> [!list-indent-undo]
> > [!indent]
> > ![[Transmission Control Protocol (TCP)/wrap around.png|301]]
- e.g. given OC-48 (2.5 Gbps): time-until-wraparound = 2<sup>32</sup> bits / (2.5 \* 10<sup>9</sup> bps / 8 bits) = 13.7438953472 seconds

# Keeping Pipe Full
- assuming receiver has enough buffer, the limiting factor would be either: <strong>AdvertisedWindow</strong> or <strong>delay-bandwidth product</strong>
> [!list-indent-undo]
> > [!indent]
> > ![[Transmission Control Protocol (TCP)/required window size.png|301]]
- e.g. given OC-48 (2.5 Gbps): delay-bandwidth-product = (0.1 s) \* (2.5 \* 10<sup>9</sup> bps) / 8 bits = 31,250,000 bytes

# Triggering Segment Transmission
- TCP has 3 mechanisms that trigger the transmission of a segment:
	- sends a segment as soon as it has collected maximum segment size (MSS) bytes from the sending process. MSS is usually set to the size of the largest segment TCP can send without causing the local IP to fragment
	- sends segment when the sending process has explicitly asked it to do so (PUSH)
	- sends segment when a timer fires

- <strong>Silly Window Syndrome (filling the network with tiny segments)</strong>
	- the silly window syndrome is only a problem when either the sender transmits a small segment or the receiver opens the window a small amount
	- since it's not possible to prevent sending small segments, we need ways to coalesce them:
		- receiver can do this by delaying acknowledgements (sending 1 combined acknowledgement rather than multiple smaller ones)
		- sender uses Nagle's Algorithm
- <strong>Nagle's Algorithm (solution to the <strong>Silly Window Syndrome problem)</strong></strong>
    ```
    when the application produces data to send
      if both the available data and the window ≥ MSS
        send a full segment 
      else
        if there is unACKed data in flight
          buffer the new data until an ACK arrives
        else
          send all the new data now
    ```

# Adaptive Retransmission (Estimating RTT)
- <strong>Original Algorithm</strong>
	- EstimatedRTT = α × EstimatedRTT + (1 − α) × SampleRTT
	- TimeOut = 2 × EstimatedRTT
	- the problem: whenever TCP retransmits segment, how should we measure SampleRTT? Figure 5.10 shows 2 ways

  > [!list-indent-undo]
  > > [!indent]
  > > ![[Transmission Control Protocol (TCP)/sample rtt - sampling ways.png|400]]
- <strong>Karn/Patridge Algorithm</strong>
	- whenever TCP retransmits segment:
		- it stops taking samples of the RTT of that segment (only measure SampleRTT for segments that have been sent once)
		- set next TimeOut to be twice the previous TimeOut
- <strong>Jacobson/Karels Algorithm</strong> (Takes Variance into Account)
	- Difference = SampleRTT - EstimatedRTT
	- EstimatedRTT = EstimatedRTT + d(Difference)
	- Deviation = Deviation + d(|Difference| - Deviation)
	- TimeOut = a(EstimatedRTT) + b(Deviation) where: a = 1 and b = 4 usually

# Record Boundaries
- page 422 of [[Computer Networks - A Systems Approach (Summaries)|Computer Networks: A Systems Approach]]
- TCP is a byte-oriented streaming protocol. there are no built-in functionality to distinguish boundaries of stream except for the "not used" URG flag in the header
