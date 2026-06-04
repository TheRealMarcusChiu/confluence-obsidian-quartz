---
title: "CN - Chapter 6 - Congestion Control and Resource Allocation"
created: 2019-04-16T12:21:40.771-05:00
modified: 2026-05-17T12:52:42.073-05:00
parent: "[[Computer Networks - A Systems Approach (Summaries)]]"
children: []
---
## Sections
- <strong>Issues in Resource Allocation</strong> - overview of congestion control and resource allocation
- <strong>Queueing Disciplines</strong> - different queuing disciplines that can be implemented on the routers inside the network
- <strong>TCP Congestion Control</strong> - description of the congestion-control algorithm provided by TCP on the hosts
- <strong>Congestion Avoidance Mechanisms</strong> - techniques involving both routers and hosts that aim to avoid congestion before it becomes a problem
- <strong>Quality of Service (QoS)</strong> - examine the broad area of quality of service
- <strong>Equation-Based Congestion Control</strong> -

# <strong>Issues in Resource Allocation</strong>
<strong>resource allocation</strong> - process by which network hosts and network elements try to meet the competing demands that applications have for network resources— primarily link bandwidth and buffer space in routers or switches
<strong>congestion control/avoidance</strong> - efforts made by network hosts and network elements to prevent or respond to overload conditions

<strong>flow control</strong> - involves keeping a fast sender from overrunning a slow receiver
<strong>congestion control</strong> - responds to congestion, and tries to resolve it
<strong>congestion avoidance</strong> - avoids congestion in the first place
## <strong>Network Model</strong>

3 prominent features of the network architecture:
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|packet-switch network]]
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|connectionless flow]]
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|service model]]

### Packet-Switch Network

in a packet-switch network a source may have more than enough capacity on the immediate outgoing link to send a packet, but somewhere in the middle of a network its packets encounter a link that is being used by many different traffic sources

access-control algorithms of ethernet and wifi are, in some sense, analogous to congestion-control algorithms in a switched network

![[CN - Chapter 6 - Congestion Control and Resource Allocation/packet-switch congestion.png]]
### <strong>Connectionless Flow</strong>
idea of a flow—a sequence of packets sent between a source/destination pair and following the same route through the network

flows can be defined at different granularities:
- host-to-host flow (i.e., have the same source/destination host addresses)
- process-to-process flow (i.e., have the same source/destination host/port pairs

<strong>soft state</strong> - state information for each flow that can be used to make resource allocation decisions about the packets that belong to the flow. soft state represents a middle ground between a purely connectionless network that maintains no state at the routers and a purely connection- oriented network that maintains hard state at the routers

flow can be either:
- <strong>implicitly defined</strong> - each router watches for packets that happen to be traveling between the same source/destination pair—the router does this by inspecting the addresses in the header—and treats these packets as belonging to the same flow for the purpose of congestion control
- <strong>explicitly established </strong>- source sends a flow setup message across the network, declaring that a flow of packets is about to start

### Service Model
###### <strong>best-effort service model</strong>
- all packets are equal
- tries to deliver data but makes no promises and leaves to cleanup operation to the edges
- subset of quality of service model

###### <strong>quality of service model</strong>
- requires differentiation of packets
- first asks the network for a level of service, the network then responds by providing it or perhaps saying it cannot promise anything better at the moment
- superset of best-effort service model
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|submodels]] of QoS model

## <strong>3 Dimensions of Resource Allocation Mechanisms</strong>
###### <strong>Router-Centric</strong> vs H<strong>ost-Centric </strong>
- <strong>host-centric</strong> - address the resource allocation problem from the edges of the network
- <strong>router-centric</strong> - address the resource allocation problem from within the network

###### <strong>Reservation-Based</strong> vs F<strong>eedback-Based</strong>
- <strong>reservation-based</strong> - some entity (e.g., the end host) asks the network for a certain amount of capacity to be allocated for a flow
	- reservation-based system always implies a router-centric resource allocation mechanism
- <strong>feedback-based</strong> - end hosts begin sending data without first reserving any capacity and then adjust their sending rate according to the feedback they receive.
	- feedback can be either:
		- explicit - a congested router sends a “please slow down” message to the host
		- implicit - the end host adjusts its sending rate according to the externally observable behavior of the network, such as packet losses
	- a feedback-based system can imply either a router- or host-centric mechanism.
		- typically, if the feedback is explicit, then the router is involved, to at least some degree, in the resource allocation scheme
		- typically, if the feedback is implicit, then almost all of the burden falls to the end host; the routers silently drop packets when they become congested

###### <strong>Window Based</strong> vs R<strong>ate Based</strong>
- <strong>window based</strong> - corresponds to how much buffer space the receiver has, and it limits how much data the sender can transmit
- <strong>rate based</strong> - how many bits per second the receiver or network is able to absorb

## <strong>Evaluation Criteria</strong>

one final issue is figuring out whether a resource allocation mechanism is good or not based on:
- <em>[[CN - Chapter 6 - Congestion Control and Resource Allocation|effectiveness]]</em>
- <em>[[CN - Chapter 6 - Congestion Control and Resource Allocation|fairness]]</em>

###### <strong>Effective Resource Allocation</strong>
- <strong>throughput</strong> vs <strong>delay</strong>: increasing throughput will increase queue size and thus increases delay
  
  > [!list-indent-undo]
  > > [!indent]
  > > ![[CN - Chapter 6 - Congestion Control and Resource Allocation/power-throughput-over-delay.png]]
- power is typically defined relative to a single connection (flow); it is not clear how it extends to multiple, competing connections
- objective is to maximize this power ratio

![[CN - Chapter 6 - Congestion Control and Resource Allocation/power vs load.png]]
###### <strong>Fair Resource Allocation</strong>
metric that can be used to quantify the fairness of a congestion-control mechanism 
given a set of flow throughputs (x<sub>1</sub>, x<sub>2</sub>, ..., x<sub>n</sub>) (measured in consistent units such as bits/second), the following function assigns a fairness index to the flows:

![[CN - Chapter 6 - Congestion Control and Resource Allocation/fairness formula.png]]

the <strong>fairness index</strong> always results in a number between 0 and 1, with 1 representing greatest fairness
# <strong>Queueing Disciplines</strong>

each router must implement some <strong>queuing discipline</strong> that governs how packets are buffered while waiting to be transmitted

two common queuing algorithms:
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|first-in first-out (FIFO)]]
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|fair queuing (FQ)]]

### First-in First-Out (FIFO)

![[CN - Chapter 6 - Congestion Control and Resource Allocation/FIFO.png]]

<strong>Variations of FIFO</strong>
- <strong>priority</strong> <strong>queuing</strong> - each packet is marked with a priority.

### Fair Queueing (FQ)

problem with FIFO queuing is that it does not discriminate between different traffic sources

idea of FQ is to maintain a separate queue for each <strong>flow</strong> currently being handled by the router. the router then services these queues in a sort of round-robin

![[CN - Chapter 6 - Congestion Control and Resource Allocation/FQ.png]]

the main complication is that the packets being processed at a router are not necessarily the same length. To truly allocate the bandwidth of the outgoing link in a fair manner, it is necessary to take packet length into consideration

<strong>bit-by-bit algorithm</strong>

consider the behavior of a single flow and imagine a clock that ticks once each time one bit is transmitted from all of the <strong>active flow </strong>(a flow is active when there is data in its queue).

for this flow, let:

<em><font style="color: rgb(128,128,128);">P<sub>i</sub> = length of packet i</font></em>
<em><font style="color: rgb(128,128,128);">S<sub>i</sub> = time when the router starts to transmit packet i</font></em>
<em><font style="color: rgb(128,128,128);">F<sub>i</sub> = time when the router finishes transmitting packet </font></em>

therefore:

<font style="color: rgb(128,128,128);"><em>F<sub>i</sub> = S<sub>i</sub> + P<sub>i</sub></em></font>

when do we start transmitting packet i?
the answer to this question depends on whether packet i arrived before or after the router finished transmitting packet i−1 from this flow

If we let

<font style="color: rgb(128,128,128);"><em>A<sub>i</sub> = time that packet i arrives at the router</em></font>

then

<em><font style="color: rgb(128,128,128);">S<sub>i</sub> = max(F<sub>i</sub>− 1,A<sub>i</sub></font></em><em><font style="color: rgb(128,128,128);">)</font></em>

and thus

<em><font style="color: rgb(128,128,128);">F<sub>i</sub> = max(F<sub>i</sub>− 1,A<sub>i</sub>) + P<sub>i</sub></font></em>

Now, for every flow, we calculate <font style="color: rgb(128,128,128);"><em>F<sub>i</sub></em></font>for each packet that arrives using the above formula. We then treat all the <font style="color: rgb(128,128,128);"><em>F<sub>i</sub> </em></font>as timestamps, and the next packet to transmit is always the packet that has the lowest timestamp— the packet that, based on the above reasoning, should finish transmission before all others

![[CN - Chapter 6 - Congestion Control and Resource Allocation/FQ in Action.png]]

FQ guarantees minimum share of bandwidth to each flow, with the possibility that it can get more than its guarantee if other flows are not using their shares
###### <strong>Variations of Fair Queueing</strong>
- <strong>weighted fair queuing </strong>(WFQ)
	- allows a weight to be assigned to each flow (queue)
	- this weight logically specifies how many bits to transmit each time the router services that queue, which effectively controls the percentage of the link’s bandwidth that that flow will get
	- for example, a simple FQ gives each queue a weight of 1, which means that logically only 1 bit is transmitted from each queue each time around. This results in each flow getting (1/n)<sup>th</sup> of the bandwidth when there are n flows. With WFQ, however, one queue might have a weight of 2, a second queue might have a weight of 1, and a third queue might have a weight of 3. Assuming that each queue always contains a packet waiting to be transmitted, the first flow will get one-third of the available bandwidth, the second will get one-sixth of the available bandwidth, and the third will get one-half of the available bandwidth
	- a router performing WFQ must learn what weights to assign to each queue from somewhere, either by manual configuration or by some sort of signalling from the sources

# <strong>TCP Congestion Control</strong>

the idea of TCP congestion control is for each source to determine how much capacity is available in the network

types of mechanisms:
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|additive increase/multiplicative decrease]]
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|slow start]]
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|quick start]]
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|fast retransmit]]
- [[CN - Chapter 6 - Congestion Control and Resource Allocation|fast recovery]]

TCP Implementations:
- TCP Tahoe - includes [[CN - Chapter 6 - Congestion Control and Resource Allocation|slow start]], [[CN - Chapter 6 - Congestion Control and Resource Allocation|additive increase/multiplicative decrease]], and [[CN - Chapter 6 - Congestion Control and Resource Allocation|fast retransmit]]
- TCP Renos - adds [[CN - Chapter 6 - Congestion Control and Resource Allocation|fast recovery]]
- TCP Vegas - includes a [[CN - Chapter 6 - Congestion Control and Resource Allocation|specific implementation]] of congestion avoidance

###### <strong><em>CongestionWindow</em></strong>
- a state variable for each TCP connection
- used by the source to limit how much data it is allowed to have in transit at a given time
- (congestion control is to congestion window) as (flow control is to advertised window)

TCP is modified such that the maximum number of bytes of unacknowledged data allowed is now the minimum of the congestion window and the advertised window
```
MaxWindow = MIN(CongestionWindow,AdvertisedWindow)
EffectiveWindow = MaxWindow −(LastByteSent − LastByteAcked)
```
### <strong><font style="color: rgb(0,119,111);">Additive Increase/Multiplicative Decrease Mechanism (AIMD)</font></strong>
- general idea: decreasing the congestion window when the level of congestion goes up and increasing the congestion window when the level of congestion goes down
- how does the source determine that the network is congested? the answer is based on the observation that the majority of packets not delivered, and resulting in timeouts, is that a packet was dropped due to congestion (it is rare that a packet is dropped because of an error during transmission)

###### <strong>Multiplicative Decrease</strong>
each time a timeout occurs, the source sets <font style="color: rgb(128,128,128);"><em>CongestionWindow </em></font>to half of its previous value (if the resulting value is less than 1, <font style="color: rgb(128,128,128);"><em>CongestionWindow</em></font>=1)
###### <strong>Additive Increase</strong>

2 ways implementing additive increase, either:
- each round trip time, increment <font style="color: rgb(128,128,128);">CongestionWindow </font>by 1 packet ([[Packets - Protocol Data Unit (PDU) - Maximum Transmission Unit (MTU) - Path MTU (PMTU) - Maximum Frame Size (MFS) - Maximum Datagram Size (MDS) - Maximum Segment Size (MSS)|MSS - maximum segment size]])
    ```
    CongestionWindow += MSS
    ```
- each acknowledgement, increment <font style="color: rgb(128,128,128);">CongestionWindow</font> by a little (this is done in practice such as in TCP)
    ```
    Increment = MSS × (MSS/CongestionWindow) 
    CongestionWindow += Increment
    ```

this pattern of continually increasing and decreasing the congestion window continues throughout the lifetime of the connection

![[CN - Chapter 6 - Congestion Control and Resource Allocation/saw tooth.png]]
### <strong><font style="color: rgb(0,119,111);">Slow Start Mechanism</font></strong>
- slow start is a second mechanism provided by TCP
- slow start is used to increase the congestion window rapidly from a cold start
- slow start effectively increases the congestion window exponentially, rather than linearly

2 different situations in which slow start runs:
- first is at the very beginning of a connection
- second occurs when the connection goes dead while waiting for a timeout to occur

algorithm:
- <em><font style="color: rgb(128,128,128);">CongestionWindow </font></em>is initialized to some starting value (e.g. 1, 2, 4 or 10 [[Packets - Protocol Data Unit (PDU) - Maximum Transmission Unit (MTU) - Path MTU (PMTU) - Maximum Frame Size (MFS) - Maximum Datagram Size (MDS) - Maximum Segment Size (MSS)|maximum-segment-size MSS]])
- the value <em><font style="color: rgb(128,128,128);">CongestionWindow</font></em> will be increased by 1 for each ACK received, effectively doubling the <em><font style="color: rgb(128,128,128);">CongestionWindow</font></em> each round-trip time (RTT)
- this process continues until there is a loss, at which time a timeout causes multiplicative decrease to divide <em><font style="color: rgb(128,128,128);">CongestionWindow</font> </em>by 2
- TCP introduces a temporary variable <font style="color: rgb(128,128,128);"><em>CongestionThreshold</em></font>
- <font style="color: rgb(128,128,128);"><em>CongestionThreshold</em></font> is set equal to the <em><font style="color: rgb(128,128,128);">CongestionWindow</font> </em>value after the result of multiplicative decrease.
- <em><font style="color: rgb(128,128,128);">CongestionWindow</font> </em>is then reset to 1 packet
- <em><font style="color: rgb(128,128,128);">CongestionWindow</font></em> is incremented 1 packet<strong> per ACK</strong> received until it reaches <font style="color: rgb(128,128,128);"><em>CongestionThreshold</em></font>, at which point it is incremented by 1 packet<strong> per RTT</strong>.

In other words, TCP increases the <em><font style="color: rgb(128,128,128);">CongestionWindow</font></em> as defined by the following code fragment:
```
cw = state.CongestionWindow 
incr = state.maxseg
if (cw > state.CongestionThreshold)
 incr = incr * incr / cw; 
state.CongestionWindow = MIN(cw + incr, TCP_MAXWIN)
```

![[CN - Chapter 6 - Congestion Control and Resource Allocation/interplay of slow start and additive increase:multiplicative decrease.png]]

There are several things to notice about this trace. The first is the rapid increase in the congestion window at the beginning of the connection. This corresponds to the initial slow start phase. The slow start phase continues until several packets are lost at about 0.4 seconds into the connection, at which time <em><font style="color: rgb(128,128,128);">CongestionWindow </font></em>flattens out at about 34 KB. (Why so many packets are lost during slow start is discussed below.) The reason why the congestion window flattens is that there are no ACKs arriving, due to the fact that several packets were lost. In fact, no new packets are sent during this time, as denoted by the lack of hash marks at the top of the graph. A timeout eventually happens at approximately 2 seconds, at which time the <font style="color: rgb(128,128,128);"><em>CongestionWindow</em></font> is divided by 2 (i.e., cut from approximately 34 KB to around 17 KB) and <em><font style="color: rgb(128,128,128);">CongestionThreshold </font></em>is set to this value. Slow start then causes <font style="color: rgb(128,128,128);"><em>CongestionWindow </em></font>to be reset to 1 packet/mss and starts ramping up from there.

There is not enough detail in the trace to see exactly what happens when a couple of packets are lost just after 2 seconds, so we jump ahead to the linear increase in the congestion window that occurs between 2 and 4 seconds. This corresponds to additive increase. At about 4 seconds, <font style="color: rgb(128,128,128);"><em>CongestionWindow </em></font>flattens out, again due to a lost packet.

Now, at about 5.5 seconds:
1. A timeout happens, causing the <font style="color: rgb(128,128,128);"><em>CongestionWindow</em></font> to be divided by 2, dropping it from approximately 22 KB to 11 KB, and <font style="color: rgb(128,128,128);"><em>CongestionThreshold </em></font>is set to this amount
2. <font style="color: rgb(128,128,128);"><em>CongestionWindow</em></font> is reset to 1 packet/mss
3. Slow start causes <font style="color: rgb(128,128,128);"><em>CongestionWindow</em></font> to grow exponentially until it reaches <font style="color: rgb(128,128,128);"><em>CongestionThreshold</em></font>
4. <font style="color: rgb(128,128,128);"><em>CongestionWindow</em></font> then grows linearly

The same pattern is repeated at around 8 seconds when another timeout occurs.
### <strong><font style="color: rgb(0,119,111);">Quick Start Mechanism</font></strong>

The basic idea is that a TCP sender can ask for an initial sending rate greater than slow start would allow by:
1. putting a requested rate in its SYN packet as an IP option
2. routers along the path can examine the option, evaluate the current level of congestion on the outgoing link for this flow, and decide if that rate is acceptable, if a lower rate would be acceptable, or if standard slow start should be used
3. by the time the SYN reaches the receiver, it will contain either a rate that was acceptable to all routers on the path or an indication that one or more routers on the path could not support the quick-start request.
	1. In the former case, the TCP sender uses that rate to begin transmission
	2. in the latter case, it falls back to standard slow start.
4. if TCP is allowed to start off sending at a higher rate, a session could more quickly reach the point of filling the pipe, rather than taking many round-trip times to do so

### <strong><font style="color: rgb(0,119,111);">Fast Retransmit</font></strong>
- triggers the retransmission of a dropped packet sooner than the regular timeout mechanism
- does not replace regular timeouts; it just enhances that facility

Every time a data packet arrives at the receiving side, the receiver responds with an acknowledgment, even if this sequence number has already been acknowledged. Thus, when a packet arrives out of order—when TCP cannot yet acknowledge the data the packet contains because earlier data has not yet arrived—TCP resends the same acknowledgment it sent the last time. This second transmission of the same acknowledgment is called a duplicate ACK. When the sending side sees a duplicate ACK, it knows that the other side must have received a packet out of order, which suggests that an earlier packet might have been lost. Since it is also possible that the earlier packet has only been delayed rather than lost, the sender waits until it sees some number of duplicate ACKs and then retransmits the missing packet. In practice, TCP waits until it has seen three duplicate ACKs before retransmitting the packet

![[CN - Chapter 6 - Congestion Control and Resource Allocation/Screen Shot 2019-04-16 at 9.45.58 PM.png]]

in the figure above, the destination receives packets 1 and 2, but packet 3 is lost in the network. Thus, the destination will send a duplicate ACK for packet 2 when packet 4 arrives, again when packet 5 arrives, and so on. (To simplify this example, we think in terms of packets 1, 2, 3, and so on, rather than worrying about the sequence numbers for each byte) When the sender sees the third duplicate ACK for packet 2—the one sent because the receiver had gotten packet 6—it retransmits packet 3. Note that when the retransmitted copy of packet 3 arrives at the destination, the receiver then sends a cumulative ACK for everything up to and including packet 6 back to the source.

<strong>Trace of TCP with Fast Retransmit</strong>

![[CN - Chapter 6 - Congestion Control and Resource Allocation/Trace of TCP with fast retransmit.png]]

<font style="color: rgb(29,30,101);">Figure 6.13 </font>illustrates the behavior of a version of TCP with the fast retransmit mechanism. It is interesting to compare this trace with that given in <font style="color: rgb(29,30,101);">Figure 6.11</font>, where fast retransmit was not implemented—the long periods during which the congestion window stays flat and no packets are sent has been eliminated. However, given enough lost packets (e.g. during the initial slow start phase 0-2 seconds) the sliding window algorithm eventually blocks the sender until a timeout occurs
### <strong><font style="color: rgb(0,119,111);"> Fast Recovery</font></strong>
- effectively removes the slow start phase that happens between when fast retransmit detects a lost packet and [[CN - Chapter 6 - Congestion Control and Resource Allocation|additive increase]] begins (note that fast-retransmit detection of lost packet is different than a timeout)
- e.g. fast recovery avoids the slow start period between 3.8 and 4 seconds in <font style="color: rgb(29,30,101);">Figure 6.13 </font>and instead simply cuts the <font style="color: rgb(128,128,128);"><em>CongestionWindow</em></font> in half (from 22 KB to 11 KB) and resumes [[CN - Chapter 6 - Congestion Control and Resource Allocation|additive increase]]. In other words, slow start is only used at the beginning of a connection and whenever a timeout occurs. At all other times, the congestion window is following a pure [[CN - Chapter 6 - Congestion Control and Resource Allocation|additive increase/multiplicative decrease pattern]]

# <strong>Congestion Avoidance Mechanisms</strong>

congestion-avoidance mechanisms:
- <font style="color: rgb(0,119,111);"><font style="color: rgb(0,51,102);">router based:</font></font>
	- <font style="color: rgb(0,119,111);"><font style="color: rgb(0,119,111);">[[CN - Chapter 6 - Congestion Control and Resource Allocation]] </font></font>
	- <font style="color: rgb(0,119,111);">[[CN - Chapter 6 - Congestion Control and Resource Allocation]]</font>
- <font style="color: rgb(0,119,111);"><font style="color: rgb(0,51,102);">host based:</font></font>
	- <font style="color: rgb(0,119,111);">[[CN - Chapter 6 - Congestion Control and Resource Allocation]]</font>

###### <strong><font style="color: rgb(0,119,111);">DECbit</font></strong>
Each router monitors the load and explicitly notifies the end nodes when congestion is about to occur by setting a <strong>DECbit</strong> in the packets that flow through the router. The destination host then copies this bit into the ACK and sends back to the source. Finally, the source adjusts its sending rate so as to avoid congestion:
- If less than 50% of the packets had the bit set, then the source increases its congestion window by 1
- If 50% or more of the last window’s worth of packets had the congestion bit set, then the source decreases its congestion window to 0.875 times the previous value

###### <font style="color: rgb(0,119,111);">Random Early Detection (RED)</font>

RED differs from the DECbit scheme in 2 ways:
1. rather than explicitly sending a DECbit to source, it implicitly notifies the source by dropping one of its packets. i.e. the router drops a few packets before it has exhausted its buffer space completely, so as to cause the source to slow down, with the hope that this will mean it does not have to drop lots of packets later on.
2. deciding when to drop a packet and what packet it decides to drop - consider a simple FIFO queue:
	1. in DECbit we wait for the queue to become full and then be forced to drop each arriving packet
	2. in RED we decide to drop each arriving packet with some <em>drop probability </em>whenever the queue length exceeds some <em>drop level</em>
```
AvgLen = (1 − Weight) × AvgLen + Weight × SampleLen

if AvgLen ≤ MinThreshold
	→ queue the packet
if MaxThreshold ≤ AvgLen
	→ drop the arriving packet

TempP = MaxP × (AvgLen − MinThreshold)/(MaxThreshold − MinThreshold)
P = TempP/(1 − count × TempP)

if MinThreshold < AvgLen < MaxThreshold
	→ calculate probability P
	→ drop the arriving packet with probability P
```
###### weight
- 0 \< Weight \< 1
- Weight determines the time constant of the filter

###### count
- count keeps track of how many newly arriving packets have been queued (not dropped), and AvgLen has been between the two thresholds. P increases slowly as count increases, thereby making a drop increasingly likely as the time since the last drop increases. This makes closely spaced drops relatively less likely than widely spaced drops. This extra step in calculating P was introduced by the inventors of RED when they observed that, without it, the packet drops were not well distributed in time but instead tended to occur in clusters. Because packet arrivals from a certain connection are likely to arrive in bursts, this clustering of drops is likely to cause multiple drops in a single connection. This is not desirable, since only one drop per round-trip time is enough to cause a connection to reduce its window size, whereas multiple drops might send it back into slow start
- count is re-initialized to zero each time RED drops a packet
- e.g. suppose that we set MaxP to 0.02 and count is initialized to zero. If the average queue length were halfway between the two thresholds, then TempP, and the initial value of P, would be half of MaxP, or 0.01. An arriving packet, of course, has a 99 in 100 chance of getting into the queue at this point. With each successive packet that is not dropped, P slowly increases, and by the time 50 packets have arrived without a drop, P would have doubled to 0.02. In the unlikely event that 99 packets arrived without loss, P reaches 1, guaranteeing that the next packet is dropped. The important thing about this part of the algorithm is that it ensures a roughly even distribution of drops over time

![[CN - Chapter 6 - Congestion Control and Resource Allocation/red fifo queue.png]]

![[CN - Chapter 6 - Congestion Control and Resource Allocation/Drop probability function for RED.png]]

<strong>Consider the setting of the two thresholds: MinThreshold and MaxThreshold</strong>

If the traffic is fairly bursty, then <font style="color: rgb(128,128,128);"><em>MinThreshold </em></font>should be sufficiently large to allow the link utilization to be maintained at an acceptably high level. Also, the difference between the two thresholds should be larger than the typical increase in the calculated average queue length in one RTT. Setting MaxThreshold to twice MinThreshold seems to be a reasonable rule of thumb given the traffic mix on today’s Internet. In addition, since we expect the average queue length to hover between the two thresholds during periods of high load, there should be enough free buffer space above <em><font style="color: rgb(128,128,128);">MaxThreshold </font></em>to absorb the natural bursts that occur in Internet traffic without forcing the router to enter <strong>tail drop</strong>

<strong>Consider the setting of the Weight Parameter</strong>

We noted above that Weight determines the time constant for the running average low-pass filter, and this gives us a clue as to how we might pick a suitable value for it. Recall that RED is trying to send signals to TCP flows by dropping packets during times of congestion. Suppose that a router drops a packet from some TCP connection and then immediately forwards some more packets from the same connection. When those packets arrive at the receiver, it starts sending duplicate ACKs to the sender. When the sender sees enough duplicate ACKs, it will reduce its window size. So, from the time the router drops a packet until the time when the same router starts to see some relief from the affected connection in terms of a reduced window size, at least one round-trip time must elapse for that connection. There is probably not much point in having the router respond to congestion on time scales much less than the round-trip time of the connections passing through it. As noted previously, 100 ms is not a bad estimate of average round-trip times in the Internet. Thus, Weight should be chosen such that (changes in queue length over time scales much less than 100 ms) are filtered out.
###### <font style="color: rgb(0,119,111);">Source-Based Congestion Avoidance</font>

<strong>Observation 1</strong>: as packet queues build up in the network’s routers, there is a measurable increase in the RTT for each successive packet it sends
###### <strong>1<sup>st</sup> Algorithm Exploiting Observation 1</strong>

the congestion window normally increases as in TCP, but every two round-trip delays the algorithm checks to see if the current RTT is greater than the average of the minimum and maximum RTTs seen so far. If it is, then the algorithm decreases the congestion window by one-eighth
###### <strong>2<sup>nd</sup> Algorithm Exploiting Observation 1</strong>

the decision as to whether or not to change <font style="color: rgb(128,128,128);"><em>CurrentWindow</em></font> is based on changes to both the RTT and <font style="color: rgb(128,128,128);"><em>CurrentWindow</em></font>

<font style="color: rgb(128,128,128);"><em>CurrentWindow</em></font> is adjusted once every 2 RTT based on the product:

<font style="color: rgb(128,128,128);"><em>(CurrentWindow − OldWindow) × (CurrentRTT − OldRTT)</em></font>

following algorithm is as follows
```
CurrentRTT = get-current-rtt()

value = (CurrentWindow − OldWindow) × (CurrentRTT − OldRTT)

OldWindow = CurrentWindow
OldRTT = CurrentRTT

if value > 0:
	CurrentWindow *= 7/8
else:
	CurrentWindow += maximum-segment-size
```

the window changes during every adjustment; that is, it oscillates around its optimal point

<strong>Observation 2</strong>: as the network approaches congestion the sending rate flattens
###### <strong>3<sup>rd</sup> Algorithm Exploiting Observation 2</strong>

every RTT, it increases the window size by 1 packet/mss and compares the throughput achieved to the throughput when the window was one packet smaller. If the difference is less than one-half the throughput achieved when only one packet was in transit—as was the case at the beginning of the connection—the algorithm decreases the window by one packet. throughput is calculated by dividing the number of bytes outstanding in the network by the RTT
```
at each round-trip time
	CurrentWindow += mss
	throughput = num-outstanding-bytes() / get-rtt()

// TODO: I don't clearly understand...
```
###### <strong>4<sup>th</sup> Algorithm (TCP Vegas) Exploiting Observation 2</strong>

similar to the 3<sup>rd</sup> algorithm in that it looks at changes in the throughput rate or, more specifically, changes in the sending rate. However, it differs from the third algorithm in the way it calculates throughput, and instead of looking for a change in the slope of the throughput it compares the measured throughput rate with an expected throughput rate. The algorithm, <strong>TCP Vegas</strong>, is not widely deployed in the Internet, but the strategy it takes continues to be studied

![[CN - Chapter 6 - Congestion Control and Resource Allocation/Congestion window versus observed throughput rate.png]]
- top graph<font style="color: rgb(29,30,101);"> - </font>traces the connection’s congestion window
- middle graph - shows the average sending rate as measured at the source
- bottom graph - shows the average queue length as measured at the bottleneck router

the period between 4.5 and 6.0 seconds (shaded region), the congestion window increases (top graph). We expect the observed throughput to also increase, but instead it stays flat (middle graph). This is because the throughput cannot increase beyond the available bandwidth. Beyond this point, any increase in the window size only results in packets taking up buffer space at the bottleneck router
###### <strong>TCP Vegas Algorithm</strong>
1. <strong>Calculate Normal/Base RTT</strong><font style="color: rgb(128,128,128);">BaseRTT</font> = the RTT of a packet when the flow is not congested. In practice, TCP Vegas uses the minimum of all measured round-trip times; it is commonly the RTT of the first packet sent by the connection, before the router queues increase due to traffic generated by this flow
2. <strong>Calculate Expected Throughput</strong> 
   <font style="color: rgb(128,128,128);">ExpectedRate = CongestionWindow / BaseRTT</font>
3. <strong>Calculate Actual Throughput</strong>
   <font style="color: rgb(128,128,128);">ActualRate</font> = is done by recording the sending time for a distinguished packet, recording how many bytes are transmitted between the time that packet is sent and when its acknowledgment is received, computing the sample RTT for the distinguished packet when its acknowledgment arrives, and dividing the number of bytes transmitted by the sample RTT. This calculation is done once per round-trip time
4. <strong>Compare ActualRate to ExpectedRate & Adjust Window Accordingly</strong>
   define two thresholds, α \< β, roughly corresponding to having too little and too much extra data in the network, respectively
    ```
    Diff = ExpectedRate − ActualRate
    
    if Diff < α:
    	// congestion window increases linearly
    	CongestionWindow++
    else if Diff > β:
    	// congestion window decreases linearly
    	CongestionWindow--
    else if α < Diff < β:
    	// CongestionWindow is left unchanged
    ```

overall goal is to keep between α and β extra bytes in the network

###### <strong>traces of the TCP Vegas congestion-avoidance algorithm </strong>
![[CN - Chapter 6 - Congestion Control and Resource Allocation/TCP Vegas.png]]

top graph - traces the congestion window

bottom graph - traces the expected and actual throughput rates
- <font style="color: rgb(51,153,102);">ExpectedRate - colored line</font>
- ActualRate - black line
- <font style="color: rgb(153,204,0);">α and β thresholds - shaded strip</font>

the goal is to keep the ActualRate between these two thresholds, within the shaded region.
- whenever <em><strong>ActualRate </strong></em><em><strong>falls</strong></em> below the shaded region (i.e., gets too far from <font style="color: rgb(51,153,102);">ExpectedRate</font>), TCP Vegas <em><strong>decreases the <font style="color: rgb(128,128,128);">CongestionWindow</font></strong></em> because it fears that too many packets are being buffered in the network
- whenever <em><strong>ActualRate </strong></em><em><strong>goes</strong></em> above the shaded region (i.e., gets too close to the <font style="color: rgb(51,153,102);">ExpectedRate</font>), TCP Vegas <em><strong>increases the <font style="color: rgb(128,128,128);">CongestionWindow</font></strong></em> because it fears that it is underutilizing the network
- whenever <em><font style="color: rgb(128,128,128);">CongestionWindow </font></em>is changed, the <font style="color: rgb(51,153,102);">ExpectedRate</font> is recalculated(<font style="color: rgb(128,128,128);"><font style="color: rgb(51,153,102);">ExpectedRate</font> = CongestionWindow / BaseRTT<font style="color: rgb(51,51,51);">)</font></font>

TCP Vegas does use multiplicative decrease when a timeout occurs; the linear decrease just described is an early decrease in the congestion window that should happen before congestion occurs and packets start being dropped
# <strong>Quality of Service (QoS)</strong>

real-time applications
- applications that are sensitive to the timeliness of data
- need some sort of assurance from the network that data is likely to arrive "on time"

### Taxonomy of Applications
- <strong>non-real-time</strong> (aka <strong>traditional data</strong> or <strong>elastic</strong>) - not concerned with the timeliness of data
- <strong>real-time</strong> - concerned with the timeliness of data
	- <strong>intolerant</strong> - cannot tolerate occasional loss/late
	- <strong>tolerant</strong> - can tolerate occasional loss/late
		- <strong>non-adaptive</strong> - cannot adapt to networks changing delay and/or bandwidth
		- <strong>adaptive</strong> - can adapt to the networks changing delay and/or bandwidth
			- <strong>rate adaptive</strong> - exchanging bitrate vs quality
			- <strong>delay adaptive</strong> - changing the playback point

![[CN - Chapter 6 - Congestion Control and Resource Allocation/taxonomy of applications.png]]
### Quality of Service Submodels

subclasses of the [[CN - Chapter 6 - Congestion Control and Resource Allocation]]:
- <strong>guaranteed service class</strong>
	- designed for intolerant applications
- <strong>controlled load service class</strong>
	- meet the needs of tolerant adaptive applications
	- uses a queuing mechanism such as [[CN - Chapter 6 - Congestion Control and Resource Allocation|weighted fair queuing (WFQ)]]to isolate controlled load traffic from the other traffic
	- uses some form of admission control to limit the total amount of controlled load traffic on a link such that the load is kept reasonably low

### Categories of QoS Model Support
- <strong>fine-grained approach</strong>
	- which provide QoS to individual applications or flows
	- [[CN - Chapter 6 - Congestion Control and Resource Allocation|Integrated Services (IntServ)]]
- <strong>coarse-grained approach</strong>
	- provides QoS to large classes of data or aggregated traffic
	- [[CN - Chapter 6 - Congestion Control and Resource Allocation|Differentiated Services (DiffServ)]]
- <strong>end-host QoS support</strong>

## <strong>Integrated Services</strong>
- a fine-grained approach that provides QoS to individual applications or flows
- defined a number of service classes to meet the needs of some of the application types
- defined how RSVP makes reservations using these service classes

### Overview of Mechanisms
- pieces involved in supporting best-effort service:
	1. just tells the network where we want the packets to go
- pieces involved in supporting real-time service:
	1. <strong>flowspec</strong> - involves telling the network about the type of service we required
		- may give:
			- qualitative information such as "use a controlled load service"
			- quantitative information such as "I need a maximum delay of 100 ms"
	2. <strong>admission control</strong> - network decides if it can provide that service at that moment
	3. <strong>resource reservation</strong> - mechanism by which the users of network and the components of network exchange information such as: requests for service, flowspec, and admission control decisions
	4. <strong>packet scheduling</strong> - managing the way packets are queued and scheduled for transmission in switches and routers

###### Flowspec

2 parts of flowspec:
- <strong>RSpec</strong> - part that describes the requested service
	- e.g. for a [[CN - Chapter 6 - Congestion Control and Resource Allocation|controlled load service]]: the application requests controlled load service with no additional parameters
	- e.g. for a [[CN - Chapter 6 - Congestion Control and Resource Allocation|guaranteed service]]: the application specifies a delay target or bound
- <strong>TSpec</strong> - part that describes the flow's traffic characteristics
	- <strong>token bucket filter</strong> - a way to describe the bandwidth characteristics of sources. contains 2 parameters:
		- token rate
		- bucket depth

![[CN - Chapter 6 - Congestion Control and Resource Allocation/Screen Shot 2019-05-05 at 9.39.15 PM.png]]
###### Admission Control
- idea of admission control: When some new flow wants to receive a particular level of service, admission control looks at the [[CN - Chapter 6 - Congestion Control and Resource Allocation|TSpec and RSpec]] of the flow and tries to decide if the desired service can be provided to that amount of traffic, given the currently available resources, without causing any previously admitted flow to receive worse service than it had requested. If it can provide the service, the flow is admitted; if not, then it is denied
- for [[CN - Chapter 6 - Congestion Control and Resource Allocation|guaranteed service]] - uses [[CN - Chapter 6 - Congestion Control and Resource Allocation|weighted fair queuing (WFQ)]]
- <strong>admission control</strong> vs <strong>policing</strong>
	- <strong>admission control</strong> - per-flow decision to admit a new flow or not
	- <strong>policing</strong> - per-packet basis to make sure that a flow conforms to the TSpec that was used to make the reservation

###### Reservation Protocol
- one implementation is the RSVP

###### RSVP
- receiver-oriented
- maintains a soft state in routers
- each receiver periodically sends refresh messages to keep the soft state in place
- In the event of a host crash, resources allocated by that host to a flow will naturally time out and be released
- 2 things that need to happen before a receiver can make the reservation:
	1. the receiver needs to know what traffic the sender is likely to send so that it can make an appropriate reservation. That is, it needs to know the sender’s TSpec.
	2. it needs to know what path the packets will follow from sender to receiver, so that it can establish a resource reservation at each router on the path
- both of these requirements can be met by sending a message from the sender to the receiver that contains the TSpec
- Having received a PATH message, the receiver sends a reservation back up the multicast tree in a RESV message. This message contains the sender’s TSpec and an RSpec describing the requirements of this receiver. Each router on the path looks at the reservation request and tries to allo- cate the necessary resources to satisfy it. If the reservation can be made, the RESV request is passed on to the next router. If not, an error message is returned to the receiver who made the request. If all goes well, the cor- rect reservation is installed at every router between the sender and the receiver. As long as the receiver wants to retain the reservation, it sends the same RESV message about once every 30 seconds
> [!list-indent-undo]
> > [!indent]
> > ![[CN - Chapter 6 - Congestion Control and Resource Allocation/Screen Shot 2019-05-05 at 9.59.37 PM.png]]

###### Packet Classifying and Scheduling
- for routers to deliver the requested service to the data packets, there are 2 things:
	- classifying packets - associate each packet with the appropriate reservation so that it can be handled correctly
	- scheduling packets - manage packets in the queues so that they receive the service that has been requested

## <strong>Differentiated Services</strong>
- a coarse-grained approach that provides QoS to classes of data or aggregated traffic
- rather than using RSVP to tell all the routers that some flow is sending premium packets, it would be better if the packets identify themselves to the router when they arrive
- with this approach, there are 2 questions:
	- who sets the premium bit and under what circumstances
		- common approach is at an administrative boundary
	- what does a router do differently when it sees a packet with the bit set
		- <strong>per-hop behaviors (PHBs)</strong> - behavior defined at individual routers rather than end-to-end services. some PHB types:
			- [[CN - Chapter 6 - Congestion Control and Resource Allocation|expedited forwarding (EF) PHB]]
			- [[CN - Chapter 6 - Congestion Control and Resource Allocation|assured forwarding (AF) PHB]]

### Expedited Forwarding (EF) PHB
- packets marked for EF treatment should be forwarded by the router with minimal delay and loss
- several possible implementations:
	- EF packets having strict priority over all other packets
	- perform [[CN - Chapter 6 - Congestion Control and Resource Allocation|weighted fair queuing (WFQ)]] between EF packets and other packets

### Assured Forwarding (AF) PHB
- similar to [[CN - Chapter 6 - Congestion Control and Resource Allocation]] with a twist: RED In and Out (RIO) or Weighted RED (WRED)
	- RED In and Out (RIO) - packets are differentiated into 2 categories: IN packets have higher priority & OUT has lower priority
	- Weighted RED (WRED) - packets can be differentiated into multiple categories
- figure 6.26 shows how RIO works. the probability on the y-axis increasing as average queue length increases along the x-axis
> [!list-indent-undo]
> > [!indent]
> > ![[CN - Chapter 6 - Congestion Control and Resource Allocation/Screen Shot 2019-05-05 at 10.35.53 PM.png]]
- the idea of RIO can be generalized to provide more than two drop probability curves, and this is the idea behind the approach known as weighted RED (WRED)

# <strong>Equation-Based Congestion Control</strong>
- several so called TCP-friendly congestion-control algorithms have been proposed. These algorithms have two main goals:
	- slowly adapt the congestion window. done by adapting over relatively longer time periods (e.g. over RTT rather than on per-packet basis)
	- being fair to competing TCP flows
