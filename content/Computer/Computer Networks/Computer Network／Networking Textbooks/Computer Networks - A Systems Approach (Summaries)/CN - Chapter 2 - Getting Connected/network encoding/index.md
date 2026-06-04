---
title: "network encoding"
created: 2019-03-17T00:12:17.874-05:00
modified: 2019-03-17T00:26:41.141-05:00
parent: "[[CN - Chapter 2 - Getting Connected]]"
children: []
---
## Encoding Types
- <strong>NRZ (Non-Return to Zero)</strong>
	- simply encode (1 as high) and (0 as low)
- <strong>NRZI (Non-Return to Zero Inverted)</strong>
	- encode (1 as signal transition) and (0 as NO signal transition)
- <strong>Manchester</strong>
	- encode (1 as high-to-low transition) and (0 as low-to-high transition)
	- in order to send the same bits-per-second as NRZ/NRZI it requires double the <em>baud rate</em>
- <strong>4B/5B</strong>
	- addresses inefficiency of manchester encoding by mapping a sequence of 4-bits data to 5-bits

![[network encoding/1.png]]
