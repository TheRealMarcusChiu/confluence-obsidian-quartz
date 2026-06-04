---
title: "Border Router - BGP Speaker"
created: 2019-11-20T22:19:32.611-06:00
modified: 2019-11-20T22:19:51.115-06:00
parent: "[[Border Gateway Protocol (BGP)]]"
children: []
---
each [[Autonomous System (AS) - Domain|Autonomous System (AS)]] must have one or more<em> Border Router(s)</em> and one or more <em>BGP Speaker(s)</em>:
- <strong>Border Routers (Gateways)</strong>
	- Border Routers are routers where packets enter and leave the AS
- <strong>BGP Speakers</strong>
	- BGP Speakers are routers that speaks [[External BGP (eBGP)|eBGP]] to other BGP speakers in another autonomous system
	- if topology is not changed, BGP speaker sends an occasional <em>keepalive</em> message

it's common for <em>Border Routers</em> to be <em>BGP speakers</em> (and vice versa)
