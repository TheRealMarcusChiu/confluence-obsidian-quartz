---
title: "Message Authentication Code (MAC) - Message Integrity Code (MIC)"
created: 2019-11-13T11:00:59.914-06:00
modified: 2025-12-19T23:34:35.017-06:00
parent: "[[Digital Signatures - MAC／MIC]]"
children:
  - "[[Hash-Based Message Authentication Code (HMAC)]]"
  - "[[Poly1305]]"
---
###### Message Authentication Code (MAC) - Message Integrity Code (MIC)
````excerpt
- used to ensure:
	- message authentication - the message came from the stated sender
	- message integrity - the message has not been changed
````
^excerpt

related: [[Digital Signatures - MAC／MIC|Digital Signatures - MAC/MIC]]
# Ways Generating MACs/MICs
- MAC/MIC - uses a [[Symmetric／Single／Secret Key Function|symmetric-key function]] with a cycled [[Block Cipher - Modes of Operation|mode of operation]]
- [[Hash-Based Message Authentication Code (HMAC)|Hash-Based MAC (HMAC)]] - uses a [[Secure／Keyed Cryptographic Hash Function|secure/keyed hash function]]
