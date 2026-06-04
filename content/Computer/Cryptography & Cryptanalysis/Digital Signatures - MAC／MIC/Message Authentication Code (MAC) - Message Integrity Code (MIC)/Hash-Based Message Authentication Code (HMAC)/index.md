---
title: "Hash-Based Message Authentication Code (HMAC)"
created: 2019-08-28T15:36:08.721-05:00
modified: 2025-12-19T23:35:28.870-06:00
parent: "[[Message Authentication Code (MAC) - Message Integrity Code (MIC)]]"
children: []
---
###### Hash-Based Message Authentication Code (HMAC) or Keyed-Hash Message Authentication Code
````excerpt
- is a specific type of [[Message Authentication Code (MAC) - Message Integrity Code (MIC)|message authentication code (MAC)]]involving a [[Secure／Keyed Cryptographic Hash Function|secure/keyed hash function]] (i.e. a [[Cryptographic Hash Function - Message Digest Function|cryptographic hash function]] and a secret cryptographic key)
````
^excerpt

# HMAC - Purpose
HMAC is used to simultaneously verify both:
- <strong><em>integrity</em></strong> - ensures message has not been tampered with
- <strong><em>authenticity</em></strong> - ensures message came from the stated sender

# HMAC - Algorithm (How It Works)
In the calculation of an HMAC, any [[Cryptographic Hash Function - Message Digest Function|cryptographic hash function]] (e.g. [[Message Digest (MD)|MD]] or [[Secure Hash Algorithms (SHA)|SHA]]) may be used. the resulting MAC algorithm is termed HMAC-X, where X is the hash function used (e.g. HMAC-SHA256 or HMAC-SHA3).

HMAC uses two passes of hash computation. The secret key is first used to derive two keys – inner and outer:
- 1<sup>rst</sup> pass produces an internal hash derived from the message and the inner key
- 2<sup>nd</sup> pass produces the final HMAC code derived from the inner hash result and the outer key
