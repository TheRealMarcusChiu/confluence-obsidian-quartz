---
title: "Carrier Sense Multiple Access"
created: 2019-03-17T00:24:02.064-05:00
modified: 2019-03-17T00:28:12.191-05:00
parent: "[[CN - Chapter 2 - Getting Connected]]"
children: []
---
## Carrier Sense Multiple Access (CSMA)
- <strong>CSMA</strong> is a media access control (MAC) protocol in which a node verifies the absence of other traffic before transmitting on a shared link
- <strong>collision domain</strong> - a network segment where data transmissions can collide due to hosts competing for access of the same link
- <strong>multiple access</strong> - allowing many nodes to share same link, while handling the competition for link in a <em>collision domain</em>
- <strong>carrier sense</strong> - the ability that all nodes can distinguish between idle and busy link
- <strong>CSMA access modes:</strong>
	- <strong>1-persistent</strong>
		- an aggressive transmission algorithm
		- when the transmitting node is ready to transmit, it senses the transmission medium for idle or busy. If idle, then it transmits immediately. If busy, then it senses the transmission medium continuously until it becomes idle, then transmits the message (a frame) unconditionally (i.e. with probability=1). In case of a collision, the sender waits for a random period of time and attempts the same procedure again.
		- 1-persistent CSMA is used in [[802.3 - Ethernet|Ethernet]], with exponential-backoff during collisions
	- <strong>non-persistent</strong>
		- a non aggressive transmission algorithm
		- when the transmitting node is ready to transmit data, it senses the transmission medium for idle or busy. If idle, then it transmits immediately. If busy, then it waits for a random period of time (during which it does not sense the transmission medium) before repeating the whole logic cycle (which started with sensing the transmission medium for idle or busy) again. This approach reduces collision, results in overall higher medium throughput but with a penalty of longer initial delay compared to 1–persistent
	- <strong>p-persistent</strong>
		- an approach between 1-persistent and non-persistent CSMA access modes
		- when the transmitting node is ready to transmit data, it senses the transmission medium for idle or busy. If idle, then it transmits immediately. If busy, then it senses the transmission medium continuously until it becomes idle, then transmits with probability p. If the node does not transmit (the probability of this event is 1-p), it waits until the next available time slot. If the transmission medium is not busy, it transmits again with the same probability p. This probabilistic hold-off repeats until the frame is finally transmitted or when the medium is found to become busy again (i.e. some other node has already started transmitting). In the latter case the node repeats the whole logic cycle (which started with sensing the transmission medium for idle or busy) again.
		- p-persistent CSMA is used in CSMA/CA systems including [Wi-Fi](http://doc.marcuschiu.com/log-page/5b0db0cd154cee0e194971fd) and other packet radio systems
	- <strong>o-persistent</strong>
		- each node is assigned a transmission order by a supervisory node
		- when the transmission medium goes idle, nodes wait for their time slot in accordance with their assigned transmission order. The node assigned to transmit first transmits immediately. The node assigned to transmit second waits one time slot (but by that time the first node has already started transmitting). Nodes monitor the medium for transmissions from other nodes and update their assigned order with each detected transmission (i.e. they move one position closer to the front of the queue).
		- O-persistent CSMA is used by CobraNet, LonWorks and the controller area network (CAN)

## CSMA Protocol Modifications
- <strong>CSMA with Collision Detection</strong>
	- <strong>collision detect</strong> - nodes listens for collisions as it transmits frame
	- used in [[802.3 - Ethernet|Ethernet]]
- <strong>CSMA with Collision Avoidance</strong>
	- <strong>collision avoidance</strong> - nodes avoid collisions whenever transmitting frame
	- used in [[802.11 - WiFi／Wi-Fi|WiFi]]
- <strong>CSMA with Collision Resolution</strong>
	- used in <em>Controller Area Network (CAN)</em>
- <strong>Virtual time CSMA</strong>
	- used in real-time systems
