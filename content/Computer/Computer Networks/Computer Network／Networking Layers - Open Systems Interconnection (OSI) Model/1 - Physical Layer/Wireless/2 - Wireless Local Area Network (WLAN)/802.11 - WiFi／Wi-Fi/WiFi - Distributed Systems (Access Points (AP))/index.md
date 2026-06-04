---
title: "WiFi - Distributed Systems (Access Points (AP))"
created: 2019-10-02T10:50:52.958-05:00
modified: 2019-12-03T22:41:08.012-06:00
parent: "[[802.11 - WiFi／Wi-Fi]]"
children: []
---
### Distributed System (Access Points)
- nearly all 802.11 specifications uses a base-station-oriented topology
- 802.11s - specifies a standard for mesh networks
	- instead of all nodes being equal, some nodes are allowed to roam
	- <strong>access points (APs)</strong> - are connected to each other by a distributed system
- <strong>scanning</strong> - technique in selecting an AP involves 4 steps
	- the node sends a <em>Probe</em> frame
	- all APs within reach replies with a <em>Probe Response</em> frame
	- the node selects one of the APs and sends it an <em>Association Request</em> frame
	- the AP replies with an <em>Association Response</em> frame
- nodes <em>scans</em> whenever it
	- joins the network
	- becomes unhappy with current AP
- APs also periodically sends a <em>Beacon</em> frame
- <strong>active scanning</strong> - node actively searches for AP
- <strong>passive scanning</strong> - node can change AP based on the <em>Beacon</em> frame simply by sending an <em>Association Request</em> frame back to the AP

### APs Type
- <strong>Thick AP</strong> – handles encryption and overall management of client devices connected to it
- <strong>Thin AP</strong> – processing of encryption and policy setting occurs in a centralized switch/controller
