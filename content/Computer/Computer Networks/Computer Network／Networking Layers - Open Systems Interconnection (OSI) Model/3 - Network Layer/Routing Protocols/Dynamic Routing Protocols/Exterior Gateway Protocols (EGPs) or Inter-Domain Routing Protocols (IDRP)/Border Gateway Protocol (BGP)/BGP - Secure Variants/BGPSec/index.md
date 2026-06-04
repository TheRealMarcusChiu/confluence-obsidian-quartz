---
title: "BGPSec"
created: 2019-11-22T13:39:54.141-06:00
modified: 2019-11-22T13:54:06.462-06:00
parent: "[[BGP - Secure Variants]]"
children: []
---
<strong>BGPSec</strong>:
- provides route path validation
- [[Autonomous System (AS) - Domain|autonomous systems]] on the path sign outgoing BGP updates
- signatures covers:
	- netowkr-prefix
	- ASPATH
	- ASN of neighbor receiving this update
- BGP update also includes all signatures accumulated on the path

### BGPSec Example
![[BGPSec/prefix-hijacking-example.png|500]]

BGP updates carry accumulated signatures

![[BGPSec/BGPSec.png|553x250]]
### BGPSec Benefits and Challenges

benefits:
- no path alteration/shortening attacks

challenges:
- Require online crypto to produce/verify signatures
- Transition to BGPSec
	- Full path verification requires all [[Autonomous System (AS) - Domain|Autonomous Systems]] on the path to sign the BGP update
	- Incentive challenge: Given an expensive BGPSec secured path vs a cheap non-secured path, which one to choose?
