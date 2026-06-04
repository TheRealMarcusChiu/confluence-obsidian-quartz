---
title: "Secure／Keyed Cryptographic Hash Function"
created: 2019-08-28T15:25:18.348-05:00
modified: 2025-12-19T23:31:55.151-06:00
parent: "[[Cryptography & Cryptanalysis]]"
children: []
---
###### Secure/Keyed Hash Function
````excerpt
- utilizes a [[Cryptographic Hash Function - Message Digest Function|cryptographic hash function]] and a secret cryptographic key for either:
	- [[Encryption|encryption]] - for message <em>confidentiality</em>
	- [[Hash-Based Message Authentication Code (HMAC)|HMAC]] - for message <em>authenticity/integrity (HMAC is a hash-based form of [[Message Authentication Code (MAC) - Message Integrity Code (MIC)|MAC/MIC]])</em>
- secure hash functions generating [[Hash-Based Message Authentication Code (HMAC)|HMACs]] could be used in place of "[[Digital Signatures|digital signatures]]", but does not protect against <strong>non-repudiation</strong> (where 1 of the 2 parties that share the same key could secretly sign a message and say it was signed from the other)
````
^excerpt
