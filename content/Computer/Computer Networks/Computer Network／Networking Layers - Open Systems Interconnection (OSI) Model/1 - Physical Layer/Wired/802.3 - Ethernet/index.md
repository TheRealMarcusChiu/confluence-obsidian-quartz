---
title: "802.3 - Ethernet"
created: 2019-03-16T20:23:44.061-05:00
modified: 2022-09-11T14:19:24.031-05:00
parent: "[[Wired]]"
children:
  - "[[Ethernet - Cables (CAT 5E／6／6E／6A／7／8 - Crossover)]]"
  - "[[Ethernet - Frame Format]]"
  - "[[Ethernet - Media Access Control (MAC) Address - Physical Hardware Address]]"
  - "[[Ethernet - Speed]]"
---
###### Ethernet
- is a system for connecting a number of computer systems to form a local area network, with protocols to control the passing of information and to avoid simultaneous transmission by two or more systems
- is both a [[1 - Physical Layer|Layer 1]] & [[2 - Data Link Layer|Layer 2]] protocol
- uses <strong>[CSMA/CD](http://doc.marcuschiu.com/log-page/5c6e08e0154cee28cd8f4082), </strong>however <strong>E</strong><strong>thernet</strong> links are largely <em>point-to-point</em> now (one host to an ethernet [[Network Switch|switch]] and/or interconnected switches). Therefore, CSMA/CD is largely obsolete because of separate <em>collision domains</em>

# Physical Properties
- using coaxial cable, twisted copper pairs, or optical fibers - [cable types](https://planetechusa.com/blog/ethernet-different-ethernet-categories-cat3-vs-cat5e-vs-cat6-vs-cat6a-vs-cat7-vs-cat8/)
- <strong>transceiver</strong> - device able to transmit and receive signals
- <strong>ethernet adaptor</strong> mediator between <em>transceiver</em> and host
- <strong>repeater</strong> - device that forward signals
- <strong>hub</strong> - a multiway <em>repeater</em> - repeats what it hears on one port and outputs to all other ports
- 4b/5b encoding is used in original specifications
- 8b/10b encoding is used on higher speed ethernet

# Media Access Control (MAC)
- MAC is an algorithm that controls access to shared Ethernet link
- implemented in the hardware of <em>[[Network Interface Controller／Card (NIC) - Network Adapter - LAN Adapter - Physical Network Interface|network adaptor]]</em>

# Frame Format
[[Ethernet - Frame Format]]
# MAC Address
[[Ethernet - Media Access Control (MAC) Address - Physical Hardware Address]]
# Transmitter Algorithm
- if the link is idle, send the frame immediately
- if the link is busy, wait until idle then send immediately. this is called [1-persistent protocol](http://doc.marcuschiu.com/log-page/5c6e08e0154cee28cd8f4082)
- if a collision is detected, send 96-bits: 64-bit preamble + 32-bit jamming sequence
- each time transmit fails, the adaptor waits <em>exponential backoff</em> and then tries again
	- fail 1: randomly wait for either 0, 51.2μs
	- fail 2: randomly wait for either 0, 51.2μs, 102.4μs
	- fail 3: randomly wait for either 0, 51.2μs, 102.4μs, 153.6μs
	- etc, typically up to 16 times
	- <code>wait-time = rand(0, 2ᵏ-1) \* unit-wait-time</code>

# Experience with Ethernet
- usually fewer than 200 hosts instead of a maximum of 1024
- usually shorter round-trip delay of 5μs instead of 51.2μs
