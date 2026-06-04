---
title: "network - reliable delivery"
created: 2019-03-17T00:23:32.798-05:00
modified: 2019-03-17T00:27:29.106-05:00
parent: "[[CN - Chapter 2 - Getting Connected]]"
children: []
---
<strong>reliable transmission</strong> is accomplished using a combination of two fundamental mechanisms:
- <strong>acknowledgments</strong> - small control frame sent back from receiver to sender saying it has received the frame
- <strong>timeouts</strong> - the action of sender waiting a reasonable amount of time to receive acknowledgement, otherwise retransmit the frame

### ARQ (Automatic Repeat Request)
- types of ARQ algorithms
	- <strong>stop-and-wait</strong>
	- <strong>sliding window</strong>
		- go back n
		- selective acknowledgements
	- <strong>concurrent logical channels</strong>

### Stop-and-Wait
- after transmitting one frame, the sender waits for acknowledgement before sending the next frame
- if acknowledgement does not arrive after a certain period of time, the sender timeout and retransmit the original frame
- <strong>problem:</strong> suppose sender sends frame and receiver acknowledges it, but the acknowledgment lost. The sender times out and retransmits the original frame, but the receiver will think that it is the next frame, since it correctly received and acknowledged the first frame
- <strong>solution:</strong> include a 1-bit sequence number that takes on the values 0 or 1

### Sliding Window
- sliding window protocol can be used to serve 3 roles
	- reliably deliver frames across an unreliable link
	- preserve order of frames transmitted and received
	- support flow control - a feedback by receiver to sender
- <strong>Go Back N - How It Works</strong>
	- the sender assigns a <strong>sequence number</strong> to each frame
	- sender maintains 3 variables
		- SWS (send window size) - upper bound on number of unacknowledged frames that the sender can transmit
		- LAR - sequence number of the <em>last acknowledged frame</em>
		- LFS - sequence number of the <em>last frame sent</em>
	- sender maintains the invariant
		- LFS - LAR \<= SWS
	- receiver maintains 3 variables
		- RWS (receiver window size) - upper bound on number of out-of-order frames that the receiver is willing to accept
		- LAF - sequence number of the <em>largest acceptable frame</em>
		- LFR - sequence number of the <em>last frame received</em>
	- receiver maintains the invariant
		- LAF - LFR \<= RWS
	- to avoid problems: <em>SWS \< MaxSeqNum</em>
	- <em>MaxSeqNum</em> is the number of available sequence numbers
- <strong>Selective Acknowledgements</strong>
	- a variant of <em>sliding window</em> where the receiver acknowledges the frames received rather than just the highest numbered frame received in order
	- SWS = is selected according to how many frames we want to have outstanding on the link at a given time
	- RWS = from 1 to SWS
	- to avoid problems: <em>SWS \< (MaxSeqNum + 1)/2</em> when <em>SWS = RWS</em>

### Concurrent Logical Channels (ARPANET protocol)
- idea: multiplex several logical channels onto a single point-to-point link and to run the <em>stop-and-wait</em> algorithm on each of these logical channels
- consequence of this approach:
	- frames sent are not kept in order
	- implies nothing about <em>flow control</em>
